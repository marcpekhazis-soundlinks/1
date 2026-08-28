/*
 * Pure game logic for the "Word Invaders" shooter tab — no DOM, no audio, no
 * localStorage. Everything that touches the browser (speech, timers,
 * rendering, the WORDS array itself) stays in phonics-app.js; this module
 * only holds the parts worth unit-testing in isolation: which words go in
 * a round, how many cards a level shows at once, what happens after a
 * shot, and where a coin/obstacle is allowed to spawn without overlapping
 * a word-card.
 *
 * Loaded as a plain script (window global) in the browser and via
 * module.exports in Node for tests — same dual-load pattern as
 * phoneme-match.js / word-run-logic.js.
 */
(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.WordInvadersLogic = factory();
  }
})(typeof window !== 'undefined' ? window : globalThis, function () {
  var WORDS_PER_ROUND = 4;
  var ROUNDS_PER_LEVEL = 3;
  var STARTING_LIVES = 3;

  // A correct hit is worth more than a bonus coin so the word itself stays
  // the main point of the game — coins are a nice-to-have, not the goal.
  var WORD_POINTS = 10;
  var COIN_POINTS = 5;

  // Level 1 shows 2 simultaneous word-cards (1 correct + 1 distractor);
  // level 2 raises it to 3 — the only other level knob (word/round/life
  // counts stay fixed across both), same "vary count/speed, not lanes"
  // shape the spec asked for.
  var LEVELS = [
    { level: 1, cards: 2 },
    { level: 2, cards: 3 },
  ];

  function levelConfig(level) {
    for (var i = 0; i < LEVELS.length; i++) {
      if (LEVELS[i].level === level) return LEVELS[i];
    }
    return null;
  }

  // Word pool: only words with a real image (never the .svg fallback) so
  // every card in the game shows an actual photo — same rule Word Run and
  // Memory Match's photo-only cards used, just drawn from every sound
  // group instead of one.
  function filterImageWords(words) {
    return (words || []).filter(function (word) {
      return word && !word.archived && !!word.image;
    });
  }

  // Fisher-Yates-sampled, first `count` items — same algorithm as
  // phonics-app.js's shuffle(), just taking an injectable `random` (default
  // Math.random) so tests can get deterministic output instead of a fresh
  // random draw every run.
  function pickRandom(list, count, random) {
    var rand = random || Math.random;
    var arr = (list || []).slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr.slice(0, count);
  }

  // One word's wave of cards: the correct word plus up to (cardCount - 1)
  // distractors drawn from distractorPool (which should already exclude
  // correctItem), shuffled together so the correct card is never
  // predictably in the same slot. Returns fewer than cardCount entries
  // only if the pool genuinely doesn't have enough distractors to fill it.
  function buildWave(correctItem, distractorPool, cardCount, random) {
    var distractors = pickRandom(distractorPool, Math.max(0, cardCount - 1), random);
    var options = [{ item: correctItem, correct: true }].concat(
      distractors.map(function (item) { return { item: item, correct: false }; })
    );
    return pickRandom(options, options.length, random);
  }

  // The core round/level state machine: given where the player is
  // (wordIndex/round/lives) and whether the word was resolved correctly —
  // the correct card shot, as opposed to a wrong card shot or the correct
  // card reaching the ship unshot — decides what happens next. Deliberately
  // knows nothing about words, images, or timers, just the numbers, so
  // it's fully testable on its own. Identical shape to Word Run's version
  // of this function since the round/level rules are the same:
  //   - lives hit 0            -> 'round-failed' (caller restarts the SAME
  //                                round, same 4 words, fresh card draws)
  //   - more words left        -> 'next-word'
  //   - round's last word, and
  //     more rounds left       -> 'round-complete' (fresh 4 words)
  //   - final round's last word -> 'level-complete'
  // A wrong/missed word that doesn't zero lives still advances to the next
  // word — only 0 lives sends the player back to the start of the round.
  function advanceAfterWord(progress, correct, config) {
    var wordsPerRound = (config && config.wordsPerRound) || WORDS_PER_ROUND;
    var roundsPerLevel = (config && config.roundsPerLevel) || ROUNDS_PER_LEVEL;
    var lives = correct ? progress.lives : progress.lives - 1;
    if (lives <= 0) {
      return { outcome: 'round-failed', lives: 0 };
    }
    if (progress.wordIndex + 1 < wordsPerRound) {
      return { outcome: 'next-word', wordIndex: progress.wordIndex + 1, lives: lives };
    }
    if (progress.round + 1 > roundsPerLevel) {
      return { outcome: 'level-complete', lives: lives };
    }
    return { outcome: 'round-complete', round: progress.round + 1, lives: lives };
  }

  // What shooting a given kind of descending item resolves to. Word/coin
  // hits are pure feedback (the caller still runs the shot word through
  // advanceAfterWord() separately); an obstacle just wastes the shot — no
  // score change, no life lost, the simplest of the two options the spec
  // left open.
  function resolveHit(kind, correct) {
    if (kind === 'word') {
      return correct ? { outcome: 'correct', scoreDelta: WORD_POINTS } : { outcome: 'wrong', scoreDelta: 0 };
    }
    if (kind === 'coin') return { outcome: 'bonus', scoreDelta: COIN_POINTS };
    return { outcome: 'blocked', scoreDelta: 0 };
  }

  // The minimum center-to-center distance (in percent-of-field) two items
  // need to never overlap, given each one's own width — half of each
  // item's width, plus a real visible margin between their edges. Pulled
  // out as its own function so the formula only lives in one place.
  function computeMinGapPercent(widthAPercent, widthBPercent, marginPercent) {
    return widthAPercent / 2 + widthBPercent / 2 + marginPercent;
  }

  // Finds an x position (percent-of-field) at least minGapPercent away from
  // every entry in occupiedX, scanning the field in `step`-sized increments
  // between `min` and `max`. Used to place a coin/obstacle where it can
  // never visually overlap a word-card (or another coin/obstacle) that's
  // already spawned or about to spawn — see phonics-app.js's
  // wordInvadersSpawnWave(). Returns null when no such position exists
  // (the caller should simply skip spawning rather than crowd one in
  // anyway); `random` defaults to Math.random but is injectable for tests.
  function pickClearX(occupiedX, minGapPercent, options) {
    var opts = options || {};
    var min = opts.min == null ? 6 : opts.min;
    var max = opts.max == null ? 94 : opts.max;
    var step = opts.step || 2;
    var rand = opts.random || Math.random;
    var occupied = occupiedX || [];
    var candidates = [];
    for (var x = min; x <= max; x += step) {
      var clear = occupied.every(function (ox) { return Math.abs(x - ox) >= minGapPercent; });
      if (clear) candidates.push(x);
    }
    if (!candidates.length) return null;
    return candidates[Math.floor(rand() * candidates.length)];
  }

  // Whether `level` should be reachable given which earlier levels'
  // badges are already earned — same "first level is always open, every
  // level after needs the one before it done" shape as the Learn tab's
  // isLevelUnlocked()/Word Run's, just against this game's own level list.
  // `isBadgeEarnedForLevel` is a callback (level) => bool so this stays
  // decoupled from how/where badge ids are stored.
  function isLevelUnlocked(level, isBadgeEarnedForLevel) {
    var index = -1;
    for (var i = 0; i < LEVELS.length; i++) {
      if (LEVELS[i].level === level) { index = i; break; }
    }
    if (index <= 0) return true;
    return !!isBadgeEarnedForLevel(LEVELS[index - 1].level);
  }

  return {
    WORDS_PER_ROUND: WORDS_PER_ROUND,
    ROUNDS_PER_LEVEL: ROUNDS_PER_LEVEL,
    STARTING_LIVES: STARTING_LIVES,
    WORD_POINTS: WORD_POINTS,
    COIN_POINTS: COIN_POINTS,
    LEVELS: LEVELS,
    levelConfig: levelConfig,
    filterImageWords: filterImageWords,
    pickRandom: pickRandom,
    buildWave: buildWave,
    advanceAfterWord: advanceAfterWord,
    resolveHit: resolveHit,
    computeMinGapPercent: computeMinGapPercent,
    pickClearX: pickClearX,
    isLevelUnlocked: isLevelUnlocked,
  };
});

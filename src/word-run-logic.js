/*
 * Pure game logic for the "Word Run" lane-runner tab — no DOM, no audio, no
 * localStorage. Everything that touches the browser (speech, timers,
 * rendering, the WORDS array itself) stays in phonics-app.js; this module
 * only holds the parts worth unit-testing in isolation: which words go in
 * a round, how many lanes a level has, what happens after a pick, and
 * whether a coin/obstacle was avoided.
 *
 * Loaded as a plain script (window global) in the browser and via
 * module.exports in Node for tests — same dual-load pattern as
 * phoneme-match.js.
 */
(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.WordRunLogic = factory();
  }
})(typeof window !== 'undefined' ? window : globalThis, function () {
  var WORDS_PER_ROUND = 4;
  var ROUNDS_PER_LEVEL = 3;
  var STARTING_LIVES = 3;

  // Level 1 is a two-lane pick, Level 2 raises it to three — the only
  // other level knob (word/round/life counts stay fixed across both).
  var LEVELS = [
    { level: 1, lanes: 2 },
    { level: 2, lanes: 3 },
  ];

  function levelConfig(level) {
    for (var i = 0; i < LEVELS.length; i++) {
      if (LEVELS[i].level === level) return LEVELS[i];
    }
    return null;
  }

  // Word pool: only words with a real image (never the .svg fallback) so
  // every lane in the game shows an actual photo, matching Memory Match's
  // "photos only" rule — just drawn from every sound group instead of one.
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

  // One word's lane options: the correct word plus up to (laneCount - 1)
  // distractors drawn from distractorPool (which should already exclude
  // correctItem), shuffled together so the correct lane is never
  // predictably in the same position. Returns fewer than laneCount entries
  // only if the pool genuinely doesn't have enough distractors to fill it.
  function buildLaneOptions(correctItem, distractorPool, laneCount, random) {
    var distractors = pickRandom(distractorPool, Math.max(0, laneCount - 1), random);
    var options = [{ item: correctItem, correct: true }].concat(
      distractors.map(function (item) { return { item: item, correct: false }; })
    );
    return pickRandom(options, options.length, random);
  }

  // The core round/level state machine: given where the player is
  // (wordIndex/round/lives) and whether their pick was correct, decides
  // what happens next. Deliberately knows nothing about words, images, or
  // timers — just the numbers — so it's fully testable on its own.
  //   - lives hit 0            -> 'round-failed' (caller restarts the SAME
  //                                round, same 4 words, fresh lane draws)
  //   - more words left        -> 'next-word'
  //   - round's last word, and
  //     more rounds left       -> 'round-complete' (fresh 4 words)
  //   - final round's last word -> 'level-complete'
  // A wrong pick that doesn't zero lives still advances to the next word —
  // only 0 lives sends the player back to the start of the round.
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

  // A lane-type obstacle (hazard.avoid is null) is avoided by simply not
  // being in that lane; a jump/duck obstacle (hazard.avoid is 'jump' or
  // 'duck') is avoided only by actively doing that at the moment it's
  // checked, regardless of lane.
  function isObstacleAvoided(hazard, player) {
    if (hazard.avoid === 'jump') return !!player.jumping;
    if (hazard.avoid === 'duck') return !!player.ducking;
    return player.lane !== hazard.lane;
  }

  // Coins only ever occupy one lane (no jump/duck coins) and never
  // penalize a miss — this is purely "was the player in the right lane".
  function isCoinCollected(coin, player) {
    return player.lane === coin.lane;
  }

  // Whether `level` should be reachable given which earlier levels'
  // badges are already earned — same "first level is always open, every
  // level after needs the one before it done" shape as the Learn tab's
  // isLevelUnlocked(), just against this game's own level list instead of
  // a sound group's. `isBadgeEarnedForLevel` is a callback (level) => bool
  // so this stays decoupled from how/where badge ids are stored.
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
    LEVELS: LEVELS,
    levelConfig: levelConfig,
    filterImageWords: filterImageWords,
    pickRandom: pickRandom,
    buildLaneOptions: buildLaneOptions,
    advanceAfterWord: advanceAfterWord,
    isObstacleAvoided: isObstacleAvoided,
    isCoinCollected: isCoinCollected,
    isLevelUnlocked: isLevelUnlocked,
  };
});

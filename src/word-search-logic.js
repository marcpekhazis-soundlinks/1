/*
 * Pure game logic for the "Word Search" Fun Zone game — no DOM, no audio,
 * no localStorage. Everything that touches the browser (speech, timers,
 * rendering, the WORDS array itself) stays in phonics-app.js; this module
 * only holds the parts worth unit-testing in isolation: which words a
 * level can use, how a grid gets built and filled, whether a clicked
 * letter sequence actually traces a word, and the round/level state
 * machine.
 *
 * Loaded as a plain script (window global) in the browser and via
 * module.exports in Node for tests — same dual-load pattern as
 * word-invaders-logic.js.
 */
(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.WordSearchLogic = factory();
  }
})(typeof window !== 'undefined' ? window : globalThis, function () {
  var ROUNDS_PER_LEVEL = 3;

  // Grid size, word count, and time budget all grow together — the only
  // other knob a word search puzzle really has. Levels stay small in
  // count (like Word Invaders' 2) since a bigger grid alone already
  // meaningfully raises the difficulty each step.
  var LEVELS = [
    { level: 1, gridSize: 6, wordCount: 3, seconds: 45 },
    { level: 2, gridSize: 8, wordCount: 4, seconds: 60 },
    { level: 3, gridSize: 10, wordCount: 5, seconds: 75 },
  ];

  // Only 3 direction vectors — right, down, and down-right diagonal —
  // per the spec's "never backwards or right-to-left/bottom-to-top".
  // {dr, dc} is the per-step row/column delta a placed word walks.
  var DIRECTIONS = [
    { dr: 0, dc: 1 }, // left-to-right
    { dr: 1, dc: 0 }, // top-to-bottom
    { dr: 1, dc: 1 }, // diagonal, top-left to bottom-right
  ];

  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function levelConfig(level) {
    for (var i = 0; i < LEVELS.length; i++) {
      if (LEVELS[i].level === level) return LEVELS[i];
    }
    return null;
  }

  // A word can only go in the grid it's given to (no scrolling/paging),
  // so anything longer than the grid's side is simply never eligible for
  // that level — same idea as Word Invaders' filterImageWords(), just
  // filtering on length instead of having an image.
  function filterWordPool(words, gridSize) {
    return (words || []).filter(function (word) {
      return word && !word.archived && word.word && word.word.length <= gridSize;
    });
  }

  // Fisher-Yates-sampled, first `count` items — identical algorithm to
  // word-invaders-logic.js's pickRandom(), duplicated rather than shared
  // since these two modules don't otherwise depend on each other.
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

  // Attempts to place every word in `words` (plain strings, already
  // upper-cased by the caller) into a gridSize x gridSize grid, walking
  // only the 3 forward DIRECTIONS, letting a placement reuse a cell only
  // when the existing letter there already matches (real word-search
  // crossings), then fills every still-empty cell with a random letter.
  // Returns { cells, placements } — `cells` a gridSize x gridSize array
  // of single letters, `placements` a map of word -> ordered [{row,col}]
  // — or null if some word couldn't be placed after `maxAttemptsPerWord`
  // tries on this layout (the caller should retry with a fresh grid, or
  // a different/smaller word set — see startWordSearchRound() in
  // phonics-app.js).
  function buildPuzzle(words, gridSize, random, maxAttemptsPerWord) {
    var rand = random || Math.random;
    var attempts = maxAttemptsPerWord || 60;
    var cells = [];
    for (var r = 0; r < gridSize; r++) cells.push(new Array(gridSize).fill(null));
    var placements = {};
    var ordered = (words || []).slice().sort(function (a, b) { return b.length - a.length; });

    for (var w = 0; w < ordered.length; w++) {
      var word = ordered[w];
      var placed = false;
      for (var tries = 0; tries < attempts && !placed; tries++) {
        var dir = DIRECTIONS[Math.floor(rand() * DIRECTIONS.length)];
        var maxRow = dir.dr ? gridSize - word.length : gridSize - 1;
        var maxCol = dir.dc ? gridSize - word.length : gridSize - 1;
        if (maxRow < 0 || maxCol < 0) continue;
        var row = Math.floor(rand() * (maxRow + 1));
        var col = Math.floor(rand() * (maxCol + 1));
        var path = [];
        var fits = true;
        for (var i = 0; i < word.length; i++) {
          var cr = row + dir.dr * i, cc = col + dir.dc * i;
          var existing = cells[cr][cc];
          if (existing !== null && existing !== word[i]) { fits = false; break; }
          path.push({ row: cr, col: cc });
        }
        if (!fits) continue;
        for (var p = 0; p < path.length; p++) cells[path[p].row][path[p].col] = word[p];
        placements[word] = path;
        placed = true;
      }
      if (!placed) return null;
    }

    for (var r2 = 0; r2 < gridSize; r2++) {
      for (var c2 = 0; c2 < gridSize; c2++) {
        if (cells[r2][c2] === null) cells[r2][c2] = ALPHABET[Math.floor(rand() * ALPHABET.length)];
      }
    }
    return { cells: cells, placements: placements };
  }

  // Whether a clicked {row,col} sequence traces `placement` exactly, in
  // order — same length, same cells, same order. A partial (shorter)
  // selection is never "correct", only ever still in progress; the
  // caller (onWordSearchCellClick in phonics-app.js) only calls this once
  // selection.length === placement.length.
  function isSelectionCorrect(selection, placement) {
    if (!selection || !placement || selection.length !== placement.length) return false;
    for (var i = 0; i < placement.length; i++) {
      if (selection[i].row !== placement[i].row || selection[i].col !== placement[i].col) return false;
    }
    return true;
  }

  // The round/level state machine: given how many rounds have been won
  // so far in the current level (after the round that just completed),
  // decides whether there's another round in this level or the level
  // itself is done. Deliberately as small as word-invaders-logic's
  // advanceAfterWord() — same shape, same reason (testable on its own,
  // knows nothing about grids or timers).
  function advanceAfterRound(roundsWon, roundsPerLevel) {
    var target = roundsPerLevel || ROUNDS_PER_LEVEL;
    return roundsWon >= target ? 'level-complete' : 'round-complete';
  }

  // Same "first level always open, every level after needs the one
  // before it done" shape as Word Invaders' isLevelUnlocked(), against
  // this game's own level list.
  function isLevelUnlocked(level, isBadgeEarnedForLevel) {
    var index = -1;
    for (var i = 0; i < LEVELS.length; i++) {
      if (LEVELS[i].level === level) { index = i; break; }
    }
    if (index <= 0) return true;
    return !!isBadgeEarnedForLevel(LEVELS[index - 1].level);
  }

  return {
    ROUNDS_PER_LEVEL: ROUNDS_PER_LEVEL,
    LEVELS: LEVELS,
    DIRECTIONS: DIRECTIONS,
    levelConfig: levelConfig,
    filterWordPool: filterWordPool,
    pickRandom: pickRandom,
    buildPuzzle: buildPuzzle,
    isSelectionCorrect: isSelectionCorrect,
    advanceAfterRound: advanceAfterRound,
    isLevelUnlocked: isLevelUnlocked,
  };
});

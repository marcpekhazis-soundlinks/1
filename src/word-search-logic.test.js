const test = require('node:test');
const assert = require('node:assert/strict');
const WordSearchLogic = require('./word-search-logic.js');

function seededRandom(sequence) {
  let i = 0;
  return () => sequence[i++ % sequence.length];
}

test('filterWordPool keeps only non-archived words that fit the grid', () => {
  const words = [
    { word: 'cake' },
    { word: 'archived', archived: true },
    { word: 'toolongforthisgrid' },
  ];
  const result = WordSearchLogic.filterWordPool(words, 6);
  assert.deepEqual(result.map((w) => w.word), ['cake']);
});

test('filterWordPool tolerates a missing/undefined list', () => {
  assert.deepEqual(WordSearchLogic.filterWordPool(undefined, 6), []);
});

test('filterWordPool keeps a word exactly as long as the grid', () => {
  const words = [{ word: 'sixsix' }]; // 6 letters
  assert.equal(WordSearchLogic.filterWordPool(words, 6).length, 1);
});

test('pickRandom returns the requested count with no duplicates', () => {
  const list = [1, 2, 3, 4, 5];
  const picked = WordSearchLogic.pickRandom(list, 3, Math.random);
  assert.equal(picked.length, 3);
  assert.equal(new Set(picked).size, 3);
});

test('DIRECTIONS only ever moves right, down, or down-right — never backwards', () => {
  WordSearchLogic.DIRECTIONS.forEach((dir) => {
    assert.ok(dir.dr >= 0 && dir.dc >= 0, `direction ${JSON.stringify(dir)} moves backwards`);
    assert.ok(dir.dr !== 0 || dir.dc !== 0, 'direction must actually move');
  });
});

test('buildPuzzle places every requested word into the grid', () => {
  const puzzle = WordSearchLogic.buildPuzzle(['CAKE', 'GATE'], 8, Math.random);
  assert.ok(puzzle);
  assert.deepEqual(Object.keys(puzzle.placements).sort(), ['CAKE', 'GATE']);
  assert.equal(puzzle.placements.CAKE.length, 4);
  assert.equal(puzzle.placements.GATE.length, 4);
});

test('buildPuzzle fills every cell, including ones not part of any word', () => {
  const puzzle = WordSearchLogic.buildPuzzle(['AB'], 4, Math.random);
  puzzle.cells.forEach((row) => {
    row.forEach((cell) => assert.ok(typeof cell === 'string' && cell.length === 1));
  });
});

test('buildPuzzle only places letters along one of the 3 forward directions', () => {
  const puzzle = WordSearchLogic.buildPuzzle(['CAKE'], 8, Math.random);
  const path = puzzle.placements.CAKE;
  const dr = path[1].row - path[0].row;
  const dc = path[1].col - path[0].col;
  const matchesADirection = WordSearchLogic.DIRECTIONS.some((d) => d.dr === dr && d.dc === dc);
  assert.ok(matchesADirection, `step (${dr},${dc}) is not one of the 3 forward directions`);
  // Every subsequent step must use that exact same direction throughout.
  for (let i = 2; i < path.length; i++) {
    assert.equal(path[i].row - path[i - 1].row, dr);
    assert.equal(path[i].col - path[i - 1].col, dc);
  }
});

test('buildPuzzle keeps every placed cell within grid bounds', () => {
  const puzzle = WordSearchLogic.buildPuzzle(['CAKE', 'GATE', 'CAGE'], 6, Math.random);
  Object.values(puzzle.placements).forEach((path) => {
    path.forEach((p) => {
      assert.ok(p.row >= 0 && p.row < 6);
      assert.ok(p.col >= 0 && p.col < 6);
    });
  });
});

test('buildPuzzle lets two words legitimately cross on a shared matching letter', () => {
  // Sequence consumed as: [dir, row, col] for CAT (dir 0 = right, at 0,0),
  // then [dir, row, col] for CAP (dir 1 = down, also starting at 0,0) —
  // both place cleanly since they agree on "C" at the shared cell.
  const rand = seededRandom([0, 0, 0, 0.5, 0, 0]);
  const puzzle = WordSearchLogic.buildPuzzle(['CAT', 'CAP'], 5, rand);
  assert.ok(puzzle);
  assert.equal(puzzle.cells[0][0], 'C');
  assert.deepEqual(puzzle.placements.CAT, [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }]);
  assert.deepEqual(puzzle.placements.CAP, [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 }]);
});

test('buildPuzzle returns null when a word cannot possibly fit the grid', () => {
  const puzzle = WordSearchLogic.buildPuzzle(['TOOLONGFORGRID'], 4, Math.random, 10);
  assert.equal(puzzle, null);
});

test('buildPuzzle is deterministic given a fixed random source', () => {
  const a = WordSearchLogic.buildPuzzle(['CAKE'], 6, seededRandom([0.1, 0.2, 0.3, 0.4]));
  const b = WordSearchLogic.buildPuzzle(['CAKE'], 6, seededRandom([0.1, 0.2, 0.3, 0.4]));
  assert.deepEqual(a, b);
});

test('isSelectionCorrect: exact same order and cells is correct', () => {
  const placement = [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }];
  const selection = [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }];
  assert.equal(WordSearchLogic.isSelectionCorrect(selection, placement), true);
});

test('isSelectionCorrect: right cells, wrong order is incorrect', () => {
  const placement = [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }];
  const selection = [{ row: 0, col: 2 }, { row: 0, col: 1 }, { row: 0, col: 0 }];
  assert.equal(WordSearchLogic.isSelectionCorrect(selection, placement), false);
});

test('isSelectionCorrect: wrong length is incorrect', () => {
  const placement = [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }];
  const selection = [{ row: 0, col: 0 }, { row: 0, col: 1 }];
  assert.equal(WordSearchLogic.isSelectionCorrect(selection, placement), false);
});

test('isSelectionCorrect: completely different cells is incorrect', () => {
  const placement = [{ row: 0, col: 0 }, { row: 0, col: 1 }];
  const selection = [{ row: 3, col: 3 }, { row: 3, col: 4 }];
  assert.equal(WordSearchLogic.isSelectionCorrect(selection, placement), false);
});

test('advanceAfterRound: more rounds left in the level', () => {
  assert.equal(WordSearchLogic.advanceAfterRound(1, 3), 'round-complete');
  assert.equal(WordSearchLogic.advanceAfterRound(2, 3), 'round-complete');
});

test('advanceAfterRound: final round just won completes the level', () => {
  assert.equal(WordSearchLogic.advanceAfterRound(3, 3), 'level-complete');
});

test('advanceAfterRound defaults to ROUNDS_PER_LEVEL when not passed', () => {
  assert.equal(WordSearchLogic.advanceAfterRound(WordSearchLogic.ROUNDS_PER_LEVEL), 'level-complete');
});

test('isLevelUnlocked: level 1 is always unlocked', () => {
  assert.equal(WordSearchLogic.isLevelUnlocked(1, () => false), true);
});

test('isLevelUnlocked: level 2 requires level 1\'s badge', () => {
  assert.equal(WordSearchLogic.isLevelUnlocked(2, () => false), false);
  assert.equal(WordSearchLogic.isLevelUnlocked(2, (level) => level === 1), true);
});

test('isLevelUnlocked: level 3 requires level 2\'s badge specifically', () => {
  assert.equal(WordSearchLogic.isLevelUnlocked(3, (level) => level === 1), false);
  assert.equal(WordSearchLogic.isLevelUnlocked(3, (level) => level === 2), true);
});

test('LEVELS grid size, word count, and time all grow with level', () => {
  for (let i = 1; i < WordSearchLogic.LEVELS.length; i++) {
    const prev = WordSearchLogic.LEVELS[i - 1];
    const cur = WordSearchLogic.LEVELS[i];
    assert.ok(cur.gridSize > prev.gridSize);
    assert.ok(cur.wordCount > prev.wordCount);
    assert.ok(cur.seconds > prev.seconds);
  }
});

test('levelConfig looks up a level\'s config, or null for an unknown level', () => {
  assert.deepEqual(WordSearchLogic.levelConfig(1), { level: 1, gridSize: 6, wordCount: 3, seconds: 45 });
  assert.equal(WordSearchLogic.levelConfig(99), null);
});

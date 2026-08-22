const test = require('node:test');
const assert = require('node:assert/strict');
const WordInvadersLogic = require('./word-invaders-logic.js');

function seededRandom(sequence) {
  let i = 0;
  return () => sequence[i++ % sequence.length];
}

test('filterImageWords keeps only non-archived words with an image', () => {
  const words = [
    { word: 'cake', image: 'cake.png' },
    { word: 'svg-only', svg: '<svg></svg>' },
    { word: 'archived-with-image', image: 'x.png', archived: true },
    { word: 'ape', image: 'ape.png' },
  ];
  const result = WordInvadersLogic.filterImageWords(words);
  assert.deepEqual(result.map((w) => w.word), ['cake', 'ape']);
});

test('filterImageWords tolerates a missing/undefined list', () => {
  assert.deepEqual(WordInvadersLogic.filterImageWords(undefined), []);
});

test('pickRandom returns the requested count with no duplicates', () => {
  const list = [1, 2, 3, 4, 5];
  const picked = WordInvadersLogic.pickRandom(list, 3, Math.random);
  assert.equal(picked.length, 3);
  assert.equal(new Set(picked).size, 3);
  picked.forEach((item) => assert.ok(list.includes(item)));
});

test('pickRandom is deterministic given a fixed random source', () => {
  const list = ['a', 'b', 'c', 'd'];
  // With random() always 0, Fisher-Yates always swaps arr[i] with arr[0]:
  // [a,b,c,d] -> [d,b,c,a] -> [c,b,d,a] -> [b,c,d,a]. Pinning the exact
  // output here mainly guards against the algorithm silently changing.
  const rand = seededRandom([0, 0, 0, 0]);
  assert.deepEqual(WordInvadersLogic.pickRandom(list, 4, rand), ['b', 'c', 'd', 'a']);
});

test('buildWave includes exactly one correct card', () => {
  const correct = { word: 'cake' };
  const distractors = [{ word: 'ape' }, { word: 'bale' }, { word: 'came' }];
  const wave = WordInvadersLogic.buildWave(correct, distractors, 3, Math.random);
  assert.equal(wave.length, 3);
  const correctCards = wave.filter((card) => card.correct);
  assert.equal(correctCards.length, 1);
  assert.equal(correctCards[0].item, correct);
});

test('buildWave never duplicates a distractor across cards', () => {
  const correct = { word: 'cake' };
  const distractors = [{ word: 'ape' }, { word: 'bale' }, { word: 'came' }, { word: 'dale' }];
  const wave = WordInvadersLogic.buildWave(correct, distractors, 2, Math.random);
  assert.equal(wave.length, 2);
  const words = wave.map((card) => card.item.word);
  assert.equal(new Set(words).size, words.length);
});

test('buildWave degrades gracefully when the pool is smaller than cardCount', () => {
  const correct = { word: 'cake' };
  const distractors = [{ word: 'ape' }];
  const wave = WordInvadersLogic.buildWave(correct, distractors, 3, Math.random);
  assert.equal(wave.length, 2); // 1 correct + only 1 available distractor
  assert.equal(wave.filter((card) => card.correct).length, 1);
});

test('advanceAfterWord: correct pick mid-round moves to the next word, lives unchanged', () => {
  const result = WordInvadersLogic.advanceAfterWord({ wordIndex: 0, round: 1, lives: 3 }, true);
  assert.deepEqual(result, { outcome: 'next-word', wordIndex: 1, lives: 3 });
});

test('advanceAfterWord: wrong pick mid-round still advances to the next word, but costs a life', () => {
  const result = WordInvadersLogic.advanceAfterWord({ wordIndex: 0, round: 1, lives: 3 }, false);
  assert.deepEqual(result, { outcome: 'next-word', wordIndex: 1, lives: 2 });
});

test('advanceAfterWord: losing the last life ends the round regardless of word position', () => {
  const result = WordInvadersLogic.advanceAfterWord({ wordIndex: 0, round: 2, lives: 1 }, false);
  assert.deepEqual(result, { outcome: 'round-failed', lives: 0 });
});

test('advanceAfterWord: clearing the last word of a non-final round starts the next round with fresh lives kept as-is', () => {
  const result = WordInvadersLogic.advanceAfterWord({ wordIndex: 3, round: 1, lives: 2 }, true);
  assert.deepEqual(result, { outcome: 'round-complete', round: 2, lives: 2 });
});

test('advanceAfterWord: clearing the last word of the final round completes the level', () => {
  const result = WordInvadersLogic.advanceAfterWord({ wordIndex: 3, round: 3, lives: 1 }, true);
  assert.deepEqual(result, { outcome: 'level-complete', lives: 1 });
});

test('advanceAfterWord: a wrong-but-surviving pick on the final word of the final round still completes the level', () => {
  const result = WordInvadersLogic.advanceAfterWord({ wordIndex: 3, round: 3, lives: 2 }, false);
  assert.deepEqual(result, { outcome: 'level-complete', lives: 1 });
});

test('advanceAfterWord respects a custom wordsPerRound/roundsPerLevel config', () => {
  const result = WordInvadersLogic.advanceAfterWord(
    { wordIndex: 1, round: 1, lives: 3 },
    true,
    { wordsPerRound: 2, roundsPerLevel: 1 }
  );
  assert.deepEqual(result, { outcome: 'level-complete', lives: 3 });
});

test('resolveHit: shooting the correct word scores points', () => {
  assert.deepEqual(WordInvadersLogic.resolveHit('word', true), { outcome: 'correct', scoreDelta: WordInvadersLogic.WORD_POINTS });
});

test('resolveHit: shooting a wrong word scores nothing', () => {
  assert.deepEqual(WordInvadersLogic.resolveHit('word', false), { outcome: 'wrong', scoreDelta: 0 });
});

test('resolveHit: shooting a coin scores a smaller bonus', () => {
  assert.deepEqual(WordInvadersLogic.resolveHit('coin'), { outcome: 'bonus', scoreDelta: WordInvadersLogic.COIN_POINTS });
  assert.ok(WordInvadersLogic.COIN_POINTS < WordInvadersLogic.WORD_POINTS);
});

test('resolveHit: shooting an obstacle just wastes the shot', () => {
  assert.deepEqual(WordInvadersLogic.resolveHit('obstacle'), { outcome: 'blocked', scoreDelta: 0 });
});

test('computeMinGapPercent is half of each width plus the margin', () => {
  assert.equal(WordInvadersLogic.computeMinGapPercent(20, 10, 2), 17);
});

test('pickClearX finds a position clear of every occupied column', () => {
  const x = WordInvadersLogic.pickClearX([25, 75], 22, { random: () => 0 });
  assert.notEqual(x, null);
  assert.ok(Math.abs(x - 25) >= 22);
  assert.ok(Math.abs(x - 75) >= 22);
});

test('pickClearX returns null when no column is clear enough', () => {
  // Occupying nearly the whole scan range with a huge required gap leaves
  // nothing available.
  const x = WordInvadersLogic.pickClearX([10, 30, 50, 70, 90], 40, { random: () => 0 });
  assert.equal(x, null);
});

test('pickClearX is deterministic given a fixed random source', () => {
  const rand = seededRandom([0]);
  const x = WordInvadersLogic.pickClearX([50], 20, { random: rand });
  // First candidate scanning from min=6 in step=2 that clears |x-50|>=20 is 6.
  assert.equal(x, 6);
});

test('isLevelUnlocked: level 1 is always unlocked', () => {
  assert.equal(WordInvadersLogic.isLevelUnlocked(1, () => false), true);
});

test('isLevelUnlocked: level 2 requires level 1\'s badge', () => {
  assert.equal(WordInvadersLogic.isLevelUnlocked(2, () => false), false);
  assert.equal(WordInvadersLogic.isLevelUnlocked(2, (level) => level === 1), true);
});

test('LEVELS defines exactly the spec\'d two levels with 2 and 3 simultaneous cards', () => {
  assert.deepEqual(WordInvadersLogic.LEVELS, [
    { level: 1, cards: 2 },
    { level: 2, cards: 3 },
  ]);
});

test('levelConfig looks up a level\'s config, or null for an unknown level', () => {
  assert.deepEqual(WordInvadersLogic.levelConfig(1), { level: 1, cards: 2 });
  assert.equal(WordInvadersLogic.levelConfig(99), null);
});

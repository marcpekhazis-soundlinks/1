const test = require('node:test');
const assert = require('node:assert/strict');
const WordRunLogic = require('./word-run-logic.js');

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
  const result = WordRunLogic.filterImageWords(words);
  assert.deepEqual(result.map((w) => w.word), ['cake', 'ape']);
});

test('filterImageWords tolerates a missing/undefined list', () => {
  assert.deepEqual(WordRunLogic.filterImageWords(undefined), []);
});

test('pickRandom returns the requested count with no duplicates', () => {
  const list = [1, 2, 3, 4, 5];
  const picked = WordRunLogic.pickRandom(list, 3, Math.random);
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
  assert.deepEqual(WordRunLogic.pickRandom(list, 4, rand), ['b', 'c', 'd', 'a']);
});

test('buildLaneOptions includes exactly one correct lane', () => {
  const correct = { word: 'cake' };
  const distractors = [{ word: 'ape' }, { word: 'bale' }, { word: 'came' }];
  const lanes = WordRunLogic.buildLaneOptions(correct, distractors, 3, Math.random);
  assert.equal(lanes.length, 3);
  const correctLanes = lanes.filter((lane) => lane.correct);
  assert.equal(correctLanes.length, 1);
  assert.equal(correctLanes[0].item, correct);
});

test('buildLaneOptions never duplicates a distractor across lanes', () => {
  const correct = { word: 'cake' };
  const distractors = [{ word: 'ape' }, { word: 'bale' }, { word: 'came' }, { word: 'dale' }];
  const lanes = WordRunLogic.buildLaneOptions(correct, distractors, 2, Math.random);
  assert.equal(lanes.length, 2);
  const words = lanes.map((lane) => lane.item.word);
  assert.equal(new Set(words).size, words.length);
});

test('buildLaneOptions degrades gracefully when the pool is smaller than laneCount', () => {
  const correct = { word: 'cake' };
  const distractors = [{ word: 'ape' }];
  const lanes = WordRunLogic.buildLaneOptions(correct, distractors, 3, Math.random);
  assert.equal(lanes.length, 2); // 1 correct + only 1 available distractor
  assert.equal(lanes.filter((lane) => lane.correct).length, 1);
});

test('advanceAfterWord: correct pick mid-round moves to the next word, lives unchanged', () => {
  const result = WordRunLogic.advanceAfterWord({ wordIndex: 0, round: 1, lives: 3 }, true);
  assert.deepEqual(result, { outcome: 'next-word', wordIndex: 1, lives: 3 });
});

test('advanceAfterWord: wrong pick mid-round still advances to the next word, but costs a life', () => {
  const result = WordRunLogic.advanceAfterWord({ wordIndex: 0, round: 1, lives: 3 }, false);
  assert.deepEqual(result, { outcome: 'next-word', wordIndex: 1, lives: 2 });
});

test('advanceAfterWord: losing the last life ends the round regardless of word position', () => {
  const result = WordRunLogic.advanceAfterWord({ wordIndex: 0, round: 2, lives: 1 }, false);
  assert.deepEqual(result, { outcome: 'round-failed', lives: 0 });
});

test('advanceAfterWord: clearing the last word of a non-final round starts the next round with fresh lives kept as-is', () => {
  const result = WordRunLogic.advanceAfterWord({ wordIndex: 3, round: 1, lives: 2 }, true);
  assert.deepEqual(result, { outcome: 'round-complete', round: 2, lives: 2 });
});

test('advanceAfterWord: clearing the last word of the final round completes the level', () => {
  const result = WordRunLogic.advanceAfterWord({ wordIndex: 3, round: 3, lives: 1 }, true);
  assert.deepEqual(result, { outcome: 'level-complete', lives: 1 });
});

test('advanceAfterWord: a wrong-but-surviving pick on the final word of the final round still completes the level', () => {
  const result = WordRunLogic.advanceAfterWord({ wordIndex: 3, round: 3, lives: 2 }, false);
  assert.deepEqual(result, { outcome: 'level-complete', lives: 1 });
});

test('advanceAfterWord respects a custom wordsPerRound/roundsPerLevel config', () => {
  const result = WordRunLogic.advanceAfterWord(
    { wordIndex: 1, round: 1, lives: 3 },
    true,
    { wordsPerRound: 2, roundsPerLevel: 1 }
  );
  assert.deepEqual(result, { outcome: 'level-complete', lives: 3 });
});

test('isObstacleAvoided: lane obstacle is avoided by being in any other lane', () => {
  const hazard = { lane: 1, avoid: null };
  assert.equal(WordRunLogic.isObstacleAvoided(hazard, { lane: 0 }), true);
  assert.equal(WordRunLogic.isObstacleAvoided(hazard, { lane: 1 }), false);
});

test('isObstacleAvoided: jump obstacle requires jumping regardless of lane', () => {
  const hazard = { lane: null, avoid: 'jump' };
  assert.equal(WordRunLogic.isObstacleAvoided(hazard, { lane: 0, jumping: true }), true);
  assert.equal(WordRunLogic.isObstacleAvoided(hazard, { lane: 0, jumping: false }), false);
  assert.equal(WordRunLogic.isObstacleAvoided(hazard, { lane: 0, ducking: true }), false);
});

test('isObstacleAvoided: duck obstacle requires ducking regardless of lane', () => {
  const hazard = { lane: null, avoid: 'duck' };
  assert.equal(WordRunLogic.isObstacleAvoided(hazard, { lane: 2, ducking: true }), true);
  assert.equal(WordRunLogic.isObstacleAvoided(hazard, { lane: 2, ducking: false }), false);
});

test('isCoinCollected: only when the player is in the coin\'s lane', () => {
  const coin = { lane: 2 };
  assert.equal(WordRunLogic.isCoinCollected(coin, { lane: 2 }), true);
  assert.equal(WordRunLogic.isCoinCollected(coin, { lane: 0 }), false);
});

test('isLevelUnlocked: level 1 is always unlocked', () => {
  assert.equal(WordRunLogic.isLevelUnlocked(1, () => false), true);
});

test('isLevelUnlocked: level 2 requires level 1\'s badge', () => {
  assert.equal(WordRunLogic.isLevelUnlocked(2, () => false), false);
  assert.equal(WordRunLogic.isLevelUnlocked(2, (level) => level === 1), true);
});

test('LEVELS defines exactly the spec\'d two levels with 2 and 3 lanes', () => {
  assert.deepEqual(WordRunLogic.LEVELS, [
    { level: 1, lanes: 2 },
    { level: 2, lanes: 3 },
  ]);
});

test('levelConfig looks up a level\'s config, or null for an unknown level', () => {
  assert.deepEqual(WordRunLogic.levelConfig(1), { level: 1, lanes: 2 });
  assert.equal(WordRunLogic.levelConfig(99), null);
});

const test = require('node:test');
const assert = require('node:assert/strict');
const { SOUND_PRACTICE } = require('./phoneme-data.js');
const { compare, feedbackFor } = require('./phoneme-match.js');

function item(word) {
  const found = SOUND_PRACTICE.find((entry) => entry.word === word);
  assert.ok(found, `no SOUND_PRACTICE entry for "${word}"`);
  return found;
}

test('exact word match is correct', () => {
  const result = compare('tree', 'tree', item('tree').targetIndex);
  assert.equal(result.match, true);
  assert.equal(result.failingSound, null);
});

test('short vowel mispronounced as long vowel is flagged on the target sound', () => {
  // The canonical case from the task: "bit" said as "beet".
  const result = compare('bit', 'beet', item('bit').targetIndex);
  assert.equal(result.match, false);
  assert.equal(result.recognized, true);
  assert.equal(result.failingSound, 'target-sound');
});

test('short vowel mispronounced as "beat" is also flagged (homophone of beet)', () => {
  const result = compare('bit', 'beat', item('bit').targetIndex);
  assert.equal(result.match, false);
  assert.equal(result.failingSound, 'target-sound');
});

for (const pattern of [
  ['rain', 'ren'],  // ai long-a said as short e
  ['boat', 'bot'],  // oa long-o said as short o
  ['ship', 'sip'],  // sh consonant digraph dropped
  ['chip', 'tip'],  // ch consonant digraph dropped
]) {
  const [word, wrongAttempt] = pattern;
  test(`digraph mismatch is detected for "${word}" said as "${wrongAttempt}"`, () => {
    const result = compare(word, wrongAttempt, item(word).targetIndex);
    assert.equal(result.match, false);
    assert.notEqual(result.failingSound, null);
  });
}

test('tricky case: "ea" in "beach" (long e) vs "bread" (short e) are distinct targets', () => {
  const beach = item('beach');
  const bread = item('bread');
  assert.notEqual(beach.label, bread.label);

  // Saying "beach" but producing the "bread" vowel should fail on the target sound.
  const beachAsBread = compare('beach', 'bech', beach.targetIndex);
  assert.equal(beachAsBread.match, false);
  assert.equal(beachAsBread.failingSound, 'target-sound');

  // Saying "bread" but producing the "beach" vowel should also fail.
  const breadAsBeach = compare('bread', 'breed', bread.targetIndex);
  assert.equal(breadAsBeach.match, false);
  assert.equal(breadAsBeach.failingSound, 'target-sound');

  // Each word said correctly still matches its own target.
  assert.equal(compare('beach', 'beach', beach.targetIndex).match, true);
  assert.equal(compare('bread', 'bread', bread.targetIndex).match, true);
});

test('tricky case: "th" voiced ("this") vs voiceless ("thin") are distinct targets', () => {
  const thin = item('thin');
  const thisWord = item('this');
  assert.notEqual(thin.label, thisWord.label);

  const thinAsThis = compare('thin', 'din', thin.targetIndex);
  assert.equal(thinAsThis.match, false);
  assert.equal(thinAsThis.failingSound, 'target-sound');
});

test('tricky case: "oo" long ("moon") vs short ("book") are distinct targets', () => {
  const moon = item('moon');
  const book = item('book');
  assert.notEqual(moon.label, book.label);

  // "mun" = "moon" mispronounced with the short "oo" vowel, same consonants,
  // isolating the vowel mismatch from an unrelated whole-word difference.
  const moonMispronounced = compare('moon', 'mun', moon.targetIndex);
  assert.equal(moonMispronounced.match, false);
  assert.equal(moonMispronounced.failingSound, 'target-sound');
  assert.notEqual(book.label, moon.label);
});

test('unrecognized transcript is reported distinctly, not fuzzy-matched', () => {
  const result = compare('tree', 'xyzzy', item('tree').targetIndex);
  assert.equal(result.match, false);
  assert.equal(result.recognized, false);
  assert.equal(result.failingSound, 'unrecognized');
});

test('every SOUND_PRACTICE entry resolves to a real dictionary word', () => {
  const { lookup } = require('./phoneme-match.js');
  for (const entry of SOUND_PRACTICE) {
    assert.ok(lookup(entry.word), `SOUND_PRACTICE word "${entry.word}" missing from PHONEME_DICTIONARY`);
  }
});

test('feedbackFor names the target sound, not just right/wrong', () => {
  const bit = item('bit');
  const result = compare('bit', 'beet', bit.targetIndex);
  const message = feedbackFor(bit, result);
  assert.match(message, /short i/);
  assert.doesNotMatch(message, /^(right|wrong|correct|incorrect)$/i);
});

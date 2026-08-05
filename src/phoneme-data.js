/*
 * Phoneme dictionary + sound-practice targets for digraph/vowel accuracy work.
 *
 * Every entry is keyed by the exact WORD (not the letter pattern), because the
 * same spelling (e.g. "ea", "th", "oo") maps to different phonemes depending on
 * the word: "bread" vs "beach" both spell /ea/ but say different vowels.
 *
 * Loaded as a plain script (window global) in the browser and via
 * module.exports in Node for tests.
 */
(function (root) {
  // IPA phoneme tokens, one array entry per spoken sound (not per letter).
  var PHONEME_DICTIONARY = {
    bit:   { phonemes: ['b', 'ɪ', 't'],  ipa: '/bɪt/' },
    beet:  { phonemes: ['b', 'iː', 't'], ipa: '/biːt/' },
    beat:  { phonemes: ['b', 'iː', 't'], ipa: '/biːt/' },
    bed:   { phonemes: ['b', 'ɛ', 'd'],  ipa: '/bɛd/' },
    bad:   { phonemes: ['b', 'æ', 'd'],  ipa: '/bæd/' },
    cup:   { phonemes: ['k', 'ʌ', 'p'],  ipa: '/kʌp/' },
    cop:   { phonemes: ['k', 'ɒ', 'p'],  ipa: '/kɒp/' },
    rain:  { phonemes: ['r', 'eɪ', 'n'], ipa: '/reɪn/' },
    ren:   { phonemes: ['r', 'ɛ', 'n'],  ipa: '/rɛn/' },
    tree:  { phonemes: ['t', 'r', 'iː'], ipa: '/triː/' },
    boat:  { phonemes: ['b', 'oʊ', 't'], ipa: '/boʊt/' },
    bot:   { phonemes: ['b', 'ɒ', 't'],  ipa: '/bɒt/' },
    bread: { phonemes: ['b', 'r', 'ɛ', 'd'],  ipa: '/brɛd/' },
    breed: { phonemes: ['b', 'r', 'iː', 'd'], ipa: '/briːd/' },
    beach: { phonemes: ['b', 'iː', 'tʃ'], ipa: '/biːtʃ/' },
    bech:  { phonemes: ['b', 'ɛ', 'tʃ'],  ipa: '/bɛtʃ/' },
    moon:  { phonemes: ['m', 'uː', 'n'], ipa: '/muːn/' },
    book:  { phonemes: ['b', 'ʊ', 'k'],  ipa: '/bʊk/' },
    boke:  { phonemes: ['b', 'oʊ', 'k'], ipa: '/boʊk/' },
    // Not a real word: represents "moon" mispronounced with the short "oo"
    // vowel, same consonants, so tests can isolate a vowel-only mismatch.
    mun:   { phonemes: ['m', 'ʊ', 'n'],  ipa: '/mʊn/' },
    ship:  { phonemes: ['ʃ', 'ɪ', 'p'],  ipa: '/ʃɪp/' },
    sip:   { phonemes: ['s', 'ɪ', 'p'],  ipa: '/sɪp/' },
    chip:  { phonemes: ['tʃ', 'ɪ', 'p'], ipa: '/tʃɪp/' },
    tip:   { phonemes: ['t', 'ɪ', 'p'],  ipa: '/tɪp/' },
    thin:  { phonemes: ['θ', 'ɪ', 'n'],  ipa: '/θɪn/' },
    this:  { phonemes: ['ð', 'ɪ', 's'],  ipa: '/ðɪs/' },
    tin:   { phonemes: ['t', 'ɪ', 'n'],  ipa: '/tɪn/' },
    din:   { phonemes: ['d', 'ɪ', 'n'],  ipa: '/dɪn/' }
  };

  // Vowel-sound phonemes vs. consonant-sound phonemes, used to classify which
  // kind of sound a mismatch falls on for feedback purposes.
  var VOWEL_PHONEMES = [
    'iː', 'ɪ', 'ɛ', 'æ', 'ʌ', 'ɑː', 'ɒ', 'ɔː', 'ʊ', 'uː',
    'eɪ', 'oʊ', 'aɪ', 'aʊ', 'ɔɪ', 'ə', 'ɜː'
  ];

  // Practice targets shown in the "Sound Practice" tab. `targetIndex` marks
  // which phoneme in the word carries the vowel/digraph sound being taught,
  // so feedback can say specifically whether *that* sound was off.
  var SOUND_PRACTICE = [
    { word: 'bit',   category: 'Short vowel',            pattern: 'i',  targetIndex: 1, label: 'short i /ɪ/' },
    { word: 'bed',   category: 'Short vowel',            pattern: 'e',  targetIndex: 1, label: 'short e /ɛ/' },
    { word: 'cup',   category: 'Short vowel',            pattern: 'u',  targetIndex: 1, label: 'short u /ʌ/' },
    { word: 'rain',  category: 'Long vowel digraph',     pattern: 'ai', targetIndex: 1, label: 'long a /eɪ/' },
    { word: 'tree',  category: 'Long vowel digraph',     pattern: 'ee', targetIndex: 2, label: 'long e /iː/' },
    { word: 'boat',  category: 'Long vowel digraph',     pattern: 'oa', targetIndex: 1, label: 'long o /oʊ/' },
    { word: 'moon',  category: 'Digraph "oo" (long)',    pattern: 'oo', targetIndex: 1, label: 'long oo /uː/', tricky: 'oo' },
    { word: 'book',  category: 'Digraph "oo" (short)',   pattern: 'oo', targetIndex: 1, label: 'short oo /ʊ/', tricky: 'oo' },
    { word: 'beach', category: 'Digraph "ea" (long e)',  pattern: 'ea', targetIndex: 1, label: 'long e /iː/',  tricky: 'ea' },
    { word: 'bread', category: 'Digraph "ea" (short e)', pattern: 'ea', targetIndex: 2, label: 'short e /ɛ/',  tricky: 'ea' },
    { word: 'ship',  category: 'Consonant digraph',      pattern: 'sh', targetIndex: 0, label: '/ʃ/' },
    { word: 'chip',  category: 'Consonant digraph',      pattern: 'ch', targetIndex: 0, label: '/tʃ/' },
    { word: 'thin',  category: 'Digraph "th" (voiceless)', pattern: 'th', targetIndex: 0, label: 'voiceless /θ/', tricky: 'th' },
    { word: 'this',  category: 'Digraph "th" (voiced)',    pattern: 'th', targetIndex: 0, label: 'voiced /ð/',    tricky: 'th' }
  ];

  var api = {
    PHONEME_DICTIONARY: PHONEME_DICTIONARY,
    VOWEL_PHONEMES: VOWEL_PHONEMES,
    SOUND_PRACTICE: SOUND_PRACTICE
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  } else {
    root.PhonemeData = api;
  }
})(typeof window !== 'undefined' ? window : globalThis);

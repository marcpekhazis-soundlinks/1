/*
 * Phoneme-level comparison between a target word and a learner's spoken
 * attempt (as transcribed by a speech recognizer).
 *
 * Deliberately compares PHONEME arrays, not raw transcript strings, so that
 * e.g. "bit" vs "beet" is a vowel mismatch rather than a fuzzy string match.
 *
 * Tradeoff: browsers' SpeechRecognition only returns its best-guess WORD, and
 * that recognizer already biases toward known dictionary words. So this can
 * only be as accurate as (a) the transcript it hands back and (b) how many
 * confusable words are covered in PHONEME_DICTIONARY. A learner whose
 * mispronunciation the recognizer "autocorrects" to the target spelling will
 * still read as correct here — closing that gap needs phoneme-level ASR
 * (e.g. Azure Pronunciation Assessment), not just this comparison layer.
 */
(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory(require('./phoneme-data.js'));
  } else {
    root.PhonemeMatch = factory(root.PhonemeData);
  }
})(typeof window !== 'undefined' ? window : globalThis, function (PhonemeData) {
  var DICTIONARY = PhonemeData.PHONEME_DICTIONARY;
  var VOWELS = PhonemeData.VOWEL_PHONEMES;

  function normalize(word) {
    return String(word || '').trim().toLowerCase().replace(/[^a-z]/g, '');
  }

  function lookup(word) {
    return DICTIONARY[normalize(word)] || null;
  }

  function isVowel(phoneme) {
    return VOWELS.indexOf(phoneme) !== -1;
  }

  // Standard Levenshtein alignment over phoneme-token arrays, with backtrace,
  // so we know *which* target phoneme index each edit touches.
  function alignPhonemes(target, attempt) {
    var n = target.length;
    var m = attempt.length;
    var dp = [];
    for (var i = 0; i <= n; i++) {
      dp.push(new Array(m + 1).fill(0));
      dp[i][0] = i;
    }
    for (var j = 0; j <= m; j++) dp[0][j] = j;

    for (i = 1; i <= n; i++) {
      for (j = 1; j <= m; j++) {
        if (target[i - 1] === attempt[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    var ops = [];
    i = n;
    j = m;
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && target[i - 1] === attempt[j - 1]) {
        ops.unshift({ type: 'equal', targetIndex: i - 1, attemptIndex: j - 1 });
        i--; j--;
      } else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
        ops.unshift({ type: 'sub', targetIndex: i - 1, attemptIndex: j - 1 });
        i--; j--;
      } else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
        ops.unshift({ type: 'del', targetIndex: i - 1, attemptIndex: null });
        i--;
      } else {
        ops.unshift({ type: 'ins', targetIndex: null, attemptIndex: j - 1 });
        j--;
      }
    }
    return ops;
  }

  /**
   * Compare a spoken attempt (recognizer transcript) against a target word.
   * @param {string} targetWord
   * @param {string} attemptWord
   * @param {number} [targetSoundIndex] phoneme index of the specific vowel/
   *   digraph sound being taught for this target, for finer-grained feedback.
   */
  function compare(targetWord, attemptWord, targetSoundIndex) {
    var target = lookup(targetWord);
    if (!target) {
      throw new Error('Unknown target word: "' + targetWord + '". Add it to PHONEME_DICTIONARY first.');
    }
    var attempt = lookup(attemptWord);
    if (!attempt) {
      return {
        match: false,
        recognized: false,
        failingSound: 'unrecognized',
        targetPhonemes: target.phonemes,
        attemptPhonemes: null,
        mismatches: []
      };
    }

    var ops = alignPhonemes(target.phonemes, attempt.phonemes);
    var mismatches = ops.filter(function (op) { return op.type !== 'equal'; });

    if (mismatches.length === 0) {
      return {
        match: true,
        recognized: true,
        failingSound: null,
        targetPhonemes: target.phonemes,
        attemptPhonemes: attempt.phonemes,
        mismatches: []
      };
    }

    var equalCount = ops.length - mismatches.length;
    var failingSound;
    if (equalCount === 0) {
      failingSound = 'whole-word';
    } else if (typeof targetSoundIndex === 'number' &&
      mismatches.some(function (op) { return op.targetIndex === targetSoundIndex; })) {
      failingSound = 'target-sound';
    } else {
      var touchesVowel = mismatches.some(function (op) {
        return op.targetIndex !== null && isVowel(target.phonemes[op.targetIndex]);
      });
      failingSound = touchesVowel ? 'other-vowel' : 'other-consonant';
    }

    return {
      match: false,
      recognized: true,
      failingSound: failingSound,
      targetPhonemes: target.phonemes,
      attemptPhonemes: attempt.phonemes,
      mismatches: mismatches
    };
  }

  /**
   * Turn a compare() result into a learner-facing message that names which
   * sound was off, rather than a bare right/wrong verdict.
   */
  function feedbackFor(practiceItem, result) {
    if (result.match) {
      return 'Nice! "' + practiceItem.word + '" was spot on.';
    }
    switch (result.failingSound) {
      case 'unrecognized':
        return "We couldn't match that to a known word. Try saying \"" + practiceItem.word + '" again, a little slower.';
      case 'target-sound':
        return 'Close, but the ' + practiceItem.label + ' sound was off — that\'s the part of "' +
          practiceItem.word + '" ("' + practiceItem.pattern + '") this card is teaching. Listen again and focus on that sound.';
      case 'other-vowel':
        return 'The target sound was right, but another vowel sound in "' + practiceItem.word + '" didn\'t match.';
      case 'other-consonant':
        return 'The target sound was right, but a consonant sound in "' + practiceItem.word + '" didn\'t match.';
      case 'whole-word':
        return 'That didn\'t sound like "' + practiceItem.word + '" at all — try again.';
      default:
        return 'Not quite — try again.';
    }
  }

  return {
    normalize: normalize,
    lookup: lookup,
    isVowel: isVowel,
    alignPhonemes: alignPhonemes,
    compare: compare,
    feedbackFor: feedbackFor
  };
});

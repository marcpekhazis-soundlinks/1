I'm working on a literacy/phonics web app that teaches pronunciation of vowel 
sounds and digraphs (e.g. "ai" as in "rain", "ee" as in "tree", "oa" as in 
"boat", "ea" as in "bread" vs "beach", etc.).

Goal for this branch: improve the accuracy of sound playback and speech 
recognition matching for target vowel sounds and digraphs.

Specifically:

1. AUDIO PLAYBACK
   - Review how target sounds/words are currently mapped to audio files.
   - Confirm each vowel sound and digraph example plays the CORRECT phoneme 
     for that specific spelling pattern (many digraphs are spelled the same 
     but sound different depending on the word — e.g. "ea" in "bread" vs 
     "beach" — so playback must be tied to the specific word, not just the 
     letter pattern).
   - Flag any audio files that are mismatched, low quality, or missing.

2. SPEECH RECOGNITION MATCHING
   - Review how the app currently compares the learner's spoken input to the 
     target pronunciation.
   - Ensure comparison happens at the PHONEME level (using IPA or a phoneme 
     representation), not just a raw string/text match of the transcribed 
     word — since word-level string matching won't catch vowel sound errors.
   - Make sure short vowels, long vowels, and digraphs are recognized as 
     distinct target phonemes, so a learner mispronouncing "bit" as "beet" 
     is correctly marked as incorrect, not treated as a fuzzy match.
   - If a speech-to-text or phoneme-matching library/API is already in use, 
     check whether it exposes phoneme-level or confidence-score data we can 
     use, rather than just a final transcribed word.

3. FEEDBACK LOGIC
   - When a learner's pronunciation doesn't match, the feedback should 
     identify WHICH sound was off (e.g. "the vowel sound" vs "the whole 
     word"), not just mark it right/wrong.

4. TESTING
   - Add or update test cases covering a range of target vowel sounds and 
     digraphs (short vowels, long vowels, common digraphs like "sh", "ch", 
     "th", "ai", "ee", "oa", "ea", "oo").
   - Include at least one known tricky case (a digraph with multiple 
     possible pronunciations) to confirm word-specific handling works.

Please don't change unrelated UI, styling, or unrelated features — keep this 
branch scoped to sound accuracy and speech recognition matching only. Explain 
any tradeoffs (e.g. accuracy vs. latency) before implementing them.

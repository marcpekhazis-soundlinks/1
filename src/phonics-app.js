const WORDS = [
  { word: 'bay', arabic: 'خليج', hint: 'a curve of ocean by land', visual: 'bay', level: 1 },
  { word: 'day', arabic: 'يوم', hint: 'sun-up time', visual: 'day', level: 1 },
  { word: 'hay', arabic: 'تبن', hint: 'dry grass', visual: 'hay', level: 1 },
  { word: 'jay', arabic: 'طائر القيق', hint: 'a colorful, noisy bird', visual: 'jay', level: 1 },
  { word: 'lay', arabic: 'يضع / يستلقي', hint: 'put down or rest', visual: 'bed', level: 1 },
  { word: 'may', arabic: 'قد / شهر مايو', hint: 'might, or the month May', visual: 'calendar', level: 1 },
  { word: 'pay', arabic: 'يدفع', hint: 'give money', visual: 'pay', level: 1 },
  { word: 'ray', arabic: 'شعاع', hint: 'a line of light', visual: 'ray', level: 1 },
  { word: 'say', arabic: 'يقول', hint: 'speak words', visual: 'speech', level: 1 },
  { word: 'way', arabic: 'طريق / أسلوب', hint: 'a path, or how something is done', visual: 'road', level: 1 },
  { word: 'away', arabic: 'بعيدا / ذهب', hint: 'gone, or not in this place', visual: 'arrows', level: 1 },
  { word: 'bray', arabic: 'نهيق الحمار', hint: 'the loud, harsh cry a donkey makes', visual: 'bray', level: 1 },
  { word: 'clay', arabic: 'طين', hint: 'soft, wet earth used for pottery', visual: 'clay', level: 1 },
  { word: 'fray', arabic: 'مشاجرة / يتهرأ', hint: 'a scuffle, or threads wearing loose at an edge', visual: 'fray', level: 1 },
  { word: 'gray', arabic: 'رمادي', hint: 'the color between black and white', visual: 'gray', level: 1 },
  { word: 'play', arabic: 'يلعب', hint: 'have fun or join a game', visual: 'game', level: 1 },
  { word: 'pray', arabic: 'يصلي / يدعو', hint: 'to speak to God', visual: 'pray', level: 1 },
  { word: 'slay', arabic: 'يقتل / يذبح', hint: 'to kill with a weapon', visual: 'sword', level: 1 },
  { word: 'stay', arabic: 'يبقى', hint: 'remain in one place', visual: 'house', level: 1 },
  { word: 'sway', arabic: 'يتأرجح / يتمايل', hint: 'to rock gently from side to side', visual: 'sway', level: 1 },
  { word: 'spray', arabic: 'يرش', hint: 'send out small drops', visual: 'spray', level: 1 },
  { word: 'tray', arabic: 'صينية', hint: 'a flat holder for food', visual: 'tray', level: 1 },
  { word: 'ace', arabic: 'بَطَلٌ', hint: 'a champion or expert', visual: 'ace', level: 1 },
  { word: 'ape', arabic: 'قِرْدٌ', hint: 'a large tailless monkey', visual: 'ape', level: 1 },
  { word: 'ate', arabic: 'أَكَلَ', hint: 'past tense of eat', visual: 'ate', level: 1 },
  { word: 'babe', arabic: 'طفل رضيع', hint: 'a baby, or a term for a dear one', visual: 'babe', level: 1 },
  { word: 'bade', arabic: 'أمر / طلب', hint: 'old word for asked or ordered (past tense of bid)', visual: 'bade', level: 1 },
  { word: 'bake', arabic: 'يخبز', hint: 'to cook food in an oven', visual: 'bake', level: 1 },
  { word: 'bale', arabic: 'حزمة كبيرة', hint: 'a large bundle tied together, like hay', visual: 'bale', level: 1 },
  { word: 'bane', arabic: 'مصدر أذى', hint: 'something that causes trouble or ruin', visual: 'bane', level: 1 },
  { word: 'bare', arabic: 'عارٍ / مكشوف', hint: 'empty or without covering', visual: 'bare', level: 1 },
  { word: 'base', arabic: 'قاعدة', hint: 'the bottom part that supports something', visual: 'base', level: 1 },
  { word: 'bate', arabic: 'يُخفف / يُقلل', hint: 'to make something weaker or less', visual: 'bate', level: 1 },
  { word: 'cage', arabic: 'قفص', hint: 'a barred box that holds an animal', visual: 'cage', level: 1 },
  { word: 'cake', arabic: 'كعكة', hint: 'a sweet baked dessert', visual: 'cake', level: 1 },
  { word: 'came', arabic: 'أتى / جاء', hint: 'past tense of come; arrived', visual: 'came', level: 1 },
  { word: 'cane', arabic: 'عصا', hint: 'a stick used for walking, or the sugar plant', visual: 'cane', level: 1 },
  { word: 'cape', arabic: 'عباءة / رداء', hint: 'a cloak worn over the shoulders', visual: 'cape', level: 1 },
  { word: 'care', arabic: 'يهتم / رعاية', hint: 'to feel concern for someone', visual: 'care', level: 1 },
  { word: 'case', arabic: 'حقيبة / حالة', hint: 'a box or container, or a situation', visual: 'case', level: 1 },
  { word: 'cate', arabic: 'طعام شهي', hint: 'a tasty treat (an old word for food)', visual: 'cate', level: 1 },
  { word: 'cave', arabic: 'كهف', hint: 'a hollow space inside a hill or rock', visual: 'cave', level: 1 },
  { word: 'dale', arabic: 'وادٍ', hint: 'a valley between hills', visual: 'dale', level: 1 },
  { word: 'dame', arabic: 'سيدة', hint: 'an old or polite word for a woman', visual: 'dame', level: 1 },
  { word: 'dane', arabic: 'كلب كبير الحجم', hint: 'a large dog breed, the Great Dane', visual: 'dane', level: 1 },
  { word: 'daze', arabic: 'ذهول / دوار', hint: 'a stunned, confused feeling', visual: 'daze', level: 1 },
  { word: 'face', arabic: 'وجه', hint: 'the front part of your head', visual: 'face', level: 1 },
  { word: 'fade', arabic: 'يتلاشى', hint: 'to slowly become less clear or bright', visual: 'fade', level: 1 },
  { word: 'fake', arabic: 'مزيف', hint: 'not real; a copy', visual: 'fake', level: 1 },
  { word: 'fame', arabic: 'شهرة', hint: 'being known and admired by many people', visual: 'fame', level: 1 },
  { word: 'fane', arabic: 'معبد', hint: 'an old, poetic word for a temple', visual: 'fane', level: 1 },
  { word: 'fare', arabic: 'أجرة السفر', hint: 'the money paid to travel', visual: 'fare', level: 1 },
  { word: 'fate', arabic: 'قدر / مصير', hint: 'what will happen to someone; destiny', visual: 'fate', level: 1 },
  { word: 'fave', arabic: 'المفضل', hint: 'a short way to say favorite', visual: 'fave', level: 1 },
  { word: 'faze', arabic: 'يُقلق / يُربك', hint: 'to disturb or upset someone', visual: 'faze', level: 1 },
  { word: 'always', arabic: 'دائماً', hint: 'all the time', visual: 'infinity', level: 2 },
  { word: 'runaway', arabic: 'هارب', hint: 'someone who escapes', visual: 'runner', level: 2 },
  { word: 'birthday', arabic: 'يوم الميلاد', hint: 'a yearly celebration', visual: 'cake', level: 2 },
  { word: 'causeway', arabic: 'طريق مشهود / ممر مرتفع', hint: 'a raised road over water', visual: 'road', level: 2 },
  { word: 'claymore', arabic: 'سيف اسكتلندي / لغم مسطح', hint: 'a large old sword', visual: 'sword', level: 2 },
  { word: 'daybreak', arabic: 'بزوغ الفجر / شروق الشمس', hint: 'first light in the morning', visual: 'sunrise', level: 2 },
  { word: 'dayshift', arabic: 'وردية النهار', hint: 'work time during the day', visual: 'worker', level: 2 },
  { word: 'display', arabic: 'يعرض / عرض', hint: 'show something clearly', visual: 'display', level: 2 },
  { word: 'doorstay', arabic: 'مزلاجة الباب / دعامة الباب', hint: 'a support that holds a door', visual: 'door', level: 2 },
  { word: 'fairplay', arabic: 'لعب نزيه / نزاهة', hint: 'playing by the rules', visual: 'handshake', level: 2 },
  { word: 'gateway', arabic: 'بوابة / مدخل', hint: 'an entrance', visual: 'gate', level: 2 },
  { word: 'haystack', arabic: 'كدس التبن / رزمة قش', hint: 'a pile of hay', visual: 'haystack', level: 2 },
  { word: 'overstay', arabic: 'يبقى أكثر من المدة', hint: 'stay too long', visual: 'clock', level: 2 },
  { word: 'playbook', arabic: 'كتاب اللعب / خطة اللعب', hint: 'a book of game plans', visual: 'book', level: 2 },
  { word: 'sideways', arabic: 'إلى الجانب / جانبياً', hint: 'to or from the side', visual: 'arrows', level: 2 },
];

// Each row is [pattern, ipa, note, exampleWord]. exampleWord is what actually
// gets spoken by the "hear" button: bare grapheme fragments (e.g. "th",
// "-tion") aren't real words and TTS mispronounces or guesses at them, and
// both "th" rows would otherwise sound identical. Speaking a real word keeps
// playback tied to a specific, correctly-pronounceable target.
const RULES = [
  { title: 'Hard C Rule', rows: [['ca, co, cu', '/k/', 'like ك in Arabic', 'cat']], note: 'C is hard before a, o, u: cat, cot, cup.' },
  { title: 'Soft C Rule', rows: [['ce, ci, cy', '/s/', 'like س in Arabic', 'cent']], note: 'C is soft before e, i, y: cent, city, cycle.' },
  { title: 'Hard G Rule', rows: [['ga, go, gu', '/ɡ/', 'voiced g as in go', 'go']], note: 'Use the back of the tongue and turn the voice on.' },
  { title: 'Soft G Rule', rows: [['ge, gi, gy', '/dʒ/', 'like ج in many Arabic dialects', 'gem']], note: 'Soft g often sounds like the first sound in judge.' },
  { title: 'Common suffix endings', rows: [['-tion, -tian', '/ʃən/', 'shun: action, musician', 'action'], ['-tious, -cious', '/ʃəs/', 'shus: delicious', 'delicious'], ['-tial, -cial', '/ʃəl/', 'shul: special', 'special'], ['-sion after vowel', '/ʒən/', 'zhun: vision', 'vision'], ['-sion after consonant', '/ʃən/', 'shun: tension', 'tension'], ['-able, -ible', '/əbəl/', 'uh-bul', 'capable'], ['-ance, -ence', '/əns/', 'uhns', 'distance'], ['-ment', '/mənt/', 'muhnt', 'movement'], ['-ness', '/nəs/', 'nuhs', 'kindness'], ['-ity', '/ɪti/', 'ih-tee', 'city'], ['-ly', '/li/', 'lee', 'quickly'], ['-ward', '/wərd/', 'werd', 'forward'], ['-wise', '/waɪz/', 'wize', 'otherwise']], note: 'Suffixes can change slightly by accent and stress; teach the main classroom pronunciation first.' },
  { title: 'Voiceless consonant digraphs', rows: [['ch', '/tʃ/', 'voiceless affricate: chin', 'chin'], ['sh', '/ʃ/', 'voiceless fricative: ship', 'ship'], ['th', '/θ/', 'voiceless dental fricative: thin', 'thin'], ['ph', '/f/', 'voiceless fricative: phone', 'phone'], ['wh', '/w/ or /ʍ/', 'usually /w/ in modern English: whale', 'whale']], note: 'Voiceless means the throat does not vibrate. Have students touch the throat to check.' },
  { title: 'Voiced consonant digraphs', rows: [['th', '/ð/', 'voiced dental fricative: this', 'this'], ['ng', '/ŋ/', 'voiced nasal: sing', 'sing'], ['gh', 'often silent; sometimes /f/ or /ɡ/', 'night = silent, laugh = /f/, ghost = /ɡ/', 'ghost']], note: 'Voiced means the throat vibrates. Arabic has ذ, but English /ð/ places the tongue lightly between the teeth.' },
];

let state = {
  view: 'learn',
  level: 'all',
  big: false,
  contrast: false,
  voiceMode: localStorage.voiceMode || 'female',
  done: JSON.parse(localStorage.donePhonics || '{}'),
  practice: {},
};
let voices = [];
const $ = (selector) => document.querySelector(selector);

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
}

// Small stroke-based icon set (no emoji) so every icon inherits the
// semantic color of whatever button/panel it sits in via currentColor.
const ICONS = {
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v17H6.5A2.5 2.5 0 0 0 4 22.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v17h5.5a2.5 2.5 0 0 1 2.5 2.5z"/>',
  eye: '<path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/><path d="M9 21h6"/>',
  speaker: '<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.2 8.8a5 5 0 0 1 0 6.4"/><path d="M18.8 6.2a9 9 0 0 1 0 11.6"/>',
  chat: '<path d="M4 5h16v11H10l-4 4v-4H4z"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12.3l2.6 2.6L16 9.5"/>',
  textSize: '<text x="1" y="17" font-size="11" font-weight="800" fill="currentColor" stroke="none" font-family="inherit">A</text><text x="11" y="20" font-size="17" font-weight="800" fill="currentColor" stroke="none" font-family="inherit">A</text>',
  contrast: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none"/>',
  reset: '<path d="M4 5v6h6"/><path d="M5.3 15A8 8 0 1 0 6 8"/>',
  retry: '<path d="M4 12a8 8 0 0 1 13.9-5.4M20 3v6h-6"/><path d="M20 12a8 8 0 0 1-13.9 5.4M4 21v-6h6"/>',
  alert: '<path d="M12 3 2 20h20z"/><path d="M12 9.5v5"/><circle cx="12" cy="17.3" r="1" fill="currentColor" stroke="none"/>',
};
function icon(name) {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><g>${ICONS[name] || ''}</g></svg>`;
}

function loadVoices() {
  voices = speechSynthesis?.getVoices?.() || [];
}
if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

function pickVoice(lang) {
  const languageVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith(lang.toLowerCase().slice(0, 2)));
  const preferredGender = state.voiceMode === 'male' ? ['male', 'david', 'mark', 'george', 'microsoft zira?'] : ['female', 'zira', 'samantha', 'susan', 'victoria', 'google uk english female'];
  return languageVoices.find((voice) => preferredGender.some((term) => voice.name.toLowerCase().includes(term.replace('?', '')))) || languageVoices[0] || null;
}

function speak(text, lang = 'en-US', rate = 0.75) {
  if (!('speechSynthesis' in window)) {
    alert('Text to speech is not supported in this browser.');
    return;
  }
  loadVoices();
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate;
  const voice = pickVoice(lang);
  if (voice) utterance.voice = voice;
  speechSynthesis.speak(utterance);
}

function markVowels(word) {
  return escapeHtml(word).replace(/ay/gi, '<span class="vowel">$&</span>');
}

function setState(key, value) {
  state[key] = value;
  if (key === 'voiceMode') localStorage.voiceMode = value;
  render();
}

function toggleDone(word) {
  state.done[word] = !state.done[word];
  localStorage.donePhonics = JSON.stringify(state.done);
  render();
}

function highlightPattern(word, pattern) {
  const regex = new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  return escapeHtml(word).replace(regex, (match) => `<span class="vowel">${match}</span>`);
}

// Speech-recognition matching: capture what the learner said, then compare
// its PHONEMES (via PhonemeMatch, loaded from phoneme-match.js) against the
// target word's phonemes — not a raw transcript string match — so a vowel
// substitution like "bit" -> "beet" is caught instead of glossed over.
//
// Tradeoff: the Web Speech API only hands back its own best-guess transcript
// (plus a confidence score), and that recognizer already leans toward known
// dictionary words. A mispronunciation the recognizer "autocorrects" back to
// the target spelling will still read as correct here. True phoneme-level
// accuracy would need a paid pronunciation-assessment API instead of the
// free, key-less browser API used here.
function startPractice(item) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    state.practice[item.word] = {
      status: 'error',
      message: 'Speech recognition is not supported in this browser. Try Chrome or Edge on desktop.',
    };
    render();
    return;
  }

  state.practice[item.word] = { status: 'listening', message: 'Listening… say the word now.' };
  render();

  const recognition = new Recognition();
  recognition.lang = 'en-US';
  recognition.maxAlternatives = 3;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const best = event.results[0][0];
    const transcript = best.transcript.trim().toLowerCase();
    const comparison = PhonemeMatch.compare(item.word, transcript, item.targetIndex);
    const message = PhonemeMatch.feedbackFor(item, comparison);
    state.practice[item.word] = {
      status: comparison.match ? 'correct' : 'incorrect',
      transcript,
      confidence: best.confidence,
      message,
    };
    render();
  };
  recognition.onerror = (event) => {
    state.practice[item.word] = {
      status: 'error',
      message: `Microphone error (${event.error}). Check mic permissions and try again.`,
    };
    render();
  };
  recognition.onspeechend = () => recognition.stop();
  recognition.start();
}

function imageSvg(type, label) {
  const text = escapeHtml(label);
  const drawings = {
    water: '<path d="M20 120 C60 85,95 155,140 115 S220 95,260 125"/><circle cx="204" cy="46" r="22"/>',
    bay: '<path class="i-water" d="M0 140C60 110 110 165 175 138S260 108 300 135V230H0Z"/><path class="i-leaf" d="M300 55c-70 5-115 45-100 90 15 40 65 55 100 40z"/><circle class="i-sun" cx="80" cy="65" r="32"/><path class="i-shade" d="M80 33A32 32 0 0 1 80 97A43 43 0 0 0 80 33Z"/><circle class="i-line" cx="80" cy="65" r="32"/><ellipse class="i-shine" cx="68" cy="52" rx="8" ry="6"/><path class="i-line" d="M40 175q18-14 36 0t36 0t36 0t36 0t36 0t36 0"/>',
    sun: '<circle cx="150" cy="80" r="35"/><path d="M150 20v25M150 115v25M90 80H65M235 80h-25M108 38l18 18M192 122l18 18M108 122l18-18M192 38l-18 18"/>',
    day: '<path class="i-leaf" d="M0 195h300v35H0z"/><circle class="i-sun" cx="150" cy="115" r="52"/><path class="i-shade" d="M150 63A52 52 0 0 1 150 167A70 70 0 0 0 150 63Z"/><circle class="i-line" cx="150" cy="115" r="52"/><path class="i-line" d="M150 45v-20M150 185v20M210 115h20M70 115h20M192 73l14-14M108 157l-14 14M108 73l-14-14M192 157l14 14"/><ellipse class="i-shine" cx="128" cy="92" rx="13" ry="8"/>',
    hay: '<ellipse class="i-shadow" cx="150" cy="203" rx="88" ry="13"/><path class="i-sand" d="M62 188C46 118 78 58 150 58C222 58 254 118 238 188Z"/><path class="i-sand-dark" d="M150 58C205 58 236 100 238 150c-4-18-10-34-20-48-18-24-42-38-68-44Z"/><path class="i-line" d="M70 122q80 26 160 0M64 158q86 28 172 0"/>',
    jay: '<ellipse class="i-shadow" cx="150" cy="218" rx="55" ry="9"/><ellipse class="i-water" cx="140" cy="150" rx="62" ry="50" transform="rotate(-15 140 150)"/><circle class="i-water" cx="195" cy="95" r="34"/><path class="i-sand" d="M222 88l26-6-8 24z"/><path class="i-sky" d="M95 140c-10 25 0 50 25 58 18 6 34-2 36-18-22 2-42-14-61-40z"/><circle class="i-ink" cx="205" cy="85" r="5"/><path class="i-line" d="M85 175l-25 15M100 195l-18 22M120 205l-8 26"/><ellipse class="i-shine" cx="185" cy="80" rx="8" ry="6"/>',
    bed: '<rect x="55" y="90" width="175" height="55" rx="10"/><rect x="70" y="70" width="55" height="35" rx="8"/><path d="M55 145v25M230 145v25"/>',
    calendar: '<rect x="65" y="55" width="170" height="125" rx="12"/><path d="M65 88h170M105 40v30M195 40v30"/><text x="150" y="145" text-anchor="middle" class="svgText">May</text>',
    money: '<rect x="55" y="75" width="190" height="95" rx="12"/><circle cx="150" cy="123" r="28"/><path d="M72 100c18 0 25-8 25-18M228 145c-18 0-25 8-25 18"/>',
    pay: '<ellipse class="i-shadow" cx="150" cy="203" rx="85" ry="12"/><rect class="i-leaf" x="60" y="120" width="150" height="80" rx="14" transform="rotate(-6 135 160)"/><rect class="i-water" x="90" y="105" width="150" height="80" rx="14"/><circle class="i-sun" cx="220" cy="90" r="34"/><path class="i-shade" d="M220 56A34 34 0 0 1 220 124A46 46 0 0 0 220 56Z"/><circle class="i-line" cx="220" cy="90" r="34"/><path class="i-line" d="M208 90h24M220 78v24"/><ellipse class="i-shine" cx="209" cy="79" rx="7" ry="5"/>',
    ray: '<circle cx="78" cy="80" r="24"/><path d="M105 95 L235 155M105 80 L245 80M105 65 L235 15"/>',
    speech: '<path d="M62 70h175v75H115l-45 38v-38h-8z"/><path d="M95 105h110M95 128h75"/>',
    game: '<rect x="72" y="83" width="160" height="82" rx="35"/><path d="M110 105v38M91 124h38M184 112h1M205 136h1"/>',
    house: '<path d="M55 115 L150 45 L245 115"/><path d="M80 110v85h140v-85"/><rect x="130" y="140" width="40" height="55"/>',
    spray: '<path d="M70 125h75l20 35H95zM130 105h45v22h-45z"/><path d="M185 95l45-25M190 118h55M185 142l45 25"/>',
    tray: '<ellipse class="i-shadow" cx="150" cy="185" rx="98" ry="14"/><path class="i-sand" d="M45 130c0-14 11-25 25-25h160c14 0 25 11 25 25v18c0 12-10 22-22 22H67c-12 0-22-10-22-22z"/><rect class="i-sand-dark" x="60" y="103" width="180" height="10" rx="5"/><path class="i-line" d="M45 148h210"/><ellipse class="i-water" cx="105" cy="100" rx="26" ry="30"/><path class="i-line" d="M85 78c0-10 9-16 20-16s20 6 20 16"/><ellipse class="i-rose" cx="195" cy="112" rx="34" ry="12"/><ellipse class="i-shine" cx="97" cy="86" rx="7" ry="10"/>',
    infinity: '<path d="M70 120 C95 70,125 70,150 120 C175 170,205 170,230 120 C205 70,175 70,150 120 C125 170,95 170,70 120z"/>',
    runner: '<circle cx="145" cy="55" r="20"/><path d="M145 76l-25 50 45 20M132 100l-52 18M152 105l50-10M165 146l45 45M120 126l-28 55"/>',
    cake: '<path d="M80 105h140v80H80zM95 105c10 20 30 20 40 0 10 20 30 20 40 0 10 20 30 20 40 0"/><path d="M120 80v25M150 80v25M180 80v25"/>',
    road: '<path d="M105 190 L135 55 H165 L195 190 z"/><path d="M150 70v25M150 115v25M150 160v25"/>',
    sword: '<path d="M150 35l18 95-18 20-18-20zM105 150h90M138 160l-30 45M162 160l30 45"/>',
    sunrise: '<path d="M50 165h200M90 165a60 60 0 0 1 120 0M150 55v35M75 95l25 25M225 95l-25 25"/>',
    worker: '<circle cx="150" cy="72" r="25"/><path d="M105 175c10-50 80-50 90 0M120 72h60M128 52c10-20 34-20 44 0"/>',
    display: '<rect x="55" y="55" width="190" height="115" rx="10"/><path d="M120 195h60M150 170v25"/>',
    door: '<rect x="95" y="45" width="105" height="160" rx="6"/><circle cx="178" cy="128" r="5"/><path d="M200 125h35"/>',
    handshake: '<path d="M70 125l45-42 38 35M230 125l-45-42-38 35M115 118l55 55M145 118l45 42"/>',
    gate: '<path d="M65 190V65h170v125M95 190v-95h110v95M150 95v95"/>',
    haystack: '<path d="M55 175 C70 95,115 58,150 58 C195 58,230 105,245 175z"/><path d="M95 175l25-70M145 175l5-95M195 175l-25-72"/>',
    clock: '<circle cx="150" cy="115" r="65"/><path d="M150 75v45l35 22"/><path d="M90 45l-25 25M210 45l25 25"/>',
    book: '<path d="M65 65h75c20 0 30 12 30 28v100c0-16-10-28-30-28H65zM235 65h-65v128c0-16 10-28 30-28h35z"/>',
    arrows: '<path d="M65 105h145M210 105l-30-30M210 105l-30 30M235 155H90M90 155l30-30M90 155l30 30"/>',
    bray: '<ellipse cx="150" cy="140" rx="50" ry="58"/><path d="M120 90 98 25 138 78z"/><path d="M180 90 202 25 162 78z"/><path d="M150 178v20"/><circle cx="132" cy="128" r="4"/>',
    clay: '<ellipse cx="150" cy="185" rx="80" ry="12"/><path d="M108 185c-3-48 18-92 42-97 24 5 45 49 42 97"/><path d="M122 145c16-10 40-10 56 0"/>',
    fray: '<path d="M65 115h170"/><path d="M235 100l30-10M235 108l32-2M235 116l32 4M235 124l30 10"/><path d="M65 100l-30-10M65 108l-32-2M65 116l-32 4M65 124l-30 10"/>',
    gray: '<path d="M75 145a42 42 0 0 1 8-82 58 58 0 0 1 112-14 46 46 0 0 1 40 92z"/>',
    pray: '<path d="M150 55v140"/><path d="M150 55c-28 12-38 50-36 95 1 22 16 38 36 45"/><path d="M150 55c28 12 38 50 36 95-1 22-16 38-36 45"/><path d="M118 110h18M118 142h18M164 110h-18M164 142h-18"/>',
    sway: '<path d="M150 200c-4-55 22-95-4-135"/><circle cx="152" cy="55" r="40"/><path d="M95 200h130"/>',
    ace: '<ellipse class="i-shadow" cx="150" cy="205" rx="70" ry="12"/><path class="i-water" d="M118 100 L95 195 L130 175 L140 100Z"/><path class="i-water" d="M182 100 L205 195 L170 175 L160 100Z"/><circle class="i-sun" cx="150" cy="95" r="55"/><circle class="i-line" cx="150" cy="95" r="55"/><path class="i-ink" d="M150 62 L159 85 L184 85 L164 100 L172 123 L150 108 L128 123 L136 100 L116 85 L141 85Z"/><ellipse class="i-shine" cx="130" cy="76" rx="10" ry="7"/>',
    ape: '<ellipse class="i-shadow" cx="150" cy="205" rx="75" ry="12"/><circle class="i-sand-dark" cx="90" cy="92" r="28"/><circle class="i-sand-dark" cx="210" cy="92" r="28"/><circle class="i-sand" cx="150" cy="112" r="68"/><circle class="i-line" cx="150" cy="112" r="68"/><ellipse class="i-sand-dark" cx="150" cy="142" rx="42" ry="32"/><ellipse class="i-line" cx="150" cy="142" rx="42" ry="32"/><circle class="i-ink" cx="128" cy="100" r="7"/><circle class="i-ink" cx="172" cy="100" r="7"/><circle class="i-ink" cx="140" cy="145" r="4"/><circle class="i-ink" cx="160" cy="145" r="4"/><path class="i-line" d="M122 165q28 18 56 0"/><ellipse class="i-shine" cx="122" cy="86" rx="9" ry="6"/>',
    ate: '<ellipse class="i-shadow" cx="150" cy="205" rx="65" ry="12"/><path class="i-rose" d="M150 95c-38-30-85 5-82 50-3 45 35 75 82 75s85-30 82-75c3-45-44-80-82-50z"/><circle class="svgBg" cx="205" cy="118" r="26"/><path class="i-line" d="M150 95c-38-30-85 5-82 50-3 45 35 75 82 75s85-30 82-75c3-45-44-80-82-50z"/><path class="i-line" d="M150 95v-22"/><path class="i-leaf" d="M150 76c14-14 34-9 37 5s-14 24-37 15z"/><ellipse class="i-shine" cx="120" cy="112" rx="10" ry="14"/>',
    babe: '<ellipse class="i-shadow" cx="150" cy="205" rx="70" ry="12"/><circle class="i-sand" cx="150" cy="115" r="65"/><circle class="i-line" cx="150" cy="115" r="65" fill="none"/><path class="i-water" d="M95 80c10-25 40-35 55-35s45 10 55 35c-15-8-35-12-55-12s-40 4-55 12z"/><path class="i-line" d="M95 80c10-25 40-35 55-35s45 10 55 35c-15-8-35-12-55-12s-40 4-55 12z" fill="none"/><circle class="i-ink" cx="128" cy="112" r="6"/><circle class="i-ink" cx="172" cy="112" r="6"/><path class="i-line" d="M135 140q15 12 30 0"/><ellipse class="i-shine" cx="126" cy="98" rx="9" ry="6"/>',
    bade: '<ellipse class="i-shadow" cx="150" cy="205" rx="75" ry="12"/><rect class="i-sand" x="90" y="70" width="120" height="110" rx="8"/><rect class="i-line" x="90" y="70" width="120" height="110" rx="8" fill="none"/><circle class="i-water" cx="90" cy="70" r="14"/><circle class="i-water" cx="90" cy="180" r="14"/><circle class="i-water" cx="210" cy="70" r="14"/><circle class="i-water" cx="210" cy="180" r="14"/><path class="i-line" d="M110 100h80M110 125h80M110 150h55"/>',
    bake: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><rect class="i-sand" x="75" y="60" width="150" height="140" rx="14"/><rect class="i-line" x="75" y="60" width="150" height="140" rx="14" fill="none"/><rect class="i-sand-dark" x="95" y="110" width="110" height="70" rx="8"/><circle class="i-sun" cx="150" cy="80" r="12"/><circle class="i-ink" cx="105" cy="80" r="5"/><circle class="i-ink" cx="195" cy="80" r="5"/><path class="i-line" d="M115 145q35 20 70 0"/>',
    bale: '<ellipse class="i-shadow" cx="150" cy="205" rx="85" ry="12"/><rect class="i-sand" x="70" y="90" width="160" height="100" rx="10"/><rect class="i-line" x="70" y="90" width="160" height="100" rx="10" fill="none"/><path class="i-line" d="M70 115h160M70 165h160"/><path class="i-sand-dark" d="M90 90l-15 100M150 90v100M210 90l15 100"/>',
    bane: '<ellipse class="i-shadow" cx="150" cy="205" rx="80" ry="10"/><path class="i-sand" d="M90 140a45 45 0 0 1 8-89 60 60 0 0 1 116-8 46 46 0 0 1 36 97z"/><path class="i-line" d="M90 140a45 45 0 0 1 8-89 60 60 0 0 1 116-8 46 46 0 0 1 36 97z" fill="none"/><path class="i-sun" d="M150 150l-20 40h18l-10 35 40-50h-20z"/><path class="i-line" d="M150 150l-20 40h18l-10 35 40-50h-20z" fill="none"/>',
    bare: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><path class="i-line" d="M150 205V90"/><path class="i-line" d="M150 150l-45-40M150 135l50-35M150 115l-35-45M150 105l40-42M150 90l-20-35M150 90l25-30"/>',
    base: '<ellipse class="i-shadow" cx="150" cy="210" rx="85" ry="10"/><path class="i-sand" d="M100 200l20-90h60l20 90z"/><path class="i-line" d="M100 200l20-90h60l20 90z" fill="none"/><rect class="i-sand-dark" x="105" y="185" width="90" height="18" rx="4"/><circle class="i-sun" cx="150" cy="90" r="18"/><circle class="i-line" cx="150" cy="90" r="18" fill="none"/>',
    bate: '<ellipse class="i-shadow" cx="150" cy="210" rx="60" ry="10"/><path class="i-water" d="M150 60c35 0 55 30 55 60s-25 55-55 55-55-25-55-55 20-60 55-60z"/><path class="i-line" d="M150 60c35 0 55 30 55 60s-25 55-55 55-55-25-55-55 20-60 55-60z" fill="none"/><path class="i-line" d="M150 175l-8 12 8 10 8-10z"/><ellipse class="i-shine" cx="128" cy="95" rx="10" ry="14"/>',
    cage: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><rect class="i-sand" x="80" y="60" width="140" height="130" rx="8"/><rect class="i-line" x="80" y="60" width="140" height="130" rx="8" fill="none"/><path class="i-line" d="M100 60v130M120 60v130M140 60v130M160 60v130M180 60v130M200 60v130"/><circle class="i-ink" cx="150" cy="150" r="10"/>',
    came: '<ellipse class="i-shadow" cx="150" cy="210" rx="55" ry="10"/><path class="i-water" d="M150 50c-35 0-60 25-60 58 0 45 60 92 60 92s60-47 60-92c0-33-25-58-60-58z"/><path class="i-line" d="M150 50c-35 0-60 25-60 58 0 45 60 92 60 92s60-47 60-92c0-33-25-58-60-58z" fill="none"/><circle class="i-sand" cx="150" cy="108" r="30"/><circle class="i-line" cx="150" cy="108" r="30" fill="none"/><ellipse class="i-shine" cx="140" cy="95" rx="8" ry="6"/>',
    cane: '<ellipse class="i-shadow" cx="150" cy="210" rx="55" ry="10"/><rect class="i-sand" x="140" y="90" width="20" height="115" rx="10"/><path class="i-sand" d="M140 90c0-25 20-40 45-40 12 0 20 8 20 18 0 14-14 22-28 22h-37z"/><rect class="i-line" x="140" y="90" width="20" height="115" rx="10" fill="none"/><path class="i-line" d="M140 90c0-25 20-40 45-40 12 0 20 8 20 18 0 14-14 22-28 22h-37z" fill="none"/>',
    cape: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><path class="i-water" d="M150 60c-10 0-45 15-55 110 30-20 40-20 55-15 15-5 25-5 55 15-10-95-45-110-55-110z"/><path class="i-line" d="M150 60c-10 0-45 15-55 110 30-20 40-20 55-15 15-5 25-5 55 15-10-95-45-110-55-110z" fill="none"/><circle class="i-sun" cx="150" cy="55" r="14"/><circle class="i-line" cx="150" cy="55" r="14" fill="none"/>',
    care: '<ellipse class="i-shadow" cx="150" cy="205" rx="65" ry="10"/><path class="i-rose" d="M150 190c-45-30-75-55-75-90 0-24 18-40 38-40 16 0 28 10 37 25 9-15 21-25 37-25 20 0 38 16 38 40 0 35-30 60-75 90z"/><path class="i-line" d="M150 190c-45-30-75-55-75-90 0-24 18-40 38-40 16 0 28 10 37 25 9-15 21-25 37-25 20 0 38 16 38 40 0 35-30 60-75 90z" fill="none"/><ellipse class="i-shine" cx="112" cy="90" rx="10" ry="14"/>',
    case: '<ellipse class="i-shadow" cx="150" cy="210" rx="85" ry="10"/><rect class="i-sand" x="70" y="90" width="160" height="100" rx="10"/><rect class="i-line" x="70" y="90" width="160" height="100" rx="10" fill="none"/><rect class="i-sand-dark" x="120" y="70" width="60" height="25" rx="8"/><path class="i-line" d="M70 130h160"/><circle class="i-ink" cx="150" cy="160" r="5"/>',
    cate: '<ellipse class="i-shadow" cx="150" cy="205" rx="70" ry="10"/><ellipse class="i-sand" cx="150" cy="170" rx="80" ry="18"/><ellipse class="i-line" cx="150" cy="170" rx="80" ry="18" fill="none"/><path class="i-rose" d="M120 170c0-30 15-70 30-70s30 40 30 70z"/><path class="i-line" d="M120 170c0-30 15-70 30-70s30 40 30 70z" fill="none"/><circle class="i-sun" cx="150" cy="95" r="8"/>',
    cave: '<ellipse class="i-shadow" cx="150" cy="210" rx="90" ry="10"/><path class="i-sand-dark" d="M40 200c0-90 45-150 110-150s110 60 110 150z"/><path class="i-line" d="M40 200c0-90 45-150 110-150s110 60 110 150z" fill="none"/><ellipse class="i-ink" cx="150" cy="195" rx="45" ry="55"/>',
    dale: '<ellipse class="i-shadow" cx="150" cy="215" rx="95" ry="8"/><circle class="i-sun" cx="215" cy="70" r="30"/><path class="i-leaf" d="M-10 210C20 120 80 190 150 175S280 110 310 210z"/><path class="i-line" d="M-10 210C20 120 80 190 150 175S280 110 310 210z" fill="none"/>',
    dame: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><path class="i-sand" d="M100 190c5-35 25-55 50-55s45 20 50 55z"/><path class="i-line" d="M100 190c5-35 25-55 50-55s45 20 50 55z" fill="none"/><circle class="i-sand" cx="150" cy="120" r="45"/><circle class="i-line" cx="150" cy="120" r="45" fill="none"/><path class="i-water" d="M95 105c5-30 30-45 55-45s50 15 55 45c-15-10-35-15-55-15s-40 5-55 15z"/><path class="i-line" d="M95 105c5-30 30-45 55-45s50 15 55 45c-15-10-35-15-55-15s-40 5-55 15z" fill="none"/><circle class="i-ink" cx="132" cy="118" r="5"/><circle class="i-ink" cx="168" cy="118" r="5"/>',
    dane: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><path class="i-sand-dark" d="M100 100c-25-10-35 20-15 45z"/><path class="i-sand-dark" d="M200 100c25-10 35 20 15 45z"/><path class="i-line" d="M100 100c-25-10-35 20-15 45z" fill="none"/><path class="i-line" d="M200 100c25-10 35 20 15 45z" fill="none"/><circle class="i-sand" cx="150" cy="130" r="55"/><circle class="i-line" cx="150" cy="130" r="55" fill="none"/><circle class="i-ink" cx="130" cy="125" r="6"/><circle class="i-ink" cx="170" cy="125" r="6"/><ellipse class="i-ink" cx="150" cy="150" rx="8" ry="6"/>',
    daze: '<ellipse class="i-shadow" cx="150" cy="210" rx="65" ry="10"/><circle class="i-sand" cx="150" cy="130" r="55"/><circle class="i-line" cx="150" cy="130" r="55" fill="none"/><path class="i-line" d="M118 118a8 8 0 1 1 16 4a5 5 0 1 0-10-2"/><path class="i-line" d="M166 118a8 8 0 1 1 16 4a5 5 0 1 0-10-2"/><path class="i-line" d="M135 150q15 8 30 0"/><path class="i-sun" d="M85 75l5 15 15 5-15 5-5 15-5-15-15-5 15-5z"/><path class="i-sun" d="M215 90l4 10 10 4-10 4-4 10-4-10-10-4 10-4z"/>',
    face: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><circle class="i-sand" cx="150" cy="125" r="60"/><circle class="i-line" cx="150" cy="125" r="60" fill="none"/><circle class="i-ink" cx="128" cy="115" r="7"/><circle class="i-ink" cx="172" cy="115" r="7"/><path class="i-line" d="M120 150q30 20 60 0"/><ellipse class="i-shine" cx="122" cy="100" rx="10" ry="7"/>',
    fade: '<ellipse class="i-shadow" cx="150" cy="205" rx="90" ry="10"/><circle class="i-sun" cx="90" cy="130" r="35"/><circle class="i-line" cx="90" cy="130" r="35" fill="none"/><circle class="i-sun" cx="150" cy="130" r="35" opacity="0.6"/><circle class="i-sun" cx="210" cy="130" r="35" opacity="0.3"/>',
    fake: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><path class="i-sand" d="M150 60c-45 0-70 35-70 75 0 45 30 75 70 75s70-30 70-75c0-40-25-75-70-75z"/><path class="i-line" d="M150 60c-45 0-70 35-70 75 0 45 30 75 70 75s70-30 70-75c0-40-25-75-70-75z" fill="none"/><ellipse class="i-ink" cx="128" cy="130" rx="10" ry="6"/><ellipse class="i-ink" cx="172" cy="130" rx="10" ry="6"/><path class="i-line" d="M130 165q20 10 40 0"/><path class="i-line" d="M95 150c-10 5-15 15-10 25M205 150c10 5 15 15 10 25"/>',
    fame: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><path class="i-sun" d="M150 55l20 55 58 5-45 38 15 57-48-32-48 32 15-57-45-38 58-5z"/><path class="i-line" d="M150 55l20 55 58 5-45 38 15 57-48-32-48 32 15-57-45-38 58-5z" fill="none"/><ellipse class="i-shine" cx="135" cy="110" rx="10" ry="7"/>',
    fane: '<ellipse class="i-shadow" cx="150" cy="210" rx="90" ry="10"/><path class="i-sand" d="M70 110l80-45 80 45z"/><path class="i-line" d="M70 110l80-45 80 45z" fill="none"/><rect class="i-sand" x="60" y="110" width="180" height="15" rx="4"/><rect class="i-sand-dark" x="80" y="125" width="15" height="60"/><rect class="i-sand-dark" x="115" y="125" width="15" height="60"/><rect class="i-sand-dark" x="150" y="125" width="15" height="60"/><rect class="i-sand-dark" x="185" y="125" width="15" height="60"/><rect class="i-sand" x="60" y="185" width="180" height="15" rx="4"/>',
    fare: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><rect class="i-water" x="60" y="90" width="180" height="80" rx="10"/><rect class="i-line" x="60" y="90" width="180" height="80" rx="10" fill="none"/><circle class="svgBg" cx="150" cy="90" r="10"/><circle class="svgBg" cx="150" cy="170" r="10"/><path class="i-line" d="M150 100v70" stroke-dasharray="6 6"/><circle class="i-sun" cx="105" cy="130" r="18"/><circle class="i-line" cx="105" cy="130" r="18" fill="none"/>',
    fate: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><circle class="i-sand" cx="150" cy="125" r="65"/><circle class="i-line" cx="150" cy="125" r="65" fill="none"/><path class="i-line" d="M150 60v130M85 125h130M107 82l86 86M193 82l-86 86"/><circle class="i-sun" cx="150" cy="125" r="12"/>',
    fave: '<ellipse class="i-shadow" cx="150" cy="210" rx="65" ry="10"/><path class="i-sand" d="M120 190v-70h-25a15 15 0 0 1 0-30h15c-5-15 0-35 20-35 15 0 20 15 20 30v10h55a15 15 0 0 1 14 21l-15 55a20 20 0 0 1-19 14z"/><path class="i-line" d="M120 190v-70h-25a15 15 0 0 1 0-30h15c-5-15 0-35 20-35 15 0 20 15 20 30v10h55a15 15 0 0 1 14 21l-15 55a20 20 0 0 1-19 14z" fill="none"/>',
    faze: '<ellipse class="i-shadow" cx="150" cy="210" rx="65" ry="10"/><circle class="i-sand" cx="150" cy="125" r="60"/><circle class="i-line" cx="150" cy="125" r="60" fill="none"/><circle class="i-ink" cx="128" cy="110" r="9"/><circle class="i-ink" cx="172" cy="110" r="9"/><ellipse class="i-ink" cx="150" cy="150" rx="10" ry="14"/><path class="i-sun" d="M210 60l6 20h20l-16 13 6 20-16-12-16 12 6-20-16-13h20z"/><path class="i-line" d="M210 60l6 20h20l-16 13 6 20-16-12-16 12 6-20-16-13h20z" fill="none"/>',
  };
  return `<svg class="word-image" viewBox="0 0 300 230" role="img" aria-label="Picture for ${text}"><rect width="300" height="230" rx="26" class="svgBg"/><g class="svgStroke">${drawings[type] || drawings.display}</g><text x="150" y="215" text-anchor="middle" class="svgCaption">${text}</text></svg>`;
}

const LEVEL_LABEL = { 1: 'Level 1 · Short ay words', 2: 'Level 2 · Longer ay words' };

function wordCardTemplate(item) {
  const done = !!state.done[item.word];
  return `
    <article class="card ${done ? 'done' : ''}">
      ${done ? `<span class="done-badge" aria-hidden="true">${icon('check')}</span>` : ''}
      <div class="pic">${imageSvg(item.visual, item.word)}</div>
      <div>
        <h2>${markVowels(item.word)}</h2>
        <p class="arabic" dir="rtl">${escapeHtml(item.arabic)}</p>
        <p class="hint">${escapeHtml(item.hint)}</p>
      </div>
      <div class="actions">
        <button data-say="${item.word}" data-lang="en-US">${icon('speaker')}English</button>
        <button data-say="${item.word}. ${escapeHtml(item.hint)}" data-lang="en-US">${icon('chat')}Sentence cue</button>
        <button data-toggle="${item.word}" class="${done ? 'is-done' : ''}">${icon('check')}${done ? 'Known' : 'I know it'}</button>
      </div>
    </article>`;
}

function learnTemplate() {
  const filtered = WORDS.filter((word) => state.level === 'all' || word.level == state.level);
  const levels = [...new Set(filtered.map((item) => item.level))].sort((a, b) => a - b);
  return levels.map((level) => `
    <section class="level-group" data-level="${level}">
      <div class="level-heading"><span class="level-dot">${level}</span><h2>${LEVEL_LABEL[level] || `Level ${level}`}</h2></div>
      <div class="grid">${filtered.filter((item) => item.level === level).map(wordCardTemplate).join('')}</div>
    </section>`).join('');
}

function rulesTemplate() {
  return `<section class="rules">
    <h2>Pronunciation Rules from Phonetic Charts</h2>
    ${RULES.map((rule) => `<article class="rule"><h3>${escapeHtml(rule.title)}</h3><p>${escapeHtml(rule.note)}</p><ul>${rule.rows.map((row) => `<li><strong>${escapeHtml(row[0])}</strong> → <span class="ipa">${escapeHtml(row[1])}</span> <b>${escapeHtml(row[2])}</b> <button data-say="${escapeHtml(row[3])}" data-lang="en-US">${icon('speaker')}hear "${escapeHtml(row[3])}"</button></li>`).join('')}</ul></article>`).join('')}
  </section>`;
}

const FEEDBACK_ICON = { correct: 'check', incorrect: 'retry', listening: 'mic', error: 'alert' };

function practiceTemplate() {
  return `<section class="grid">${PhonemeData.SOUND_PRACTICE.map((item) => {
    const result = state.practice[item.word];
    const status = result ? result.status : 'idle';
    return `
    <article class="card practice-card ${status === 'correct' ? 'done' : ''}">
      ${status === 'correct' ? `<span class="done-badge" aria-hidden="true">${icon('check')}</span>` : ''}
      <div>
        <p class="group">${escapeHtml(item.category)}</p>
        <h2>${highlightPattern(item.word, item.pattern)}</h2>
        <p class="hint">Target sound: <span class="ipa">${escapeHtml(item.label)}</span></p>
      </div>
      <div class="actions">
        <button data-say="${item.word}" data-lang="en-US">${icon('speaker')}Hear it</button>
        <button data-practice="${item.word}" class="${status === 'listening' ? 'is-listening' : ''}" ${status === 'listening' ? 'disabled' : ''}>${icon('mic')}${status === 'listening' ? 'Listening…' : 'Try it'}</button>
      </div>
      ${result ? `<p class="practice-feedback practice-${status}"><span class="feedback-icon" aria-hidden="true">${icon(FEEDBACK_ICON[status] || 'alert')}</span><span>${escapeHtml(result.message)}${result.transcript ? ` <em>(heard: "${escapeHtml(result.transcript)}")</em>` : ''}</span></p>` : ''}
    </article>`;
  }).join('')}</section>`;
}

function instructionsTemplate() {
  if (state.view === 'practice') {
    return `<ol>
        <li>Press "Hear it" to listen to the target word and sound.</li>
        <li>Press "Try it", allow microphone access, and say the word clearly.</li>
        <li>Feedback names which sound was off (the target vowel/digraph sound vs. the whole word), not just right or wrong.</li>
        <li>Some words share a spelling but not a sound (e.g. "ea" in "bread" vs. "beach") — each card is matched to its own word, not the letter pattern.</li>
      </ol>`;
  }
  return `<ol>
        <li>Choose a level so each student can work at a comfortable pace.</li>
        <li>Select a male or female voice, then press English or Arabic audio.</li>
        <li>Look at the picture, read the Arabic meaning, and repeat the highlighted red vowel team.</li>
        <li>Use Large text or High contrast for inclusion and accessibility.</li>
      </ol>`;
}

function render() {
  const score = Object.values(state.done).filter(Boolean).length;
  const pct = WORDS.length ? Math.round((score / WORDS.length) * 100) : 0;
  document.body.className = `${state.big ? 'big' : ''} ${state.contrast ? 'contrast' : ''}`;
  $('#app').innerHTML = `
    <header class="hero">
      <div>
        <p class="eyebrow">SoundLinks / روابط الأصوات</p>
        <h1>Interactive English Phonics for Arabic Speakers</h1>
        <p>Self-paced lessons highlight vowel teams in red, connect English sounds to Arabic cues, and let learners listen in English or Arabic, repeat, view pictures, and mark progress.</p>
      </div>
      <div class="progress" style="--pct:${pct}"><div class="progress-inner"><strong>${score}/${WORDS.length}</strong><span>words done</span></div></div>
    </header>
    <nav class="toolbar" aria-label="Learning controls">
      <div class="tabs" role="tablist">
        <button data-view="learn" role="tab" aria-selected="${state.view === 'learn'}" class="${state.view === 'learn' ? 'active' : ''}">${icon('book')}Learn words</button>
        <button data-view="rules" role="tab" aria-selected="${state.view === 'rules'}" class="${state.view === 'rules' ? 'active' : ''}">${icon('eye')}Rules</button>
        <button data-view="practice" role="tab" aria-selected="${state.view === 'practice'}" class="${state.view === 'practice' ? 'active' : ''}">${icon('mic')}Sound Practice</button>
      </div>
      <div class="controls-bar">
        <label>Voice <select data-voice aria-label="Choose text to speech voice"><option value="female">Female voice</option><option value="male">Male voice</option></select></label>
        <button data-big class="${state.big ? 'is-on' : ''}">${icon('textSize')}Large text</button>
        <button data-contrast class="${state.contrast ? 'is-on' : ''}">${icon('contrast')}High contrast</button>
        <select data-level aria-label="Choose pace level"><option value="all">All levels</option><option value="1">Level 1: short words</option><option value="2">Level 2: longer words</option></select>
        <button data-reset>${icon('reset')}Reset</button>
      </div>
    </nav>
    <section class="instructions">
      <h2>How to use / طريقة الاستخدام</h2>
      ${instructionsTemplate()}
    </section>
    ${state.view === 'learn' ? learnTemplate() : state.view === 'rules' ? rulesTemplate() : practiceTemplate()}`;
  $('[data-level]').value = state.level;
  $('[data-voice]').value = state.voiceMode;
  document.querySelectorAll('[data-view]').forEach((button) => button.onclick = () => setState('view', button.dataset.view));
  $('[data-big]').onclick = () => setState('big', !state.big);
  $('[data-contrast]').onclick = () => setState('contrast', !state.contrast);
  $('[data-reset]').onclick = () => { state.done = {}; localStorage.removeItem('donePhonics'); render(); };
  $('[data-level]').onchange = (event) => setState('level', event.target.value);
  $('[data-voice]').onchange = (event) => setState('voiceMode', event.target.value);
  document.querySelectorAll('[data-say]').forEach((button) => button.onclick = () => speak(button.dataset.say, button.dataset.lang));
  document.querySelectorAll('[data-toggle]').forEach((button) => button.onclick = () => toggleDone(button.dataset.toggle));
  document.querySelectorAll('[data-practice]').forEach((button) => button.onclick = () => {
    const item = PhonemeData.SOUND_PRACTICE.find((entry) => entry.word === button.dataset.practice);
    if (item) startPractice(item);
  });
}

render();

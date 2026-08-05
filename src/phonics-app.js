const WORDS = [
  { word: 'bay', arabic: 'خليج', hint: 'a curve of ocean by land', visual: 'water', level: 1 },
  { word: 'day', arabic: 'يوم', hint: 'sun-up time', visual: 'sun', level: 1 },
  { word: 'hay', arabic: 'تبن', hint: 'dry grass', visual: 'hay', level: 1 },
  { word: 'lay', arabic: 'يضع / يستلقي', hint: 'put down or rest', visual: 'bed', level: 1 },
  { word: 'may', arabic: 'قد / شهر مايو', hint: 'might, or the month May', visual: 'calendar', level: 1 },
  { word: 'pay', arabic: 'يدفع', hint: 'give money', visual: 'money', level: 1 },
  { word: 'ray', arabic: 'شعاع', hint: 'a line of light', visual: 'ray', level: 1 },
  { word: 'say', arabic: 'يقول', hint: 'speak words', visual: 'speech', level: 1 },
  { word: 'play', arabic: 'يلعب', hint: 'have fun or join a game', visual: 'game', level: 1 },
  { word: 'stay', arabic: 'يبقى', hint: 'remain in one place', visual: 'house', level: 1 },
  { word: 'spray', arabic: 'يرش', hint: 'send out small drops', visual: 'spray', level: 1 },
  { word: 'tray', arabic: 'صينية', hint: 'a flat holder for food', visual: 'tray', level: 1 },
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
    sun: '<circle cx="150" cy="80" r="35"/><path d="M150 20v25M150 115v25M90 80H65M235 80h-25M108 38l18 18M192 122l18 18M108 122l18-18M192 38l-18 18"/>',
    hay: '<path d="M60 150 L100 70 L140 150M120 150 L160 75 L205 150M45 150h190"/>',
    bed: '<rect x="55" y="90" width="175" height="55" rx="10"/><rect x="70" y="70" width="55" height="35" rx="8"/><path d="M55 145v25M230 145v25"/>',
    calendar: '<rect x="65" y="55" width="170" height="125" rx="12"/><path d="M65 88h170M105 40v30M195 40v30"/><text x="150" y="145" text-anchor="middle" class="svgText">May</text>',
    money: '<rect x="55" y="75" width="190" height="95" rx="12"/><circle cx="150" cy="123" r="28"/><path d="M72 100c18 0 25-8 25-18M228 145c-18 0-25 8-25 18"/>',
    ray: '<circle cx="78" cy="80" r="24"/><path d="M105 95 L235 155M105 80 L245 80M105 65 L235 15"/>',
    speech: '<path d="M62 70h175v75H115l-45 38v-38h-8z"/><path d="M95 105h110M95 128h75"/>',
    game: '<rect x="72" y="83" width="160" height="82" rx="35"/><path d="M110 105v38M91 124h38M184 112h1M205 136h1"/>',
    house: '<path d="M55 115 L150 45 L245 115"/><path d="M80 110v85h140v-85"/><rect x="130" y="140" width="40" height="55"/>',
    spray: '<path d="M70 125h75l20 35H95zM130 105h45v22h-45z"/><path d="M185 95l45-25M190 118h55M185 142l45 25"/>',
    tray: '<ellipse cx="150" cy="135" rx="95" ry="34"/><path d="M85 122c35-45 95-45 130 0"/>',
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
  };
  return `<svg class="word-image" viewBox="0 0 300 230" role="img" aria-label="Picture for ${text}"><rect width="300" height="230" rx="26" class="svgBg"/><g class="svgStroke">${drawings[type] || drawings.display}</g><text x="150" y="215" text-anchor="middle" class="svgCaption">${text}</text></svg>`;
}

function learnTemplate() {
  const filtered = WORDS.filter((word) => state.level === 'all' || word.level == state.level);
  return `<section class="grid">${filtered.map((item) => `
    <article class="card ${state.done[item.word] ? 'done' : ''}">
      <div class="pic">${imageSvg(item.visual, item.word)}</div>
      <div>
        <p class="group">${item.level === 1 ? 'Level 1: short ay words' : 'Level 2: longer ay words'}</p>
        <h2>${markVowels(item.word)}</h2>
        <p class="arabic" dir="rtl">${escapeHtml(item.arabic)}</p>
        <p class="hint">${escapeHtml(item.hint)}</p>
      </div>
      <div class="actions">
        <button data-say="${item.word}" data-lang="en-US">🔊 English</button>
        <button data-say="${escapeHtml(item.arabic)}" data-lang="ar-SA">🔊 العربية</button>
        <button data-say="${item.word}. ${escapeHtml(item.hint)}" data-lang="en-US">Sentence cue</button>
        <button data-toggle="${item.word}">${state.done[item.word] ? '✅ ' : ''}I know it</button>
      </div>
    </article>`).join('')}</section>`;
}

function rulesTemplate() {
  return `<section class="rules">
    <h2>Pronunciation Rules from Phonetic Charts</h2>
    ${RULES.map((rule) => `<article class="rule"><h3>${escapeHtml(rule.title)}</h3><p>${escapeHtml(rule.note)}</p><ul>${rule.rows.map((row) => `<li><strong>${escapeHtml(row[0])}</strong> → <span class="ipa">${escapeHtml(row[1])}</span> <b>${escapeHtml(row[2])}</b> <button data-say="${escapeHtml(row[3])}" data-lang="en-US">🔊 hear "${escapeHtml(row[3])}"</button></li>`).join('')}</ul></article>`).join('')}
  </section>`;
}

function practiceTemplate() {
  return `<section class="grid">${PhonemeData.SOUND_PRACTICE.map((item) => {
    const result = state.practice[item.word];
    const status = result ? result.status : 'idle';
    return `
    <article class="card practice-card ${status === 'correct' ? 'done' : ''}">
      <div>
        <p class="group">${escapeHtml(item.category)}</p>
        <h2>${highlightPattern(item.word, item.pattern)}</h2>
        <p class="hint">Target sound: <span class="ipa">${escapeHtml(item.label)}</span></p>
      </div>
      <div class="actions">
        <button data-say="${item.word}" data-lang="en-US">🔊 Hear it</button>
        <button data-practice="${item.word}" ${status === 'listening' ? 'disabled' : ''}>${status === 'listening' ? '🎙️ Listening…' : '🎤 Try it'}</button>
      </div>
      ${result ? `<p class="practice-feedback practice-${status}">${escapeHtml(result.message)}${result.transcript ? ` <em>(heard: "${escapeHtml(result.transcript)}")</em>` : ''}</p>` : ''}
    </article>`;
  }).join('')}</section>`;
}

function instructionsTemplate() {
  if (state.view === 'practice') {
    return `<ol>
        <li>Press "🔊 Hear it" to listen to the target word and sound.</li>
        <li>Press "🎤 Try it", allow microphone access, and say the word clearly.</li>
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
  document.body.className = `${state.big ? 'big' : ''} ${state.contrast ? 'contrast' : ''}`;
  $('#app').innerHTML = `
    <header class="hero">
      <div>
        <p class="eyebrow">SoundLinks / روابط الأصوات</p>
        <h1>Interactive English Phonics for Arabic Speakers</h1>
        <p>Self-paced lessons highlight vowel teams in red, connect English sounds to Arabic cues, and let learners listen in English or Arabic, repeat, view pictures, and mark progress.</p>
      </div>
      <div class="progress"><strong>${score}/${WORDS.length}</strong><span>words completed</span></div>
    </header>
    <nav class="toolbar" aria-label="Learning controls">
      <button data-view="learn" class="${state.view === 'learn' ? 'active' : ''}">📖 Learn words</button>
      <button data-view="rules" class="${state.view === 'rules' ? 'active' : ''}">👁️ Rules</button>
      <button data-view="practice" class="${state.view === 'practice' ? 'active' : ''}">🎤 Sound Practice</button>
      <label>Voice <select data-voice aria-label="Choose text to speech voice"><option value="female">Female voice</option><option value="male">Male voice</option></select></label>
      <button data-big>⚙️ Large text</button>
      <button data-contrast>⚙️ High contrast</button>
      <select data-level aria-label="Choose pace level"><option value="all">All levels</option><option value="1">Level 1: short words</option><option value="2">Level 2: longer words</option></select>
      <button data-reset>↺ Reset</button>
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

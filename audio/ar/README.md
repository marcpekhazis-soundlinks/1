# Arabic pronunciation audio

The app plays Arabic word audio from pre-recorded files in this folder,
**not** the browser's built-in text-to-speech. Browser/OS text-to-speech was
tried first but dropped for Arabic specifically because an Arabic voice
can't be relied on being installed — e.g. Windows Arabic language packs are
known to fail to install with errors like `0x80070002`, and many
browser/OS combinations simply ship no Arabic voice at all. English audio
still uses the browser's `speechSynthesis` (unchanged) since an English
voice is present on effectively every device.

None of the files below exist yet in this repository. Until they're added,
clicking Arabic audio in the app shows an on-screen notice naming the
missing file instead of failing silently.

## Expected files

Each entry in the `WORDS` array in `src/phonics-app.js` has an `audioAr`
field with the path below. Filenames are the English headword (ASCII,
lowercase) so they stay portable across filesystems — the Arabic text is
what should be *spoken* in the recording, not the filename.

| English word | Arabic text to record | Expected file |
|---|---|---|
| bay | خليج | `audio/ar/bay.mp3` |
| day | يوم | `audio/ar/day.mp3` |
| hay | تبن | `audio/ar/hay.mp3` |
| lay | يضع / يستلقي | `audio/ar/lay.mp3` |
| may | قد / شهر مايو | `audio/ar/may.mp3` |
| pay | يدفع | `audio/ar/pay.mp3` |
| ray | شعاع | `audio/ar/ray.mp3` |
| say | يقول | `audio/ar/say.mp3` |
| play | يلعب | `audio/ar/play.mp3` |
| stay | يبقى | `audio/ar/stay.mp3` |
| spray | يرش | `audio/ar/spray.mp3` |
| tray | صينية | `audio/ar/tray.mp3` |
| always | دائماً | `audio/ar/always.mp3` |
| runaway | هارب | `audio/ar/runaway.mp3` |
| birthday | يوم الميلاد | `audio/ar/birthday.mp3` |
| causeway | طريق مشهود / ممر مرتفع | `audio/ar/causeway.mp3` |
| claymore | سيف اسكتلندي / لغم مسطح | `audio/ar/claymore.mp3` |
| daybreak | بزوغ الفجر / شروق الشمس | `audio/ar/daybreak.mp3` |
| dayshift | وردية النهار | `audio/ar/dayshift.mp3` |
| display | يعرض / عرض | `audio/ar/display.mp3` |
| doorstay | مزلاجة الباب / دعامة الباب | `audio/ar/doorstay.mp3` |
| fairplay | لعب نزيه / نزاهة | `audio/ar/fairplay.mp3` |
| gateway | بوابة / مدخل | `audio/ar/gateway.mp3` |
| haystack | كدس التبن / رزمة قش | `audio/ar/haystack.mp3` |
| overstay | يبقى أكثر من المدة | `audio/ar/overstay.mp3` |
| playbook | كتاب اللعب / خطة اللعب | `audio/ar/playbook.mp3` |
| sideways | إلى الجانب / جانبياً | `audio/ar/sideways.mp3` |

A few entries list two Arabic senses separated by `/` (e.g. "يضع / يستلقي").
Pick one consistent rule before recording — either read both, or just the
first — since the recording should match what a learner sees on screen.

## Recording format

- **MP3**, one word/phrase per file, roughly 1–3 seconds.
- Normalize loudness across all files so cards don't sound louder/quieter
  than their neighbors.
- Use one consistent speaker (native or fluent Arabic) for every file —
  switching voices between words is jarring for learners comparing sounds.
- Keep a small amount of silence padding at the start/end so playback
  doesn't clip.

## How to get the recordings

1. **Record them yourself.** For a list this size (27 clips), this is the
   cheapest and gives you full control over clarity and tone — ask a native
   or fluent Arabic speaker to read the "Arabic text" column above into a
   phone voice memo app or Audacity, then trim/export each as the matching
   MP3 filename.
2. **A paid TTS API, run once, saved as files.** Services like Google Cloud
   Text-to-Speech, Amazon Polly, Microsoft Azure Speech, or ElevenLabs have
   much more reliable/higher-quality Arabic voices than a random user's
   device, and unlike this app's original browser-TTS approach you'd
   generate each clip **once** during setup and ship the resulting MP3 as a
   static file — no per-user dependency on their OS having an Arabic voice.
   Most of these have a free tier that comfortably covers 27 short clips.
3. **Existing recordings.** Sites like Forvo host native-speaker word
   pronunciations, but check the license before using them here — Forvo's
   terms are generally for personal reference/linking, not redistribution
   in an app — and note several entries above are full phrases (e.g. "بزوغ
   الفجر / شروق الشمس") that are unlikely to exist as ready-made single
   clips, so option 1 or 2 will cover more of the list than this route will.

Once a file lands at its documented path, playback works immediately — no
code changes needed.

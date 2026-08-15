const WORDS = [
  { word: "bay", arabic: "خَلِيجٌ", hint: "a curve of ocean by land", visual: "bay", level: 1, archived: true },
  { word: "day", arabic: "يَوْمٌ", hint: "sun-up time", visual: "day", level: 1, archived: true },
  { word: "hay", arabic: "تِبْنٌ", hint: "dry grass", visual: "hay", level: 1, archived: true },
  { word: "jay", arabic: "طَائِرُ القَيْقِ", hint: "a colorful, noisy bird", visual: "jay", level: 1, archived: true },
  { word: "lay", arabic: "يَضَعُ / يَسْتَلْقِي", hint: "put down or rest", visual: "bed", level: 1, archived: true },
  { word: "may", arabic: "قَدْ / شَهْرُ مَايُو", hint: "might, or the month May", visual: "calendar", level: 1, archived: true },
  { word: "pay", arabic: "يَدْفَعُ", hint: "give money", visual: "pay", level: 1, archived: true },
  { word: "ray", arabic: "شُعَاعٌ", hint: "a line of light", visual: "ray", level: 1, archived: true },
  { word: "say", arabic: "يَقُولُ", hint: "speak words", visual: "speech", level: 1, archived: true },
  { word: "way", arabic: "طَرِيقٌ / أُسْلُوبٌ", hint: "a path, or how something is done", visual: "road", level: 1, archived: true },
  { word: "away", arabic: "بَعِيدًا / ذَهَبَ", hint: "gone, or not in this place", visual: "arrows", level: 1, archived: true },
  { word: "bray", arabic: "نَهِيقُ الْحِمَارِ", hint: "the loud, harsh cry a donkey makes", visual: "bray", level: 1, archived: true },
  { word: "clay", arabic: "طِينٌ", hint: "soft, wet earth used for pottery", visual: "clay", level: 1, archived: true },
  { word: "fray", arabic: "مُشَاجَرَةٌ / يَتَهَرَّأُ", hint: "a scuffle, or threads wearing loose at an edge", visual: "fray", level: 1, archived: true },
  { word: "gray", arabic: "رَمَادِيٌّ", hint: "the color between black and white", visual: "gray", level: 1, archived: true },
  { word: "play", arabic: "يَلْعَبُ", hint: "have fun or join a game", visual: "game", level: 1, archived: true },
  { word: "pray", arabic: "يُصَلِّي / يَدْعُو", hint: "to speak to God", visual: "pray", level: 1, archived: true },
  { word: "slay", arabic: "يَقْتُلُ / يَذْبَحُ", hint: "to kill with a weapon", visual: "sword", level: 1, archived: true },
  { word: "stay", arabic: "يَبْقَى", hint: "remain in one place", visual: "house", level: 1, archived: true },
  { word: "sway", arabic: "يَتَأَرْجَحُ / يَتَمَايَلُ", hint: "to rock gently from side to side", visual: "sway", level: 1, archived: true },
  { word: "spray", arabic: "يَرُشُّ", hint: "send out small drops", visual: "spray", level: 1, archived: true },
  { word: "tray", arabic: "صِينِيَّةٌ", hint: "a flat holder for food", visual: "tray", level: 1, archived: true },
  { word: "ace", arabic: "بَطَلٌ", hint: "a champion or expert", visual: "ace", level: 1 },
  { word: 'ape', arabic: 'قِرْدٌ', hint: 'a large tailless monkey', visual: 'ape', level: 1 },
  { word: 'ate', arabic: 'أَكَلَ', hint: 'past tense of eat', visual: 'ate', level: 1 },
  { word: 'babe', arabic: 'طِفْلٌ رَضِيعٌ', hint: 'a baby, or a term for a dear one', visual: 'babe', level: 1 },
  { word: 'bade', arabic: 'أَمَرَ / طَلَبَ', hint: 'old word for asked or ordered (past tense of bid)', visual: 'bade', level: 1 },
  { word: 'bake', arabic: 'يَخْبِزُ', hint: 'to cook food in an oven', visual: 'bake', level: 1 },
  { word: 'bale', arabic: 'حُزْمَةٌ كَبِيرَةٌ', hint: 'a large bundle tied together, like hay', visual: 'bale', level: 1 },
  { word: 'bane', arabic: 'مَصْدَرُ أَذًى', hint: 'something that causes trouble or ruin', visual: 'bane', level: 1 },
  { word: 'bare', arabic: 'عَارٍ / مَكْشُوفٌ', hint: 'empty or without covering', visual: 'bare', level: 1 },
  { word: 'base', arabic: 'قَاعِدَةٌ', hint: 'the bottom part that supports something', visual: 'base', level: 1 },
  { word: 'bate', arabic: 'يُخَفِّفُ / يُقَلِّلُ', hint: 'to make something weaker or less', visual: 'bate', level: 1 },
  { word: 'cage', arabic: 'قَفَصٌ', hint: 'a barred box that holds an animal', visual: 'cage', level: 1 },
  { word: 'cake', arabic: 'كَعْكَةٌ', hint: 'a sweet baked dessert', visual: 'cake', level: 1 },
  { word: 'came', arabic: 'أَتَى / جَاءَ', hint: 'past tense of come; arrived', visual: 'came', level: 1 },
  { word: 'cane', arabic: 'عَصًا', hint: 'a stick used for walking, or the sugar plant', visual: 'cane', level: 1 },
  { word: 'cape', arabic: 'عَبَاءَةٌ / رِدَاءٌ', hint: 'a cloak worn over the shoulders', visual: 'cape', level: 1 },
  { word: 'care', arabic: 'يَهْتَمُّ / رِعَايَةٌ', hint: 'to feel concern for someone', visual: 'care', level: 1 },
  { word: 'case', arabic: 'حَقِيبَةٌ / حَالَةٌ', hint: 'a box or container, or a situation', visual: 'case', level: 1 },
  { word: 'cate', arabic: 'طَعَامٌ شَهِيٌّ', hint: 'a tasty treat (an old word for food)', visual: 'cate', level: 1 },
  { word: 'cave', arabic: 'كَهْفٌ', hint: 'a hollow space inside a hill or rock', visual: 'cave', level: 1 },
  { word: 'dale', arabic: 'وَادٍ', hint: 'a valley between hills', visual: 'dale', level: 1 },
  { word: "dame", arabic: "سَيِّدَةٌ", hint: "a woman (polite)", visual: "dame", level: 1, svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"70\" ry=\"10\"/><path class=\"i-sand\" d=\"M100 190c5-35 25-55 50-55s45 20 50 55z\"/><path class=\"i-line\" d=\"M100 190c5-35 25-55 50-55s45 20 50 55z\" fill=\"none\"/><circle class=\"i-sand\" cx=\"150\" cy=\"120\" r=\"45\"/><circle class=\"i-line\" cx=\"150\" cy=\"120\" r=\"45\" fill=\"none\"/><path class=\"i-water\" d=\"M95 105c5-30 30-45 55-45s50 15 55 45c-15-10-35-15-55-15s-40 5-55 15z\"/><path class=\"i-line\" d=\"M95 105c5-30 30-45 55-45s50 15 55 45c-15-10-35-15-55-15s-40 5-55 15z\" fill=\"none\"/><circle class=\"i-ink\" cx=\"132\" cy=\"118\" r=\"5\"/><circle class=\"i-ink\" cx=\"168\" cy=\"118\" r=\"5\"/>" },
  { word: "dane", arabic: "كَلْبٌ كَبِيرُ الْحَجْمِ / دَنْمَارْكِيٌّ", hint: "a large dog breed, the Great Dane or  a person who lives in Denmark", visual: "dane", level: 1, svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"75\" ry=\"10\"/><path class=\"i-sand-dark\" d=\"M100 100c-25-10-35 20-15 45z\"/><path class=\"i-sand-dark\" d=\"M200 100c25-10 35 20 15 45z\"/><path class=\"i-line\" d=\"M100 100c-25-10-35 20-15 45z\" fill=\"none\"/><path class=\"i-line\" d=\"M200 100c25-10 35 20 15 45z\" fill=\"none\"/><circle class=\"i-sand\" cx=\"150\" cy=\"130\" r=\"55\"/><circle class=\"i-line\" cx=\"150\" cy=\"130\" r=\"55\" fill=\"none\"/><circle class=\"i-ink\" cx=\"130\" cy=\"125\" r=\"6\"/><circle class=\"i-ink\" cx=\"170\" cy=\"125\" r=\"6\"/><ellipse class=\"i-ink\" cx=\"150\" cy=\"150\" rx=\"8\" ry=\"6\"/>" },
  { word: 'daze', arabic: 'ذُهُولٌ / دُوَارٌ', hint: 'a stunned, confused feeling', visual: 'daze', level: 1 },
  { word: 'face', arabic: 'وَجْهٌ', hint: 'the front part of your head', visual: 'face', level: 1 },
  { word: 'fade', arabic: 'يَتَلَاشَى', hint: 'to slowly become less clear or bright', visual: 'fade', level: 1 },
  { word: 'fake', arabic: 'مُزَيَّفٌ', hint: 'not real; a copy', visual: 'fake', level: 1 },
  { word: 'fame', arabic: 'شُهْرَةٌ', hint: 'being known and admired by many people', visual: 'fame', level: 1 },
  { word: 'fane', arabic: 'مَعْبَدٌ', hint: 'an old, poetic word for a temple', visual: 'fane', level: 1 },
  { word: 'fare', arabic: 'أُجْرَةُ السَّفَرِ', hint: 'the money paid to travel', visual: 'fare', level: 1 },
  { word: 'fate', arabic: 'قَدَرٌ / مَصِيرٌ', hint: 'what will happen to someone; destiny', visual: 'fate', level: 1 },
  { word: 'fave', arabic: 'الْمُفَضَّلُ', hint: 'a short way to say favorite', visual: 'fave', level: 1 },
  { word: 'faze', arabic: 'يُقْلِقُ / يُرْبِكُ', hint: 'to disturb or upset someone', visual: 'faze', level: 1 },
  { word: 'gate', arabic: 'بَوَّابَةٌ', hint: 'a barrier that opens to let you through', visual: 'gate', level: 1 },
  { word: 'gave', arabic: 'أَعْطَى', hint: 'past tense of give', visual: 'gave', level: 1 },
  { word: "gade", arabic: "ذَهَبَ (كَلِمَةٌ قَدِيمَةٌ)", hint: "an old dialect word for went, past tense of go", visual: "gade", level: 1, archived: true },
  { word: "gage", arabic: "رَهْنٌ / تَعَهُّدٌ", hint: "something given as a promise or pledge", visual: "gage", level: 1, archived: true },
  { word: 'gale', arabic: 'عَاصِفَةٌ قَوِيَّةٌ', hint: 'a very strong wind', visual: 'gale', level: 1 },
  { word: 'game', arabic: 'لُعْبَةٌ', hint: 'a fun activity with rules', visual: 'game', level: 1 },
  { word: 'gape', arabic: 'يُحَدِّقُ بِذُهُولٍ', hint: 'to stare with your mouth wide open', visual: 'gape', level: 1 },
  { word: 'gaze', arabic: 'يُحَدِّقُ / يَنْظُرُ طَوِيلًا', hint: 'to look at something for a long time', visual: 'gaze', level: 1 },
  { word: 'hake', arabic: 'سَمَكُ النَّازِلِيِّ', hint: 'a type of edible sea fish', visual: 'hake', level: 1 },
  { word: 'hale', arabic: 'قَوِيٌّ وَبِصِحَّةٍ جَيِّدَةٍ', hint: "healthy and strong, as in 'hale and hearty'", visual: 'hale', level: 1 },
  { word: "hame", arabic: "الْمَنْزِلُ (كَلِمَةٌ اسْكُتْلَنْدِيَّةٌ قَدِيمَةٌ)", hint: "an old Scots dialect word for home", visual: "hame", level: 1, archived: true },
  { word: 'hare', arabic: 'أَرْنَبٌ بَرِّيٌّ', hint: 'a fast animal like a big rabbit with long ears', visual: 'hare', level: 1 },
  { word: 'hate', arabic: 'يَكْرَهُ', hint: 'to dislike something very much', visual: 'hate', level: 1 },
  { word: 'haze', arabic: 'ضَبَابٌ خَفِيفٌ', hint: 'a light mist that makes things look unclear', visual: 'haze', level: 1 },
  { word: 'jade', arabic: 'الْيَشَمُ', hint: 'a green gemstone', visual: 'jade', level: 1 },
  { word: 'jake', arabic: 'بِخَيْرٍ / عَلَى مَا يُرَامُ (تَعْبِيرٌ قَدِيمٌ)', hint: 'old slang meaning fine or all right', visual: 'jake', level: 1 },
  { word: 'jape', arabic: 'مَزْحَةٌ / مَقْلَبٌ', hint: 'a joke or playful trick', visual: 'jape', level: 1 },
  { word: 'kale', arabic: 'كُرُنْبٌ مُجَعَّدٌ', hint: 'a leafy green vegetable', visual: 'kale', level: 1 },
  { word: 'kame', arabic: 'تَلٌّ رَمْلِيٌّ جَلِيدِيٌّ', hint: 'a small hill of sand left by a melting glacier', visual: 'kame', level: 1 },
  { word: 'lace', arabic: 'دَانْتِيلٌ / رِبَاطُ الْحِذَاءِ', hint: 'delicate patterned fabric, or a shoe string', visual: 'lace', level: 1 },
  { word: 'lade', arabic: 'يُحَمِّلُ (سَفِينَةً)', hint: 'to load a ship with cargo', visual: 'lade', level: 1 },
  { word: 'lake', arabic: 'بُحَيْرَةٌ', hint: 'a large body of water surrounded by land', visual: 'lake', level: 1 },
  { word: 'lame', arabic: 'أَعْرَجُ', hint: 'having an injured leg that makes walking hard', visual: 'lame', level: 1 },
  { word: 'lane', arabic: 'مَمَرٌّ / حَارَةٌ', hint: 'a narrow road or path', visual: 'lane', level: 1 },
  { word: 'late', arabic: 'مُتَأَخِّرٌ', hint: 'after the right or expected time', visual: 'late', level: 1 },
  { word: 'lase', arabic: 'يُصْدِرُ شُعَاعَ لَيْزَرٍ', hint: 'to give off a beam of laser light', visual: 'lase', level: 1 },
  { word: 'lave', arabic: 'يَغْسِلُ (كَلِمَةٌ أَدَبِيَّةٌ)', hint: 'an old, poetic word meaning to wash or bathe', visual: 'lave', level: 1 },
  { word: 'laze', arabic: 'يَتَكَاسَلُ / يَسْتَرْخِي', hint: 'to relax and do very little', visual: 'laze', level: 1 },
  { word: 'mace', arabic: 'دَبُّوسٌ حَرْبِيٌّ', hint: 'an old weapon with a heavy, spiked head', visual: 'mace', level: 1 },
  { word: 'made', arabic: 'صَنَعَ', hint: 'past tense of make; created something', visual: 'made', level: 1 },
  { word: 'make', arabic: 'يَصْنَعُ', hint: 'to create or build something', visual: 'make', level: 1 },
  { word: 'male', arabic: 'ذَكَرٌ', hint: 'a man or boy; not female', visual: 'male', level: 1 },
  { word: 'mane', arabic: 'عُرْفُ الْحِصَانِ', hint: "the long hair on a horse's or lion's neck", visual: 'mane', level: 1 },
  { word: 'mare', arabic: 'فَرَسٌ', hint: 'a female horse', visual: 'mare', level: 1 },
  { word: 'mate', arabic: 'رَفِيقٌ / زَمِيلٌ', hint: 'a friend or partner', visual: 'mate', level: 1 },
  { word: 'maze', arabic: 'مَتَاهَةٌ', hint: 'a puzzle of winding, connected paths', visual: 'maze', level: 1 },
  { word: 'nabe', arabic: 'حَيٌّ سَكَنِيٌّ (عَامِّيَّةٌ)', hint: 'informal, old slang word for a neighborhood', visual: 'nabe', level: 1 },
  { word: 'name', arabic: 'اِسْمٌ', hint: 'what a person or thing is called', visual: 'name', level: 1 },
  { word: 'nape', arabic: 'مُؤَخِّرَةُ الرَّقَبَةِ', hint: 'the back of the neck', visual: 'nape', level: 1 },
  { word: 'nave', arabic: 'صَحْنُ الْكَنِيسَةِ', hint: 'the long main hall of a church', visual: 'nave', level: 1 },
  { word: 'pace', arabic: 'خَطْوَةٌ / سُرْعَةٌ', hint: 'the speed of walking or moving', visual: 'pace', level: 1 },
  { word: 'pale', arabic: 'شَاحِبٌ', hint: 'light in color; having little color in the face', visual: 'pale', level: 1 },
  { word: 'page', arabic: 'صَفْحَةٌ', hint: 'one side of a sheet in a book', visual: 'page', level: 1 },
  { word: 'pane', arabic: 'لَوْحٌ زُجَاجِيٌّ', hint: 'a sheet of glass in a window', visual: 'pane', level: 1 },
  { word: 'pare', arabic: 'يُقَشِّرُ', hint: 'to cut away the outer layer, like peeling fruit', visual: 'pare', level: 1 },
  { word: 'pave', arabic: 'يُعَبِّدُ', hint: 'to cover a road with a hard, flat surface', visual: 'pave', level: 1 },
  { word: 'race', arabic: 'سِبَاقٌ', hint: 'a contest to see who is fastest', visual: 'race', level: 1 },
  { word: 'rage', arabic: 'غَضَبٌ شَدِيدٌ', hint: 'very strong, wild anger', visual: 'rage', level: 1 },
  { word: 'rake', arabic: 'مِجْرَفَةٌ', hint: 'a garden tool with teeth for gathering leaves', visual: 'rake', level: 1 },
  { word: 'rare', arabic: 'نَادِرٌ', hint: 'not common; unusual', visual: 'rare', level: 1 },
  { word: 'rate', arabic: 'مُعَدَّلٌ / سِعْرٌ', hint: 'how fast something happens, or its price', visual: 'rate', level: 1 },
  { word: 'rave', arabic: 'يَتَحَدَّثُ بِحَمَاسٍ', hint: 'to talk about something with wild excitement', visual: 'rave', level: 1 },
  { word: 'raze', arabic: 'يَهْدِمُ بِالْكَامِلِ', hint: 'to knock a building down completely', visual: 'raze', level: 1 },
  { word: 'safe', arabic: 'آمِنٌ', hint: 'free from danger or harm', visual: 'safe', level: 1 },
  { word: 'sage', arabic: 'حَكِيمٌ / نَبْتَةُ الْمَرْيَمِيَّةِ', hint: 'a wise person, or an herb used in cooking', visual: 'sage', level: 1 },
  { word: 'sake', arabic: 'مَصْلَحَةٌ / غَايَةٌ', hint: "a purpose or benefit, as in 'for your sake'", visual: 'sake', level: 1 },
  { word: 'sale', arabic: 'تَخْفِيضَاتٌ / بَيْعٌ', hint: 'selling goods, often at a lower price', visual: 'sale', level: 1 },
  { word: 'same', arabic: 'نَفْسُهُ / مُمَاثِلٌ', hint: 'exactly alike, not different', visual: 'same', level: 1 },
  { word: 'sane', arabic: 'عَاقِلٌ', hint: 'having a clear, healthy mind', visual: 'sane', level: 1 },
  { word: 'sate', arabic: 'يُشْبِعُ', hint: 'to satisfy a need completely, like hunger', visual: 'sate', level: 1 },
  { word: 'save', arabic: 'يُنْقِذُ / يُوَفِّرُ', hint: 'to keep something safe from harm, or keep money for later', visual: 'save', level: 1 },
  { word: 'take', arabic: 'يَأْخُذُ', hint: 'to get hold of something and carry it away', visual: 'take', level: 1 },
  { word: 'tale', arabic: 'حِكَايَةٌ', hint: 'a story, often about imagined people or events', visual: 'tale', level: 1 },
  { word: 'tame', arabic: 'أَلِيفٌ / يُرَوِّضُ', hint: 'gentle and not wild, or to train an animal to be gentle', visual: 'tame', level: 1 },
  { word: 'tape', arabic: 'شَرِيطٌ لَاصِقٌ', hint: 'a sticky strip used to join or stick things together', visual: 'tape', level: 1 },
  { word: 'tare', arabic: 'وَزْنُ الْعُبُوَّةِ الْفَارِغَةِ', hint: 'the weight of an empty container, used to find what is inside', visual: 'tare', level: 1 },
  { word: 'tase', arabic: 'يَصْعَقُ بِصَاعِقَةٍ كَهْرَبَائِيَّةٍ', hint: 'to shock someone with a jolt of electricity', visual: 'tase', level: 1 },
  { word: 'vane', arabic: 'دَفَّةُ اتِّجَاهِ الرِّيحِ', hint: 'a spinning arrow on a roof that shows which way the wind blows', visual: 'vane', level: 1 },
  { word: 'vase', arabic: 'مَزْهَرِيَّةٌ', hint: 'a container used to hold flowers', visual: 'vase', level: 1 },
  { word: 'vare', arabic: 'عَصًا رَفِيعَةٌ (كَلِمَةٌ قَدِيمَةٌ)', hint: 'an old dialect word for a thin rod or wand', visual: 'vare', level: 1 },
  { word: 'wade', arabic: 'يَخُوضُ الْمَاءَ', hint: 'to walk slowly through water or mud', visual: 'wade', level: 1 },
  { word: 'wage', arabic: 'أَجْرٌ', hint: 'money paid to someone for the work they do', visual: 'wage', level: 1 },
  { word: 'wale', arabic: 'خَطٌّ بَارِزٌ فِي النَّسِيجِ', hint: 'a raised ridge, like the lines in corduroy fabric', visual: 'wale', level: 1 },
  { word: 'wane', arabic: 'يَتَضَاءَلُ / يَخْبُو', hint: 'to slowly get smaller, like the moon losing its light', visual: 'wane', level: 1 },
  { word: 'ware', arabic: 'سِلْعَةٌ / بِضَاعَةٌ', hint: 'goods that are made to be sold', visual: 'ware', level: 1 },
  { word: 'wave', arabic: 'مَوْجَةٌ / يُلَوِّحُ', hint: 'a moving ridge of water, or to move your hand in greeting', visual: 'wave', level: 1 },
  { word: "always", arabic: "دَائِمًا", hint: "all the time", visual: "infinity", level: 2, archived: true },
  { word: "runaway", arabic: "هَارِبٌ", hint: "someone who escapes", visual: "runner", level: 2, archived: true },
  { word: "birthday", arabic: "يَوْمُ الْمِيلَادِ", hint: "a yearly celebration", visual: "cake", level: 2, archived: true },
  { word: "causeway", arabic: "طَرِيقٌ مَشْهُودٌ / مَمَرٌّ مُرْتَفِعٌ", hint: "a raised road over water", visual: "road", level: 2, archived: true },
  { word: "claymore", arabic: "سَيْفٌ اسْكُتْلَنْدِيٌّ / لُغْمٌ مُسَطَّحٌ", hint: "a large old sword", visual: "sword", level: 2, archived: true },
  { word: "daybreak", arabic: "بُزُوغُ الْفَجْرِ / شُرُوقُ الشَّمْسِ", hint: "first light in the morning", visual: "sunrise", level: 2, archived: true },
  { word: "dayshift", arabic: "وَرْدِيَّةُ النَّهَارِ", hint: "work time during the day", visual: "worker", level: 2, archived: true },
  { word: "display", arabic: "يَعْرِضُ / عَرْضٌ", hint: "show something clearly", visual: "display", level: 2, archived: true },
  { word: "doorstay", arabic: "مِزْلَاجَةُ الْبَابِ / دِعَامَةُ الْبَابِ", hint: "a support that holds a door", visual: "door", level: 2, archived: true },
  { word: "fairplay", arabic: "لَعِبٌ نَزِيهٌ / نَزَاهَةٌ", hint: "playing by the rules", visual: "handshake", level: 2, archived: true },
  { word: "gateway", arabic: "بَوَّابَةٌ / مَدْخَلٌ", hint: "an entrance", visual: "gate", level: 2, archived: true },
  { word: "haystack", arabic: "كُدْسُ التِّبْنِ / رُزْمَةُ قَشٍّ", hint: "a pile of hay", visual: "haystack", level: 2, archived: true },
  { word: "overstay", arabic: "يَبْقَى أَكْثَرَ مِنَ الْمُدَّةِ", hint: "stay too long", visual: "clock", level: 2, archived: true },
  { word: "playbook", arabic: "كِتَابُ اللَّعِبِ / خِطَّةُ اللَّعِبِ", hint: "a book of game plans", visual: "book", level: 2, archived: true },
  { word: "sideways", arabic: "إِلَى الْجَانِبِ / جَانِبِيًّا", hint: "to or from the side", visual: "arrows", level: 2, archived: true },
  { word: 'blame', arabic: 'يَلُومُ', hint: 'to say someone caused something bad', visual: 'blame', level: 1 },
  { word: 'brace', arabic: 'دِعَامَةٌ', hint: 'a support that holds something steady', visual: 'brace', level: 1 },
  { word: 'brave', arabic: 'شُجَاعٌ', hint: 'not afraid; willing to face danger', visual: 'brave', level: 1 },
  { word: 'chase', arabic: 'يُطَارِدُ', hint: 'to run after someone to catch them', visual: 'chase', level: 1 },
  { word: 'crane', arabic: 'رَافِعَةٌ / طَائِرُ مَالِكِ الْحَزِينِ', hint: 'a tall machine for lifting heavy things', visual: 'crane', level: 1 },
  { word: 'flame', arabic: 'لَهَبٌ', hint: 'the bright, hot part of a fire', visual: 'flame', level: 1 },
  { word: 'flare', arabic: 'وَهَجٌ / شُعْلَةٌ مُضِيئَةٌ', hint: 'a sudden bright burst of light', visual: 'flare', level: 1 },
  { word: 'frame', arabic: 'إِطَارٌ', hint: 'a border that holds a picture', visual: 'frame', level: 1 },
  { word: 'glaze', arabic: 'طِلَاءٌ لَامِعٌ', hint: 'a shiny coating on food or pottery', visual: 'glaze', level: 1 },
  { word: 'grace', arabic: 'رَشَاقَةٌ / نِعْمَةٌ', hint: 'smooth and elegant movement', visual: 'grace', level: 1 },
  { word: 'grate', arabic: 'شَبَكَةٌ مَعْدِنِيَّةٌ', hint: 'a metal grid, like over a drain', visual: 'grate', level: 1 },
  { word: 'grave', arabic: 'قَبْرٌ', hint: 'the place where someone is buried', visual: 'grave', level: 1 },
  { word: 'graze', arabic: 'يَرْعَى / يَخْدِشُ', hint: 'to eat grass, or to scrape the skin lightly', visual: 'graze', level: 1 },
  { word: 'paste', arabic: 'مَعْجُونٌ / غِرَاءٌ', hint: 'a soft, sticky substance used to stick things', visual: 'paste', level: 1 },
  { word: 'phase', arabic: 'مَرْحَلَةٌ', hint: 'a stage in a process of change', visual: 'phase', level: 1 },
  { word: 'plane', arabic: 'طَائِرَةٌ / مُسْتَوٍ', hint: 'a flying machine, or a flat surface', visual: 'plane', level: 1 },
  { word: 'plate', arabic: 'طَبَقٌ', hint: 'a flat dish you eat food from', visual: 'plate', level: 1 },
  { word: 'scare', arabic: 'يُخِيفُ', hint: 'to make someone feel afraid', visual: 'scare', level: 1 },
  { word: 'shade', arabic: 'ظِلٌّ', hint: 'a shadowed area sheltered from light', visual: 'shade', level: 1 },
  { word: 'shame', arabic: 'خَجَلٌ / عَارٌ', hint: 'a bad feeling from doing something wrong', visual: 'shame', level: 1 },
  { word: 'skate', arabic: 'يَتَزَلَّجُ', hint: 'to glide smoothly on skates or a board', visual: 'skate', level: 1 },
  { word: 'slate', arabic: 'لَوْحٌ إِرْدْوَازِيٌّ', hint: 'a flat, gray rock used for roofs or writing boards', visual: 'slate', level: 1 },
  { word: 'space', arabic: 'فَضَاءٌ / مَسَاحَةٌ', hint: 'the area beyond Earth, or empty room', visual: 'space', level: 1 },
  { word: 'spade', arabic: 'مِجْرَفَةٌ', hint: 'a tool used for digging', visual: 'spade', level: 1 },
  { word: 'stare', arabic: 'يُحَدِّقُ', hint: 'to look at something for a long time', visual: 'stare', level: 1 },
  { word: 'trade', arabic: 'تِجَارَةٌ / يَتَبَادَلُ', hint: 'to exchange one thing for another', visual: 'trade', level: 1 },
  { word: 'abate', arabic: 'يَخِفُّ / يَهْدَأُ', hint: 'to slowly become less strong, like a storm calming down', visual: 'abate', level: 1 },
  { word: 'aviator', arabic: 'طَيَّارٌ', hint: 'someone who flies an airplane', visual: 'aviator', level: 1 },
  { word: 'create', arabic: 'يَبْتَكِرُ / يَخْلُقُ', hint: 'to make something new', visual: 'create', level: 1 },
  { word: 'debate', arabic: 'مُنَاظَرَةٌ / نِقَاشٌ', hint: 'a discussion where people argue different views', visual: 'debate', level: 1 },
  { word: 'deflate', arabic: 'يُفَرِّغُ مِنَ الْهَوَاءِ', hint: 'to let the air out of something, like a balloon', visual: 'deflate', level: 1 },
  { word: 'dictate', arabic: 'يُمْلِي', hint: 'to say words out loud for someone else to write down', visual: 'dictate', level: 1 },
  { word: 'donate', arabic: 'يَتَبَرَّعُ', hint: 'to give money or things to help others', visual: 'donate', level: 1 },
  { word: 'educate', arabic: 'يُعَلِّمُ', hint: 'to teach someone new things', visual: 'educate', level: 1 },
  { word: 'elate', arabic: 'يُبْهِجُ / يُسْعِدُ كَثِيرًا', hint: 'to make someone feel extremely happy', visual: 'elate', level: 1 },
  { word: 'equate', arabic: 'يُسَاوِي', hint: 'to treat two things as equal or the same', visual: 'equate', level: 1 },
  { word: 'inflate', arabic: 'يَنْفُخُ', hint: 'to fill something with air, like a balloon', visual: 'inflate', level: 1 },
  { word: 'isolate', arabic: 'يَعْزِلُ', hint: 'to keep someone or something apart from others', visual: 'isolate', level: 1 },
  { word: 'locate', arabic: 'يُحَدِّدُ مَكَانًا', hint: 'to find the exact place where something is', visual: 'locate', level: 1 },
  { word: 'mandate', arabic: 'تَفْوِيضٌ / أَمْرٌ رَسْمِيٌّ', hint: 'an official order or permission to do something', visual: 'mandate', level: 1 },
  { word: 'nitrate', arabic: 'نِتْرَاتٌ', hint: 'a chemical compound often used in fertilizer', visual: 'nitrate', level: 1 },
  { word: 'operate', arabic: 'يُشَغِّلُ', hint: 'to run or work a machine', visual: 'operate', level: 1 },
  { word: 'ornate', arabic: 'مُزَخْرَفٌ', hint: 'covered with many fancy, decorative details', visual: 'ornate', level: 1 },
  { word: 'placate', arabic: 'يُهَدِّئُ / يُرْضِي', hint: 'to calm down someone who is upset', visual: 'placate', level: 1 },
  { word: 'potato', arabic: 'بَطَاطَا', hint: 'a round vegetable that grows underground', visual: 'potato', level: 1 },
  { word: 'predate', arabic: 'يَفْتَرِسُ', hint: 'when an animal hunts and eats another animal', visual: 'predate', level: 1 },
  { word: 'radiate', arabic: 'يُشِعُّ', hint: 'to send out light or heat from a center', visual: 'radiate', level: 1 },
  { word: 'rebate', arabic: 'اِسْتِرْدَادُ مَبْلَغٍ', hint: 'an amount of money given back to you after a purchase', visual: 'rebate', level: 1 },
  { word: 'relate', arabic: 'يَرْتَبِطُ / يَتَعَلَّقُ بِـ', hint: 'to be connected to or similar to something else', visual: 'relate', level: 1 },
  { word: 'rotate', arabic: 'يَدُورُ', hint: 'to turn around and around a central point', visual: 'rotate', level: 1 },
  { word: 'sedate', arabic: 'هَادِئٌ', hint: 'calm and unexcited, or to give medicine that makes someone calm and sleepy', visual: 'sedate', level: 1 },
  { word: 'tomato', arabic: 'طَمَاطِمُ', hint: 'a round, red fruit used like a vegetable in cooking', visual: 'tomato', level: 1 },
  { word: 'update', arabic: 'يُحَدِّثُ', hint: 'to add the newest information and make something current', visual: 'update', level: 1 },
  { word: 'vibrate', arabic: 'يَهْتَزُّ', hint: 'to shake quickly back and forth', visual: 'vibrate', level: 1 },
  { word: 'activate', arabic: 'يُنَشِّطُ / يُفَعِّلُ', hint: 'to make something start working', visual: 'activate', level: 1 },
  { word: 'allocate', arabic: 'يُخَصِّصُ', hint: 'to give a share of something for a certain purpose', visual: 'allocate', level: 1 },
  { word: 'amputate', arabic: 'يَبْتُرُ', hint: 'to remove a body part by surgery', visual: 'amputate', level: 1 },
  { word: 'conflate', arabic: 'يَخْلِطُ / يَدْمُجُ خَطَأً', hint: 'to mistakenly treat two different things as one', visual: 'conflate', level: 1 },
  { word: 'decorate', arabic: 'يُزَيِّنُ', hint: 'to make something look nicer by adding pretty things', visual: 'decorate', level: 1 },
  { word: 'dominate', arabic: 'يُهَيْمِنُ / يُسَيْطِرُ', hint: 'to have the most power or control over something', visual: 'dominate', level: 1 },
  { word: 'elongate', arabic: 'يُطِيلُ / يُمَدِّدُ', hint: 'to make something longer', visual: 'elongate', level: 1 },
  { word: 'emigrate', arabic: 'يُهَاجِرُ (يُغَادِرُ بَلَدَهُ)', hint: 'to leave your own country to live in another', visual: 'emigrate', level: 1 },
  { word: 'estimate', arabic: 'يُقَدِّرُ', hint: 'to guess a number or amount closely, without counting exactly', visual: 'estimate', level: 1 },
  { word: 'graduate', arabic: 'يَتَخَرَّجُ', hint: 'to finish school or college and earn a degree', visual: 'graduate', level: 1 },
  { word: 'initiate', arabic: 'يَبْدَأُ / يَسْتَهِلُّ', hint: 'to start something new', visual: 'initiate', level: 1 },
  { word: 'moderate', arabic: 'مُعْتَدِلٌ / يُعَدِّلُ', hint: 'in the middle; not too much and not too little', visual: 'moderate', level: 1 },
  { word: 'motivate', arabic: 'يُحَفِّزُ', hint: 'to give someone a reason to do something', visual: 'motivate', level: 1 },
  { word: 'narrate', arabic: 'يَرْوِي (قِصَّةً)', hint: 'to tell a story out loud', visual: 'narrate', level: 1 },
  { word: 'obligate', arabic: 'يُلْزِمُ', hint: 'to make someone required to do something', visual: 'obligate', level: 1 },
  { word: 'stagnate', arabic: 'يَرْكُدُ / يَتَوَقَّفُ عَنِ التَّطَوُّرِ', hint: 'to stop growing or changing; become still', visual: 'stagnate', level: 1 },
  { word: 'translate', arabic: 'يُتَرْجِمُ', hint: 'to change words from one language into another', visual: 'translate', level: 1 },
  { word: 'captivate', arabic: 'يَأْسِرُ / يَسْحَرُ', hint: "to hold someone's attention completely", visual: 'captivate', level: 1 },
  { word: 'compensate', arabic: 'يُعَوِّضُ', hint: 'to make up for a loss or harm', visual: 'compensate', level: 1 },
  { word: 'cultivate', arabic: 'يَزْرَعُ / يُنَمِّي', hint: 'to prepare land and grow plants, or to develop a skill', visual: 'cultivate', level: 1 },
  { word: 'deactivate', arabic: 'يُعَطِّلُ', hint: 'to turn something off or make it stop working', visual: 'deactivate', level: 1 },
  { word: 'eliminate', arabic: 'يُزِيلُ / يَسْتَبْعِدُ', hint: 'to remove or get rid of something completely', visual: 'eliminate', level: 1 },
  { word: 'exaggerate', arabic: 'يُبَالِغُ', hint: 'to make something sound bigger or more than it really is', visual: 'exaggerate', level: 1 },
  { word: 'illustrate', arabic: 'يُوَضِّحُ / يُصَوِّرُ', hint: 'to explain with pictures or clear examples', visual: 'illustrate', level: 1 },
  { word: 'infiltrate', arabic: 'يَتَسَلَّلُ', hint: 'to secretly get into a place or group', visual: 'infiltrate', level: 1 },
  { word: 'intoxicate', arabic: 'يُسْكِرُ / يُنَشِّي', hint: 'to make someone drunk or very excited', visual: 'intoxicate', level: 1 },
  { word: 'participate', arabic: 'يُشَارِكُ', hint: 'to take part in an activity with others', visual: 'participate', level: 1 },
  { word: 'pollinate', arabic: 'يُلَقِّحُ', hint: 'to carry pollen between flowers so they can make seeds', visual: 'pollinate', level: 1 },
  { word: 'regenerate', arabic: 'يَتَجَدَّدُ / يَنْمُو مِنْ جَدِيدٍ', hint: 'to grow back or become new and strong again', visual: 'regenerate', level: 1 },
  { word: 'replicate', arabic: 'يُكَرِّرُ / يَنْسَخُ', hint: 'to make an exact copy of something', visual: 'replicate', level: 1 },
  { word: 'terminate', arabic: 'يُنْهِي', hint: 'to bring something to an end', visual: 'terminate', level: 1 },
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

// ---------- Sound groups (vowel-team tabs) ----------
// The curriculum manuscript has one chapter per written spelling of a
// vowel sound: plain "a" as in cake, "ai" as in rain, "ay" as in day — all
// three spell the same Long A /eɪ/ sound. A word's chapter is derived
// purely from how it's spelled, never stored on the word itself, so adding
// a future sound family (Long E via "ee"/"ea", Long I via "igh"/"y", ...)
// is just one more entry in SOUND_GROUPS plus a matching case in
// highlightIndices() below — every tab, filter, tier grouping, and
// progress figure updates itself automatically, no per-word data change
// needed.
const SOUND_GROUPS = [
  { id: 'long-a', label: 'Long A' },
  { id: 'ai', label: 'AI' },
  { id: 'ay', label: 'AY' },
];

// Which sound-group tab a word belongs to, purely from its spelling.
// Checked most-specific-pattern-first so an "ai"/"ay" word is never
// mis-bucketed into the plain "a" chapter; anything matching neither
// digraph falls back to "long-a" (today that's every active word, since
// the "ai" chapter has no words yet and the "ay" chapter is archived).
function soundGroupId(word) {
  const lower = word.toLowerCase();
  if (lower.includes('ay')) return 'ay';
  if (lower.includes('ai')) return 'ai';
  return 'long-a';
}

// Which letter index(es) inside a word carry the long-vowel sound, for the
// red highlight on its card — e.g. just the "a" in "cake", "rain", "day",
// not the whole "ai"/"ay" spelling. This is a deliberate approximation
// rather than a full pronunciation model: for the "ai"/"ay" chapters it's
// the "a" of that digraph; for the plain "a" chapter it's the "a" in a
// silent-e syllable (cake, translate) or an open syllable (potato),
// falling back to the last "a" in the word when neither pattern is found.
function highlightIndices(word) {
  const lower = word.toLowerCase();
  const group = soundGroupId(word);
  if (group === 'ay' || group === 'ai') {
    const indices = [];
    const digraph = new RegExp(group, 'g');
    let match;
    while ((match = digraph.exec(lower))) indices.push(match.index);
    return indices;
  }
  const indices = new Set();
  const silentE = /a(?=[bcdfghjklmnpqrstvwxyz]e)/g;
  const openSyllable = /a(?=[bcdfghjklmnpqrstvwxyz][aeiou])/g;
  let match;
  while ((match = silentE.exec(lower))) indices.add(match.index);
  while ((match = openSyllable.exec(lower))) indices.add(match.index);
  if (!indices.size) {
    const last = lower.lastIndexOf('a');
    if (last !== -1) indices.add(last);
  }
  return [...indices].sort((a, b) => a - b);
}

function highlightWord(word) {
  const targets = new Set(highlightIndices(word));
  return [...word].map((char, i) => (targets.has(i) ? `<span class="vowel">${escapeHtml(char)}</span>` : escapeHtml(char))).join('');
}

// Distinct pacing levels actually present in a sound group's active
// (non-archived) words, in order — read from WORDS rather than hardcoded
// so a future "Level 3" (or a brand-new sound group) just works with no
// change to the locking logic below.
function groupLevels(groupId) {
  return [...new Set(WORDS.filter((word) => !word.archived && soundGroupId(word.word) === groupId).map((word) => word.level))].sort((a, b) => a - b);
}

function wordsForGroupLevel(groupId, level) {
  return WORDS.filter((word) => !word.archived && soundGroupId(word.word) === groupId && word.level === level);
}

// A level unlocks once every word in the level directly before it (within
// the same sound group) is marked "known" via the existing done/known
// mechanism. The first level of any group is always unlocked. Admin mode
// bypasses this entirely — locking is a learner-facing pacing device, not
// a restriction on admin content access, so admin edits/views reach every
// level regardless of completion.
function isLevelUnlocked(groupId, level) {
  if (state.admin) return true;
  const levels = groupLevels(groupId);
  const index = levels.indexOf(level);
  if (index <= 0) return true;
  const previousWords = wordsForGroupLevel(groupId, levels[index - 1]);
  return previousWords.length > 0 && previousWords.every((word) => state.done[word.word]);
}

// Words-known count/total/percent for one level, for the sidebar's
// per-level progress indicator.
function levelProgress(groupId, level) {
  const words = wordsForGroupLevel(groupId, level);
  const known = words.filter((word) => state.done[word.word]).length;
  const total = words.length;
  return { known, total, pct: total ? Math.round((known / total) * 100) : 0 };
}

let state = {
  view: 'learn',
  soundGroup: SOUND_GROUPS[0].id,
  level: groupLevels(SOUND_GROUPS[0].id)[0] || 1,
  // Sidebar group expand/collapse, keyed by group id. A group not present
  // here defaults to expanded only while it's the active soundGroup — see
  // isGroupExpanded().
  expandedGroups: {},
  big: false,
  contrast: false,
  dyslexia: false,
  voiceMode: localStorage.voiceMode || 'female',
  done: JSON.parse(localStorage.donePhonics || '{}'),
  practice: {},
  // Admin content-management mode — off by default, never persisted, so a
  // page reload always lands back in the plain learner experience. See the
  // "ADMIN MODE" section near the end of this file.
  admin: false,
  showArchived: false,
  editingWord: null,
  adminError: '',
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
  dyslexia: '<text x="1" y="16" font-size="13" font-weight="800" fill="currentColor" stroke="none" font-family="inherit">A</text><path d="M11 12h3" stroke-dasharray="2 2"/><text x="15" y="16" font-size="13" font-weight="800" fill="currentColor" stroke="none" font-family="inherit">a</text>',
  reset: '<path d="M4 5v6h6"/><path d="M5.3 15A8 8 0 1 0 6 8"/>',
  retry: '<path d="M4 12a8 8 0 0 1 13.9-5.4M20 3v6h-6"/><path d="M20 12a8 8 0 0 1-13.9 5.4M4 21v-6h6"/>',
  alert: '<path d="M12 3 2 20h20z"/><path d="M12 9.5v5"/><circle cx="12" cy="17.3" r="1" fill="currentColor" stroke="none"/>',
  dot: '<circle cx="12" cy="12" r="3" fill="currentColor" stroke="none"/>',
  pencil: '<path d="M4 20l1-5L16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-5 1z"/><path d="M14.5 5.5l4 4"/>',
  trash: '<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>',
  undo: '<path d="M4 12a8 8 0 1 0 8-8"/><path d="M4 4v6h6"/>',
  close: '<path d="M5 5l14 14M19 5L5 19"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  chevron: '<path d="M6 9l6 6 6-6"/>',
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

// Hoisted to module scope (not just local to imageSvg) so admin mode can
// look up a word's *default* illustration markup to prefill the edit form
// before any per-word override (item.svg) exists.
const WORD_SVGS = {
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
    gave: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><rect class="i-rose" x="85" y="110" width="130" height="90" rx="10"/><rect class="i-line" x="85" y="110" width="130" height="90" rx="10" fill="none"/><rect class="i-sand" x="140" y="110" width="20" height="90"/><rect class="i-sand" x="85" y="145" width="130" height="20"/><path class="i-sand-dark" d="M150 110c-15-25-45-25-45-5s30 20 45 5zM150 110c15-25 45-25 45-5s-30 20-45 5z"/>',
    gade: '<ellipse class="i-shadow" cx="150" cy="210" rx="85" ry="10"/><path class="i-line" d="M70 190C90 140 120 110 150 90S210 50 230 20" stroke-dasharray="14 14" fill="none"/><ellipse class="i-ink" cx="90" cy="175" rx="10" ry="16" transform="rotate(-30 90 175)"/><ellipse class="i-ink" cx="130" cy="140" rx="10" ry="16" transform="rotate(-30 130 140)"/><ellipse class="i-ink" cx="170" cy="100" rx="10" ry="16" transform="rotate(-30 170 100)"/><ellipse class="i-ink" cx="205" cy="55" rx="10" ry="16" transform="rotate(-30 205 55)"/>',
    gage: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><path class="i-sand" d="M110 190v-70c0-10 8-18 18-18s18 8 18 18v20c0-10 8-18 18-18s18 8 18 18v10c0-10 8-18 18-18s16 8 16 18v58z"/><path class="i-line" d="M110 190v-70c0-10 8-18 18-18s18 8 18 18v20c0-10 8-18 18-18s18 8 18 18v10c0-10 8-18 18-18s16 8 16 18v58z" fill="none"/><path class="i-line" d="M110 155c-15 5-20 20-15 35" fill="none"/>',
    gale: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><path class="i-sand-dark" d="M150 200V90"/><path class="i-leaf" d="M150 90c40-10 65 10 55 35-30-5-45-15-55-35zM150 110c35 0 55 25 42 48-25-10-38-25-42-48z"/><path class="i-line" d="M60 60q20-15 40 0t40 0t40 0t40 0" fill="none"/><path class="i-line" d="M50 100q20-15 40 0t40 0t40 0t40 0" fill="none"/>',
    gape: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><circle class="i-sand" cx="150" cy="120" r="65"/><circle class="i-line" cx="150" cy="120" r="65" fill="none"/><circle class="i-ink" cx="122" cy="100" r="9"/><circle class="i-ink" cx="178" cy="100" r="9"/><ellipse class="i-ink" cx="150" cy="155" rx="26" ry="30"/><ellipse class="i-rose" cx="150" cy="160" rx="16" ry="18"/>',
    gaze: '<ellipse class="i-shadow" cx="150" cy="205" rx="80" ry="10"/><path class="i-white" d="M40 130c30-45 80-65 110-65s80 20 110 65c-30 45-80 65-110 65s-80-20-110-65z"/><path class="i-line" d="M40 130c30-45 80-65 110-65s80 20 110 65c-30 45-80 65-110 65s-80-20-110-65z" fill="none"/><circle class="i-sand-dark" cx="150" cy="130" r="38"/><circle class="i-ink" cx="150" cy="130" r="20"/><ellipse class="i-shine" cx="138" cy="118" rx="8" ry="6"/>',
    hake: '<ellipse class="i-shadow" cx="150" cy="205" rx="85" ry="10"/><path class="i-water" d="M60 140c10-35 50-55 95-55s80 25 90 55c-10 30-45 50-90 50s-85-20-95-50z"/><path class="i-line" d="M60 140c10-35 50-55 95-55s80 25 90 55c-10 30-45 50-90 50s-85-20-95-50z" fill="none"/><path class="i-sand-dark" d="M245 140l35-25-10 25 10 25z"/><circle class="i-ink" cx="100" cy="125" r="7"/><path class="i-line" d="M110 155q30 12 60 0" fill="none"/>',
    hale: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><circle class="i-sand" cx="150" cy="80" r="35"/><circle class="i-line" cx="150" cy="80" r="35" fill="none"/><path class="i-rose" d="M100 200c-5-45 15-75 50-75s55 30 50 75z"/><path class="i-line" d="M100 200c-5-45 15-75 50-75s55 30 50 75z" fill="none"/><path class="i-rose" d="M185 150c25-5 40 10 35 30s-30 20-45 5z"/><path class="i-line" d="M185 150c25-5 40 10 35 30s-30 20-45 5z" fill="none"/>',
    hame: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><path class="i-sand" d="M60 195v-80l90-55 90 55v80z"/><path class="i-line" d="M60 195v-80l90-55 90 55v80z" fill="none"/><rect class="i-sand-dark" x="130" y="140" width="40" height="55"/><rect class="i-water" x="85" y="120" width="30" height="30"/>',
    hare: '<ellipse class="i-shadow" cx="150" cy="212" rx="80" ry="10"/><ellipse class="i-sand" cx="150" cy="150" rx="60" ry="45"/><ellipse class="i-line" cx="150" cy="150" rx="60" ry="45" fill="none"/><circle class="i-sand" cx="150" cy="95" r="35"/><circle class="i-line" cx="150" cy="95" r="35" fill="none"/><ellipse class="i-sand" cx="125" cy="45" rx="12" ry="38" transform="rotate(-12 125 45)"/><ellipse class="i-sand" cx="175" cy="45" rx="12" ry="38" transform="rotate(12 175 45)"/><ellipse class="i-line" cx="125" cy="45" rx="12" ry="38" transform="rotate(-12 125 45)" fill="none"/><ellipse class="i-line" cx="175" cy="45" rx="12" ry="38" transform="rotate(12 175 45)" fill="none"/><circle class="i-ink" cx="135" cy="90" r="6"/><circle class="i-ink" cx="165" cy="90" r="6"/>',
    hate: '<ellipse class="i-shadow" cx="150" cy="210" rx="65" ry="10"/><path class="i-rose" d="M110 90c-25 0-45 20-45 45 0 40 55 75 85 95 30-20 85-55 85-95 0-25-20-45-45-45-18 0-32 10-40 25-8-15-22-25-40-25z"/><path class="i-line" d="M110 90c-25 0-45 20-45 45 0 40 55 75 85 95 30-20 85-55 85-95 0-25-20-45-45-45-18 0-32 10-40 25-8-15-22-25-40-25z" fill="none"/><path class="i-line" d="M150 115l-25 45h30l-15 40" stroke-width="8" fill="none"/>',
    haze: '<ellipse class="i-shadow" cx="150" cy="210" rx="90" ry="10"/><circle class="i-sun" cx="150" cy="110" r="45" opacity="0.5"/><path class="i-line" d="M60 150q20-12 40 0t40 0t40 0t40 0" fill="none"/><path class="i-line" d="M50 175q20-12 40 0t40 0t40 0t40 0" fill="none"/><path class="i-line" d="M70 125q20-12 40 0t40 0t40 0" fill="none"/>',
    jade: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><path class="i-leaf" d="M150 60l55 40-20 65h-70l-20-65z"/><path class="i-line" d="M150 60l55 40-20 65h-70l-20-65z" fill="none"/><path class="i-line" d="M150 60v40M95 100h110M115 100l-15 65M185 100l15 65" fill="none"/><ellipse class="i-shine" cx="130" cy="90" rx="10" ry="7"/>',
    jake: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><circle class="i-sand" cx="150" cy="120" r="70"/><circle class="i-line" cx="150" cy="120" r="70" fill="none"/><path class="i-line" d="M115 122l25 25 45-50" stroke-width="12" fill="none"/>',
    jape: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><path class="i-rose" d="M90 130c0-45 25-75 60-75s60 30 60 75c15-10 25 5 15 20-10 12-25 8-30-2-5 20-25 35-45 35s-40-15-45-35c-5 10-20 14-30 2-10-15 0-30 15-20z"/><path class="i-line" d="M90 130c0-45 25-75 60-75s60 30 60 75c15-10 25 5 15 20-10 12-25 8-30-2-5 20-25 35-45 35s-40-15-45-35c-5 10-20 14-30 2-10-15 0-30 15-20z" fill="none"/><circle class="i-ink" cx="128" cy="120" r="7"/><circle class="i-ink" cx="172" cy="120" r="7"/><path class="i-line" d="M125 155q25 18 50 0" fill="none"/>',
    kale: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><path class="i-leaf" d="M150 200c-30-10-55-45-45-90 20 5 35 20 40 40 0-30 10-55 35-70 15 25 15 55 0 80 20-15 45-15 60 0-15 30-45 45-75 45z"/><path class="i-line" d="M150 200c-30-10-55-45-45-90 20 5 35 20 40 40 0-30 10-55 35-70 15 25 15 55 0 80 20-15 45-15 60 0-15 30-45 45-75 45z" fill="none"/><path class="i-line" d="M150 200v-90" fill="none"/>',
    kame: '<ellipse class="i-shadow" cx="150" cy="205" rx="95" ry="10"/><path class="i-sand" d="M55 195c10-70 55-110 95-110s85 40 95 110z"/><path class="i-line" d="M55 195c10-70 55-110 95-110s85 40 95 110z" fill="none"/><path class="i-sand-dark" d="M90 195c5-45 30-75 60-75s55 30 60 75z"/><circle class="i-water" cx="150" cy="65" r="16"/>',
    lace: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><rect class="i-sand" x="70" y="120" width="70" height="45" rx="10"/><rect class="i-sand" x="160" y="120" width="70" height="45" rx="10"/><rect class="i-line" x="70" y="120" width="70" height="45" rx="10" fill="none"/><rect class="i-line" x="160" y="120" width="70" height="45" rx="10" fill="none"/><path class="i-line" d="M105 120v45M195 120v45M140 142h20" stroke-width="8" fill="none"/>',
    lade: '<ellipse class="i-shadow" cx="150" cy="205" rx="90" ry="10"/><path class="i-water" d="M50 175 L250 175 L225 195 L75 195z"/><path class="i-line" d="M50 175 L250 175 L225 195 L75 195z" fill="none"/><rect class="i-sand" x="110" y="120" width="40" height="40" rx="4"/><rect class="i-sand-dark" x="155" y="135" width="35" height="30" rx="4"/><path class="i-line" d="M150 100v75" stroke-dasharray="4 4" fill="none"/>',
    lake: '<ellipse class="i-water" cx="150" cy="150" rx="95" ry="45"/><ellipse class="i-line" cx="150" cy="150" rx="95" ry="45" fill="none"/><circle class="i-sun" cx="90" cy="60" r="30"/><path class="i-leaf" d="M215 95c15-20 45-20 55 0-20 15-40 15-55 0z"/><path class="i-line" d="M110 145q20-10 40 0t40 0" fill="none"/>',
    lame: '<ellipse class="i-shadow" cx="150" cy="210" rx="65" ry="10"/><circle class="i-sand" cx="150" cy="70" r="28"/><circle class="i-line" cx="150" cy="70" r="28" fill="none"/><path class="i-rose" d="M130 98v55l-25 47M170 98v40l30 60"/><path class="i-line" d="M130 98v55l-25 47M170 98v40l30 60" fill="none" stroke-width="10"/><path class="i-line" d="M85 160l20 45" stroke-width="9" fill="none"/>',
    lane: '<ellipse class="i-shadow" cx="150" cy="215" rx="90" ry="8"/><path class="i-sand" d="M110 210 L130 60 L170 60 L190 210z"/><path class="i-line" d="M110 210 L130 60 L170 60 L190 210z" fill="none"/><path class="i-white" d="M148 90l4 25M144 145l6 30M150 195l3 15"/>',
    late: '<ellipse class="i-shadow" cx="150" cy="210" rx="65" ry="10"/><circle class="i-sand" cx="150" cy="120" r="70"/><circle class="i-line" cx="150" cy="120" r="70" fill="none"/><path class="i-line" d="M150 120V70M150 120l35 20" stroke-width="9" fill="none"/><circle class="i-sun" cx="90" cy="55" r="14"/><circle class="i-sun" cx="210" cy="55" r="14"/><path class="i-line" d="M90 55v-20M210 55v-20" fill="none"/>',
    lase: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><rect class="i-sand-dark" x="70" y="140" width="90" height="45" rx="8"/><rect class="i-line" x="70" y="140" width="90" height="45" rx="8" fill="none"/><path class="i-rose" d="M160 160h95" stroke-width="10"/><circle class="i-sun" cx="255" cy="160" r="10"/>',
    lave: '<ellipse class="i-shadow" cx="150" cy="210" rx="85" ry="10"/><path class="i-water" d="M70 150c0-30 35-50 80-50s80 20 80 50-35 50-80 50-80-20-80-50z"/><path class="i-line" d="M70 150c0-30 35-50 80-50s80 20 80 50-35 50-80 50-80-20-80-50z" fill="none"/><path class="i-line" d="M100 110q50-25 100 0" fill="none"/><ellipse class="i-shine" cx="120" cy="130" rx="12" ry="8"/>',
    laze: '<ellipse class="i-shadow" cx="150" cy="210" rx="90" ry="10"/><path class="i-line" d="M60 100v100M240 100v100" stroke-width="10" fill="none"/><path class="i-rose" d="M60 130c30 40 150 40 180 0-10 40-60 55-90 55s-80-15-90-55z"/><path class="i-line" d="M60 130c30 40 150 40 180 0-10 40-60 55-90 55s-80-15-90-55z" fill="none"/><circle class="i-sand" cx="150" cy="120" r="18"/>',
    mace: '<ellipse class="i-shadow" cx="150" cy="210" rx="65" ry="10"/><rect class="i-sand-dark" x="140" y="100" width="20" height="105" rx="8"/><circle class="i-sand" cx="150" cy="70" r="45"/><circle class="i-line" cx="150" cy="70" r="45" fill="none"/><path class="i-line" d="M150 25v10M150 105v10M105 70h10M185 70h10M119 39l7 7M174 94l7 7M119 101l7-7M174 46l7-7" fill="none"/>',
    made: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><rect class="i-sand-dark" x="140" y="110" width="20" height="90" rx="8"/><rect class="i-line" x="140" y="110" width="20" height="90" rx="8" fill="none"/><rect class="i-sand" x="95" y="70" width="110" height="55" rx="14"/><rect class="i-line" x="95" y="70" width="110" height="55" rx="14" fill="none"/>',
    make: '<ellipse class="i-shadow" cx="150" cy="205" rx="85" ry="10"/><rect class="i-sand" x="70" y="150" width="160" height="30" rx="8"/><rect class="i-line" x="70" y="150" width="160" height="30" rx="8" fill="none"/><rect class="i-sand-dark" x="110" y="70" width="80" height="38" rx="10"/><rect class="i-line" x="110" y="70" width="80" height="38" rx="10" fill="none"/><path class="i-line" d="M150 108v45" stroke-width="14"/><circle class="i-ink" cx="100" cy="165" r="5"/><circle class="i-ink" cx="200" cy="165" r="5"/>',
    male: '<ellipse class="i-shadow" cx="150" cy="205" rx="60" ry="10"/><circle class="i-water" cx="140" cy="150" r="55"/><circle class="i-line" cx="140" cy="150" r="55" fill="none"/><path class="i-line" d="M178 112l45-45M223 67h-35M223 67v35" fill="none" stroke-width="10"/>',
    mane: '<ellipse class="i-shadow" cx="150" cy="210" rx="90" ry="10"/><path class="i-sand-dark" d="M150 60c-50 0-90 40-90 90 0 15 5 28 12 38-10-45 15-95 78-95s88 50 78 95c7-10 12-23 12-38 0-50-40-90-90-90z"/><path class="i-line" d="M150 60c-50 0-90 40-90 90 0 15 5 28 12 38-10-45 15-95 78-95s88 50 78 95c7-10 12-23 12-38 0-50-40-90-90-90z" fill="none"/><circle class="i-sand" cx="150" cy="150" r="55"/><circle class="i-line" cx="150" cy="150" r="55" fill="none"/><circle class="i-ink" cx="128" cy="140" r="6"/><circle class="i-ink" cx="172" cy="140" r="6"/><path class="i-line" d="M140 170h20" fill="none"/>',
    mare: '<ellipse class="i-shadow" cx="150" cy="212" rx="80" ry="10"/><path class="i-sand" d="M120 200V120c0-40 20-65 45-65 20 0 30 20 30 20l35-15-15 35s10 20 10 45v60z"/><path class="i-line" d="M120 200V120c0-40 20-65 45-65 20 0 30 20 30 20l35-15-15 35s10 20 10 45v60z" fill="none"/><ellipse class="i-sand-dark" cx="130" cy="95" rx="10" ry="22" transform="rotate(-15 130 95)"/><circle class="i-ink" cx="150" cy="120" r="6"/><ellipse class="i-ink" cx="132" cy="165" rx="8" ry="12"/>',
    mate: '<ellipse class="i-shadow" cx="150" cy="205" rx="85" ry="10"/><circle class="i-sand" cx="110" cy="130" r="45"/><circle class="i-line" cx="110" cy="130" r="45" fill="none"/><circle class="i-water" cx="195" cy="130" r="45"/><circle class="i-line" cx="195" cy="130" r="45" fill="none"/><circle class="i-ink" cx="98" cy="122" r="6"/><circle class="i-ink" cx="122" cy="122" r="6"/><circle class="i-ink" cx="183" cy="122" r="6"/><circle class="i-ink" cx="207" cy="122" r="6"/><path class="i-line" d="M95 148q15 10 30 0M172 148q15 10 30 0" fill="none"/>',
    maze: '<ellipse class="i-shadow" cx="150" cy="215" rx="90" ry="8"/><rect class="i-sand" x="60" y="60" width="180" height="140" rx="10"/><rect class="i-line" x="60" y="60" width="180" height="140" rx="10" fill="none"/><path class="i-line" d="M90 60v70h60v-40h60M90 200v-40h40M180 100v60h-30" fill="none" stroke-width="8"/>',
    nabe: '<ellipse class="i-shadow" cx="150" cy="205" rx="95" ry="10"/><path class="i-sand" d="M60 200v-45l30-30 30 30v45z"/><path class="i-line" d="M60 200v-45l30-30 30 30v45z" fill="none"/><path class="i-sand-dark" d="M120 200v-60l35-35 35 35v60z"/><path class="i-line" d="M120 200v-60l35-35 35 35v60z" fill="none"/><path class="i-sand" d="M195 200v-45l30-30 30 30v45z"/><path class="i-line" d="M195 200v-45l30-30 30 30v45z" fill="none"/>',
    name: '<ellipse class="i-shadow" cx="150" cy="205" rx="80" ry="10"/><path class="i-sand" d="M75 90h150a15 15 0 0 1 15 15v70a15 15 0 0 1-15 15H75a15 15 0 0 1-15-15v-70a15 15 0 0 1 15-15z"/><path class="i-line" d="M75 90h150a15 15 0 0 1 15 15v70a15 15 0 0 1-15 15H75a15 15 0 0 1-15-15v-70a15 15 0 0 1 15-15z" fill="none"/><circle class="i-water" cx="105" cy="140" r="18"/><path class="i-line" d="M140 125h75M140 150h60" fill="none" stroke-width="8"/>',
    nape: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><path class="i-sand" d="M120 200v-40c-20-5-30-25-25-45 5-25 30-45 55-45 20 0 35 12 40 28 15 2 25 15 20 28-5 12-18 15-28 12v62z"/><path class="i-line" d="M120 200v-40c-20-5-30-25-25-45 5-25 30-45 55-45 20 0 35 12 40 28 15 2 25 15 20 28-5 12-18 15-28 12v62z" fill="none"/><path class="i-rose" d="M118 158c15 10 32 10 47 0v18c-15 10-32 10-47 0z"/>',
    nave: '<ellipse class="i-shadow" cx="150" cy="215" rx="95" ry="8"/><path class="i-sand" d="M150 45l55 45h-110z"/><path class="i-line" d="M150 45l55 45h-110z" fill="none"/><rect class="i-sand" x="95" y="90" width="110" height="110" rx="6"/><rect class="i-line" x="95" y="90" width="110" height="110" rx="6" fill="none"/><path class="i-water" d="M150 120a20 20 0 0 1 20 20v40h-40v-40a20 20 0 0 1 20-20z"/><path class="i-line" d="M150 120a20 20 0 0 1 20 20v40h-40v-40a20 20 0 0 1 20-20z" fill="none"/><rect class="i-sand-dark" x="60" y="185" width="180" height="15" rx="4"/>',
    pace: '<ellipse class="i-shadow" cx="150" cy="215" rx="90" ry="8"/><ellipse class="i-sand" cx="110" cy="170" rx="20" ry="32" transform="rotate(-10 110 170)"/><ellipse class="i-line" cx="110" cy="170" rx="20" ry="32" transform="rotate(-10 110 170)" fill="none"/><circle class="i-sand" cx="98" cy="140" r="9"/><ellipse class="i-water" cx="190" cy="110" rx="20" ry="32" transform="rotate(8 190 110)"/><ellipse class="i-line" cx="190" cy="110" rx="20" ry="32" transform="rotate(8 190 110)" fill="none"/><circle class="i-water" cx="178" cy="80" r="9"/><path class="i-line" d="M130 155q30-20 40-40" stroke-dasharray="8 8" fill="none"/>',
    pale: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><circle class="i-white" cx="150" cy="125" r="65"/><circle class="i-line" cx="150" cy="125" r="65" fill="none"/><circle class="i-ink" cx="128" cy="115" r="6"/><circle class="i-ink" cx="172" cy="115" r="6"/><path class="i-line" d="M130 155q20-5 40 0" fill="none"/>',
    page: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><path class="i-white" d="M85 60h95v140H85z"/><path class="i-line" d="M85 60h95v140H85z" fill="none"/><path class="i-sand" d="M180 60l35 35h-35z"/><path class="i-line" d="M180 60l35 35h-35zM105 100h50M105 125h50M105 150h35" fill="none" stroke-width="7"/>',
    pane: '<ellipse class="i-shadow" cx="150" cy="215" rx="85" ry="8"/><rect class="i-sand" x="70" y="55" width="160" height="150" rx="10"/><rect class="i-line" x="70" y="55" width="160" height="150" rx="10" fill="none"/><rect class="i-water" x="90" y="75" width="55" height="55" rx="4"/><rect class="i-water" x="155" y="75" width="55" height="55" rx="4"/><rect class="i-water" x="90" y="140" width="55" height="55" rx="4"/><rect class="i-water" x="155" y="140" width="55" height="55" rx="4"/>',
    pare: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><circle class="i-rose" cx="130" cy="140" r="55"/><circle class="i-line" cx="130" cy="140" r="55" fill="none"/><path class="i-leaf" d="M130 85c8-15 25-10 25 5s-15 15-25 5z"/><path class="i-line" d="M195 90c15 20 20 55 5 80-10-30-8-60-5-80z" fill="none" stroke-width="7"/>',
    pave: '<ellipse class="i-shadow" cx="150" cy="215" rx="95" ry="8"/><path class="i-sand" d="M85 195 L115 60 H185 L215 195Z"/><path class="i-line" d="M85 195 L115 60 H185 L215 195Z" fill="none"/><path class="i-line" d="M100 155h100M108 115h84M150 60v135" fill="none" stroke-width="6"/>',
    race: '<ellipse class="i-shadow" cx="150" cy="215" rx="90" ry="8"/><circle class="i-sand" cx="95" cy="65" r="18"/><path class="i-line" d="M95 83l-20 55 35 15M85 108l-30 12M105 108l28 8M75 138l-15 45M110 153l18 45" fill="none" stroke-width="9"/><circle class="i-water" cx="205" cy="80" r="16"/><path class="i-line" d="M205 96l-15 50 30 12M197 118l-25 10M213 118l24 6M182 143l-12 42M223 152l16 42" fill="none" stroke-width="9"/>',
    rage: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><circle class="i-rose" cx="150" cy="130" r="60"/><circle class="i-line" cx="150" cy="130" r="60" fill="none"/><path class="i-line" d="M115 105l20 10M185 105l-20 10" stroke-width="8" fill="none"/><circle class="i-ink" cx="128" cy="122" r="6"/><circle class="i-ink" cx="172" cy="122" r="6"/><path class="i-line" d="M128 165q22-15 44 0" fill="none"/><path class="i-line" d="M110 55q8-20 0-35M150 50q8-20 0-35M190 55q8-20 0-35" fill="none" stroke-width="7"/>',
    rake: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><path class="i-line" d="M110 200L165 60" stroke-width="12" fill="none"/><path class="i-sand-dark" d="M95 60h130l-15 35H110z"/><path class="i-line" d="M95 60h130l-15 35H110z" fill="none"/><path class="i-line" d="M105 95v25M130 95v25M150 95v25M170 95v25M190 95v25" stroke-width="7" fill="none"/>',
    rare: '<ellipse class="i-shadow" cx="150" cy="210" rx="65" ry="10"/><path class="i-water" d="M100 110l50-45 50 45-50 85z"/><path class="i-line" d="M100 110l50-45 50 45-50 85z" fill="none"/><path class="i-line" d="M100 110h100M150 65v130M125 110l25 85M175 110l-25 85" fill="none" stroke-width="5"/><path class="i-sun" d="M225 55l6 16 16 6-16 6-6 16-6-16-16-6 16-6z"/>',
    rate: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><path class="i-sand" d="M70 170a80 80 0 1 1 160 0z"/><path class="i-line" d="M70 170a80 80 0 1 1 160 0z" fill="none"/><path class="i-line" d="M90 170a60 60 0 1 1 120 0" fill="none" stroke-width="5"/><path class="i-line" d="M150 170l40-55" stroke-width="9"/><circle class="i-ink" cx="150" cy="170" r="8"/>',
    rave: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><circle class="i-water" cx="150" cy="110" r="45"/><circle class="i-line" cx="150" cy="110" r="45" fill="none"/><path class="i-line" d="M105 110h90M150 65v90M120 80l60 60M180 80l-60 60" fill="none" stroke-width="4"/><path class="i-ink" d="M85 175a10 10 0 1 0 20 0v-35l25-6v33a10 10 0 1 0 8-10v-45l-33 7z"/>',
    raze: '<ellipse class="i-shadow" cx="150" cy="215" rx="90" ry="8"/><path class="i-sand" d="M70 200v-90h90v90z"/><path class="i-line" d="M70 200v-90h90v90z" fill="none"/><path class="i-line" d="M85 130l25 30M135 120l-30 40M70 165h50" stroke-width="6" fill="none"/><path class="i-line" d="M230 60l-55 60" stroke-width="6" fill="none"/><circle class="i-sand-dark" cx="235" cy="55" r="20"/>',
    safe: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><rect class="i-sand-dark" x="75" y="60" width="150" height="140" rx="12"/><rect class="i-line" x="75" y="60" width="150" height="140" rx="12" fill="none"/><circle class="i-sand" cx="150" cy="130" r="35"/><circle class="i-line" cx="150" cy="130" r="35" fill="none"/><path class="i-line" d="M150 130v-20M150 130l15 12" stroke-width="6" fill="none"/><rect class="i-line" x="185" y="120" width="15" height="20" rx="3" fill="none"/>',
    sage: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><path class="i-sand-dark" d="M150 200V90"/><path class="i-leaf" d="M150 90c-30-15-55 0-50 25s35 25 50 5zM150 120c30-15 55 0 50 25s-35 20-50 0zM150 150c-25-10-45 5-40 25s30 15 40-5z"/><path class="i-line" d="M150 90c-30-15-55 0-50 25s35 25 50 5zM150 120c30-15 55 0 50 25s-35 20-50 0zM150 150c-25-10-45 5-40 25s30 15 40-5z" fill="none"/>',
    sake: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><path class="i-sand" d="M70 175c0-25 20-40 45-30 5-20 30-20 35 0 5-20 30-20 35 0 25-10 45 5 45 30 0 15-15 25-30 20-10 15-25 20-40 15-15 5-30 0-40-15-15 5-30-5-30-20z"/><path class="i-line" d="M70 175c0-25 20-40 45-30 5-20 30-20 35 0 5-20 30-20 35 0 25-10 45 5 45 30 0 15-15 25-30 20-10 15-25 20-40 15-15 5-30 0-40-15-15 5-30-5-30-20z" fill="none"/><path class="i-rose" d="M150 155c-15-18-40-6-40 10 0 18 40 35 40 35s40-17 40-35c0-16-25-28-40-10z"/><path class="i-line" d="M150 155c-15-18-40-6-40 10 0 18 40 35 40 35s40-17 40-35c0-16-25-28-40-10z" fill="none"/>',
    sale: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><path class="i-rose" d="M70 100l70-30 90 90-70 30z"/><path class="i-line" d="M70 100l70-30 90 90-70 30z" fill="none"/><circle class="i-white" cx="115" cy="90" r="12"/><circle class="i-line" cx="115" cy="90" r="12" fill="none"/><path class="i-line" d="M120 155l55-40" stroke-width="8" fill="none"/><circle class="i-ink" cx="120" cy="155" r="7"/><circle class="i-ink" cx="175" cy="115" r="7"/>',
    same: '<ellipse class="i-shadow" cx="150" cy="210" rx="85" ry="10"/><rect class="i-water" x="60" y="90" width="70" height="70" rx="10"/><rect class="i-line" x="60" y="90" width="70" height="70" rx="10" fill="none"/><rect class="i-water" x="170" y="90" width="70" height="70" rx="10"/><rect class="i-line" x="170" y="90" width="70" height="70" rx="10" fill="none"/><path class="i-line" d="M140 115h20M140 135h20" stroke-width="8" fill="none"/>',
    sane: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><circle class="i-sand" cx="150" cy="125" r="60"/><circle class="i-line" cx="150" cy="125" r="60" fill="none"/><circle class="i-ink" cx="128" cy="115" r="6"/><circle class="i-ink" cx="172" cy="115" r="6"/><path class="i-line" d="M128 155h44" fill="none" stroke-width="6"/><path class="i-line" d="M95 60h110" stroke-width="6" fill="none"/><circle class="i-ink" cx="95" cy="60" r="6"/><circle class="i-ink" cx="205" cy="60" r="6"/>',
    sate: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><circle class="i-white" cx="150" cy="140" r="70"/><circle class="i-line" cx="150" cy="140" r="70" fill="none"/><circle class="i-sand" cx="150" cy="140" r="40"/><circle class="i-line" cx="150" cy="140" r="40" fill="none"/><path class="i-line" d="M130 140q20 15 40 0" stroke-width="6" fill="none"/>',
    save: '<ellipse class="i-shadow" cx="150" cy="210" rx="85" ry="10"/><ellipse class="i-sand" cx="140" cy="140" rx="75" ry="50"/><ellipse class="i-line" cx="140" cy="140" rx="75" ry="50" fill="none"/><circle class="i-sand-dark" cx="200" cy="135" r="18"/><path class="i-line" d="M100 105l-12-22 24 4z" fill="none"/><path class="i-line" d="M100 188v14M185 188v14" stroke-width="8" fill="none"/><path class="i-line" d="M120 95h40" stroke-width="6" fill="none"/><ellipse class="i-water" cx="150" cy="65" rx="16" ry="10"/><ellipse class="i-line" cx="150" cy="65" rx="16" ry="10" fill="none"/>',
    take: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><circle class="i-rose" cx="150" cy="110" r="45"/><circle class="i-line" cx="150" cy="110" r="45" fill="none"/><path class="i-leaf" d="M150 65c10-15 30-10 28 5s-20 15-28-5z"/><path class="i-line" d="M150 65c10-15 30-10 28 5s-20 15-28-5z" fill="none"/><path class="i-line" d="M95 175l25-20M120 195l15-25M150 205l5-30M180 195l-15-25M205 175l-25-20" stroke-width="8" fill="none"/>',
    tale: '<ellipse class="i-shadow" cx="150" cy="210" rx="90" ry="10"/><path class="i-white" d="M150 80 L150 190 L70 175 L70 65Z"/><path class="i-white" d="M150 80 L150 190 L230 175 L230 65Z"/><path class="i-line" d="M150 80 L150 190 L70 175 L70 65Z" fill="none"/><path class="i-line" d="M150 80 L150 190 L230 175 L230 65Z" fill="none"/><path class="i-line" d="M90 90h45M90 115h45M195 90h-45M195 115h-45" stroke-width="6" fill="none"/><path class="i-sun" d="M150 50l6 14 15 2-11 10 3 15-13-8-13 8 3-15-11-10 15-2z"/>',
    tame: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><circle class="i-sand" cx="150" cy="120" r="55"/><circle class="i-line" cx="150" cy="120" r="55" fill="none"/><path class="i-sand-dark" d="M100 95c-15-10-15-30 0-35 10 15 10 30 0 35zM200 95c15-10 15-30 0-35-10 15-10 30 0 35z"/><path class="i-line" d="M100 95c-15-10-15-30 0-35 10 15 10 30 0 35zM200 95c15-10 15-30 0-35-10 15-10 30 0 35z" fill="none"/><circle class="i-ink" cx="130" cy="115" r="5"/><circle class="i-ink" cx="170" cy="115" r="5"/><path class="i-line" d="M135 145q15 8 30 0" fill="none"/><rect class="i-rose" x="120" y="172" width="60" height="16" rx="8"/><path class="i-line" d="M150 188v20" stroke-width="6" fill="none"/>',
    tape: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><circle class="i-sand" cx="150" cy="125" r="70"/><circle class="i-line" cx="150" cy="125" r="70" fill="none"/><circle class="svgBg" cx="150" cy="125" r="28"/><circle class="i-line" cx="150" cy="125" r="28" fill="none"/><path class="i-white" d="M205 90c15 5 25 20 20 35-20-5-30-20-20-35z"/><path class="i-line" d="M205 90c15 5 25 20 20 35-20-5-30-20-20-35z" fill="none"/>',
    tare: '<ellipse class="i-shadow" cx="150" cy="215" rx="70" ry="8"/><path class="i-sand-dark" d="M145 205h10V70h-10z"/><path class="i-line" d="M145 205h10V70h-10z" fill="none"/><path class="i-line" d="M80 85h140" stroke-width="8" fill="none"/><path class="i-line" d="M85 85l-15 45h30zM215 85l-15 45h30z" fill="none"/><path class="i-sand" d="M70 130a30 14 0 0 0 30 0z"/><path class="i-sand" d="M200 130a30 14 0 0 0 30 0z"/><path class="i-line" d="M70 130a30 14 0 0 0 30 0z" fill="none"/><path class="i-line" d="M200 130a30 14 0 0 0 30 0z" fill="none"/>',
    tase: '<ellipse class="i-shadow" cx="150" cy="210" rx="65" ry="10"/><path class="i-sun" d="M165 50 L110 140 L145 140 L130 205 L195 105 L155 105z"/><path class="i-line" d="M165 50 L110 140 L145 140 L130 205 L195 105 L155 105z" fill="none"/><path class="i-line" d="M70 90l20 10M230 90l-20 10M70 150l20-10M230 150l-20-10" stroke-width="6" fill="none"/>',
    vane: '<ellipse class="i-shadow" cx="150" cy="215" rx="60" ry="8"/><path class="i-sand-dark" d="M145 210h10V90h-10z"/><path class="i-line" d="M145 210h10V90h-10z" fill="none"/><circle class="i-ink" cx="150" cy="90" r="8"/><path class="i-water" d="M150 90 L215 75 L195 90 L215 105z"/><path class="i-line" d="M150 90 L215 75 L195 90 L215 105z" fill="none"/><path class="i-water" d="M150 90 L85 80 L100 90 L85 100z"/><path class="i-line" d="M150 90 L85 80 L100 90 L85 100z" fill="none"/><path class="i-line" d="M110 60q40-15 80 0" stroke-dasharray="6 6" fill="none"/>',
    vase: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><path class="i-water" d="M120 200c-10-40 0-70 10-90h40c10 20 20 50 10 90z"/><path class="i-line" d="M120 200c-10-40 0-70 10-90h40c10 20 20 50 10 90z" fill="none"/><path class="i-line" d="M150 110v-40M150 90l-20-15M150 80l25-15" stroke-width="6" fill="none"/><circle class="i-rose" cx="130" cy="55" r="14"/><circle class="i-rose" cx="150" cy="45" r="14"/><circle class="i-rose" cx="175" cy="60" r="14"/><circle class="i-line" cx="130" cy="55" r="14" fill="none"/><circle class="i-line" cx="150" cy="45" r="14" fill="none"/><circle class="i-line" cx="175" cy="60" r="14" fill="none"/>',
    vare: '<ellipse class="i-shadow" cx="150" cy="210" rx="55" ry="8"/><rect class="i-sand" x="140" y="70" width="20" height="130" rx="10"/><rect class="i-line" x="140" y="70" width="20" height="130" rx="10" fill="none"/><ellipse class="i-rose" cx="150" cy="115" rx="24" ry="9"/><ellipse class="i-line" cx="150" cy="115" rx="24" ry="9" fill="none"/><ellipse class="i-rose" cx="150" cy="160" rx="24" ry="9"/><ellipse class="i-line" cx="150" cy="160" rx="24" ry="9" fill="none"/><circle class="i-water" cx="150" cy="60" r="16"/><circle class="i-line" cx="150" cy="60" r="16" fill="none"/>',
    wade: '<ellipse class="i-shadow" cx="150" cy="210" rx="90" ry="8"/><circle class="i-sand" cx="150" cy="70" r="22"/><path class="i-line" d="M150 92v55M150 110l-25 15M150 110l25 15" stroke-width="8" fill="none"/><path class="i-water" d="M40 165c30-15 60-15 90 0s60 15 90 0 40-10 40-10v40H40z"/><path class="i-line" d="M40 165c30-15 60-15 90 0s60 15 90 0 40-10 40-10" fill="none"/><path class="i-line" d="M120 147v30M180 147v30" stroke-width="7" fill="none"/>',
    wage: '<ellipse class="i-shadow" cx="150" cy="210" rx="85" ry="10"/><rect class="i-sand" x="65" y="90" width="170" height="110" rx="10"/><rect class="i-line" x="65" y="90" width="170" height="110" rx="10" fill="none"/><path class="i-line" d="M65 90l85 60 85-60" fill="none" stroke-width="6"/><circle class="i-water" cx="150" cy="155" r="22"/><circle class="i-line" cx="150" cy="155" r="22" fill="none"/><path class="i-line" d="M150 143v24M142 149h16M142 161h16" stroke-width="5" fill="none"/>',
    wale: '<ellipse class="i-shadow" cx="150" cy="210" rx="85" ry="10"/><rect class="i-sand" x="65" y="70" width="170" height="130" rx="12"/><rect class="i-line" x="65" y="70" width="170" height="130" rx="12" fill="none"/><path class="i-line" d="M90 70v130M115 70v130M140 70v130M165 70v130M190 70v130M215 70v130" stroke-width="6" fill="none"/>',
    wane: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="8"/><circle class="i-sand" cx="150" cy="115" r="60"/><circle class="i-line" cx="150" cy="115" r="60" fill="none"/><circle class="svgBg" cx="185" cy="100" r="55"/><path class="i-sun" d="M60 60l6 14 15 2-11 10 3 15-13-8-13 8 3-15-11-10 15-2z"/><path class="i-sun" d="M230 150l4 10 10 4-10 4-4 10-4-10-10-4 10-4z"/>',
    ware: '<ellipse class="i-shadow" cx="150" cy="215" rx="95" ry="8"/><rect class="i-sand-dark" x="55" y="175" width="190" height="14" rx="4"/><path class="i-sand" d="M85 175c-10-30 5-55 25-55s35 25 25 55z"/><path class="i-line" d="M85 175c-10-30 5-55 25-55s35 25 25 55z" fill="none"/><path class="i-water" d="M140 175c-8-40 8-65 25-65s33 25 25 65z"/><path class="i-line" d="M140 175c-8-40 8-65 25-65s33 25 25 65z" fill="none"/><path class="i-rose" d="M195 175c-7-25 6-45 20-45s27 20 20 45z"/><path class="i-line" d="M195 175c-7-25 6-45 20-45s27 20 20 45z" fill="none"/>',
    wave: '<ellipse class="i-shadow" cx="150" cy="210" rx="95" ry="10"/><path class="i-water" d="M30 160c25-30 55-30 80 0s55 30 80 0 55-30 80 0v40H30z"/><path class="i-line" d="M30 160c25-30 55-30 80 0s55 30 80 0 55-30 80 0" fill="none"/><path class="i-line" d="M40 120c20-20 45-20 65 0s45 20 65 0 45-20 65 0" fill="none" stroke-dasharray="6 6"/><ellipse class="i-shine" cx="110" cy="140" rx="14" ry="6"/>',
    blame: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><circle class="i-sand" cx="120" cy="125" r="55"/><circle class="i-line" cx="120" cy="125" r="55" fill="none"/><circle class="i-ink" cx="103" cy="115" r="6"/><circle class="i-ink" cx="137" cy="115" r="6"/><path class="i-line" d="M100 150q20-12 40 0"/><path class="i-line" d="M240 70L182 112"/><path class="i-line" d="M182 112l24-2M182 112l6-23"/>',
    brace: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><path class="i-line" d="M90 60v130"/><path class="i-line" d="M90 190h120"/><path class="i-sand" d="M90 190l70-40v40z"/><path class="i-line" d="M90 190l70-40v40z" fill="none"/>',
    brave: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><path class="i-water" d="M150 60l60 22v55c0 45-30 70-60 83-30-13-60-38-60-83V82z"/><path class="i-line" d="M150 60l60 22v55c0 45-30 70-60 83-30-13-60-38-60-83V82z" fill="none"/><path class="i-line" d="M120 140l20 20 40-40"/>',
    chase: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><circle class="i-sand" cx="205" cy="70" r="18"/><circle class="i-line" cx="205" cy="70" r="18" fill="none"/><path class="i-line" d="M205 88l-15 45 35 15M195 110l-40 12M215 115l35-5M225 148l30 30M185 122l-20 45"/><path class="i-line" d="M55 150h55M55 165h40M55 180h25"/>',
    crane: '<ellipse class="i-shadow" cx="150" cy="215" rx="90" ry="8"/><path class="i-line" d="M90 205V70h120M90 90l120-20"/><path class="i-line" d="M210 70v70"/><rect class="i-sand" x="195" y="130" width="30" height="30" rx="4"/><rect class="i-line" x="195" y="130" width="30" height="30" rx="4" fill="none"/>',
    flame: '<ellipse class="i-shadow" cx="150" cy="210" rx="55" ry="10"/><path class="i-sun" d="M150 55c25 35 45 60 45 95a45 45 0 0 1-90 0c0-15 8-25 15-33-2 15 8 22 15 15-5-25 5-50 15-77z"/><path class="i-line" d="M150 55c25 35 45 60 45 95a45 45 0 0 1-90 0c0-15 8-25 15-33-2 15 8 22 15 15-5-25 5-50 15-77z" fill="none"/><path class="i-sand" d="M150 120c10 15 18 28 18 42a18 18 0 0 1-36 0c0-8 4-14 8-18-1 8 5 12 8 8-3-13 2-24 2-32z"/>',
    flare: '<ellipse class="i-shadow" cx="150" cy="210" rx="65" ry="10"/><path class="i-sun" d="M150 50l14 55 55 14-55 14-14 55-14-55-55-14 55-14z"/><path class="i-line" d="M150 50l14 55 55 14-55 14-14 55-14-55-55-14 55-14z" fill="none"/><path class="i-line" d="M95 95l-18-18M205 95l18-18M95 145l-18 18M205 145l18 18"/>',
    frame: '<ellipse class="i-shadow" cx="150" cy="215" rx="85" ry="8"/><rect class="i-sand-dark" x="65" y="55" width="170" height="140" rx="8"/><rect class="i-line" x="65" y="55" width="170" height="140" rx="8" fill="none"/><rect class="i-white" x="90" y="80" width="120" height="90" rx="4"/><rect class="i-line" x="90" y="80" width="120" height="90" rx="4" fill="none"/><circle class="i-sun" cx="185" cy="105" r="12"/><path class="i-line" d="M90 150l35-35 25 20 30-30 30 40"/>',
    glaze: '<ellipse class="i-shadow" cx="150" cy="205" rx="75" ry="10"/><circle class="i-sand" cx="150" cy="130" r="65"/><circle class="i-line" cx="150" cy="130" r="65" fill="none"/><circle class="svgBg" cx="150" cy="130" r="24"/><circle class="i-line" cx="150" cy="130" r="24" fill="none"/><path class="i-water" d="M95 105c15-20 100-30 115 5 10 22-5 40-30 30-20-8-15-25-35-20-20 5-35 5-50-15z"/><path class="i-line" d="M95 105c15-20 100-30 115 5 10 22-5 40-30 30-20-8-15-25-35-20-20 5-35 5-50-15z" fill="none"/>',
    grace: '<ellipse class="i-shadow" cx="150" cy="205" rx="70" ry="10"/><ellipse class="i-water" cx="130" cy="160" rx="55" ry="35"/><ellipse class="i-line" cx="130" cy="160" rx="55" ry="35" fill="none"/><path class="i-water" d="M150 135c10-45 30-70 55-75-5 20-15 30-10 40 8-5 18-5 25 2-20 15-45 25-70 33z"/><path class="i-line" d="M150 135c10-45 30-70 55-75-5 20-15 30-10 40 8-5 18-5 25 2-20 15-45 25-70 33z" fill="none"/><circle class="i-ink" cx="198" cy="72" r="4"/>',
    grate: '<ellipse class="i-shadow" cx="150" cy="205" rx="80" ry="10"/><rect class="i-sand-dark" x="70" y="80" width="160" height="110" rx="10"/><rect class="i-line" x="70" y="80" width="160" height="110" rx="10" fill="none"/><path class="i-line" d="M70 105h160M70 130h160M70 155h160M70 180h160M95 80v110M120 80v110M145 80v110M170 80v110M195 80v110"/>',
    grave: '<ellipse class="i-shadow" cx="150" cy="215" rx="85" ry="8"/><path class="i-sand" d="M100 200V120a50 50 0 0 1 100 0v80z"/><path class="i-line" d="M100 200V120a50 50 0 0 1 100 0v80z" fill="none"/><path class="i-line" d="M135 150h30M150 135v30"/><rect class="i-leaf" x="60" y="200" width="180" height="15" rx="4"/>',
    graze: '<rect class="i-leaf" x="40" y="195" width="220" height="20" rx="4"/><ellipse class="i-white" cx="150" cy="150" rx="55" ry="35"/><ellipse class="i-line" cx="150" cy="150" rx="55" ry="35" fill="none"/><circle class="i-sand-dark" cx="100" cy="175" r="20"/><circle class="i-line" cx="100" cy="175" r="20" fill="none"/><circle class="i-ink" cx="93" cy="172" r="3"/><path class="i-line" d="M115 185v20M145 185v20M175 185v20"/>',
    paste: '<ellipse class="i-shadow" cx="150" cy="210" rx="60" ry="10"/><path class="i-water" d="M120 90h60v20l15 15v75a10 10 0 0 1-10 10h-70a10 10 0 0 1-10-10v-75l15-15z"/><path class="i-line" d="M120 90h60v20l15 15v75a10 10 0 0 1-10 10h-70a10 10 0 0 1-10-10v-75l15-15z" fill="none"/><rect class="i-sand-dark" x="130" y="68" width="40" height="22" rx="4"/><rect class="i-line" x="130" y="68" width="40" height="22" rx="4" fill="none"/><path class="i-sand" d="M150 150c8 10 8 18 0 24-8-6-8-14 0-24z"/>',
    phase: '<circle class="i-sky" cx="150" cy="120" r="70"/><circle class="i-sand" cx="150" cy="120" r="60"/><circle class="i-line" cx="150" cy="120" r="60" fill="none"/><path class="i-shade" d="M150 60a60 60 0 0 1 0 120A80 80 0 0 0 150 60Z"/>',
    plane: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="8"/><path class="i-water" d="M150 60l10 60 70 35v12l-70-20v40l20 15v10l-30-8-30 8v-10l20-15v-40l-70 20v-12l70-35z"/><path class="i-line" d="M150 60l10 60 70 35v12l-70-20v40l20 15v10l-30-8-30 8v-10l20-15v-40l-70 20v-12l70-35z" fill="none"/>',
    plate: '<ellipse class="i-shadow" cx="150" cy="205" rx="85" ry="10"/><circle class="i-white" cx="150" cy="150" r="80"/><circle class="i-line" cx="150" cy="150" r="80" fill="none"/><circle class="i-sky" cx="150" cy="150" r="50"/><circle class="i-line" cx="150" cy="150" r="50" fill="none"/><circle class="i-leaf" cx="130" cy="140" r="10"/><circle class="i-leaf" cx="160" cy="150" r="10"/><circle class="i-sun" cx="145" cy="165" r="10"/>',
    scare: '<ellipse class="i-shadow" cx="150" cy="210" rx="65" ry="10"/><path class="i-white" d="M90 195v-70a60 60 0 0 1 120 0v70l-15-15-15 15-15-15-15 15-15-15-15 15-15-15z"/><path class="i-line" d="M90 195v-70a60 60 0 0 1 120 0v70l-15-15-15 15-15-15-15 15-15-15-15 15-15-15z" fill="none"/><circle class="i-ink" cx="125" cy="120" r="7"/><circle class="i-ink" cx="175" cy="120" r="7"/><ellipse class="i-ink" cx="150" cy="145" rx="8" ry="10"/>',
    shade: '<ellipse class="i-shadow" cx="150" cy="210" rx="75" ry="10"/><path class="i-line" d="M150 205V95"/><path class="i-rose" d="M150 95c-45 0-70 35-70 35h140s-25-35-70-35z"/><path class="i-line" d="M150 95c-45 0-70 35-70 35h140s-25-35-70-35z" fill="none"/><path class="i-line" d="M115 130q35-25 70 0"/>',
    shame: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><circle class="i-sand" cx="150" cy="130" r="60"/><circle class="i-line" cx="150" cy="130" r="60" fill="none"/><path class="i-sand-dark" d="M100 115a50 50 0 0 1 100 0z"/><circle class="i-ink" cx="128" cy="150" r="6"/><circle class="i-ink" cx="172" cy="150" r="6"/><path class="i-line" d="M130 175q20-8 40 0"/><circle class="i-rose" cx="115" cy="165" r="8"/><circle class="i-rose" cx="185" cy="165" r="8"/>',
    skate: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><path class="i-water" d="M90 175c0-45 20-75 70-75 30 0 45 15 55 35l25 10v20h-25l-15 20H100z"/><path class="i-line" d="M90 175c0-45 20-75 70-75 30 0 45 15 55 35l25 10v20h-25l-15 20H100z" fill="none"/><path class="i-sand-dark" d="M85 195h170l-15 15H100z"/><path class="i-line" d="M85 195h170l-15 15H100z" fill="none"/>',
    slate: '<ellipse class="i-shadow" cx="150" cy="210" rx="85" ry="10"/><rect class="i-sand-dark" x="65" y="60" width="170" height="120" rx="6"/><rect class="i-line" x="65" y="60" width="170" height="120" rx="6" fill="none"/><path class="i-line" d="M100 120h60M100 140h90"/><rect class="i-white" x="130" y="190" width="40" height="10" rx="3"/><rect class="i-line" x="130" y="190" width="40" height="10" rx="3" fill="none"/>',
    space: '<circle class="svgBg" cx="150" cy="115" r="90"/><circle class="i-water" cx="150" cy="120" r="45"/><circle class="i-line" cx="150" cy="120" r="45" fill="none"/><ellipse class="i-sun" cx="150" cy="120" rx="80" ry="16" transform="rotate(-15 150 120)"/><ellipse class="i-line" cx="150" cy="120" rx="80" ry="16" transform="rotate(-15 150 120)" fill="none"/><path class="i-sun" d="M65 55l5 12 12 5-12 5-5 12-5-12-12-5 12-5z"/><path class="i-sun" d="M225 65l4 9 9 4-9 4-4 9-4-9-9-4 9-4z"/>',
    spade: '<ellipse class="i-shadow" cx="150" cy="210" rx="65" ry="10"/><rect class="i-sand-dark" x="140" y="55" width="14" height="110" rx="6"/><rect class="i-line" x="140" y="55" width="14" height="110" rx="6" fill="none"/><path class="i-water" d="M105 150h90l-15 45a30 30 0 0 1-60 0z"/><path class="i-line" d="M105 150h90l-15 45a30 30 0 0 1-60 0z" fill="none"/>',
    stare: '<ellipse class="i-shadow" cx="150" cy="205" rx="80" ry="10"/><circle class="i-white" cx="105" cy="140" r="42"/><circle class="i-line" cx="105" cy="140" r="42" fill="none"/><circle class="i-white" cx="195" cy="140" r="42"/><circle class="i-line" cx="195" cy="140" r="42" fill="none"/><circle class="i-ink" cx="105" cy="140" r="16"/><circle class="i-ink" cx="195" cy="140" r="16"/><circle class="svgBg" cx="100" cy="134" r="5"/><circle class="svgBg" cx="190" cy="134" r="5"/>',
    trade: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><path class="i-line" d="M80 110h100M180 110l-20-20M180 110l-20 20"/><path class="i-line" d="M220 160H120M120 160l20-20M120 160l20 20"/>',
    abate: '<ellipse class="i-shadow" cx="150" cy="210" rx="85" ry="10"/><ellipse class="i-sky" cx="110" cy="85" rx="70" ry="38"/><ellipse class="i-sky" cx="160" cy="70" rx="48" ry="30"/><path class="i-line" d="M95 125l-14 32M135 125l-14 36" stroke-dasharray="7 10"/><circle class="i-sun" cx="215" cy="150" r="40"/><circle class="i-line" cx="215" cy="150" r="40" fill="none"/><path class="i-line" d="M215 98v-16M267 150h16M163 150h-16"/><ellipse class="i-shine" cx="200" cy="132" rx="10" ry="8"/>',
    aviator: '<ellipse class="i-shadow" cx="150" cy="212" rx="90" ry="10"/><path class="i-line" d="M60 110h30M210 110h30" fill="none"/><circle class="i-sky" cx="105" cy="115" r="45"/><circle class="i-line" cx="105" cy="115" r="45" fill="none"/><circle class="i-sky" cx="195" cy="115" r="45"/><circle class="i-line" cx="195" cy="115" r="45" fill="none"/><path class="i-line" d="M135 105q15-15 30 0" fill="none"/><ellipse class="i-shine" cx="90" cy="100" rx="10" ry="14"/><ellipse class="i-shine" cx="180" cy="100" rx="10" ry="14"/>',
    create: '<ellipse class="i-shadow" cx="150" cy="210" rx="70" ry="10"/><circle class="i-sun" cx="150" cy="110" r="55"/><circle class="i-line" cx="150" cy="110" r="55" fill="none"/><rect class="i-sand" x="130" y="165" width="40" height="22" rx="6"/><rect class="i-line" x="130" y="165" width="40" height="22" rx="6" fill="none"/><path class="i-line" d="M150 55v-20M95 110H75M225 110h-20M113 73l-14-14M187 147l14 14M113 147l-14 14M187 73l14-14"/><ellipse class="i-shine" cx="128" cy="88" rx="12" ry="16"/>',
    debate: '<ellipse class="i-shadow" cx="150" cy="205" rx="90" ry="10"/><path class="i-water" d="M35 60h120v70H120l-25 28v-28H35z"/><path class="i-line" d="M35 60h120v70H120l-25 28v-28H35z" fill="none"/><path class="i-rose" d="M265 60H145v70h35l25 28v-28h60z"/><path class="i-line" d="M265 60H145v70h35l25 28v-28h60z" fill="none"/><path class="i-line" d="M55 85h80M55 105h55M170 85h80M195 105h55"/>',
    deflate: '<ellipse class="i-shadow" cx="150" cy="212" rx="70" ry="10"/><ellipse class="i-water" cx="150" cy="150" rx="65" ry="35"/><ellipse class="i-line" cx="150" cy="150" rx="65" ry="35" fill="none"/><path class="i-line" d="M150 185l-8 12 8 8 8-8z"/><path class="i-line" d="M118 95q10-22 0-42" fill="none" stroke-dasharray="6 8"/><path class="i-line" d="M118 53l-12-4M118 53l4-14"/><ellipse class="i-shine" cx="125" cy="140" rx="12" ry="8"/>',
    dictate: '<ellipse class="i-shadow" cx="150" cy="210" rx="85" ry="10"/><rect class="i-white" x="70" y="70" width="120" height="140" rx="10"/><rect class="i-line" x="70" y="70" width="120" height="140" rx="10" fill="none"/><path class="i-line" d="M90 100h80M90 125h80M90 150h60"/><path class="i-sand" d="M195 190l45-100 20 9-45 100z"/><path class="i-line" d="M195 190l45-100 20 9-45 100z" fill="none"/><path class="i-ink" d="M195 190l-10 22 22-8z"/>',
    donate: '<ellipse class="i-shadow" cx="150" cy="210" rx="80" ry="10"/><path class="i-water" d="M60 150h180v40a10 10 0 0 1-10 10H70a10 10 0 0 1-10-10z"/><path class="i-line" d="M60 150h180v40a10 10 0 0 1-10 10H70a10 10 0 0 1-10-10z" fill="none"/><path class="i-line" d="M60 150h180"/><path class="i-rose" d="M150 130c-25-30-70-5-65 25-3 25 30 40 65 55 35-15 68-30 65-55 5-30-40-55-65-25z"/><path class="i-line" d="M150 130c-25-30-70-5-65 25-3 25 30 40 65 55 35-15 68-30 65-55 5-30-40-55-65-25z" fill="none"/>',
    educate: '<ellipse class="i-shadow" cx="150" cy="212" rx="90" ry="10"/><path class="i-white" d="M150 150V90c-20-15-55-20-80-15v75c25-8 60-2 80 15z"/><path class="i-line" d="M150 150V90c-20-15-55-20-80-15v75c25-8 60-2 80 15z" fill="none"/><path class="i-water" d="M150 150V90c20-15 55-20 80-15v75c-25-8-60-2-80 15z"/><path class="i-line" d="M150 150V90c20-15 55-20 80-15v75c-25-8-60-2-80 15z" fill="none"/><path class="i-sand-dark" d="M150 45l70 28-70 28-70-28z"/><path class="i-line" d="M150 45l70 28-70 28-70-28z" fill="none"/><path class="i-line" d="M85 73v30M85 103a10 8 0 0 0 20 0" fill="none"/>',
    elate: '<ellipse class="i-shadow" cx="150" cy="212" rx="60" ry="10"/><circle class="i-sand" cx="150" cy="95" r="30"/><circle class="i-line" cx="150" cy="95" r="30" fill="none"/><path class="i-line" d="M135 90q15 12 30 0M138 82h2M180 82h2"/><path class="i-line" d="M150 125v55M150 140l-45-45M150 140l45-45M150 165l-30 40M150 165l30 40"/><path class="i-sun" d="M60 60l6 14 15 2-11 10 3 15-13-8-13 8 3-15-11-10 15-2z"/><path class="i-sun" d="M235 50l4 9 9 4-9 4-4 9-4-9-9-4 9-4z"/>',
    equate: '<ellipse class="i-shadow" cx="150" cy="210" rx="90" ry="10"/><path class="i-line" d="M150 190V70M90 190h120M70 70h160M70 70v45M230 70v45"/><path class="i-water" d="M40 115a30 30 0 0 0 60 0z"/><path class="i-line" d="M40 115a30 30 0 0 0 60 0z" fill="none"/><path class="i-water" d="M200 115a30 30 0 0 0 60 0z"/><path class="i-line" d="M200 115a30 30 0 0 0 60 0z" fill="none"/><circle class="i-ink" cx="150" cy="70" r="8"/>',
    inflate: '<ellipse class="i-shadow" cx="150" cy="212" rx="55" ry="10"/><circle class="i-water" cx="150" cy="110" r="65"/><circle class="i-line" cx="150" cy="110" r="65" fill="none"/><path class="i-line" d="M150 175l-8 15 8 8 8-8z"/><ellipse class="i-shine" cx="122" cy="80" rx="14" ry="20"/><path class="i-line" d="M150 205v10M120 208l-20 8M180 208l20 8"/>',
    isolate: '<ellipse class="i-shadow" cx="150" cy="212" rx="85" ry="10"/><circle class="i-water" cx="95" cy="130" r="22"/><circle class="i-line" cx="95" cy="130" r="22" fill="none"/><circle class="i-water" cx="140" cy="105" r="22"/><circle class="i-line" cx="140" cy="105" r="22" fill="none"/><circle class="i-water" cx="130" cy="155" r="22"/><circle class="i-line" cx="130" cy="155" r="22" fill="none"/><circle class="i-rose" cx="235" cy="130" r="26"/><circle class="i-line" cx="235" cy="130" r="26" fill="none"/><circle class="i-line" cx="235" cy="130" r="44" fill="none" stroke-dasharray="6 8"/>',
    locate: '<ellipse class="i-shadow" cx="150" cy="212" rx="55" ry="10"/><path class="i-rose" d="M150 50c-38 0-66 29-66 65 0 50 66 105 66 105s66-55 66-105c0-36-28-65-66-65z"/><path class="i-line" d="M150 50c-38 0-66 29-66 65 0 50 66 105 66 105s66-55 66-105c0-36-28-65-66-65z" fill="none"/><circle class="svgBg" cx="150" cy="112" r="26"/><circle class="i-line" cx="150" cy="112" r="26" fill="none"/>',
    mandate: '<ellipse class="i-shadow" cx="150" cy="212" rx="85" ry="10"/><rect class="i-white" x="65" y="55" width="150" height="150" rx="10"/><rect class="i-line" x="65" y="55" width="150" height="150" rx="10" fill="none"/><path class="i-line" d="M85 85h90M85 108h90M85 131h60"/><circle class="i-rose" cx="205" cy="170" r="38"/><circle class="i-line" cx="205" cy="170" r="38" fill="none"/><path class="i-line" d="M188 170l12 12 22-24" fill="none"/>',
    nitrate: '<ellipse class="i-shadow" cx="150" cy="212" rx="75" ry="10"/><path class="i-white" d="M130 60h40v55l45 75a15 15 0 0 1-13 22H98a15 15 0 0 1-13-22l45-75z"/><path class="i-line" d="M130 60h40v55l45 75a15 15 0 0 1-13 22H98a15 15 0 0 1-13-22l45-75z" fill="none"/><path class="i-water" d="M105 155h90l20 35a15 15 0 0 1-13 22H98a15 15 0 0 1-13-22z"/><path class="i-line" d="M120 55h60"/><circle class="i-shine" cx="130" cy="175" r="6"/><circle class="i-shine" cx="160" cy="190" r="8"/><circle class="i-shine" cx="145" cy="160" r="5"/>',
    ornate: '<ellipse class="i-shadow" cx="150" cy="215" rx="70" ry="9"/><rect class="i-sand-dark" x="140" y="165" width="20" height="45" rx="8"/><circle class="i-water" cx="150" cy="110" r="58"/><circle class="i-line" cx="150" cy="110" r="58" fill="none"/><circle class="svgBg" cx="150" cy="110" r="42"/><path class="i-sand" d="M150 52c8-14 24-14 24 0s-14 18-24 7c-10 11-24 7-24-7s16-14 24 0z"/><path class="i-sand" d="M150 168c8 14 24 14 24 0s-14-18-24-7c-10-11-24-7-24 7s16 14 24 0z"/><path class="i-sand" d="M92 110c-14 8-14 24 0 24s18-14 7-24c11-10 7-24-7-24s-14 16 0 24z"/><path class="i-sand" d="M208 110c14 8 14 24 0 24s-18-14-7-24c-11-10-7-24 7-24s14 16 0 24z"/>',
    operate: '<ellipse class="i-shadow" cx="150" cy="212" rx="85" ry="10"/><rect class="i-water" x="60" y="120" width="180" height="70" rx="10"/><rect class="i-line" x="60" y="120" width="180" height="70" rx="10" fill="none"/><circle class="i-sand" cx="105" cy="155" r="22"/><circle class="i-line" cx="105" cy="155" r="22" fill="none"/><circle class="i-ink" cx="105" cy="155" r="6"/><rect class="i-sand-dark" x="170" y="150" width="20" height="20" rx="4"/><rect class="i-line" x="170" y="150" width="20" height="20" rx="4" fill="none"/><path class="i-line" d="M180 140v-30M180 110l-14 10M180 110l14 10" fill="none"/>',
    placate: '<ellipse class="i-shadow" cx="150" cy="212" rx="75" ry="10"/><path class="i-rose" d="M150 175c-45-30-65-70-40-95 20-20 40-5 40 15 0-20 20-35 40-15 25 25 5 65-40 95z"/><path class="i-line" d="M150 175c-45-30-65-70-40-95 20-20 40-5 40 15 0-20 20-35 40-15 25 25 5 65-40 95z" fill="none"/><path class="i-line" d="M70 70q20-15 40 0t40 0" fill="none"/><path class="i-line" d="M150 70q20-15 40 0t40 0" fill="none"/>',
    potato: '<ellipse class="i-shadow" cx="150" cy="212" rx="80" ry="10"/><path class="i-sand-dark" d="M85 140c-15-40 10-80 55-85 50-5 90 25 90 65 0 45-35 75-80 75-35 0-55-25-65-55z"/><path class="i-line" d="M85 140c-15-40 10-80 55-85 50-5 90 25 90 65 0 45-35 75-80 75-35 0-55-25-65-55z" fill="none"/><circle class="i-ink" cx="120" cy="120" r="5"/><circle class="i-ink" cx="160" cy="100" r="5"/><circle class="i-ink" cx="175" cy="150" r="5"/><circle class="i-ink" cx="130" cy="165" r="5"/>',
    predate: '<ellipse class="i-shadow" cx="150" cy="212" rx="75" ry="10"/><ellipse class="i-sand-dark" cx="150" cy="150" rx="45" ry="38"/><ellipse class="i-line" cx="150" cy="150" rx="45" ry="38" fill="none"/><ellipse class="i-sand-dark" cx="100" cy="95" rx="16" ry="20" transform="rotate(-15 100 95)"/><ellipse class="i-line" cx="100" cy="95" rx="16" ry="20" transform="rotate(-15 100 95)" fill="none"/><ellipse class="i-sand-dark" cx="135" cy="75" rx="16" ry="20" transform="rotate(-5 135 75)"/><ellipse class="i-line" cx="135" cy="75" rx="16" ry="20" transform="rotate(-5 135 75)" fill="none"/><ellipse class="i-sand-dark" cx="175" cy="75" rx="16" ry="20" transform="rotate(5 175 75)"/><ellipse class="i-line" cx="175" cy="75" rx="16" ry="20" transform="rotate(5 175 75)" fill="none"/><ellipse class="i-sand-dark" cx="205" cy="95" rx="16" ry="20" transform="rotate(15 205 95)"/><ellipse class="i-line" cx="205" cy="95" rx="16" ry="20" transform="rotate(15 205 95)" fill="none"/>',
    radiate: '<ellipse class="i-shadow" cx="150" cy="212" rx="80" ry="10"/><circle class="i-ink" cx="150" cy="120" r="10"/><circle class="i-line" cx="150" cy="120" r="35" fill="none"/><circle class="i-line" cx="150" cy="120" r="60" fill="none" stroke-dasharray="8 10"/><circle class="i-line" cx="150" cy="120" r="85" fill="none" stroke-dasharray="6 14"/>',
    rebate: '<ellipse class="i-shadow" cx="150" cy="212" rx="80" ry="10"/><rect class="i-water" x="60" y="130" width="120" height="55" rx="8"/><rect class="i-line" x="60" y="130" width="120" height="55" rx="8" fill="none"/><path class="i-line" d="M60 150h120"/><circle class="i-sun" cx="225" cy="110" r="35"/><circle class="i-line" cx="225" cy="110" r="35" fill="none"/><path class="i-line" d="M225 95v30M212 108l13-13 13 13"/><path class="i-line" d="M190 150c15-5 25 5 25 15" stroke-dasharray="6 6"/>',
    relate: '<ellipse class="i-shadow" cx="150" cy="212" rx="85" ry="10"/><circle class="i-water" cx="115" cy="115" r="60"/><circle class="i-line" cx="115" cy="115" r="60" fill="none"/><circle class="i-rose" cx="185" cy="115" r="60"/><circle class="i-line" cx="185" cy="115" r="60" fill="none"/>',
    rotate: '<ellipse class="i-shadow" cx="150" cy="212" rx="70" ry="10"/><rect class="i-sand" x="115" y="85" width="70" height="70" rx="10" transform="rotate(15 150 120)"/><rect class="i-line" x="115" y="85" width="70" height="70" rx="10" transform="rotate(15 150 120)" fill="none"/><path class="i-line" d="M95 90a75 75 0 1 1-8 90" fill="none"/><path class="i-ink" d="M85 68l14 34-36-10z"/>',
    sedate: '<ellipse class="i-shadow" cx="150" cy="212" rx="80" ry="10"/><circle class="i-sky" cx="150" cy="120" r="65"/><circle class="i-line" cx="150" cy="120" r="65" fill="none"/><circle class="svgBg" cx="185" cy="100" r="60"/><text x="225" y="75" class="svgText" font-size="34">z</text><text x="255" y="48" class="svgText" font-size="22">z</text>',
    tomato: '<ellipse class="i-shadow" cx="150" cy="212" rx="75" ry="10"/><circle class="i-rose" cx="150" cy="135" r="70"/><circle class="i-line" cx="150" cy="135" r="70" fill="none"/><ellipse class="i-leaf" cx="150" cy="58" rx="10" ry="22"/><ellipse class="i-leaf" cx="125" cy="65" rx="10" ry="22" transform="rotate(-35 125 65)"/><ellipse class="i-leaf" cx="175" cy="65" rx="10" ry="22" transform="rotate(35 175 65)"/><ellipse class="i-leaf" cx="108" cy="82" rx="9" ry="18" transform="rotate(-60 108 82)"/><ellipse class="i-leaf" cx="192" cy="82" rx="9" ry="18" transform="rotate(60 192 82)"/><ellipse class="i-shine" cx="122" cy="105" rx="14" ry="18"/>',
    update: '<ellipse class="i-shadow" cx="150" cy="212" rx="65" ry="10"/><circle class="i-water" cx="150" cy="120" r="72"/><circle class="i-line" cx="150" cy="120" r="72" fill="none"/><path class="i-line" d="M108 85a58 58 0 1 1-16 74" fill="none"/><path class="i-ink" d="M96 63l14 34-36-8z"/>',
    vibrate: '<ellipse class="i-shadow" cx="150" cy="212" rx="70" ry="10"/><rect class="i-water" x="115" y="55" width="70" height="130" rx="16"/><rect class="i-line" x="115" y="55" width="70" height="130" rx="16" fill="none"/><circle class="i-line" cx="150" cy="168" r="6" fill="none"/><path class="i-line" d="M95 90q-15 10 0 20M95 130q-15 10 0 20" fill="none"/><path class="i-line" d="M205 90q15 10 0 20M205 130q15 10 0 20" fill="none"/>',
    activate: '<ellipse class="i-shadow" cx="150" cy="212" rx="65" ry="10"/><path class="i-line" d="M198 98A55 55 0 1 1 102 98" fill="none" stroke-width="12"/><path class="i-line" d="M150 65v45" fill="none" stroke-width="12"/><path class="i-sun" d="M150 35l7 16 17 2-13 11 4 17-15-9-15 9 4-17-13-11 17-2z"/>',
    allocate: '<ellipse class="i-shadow" cx="150" cy="212" rx="90" ry="9"/><rect class="i-water" x="120" y="45" width="60" height="45" rx="8"/><rect class="i-line" x="120" y="45" width="60" height="45" rx="8" fill="none"/><rect class="i-sand" x="60" y="150" width="50" height="45" rx="8"/><rect class="i-line" x="60" y="150" width="50" height="45" rx="8" fill="none"/><rect class="i-sand" x="125" y="150" width="50" height="45" rx="8"/><rect class="i-line" x="125" y="150" width="50" height="45" rx="8" fill="none"/><rect class="i-sand" x="190" y="150" width="50" height="45" rx="8"/><rect class="i-line" x="190" y="150" width="50" height="45" rx="8" fill="none"/><path class="i-line" d="M130 95l-45 50M150 95v55M170 95l45 50" fill="none"/>',
    amputate: '<ellipse class="i-shadow" cx="150" cy="212" rx="65" ry="10"/><path class="i-sand" d="M122 195v-90a28 28 0 0 1 56 0v90z"/><path class="i-line" d="M122 195v-90a28 28 0 0 1 56 0v90z" fill="none"/><path class="i-line" d="M112 150h76" stroke-dasharray="8 8"/><path class="i-white" d="M116 158h68v18a34 18 0 0 1-68 0z"/><path class="i-line" d="M116 158h68v18a34 18 0 0 1-68 0z" fill="none"/>',
    conflate: '<ellipse class="i-shadow" cx="150" cy="212" rx="90" ry="9"/><circle class="i-water" cx="120" cy="140" r="55"/><circle class="i-line" cx="120" cy="140" r="55" fill="none"/><circle class="i-rose" cx="180" cy="140" r="55"/><circle class="i-line" cx="180" cy="140" r="55" fill="none"/><path class="i-line" d="M110 45v25M102 62l8 8 8-8" fill="none" stroke-width="8"/><path class="i-line" d="M190 45v25M182 62l8 8 8-8" fill="none" stroke-width="8"/>',
    decorate: '<ellipse class="i-shadow" cx="150" cy="212" rx="90" ry="9"/><path class="i-line" d="M55 70q95 40 190 0" fill="none"/><path class="i-rose" d="M85 78l25 10-25 35z"/><path class="i-line" d="M85 78l25 10-25 35z" fill="none"/><path class="i-water" d="M137 88l25 10-25 35z"/><path class="i-line" d="M137 88l25 10-25 35z" fill="none"/><path class="i-sand" d="M189 78l25 10-25 35z"/><path class="i-line" d="M189 78l25 10-25 35z" fill="none"/><path class="i-sun" d="M150 150l7 16 17 2-13 11 4 17-15-9-15 9 4-17-13-11 17-2z"/>',
    dominate: '<ellipse class="i-shadow" cx="150" cy="215" rx="95" ry="9"/><rect class="i-sand" x="65" y="150" width="55" height="55" rx="6"/><rect class="i-line" x="65" y="150" width="55" height="55" rx="6" fill="none"/><rect class="i-water" x="122" y="105" width="56" height="100" rx="6"/><rect class="i-line" x="122" y="105" width="56" height="100" rx="6" fill="none"/><rect class="i-sand" x="180" y="165" width="55" height="40" rx="6"/><rect class="i-line" x="180" y="165" width="55" height="40" rx="6" fill="none"/><path class="i-sun" d="M150 55l10 25 27 3-20 18 6 27-23-14-23 14 6-27-20-18 27-3z"/>',
    elongate: '<ellipse class="i-shadow" cx="150" cy="205" rx="85" ry="9"/><rect class="i-water" x="95" y="105" width="110" height="40" rx="20"/><rect class="i-line" x="95" y="105" width="110" height="40" rx="20" fill="none"/><path class="i-line" d="M75 125h-25M235 125h25" stroke-width="10"/><path class="i-ink" d="M50 125l16-12v24zM250 125l-16-12v24z"/>',
    emigrate: '<ellipse class="i-shadow" cx="150" cy="212" rx="90" ry="9"/><path class="i-sand" d="M55 150 L85 115 L115 150 V195 H55 Z"/><path class="i-line" d="M55 150 L85 115 L115 150 V195 H55 Z" fill="none"/><circle class="i-water" cx="195" cy="115" r="18"/><path class="i-water" d="M170 200c0-30 12-50 25-50s25 20 25 50z"/><path class="i-line" d="M170 200c0-30 12-50 25-50s25 20 25 50z" fill="none"/><rect class="i-rose" x="215" y="150" width="26" height="22" rx="4"/><rect class="i-line" x="215" y="150" width="26" height="22" rx="4" fill="none"/><path class="i-line" d="M245 130h25M258 118l12 12-12 12" fill="none"/>',
    estimate: '<ellipse class="i-shadow" cx="150" cy="212" rx="80" ry="9"/><circle class="i-water" cx="150" cy="115" r="65"/><circle class="i-line" cx="150" cy="115" r="65" fill="none"/><path class="i-line" d="M105 100q11 14 22 0t22 0t22 0t22 0" fill="none" stroke-width="8"/><path class="i-line" d="M105 130q11 14 22 0t22 0t22 0t22 0" fill="none" stroke-width="8"/><circle class="i-water" cx="105" cy="185" r="10"/><circle class="i-water" cx="130" cy="200" r="6"/>',
    graduate: '<ellipse class="i-shadow" cx="150" cy="212" rx="80" ry="9"/><path class="i-sand-dark" d="M150 60L65 95l85 35 85-35z"/><path class="i-line" d="M150 60L65 95l85 35 85-35z" fill="none"/><rect class="i-sand-dark" x="140" y="95" width="20" height="35" rx="4"/><path class="i-line" d="M225 95v30q0 12-15 18" fill="none"/><circle class="i-ink" cx="225" cy="128" r="6"/><rect class="i-white" x="105" y="150" width="90" height="35" rx="17"/><rect class="i-line" x="105" y="150" width="90" height="35" rx="17" fill="none"/><path class="i-line" d="M125 167h50" fill="none" stroke-width="6"/>',
    initiate: '<ellipse class="i-shadow" cx="150" cy="212" rx="80" ry="9"/><rect class="i-sand" x="70" y="55" width="90" height="150" rx="6"/><rect class="i-line" x="70" y="55" width="90" height="150" rx="6" fill="none"/><path class="i-water" d="M160 60l45 20v130l-45-20z"/><path class="i-line" d="M160 60l45 20v130l-45-20z" fill="none"/><circle class="i-ink" cx="185" cy="130" r="6"/><path class="i-line" d="M215 130h35M238 115l14 15-14 15" fill="none" stroke-width="8"/>',
    moderate: '<ellipse class="i-shadow" cx="150" cy="205" rx="85" ry="9"/><path class="i-water" d="M60 180a90 90 0 0 1 180 0z"/><path class="i-line" d="M60 180a90 90 0 0 1 180 0z" fill="none"/><path class="i-white" d="M85 180a65 65 0 0 1 130 0z"/><path class="i-line" d="M150 180V125" stroke-width="9"/><circle class="i-ink" cx="150" cy="180" r="10"/><path class="i-line" d="M75 180h20M225 180h-20" fill="none" stroke-width="6"/>',
    motivate: '<ellipse class="i-shadow" cx="150" cy="212" rx="65" ry="10"/><path class="i-line" d="M150 190V80" stroke-width="14"/><path class="i-ink" d="M150 55l-28 35h56z"/><path class="i-sun" d="M200 60l6 14 15 2-11 10 3 15-13-8-13 8 3-15-11-10 15-2z"/>',
    narrate: '<ellipse class="i-shadow" cx="150" cy="212" rx="85" ry="9"/><path class="i-white" d="M150 165V90c-20-15-55-20-80-15v75c25-8 60-2 80 15z"/><path class="i-line" d="M150 165V90c-20-15-55-20-80-15v75c25-8 60-2 80 15z" fill="none"/><path class="i-water" d="M150 165V90c20-15 55-20 80-15v75c-25-8-60-2-80 15z"/><path class="i-line" d="M150 165V90c20-15 55-20 80-15v75c-25-8-60-2-80 15z" fill="none"/><path class="i-rose" d="M195 55h60v35h-15l-12 15v-15h-33z"/><path class="i-line" d="M195 55h60v35h-15l-12 15v-15h-33z" fill="none"/>',
    obligate: '<ellipse class="i-shadow" cx="150" cy="212" rx="80" ry="9"/><rect class="i-white" x="75" y="55" width="120" height="150" rx="10"/><rect class="i-line" x="75" y="55" width="120" height="150" rx="10" fill="none"/><path class="i-line" d="M95 85h80M95 108h80M95 131h55" fill="none"/><circle class="i-rose" cx="205" cy="165" r="35"/><circle class="i-line" cx="205" cy="165" r="35" fill="none"/><path class="i-line" d="M190 165l10 12 20-24" fill="none"/><path class="i-rose" d="M190 195l-10 25 25-10 25 10-10-25z"/>',
    stagnate: '<ellipse class="i-shadow" cx="150" cy="205" rx="95" ry="9"/><ellipse class="i-water" cx="150" cy="150" rx="95" ry="40"/><ellipse class="i-line" cx="150" cy="150" rx="95" ry="40" fill="none"/><circle class="i-ink" cx="110" cy="140" r="6"/><circle class="i-ink" cx="150" cy="155" r="8"/><circle class="i-ink" cx="190" cy="138" r="5"/><path class="i-line" d="M60 150h180" stroke-dasharray="4 10" fill="none" stroke-width="4"/>',
    translate: '<ellipse class="i-shadow" cx="150" cy="212" rx="90" ry="9"/><path class="i-water" d="M30 55h100v55H90l-25 25v-25H30z"/><path class="i-line" d="M30 55h100v55H90l-25 25v-25H30z" fill="none"/><path class="i-line" d="M48 78h65M48 95h45" stroke-width="6" fill="none"/><path class="i-rose" d="M270 175H170v-55h60l25-25v25h15z"/><path class="i-line" d="M270 175H170v-55h60l25-25v25h15z" fill="none"/><path class="i-line" d="M188 143h65M188 160h45" stroke-width="6" fill="none"/><path class="i-line" d="M135 105h30M155 95l15 10-15 10" fill="none" stroke-width="7"/><path class="i-line" d="M165 135h-30M145 145l-15-10 15-10" fill="none" stroke-width="7"/>',
    captivate: '<ellipse class="i-shadow" cx="150" cy="205" rx="80" ry="10"/><path class="i-water" d="M40 120c30-45 90-65 110-65s80 20 110 65c-30 45-90 65-110 65s-80-20-110-65z"/><path class="i-line" d="M40 120c30-45 90-65 110-65s80 20 110 65c-30 45-90 65-110 65s-80-20-110-65z" fill="none"/><circle class="i-rose" cx="150" cy="120" r="42"/><circle class="i-line" cx="150" cy="120" r="42" fill="none"/><circle class="i-ink" cx="150" cy="120" r="18"/><ellipse class="i-shine" cx="136" cy="105" rx="8" ry="6"/>',
    compensate: '<ellipse class="i-shadow" cx="150" cy="212" rx="85" ry="10"/><circle class="i-sand" cx="90" cy="150" r="28"/><circle class="i-line" cx="90" cy="150" r="28" fill="none"/><circle class="i-sand-dark" cx="90" cy="105" r="28"/><circle class="i-line" cx="90" cy="105" r="28" fill="none"/><circle class="i-sand" cx="210" cy="150" r="28"/><circle class="i-line" cx="210" cy="150" r="28" fill="none"/><circle class="i-sand-dark" cx="210" cy="105" r="28"/><circle class="i-line" cx="210" cy="105" r="28" fill="none"/><path class="i-line" d="M130 90h40M155 78l15 12-15 12M145 165h-40M120 153l-15 12 15 12" fill="none" stroke-width="7"/>',
    cultivate: '<ellipse class="i-shadow" cx="150" cy="212" rx="90" ry="10"/><path class="i-sand-dark" d="M45 200c0-35 47-55 105-55s105 20 105 55z"/><path class="i-line" d="M45 200c0-35 47-55 105-55s105 20 105 55z" fill="none"/><path class="i-line" d="M150 150v-55" stroke-width="8"/><path class="i-leaf" d="M150 110c-25-5-35-30-25-50 25 5 35 30 25 50z"/><path class="i-line" d="M150 110c-25-5-35-30-25-50 25 5 35 30 25 50z" fill="none"/><path class="i-leaf" d="M150 125c25-5 35-28 26-46-25 5-34 26-26 46z"/><path class="i-line" d="M150 125c25-5 35-28 26-46-25 5-34 26-26 46z" fill="none"/><circle class="i-sun" cx="235" cy="55" r="26"/>',
    deactivate: '<ellipse class="i-shadow" cx="150" cy="212" rx="65" ry="10"/><g opacity="0.4"><path class="i-line" d="M198 98A55 55 0 1 1 102 98" fill="none" stroke-width="12"/><path class="i-line" d="M150 65v45" fill="none" stroke-width="12"/></g><circle class="i-rose" cx="150" cy="150" r="45"/><circle class="i-line" cx="150" cy="150" r="45" fill="none"/><path class="i-line" d="M130 130l40 40M170 130l-40 40" fill="none" stroke-width="8"/>',
    eliminate: '<ellipse class="i-shadow" cx="150" cy="212" rx="90" ry="10"/><rect class="i-water" x="55" y="90" width="55" height="55" rx="8"/><rect class="i-line" x="55" y="90" width="55" height="55" rx="8" fill="none"/><rect class="i-shade" x="122" y="90" width="55" height="55" rx="8"/><rect class="i-line" x="122" y="90" width="55" height="55" rx="8" fill="none"/><rect class="i-rose" x="190" y="90" width="55" height="55" rx="8"/><rect class="i-line" x="190" y="90" width="55" height="55" rx="8" fill="none"/><path class="i-line" d="M130 98l38 38M168 98l-38 38" stroke-width="8"/>',
    exaggerate: '<ellipse class="i-shadow" cx="150" cy="212" rx="90" ry="9"/><circle class="i-line" cx="150" cy="115" r="90" fill="none" stroke-dasharray="8 10"/><circle class="i-sun" cx="150" cy="115" r="24"/><circle class="i-line" cx="150" cy="115" r="24" fill="none"/><path class="i-line" d="M150 25v20M150 185v20M60 115h20M220 115h20" stroke-width="8"/><path class="i-ink" d="M150 15l8 18h-16zM150 215l-8-18h16zM50 115l18-8v16zM250 115l-18 8v-16z"/>',
    illustrate: '<ellipse class="i-shadow" cx="150" cy="212" rx="80" ry="10"/><path class="i-line" d="M100 205l20-150M200 205l-20-150M90 140h120" stroke-width="8" fill="none"/><rect class="i-white" x="95" y="60" width="110" height="80" rx="6"/><rect class="i-line" x="95" y="60" width="110" height="80" rx="6" fill="none"/><path class="i-leaf" d="M95 130l30-30 25 20 30-35 25 25v20z"/><circle class="i-sun" cx="120" cy="80" r="10"/>',
    infiltrate: '<ellipse class="i-shadow" cx="150" cy="212" rx="85" ry="10"/><path class="i-line" d="M60 90v110M110 90v110M150 90v110M190 90v110M240 90v110" stroke-width="10"/><path class="i-line" d="M50 90h210" stroke-width="10"/><path class="i-rose" d="M70 150c40-20 80-20 120 0" fill="none" stroke-dasharray="6 8" stroke-width="6"/><path class="i-ink" d="M190 150l16-6-4 16z"/>',
    intoxicate: '<ellipse class="i-shadow" cx="150" cy="212" rx="55" ry="10"/><path class="i-water" d="M130 90h40v100a20 20 0 0 1-40 0z"/><path class="i-line" d="M130 90h40v100a20 20 0 0 1-40 0z" fill="none"/><rect class="i-sand" x="138" y="55" width="24" height="35" rx="6"/><rect class="i-line" x="138" y="55" width="24" height="35" rx="6" fill="none"/><path class="i-line" d="M95 60q15-20 30 0t30 0t30 0t30 0" fill="none" stroke-width="6" stroke-dasharray="4 8"/><circle class="i-ink" cx="150" cy="130" r="4"/>',
    participate: '<ellipse class="i-shadow" cx="150" cy="212" rx="90" ry="10"/><circle class="i-water" cx="150" cy="120" r="30"/><circle class="i-line" cx="150" cy="120" r="30" fill="none"/><circle class="i-rose" cx="80" cy="150" r="24"/><circle class="i-line" cx="80" cy="150" r="24" fill="none"/><circle class="i-sun" cx="220" cy="150" r="24"/><circle class="i-line" cx="220" cy="150" r="24" fill="none"/><path class="i-line" d="M105 135l20-5M195 135l-20-5" stroke-width="7" fill="none"/>',
    pollinate: '<ellipse class="i-shadow" cx="150" cy="212" rx="85" ry="10"/><circle class="i-rose" cx="60" cy="165" r="18"/><circle class="i-rose" cx="96" cy="165" r="18"/><circle class="i-rose" cx="78" cy="140" r="18"/><circle class="i-rose" cx="78" cy="184" r="18"/><circle class="i-sun" cx="78" cy="165" r="15"/><circle class="i-line" cx="78" cy="165" r="15" fill="none"/><circle class="i-rose" cx="212" cy="85" r="14"/><circle class="i-rose" cx="240" cy="85" r="14"/><circle class="i-rose" cx="226" cy="63" r="14"/><circle class="i-rose" cx="226" cy="100" r="14"/><circle class="i-sun" cx="226" cy="84" r="11"/><circle class="i-line" cx="226" cy="84" r="11" fill="none"/><path class="i-line" d="M100 145q60-25 115-50" stroke-dasharray="6 8" fill="none" stroke-width="5"/><ellipse class="i-ink" cx="155" cy="122" rx="15" ry="9" transform="rotate(-25 155 122)"/><path class="i-line" d="M148 112l-6-10M162 112l4-11" stroke-width="4" fill="none"/>',
    regenerate: '<ellipse class="i-shadow" cx="150" cy="212" rx="70" ry="10"/><path class="i-line" d="M95 80a60 60 0 1 0 8-14" fill="none" stroke-width="12"/><path class="i-ink" d="M80 50l8 30 28-12z"/><path class="i-line" d="M150 150v-35" stroke-width="8"/><path class="i-leaf" d="M150 122c-18-4-25-22-18-37 18 4 25 22 18 37z"/><path class="i-line" d="M150 122c-18-4-25-22-18-37 18 4 25 22 18 37z" fill="none"/>',
    replicate: '<ellipse class="i-shadow" cx="150" cy="212" rx="80" ry="10"/><rect class="i-sand" x="75" y="75" width="100" height="120" rx="10"/><rect class="i-line" x="75" y="75" width="100" height="120" rx="10" fill="none"/><rect class="i-water" x="125" y="55" width="100" height="120" rx="10"/><rect class="i-line" x="125" y="55" width="100" height="120" rx="10" fill="none"/><path class="i-line" d="M145 85h60M145 105h60M145 125h40" stroke-width="6" fill="none"/>',
    terminate: '<ellipse class="i-shadow" cx="150" cy="212" rx="75" ry="10"/><path class="i-rose" d="M110 55h80l40 40v80l-40 40h-80l-40-40v-80z"/><path class="i-line" d="M110 55h80l40 40v80l-40 40h-80l-40-40v-80z" fill="none"/><rect class="i-white" x="105" y="105" width="90" height="20" rx="6"/>',
};

function imageSvg(type, label, customSvg) {
  const text = escapeHtml(label);
  const inner = customSvg || WORD_SVGS[type] || WORD_SVGS.display;
  return `<svg class="word-image" viewBox="0 0 300 230" role="img" aria-label="Picture for ${text}"><rect width="300" height="230" rx="26" class="svgBg"/><g class="svgStroke">${inner}</g><text x="150" y="215" text-anchor="middle" class="svgCaption">${text}</text></svg>`;
}

const LEVEL_LABEL = { 1: 'Level 1: short words', 2: 'Level 2: longer words' };

function wordCardTemplate(item) {
  const done = !!state.done[item.word];
  return `
    <article class="card ${done ? 'done' : ''}">
      ${done ? `<span class="done-badge" aria-hidden="true">${icon('check')}</span>` : ''}
      ${state.admin ? `<div class="admin-card-controls">
        <button class="admin-icon-btn" data-admin-edit="${escapeHtml(item.word)}" title="Edit word" aria-label="Edit ${escapeHtml(item.word)}">${icon('pencil')}</button>
        <button class="admin-icon-btn admin-icon-danger" data-admin-archive="${escapeHtml(item.word)}" title="Archive word" aria-label="Archive ${escapeHtml(item.word)}">${icon('trash')}</button>
      </div>` : ''}
      <div class="pic">${imageSvg(item.visual, item.word, item.svg)}</div>
      <div>
        <h2>${highlightWord(item.word)}</h2>
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

// A sidebar group is expanded (its levels visible) when explicitly toggled
// that way, or — with no explicit toggle yet — when it's the group whose
// level is currently on screen. This keeps the tree data-driven: nothing
// here names a specific group.
function isGroupExpanded(groupId) {
  if (groupId in state.expandedGroups) return state.expandedGroups[groupId];
  return groupId === state.soundGroup;
}

// Renders one sound group's nested, individually-clickable level list —
// each level shows its own known/total progress and, once locked, a lock
// icon in place of a checkmark-able state. A level is locked purely from
// data (whether every word in the previous level is marked known), so a
// new sound group or a new Level N slots in automatically the moment
// WORDS contains words for it — nothing here is specific to any one group.
function sidebarLevelsTemplate(group) {
  const levels = groupLevels(group.id);
  if (!levels.length) return '';
  const expanded = isGroupExpanded(group.id);
  return `<ul class="sidebar-levels" ${expanded ? '' : 'hidden'}>${levels.map((level) => {
    const { known, total, pct } = levelProgress(group.id, level);
    const unlocked = isLevelUnlocked(group.id, level);
    const active = state.soundGroup === group.id && state.level === level;
    const label = LEVEL_LABEL[level] || `Level ${level}`;
    return `<li>
      <button class="sidebar-level ${active ? 'active' : ''} ${unlocked ? '' : 'is-locked'}" data-sidebar-level="${group.id}::${level}" ${unlocked ? '' : 'disabled aria-disabled="true"'} aria-current="${active}">
        ${unlocked ? '' : `<span class="sidebar-level-lock" aria-hidden="true">${icon('lock')}</span>`}
        <span class="sidebar-level-name">${escapeHtml(label)}</span>
        <span class="sidebar-level-progress" style="--pct:${pct}">
          <span class="sidebar-level-track"><span class="sidebar-level-fill"></span></span>
          <span class="sidebar-level-count">${known}/${total} · ${pct}%</span>
        </span>
      </button>
    </li>`;
  }).join('')}</ul>`;
}

// Left-hand sidebar: one entry per SOUND_GROUPS entry, each expanding to
// its own level list. A group with no active words yet (AI, AY today)
// renders as a disabled "soon" placeholder with no expand arrow — adding
// its first word to WORDS is all it takes for it to become a real,
// expandable branch here.
function sidebarTemplate() {
  return `<aside class="sidebar" aria-label="Sound groups and levels">
    <nav class="sidebar-tree">${SOUND_GROUPS.map((group) => {
      const hasContent = groupLevels(group.id).length > 0;
      const expanded = isGroupExpanded(group.id);
      return `<div class="sidebar-group ${hasContent ? '' : 'is-soon'}">
        <button class="sidebar-group-header" data-sidebar-group-toggle="${group.id}" ${hasContent ? `aria-expanded="${expanded}"` : 'disabled'}>
          ${icon('book')}<span class="sidebar-group-name">${escapeHtml(group.label)}</span>
          ${hasContent ? `<span class="sidebar-group-caret ${expanded ? 'is-open' : ''}" aria-hidden="true">${icon('chevron')}</span>` : '<span class="tab-soon">soon</span>'}
        </button>
        ${sidebarLevelsTemplate(group)}
      </div>`;
    }).join('')}</nav>
  </aside>`;
}

function groupProgressTemplate(group, groupWords) {
  const known = groupWords.filter((word) => state.done[word.word]).length;
  const total = groupWords.length;
  const pct = total ? Math.round((known / total) * 100) : 0;
  return `<div class="group-progress" style="--pct:${pct}">
    <span class="group-progress-label">${escapeHtml(group.label)}</span>
    <div class="group-progress-track"><div class="group-progress-fill"></div></div>
    <span class="group-progress-value">${known}/${total} words known</span>
  </div>`;
}

function emptyGroupTemplate(message) {
  return `<div class="empty-group">${icon('book')}<p>${escapeHtml(message)}</p></div>`;
}

function learnTemplate() {
  const group = SOUND_GROUPS.find((entry) => entry.id === state.soundGroup) || SOUND_GROUPS[0];
  const groupWords = WORDS.filter((word) => !word.archived && soundGroupId(word.word) === group.id);
  const filtered = groupWords.filter((word) => word.level === state.level);
  const tiers = [...new Set(filtered.map((word) => word.word.length))].sort((a, b) => a - b);
  const levelLabel = LEVEL_LABEL[state.level] || `Level ${state.level}`;
  const { known, total, pct: levelPct } = levelProgress(group.id, state.level);

  let body;
  if (!groupWords.length) {
    body = emptyGroupTemplate(`No "${group.label}" words yet — this sound group is ready for when it's added.`);
  } else if (!filtered.length) {
    body = emptyGroupTemplate(`No "${group.label}" words at this level yet.`);
  } else {
    body = tiers.map((length) => `
      <section class="tier-group" data-tier="${length}">
        <div class="tier-heading"><span class="tier-dot">${length}</span><h2>${length}-Letter Words</h2></div>
        <div class="grid">${filtered.filter((word) => word.word.length === length).map(wordCardTemplate).join('')}</div>
      </section>`).join('');
  }

  return `
    ${groupProgressTemplate(group, groupWords)}
    <div class="level-heading">
      <h2>${escapeHtml(group.label)} <span class="level-heading-sep">·</span> ${escapeHtml(levelLabel)}</h2>
      <span class="level-heading-progress">${known}/${total} words known (${levelPct}%)</span>
    </div>
    ${body}`;
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
        <li>Use the sidebar to pick a sound group (Long A, AI, AY) and one of its levels to focus on.</li>
        <li>Each level unlocks once every word in the level before it is marked known, so pacing builds up naturally.</li>
        <li>Select a male or female voice, then press English or Arabic audio.</li>
        <li>Look at the picture, read the Arabic meaning, and repeat the highlighted red letter.</li>
        <li>Use Large text, High contrast, or Dyslexia-friendly mode for inclusion and accessibility — combine them freely.</li>
      </ol>`;
}

// ---------- ADMIN MODE ----------
// A curriculum-author-only mode, off by default and never persisted, so a
// learner who reloads the page (or opens it fresh) always sees the plain
// app. Turn it on via the small dot button in the footer, or the keyboard
// shortcut Ctrl+Alt+A.
//
// Edits are written straight to src/phonics-app.js on disk through the
// local dev server's /__admin/save-word endpoint (see scripts/dev-server.js)
// so they become real, permanent, git-diffable file changes — never
// localStorage. If that endpoint isn't reachable (e.g. a static host like
// GitHub Pages, or the plain `npx serve`/`python3 -m http.server` without
// the admin dev server), every write simply fails with an on-screen error
// and nothing is changed — admin mode is effectively read-only there.
function adminBannerTemplate() {
  const archivedCount = WORDS.filter((word) => word.archived).length;
  return `
    <div class="admin-banner">
      <span class="admin-banner-label">${icon('pencil')}Admin mode</span>
      <span class="admin-banner-hint">Pencil edits a word, trash archives it.</span>
      <div class="admin-banner-actions">
        <button data-admin-show-archived>${icon('undo')}Archived words (${archivedCount})</button>
        <button data-admin-off>${icon('close')}Exit admin mode</button>
      </div>
      ${state.adminError ? `<p class="admin-error">${icon('alert')}${escapeHtml(state.adminError)}</p>` : ''}
    </div>`;
}

function archivedPanelTemplate() {
  const archived = WORDS.filter((word) => word.archived);
  return `
    <div class="modal-overlay" data-modal-overlay>
      <div class="modal-panel" role="dialog" aria-label="Archived words">
        <div class="modal-header">
          <h2>Archived words</h2>
          <button class="admin-icon-btn" data-close-panel aria-label="Close">${icon('close')}</button>
        </div>
        ${archived.length ? `<ul class="archived-list">${archived.map((item) => `
          <li>
            <span>${highlightWord(item.word)}</span>
            <button data-admin-unarchive="${escapeHtml(item.word)}">${icon('undo')}Restore</button>
          </li>`).join('')}</ul>` : '<p class="hint">No archived words.</p>'}
      </div>
    </div>`;
}

function editModalTemplate() {
  const item = WORDS.find((word) => word.word === state.editingWord);
  if (!item) return '';
  const svgValue = item.svg || WORD_SVGS[item.visual] || '';
  return `
    <div class="modal-overlay" data-modal-overlay>
      <div class="modal-panel" role="dialog" aria-label="Edit word">
        <div class="modal-header">
          <h2>Edit word</h2>
          <button class="admin-icon-btn" data-close-panel aria-label="Close">${icon('close')}</button>
        </div>
        <form id="admin-edit-form">
          <label>Word text<input type="text" name="word" value="${escapeHtml(item.word)}" required></label>
          <label>Hint<input type="text" name="hint" value="${escapeHtml(item.hint)}" required></label>
          <label>Arabic translation<input type="text" name="arabic" dir="rtl" value="${escapeHtml(item.arabic)}" required></label>
          <label>SVG illustration code<textarea name="svg" rows="7" spellcheck="false">${escapeHtml(svgValue)}</textarea></label>
          <div class="modal-actions">
            <button type="submit">${icon('check')}Save</button>
            <button type="button" data-close-panel>Cancel</button>
          </div>
        </form>
      </div>
    </div>`;
}

async function postAdminUpdate(originalWord, updatedWord) {
  try {
    const response = await fetch('/__admin/save-word', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ originalWord, word: updatedWord }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.ok) throw new Error(result.error || `save failed (HTTP ${response.status})`);
    return true;
  } catch (err) {
    state.adminError = `Could not save to disk — is the admin dev server running? Run "npm run admin". (${err.message})`;
    render();
    return false;
  }
}

function applyWordUpdate(originalWord, updatedWord) {
  const index = WORDS.findIndex((word) => word.word === originalWord);
  if (index !== -1) WORDS[index] = updatedWord;
}

async function archiveWord(word) {
  const item = WORDS.find((entry) => entry.word === word);
  if (!item) return;
  const updated = { ...item, archived: true };
  if (await postAdminUpdate(word, updated)) {
    applyWordUpdate(word, updated);
    state.adminError = '';
    render();
  }
}

async function unarchiveWord(word) {
  const item = WORDS.find((entry) => entry.word === word);
  if (!item) return;
  const updated = { ...item };
  delete updated.archived;
  if (await postAdminUpdate(word, updated)) {
    applyWordUpdate(word, updated);
    state.adminError = '';
    render();
  }
}

async function saveWordEditForm(originalWord, formValues) {
  const item = WORDS.find((entry) => entry.word === originalWord);
  if (!item) return;
  const updated = {
    ...item,
    word: formValues.word.trim(),
    hint: formValues.hint.trim(),
    arabic: formValues.arabic.trim(),
  };
  const svgValue = formValues.svg.trim();
  if (svgValue) updated.svg = svgValue;
  else delete updated.svg;
  if (await postAdminUpdate(originalWord, updated)) {
    applyWordUpdate(originalWord, updated);
    state.editingWord = null;
    state.adminError = '';
    render();
  }
}

function closeAdminPanels() {
  state.showArchived = false;
  state.editingWord = null;
  render();
}

function wireAdminEvents() {
  $('[data-admin-toggle]').onclick = () => { state.admin = !state.admin; state.adminError = ''; render(); };
  if (!state.admin) return;
  const banner = $('.admin-banner');
  if (banner) {
    $('[data-admin-off]').onclick = () => { state.admin = false; closeAdminPanels(); };
    $('[data-admin-show-archived]').onclick = () => { state.showArchived = true; render(); };
  }
  document.querySelectorAll('[data-admin-edit]').forEach((button) => button.onclick = () => { state.editingWord = button.dataset.adminEdit; render(); });
  document.querySelectorAll('[data-admin-archive]').forEach((button) => button.onclick = () => archiveWord(button.dataset.adminArchive));
  document.querySelectorAll('[data-admin-unarchive]').forEach((button) => button.onclick = () => unarchiveWord(button.dataset.adminUnarchive));
  document.querySelectorAll('[data-close-panel]').forEach((button) => button.onclick = () => closeAdminPanels());
  document.querySelectorAll('[data-modal-overlay]').forEach((overlay) => overlay.onclick = (event) => { if (event.target === overlay) closeAdminPanels(); });
  const form = $('#admin-edit-form');
  if (form) {
    form.onsubmit = (event) => {
      event.preventDefault();
      const data = new FormData(form);
      saveWordEditForm(state.editingWord, {
        word: data.get('word') || '',
        hint: data.get('hint') || '',
        arabic: data.get('arabic') || '',
        svg: data.get('svg') || '',
      });
    };
  }
}

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey && (event.key === 'a' || event.key === 'A')) {
    event.preventDefault();
    state.admin = !state.admin;
    state.adminError = '';
    render();
  } else if (event.key === 'Escape' && state.admin && (state.showArchived || state.editingWord)) {
    closeAdminPanels();
  }
});

// Keeps state.soundGroup/state.level pointing at something real and, for
// non-admins, actually unlocked — run at the top of every render() so
// toggling a word's known status (which can lock/unlock levels on the
// fly) never leaves the learner stranded on a level they can no longer
// see. Falls through to the first group/level with content, entirely by
// reading SOUND_GROUPS/WORDS rather than naming a group.
function normalizeSelection() {
  let levels = groupLevels(state.soundGroup);
  if (!levels.length) {
    const fallback = SOUND_GROUPS.find((entry) => groupLevels(entry.id).length > 0);
    if (fallback) state.soundGroup = fallback.id;
    levels = groupLevels(state.soundGroup);
  }
  if (!levels.length) return;
  if (!levels.includes(state.level)) state.level = levels[0];
  if (!isLevelUnlocked(state.soundGroup, state.level)) {
    let lastUnlocked = levels[0];
    for (const level of levels) {
      if (!isLevelUnlocked(state.soundGroup, level)) break;
      lastUnlocked = level;
    }
    state.level = lastUnlocked;
  }
}

function render() {
  normalizeSelection();
  const activeWords = WORDS.filter((word) => !word.archived);
  const score = activeWords.filter((word) => state.done[word.word]).length;
  const pct = activeWords.length ? Math.round((score / activeWords.length) * 100) : 0;
  document.body.className = `${state.big ? 'big' : ''} ${state.contrast ? 'contrast' : ''} ${state.dyslexia ? 'dyslexia' : ''}`;
  $('#app').innerHTML = `
    <header class="hero">
      <div>
        <p class="eyebrow">SoundLinks / روابط الأصوات</p>
        <h1>Interactive English Phonics for Arabic Speakers</h1>
        <p>Self-paced lessons highlight vowel teams in red, connect English sounds to Arabic cues, and let learners listen in English or Arabic, repeat, view pictures, and mark progress.</p>
      </div>
      <div class="progress" style="--pct:${pct}"><div class="progress-inner"><strong>${score}/${activeWords.length}</strong><span>words done overall</span></div></div>
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
        <button data-dyslexia class="${state.dyslexia ? 'is-on' : ''}">${icon('dyslexia')}Dyslexia-friendly mode</button>
        <button data-reset>${icon('reset')}Reset</button>
      </div>
    </nav>
    ${state.admin ? adminBannerTemplate() : ''}
    <section class="instructions">
      <h2>How to use / طريقة الاستخدام</h2>
      ${instructionsTemplate()}
    </section>
    <div class="app-layout ${state.view === 'learn' ? 'has-sidebar' : ''}">
      ${state.view === 'learn' ? sidebarTemplate() : ''}
      <div class="app-main">${state.view === 'learn' ? learnTemplate() : state.view === 'rules' ? rulesTemplate() : practiceTemplate()}</div>
    </div>
    <footer class="app-footer">
      <button class="admin-toggle-btn" data-admin-toggle aria-label="Toggle admin mode"></button>
    </footer>
    ${state.admin && state.showArchived ? archivedPanelTemplate() : ''}
    ${state.admin && state.editingWord ? editModalTemplate() : ''}`;
  $('[data-voice]').value = state.voiceMode;
  document.querySelectorAll('[data-view]').forEach((button) => button.onclick = () => setState('view', button.dataset.view));
  $('[data-big]').onclick = () => setState('big', !state.big);
  $('[data-contrast]').onclick = () => setState('contrast', !state.contrast);
  $('[data-dyslexia]').onclick = () => setState('dyslexia', !state.dyslexia);
  $('[data-reset]').onclick = () => { state.done = {}; localStorage.removeItem('donePhonics'); render(); };
  $('[data-voice]').onchange = (event) => setState('voiceMode', event.target.value);
  document.querySelectorAll('[data-say]').forEach((button) => button.onclick = () => speak(button.dataset.say, button.dataset.lang));
  document.querySelectorAll('[data-toggle]').forEach((button) => button.onclick = () => toggleDone(button.dataset.toggle));
  document.querySelectorAll('[data-practice]').forEach((button) => button.onclick = () => {
    const item = PhonemeData.SOUND_PRACTICE.find((entry) => entry.word === button.dataset.practice);
    if (item) startPractice(item);
  });
  document.querySelectorAll('[data-sidebar-group-toggle]').forEach((button) => button.onclick = () => {
    const id = button.dataset.sidebarGroupToggle;
    state.expandedGroups[id] = !isGroupExpanded(id);
    render();
  });
  document.querySelectorAll('[data-sidebar-level]').forEach((button) => button.onclick = () => {
    const [groupId, levelStr] = button.dataset.sidebarLevel.split('::');
    const level = Number(levelStr);
    if (!isLevelUnlocked(groupId, level)) return;
    state.soundGroup = groupId;
    state.level = level;
    state.expandedGroups[groupId] = true;
    render();
  });
  wireAdminEvents();
}

render();

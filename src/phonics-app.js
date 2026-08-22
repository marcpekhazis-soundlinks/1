const WORDS = [
  { word: "bay", arabic: "خَلِيجٌ", hint: "a curve of ocean by land", visual: "bay", level: 1, archived: true, sentence: "The boats sat quietly in the bay." },
  { word: "day", arabic: "يَوْمٌ", hint: "sun-up time", visual: "day", level: 1, archived: true, sentence: "Today is a sunny day." },
  { word: "hay", arabic: "تِبْنٌ", hint: "dry grass", visual: "hay", level: 1, archived: true, sentence: "The horse ate some hay." },
  { word: "jay", arabic: "طَائِرُ القَيْقِ", hint: "a colorful, noisy bird", visual: "jay", level: 1, archived: true, sentence: "A blue jay landed on the fence." },
  { word: "lay", arabic: "يَضَعُ / يَسْتَلْقِي", hint: "put down or rest", visual: "bed", level: 1, archived: true, sentence: "Please lay the book on the table." },
  { word: "may", arabic: "قَدْ / شَهْرُ مَايُو", hint: "might, or the month May", visual: "calendar", level: 1, archived: true, sentence: "You may go outside and play." },
  { word: "pay", arabic: "يَدْفَعُ", hint: "give money", visual: "pay", level: 1, archived: true, sentence: "I will pay for the food." },
  { word: "ray", arabic: "شُعَاعٌ", hint: "a line of light", visual: "ray", level: 1, archived: true, sentence: "A ray of sunlight came through the window." },
  { word: "say", arabic: "يَقُولُ", hint: "speak words", visual: "speech", level: 1, archived: true, sentence: "What did you say to her?" },
  { word: "way", arabic: "طَرِيقٌ / أُسْلُوبٌ", hint: "a path, or how something is done", visual: "road", level: 1, archived: true, sentence: "This is the way to the park." },
  { word: "away", arabic: "بَعِيدًا / ذَهَبَ", hint: "gone, or not in this place", visual: "arrows", level: 1, archived: true, sentence: "The cat ran away from the dog." },
  { word: "bray", arabic: "نَهِيقُ الْحِمَارِ", hint: "the loud, harsh cry a donkey makes", visual: "bray", level: 1, archived: true, sentence: "The donkey let out a loud bray." },
  { word: "clay", arabic: "طِينٌ", hint: "soft, wet earth used for pottery", visual: "clay", level: 1, archived: true, sentence: "She made a pot out of clay." },
  { word: "fray", arabic: "مُشَاجَرَةٌ / يَتَهَرَّأُ", hint: "a scuffle, or threads wearing loose at an edge", visual: "fray", level: 1, archived: true, sentence: "The rope began to fray at the end." },
  { word: "gray", arabic: "رَمَادِيٌّ", hint: "the color between black and white", visual: "gray", level: 1, archived: true, sentence: "The sky turned gray before the storm." },
  { word: "play", arabic: "يَلْعَبُ", hint: "have fun or join a game", visual: "game", level: 1, archived: true, sentence: "The children love to play outside." },
  { word: "pray", arabic: "يُصَلِّي / يَدْعُو", hint: "to speak to God", visual: "pray", level: 1, archived: true, sentence: "They pray together every morning." },
  { word: "slay", arabic: "يَقْتُلُ / يَذْبَحُ", hint: "to kill with a weapon", visual: "sword", level: 1, archived: true, sentence: "The knight will slay the dragon in the story." },
  { word: "stay", arabic: "يَبْقَى", hint: "remain in one place", visual: "house", level: 1, archived: true, sentence: "Please stay here until I return." },
  { word: "sway", arabic: "يَتَأَرْجَحُ / يَتَمَايَلُ", hint: "to rock gently from side to side", visual: "sway", level: 1, archived: true, sentence: "The trees sway gently in the wind." },
  { word: "spray", arabic: "يَرُشُّ", hint: "send out small drops", visual: "spray", level: 1, archived: true, sentence: "She used a spray to clean the window." },
  { word: "tray", arabic: "صِينِيَّةٌ", hint: "a flat holder for food", visual: "tray", level: 1, archived: true, sentence: "He carried the cups on a tray." },
  { word: "ace", arabic: "بَطَلٌ", hint: "a champion or expert", visual: "ace", level: 1, image: 'src/assets/images/Long A/001-ace.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"205\" rx=\"70\" ry=\"12\"/><path class=\"i-water\" d=\"M118 100 L95 195 L130 175 L140 100Z\"/><path class=\"i-water\" d=\"M182 100 L205 195 L170 175 L160 100Z\"/><circle class=\"i-sun\" cx=\"150\" cy=\"95\" r=\"55\"/><circle class=\"i-line\" cx=\"150\" cy=\"95\" r=\"55\"/><path class=\"i-ink\" d=\"M150 62 L159 85 L184 85 L164 100 L172 123 L150 108 L128 123 L136 100 L116 85 L141 85Z\"/><ellipse class=\"i-shine\" cx=\"130\" cy=\"76\" rx=\"10\" ry=\"7\"/>", sentence: "He is an ace football player." },
  { word: "ape", arabic: "قِرْدٌ", hint: "a large tailless monkey", visual: "ape", level: 1, image: 'src/assets/images/Long A/002-ape.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"205\" rx=\"75\" ry=\"12\"/><circle class=\"i-sand-dark\" cx=\"90\" cy=\"92\" r=\"28\"/><circle class=\"i-sand-dark\" cx=\"210\" cy=\"92\" r=\"28\"/><circle class=\"i-sand\" cx=\"150\" cy=\"112\" r=\"68\"/><circle class=\"i-line\" cx=\"150\" cy=\"112\" r=\"68\"/><ellipse class=\"i-sand-dark\" cx=\"150\" cy=\"142\" rx=\"42\" ry=\"32\"/><ellipse class=\"i-line\" cx=\"150\" cy=\"142\" rx=\"42\" ry=\"32\"/><circle class=\"i-ink\" cx=\"128\" cy=\"100\" r=\"7\"/><circle class=\"i-ink\" cx=\"172\" cy=\"100\" r=\"7\"/><circle class=\"i-ink\" cx=\"140\" cy=\"145\" r=\"4\"/><circle class=\"i-ink\" cx=\"160\" cy=\"145\" r=\"4\"/><path class=\"i-line\" d=\"M122 165q28 18 56 0\"/><ellipse class=\"i-shine\" cx=\"122\" cy=\"86\" rx=\"9\" ry=\"6\"/>", sentence: "The ape likes to swing from branch to branch." },
  // say: 'eight' — TTS reads bare "ate" with a short vowel (like "at"); the
  // homophone spelling forces the correct long-a /eɪt/ without touching the
  // word's own spelling/highlighting.
  { word: 'ate', arabic: 'أَكَلَ', hint: 'past tense of eat', visual: 'ate', level: 1, image: 'src/assets/images/Long A/003-ate.png', say: 'eight', sentence: "I ate my breakfast this morning." },
  { word: "babe", arabic: "طِفْلٌ رَضِيعٌ", hint: "a baby, or a term for a dear one", visual: "babe", level: 1, image: 'src/assets/images/Long A/004-babe.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"205\" rx=\"70\" ry=\"12\"/><circle class=\"i-sand\" cx=\"150\" cy=\"115\" r=\"65\"/><circle class=\"i-line\" cx=\"150\" cy=\"115\" r=\"65\" fill=\"none\"/><path class=\"i-water\" d=\"M95 80c10-25 40-35 55-35s45 10 55 35c-15-8-35-12-55-12s-40 4-55 12z\"/><path class=\"i-line\" d=\"M95 80c10-25 40-35 55-35s45 10 55 35c-15-8-35-12-55-12s-40 4-55 12z\" fill=\"none\"/><circle class=\"i-ink\" cx=\"128\" cy=\"112\" r=\"6\"/><circle class=\"i-ink\" cx=\"172\" cy=\"112\" r=\"6\"/><path class=\"i-line\" d=\"M135 140q15 12 30 0\"/><ellipse class=\"i-shine\" cx=\"126\" cy=\"98\" rx=\"9\" ry=\"6\"/>", sentence: "The babe slept quietly in her bed." },
  { word: "bade", arabic: "أَمَرَ / طَلَبَ", hint: "old word for asked or ordered (past tense of bid)", visual: "bade", level: 1, image: 'src/assets/images/Long A/005-bade.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"205\" rx=\"75\" ry=\"12\"/><rect class=\"i-sand\" x=\"90\" y=\"70\" width=\"120\" height=\"110\" rx=\"8\"/><rect class=\"i-line\" x=\"90\" y=\"70\" width=\"120\" height=\"110\" rx=\"8\" fill=\"none\"/><circle class=\"i-water\" cx=\"90\" cy=\"70\" r=\"14\"/><circle class=\"i-water\" cx=\"90\" cy=\"180\" r=\"14\"/><circle class=\"i-water\" cx=\"210\" cy=\"70\" r=\"14\"/><circle class=\"i-water\" cx=\"210\" cy=\"180\" r=\"14\"/><path class=\"i-line\" d=\"M110 100h80M110 125h80M110 150h55\"/>", sentence: "He bade his friends goodbye." },
  { word: 'bake', arabic: 'يَخْبِزُ', hint: 'to cook food in an oven', visual: 'bake', level: 1, image: 'src/assets/images/Long A/006-bake.png', sentence: "We will bake cookies this afternoon." },
  { word: "bale", arabic: "حُزْمَةٌ كَبِيرَةٌ", hint: "a large bundle tied together, like hay", visual: "bale", level: 1, image: 'src/assets/images/Long A/007-bale.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"205\" rx=\"85\" ry=\"12\"/><rect class=\"i-sand\" x=\"70\" y=\"90\" width=\"160\" height=\"100\" rx=\"10\"/><rect class=\"i-line\" x=\"70\" y=\"90\" width=\"160\" height=\"100\" rx=\"10\" fill=\"none\"/><path class=\"i-line\" d=\"M70 115h160M70 165h160\"/><path class=\"i-sand-dark\" d=\"M90 90l-15 100M150 90v100M210 90l15 100\"/>", sentence: "The farmer moved a bale of hay to the barn." },
  { word: 'bane', arabic: 'مَصْدَرُ أَذًى', hint: 'something that causes trouble or ruin', visual: 'bane', level: 1, image: 'src/assets/images/Long A/008-bane.jpg', sentence: "Traffic is the bane of my morning." },
  { word: 'bare', arabic: 'عَارٍ / مَكْشُوفٌ', hint: 'empty or without covering', visual: 'bare', level: 1, archived: true, sentence: "The walls were bare and empty." },
  { word: 'base', arabic: 'قَاعِدَةٌ', hint: 'the bottom part that supports something', visual: 'base', level: 1, image: 'src/assets/images/Long A/010-base.png', sentence: "The lamp stands on a wooden base." },
  { word: 'bate', arabic: 'يُخَفِّفُ / يُقَلِّلُ', hint: 'to make something weaker or less', visual: 'bate', level: 1, image: 'src/assets/images/Long A/011-bate.jpg', sentence: "The medicine helped bate his fever." },
  { word: 'cage', arabic: 'قَفَصٌ', hint: 'a barred box that holds an animal', visual: 'cage', level: 1, image: 'src/assets/images/Long A/012-cage.png', sentence: "The bird sat inside its cage." },
  { word: 'cake', arabic: 'كَعْكَةٌ', hint: 'a sweet baked dessert', visual: 'cake', level: 1, image: 'src/assets/images/Long A/013-cake.png', sentence: "Mom baked a chocolate cake for my birthday." },
  { word: 'came', arabic: 'أَتَى / جَاءَ', hint: 'past tense of come; arrived', visual: 'came', level: 1, image: 'src/assets/images/Long A/015-came.png', sentence: "She came home late last night." },
  { word: 'cane', arabic: 'عَصًا', hint: 'a stick used for walking, or the sugar plant', visual: 'cane', level: 1, image: 'src/assets/images/Long A/016-cane.png', sentence: "The old man walked with a cane." },
  { word: 'cape', arabic: 'عَبَاءَةٌ / رِدَاءٌ', hint: 'a cloak worn over the shoulders', visual: 'cape', level: 1, image: 'src/assets/images/Long A/017-cape.png', sentence: "The hero wore a red cape." },
  { word: 'care', arabic: 'يَهْتَمُّ / رِعَايَةٌ', hint: 'to feel concern for someone', visual: 'care', level: 1, archived: true, sentence: "I care about my friends." },
  { word: 'case', arabic: 'حَقِيبَةٌ / حَالَةٌ', hint: 'a box or container, or a situation', visual: 'case', level: 1, image: 'src/assets/images/Long A/018-case.png', sentence: "He packed his clothes in a case." },
  { word: 'cate', arabic: 'طَعَامٌ شَهِيٌّ', hint: 'a tasty treat (an old word for food)', visual: 'cate', level: 1, image: 'src/assets/images/Long A/019-cate.png', sentence: "The feast was full of tasty cates." },
  { word: 'cave', arabic: 'كَهْفٌ', hint: 'a hollow space inside a hill or rock', visual: 'cave', level: 1, image: 'src/assets/images/Long A/020-cave.png', sentence: "The bear slept inside a dark cave." },
  { word: 'dale', arabic: 'وَادٍ', hint: 'a valley between hills', visual: 'dale', level: 1, image: 'src/assets/images/Long A/022-dale.png', sentence: "The village sits in a quiet dale." },
  { word: "dame", arabic: "سَيِّدَةٌ", hint: "a woman (polite)", visual: "dame", level: 1, image: 'src/assets/images/Long A/023-dame.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"70\" ry=\"10\"/><path class=\"i-sand\" d=\"M100 190c5-35 25-55 50-55s45 20 50 55z\"/><path class=\"i-line\" d=\"M100 190c5-35 25-55 50-55s45 20 50 55z\" fill=\"none\"/><circle class=\"i-sand\" cx=\"150\" cy=\"120\" r=\"45\"/><circle class=\"i-line\" cx=\"150\" cy=\"120\" r=\"45\" fill=\"none\"/><path class=\"i-water\" d=\"M95 105c5-30 30-45 55-45s50 15 55 45c-15-10-35-15-55-15s-40 5-55 15z\"/><path class=\"i-line\" d=\"M95 105c5-30 30-45 55-45s50 15 55 45c-15-10-35-15-55-15s-40 5-55 15z\" fill=\"none\"/><circle class=\"i-ink\" cx=\"132\" cy=\"118\" r=\"5\"/><circle class=\"i-ink\" cx=\"168\" cy=\"118\" r=\"5\"/>", sentence: "The dame greeted us with a smile." },
  { word: "dane", arabic: "كَلْبٌ كَبِيرُ الْحَجْمِ", hint: "a large dog breed, the Great Dane", visual: "dane", level: 1, image: 'src/assets/images/Long A/024-dane.jpg', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"75\" ry=\"10\"/><path class=\"i-sand-dark\" d=\"M100 100c-25-10-35 20-15 45z\"/><path class=\"i-sand-dark\" d=\"M200 100c25-10 35 20 15 45z\"/><path class=\"i-line\" d=\"M100 100c-25-10-35 20-15 45z\" fill=\"none\"/><path class=\"i-line\" d=\"M200 100c25-10 35 20 15 45z\" fill=\"none\"/><circle class=\"i-sand\" cx=\"150\" cy=\"130\" r=\"55\"/><circle class=\"i-line\" cx=\"150\" cy=\"130\" r=\"55\" fill=\"none\"/><circle class=\"i-ink\" cx=\"130\" cy=\"125\" r=\"6\"/><circle class=\"i-ink\" cx=\"170\" cy=\"125\" r=\"6\"/><ellipse class=\"i-ink\" cx=\"150\" cy=\"150\" rx=\"8\" ry=\"6\"/>", sentence: "Our neighbor has a big, friendly Dane." },
  { word: "daze", arabic: "ذُهُولٌ / دُوَارٌ", hint: "a stunned, confused feeling", visual: "daze", level: 1, image: 'src/assets/images/Long A/021-daze.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"65\" ry=\"10\"/><circle class=\"i-sand\" cx=\"150\" cy=\"130\" r=\"55\"/><circle class=\"i-line\" cx=\"150\" cy=\"130\" r=\"55\" fill=\"none\"/><path class=\"i-line\" d=\"M118 118a8 8 0 1 1 16 4a5 5 0 1 0-10-2\"/><path class=\"i-line\" d=\"M166 118a8 8 0 1 1 16 4a5 5 0 1 0-10-2\"/><path class=\"i-line\" d=\"M135 150q15 8 30 0\"/><path class=\"i-sun\" d=\"M85 75l5 15 15 5-15 5-5 15-5-15-15-5 15-5z\"/><path class=\"i-sun\" d=\"M215 90l4 10 10 4-10 4-4 10-4-10-10-4 10-4z\"/>", sentence: "The hot sun left me in a daze." },
  { word: 'face', arabic: 'وَجْهٌ', hint: 'the front part of your head', visual: 'face', level: 1, image: 'src/assets/images/Long A/025-face.jpg', sentence: "She washed her face this morning." },
  { word: 'fade', arabic: 'يَتَلَاشَى', hint: 'to slowly become less clear or bright', visual: 'fade', level: 1, image: 'src/assets/images/Long A/026-fade.png', sentence: "The colors will fade in the sun." },
  { word: "fake", arabic: "مُزَيَّفٌ", hint: "not real; a copy", visual: "fake", level: 1, image: 'src/assets/images/Long A/027-fake.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"70\" ry=\"10\"/><path class=\"i-sand\" d=\"M150 60c-45 0-70 35-70 75 0 45 30 75 70 75s70-30 70-75c0-40-25-75-70-75z\"/><path class=\"i-line\" d=\"M150 60c-45 0-70 35-70 75 0 45 30 75 70 75s70-30 70-75c0-40-25-75-70-75z\" fill=\"none\"/><ellipse class=\"i-ink\" cx=\"128\" cy=\"130\" rx=\"10\" ry=\"6\"/><ellipse class=\"i-ink\" cx=\"172\" cy=\"130\" rx=\"10\" ry=\"6\"/><path class=\"i-line\" d=\"M130 165q20 10 40 0\"/><path class=\"i-line\" d=\"M95 150c-10 5-15 15-10 25M205 150c10 5 15 15 10 25\"/>", sentence: "That watch is a fake, it is not the real one." },
  { word: 'fame', arabic: 'شُهْرَةٌ', hint: 'being known and admired by many people', visual: 'fame', level: 1, image: 'src/assets/images/Long A/028-fame.png', sentence: "The singer found fame after her first song." },
  { word: 'fane', arabic: 'مَعْبَدٌ', hint: 'an old, poetic word for a temple', visual: 'fane', level: 1, image: 'src/assets/images/Long A/029-fane.png', sentence: "The old fane stood on the hill." },
  { word: 'fare', arabic: 'أُجْرَةُ السَّفَرِ', hint: 'the money paid to travel', visual: 'fare', level: 1, archived: true, sentence: "The bus fare is two dollars." },
  { word: 'fate', arabic: 'قَدَرٌ / مَصِيرٌ', hint: 'what will happen to someone; destiny', visual: 'fate', level: 1, image: 'src/assets/images/Long A/031-fate.jpg', sentence: "It was fate that brought them together." },
  { word: 'fave', arabic: 'الْمُفَضَّلُ', hint: 'a short way to say favorite', visual: 'fave', level: 1, image: 'src/assets/images/Long A/032-fave.png', sentence: "Pizza is my fave food." },
  { word: "faze", arabic: "يُقْلِقُ / يُرْبِكُ", hint: "to disturb or upset someone", visual: "faze", level: 1, image: 'src/assets/images/Long A/033-faze.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"65\" ry=\"10\"/><circle class=\"i-sand\" cx=\"150\" cy=\"125\" r=\"60\"/><circle class=\"i-line\" cx=\"150\" cy=\"125\" r=\"60\" fill=\"none\"/><circle class=\"i-ink\" cx=\"128\" cy=\"110\" r=\"9\"/><circle class=\"i-ink\" cx=\"172\" cy=\"110\" r=\"9\"/><ellipse class=\"i-ink\" cx=\"150\" cy=\"150\" rx=\"10\" ry=\"14\"/><path class=\"i-sun\" d=\"M210 60l6 20h20l-16 13 6 20-16-12-16 12 6-20-16-13h20z\"/><path class=\"i-line\" d=\"M210 60l6 20h20l-16 13 6 20-16-12-16 12 6-20-16-13h20z\" fill=\"none\"/>", sentence: "The exam did not faze him." },
  { word: 'gate', arabic: 'بَوَّابَةٌ', hint: 'a barrier that opens to let you through', visual: 'gate', level: 1, image: 'src/assets/images/Long A/034-gate.png', sentence: "Close the gate behind you." },
  { word: 'gave', arabic: 'أَعْطَى', hint: 'past tense of give', visual: 'gave', level: 1, image: 'src/assets/images/Long A/035-gave.png', sentence: "She gave me a gift for my birthday." },
  { word: "gade", arabic: "ذَهَبَ (كَلِمَةٌ قَدِيمَةٌ)", hint: "an old dialect word for went, past tense of go", visual: "gade", level: 1, archived: true, sentence: "In the old tale, he gade to the market." },
  { word: "gage", arabic: "رَهْنٌ / تَعَهُّدٌ", hint: "something given as a promise or pledge", visual: "gage", level: 1, archived: true, sentence: "He left his watch as a gage." },
  { word: 'gale', arabic: 'عَاصِفَةٌ قَوِيَّةٌ', hint: 'a very strong wind', visual: 'gale', level: 1, image: 'src/assets/images/Long A/038-gale.png', sentence: "A strong gale blew the tent over." },
  { word: 'game', arabic: 'لُعْبَةٌ', hint: 'a fun activity with rules', visual: 'game', level: 1, image: 'src/assets/images/Long A/039-game.png', sentence: "Let's play a game after school." },
  { word: 'gape', arabic: 'يُحَدِّقُ بِذُهُولٍ', hint: 'to stare with your mouth wide open', visual: 'gape', level: 1, image: 'src/assets/images/Long A/040-gape.jpg', sentence: "The kids gape at the tall building." },
  { word: 'gaze', arabic: 'يُحَدِّقُ / يَنْظُرُ طَوِيلًا', hint: 'to look at something for a long time', visual: 'gaze', level: 1, image: 'src/assets/images/Long A/041-gaze.png', sentence: "She would gaze at the stars every night." },
  { word: 'hake', arabic: 'سَمَكُ النَّازِلِيِّ', hint: 'a type of edible sea fish', visual: 'hake', level: 1, image: 'src/assets/images/Long A/042-hake.png', sentence: "The chef cooked fresh hake for dinner." },
  { word: 'hale', arabic: 'قَوِيٌّ وَبِصِحَّةٍ جَيِّدَةٍ', hint: "healthy and strong, as in 'hale and hearty'", visual: 'hale', level: 1, image: 'src/assets/images/Long A/043-hale.jpg', sentence: "My grandfather is still hale at ninety." },
  { word: "hame", arabic: "الْمَنْزِلُ (كَلِمَةٌ اسْكُتْلَنْدِيَّةٌ قَدِيمَةٌ)", hint: "an old Scots dialect word for home", visual: "hame", level: 1, archived: true, sentence: "He longed to go hame after the trip." },
  { word: 'hare', arabic: 'أَرْنَبٌ بَرِّيٌّ', hint: 'a fast animal like a big rabbit with long ears', visual: 'hare', level: 1, archived: true, sentence: "The hare ran fast across the field." },
  { word: 'hate', arabic: 'يَكْرَهُ', hint: 'to dislike something very much', visual: 'hate', level: 1, image: 'src/assets/images/Long A/046-hate.png', sentence: "I hate waiting in long lines." },
  { word: 'haze', arabic: 'ضَبَابٌ خَفِيفٌ', hint: 'a light mist that makes things look unclear', visual: 'haze', level: 1, image: 'src/assets/images/Long A/047-haze.png', sentence: "A gray haze covered the city this morning." },
  { word: 'jade', arabic: 'الْيَشَمُ', hint: 'a green gemstone', visual: 'jade', level: 1, image: 'src/assets/images/Long A/048-jade.png', sentence: "She wore a necklace made of jade." },
  { word: "jake", arabic: "بِخَيْرٍ / عَلَى مَا يُرَامُ", hint: "Fine or all right", visual: "jake", level: 1, image: 'src/assets/images/Long A/049-jake.jpg', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"70\" ry=\"10\"/><circle class=\"i-sand\" cx=\"150\" cy=\"120\" r=\"70\"/><circle class=\"i-line\" cx=\"150\" cy=\"120\" r=\"70\" fill=\"none\"/><path class=\"i-line\" d=\"M115 122l25 25 45-50\" stroke-width=\"12\" fill=\"none\"/>", sentence: "Don't worry, everything is jake." },
  { word: 'jape', arabic: 'مَزْحَةٌ / مَقْلَبٌ', hint: 'a joke or playful trick', visual: 'jape', level: 1, image: 'src/assets/images/Long A/050-jape.png', sentence: "He played a small jape on his brother." },
  { word: 'kale', arabic: 'كُرُنْبٌ مُجَعَّدٌ', hint: 'a leafy green vegetable', visual: 'kale', level: 1, image: 'src/assets/images/Long A/051-kale.png', sentence: "I add kale to my salad." },
  { word: 'kame', arabic: 'تَلٌّ رَمْلِيٌّ جَلِيدِيٌّ', hint: 'a small hill of sand left by a melting glacier', visual: 'kame', level: 1, image: 'src/assets/images/Long A/052-kame.png', sentence: "The hikers climbed over a small kame." },
  { word: "lace", arabic: "دَانْتِيلٌ / رِبَاطُ الْحِذَاءِ", hint: "delicate patterned fabric, or a shoe string", visual: "lace", level: 1, image: 'src/assets/images/Long A/053-lace.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"80\" ry=\"10\"/><rect class=\"i-sand\" x=\"70\" y=\"120\" width=\"70\" height=\"45\" rx=\"10\"/><rect class=\"i-sand\" x=\"160\" y=\"120\" width=\"70\" height=\"45\" rx=\"10\"/><rect class=\"i-line\" x=\"70\" y=\"120\" width=\"70\" height=\"45\" rx=\"10\" fill=\"none\"/><rect class=\"i-line\" x=\"160\" y=\"120\" width=\"70\" height=\"45\" rx=\"10\" fill=\"none\"/><path class=\"i-line\" d=\"M105 120v45M195 120v45M140 142h20\" stroke-width=\"8\" fill=\"none\"/>", sentence: "You need to tie your shoe lace." },
  { word: "lade", arabic: "يُحَمِّلُ", hint: "to load heavy boxes", visual: "lade", level: 1, image: 'src/assets/images/Long A/054-lade.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"205\" rx=\"90\" ry=\"10\"/><path class=\"i-water\" d=\"M50 175 L250 175 L225 195 L75 195z\"/><path class=\"i-line\" d=\"M50 175 L250 175 L225 195 L75 195z\" fill=\"none\"/><rect class=\"i-sand\" x=\"110\" y=\"120\" width=\"40\" height=\"40\" rx=\"4\"/><rect class=\"i-sand-dark\" x=\"155\" y=\"135\" width=\"35\" height=\"30\" rx=\"4\"/><path class=\"i-line\" d=\"M150 100v75\" stroke-dasharray=\"4 4\" fill=\"none\"/>", sentence: "Workers began to lade the ship with boxes." },
  { word: 'lake', arabic: 'بُحَيْرَةٌ', hint: 'a large body of water surrounded by land', visual: 'lake', level: 1, image: 'src/assets/images/Long A/055-lake.png', sentence: "We swam in the lake all afternoon." },
  // say: 'laym' — TTS adds a spurious extra syllable to bare "lame"
  // (reads like "lamy"); the respelling forces the plain one-syllable
  // /leɪm/ that rhymes with "game".
  { word: 'lame', arabic: 'أَعْرَجُ', hint: 'having an injured leg that makes walking hard', visual: 'lame', level: 1, image: 'src/assets/images/Long A/056-lame.png', say: 'laym', sentence: "He walked with a limp because his leg was lame." },
  { word: 'lane', arabic: 'مَمَرٌّ / حَارَةٌ', hint: 'a narrow road or path', visual: 'lane', level: 1, image: 'src/assets/images/Long A/057-lane.png', sentence: "Stay in your lane while driving." },
  { word: 'late', arabic: 'مُتَأَخِّرٌ', hint: 'after the right or expected time', visual: 'late', level: 1, image: 'src/assets/images/Long A/058-late.png', sentence: "I was late for school this morning." },
  { word: 'lase', arabic: 'يُصْدِرُ شُعَاعَ لَيْزَرٍ', hint: 'to give off a beam of laser light', visual: 'lase', level: 1, image: 'src/assets/images/Long A/059-lase.png', sentence: "The device can lase a bright red beam." },
  { word: 'lave', arabic: 'يَغْسِلُ (كَلِمَةٌ أَدَبِيَّةٌ)', hint: 'an old, poetic word meaning to wash or bathe', visual: 'lave', level: 1, image: 'src/assets/images/Long A/060-lave.png', sentence: "The gentle waves would lave the shore." },
  { word: 'laze', arabic: 'يَتَكَاسَلُ / يَسْتَرْخِي', hint: 'to relax and do very little', visual: 'laze', level: 1, image: 'src/assets/images/Long A/060b-laze.jpg', sentence: "On Sundays, I like to laze around at home." },
  { word: "mace", arabic: "دَبُّوسٌ حَرْبِيٌّ", hint: "an old weapon with a heavy, spiked head", visual: "mace", level: 1, image: 'src/assets/images/Long A/061-mace.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"65\" ry=\"10\"/><rect class=\"i-sand-dark\" x=\"140\" y=\"100\" width=\"20\" height=\"105\" rx=\"8\"/><circle class=\"i-sand\" cx=\"150\" cy=\"70\" r=\"45\"/><circle class=\"i-line\" cx=\"150\" cy=\"70\" r=\"45\" fill=\"none\"/><path class=\"i-line\" d=\"M150 25v10M150 105v10M105 70h10M185 70h10M119 39l7 7M174 94l7 7M119 101l7-7M174 46l7-7\" fill=\"none\"/>", sentence: "The king carried a heavy mace." },
  { word: 'made', arabic: 'صَنَعَ', hint: 'past tense of make; created something', visual: 'made', level: 1, image: 'src/assets/images/Long A/062-made.png', sentence: "She made a sandwich for lunch." },
  { word: 'make', arabic: 'يَصْنَعُ', hint: 'to create or build something', visual: 'make', level: 1, image: 'src/assets/images/Long A/063-make.png', sentence: "Let's make a plan for the trip." },
  { word: "male", arabic: "ذَكَرٌ", hint: "a man or boy; not female", visual: "male", level: 1, image: 'src/assets/images/Long A/064-male.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"205\" rx=\"60\" ry=\"10\"/><circle class=\"i-water\" cx=\"140\" cy=\"150\" r=\"55\"/><circle class=\"i-line\" cx=\"140\" cy=\"150\" r=\"55\" fill=\"none\"/><path class=\"i-line\" d=\"M178 112l45-45M223 67h-35M223 67v35\" fill=\"none\" stroke-width=\"10\"/>", sentence: "The male lion is a very strong animal." },
  { word: 'mane', arabic: 'عُرْفُ الْحِصَانِ', hint: "the long hair on a horse's or lion's neck", visual: 'mane', level: 1, image: 'src/assets/images/Long A/065-mane.png', sentence: "The horse shook its long mane." },
  { word: 'mare', arabic: 'فَرَسٌ', hint: 'a female horse', visual: 'mare', level: 1, archived: true, sentence: "The mare galloped across the field." },
  { word: 'mate', arabic: 'رَفِيقٌ / زَمِيلٌ', hint: 'a friend or partner', visual: 'mate', level: 1, image: 'src/assets/images/Long A/067-mate.png', sentence: "He is my best mate from school." },
  { word: 'maze', arabic: 'مَتَاهَةٌ', hint: 'a puzzle of winding, connected paths', visual: 'maze', level: 1, image: 'src/assets/images/Long A/068-maze.png', sentence: "The children got lost in the maze." },
  { word: 'nabe', arabic: 'حَيٌّ سَكَنِيٌّ (عَامِّيَّةٌ)', hint: 'informal, old slang word for a neighborhood', visual: 'nabe', level: 1, image: 'src/assets/images/Long A/069-nabe.png', sentence: "They grew up together in the same nabe." },
  { word: 'name', arabic: 'اِسْمٌ', hint: 'what a person or thing is called', visual: 'name', level: 1, image: 'src/assets/images/Long A/070-name.png', sentence: "What is your name?" },
  { word: 'nape', arabic: 'مُؤَخِّرَةُ الرَّقَبَةِ', hint: 'the back of the neck', visual: 'nape', level: 1, image: 'src/assets/images/Long A/071-nape.png', sentence: "The sun burned the nape of his neck." },
  { word: 'nave', arabic: 'صَحْنُ الْكَنِيسَةِ', hint: 'the long main hall of a church', visual: 'nave', level: 1, image: 'src/assets/images/Long A/072-nave.png', sentence: "Visitors walked slowly down the church nave." },
  { word: 'pace', arabic: 'خَطْوَةٌ / سُرْعَةٌ', hint: 'the speed of walking or moving', visual: 'pace', level: 1, image: 'src/assets/images/Long A/073-pace.png', sentence: "She jogs at a steady pace every morning." },
  { word: 'page', arabic: 'صَفْحَةٌ', hint: 'one side of a sheet in a book', visual: 'page', level: 1, image: 'src/assets/images/Long A/074-page.png', sentence: "Turn to the next page in the book." },
  { word: 'pale', arabic: 'شَاحِبٌ', hint: 'light in color; having little color in the face', visual: 'pale', level: 1, image: 'src/assets/images/Long A/075-pale.png', sentence: "His face looked pale after the long trip." },
  { word: "pane", arabic: "لَوْحٌ زُجَاجِيٌّ", hint: "a sheet of glass in a window", visual: "pane", level: 1, image: 'src/assets/images/Long A/076-pane.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"215\" rx=\"85\" ry=\"8\"/><rect class=\"i-sand\" x=\"70\" y=\"55\" width=\"160\" height=\"150\" rx=\"10\"/><rect class=\"i-line\" x=\"70\" y=\"55\" width=\"160\" height=\"150\" rx=\"10\" fill=\"none\"/><rect class=\"i-water\" x=\"90\" y=\"75\" width=\"55\" height=\"55\" rx=\"4\"/><rect class=\"i-water\" x=\"155\" y=\"75\" width=\"55\" height=\"55\" rx=\"4\"/><rect class=\"i-water\" x=\"90\" y=\"140\" width=\"55\" height=\"55\" rx=\"4\"/><rect class=\"i-water\" x=\"155\" y=\"140\" width=\"55\" height=\"55\" rx=\"4\"/>", sentence: "A ball broke the window pane." },
  { word: 'pare', arabic: 'يُقَشِّرُ', hint: 'to cut away the outer layer, like peeling fruit', visual: 'pare', level: 1, archived: true, sentence: "She began to pare the apple with a knife." },
  { word: 'pave', arabic: 'يُعَبِّدُ', hint: 'to cover a road with a hard, flat surface', visual: 'pave', level: 1, image: 'src/assets/images/Long A/078-pave.png', sentence: "Workers will pave the new road next week." },
  { word: 'race', arabic: 'سِبَاقٌ', hint: 'a contest to see who is fastest', visual: 'race', level: 1, image: 'src/assets/images/Long A/079-race.png', sentence: "The two runners started the race together." },
  { word: 'rage', arabic: 'غَضَبٌ شَدِيدٌ', hint: 'very strong, wild anger', visual: 'rage', level: 1, image: 'src/assets/images/Long A/080-rage.png', sentence: "He shouted in a fit of rage." },
  { word: 'rake', arabic: 'مِجْرَفَةٌ', hint: 'a garden tool with teeth for gathering leaves', visual: 'rake', level: 1, image: 'src/assets/images/Long A/081-rake.png', sentence: "Use the rake to gather the leaves." },
  { word: 'rare', arabic: 'نَادِرٌ', hint: 'not common; unusual', visual: 'rare', level: 1, archived: true, sentence: "A blue diamond is very rare." },
  { word: 'rate', arabic: 'مُعَدَّلٌ / سِعْرٌ', hint: 'how fast something happens, or its price', visual: 'rate', level: 1, image: 'src/assets/images/Long A/083-rate.png', sentence: "The rate of growth surprised everyone." },
  { word: 'rave', arabic: "يَتَحَدَّثُ بِحَمَاسٍ", hint: "To talk in a wild, crazy way.", visual: 'rave', level: 1, image: 'src/assets/images/Long A/084-rave.jpg', sentence: "Fans rave about the new movie." },
  { word: 'raze', arabic: 'يَهْدِمُ بِالْكَامِلِ', hint: 'to knock a building down completely', visual: 'raze', level: 1, image: 'src/assets/images/Long A/085-raze.png', sentence: "They plan to raze the old building." },
  { word: 'safe', arabic: 'آمِنٌ', hint: 'free from danger or harm', visual: 'safe', level: 1, image: 'src/assets/images/Long A/086-safe.png', sentence: "Keep your money in a safe place." },
  { word: 'sage', arabic: 'حَكِيمٌ / نَبْتَةُ الْمَرْيَمِيَّةِ', hint: 'a wise person, or an herb used in cooking', visual: 'sage', level: 1, image: 'src/assets/images/Long A/087-sage.png', sentence: "The old sage gave wise advice." },
  // say: 'sayk' — TTS defaults "sake" to the Japanese drink reading; the
  // respelling forces the plain /seɪk/ that rhymes with "cake".
  { word: 'sake', arabic: 'مَصْلَحَةٌ / غَايَةٌ', hint: "a purpose or benefit, as in 'for your sake'", visual: 'sake', level: 1, image: 'src/assets/images/Long A/088-sake.png', say: 'sayk', sentence: "I stayed quiet for her sake." },
  { word: 'sale', arabic: 'تَخْفِيضَاتٌ / بَيْعٌ', hint: 'selling goods, often at a lower price', visual: 'sale', level: 1, image: 'src/assets/images/Long A/089-sale.png', sentence: "The store is having a big sale today." },
  { word: 'same', arabic: 'نَفْسُهُ / مُمَاثِلٌ', hint: 'exactly alike, not different', visual: 'same', level: 1, image: 'src/assets/images/Long A/090-same.png', sentence: "We wore the same shirt by accident." },
  { word: 'sane', arabic: 'عَاقِلٌ', hint: 'having a clear, healthy mind', visual: 'sane', level: 1, image: 'src/assets/images/Long A/091-sane.png', sentence: "After a good sleep, I feel sane again." },
  { word: 'sate', arabic: 'يُشْبِعُ', hint: 'to satisfy a need completely, like hunger', visual: 'sate', level: 1, image: 'src/assets/images/Long A/092-sate.png', sentence: "A big meal will sate your hunger." },
  { word: 'save', arabic: 'يُنْقِذُ / يُوَفِّرُ', hint: 'to keep something safe from harm, or keep money for later', visual: 'save', level: 1, image: 'src/assets/images/Long A/093-save.png', sentence: "I save part of my pay every month." },
  { word: "take", arabic: "يَأْخُذُ", hint: "to get hold of something and carry it away", visual: "take", level: 1, image: 'src/assets/images/Long A/094-take.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"75\" ry=\"10\"/><circle class=\"i-rose\" cx=\"150\" cy=\"110\" r=\"45\"/><circle class=\"i-line\" cx=\"150\" cy=\"110\" r=\"45\" fill=\"none\"/><path class=\"i-leaf\" d=\"M150 65c10-15 30-10 28 5s-20 15-28-5z\"/><path class=\"i-line\" d=\"M150 65c10-15 30-10 28 5s-20 15-28-5z\" fill=\"none\"/><path class=\"i-line\" d=\"M95 175l25-20M120 195l15-25M150 205l5-30M180 195l-15-25M205 175l-25-20\" stroke-width=\"8\" fill=\"none\"/>", sentence: "Please take me with you." },
  { word: 'tale', arabic: 'حِكَايَةٌ', hint: 'a story, often about imagined people or events', visual: 'tale', level: 1, image: 'src/assets/images/Long A/095-tale.png', sentence: "Grandma told us a tale before bed." },
  { word: "tame", arabic: "أَلِيفٌ / يُرَوِّضُ", hint: "gentle and not wild, or to train an animal to be gentle", visual: "tame", level: 1, image: 'src/assets/images/Long A/096-tame.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"70\" ry=\"10\"/><circle class=\"i-sand\" cx=\"150\" cy=\"120\" r=\"55\"/><circle class=\"i-line\" cx=\"150\" cy=\"120\" r=\"55\" fill=\"none\"/><path class=\"i-sand-dark\" d=\"M100 95c-15-10-15-30 0-35 10 15 10 30 0 35zM200 95c15-10 15-30 0-35-10 15-10 30 0 35z\"/><path class=\"i-line\" d=\"M100 95c-15-10-15-30 0-35 10 15 10 30 0 35zM200 95c15-10 15-30 0-35-10 15-10 30 0 35z\" fill=\"none\"/><circle class=\"i-ink\" cx=\"130\" cy=\"115\" r=\"5\"/><circle class=\"i-ink\" cx=\"170\" cy=\"115\" r=\"5\"/><path class=\"i-line\" d=\"M135 145q15 8 30 0\" fill=\"none\"/><rect class=\"i-rose\" x=\"120\" y=\"172\" width=\"60\" height=\"16\" rx=\"8\"/><path class=\"i-line\" d=\"M150 188v20\" stroke-width=\"6\" fill=\"none\"/>", sentence: "The zoo has a tame gorilla." },
  { word: 'tape', arabic: 'شَرِيطٌ لَاصِقٌ', hint: 'a sticky strip used to join or stick things together', visual: 'tape', level: 1, image: 'src/assets/images/Long A/097-tape.png', sentence: "Use tape to close the box." },
  { word: 'tare', arabic: 'وَزْنُ الْعُبُوَّةِ الْفَارِغَةِ', hint: 'the weight of an empty container, used to find what is inside', visual: 'tare', level: 1, archived: true, sentence: "The scale must be reset to remove the tare." },
  { word: 'tase', arabic: 'يَصْعَقُ بِصَاعِقَةٍ كَهْرَبَائِيَّةٍ', hint: 'to shock someone with a jolt of electricity', visual: 'tase', level: 1, image: 'src/assets/images/Long A/099-tase.png', sentence: "The officer used a device to tase the suspect." },
  { word: "vane", arabic: "دَفَّةُ اتِّجَاهِ الرِّيحِ", hint: "a spinning arrow on a roof that shows which way the wind blows", visual: "vane", level: 1, image: 'src/assets/images/Long A/100-vane.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"215\" rx=\"60\" ry=\"8\"/><path class=\"i-sand-dark\" d=\"M145 210h10V90h-10z\"/><path class=\"i-line\" d=\"M145 210h10V90h-10z\" fill=\"none\"/><circle class=\"i-ink\" cx=\"150\" cy=\"90\" r=\"8\"/><path class=\"i-water\" d=\"M150 90 L215 75 L195 90 L215 105z\"/><path class=\"i-line\" d=\"M150 90 L215 75 L195 90 L215 105z\" fill=\"none\"/><path class=\"i-water\" d=\"M150 90 L85 80 L100 90 L85 100z\"/><path class=\"i-line\" d=\"M150 90 L85 80 L100 90 L85 100z\" fill=\"none\"/><path class=\"i-line\" d=\"M110 60q40-15 80 0\" stroke-dasharray=\"6 6\" fill=\"none\"/>", sentence: "The vane spins when the wind blows." },
  // say: 'vaze' — TTS defaults "vase" to the British /vɑːz/ reading; the
  // respelling (same rime as gaze/haze/maze/raze) forces American /veɪz/.
  { word: 'vase', arabic: 'مَزْهَرِيَّةٌ', hint: 'a container used to hold flowers', visual: 'vase', level: 1, image: 'src/assets/images/Long A/100b-vase.jpg', say: 'vaze', sentence: "She placed the flowers in a vase." },
  { word: 'wade', arabic: 'يَخُوضُ الْمَاءَ', hint: 'to walk slowly through water or mud', visual: 'wade', level: 1, image: 'src/assets/images/Long A/102-wade.png', sentence: "The children wade through the shallow stream." },
  { word: 'wage', arabic: 'أَجْرٌ', hint: 'money paid to someone for the work they do', visual: 'wage', level: 1, image: 'src/assets/images/Long A/103-wage.png', sentence: "He earns a fair wage at his job." },
  { word: "wale", arabic: "خَطٌّ بَارِزٌ فِي النَّسِيجِ", hint: "a raised ridge, like the lines in corduroy fabric", visual: "wale", level: 1, image: 'src/assets/images/Long A/104-wale.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"85\" ry=\"10\"/><rect class=\"i-sand\" x=\"65\" y=\"70\" width=\"170\" height=\"130\" rx=\"12\"/><rect class=\"i-line\" x=\"65\" y=\"70\" width=\"170\" height=\"130\" rx=\"12\" fill=\"none\"/><path class=\"i-line\" d=\"M90 70v130M115 70v130M140 70v130M165 70v130M190 70v130M215 70v130\" stroke-width=\"6\" fill=\"none\"/>", sentence: "You can feel the soft wale on the winter coat." },
  { word: 'wane', arabic: 'يَتَضَاءَلُ / يَخْبُو', hint: 'to slowly get smaller, like the moon losing its light', visual: 'wane', level: 1, image: 'src/assets/images/Long A/105-wane.png', sentence: "The moon will wane after tonight." },
  { word: 'ware', arabic: 'سِلْعَةٌ / بِضَاعَةٌ', hint: 'goods that are made to be sold', visual: 'ware', level: 1, archived: true, sentence: "The shop sells fine glass ware." },
  { word: 'wave', arabic: 'مَوْجَةٌ / يُلَوِّحُ', hint: 'a moving ridge of water, or to move your hand in greeting', visual: 'wave', level: 1, image: 'src/assets/images/Long A/107-wave.png', sentence: "She waved at her friend across the street." },
  { word: "always", arabic: "دَائِمًا", hint: "all the time", visual: "infinity", level: 2, archived: true, sentence: "I always brush my teeth before bed." },
  { word: "runaway", arabic: "هَارِبٌ", hint: "someone who escapes", visual: "runner", level: 2, archived: true, sentence: "The police searched for the runaway dog." },
  { word: "birthday", arabic: "يَوْمُ الْمِيلَادِ", hint: "a yearly celebration", visual: "cake", level: 2, archived: true, sentence: "Today is my little sister's birthday." },
  { word: "causeway", arabic: "طَرِيقٌ مَشْهُودٌ / مَمَرٌّ مُرْتَفِعٌ", hint: "a raised road over water", visual: "road", level: 2, archived: true, sentence: "The causeway connects the island to the mainland." },
  { word: "claymore", arabic: "سَيْفٌ اسْكُتْلَنْدِيٌّ / لُغْمٌ مُسَطَّحٌ", hint: "a large old sword", visual: "sword", level: 2, archived: true, sentence: "The museum displayed an old Scottish claymore." },
  { word: "daybreak", arabic: "بُزُوغُ الْفَجْرِ / شُرُوقُ الشَّمْسِ", hint: "first light in the morning", visual: "sunrise", level: 2, archived: true, sentence: "We woke up at daybreak to watch the sunrise." },
  { word: "dayshift", arabic: "وَرْدِيَّةُ النَّهَارِ", hint: "work time during the day", visual: "worker", level: 2, archived: true, sentence: "My brother works the dayshift at the hospital." },
  { word: "display", arabic: "يَعْرِضُ / عَرْضٌ", hint: "show something clearly", visual: "display", level: 2, archived: true, sentence: "The store has a new display in the window." },
  { word: "doorstay", arabic: "مِزْلَاجَةُ الْبَابِ / دِعَامَةُ الْبَابِ", hint: "a support that holds a door", visual: "door", level: 2, archived: true, sentence: "The doorstay keeps the door from slamming shut." },
  { word: "fairplay", arabic: "لَعِبٌ نَزِيهٌ / نَزَاهَةٌ", hint: "playing by the rules", visual: "handshake", level: 2, archived: true, sentence: "The coach always talks about fairplay." },
  { word: "gateway", arabic: "بَوَّابَةٌ / مَدْخَلٌ", hint: "an entrance", visual: "gate", level: 2, archived: true, sentence: "The old arch is the gateway to the city." },
  { word: "haystack", arabic: "كُدْسُ التِّبْنِ / رُزْمَةُ قَشٍّ", hint: "a pile of hay", visual: "haystack", level: 2, archived: true, sentence: "The farmer built a tall haystack in the barn." },
  { word: "overstay", arabic: "يَبْقَى أَكْثَرَ مِنَ الْمُدَّةِ", hint: "stay too long", visual: "clock", level: 2, archived: true, sentence: "Please don't overstay your welcome." },
  { word: "playbook", arabic: "كِتَابُ اللَّعِبِ / خِطَّةُ اللَّعِبِ", hint: "a book of game plans", visual: "book", level: 2, archived: true, sentence: "The coach studied the team's playbook." },
  { word: "sideways", arabic: "إِلَى الْجَانِبِ / جَانِبِيًّا", hint: "to or from the side", visual: "arrows", level: 2, archived: true, sentence: "The car skidded sideways on the ice." },
  { word: 'blame', arabic: 'يَلُومُ', hint: 'to say someone caused something bad', visual: 'blame', level: 1, image: 'src/assets/images/Long A/108-blame.png', sentence: "Don't blame me for the mistake." },
  { word: 'brace', arabic: 'دِعَامَةٌ', hint: 'a support that holds something steady', visual: 'brace', level: 1, image: 'src/assets/images/Long A/109-brace.png', sentence: "The metal brace held the shelf in place." },
  { word: 'brave', arabic: 'شُجَاعٌ', hint: 'not afraid; willing to face danger', visual: 'brave', level: 1, image: 'src/assets/images/Long A/110-brave.png', sentence: "The firefighter was very brave during the rescue." },
  { word: 'chase', arabic: 'يُطَارِدُ', hint: 'to run after someone to catch them', visual: 'chase', level: 1, image: 'src/assets/images/Long A/111-chase.png', sentence: "The dog loves to chase the ball." },
  { word: 'crane', arabic: 'رَافِعَةٌ / طَائِرُ مَالِكِ الْحَزِينِ', hint: 'a tall machine for lifting heavy things', visual: 'crane', level: 1, image: 'src/assets/images/Long A/112-crane.png', sentence: "A tall crane lifted the steel beams." },
  { word: 'flame', arabic: 'لَهَبٌ', hint: 'the bright, hot part of a fire', visual: 'flame', level: 1, image: 'src/assets/images/Long A/113-flame.png', sentence: "The candle's flame flickered in the breeze." },
  { word: 'flare', arabic: 'وَهَجٌ / شُعْلَةٌ مُضِيئَةٌ', hint: 'a sudden bright burst of light', visual: 'flare', level: 1, archived: true, sentence: "A bright flare lit up the night sky." },
  { word: 'frame', arabic: 'إِطَارٌ', hint: 'a border that holds a picture', visual: 'frame', level: 1, image: 'src/assets/images/Long A/115-frame.png', sentence: "He hung the picture in a wooden frame." },
  // sentenceSay: donuts -> 'DOH-nuts' — TTS reads "donuts" in this
  // sentence as "donets"; the respelling (see speechTextFor()) fixes just
  // that incidental word's audio without touching the displayed sentence
  // or glaze's own pronunciation.
  { word: 'glaze', arabic: 'طِلَاءٌ لَامِعٌ', hint: 'a shiny coating on food or pottery', visual: 'glaze', level: 1, image: 'src/assets/images/Long A/116-glaze.jpg', sentenceSay: { donuts: 'DOH-nuts' }, sentence: "The baker added a sweet glaze to the donuts." },
  { word: "grace", arabic: "رَشَاقَةٌ / نِعْمَةٌ", hint: "smooth and elegant movement", visual: "grace", level: 1, image: 'src/assets/images/Long A/117-grace.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"205\" rx=\"70\" ry=\"10\"/><ellipse class=\"i-water\" cx=\"130\" cy=\"160\" rx=\"55\" ry=\"35\"/><ellipse class=\"i-line\" cx=\"130\" cy=\"160\" rx=\"55\" ry=\"35\" fill=\"none\"/><path class=\"i-water\" d=\"M150 135c10-45 30-70 55-75-5 20-15 30-10 40 8-5 18-5 25 2-20 15-45 25-70 33z\"/><path class=\"i-line\" d=\"M150 135c10-45 30-70 55-75-5 20-15 30-10 40 8-5 18-5 25 2-20 15-45 25-70 33z\" fill=\"none\"/><circle class=\"i-ink\" cx=\"198\" cy=\"72\" r=\"4\"/>", sentence: "The dancer moved with grace." },
  { word: 'grate', arabic: 'شَبَكَةٌ مَعْدِنِيَّةٌ', hint: 'a metal grid, like over a drain', visual: 'grate', level: 1, image: 'src/assets/images/Long A/118-grate.png', sentence: "Water drained through the metal grate." },
  { word: 'grave', arabic: 'قَبْرٌ', hint: 'the place where someone is buried', visual: 'grave', level: 1, image: 'src/assets/images/Long A/119-grave.png', sentence: "Flowers were placed by the grave." },
  { word: "graze", arabic: "يَرْعَى / يَخْدِشُ", hint: "to eat grass, or to scrape the skin lightly", visual: "graze", level: 1, image: 'src/assets/images/Long A/120-graze.png', svg: "<rect class=\"i-leaf\" x=\"40\" y=\"195\" width=\"220\" height=\"20\" rx=\"4\"/><ellipse class=\"i-white\" cx=\"150\" cy=\"150\" rx=\"55\" ry=\"35\"/><ellipse class=\"i-line\" cx=\"150\" cy=\"150\" rx=\"55\" ry=\"35\" fill=\"none\"/><circle class=\"i-sand-dark\" cx=\"100\" cy=\"175\" r=\"20\"/><circle class=\"i-line\" cx=\"100\" cy=\"175\" r=\"20\" fill=\"none\"/><circle class=\"i-ink\" cx=\"93\" cy=\"172\" r=\"3\"/><path class=\"i-line\" d=\"M115 185v20M145 185v20M175 185v20\"/>", sentence: "The sheep graze in the green field." },
  { word: 'paste', arabic: 'مَعْجُونٌ / غِرَاءٌ', hint: 'a soft, sticky substance used to stick things', visual: 'paste', level: 1, image: 'src/assets/images/Long A/121-paste.png', sentence: "She used paste to stick the paper together." },
  { word: 'phase', arabic: 'مَرْحَلَةٌ', hint: 'a stage in a process of change', visual: 'phase', level: 1, image: 'src/assets/images/Long A/122-phase.png', sentence: "This is a new phase in his life." },
  { word: "plane", arabic: "طَائِرَةٌ / مُسْتَوٍ", hint: "a flying machine, or a flat surface", visual: "plane", level: 1, image: 'src/assets/images/Long A/123-plane.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"70\" ry=\"8\"/><path class=\"i-water\" d=\"M150 60l10 60 70 35v12l-70-20v40l20 15v10l-30-8-30 8v-10l20-15v-40l-70 20v-12l70-35z\"/><path class=\"i-line\" d=\"M150 60l10 60 70 35v12l-70-20v40l20 15v10l-30-8-30 8v-10l20-15v-40l-70 20v-12l70-35z\" fill=\"none\"/>", sentence: "We traveled by plane for our trip." },
  { word: 'plate', arabic: 'طَبَقٌ', hint: 'a flat dish you eat food from', visual: 'plate', level: 1, image: 'src/assets/images/Long A/124-plate.png', sentence: "He set a clean plate on the table." },
  { word: 'scare', arabic: 'يُخِيفُ', hint: 'to make someone feel afraid', visual: 'scare', level: 1, archived: true, sentence: "The loud thunder gave the puppy a scare." },
  { word: 'shade', arabic: 'ظِلٌّ', hint: 'a shadowed area sheltered from light', visual: 'shade', level: 1, image: 'src/assets/images/Long A/126-shade.png', sentence: "We sat in the shade of the big tree." },
  { word: 'shame', arabic: 'خَجَلٌ / عَارٌ', hint: 'a bad feeling from doing something wrong', visual: 'shame', level: 1, image: 'src/assets/images/Long A/127-shame.png', sentence: "It's a shame we missed the movie." },
  { word: 'skate', arabic: 'يَتَزَلَّجُ', hint: 'to glide smoothly on skates or a board', visual: 'skate', level: 1, image: 'src/assets/images/Long A/128-skate.png', sentence: "She learned to skate at the ice rink." },
  { word: 'slate', arabic: 'لَوْحٌ إِرْدْوَازِيٌّ', hint: 'a flat, gray rock used for roofs or writing boards', visual: 'slate', level: 1, image: 'src/assets/images/Long A/129-slate.png', sentence: "The roof is covered with gray slate." },
  { word: "space", arabic: "فَضَاءٌ / مَسَاحَةٌ", hint: "the area beyond Earth, or empty room", visual: "space", level: 1, image: 'src/assets/images/Long A/130-space.png', svg: "<circle class=\"svgBg\" cx=\"150\" cy=\"115\" r=\"90\"/><circle class=\"i-water\" cx=\"150\" cy=\"120\" r=\"45\"/><circle class=\"i-line\" cx=\"150\" cy=\"120\" r=\"45\" fill=\"none\"/><ellipse class=\"i-sun\" cx=\"150\" cy=\"120\" rx=\"80\" ry=\"16\" transform=\"rotate(-15 150 120)\"/><ellipse class=\"i-line\" cx=\"150\" cy=\"120\" rx=\"80\" ry=\"16\" transform=\"rotate(-15 150 120)\" fill=\"none\"/><path class=\"i-sun\" d=\"M65 55l5 12 12 5-12 5-5 12-5-12-12-5 12-5z\"/><path class=\"i-sun\" d=\"M225 65l4 9 9 4-9 4-4 9-4-9-9-4 9-4z\"/>", sentence: "There is enough space for everyone to sit. We use rocket ships to explore space." },
  { word: 'spade', arabic: 'مِجْرَفَةٌ', hint: 'a tool used for digging', visual: 'spade', level: 1, image: 'src/assets/images/Long A/131-spade.png', sentence: "He dug the hole with a spade." },
  { word: 'stare', arabic: 'يُحَدِّقُ', hint: 'to look at something for a long time', visual: 'stare', level: 1, archived: true, sentence: "It's rude to stare at strangers." },
  { word: 'trade', arabic: 'تِجَارَةٌ / يَتَبَادَلُ', hint: 'to exchange one thing for another', visual: 'trade', level: 1, image: 'src/assets/images/Long A/133-trade.png', sentence: "They agreed to trade their toys." },
  // longAIndices: [2] — only the second "a" (-bate) is genuinely long; the
  // first is an unstressed schwa, but the open-syllable guess (a-b-a) would
  // wrongly flag it too. Found while auditing the "graduate" highlight bug.
  { word: 'abate', arabic: 'يَخِفُّ / يَهْدَأُ', hint: 'to slowly become less strong, like a storm calming down', visual: 'abate', level: 1, image: 'src/assets/images/Long A/134-abate.png', longAIndices: [2], sentence: "The storm began to abate by evening." },
  { word: 'aviator', arabic: 'طَيَّارٌ', hint: 'someone who flies an airplane', visual: 'aviator', level: 1, image: 'src/assets/images/Long A/152-aviator.jpg', sentence: "The aviator flew the small plane over the hills." },
  { word: 'create', arabic: 'يَبْتَكِرُ / يَخْلُقُ', hint: 'to make something new', visual: 'create', level: 1, image: 'src/assets/images/Long A/135-create.png', sentence: "Artists create beautiful paintings." },
  { word: 'debate', arabic: 'مُنَاظَرَةٌ / نِقَاشٌ', hint: 'a discussion where people argue different views', visual: 'debate', level: 1, image: 'src/assets/images/Long A/136-debate.png', sentence: "The students had a lively debate in class." },
  { word: 'deflate', arabic: 'يُفَرِّغُ مِنَ الْهَوَاءِ', hint: 'to let the air out of something, like a balloon', visual: 'deflate', level: 1, image: 'src/assets/images/Long A/153-deflate.jpg', sentence: "The balloon will deflate if you let go." },
  { word: "dictate", arabic: "يُمْلِي", hint: "to say words out loud for someone else to write down", visual: "dictate", level: 1, image: 'src/assets/images/Long A/154-dictate.jpg', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"210\" rx=\"85\" ry=\"10\"/><rect class=\"i-white\" x=\"70\" y=\"70\" width=\"120\" height=\"140\" rx=\"10\"/><rect class=\"i-line\" x=\"70\" y=\"70\" width=\"120\" height=\"140\" rx=\"10\" fill=\"none\"/><path class=\"i-line\" d=\"M90 100h80M90 125h80M90 150h60\"/><path class=\"i-sand\" d=\"M195 190l45-100 20 9-45 100z\"/><path class=\"i-line\" d=\"M195 190l45-100 20 9-45 100z\" fill=\"none\"/><path class=\"i-ink\" d=\"M195 190l-10 22 22-8z\"/>", sentence: "The teacher will dictate the spelling words to the class." },
  { word: 'donate', arabic: 'يَتَبَرَّعُ', hint: 'to give money or things to help others', visual: 'donate', level: 1, image: 'src/assets/images/Long A/138-donate.png', sentence: "We donate old clothes to the shelter." },
  { word: 'educate', arabic: 'يُعَلِّمُ', hint: 'to teach someone new things', visual: 'educate', level: 1, image: 'src/assets/images/Long A/155-educate.jpg', sentence: "Teachers work hard to educate their students." },
  { word: "elate", arabic: "يُبْهِجُ / يُسْعِدُ كَثِيرًا", hint: "to make someone feel extremely happy", visual: "elate", level: 1, image: 'src/assets/images/Long A/139-elate.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"212\" rx=\"60\" ry=\"10\"/><circle class=\"i-sand\" cx=\"150\" cy=\"95\" r=\"30\"/><circle class=\"i-line\" cx=\"150\" cy=\"95\" r=\"30\" fill=\"none\"/><path class=\"i-line\" d=\"M135 90q15 12 30 0M138 82h2M180 82h2\"/><path class=\"i-line\" d=\"M150 125v55M150 140l-45-45M150 140l45-45M150 165l-30 40M150 165l30 40\"/><path class=\"i-sun\" d=\"M60 60l6 14 15 2-11 10 3 15-13-8-13 8 3-15-11-10 15-2z\"/><path class=\"i-sun\" d=\"M235 50l4 9 9 4-9 4-4 9-4-9-9-4 9-4z\"/>", sentence: "The surprise party will elate the birthday boy." },
  { word: 'equate', arabic: 'يُسَاوِي', hint: 'to treat two things as equal or the same', visual: 'equate', level: 1, image: 'src/assets/images/Long A/140-equate.png', sentence: "Don't equate money with happiness." },
  { word: 'inflate', arabic: 'يَنْفُخُ', hint: 'to fill something with air, like a balloon', visual: 'inflate', level: 1, image: 'src/assets/images/Long A/156-inflate.jpg', sentence: "He used a pump to inflate the tire." },
  { word: 'isolate', arabic: 'يَعْزِلُ', hint: 'to keep someone or something apart from others', visual: 'isolate', level: 1, image: 'src/assets/images/Long A/157-isolate.jpg', sentence: "Doctors isolate patients who are very sick." },
  { word: 'locate', arabic: 'يُحَدِّدُ مَكَانًا', hint: 'to find the exact place where something is', visual: 'locate', level: 1, image: 'src/assets/images/Long A/142-locate.png', sentence: "Can you help me locate my keys?" },
  { word: 'mandate', arabic: 'تَفْوِيضٌ / أَمْرٌ رَسْمِيٌّ', hint: 'an official order or permission to do something', visual: 'mandate', level: 1, image: 'src/assets/images/Long A/158-mandate.jpg', sentence: "The city issued a new mandate about masks." },
  { word: 'nitrate', arabic: 'نِتْرَاتٌ', hint: 'a chemical compound often used in fertilizer', visual: 'nitrate', level: 1, image: 'src/assets/images/Long A/143-nitrate.png', sentence: "Farmers use nitrate to help plants grow." },
  { word: 'operate', arabic: 'يُشَغِّلُ', hint: 'to run or work a machine', visual: 'operate', level: 1, image: 'src/assets/images/Long A/159-operate.jpg', sentence: "She knows how to operate the new machine." },
  { word: "ornate", arabic: "مُزَخْرَفٌ", hint: "covered with many fancy, decorative details", visual: "ornate", level: 1, image: 'src/assets/images/Long A/144-ornate.png', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"215\" rx=\"70\" ry=\"9\"/><rect class=\"i-sand-dark\" x=\"140\" y=\"165\" width=\"20\" height=\"45\" rx=\"8\"/><circle class=\"i-water\" cx=\"150\" cy=\"110\" r=\"58\"/><circle class=\"i-line\" cx=\"150\" cy=\"110\" r=\"58\" fill=\"none\"/><circle class=\"svgBg\" cx=\"150\" cy=\"110\" r=\"42\"/><path class=\"i-sand\" d=\"M150 52c8-14 24-14 24 0s-14 18-24 7c-10 11-24 7-24-7s16-14 24 0z\"/><path class=\"i-sand\" d=\"M150 168c8 14 24 14 24 0s-14-18-24-7c-10-11-24-7-24 7s16 14 24 0z\"/><path class=\"i-sand\" d=\"M92 110c-14 8-14 24 0 24s18-14 7-24c11-10 7-24-7-24s-14 16 0 24z\"/><path class=\"i-sand\" d=\"M208 110c14 8 14 24 0 24s-18-14-7-24c-11-10-7-24 7-24s14 16 0 24z\"/>", sentence: "The painting has an ornate golden frame." },
  // say: 'playkate' — TTS reduces the first "a" to a schwa; the respelling
  // (play + kate) forces long-a /eɪ/ on both syllables: /ˈpleɪkeɪt/.
  { word: 'placate', arabic: 'يُهَدِّئُ / يُرْضِي', hint: 'to calm down someone who is upset', visual: 'placate', level: 1, image: 'src/assets/images/Long A/161-placate.jpg', say: 'playkate', sentence: "He brought flowers to placate his upset friend." },
  // say: 'potayto' — same British/American split as "tomato"; forces the
  // American long-a /pəˈteɪtoʊ/ syllable. Found in the broader long-a pass.
  { word: 'potato', arabic: 'بَطَاطَا', hint: 'a round vegetable that grows underground', visual: 'potato', level: 1, image: 'src/assets/images/Long A/145-potato.png', say: 'potayto', sentence: "I ate a baked potato for dinner." },
  { word: "predate", arabic: "يَفْتَرِسُ", hint: "when an animal hunts and eats another animal", visual: "predate", level: 1, image: 'src/assets/images/Long A/160-predate.jpg', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"212\" rx=\"75\" ry=\"10\"/><ellipse class=\"i-sand-dark\" cx=\"150\" cy=\"150\" rx=\"45\" ry=\"38\"/><ellipse class=\"i-line\" cx=\"150\" cy=\"150\" rx=\"45\" ry=\"38\" fill=\"none\"/><ellipse class=\"i-sand-dark\" cx=\"100\" cy=\"95\" rx=\"16\" ry=\"20\" transform=\"rotate(-15 100 95)\"/><ellipse class=\"i-line\" cx=\"100\" cy=\"95\" rx=\"16\" ry=\"20\" transform=\"rotate(-15 100 95)\" fill=\"none\"/><ellipse class=\"i-sand-dark\" cx=\"135\" cy=\"75\" rx=\"16\" ry=\"20\" transform=\"rotate(-5 135 75)\"/><ellipse class=\"i-line\" cx=\"135\" cy=\"75\" rx=\"16\" ry=\"20\" transform=\"rotate(-5 135 75)\" fill=\"none\"/><ellipse class=\"i-sand-dark\" cx=\"175\" cy=\"75\" rx=\"16\" ry=\"20\" transform=\"rotate(5 175 75)\"/><ellipse class=\"i-line\" cx=\"175\" cy=\"75\" rx=\"16\" ry=\"20\" transform=\"rotate(5 175 75)\" fill=\"none\"/><ellipse class=\"i-sand-dark\" cx=\"205\" cy=\"95\" rx=\"16\" ry=\"20\" transform=\"rotate(15 205 95)\"/><ellipse class=\"i-line\" cx=\"205\" cy=\"95\" rx=\"16\" ry=\"20\" transform=\"rotate(15 205 95)\" fill=\"none\"/>", sentence: "Owls predate on small mice at night." },
  { word: "radiate", arabic: "يُشِعُّ", hint: "to send out light or heat from a center", visual: "radiate", level: 1, image: 'src/assets/images/Long A/162-radiate.jpg', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"212\" rx=\"80\" ry=\"10\"/><circle class=\"i-ink\" cx=\"150\" cy=\"120\" r=\"10\"/><circle class=\"i-line\" cx=\"150\" cy=\"120\" r=\"35\" fill=\"none\"/><circle class=\"i-line\" cx=\"150\" cy=\"120\" r=\"60\" fill=\"none\" stroke-dasharray=\"8 10\"/><circle class=\"i-line\" cx=\"150\" cy=\"120\" r=\"85\" fill=\"none\" stroke-dasharray=\"6 14\"/>", sentence: "The campfire can radiate warmth in the evening." },
  { word: 'rebate', arabic: 'اِسْتِرْدَادُ مَبْلَغٍ', hint: 'an amount of money given back to you after a purchase', visual: 'rebate', level: 1, image: 'src/assets/images/Long A/146-rebate.png', sentence: "We got a rebate after buying the new phone." },
  { word: 'relate', arabic: 'يَرْتَبِطُ / يَتَعَلَّقُ بِـ', hint: 'to be connected to or similar to something else', visual: 'relate', level: 1, image: 'src/assets/images/Long A/147-relate.png', sentence: "I can relate to how you feel." },
  { word: 'rotate', arabic: 'يَدُورُ', hint: 'to turn around and around a central point', visual: 'rotate', level: 1, image: 'src/assets/images/Long A/148-rotate.png', sentence: "The earth will rotate once every day." },
  { word: 'sedate', arabic: 'هَادِئٌ', hint: 'calm and unexcited, or to give medicine that makes someone calm and sleepy', visual: 'sedate', level: 1, image: 'src/assets/images/Long A/149-sedate.png', sentence: "The doctor gave the dog medicine to sedate it." },
  // say: 'tomayto' — TTS defaults to the British /təˈmɑːtoʊ/ reading; the
  // respelling forces the American long-a /təˈmeɪtoʊ/ syllable.
  { word: 'tomato', arabic: 'طَمَاطِمُ', hint: 'a round, red fruit used like a vegetable in cooking', visual: 'tomato', level: 1, image: 'src/assets/images/Long A/150-tomato.png', say: 'tomayto', sentence: "She sliced a fresh tomato for the salad." },
  { word: 'update', arabic: 'يُحَدِّثُ', hint: 'to add the newest information and make something current', visual: 'update', level: 1, image: 'src/assets/images/Long A/151-update.jpg', sentence: "Please update me on the latest news." },
  { word: 'vibrate', arabic: 'يَهْتَزُّ', hint: 'to shake quickly back and forth', visual: 'vibrate', level: 1, image: 'src/assets/images/Long A/164-vibrate.jpg', sentence: "My phone will vibrate when a message arrives." },
  { word: 'activate', arabic: 'يُنَشِّطُ / يُفَعِّلُ', hint: 'to make something start working', visual: 'activate', level: 1, image: 'src/assets/images/Long A/165-activate.jpg', sentence: "Press the button to activate the alarm." },
  { word: 'allocate', arabic: 'يُخَصِّصُ', hint: 'to give a share of something for a certain purpose', visual: 'allocate', level: 1, image: 'src/assets/images/Long A/166-allocate.jpg', sentence: "The teacher will allocate time for each group." },
  { word: 'amputate', arabic: 'يَبْتُرُ', hint: 'to remove a body part by surgery', visual: 'amputate', level: 1, image: 'src/assets/images/Long A/167-amputate.jpg', sentence: "The surgeon had to amputate the injured toe." },
  // say: 'konflate' — TTS reads bare "conflate" letter-by-letter
  // ("C-O-N-F-late") instead of as one word; the leading "conf" is a
  // recognized abbreviation (conference/confidential) to some
  // text-normalizers, and swapping it for "konf" (identical /k/ sound)
  // avoids that abbreviation match while forcing the normal word reading
  // /kənˈfleɪt/.
  { word: 'conflate', arabic: 'يَخْلِطُ / يَدْمُجُ خَطَأً', hint: 'to mistakenly treat two different things as one', visual: 'conflate', level: 1, image: 'src/assets/images/Long A/168-conflate.jpg', say: 'konflate', sentence: "Don't conflate these two different problems." },
  { word: "decorate", arabic: "يُزَيِّنُ", hint: "to make something look nicer by adding pretty things", visual: "decorate", level: 1, image: 'src/assets/images/Long A/170-decorate.jpg', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"212\" rx=\"90\" ry=\"9\"/><path class=\"i-line\" d=\"M55 70q95 40 190 0\" fill=\"none\"/><path class=\"i-rose\" d=\"M85 78l25 10-25 35z\"/><path class=\"i-line\" d=\"M85 78l25 10-25 35z\" fill=\"none\"/><path class=\"i-water\" d=\"M137 88l25 10-25 35z\"/><path class=\"i-line\" d=\"M137 88l25 10-25 35z\" fill=\"none\"/><path class=\"i-sand\" d=\"M189 78l25 10-25 35z\"/><path class=\"i-line\" d=\"M189 78l25 10-25 35z\" fill=\"none\"/><path class=\"i-sun\" d=\"M150 150l7 16 17 2-13 11 4 17-15-9-15 9 4-17-13-11 17-2z\"/>", sentence: "We decorate the room for the birthday party." },
  { word: 'dominate', arabic: 'يُهَيْمِنُ / يُسَيْطِرُ', hint: 'to have the most power or control over something', visual: 'dominate', level: 1, image: 'src/assets/images/Long A/169-dominate.jpg', sentence: "The strong team began to dominate the game." },
  { word: 'elongate', arabic: 'يُطِيلُ / يُمَدِّدُ', hint: 'to make something longer', visual: 'elongate', level: 1, image: 'src/assets/images/Long A/171-elongate.jpg', sentence: "Stretching can elongate your muscles." },
  { word: 'emigrate', arabic: 'يُهَاجِرُ (يُغَادِرُ بَلَدَهُ)', hint: 'to leave your own country to live in another', visual: 'emigrate', level: 1, image: 'src/assets/images/Long A/172-emigrate.jpg', sentence: "Her family chose to emigrate to a new country." },
  // say: 'estimayt' — same noun/verb heteronym issue as "moderate": TTS
  // defaults to the noun's schwa ending; forces the verb's long-a /eɪt/.
  // Found in the broader long-a pass.
  { word: 'estimate', arabic: 'يُقَدِّرُ', hint: 'to guess a number or amount closely, without counting exactly', visual: 'estimate', level: 1, image: 'src/assets/images/Long A/173-estimate.jpg', say: 'estimayt', sentence: "Can you estimate how much it will cost?" },
  // longAIndices: [5] — only the second "a" (-ate) is genuinely long; the
  // first is a short vowel, but the open-syllable guess (a-d-u) wrongly
  // flags it too.
  // lang: 'en-GB' + say: 'gradjoo-eight' — confirmed correct by ear (real
  // browser voice, via a side-by-side audition page) only on a UK English
  // voice; several earlier attempts (no override, 'graduayt', 'gradjooayt',
  // 'gradjuate') were each confirmed wrong — the last two swallowed the
  // /dʒ/ ("j") sound entirely. The hyphen before "eight" (the same
  // respelling already used for "ate" elsewhere) keeps that syllable from
  // being merged into the "joo" before it. `lang` is a per-word override
  // of the 'en-US' every other word requests (see speak()'s callers) —
  // everything else in the app still teaches American pronunciation; this
  // one word just didn't land correctly on any American voice tested.
  { word: 'graduate', arabic: 'يَتَخَرَّجُ', hint: 'to finish school or college and earn a degree', visual: 'graduate', level: 1, image: 'src/assets/images/Long A/174-graduate.jpg', longAIndices: [5], lang: 'en-GB', say: 'gradjoo-eight', sentence: "She will graduate from high school this year." },
  // say: 'inishee-ate' — bare "initiate" mispronounces the "ti"; "sh"
  // fixes that part. Two earlier attempts ('inishiate', 'inishee-eight')
  // were each confirmed wrong; this one keeps "inishee" merged as one
  // chunk but hyphenates before a literal "ate" (not "eight") — confirmed
  // correct by ear via the same audition page as "graduate".
  { word: 'initiate', arabic: 'يَبْدَأُ / يَسْتَهِلُّ', hint: 'to start something new', visual: 'initiate', level: 1, image: 'src/assets/images/Long A/175-initiate.jpg', say: 'inishee-ate', sentence: "The teacher will initiate the new project today." },
  // Arabic hint corrected to the verb sense used here ("moderate a
  // debate"), not the adjective sense ("in the middle").
  // say: 'moderayt' — TTS defaults the isolated word to the adjective's
  // schwa ending; the respelling forces the verb's long-a /ˈmɒdəreɪt/.
  { word: 'moderate', arabic: 'يُدِيرُ (نِقَاشًا) / يَتَرَأَّسُ', hint: 'to lead and keep control of a discussion, like a debate', visual: 'moderate', level: 1, image: 'src/assets/images/Long A/176-moderate.jpg', say: 'moderayt', sentence: "He will moderate the debate tonight." },
  { word: 'motivate', arabic: 'يُحَفِّزُ', hint: 'to give someone a reason to do something', visual: 'motivate', level: 1, image: 'src/assets/images/Long A/177-motivate.jpg', sentence: "Good coaches motivate their players to try harder." },
  { word: "narrate", arabic: "يَرْوِي (قِصَّةً)", hint: "to tell a story out loud", visual: "narrate", level: 1, image: 'src/assets/images/Long A/179-narrate.jpg', svg: "<ellipse class=\"i-shadow\" cx=\"150\" cy=\"212\" rx=\"85\" ry=\"9\"/><path class=\"i-white\" d=\"M150 165V90c-20-15-55-20-80-15v75c25-8 60-2 80 15z\"/><path class=\"i-line\" d=\"M150 165V90c-20-15-55-20-80-15v75c25-8 60-2 80 15z\" fill=\"none\"/><path class=\"i-water\" d=\"M150 165V90c20-15 55-20 80-15v75c-25-8-60-2-80 15z\"/><path class=\"i-line\" d=\"M150 165V90c20-15 55-20 80-15v75c-25-8-60-2-80 15z\" fill=\"none\"/><path class=\"i-rose\" d=\"M195 55h60v35h-15l-12 15v-15h-33z\"/><path class=\"i-line\" d=\"M195 55h60v35h-15l-12 15v-15h-33z\" fill=\"none\"/>", sentence: "She will narrate the story for her school play." },
  { word: 'obligate', arabic: 'يُلْزِمُ', hint: 'to make someone required to do something', visual: 'obligate', level: 1, image: 'src/assets/images/Long A/178-obligate.jpg', sentence: "The contract does not obligate you to stay." },
  { word: 'stagnate', arabic: 'يَرْكُدُ / يَتَوَقَّفُ عَنِ التَّطَوُّرِ', hint: 'to stop growing or changing; become still', visual: 'stagnate', level: 1, image: 'src/assets/images/Long A/180-stagnate.jpg', sentence: "Without new ideas, the business began to stagnate." },
  { word: 'translate', arabic: 'يُتَرْجِمُ', hint: 'to change words from one language into another', visual: 'translate', level: 1, image: 'src/assets/images/Long A/181-translate.jpg', sentence: "Can you translate this sentence into English?" },
  { word: 'captivate', arabic: 'يَأْسِرُ / يَسْحَرُ', hint: "to hold someone's attention completely", visual: 'captivate', level: 1, image: 'src/assets/images/Long A/182-captivate.jpg', sentence: "The magic show will captivate the audience." },
  { word: 'compensate', arabic: 'يُعَوِّضُ', hint: 'to make up for a loss or harm', visual: 'compensate', level: 1, image: 'src/assets/images/Long A/183-compensate.jpg', sentence: "The company will compensate workers for the delay." },
  { word: 'cultivate', arabic: 'يَزْرَعُ / يُنَمِّي', hint: 'to prepare land and grow plants, or to develop a skill', visual: 'cultivate', level: 1, image: 'src/assets/images/Long A/184-cultivate.jpg', sentence: "Farmers cultivate the soil before planting seeds." },
  { word: 'deactivate', arabic: 'يُعَطِّلُ', hint: 'to turn something off or make it stop working', visual: 'deactivate', level: 1, image: 'src/assets/images/Long A/185-deactivate.jpg', sentence: "You can deactivate the alarm with this code." },
  { word: 'eliminate', arabic: 'يُزِيلُ / يَسْتَبْعِدُ', hint: 'to remove or get rid of something completely', visual: 'eliminate', level: 1, image: 'src/assets/images/Long A/186-eliminate.jpg', sentence: "We need to eliminate the mistakes in this report." },
  { word: 'exaggerate', arabic: 'يُبَالِغُ', hint: 'to make something sound bigger or more than it really is', visual: 'exaggerate', level: 1, image: 'src/assets/images/Long A/187-exaggerate.jpg', sentence: "He likes to exaggerate his stories a little." },
  { word: 'illustrate', arabic: 'يُوَضِّحُ / يُصَوِّرُ', hint: 'to explain with pictures or clear examples', visual: 'illustrate', level: 1, image: 'src/assets/images/Long A/188-illustrate.jpg', sentence: "The artist will illustrate the children's book." },
  { word: 'infiltrate', arabic: 'يَتَسَلَّلُ', hint: 'to secretly get into a place or group', visual: 'infiltrate', level: 1, image: 'src/assets/images/Long A/189-infiltrate.jpg', sentence: "The spy tried to infiltrate the enemy base." },
  { word: 'intoxicate', arabic: 'يُسْكِرُ / يُنَشِّي', hint: 'to make someone drunk or very excited', visual: 'intoxicate', level: 1, image: 'src/assets/images/Long A/190-intoxicate.jpg', sentence: "Too much sugar can intoxicate a young child with energy." },
  { word: 'participate', arabic: 'يُشَارِكُ', hint: 'to take part in an activity with others', visual: 'participate', level: 1, image: 'src/assets/images/Long A/191-participate.jpg', sentence: "Every student should participate in the class discussion." },
  { word: 'pollinate', arabic: 'يُلَقِّحُ', hint: 'to carry pollen between flowers so they can make seeds', visual: 'pollinate', level: 1, image: 'src/assets/images/Long A/192-pollinate.jpg', sentence: "Bees pollinate flowers as they collect nectar." },
  { word: 'regenerate', arabic: 'يَتَجَدَّدُ / يَنْمُو مِنْ جَدِيدٍ', hint: 'to grow back or become new and strong again', visual: 'regenerate', level: 1, image: 'src/assets/images/Long A/193-regenerate.jpg', sentence: "New skin cells regenerate after a small cut." },
  { word: 'replicate', arabic: 'يُكَرِّرُ / يَنْسَخُ', hint: 'to make an exact copy of something', visual: 'replicate', level: 1, image: 'src/assets/images/Long A/194-replicate.jpg', sentence: "Scientists tried to replicate the experiment's results." },
  { word: 'terminate', arabic: 'يُنْهِي', hint: 'to bring something to an end', visual: 'terminate', level: 1, image: 'src/assets/images/Long A/195-terminate.jpg', sentence: "The company decided to terminate the old contract." },
];

// ---------- Catch the Sound: curated word pool ----------
// Catch the Sound (the falling-spelling arcade game) draws from this fixed
// sample instead of whatever sound group/level a learner currently has
// selected in the Learn tab — the game is meant to be playable on its own,
// independent of Learn tab pacing/lock state. The sample was picked by hand
// across the three word-length tiers the game scores against (see
// catchGamePoints()): 11 short (3-4 letter) words, 15 medium (5-6 letter)
// words, and 10 long (7+ letter) words, favoring common, kid-familiar
// vocabulary within each tier and skipping anything obscure or archived.
// Each entry must exactly match a WORDS[].word so the game can reuse that
// word's existing say/sentence/pronunciation data rather than duplicating
// it — add or remove words here (keeping them real WORDS entries) to
// rebalance the pool.
const CATCH_GAME_WORD_LIST = [
  // 3-4 letters (+1 point)
  'ace', 'ape', 'cake', 'gate', 'lake', 'game', 'name', 'safe', 'tape', 'wave', 'make',
  // 5-6 letters (+2 points)
  'brave', 'chase', 'crane', 'flame', 'frame', 'grace', 'plate', 'shade', 'space', 'trade', 'create', 'donate', 'locate', 'rotate', 'update',
  // 7+ letters (+3 points)
  'mandate', 'vibrate', 'isolate', 'operate', 'radiate', 'translate', 'activate', 'dominate', 'motivate', 'participate',
];

function catchGameWordPool() {
  return CATCH_GAME_WORD_LIST.map((word) => WORDS.find((entry) => entry.word === word)).filter(Boolean);
}

// Each row is [pattern, ipa, note, exampleWord]. exampleWord is what actually
// gets spoken by the "hear" button: bare grapheme fragments (e.g. "th",
// "-tion") aren't real words and TTS mispronounces or guesses at them, and
// both "th" rows would otherwise sound identical. Speaking a real word keeps
// playback tied to a specific, correctly-pronounceable target.
const RULES = [
  { title: 'Hard C Rule', rows: [['ca, co, cu', '/k/', 'like ك in Arabic', 'cat']], note: 'C is hard before a, o, u: cat, cot, cup.' },
  { title: 'Soft C Rule', rows: [['ce, ci, cy', '/s/', 'like س in Arabic', 'cent']], note: 'C is soft before e, i, y: cent, city, cycle.' },
  { title: 'Hard G Rule', rows: [['ga, go, gu', '/ɡ/', 'voiced g as in go → ج', 'go']], note: 'Use the back of the tongue and turn the voice on.' },
  { title: 'Soft G Rule', rows: [['ge, gi, gy', '/dʒ/', 'like دج in many Arabic dialects', 'gem']], note: 'Soft g often sounds like the first sound in judge.' },
  { title: 'Common suffix endings', rows: [['-tion, -tian', '/ʃən/', 'shun: action, musician → شَنْ', 'action'], ['-tious, -cious', '/ʃəs/', 'shus: delicious → شَسُ', 'delicious'], ['-tial, -cial', '/ʃəl/', 'shul: special → شَلْ', 'special'], ['-sion after vowel', '/ʒən/', 'zhun: vision → جَنْ', 'vision'], ['-sion after consonant', '/ʃən/', 'shun: tension', 'tension'], ['-able, -ible', '/əbəl/', 'uh-bul → أَبِلْ / إِبِلْ', 'capable'], ['-ance, -ence', '/əns/', 'uhns → أَنْسْ / إِنْسْ', 'distance'], ['-ment', '/mənt/', 'muhnt → مِنْث', 'movement'], ['-ness', '/nəs/', 'nuhs → نِسْ', 'kindness'], ['-ity', '/ɪti/', 'ih-tee → إِتِي', 'city'], ['-ly', '/li/', 'lee → لِي', 'quickly'], ['-ward', '/wərd/', 'werd → وَرْدْ', 'forward'], ['-wise', '/waɪz/', 'wize → وَايْزْ', 'otherwise']], note: 'Suffixes can change slightly by accent and stress; teach the main classroom pronunciation first.' },
  { title: 'Voiceless consonant digraphs', rows: [['ch', '/tʃ/', 'voiceless affricate: chin → تش', 'chin'], ['sh', '/ʃ/', 'voiceless fricative: ship → ش', 'ship'], ['th', '/θ/', 'voiceless dental fricative: thin → ث', 'thin'], ['ph', '/f/', 'voiceless fricative: phone → ف', 'phone'], ['wh', '/w/ or /ʍ/', 'usually /w/ in modern English: whale → و', 'whale']], note: 'Voiceless means the throat does not vibrate. Have students touch the throat to check.' },
  { title: 'Voiced consonant digraphs', rows: [['th', '/ð/', 'voiced dental fricative: this → ذ', 'this'], ['ng', '/ŋ/', 'voiced nasal: sing → نغ', 'sing'], ['gh', 'often silent; sometimes /f/ or /ɡ/', 'night = silent, laugh = /f/ → ف, ghost = /ɡ/ → ج', 'ghost']], note: 'Voiced means the throat vibrates. Arabic has ذ, but English /ð/ places the tongue lightly between the teeth.' },
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
// `includeArchived`/`singleLevel` only apply to the Exceptions group today
// (see the comments on wordsInSoundGroup()/isSingleLevelGroup() below) —
// every other group leaves them unset and gets the default paced,
// archived-excluding behavior.
const SOUND_GROUPS = [
  { id: 'long-a', label: 'Long A' },
  { id: 'ai', label: 'AI' },
  { id: 'ay', label: 'AY' },
  { id: 'r-controlled-a', label: 'Exceptions', includeArchived: true, singleLevel: true },
];

// Which sound-group tab a word belongs to, purely from its spelling.
// Checked most-specific-pattern-first so an "ai"/"ay" word is never
// mis-bucketed into the plain "a" chapter; anything matching neither
// digraph falls back to "long-a" (today that's every active word, since
// the "ai" chapter has no words yet and the "ay" chapter is archived).
//
// A word ending "-are" (bare, care, scare, ...) is R-controlled — the "r"
// changes the vowel sound entirely (/ɛər/), so it never carries the true
// long-a /eɪ/ and doesn't belong in the long-a chapter at all. These are
// bucketed into their own "r-controlled-a" group, which the "Exceptions"
// sidebar entry (SOUND_GROUPS above) renders — see wordsInSoundGroup().
function soundGroupId(word) {
  const lower = word.toLowerCase();
  if (lower.includes('ay')) return 'ay';
  if (lower.includes('ai')) return 'ai';
  if (lower.endsWith('are')) return 'r-controlled-a';
  return 'long-a';
}

// Whether a sound group presents as one flat, always-unlocked list instead
// of being paced into locked, word-length tiers. Used for the Exceptions
// group: 12 r-controlled words are too small and too special-case a list
// to gate behind level-locking, so the whole group is just one accessible
// level (still sub-headed by word length inside learnTemplate(), same as
// every other level's card grid).
function isSingleLevelGroup(groupId) {
  const group = SOUND_GROUPS.find((entry) => entry.id === groupId);
  return !!(group && group.singleLevel);
}

// Words belonging to one sound-group tab, for display. Every group except
// Exceptions also excludes `archived` words — archived there means "not
// released for this group yet" (the unlaunched AI/AY chapters, the level-2
// word lists). The r-controlled words behind Exceptions are archived too,
// but for an unrelated reason: they were pulled out of Long A by giving
// them `archived: true` in WORDS, which was how they got excluded from
// every long-a count/tier/badge without deleting them or touching
// soundGroupId() (see the comment above it). Exceptions is the one group
// where that `archived` flag isn't "hide me" — it's how these words are
// already tagged as belonging here — so it reads them straight off
// soundGroupId() via `includeArchived`, with no data changes needed.
function wordsInSoundGroup(groupId) {
  const group = SOUND_GROUPS.find((entry) => entry.id === groupId);
  const words = WORDS.filter((word) => soundGroupId(word.word) === groupId);
  return group && group.includeArchived ? words : words.filter((word) => !word.archived);
}

// Which letter index(es) inside a word carry the long-vowel sound, for the
// red highlight on its card — e.g. just the "a" in "cake", "rain", "day",
// not the whole "ai"/"ay" spelling. This is a deliberate approximation
// rather than a full pronunciation model: for the "ai"/"ay" chapters it's
// the "a" of that digraph; for the plain "a" chapter it's the "a" in a
// silent-e syllable (cake, translate) or an open syllable (potato),
// falling back to the last "a" in the word when neither pattern is found.
//
// The open-syllable guess can't distinguish a genuinely long, stressed "a"
// (radiate, aviator) from an unstressed one that merely happens to match
// the same spelling shape (graduate, abate) — spelling alone doesn't carry
// stress. Words where the guess gets that wrong pass an explicit
// `longAIndices` override on their WORDS entry instead.
function highlightIndices(word, override) {
  if (override) return override;
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

function highlightWord(item) {
  const targets = new Set(highlightIndices(item.word, item.longAIndices));
  return [...item.word].map((char, i) => (targets.has(i) ? `<span class="vowel">${escapeHtml(char)}</span>` : escapeHtml(char))).join('');
}

// Pacing levels are derived from word length, not the raw word.level field
// stored on each word (that field predates this tiering and is left as-is
// in WORDS for now — see PR description for how its old values map onto
// this scheme). Every distinct letter-count already used for a sound
// group's "N-Letter Words" tier headings becomes its own level, in
// ascending order: the shortest tier is Level 1, the next-shortest Level 2,
// and so on. Reading tiers straight off WORDS (rather than hardcoding
// letter counts here) means a brand-new sound group — or a new tier added
// to an existing one — automatically gets its own correctly-numbered,
// correctly-locked level with no change to this function or the locking
// logic below.
function groupTierLengths(groupId) {
  const words = wordsInSoundGroup(groupId);
  if (isSingleLevelGroup(groupId)) return words.length ? [null] : [];
  return [...new Set(words.map((word) => word.word.length))].sort((a, b) => a - b);
}

function groupLevels(groupId) {
  return groupTierLengths(groupId).map((_, index) => index + 1);
}

// The letter-count tier a given level number stands for, within one sound
// group — e.g. Level 1 in a group whose shortest active words are 3
// letters returns 3.
function tierLengthForLevel(groupId, level) {
  return groupTierLengths(groupId)[level - 1];
}

function wordsForGroupLevel(groupId, level) {
  const words = wordsInSoundGroup(groupId);
  if (isSingleLevelGroup(groupId)) return words;
  const length = tierLengthForLevel(groupId, level);
  return words.filter((word) => word.word.length === length);
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

// A sound group is fully complete once every one of its levels is fully
// known. Reads purely off groupLevels()/levelProgress(), so it applies to
// any group with no per-group logic.
function isGroupComplete(groupId) {
  const levels = groupLevels(groupId);
  if (!levels.length) return false;
  return levels.every((level) => {
    const { known, total } = levelProgress(groupId, level);
    return total > 0 && known === total;
  });
}

// ---------- Badges ----------
// One badge per (sound group, level), keyed entirely off the level's
// position within its group — never off a group's id or a word's spelling
// — so a brand-new sound group, or a new tier added to an existing one,
// gets a correctly-escalating badge automatically with no change here.
//
// Affirmations grow in weight with level (simple praise for the easy early
// levels, bigger praise for the long-word levels later in a group). The
// list is longer than any group currently has levels for so it has room to
// grow; a group with more levels than this list holds just keeps repeating
// the final, strongest affirmation.
const BADGE_AFFIRMATIONS = ['Good!', 'Nice work!', 'Great job!', 'Well done!', 'Excellent!', 'Fantastic!', 'Outstanding!', 'Amazing!', 'You did it!', 'Incredible!', 'Phenomenal!', 'Legendary!'];

function badgeAffirmation(level) {
  return BADGE_AFFIRMATIONS[Math.min(level - 1, BADGE_AFFIRMATIONS.length - 1)];
}

// Badge color escalates on a cool-to-hot hue sweep — blue at Level 1
// through to red at a group's hardest level — the same "cool means easy,
// hot means hard" convention as a difficulty meter, with saturation and
// lightness deepening alongside it so later badges read as more "charged".
// Driven purely by a level's position out of its group's total level
// count, so it scales cleanly to a group with 3 levels or one with 30.
function badgeColor(level, totalLevels) {
  const t = totalLevels > 1 ? (level - 1) / (totalLevels - 1) : 0;
  const hue = Math.round(210 - 210 * t);
  const saturation = 70 + Math.round(18 * t);
  const lightness = 52 - Math.round(9 * t);
  return { base: `hsl(${hue} ${saturation}% ${lightness}%)`, light: `hsl(${hue} ${saturation}% ${Math.min(lightness + 24, 92)}%)` };
}

function badgeId(groupId, level) {
  return `${groupId}::${level}`;
}

function badgeForLevel(groupId, level) {
  const colors = badgeColor(level, groupLevels(groupId).length);
  return {
    id: badgeId(groupId, level),
    groupId,
    level,
    label: levelLabel(groupId, level),
    affirmation: badgeAffirmation(level),
    color: colors.base,
    colorLight: colors.light,
  };
}

function allBadgesForGroup(groupId) {
  return groupLevels(groupId).map((level) => badgeForLevel(groupId, level));
}

// Which sound group/level a word's badge belongs to, derived the same way
// wordsForGroupLevel() buckets words — by matching its length against the
// group's tier lengths — so a word never needs its level hand-stamped. A
// single-level group (Exceptions) has no length tiers to match against, so
// every one of its words is simply that group's one level.
function levelForWord(item) {
  const groupId = soundGroupId(item.word);
  const level = isSingleLevelGroup(groupId)
    ? groupLevels(groupId)[0]
    : groupLevels(groupId).find((lvl) => tierLengthForLevel(groupId, lvl) === item.word.length);
  return { groupId, level };
}

// Awards the level's badge the moment every word in it is known, and only
// once — a second call after the level is already complete (e.g. toggling
// an already-known word off and back on) is a no-op. Returns the newly
// earned badge, or null when nothing changed.
function awardBadgeIfLevelComplete(groupId, level) {
  const { known, total } = levelProgress(groupId, level);
  if (!total || known < total) return null;
  const id = badgeId(groupId, level);
  if (state.badges[id]) return null;
  state.badges[id] = { earnedAt: Date.now() };
  writeProgress('badgesPhonics', JSON.stringify(state.badges));
  return badgeForLevel(groupId, level);
}

// ---------- Catch the Sound: scoring, decoys, badge ----------
// Points scale with word length: 3-4 letters is the shortest tier already
// used for "N-Letter Words" groupings across the Learn tab (see
// groupTierLengths()), 5-6 covers the next couple of tiers, and 7+ covers
// everything from "create"-length words up through "participate" — the
// same short/medium/long split a teacher would draw by eye. See the PR
// description for more on this choice.
function catchGamePoints(word) {
  const length = word.length;
  if (length <= 4) return 1;
  if (length <= 6) return 2;
  return 3;
}

// Tunable knobs for Catch the Sound's pacing — adjust these to rebalance
// the game without touching any of the logic below.
const CATCH_GAME_CONFIG = {
  fallDurationMs: 9500, // how long a falling word takes to reach the ground
  basketSpeedPctPerSec: 65, // how fast the basket moves, in % of field width per second
  basketWidthPct: 32, // basket width, as % of field width — must match .catch-basket's CSS width
  minOptions: 2,
  maxOptions: 3,
  wrongCatchPenalty: 1, // points subtracted for catching a decoy
};

// The basket's resting horizontal position — dead center of the field,
// accounting for its own width so it's visually centered rather than its
// left edge sitting at the 50% mark. Used both for the initial state and
// to re-center the basket at the start of every new round (see
// playCatchRound()) so a round never starts wherever the player happened
// to leave the basket after the last one.
function catchBasketCenterPct() {
  return (100 - CATCH_GAME_CONFIG.basketWidthPct) / 2;
}

// Twelve rotating photo backgrounds for the game field (src/assets/
// backgrounds/), picked randomly once per visit to the tab — see
// pickRandomCatchBackground()/wireCatchGameEvents(). All are portrait
// illustrations with their detail concentrated in the bottom third and a
// plain sky gradient filling the rest, which is exactly what
// `background-size: cover` + `background-position: bottom` needs to crop
// sensibly into this field's much wider, shorter aspect ratio (see
// .catch-game-field in the CSS) — the crop keeps the ground/subject the
// basket "stands in" and trims the empty sky above it, on any screen size.
const CATCH_BACKGROUNDS = [
  { id: 'city', file: '01-city-street.jpg', label: 'City street' },
  { id: 'mountains', file: '02-mountains.jpg', label: 'Mountains' },
  { id: 'snow', file: '03-snow.jpg', label: 'Snowy hills' },
  { id: 'farm', file: '04-green-farm.jpg', label: 'Green farm' },
  { id: 'underwater', file: '05-underwater-ocean-floor.jpg', label: 'Underwater' },
  { id: 'desert', file: '06-desert-dunes.jpg', label: 'Desert dunes' },
  { id: 'sunset', file: '07-sunset-sky.jpg', label: 'Sunset sky' },
  { id: 'forest', file: '08-forest-clearing.jpg', label: 'Forest clearing' },
  { id: 'moonlit', file: '09-moonlit-landscape.jpg', label: 'Moonlit landscape' },
  { id: 'space', file: '10-outer-space.jpg', label: 'Outer space' },
  { id: 'beach', file: '11-sandy-beach.jpg', label: 'Sandy beach' },
  { id: 'hills', file: '12-clouds-rolling-hills.jpg', label: 'Rolling hills' },
];

function pickRandomCatchBackground() {
  return CATCH_BACKGROUNDS[Math.floor(Math.random() * CATCH_BACKGROUNDS.length)];
}

// The 10 profile avatars offered in the "Add profile" picker — same
// id/file/label shape as CATCH_BACKGROUNDS above, so avatarSrc() builds a
// path the same way catch backgrounds do.
const AVATARS = [
  { id: 'fox-hoodie', file: '01-fox-hoodie.jpg', label: 'Fox in a hoodie' },
  { id: 'fox-samurai', file: '02-fox-samurai.jpg', label: 'Fox samurai' },
  { id: 'falcon-adventurer', file: '03-falcon-desert-adventurer.jpg', label: 'Falcon desert adventurer' },
  { id: 'falcon-cyborg', file: '04-falcon-cyborg.jpg', label: 'Falcon cyborg' },
  { id: 'dragon-wizard', file: '05-dragon-wizard.jpg', label: 'Dragon wizard' },
  { id: 'dragon-knight', file: '06-dragon-knight.jpg', label: 'Dragon knight' },
  { id: 'cat-hoodie', file: '07-cat-hoodie.jpg', label: 'Cat in a hoodie' },
  { id: 'cat-space-explorer', file: '08-cat-space-explorer.jpg', label: 'Cat space explorer' },
  { id: 'panda-samurai', file: '09-panda-samurai.jpg', label: 'Panda samurai' },
  { id: 'panda-cyborg', file: '10-panda-cyborg.jpg', label: 'Panda cyborg' },
];

function avatarSrc(avatar) {
  return `src/assets/avatars/${avatar.file}`;
}

function avatarById(avatarId) {
  return AVATARS.find((avatar) => avatar.id === avatarId) || AVATARS[0];
}

function randomAvatarId() {
  return AVATARS[Math.floor(Math.random() * AVATARS.length)].id;
}

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Generates a close misspelling of a word for a decoy option — a random
// transposition, doubled letter, dropped letter, or single vowel swap
// (e.g. "cake" -> "caek"/"caake"/"cke"/"coke"). Retries with a different
// strategy if an attempt happens to reproduce the original word (e.g.
// transposing two identical adjacent letters) or something already in
// `avoid`, falling back to a guaranteed-distinct mangling in the
// astronomically unlikely case every randomized attempt collides.
function misspellWord(word, avoid) {
  const strategies = [
    (w) => {
      if (w.length < 3) return null;
      const i = 1 + Math.floor(Math.random() * (w.length - 2));
      const chars = [...w];
      [chars[i], chars[i + 1]] = [chars[i + 1], chars[i]];
      return chars.join('');
    },
    (w) => {
      const i = Math.floor(Math.random() * w.length);
      return w.slice(0, i) + w[i] + w.slice(i);
    },
    (w) => {
      if (w.length < 4) return null;
      const i = 1 + Math.floor(Math.random() * (w.length - 1));
      return w.slice(0, i) + w.slice(i + 1);
    },
    (w) => {
      const vowels = 'aeiou';
      const positions = [...w].map((c, i) => (vowels.includes(c) ? i : -1)).filter((i) => i !== -1);
      if (!positions.length) return null;
      const i = positions[Math.floor(Math.random() * positions.length)];
      const replacements = [...vowels].filter((v) => v !== w[i]);
      const replacement = replacements[Math.floor(Math.random() * replacements.length)];
      return w.slice(0, i) + replacement + w.slice(i + 1);
    },
  ];
  for (let attempt = 0; attempt < 12; attempt++) {
    const strategy = strategies[Math.floor(Math.random() * strategies.length)];
    const candidate = strategy(word);
    if (candidate && candidate !== word && !avoid.has(candidate)) return candidate;
  }
  return `${word}x`;
}

// Picks a different real word from the Catch the Sound pool as a decoy —
// prefers one the same length as the target so the falling chips read as
// similarly-shaped words, falling back to any other pool word if none
// match that length.
function realWordDecoy(target, pool, avoid) {
  const sameLength = pool.filter((entry) => entry.word !== target.word && entry.word.length === target.word.length && !avoid.has(entry.word));
  const anyOther = pool.filter((entry) => entry.word !== target.word && !avoid.has(entry.word));
  const candidates = sameLength.length ? sameLength : anyOther;
  if (!candidates.length) return null;
  return candidates[Math.floor(Math.random() * candidates.length)].word;
}

// Builds one round: a target word plus 1-2 decoys, each independently
// either a close misspelling or a different real word from the pool, so
// the decoy style varies from round to round instead of always being the
// same kind of distractor. Options are shuffled before being assigned to
// falling lanes so the correct spelling isn't predictably in one spot.
function buildCatchRound() {
  const pool = catchGameWordPool();
  const target = pool[Math.floor(Math.random() * pool.length)];
  const optionCount = Math.random() < 0.5 ? CATCH_GAME_CONFIG.minOptions : CATCH_GAME_CONFIG.maxOptions;
  const used = new Set([target.word]);
  const decoys = [];
  for (let i = 0; i < optionCount - 1; i++) {
    const useMisspelling = Math.random() < 0.5;
    let decoyText = useMisspelling ? misspellWord(target.word, used) : realWordDecoy(target, pool, used);
    if (!decoyText) decoyText = misspellWord(target.word, used);
    used.add(decoyText);
    decoys.push(decoyText);
  }
  const options = shuffle([{ text: target.word, correct: true }, ...decoys.map((text) => ({ text, correct: false }))]);
  return { target, options };
}

// Catch the Sound's one badge — awarded once, the moment the persisted
// total score reaches CATCH_GAME_BADGE_THRESHOLD, reusing the exact same
// badge storage (state.badges), medal rendering (badgeMedalTemplate()),
// and celebration-toast plumbing as every level badge (see
// awardBadgeIfLevelComplete()/toggleDone()) rather than a separate reward
// system. It isn't tied to a sound group/level like those badges are, so
// it gets its own fixed id/shape instead of going through badgeForLevel().
const CATCH_GAME_BADGE_THRESHOLD = 10;
const CATCH_GAME_BADGE_ID = 'catch-the-sound::badge';

function catchGameBadge() {
  const colors = badgeColor(1, 1);
  return {
    id: CATCH_GAME_BADGE_ID,
    label: 'Catch the Sound',
    affirmation: 'Great ears!',
    color: colors.base,
    colorLight: colors.light,
  };
}

function awardCatchGameBadgeIfEligible() {
  if (state.gameScore < CATCH_GAME_BADGE_THRESHOLD) return null;
  if (state.badges[CATCH_GAME_BADGE_ID]) return null;
  state.badges[CATCH_GAME_BADGE_ID] = { earnedAt: Date.now() };
  writeProgress('badgesPhonics', JSON.stringify(state.badges));
  return catchGameBadge();
}

// ---------- Per-profile progress storage ----------
// Progress (known words, earned badges, and anything derived from them
// like level-locking) is namespaced per learner profile so it can't bleed
// between profiles. Non-progress preferences (voice, reading speed, etc.)
// intentionally stay global/shared and don't go through this.
const DEFAULT_PROFILE_ID = 'default';
const ACTIVE_PROFILE_STORAGE_KEY = 'activeProfileId';

function getActiveProfileId() {
  return localStorage[ACTIVE_PROFILE_STORAGE_KEY] || DEFAULT_PROFILE_ID;
}

function progressStorageKey(key, profileId = getActiveProfileId()) {
  return `${key}::${profileId}`;
}

// One-time migration so learners who already had progress under the old,
// un-namespaced keys don't appear to lose it: copy each legacy key into
// the default profile's namespaced slot the first time it's missing there.
// Leaves the legacy key in place (harmless, and simpler than coordinating
// a delete across every progress key at once).
function migrateLegacyProgressKey(key) {
  const scopedKey = progressStorageKey(key, DEFAULT_PROFILE_ID);
  if (localStorage[scopedKey] === undefined && localStorage[key] !== undefined) {
    localStorage[scopedKey] = localStorage[key];
  }
}
['donePhonics', 'badgesPhonics', 'catchGameScore'].forEach(migrateLegacyProgressKey);

function readProgress(key, fallback) {
  const raw = localStorage[progressStorageKey(key)];
  return raw === undefined ? fallback : raw;
}

function writeProgress(key, value) {
  localStorage[progressStorageKey(key)] = value;
}

function removeProgress(key) {
  localStorage.removeItem(progressStorageKey(key));
}

// ---------- Profiles ----------
// The profile registry itself (name + chosen avatar per profile) is its
// own small localStorage blob, separate from the per-profile progress
// keys above — it's metadata about the profiles, not progress belonging
// to any one of them.
const PROFILES_STORAGE_KEY = 'phonicsProfiles';

function getProfiles() {
  return JSON.parse(localStorage[PROFILES_STORAGE_KEY] || '[]');
}

function saveProfiles(profiles) {
  localStorage[PROFILES_STORAGE_KEY] = JSON.stringify(profiles);
}

function activeProfile() {
  return getProfiles().find((profile) => profile.id === state.activeProfileId) || null;
}

function generateProfileId() {
  return `profile-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

// One-time seed: a browser that already had progress under the default
// profile (from before profiles existed) but has never registered any
// profile gets that progress registered as a real "Player 1" profile, so
// it shows up as a pickable tile on the picker screen instead of quietly
// becoming unreachable behind it.
function seedDefaultProfileIfNeeded() {
  if (getProfiles().length) return;
  const hasLegacyProgress = ['donePhonics', 'badgesPhonics', 'catchGameScore']
    .some((key) => localStorage[progressStorageKey(key, DEFAULT_PROFILE_ID)] !== undefined);
  if (!hasLegacyProgress) return;
  saveProfiles([{ id: DEFAULT_PROFILE_ID, name: 'Player 1', avatarId: AVATARS[0].id, createdAt: Date.now() }]);
}
seedDefaultProfileIfNeeded();

// Reloads state.done/state.badges/state.gameScore from whichever profile
// is now active — called on initial load (see state.done et al. below)
// and again by selectProfile() whenever the active profile changes, so
// the in-memory state always matches getActiveProfileId().
function loadActiveProfileProgress() {
  state.done = JSON.parse(readProgress('donePhonics', '{}'));
  state.badges = JSON.parse(readProgress('badgesPhonics', '{}'));
  state.gameScore = Number(readProgress('catchGameScore', '0')) || 0;
}

// Only trust a stored activeProfileId if it still names a real profile —
// a registry wiped by hand (or a stale id from a since-deleted profile)
// should fall back to the picker rather than silently loading nothing.
const storedActiveProfileId = localStorage[ACTIVE_PROFILE_STORAGE_KEY];
const storedActiveProfileIsValid = !!storedActiveProfileId && getProfiles().some((profile) => profile.id === storedActiveProfileId);

function selectProfile(id) {
  localStorage[ACTIVE_PROFILE_STORAGE_KEY] = id;
  state.activeProfileId = id;
  loadActiveProfileProgress();
  state.showProfilePicker = false;
  state.profilePickerMode = 'select';
  state.view = 'learn';
  state.soundGroup = SOUND_GROUPS[0].id;
  state.level = groupLevels(SOUND_GROUPS[0].id)[0] || 1;
  stopReadingPlayback();
  stopCatchGame();
  stopMemoryGame();
  stopRollReadGame();
  stopWordInvadersGame();
  stopStartCountdown();
  render();
}

function createProfile() {
  const name = state.newProfileName.trim();
  if (!name) {
    state.profilePickerError = 'Please enter a name.';
    render();
    return;
  }
  const profile = { id: generateProfileId(), name, avatarId: state.newProfileAvatarId || AVATARS[0].id, createdAt: Date.now() };
  saveProfiles([...getProfiles(), profile]);
  selectProfile(profile.id);
}

function openProfilePicker() {
  state.showProfilePicker = true;
  state.profilePickerMode = 'select';
  state.profilePickerError = '';
  render();
}

let state = {
  view: 'learn',
  soundGroup: SOUND_GROUPS[0].id,
  level: groupLevels(SOUND_GROUPS[0].id)[0] || 1,
  // Which profile is active, and whether the "Who's practicing today?"
  // picker screen should show instead of the normal app — true whenever
  // there's no valid stored activeProfileId, so render() takes over with
  // renderProfilePicker() until selectProfile()/createProfile() sets one.
  // See the "Profiles" section above.
  activeProfileId: storedActiveProfileIsValid ? storedActiveProfileId : null,
  showProfilePicker: !storedActiveProfileIsValid,
  // Which picker screen shows: 'select' (profile grid + Add profile tile)
  // or 'add' (name input + avatar grid). `newProfileName`/
  // `newProfileAvatarId` are the in-progress Add-profile form fields;
  // `profilePickerError` is a validation message (e.g. empty name),
  // cleared on every fresh attempt.
  profilePickerMode: 'select',
  newProfileName: '',
  newProfileAvatarId: randomAvatarId(),
  profilePickerError: '',
  // Sidebar group expand/collapse, keyed by group id. A group not present
  // here defaults to collapsed — see isGroupExpanded().
  expandedGroups: {},
  // Whether the "Fun Zone" nav dropdown (Catch the Sound / Memory Match /
  // Roll and Read / Word Invaders) is open — see wireXxx wiring in
  // render() and the document-level outside-click/Escape handlers below.
  funZoneOpen: false,
  big: false,
  contrast: false,
  dyslexia: false,
  voiceMode: localStorage.voiceMode || 'female',
  // Which language each of the three game tabs' instructions display in —
  // persisted like voiceMode, and only ever read/written by
  // instructionsLangToggleTemplate()/instructionsTemplate() for the
  // 'game'/'memory'/'rollread' views (every other view's instructions stay
  // English-only, no toggle shown).
  instructionsLang: localStorage.instructionsLang === 'ar' ? 'ar' : 'en',
  done: JSON.parse(readProgress('donePhonics', '{}')),
  // Earned badges, keyed by badgeId ("<groupId>::<level>"). Persisted the
  // same way `done` is — a plain JSON blob, namespaced per profile via
  // readProgress()/writeProgress() — so it needs no storage mechanism of
  // its own. See awardBadgeIfLevelComplete().
  badges: JSON.parse(readProgress('badgesPhonics', '{}')),
  // Transient celebration UI, never persisted: `celebration` is the brief
  // per-level toast (cleared by its own timeout in toggleDone()),
  // `groupCelebration` is the bigger full-screen moment shown once a whole
  // sound group is finished, and `badgeShelfOpen` toggles the badge-shelf
  // modal.
  celebration: null,
  groupCelebration: null,
  badgeShelfOpen: false,
  // The shared "Ready, Set, Go!" flourish between a Start Game click and a
  // round/timer actually beginning, reused by all three game tabs (see
  // beginGameCountdown()/gameStartCountdownTemplate()) rather than one
  // implementation per game. `view` names which tab it belongs to
  // ('game'/'memory'/'rollread') so a stray render from another tab never
  // shows it; `phase` steps through 'ready' -> 'set' -> 'go' -> null.
  startCountdown: null,
  practice: {},
  // Catch the Sound: `gameScore` is the persisted running total that feeds
  // the badge threshold (see awardCatchGameBadgeIfEligible()), stored the
  // same way `done`/`badges` are. `game` is the transient round state —
  // never persisted, so a reload always lands back on an idle field —
  // `status` is 'idle' (nothing happening yet), 'countdown' (between
  // rounds, see beginCatchCountdown()), or 'playing' (words falling);
  // `round` is the current buildCatchRound() result or null; `basketPct`
  // is the basket's left-edge position as a % of the field's width (kept
  // here so it survives the render() at the end of each round);
  // `feedback` is the last round's outcome message; `countdown` is the
  // whole seconds left until the next round auto-starts; `backgroundId`
  // is the CATCH_BACKGROUNDS entry picked for this visit to the tab (see
  // wireCatchGameEvents()/stopCatchGame()).
  gameScore: Number(readProgress('catchGameScore', '0')) || 0,
  // Whether the player has pressed "Start Game" (and its Ready/Set/Go
  // countdown has finished) this session — see gameStartPromptTemplate()/
  // beginGameCountdown(). Never persisted, so a reload always lands back
  // on the Start Game gate. Not reset just by switching away from the tab
  // and back, only by Reset — see wireCatchGameEvents().
  catchStarted: false,
  game: {
    status: 'idle',
    round: null,
    basketPct: catchBasketCenterPct(),
    feedback: null,
    countdown: 0,
    backgroundId: null,
  },
  // Whether Catch the Sound's ambient background hum plays — persisted
  // like voiceMode so muting it sticks across reloads instead of coming
  // back on every time. See startCatchMusic()/stopCatchMusic().
  musicOn: localStorage.catchMusicOn !== 'off',
  // Reading Activity — a per-level alternative to the word-card grid (see
  // learnModeToggleTemplate()/readingActivityTemplate()). `learnMode`
  // switches the Learn tab's main panel between 'cards' and 'reading';
  // `reading` is transient playback/navigation state, never persisted, so
  // a reload always lands back on the card grid.
  learnMode: 'cards',
  reading: {
    index: 0, // which word (within the current level's word list) is showing
    playing: false,
    // Index into the *displayed* sentence's word tokens, kept in sync with
    // TTS playback by updateReadingWordHighlight(); -1 = nothing playing.
    activeWordIndex: -1,
  },
  // Highlight-style, line-focus, and speed preferences persist like
  // voiceMode — they're accessibility choices a learner sets once, not
  // per-session UI.
  readingHighlightStyle: localStorage.readingHighlightStyle || 'sweep', // 'sweep' | 'ball'
  readingLineFocus: localStorage.readingLineFocus !== 'off',
  readingSpeed: ['normal', 'slow', 'veryslow'].includes(localStorage.readingSpeed) ? localStorage.readingSpeed : 'normal', // 'normal' | 'slow' | 'veryslow'
  // Roll and Read: its own tab, structured the same way Memory Match is
  // (own transient round/level state here, its own per-level timer, and
  // badges through the shared badge system — see the "Roll and Read"
  // section below, which mirrors startMemoryLevel()/winMemoryLevel()/
  // loseMemoryLevel() function-for-function). `status` is 'idle' (not
  // started yet), 'rolling' (die animating), 'listening' (a round is live,
  // awaiting a guess), 'won' (this level's rounds are all won, briefly
  // shown before advancing or — on level 5 — before the finale overlay
  // takes over), or 'lost' (timer hit zero, briefly shown before retrying).
  // `words`/`rows`/`cols` describe the current board (see
  // startRollReadLevel()/refreshRollReadBoard()) — every tile on it is
  // live every round, never narrowed down to a subset. `dieValue` is the
  // face the die last landed on (1-6) — purely decorative flavor, not
  // read by any gameplay logic. `targetWord` is the word currently
  // playing aloud — read only by guessRollReadWord(), never rendered, so
  // nothing on the board gives the answer away. `roundsWon`/`roundsToWin`
  // track progress within the current level (like Memory Match's
  // matchedPairs/totalPairs); `secondsLeft` counts down the level's
  // timer, topped up by `timeBonusFlash`'s "+10s" popup on every correct
  // guess (see flashRollReadTimeBonus()). Level badges (state.badges)
  // persist as usual — only the round/level state here is session-only.
  // `rollReadStarted` is this tab's own Start Game gate — see
  // `catchStarted`'s comment above for the full pattern.
  rollReadStarted: false,
  rollRead: {
    status: 'idle',
    level: 1,
    words: [],
    rows: 0,
    cols: 0,
    dieValue: null,
    targetWord: null,
    feedback: null, // { kind: 'correct' | 'incorrect', text }
    roundsWon: 0,
    roundsToWin: 0,
    secondsLeft: 0,
    timeBonusFlash: false,
  },
  // The full-screen "finished every level" celebration for Roll and Read —
  // null until winRollReadLevel() sets it to the earned master badge on
  // beating level 5, cleared by dismissRollReadFinale(). See
  // rollReadFinaleTemplate() — same mechanism as state.memoryFinale.
  rollReadFinale: null,
  // Word Invaders: a two-level shooter, own tab, structured like the other
  // three games (own transient round state here, its own Start Game gate,
  // badges through the shared badge system). `status` is 'idle' (not
  // started yet), 'playing' (a word's cards are falling and shootable),
  // 'resolved' (brief right/wrong pause between words), 'won' (this
  // level's rounds are all cleared), or 'lost' (0 lives, briefly shown
  // before retrying). See the "Word Invaders" section below for the full
  // state machine (startWordInvadersWord()/resolveWordInvadersWord()).
  // `roundWords` is fixed for the whole round (even across a round-failed
  // retry — see loseWordInvadersRound()); `currentWord` is whichever of
  // those the wave in flight is for. `shipPct` is the ship's left-edge
  // position as a % of the field's width, kept here (like Catch's
  // basketPct) so it survives the render() at the start of every word.
  // `score` and `scoreFlash` (a brief highlight right after a hit, the
  // same "state-driven popup" trick flashMemoryTimeBonus() uses) are
  // session-only, like the old Word Run's coin tally — only
  // level-completion badges persist, through the usual
  // state.badges/writeProgress() path.
  wordInvadersStarted: false,
  wordInvaders: {
    status: 'idle',
    level: 1,
    round: 1,
    wordIndex: 0,
    roundWords: [],
    currentWord: null,
    lives: 3,
    score: 0,
    scoreFlash: false,
    shipPct: 50,
    feedback: null,
  },
  // The full-screen "finished every level" celebration for Word
  // Invaders — same mechanism as state.memoryFinale/state.rollReadFinale.
  wordInvadersFinale: null,
  // Admin content-management mode — off by default, never persisted, so a
  // page reload always lands back in the plain learner experience. See the
  // "ADMIN MODE" section near the end of this file. `adminAvailable` gates
  // whether admin mode's entry points (the footer dot, Ctrl+Alt+A) exist
  // at all — starts false and only ever flips true once
  // checkAdminAvailability() confirms the admin dev server (not a plain
  // static host) is what's actually serving the app, so `admin` itself
  // can never become true in a regular learner build.
  admin: false,
  adminAvailable: false,
  showArchived: false,
  editingWord: null,
  adminError: '',
  // Memory Match (Pelmanism): transient round/level state, never
  // persisted — same convention as `game` above, so a reload or a fresh
  // visit to the tab always starts back at level 1 rather than resuming
  // mid-board. `status` is 'idle' (not started yet), 'playing', 'won'
  // (this level's pairs are all matched, briefly shown before advancing or
  // — on level 5 — before the finale overlay takes over), or 'lost' (timer
  // hit zero, briefly shown before retrying). `cards` is the current board
  // (see buildMemoryCards()); `cols` fixes the grid's column count for a
  // balanced layout (see MEMORY_LEVELS); `flipped` holds the index/indices
  // currently face-up mid-turn (0, 1, or momentarily 2 while a mismatched
  // pair is shown before flipping back); `lock` blocks further flips while
  // resolving a completed turn; `timeBonusFlash` drives the "+10s" popup
  // on a correct match (see flashMemoryTimeBonus()). Level badges
  // (state.badges) persist as usual — only the board/timer/level pointer
  // here are session-only. `memoryFinale` is separate from this object
  // (see below) since it's an overlay shown independently of the board.
  // `memoryStarted` is this tab's own Start Game gate — see
  // `catchStarted`'s comment above for the full pattern.
  memoryStarted: false,
  memory: {
    status: 'idle',
    level: 1,
    cols: 4,
    cards: [],
    flipped: [],
    lock: false,
    matchedPairs: 0,
    totalPairs: 0,
    secondsLeft: 0,
    timeBonusFlash: false,
  },
  // The full-screen "finished every level" celebration — null until
  // winMemoryLevel() sets it to the earned master badge on beating level
  // 5, cleared by dismissMemoryFinale(). See memoryFinaleTemplate().
  memoryFinale: null,
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
  bolt: '<path d="M13 2 5 14h5l-1 8 8-12h-5z" fill="currentColor" stroke="none"/>',
  medal: '<path d="M8.5 3h7l-2.6 7.4h-1.8z"/><circle cx="12" cy="15" r="6"/><path d="M12 12.2l1.1 2.3 2.5.4-1.8 1.8.4 2.5-2.2-1.2-2.2 1.2.4-2.5-1.8-1.8 2.5-.4z" fill="currentColor" stroke="none"/>',
  dice: '<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r="1.3" fill="currentColor" stroke="none"/><circle cx="16" cy="8" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="8" cy="16" r="1.3" fill="currentColor" stroke="none"/><circle cx="16" cy="16" r="1.3" fill="currentColor" stroke="none"/>',
  basket: '<path d="M4 10h16l-1.6 9.3a2 2 0 0 1-2 1.7H7.6a2 2 0 0 1-2-1.7z"/><path d="M8 10l1-5h6l1 5"/><path d="M9 13.5v3.5M12 13.5v3.5M15 13.5v3.5"/>',
  musicNote: '<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="3"/><circle cx="17.5" cy="16" r="3"/>',
  cards: '<rect x="3" y="7" width="12" height="15" rx="2" transform="rotate(-8 9 14.5)"/><rect x="9" y="3" width="12" height="15" rx="2"/>',
  play: '<path d="M7 4l14 8-14 8z" fill="currentColor" stroke="none"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  heart: '<path d="M12 21s-7.5-4.6-10-9.3C.4 8 2 4.5 5.6 4.5c2 0 3.6 1.1 4.4 2.7.8-1.6 2.4-2.7 4.4-2.7C18 4.5 19.6 8 18 11.7 15.5 16.4 12 21 12 21z"/>',
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

// Every "hear it" button passes lang="en-US" because this app teaches
// American long-a sounds specifically, but the old filter only matched the
// 2-letter "en" prefix — accepting en-GB/en-AU/en-IN voices too — and its
// default preferred-name list even named "Google UK English Female"
// explicitly. On browsers where that voice sorted before a US one, every
// word played in a British accent, which is only audible on words like
// "vase" and "tomato" where the two accents genuinely diverge. Now the
// full region tag (en-US) is preferred, falling back to any same-language
// voice only if the browser has no exact regional match.
//
// `preferLocal` (opt-in, default off so existing callers are unaffected):
// SpeechSynthesisVoice.localService is true for on-device voices and false
// for network/cloud-backed ones (e.g. some "Google US English" voices).
// Rate control has historically been unreliable-to-ignored on some network
// voices — this app has no way to query "does this specific voice honor
// utterance.rate," but localService is the closest available signal, and
// Reading Activity's Normal/Slow toggle only matters if rate actually
// changes the audio, so it asks for a local voice when one exists.
function pickVoice(lang, { preferLocal = false } = {}) {
  const target = lang.toLowerCase();
  const regionVoices = voices.filter((voice) => voice.lang.toLowerCase().replace('_', '-') === target);
  const languageVoices = regionVoices.length ? regionVoices : voices.filter((voice) => voice.lang.toLowerCase().startsWith(target.slice(0, 2)));
  const pool = preferLocal && languageVoices.some((voice) => voice.localService) ? languageVoices.filter((voice) => voice.localService) : languageVoices;
  const preferredGender = state.voiceMode === 'male' ? ['male', 'david', 'mark', 'george', 'microsoft zira?'] : ['female', 'zira', 'samantha', 'susan', 'victoria'];
  return pool.find((voice) => preferredGender.some((term) => voice.name.toLowerCase().includes(term.replace('?', '')))) || pool[0] || null;
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

// ---------- Reading Activity: word-boundary-synced sentence playback ----------
// Splits on whitespace so every token keeps any attached punctuation
// (e.g. "hay." stays one token) — that's how the sentence is meant to
// read, and it's also exactly how Chrome/Edge's boundary charIndex lines
// up with word starts.
function tokenizeWords(text) {
  const tokens = [];
  const re = /\S+/g;
  let match;
  while ((match = re.exec(text))) tokens.push({ text: match[0], start: match.index, end: match.index + match[0].length });
  return tokens;
}

// The text actually handed to the speech engine: if this word has a `say`
// respelling (see the pronunciation-fix comments throughout WORDS, e.g.
// "vase" -> "vaze"), the same fix is applied inside the sentence so the
// target word is spoken correctly there too — not just on the lone
// word-card button. `sentenceSay` is the same idea for a *different* word
// that merely appears in this item's own example sentence (e.g. "donuts"
// in glaze's) — a {word: respelling} map, applied after the headword's
// own `say` swap. Every respelling — `say` or an entry in `sentenceSay` —
// swaps exactly one word for another single word (a hyphenated respelling
// like "DOH-nuts" still counts as one token), so the spoken text always
// has the same word count, in the same order, as the displayed sentence.
// That's what lets highlighting stay correct by *word index* below,
// without ever needing to map character offsets between two
// differently-spelled strings.
function speechTextFor(item) {
  let text = item.sentence;
  if (item.say) {
    const pattern = new RegExp(`\\b${item.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    text = text.replace(pattern, item.say);
  }
  if (item.sentenceSay) {
    for (const [word, say] of Object.entries(item.sentenceSay)) {
      const pattern = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      text = text.replace(pattern, say);
    }
  }
  return text;
}

// Reading Activity speed control. Each step is *exactly* half the
// previous rate, not just "somewhat lower" — 0.6 vs 0.75 (an earlier
// attempt) was reported as too subtle to reliably notice, and veryslow at
// 0.4 repeated the same mistake relative to slow's 0.5 (only a 20%
// reduction, vs. normal->slow's 50% reduction) even though the two values
// were, and had to be re-verified as, genuinely distinct — human
// perception of speech tempo tracks the *ratio* between two rates much
// more than the raw difference, so a proportionally small step reads as
// "no difference" even when the numbers themselves aren't equal.
// "normal" is the TTS engine's own full natural rate (1.0) — note this no
// longer matches the 0.75 the word-card "hear it"/"sentence cue" buttons
// use; those are untouched, this is Reading Activity's own scale now.
// "slow" (half-speed) and "veryslow" (quarter-speed) are for learners —
// including those with dyslexia or other language-processing needs — who
// need progressively more time per word than natural speech gives them.
const READING_RATES = { normal: 1, slow: 0.5, veryslow: 0.25 };
// Display labels + button order for the speed toggle, driven off the same
// READING_RATES keys so a future speed step only needs adding in one
// place — this list, not a second hardcoded button set in the template.
const READING_SPEED_LABELS = { normal: 'Normal', slow: 'Slow', veryslow: 'Very Slow' };
function readingPlaybackRate() {
  return READING_RATES[state.readingSpeed] || READING_RATES.normal;
}

// Fallback timing when the Web Speech API doesn't (yet) deliver a
// word-boundary event — see playReadingSentence() for how this blends with
// real boundary events. ~13 chars/sec at rate 1.0 is a rough average
// English speaking pace; scaled by the utterance's own rate.
const AVG_CHARS_PER_SECOND_AT_RATE_1 = 13;
function estimateWordDurations(words, rate) {
  const charsPerSecond = AVG_CHARS_PER_SECOND_AT_RATE_1 * Math.max(rate, 0.1);
  return words.map((word) => Math.max(180, ((word.text.length + 1) / charsPerSecond) * 1000));
}

// Applies the currently-playing word to the DOM directly, bypassing the
// normal full render() pipeline. A sentence only has a handful of words,
// but a boundary/timer event can fire several times a second, and
// rebuilding the entire app's innerHTML (sidebar, hero, every other level's
// markup) on each one is enough DOM churn to visibly stutter the highlight
// — the one thing in this feature that has to feel smooth. So this only
// ever touches the existing .reading-word spans' classes (and the ball's
// position), and still keeps state.reading.activeWordIndex up to date so
// any *other* render() (toggling big text mid-playback, say) redraws with
// the right word already highlighted.
//
// `wordDurationMs` is this word's own estimated speaking time (see
// estimateWordDurations()) — the same rate-scaled number that decided
// *when* this call happens in the first place. Passing it through to the
// ball (see positionReadingBall()) is what keeps the ball's own motion
// tied to that one timing source instead of an independent constant.
function updateReadingWordHighlight(index, wordDurationMs) {
  state.reading.activeWordIndex = index;
  const wrap = document.querySelector('[data-reading-sentence]');
  if (!wrap) return;
  wrap.querySelectorAll('.reading-word').forEach((el, i) => {
    el.classList.toggle('is-active', i === index);
    el.classList.toggle('is-read', i < index);
  });
  if (state.readingHighlightStyle === 'ball') positionReadingBall(wordDurationMs);
}

// Bouncing-ball style: the ball's position is measured fresh off the live
// DOM (not pre-computed) so it lands correctly regardless of text wrapping
// onto a second line.
//
// Root-caused two reported bugs at once here:
//   - "the ball lags behind the audio at the start" — the CSS transition
//     used to apply uniformly, including to the ball's very first move
//     from its unset origin. The *highlight index* was already correctly
//     synced to the audio's 'start' event (see playReadingSentence()), but
//     the ball still visibly took ~150ms to glide/fade into place, reading
//     as "late" even though the underlying sync wasn't. Now the very first
//     appearance in a playback snaps in with a 0ms transition, and only
//     word-to-word moves glide.
//   - "the ball doesn't slow down with the Slow setting" — the glide's
//     transition-duration was a fixed CSS constant, completely decoupled
//     from utterance.rate. It's now computed from `wordDurationMs`, so at
//     Slow (longer per-word durations) each hop genuinely takes longer,
//     and at Normal it's snappier — both automatically, from the same
//     rate-derived numbers driving when the ball moves, not a second
//     independent animation timer.
function positionReadingBall(wordDurationMs) {
  const wrap = document.querySelector('[data-reading-sentence]');
  const ball = document.querySelector('[data-reading-ball]');
  if (!wrap || !ball) return;
  const activeWord = wrap.querySelector('.reading-word.is-active');
  if (!activeWord) {
    ball.style.opacity = '0';
    return;
  }
  const wrapRect = wrap.getBoundingClientRect();
  const wordRect = activeWord.getBoundingClientRect();
  const left = wordRect.left - wrapRect.left + wordRect.width / 2;
  const top = wordRect.top - wrapRect.top;
  const isFirstAppearance = ball.style.opacity !== '1';
  const glideMs = isFirstAppearance ? 0 : Math.round(Math.min(320, Math.max(120, (wordDurationMs || 260) * 0.55)));
  const fadeMs = isFirstAppearance ? 0 : 150;
  // Overrides only the duration of the .reading-ball-dot's `transition:
  // transform <dur> <easing>, opacity <dur> <easing>` shorthand (declared
  // in phonics-styles.css) — the easing functions themselves stay as
  // stylesheet-defined, only how long each leg takes changes per move.
  ball.style.transitionDuration = `${glideMs}ms, ${fadeMs}ms`;
  ball.style.opacity = '1';
  ball.style.transform = `translate(${left}px, ${top}px)`;
  const dot = ball.firstElementChild;
  if (dot) {
    dot.classList.remove('is-bouncing');
    void dot.offsetWidth; // restart the hop keyframe even on repeat words
    dot.classList.add('is-bouncing');
  }
}

// One in-flight reading-activity utterance's pending fallback timers, if
// any. Module-scoped (not local to playReadingSentence) so
// stopReadingPlayback() can always reach and clear them — from a Stop
// click, a Prev/Next tap, a level switch, or leaving the Learn tab.
let readingPlayback = null;

function stopReadingPlayback() {
  if (readingPlayback) {
    readingPlayback.timers.forEach(clearTimeout);
    readingPlayback = null;
  }
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}

// Plays one Reading Activity sentence aloud, highlighting each word as it's
// spoken. Sync approach: this app's only TTS mechanism is the Web Speech
// API (SpeechSynthesisUtterance), which — on Chromium browsers — fires a
// 'boundary' event with a charIndex at the start of each spoken word. That
// event is the primary sync signal here: it's tied to the actual audio, so
// it's as accurate as the browser/voice makes available. But boundary
// event support is inconsistent across browsers and voices (some fire
// sparsely, some not at all), so an estimated-timing schedule (word-length
// weighted, scaled to the utterance's rate) runs alongside it as a
// fallback. Every real boundary event cancels and reschedules the estimate
// from that point on, so the estimate can never drift far out of step
// before a real event corrects it — and in a browser with no boundary
// support at all, the estimate quietly carries the whole sentence.
//
// Both the estimate and the boundary path are anchored to the utterance's
// 'start' event, not to the moment speak() is called below — engine
// warm-up (voice loading, queueing, thread hand-off) can put a real,
// user-perceptible gap between the two, and scheduling from speak()-time
// made the very first word's highlight visibly lag the audio. 'start'
// fires exactly when the engine actually begins producing audio, so
// that's the correct zero point for "the first word is being spoken now."
function playReadingSentence(item) {
  stopReadingPlayback();
  if (!('speechSynthesis' in window)) {
    alert('Text to speech is not supported in this browser.');
    return;
  }
  loadVoices();
  const spokenText = speechTextFor(item);
  const spokenWords = tokenizeWords(spokenText);
  if (!spokenWords.length) return;

  const utterance = new SpeechSynthesisUtterance(spokenText);
  utterance.lang = item.lang || 'en-US';
  utterance.rate = readingPlaybackRate();
  const voice = pickVoice(item.lang || 'en-US', { preferLocal: true });
  if (voice) utterance.voice = voice;
  // Left in place intentionally (not just a debugging aid removed after
  // this fix) so the actual rate reaching the TTS engine can always be
  // spot-checked from the browser console — the bug this addresses was
  // never visible from the UI alone.
  console.log('Reading Activity speed:', state.readingSpeed, 'rate:', utterance.rate, 'voice:', voice ? `${voice.name} (local: ${voice.localService})` : '(browser default)');

  const estimates = estimateWordDurations(spokenWords, utterance.rate);
  const playback = { timers: [] };
  readingPlayback = playback;
  // Changing speed mid-playback (see wireReadingEvents()) cancels the
  // in-flight utterance and immediately starts a new one at the new rate.
  // But a canceled utterance's onstart/onboundary/onend/onerror can still
  // fire — sometimes appreciably later, since cancellation isn't always
  // instant on the engine side — and without this guard, that stale
  // utterance's finishPlayback() would null out readingPlayback and reset
  // state.reading.playing/activeWordIndex out from under the *new*
  // utterance that has since taken over, even though it's still genuinely
  // speaking. That desync is exactly what made a speed change look like it
  // had no effect: the UI silently dropped back to "not playing" while the
  // new utterance kept going, unsynced, in the background.
  const isCurrentPlayback = () => readingPlayback === playback;

  // Schedules highlight(i) to fire `elapsed` ms from now for word
  // `startIndex`, then each word after at the cumulative estimated time
  // its *predecessors* take to speak — i.e. at the start of that word's
  // own speaking window, not the end of it (an inclusive running total
  // would highlight every word one word late).
  function scheduleEstimatesFrom(startIndex, elapsed) {
    playback.timers.forEach(clearTimeout);
    playback.timers = [];
    let acc = elapsed;
    for (let i = startIndex; i < spokenWords.length; i++) {
      const idx = i;
      playback.timers.push(setTimeout(() => updateReadingWordHighlight(idx, estimates[idx]), acc));
      acc += estimates[i];
    }
  }

  let started = false;
  let lastBoundaryIndex = -1;
  utterance.onstart = () => {
    if (!isCurrentPlayback()) return;
    // A real 'boundary' event for word 0 can in principle arrive before
    // 'start' fires — if it already has, trust it over this estimate.
    if (started) return;
    started = true;
    lastBoundaryIndex = 0;
    updateReadingWordHighlight(0, estimates[0]);
    scheduleEstimatesFrom(1, estimates[0]);
  };
  utterance.onboundary = (event) => {
    if (!isCurrentPlayback()) return;
    if (event.name && event.name !== 'word') return;
    started = true;
    let idx = spokenWords.findIndex((word) => event.charIndex >= word.start && event.charIndex < word.end);
    if (idx === -1) idx = spokenWords.reduce((best, word, i) => (word.start <= event.charIndex ? i : best), 0);
    if (idx <= lastBoundaryIndex) return;
    lastBoundaryIndex = idx;
    updateReadingWordHighlight(idx, estimates[idx]);
    // Re-anchor the *fallback* schedule to "word idx just started now," so
    // word idx+1 doesn't fire until word idx's own estimated duration has
    // elapsed — mirrors the onstart handler's scheduleEstimatesFrom(1,
    // estimates[0]) above. Passing 0 here (as this used to) told the next
    // word to fire immediately: every real boundary event was silently
    // fast-forwarding the very next word to a ~0ms flash, invisible before
    // being overwritten by whatever fired after it — which is what made
    // the word right after any boundary-confirmed word look skipped.
    scheduleEstimatesFrom(idx + 1, estimates[idx]);
  };
  const finishPlayback = () => {
    if (!isCurrentPlayback()) return;
    playback.timers.forEach(clearTimeout);
    readingPlayback = null;
    state.reading.playing = false;
    state.reading.activeWordIndex = -1;
    render();
  };
  utterance.onend = finishPlayback;
  utterance.onerror = finishPlayback;

  state.reading.playing = true;
  state.reading.activeWordIndex = -1;
  render();
  // A speak() called in the same synchronous tick as the cancel() above
  // (stopReadingPlayback(), at the top of this function) can itself behave
  // unreliably in some engines — a brief delay lets the engine actually
  // finish tearing the previous utterance down first. This doesn't affect
  // perceived sync: the highlight schedule is anchored to 'start' (see
  // above), not to when speak() is called, so a short queueing delay here
  // is invisible to it.
  setTimeout(() => { if (isCurrentPlayback()) speechSynthesis.speak(utterance); }, 80);

  // Safety net: 'start' is spec-mandated but not every engine fires it
  // reliably — without a fallback, a missing 'start' event would leave the
  // sentence completely unhighlighted for its whole playback.
  playback.timers.push(setTimeout(() => { if (isCurrentPlayback() && !started) scheduleEstimatesFrom(0, 0); }, 480));
}

// ---------- Roll and Read ----------
// Its own tab, structured the same way Memory Match (Pelmanism) is: five
// adaptive levels, each with its own countdown timer, played out over
// state.rollRead (see its declaration above) and badges earned through
// the shared badge system. startRollReadLevel()/winRollReadLevel()/
// loseRollReadLevel()/flashRollReadTimeBonus() below mirror
// startMemoryLevel()/winMemoryLevel()/loseMemoryLevel()/
// flashMemoryTimeBonus() function-for-function.
//
// Board: a grid of words drawn from rollReadWordPool() (every active word
// across every sound group — a plain-text reading game has no need for
// Memory Match's real-photo restriction), sized per level (see
// ROLL_READ_LEVELS).
//
// Round: the die rolls on its own (see rollReadRollDie()) purely for
// visual flavor — the value it lands on is decorative and never narrows
// which tiles are in play. The app speaks one random word from the WHOLE
// board aloud (beginRollReadListening()) WITHOUT visually marking which
// cell it is anywhere in the template — every tile is live, and the
// student has to find the right one purely by listening, not by looking
// for a highlighted region first. A correct tap (guessRollReadWord())
// counts toward the level's roundsToWin, adds a time bonus, and either
// wins the level or refreshes the board with a new word set and rolls
// again automatically. A wrong tap costs no progress — it just leaves the
// exact same round live so the student can listen again and try another
// tile — but the timer keeps ticking regardless, so it isn't free.

// Five levels, each bigger and stricter than the last: `boardWords` grows
// the grid (a 3x3 board up to a full 6x6), `roundsToWin` raises how many
// correct picks the level requires, and `seconds` is the starting
// countdown — mirroring MEMORY_LEVELS' shape (pairs/seconds/cols) but
// tuned for a listen-then-tap round instead of a card flip.
const ROLL_READ_LEVELS = [
  { level: 1, roundsToWin: 4, boardWords: 9, seconds: 30 },
  { level: 2, roundsToWin: 5, boardWords: 16, seconds: 40 },
  { level: 3, roundsToWin: 6, boardWords: 20, seconds: 50 },
  { level: 4, roundsToWin: 7, boardWords: 28, seconds: 60 },
  { level: 5, roundsToWin: 8, boardWords: 36, seconds: 70 },
];
const ROLL_READ_TIME_BONUS_SECONDS = 10;

// Every active word across every sound group — unlike Memory Match's
// memoryWordPool(), this doesn't need a real photo (item.image), since the
// board only ever shows plain text, so the whole active word list is fair
// game rather than just long-a's photographed subset.
function rollReadWordPool() {
  return WORDS.filter((word) => !word.archived);
}

// Chooses a rows x cols shape that's as close to square as the word count
// allows, rather than hardcoding 6x6 — a small level's 3x3 board looks
// intentional rather than a mostly-empty 6x6 one. Purely a layout choice
// now (see .roll-read-grid's --roll-read-cols) — the die no longer
// addresses a row/cell within it (see the "Roll and Read" comment above).
function rollReadGridShape(count) {
  if (!count) return { rows: 0, cols: 0 };
  const cols = Math.ceil(Math.sqrt(count));
  const rows = Math.ceil(count / cols);
  return { rows, cols };
}

// Standard six-sided die pip layouts, on a 0-100 face — used purely for
// rollReadRollDie()'s decorative animation now, not to address a board
// row/cell, so every ordinary die face (1-6) is fair game.
const DIE_PIPS = {
  1: [[50, 50]],
  2: [[27, 27], [73, 73]],
  3: [[27, 27], [50, 50], [73, 73]],
  4: [[27, 27], [73, 27], [27, 73], [73, 73]],
  5: [[27, 27], [73, 27], [50, 50], [27, 73], [73, 73]],
  6: [[27, 22], [73, 22], [27, 50], [73, 50], [27, 78], [73, 78]],
};
function dieFaceTemplate(value, label) {
  const pips = DIE_PIPS[value] || [];
  return `<div class="roll-die" role="img" aria-label="${escapeHtml(label)}: ${value || 'not rolled yet'}">
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <rect x="4" y="4" width="92" height="92" rx="18"/>
      ${pips.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9"/>`).join('')}
    </svg>
  </div>`;
}

// Reshuffles just the board (words/rows/cols) for the level currently in
// state.rollRead.level, without touching roundsWon/secondsLeft — used
// after every correct guess that doesn't yet win the level, so "the whole
// board refreshes with a new set of words" needs no other bookkeeping.
function refreshRollReadBoard() {
  const rr = state.rollRead;
  const config = ROLL_READ_LEVELS.find((entry) => entry.level === rr.level);
  const pool = rollReadWordPool();
  const words = shuffle(pool).slice(0, Math.min(config.boardWords, pool.length));
  const { rows, cols } = rollReadGridShape(words.length);
  rr.words = words;
  rr.rows = rows;
  rr.cols = cols;
  rr.targetWord = null;
  rr.status = 'idle';
  rr.feedback = null;
}

// One in-flight roll's animation timer, if any. Module-scoped so
// stopRollReadRoll() can always reach it — from a level switch, a tab
// switch, or a new round starting mid-animation.
let rollReadAnimationTimer = null;
function stopRollReadRoll() {
  if (rollReadAnimationTimer) {
    clearInterval(rollReadAnimationTimer);
    rollReadAnimationTimer = null;
  }
}

// This level's countdown, ticking once a second — mirrors
// startMemoryTimer()/stopMemoryTimer() exactly, right down to calling
// loseRollReadLevel() the instant it reaches zero.
let rollReadTimer = null;
function stopRollReadTimer() {
  if (rollReadTimer) {
    clearInterval(rollReadTimer);
    rollReadTimer = null;
  }
}
function startRollReadTimer() {
  stopRollReadTimer();
  rollReadTimer = setInterval(() => {
    state.rollRead.secondsLeft -= 1;
    if (state.rollRead.secondsLeft <= 0) {
      stopRollReadTimer();
      loseRollReadLevel();
    } else {
      render();
    }
  }, 1000);
}

// The pending "next round"/"next level"/"retry level" timer (see
// guessRollReadWord()/winRollReadLevel()/loseRollReadLevel()). Cleared by
// stopRollReadGame() so leaving the tab mid-pause can never leave a timer
// armed to silently roll (and speak a word) while unmounted.
let rollReadAdvanceTimer = null;
function stopRollReadAdvanceTimer() {
  if (rollReadAdvanceTimer) {
    clearTimeout(rollReadAdvanceTimer);
    rollReadAdvanceTimer = null;
  }
}

let rollReadTimeBonusTimer = null;

function stopRollReadGame() {
  stopRollReadRoll();
  stopRollReadTimer();
  stopRollReadAdvanceTimer();
  clearTimeout(rollReadTimeBonusTimer);
  stopStartCountdown();
}

// Starts (or restarts) one level with a fresh random board and a full
// timer — used both for advancing to the next level on a win and retrying
// the same level on a loss (see winRollReadLevel()/loseRollReadLevel()),
// and for jumping to any level from the "all levels complete" replay
// screen. Mirrors startMemoryLevel() exactly, plus kicking off the first
// die roll itself so there's nothing to click before the first word plays.
function startRollReadLevel(level) {
  const config = ROLL_READ_LEVELS.find((entry) => entry.level === level);
  if (!config) return;
  stopRollReadGame();
  const pool = rollReadWordPool();
  const words = shuffle(pool).slice(0, Math.min(config.boardWords, pool.length));
  const { rows, cols } = rollReadGridShape(words.length);
  state.rollRead = {
    status: 'idle',
    level,
    words,
    rows,
    cols,
    dieValue: null,
    targetWord: null,
    feedback: null,
    roundsWon: 0,
    roundsToWin: config.roundsToWin,
    secondsLeft: config.seconds,
    timeBonusFlash: false,
  };
  render();
  startRollReadTimer();
  rollReadRollDie();
}

// Rolls the die: a brief cycling animation (random faces, re-rendered a
// handful of times) that settles on a genuine random 1-6 face, then
// immediately starts the listening round (see beginRollReadListening()) —
// no separate click needed to hear the word once the die has landed. The
// face it lands on is purely decorative flourish now — it doesn't narrow
// which tiles end up in play (see the "Roll and Read" comment above).
function rollReadRollDie() {
  const rr = state.rollRead;
  if (rr.status === 'rolling' || !rr.words.length) return;
  stopRollReadRoll();
  rr.status = 'rolling';
  rr.feedback = null;
  rr.dieValue = null;
  render();
  let ticks = 0;
  const totalTicks = 8;
  rollReadAnimationTimer = setInterval(() => {
    ticks++;
    rr.dieValue = 1 + Math.floor(Math.random() * 6);
    if (ticks >= totalTicks) {
      clearInterval(rollReadAnimationTimer);
      rollReadAnimationTimer = null;
      beginRollReadListening();
      return;
    }
    render();
  }, 90);
}

// Picks one random word from the WHOLE board as this round's target and
// speaks it aloud — every tile is live, none of them narrowed away by the
// die. `targetWord` is read only by guessRollReadWord() —
// rollReadGameTemplate() never renders it or marks its cell, so the
// student has no visual shortcut, only the audio.
function beginRollReadListening() {
  const rr = state.rollRead;
  if (!rr.words.length) {
    rr.status = 'idle';
    render();
    return;
  }
  const target = rr.words[Math.floor(Math.random() * rr.words.length)];
  rr.targetWord = target.word;
  rr.status = 'listening';
  render();
  speak(target.say || target.word, target.lang || 'en-US');
}

// Briefly shows a "+10s" flash next to the big timer on a correct guess
// (see rollReadTimerTemplate()) — same disposable-DOM-node problem and fix
// as flashMemoryTimeBonus(): driven through state (rather than a directly
// inserted element) since render() rebuilds the whole page and would wipe
// out a one-off node before its animation ever painted.
function flashRollReadTimeBonus() {
  clearTimeout(rollReadTimeBonusTimer);
  state.rollRead.timeBonusFlash = true;
  rollReadTimeBonusTimer = setTimeout(() => {
    state.rollRead.timeBonusFlash = false;
    render();
  }, 900);
}

// All of this level's rounds won before the timer ran out. Awards this
// level's badge through the same celebration-toast plumbing toggleDone()/
// winMemoryLevel() use, then auto-advances to the next level after a short
// pause — or, after level 5, awards the master badge and sets
// state.rollReadFinale to trigger the full-screen finale overlay (see
// rollReadFinaleTemplate()) instead of advancing. Mirrors winMemoryLevel()
// exactly, including leaving state.rollRead.status as 'won' (not reset)
// in the final-level case so the board behind the finale overlay reads as
// "you just won this".
function winRollReadLevel() {
  stopRollReadTimer();
  stopRollReadRoll();
  const level = state.rollRead.level;
  state.rollRead.status = 'won';
  const isFinalLevel = level === ROLL_READ_LEVELS[ROLL_READ_LEVELS.length - 1].level;
  const levelBadge = awardRollReadBadgeIfEligible(level);
  if (levelBadge) {
    clearTimeout(celebrationTimer);
    state.celebration = levelBadge;
    celebrationTimer = setTimeout(() => {
      state.celebration = null;
      render();
    }, 2200);
  }
  render();
  rollReadAdvanceTimer = setTimeout(() => {
    if (isFinalLevel) {
      state.rollReadFinale = awardRollReadMasterBadgeIfEligible() || rollReadMasterBadge();
      render();
    } else {
      startRollReadLevel(level + 1);
    }
  }, 2400);
}

// Timer hit zero before every round was won — retry the exact same level
// (same rounds-to-win/timer) with a freshly drawn random board. Mirrors
// loseMemoryLevel(), plus explicitly cancelling any in-flight die
// animation/advance timer so a guess landing right as the clock hits zero
// can't race the retry.
function loseRollReadLevel() {
  stopRollReadRoll();
  stopRollReadAdvanceTimer();
  state.rollRead.status = 'lost';
  render();
  rollReadAdvanceTimer = setTimeout(() => startRollReadLevel(state.rollRead.level), 2200);
}

// A tile in the rolled row was tapped. Correct: counts toward this
// level's roundsToWin, adds a time bonus, and either wins the level
// (winRollReadLevel()) or — after a brief pause — refreshes the board with
// a new word set and rolls again on its own. Incorrect: costs no progress
// (the timer ticking down is the only cost) and leaves the exact same
// round live — same board, same rolled row, same target word — so the
// student can just listen again and try another tile, the same "try
// again" shape as the Sound Practice mic feedback.
function guessRollReadWord(word) {
  const rr = state.rollRead;
  if (rr.status !== 'listening') return;
  if (word !== rr.targetWord) {
    rr.feedback = { kind: 'incorrect', text: "Didn't catch that — listen again and try another tile." };
    render();
    return;
  }
  rr.roundsWon += 1;
  rr.secondsLeft += ROLL_READ_TIME_BONUS_SECONDS;
  flashRollReadTimeBonus();
  rr.feedback = { kind: 'correct', text: 'Great listening — that was it!' };
  if (rr.roundsWon >= rr.roundsToWin) {
    winRollReadLevel();
    return;
  }
  rr.status = 'correct';
  render();
  rollReadAdvanceTimer = setTimeout(() => {
    rollReadAdvanceTimer = null;
    refreshRollReadBoard();
    rollReadRollDie();
  }, 1100);
}

// One badge per level (roll-and-read::1 .. roll-and-read::5), plus a
// single bigger "master" badge for finishing every level — same id/
// storage convention as Memory Match's memoryBadgeId()/memoryBadgeForLevel()/
// memoryMasterBadge(), just scoped to this game instead.
const ROLL_READ_BADGE_PREFIX = 'roll-and-read';
const ROLL_READ_MASTER_BADGE_ID = `${ROLL_READ_BADGE_PREFIX}::master`;

function rollReadBadgeId(level) {
  return `${ROLL_READ_BADGE_PREFIX}::${level}`;
}

function rollReadBadgeForLevel(level) {
  const colors = badgeColor(level, ROLL_READ_LEVELS.length);
  return {
    id: rollReadBadgeId(level),
    label: `Roll and Read ${level}`,
    affirmation: badgeAffirmation(level),
    color: colors.base,
    colorLight: colors.light,
  };
}

// A warm gold, distinct from the cool-to-hot per-level sweep (badgeColor()),
// the same choice memoryMasterBadge() makes, so the "finished everything"
// badge reads as a different tier of achievement, not just "level 6".
function rollReadMasterBadge() {
  return {
    id: ROLL_READ_MASTER_BADGE_ID,
    label: 'Roll and Read Champion',
    affirmation: 'You matched every level!',
    color: 'hsl(42 88% 48%)',
    colorLight: 'hsl(42 88% 88%)',
  };
}

function awardRollReadBadgeIfEligible(level) {
  const id = rollReadBadgeId(level);
  if (state.badges[id]) return null;
  state.badges[id] = { earnedAt: Date.now() };
  writeProgress('badgesPhonics', JSON.stringify(state.badges));
  return rollReadBadgeForLevel(level);
}

function awardRollReadMasterBadgeIfEligible() {
  if (state.badges[ROLL_READ_MASTER_BADGE_ID]) return null;
  state.badges[ROLL_READ_MASTER_BADGE_ID] = { earnedAt: Date.now() };
  writeProgress('badgesPhonics', JSON.stringify(state.badges));
  return rollReadMasterBadge();
}

function setState(key, value) {
  state[key] = value;
  if (key === 'voiceMode') localStorage.voiceMode = value;
  render();
}

let celebrationTimer = null;

function dismissCelebration() {
  clearTimeout(celebrationTimer);
  state.celebration = null;
  render();
}

function dismissGroupCelebration() {
  state.groupCelebration = null;
  render();
}

// ---------- Word Invaders ----------
// A shooter tab: a word plays aloud, then 2 (level 1) or 3 (level 2)
// word-cards descend from the top at a constant, fully-readable size, one
// matching the spoken word. The player steers a ship along the bottom and
// shoots the matching card before it reaches the ship. The round/level
// bookkeeping (how a hit/miss affects lives and when a round/level is won
// or failed) is pure logic lifted out into word-invaders-logic.js —
// WordInvadersLogic.advanceAfterWord() — specifically so it's
// unit-testable without a browser; everything here is the DOM/timer/audio
// glue around that, plus the actual falling/shooting mechanics.
//
// Unlike every other game tab, the falling cards and the ship/bullets
// don't go through state+render() while they're moving — the same
// "moves/reads the DOM directly... rebuilding the whole app's innerHTML
// would visibly stutter" reasoning Catch the Sound's basket/falling words
// already use (see startCatchLoop()'s comment). Concretely: render() only
// ever runs at a *word boundary* (a fresh word starting, or one just
// resolved) to update the HUD/status text; every card's actual fall is a
// CSS `top` transition set directly on its element (mirroring
// startCatchFall()), and the ship/bullets/collisions are driven by a
// small requestAnimationFrame loop reading and writing the DOM directly
// (mirroring startCatchLoop()/checkCatchCollisions()). render() only ever
// runs at a word-boundary moment, when nothing is still mid-flight.
//
// A round is WordInvadersLogic.WORDS_PER_ROUND (4) words; clearing
// WordInvadersLogic.ROUNDS_PER_LEVEL (3) rounds without running out of
// lives completes the level. A wrong or missed pick costs a life but
// still advances to the next word — only hitting 0 lives sends the
// player back to the start of the CURRENT round (same 4 words, freshly
// redrawn distractors — see loseWordInvadersRound()). Level 2 only ever
// becomes reachable by clearing level 1 (see startWordInvadersLevel()'s
// WordInvadersLogic.isLevelUnlocked() guard) — the same "first is always
// open, each next needs the one before it" shape as the Learn tab's
// isLevelUnlocked(), just with no lock-icon list UI since (like Memory
// Match/Roll and Read/the old Word Run) this game is played
// level-by-level in sequence, not picked from a list.
const WORD_INVADERS_SPEAK_PAUSE_MS = 1000; // word plays, *then* cards start appearing
const WORD_INVADERS_FEEDBACK_PAUSE_MS = 1100;
const WORD_INVADERS_ROUND_FAIL_PAUSE_MS = 2200;
const WORD_INVADERS_LEVEL_ADVANCE_PAUSE_MS = 2400;
const WORD_INVADERS_FIRE_COOLDOWN_MS = 260;
const WORD_INVADERS_BULLET_MS = 300;
const WORD_INVADERS_SHIP_SPEED_PCT_PER_SEC = 80;
const WORD_INVADERS_SHIP_MIN_PCT = 8;
const WORD_INVADERS_SHIP_MAX_PCT = 92;
const WORD_INVADERS_SPAWN_TOP_PCT = -16; // just above the visible field
const WORD_INVADERS_TARGET_TOP_PCT = 78; // the ship's row

// Coin/obstacle width (percent of field) and the real visible margin kept
// between any two items' edges — see WordInvadersLogic.computeMinGapPercent()
// / pickClearX(), used by spawnWordInvadersWave() below to guarantee a
// coin/obstacle never lands in the same column as a word-card.
const WORD_INVADERS_EXTRA_WIDTH_PCT = 13;
const WORD_INVADERS_CLEARANCE_MARGIN_PCT = 2;

// The rendering knobs that vary by level — fall speed, how far apart
// successive cards in a wave start falling, how wide a card is (level 2's
// third simultaneous card needs a bit more breathing room than level 1's
// two get), where each of a level's cards sits (as % of field width), and
// how often a bonus coin/obstacle shows up. `cards` (how many
// simultaneous word-cards) itself comes from WordInvadersLogic.LEVELS —
// not duplicated here — so the two files can never drift out of sync on
// that number.
const WORD_INVADERS_LEVEL_VISUALS = {
  1: { duration: 7200, stagger: 950, cardWidth: 27, cardX: [25, 75], coinChance: 0.25, obstacleChance: 0.10 },
  2: { duration: 5200, stagger: 700, cardWidth: 20, cardX: [10, 50, 90], coinChance: 0.3, obstacleChance: 0.18 },
};

function wordInvadersLevelVisuals(level) {
  return WORD_INVADERS_LEVEL_VISUALS[level] || WORD_INVADERS_LEVEL_VISUALS[1];
}

// Every non-archived word with a real photo, across every sound group —
// unlike Memory Match's memoryWordPool() (long-a only), Word Invaders
// draws from the whole active WORDS list, per spec (same pool the old
// Word Run used).
function wordInvadersWordPool() {
  return WordInvadersLogic.filterImageWords(WORDS.filter((word) => !word.archived));
}

// One badge per level (word-invaders::1, word-invaders::2), plus a master
// badge for finishing both — same id/storage convention as Memory Match's
// memoryBadgeId()/memoryBadgeForLevel()/memoryMasterBadge() and the old
// Word Run's badges.
const WORD_INVADERS_BADGE_PREFIX = 'word-invaders';
const WORD_INVADERS_MASTER_BADGE_ID = `${WORD_INVADERS_BADGE_PREFIX}::master`;

function wordInvadersBadgeId(level) {
  return `${WORD_INVADERS_BADGE_PREFIX}::${level}`;
}

function wordInvadersBadgeForLevel(level) {
  const colors = badgeColor(level, WordInvadersLogic.LEVELS.length);
  return {
    id: wordInvadersBadgeId(level),
    label: `Word Invaders ${level}`,
    affirmation: badgeAffirmation(level),
    color: colors.base,
    colorLight: colors.light,
  };
}

// Same warm gold as Memory Match/Roll and Read/Word Run's master badges,
// for the same reason — a visually distinct "finished everything" tier.
function wordInvadersMasterBadge() {
  return {
    id: WORD_INVADERS_MASTER_BADGE_ID,
    label: 'Word Invaders Champion',
    affirmation: 'You cleared every level!',
    color: 'hsl(42 88% 48%)',
    colorLight: 'hsl(42 88% 88%)',
  };
}

function awardWordInvadersBadgeIfEligible(level) {
  const id = wordInvadersBadgeId(level);
  if (state.badges[id]) return null;
  state.badges[id] = { earnedAt: Date.now() };
  writeProgress('badgesPhonics', JSON.stringify(state.badges));
  return wordInvadersBadgeForLevel(level);
}

function awardWordInvadersMasterBadgeIfEligible() {
  if (state.badges[WORD_INVADERS_MASTER_BADGE_ID]) return null;
  state.badges[WORD_INVADERS_MASTER_BADGE_ID] = { earnedAt: Date.now() };
  writeProgress('badgesPhonics', JSON.stringify(state.badges));
  return wordInvadersMasterBadge();
}

// ---- Module-scoped, non-persisted game state ----
// One phase timer drives the whole speak -> wave -> resolve -> pause ->
// next-word sequence — only one phase is ever "in flight" at a time, so a
// single handle (mirroring memoryAdvanceTimer/rollReadAdvanceTimer) is
// enough. `wordInvadersWaveTimers` are the *staggered* per-card/coin/
// obstacle spawn timeouts for the current wave specifically — a separate
// list because several can be pending at once, and every one of them
// needs to be cancellable the instant the wave resolves (see
// clearWordInvadersWaveTimers()'s comment below for why that matters).
// `wordInvadersItems`/`wordInvadersBullets` are the live (DOM node +
// metadata) falling cards/coins/obstacles and in-flight shots; `loopHandle`
// is the requestAnimationFrame handle for the ship/bullet/collision loop,
// running for as long as this tab is mounted and the game started —
// same lifecycle as Catch the Sound's catchLoopHandle.
let wordInvadersPhaseTimer = null;
let wordInvadersWaveTimers = [];
let wordInvadersItems = [];
let wordInvadersBullets = [];
let wordInvadersLoopHandle = null;
let wordInvadersNextId = 1;
let wordInvadersFireCooldownAt = 0;
let wordInvadersDragging = false;
const wordInvadersKeys = { left: false, right: false };

// Cancels every pending staggered spawn for the *current* wave. Critical
// to call the instant a word resolves (see resolveWordInvadersWord()) —
// not just when the *next* wave starts — because a word can resolve (a
// quick correct shot) before its own later-staggered card has even
// spawned yet; left alone, that pending spawn would still fire afterward
// and orphan a card from the finished wave into whatever column the next
// wave reuses. Found by testing the visual mockup before this was built:
// without this, two waves' cards could land in the same column at once.
function clearWordInvadersWaveTimers() {
  wordInvadersWaveTimers.forEach((id) => clearTimeout(id));
  wordInvadersWaveTimers = [];
}

function removeWordInvadersItemEl(item) {
  if (item.el && item.el.parentNode) item.el.parentNode.removeChild(item.el);
}

function clearWordInvadersItems() {
  wordInvadersItems.forEach(removeWordInvadersItemEl);
  wordInvadersItems = [];
}

function clearWordInvadersBullets() {
  wordInvadersBullets.forEach(removeWordInvadersItemEl);
  wordInvadersBullets = [];
}

function stopWordInvadersGame() {
  clearTimeout(wordInvadersPhaseTimer);
  wordInvadersPhaseTimer = null;
  clearWordInvadersWaveTimers();
  if (wordInvadersLoopHandle) {
    cancelAnimationFrame(wordInvadersLoopHandle);
    wordInvadersLoopHandle = null;
  }
  wordInvadersKeys.left = false;
  wordInvadersKeys.right = false;
  wordInvadersDragging = false;
  clearWordInvadersItems();
  clearWordInvadersBullets();
  stopStartCountdown();
}

// True session start — called once Start Game's countdown finishes (see
// wireWordInvadersTabEvents()). Resets the session-only score, then
// begins level 1.
function startWordInvadersSession() {
  state.wordInvaders.score = 0;
  startWordInvadersLevel(1);
}

// Starts (or re-enters, e.g. a finale replay button) one level at round 1
// with fresh lives and a fresh word draw. Never touches score — that's a
// running session total, not scoped to any one level. Guards against
// landing on a level that isn't actually unlocked yet (e.g. a stray call)
// by falling back to level 1, the same defensive spirit as
// isLevelUnlocked() being checked before acting on a sidebar level click.
function startWordInvadersLevel(level) {
  if (!WordInvadersLogic.isLevelUnlocked(level, (lvl) => !!state.badges[wordInvadersBadgeId(lvl)])) level = 1;
  stopWordInvadersGame();
  state.wordInvaders.level = level;
  state.wordInvadersFinale = null;
  startWordInvadersRound(1, false);
}

// Starts round `round`. Draws a fresh 4-word set unless `keepWords` is
// true — the round-failed retry path (see loseWordInvadersRound()), which
// reuses the exact same 4 words but still gets an entirely fresh
// distractor draw per word, since startWordInvadersWord() rebuilds the
// wave from scratch every time regardless.
function startWordInvadersRound(round, keepWords) {
  const wi = state.wordInvaders;
  wi.round = round;
  wi.lives = WordInvadersLogic.STARTING_LIVES;
  if (!keepWords) {
    wi.roundWords = WordInvadersLogic.pickRandom(wordInvadersWordPool(), WordInvadersLogic.WORDS_PER_ROUND);
  }
  startWordInvadersWord(0);
}

// Speaks the word for `index`, renders the (still-empty) field, and —
// after a pause so the word has room to be heard before anything starts
// falling — spawns its wave of cards.
function startWordInvadersWord(index) {
  clearTimeout(wordInvadersPhaseTimer);
  clearWordInvadersWaveTimers();
  clearWordInvadersItems();
  clearWordInvadersBullets();
  const wi = state.wordInvaders;
  wi.wordIndex = index;
  wi.feedback = null;
  wi.status = 'playing';
  wi.currentWord = wi.roundWords[index];
  render();
  speak(wi.currentWord.say || wi.currentWord.word, wi.currentWord.lang || 'en-US');
  wordInvadersPhaseTimer = setTimeout(spawnWordInvadersWave, WORD_INVADERS_SPEAK_PAUSE_MS);
}

// Builds and spawns the current word's wave: WordInvadersLogic.buildWave()
// picks the distractors and shuffles the correct card into a random slot;
// each entry is then handed a staggered spawn delay (the first two cards
// land together, any further one trickles in — see the level visuals'
// `stagger`) and a fixed x column from the level's `cardX` slots. A coin
// and/or obstacle may also spawn, each placed via
// WordInvadersLogic.pickClearX() so it can never share a column with a
// word-card (or the other one) — see that function's own comment for why
// that's a spatial guarantee, not a timing one.
function spawnWordInvadersWave() {
  const wi = state.wordInvaders;
  const cfg = WordInvadersLogic.levelConfig(wi.level);
  const visuals = wordInvadersLevelVisuals(wi.level);
  const correctItem = wi.currentWord;
  const distractorPool = wordInvadersWordPool().filter((word) => word.word !== correctItem.word);
  const wave = WordInvadersLogic.buildWave(correctItem, distractorPool, cfg.cards, Math.random);

  wave.forEach((card, i) => {
    const x = visuals.cardX[i];
    const delay = visuals.stagger * Math.max(0, i - 1);
    const id = setTimeout(() => {
      addWordInvadersItem('word', x, visuals.cardWidth, visuals.duration, { word: card.item.word, image: card.item.image, correct: card.correct });
    }, delay);
    wordInvadersWaveTimers.push(id);
  });

  const wordMinGap = WordInvadersLogic.computeMinGapPercent(visuals.cardWidth, WORD_INVADERS_EXTRA_WIDTH_PCT, WORD_INVADERS_CLEARANCE_MARGIN_PCT);
  const occupiedX = visuals.cardX.slice();
  if (Math.random() < visuals.coinChance) {
    const coinX = WordInvadersLogic.pickClearX(occupiedX, wordMinGap);
    if (coinX != null) {
      occupiedX.push(coinX);
      const id = setTimeout(() => addWordInvadersItem('coin', coinX, WORD_INVADERS_EXTRA_WIDTH_PCT, visuals.duration, {}), visuals.stagger * 0.6);
      wordInvadersWaveTimers.push(id);
    }
  }
  if (Math.random() < visuals.obstacleChance) {
    const obstacleX = WordInvadersLogic.pickClearX(occupiedX, wordMinGap);
    if (obstacleX != null) {
      const id = setTimeout(() => addWordInvadersItem('obstacle', obstacleX, WORD_INVADERS_EXTRA_WIDTH_PCT, visuals.duration * 0.9, {}), visuals.stagger * 1.4);
      wordInvadersWaveTimers.push(id);
    }
  }
}

// Creates one falling item (word-card, coin, or obstacle), appends it
// directly to the live field — *not* through render(), see this section's
// opening comment — and kicks off its CSS-transition fall exactly the way
// startCatchFall() does: paint it at rest at its spawn position first (two
// nested requestAnimationFrame calls force that paint before the
// transition is assigned), then assign the transition and its target
// `top`, so the very first frame never skips straight to the end
// position. `transitionend` resolves it as "reached the ship unshot" —
// only meaningful for the correct word-card; a distractor, a coin, or an
// obstacle landing uninterrupted is simply removed, no penalty, matching
// Catch the Sound's decoy-landing rule.
function addWordInvadersItem(kind, xPercent, widthPercent, durationMs, extra) {
  const el = document.createElement('div');
  el.className = `word-invaders-item word-invaders-item-${kind}`;
  el.style.left = `${xPercent}%`;
  el.style.top = `${WORD_INVADERS_SPAWN_TOP_PCT}%`;
  el.style.width = `${widthPercent}%`;
  if (kind === 'word') {
    el.innerHTML = `<img src="${extra.image}" alt=""><span class="word-invaders-item-label">${escapeHtml(extra.word)}</span>`;
  } else if (kind === 'coin') {
    el.innerHTML = wordInvadersCoinSvg();
  } else {
    el.innerHTML = wordInvadersMeteorSvg();
  }
  const field = $('[data-word-invaders-field]');
  if (!field) return;
  field.appendChild(el);
  const item = { id: wordInvadersNextId++, kind, word: extra.word, correct: extra.correct, el, resolved: false };
  wordInvadersItems.push(item);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (item.resolved) return;
    el.style.transition = `top ${durationMs}ms linear`;
    el.style.top = `${WORD_INVADERS_TARGET_TOP_PCT}%`;
    el.addEventListener('transitionend', () => {
      if (item.resolved) return;
      if (kind === 'word' && item.correct) {
        // The correct card reached the ship unshot — same visual
        // treatment as a wrong shot (a brief shake) so a miss always
        // reads the same way regardless of how it happened.
        resolveWordInvadersItem(item, 'is-hit-wrong');
        resolveWordInvadersWord(false);
      } else {
        resolveWordInvadersItem(item);
      }
    }, { once: true });
  }));
}

// Removes one item without affecting round/level state — a distractor
// card, coin, or obstacle simply leaving play. With `animateClass`, the
// element gets a brief pop/shake first (added by checkWordInvadersCollisions()
// or the miss handler above) and is removed once that plays out rather
// than vanishing instantly, so a shot always gets visible feedback;
// without it (used for a wave's *other* items once the word is decided —
// see resolveWordInvadersWord()) it's just gone, no animation needed.
function resolveWordInvadersItem(item, animateClass) {
  if (item.resolved) return;
  item.resolved = true;
  wordInvadersItems = wordInvadersItems.filter((entry) => entry !== item);
  if (animateClass) {
    item.el.classList.add(animateClass);
    setTimeout(() => removeWordInvadersItemEl(item), 340);
  } else {
    removeWordInvadersItemEl(item);
  }
}

// Synthesized laser "pew" via Web Audio — no audio file, same approach as
// speak() reaching for a built-in browser API rather than an asset.
// AudioContext needs a user gesture to start, which firing always is (a
// click, tap, or spacebar press), so it's safe to create/resume here.
let wordInvadersAudioCtx = null;
function getWordInvadersAudioCtx() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  if (!wordInvadersAudioCtx) wordInvadersAudioCtx = new AudioCtx();
  if (wordInvadersAudioCtx.state === 'suspended') wordInvadersAudioCtx.resume();
  return wordInvadersAudioCtx;
}

function playWordInvadersLaserSound() {
  const ctx = getWordInvadersAudioCtx();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  osc.type = 'sine'; // sine, not square/saw — a softer edge for young ears
  osc.frequency.setValueAtTime(880, now);
  osc.frequency.exponentialRampToValueAtTime(220, now + 0.14);
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(2200, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.1, now + 0.012); // fast attack
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16); // quick decay, kept quiet — this repeats every shot
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.18);
}

// Fires one bullet from the ship's current position — rate-limited so
// holding/mashing the fire control can't spam the field. Like the falling
// items, the bullet's actual travel is a CSS `top` transition, not a
// JS-computed position; checkWordInvadersCollisions() reads its live
// interpolated position every frame via getBoundingClientRect(), the same
// technique checkCatchCollisions() uses against the falling word chips.
function fireWordInvadersBullet() {
  if (state.wordInvaders.status !== 'playing') return;
  const now = performance.now();
  if (now - wordInvadersFireCooldownAt < WORD_INVADERS_FIRE_COOLDOWN_MS) return;
  wordInvadersFireCooldownAt = now;
  playWordInvadersLaserSound();
  const field = $('[data-word-invaders-field]');
  if (!field) return;
  const el = document.createElement('div');
  el.className = 'word-invaders-bullet';
  el.style.left = `${state.wordInvaders.shipPct}%`;
  el.style.top = `${WORD_INVADERS_TARGET_TOP_PCT}%`;
  field.appendChild(el);
  const bullet = { id: wordInvadersNextId++, el, resolved: false };
  wordInvadersBullets.push(bullet);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (bullet.resolved) return;
    el.style.transition = `top ${WORD_INVADERS_BULLET_MS}ms linear`;
    el.style.top = '-4%';
    el.addEventListener('transitionend', () => resolveWordInvadersBullet(bullet), { once: true });
  }));
}

function resolveWordInvadersBullet(bullet) {
  if (bullet.resolved) return;
  bullet.resolved = true;
  removeWordInvadersItemEl(bullet);
  wordInvadersBullets = wordInvadersBullets.filter((entry) => entry !== bullet);
}

// Every live bullet against every live item, by their actual on-screen
// boxes — correct for items whose position is a live CSS transition, not
// just a static one, since getBoundingClientRect() always reflects the
// browser's current interpolated value. A word hit resolves the whole
// word (see resolveWordInvadersWord()); a coin/obstacle hit only resolves
// itself — WordInvadersLogic.resolveHit() is the single source of truth
// for what each kind is worth.
function checkWordInvadersCollisions() {
  if (!wordInvadersBullets.length || !wordInvadersItems.length) return;
  wordInvadersBullets.forEach((bullet) => {
    if (bullet.resolved) return;
    const bulletRect = bullet.el.getBoundingClientRect();
    for (const item of wordInvadersItems) {
      if (item.resolved) continue;
      const itemRect = item.el.getBoundingClientRect();
      const overlaps = bulletRect.left < itemRect.right && itemRect.left < bulletRect.right
        && bulletRect.top < itemRect.bottom && itemRect.top < bulletRect.bottom;
      if (!overlaps) continue;
      resolveWordInvadersBullet(bullet);
      const outcome = WordInvadersLogic.resolveHit(item.kind, item.correct);
      if (outcome.scoreDelta) {
        state.wordInvaders.score += outcome.scoreDelta;
        flashWordInvadersScore();
      }
      if (item.kind === 'word') {
        resolveWordInvadersItem(item, item.correct ? 'is-hit-correct' : 'is-hit-wrong');
        resolveWordInvadersWord(item.correct);
      } else {
        resolveWordInvadersItem(item, 'is-hit');
      }
      break;
    }
  });
}

// A word's wave is decided — by a shot (correct or wrong) or by the
// correct card reaching the ship unshot. The item that actually triggered
// this (if any) has already been handed its own brief pop/shake and a
// deferred removal by the caller (see resolveWordInvadersItem()'s
// `animateClass` — it's no longer in wordInvadersItems by the time this
// runs); everything else still falling from this wave — other cards, a
// coin, an obstacle — is cleared immediately, since per-word bonus items
// don't carry over into the next word (simplest given render() rebuilds
// the field at every word boundary anyway). Cancels the wave's own
// pending staggered spawns too, then delegates the round/level
// bookkeeping entirely to WordInvadersLogic.advanceAfterWord() and acts
// on its outcome — the same shape as the old Word Run's
// resolveWordRunWord().
function resolveWordInvadersWord(correct) {
  const wi = state.wordInvaders;
  clearTimeout(wordInvadersPhaseTimer);
  clearWordInvadersWaveTimers();
  wordInvadersItems.slice().forEach((entry) => resolveWordInvadersItem(entry));
  clearWordInvadersBullets();

  const outcome = WordInvadersLogic.advanceAfterWord({ wordIndex: wi.wordIndex, round: wi.round, lives: wi.lives }, correct);
  wi.lives = outcome.lives;
  wi.status = 'resolved';
  const targetWord = wi.currentWord.word;
  wi.feedback = correct
    ? { kind: 'correct', text: `Nice! That was "${targetWord}".` }
    : { kind: 'wrong', text: `Not quite — that was "${targetWord}".` };
  render();

  if (outcome.outcome === 'round-failed') {
    wordInvadersPhaseTimer = setTimeout(loseWordInvadersRound, WORD_INVADERS_FEEDBACK_PAUSE_MS);
    return;
  }
  wordInvadersPhaseTimer = setTimeout(() => {
    if (outcome.outcome === 'next-word') {
      startWordInvadersWord(outcome.wordIndex);
    } else if (outcome.outcome === 'round-complete') {
      startWordInvadersRound(outcome.round, false);
    } else {
      winWordInvadersLevel();
    }
  }, WORD_INVADERS_FEEDBACK_PAUSE_MS);
}

// All 3 rounds (12 words) cleared. Awards the level's badge through the
// same celebration-toast plumbing every other level-completion badge
// uses, then — after a pause — either advances to the next level or, on
// the final level, awards the master badge and sets state.wordInvadersFinale
// to trigger the full-screen finale overlay. Mirrors winMemoryLevel()/
// winRollReadLevel()/the old winWordRunLevel() function-for-function.
function winWordInvadersLevel() {
  const wi = state.wordInvaders;
  wi.status = 'won';
  const level = wi.level;
  const isFinalLevel = level === WordInvadersLogic.LEVELS[WordInvadersLogic.LEVELS.length - 1].level;
  const levelBadge = awardWordInvadersBadgeIfEligible(level);
  if (levelBadge) {
    clearTimeout(celebrationTimer);
    state.celebration = levelBadge;
    celebrationTimer = setTimeout(() => {
      state.celebration = null;
      render();
    }, 2200);
  }
  render();
  wordInvadersPhaseTimer = setTimeout(() => {
    if (isFinalLevel) {
      state.wordInvadersFinale = awardWordInvadersMasterBadgeIfEligible() || wordInvadersMasterBadge();
      render();
    } else {
      startWordInvadersLevel(level + 1);
    }
  }, WORD_INVADERS_LEVEL_ADVANCE_PAUSE_MS);
}

// 0 lives before the round's 4 words were cleared — retry the exact same
// round (same words, see startWordInvadersRound()'s keepWords) after a
// brief "Game Over" pause. Mirrors loseMemoryLevel()/loseRollReadLevel()/
// the old loseWordRunRound().
function loseWordInvadersRound() {
  state.wordInvaders.status = 'lost';
  render();
  wordInvadersPhaseTimer = setTimeout(() => startWordInvadersRound(state.wordInvaders.round, true), WORD_INVADERS_ROUND_FAIL_PAUSE_MS);
}

let wordInvadersScoreFlashTimer = null;
function flashWordInvadersScore() {
  clearTimeout(wordInvadersScoreFlashTimer);
  state.wordInvaders.scoreFlash = true;
  const scoreEl = $('[data-word-invaders-score]');
  if (scoreEl) scoreEl.classList.add('is-flash');
  wordInvadersScoreFlashTimer = setTimeout(() => {
    state.wordInvaders.scoreFlash = false;
    if (scoreEl) scoreEl.classList.remove('is-flash');
  }, 260);
}

// ---- Ship: continuous movement, independent of render() ----
// Reads the DOM fresh every call rather than caching the element, since a
// render() at a word boundary replaces the node entirely — same defensive
// pattern stepCatchBasket() uses for the basket.
function stepWordInvadersShip(dt) {
  const ship = $('[data-word-invaders-ship]');
  if (!ship) return;
  let pct = state.wordInvaders.shipPct;
  const delta = WORD_INVADERS_SHIP_SPEED_PCT_PER_SEC * dt;
  if (wordInvadersKeys.left) pct -= delta;
  if (wordInvadersKeys.right) pct += delta;
  pct = Math.max(WORD_INVADERS_SHIP_MIN_PCT, Math.min(WORD_INVADERS_SHIP_MAX_PCT, pct));
  state.wordInvaders.shipPct = pct;
  ship.style.left = `${pct}%`;
}

function startWordInvadersLoop() {
  if (wordInvadersLoopHandle) return;
  let last = performance.now();
  const tick = (now) => {
    const dt = (now - last) / 1000;
    last = now;
    stepWordInvadersShip(dt);
    checkWordInvadersCollisions();
    wordInvadersLoopHandle = requestAnimationFrame(tick);
  };
  wordInvadersLoopHandle = requestAnimationFrame(tick);
}

// Drag-to-steer: the whole field is a drag surface (not just tap-left/
// tap-right), matching the visual mockup shared and confirmed before this
// was built. Writes straight to the DOM/state, same reasoning as
// stepWordInvadersShip() — no need to wait for the next animation frame
// for a drag to feel responsive. The move/up listeners live on `window`
// (registered once, see below) rather than the field itself, so a drag
// that slides off the field edge doesn't get stuck "still dragging."
function stepWordInvadersShipToPointer(clientX) {
  const field = $('[data-word-invaders-field]');
  if (!field) return;
  const rect = field.getBoundingClientRect();
  const pct = Math.max(WORD_INVADERS_SHIP_MIN_PCT, Math.min(WORD_INVADERS_SHIP_MAX_PCT, ((clientX - rect.left) / rect.width) * 100));
  state.wordInvaders.shipPct = pct;
  const ship = $('[data-word-invaders-ship]');
  if (ship) ship.style.left = `${pct}%`;
}

function handleWordInvadersPointerDown(event) {
  if (event.target.closest('[data-word-invaders-fire], [data-word-invaders-repeat]')) return;
  wordInvadersDragging = true;
  stepWordInvadersShipToPointer(event.clientX);
}
window.addEventListener('pointermove', (event) => {
  if (wordInvadersDragging) stepWordInvadersShipToPointer(event.clientX);
});
window.addEventListener('pointerup', () => { wordInvadersDragging = false; });

// ---------- Start Game flow (shared by Catch the Sound, Memory Match,
// Roll and Read, and Word Invaders) ----------
// Each of the four game tabs gates its round/timer behind an explicit
// "Start Game" click rather than auto-starting on mount: gameStartPromptTemplate()
// is what each game's own template function renders in place of its
// normal board/field while `state.<game>Started` is still false (see
// catchStarted/memoryStarted/rollReadStarted/wordInvadersStarted's
// comments above), and each game's own wire*Events() function wires that
// button's click to beginGameCountdown(). The countdown itself — a brief
// "Ready… Set… Go!" flourish — is the one piece actually shared across
// all four, since it's identical regardless of which game it's gating;
// each game's own start function (playCatchRound()/startMemoryLevel()/
// startRollReadLevel()/startWordInvadersSession()) is untouched and only ever
// gets called once the countdown finishes, so none of the four games'
// round/timer/badge/finale logic needed to change at all.
const START_COUNTDOWN_STEPS = ['ready', 'set', 'go'];
let startCountdownTimer = null;

// Cancels any in-flight countdown and clears its display — called from
// every stop*Game() (i.e. whenever a game tab is left or the app is
// Reset), so a countdown started on one tab can never keep ticking (and
// then silently flip a *Started flag) after the player has navigated
// away from it.
function stopStartCountdown() {
  if (startCountdownTimer) {
    clearTimeout(startCountdownTimer);
    startCountdownTimer = null;
  }
  state.startCountdown = null;
}

function beginGameCountdown(view) {
  stopStartCountdown();
  let index = 0;
  state.startCountdown = { view, phase: START_COUNTDOWN_STEPS[index] };
  render();
  const tick = () => {
    index += 1;
    if (index < START_COUNTDOWN_STEPS.length) {
      state.startCountdown = { view, phase: START_COUNTDOWN_STEPS[index] };
      render();
      startCountdownTimer = setTimeout(tick, 650);
      return;
    }
    startCountdownTimer = null;
    state.startCountdown = null;
    if (view === 'game') state.catchStarted = true;
    else if (view === 'memory') state.memoryStarted = true;
    else if (view === 'rollread') state.rollReadStarted = true;
    else if (view === 'wordinvaders') state.wordInvadersStarted = true;
    // render() re-runs every wire*Events(), whose own idle-mount check
    // (e.g. wireMemoryGameEvents()'s `if (state.memory.status === 'idle')
    // startMemoryLevel(...)`) is what actually kicks the round off now
    // that *Started is true — the same pattern each already used for a
    // fresh tab visit, just gated one click later.
    render();
  };
  startCountdownTimer = setTimeout(tick, 650);
}

// Shown by each game's own template function in place of its board/field
// while state.<game>Started is false — the instructions section above
// already explains how to play, so this is just the gate plus a short
// nudge to read them, not a duplicate of that content.
function gameStartPromptTemplate() {
  return `<section class="game-start-prompt">
    <span class="game-start-icon" aria-hidden="true">${icon('play')}</span>
    <p class="game-start-hint">Read the instructions above, then start whenever you're ready.</p>
    <button type="button" class="game-start-btn" data-start-game>${icon('play')}Start Game</button>
  </section>`;
}

// The brief "Ready… Set… Go!" flourish itself, shown in place of the
// Start Game prompt between the click and the round/timer actually
// beginning (see beginGameCountdown()).
function gameStartCountdownTemplate() {
  const phase = state.startCountdown.phase;
  const label = phase === 'ready' ? 'Ready…' : phase === 'set' ? 'Set…' : 'Go!';
  return `<section class="game-start-countdown" role="status" aria-live="assertive">
    <span class="game-start-countdown-word is-${phase}">${escapeHtml(label)}</span>
  </section>`;
}

// Marking a word known can complete its level (awarding that level's
// badge and showing a brief celebration toast) and, if that was the last
// level in its sound group, also complete the whole group — in which case
// the toast hands off to the bigger full-screen celebration once it times
// out, so the two moments never fight for the screen at once.
function toggleDone(word) {
  const item = WORDS.find((entry) => entry.word === word);
  state.done[word] = !state.done[word];
  writeProgress('donePhonics', JSON.stringify(state.done));
  if (state.done[word] && item) {
    const { groupId, level } = levelForWord(item);
    const badge = level !== undefined ? awardBadgeIfLevelComplete(groupId, level) : null;
    if (badge) {
      const group = SOUND_GROUPS.find((entry) => entry.id === groupId);
      const groupJustCompleted = isGroupComplete(groupId);
      clearTimeout(celebrationTimer);
      state.celebration = badge;
      celebrationTimer = setTimeout(() => {
        state.celebration = null;
        if (groupJustCompleted) state.groupCelebration = { group, badge };
        render();
      }, 2200);
    }
  }
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
    try {
      const best = event.results && event.results[0] && event.results[0][0];
      if (!best) {
        state.practice[item.word] = {
          status: 'error',
          message: "Didn't catch that. Try again and speak clearly into the mic.",
        };
        render();
        return;
      }
      const transcript = best.transcript.trim().toLowerCase();
      const comparison = PhonemeMatch.compare(item.word, transcript, item.targetIndex);
      const message = PhonemeMatch.feedbackFor(item, comparison);
      console.debug(`[Sound Practice] target="${item.word}" heard="${transcript}" match=${comparison.match} closeMatch=${!!comparison.closeMatch} failingSound=${comparison.failingSound}`);
      state.practice[item.word] = {
        status: comparison.match ? 'correct' : 'incorrect',
        transcript,
        confidence: best.confidence,
        message,
      };
      render();
    } catch (err) {
      state.practice[item.word] = {
        status: 'error',
        message: "Something went wrong understanding that. Try again.",
      };
      render();
    }
  };
  recognition.onerror = (event) => {
    state.practice[item.word] = {
      status: 'error',
      message: `Microphone error (${event.error}). Check mic permissions and try again.`,
    };
    render();
  };
  recognition.onend = () => {
    if (state.practice[item.word] && state.practice[item.word].status === 'listening') {
      state.practice[item.word] = {
        status: 'error',
        message: "Didn't catch that. Try again and speak clearly into the mic.",
      };
      render();
    }
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

// Label for a level, derived purely from its tier length so it never needs
// updating as new tiers/levels are added. Exceptions' single level isn't a
// word-length tier at all, so it gets its own plain label instead of a
// "Level 1" that would misleadingly imply more levels are coming.
function levelLabel(groupId, level) {
  if (isSingleLevelGroup(groupId)) return 'All words';
  const length = tierLengthForLevel(groupId, level);
  return length ? `Level ${level}: ${length}-Letter Words` : `Level ${level}`;
}

// Word cards prefer a real illustration photo (item.image — added for the
// long-A tier's photographed word set) over the generated SVG, falling
// back to the SVG whenever a word has no photo. This never removes or
// touches the SVG data itself, just deprioritizes it for display —
// WORD_SVGS/item.svg stay exactly as-is and imageSvg() is untouched, so
// every other consumer (Reading Activity's readingActivityTemplate(),
// admin's edit-modal preview) keeps rendering the plain generated SVG
// exactly as before; photos are scoped to the word-card view only.
function wordCardPic(item) {
  if (item.image) {
    return `<img class="word-photo" src="${escapeHtml(item.image)}" alt="Picture for ${escapeHtml(item.word)}" loading="lazy">`;
  }
  return imageSvg(item.visual, item.word, item.svg);
}

function wordCardTemplate(item) {
  const done = !!state.done[item.word];
  return `
    <article class="card ${done ? 'done' : ''}">
      ${done ? `<span class="done-badge" aria-hidden="true">${icon('check')}</span>` : ''}
      ${state.admin ? `<div class="admin-card-controls">
        <button class="admin-icon-btn" data-admin-edit="${escapeHtml(item.word)}" title="Edit word" aria-label="Edit ${escapeHtml(item.word)}">${icon('pencil')}</button>
        <button class="admin-icon-btn admin-icon-danger" data-admin-archive="${escapeHtml(item.word)}" title="Archive word" aria-label="Archive ${escapeHtml(item.word)}">${icon('trash')}</button>
      </div>` : ''}
      <div class="pic">${wordCardPic(item)}</div>
      <div>
        <h2>${highlightWord(item)}</h2>
        <p class="arabic" dir="rtl">${escapeHtml(item.arabic)}</p>
        <p class="hint">${escapeHtml(item.hint)}</p>
      </div>
      <div class="actions">
        <button data-say="${escapeHtml(item.say || item.word)}" data-lang="${item.lang || 'en-US'}">${icon('speaker')}English</button>
        <button data-say="${escapeHtml(item.say || item.word)}. ${escapeHtml(item.hint)}" data-lang="${item.lang || 'en-US'}">${icon('chat')}Sentence cue</button>
        <button data-toggle="${item.word}" class="${done ? 'is-done' : ''}">${icon('check')}${done ? 'Known' : 'I know it'}</button>
      </div>
    </article>`;
}

// A sidebar group is expanded (its levels visible) only once explicitly
// toggled open — every group starts collapsed to just its name, same as
// "Exceptions" always has. Selecting a level (see the data-sidebar-level
// handler) sets its own group's entry true, so the active tier stays
// visible once you've picked it; nothing here names a specific group.
function isGroupExpanded(groupId) {
  return !!state.expandedGroups[groupId];
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
    const complete = total > 0 && known === total;
    const label = levelLabel(group.id, level);
    return `<li>
      <button class="sidebar-level ${active ? 'active' : ''} ${unlocked ? '' : 'is-locked'} ${complete ? 'is-complete' : ''}" data-sidebar-level="${group.id}::${level}" ${unlocked ? '' : 'disabled aria-disabled="true"'} aria-current="${active}">
        ${unlocked ? '' : `<span class="sidebar-level-lock" aria-hidden="true">${icon('lock')}</span>`}
        ${complete ? `<span class="sidebar-level-done" aria-hidden="true">${icon('check')}</span>` : ''}
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

// Shown under the level heading once every word in the current level is
// known — a clear, explicit call-to-action rather than relying on the
// learner to notice the sidebar row changed. Purely data-driven: it just
// asks groupLevels() what comes after the current level, so it works for
// any group/level without naming one.
function levelCompleteTemplate(group, level) {
  const { known, total } = levelProgress(group.id, level);
  if (!total || known < total) return '';
  const levels = groupLevels(group.id);
  const nextLevel = levels[levels.indexOf(level) + 1];
  if (nextLevel === undefined) {
    const prefix = isSingleLevelGroup(group.id) ? '' : `Level ${level} complete — `;
    return `<div class="level-complete-banner">
      ${icon('check')}<span>${prefix}Every word in ${escapeHtml(group.label)} is known!</span>
    </div>`;
  }
  return `<div class="level-complete-banner">
    ${icon('check')}<span>Level ${level} complete — ${escapeHtml(levelLabel(group.id, nextLevel))} is unlocked.</span>
    <button class="level-complete-action" data-sidebar-level="${group.id}::${nextLevel}">Unlock next level${icon('chevron')}</button>
  </div>`;
}

// Switches the Learn tab's main panel between the normal word-card grid
// and the Reading Activity, for whichever level is currently selected in
// the sidebar. Deliberately just a view switch on existing
// soundGroup/level state — not a separate navigation concept — so Reading
// Activity is available for every level of every sound group for free,
// with no per-group/per-level wiring.
function learnModeToggleTemplate() {
  return `<div class="learn-mode-toggle" role="tablist" aria-label="Level view">
    <button data-learn-mode="cards" role="tab" aria-selected="${state.learnMode === 'cards'}" class="${state.learnMode === 'cards' ? 'active' : ''}">${icon('book')}Word cards</button>
    <button data-learn-mode="reading" role="tab" aria-selected="${state.learnMode === 'reading'}" class="${state.learnMode === 'reading' ? 'active' : ''}">${icon('chat')}Reading Activity</button>
  </div>`;
}

function readingWordSpan(token, index, activeIndex) {
  const classes = ['reading-word'];
  if (index === activeIndex) classes.push('is-active');
  else if (index < activeIndex) classes.push('is-read');
  return `<span class="${classes.join(' ')}" data-word-index="${index}">${escapeHtml(token.text)}</span>`;
}

// The read-along reader: one word's picture + sentence at a time, a play
// button that speaks the sentence via the app's existing TTS mechanism
// (see playReadingSentence()), word-by-word highlighting synced to that
// playback in either of two styles, an optional Line Focus dimming
// treatment, and Prev/Next to move through the level's word list without
// leaving this view. Takes `levelWords` (the same list the card grid would
// show) so it always matches whatever level/group is selected — nothing
// here names a specific sound group.
function readingActivityTemplate(group, levelWords) {
  if (!levelWords.length) {
    return emptyGroupTemplate(`No words to read yet in ${escapeHtml(group.label)} at this level.`);
  }
  if (state.reading.index >= levelWords.length) state.reading.index = 0;
  const index = state.reading.index;
  const item = levelWords[index];
  const done = !!state.done[item.word];
  const tokens = tokenizeWords(item.sentence);
  const activeIndex = state.reading.activeWordIndex;
  const playing = state.reading.playing;
  const styleBall = state.readingHighlightStyle === 'ball';

  return `
    <div class="reading-activity">
      <div class="reading-focus-overlay ${state.readingLineFocus && playing ? 'is-active' : ''}" aria-hidden="true"></div>
      <div class="reading-stage">
        ${state.admin ? `<div class="admin-card-controls">
          <button class="admin-icon-btn" data-admin-edit="${escapeHtml(item.word)}" title="Edit word" aria-label="Edit ${escapeHtml(item.word)}">${icon('pencil')}</button>
        </div>` : ''}
        <div class="reading-word-meta">
          <div class="pic reading-pic">${imageSvg(item.visual, item.word, item.svg)}</div>
          <div>
            <h2 class="reading-target-word">${highlightWord(item)}</h2>
            <p class="arabic" dir="rtl">${escapeHtml(item.arabic)}</p>
            <p class="hint">${escapeHtml(item.hint)}</p>
          </div>
        </div>
        <div class="reading-sentence-wrap ${styleBall ? 'style-ball' : 'style-sweep'}" data-reading-sentence>
          <p class="reading-sentence">${tokens.map((token, i) => readingWordSpan(token, i, activeIndex)).join(' ')}</p>
          ${styleBall ? `<span class="reading-ball" data-reading-ball aria-hidden="true"><span class="reading-ball-dot"></span></span>` : ''}
        </div>
        <div class="reading-controls">
          <button class="reading-nav" data-reading-prev ${index === 0 ? 'disabled' : ''} aria-label="Previous word">${icon('chevron')}<span>Prev</span></button>
          <button class="reading-play ${playing ? 'is-playing' : ''}" data-reading-play aria-label="${playing ? 'Stop reading' : 'Play sentence'}">${icon(playing ? 'close' : 'speaker')}<span>${playing ? 'Stop' : 'Play sentence'}</span></button>
          <button class="reading-nav reading-nav-next" data-reading-next ${index === levelWords.length - 1 ? 'disabled' : ''} aria-label="Next word"><span>Next</span>${icon('chevron')}</button>
          <button class="reading-known ${done ? 'is-done' : ''}" data-toggle="${escapeHtml(item.word)}">${icon('check')}${done ? 'Known' : 'I know it'}</button>
        </div>
        <div class="reading-progress-track">
          <span class="reading-progress-label">Word ${index + 1} of ${levelWords.length}</span>
        </div>
        <div class="reading-options">
          <span class="reading-options-label">Highlight style</span>
          <div class="reading-style-toggle" role="radiogroup" aria-label="Highlight style">
            <button data-reading-style="sweep" class="${!styleBall ? 'active' : ''}" aria-pressed="${!styleBall}">Color sweep</button>
            <button data-reading-style="ball" class="${styleBall ? 'active' : ''}" aria-pressed="${styleBall}">Bouncing ball</button>
          </div>
          <span class="reading-options-label">Speed</span>
          <div class="reading-style-toggle" role="radiogroup" aria-label="Reading speed">
            ${Object.keys(READING_RATES).map((speedKey) => {
              const active = state.readingSpeed === speedKey;
              return `<button data-reading-speed="${speedKey}" class="${active ? 'active' : ''}" aria-pressed="${active}">${escapeHtml(READING_SPEED_LABELS[speedKey] || speedKey)}</button>`;
            }).join('')}
          </div>
          <button class="reading-line-focus-toggle ${state.readingLineFocus ? 'is-on' : ''}" data-reading-line-focus aria-pressed="${state.readingLineFocus}">${icon('eye')}Line focus</button>
        </div>
      </div>
    </div>`;
}

// ---------- Roll and Read: view ----------
// Status pill + rounds-won counter + repeat button, the same shape
// memoryStatusTemplate() uses: 'Level N of 5' normally, 'Level complete!'/
// "Time's up!" while state.rollRead.status is briefly 'won'/'lost'. The
// repeat button is the one manual control worth keeping — replaying the
// current round's word — shown only while a round is actively listening.
function rollReadStatusTemplate() {
  const rr = state.rollRead;
  const label = rr.status === 'won' ? 'Level complete!' : rr.status === 'lost' ? "Time's up!" : `Level ${rr.level} of ${ROLL_READ_LEVELS.length}`;
  return `<div class="roll-read-status-group">
    <span class="roll-read-status-badge ${rr.status === 'won' ? 'is-won' : rr.status === 'lost' ? 'is-lost' : ''}">${icon('dice')}${escapeHtml(label)}</span>
    <span class="roll-read-rounds">${rr.roundsWon}/${rr.roundsToWin} rounds</span>
    ${rr.status === 'listening' ? `<button class="roll-read-repeat-btn" data-roll-read-repeat aria-label="Replay this word's pronunciation">${icon('retry')}</button>` : ''}
  </div>`;
}

// The countdown gets its own large, standalone display — not a small pill
// buried next to the level label — since it's the number a player needs
// to track at a glance while listening for the next word. Mirrors
// memoryTimerTemplate() exactly, including the "+10s" bonus popup driven
// through state rather than a directly-inserted DOM node (see
// flashRollReadTimeBonus()).
function rollReadTimerTemplate() {
  const rr = state.rollRead;
  const urgent = (rr.status === 'listening' || rr.status === 'rolling') && rr.secondsLeft <= 8;
  return `<div class="roll-read-timer-display ${urgent ? 'is-urgent' : ''}">
    <span class="roll-read-timer-icon">${icon('bolt')}</span>
    <span class="roll-read-timer-value">${Math.max(0, rr.secondsLeft)}</span>
    <span class="roll-read-timer-unit">sec</span>
    ${rr.timeBonusFlash ? `<span class="roll-read-time-bonus-popup">+${ROLL_READ_TIME_BONUS_SECONDS}s</span>` : ''}
  </div>`;
}

function rollReadFeedbackTemplate() {
  const rr = state.rollRead;
  if (rr.status === 'won') {
    const isFinalLevel = rr.level === ROLL_READ_LEVELS[ROLL_READ_LEVELS.length - 1].level;
    return `<p class="roll-read-feedback is-correct" aria-live="polite">${isFinalLevel ? 'Every level complete!' : 'Great listening! Next level starting…'}</p>`;
  }
  if (rr.status === 'lost') {
    return `<p class="roll-read-feedback is-incorrect" aria-live="polite">Time's up — let's try that level again…</p>`;
  }
  if (rr.feedback) {
    return `<p class="roll-read-feedback is-${rr.feedback.kind}" aria-live="polite">${escapeHtml(rr.feedback.text)}</p>`;
  }
  const hint = rr.status === 'rolling' ? 'Rolling the die…' : rr.status === 'listening' ? 'Listen for the word, then tap the matching tile anywhere on the board.' : 'Get ready…';
  return `<p class="roll-read-feedback" aria-live="polite">${hint}</p>`;
}

// One board tile. Every tile is clickable while a round is actively
// listening for a guess — the die's roll is decorative flavor only (see
// the "Roll and Read" comment above its game-engine section) and never
// narrows the board down to a subset, so nothing here marks any tile as
// more or less likely to be the target than any other. Outside a
// listening round (mid-roll, right after a correct pick, between levels)
// every tile is simply inert.
function rollReadCellTemplate(item, status) {
  const clickable = status === 'listening';
  return `<button type="button" class="roll-read-cell" ${clickable ? `data-roll-read-guess="${escapeHtml(item.word)}"` : 'disabled aria-disabled="true"'} aria-label="${escapeHtml(item.word)}">
    <span class="roll-read-cell-word">${highlightWord(item)}</span>
  </button>`;
}

// The audio-identification board: a status/rounds bar, the level timer, a
// purely decorative die, and the word grid — every tile of which is live
// every round. `words`/`rows`/`cols` always describe the exact board on
// screen (built by startRollReadLevel()/refreshRollReadBoard()), so this
// never recomputes them.
function rollReadGameTemplate() {
  if (state.startCountdown && state.startCountdown.view === 'rollread') return gameStartCountdownTemplate();
  if (!state.rollReadStarted) return gameStartPromptTemplate();
  const rr = state.rollRead;
  const emptyCells = rr.words.length ? rr.rows * rr.cols - rr.words.length : 0;
  return `
    <section class="roll-read-game">
      <div class="roll-read-game-top">
        ${rollReadStatusTemplate()}
        ${rollReadTimerTemplate()}
      </div>
      <div class="roll-read-board">
        <div class="roll-read-die-panel" aria-live="polite" aria-atomic="true">
          ${dieFaceTemplate(rr.dieValue, 'Roll')}
        </div>
        <div class="roll-read-grid" style="--roll-read-cols:${rr.cols || 1}" role="grid" aria-label="Roll and Read board">
          ${rr.words.map((item) => rollReadCellTemplate(item, rr.status)).join('')}
          ${Array.from({ length: emptyCells }, () => '<div class="roll-read-cell is-empty" aria-hidden="true"></div>').join('')}
        </div>
      </div>
      ${rollReadFeedbackTemplate()}
    </section>`;
}

// The grand finale for finishing every level — mirrors memoryFinaleTemplate()
// exactly (same full-screen overlay mechanism, same confetti/close-button/
// replay-levels shape), just relabeled for Roll and Read. See its comment
// for why there's no backdrop-click-to-dismiss.
function rollReadFinaleTemplate() {
  if (!state.rollReadFinale) return '';
  const badge = state.rollReadFinale;
  const confetti = Array.from({ length: 28 }, (_, i) => `<span class="confetti-piece" style="--i:${i}"></span>`).join('');
  return `<div class="roll-read-finale-overlay" role="dialog" aria-label="All Roll and Read levels complete">
    <div class="roll-read-finale-confetti" aria-hidden="true">${confetti}</div>
    <button class="roll-read-finale-close" data-dismiss-roll-read-finale aria-label="Close">${icon('close')}</button>
    <div class="roll-read-finale-panel">
      ${celebrationAvatarTemplate('md')}
      ${badgeMedalTemplate(badge, { size: 'xl' })}
      <p class="roll-read-finale-kicker">Champion!</p>
      <h2>All ${ROLL_READ_LEVELS.length} levels complete!</h2>
      <p>${escapeHtml(badge.affirmation)} You listened your way through every level — pick one below to play again.</p>
      <div class="roll-read-replay-levels">
        ${ROLL_READ_LEVELS.map((entry) => `<button type="button" data-roll-read-finale-replay-level="${entry.level}">${icon('dice')}Level ${entry.level}</button>`).join('')}
      </div>
    </div>
  </div>`;
}

function dismissRollReadFinale() {
  state.rollReadFinale = null;
  render();
}

function learnTemplate() {
  const group = SOUND_GROUPS.find((entry) => entry.id === state.soundGroup) || SOUND_GROUPS[0];
  const groupWords = wordsInSoundGroup(group.id);
  const filtered = wordsForGroupLevel(group.id, state.level);
  const tiers = [...new Set(filtered.map((word) => word.word.length))].sort((a, b) => a - b);
  const levelLabelText = levelLabel(group.id, state.level);
  const { known, total, pct: levelPct } = levelProgress(group.id, state.level);

  let body;
  if (state.learnMode === 'reading') {
    body = readingActivityTemplate(group, filtered);
  } else if (!groupWords.length) {
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
      <h2>${escapeHtml(group.label)} <span class="level-heading-sep">·</span> ${escapeHtml(levelLabelText)}</h2>
      <span class="level-heading-progress">${known}/${total} words known (${levelPct}%)</span>
    </div>
    ${learnModeToggleTemplate()}
    ${state.learnMode === 'cards' && filtered.length ? levelCompleteTemplate(group, state.level) : ''}
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
      ${result ? `<p class="practice-feedback practice-${status}"><span class="feedback-icon" aria-hidden="true">${icon(FEEDBACK_ICON[status] || 'alert')}</span><span>${escapeHtml(result.message)}</span></p>` : ''}
      ${result && status !== 'listening' ? `<p class="practice-debug">
        <span>Heard: <strong>${result.transcript ? `"${escapeHtml(result.transcript)}"` : '(nothing recognized)'}</strong></span>
        <span>Comparing against: <strong>"${escapeHtml(item.word)}"</strong></span>
      </p>` : ''}
    </article>`;
  }).join('')}</section>`;
}

// ---------- Catch the Sound: view ----------
// One falling-spelling option chip. `left` centers it on its lane (see
// catchGameTemplate()) via a translateX(-50%) transform, and it starts at
// top:-14% (just above the visible field) with no transition set inline —
// the fall itself is kicked off afterward by startCatchFall(), which is
// what actually assigns the CSS transition, so the very first paint always
// shows every chip resting just above the field before any of them move.
function catchWordChipTemplate(option, index) {
  return `<div class="catch-word" data-catch-word data-index="${index}" style="left:${((index + 0.5) / state.game.round.options.length) * 100}%;top:-14%">${escapeHtml(option.text)}</div>`;
}

// A small colored woven-basket illustration (not a single-color stroke
// icon like the nav tab's basket — see ICONS.basket) so it reads as a
// real prop sitting in the sand: a tan body with a diagonal weave lattice
// clipped to its silhouette, a darker rim, and a soft highlight. Sized and
// positioned entirely by .catch-basket's CSS (see stepCatchBasket()),
// this only ever needs to draw the basket itself.
function catchBasketSvg() {
  const bodyPath = 'M20 24 Q20 16 29 16 H111 Q120 16 120 24 L107 83 Q105 91 95 91 H45 Q35 91 33 83 Z';
  return `<svg class="catch-basket-svg" viewBox="0 0 140 92" aria-hidden="true">
    <defs><clipPath id="catchBasketClip"><path d="${bodyPath}"/></clipPath></defs>
    <path class="cb-body" d="${bodyPath}"/>
    <g class="cb-weave" clip-path="url(#catchBasketClip)">
      <path d="M-10 25 L55 100 M8 12 L78 100 M30 8 L102 100 M55 8 L127 96 M80 8 L150 84 M105 8 L150 60"/>
      <path d="M150 25 L85 100 M132 12 L62 100 M110 8 L38 100 M85 8 L13 96 M60 8 L-10 84"/>
    </g>
    <path class="cb-line" d="${bodyPath}" fill="none"/>
    <ellipse class="cb-rim" cx="70" cy="17" rx="51" ry="9"/>
    <ellipse class="cb-rim-line" cx="70" cy="17" rx="51" ry="9" fill="none"/>
    <ellipse class="cb-shine" cx="52" cy="14" rx="14" ry="3.5"/>
  </svg>`;
}

// The scoreboard reads very differently before/after the badge is earned.
// Below the threshold it's a literal progress fraction ("6/10"). Once
// earned, gameScore keeps climbing every session (the game stays fully
// playable/replayable after unlocking — catching words is still the
// point), so continuing to show it as "21/10" would read as a broken
// fraction rather than a running total. Past the threshold this drops the
// "/10" denominator and switches the label to an explicit "unlocked"
// statement instead, so the number is unambiguously a lifetime score, not
// a fraction of something it has already exceeded. See the PR description
// for the reasoning against the alternative (capping the display at
// 10/10).
function catchScoreboardTemplate() {
  const earned = !!state.badges[CATCH_GAME_BADGE_ID];
  return `<div class="catch-game-scoreboard">
    <span class="catch-game-score-label">${earned ? 'Badge unlocked! Total score' : 'Total score'}</span>
    <span class="catch-game-score-value">${state.gameScore}${earned ? '' : `<span class="catch-game-score-goal">/${CATCH_GAME_BADGE_THRESHOLD}</span>`}</span>
  </div>`;
}

// Rounds advance on their own (see beginCatchCountdown()/finishCatchRound()
// /wireCatchGameEvents()), so this status pill is a passive readout, not a
// button: 'playing' while a word's spellings are falling, 'countdown'
// (ticking down the seconds to the next round) right after one ends, and
// a generic "Get ready…" for the brief instant before the very first
// round of a visit kicks off. The little repeat button next to it is the
// one manual control left — replaying the *current* round's word without
// touching the round itself — so it only ever renders while a round (and
// so a target word) actually exists.
function catchStatusTemplate() {
  const { status, round, countdown } = state.game;
  const label = status === 'playing' ? 'Listening…' : status === 'countdown' ? `Next word in ${countdown}…` : 'Get ready…';
  return `<div class="catch-status-group">
    <span class="catch-status-badge ${status === 'countdown' ? 'is-counting' : ''}">${icon('speaker')}${label}</span>
    ${round ? `<button class="catch-repeat-btn" data-catch-repeat aria-label="Replay this word's pronunciation">${icon('retry')}</button>` : ''}
  </div>`;
}

function catchGameTemplate() {
  if (state.startCountdown && state.startCountdown.view === 'game') return gameStartCountdownTemplate();
  if (!state.catchStarted) return gameStartPromptTemplate();
  const { round, basketPct, feedback, backgroundId } = state.game;
  const background = CATCH_BACKGROUNDS.find((entry) => entry.id === backgroundId) || CATCH_BACKGROUNDS[0];
  return `
    <section class="catch-game">
      <div class="catch-game-top">
        ${catchStatusTemplate()}
        <button class="catch-music-toggle ${state.musicOn ? 'is-on' : ''}" data-catch-music-toggle aria-pressed="${state.musicOn}">${icon('musicNote')}${state.musicOn ? 'Music on' : 'Music off'}</button>
        ${catchScoreboardTemplate()}
      </div>
      <div class="catch-game-field" data-catch-field style="background-image:url('src/assets/backgrounds/${background.file}')">
        ${round ? round.options.map((option, i) => catchWordChipTemplate(option, i)).join('') : ''}
        <div class="catch-basket" data-catch-basket style="left:${basketPct}%">${catchBasketSvg()}</div>
      </div>
      <p class="catch-game-feedback ${feedback ? `is-${feedback.kind}` : ''}" data-catch-feedback aria-live="polite">${feedback ? escapeHtml(feedback.text) : 'Listen for the word, then use the ← and → keys to catch its correct spelling before it lands.'}</p>
    </section>`;
}

// The Catch the Sound badge, shown alongside every sound group's badge row
// in the shelf even though it isn't tied to a sound group/level (see
// catchGameBadge()).
function catchGameBadgeShelfSectionTemplate() {
  const badge = catchGameBadge();
  const earned = !!state.badges[badge.id];
  return `<section class="badge-shelf-group">
    <h3>Catch the Sound</h3>
    <div class="badge-shelf-grid">
      <div class="badge-shelf-item ${earned ? '' : 'is-locked'}">
        ${badgeMedalTemplate(badge, { size: 'md', earned })}
        <span class="badge-shelf-item-label">${escapeHtml(badge.label)}</span>
        <span class="badge-shelf-item-affirmation">${earned ? escapeHtml(badge.affirmation) : `Score ${CATCH_GAME_BADGE_THRESHOLD} points to unlock`}</span>
      </div>
    </div>
  </section>`;
}

// English/Arabic instruction text for the three game tabs — the only
// views with a language toggle (see instructionsLangToggleTemplate()).
// Each entry is a function so it can interpolate the same live game
// constants (badge thresholds, time bonuses, etc.) the English text
// always has, in both languages, rather than the Arabic side drifting out
// of sync with a hardcoded number.
const GAME_INSTRUCTIONS = {
  game: {
    en: () => [
      'A word plays automatically — 2-3 spellings then fall from the top, only one of them correct. Missed the word? Tap the small repeat icon to hear it again.',
      'Move the basket with the ← and → arrow keys, Pong-paddle style, to catch the correct spelling before it reaches the ground.',
      `Catching the right word scores points based on its length; catching a wrong one costs you ${CATCH_GAME_CONFIG.wrongCatchPenalty} point${CATCH_GAME_CONFIG.wrongCatchPenalty === 1 ? '' : 's'}, and letting the right one fall ends the round with no points either way.`,
      'The next word starts on its own a few seconds after each round ends — no need to click anything between rounds.',
      `Score ${CATCH_GAME_BADGE_THRESHOLD} total points to earn the Catch the Sound badge — the game keeps going afterward, so every catch still counts.`,
    ],
    ar: () => [
      'تُنطق كلمة تلقائيًا، ثم تسقط تهجئتان أو ثلاث من أعلى الشاشة، واحدة منها فقط صحيحة. فاتتك الكلمة؟ اضغط على أيقونة التكرار الصغيرة لسماعها مرة أخرى.',
      'حرّك السلة بمفتاحي الأسهم ← و → كما في لعبة البونغ، لالتقاط التهجئة الصحيحة قبل وصولها إلى الأرض.',
      `التقاط الكلمة الصحيحة يمنحك نقاطًا حسب طولها؛ والتقاط كلمة خاطئة يكلفك ${CATCH_GAME_CONFIG.wrongCatchPenalty} نقطة، وسقوط الكلمة الصحيحة دون التقاطها ينهي الجولة دون أي نقاط.`,
      'تبدأ الكلمة التالية تلقائيًا بعد ثوانٍ قليلة من انتهاء كل جولة — لا حاجة لضغط أي شيء بين الجولات.',
      `اجمع ${CATCH_GAME_BADGE_THRESHOLD} نقطة إجمالًا للحصول على وسام «التقط الصوت» — وتستمر اللعبة بعد ذلك، فكل التقاطة لا تزال تُحتسب.`,
    ],
  },
  memory: {
    en: () => [
      'Flip two face-down cards at a time. If one shows a word and the other shows its matching picture, they stay face-up as a match.',
      "If they don't match, both flip back face-down after a moment — remember what you saw for next time.",
      `Every correct match adds ${MEMORY_MATCH_TIME_BONUS_SECONDS} seconds back to the clock, so good matching keeps the timer topped up.`,
      'Match every pair before the timer runs out to win the level and earn a badge, then a fresh set of words starts automatically at the next level.',
      'Run out of time and the same level restarts with a new random word set — no penalty, just try again.',
      'Five levels get progressively bigger (4 pairs up to 12 pairs). Finish level 5 to earn the Memory Match Champion badge and replay any level you like.',
    ],
    ar: () => [
      'اقلب بطاقتين مقلوبتين في كل مرة. إذا كانت إحداهما تعرض كلمة والأخرى تعرض صورتها المطابقة، تبقيان مكشوفتين كتطابق صحيح.',
      'إذا لم تتطابقا، تعودان مقلوبتين بعد لحظة — تذكّر ما رأيته للمرة القادمة.',
      `كل تطابق صحيح يضيف ${MEMORY_MATCH_TIME_BONUS_SECONDS} ثوانٍ إلى الساعة، فالتطابق الجيد يبقي الوقت المتبقي وافرًا.`,
      'طابق كل الأزواج قبل نفاد الوقت للفوز بالمستوى والحصول على وسام، ثم تبدأ مجموعة جديدة من الكلمات تلقائيًا في المستوى التالي.',
      'إذا نفد الوقت، يُعاد المستوى نفسه بمجموعة كلمات عشوائية جديدة — بلا أي عقوبة، فقط حاول مجددًا.',
      'خمسة مستويات تكبر تدريجيًا (من 4 أزواج إلى 12 زوجًا). أنهِ المستوى الخامس للحصول على وسام «بطل الذاكرة» وأعد لعب أي مستوى تشاء.',
    ],
  },
  // Roll and Read's instructions are deliberately the shortest of the
  // three — the game itself has the fewest moving parts (listen, tap,
  // repeat), so a long numbered list here would be padding, not clarity.
  rollread: {
    en: () => [
      "Listen for the word — it isn't shown or highlighted anywhere on the board.",
      'Tap the matching tile. Correct: the board refreshes and the next word plays. Wrong: just listen again and try another tile.',
      `Every correct pick adds ${ROLL_READ_TIME_BONUS_SECONDS} seconds to the clock; run out of time and the level restarts fresh.`,
      'Win enough rounds to clear each of the 5 levels, earning a badge along the way — finish level 5 for the Roll and Read Champion badge.',
    ],
    ar: () => [
      'استمع إلى الكلمة — فهي غير معروضة أو مميزة في أي مكان على اللوحة.',
      'اضغط على البلاطة المطابقة. إن كانت صحيحة: تتجدد اللوحة وتُنطق الكلمة التالية. وإن كانت خاطئة: استمع مرة أخرى وجرّب بلاطة أخرى.',
      `كل اختيار صحيح يضيف ${ROLL_READ_TIME_BONUS_SECONDS} ثوانٍ إلى الساعة؛ وإذا نفد الوقت، يُعاد المستوى من جديد.`,
      'اربح جولات كافية لاجتياز كل من المستويات الخمسة، وتحصل على وسام في كل مرة — أنهِ المستوى الخامس للحصول على وسام «بطل ارمِ واقرأ».',
    ],
  },
  wordinvaders: {
    en: () => [
      'A word plays aloud, then word-cards drop from the top — 2 on level 1, 3 on level 2 — only one of them matching the word.',
      'Steer your ship with the ← and → arrow keys (or drag anywhere in the sky on a phone) and shoot with the spacebar or the 🔥 button before the matching card reaches you.',
      'Shooting the right card scores points and moves on to the next word; shooting a wrong one, or letting the right one reach your ship, costs 1 of 3 lives but still moves on.',
      'Watch for coins and meteors drifting down between cards: shoot a coin for a bonus point — missing it costs nothing. Shooting a meteor (or letting your own shot hit one) just wastes that shot, no other penalty.',
      `Clear ${WordInvadersLogic.ROUNDS_PER_LEVEL} rounds (${WordInvadersLogic.ROUNDS_PER_LEVEL * WordInvadersLogic.WORDS_PER_ROUND} words) to finish level 1 and unlock level 2 — finish level 2 for the Word Invaders Champion badge.`,
    ],
    ar: () => [
      'تُنطق كلمة، ثم تسقط بطاقات الكلمات من الأعلى — بطاقتان في المستوى الأول، وثلاث في المستوى الثاني — واحدة منها فقط تطابق الكلمة.',
      'وجّه سفينتك بمفتاحي الأسهم ← و → (أو اسحب في أي مكان من السماء على الهاتف) وأطلق النار بمفتاح المسافة أو زر 🔥 قبل أن تصل البطاقة المطابقة إليك.',
      'إصابة البطاقة الصحيحة تمنحك نقاطًا وتنتقل إلى الكلمة التالية؛ أما إصابة بطاقة خاطئة، أو وصول البطاقة الصحيحة دون إصابتها، فتكلفك حياة واحدة من ثلاث لكنها تنتقل للكلمة التالية أيضًا.',
      'انتبه للعملات والنيازك المنحدرة بين البطاقات: أصب عملة لنقطة إضافية — تفويتها لا يكلفك شيئًا. أما إصابة نيزك (أو ارتطام رصاصتك به) فتهدر تلك الطلقة فقط، دون أي عقوبة أخرى.',
      `أكمل ${WordInvadersLogic.ROUNDS_PER_LEVEL} جولات (${WordInvadersLogic.ROUNDS_PER_LEVEL * WordInvadersLogic.WORDS_PER_ROUND} كلمة) لإنهاء المستوى الأول وفتح المستوى الثاني — أنهِ المستوى الثاني للحصول على وسام «بطل غزاة الكلمات».`,
    ],
  },
};

function instructionsTemplate() {
  if (GAME_INSTRUCTIONS[state.view]) {
    const isAr = state.instructionsLang === 'ar';
    const items = (isAr ? GAME_INSTRUCTIONS[state.view].ar : GAME_INSTRUCTIONS[state.view].en)();
    return `<ol dir="${isAr ? 'rtl' : 'ltr'}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol>`;
  }
  if (state.view === 'practice') {
    return `<ol>
        <li>Press "Hear it" to listen to the target word and sound.</li>
        <li>Press "Try it", allow microphone access, and say the word clearly.</li>
        <li>Feedback names which sound was off (the target vowel/digraph sound vs. the whole word), not just right or wrong.</li>
        <li>Some words share a spelling but not a sound (e.g. "ea" in "bread" vs. "beach") — each card is matched to its own word, not the letter pattern.</li>
      </ol>`;
  }
  return `<ol>
        <li>Use the sidebar to pick a sound group (Long A, AI, AY, Exceptions) and one of its levels to focus on.</li>
        <li>Each level unlocks once every word in the level before it is marked known, so pacing builds up naturally.</li>
        <li>Select a male or female voice, then press English or Arabic audio.</li>
        <li>Look at the picture, read the Arabic meaning, and repeat the highlighted red letter.</li>
        <li>Use Large text, High contrast, or Dyslexia-friendly mode for inclusion and accessibility — combine them freely.</li>
      </ol>`;
}

// The small "English / العربية" pill next to a game's instructions —
// only rendered for the four game tabs (see render()'s instructions
// section), since every other view's instructions stay English-only.
function instructionsLangToggleTemplate() {
  const isAr = state.instructionsLang === 'ar';
  return `<div class="instructions-lang-toggle" role="radiogroup" aria-label="Instructions language">
    <button type="button" data-instructions-lang="en" class="${!isAr ? 'active' : ''}" aria-pressed="${!isAr}">English</button>
    <button type="button" data-instructions-lang="ar" class="${isAr ? 'active' : ''}" aria-pressed="${isAr}">العربية</button>
  </div>`;
}

// ---------- Word Invaders: view ----------
// Status/HUD bar, the field (ship + fire button + a live "listen" prompt —
// the falling cards themselves are injected directly by
// spawnWordInvadersWave()/addWordInvadersItem(), not rendered here, see
// this game's opening comment above), and feedback — mirrors the shape of
// Catch the Sound's/Roll and Read's own view sections above.
function wordInvadersStatusTemplate() {
  const wi = state.wordInvaders;
  const label = wi.status === 'won' ? 'Level complete!' : wi.status === 'lost' ? 'Game over!' : `Level ${wi.level} of ${WordInvadersLogic.LEVELS.length}`;
  return `<div class="word-invaders-status-group">
    <span class="word-invaders-status-badge ${wi.status === 'won' ? 'is-won' : wi.status === 'lost' ? 'is-lost' : ''}">${icon('play')}${escapeHtml(label)}</span>
    <span class="word-invaders-rounds">Round ${wi.round}/${WordInvadersLogic.ROUNDS_PER_LEVEL} · Word ${Math.min(wi.wordIndex + 1, WordInvadersLogic.WORDS_PER_ROUND)}/${WordInvadersLogic.WORDS_PER_ROUND}</span>
  </div>`;
}

// Lives as hearts (WordInvadersLogic.STARTING_LIVES of them, emptying
// left to right as they're lost) plus the running score — `scoreFlash`
// briefly highlights it right after a hit (see flashWordInvadersScore()),
// the same "state-driven popup" trick flashMemoryTimeBonus() uses so the
// flash still plays correctly even though render() rebuilds this element
// from scratch at the next word boundary.
function wordInvadersHudTemplate() {
  const wi = state.wordInvaders;
  const hearts = Array.from({ length: WordInvadersLogic.STARTING_LIVES }, (_, i) =>
    `<span class="word-invaders-heart ${i < wi.lives ? 'is-full' : 'is-empty'}">${icon('heart')}</span>`
  ).join('');
  return `<div class="word-invaders-hud">
    <div class="word-invaders-lives" aria-label="${wi.lives} of ${WordInvadersLogic.STARTING_LIVES} lives left">${hearts}</div>
    <div class="word-invaders-score ${wi.scoreFlash ? 'is-flash' : ''}" data-word-invaders-score aria-label="${wi.score} points">${icon('bolt')}<span>${wi.score}</span></div>
  </div>`;
}

// Same coin motif as the rest of the app's illustration set (a plain
// circle+ring+¢ glyph) — the old Word Run used this exact svg, kept
// identical here for visual consistency across the two games' bonus coins.
function wordInvadersCoinSvg() {
  return `<svg viewBox="0 0 24 24" class="word-invaders-coin-svg" aria-hidden="true">
    <circle class="wic-face" cx="12" cy="12" r="10"/>
    <circle class="wic-ring" cx="12" cy="12" r="10" fill="none"/>
    <text class="wic-glyph" x="12" y="16.5" text-anchor="middle">¢</text>
  </svg>`;
}

// A rounded, irregular rock silhouette (not a square block) so an
// obstacle reads as "meteor to dodge," not "wall to shoot" — ported
// directly from the visual mockup shared and confirmed before this was
// built.
function wordInvadersMeteorSvg() {
  return `<svg viewBox="0 0 100 100" class="word-invaders-meteor-svg" aria-hidden="true">
    <path class="wim-body" d="M44 6 C58 2 74 8 84 20 C94 32 96 48 90 60 C86 70 78 76 70 84 C60 94 46 96 34 90 C22 84 12 74 8 60 C4 46 8 30 18 20 C26 12 34 10 44 6 Z"/>
    <path class="wim-shine" d="M28 14 C38 8 50 8 58 12 C48 17 36 24 28 34 C21 26 22 19 28 14 Z"/>
    <ellipse class="wim-crater" cx="36" cy="36" rx="8" ry="6"/>
    <ellipse class="wim-crater" cx="64" cy="50" rx="6" ry="5"/>
    <ellipse class="wim-crater" cx="42" cy="70" rx="5" ry="4"/>
  </svg>`;
}

// A simple rocket ship, decorative flavor only, same illustration tier as
// catchBasketSvg()/dieFaceTemplate() — drawn with the app's own color
// tokens (not fixed hex) so it stays legible in high-contrast mode.
function wordInvadersShipSvg() {
  return `<svg viewBox="0 0 100 120" class="word-invaders-ship-svg" aria-hidden="true">
    <ellipse class="wis-flame" cx="50" cy="106" rx="12" ry="16"/>
    <ellipse class="wis-flame-inner" cx="50" cy="104" rx="6" ry="9"/>
    <path class="wis-hull" d="M50 6 C72 30 78 62 70 96 L30 96 C22 62 28 30 50 6 Z"/>
    <path class="wis-hull-shade" d="M50 6 C72 30 78 62 70 96 L58 96 C64 62 60 30 50 6 Z"/>
    <path class="wis-fin" d="M20 70 L30 96 L34 96 L28 66 Z"/>
    <path class="wis-fin" d="M80 70 L70 96 L66 96 L72 66 Z"/>
    <circle class="wis-window-ring" cx="50" cy="46" r="14"/>
    <circle class="wis-window" cx="50" cy="46" r="9"/>
  </svg>`;
}

function wordInvadersFeedbackTemplate() {
  const wi = state.wordInvaders;
  if (wi.status === 'won') {
    const isFinalLevel = wi.level === WordInvadersLogic.LEVELS[WordInvadersLogic.LEVELS.length - 1].level;
    return `<p class="word-invaders-feedback is-correct" aria-live="polite">${isFinalLevel ? 'Every level complete!' : 'Great shooting! Next level starting…'}</p>`;
  }
  if (wi.status === 'lost') {
    return `<p class="word-invaders-feedback is-incorrect" aria-live="polite">Out of lives — let's try that round again…</p>`;
  }
  if (wi.feedback) {
    return `<p class="word-invaders-feedback is-${wi.feedback.kind}" aria-live="polite">${escapeHtml(wi.feedback.text)}</p>`;
  }
  return `<p class="word-invaders-feedback" aria-live="polite">Listen, then shoot the matching card…</p>`;
}

function wordInvadersGameTemplate() {
  if (state.startCountdown && state.startCountdown.view === 'wordinvaders') return gameStartCountdownTemplate();
  if (!state.wordInvadersStarted) return gameStartPromptTemplate();
  const wi = state.wordInvaders;
  return `
    <section class="word-invaders-game">
      <div class="word-invaders-top">
        ${wordInvadersStatusTemplate()}
        ${wordInvadersHudTemplate()}
      </div>
      <div class="word-invaders-field" data-word-invaders-field>
        <div class="word-invaders-prompt">
          <span class="word-invaders-ear">${icon('speaker')}</span>
          <span>Listen, then shoot the matching card</span>
          <button type="button" class="word-invaders-repeat" data-word-invaders-repeat aria-label="Repeat the word">${icon('retry')}</button>
        </div>
        <div class="word-invaders-ship" data-word-invaders-ship style="left:${wi.shipPct}%">${wordInvadersShipSvg()}</div>
        <button type="button" class="word-invaders-fire-btn" data-word-invaders-fire aria-label="Fire">${icon('bolt')}</button>
      </div>
      ${wordInvadersFeedbackTemplate()}
    </section>`;
}

// The Word Invaders badges, shown alongside every sound group's badge row
// in the shelf even though it isn't tied to a sound group/level — same
// pattern as memoryBadgeShelfSectionTemplate()/rollReadBadgeShelfSectionTemplate().
function wordInvadersBadgeShelfSectionTemplate() {
  const levelBadges = WordInvadersLogic.LEVELS.map((entry) => wordInvadersBadgeForLevel(entry.level));
  const master = wordInvadersMasterBadge();
  return `<section class="badge-shelf-group">
    <h3>Word Invaders</h3>
    <div class="badge-shelf-grid">
      ${[...levelBadges, master].map((badge) => {
        const earned = !!state.badges[badge.id];
        return `<div class="badge-shelf-item ${earned ? '' : 'is-locked'}">
          ${badgeMedalTemplate(badge, { size: 'md', earned })}
          <span class="badge-shelf-item-label">${escapeHtml(badge.label)}</span>
          <span class="badge-shelf-item-affirmation">${earned ? escapeHtml(badge.affirmation) : 'Not yet earned'}</span>
        </div>`;
      }).join('')}
    </div>
  </section>`;
}

// The grand finale for finishing every level — mirrors memoryFinaleTemplate()/
// rollReadFinaleTemplate() exactly (same full-screen overlay mechanism,
// confetti/close-button/replay-levels shape), just relabeled for Word
// Invaders.
function wordInvadersFinaleTemplate() {
  if (!state.wordInvadersFinale) return '';
  const badge = state.wordInvadersFinale;
  const confetti = Array.from({ length: 28 }, (_, i) => `<span class="confetti-piece" style="--i:${i}"></span>`).join('');
  return `<div class="word-invaders-finale-overlay" role="dialog" aria-label="All Word Invaders levels complete">
    <div class="word-invaders-finale-confetti" aria-hidden="true">${confetti}</div>
    <button class="word-invaders-finale-close" data-dismiss-word-invaders-finale aria-label="Close">${icon('close')}</button>
    <div class="word-invaders-finale-panel">
      ${celebrationAvatarTemplate('md')}
      ${badgeMedalTemplate(badge, { size: 'xl' })}
      <p class="word-invaders-finale-kicker">Champion!</p>
      <h2>All ${WordInvadersLogic.LEVELS.length} levels complete!</h2>
      <p>${escapeHtml(badge.affirmation)} You shot down every word and dodged every meteor — pick a level below to play again.</p>
      <div class="word-invaders-replay-levels">
        ${WordInvadersLogic.LEVELS.map((entry) => `<button type="button" data-word-invaders-finale-replay-level="${entry.level}">${icon('play')}Level ${entry.level}</button>`).join('')}
      </div>
    </div>
  </div>`;
}

function dismissWordInvadersFinale() {
  state.wordInvadersFinale = null;
  render();
}

// This view's own controls besides the shared arrow-key/spacebar handling
// (wired globally, see the keydown listener below): the fire/repeat
// buttons, drag-to-steer on the field, and starting the loop/session for
// as long as the view is mounted — status is only ever 'idle' right after
// mount or a Reset, so this can't double-fire on every render() while a
// round is already in progress. Mirrors wireCatchGameEvents()/
// wireMemoryGameEvents() exactly.
function wireWordInvadersTabEvents() {
  if (state.view !== 'wordinvaders') {
    stopWordInvadersGame();
    return;
  }
  const startButton = $('[data-start-game]');
  if (startButton) startButton.onclick = () => beginGameCountdown('wordinvaders');
  if (!state.wordInvadersStarted) return;
  startWordInvadersLoop();
  if (state.wordInvaders.status === 'idle') startWordInvadersSession();
  const fireButton = $('[data-word-invaders-fire]');
  if (fireButton) fireButton.onclick = () => fireWordInvadersBullet();
  const repeatButton = $('[data-word-invaders-repeat]');
  if (repeatButton) {
    repeatButton.onclick = () => {
      const word = state.wordInvaders.currentWord;
      if (word) speak(word.say || word.word, word.lang || 'en-US');
    };
  }
  const field = $('[data-word-invaders-field]');
  if (field) field.addEventListener('pointerdown', handleWordInvadersPointerDown);
}

// ---------- ADMIN MODE ----------
// A curriculum-author-only mode, off by default and never persisted, so a
// learner who reloads the page (or opens it fresh) always sees the plain
// app. Its entry points — the small dot button in the footer, and the
// keyboard shortcut Ctrl+Alt+A — only exist at all once
// checkAdminAvailability() has confirmed the admin dev server (not a
// plain static host) is serving the app; see state.adminAvailable and the
// gating in render()/wireAdminEvents()/the keydown handler below.
//
// Edits are written straight to src/phonics-app.js on disk through the
// local dev server's /__admin/save-word endpoint (see scripts/dev-server.js)
// so they become real, permanent, git-diffable file changes — never
// localStorage.

// Probes for the admin dev server by requesting a route only it answers
// (see scripts/dev-server.js). A plain static host — `npx serve`,
// `python3 -m http.server`, GitHub Pages, whatever — has no such route
// and 404s (or the fetch just fails outright, e.g. under file://), which
// this treats identically to "not available": fails closed, so admin
// mode's entry points stay absent unless the probe actively succeeds.
// Fire-and-forget at startup; a successful probe re-renders once to reveal
// the now-available footer dot.
function checkAdminAvailability() {
  fetch('/__admin/ping')
    .then((response) => (response.ok ? response.json() : null))
    .then((result) => {
      if (result && result.ok) {
        state.adminAvailable = true;
        render();
      }
    })
    .catch(() => {});
}

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
            <span>${highlightWord(item)}</span>
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
          <label>Reading Activity sentence<input type="text" name="sentence" value="${escapeHtml(item.sentence || '')}" required></label>
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
    sentence: formValues.sentence.trim(),
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
  const toggleButton = $('[data-admin-toggle]');
  if (toggleButton) toggleButton.onclick = () => { state.admin = !state.admin; state.adminError = ''; render(); };
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
        sentence: data.get('sentence') || '',
        svg: data.get('svg') || '',
      });
    };
  }
}

// Word Invaders' steer/fire keys — ArrowLeft/ArrowRight are a
// held-continuous move (tracked via wordInvadersKeys + the same
// animation-loop pattern as Catch the Sound's catchKeys), so they set a
// flag here and let stepWordInvadersShip() do the actual moving each
// frame; spacebar fires once per press (`!event.repeat` so holding it
// down doesn't spam shots past fireWordInvadersBullet()'s own cooldown).
document.addEventListener('keydown', (event) => {
  if (state.view === 'game' && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
    event.preventDefault();
    if (event.key === 'ArrowLeft') catchKeys.left = true;
    else catchKeys.right = true;
    return;
  }
  if (state.view === 'wordinvaders' && (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === ' ')) {
    event.preventDefault();
    if (event.key === 'ArrowLeft') wordInvadersKeys.left = true;
    else if (event.key === 'ArrowRight') wordInvadersKeys.right = true;
    else if (!event.repeat) fireWordInvadersBullet();
    return;
  }
  if (state.adminAvailable && event.ctrlKey && event.altKey && (event.key === 'a' || event.key === 'A')) {
    event.preventDefault();
    state.admin = !state.admin;
    state.adminError = '';
    render();
  } else if (event.key === 'Escape' && state.admin && (state.showArchived || state.editingWord)) {
    closeAdminPanels();
  } else if (event.key === 'Escape' && state.badgeShelfOpen) {
    state.badgeShelfOpen = false;
    render();
  } else if (event.key === 'Escape' && state.groupCelebration) {
    dismissGroupCelebration();
  } else if (event.key === 'Escape' && state.celebration) {
    dismissCelebration();
  } else if (event.key === 'Escape' && state.showProfilePicker && state.profilePickerMode === 'add' && getProfiles().length) {
    state.profilePickerMode = 'select';
    render();
  } else if (event.key === 'Escape' && state.funZoneOpen) {
    state.funZoneOpen = false;
    render();
  }
});
document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowLeft') { catchKeys.left = false; wordInvadersKeys.left = false; }
  else if (event.key === 'ArrowRight') { catchKeys.right = false; wordInvadersKeys.right = false; }
});
// Closes the Fun Zone dropdown on any click outside its toggle button or
// its own menu — e.g. clicking the hero, the sidebar, or blank page area.
// Clicking the toggle itself, or a game inside the menu, is already
// handled by their own onclick handlers (see render()'s wiring), which
// both leave state.funZoneOpen false/already-toggled by the time this
// listener runs, so there's no double-toggle risk from also matching here.
document.addEventListener('click', (event) => {
  if (state.funZoneOpen && !event.target.closest('[data-fun-zone-toggle], #funZoneMenu')) {
    state.funZoneOpen = false;
    render();
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

function badgeMedalTemplate(badge, { size = 'md', earned = true } = {}) {
  return `<div class="badge-medal badge-medal-${size} ${earned ? '' : 'is-locked'}" style="--badge-color:${badge.color};--badge-color-light:${badge.colorLight}">
    <span class="badge-medal-icon" aria-hidden="true">${icon(earned ? 'bolt' : 'lock')}</span>
  </div>`;
}

// Small persistent corner widget — always rendered, on every view — that
// shows the running total of earned badges and opens the badge shelf.
function badgeShelfWidgetTemplate() {
  const total = Object.keys(state.badges).length;
  return `<button class="badge-shelf-toggle" data-badge-shelf-open aria-label="Badge shelf — ${total} badge${total === 1 ? '' : 's'} earned">
    ${icon('medal')}<span class="badge-shelf-toggle-count">${total}</span>
  </button>`;
}

// Small persistent corner widget, right next to the badge shelf toggle,
// showing who's currently practicing — doubles as the Switch profile
// trigger (see the data-switch-profile wiring in render()) so there's one
// obvious, always-visible way back to the picker instead of a separate
// control buried elsewhere. Fixed positioning (via its .header-widgets
// wrapper) keeps it reachable regardless of scroll or which tab is
// active, same as the badge shelf toggle beside it.
function profileAvatarButtonTemplate() {
  const profile = activeProfile();
  if (!profile) return '';
  const avatar = avatarById(profile.avatarId);
  return `<button class="header-avatar-btn" data-switch-profile aria-label="Switch profile (currently ${escapeHtml(profile.name)})" title="Switch profile (${escapeHtml(profile.name)})">
    <img src="${avatarSrc(avatar)}" alt="">
  </button>`;
}

// Small avatar+name row dropped into badge/celebration moments (the
// per-level toast, sound-group completion, and each game's full-clear
// finale) so the celebration reads as "you did this", not a generic app
// message. `size` matches the celebration it's embedded in.
function celebrationAvatarTemplate(size = 'md') {
  const profile = activeProfile();
  if (!profile) return '';
  const avatar = avatarById(profile.avatarId);
  return `<div class="celebration-avatar celebration-avatar-${size}">
    <img src="${avatarSrc(avatar)}" alt="">
    <span>${escapeHtml(profile.name)}</span>
  </div>`;
}

// The brief per-level celebration: icon + affirmation, shown as a small
// corner toast (never a full-screen takeover) and cleared automatically by
// the timer started in toggleDone().
function celebrationTemplate() {
  if (!state.celebration) return '';
  const badge = state.celebration;
  return `<div class="celebration-toast" data-dismiss-celebration role="status" aria-live="polite">
    ${badgeMedalTemplate(badge, { size: 'sm' })}
    <div class="celebration-toast-text">
      <strong>${escapeHtml(badge.affirmation)}</strong>
      <span>${escapeHtml(badge.label)} badge earned</span>
      ${celebrationAvatarTemplate('xs')}
    </div>
  </div>`;
}

// The bigger, full-screen moment for finishing every level in a sound
// group — deliberately more elaborate than the per-level toast so it reads
// as a distinct, larger milestone.
function groupCelebrationTemplate() {
  if (!state.groupCelebration) return '';
  const { group, badge } = state.groupCelebration;
  const badgeCount = allBadgesForGroup(group.id).length;
  const confetti = Array.from({ length: 16 }, (_, i) => `<span class="confetti-piece" style="--i:${i}"></span>`).join('');
  return `<div class="group-celebration-overlay" data-dismiss-group-celebration role="dialog" aria-label="${escapeHtml(group.label)} complete">
    <div class="group-celebration-confetti" aria-hidden="true">${confetti}</div>
    <div class="group-celebration-panel">
      ${celebrationAvatarTemplate('md')}
      ${badgeMedalTemplate(badge, { size: 'lg' })}
      <h2>${escapeHtml(group.label)} complete!</h2>
      <p>${escapeHtml(badge.affirmation)} You've earned all ${badgeCount} badge${badgeCount === 1 ? '' : 's'} in ${escapeHtml(group.label)}.</p>
      <button class="group-celebration-continue" data-dismiss-group-celebration>${icon('check')}Keep learning</button>
    </div>
  </div>`;
}

// One sound group's row of level badges for the badge shelf — earned ones
// in full color, not-yet-earned ones shown locked. Purely data-driven off
// groupLevels(), so a group with no words yet is simply skipped upstream.
function badgeShelfGroupTemplate(group) {
  return `<section class="badge-shelf-group">
    <h3>${escapeHtml(group.label)}</h3>
    <div class="badge-shelf-grid">
      ${allBadgesForGroup(group.id).map((badge) => {
        const earned = !!state.badges[badge.id];
        return `<div class="badge-shelf-item ${earned ? '' : 'is-locked'}">
          ${badgeMedalTemplate(badge, { size: 'md', earned })}
          <span class="badge-shelf-item-label">${escapeHtml(badge.label)}</span>
          <span class="badge-shelf-item-affirmation">${earned ? escapeHtml(badge.affirmation) : 'Not yet earned'}</span>
        </div>`;
      }).join('')}
    </div>
  </section>`;
}

function badgeShelfTemplate() {
  if (!state.badgeShelfOpen) return '';
  const total = Object.keys(state.badges).length;
  const groups = SOUND_GROUPS.filter((group) => groupLevels(group.id).length > 0);
  return `<div class="modal-overlay" data-badge-shelf-overlay>
    <div class="modal-panel badge-shelf-panel" role="dialog" aria-label="Badge shelf">
      <div class="modal-header">
        <h2>${icon('medal')}Badge shelf <span class="badge-shelf-total">${total} earned</span></h2>
        <button class="admin-icon-btn" data-close-badge-shelf aria-label="Close">${icon('close')}</button>
      </div>
      ${groups.map(badgeShelfGroupTemplate).join('')}
      ${catchGameBadgeShelfSectionTemplate()}
      ${memoryBadgeShelfSectionTemplate()}
      ${rollReadBadgeShelfSectionTemplate()}
      ${wordInvadersBadgeShelfSectionTemplate()}
    </div>
  </div>`;
}

// Reading Activity control wiring — the mode toggle is always bound (it's
// visible whenever the Learn tab is), the play/nav/option controls only
// exist in the DOM (and so are only worth binding) while Reading Activity
// mode is actually showing.
function wireReadingEvents() {
  document.querySelectorAll('[data-learn-mode]').forEach((button) => button.onclick = () => {
    stopReadingPlayback();
    state.learnMode = button.dataset.learnMode;
    state.reading.playing = false;
    state.reading.activeWordIndex = -1;
    render();
  });
  if (state.view !== 'learn' || state.learnMode !== 'reading') return;

  const currentLevelWords = () => {
    const group = SOUND_GROUPS.find((entry) => entry.id === state.soundGroup) || SOUND_GROUPS[0];
    return wordsForGroupLevel(group.id, state.level);
  };
  const stopAndReset = () => {
    stopReadingPlayback();
    state.reading.playing = false;
    state.reading.activeWordIndex = -1;
  };

  const playButton = $('[data-reading-play]');
  if (playButton) {
    playButton.onclick = () => {
      if (state.reading.playing) {
        stopAndReset();
        render();
        return;
      }
      const item = currentLevelWords()[state.reading.index];
      if (item) playReadingSentence(item);
    };
  }
  const prevButton = $('[data-reading-prev]');
  if (prevButton) {
    prevButton.onclick = () => {
      stopAndReset();
      state.reading.index = Math.max(0, state.reading.index - 1);
      render();
    };
  }
  const nextButton = $('[data-reading-next]');
  if (nextButton) {
    nextButton.onclick = () => {
      const words = currentLevelWords();
      stopAndReset();
      state.reading.index = Math.min(words.length - 1, state.reading.index + 1);
      render();
    };
  }
  document.querySelectorAll('[data-reading-style]').forEach((button) => button.onclick = () => {
    state.readingHighlightStyle = button.dataset.readingStyle;
    localStorage.readingHighlightStyle = state.readingHighlightStyle;
    render();
  });
  document.querySelectorAll('[data-reading-speed]').forEach((button) => button.onclick = () => {
    const speed = button.dataset.readingSpeed;
    if (speed === state.readingSpeed) return;
    state.readingSpeed = speed;
    localStorage.readingSpeed = speed;
    // The Web Speech API has no way to change an in-flight utterance's
    // rate — it's fixed at speak()-time — so a mid-playback speed change
    // has to restart the sentence from the top at the new rate, rather
    // than silently keep playing at the old one while claiming otherwise.
    const wasPlaying = state.reading.playing;
    const item = currentLevelWords()[state.reading.index];
    stopAndReset();
    render();
    if (wasPlaying && item) playReadingSentence(item);
  });
  const lineFocusButton = $('[data-reading-line-focus]');
  if (lineFocusButton) {
    lineFocusButton.onclick = () => {
      state.readingLineFocus = !state.readingLineFocus;
      localStorage.readingLineFocus = state.readingLineFocus ? 'on' : 'off';
      render();
    };
  }
}

// Roll and Read control wiring. Only the Roll button needs dedicated JS —
// "Hear it" reuses the existing global [data-say] binding (see render()),
// the same way word cards' own audio buttons work, so there's no separate
// TTS wiring to maintain here.
// This tab's only real controls are the group/level picker and the board
// tiles themselves — rolling and re-rolling happen on their own (see
// rollReadRollDie()/guessRollReadWord()), the same auto-advancing shape
// Catch the Sound's rounds use. Mount detection follows
// wireMemoryGameEvents()'s pattern: build (or rebuild, on a group/level
// switch) the board the moment this tab is the one on screen, and start
// the very first roll automatically so there's nothing to click before the
// first word plays.
// This view only has the board tiles as a real control besides its own
// finale replay buttons (wired in render()), plus starting the timer/first
// level for as long as the view is mounted — mirrors wireMemoryGameEvents()
// exactly: status is only ever 'idle' with no board yet right after mount
// or a Reset, so this can't double-fire on every render() while a level is
// already in progress.
function wireRollReadTabEvents() {
  if (state.view !== 'rollread') {
    stopRollReadGame();
    return;
  }
  const startButton = $('[data-start-game]');
  if (startButton) startButton.onclick = () => beginGameCountdown('rollread');
  if (!state.rollReadStarted) return;
  if (state.rollRead.status === 'idle' && !state.rollRead.words.length) startRollReadLevel(state.rollRead.level || 1);
  document.querySelectorAll('[data-roll-read-guess]').forEach((button) => button.onclick = () => guessRollReadWord(button.dataset.rollReadGuess));
  const repeatButton = $('[data-roll-read-repeat]');
  if (repeatButton) {
    repeatButton.onclick = () => {
      const target = state.rollRead.words.find((item) => item.word === state.rollRead.targetWord);
      if (target) speak(target.say || target.word, target.lang || 'en-US');
    };
  }
}

// ---------- Catch the Sound: game loop ----------
// Which arrow keys are currently held, updated by the keydown/keyup
// listeners near the bottom of this file. Kept as plain module state
// (not state.game) because it changes at keystroke rate and never needs
// to survive a render() or a reload.
const catchKeys = { left: false, right: false };
let catchLoopHandle = null;
// Whether the current round is still eligible to be caught. Set false the
// instant any chip resolves the round, so the collision check in the loop
// below stops looking for catches on chips that are about to be frozen
// and removed by finishCatchRound().
let catchRoundActive = false;
// The pending "next round" timer — either the 3-second countdown after a
// round ends (see beginCatchCountdown()) or nothing at all mid-round.
// Cleared by stopCatchGame() so leaving the view can never leave a timer
// armed to silently start a round (and speak a word) while unmounted.
let catchAdvanceTimer = null;

function stopCatchAdvanceTimer() {
  if (catchAdvanceTimer) {
    clearInterval(catchAdvanceTimer);
    catchAdvanceTimer = null;
  }
}

function stopCatchGame() {
  if (catchLoopHandle) {
    cancelAnimationFrame(catchLoopHandle);
    catchLoopHandle = null;
  }
  catchRoundActive = false;
  stopCatchAdvanceTimer();
  stopCatchMusic();
  // Clearing this means wireCatchGameEvents() picks a fresh random
  // background the next time the tab is opened — "the start of each game
  // session" is treated as "each visit to this tab," which gives variety
  // across sessions while a background never changes out from under the
  // player mid-round (see catchGameTemplate()/CATCH_BACKGROUNDS).
  state.game.backgroundId = null;
  stopStartCountdown();
}

// ---------- Catch the Sound: ambient music ----------
// A very quiet, code-synthesized loop via the Web Audio API — no audio
// file, so there's nothing to fetch and nothing to loop-seam: it's a live
// sequence that just keeps scheduling itself for as long as the Catch the
// Sound view is mounted, which is inherently seamless (there's no clip
// boundary to click or pop at).
//
// This replaced an earlier version built from two detuned low
// triangle/square drone tones — reported as sounding "static/haunting"
// rather than pleasant. The redesign swaps that out for a bright C-major
// pad (a plain root+fifth, no dissonant interval) under a soft, bouncy
// four-note major arpeggio played one note at a time on a slow, steady
// pulse — sine waves throughout (no harsh square/triangle overtones to
// filter out), each melody note shaped with a quick soft attack and a
// gentle decay so it reads as a cheerful little "plink" rather than a
// sustained tone. It's still clearly a loop/texture rather than a real
// tune: four notes, one pitch at a time, no variation.
let catchAudioCtx = null;
let catchMusicNodes = null;

// C major pad, an octave+ below the melody so it sits underneath rather
// than competing with it — root and fifth only (no third) to stay simple
// and avoid any muddiness at the very low volume this plays at.
const CATCH_MUSIC_PAD_FREQS = [130.81, 196.0]; // C3, G3
// A bouncy little rise-and-fall in C major, one note every 900ms.
const CATCH_MUSIC_MELODY = [523.25, 659.25, 783.99, 659.25]; // C5, E5, G5, E5
const CATCH_MUSIC_NOTE_INTERVAL_MS = 900;

function ensureCatchAudioCtx() {
  if (catchAudioCtx) return catchAudioCtx;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  catchAudioCtx = new AudioCtx();
  return catchAudioCtx;
}

// Schedules one melody note and, unless the loop has been stopped in the
// meantime (catchMusicNodes cleared by stopCatchMusic()), queues the next
// one — this recursive setTimeout chain *is* the loop; there's no fixed
// "track length" to restart. Each note is its own short-lived oscillator
// (Web Audio oscillators are one-shot — start once, stop once) with its
// own gain envelope, so notes never linger or overlap oddly.
function scheduleCatchMelodyNote(ctx, destination, index) {
  if (!catchMusicNodes) return;
  const freq = CATCH_MUSIC_MELODY[index % CATCH_MUSIC_MELODY.length];
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  osc.type = 'sine';
  osc.frequency.value = freq;
  const noteGain = ctx.createGain();
  noteGain.gain.setValueAtTime(0, now);
  noteGain.gain.linearRampToValueAtTime(0.05, now + 0.08); // soft attack
  noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65); // gentle decay
  osc.connect(noteGain);
  noteGain.connect(destination);
  osc.start(now);
  osc.stop(now + 0.7);
  catchMusicNodes.melodyTimer = setTimeout(() => scheduleCatchMelodyNote(ctx, destination, index + 1), CATCH_MUSIC_NOTE_INTERVAL_MS);
}

function startCatchMusic() {
  if (!state.musicOn || catchMusicNodes) return;
  const ctx = ensureCatchAudioCtx();
  if (!ctx) return;
  if (ctx.state === 'suspended') ctx.resume();

  // `master` only ever handles the fade in/out envelope (0 -> 1 -> 0);
  // the actual loudness of each part (pad vs. melody notes) is set on
  // their own gains below, kept faint enough that this only ever reads as
  // ambience under the "Play a word" pronunciation and any catch effects,
  // never competing with them.
  const master = ctx.createGain();
  master.gain.value = 0;
  master.gain.linearRampToValueAtTime(1, ctx.currentTime + 1.5);
  master.connect(ctx.destination);

  const padFilter = ctx.createBiquadFilter();
  padFilter.type = 'lowpass';
  padFilter.frequency.value = 700;
  padFilter.connect(master);

  const oscillators = CATCH_MUSIC_PAD_FREQS.map((freq) => {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;
    const oscGain = ctx.createGain();
    oscGain.gain.value = 0.018;
    osc.connect(oscGain);
    oscGain.connect(padFilter);
    osc.start();
    return osc;
  });

  catchMusicNodes = { master, oscillators, melodyTimer: null };
  scheduleCatchMelodyNote(ctx, master, 0);
}

function stopCatchMusic() {
  if (!catchMusicNodes || !catchAudioCtx) return;
  const { master, oscillators, melodyTimer } = catchMusicNodes;
  clearTimeout(melodyTimer);
  const ctx = catchAudioCtx;
  const now = ctx.currentTime;
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(master.gain.value, now);
  master.gain.linearRampToValueAtTime(0, now + 0.4);
  setTimeout(() => oscillators.forEach((node) => { try { node.stop(); } catch { /* already stopped */ } }), 500);
  catchMusicNodes = null;
}

// Runs continuously while the Catch the Sound view is mounted (started/
// stopped by wireCatchGameEvents()), independent of whether a round is
// actually in flight — the basket stays responsive to the arrow keys even
// between rounds. Moves/reads the DOM directly rather than through
// state+render() because it has to run at animation-frame rate; rebuilding
// the whole app's innerHTML that often would be wasteful and would
// visibly stutter the basket, the same reasoning as the Reading Activity
// ball (see updateReadingWordHighlight()).
function startCatchLoop() {
  if (catchLoopHandle) return;
  let last = performance.now();
  const tick = (now) => {
    const dt = (now - last) / 1000;
    last = now;
    stepCatchBasket(dt);
    if (catchRoundActive) checkCatchCollisions();
    catchLoopHandle = requestAnimationFrame(tick);
  };
  catchLoopHandle = requestAnimationFrame(tick);
}

function stepCatchBasket(dt) {
  const basket = $('[data-catch-basket]');
  if (!basket) return;
  let pct = state.game.basketPct;
  const delta = CATCH_GAME_CONFIG.basketSpeedPctPerSec * dt;
  if (catchKeys.left) pct -= delta;
  if (catchKeys.right) pct += delta;
  const max = 100 - CATCH_GAME_CONFIG.basketWidthPct;
  pct = Math.max(0, Math.min(max, pct));
  state.game.basketPct = pct;
  basket.style.left = `${pct}%`;
}

function checkCatchCollisions() {
  const basket = $('[data-catch-basket]');
  if (!basket) return;
  const basketRect = basket.getBoundingClientRect();
  document.querySelectorAll('[data-catch-word]').forEach((el) => {
    if (el.dataset.resolved) return;
    const rect = el.getBoundingClientRect();
    const overlapsX = rect.right > basketRect.left && rect.left < basketRect.right;
    const overlapsY = rect.bottom > basketRect.top && rect.top < basketRect.bottom;
    if (overlapsX && overlapsY) resolveCatchWord(el, 'caught');
  });
}

// Handles one falling chip either being caught by the basket or reaching
// the ground (`reason` is 'caught' or 'landed'). A decoy simply landing
// uninterrupted doesn't end the round — the target may still be falling —
// so that's the one case that returns without resolving anything. Every
// other case ends the round: freezes every remaining chip exactly where
// it currently sits (rather than letting an in-flight CSS transition snap
// it straight to its end position) and hands off to finishCatchRound()
// after a short pause so the triggering chip's outcome color is visible.
function resolveCatchWord(el, reason) {
  if (el.dataset.resolved) return;
  el.dataset.resolved = 'true';
  const option = state.game.round.options[Number(el.dataset.index)];
  if (reason === 'landed' && !option.correct) return;

  let outcomeClass, feedback, scoreDelta = 0;
  if (reason === 'caught' && option.correct) {
    scoreDelta = catchGamePoints(option.text);
    outcomeClass = 'is-correct';
    feedback = { kind: 'correct', text: `Caught it! "${option.text}" is right — +${scoreDelta} point${scoreDelta === 1 ? '' : 's'}.` };
  } else if (reason === 'caught') {
    scoreDelta = -CATCH_GAME_CONFIG.wrongCatchPenalty;
    outcomeClass = 'is-wrong';
    feedback = { kind: 'wrong', text: `"${option.text}" isn't the right spelling — that catch cost you ${CATCH_GAME_CONFIG.wrongCatchPenalty} point${CATCH_GAME_CONFIG.wrongCatchPenalty === 1 ? '' : 's'}.` };
  } else {
    outcomeClass = 'is-missed';
    feedback = { kind: 'missed', text: `Missed it — the correct spelling was "${option.text}".` };
  }
  el.classList.add(outcomeClass);
  catchRoundActive = false;
  const field = $('[data-catch-field]');
  const basket = $('[data-catch-basket]');
  const fieldRect = field ? field.getBoundingClientRect() : null;
  document.querySelectorAll('[data-catch-word]').forEach((chip) => {
    if (fieldRect) {
      const chipRect = chip.getBoundingClientRect();
      chip.style.top = `${((chipRect.top - fieldRect.top) / fieldRect.height) * 100}%`;
    }
    chip.style.transition = 'none';
    chip.dataset.resolved = 'true';
  });
  if (reason === 'caught') spawnCatchScorePopup(scoreDelta, basket, field);
  if (outcomeClass === 'is-correct') {
    bounceBasket(basket);
    spawnCatchParticles(basket, field);
  }
  setTimeout(() => finishCatchRound(feedback, scoreDelta), 550);
}

// Restarts the basket's squash-and-bounce animation (see .catch-basket.
// is-catching in CSS) on a successful catch — remove-reflow-readd is the
// same trick positionReadingBall() uses to restart a CSS keyframe
// animation even when the class is already present from a previous catch.
function bounceBasket(basketEl) {
  if (!basketEl) return;
  basketEl.classList.remove('is-catching');
  void basketEl.offsetWidth;
  basketEl.classList.add('is-catching');
}

// A brief radial burst of small sparkles at the basket on a correct catch
// — purely decorative, so the elements are created directly and removed
// on a timeout (mirroring the confetti-piece burst already used for group
// celebrations) rather than being modeled in state/render().
function spawnCatchParticles(basketEl, fieldEl) {
  if (!basketEl || !fieldEl) return;
  const basketRect = basketEl.getBoundingClientRect();
  const fieldRect = fieldEl.getBoundingClientRect();
  const burst = document.createElement('div');
  burst.className = 'catch-particles';
  burst.style.left = `${basketRect.left - fieldRect.left + basketRect.width / 2}px`;
  burst.style.top = `${basketRect.top - fieldRect.top + basketRect.height * 0.3}px`;
  burst.innerHTML = Array.from({ length: 7 }, (_, i) => `<span class="catch-particle" style="--i:${i}"></span>`).join('');
  fieldEl.appendChild(burst);
  setTimeout(() => burst.remove(), 650);
}

// The classic floating "+2"/"-1" score pop-up, shown at the basket the
// instant a chip is actually caught (not on an uncaught miss, which never
// touches the basket at all) — rises and fades on its own CSS animation,
// same disposable-element pattern as spawnCatchParticles() above.
function spawnCatchScorePopup(delta, basketEl, fieldEl) {
  if (!basketEl || !fieldEl || !delta) return;
  const basketRect = basketEl.getBoundingClientRect();
  const fieldRect = fieldEl.getBoundingClientRect();
  const popup = document.createElement('div');
  popup.className = `catch-score-popup ${delta > 0 ? 'is-positive' : 'is-negative'}`;
  popup.textContent = delta > 0 ? `+${delta}` : `${delta}`;
  popup.style.left = `${basketRect.left - fieldRect.left + basketRect.width / 2}px`;
  popup.style.top = `${basketRect.top - fieldRect.top}px`;
  fieldEl.appendChild(popup);
  setTimeout(() => popup.remove(), 900);
}

function finishCatchRound(feedback, scoreDelta) {
  state.game.feedback = feedback;
  state.game.round = null;
  if (scoreDelta !== 0) applyCatchGameScore(scoreDelta);
  else render();
  beginCatchCountdown();
}

// Rounds advance on their own now — no more clicking "Play a word" for
// every single word. This starts (or restarts) the 3-second gap between
// one round ending and the next one's word actually playing, ticking
// state.game.countdown down once a second so catchGameTemplate() can show
// it; playCatchRound() takes over the instant it reaches zero. Also used
// (with the default 3s) the first time the Catch the Sound view is
// mounted, so a fresh visit needs no click either — see
// wireCatchGameEvents().
function beginCatchCountdown(seconds = 3) {
  stopCatchAdvanceTimer();
  state.game.status = 'countdown';
  state.game.countdown = seconds;
  render();
  catchAdvanceTimer = setInterval(() => {
    state.game.countdown -= 1;
    if (state.game.countdown <= 0) {
      stopCatchAdvanceTimer();
      playCatchRound();
    } else {
      render();
    }
  }, 1000);
}

// Applies a score change (positive for a correct catch, negative for the
// wrong-catch penalty — see CATCH_GAME_CONFIG.wrongCatchPenalty) to the
// persisted total, floored at 0 so a string of penalties can't push it
// negative. The moment the running total first *reaches* the badge
// threshold, awards the badge and shows the same celebration toast
// level-completion badges use (see toggleDone()) — they share
// state.celebration/celebrationTimer, which is fine since both are only
// ever triggered by an explicit player action, never concurrently. A
// penalty can never revoke an already-earned badge: awardCatchGame
// BadgeIfEligible() only ever adds state.badges[...], never removes it,
// so once earned it stays earned even if the score later dips back below
// the threshold — matching how level badges behave if a word is toggled
// back to "not known" after its level was already completed.
function applyCatchGameScore(delta) {
  state.gameScore = Math.max(0, state.gameScore + delta);
  writeProgress('catchGameScore', String(state.gameScore));
  if (delta > 0) {
    const badge = awardCatchGameBadgeIfEligible();
    if (badge) {
      clearTimeout(celebrationTimer);
      state.celebration = badge;
      celebrationTimer = setTimeout(() => {
        state.celebration = null;
        render();
      }, 2200);
    }
  }
  render();
}

// Kicks off one round: builds it, renders the shell with every chip
// resting just above the field (see catchWordChipTemplate()), speaks the
// target word aloud, then waits two animation frames before starting the
// fall — one frame to guarantee the browser has painted the chips at
// their starting position, a second to guarantee that paint has actually
// happened, before the transition's end state is applied. Skipping this
// (or using only one frame) risks the browser coalescing both style
// changes into a single paint, which would skip the animation entirely.
function playCatchRound() {
  if (state.game.status === 'playing') return;
  stopCatchAdvanceTimer();
  state.game.round = buildCatchRound();
  state.game.status = 'playing';
  state.game.feedback = null;
  state.game.basketPct = catchBasketCenterPct();
  render();
  speak(state.game.round.target.say || state.game.round.target.word, state.game.round.target.lang || 'en-US');
  requestAnimationFrame(() => requestAnimationFrame(startCatchFall));
}

function startCatchFall() {
  catchRoundActive = true;
  document.querySelectorAll('[data-catch-word]').forEach((el) => {
    el.style.transition = `top ${CATCH_GAME_CONFIG.fallDurationMs}ms linear`;
    el.style.top = '100%';
    el.addEventListener('transitionend', () => resolveCatchWord(el, 'landed'), { once: true });
  });
}

// Rounds now advance on their own (see beginCatchCountdown()/
// finishCatchRound()), so besides the arrow keys this view only has two
// real controls left: the "repeat this word" button and the music mute
// toggle, plus starting/stopping the basket/collision loop and the
// ambient hum for as long as the view is mounted. This is also where a
// fresh visit to the tab gets its background picked and its first round
// kicked off — status is only ever 'idle' (with no round and no advance
// timer already running) right after mount or a Reset, so this can't
// double-fire on every render() while the game is already going.
function wireCatchGameEvents() {
  if (state.view !== 'game') {
    stopCatchGame();
    return;
  }
  const startButton = $('[data-start-game]');
  if (startButton) startButton.onclick = () => beginGameCountdown('game');
  if (!state.catchStarted) return;
  startCatchLoop();
  if (state.musicOn) startCatchMusic();
  if (!state.game.backgroundId) state.game.backgroundId = pickRandomCatchBackground().id;
  if (state.game.status === 'idle' && !state.game.round && !catchAdvanceTimer) playCatchRound();
  const repeatButton = $('[data-catch-repeat]');
  if (repeatButton) {
    repeatButton.onclick = () => {
      const target = state.game.round && state.game.round.target;
      if (target) speak(target.say || target.word, target.lang || 'en-US');
    };
  }
  const musicButton = $('[data-catch-music-toggle]');
  if (musicButton) {
    musicButton.onclick = () => {
      state.musicOn = !state.musicOn;
      localStorage.catchMusicOn = state.musicOn ? 'on' : 'off';
      if (state.musicOn) startCatchMusic();
      else stopCatchMusic();
      render();
    };
  }
}

// ---------- Memory Match (Pelmanism) ----------
// A word/picture matching game, structured the same way Catch the Sound is
// (own tab, own transient round state on `state.memory`, its own badges
// reusing the shared state.badges/badge-shelf/celebration-toast plumbing).
// Every pair is one word-text card + one picture card for the same word,
// drawn only from the long-a group's words that have a real photo (see
// memoryWordPool()) — never the .svg fallback icons, since two SVG cards
// for different words are visually too similar for a fair memory match at
// a glance, where a real photo is not.
// `cols` fixes each level's grid to a clean, balanced rectangle rather than
// however many columns happen to fit the container width: rows*cols always
// equals that level's card count exactly (4x2, 4x3, 4x4, 5x4, 6x4).
// `seconds` starts at 40 on level 1 and adds 15 per level after that — a
// round, steadily-increasing base that scales with each level's extra
// pairs. On top of the base, every correct match adds
// MEMORY_MATCH_TIME_BONUS_SECONDS back to the clock (see flipMemoryCard()),
// so a player who's actually finding matches rarely runs out even at level
// 5's larger board.
const MEMORY_LEVELS = [
  { level: 1, pairs: 4, seconds: 40, cols: 4 },
  { level: 2, pairs: 6, seconds: 55, cols: 4 },
  { level: 3, pairs: 8, seconds: 70, cols: 4 },
  { level: 4, pairs: 10, seconds: 85, cols: 5 },
  { level: 5, pairs: 12, seconds: 100, cols: 6 },
];
const MEMORY_MATCH_TIME_BONUS_SECONDS = 10;

// Only long-a words with a real DALL-E photo (item.image) qualify — a word
// still on the .svg fallback is skipped entirely rather than mixed in, so
// every card in the game is a photo. See wordCardPic() for the same
// image-over-svg precedence used everywhere else in the app.
function memoryWordPool() {
  return wordsInSoundGroup('long-a').filter((word) => word.image);
}

// Builds one level's face-down board: `pairCount` random words from the
// pool, each turned into a { word card, image card } pair, all shuffled
// together so word/image cards never sit predictably next to each other.
// Levels mix across every word-length tier rather than sticking to one
// (unlike the Learn tab's tier-locked levels) — memoryWordPool() already
// pools every long-a word regardless of length, and this draws randomly
// from the whole thing.
function buildMemoryCards(pairCount) {
  const chosen = shuffle(memoryWordPool()).slice(0, pairCount);
  const cards = chosen.flatMap((word) => [
    { pairId: word.word, kind: 'word', content: word.word, matched: false },
    { pairId: word.word, kind: 'image', content: word.image, matched: false },
  ]);
  return shuffle(cards).map((card, index) => ({ ...card, index }));
}

// One badge per level (memory-match::1 .. memory-match::5), plus a single
// bigger "master" badge for finishing every level — same id/storage
// convention as the sound-group level badges (badgeId()/badgeForLevel())
// and Catch the Sound's fixed-id badge (CATCH_GAME_BADGE_ID), just scoped
// to this game instead of a sound group.
const MEMORY_BADGE_PREFIX = 'memory-match';
const MEMORY_MASTER_BADGE_ID = `${MEMORY_BADGE_PREFIX}::master`;

function memoryBadgeId(level) {
  return `${MEMORY_BADGE_PREFIX}::${level}`;
}

function memoryBadgeForLevel(level) {
  const colors = badgeColor(level, MEMORY_LEVELS.length);
  return {
    id: memoryBadgeId(level),
    label: `Memory Match ${level}`,
    affirmation: badgeAffirmation(level),
    color: colors.base,
    colorLight: colors.light,
  };
}

// A warm gold, distinct from the cool-to-hot per-level sweep (badgeColor())
// so the "finished everything" badge reads as a different tier of
// achievement, not just "level 6".
function memoryMasterBadge() {
  return {
    id: MEMORY_MASTER_BADGE_ID,
    label: 'Memory Match Champion',
    affirmation: 'You matched every level!',
    color: 'hsl(42 88% 48%)',
    colorLight: 'hsl(42 88% 88%)',
  };
}

function awardMemoryBadgeIfEligible(level) {
  const id = memoryBadgeId(level);
  if (state.badges[id]) return null;
  state.badges[id] = { earnedAt: Date.now() };
  writeProgress('badgesPhonics', JSON.stringify(state.badges));
  return memoryBadgeForLevel(level);
}

function awardMemoryMasterBadgeIfEligible() {
  if (state.badges[MEMORY_MASTER_BADGE_ID]) return null;
  state.badges[MEMORY_MASTER_BADGE_ID] = { earnedAt: Date.now() };
  writeProgress('badgesPhonics', JSON.stringify(state.badges));
  return memoryMasterBadge();
}

let memoryTimer = null;
let memoryAdvanceTimer = null;

function stopMemoryTimer() {
  if (memoryTimer) {
    clearInterval(memoryTimer);
    memoryTimer = null;
  }
}

function stopMemoryAdvanceTimer() {
  if (memoryAdvanceTimer) {
    clearTimeout(memoryAdvanceTimer);
    memoryAdvanceTimer = null;
  }
}

function stopMemoryGame() {
  stopMemoryTimer();
  stopMemoryAdvanceTimer();
  clearTimeout(memoryTimeBonusTimer);
  stopStartCountdown();
}

function startMemoryTimer() {
  stopMemoryTimer();
  memoryTimer = setInterval(() => {
    state.memory.secondsLeft -= 1;
    if (state.memory.secondsLeft <= 0) {
      stopMemoryTimer();
      loseMemoryLevel();
    } else {
      render();
    }
  }, 1000);
}

// Starts (or restarts) one level with a fresh random word set — used both
// for advancing to the next level on a win and retrying the same level on
// a loss (see winMemoryLevel()/loseMemoryLevel()), and for jumping to any
// level from the "all levels complete" replay screen.
function startMemoryLevel(level) {
  const config = MEMORY_LEVELS.find((entry) => entry.level === level);
  if (!config) return;
  stopMemoryGame();
  state.memory = {
    status: 'playing',
    level,
    cols: config.cols,
    cards: buildMemoryCards(config.pairs),
    flipped: [],
    lock: false,
    matchedPairs: 0,
    totalPairs: config.pairs,
    secondsLeft: config.seconds,
    timeBonusFlash: false,
  };
  render();
  startMemoryTimer();
}

// All pairs matched before time ran out. Awards this level's badge through
// the same celebration-toast plumbing toggleDone()/applyCatchGameScore()
// use, then auto-advances to the next level after a short pause — or,
// after level 5, awards the master badge and sets state.memoryFinale to
// trigger the full-screen finale overlay (see memoryFinaleTemplate())
// instead of advancing. state.memory.status is deliberately left as 'won'
// in that case (not reset to 'idle') so the board sitting behind the
// finale overlay reads as "you just won this", and so
// wireMemoryGameEvents()'s idle-check doesn't quietly spin up a new board
// underneath the overlay.
function winMemoryLevel() {
  stopMemoryTimer();
  const level = state.memory.level;
  state.memory.status = 'won';
  const isFinalLevel = level === MEMORY_LEVELS[MEMORY_LEVELS.length - 1].level;
  const levelBadge = awardMemoryBadgeIfEligible(level);
  if (levelBadge) {
    clearTimeout(celebrationTimer);
    state.celebration = levelBadge;
    celebrationTimer = setTimeout(() => {
      state.celebration = null;
      render();
    }, 2200);
  }
  render();
  memoryAdvanceTimer = setTimeout(() => {
    if (isFinalLevel) {
      state.memoryFinale = awardMemoryMasterBadgeIfEligible() || memoryMasterBadge();
      render();
    } else {
      startMemoryLevel(level + 1);
    }
  }, 2400);
}

// Timer hit zero before every pair was matched — retry the exact same
// level (same pair count/timer) with a freshly drawn random word set.
function loseMemoryLevel() {
  state.memory.status = 'lost';
  render();
  memoryAdvanceTimer = setTimeout(() => startMemoryLevel(state.memory.level), 2200);
}

// Briefly shows a "+10s" flash next to the big timer on a correct match
// (see memoryTimerTemplate()). Since render() always rebuilds the whole
// #app innerHTML rather than diffing, a plain disposable DOM element
// (the pattern spawnCatchScorePopup() uses) would just get wiped out by
// the very next render() before its animation ever painted. Driving it
// through state instead means the popup element is part of the template
// itself — freshly created each render, so its CSS animation always plays
// from the start — and this timer is what clears the flag (and renders
// again) once the animation has had time to finish.
let memoryTimeBonusTimer = null;

function flashMemoryTimeBonus() {
  clearTimeout(memoryTimeBonusTimer);
  state.memory.timeBonusFlash = true;
  memoryTimeBonusTimer = setTimeout(() => {
    state.memory.timeBonusFlash = false;
    render();
  }, 900);
}

// Flips one card. The third click of a turn is naturally impossible: `lock`
// is set the instant a second card is flipped and only cleared once that
// turn's match/mismatch has been resolved, so at most two cards are ever
// face-up at once.
function flipMemoryCard(index) {
  const m = state.memory;
  if (m.status !== 'playing' || m.lock) return;
  const card = m.cards[index];
  if (!card || card.matched || m.flipped.includes(index)) return;
  m.flipped.push(index);
  render();
  if (m.flipped.length < 2) return;

  m.lock = true;
  const [firstIndex, secondIndex] = m.flipped;
  const first = m.cards[firstIndex];
  const second = m.cards[secondIndex];
  const isMatch = first.pairId === second.pairId && first.kind !== second.kind;

  if (isMatch) {
    setTimeout(() => {
      first.matched = true;
      second.matched = true;
      m.flipped = [];
      m.lock = false;
      m.matchedPairs += 1;
      m.secondsLeft += MEMORY_MATCH_TIME_BONUS_SECONDS;
      flashMemoryTimeBonus();
      if (m.matchedPairs === m.totalPairs) {
        winMemoryLevel();
      } else {
        render();
      }
    }, 500);
  } else {
    setTimeout(() => {
      m.flipped = [];
      m.lock = false;
      render();
    }, 900);
  }
}

function memoryCardTemplate(card) {
  const m = state.memory;
  const faceUp = card.matched || m.flipped.includes(card.index);
  const label = card.kind === 'word' ? `Word card: ${card.content}` : `Picture card for ${card.pairId}`;
  return `<button type="button" class="memory-card ${faceUp ? 'is-flipped' : ''} ${card.matched ? 'is-matched' : ''}" data-memory-card="${card.index}" ${faceUp ? 'disabled' : ''} aria-label="${faceUp ? escapeHtml(label) : 'Face-down card'}" aria-pressed="${faceUp}">
    <span class="memory-card-inner">
      <span class="memory-card-face memory-card-back" aria-hidden="true">
        <span class="memory-card-logo">soundlinks</span>
      </span>
      <span class="memory-card-face memory-card-front">
        ${card.kind === 'word'
          ? `<span class="memory-card-word">${escapeHtml(card.content)}</span>`
          : `<img class="memory-card-image" src="${escapeHtml(card.content)}" alt="" loading="lazy">`}
      </span>
    </span>
  </button>`;
}

function memoryStatusTemplate() {
  const m = state.memory;
  const label = m.status === 'won' ? 'Level complete!' : m.status === 'lost' ? "Time's up!" : `Level ${m.level} of ${MEMORY_LEVELS.length}`;
  return `<div class="memory-status-group">
    <span class="memory-status-badge ${m.status === 'won' ? 'is-won' : m.status === 'lost' ? 'is-lost' : ''}">${icon('cards')}${escapeHtml(label)}</span>
    <span class="memory-pairs">${m.matchedPairs}/${m.totalPairs} pairs</span>
  </div>`;
}

// The countdown gets its own large, standalone display — not a small pill
// buried next to the level label — since it's the thing a player needs to
// track at a glance while their eyes are on the card grid. `timeBonusFlash`
// drives the "+10s" popup awarded on every correct match (see
// flashMemoryTimeBonus()); it's rendered here, as part of the template,
// rather than injected as a one-off DOM node, because render() rebuilds
// the whole #app innerHTML on every call and would otherwise wipe out a
// directly-inserted element before its animation ever painted.
function memoryTimerTemplate() {
  const m = state.memory;
  const urgent = m.status === 'playing' && m.secondsLeft <= 8;
  return `<div class="memory-timer-display ${urgent ? 'is-urgent' : ''}">
    <span class="memory-timer-icon">${icon('bolt')}</span>
    <span class="memory-timer-value">${Math.max(0, m.secondsLeft)}</span>
    <span class="memory-timer-unit">sec</span>
    ${m.timeBonusFlash ? `<span class="memory-time-bonus-popup">+${MEMORY_MATCH_TIME_BONUS_SECONDS}s</span>` : ''}
  </div>`;
}

function memoryGameTemplate() {
  if (state.startCountdown && state.startCountdown.view === 'memory') return gameStartCountdownTemplate();
  if (!state.memoryStarted) return gameStartPromptTemplate();
  const m = state.memory;
  return `<section class="memory-game">
    <div class="memory-game-top">
      ${memoryStatusTemplate()}
      ${memoryTimerTemplate()}
    </div>
    <div class="memory-grid" data-memory-grid style="--memory-cols:${m.cols || 4}">${m.cards.map(memoryCardTemplate).join('')}</div>
    <p class="memory-feedback ${m.status === 'won' ? 'is-correct' : m.status === 'lost' ? 'is-wrong' : ''}" aria-live="polite">
      ${m.status === 'won' ? 'Great matching! Next level starting…' : m.status === 'lost' ? "Time's up — let's try that level again…" : 'Flip two cards: match a word to its picture.'}
    </p>
  </section>`;
}

// The grand finale for finishing every level — a full-screen fixed overlay
// (same mechanism groupCelebrationTemplate() uses), rendered at the top
// level of render() rather than inside memoryGameTemplate() so it isn't
// tied to the memory view still being mounted. Deliberately bigger and
// more dramatic than that group-completion screen too (an XL medal, a
// larger confetti burst, its own springier scale-in) so finishing all 5
// levels reads as a distinctly bigger moment than a single level's badge
// toast. There's no backdrop-click-to-dismiss here on purpose — only the
// explicit close (X) button and the replay-level buttons dismiss it, so an
// excited player tapping around the confetti doesn't accidentally skip
// past their own reward screen.
function memoryFinaleTemplate() {
  if (!state.memoryFinale) return '';
  const badge = state.memoryFinale;
  const confetti = Array.from({ length: 28 }, (_, i) => `<span class="confetti-piece" style="--i:${i}"></span>`).join('');
  return `<div class="memory-finale-overlay" role="dialog" aria-label="All Memory Match levels complete">
    <div class="memory-finale-confetti" aria-hidden="true">${confetti}</div>
    <button class="memory-finale-close" data-dismiss-memory-finale aria-label="Close">${icon('close')}</button>
    <div class="memory-finale-panel">
      ${celebrationAvatarTemplate('md')}
      ${badgeMedalTemplate(badge, { size: 'xl' })}
      <p class="memory-finale-kicker">Champion!</p>
      <h2>All 5 levels complete!</h2>
      <p>${escapeHtml(badge.affirmation)} You matched every pair across every level — pick one below to play again.</p>
      <div class="memory-replay-levels">
        ${MEMORY_LEVELS.map((entry) => `<button type="button" data-memory-finale-replay-level="${entry.level}">${icon('cards')}Level ${entry.level}</button>`).join('')}
      </div>
    </div>
  </div>`;
}

function dismissMemoryFinale() {
  state.memoryFinale = null;
  render();
}

// The Memory Match badges, shown alongside every sound group's badge row
// in the shelf even though they aren't tied to a sound group/level (same
// pattern as catchGameBadgeShelfSectionTemplate() below it).
function memoryBadgeShelfSectionTemplate() {
  const levelBadges = MEMORY_LEVELS.map((entry) => memoryBadgeForLevel(entry.level));
  const master = memoryMasterBadge();
  return `<section class="badge-shelf-group">
    <h3>Memory Match</h3>
    <div class="badge-shelf-grid">
      ${[...levelBadges, master].map((badge) => {
        const earned = !!state.badges[badge.id];
        return `<div class="badge-shelf-item ${earned ? '' : 'is-locked'}">
          ${badgeMedalTemplate(badge, { size: 'md', earned })}
          <span class="badge-shelf-item-label">${escapeHtml(badge.label)}</span>
          <span class="badge-shelf-item-affirmation">${earned ? escapeHtml(badge.affirmation) : 'Not yet earned'}</span>
        </div>`;
      }).join('')}
    </div>
  </section>`;
}

// The Roll and Read badge, shown alongside every sound group's badge row
// in the shelf even though it isn't tied to a sound group/level (same
// pattern as catchGameBadgeShelfSectionTemplate() above).
function rollReadBadgeShelfSectionTemplate() {
  const levelBadges = ROLL_READ_LEVELS.map((entry) => rollReadBadgeForLevel(entry.level));
  const master = rollReadMasterBadge();
  return `<section class="badge-shelf-group">
    <h3>Roll and Read</h3>
    <div class="badge-shelf-grid">
      ${[...levelBadges, master].map((badge) => {
        const earned = !!state.badges[badge.id];
        return `<div class="badge-shelf-item ${earned ? '' : 'is-locked'}">
          ${badgeMedalTemplate(badge, { size: 'md', earned })}
          <span class="badge-shelf-item-label">${escapeHtml(badge.label)}</span>
          <span class="badge-shelf-item-affirmation">${earned ? escapeHtml(badge.affirmation) : 'Not yet earned'}</span>
        </div>`;
      }).join('')}
    </div>
  </section>`;
}

// This view only has the card grid as a real control besides its own
// per-level replay buttons, plus starting the timer/first level for as
// long as the view is mounted — status is only ever 'idle' right after
// mount or a Reset, so this can't double-fire on every render() while a
// level is already in progress.
function wireMemoryGameEvents() {
  if (state.view !== 'memory') {
    stopMemoryGame();
    return;
  }
  const startButton = $('[data-start-game]');
  if (startButton) startButton.onclick = () => beginGameCountdown('memory');
  if (!state.memoryStarted) return;
  if (state.memory.status === 'idle') startMemoryLevel(state.memory.level || 1);
  document.querySelectorAll('[data-memory-card]').forEach((button) => button.onclick = () => flipMemoryCard(Number(button.dataset.memoryCard)));
}

// ---------- Profile picker screen ----------
// The Netflix-style "Who's practicing today?" gate — shown instead of the
// normal app whenever state.showProfilePicker is true (see render()).
// `select` mode is a grid of existing profile tiles plus an "Add profile"
// tile; `add` mode swaps in a name field + avatar grid. Both stay inside
// one full-screen section so switching between them is just a render(),
// no separate overlay/dismiss plumbing to manage.
function profilePickerTemplate() {
  return `<section class="profile-picker">
    <div class="profile-picker-panel">
      ${state.profilePickerMode === 'add' ? addProfileScreenTemplate() : selectProfileScreenTemplate()}
    </div>
  </section>`;
}

function profileTileTemplate(profile) {
  const avatar = avatarById(profile.avatarId);
  return `<button class="profile-tile" data-select-profile="${escapeHtml(profile.id)}">
    <span class="profile-tile-avatar"><img src="${avatarSrc(avatar)}" alt=""></span>
    <span class="profile-tile-name">${escapeHtml(profile.name)}</span>
  </button>`;
}

function selectProfileScreenTemplate() {
  const profiles = getProfiles();
  return `<h1 class="profile-picker-title">Who's practicing today?</h1>
    <div class="profile-picker-grid">
      ${profiles.map(profileTileTemplate).join('')}
      <button class="profile-tile profile-tile-add" data-add-profile>
        <span class="profile-tile-avatar profile-tile-avatar-add">${icon('plus')}</span>
        <span class="profile-tile-name">Add profile</span>
      </button>
    </div>`;
}

function avatarTileTemplate(avatar) {
  const selected = state.newProfileAvatarId === avatar.id;
  return `<button type="button" class="avatar-tile ${selected ? 'is-selected' : ''}" data-select-avatar="${avatar.id}" role="radio" aria-checked="${selected}" aria-label="${escapeHtml(avatar.label)}">
    <img src="${avatarSrc(avatar)}" alt="">
  </button>`;
}

function addProfileScreenTemplate() {
  const canCancel = getProfiles().length > 0;
  return `<h1 class="profile-picker-title">Add a profile</h1>
    <label class="profile-name-field">
      <span>Name</span>
      <input type="text" data-profile-name-input value="${escapeHtml(state.newProfileName)}" placeholder="Enter a name" maxlength="24">
    </label>
    <div class="profile-avatar-grid" role="radiogroup" aria-label="Choose an avatar">
      ${AVATARS.map(avatarTileTemplate).join('')}
    </div>
    ${state.profilePickerError ? `<p class="profile-picker-error">${icon('alert')}${escapeHtml(state.profilePickerError)}</p>` : ''}
    <div class="profile-picker-actions">
      ${canCancel ? `<button type="button" class="profile-picker-cancel" data-cancel-add-profile>${icon('close')}Cancel</button>` : ''}
      <button type="button" class="profile-picker-save" data-save-profile>${icon('check')}Create profile</button>
    </div>`;
}

function renderProfilePicker() {
  document.body.className = `${state.big ? 'big' : ''} ${state.contrast ? 'contrast' : ''} ${state.dyslexia ? 'dyslexia' : ''}`;
  $('#app').innerHTML = profilePickerTemplate();
  wireProfilePickerEvents();
}

function wireProfilePickerEvents() {
  document.querySelectorAll('[data-select-profile]').forEach((button) => button.onclick = () => selectProfile(button.dataset.selectProfile));
  const addButton = $('[data-add-profile]');
  if (addButton) addButton.onclick = () => {
    state.profilePickerMode = 'add';
    state.newProfileName = '';
    state.newProfileAvatarId = randomAvatarId();
    state.profilePickerError = '';
    render();
  };
  const cancelButton = $('[data-cancel-add-profile]');
  if (cancelButton) cancelButton.onclick = () => { state.profilePickerMode = 'select'; render(); };
  const nameInput = $('[data-profile-name-input]');
  if (nameInput) {
    nameInput.focus();
    nameInput.selectionStart = nameInput.selectionEnd = nameInput.value.length;
    nameInput.oninput = (event) => { state.newProfileName = event.target.value; };
    nameInput.onkeydown = (event) => { if (event.key === 'Enter') createProfile(); };
  }
  document.querySelectorAll('[data-select-avatar]').forEach((button) => button.onclick = () => {
    state.newProfileAvatarId = button.dataset.selectAvatar;
    render();
  });
  const saveButton = $('[data-save-profile]');
  if (saveButton) saveButton.onclick = () => createProfile();
}

// The Fun Zone dropdown's contents — rendered as a fixed-position sibling
// of .tabs (not a descendant), positioned via JS right after the DOM is
// built (see the funZoneToggle wiring below), because .tabs has
// overflow-x: auto — and per the CSS overflow spec, setting only one axis
// to a scrolling value forces the other axis to compute as auto too, so
// any absolutely-positioned dropdown nested inside .tabs would get
// silently clipped the moment it extends past the tab row's own height.
function funZoneMenuTemplate() {
  return `<div class="fun-zone-menu" id="funZoneMenu" role="menu">
    <button data-view="game" role="menuitem" class="${state.view === 'game' ? 'active' : ''}">${icon('basket')}Catch the Sound</button>
    <button data-view="memory" role="menuitem" class="${state.view === 'memory' ? 'active' : ''}">${icon('cards')}Memory Match</button>
    <button data-view="rollread" role="menuitem" class="${state.view === 'rollread' ? 'active' : ''}">${icon('dice')}Roll and Read</button>
    <button data-view="wordinvaders" role="menuitem" class="${state.view === 'wordinvaders' ? 'active' : ''}">${icon('bolt')}Word Invaders</button>
  </div>`;
}

function render() {
  if (state.showProfilePicker) {
    renderProfilePicker();
    return;
  }
  normalizeSelection();
  const activeWords = WORDS.filter((word) => !word.archived);
  const score = activeWords.filter((word) => state.done[word.word]).length;
  const pct = activeWords.length ? Math.round((score / activeWords.length) * 100) : 0;
  const isFunZoneView = ['game', 'memory', 'rollread', 'wordinvaders'].includes(state.view);
  document.body.className = `${state.big ? 'big' : ''} ${state.contrast ? 'contrast' : ''} ${state.dyslexia ? 'dyslexia' : ''}`;
  $('#app').innerHTML = `
    <div class="header-widgets">
      ${profileAvatarButtonTemplate()}
      ${badgeShelfWidgetTemplate()}
    </div>
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
        <button data-view="rules" role="tab" aria-selected="${state.view === 'rules'}" class="tab-rules ${state.view === 'rules' ? 'active' : ''}">${icon('eye')}Rules</button>
        <button data-view="learn" role="tab" aria-selected="${state.view === 'learn'}" class="${state.view === 'learn' ? 'active' : ''}">${icon('book')}Learn words</button>
        <button data-view="practice" role="tab" aria-selected="${state.view === 'practice'}" class="tab-practice ${state.view === 'practice' ? 'active' : ''}">${icon('mic')}Sound Practice</button>
        <button class="fun-zone-toggle ${isFunZoneView ? 'active' : ''} ${state.funZoneOpen ? 'is-open' : ''}" data-fun-zone-toggle type="button" aria-haspopup="true" aria-expanded="${state.funZoneOpen}">
          ${icon('play')}Fun Zone<span class="fun-zone-caret" aria-hidden="true">${icon('chevron')}</span>
        </button>
      </div>
      <div class="controls-bar">
        <label>Voice <select data-voice aria-label="Choose text to speech voice"><option value="female">Female voice</option><option value="male">Male voice</option></select></label>
        <button data-big class="${state.big ? 'is-on' : ''}">${icon('textSize')}Large text</button>
        <button data-contrast class="${state.contrast ? 'is-on' : ''}">${icon('contrast')}High contrast</button>
        <button data-dyslexia class="${state.dyslexia ? 'is-on' : ''}">${icon('dyslexia')}Dyslexia-friendly mode</button>
        <button data-reset>${icon('reset')}Reset</button>
      </div>
    </nav>
    ${state.funZoneOpen ? funZoneMenuTemplate() : ''}
    ${state.admin ? adminBannerTemplate() : ''}
    <section class="instructions">
      <div class="instructions-header">
        <h2>How to use / طريقة الاستخدام</h2>
        ${GAME_INSTRUCTIONS[state.view] ? instructionsLangToggleTemplate() : ''}
      </div>
      ${instructionsTemplate()}
    </section>
    <div class="app-layout ${state.view === 'learn' ? 'has-sidebar' : ''}">
      ${state.view === 'learn' ? sidebarTemplate() : ''}
      <div class="app-main">${state.view === 'learn' ? learnTemplate() : state.view === 'rules' ? rulesTemplate() : state.view === 'game' ? catchGameTemplate() : state.view === 'memory' ? memoryGameTemplate() : state.view === 'rollread' ? rollReadGameTemplate() : state.view === 'wordinvaders' ? wordInvadersGameTemplate() : practiceTemplate()}</div>
    </div>
    ${state.adminAvailable ? `<footer class="app-footer">
      <button class="admin-toggle-btn" data-admin-toggle aria-label="Toggle admin mode"></button>
    </footer>` : ''}
    ${state.admin && state.showArchived ? archivedPanelTemplate() : ''}
    ${state.admin && state.editingWord ? editModalTemplate() : ''}
    ${celebrationTemplate()}
    ${groupCelebrationTemplate()}
    ${memoryFinaleTemplate()}
    ${rollReadFinaleTemplate()}
    ${wordInvadersFinaleTemplate()}
    ${badgeShelfTemplate()}`;
  $('[data-voice]').value = state.voiceMode;
  document.querySelectorAll('[data-view]').forEach((button) => button.onclick = () => {
    stopReadingPlayback();
    stopRollReadGame();
    stopCatchGame();
    stopMemoryGame();
    stopWordInvadersGame();
    state.reading.playing = false;
    state.reading.activeWordIndex = -1;
    state.funZoneOpen = false;
    setState('view', button.dataset.view);
  });
  const funZoneToggle = $('[data-fun-zone-toggle]');
  if (funZoneToggle) {
    funZoneToggle.onclick = () => {
      state.funZoneOpen = !state.funZoneOpen;
      render();
    };
    const funZoneMenuEl = $('#funZoneMenu');
    if (funZoneMenuEl) {
      // Positioned here (not in CSS) because the menu is now a fixed-
      // position sibling of .tabs rather than a descendant — see
      // funZoneMenuTemplate()'s comment for why. getBoundingClientRect()
      // forces a synchronous layout, so this reads real, current
      // coordinates even though innerHTML was just replaced above.
      const rect = funZoneToggle.getBoundingClientRect();
      funZoneMenuEl.style.top = `${rect.bottom + 8}px`;
      funZoneMenuEl.style.left = `${rect.left}px`;
    }
  }
  $('[data-big]').onclick = () => setState('big', !state.big);
  $('[data-contrast]').onclick = () => setState('contrast', !state.contrast);
  $('[data-dyslexia]').onclick = () => setState('dyslexia', !state.dyslexia);
  const switchProfileButton = $('[data-switch-profile]');
  if (switchProfileButton) switchProfileButton.onclick = () => {
    stopReadingPlayback();
    stopRollReadGame();
    stopCatchGame();
    stopMemoryGame();
    stopWordInvadersGame();
    openProfilePicker();
  };
  $('[data-reset]').onclick = () => {
    state.done = {};
    state.badges = {};
    state.gameScore = 0;
    stopCatchAdvanceTimer();
    state.game = { status: 'idle', round: null, basketPct: catchBasketCenterPct(), feedback: null, countdown: 0, backgroundId: state.game.backgroundId };
    state.catchStarted = false;
    stopMemoryGame();
    state.memory = { status: 'idle', level: 1, cols: 4, cards: [], flipped: [], lock: false, matchedPairs: 0, totalPairs: 0, secondsLeft: 0, timeBonusFlash: false };
    state.memoryFinale = null;
    state.memoryStarted = false;
    stopRollReadGame();
    state.rollRead = { status: 'idle', level: 1, words: [], rows: 0, cols: 0, dieValue: null, targetWord: null, feedback: null, roundsWon: 0, roundsToWin: 0, secondsLeft: 0, timeBonusFlash: false };
    state.rollReadFinale = null;
    state.rollReadStarted = false;
    stopWordInvadersGame();
    state.wordInvaders = { status: 'idle', level: 1, round: 1, wordIndex: 0, roundWords: [], currentWord: null, lives: 3, score: 0, scoreFlash: false, shipPct: 50, feedback: null };
    state.wordInvadersFinale = null;
    state.wordInvadersStarted = false;
    stopStartCountdown();
    removeProgress('donePhonics');
    removeProgress('badgesPhonics');
    removeProgress('catchGameScore');
    render();
  };
  $('[data-voice]').onchange = (event) => setState('voiceMode', event.target.value);
  document.querySelectorAll('[data-instructions-lang]').forEach((button) => button.onclick = () => {
    state.instructionsLang = button.dataset.instructionsLang;
    localStorage.instructionsLang = state.instructionsLang;
    render();
  });
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
    stopReadingPlayback();
    state.soundGroup = groupId;
    state.level = level;
    state.expandedGroups[groupId] = true;
    state.reading.index = 0;
    state.reading.playing = false;
    state.reading.activeWordIndex = -1;
    render();
  });
  $('[data-badge-shelf-open]').onclick = () => { state.badgeShelfOpen = true; render(); };
  document.querySelectorAll('[data-close-badge-shelf]').forEach((button) => button.onclick = () => { state.badgeShelfOpen = false; render(); });
  document.querySelectorAll('[data-badge-shelf-overlay]').forEach((overlay) => overlay.onclick = (event) => { if (event.target === overlay) { state.badgeShelfOpen = false; render(); } });
  const celebrationToast = $('[data-dismiss-celebration]');
  if (celebrationToast) celebrationToast.onclick = () => dismissCelebration();
  document.querySelectorAll('[data-dismiss-group-celebration]').forEach((el) => el.onclick = () => dismissGroupCelebration());
  document.querySelectorAll('[data-dismiss-memory-finale]').forEach((el) => el.onclick = () => dismissMemoryFinale());
  document.querySelectorAll('[data-memory-finale-replay-level]').forEach((el) => el.onclick = () => {
    state.memoryFinale = null;
    startMemoryLevel(Number(el.dataset.memoryFinaleReplayLevel));
  });
  document.querySelectorAll('[data-dismiss-roll-read-finale]').forEach((el) => el.onclick = () => dismissRollReadFinale());
  document.querySelectorAll('[data-roll-read-finale-replay-level]').forEach((el) => el.onclick = () => {
    state.rollReadFinale = null;
    startRollReadLevel(Number(el.dataset.rollReadFinaleReplayLevel));
  });
  document.querySelectorAll('[data-dismiss-word-invaders-finale]').forEach((el) => el.onclick = () => dismissWordInvadersFinale());
  document.querySelectorAll('[data-word-invaders-finale-replay-level]').forEach((el) => el.onclick = () => {
    state.wordInvadersFinale = null;
    startWordInvadersLevel(Number(el.dataset.wordInvadersFinaleReplayLevel));
  });
  wireAdminEvents();
  wireReadingEvents();
  wireCatchGameEvents();
  wireMemoryGameEvents();
  wireRollReadTabEvents();
  wireWordInvadersTabEvents();
}

render();
checkAdminAvailability();

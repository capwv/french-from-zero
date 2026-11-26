/* Lab content (data). Runs in the browser. */
(function(){
var tools=[
 {
  "id": "order",
  "kind": "order",
  "title": "🧩 رتّب الجملة",
  "desc": "اضغط الكلمات بالترتيب الصح عشان تكوّن الجملة الفرنسية. تقدر تسمع الجملة بعد الحل.",
  "mission": "ترتيب الجمل",
  "items": [
   { "ar": "أنا اسمي أحمد.", "words": ["Je","m'appelle","Ahmed"], "why": "Je m'appelle Ahmed." },
   { "ar": "أنا من مصر.", "words": ["Je","suis","d'Égypte"], "why": "Je suis d'Égypte." },
   { "ar": "إنت ساكن فين؟", "words": ["Où","habites","-","tu"], "why": "Où habites-tu؟ كلمة السؤال + الفعل + الضمير." },
   { "ar": "هي بتتكلم فرنسي كويس.", "words": ["Elle","parle","bien","français"], "why": "Elle parle bien français." },
   { "ar": "أنا أكلت فول.", "words": ["J'ai","mangé","du","foul"], "why": "Passé composé: ai + mangé." },
   { "ar": "إحنا بنروح السينما.", "words": ["Nous","allons","au","cinéma"], "why": "Nous allons au cinéma." },
   { "ar": "أنا بذاكر عشان عايز أدرس في فرنسا.", "words": ["J'étudie","parce","que","je","veux","étudier","en","France"], "why": "بعد parce que الجملة عادية." },
   { "ar": "لو كان معايا فلوس، كنت سافرت.", "words": ["Si","j'avais","de","l'argent",",","je","voyagerais"], "why": "Si + imparfait + conditionnel = شرطية." },
   { "ar": "القهوة اللي بحبها تقيلة.", "words": ["Le","café","que","j'aime","est","fort"], "why": "que = اللي (مفعول)." },
   { "ar": "لازم تيجي.", "words": ["Il","faut","que","tu","viennes"], "why": "Il faut que + subjonctif." }
  ]
 },
 {
  "id": "gram",
  "kind": "choice",
  "title": "⚙️ اختار الجرامر الصح",
  "desc": "كل سؤال فيه جملة ناقصة، اختار الكلمة الصح.",
  "mission": "الجرامر",
  "items": [
   { "q": "Je ___ étudiant. (être)", "options": ["suis","es","est","sommes"], "answer": 0, "why": "je suis = أنا أكون." },
   { "q": "Tu ___ au Caire ? (aller)", "options": ["vais","vas","va","allez"], "answer": 1, "why": "tu vas = إنت رايح." },
   { "q": "Elle ___ une voiture. (avoir)", "options": ["ai","as","a","ont"], "answer": 2, "why": "elle a = عندها." },
   { "q": "Nous ___ français. (parler)", "options": ["parle","parles","parlons","parlent"], "answer": 2, "why": "nous parlons = إحنا بنتكلم." },
   { "q": "Je ne ___ pas français. (parler)", "options": ["parle","parles","parlons","parlent"], "answer": 0, "why": "je ne parle pas = مش بتكلم." },
   { "q": "J'ai ___ du café. (boire, passé composé)", "options": ["boiré","boi","bu","buvé"], "answer": 2, "why": "boire → bu (شاذ)." },
   { "q": "Je ___ au marché hier. (aller, passé composé)", "options": ["ai allé","suis allé","vais","allais"], "answer": 1, "why": "aller بياخد être: Je suis allé." },
   { "q": "Il faut que tu ___. (venir, subjonctif)", "options": ["viens","viennes","viendra","venais"], "answer": 1, "why": "subjonctif: viennes." }
  ]
 },
 {
  "id": "vocab",
  "kind": "choice",
  "title": "📚 اختار المفردات الصح",
  "desc": "كل سؤال فيه كلمة فرنسية، اختار معناها بالعربي.",
  "mission": "المفردات",
  "items": [
   { "q": "le café", "options": ["الشاي","القهوة","العصير","المية"], "answer": 1, "why": "café = قهوة." },
   { "q": "la voiture", "options": ["الطيارة","العربية","العجلة","المركب"], "answer": 1, "why": "voiture = عربية." },
   { "q": "le travail", "options": ["الشغل","اللعب","النوم","الأكل"], "answer": 0, "why": "travail = شغل." },
   { "q": "la maison", "options": ["المدرسة","البيت","المحل","الشارع"], "answer": 1, "why": "maison = بيت." },
   { "q": "le livre", "options": ["الكتاب","القلم","الورقة","المكتب"], "answer": 0, "why": "livre = كتاب." },
   { "q": "la gare", "options": ["المطار","المحطة","الميناء","الشارع"], "answer": 1, "why": "gare = محطة قطار." },
   { "q": "le pain", "options": ["الجبنة","العيش","الزبدة","اللحم"], "answer": 1, "why": "pain = عيش." },
   { "q": "l'ami", "options": ["العدو","الصاحب","الأخ","الأب"], "answer": 1, "why": "ami = صاحب." }
  ]
 },
 {
  "id": "num",
  "kind": "choice",
  "title": "🔢 اختار الرقم الصح",
  "desc": "كل سؤال فيه رقم بالفرنسي، اختار الرقم الصح.",
  "mission": "الأرقام",
  "items": [
   { "q": "soixante-dix", "options": ["60","70","80","90"], "answer": 1, "why": "soixante-dix = 60+10 = 70." },
   { "q": "quatre-vingts", "options": ["40","60","80","100"], "answer": 2, "why": "quatre-vingts = 4×20 = 80." },
   { "q": "quatre-vingt-dix", "options": ["80","90","100","110"], "answer": 1, "why": "quatre-vingt-dix = 4×20+10 = 90." },
   { "q": "trente-cinq", "options": ["25","30","35","45"], "answer": 2, "why": "trente-cinq = 30+5 = 35." },
   { "q": "Il est huit heures et demie", "options": ["8:00","8:15","8:30","8:45"], "answer": 2, "why": "et demie = ونص: 8:30." },
   { "q": "Il est neuf heures moins le quart", "options": ["9:15","8:45","9:00","8:30"], "answer": 1, "why": "moins le quart = إلا ربع: 8:45." },
   { "q": "le premier mai", "options": ["أول مايو","2 مايو","31 مايو","آخر مايو"], "answer": 0, "why": "premier = الأول: أول مايو." }
  ]
 }
];
window.LAB_DEF={slug:"french-from-zero",tools:tools};
})();

/* Level A1 skills: listening, reading, writing, speaking (French) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "a1-listen",
 "level": "A1",
 "skill": "listening",
 "nav": "استماع: التعارف",
 "title": "🎧 استماع: أول محادثة تعارف بالفرنسي",
 "subtitle": "اسمع محادثة بسيطة بين شخصين بيتعرفوا على بعض",
 "blocks": [
  { "type": "p", "text": "دي أول محادثة استماع ليك بالفرنسي. القاعدة: اسمع الأول من غير ما تقرأ، حاول تلقط الكلمات اللي تعرفها. بعدين اسمع تاني مع القراءة." },
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "Bonjour ! Je m'appelle Omar. Et toi ?", "ar": "أهلاً! أنا اسمي عمر. وإنتي؟" },
   { "who": "Sara", "en": "Salut Omar, je suis Sara. Enchantée !", "ar": "أهلاً يا عمر، أنا سارة. تشرفنا!" },
   { "who": "Omar", "en": "Enchanté, Sara. Tu es d'où ?", "ar": "تشرفنا يا سارة. إنتي منين؟" },
   { "who": "Sara", "en": "Je suis d'Assiout. Et toi ?", "ar": "أنا من أسيوط. وإنت؟" },
   { "who": "Omar", "en": "Je suis du Caire. Tu fais quoi dans la vie ?", "ar": "أنا من القاهرة. بتعملي إيه في الحياة؟" },
   { "who": "Sara", "en": "Je suis étudiante en commerce. Et toi ?", "ar": "أنا طالبة تجارة. وإنت؟" },
   { "who": "Omar", "en": "Je travaille dans une banque. Tu as quel âge ?", "ar": "أنا شغال في بنك. عندك كام سنة؟" },
   { "who": "Sara", "en": "J'ai vingt ans. Et toi ?", "ar": "عندي 20 سنة. وإنت؟" },
   { "who": "Omar", "en": "J'ai vingt-deux ans. Tu parles français ?", "ar": "عندي 22 سنة. بتتكلمي فرنسي؟" },
   { "who": "Sara", "en": "Un peu. J'apprends le français à l'université.", "ar": "شوية. بتعلم فرنسي في الجامعة." }
  ]},
  { "type": "h", "text": "اسمع وركز" },
  { "type": "list", "items": [
   "اسمع المحادثة مرة من غير ما تقرأ الترجمة.",
   "حاول تلقط: الأسماء، المدن، السن، الشغل.",
   "اسمع تاني وقارن بالنص.",
   "اسمع تالت وردد معاهم بصوت عالي."
  ]},
  { "type": "speak", "en": "Bonjour, je m'appelle Omar. Je suis du Caire. J'ai vingt-deux ans. Je travaille dans une banque.", "ar": "أهلاً، أنا اسمي عمر. أنا من القاهرة. عندي 22 سنة. شغال في بنك." }
 ],
 "quiz": [
  { "q": "سارة منين؟", "options": [{ "text": "القاهرة" }, { "text": "أسيوط" }, { "text": "فرنسا" }, { "text": "الإسكندرية" }], "answer": 1, "explain": "قالت: Je suis d'Assiout." },
  { "q": "عمر بيشتغل إيه؟", "options": [{ "text": "طالب" }, { "text": "في بنك" }, { "text": "دكتور" }, { "text": "مدرس" }], "answer": 1, "explain": "Je travaille dans une banque = شغال في بنك." },
  { "q": "`Enchantée` معناها؟", "options": [{ "text": "مع السلامة" }, { "text": "تشرفنا" }, { "text": "متشكرة" }, { "text": "صباح الخير" }], "answer": 1, "explain": "بتتقال لما تتعرف على حد: فرحت بيك." },
  { "q": "سارة بتذاكر إيه؟", "options": [{ "text": "طب" }, { "text": "هندسة" }, { "text": "تجارة" }, { "text": "حقوق" }], "answer": 2, "explain": "Je suis étudiante en commerce = طالبة تجارة." },
  { "q": "`Tu as quel âge ?` معناها؟", "options": [{ "text": "إنت اسمك إيه؟" }, { "text": "عندك كام سنة؟" }, { "text": "إنت منين؟" }, { "text": "بتشتغل إيه؟" }], "answer": 1, "explain": "avoir + âge = السن. Quel âge = كام سنة." },
  { "q": "سارة عندها كام سنة؟", "options": [{ "text": "١٨" }, { "text": "٢٠" }, { "text": "٢٢" }, { "text": "٢٥" }], "answer": 1, "explain": "vingt = عشرين." }
 ],
 "exercises": [
  { "task": "اسمع المحادثة 3 مرات: مرة من غير نص، مرة مع النص، ومرة ردد معاهم.", "hint": "ركز على نطق Enchanté و Je m'appelle.", "code": "اسمع، افهم، ردد.", "why": "التكرار هو مفتاح الاستماع." },
  { "task": "اكتب 3 أسئلة ممكن تسألها لأي حد بيتعرف عليك بالفرنسي.", "hint": "اسمه، منين، بيعمل إيه.", "code": "Comment tu t'appelles ? Tu es d'où ? Tu fais quoi dans la vie ?", "why": "دي أول 3 أسئلة في أي تعارف." }
 ]
},
{
 "id": "a1-read",
 "level": "A1",
 "skill": "reading",
 "nav": "قراءة: يوم ليلى",
 "title": "📖 قراءة: يوم ليلى",
 "subtitle": "اقرا قصة قصيرة عن يوم عادي في حياة طالبة فرنسية",
 "blocks": [
  { "type": "p", "text": "ليلى طالبة فرنسية في جامعة القاهرة. هنقرا عن يومها العادي. اقرأ النص مرة بسرعة للفكرة العامة، وبعدين مرة ببطء للتفاصيل." },
  { "type": "p", "text": "Leïla est étudiante à l'université du Caire. Elle habite avec sa famille à Maadi. Le matin, elle se réveille à sept heures. Elle prend le petit-déjeuner avec sa mère : du pain, du fromage et du café. Ensuite, elle prend le métro pour aller à l'université. Les cours commencent à neuf heures et finissent à trois heures de l'après-midi. Le soir, elle rentre à la maison, elle fait ses devoirs, elle regarde un peu la télé et elle se couche à onze heures.", "ar": "ليلى طالبة في جامعة القاهرة. ساكنة مع عيلتها في المعادي. الصبح بتصحى الساعة 7. بتتفطر مع ماما: عيش وجبنة وقهوة. بعدين بتاخد المترو عشان تروح الجامعة. المحاضرات بتبدأ الساعة 9 وبتخلص الساعة 3 الضهر. بالليل بترجع البيت، بتعمل واجبها، بتتفرج شوية على التلفزيون وبتمشي تنام الساعة 11." },
  { "type": "h", "text": "كلمات مفيدة من النص" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["le petit-déjeuner", "الفطار"],
   ["le métro", "المترو"],
   ["les cours", "المحاضرات"],
   ["rentrer", "يرجع"],
   ["les devoirs", "الواجب"],
   ["se coucher", "ينام"]
  ]},
  { "type": "ex", "task": "اقرأ النص مرة بسرعة ومرة ببطء، وبعدين جاوب: ليلى بتصحى الساعة كام؟", "hint": "شوف السطر التاني.", "code": "Elle se réveille à sept heures. = بتصحى الساعة 7.", "why": "القراءة السريعة للفكرة والبطيئة للتفاصيل." }
 ],
 "quiz": [
  { "q": "ليلى ساكنة فين؟", "options": [{ "text": "القاهرة" }, { "text": "المعادي" }, { "text": "أسيوط" }, { "text": "فرنسا" }], "answer": 1, "explain": "Elle habite à Maadi = ساكنة في المعادي." },
  { "q": "بتتفطر مع مين؟", "options": [{ "text": "صاحبتها" }, { "text": "أخوها" }, { "text": "ماما" }, { "text": "بابا" }], "answer": 2, "explain": "avec sa mère = مع ماما." },
  { "q": "المحاضرات بتخلص الساعة كام؟", "options": [{ "text": "٩" }, { "text": "٣" }, { "text": "٥" }, { "text": "١١" }], "answer": 1, "explain": "finissent à trois heures = بتخلص الساعة 3." },
  { "q": "بتروح الجامعة إزاي؟", "options": [{ "text": "ماشي" }, { "text": "بالعربية" }, { "text": "بالأوتوبيس" }, { "text": "بالمترو" }], "answer": 3, "explain": "elle prend le métro = بتاخد المترو." },
  { "q": "بتنام الساعة كام؟", "options": [{ "text": "٩" }, { "text": "١٠" }, { "text": "١١" }, { "text": "١٢" }], "answer": 2, "explain": "elle se couche à onze heures = بتنام الساعة 11." },
  { "q": "`le petit-déjeuner` معناها؟", "options": [{ "text": "الغدا" }, { "text": "الفطار" }, { "text": "العشا" }, { "text": "القهوة" }], "answer": 1, "explain": "petit = صغير، déjeuner = غدا. الفطار هو الغدا الصغير." }
 ],
 "exercises": [
  { "task": "اكتب 3 جمل عن يومك العادي بالفرنسي.", "hint": "Je me réveille à... Je prends... Je rentre...", "code": "Je me réveille à sept heures. Je prends le petit-déjeuner. Je rentre à la maison le soir.", "why": "الكتابة عن يومك بتثبت المفردات الجديدة." },
  { "task": "لخص يوم ليلى في جملتين بالعربي.", "hint": "الصبح والظهر والليل.", "code": "ليلى بتصحى بدري، بتاخد المترو للجامعة، وبترجع تنام بالليل.", "why": "التلخيص بيثبت الفهم." }
 ]
},
{
 "id": "a1-write",
 "level": "A1",
 "skill": "writing",
 "nav": "كتابة: قدم نفسك",
 "title": "✍️ كتابة: قدم نفسك",
 "subtitle": "اكتب أول براجراف تعارف بالفرنسي",
 "blocks": [
  { "type": "p", "text": "الكتابة في A1 بسيطة: جمل قصيرة ومباشرة عن نفسك. الهدف إنك تكتب 5-6 جمل مترابطة من غير أخطاء في التصريف أو الأدوات." },
  { "type": "h", "text": "النموذج" },
  { "type": "p", "text": "Bonjour, je m'appelle Ahmed. Je suis égyptien et j'ai vingt ans. J'habite à Assiout avec ma famille. Je suis étudiant en commerce à l'université. J'aime le café et le foot. Je parle arabe et un peu français. Enchanté !", "ar": "أهلاً، أنا اسمي أحمد. أنا مصري وعندي 20 سنة. ساكن في أسيوط مع عيلتي. أنا طالب تجارة في الجامعة. بحب القهوة والكورة. بتكلم عربي وشوية فرنسي. تشرفنا!" },
  { "type": "h", "text": "الهيكل" },
  { "type": "list", "items": [
   "الجملة 1: السلام والاسم (Je m'appelle...).",
   "الجملة 2: الجنسية والسن (Je suis... et j'ai... ans).",
   "الجملة 3: السكن (J'habite à...).",
   "الجملة 4: الشغل أو الدراسة (Je suis étudiant / Je travaille...).",
   "الجملة 5: الهوايات (J'aime...).",
   "الجملة 6: اللغات أو الختام (Je parle... / Enchanté !)."
  ]},
  { "type": "ex", "task": "اكتب براجراف تعارف عن نفسك في 6 جمل بالفرنسي.", "hint": "اتبع الهيكل فوق.", "code": "Bonjour, je m'appelle... Je suis... J'habite à... Je suis étudiant en... J'aime... Je parle...", "why": "البراجراف ده هو أول حاجة هتكتبها في أي امتحان أو تعارف رسمي." }
 ],
 "quiz": [
  { "q": "أول جملة في التعارف؟", "options": [{ "text": "الهوايات" }, { "text": "السلام والاسم" }, { "text": "السن" }, { "text": "السكن" }], "answer": 1, "explain": "ابدأ بالسلام والاسم: Bonjour, je m'appelle..." },
  { "q": "`J'ai vingt ans` معناها؟", "options": [{ "text": "عندي 20 كتاب" }, { "text": "أنا 20 سنة" }, { "text": "عايز 20" }, { "text": "شفت 20" }], "answer": 1, "explain": "avoir + ans = السن." },
  { "q": "أي جملة صح؟", "options": [{ "text": "Je suis égyptienne." }, { "text": "Je suis égyptien." }, { "text": "Je suis Égypte." }, { "text": "J'habite égyptien." }], "answer": 1, "explain": "المذكر: égyptien. المؤنث: égyptienne." },
  { "q": "`J'habite à Assiout avec ma famille` معناها؟", "options": [{ "text": "أنا بحب أسيوط" }, { "text": "أنا ساكن في أسيوط مع عيلتي" }, { "text": "أنا رايح أسيوط" }, { "text": "أنا من أسيوط" }], "answer": 1, "explain": "habiter = يسكن. avec = مع." },
  { "q": "الجملة الأخيرة في التعارف؟", "options": [{ "text": "Au revoir !" }, { "text": "Enchanté !" }, { "text": "Merci !" }, { "text": "Bonjour !" }], "answer": 1, "explain": "Enchanté = تشرفنا. بتتقال في نهاية التعارف." },
  { "q": "`Je parle arabe et un peu français` معناها؟", "options": [{ "text": "بتكلم عربي وشوية فرنسي" }, { "text": "بتكلم فرنسي كويس" }, { "text": "مش بتكلم فرنسي" }, { "text": "بتكلم عربي بس" }], "answer": 0, "explain": "un peu = شوية." }
 ],
 "exercises": [
  { "task": "اكتب براجراف تعارف عن نفسك في 6 جمل.", "hint": "اتبع الهيكل: سلام، اسم، جنسية، سن، سكن، دراسة، هوايات.", "code": "Bonjour, je m'appelle Ahmed. Je suis égyptien et j'ai vingt ans. J'habite à Assiout. Je suis étudiant en commerce. J'aime le café. Je parle arabe et un peu français. Enchanté !", "why": "البراجراف ده هو أساس أي تعارف مكتوب." },
  { "task": "صحح الغلط في البراجراف: `Je m'appelle Ahmed. Je suis égyptienne.`", "hint": "أحمد مذكر ولا مؤنث؟", "code": "Je m'appelle Ahmed. Je suis égyptien.", "why": "الجنس لازم يتوافق مع الشخص: أحمد = égyptien." }
 ]
},
{
 "id": "a1-speak",
 "level": "A1",
 "skill": "speaking",
 "nav": "كلام: قدم نفسك بصوتك",
 "title": "🗣️ كلام: قدم نفسك بصوتك",
 "subtitle": "قول براجراف التعارف بصوت عالي بالفرنسي",
 "blocks": [
  { "type": "p", "text": "الكلام هو أهم مهارة وأسهل مهارة تتجاهلها. الهدف هنا بسيط: تقول براجراف التعارف اللي كتبته بصوت عالي، من غير ما تقرأ، بنطق فرنسي صح." },
  { "type": "h", "text": "النص اللي هتقوله" },
  { "type": "speak", "en": "Bonjour, je m'appelle Ahmed. Je suis égyptien et j'ai vingt ans. J'habite à Assiout avec ma famille. Je suis étudiant en commerce. J'aime le café et le foot. Je parle arabe et un peu français. Enchanté !", "ar": "أهلاً، أنا اسمي أحمد. أنا مصري وعندي 20 سنة. ساكن في أسيوط مع عيلتي. أنا طالب تجارة. بحب القهوة والكورة. بتكلم عربي وشوية فرنسي. تشرفنا!" },
  { "type": "h", "text": "نصايح للنطق" },
  { "type": "list", "items": [
   "ركز على الـ r الفرنسي (من الحلق): français, Assiout, commerce.",
   "الحروف الساكنة الأخيرة ساكتة: vingt = ڤان (الـ t ساكتة)، beaucoup = بوكو.",
   "الـ u في français و étudiant: شفايفك مدورة ولسانك قدام.",
   "قول بصوت عالي 3 مرات: مرة بطيء، مرة طبيعي، مرة من غير ورقة."
  ]},
  { "type": "ex", "task": "قول براجراف التعارف بصوت عالي 3 مرات.", "hint": "ابدأ بطيء، وبعدين طبيعي، وبعدين من غير ما تبص.", "code": "قول بصوتك: Bonjour, je m'appelle...", "why": "الكلام بصوت عالي هو الطريقة الوحيدة للتقدم في النطق." }
 ],
 "quiz": [
  { "q": "أهم حاجة في النطق الفرنسي؟", "options": [{ "text": "السرعة" }, { "text": "الحروف الساكنة الأخيرة ساكتة" }, { "text": "الصوت العالي" }, { "text": "الإنجليزي" }], "answer": 1, "explain": "الحروف الساكنة الأخيرة ساكتة = أهم قاعدة نطق." },
  { "q": "`vingt` بتتنطق إزاي؟", "options": [{ "text": "ڤينجت" }, { "text": "ڤان" }, { "text": "ڤينت" }, { "text": "ڤانك" }], "answer": 1, "explain": "الـ t ساكتة: vingt = ڤان." },
  { "q": "الـ u في français بتتنطق إزاي؟", "options": [{ "text": "أو" }, { "text": "إي مدورة" }, { "text": "يو" }, { "text": "أ" }], "answer": 1, "explain": "u الفرنسي = بين إي وأو: français = فرانسيه تقريباً." },
  { "q": "كام مرة لازم تقول النص؟", "options": [{ "text": "مرة واحدة" }, { "text": "3 مرات" }, { "text": "10 مرات" }, { "text": "مش مهم" }], "answer": 1, "explain": "3 مرات: بطيء، طبيعي، من غير ورقة." },
  { "q": "`Enchanté` بتتقال امتى؟", "options": [{ "text": "في البداية" }, { "text": "في النهاية" }, { "text": "في النص" }, { "text": "أي وقت" }], "answer": 1, "explain": "بتتقال في نهاية التعارف: تشرفنا." },
  { "q": "أفضل طريقة للتقدم في النطق؟", "options": [{ "text": "القراءة بصمت" }, { "text": "الكلام بصوت عالي" }, { "text": "الاستماع بس" }, { "text": "الكتابة" }], "answer": 1, "explain": "الكلام بصوت عالي هو الطريقة الوحيدة." }
 ],
 "exercises": [
  { "task": "سجل صوتك وانت بتقول البراجراف وقارنه بالنطق الصح.", "hint": "استخدم زرار 🔊 في الصفحة عشان تسمع النطق.", "code": "سجل، اسمع، قارن، صحح.", "why": "التسجيل بيخليك تسمع أخطاءك بنفسك." },
  { "task": "علم حد من صحابك يقول براجراف التعارف.", "hint": "أحسن طريقة للتثبيت هي التعليم.", "code": "علم صاحبك: Bonjour, je m'appelle...", "why": "لما تعلم حد، المعلومة بتثبت عندك." }
 ]
}
);

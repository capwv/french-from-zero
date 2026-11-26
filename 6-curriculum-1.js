/* French From Zero — curriculum part 1 (A1 core) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "fr1",
 "level": "A1",
 "skill": "core",
 "nav": "الحروف والنطق",
 "title": "📚 الحروف والنطق الفرنسي",
 "subtitle": "الأبجدية الفرنسية وقواعد النطق اللي هتخليك تقرا أي كلمة صح",
 "blocks": [
  { "type": "p", "text": "الفرنسي مش زي الإنجليزي: هو منتظم، بس بطريقته هو. الحروف الساكنة في آخر الكلمة غالبًا مش بتتنطق، وفيه أصوات أنفية مش موجودة عندنا. الخبر الحلو؟ لو حفظت القواعد دي، هتقري أي كلمة فرنسي صح من أول مرة." },
  { "type": "h", "text": "الأبجدية والعلامات" },
  { "type": "p", "text": "الفرنسي بيستخدم نفس الـ 26 حرف اللاتيني، وفوقهم علامات (accents) بتغير النطق أو المعنى. العلامات دي مش تجميل، دي جزء من الحرف." },
  { "type": "table", "head": ["الحرف", "اسمه", "انطقه إزاي"], "rows": [
   ["É é", "إيه", "زي إيه مقفولة حادة: café = قهوة"],
   ["È è / Ê ê", "إيه مفتوحة", "زي ايه عريضة: mère = أم، fête = حفلة"],
   ["À à / Â â", "آه", "زي أ: là = هناك، pâte = عجينة"],
   ["Ç ç", "إس", "س قبل a و o و u: français = فرنسي"],
   ["Î î / Ï ï / Ô ô / Ù ù / Û û", "نفس الحرف", "العلامة بتفرق في الإملاء بس غالبًا: hôtel = فندق"]
  ]},
  { "type": "note", "text": "العلامة ë و ï (نقطتين) معناها انطق الحرفين منفصلين: Noël = نو-إل (عيد الميلاد)، مش نول." },
  { "type": "h", "text": "أهم قاعدة: الحروف الساكنة الأخيرة ساكتة" },
  { "type": "list", "items": [
   "آخر حرف في الكلمة غالبًا مش بيتنطق: `Paris` = باري (الـ s ساكتة)، `grand` = جران (الـ d ساكتة).",
   "الـ e الأخيرة ساكتة برضه: `table` = تابل، `porte` = بورت (باب).",
   "استثناء مهم: حروف C و R و F و L غالبًا بتتنطق في الآخر: `avec` = أڤيك (مع)، `mer` = مير (بحر)، `neuf` = نوف (تسعة)، `il` = إيل.",
   "افتكرها بكلمة CaReFuL: C-R-F-L هم اللي بينطقوا في الآخر."
  ]},
  { "type": "h", "text": "الأصوات الأنفية" },
  { "type": "p", "text": "الأصوات دي مش موجودة في العربي، بتطلع من الأنف. لما تشوف n أو m بعد متحرك في نفس المقطع، متنطقش الـ n، انطق المتحرك من مناخيرك." },
  { "type": "table", "head": ["الكتابة", "النطق", "مثال"], "rows": [
   ["an / en", "آن (من الأنف)", "maman = ماما، vent = هوا"],
   ["on", "أون (من الأنف)", "bonjour = بونجور، non = لا"],
   ["in / ain / ein", "آن خفيف", "vin = ڤان (نبيت)، pain = بان (عيش)"],
   ["un", "أن أنفي", "un = واحد، parfum = برفان"]
  ]},
  { "type": "h", "text": "قواعد نطق سريعة لازم تحفظها" },
  { "type": "list", "items": [
   "`ou` = أو: `vous` = ڤو (حضرتك)، `jour` = جور (يوم).",
   "`u` = صوت بين إي وأو (شفايفك مدورة ولسانك قدام): `tu` = تي، `sur` = سور. دي أصعب حاجة للعربي، هتيجي بالتدريب.",
   "`oi` = وا: `moi` = موا (أنا)، `toi` = توا.",
   "`au` و `eau` = أو: `beau` = بو (جميل)، `château` = شاتو (قلعة).",
   "`ch` = ش: `chat` = شا (قط)، `cher` = شير (غالي).",
   "`gn` = ني: `montagne` = مونتاني (جبل)، `Espagne` = إسباني.",
   "`ill` بعد متحرك = ي: `fille` = فيي (بنت)، `travail` = تراڤاي (شغل).",
   "`j` = ج بالفرنسي (زي الجيم المصرية): `je` = جه (أنا)، `jamais` = جاميه (أبدًا).",
   "`r` الفرنسي بتطلع من الحلق زي الغين تقريبًا: `Paris` = باغي تقريبًا، `rue` = غي (شارع).",
   "`s` بين متحركين = ز: `maison` = ميزون (بيت)، `rose` = روز (وردة)."
  ]},
  { "type": "ex", "task": "قول الكلمات دي بصوت عالي: bonjour, merci, Paris, France, croissant.", "hint": "ركز على الـ r الحلقية والأنفة في bon و croiSSANT.", "code": "بون-جور، مير-سي، با-غي، فرانس، كروا-سون (الـ t في croissant ساكتة).", "why": "دي أكتر 5 كلمات فرنسية شهيرة، لو نطقتهم صح كسبت نص المعركة." }
 ]
,
 "quiz": [
  { "q": "حرف الـ w في الفرنسي بيتنطق إيه غالبًا؟", "options": [{ "text": "و" }, { "text": "ڤ" }, { "text": "ب" }, { "text": "م" }], "answer": 1, "explain": "الـ w في الفرنسي = ڤ زي الألماني: wagon = ڤاجون." },
  { "q": "كلمة `beaucoup` (كتير) آخرها بينطق إزاي؟", "options": [{ "text": "بوكوپ" }, { "text": "بوكو" }, { "text": "بوكوت" }, { "text": "بوشو" }], "answer": 1, "explain": "الـ p الأخيرة ساكتة: beaucoup = بوكو." },
  { "q": "العلامة في `é` بتخلي الحرف يتنطق؟", "options": [{ "text": "إيه مقفولة" }, { "text": "آه" }, { "text": "أو" }, { "text": "ساكت" }], "answer": 0, "explain": "é = إيه حادة مقفولة زي café." },
  { "q": "`ch` في الفرنسي بتتنطق؟", "options": [{ "text": "تش" }, { "text": "ك" }, { "text": "ش" }, { "text": "خ" }], "answer": 2, "explain": "ch = ش: chat = شا، cher = شير." },
  { "q": "كلمة `vin` (نبيت) بتتنطق إزاي؟", "options": [{ "text": "ڤين" }, { "text": "ڤان (من الأنف)" }, { "text": "ڤون" }, { "text": "ڤاي" }], "answer": 1, "explain": "in = صوت أنفي، الـ n مش بتتنطق لوحدها." },
  { "q": "أي حروف بتتنطق في آخر الكلمة غالبًا؟", "options": [{ "text": "S و T و D" }, { "text": "C و R و F و L" }, { "text": "كل الحروف" }, { "text": "ولا حرف" }], "answer": 1, "explain": "CaReFuL: C-R-F-L هما اللي بينطقوا: avec, mer, neuf, il." }
 ],
 "exercises": [
  { "task": "اكتب 5 كلمات فرنسية آخرها حرف ساكن ساكت وانطقهم.", "hint": "افتكر beaucoup و Paris و grand.", "code": "beaucoup (بوكو), Paris (باغي), grand (جران), petit (بوتي), trop (ترو = كتير/أوى).", "why": "القاعدة دي بتحكم 80% من نطق الفرنسي." },
  { "task": "فرّق بالنطق بين `ou` و `u` في: vous و vu.", "hint": "شفايفك في الاتنين مدورة، الفرق في مكان اللسان.", "code": "vous = ڤو (لسان ورا)، vu = ڤي مدورة (لسان قدام).", "why": "الفرق بين ou و u بيغير المعنى: dessus (فوق) و dessous (تحت) مثلًا." }
 ]
},
{
 "id": "fr2",
 "level": "A1",
 "skill": "core",
 "nav": "التحيات والتعارف",
 "title": "👋 التحيات والتعارف",
 "subtitle": "أول محادثة فرنسية في حياتك: السلام، الاسم، والجنسية",
 "blocks": [
  { "type": "p", "text": "بعد ما عرفت النطق، تعالى نتكلم. الدرس ده هيخليك تعمل أول محادثة تعارف كاملة بالفرنسي: تسلم، تقول اسمك، تسأل الطرف التاني، وتقول إنت منين وبتعمل إيه." },
  { "type": "h", "text": "التحيات" },
  { "type": "table", "head": ["الفرنسي", "النطق", "المعنى"], "rows": [
   ["Bonjour", "بونجور", "صباح الخير / أهلاً (طول النهار)"],
   ["Bonsoir", "بونسوار", "مساء الخير"],
   ["Salut", "سالي", "أهلاً (بين صحاب) وكمان مع السلامة"],
   ["Ça va ?", "سا ڤا؟", "عامل إيه؟ — والرد: Ça va, merci"],
   ["Enchanté(e)", "أنشانتيه", "تشرفنا (لما تتعرف على حد)"],
   ["Merci (beaucoup)", "ميرسي (بوكو)", "متشكر (جداً)"],
   ["S'il vous plaît", "سيل ڤو بليه", "لو سمحت (رسمي) — S'il te plaît بين صحاب"],
   ["Au revoir", "أو رڤوار", "مع السلامة"],
   ["À bientôt / À demain", "أ بيانتو / أ دومان", "أشوفك قريب / بكرة"]
  ]},
  { "type": "note", "text": "الفرنساويين بيحبوا bonjour جداً. ادخل أي محل أو كافيه وقول Bonjour الأول، من غيرها هتلاقي الناس رسمية معاك. دي ثقافة مش مجاملة." },
  { "type": "h", "text": "تعريف نفسك" },
  { "type": "list", "items": [
   "`Je m'appelle Omar.` = أنا اسمي عمر. (حرفياً: أنا بنادي نفسي عمر)",
   "`Je suis Sara.` = أنا سارة.",
   "`Je suis égyptien / égyptienne.` = أنا مصري / مصرية. لاحظ الـ -enne زيادة للمؤنث.",
   "`J'habite à Assiout.` = أنا ساكن في أسيوط.",
   "`Je suis étudiant(e) en commerce.` = أنا طالب/طالبة في تجارة.",
   "`Et toi ?` = وإنت؟ (للصحاب) — `Et vous ?` = وحضرتك؟ (رسمي)"
  ]},
  { "type": "h", "text": "فعل être (يكون) — أهم فعل في اللغة" },
  { "type": "table", "head": ["الضمير", "être", "مثال"], "rows": [
   ["je (أنا)", "suis", "Je suis étudiant. = أنا طالب"],
   ["tu (إنتَ/إنتِ للصحاب)", "es", "Tu es égyptien ? = إنت مصري؟"],
   ["il/elle (هو/هي)", "est", "Elle est professeure. = هي مدرسة"],
   ["nous (إحنا)", "sommes", "Nous sommes amis. = إحنا أصحاب"],
   ["vous (حضرتك/حضرتكم)", "êtes", "Vous êtes d'où ? = حضرتك منين؟"],
   ["ils/elles (هم)", "sont", "Ils sont étudiants. = هم طلبة"]
  ]},
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "Bonjour ! Je m'appelle Omar. Et toi ?", "ar": "أهلاً! أنا اسمي عمر. وإنتي؟" },
   { "who": "Sara", "en": "Salut Omar, je suis Sara. Enchantée !", "ar": "أهلاً يا عمر، أنا سارة. تشرفنا!" },
   { "who": "Omar", "en": "Enchanté, Sara. Tu es d'où ?", "ar": "تشرفنا يا سارة. إنتي منين؟" },
   { "who": "Sara", "en": "Je suis d'Assiout. Et toi ?", "ar": "أنا من أسيوط. وإنت؟" },
   { "who": "Omar", "en": "Je suis du Caire. Tu fais quoi dans la vie ?", "ar": "أنا من القاهرة. بتعملي إيه في الحياة؟" },
   { "who": "Sara", "en": "Je suis étudiante en commerce. Et toi ?", "ar": "أنا طالبة تجارة. وإنت؟" },
   { "who": "Omar", "en": "Je travaille dans une banque.", "ar": "أنا شغال في بنك." }
  ]},
  { "type": "speak", "en": "Bonjour, je m'appelle Omar. Je suis égyptien, j'habite au Caire. Enchanté !", "ar": "أهلاً، أنا اسمي عمر. أنا مصري، ساكن في القاهرة. تشرفنا!" },
  { "type": "ex", "task": "قدم نفسك بالفرنسي في 4 جمل: اسمك، جنسيتك، ساكن فين، وبتعمل إيه.", "hint": "Je m'appelle... Je suis... J'habite à... Je suis étudiant / Je travaille...", "code": "Je m'appelle Ahmed. Je suis égyptien. J'habite à Assiout. Je suis étudiant.", "why": "دي أول 4 جمل هتقولهم لأي حد بيتعرف عليك بالفرنسي." }
 ]
,
 "quiz": [
  { "q": "`Bonsoir` معناها؟", "options": [{ "text": "صباح الخير" }, { "text": "مساء الخير" }, { "text": "مع السلامة" }, { "text": "متشكر" }], "answer": 1, "explain": "bon = كويس/حلو، soir = مساء. زي Bonjour بس للمساء." },
  { "q": "عايز تقول `أنا اسمي عمر`؟", "options": [{ "text": "Je suis Omar." }, { "text": "Je m'appelle Omar." }, { "text": "J'habite Omar." }, { "text": "Je suis d'Omar." }], "answer": 1, "explain": "Je m'appelle = أنا اسمي. Je suis Omar صح برضه بس أقل شيوعاً." },
  { "q": "الفرق بين tu و vous؟", "options": [{ "text": "مفيش فرق" }, { "text": "tu للمفرد المذكر بس" }, { "text": "tu للصحاب و vous للاحترام والجمع" }, { "text": "vous للصحاب بس" }], "answer": 2, "explain": "tu = إنت بين الصحاب. vous = حضرتك (رسمي) أو حضرتكم (جمع)." },
  { "q": "بنت مصرية هتقول؟", "options": [{ "text": "Je suis égyptien." }, { "text": "Je suis égyptienne." }, { "text": "Je suis Égypte." }, { "text": "J'habite égyptienne." }], "answer": 1, "explain": "المؤنث بيزود -enne: égyptien → égyptienne." },
  { "q": "`J'habite à Assiout` معناها؟", "options": [{ "text": "أنا بحب أسيوط" }, { "text": "أنا رايح أسيوط" }, { "text": "أنا ساكن في أسيوط" }, { "text": "أنا من أسيوط" }], "answer": 2, "explain": "habiter = يسكن. à + اسم المدينة." },
  { "q": "مع vous فعل être بيبقى؟", "options": [{ "text": "es" }, { "text": "est" }, { "text": "êtes" }, { "text": "sont" }], "answer": 2, "explain": "Vous êtes = حضرتك/حضرتكم تكون." }
 ],
 "exercises": [
  { "task": "اكتب محادثة تعارف من 6 سطور بينك وبين شخص فرنسي.", "hint": "سلم، قول اسمك، اسأله، قول إنت منين، وودعه.", "code": "Bonjour ! Je m'appelle Ahmed. Et vous ? — Je suis Pierre. Enchanté. — Enchanté. Vous êtes d'où ? — Je suis de Paris. Et vous ? — Je suis d'Assiout. Au revoir !", "why": "المحادثة دي هي أول حاجة بتتقال في امتحانات الكلام A1." },
  { "task": "صحح الغلط: `Je suis étudiant en le commerce.`", "hint": "التخصصات بعد en مش بتاخد le.", "code": "Je suis étudiant en commerce.", "why": "en + تخصص من غير أداة: en médecine, en droit, en informatique." }
 ]
},
{
 "id": "fr3",
 "level": "A1",
 "skill": "core",
 "nav": "الأسئلة والنفي",
 "title": "❓ الأسئلة والنفي",
 "subtitle": "اسأل أي سؤال بالفرنسي وانفي أي جملة بطريقة صح",
 "blocks": [
  { "type": "p", "text": "السؤال والنفي هما أداة المحادثة الحقيقية. الفرنسي بيديك 3 طرق للسؤال، من أبسطها لأرقاها، وقاعدة نفي واحدة مشهورة: ne ... pas اللي بتحط الفعل في نصها زي الشطبة." },
  { "type": "h", "text": "3 طرق للسؤال" },
  { "type": "table", "head": ["الطريقة", "مثال", "المستوى"], "rows": [
   ["نبرة الصوت (أسهل حاجة)", "Tu es égyptien ? (صوت طالع)", "كلام يومي"],
   ["Est-ce que + الجملة", "Est-ce que tu es égyptien ?", "المعيار: صح في كل الأوقات"],
   ["القلب (inversion)", "Es-tu égyptien ?", "رسمي وكتابة"]
  ]},
  { "type": "note", "text": "لحد ما توصل B1، استخدم Est-ce que على طول. صح 100% وشغالة في أي موقف رسمي أو عادي." },
  { "type": "h", "text": "كلمات السؤال" },
  { "type": "table", "head": ["الفرنسي", "المعنى", "مثال"], "rows": [
   ["Qui", "مين", "Qui est-ce ? = مين ده؟"],
   ["Que / Quoi", "إيه", "Qu'est-ce que c'est ? = ده إيه؟ / C'est quoi ?"],
   ["Où", "فين", "Où habites-tu ? = ساكن فين؟"],
   ["Quand", "إمتى", "Quand tu arrives ? = هتوصل إمتى؟"],
   ["Comment", "إزاي", "Comment tu t'appelles ? = اسمك إيه؟"],
   ["Pourquoi", "ليه", "Pourquoi tu apprends le français ? = ليه بتتعلم فرنسي؟"],
   ["Combien (de)", "بكام / قد إيه", "C'est combien ? = بكام؟"],
   ["Est-ce que", "هل", "Est-ce que tu parles français ? = بتتكلم فرنسي؟"]
  ]},
  { "type": "h", "text": "النفي: ne ... pas" },
  { "type": "p", "text": "الفعل بيتحط بين ne و pas: زي `مش` في المصري بالظبط، بس في جزأين بيحيطوا بالفعل." },
  { "type": "list", "items": [
   "`Je parle français.` = بتكلم فرنسي → `Je ne parle pas français.` = مش بتكلم فرنسي.",
   "`Elle est professeure.` → `Elle n'est pas professeure.` = هي مش مدرسة. (ne بتتحول n' قبل متحرك)",
   "`J'aime le café.` = بحب القهوة → `Je n'aime pas le café.` = مش بحب القهوة.",
   "في الكلام اليومي الفرنسيين بيحذفوا الـ ne: `Je sais pas.` = مش عارف. اسمعها وافهمها، بس اكتبها كاملة."
  ]},
  { "type": "ex", "task": "حوّل الجمل دي لأسئلة بطريقة Est-ce que وبعدين انفها: Tu parles français. / Elle habite au Caire.", "hint": "السؤال: Est-ce que + الجملة زي ما هي. النفي: ne/n' + الفعل + pas.", "code": "Est-ce que tu parles français ? → Tu ne parles pas français. / Est-ce qu'elle habite au Caire ? → Elle n'habite pas au Caire.", "why": "لو عملت التحويلين دول صح، يبقى اتقنت أهم أداتين في المحادثة." }
 ]
,
 "quiz": [
  { "q": "أي صيغة سؤال صح ومقبولة في كل المواقف؟", "options": [{ "text": "Tu es égyptien ?" }, { "text": "Est-ce que tu es égyptien ?" }, { "text": "Es-tu égyptien ?" }, { "text": "التلاتة صح" }], "answer": 3, "explain": "التلاتة صح، الفرق في المستوى: نبرة (يومي)، Est-ce que (معيار)، القلب (رسمي)." },
  { "q": "`Où` معناها؟", "options": [{ "text": "إمتى" }, { "text": "فين" }, { "text": "ليه" }, { "text": "مين" }], "answer": 1, "explain": "Où = فين. Quand = إمتى. Pourquoi = ليه. Qui = مين." },
  { "q": "انفي الجملة: `Je parle français.`", "options": [{ "text": "Je pas parle français." }, { "text": "Je ne parle pas français." }, { "text": "Je parle ne français pas." }, { "text": "Pas je parle français." }], "answer": 1, "explain": "ne قبل الفعل و pas بعده: Je ne parle pas français." },
  { "q": "ne بتتحول لـ n' امتى؟", "options": [{ "text": "قبل أي حرف" }, { "text": "قبل حرف متحرك أو h ساكتة" }, { "text": "في آخر الجملة" }, { "text": "مبتتحولش" }], "answer": 1, "explain": "Je n'aime pas, elle n'est pas — اختصار زي don't في الإنجليزي." },
  { "q": "`C'est combien ?` بتسأل عن إيه؟", "options": [{ "text": "الوقت" }, { "text": "السعر" }, { "text": "المكان" }, { "text": "الاسم" }], "answer": 1, "explain": "Combien = بكام/قد إيه: C'est combien ? = ده بكام؟" },
  { "q": "في الكلام اليومي الفرنسيين بيعملوا إيه بالـ ne؟", "options": [{ "text": "بيشيلوها" }, { "text": "بيشيلوا pas" }, { "text": "بيكرروها" }, { "text": "بيحطوها في الآخر" }], "answer": 0, "explain": "Je sais pas = مش عارف. الـ ne بتتحذف في الكلام، بس في الكتابة كاملها." }
 ],
 "exercises": [
  { "task": "اكتب 5 أسئلة تسألهم لصاحبك الفرنسي: اسمه، ساكن فين، بيتكلم إنجليزي ولا لأ، بيحب القهوة، وإمتى بيذاكر.", "hint": "Comment tu t'appelles / Où tu habites / Est-ce que / Quand.", "code": "Comment tu t'appelles ? Où est-ce que tu habites ? Est-ce que tu parles anglais ? Est-ce que tu aimes le café ? Quand est-ce que tu étudies ?", "why": "دي أكتر أسئلة هتحتاجها في أول أسبوع محادثة." },
  { "task": "صحح الغلط: `Je ne suis pas égyptien pas.`", "hint": "pas مرة واحدة بس، فين مكانها؟", "code": "Je ne suis pas égyptien.", "why": "النفي جزء واحد من كل نوع: ne + الفعل + pas. مش ne...pas...pas." }
 ]
},
{
 "id": "fr4",
 "level": "A1",
 "skill": "core",
 "nav": "le/la/les والجنس والجمع",
 "title": "🧩 le / la / les والجنس والجمع",
 "subtitle": "أشهر مشكلة للعربي في الفرنسي: المذكر والمؤنث، وإزاي تحلها",
 "blocks": [
  { "type": "p", "text": "كل اسم في الفرنسي ليه جنس: مذكر (le) أو مؤنث (la). مفيش قاعدة منطقية 100%، بس فيه إشارات قوية في نهايات الكلمات هتخليك تخمن صح 90% من الوقت. الدرس ده هو اللي هيفرق بين حد بيتكلم فرنسي مكسر وحد بيتكلم صح." },
  { "type": "h", "text": "أدوات التعريف" },
  { "type": "table", "head": ["الأداة", "النوع", "مثال"], "rows": [
   ["le", "الـ مذكر", "le café = القهوة، le livre = الكتاب"],
   ["la", "الـ مؤنث", "la table = الترابيزة، la banque = البنك"],
   ["les", "الجمع (الاتنين)", "les livres = الكتب"],
   ["l'", "قبل متحرك", "l'école = المدرسة، l'hôtel = الفندق"]
  ]},
  { "type": "h", "text": "أدوات التنكير" },
  { "type": "table", "head": ["الأداة", "النوع", "مثال"], "rows": [
   ["un", "واحد مذكر", "un livre = كتاب"],
   ["une", "واحدة مؤنث", "une table = ترابيزة"],
   ["des", "شوية/عدد", "des livres = كتب (شوية)"]
  ]},
  { "type": "h", "text": "إزاي تعرف الجنس من نهاية الكلمة" },
  { "type": "table", "head": ["النهاية", "الجنس", "أمثلة"], "rows": [
   ["-tion / -sion", "مؤنث", "la nation, la télévision"],
   ["-té", "مؤنث", "la liberté = الحرية، la qualité"],
   ["-ure / -ence / -ance", "مؤنث", "la voiture = العربية، la France"],
   ["-e (غالباً)", "مؤنث", "la table, la porte — بس فيه استثناءات"],
   ["-ment", "مذكر", "le gouvernement = الحكومة، le moment"],
   ["-age", "مذكر", "le voyage = السفر، le fromage = الجبنة"],
   ["-isme", "مذكر", "le tourisme = السياحة"],
   ["-o / -at", "مذكر", "le vélo = العجلة، le chocolat"]
  ]},
  { "type": "note", "text": "قاعدة ذهبية: احفظ كل كلمة جديدة مع أداتها. متقولش table = ترابيزة، قول la table. الجنس جزء من الكلمة نفسها." },
  { "type": "h", "text": "الجمع" },
  { "type": "list", "items": [
   "القاعدة: زوّد s في الآخر (ساكتة مش بتتنطق): livre → livres، table → tables.",
   "كلمات بتنتهي بـ -al بتتحول -aux: le journal (الجورنال) → les journaux، l'hôpital → les hôpitaux.",
   "كلمات بتنتهي بـ -eau بتاخد x: le bateau (المركب) → les bateaux، le cadeau (الهدية) → les cadeaux.",
   "استثناءات مشهورة: l'œil (العين) → les yeux، monsieur → messieurs، madame → mesdames."
  ]},
  { "type": "ex", "task": "حدد جنس الكلمات دي من نهايتها: télévision, voyage, liberté, fromage, voiture, moment.", "hint": "شوف الجدول فوق: -tion و -té و -ure مؤنث، -age و -ment مذكر.", "code": "la télévision (مؤنث -tion)، le voyage (مذكر -age)، la liberté (مؤنث -té)، le fromage (مذكر -age)، la voiture (مؤنث -ure)، le moment (مذكر -ment).", "why": "التخمين من النهاية مهارة بتتوفر عليك سنين من الحفظ." }
 ]
,
 "quiz": [
  { "q": "`la voiture` معناها؟", "options": [{ "text": "الطيارة" }, { "text": "العربية" }, { "text": "العجلة" }, { "text": "المركب" }], "answer": 1, "explain": "voiture = عربية ملاكي. العجلة = le vélo / la bicyclette." },
  { "q": "جمع le journal؟", "options": [{ "text": "les journals" }, { "text": "les journaux" }, { "text": "les journales" }, { "text": "le journaux" }], "answer": 1, "explain": "-al → -aux: journal → journaux زي hôpital → hôpitaux." },
  { "q": "كلمة `liberté` جنسها إيه؟", "options": [{ "text": "مذكر" }, { "text": "مؤنث" }, { "text": "الاتنين" }, { "text": "معلش" }], "answer": 1, "explain": "-té دايمًا مؤنث: la liberté, la qualité, la nationalité." },
  { "q": "عايز تقول `مدرسة` (بتبدأ بمتحرك é)؟", "options": [{ "text": "le école" }, { "text": "la école" }, { "text": "l'école" }, { "text": "les école" }], "answer": 2, "explain": "le و la بتتحولا l' قبل متحرك أو h ساكتة: l'école, l'hôtel." },
  { "q": "`une` بتتستخدم مع؟", "options": [{ "text": "المذكر" }, { "text": "المؤنث" }, { "text": "الجمع" }, { "text": "الأسماء بس" }], "answer": 1, "explain": "un = واحد مذكر، une = واحدة مؤنث، des = جمع." },
  { "q": "أي نهاية بتدل على مذكر غالبًا؟", "options": [{ "text": "-tion" }, { "text": "-té" }, { "text": "-ment" }, { "text": "-ure" }], "answer": 2, "explain": "-ment مذكر: le moment, le gouvernement. الباقي مؤنث." }
 ],
 "exercises": [
  { "task": "اكتب 10 أسماء من حياتك اليومية بالفرنسي مع أداتها وجمعها.", "hint": "ابدأ بـ: كتاب، تليفون، بيت، عربية، قهوة.", "code": "le livre/les livres، le téléphone/les téléphones، la maison/les maisons، la voiture/les voitures، le café/les cafés، la table/les tables، le lit/les lits، la porte/les portes، le stylo/les stylos، la fenêtre/les fenêtres.", "why": "حفظ الاسم مع أداته وجمعه من أول يوم بيخليك تتكلم صح من غير ما تفكر." },
  { "task": "صحح الغلط: `J'ai un voiture.`", "hint": "voiture جنسها إيه؟", "code": "J'ai une voiture.", "why": "voiture مؤنث (-ure) فبتاخد une مش un." }
 ]
},
{
 "id": "fr5",
 "level": "A1",
 "skill": "core",
 "nav": "الأرقام والوقت",
 "title": "🔢 الأرقام والوقت والأيام",
 "subtitle": "الأرقام الفرنسية ولغز السبعين والتسعين، والساعة والتاريخ",
 "blocks": [
  { "type": "p", "text": "الأرقام الفرنسية سهلة لحد 60، وبعدين بيحصل حاجة غريبة: الفرنسيين بيعدوا بالعشرينات. السبعين = ستين وعشرة، والتسعين = أربعين... لا استنى، هتفهم دلوقتي. الموضوع مضحك لما تفهمه، وهيخليك متميز عن أي حد بيتعلم لوحده." },
  { "type": "h", "text": "من 0 لـ 20" },
  { "type": "table", "head": ["الرقم", "الفرنسي", "النطق"], "rows": [
   ["0-5", "zéro, un, deux, trois, quatre, cinq", "زيرو، آن، دو، تروا، كاتر، سانك"],
   ["6-10", "six, sept, huit, neuf, dix", "سيس، سيت، ويت، نوف، ديس"],
   ["11-16", "onze, douze, treize, quatorze, quinze, seize", "أونز، دوز، تريز، كاتورز، كانز، سيز"],
   ["17-19", "dix-sept, dix-huit, dix-neuf", "ديس-سيت، ديس-ويت، ديس-نوف"],
   ["20", "vingt", "ڤان"]
  ]},
  { "type": "h", "text": "العشرات واللغز" },
  { "type": "table", "head": ["الرقم", "الفرنسي", "المنطق"], "rows": [
   ["30, 40, 50, 60", "trente, quarante, cinquante, soixante", "عادي زي أي لغة"],
   ["70", "soixante-dix", "ستين + عشرة = 70!"],
   ["80", "quatre-vingts", "أربعة × عشرين = 80!"],
   ["90", "quatre-vingt-dix", "أربعة × عشرين + عشرة = 90!"],
   ["99", "quatre-vingt-dix-neuf", "أربعة×عشرين + تسعتاشر!"]
  ]},
  { "type": "note", "text": "بلجيكا وسويسرا عندهم septante (70) و nonante (90) بشكل طبيعي. الفرنساوية بس اللي معقدينها. لو حد قالك رقم تليفون بسرعة، اسمهله رقمين رقمين." },
  { "type": "h", "text": "الساعة" },
  { "type": "list", "items": [
   "`Il est huit heures.` = الساعة 8.",
   "`Il est huit heures et demie.` = الساعة 8 ونص (demie = نص بتتأنث مع heure).",
   "`Il est neuf heures moins le quart.` = الساعة 9 إلا ربع.",
   "`Il est dix heures et quart.` = الساعة 10 وربع.",
   "`Il est midi / minuit.` = الساعة 12 الضهر / بالليل.",
   "الفرنسيين بيستخدموا الـ 24 ساعة كتير: `Il est dix-huit heures.` = الساعة 6 مساءً."
  ]},
  { "type": "h", "text": "الأيام والشهور" },
  { "type": "table", "head": ["الأيام", "الشهور"], "rows": [
   ["lundi الاتنين، mardi التلات، mercredi الأربع", "janvier يناير، février فبراير، mars مارس"],
   ["jeudi الخميس، vendredi الجمعة", "avril أبريل، mai مايو، juin يونيو"],
   ["samedi السبت، dimanche الحد", "juillet يوليو، août أغسطس، septembre سبتمبر"],
   ["le week-end الويكند", "octobre أكتوبر، novembre نوفمبر، décembre ديسمبر"]
  ]},
  { "type": "list", "items": [
   "`Quelle est la date aujourd'hui ?` = النهارده كام؟",
   "`C'est le 26 novembre.` = يوم 26 نوفمبر. (le + الرقم + الشهر)",
   "اليوم الأول من الشهر بس بيتقال بالترتيبي: `le premier novembre` = أول نوفمبر.",
   "`Quel jour on est ?` = النهارده إيه؟ → `On est jeudi.` = النهارده الخميس."
  ]},
  { "type": "ex", "task": "اكتب تاريخ النهارده بالفرنسي وساعتك الحالية بطريقتين (12 و 24).", "hint": "C'est le + الرقم + الشهر. Il est + الساعة.", "code": "C'est le 26 novembre. Il est trois heures et demie. / Il est quinze heures trente.", "why": "التاريخ والساعة من أكتر الحاجات اللي هتتسأل عليها في أي امتحان A1." }
 ]
,
 "quiz": [
  { "q": "70 بالفرنسي؟", "options": [{ "text": "septante" }, { "text": "soixante-dix" }, { "text": "quatre-vingts" }, { "text": "soixante" }], "answer": 1, "explain": "soixante-dix = 60+10 = 70. الفرنسي بيعد بالعشرينات بعد الستين." },
  { "q": "80 بالفرنسي؟", "options": [{ "text": "huitante" }, { "text": "quatre-vingt-dix" }, { "text": "quatre-vingts" }, { "text": "soixante-vingt" }], "answer": 2, "explain": "quatre-vingts = 4×20 = 80. حرفياً أربعة عشرينات." },
  { "q": "`Il est neuf heures moins le quart` الساعة كام؟", "options": [{ "text": "9 وربع" }, { "text": "9 إلا ربع" }, { "text": "8 وربع" }, { "text": "9 ونص" }], "answer": 1, "explain": "moins le quart = إلا ربع: 8:45." },
  { "q": "`vendredi` يوم إيه؟", "options": [{ "text": "الخميس" }, { "text": "الجمعة" }, { "text": "السبت" }, { "text": "الحد" }], "answer": 1, "explain": "vendredi = الجمعة (من فينوس، زي vendredi في اللاتينية)." },
  { "q": "أول يوم في الشهر بيتقال إزاي؟", "options": [{ "text": "le un mai" }, { "text": "le premier mai" }, { "text": "le une mai" }, { "text": "premier de mai" }], "answer": 1, "explain": "اليوم الأول بس بياخد الترتيبي premier. الباقي أرقام عادية: le 2 mai." },
  { "q": "`Quel jour on est ?` بتسأل عن إيه؟", "options": [{ "text": "التاريخ" }, { "text": "يوم الأسبوع" }, { "text": "الساعة" }, { "text": "الشهر" }], "answer": 1, "explain": "On est jeudi = النهارده الخميس. التاريخ = Quelle est la date ?" }
 ],
 "exercises": [
  { "task": "اكتب الأرقام دي بالفرنسي: 7، 17، 42، 75، 91، 100.", "hint": "75 = 60+15، 91 = 4×20+11.", "code": "sept, dix-sept, quarante-deux, soixante-quinze, quatre-vingt-onze, cent.", "why": "75 و 91 هما اللي بيوقعوا الناس، اتقنهم وخلاص." },
  { "task": "قول تليفونك بالفرنسي رقمين رقمين زي ما الفرنسيين بيعملوا.", "hint": "مثال: 01 02 19 88 33 9 → zéro un, zéro deux...", "code": "zéro un, zéro deux, dix-neuf, quatre-vingt-huit, trente-trois, neuf.", "why": "الفرنسيين بيقسموا التليفون أزواج، ودي مهارة استماع حقيقية." }
 ]
},
{
 "id": "fr6",
 "level": "A1",
 "skill": "core",
 "nav": "المضارع: أفعال -ER",
 "title": "⚙️ المضارع: أفعال -ER",
 "subtitle": "أكبر عيلة أفعال في الفرنسي، بتصريف واحد يشيل 90% من اللغة",
 "blocks": [
  { "type": "p", "text": "90% من الأفعال الفرنسية بتنتهي بـ -er وبتتصرف بنفس الطريقة بالظبط. يعني اتعلم تصريف واحد، وطبقه على آلاف الأفعال: parler (يتكلم)، manger (ياكل)، habiter (يسكن)، travailler (يشتغل)، étudier (يذاكر)، aimer (يحب)، écouter (يسمع)، regarder (يبص)." },
  { "type": "h", "text": "التصريف: شيل -er وحط النهايات" },
  { "type": "table", "head": ["الضمير", "النهاية", "parler (يتكلم)"], "rows": [
   ["je", "-e", "je parle = أنا بتكلم"],
   ["tu", "-es", "tu parles = إنت بتتكلم"],
   ["il/elle/on", "-e", "elle parle = هي بتتكلم"],
   ["nous", "-ons", "nous parlons = إحنا بنتكلم"],
   ["vous", "-ez", "vous parlez = حضرتك بتتكلم"],
   ["ils/elles", "-ent", "ils parlent = هم بيتكلموا"]
  ]},
  { "type": "note", "text": "نقطة نطق مهمة: parle و parles و parlent التلاتة بينطقوا بالظبط زي بعض: `بارل`. الفرق في الكتابة بس. عشان كده الفرنسي محتاج ضمير دايمًا، مينفعش تقول parle من غير je." },
  { "type": "h", "text": "أفعال -er شائعة لازم تعرفها" },
  { "type": "table", "head": ["الفعل", "المعنى", "مثال"], "rows": [
   ["parler", "يتكلم", "Je parle un peu français. = بتكلم فرنسي شوية"],
   ["habiter", "يسكن", "J'habite à Assiout. = ساكن في أسيوط"],
   ["travailler", "يشتغل", "Elle travaille dans une banque. = بتشتغل في بنك"],
   ["étudier", "يذاكر", "Nous étudions le commerce. = بنذاكر تجارة"],
   ["aimer", "يحب", "J'aime le café. = بحب القهوة"],
   ["écouter", "يسمع", "Tu écoutes de la musique ? = بتسمع مزيكا؟"],
   ["regarder", "يبص/يتفرج", "On regarde un film. = بنتفرج على فيلم"],
   ["manger", "ياكل", "Vous mangez quoi ? = بتاكلوا إيه؟"]
  ]},
  { "type": "h", "text": "شواذ صغيرة في نفس العيلة" },
  { "type": "list", "items": [
   "`manger` مع nous: nous mangeons (الـ e فضلت عشان الـ g تفضل ناعمة = ج مش ق).",
   "`commencer` مع nous: nous commençons (الـ ç عشان تفضل س).",
   "`acheter` (يشتري): j'achète بـ è عشان النطق يفضل مفتوح.",
   "`préférer` (يفضل): je préfère بـ è في المفرد، nous préférons بـ é.",
   "`envoyer` (يبعت): j'envoie، tu envoies، il envoie، nous envoyons."
  ]},
  { "type": "ex", "task": "صرّف الفعل regarder مع كل الضمائر واكتب جملة بكل تصريف.", "hint": "شيل -er وحط: e, es, e, ons, ez, ent.", "code": "je regarde, tu regardes, il regarde, nous regardons, vous regardez, ils regardent. مثال: Je regarde un film égyptien.", "why": "لو اتقنت التصريف ده، اتعلمت تصريف 90% من أفعال الفرنسي في 10 دقايق." }
 ]
,
 "quiz": [
  { "q": "تصريف parler مع nous؟", "options": [{ "text": "nous parlons" }, { "text": "nous parlez" }, { "text": "nous parlent" }, { "text": "nous parle" }], "answer": 0, "explain": "nous بتاخد -ons دايمًا في المضارع." },
  { "q": "`tu` بتاخد نهاية إيه في أفعال -er؟", "options": [{ "text": "-e" }, { "text": "-es" }, { "text": "-ez" }, { "text": "-ent" }], "answer": 1, "explain": "tu parles, tu manges, tu habites." },
  { "q": "ليه nous mangeons مش nous mangons؟", "options": [{ "text": "غلط إملائي" }, { "text": "عشان الـ g تفضل ناعمة (ج) مش ق" }, { "text": "عشان النطق أسهل" }, { "text": "قاعدة قديمة" }], "answer": 1, "explain": "g + o = جو (قاسية)، ge + o = جو ناعمة. الـ e بتحافظ على النطق." },
  { "q": "`vous` بتاخد نهاية إيه؟", "options": [{ "text": "-ons" }, { "text": "-ent" }, { "text": "-ez" }, { "text": "-es" }], "answer": 2, "explain": "vous parlez, vous mangez, vous travaillez." },
  { "q": "je و tu و il/elle/on في أفعال -er بينطقوا إزاي؟", "options": [{ "text": "مختلفين" }, { "text": "زي بعض بالظبط" }, { "text": "je مختلف بس" }, { "text": "il مختلف بس" }], "answer": 1, "explain": "parle, parles, parle = نفس النطق. عشان كده الضمير إجباري في الفرنسي." },
  { "q": "معنى `J'aime le café`؟", "options": [{ "text": "بشرب القهوة" }, { "text": "بحب القهوة" }, { "text": "عايز قهوة" }, { "text": "ببيع قهوة" }], "answer": 1, "explain": "aimer = يحب. boire = يشرب (هناخده في A2)." }
 ],
 "exercises": [
  { "task": "اكتب 6 جمل عن يومك بأفعال -er مختلفة.", "hint": "habiter, travailler, écouter, regarder, manger, aimer.", "code": "J'habite à Assiout. Je travaille dans un bureau. J'écoute de la musique. Je regarde un match. Je mange du foul. J'aime ma ville.", "why": "ب6 أفعال من عيلة -er تقدر توصف يومك كله." },
  { "task": "صحح الغلط: `Nous manges le déjeuner.`", "hint": "فين الغلط في التصريف مع nous؟", "code": "Nous mangeons le déjeuner.", "why": "nous بتاخد -ons، ومع manger بنزود e قبل الـ o: mangeons." }
 ]
},
{
 "id": "fr7",
 "level": "A1",
 "skill": "core",
 "nav": "avoir / aller / faire / pouvoir",
 "title": "⭐ الأفعال الشاذة الأربعة",
 "subtitle": "avoir و aller و faire و pouvoir: الأفعال اللي هتستخدمها في كل جملة تقريبًا",
 "blocks": [
  { "type": "p", "text": "بعد ما اتقنت أفعال -er المنتظمة، لازم تتعلم الأفعال الشاذة الأربعة اللي مش بتتبع أي قاعدة. دي أهم أفعال في اللغة كلها: بتستخدمها للملكية، الحركة، الأفعال اليومية، والقدرة. احفظها زي اسمك." },
  { "type": "h", "text": "avoir (يملك / يكون عنده)" },
  { "type": "table", "head": ["الضمير", "avoir", "مثال"], "rows": [
   ["j'", "ai", "J'ai 20 ans. = عندي 20 سنة"],
   ["tu", "as", "Tu as un stylo ? = معاك قلم؟"],
   ["il/elle/on", "a", "Elle a une voiture. = عندها عربية"],
   ["nous", "avons", "Nous avons le temps. = عندنا وقت"],
   ["vous", "avez", "Vous avez des questions ? = عندكم أسئلة؟"],
   ["ils/elles", "ont", "Ils ont faim. = هم جعانين"]
  ]},
  { "type": "note", "text": "avoir بيتستخدم في تعبيرات كتير بدل être: avoir faim = جعان (حرفياً عنده جوع)، avoir soif = عطشان، avoir chaud = حيران، avoir froid = بردان، avoir raison = عنده حق، avoir tort = غلطان." },
  { "type": "h", "text": "aller (يروح) — وفعل المستقبل القريب" },
  { "type": "table", "head": ["الضمير", "aller", "مثال"], "rows": [
   ["je", "vais", "Je vais au Caire. = رايح القاهرة"],
   ["tu", "vas", "Tu vas où ? = رايح فين؟"],
   ["il/elle/on", "va", "On va au cinéma. = رايحين السينما"],
   ["nous", "allons", "Nous allons bien. = إحنا كويسين"],
   ["vous", "allez", "Vous allez comment ? = حضرتك عامل إيه؟"],
   ["ils/elles", "vont", "Ils vont à l'école. = رايحين المدرسة"]
  ]},
  { "type": "note", "text": "aller + المصدر = المستقبل القريب (going to): Je vais manger = هاكل. Tu vas voir = هتشوف. دي أسهل طريقة للمستقبل في الفرنسي." },
  { "type": "h", "text": "faire (يعمل / يعمل)" },
  { "type": "table", "head": ["الضمير", "faire", "مثال"], "rows": [
   ["je", "fais", "Je fais mes devoirs. = بعمل واجبي"],
   ["tu", "fais", "Tu fais quoi ? = بتعمل إيه؟"],
   ["il/elle/on", "fait", "Il fait beau. = الجو حلو"],
   ["nous", "faisons", "Nous faisons du sport. = بنلعب رياضة"],
   ["vous", "faites", "Vous faites quoi ce soir ? = بتعملوا إيه النهارده بالليل؟"],
   ["ils/elles", "font", "Ils font la fête. = بيعملوا حفلة"]
  ]},
  { "type": "h", "text": "pouvoir (يقدر) و vouloir (عايز)" },
  { "type": "table", "head": ["الضمير", "pouvoir", "vouloir"], "rows": [
   ["je", "peux", "veux"],
   ["tu", "peux", "veux"],
   ["il/elle/on", "peut", "veut"],
   ["nous", "pouvons", "voulons"],
   ["vous", "pouvez", "voulez"],
   ["ils/elles", "peuvent", "veulent"]
  ]},
  { "type": "list", "items": [
   "`Je peux vous aider ?` = أقدر أساعدك؟",
   "`Je veux un café.` = عايز قهوة.",
   "`Est-ce que je peux avoir l'addition ?` = ممكن الحساب؟ (أهم جملة في المطعم)",
   "`Vous voulez quelque chose ?` = عايزين حاجة؟"
  ]},
  { "type": "ex", "task": "اكتب 4 جمل باستخدام avoir و aller و faire و pouvoir.", "hint": "افتكر: avoir faim، aller au Caire، faire du sport، pouvoir vous aider.", "code": "J'ai faim. Je vais au Caire demain. Je fais du sport le week-end. Je peux vous aider.", "why": "بالأربع أفعال دول تقدر تعبر عن معظم احتياجاتك اليومية." }
 ],
 "quiz": [
  { "q": "`J'ai 20 ans` معناها؟", "options": [{ "text": "أنا 20 سنة" }, { "text": "عندي 20 كتاب" }, { "text": "أنا عايز 20" }, { "text": "أنا شفت 20" }], "answer": 0, "explain": "avoir + ans = السن. J'ai 20 ans = عندي 20 سنة = أنا 20 سنة." },
  { "q": "تصريف aller مع je؟", "options": [{ "text": "j'alle" }, { "text": "je vais" }, { "text": "je va" }, { "text": "j'allons" }], "answer": 1, "explain": "Je vais = أنا رايح. aller شاذ بالكامل: vais, vas, va, allons, allez, vont." },
  { "q": "`Je vais manger` معناها؟", "options": [{ "text": "أنا باكل" }, { "text": "أنا رايح آكل" }, { "text": "أنا هاكل" }, { "text": "أنا أكلت" }], "answer": 2, "explain": "aller + المصدر = المستقبل القريب: Je vais manger = هاكل (going to eat)." },
  { "q": "`Il fait beau` معناها؟", "options": [{ "text": "هو جميل" }, { "text": "الجو حلو" }, { "text": "هو بيعمل حاجة" }, { "text": "هو بيعمل جميل" }], "answer": 1, "explain": "faire بيتستخدم للجو: Il fait beau = الجو حلو، Il fait chaud = الجو حر." },
  { "q": "عايز تقول `ممكن الحساب؟` في المطعم؟", "options": [{ "text": "Je veux l'addition." }, { "text": "Est-ce que je peux avoir l'addition ?" }, { "text": "Je fais l'addition." }, { "text": "Je vais l'addition." }], "answer": 1, "explain": "pouvoir + avoir = طلب مهذب: Est-ce que je peux avoir l'addition ?" },
  { "q": "تصريف faire مع vous؟", "options": [{ "text": "vous faisez" }, { "text": "vous faites" }, { "text": "vous faisons" }, { "text": "vous font" }], "answer": 1, "explain": "faire شاذ: fais, fais, fait, faisons, faites, font." }
 ],
 "exercises": [
  { "task": "اكتب 4 جمل باستخدام avoir و aller و faire و pouvoir عن حياتك.", "hint": "افتكر: avoir faim، aller au Caire، faire du sport، pouvoir vous aider.", "code": "J'ai faim. Je vais au Caire demain. Je fais du sport le week-end. Je peux vous aider.", "why": "بالأربع أفعال دول تقدر تعبر عن معظم احتياجاتك اليومية." },
  { "task": "حوّل الجمل دي للمستقبل القريب: Je mange. / Tu travailles.", "hint": "aller + المصدر.", "code": "Je vais manger. Tu vas travailler.", "why": "المستقبل القريب = aller + infinitif. أسرع طريقة للمستقبل في الفرنسي." }
 ]
}
);

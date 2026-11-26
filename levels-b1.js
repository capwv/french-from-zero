/* Level B1: core + skills (French) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "b1-core",
 "level": "B1",
 "skill": "core",
 "nav": "أساسي: الربط المتقدم",
 "title": "🔗 أساسي: الربط المتقدم",
 "subtitle": "اربط أفكارك بجمل طويلة ومنطقية",
 "blocks": [
  { "type": "p", "text": "في B1 بتنتقل من جمل قصيرة لجمل طويلة مترابطة. الروابط المنطقية (connecteurs logiques) هي اللي بتحول كلامك من مبتدئ لمتوسط." },
  { "type": "h", "text": "روابط السبب والنتيجة" },
  { "type": "table", "head": ["الرابط", "المعنى", "مثال"], "rows": [
   ["parce que", "عشان / لأن", "Je reste parce que je suis fatigué."],
   ["donc", "فـ / علشان كده", "Il pleut, donc je reste."],
   ["c'est pourquoi", "وعشان كده", "Il est malade, c'est pourquoi il est absent."],
   ["grâce à", "بفضل", "Grâce à toi, j'ai réussi."],
   ["à cause de", "بسبب", "À cause du bruit, je n'ai pas dormi."]
  ]},
  { "type": "h", "text": "روابط التعارض" },
  { "type": "table", "head": ["الرابط", "المعنى", "مثال"], "rows": [
   ["mais", "لكن / بس", "Je veux venir, mais je suis occupé."],
   ["cependant", "لكن (رسمي)", "C'est cher, cependant c'est bon."],
   ["pourtant", "مع إن", "Il est riche, pourtant il n'est pas heureux."],
   ["bien que + subj", "رغم إن", "Bien qu'il soit riche, il n'est pas heureux."],
   ["même si", "حتى لو", "Même s'il pleut, je viens."]
  ]},
  { "type": "h", "text": "روابط الترتيب والإضافة" },
  { "type": "table", "head": ["الرابط", "المعنى", "مثال"], "rows": [
   ["d'abord", "الأول", "D'abord, je me lève."],
   ["ensuite / puis", "بعدين", "Ensuite, je prends le café."],
   ["enfin", "في الآخر", "Enfin, je sors."],
   ["de plus / en outre", "كمان / زيادة على كده", "De plus, c'est gratuit."],
   ["en revanche", "على الناحية التانية", "C'est cher, en revanche c'est bon."]
  ]},
  { "type": "ex", "task": "اربط الجمل دي برابط منطقي: Il pleut. Je reste. / Il est riche. Il n'est pas heureux.", "hint": "donc, pourtant.", "code": "Il pleut, donc je reste. Il est riche, pourtant il n'est pas heureux.", "why": "الروابط دي بتخليك تتكلم بجمل طبيعية ومنطقية." }
 ],
 "quiz": [
  { "q": "`Il pleut, donc je reste` معناها؟", "options": [{ "text": "بيمطر فأنا فاضل" }, { "text": "بيمطر علشان كده أنا فاضل" }, { "text": "بيمطر بس أنا فاضل" }, { "text": "بيمطر لأني فاضل" }], "answer": 1, "explain": "donc = علشان كده (نتيجة)." },
  { "q": "الفرق بين mais و cependant؟", "options": [{ "text": "مفيش فرق" }, { "text": "mais يومي و cependant رسمي" }, { "text": "mais رسمي و cependant يومي" }, { "text": "الاتنين رسمي" }], "answer": 1, "explain": "mais = بس (يومي)، cependant = لكن (رسمي)." },
  { "q": "`Bien qu'il soit riche` معناها؟", "options": [{ "text": "عشان هو غني" }, { "text": "رغم إنه غني" }, { "text": "لأنه غني" }, { "text": "لو هو غني" }], "answer": 1, "explain": "bien que + subjonctif = رغم إن." },
  { "q": "أي رابط بيعبر عن نتيجة؟", "options": [{ "text": "mais" }, { "text": "donc" }, { "text": "pourtant" }, { "text": "bien que" }], "answer": 1, "explain": "donc = فـ / علشان كده = نتيجة." },
  { "q": "`Grâce à toi, j'ai réussi` معناها؟", "options": [{ "text": "بسببك نجحت" }, { "text": "بفضلك نجحت" }, { "text": "لأنك نجحت" }, { "text": "لو أنت نجحت" }], "answer": 1, "explain": "grâce à = بفضل (إيجابي). à cause de = بسبب (سلبي)." },
  { "q": "أي رابط بيحتاج subjonctif بعده؟", "options": [{ "text": "mais" }, { "text": "donc" }, { "text": "bien que" }, { "text": "parce que" }], "answer": 2, "explain": "bien que + subjonctif: Bien qu'il soit riche." }
 ],
 "exercises": [
  { "task": "اكتب فقرة قصيرة (4 جمل) عن يومك باستخدام 3 روابط.", "hint": "d'abord, ensuite, mais, donc.", "code": "D'abord, je me suis réveillé tôt. Ensuite, j'ai pris le café. Mais j'étais fatigué, donc je suis resté à la maison.", "why": "الروابط بتحول الجمل القصيرة لكلام طبيعي." },
  { "task": "صحح الغلط: `Il pleut, mais je sors.` (عايز تعبر عن نتيجة مش تعارض)", "hint": "المطر والخروج مش تعارض.", "code": "Il pleut, donc je ne sors pas. / Il pleut, pourtant je sors.", "why": "mais = تعارض. لو النتيجة متوقعة: donc. لو مفاجئة: pourtant." }
 ]
},
{
 "id": "b1-listen",
 "level": "B1",
 "skill": "listening",
 "nav": "استماع: مكالمة شغل",
 "title": "🎧 استماع: مكالمة شغل",
 "subtitle": "محادثة تليفون عن شغل ومواعيد",
 "blocks": [
  { "type": "p", "text": "المكالمات التليفونية أصعب من المحادثات الوجهية لأنك مش شايف الشخص. المحادثة دي بين موظف ومديره عن اجتماع وموعد تسليم." },
  { "type": "dialogue", "lines": [
   { "who": "Karim", "en": "Allô, bonjour Monsieur Dubois. C'est Karim.", "ar": "ألو، صباح الخير يا أستاذ دوبوا. أنا كريم." },
   { "who": "M. Dubois", "en": "Bonjour Karim. Comment ça va ?", "ar": "أهلاً كريم. عامل إيه؟" },
   { "who": "Karim", "en": "Très bien, merci. Je vous appelle pour la réunion de demain.", "ar": "كويس، متشكر. بتكلمك بخصوص اجتماع بكرة." },
   { "who": "M. Dubois", "en": "Ah oui, elle est toujours prévue à quatorze heures.", "ar": "آه أيوه، لسه موجودة الساعة 2." },
   { "who": "Karim", "en": "Est-ce que je peux apporter le rapport ?", "ar": "ممكن أجيب التقرير معايا؟" },
   { "who": "M. Dubois", "en": "Bien sûr, apportez-le. Vous l'avez fini ?", "ar": "طبعاً، هاته. خلصته؟" },
   { "who": "Karim", "en": "Presque. Je l'aurai fini ce soir.", "ar": "تقريباً. هخلصه النهارده بالليل." },
   { "who": "M. Dubois", "en": "Parfait. À demain, alors.", "ar": "تمام. يبقى بكرة." }
  ]},
  { "type": "h", "text": "مفردات الشغل" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["la réunion", "الاجتماع"],
   ["le rapport", "التقرير"],
   ["prévu", "مجدول / مقرر"],
   ["apporter", "يجيب (حاجة معاه)"],
   ["presque", "تقريباً"],
   ["à demain", "بكرة / أشوفك بكرة"]
  ]}
 ],
 "quiz": [
  { "q": "كريم بيتكلم مين؟", "options": [{ "text": "صاحبه" }, { "text": "مديره" }, { "text": "أستاذه" }, { "text": "أبوه" }], "answer": 1, "explain": "Monsieur Dubois = مديره في الشغل." },
  { "q": "الاجتماع الساعة كام؟", "options": [{ "text": "12" }, { "text": "2" }, { "text": "4" }, { "text": "6" }], "answer": 1, "explain": "quatorze heures = الساعة 2 الضهر." },
  { "q": "كريم عايز يجيب إيه؟", "options": [{ "text": "القهوة" }, { "text": "التقرير" }, { "text": "الموبايل" }, { "text": "المفاتيح" }], "answer": 1, "explain": "le rapport = التقرير." },
  { "q": "التقرير خلص؟", "options": [{ "text": "أيوه" }, { "text": "لأ" }, { "text": "تقريباً" }, { "text": "مش هخلصه" }], "answer": 2, "explain": "Presque = تقريباً. Je l'aurai fini ce soir = هخلصه النهارده بالليل." },
  { "q": "`Je l'aurai fini` معناها؟", "options": [{ "text": "خلصته" }, { "text": "هخلصه" }, { "text": "كنت خلصته" }, { "text": "بخلصه" }], "answer": 1, "explain": "futur antérieur: هكون خلصته (المستقبل التام)." },
  { "q": "`Allô` بتتقال امتى؟", "options": [{ "text": "في التليفون بس" }, { "text": "في الشارع" }, { "text": "في المطعم" }, { "text": "أي مكان" }], "answer": 0, "explain": "Allô = تحية التليفون الفرنسية." }
 ],
 "exercises": [
  { "task": "اسمع المحادثة 3 مرات ولخص الموضوع في جملة.", "hint": "مين بيكلم مين وعن إيه.", "code": "كريم بيكلم مديره يتأكد من اجتماع بكرة وهيجيب التقرير.", "why": "التلخيص بعد الاستماع بيثبت الفهم." },
  { "task": "اكتب مكالمة تليفون قصيرة (4 سطور) عن موعد.", "hint": "Allô, Je vous appelle pour..., Est-ce que je peux...?", "code": "Allô, bonjour. Je vous appelle pour le rendez-vous de demain. Est-ce que c'est toujours prévu ? — Oui, à dix heures. — Parfait, à demain.", "why": "المكالمات التليفونية مهارة شغل أساسية." }
 ]
},
{
 "id": "b1-read",
 "level": "B1",
 "skill": "reading",
 "nav": "قراءة: مقال عن العادات",
 "title": "📖 قراءة: مقال عن العادات",
 "subtitle": "اقرا مقال قصير عن عادات الفرنسيين في الأكل",
 "blocks": [
  { "type": "p", "text": "المقالات القصيرة عن الثقافة والعادات هي نصوص B1 المعيار. المقال ده عن عادات الأكل الفرنسية والفرق بينها وبين عاداتنا." },
  { "type": "p", "text": "En France, le repas est un moment important de la journée. Les Français prennent le petit-déjeuner vers sept heures : du pain, du beurre, de la confiture et du café ou du thé. Le déjeuner, c'est le repas principal. Il commence vers midi et demi et il dure souvent une heure. Les Français mangent d'abord une entrée, puis un plat principal, ensuite du fromage et enfin un dessert. Le dîner est plus léger : une soupe ou une salade et du pain. Le dimanche, toute la famille se réunit pour un grand déjeuner. C'est un moment de partage et de conversation.", "ar": "في فرنسا، الأكل لحظة مهمة في اليوم. الفرنسيين بيتفطروا حوالي الساعة 7: عيش وزبدة ومربى وقهوة أو شاي. الغدا هو الوجبة الرئيسية. بيبدأ حوالي الساعة 12:30 وبيطول ساعة غالباً. الفرنسيين بياكلوا الأول مقبلات، بعدين الطبق الرئيسي، بعدين جبنة، وفي الآخر تحلية. العشا أخف: شوربة أو سلطة وعيش. يوم الحد، العيلة كلها بتتجمع على غدا كبير. دي لحظة مشاركة وكلام." },
  { "type": "h", "text": "مفردات المقال" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["le repas", "الوجبة"],
   ["le beurre", "الزبدة"],
   ["la confiture", "المربى"],
   ["l'entrée", "المقبلات"],
   ["le plat principal", "الطبق الرئيسي"],
   ["léger", "خفيف"],
   ["se réunir", "يتجمع"],
   ["le partage", "المشاركة"]
  ]}
 ],
 "quiz": [
  { "q": "الوجبة الرئيسية في فرنسا؟", "options": [{ "text": "الفطار" }, { "text": "الغدا" }, { "text": "العشا" }, { "text": "كلهم زي بعض" }], "answer": 1, "explain": "Le déjeuner, c'est le repas principal." },
  { "q": "الفرنسيين بياكلوا الجبنة امتى؟", "options": [{ "text": "قبل الأكل" }, { "text": "بعد الطبق الرئيسي" }, { "text": "في الفطار" }, { "text": "مش بياكلوا جبنة" }], "answer": 1, "explain": "puis du fromage = بعدين جبنة (بعد الطبق الرئيسي)." },
  { "q": "العشا الفرنسي؟", "options": [{ "text": "تقيل" }, { "text": "خفيف" }, { "text": "مفيش عشا" }, { "text": "زي الغدا" }], "answer": 1, "explain": "Le dîner est plus léger = العشا أخف." },
  { "q": "يوم الحد بيحصل إيه؟", "options": [{ "text": "مفيش أكل" }, { "text": "العيلة بتتجمع على غدا كبير" }, { "text": "الناس بتاكل لوحدها" }, { "text": "المطاعم بتقفل" }], "answer": 1, "explain": "toute la famille se réunit pour un grand déjeuner." },
  { "q": "`l'entrée` معناها؟", "options": [{ "text": "المدخل" }, { "text": "المقبلات" }, { "text": "التحلية" }, { "text": "الطبق الرئيسي" }], "answer": 1, "explain": "l'entrée = المقبلات (الطبق الأول)." },
  { "q": "الغدا بيطول قد إيه؟", "options": [{ "text": "نص ساعة" }, { "text": "ساعة" }, { "text": "ساعتين" }, { "text": "3 ساعات" }], "answer": 1, "explain": "il dure souvent une heure = بيطول ساعة غالباً." }
 ],
 "exercises": [
  { "task": "قارن بين عادات الأكل الفرنسية والعادات المصرية في 3 جمل.", "hint": "En France... En Égypte...", "code": "En France, le déjeuner est le repas principal. En Égypte, le dîner est souvent le repas principal. Les Français mangent du fromage après le plat.", "why": "المقارنة الثقافية بتعمق الفهم." },
  { "task": "اكتب 4 جمل عن وجبة عائلية مهمة عندك.", "hint": "le repas, la famille, se réunir, partager.", "code": "Le vendredi, ma famille se réunit pour un grand déjeuner. Nous mangeons ensemble. C'est un moment de partage. J'aime ce moment.", "why": "الكتابة عن تجربتك بتربط اللغة بحياتك." }
 ]
},
{
 "id": "b1-write",
 "level": "B1",
 "skill": "writing",
 "nav": "كتابة: رأي ومقارنة",
 "title": "✍️ كتابة: رأي ومقارنة",
 "subtitle": "اكتب رأيك في موضوع وقارن بين اختيارين",
 "blocks": [
  { "type": "p", "text": "في B1 المطلوب إنك تكتب رأيك بشكل منظم: مقدمة، حجج للطرفين، رأيك الشخصي، وختام. الهيكل ده بيشتغل في أي موضوع." },
  { "type": "h", "text": "الهيكل" },
  { "type": "list", "items": [
   "المقدمة: présenter le sujet (قدم الموضوع).",
   "الطرف الأول: D'un côté... (من ناحية...).",
   "الطرف التاني: D'un autre côté... (من ناحية تانية...).",
   "رأيك: À mon avis / Je pense que... (في رأيي / أنا فاكر إن...).",
   "الختام: En conclusion / Pour conclure... (في الختام / عشان أخلص...)."
  ]},
  { "type": "h", "text": "تعبيرات مفيدة" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["D'un côté / D'un autre côté", "من ناحية / من ناحية تانية"],
   ["À mon avis", "في رأيي"],
   ["Je pense que / Je crois que", "أنا فاكر إن"],
   ["Il me semble que", "يبدو لي إن"],
   ["En conclusion", "في الختام"],
   ["Cependant", "لكن"],
   ["De plus", "كمان / زيادة على كده"]
  ]},
  { "type": "ex", "task": "اكتب فقرة قصيرة تقارن فيها بين الدراسة في مصر والدراسة في فرنسا.", "hint": "D'un côté... D'un autre côté... À mon avis...", "code": "D'un côté, étudier en Égypte est moins cher. D'un autre côté, étudier en France offre plus d'opportunités. À mon avis, les deux sont bons.", "why": "المقارنة والرأي من أهم مهارات B1." }
 ],
 "quiz": [
  { "q": "`À mon avis` معناها؟", "options": [{ "text": "في الحقيقة" }, { "text": "في رأيي" }, { "text": "في الختام" }, { "text": "من ناحية" }], "answer": 1, "explain": "À mon avis = في رأيي." },
  { "q": "أي تعبير بيقدم الطرف التاني؟", "options": [{ "text": "D'un côté" }, { "text": "D'un autre côté" }, { "text": "En conclusion" }, { "text": "À mon avis" }], "answer": 1, "explain": "D'un autre côté = من ناحية تانية." },
  { "q": "`Je pense que c'est bon` معناها؟", "options": [{ "text": "أنا متأكد إنه كويس" }, { "text": "أنا فاكر إنه كويس" }, { "text": "أنا مش عارف" }, { "text": "أنا موافق" }], "answer": 1, "explain": "Je pense que = أنا فاكر إن (رأي شخصي)." },
  { "q": "الختام الرسمي للمقال؟", "options": [{ "text": "À mon avis" }, { "text": "En conclusion" }, { "text": "D'un côté" }, { "text": "De plus" }], "answer": 1, "explain": "En conclusion = في الختام." },
  { "q": "`Il me semble que` معناها؟", "options": [{ "text": "يبدو لي إن" }, { "text": "أنا متأكد إن" }, { "text": "أنا عارف إن" }, { "text": "أنا مش فاكر إن" }], "answer": 0, "explain": "Il me semble que = يبدو لي إن (أقل تأكيداً من Je pense)." },
  { "q": "أي تعبير بيضيف معلومة؟", "options": [{ "text": "Cependant" }, { "text": "De plus" }, { "text": "À mon avis" }, { "text": "En conclusion" }], "answer": 1, "explain": "De plus = كمان / زيادة على كده." }
 ],
 "exercises": [
  { "task": "اكتب فقرة رأي (5 جمل) عن موضوع تختاره.", "hint": "مقدمة، طرفين، رأيك، ختام.", "code": "D'un côté, le français est difficile. D'un autre côté, c'est très utile. À mon avis, c'est important d'apprendre le français. De plus, c'est une belle langue. En conclusion, je veux continuer.", "why": "الفقرة دي هي نموذج أي كتابة رأي في B1." },
  { "task": "صحح الغلط: `Je pense que c'est bon, mais je pense que c'est mauvais.`", "hint": "مينفعش تقول رأيين متناقضين.", "code": "D'un côté, c'est bon. D'un autre côté, c'est mauvais. À mon avis, c'est bon.", "why": "الرأي الشخصي واحد، بس تقدر تعرض الطرفين الأول." }
 ]
},
{
 "id": "b1-speak",
 "level": "B1",
 "skill": "speaking",
 "nav": "كلام: رأيك ومشاكل يومية",
 "title": "🗣️ كلام: رأيك ومشاكل يومية",
 "subtitle": "قول رأيك في موضوع وحكي عن مشكلة حصلتلك",
 "blocks": [
  { "type": "p", "text": "في B1 المطلوب إنك تتكلم عن موضوع عام وتقول رأيك، وتحكي عن مشكلة حصلتلك وإزاي حليتها." },
  { "type": "h", "text": "التعبير عن الرأي" },
  { "type": "list", "items": [
   "`À mon avis, le français est très utile.` = في رأيي، الفرنسي مفيد جداً.",
   "`Je pense que c'est important d'apprendre les langues.` = فاكر إنه مهم تتعلم لغات.",
   "`Je suis d'accord avec toi.` = موافقك.",
   "`Je ne suis pas d'accord.` = مش موافق.",
   "`C'est vrai que..., mais...` = صحيح إن...، بس..."
  ]},
  { "type": "h", "text": "حكي عن مشكلة" },
  { "type": "list", "items": [
   "`J'ai eu un problème avec...` = حصلتلي مشكلة مع...",
   "`D'abord, j'ai essayé de...` = الأول، حاولت...",
   "`Ensuite, j'ai demandé de l'aide.` = بعدين، طلبت مساعدة.",
   "`Finalement, j'ai trouvé une solution.` = في الآخر، لقيت حل."
  ]},
  { "type": "speak", "en": "À mon avis, apprendre le français est très important. J'ai eu un problème avec la prononciation, mais j'ai écouté beaucoup de podcasts et maintenant ça va mieux.", "ar": "في رأيي، تعلم الفرنسي مهم جداً. كانت عندي مشكلة مع النطق، بس سمعت بودكاست كتير ودلوقتي أحسن." }
 ],
 "quiz": [
  { "q": "`Je suis d'accord` معناها؟", "options": [{ "text": "مش موافق" }, { "text": "موافق" }, { "text": "مش فاهم" }, { "text": "مش عارف" }], "answer": 1, "explain": "être d'accord = موافق." },
  { "q": "عايز تقول رأيك بشكل مهذب؟", "options": [{ "text": "C'est nul !" }, { "text": "À mon avis, ce n'est pas très bon." }, { "text": "Tais-toi !" }, { "text": "C'est mauvais !" }], "answer": 1, "explain": "À mon avis + نفي مهذب = رأي محترم." },
  { "q": "`J'ai eu un problème` معناها؟", "options": [{ "text": "عندي مشكلة" }, { "text": "حصلتلي مشكلة" }, { "text": "هيبقى عندي مشكلة" }, { "text": "عايز مشكلة" }], "answer": 1, "explain": "passé composé: حصلتلي مشكلة (في الماضي)." },
  { "q": "أي تعبير بيبدأ حكاية مشكلة؟", "options": [{ "text": "À mon avis" }, { "text": "D'abord" }, { "text": "En conclusion" }, { "text": "Je suis d'accord" }], "answer": 1, "explain": "D'abord = الأول: بداية التسلسل." },
  { "q": "`Je ne suis pas d'accord` معناها؟", "options": [{ "text": "موافق" }, { "text": "مش موافق" }, { "text": "مش فاهم" }, { "text": "مش عارف" }], "answer": 1, "explain": "النفي: ne...pas + d'accord = مش موافق." },
  { "q": "`Finalement, j'ai trouvé une solution` معناها؟", "options": [{ "text": "لسه بدوّر على حل" }, { "text": "في الآخر لقيت حل" }, { "text": "مفيش حل" }, { "text": "هحلها بكرة" }], "answer": 1, "explain": "finalement = في الآخر / أخيراً." }
 ],
 "exercises": [
  { "task": "سجل صوتك وانت بتقول رأيك في تعلم الفرنسي (30 ثانية).", "hint": "À mon avis... Je pense que... De plus...", "code": "سجل، اسمع، صحح.", "why": "الكلام بصوت عالي هو الطريقة الوحيدة للتقدم." },
  { "task": "حكي عن مشكلة حصلتلك الأسبوع ده وإزاي حليتها (4 جمل).", "hint": "J'ai eu un problème... D'abord... Ensuite... Finalement...", "code": "J'ai eu un problème avec mon ordinateur. D'abord, j'ai essayé de le réparer. Ensuite, j'ai demandé de l'aide. Finalement, un ami m'a aidé.", "why": "حكي المشاكل مهارة محادثة أساسية." }
 ]
}
);

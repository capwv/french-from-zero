/* Level B2: core + skills (French) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "b2-core",
 "level": "B2",
 "skill": "core",
 "nav": "أساسي: le subjonctif في العمق",
 "title": "🎯 أساسي: le subjonctif في العمق",
 "subtitle": "أتقن الـ subjonctif: المشاعر، الشك، الرغبة، والضرورة",
 "blocks": [
  { "type": "p", "text": "الـ subjonctif هو علامة B2 الحقيقية. في A2 اتعرفنا عليه بشكل بسيط، هنا هنتعمق: امتى يتستخدم، إزاي يتصرف، وإيه الأفعال الشاذة المهمة." },
  { "type": "h", "text": "امتى نستخدم الـ subjonctif؟" },
  { "type": "table", "head": ["الفئة", "التعبير", "مثال"], "rows": [
   ["الرغبة", "vouloir que, souhaiter que", "Je veux que tu viennes."],
   ["المشاعر", "être content que, avoir peur que", "Je suis content que tu sois là."],
   ["الشك", "douter que, ne pas penser que", "Je doute qu'il vienne."],
   ["الضرورة", "il faut que, il est important que", "Il faut que tu étudies."],
   ["التعارض", "bien que, quoique", "Bien qu'il soit riche, il n'est pas heureux."],
   ["الغرض", "pour que, afin que", "Je t'explique pour que tu comprennes."]
  ]},
  { "type": "h", "text": "التصريف" },
  { "type": "p", "text": "خذ ils في المضارع، شيل -ent، وحط: -e, -es, -e, -ions, -iez, -ent." },
  { "type": "table", "head": ["الفعل", "je", "nous", "ils"], "rows": [
   ["parler", "parle", "parlions", "parlent"],
   ["finir", "finisse", "finissions", "finissent"],
   ["vendre", "vende", "vendions", "vendent"],
   ["être (شاذ)", "sois", "soyons", "soient"],
   ["avoir (شاذ)", "aie", "ayons", "aient"],
   ["aller (شاذ)", "aille", "allions", "aillent"],
   ["faire (شاذ)", "fasse", "fassions", "fassent"],
   ["pouvoir (شاذ)", "puisse", "puissions", "puissent"]
  ]},
  { "type": "note", "text": "بعد تعبيرات اليقين (je pense que, je crois que, il est certain que) بنستخدم l'indicatif العادي، مش subjonctif. الـ subjonctif بييجي مع الشك والمشاعر والرغبة." },
  { "type": "ex", "task": "حوّل للـ subjonctif: Il faut que tu (venir). / Je veux que tu (être) là. / Bien qu'il (faire) beau.", "hint": "venir → vienne، être → sois، faire → fasse.", "code": "Il faut que tu viennes. Je veux que tu sois là. Bien qu'il fasse beau.", "why": "الـ subjonctif هو علامة B2." }
 ],
 "quiz": [
  { "q": "امتى نستخدم الـ subjonctif؟", "options": [{ "text": "بعد الحقائق" }, { "text": "بعد المشاعر والرغبة والشك" }, { "text": "في الماضي" }, { "text": "في المستقبل" }], "answer": 1, "explain": "subjonctif = مشاعر، رغبة، شك، ضرورة." },
  { "q": "تصريف être في الـ subjonctif مع nous؟", "options": [{ "text": "nous sommes" }, { "text": "nous soyons" }, { "text": "nous étions" }, { "text": "nous serons" }], "answer": 1, "explain": "être شاذ: nous soyons." },
  { "q": "`Je doute qu'il vienne` معناها؟", "options": [{ "text": "متأكد إنه هيجي" }, { "text": "شاكك إنه هيجي" }, { "text": "فاكر إنه هيجي" }, { "text": "عايزه يجي" }], "answer": 1, "explain": "douter que + subjonctif = شك." },
  { "q": "أي تعبير بياخد indicatif مش subjonctif؟", "options": [{ "text": "Je veux que" }, { "text": "Il faut que" }, { "text": "Je pense que" }, { "text": "Bien que" }], "answer": 2, "explain": "Je pense que = يقين = indicatif. Je ne pense pas que = شك = subjonctif." },
  { "q": "تصريف aller في الـ subjonctif مع je؟", "options": [{ "text": "je vais" }, { "text": "j'aille" }, { "text": "j'irai" }, { "text": "j'allais" }], "answer": 1, "explain": "aller شاذ: j'aille, nous allions." },
  { "q": "`Il faut que tu étudies` معناها؟", "options": [{ "text": "لازم تذاكر" }, { "text": "عايزك تذاكر" }, { "text": "ممكن تذاكر" }, { "text": "هتذاكر" }], "answer": 0, "explain": "Il faut que + subjonctif = ضرورة." }
 ],
 "exercises": [
  { "task": "اكتب 4 جمل بـ subjonctif: رغبة، مشاعر، شك، ضرورة.", "hint": "Je veux que, Je suis content que, Je doute que, Il faut que.", "code": "Je veux que tu viennes. Je suis content que tu sois là. Je doute qu'il fasse beau. Il faut que tu étudies.", "why": "الـ subjonctif هو مفتاح B2." },
  { "task": "صحح الغلط: `Je pense qu'il vienne.`", "hint": "Je pense que = يقين ولا شك؟", "code": "Je pense qu'il vient. (يقين = indicatif)", "why": "اليقين = indicatif، الشك = subjonctif." }
 ]
},
{
 "id": "b2-listen",
 "level": "B2",
 "skill": "listening",
 "nav": "استماع: بودكاست",
 "title": "🎧 استماع: بودكاست",
 "subtitle": "اسمع مقطع بودكاست عن التكنولوجيا والمجتمع",
 "blocks": [
  { "type": "p", "text": "البودكاست هو مصدر الاستماع الأساسي في B2. النص أطول والموضوع أعمق. اسمع الأول للفكرة العامة، وبعدين للتفاصيل." },
  { "type": "p", "text": "Aujourd'hui, nous parlons de l'impact des réseaux sociaux sur la société. D'un côté, ils permettent de rester en contact avec ses amis et sa famille, même à distance. De plus, ils offrent des opportunités professionnelles et éducatives. D'un autre côté, ils peuvent créer une dépendance et réduire les interactions réelles. Il est donc important de les utiliser avec modération. À mon avis, les réseaux sociaux sont un outil, et comme tout outil, tout dépend de la façon dont on l'utilise.", "ar": "النهارده بنتكلم عن تأثير السوشيال ميديا على المجتمع. من ناحية، بتخلينا نفضل على تواصل مع أصحابنا وعيلتنا حتى من بعيد. كمان بتقدم فرص شغل وتعليم. من ناحية تانية، ممكن تعمل إدمان وتقلل التفاعلات الحقيقية. عشان كده مهم نستخدمها باعتدال. في رأيي، السوشيال ميديا أداة، وزي أي أداة، كل حاجة بتعتمد على طريقة استخدامها." },
  { "type": "h", "text": "مفردات البودكاست" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["l'impact", "التأثير"],
   ["les réseaux sociaux", "السوشيال ميديا"],
   ["rester en contact", "يفضل على تواصل"],
   ["la dépendance", "الإدمان"],
   ["avec modération", "باعتدال"],
   ["tout dépend de", "كل حاجة بتعتمد على"]
  ]}
 ],
 "quiz": [
  { "q": "البودكاست عن إيه؟", "options": [{ "text": "الأكل" }, { "text": "السوشيال ميديا" }, { "text": "الرياضة" }, { "text": "السفر" }], "answer": 1, "explain": "l'impact des réseaux sociaux sur la société." },
  { "q": "ميزة السوشيال ميديا؟", "options": [{ "text": "الإدمان" }, { "text": "التواصل مع الناس" }, { "text": "قلة التفاعل" }, { "text": "مفيش ميزة" }], "answer": 1, "explain": "rester en contact avec ses amis et sa famille." },
  { "q": "عيب السوشيال ميديا؟", "options": [{ "text": "التواصل" }, { "text": "الفرص" }, { "text": "الإدمان" }, { "text": "مفيش عيب" }], "answer": 2, "explain": "ils peuvent créer une dépendance." },
  { "q": "`avec modération` معناها؟", "options": [{ "text": "بسرعة" }, { "text": "باعتدال" }, { "text": "كتير" }, { "text": "قليل" }], "answer": 1, "explain": "modération = اعتدال / وسط." },
  { "q": "رأي المتحدث؟", "options": [{ "text": "السوشيال ميديا وحشة" }, { "text": "السوشيال ميديا كويسة" }, { "text": "السوشيال ميديا أداة" }, { "text": "مفيش رأي" }], "answer": 2, "explain": "c'est un outil, tout dépend de la façon dont on l'utilise." },
  { "q": "`tout dépend de` معناها؟", "options": [{ "text": "كل حاجة مضمونة" }, { "text": "كل حاجة بتعتمد على" }, { "text": "كل حاجة صعبة" }, { "text": "كل حاجة سهلة" }], "answer": 1, "explain": "tout dépend de = كل حاجة بتعتمد على." }
 ],
 "exercises": [
  { "task": "اسمع البودكاست مرتين ولخص الفكرة في جملتين.", "hint": "المزايا والعيوب والرأي.", "code": "السوشيال ميديا ليها مزايا وعيوب. المهم نستخدمها باعتدال.", "why": "التلخيص بيثبت الفهم العام." },
  { "task": "اكتب رأيك في السوشيال ميديا في 3 جمل.", "hint": "À mon avis... D'un côté... D'un autre côté...", "code": "À mon avis, les réseaux sociaux sont utiles. D'un côté, ils permettent de rester en contact. D'un autre côté, ils peuvent créer une dépendance.", "why": "التعبير عن الرأي مهارة B2 أساسية." }
 ]
},
{
 "id": "b2-read",
 "level": "B2",
 "skill": "reading",
 "nav": "قراءة: مقال رأي",
 "title": "📖 قراءة: مقال رأي",
 "subtitle": "اقرا مقال رأي عن التعليم عن بُعد",
 "blocks": [
  { "type": "p", "text": "مقالات الرأي هي نصوص B2 المعيار. المقال ده بيعرض رأي الكاتب عن التعليم عن بُعد مع حجج واضحة." },
  { "type": "p", "text": "L'enseignement à distance est devenu très courant ces dernières années. Cependant, il suscite un débat animé. Les partisans affirment qu'il offre une flexibilité inégalée : les étudiants peuvent apprendre à leur rythme, où qu'ils soient. De plus, il réduit les coûts de transport et permet l'accès à des cours du monde entier. Les détracteurs, quant à eux, soulignent l'isolement social et la baisse de motivation. Ils ajoutent que l'interaction directe avec le professeur est irremplaçable. À mon sens, l'enseignement à distance est un complément utile, mais il ne doit pas remplacer complètement l'enseignement présentiel.", "ar": "التعليم عن بُعد بقى منتشر جداً في السنين الأخيرة. بس بيثير نقاش حاد. المؤيدين بيقولوا إنه بيقدم مرونة مش متناهية: الطلبة يقدروا يتعلموا على مزاجهم، من أي مكان. كمان بيقلل تكاليف المواصلات وبيسمح بالوصول لكورسات من العالم كله. المعارضين، من ناحيتهم، بيركزوا على العزلة الاجتماعية وقلة الدافع. وبيضيفوا إن التفاعل المباشر مع الأستاذ لا يُعوض. في رأيي، التعليم عن بُعد مكمل مفيد، بس مش المفروض يحل محل التعليم الحضوري بالكامل." },
  { "type": "h", "text": "مفردات المقال" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["l'enseignement à distance", "التعليم عن بُعد"],
   ["courant", "منتشر / شائع"],
   ["susciter", "يثير"],
   ["les partisans", "المؤيدين"],
   ["les détracteurs", "المعارضين"],
   ["quant à eux", "من ناحيتهم"],
   ["souligner", "يركز على"],
   ["irremplaçable", "لا يُعوض"],
   ["à mon sens", "في رأيي (رسمي)"]
  ]}
 ],
 "quiz": [
  { "q": "المقال عن إيه؟", "options": [{ "text": "التعليم في المدارس" }, { "text": "التعليم عن بُعد" }, { "text": "الامتحانات" }, { "text": "الجامعات" }], "answer": 1, "explain": "l'enseignement à distance = التعليم عن بُعد." },
  { "q": "المؤيدين بيقولوا إيه؟", "options": [{ "text": "العزلة الاجتماعية" }, { "text": "المرونة" }, { "text": "قلة الدافع" }, { "text": "التفاعل المباشر" }], "answer": 1, "explain": "flexibilité inégalée = مرونة مش متناهية." },
  { "q": "المعارضين بيقولوا إيه؟", "options": [{ "text": "المرونة" }, { "text": "العزلة الاجتماعية" }, { "text": "التكاليف المنخفضة" }, { "text": "الوصول العالمي" }], "answer": 1, "explain": "l'isolement social et la baisse de motivation." },
  { "q": "رأي الكاتب؟", "options": [{ "text": "التعليم عن بُعد وحش" }, { "text": "التعليم عن بُعد كويس" }, { "text": "التعليم عن بُعد مكمل مش بديل" }, { "text": "مفيش رأي" }], "answer": 2, "explain": "un complément utile, mais il ne doit pas remplacer complètement." },
  { "q": "`irremplaçable` معناها؟", "options": [{ "text": "ممكن يتعوض" }, { "text": "لا يُعوض" }, { "text": "مهم" }, { "text": "صعب" }], "answer": 1, "explain": "irremplaçable = لا يُعوض / لا يمكن استبداله." },
  { "q": "`à mon sens` معناها؟", "options": [{ "text": "في رأيي" }, { "text": "في الحقيقة" }, { "text": "في الختام" }, { "text": "من ناحية" }], "answer": 0, "explain": "à mon sens = في رأيي (رسمي أكتر من à mon avis)." }
 ],
 "exercises": [
  { "task": "لخص المقال في 3 جمل بالعربي.", "hint": "المزايا والعيوب ورأي الكاتب.", "code": "التعليم عن بُعد بيقدم مرونة وتوفير. بس بيعمل عزلة. الكاتب شايف إنه مكمل مش بديل.", "why": "التلخيص بيثبت الفهم." },
  { "task": "اكتب رأيك في التعليم عن بُعد في 4 جمل.", "hint": "D'un côté... D'un autre côté... À mon sens...", "code": "D'un côté, l'enseignement à distance offre une flexibilité. D'un autre côté, il crée de l'isolement. À mon sens, c'est un complément utile.", "why": "التعبير عن الرأي مهارة B2." }
 ]
},
{
 "id": "b2-write",
 "level": "B2",
 "skill": "writing",
 "nav": "كتابة: مقال رسمي",
 "title": "✍️ كتابة: مقال رسمي",
 "subtitle": "اكتب مقال منظم عن موضوع عام",
 "blocks": [
  { "type": "p", "text": "في B2 المطلوب مقال كامل: مقدمة، عرض الحجج، مناقشة، رأي شخصي مدعوم، وختام. الهيكل ده بيشتغل في أي موضوع عام." },
  { "type": "h", "text": "الهيكل المتقدم" },
  { "type": "list", "items": [
   "المقدمة: présenter le sujet et la problématique (قدم الموضوع والسؤال).",
   "الفقرة 1: les arguments pour (حجج المؤيدين).",
   "الفقرة 2: les arguments contre (حجج المعارضين).",
   "الفقرة 3: votre opinion (رأيك الشخصي).",
   "الختام: En conclusion (في الختام)."
  ]},
  { "type": "h", "text": "تعبيرات B2" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["Il est indéniable que", "لا شك إن"],
   ["Il convient de", "من المناسب"],
   ["Certains affirment que", "بعض الناس بيقولوا إن"],
   ["D'autres soutiennent que", "آخرين بيؤكدوا إن"],
   ["Il n'en reste pas moins que", "ومع ذلك فإن"],
   ["Force est de constater que", "لا مفر من ملاحظة إن"]
  ]},
  { "type": "ex", "task": "اكتب مقدمة مقال عن التكنولوجيا في التعليم.", "hint": "présenter le sujet + la problématique.", "code": "La technologie dans l'éducation est un sujet de débat. Certains affirment qu'elle améliore l'apprentissage, d'autres soutiennent qu'elle distrait les élèves. Il convient d'examiner les deux points de vue.", "why": "المقدمة القوية هي مفتاح المقال الجيد." }
 ],
 "quiz": [
  { "q": "`Il est indéniable que` معناها؟", "options": [{ "text": "ممكن إن" }, { "text": "لا شك إن" }, { "text": "مش مؤكد إن" }, { "text": "يبدو إن" }], "answer": 1, "explain": "indéniable = لا شك فيه / لا يمكن إنكاره." },
  { "q": "`Certains affirment que` معناها؟", "options": [{ "text": "كل الناس بيقولوا" }, { "text": "بعض الناس بيقولوا" }, { "text": "مفيش حد بيقول" }, { "text": "أنا بقول" }], "answer": 1, "explain": "certains = بعض: بعض الناس بيقولوا." },
  { "q": "الفقرة التالتة في المقال؟", "options": [{ "text": "المقدمة" }, { "text": "حجج المؤيدين" }, { "text": "رأيك الشخصي" }, { "text": "الختام" }], "answer": 2, "explain": "بعد عرض الطرفين، رأيك الشخصي." },
  { "q": "`Il n'en reste pas moins que` معناها؟", "options": [{ "text": "ومع ذلك فإن" }, { "text": "عشان كده" }, { "text": "في الختام" }, { "text": "من ناحية" }], "answer": 0, "explain": "تعبير رسمي: ومع ذلك فإن / بالرغم من كل ده." },
  { "q": "أي تعبير بيقدم رأي معارض؟", "options": [{ "text": "Certains affirment que" }, { "text": "D'autres soutiennent que" }, { "text": "Il est indéniable que" }, { "text": "En conclusion" }], "answer": 1, "explain": "D'autres soutiennent = آخرين بيؤكدوا (الطرف التاني)." },
  { "q": "`Force est de constater que` معناها؟", "options": [{ "text": "لا مفر من ملاحظة إن" }, { "text": "من السهل ملاحظة إن" }, { "text": "من الصعب ملاحظة إن" }, { "text": "مش مهم ملاحظة إن" }], "answer": 0, "explain": "تعبير رسمي جداً: لا مفر من ملاحظة إن." }
 ],
 "exercises": [
  { "task": "اكتب مقال قصير (8 جمل) عن موضوع تختاره.", "hint": "مقدمة، حجج للطرفين، رأيك، ختام.", "code": "La technologie dans l'éducation est un sujet de débat. Certains affirment qu'elle améliore l'apprentissage. D'autres soutiennent qu'elle distrait les élèves. À mon sens, c'est un outil utile. En conclusion, il faut l'utiliser avec modération.", "why": "المقال المنظم هو مهارة B2 الأساسية." },
  { "task": "صحح الغلط: `Je pense que c'est bon et c'est mauvais.`", "hint": "الرأي الشخصي واحد.", "code": "Certains affirment que c'est bon. D'autres soutiennent que c'est mauvais. À mon sens, c'est bon.", "why": "اعرض الطرفين الأول، وبعدين قول رأيك." }
 ]
},
{
 "id": "b2-speak",
 "level": "B2",
 "skill": "speaking",
 "nav": "كلام: مناقشة",
 "title": "🗣️ كلام: مناقشة",
 "subtitle": "شارك في مناقشة ودافع عن رأيك",
 "blocks": [
  { "type": "p", "text": "المناقشة في B2 مش بس تقول رأيك، لازم تدافع عنه وترد على الطرف التاني بحجج منطقية." },
  { "type": "h", "text": "تعبيرات المناقشة" },
  { "type": "list", "items": [
   "`Je suis tout à fait d'accord avec vous.` = موافق تماماً.",
   "`Je vois les choses différemment.` = شايف الموضوع بشكل مختلف.",
   "`Vous avez raison, mais...` = معاك حق، بس...",
   "`Permettez-moi de ne pas être d'accord.` = اسمحلي أختلف معاك.",
   "`C'est un bon point, cependant...` = نقطة كويسة، لكن...",
   "`Pourriez-vous développer ?` = ممكن توضح أكتر؟"
  ]},
  { "type": "speak", "en": "Je suis d'accord que la technologie est utile, mais je vois les choses différemment. À mon sens, l'interaction humaine est irremplaçable.", "ar": "موافق إن التكنولوجيا مفيدة، بس شايف الموضوع بشكل مختلف. في رأيي، التفاعل البشري لا يُعوض." }
 ],
 "quiz": [
  { "q": "`Je vois les choses différemment` معناها؟", "options": [{ "text": "موافق" }, { "text": "شايف الموضوع بشكل مختلف" }, { "text": "مش فاهم" }, { "text": "مش عايز أتكلم" }], "answer": 1, "explain": "تعبير مهذب عن الاختلاف." },
  { "q": "أي تعبير بيعرض اختلاف بشكل مهذب؟", "options": [{ "text": "C'est faux !" }, { "text": "Permettez-moi de ne pas être d'accord." }, { "text": "Vous avez tort !" }, { "text": "Non !" }], "answer": 1, "explain": "Permettez-moi de ne pas être d'accord = اختلاف مهذب جداً." },
  { "q": "`Vous avez raison, mais...` معناها؟", "options": [{ "text": "معاك حق" }, { "text": "معاك حق، بس..." }, { "text": "غلط" }, { "text": "مش عارف" }], "answer": 1, "explain": "تعبير بيعترف بنقطة الطرف التاني قبل الرد." },
  { "q": "عايز تطلب توضيح أكتر؟", "options": [{ "text": "Quoi ?" }, { "text": "Pourriez-vous développer ?" }, { "text": "Répétez !" }, { "text": "Je ne comprends pas." }], "answer": 1, "explain": "Pourriez-vous développer ? = طلب توضيح مهذب." },
  { "q": "`Je suis tout à fait d'accord` معناها؟", "options": [{ "text": "موافق شوية" }, { "text": "موافق تماماً" }, { "text": "مش موافق" }, { "text": "مش متأكد" }], "answer": 1, "explain": "tout à fait = تماماً / بالكامل." },
  { "q": "أهم حاجة في المناقشة؟", "options": [{ "text": "الصوت العالي" }, { "text": "الحجج المنطقية" }, { "text": "السرعة" }, { "text": "الكلام الكتير" }], "answer": 1, "explain": "الحجج المنطقية هي أساس المناقشة." }
 ],
 "exercises": [
  { "task": "سجل صوتك وانت بتدافع عن رأيك في موضوع (دقيقة).", "hint": "À mon sens... De plus... Cependant...", "code": "سجل، اسمع، صحح.", "why": "المناقشة بصوت عالي هي أعلى مهارة كلام." },
  { "task": "اكتب رد مهذب على رأي مخالف (3 جمل).", "hint": "Vous avez raison, mais... Permettez-moi de ne pas être d'accord.", "code": "Vous avez raison sur ce point. Cependant, je vois les choses différemment. Permettez-moi de ne pas être d'accord sur la conclusion.", "why": "الرد المهذب على الاختلاف مهارة اجتماعية مهمة." }
 ]
}
);

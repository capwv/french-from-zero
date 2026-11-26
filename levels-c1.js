/* Level C1: core + skills (French) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "c1-core",
 "level": "C1",
 "skill": "core",
 "nav": "أساسي: الأسلوب الرسمي",
 "title": "🎩 أساسي: الأسلوب الرسمي",
 "subtitle": "الفرق بين الفرنسي اليومي والفرنسي الرسمي والأدبي",
 "blocks": [
  { "type": "p", "text": "في C1 لازم تعرف تتنقل بين 3 مستويات من الفرنسي: اليومي (courant)، الرسمي (soutenu)، والأدبي (littéraire). كل مستوى ليه مفرداته وصيغه." },
  { "type": "h", "text": "المستويات التلاتة" },
  { "type": "table", "head": ["المستوى", "المثال", "الاستخدام"], "rows": [
   ["يومي (courant)", "C'est pas mal. / Je sais pas.", "مع الصحاب والعيلة"],
   ["رسمي (soutenu)", "Cela n'est pas négligeable. / Je ne sais pas.", "في الشغل والإيميلات الرسمية"],
   ["أدبي (littéraire)", "Il n'est point de vérité absolue.", "في الكتب والخطابات الرسمية جداً"]
  ]},
  { "type": "h", "text": "تحويلات رسمية مهمة" },
  { "type": "table", "head": ["يومي", "رسمي"], "rows": [
   ["Ça", "Cela / Ceci"],
   ["Il y a", "Il existe"],
   ["Beaucoup", "Considérablement / De nombreux"],
   ["Mais", "Cependant / Néanmoins / Toutefois"],
   ["Donc", "Par conséquent / Ainsi / C'est pourquoi"],
   ["Aussi", "Également / De même"],
   ["Très", "Extrêmement / Particulièrement"]
  ]},
  { "type": "ex", "task": "حوّل الجمل دي للرسمي: `Ça marche bien.` / `Il y a beaucoup de problèmes.`", "hint": "Ça → Cela، Il y a → Il existe، beaucoup → de nombreux.", "code": "Cela fonctionne bien. Il existe de nombreux problèmes.", "why": "الأسلوب الرسمي هو مفتاح C1." }
 ],
 "quiz": [
  { "q": "الفرق بين courant و soutenu؟", "options": [{ "text": "مفيش فرق" }, { "text": "courant يومي و soutenu رسمي" }, { "text": "courant رسمي و soutenu يومي" }, { "text": "الاتنين رسمي" }], "answer": 1, "explain": "courant = مع الصحاب، soutenu = في الشغل." },
  { "q": "`Cela` هو الرسمي من؟", "options": [{ "text": "Ça" }, { "text": "C'est" }, { "text": "Il" }, { "text": "Ce" }], "answer": 0, "explain": "Ça → Cela في الرسمي." },
  { "q": "الرسمي من donc؟", "options": [{ "text": "mais" }, { "text": "par conséquent" }, { "text": "très" }, { "text": "aussi" }], "answer": 1, "explain": "donc → par conséquent / ainsi." },
  { "q": "`Il n'est point de vérité absolue` أسلوب إيه؟", "options": [{ "text": "يومي" }, { "text": "رسمي" }, { "text": "أدبي" }, { "text": "عامي" }], "answer": 2, "explain": "point بدل pas = أدبي. ne...point بدل ne...pas." },
  { "q": "`De nombreux` معناها؟", "options": [{ "text": "قليل" }, { "text": "كتير (رسمي)" }, { "text": "بعض" }, { "text": "كل" }], "answer": 1, "explain": "de nombreux = beaucoup في الرسمي." },
  { "q": "امتى نستخدم الأسلوب الأدبي؟", "options": [{ "text": "مع الصحاب" }, { "text": "في الشغل" }, { "text": "في الكتب والخطابات الرسمية جداً" }, { "text": "في التليفون" }], "answer": 2, "explain": "littéraire = أدبي: للكتب والنصوص الرسمية جداً." }
 ],
 "exercises": [
  { "task": "حوّل 3 جمل يومية للرسمي.", "hint": "Ça → Cela، beaucoup → de nombreux، donc → par conséquent.", "code": "Cela fonctionne bien. Il existe de nombreux problèmes. Par conséquent, il faut agir.", "why": "التحويل بين المستويات مهارة C1." },
  { "task": "اكتب جملة رسمية وجملة يومية عن نفس الموضوع.", "hint": "نفس الفكرة بأسلوبين.", "code": "يومي: C'est pas mal. رسمي: Cela n'est pas négligeable.", "why": "المرونة بين المستويات هي علامة C1." }
 ]
},
{
 "id": "c1-listen",
 "level": "C1",
 "skill": "listening",
 "nav": "استماع: محاضرة",
 "title": "🎧 استماع: محاضرة",
 "subtitle": "اسمع محاضرة أكاديمية عن اللسانيات",
 "blocks": [
  { "type": "p", "text": "المحاضرات الأكاديمية هي نصوص C1. اللغة رسمية والموضوع متخصص. اسمع للفكرة العامة الأول، وبعدين للحجج." },
  { "type": "p", "text": "La linguistique moderne s'interroge sur la nature du langage humain. Certains linguistes, comme Noam Chomsky, affirment que la capacité linguistique est innée, c'est-à-dire que nous naissons avec une grammaire universelle. D'autres, comme les behavioristes, soutiennent que le langage est entièrement acquis par l'expérience et l'imitation. La vérité se situe probablement entre les deux : nous avons une prédisposition biologique pour le langage, mais l'environnement joue un rôle crucial dans son développement.", "ar": "اللسانيات الحديثة بتتساءل عن طبيعة اللغة البشرية. بعض اللسانيين، زي نوام تشومسكي، بيقولوا إن القدرة اللغوية فطرية، يعني بنتولد بجرامر عالمي. آخرين، زي السلوكيين، بيؤكدوا إن اللغة مكتسبة بالكامل من التجربة والتقليد. الحقيقة على الأرجح في النص: عندنا استعداد بيولوجي للغة، بس البيئة بتلعب دور حاسم في تطويرها." },
  { "type": "h", "text": "مفردات أكاديمية" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["s'interroger sur", "يتساءل عن"],
   ["inné", "فطري"],
   ["c'est-à-dire", "يعني / أي"],
   ["acquis", "مكتسب"],
   ["se situer", "تقع / تكون"],
   ["la prédisposition", "الاستعداد"],
   ["crucial", "حاسم / مهم جداً"]
  ]}
 ],
 "quiz": [
  { "q": "المحاضرة عن إيه؟", "options": [{ "text": "تاريخ فرنسا" }, { "text": "طبيعة اللغة البشرية" }, { "text": "الأكل الفرنسي" }, { "text": "السفر" }], "answer": 1, "explain": "la nature du langage humain." },
  { "q": "تشومسكي بيقول إيه؟", "options": [{ "text": "اللغة مكتسبة" }, { "text": "اللغة فطرية" }, { "text": "اللغة صعبة" }, { "text": "اللغة سهلة" }], "answer": 1, "explain": "la capacité linguistique est innée." },
  { "q": "السلوكيين بيقولوا إيه؟", "options": [{ "text": "اللغة فطرية" }, { "text": "اللغة مكتسبة من التجربة" }, { "text": "اللغة صعبة" }, { "text": "اللغة سهلة" }], "answer": 1, "explain": "le langage est entièrement acquis par l'expérience." },
  { "q": "رأي المحاضر؟", "options": [{ "text": "تشومسكي صح" }, { "text": "السلوكيين صح" }, { "text": "الحقيقة في النص" }, { "text": "مفيش رأي" }], "answer": 2, "explain": "La vérité se situe probablement entre les deux." },
  { "q": "`inné` معناها؟", "options": [{ "text": "مكتسب" }, { "text": "فطري" }, { "text": "صعب" }, { "text": "سهل" }], "answer": 1, "explain": "inné = فطري / موجود من الولادة." },
  { "q": "`c'est-à-dire` معناها؟", "options": [{ "text": "يعني / أي" }, { "text": "لكن" }, { "text": "عشان كده" }, { "text": "في الختام" }], "answer": 0, "explain": "c'est-à-dire = يعني / أي (توضيح)." }
 ],
 "exercises": [
  { "task": "لخص المحاضرة في جملتين بالعربي.", "hint": "النظريتين ورأي المحاضر.", "code": "في نظريتين عن اللغة: فطرية ومكتسبة. الحقيقة على الأرجح في النص.", "why": "التلخيص بيثبت الفهم." },
  { "task": "اكتب رأيك في النقاش في 3 جمل.", "hint": "À mon sens... Il est indéniable que...", "code": "À mon sens, la vérité est entre les deux. Il est indéniable que nous avons une prédisposition, mais l'environnement est crucial.", "why": "التعبير عن الرأي في موضوع أكاديمي مهارة C1." }
 ]
},
{
 "id": "c1-read",
 "level": "C1",
 "skill": "reading",
 "nav": "قراءة: نص أكاديمي",
 "title": "📖 قراءة: نص أكاديمي",
 "subtitle": "اقرا نص أكاديمي عن الفلسفة واللغة",
 "blocks": [
  { "type": "p", "text": "النصوص الأكاديمية في C1 بتتطلب فهم عميق ومفردات متخصصة. النص ده عن العلاقة بين اللغة والفكر." },
  { "type": "p", "text": "La question du rapport entre langue et pensée est l'une des plus anciennes de la philosophie. Wilhelm von Humboldt affirmait que chaque langue porte en elle une vision du monde particulière. Cette idée, reprise par Sapir et Whorf, est connue sous le nom d'hypothèse de la relativité linguistique. Selon cette hypothèse, la structure de notre langue influencerait notre façon de penser. Cependant, cette théorie reste controversée : certains psychologues cognitifs soutiennent que la pensée précède le langage et que les concepts universels existent indépendamment des langues. Le débat reste ouvert.", "ar": "سؤال العلاقة بين اللغة والفكر من أقدم الأسئلة الفلسفية. فيلهلم فون همبولت كان بيقول إن كل لغة بتحمل فيها رؤية خاصة للعالم. الفكرة دي، اللي تبناها سابير وورف، معروفة باسم فرضية النسبية اللغوية. حسب الفرضية دي، تركيب لغتنا بيأثر على طريقة تفكيرنا. بس النظرية دي لسه مثيرة للجدل: بعض علماء النفس المعرفي بيؤكدوا إن الفكر بيسبق اللغة وإن فيه مفاهيم عالمية موجودة بغض النظر عن اللغات. النقاش لسه مفتوح." },
  { "type": "h", "text": "مفردات أكاديمية" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["le rapport", "العلاقة"],
   ["la vision du monde", "رؤية العالم"],
   ["la relativité linguistique", "النسبية اللغوية"],
   ["influencer", "يأثر على"],
   ["controversé", "مثير للجدل"],
   ["précéder", "يسبق"],
   ["indépendamment de", "بغض النظر عن"],
   ["le débat reste ouvert", "النقاش لسه مفتوح"]
  ]}
 ],
 "quiz": [
  { "q": "النص عن إيه؟", "options": [{ "text": "تاريخ فرنسا" }, { "text": "العلاقة بين اللغة والفكر" }, { "text": "الأكل الفرنسي" }, { "text": "السفر" }], "answer": 1, "explain": "le rapport entre langue et pensée." },
  { "q": "فرضية النسبية اللغوية بتقول إيه؟", "options": [{ "text": "اللغة مش بتأثر على الفكر" }, { "text": "اللغة بتأثر على الفكر" }, { "text": "الفكر بيسبق اللغة" }, { "text": "مفيش علاقة" }], "answer": 1, "explain": "la structure de notre langue influencerait notre façon de penser." },
  { "q": "علماء النفس المعرفي بيقولوا إيه؟", "options": [{ "text": "اللغة بتأثر على الفكر" }, { "text": "الفكر بيسبق اللغة" }, { "text": "مفيش مفاهيم عالمية" }, { "text": "اللغة فطرية" }], "answer": 1, "explain": "la pensée précède le langage." },
  { "q": "`controversé` معناها؟", "options": [{ "text": "متفق عليه" }, { "text": "مثير للجدل" }, { "text": "واضح" }, { "text": "بسيط" }], "answer": 1, "explain": "controversé = مثير للجدل / محل نقاش." },
  { "q": "النقاش؟", "options": [{ "text": "انتهى" }, { "text": "لسه مفتوح" }, { "text": "مفيش نقاش" }, { "text": "اتحل" }], "answer": 1, "explain": "Le débat reste ouvert = النقاش لسه مفتوح." },
  { "q": "`indépendamment de` معناها؟", "options": [{ "text": "بسبب" }, { "text": "بغض النظر عن" }, { "text": "عشان" }, { "text": "بفضل" }], "answer": 1, "explain": "indépendamment de = بغض النظر عن / بمعزل عن." }
 ],
 "exercises": [
  { "task": "لخص النص في جملتين بالعربي.", "hint": "الفرضية والنقاش.", "code": "فرضية النسبية اللغوية بتقول إن اللغة بتأثر على الفكر. النقاش لسه مفتوح.", "why": "التلخيص بيثبت الفهم." },
  { "task": "اكتب رأيك في الفرضية في 3 جمل.", "hint": "À mon sens... Il est indéniable que... Cependant...", "code": "À mon sens, la langue influence notre pensée. Il est indéniable que les mots façonnent notre vision du monde. Cependant, la pensée existe aussi sans langue.", "why": "التعبير عن الرأي في موضوع أكاديمي مهارة C1." }
 ]
},
{
 "id": "c1-write",
 "level": "C1",
 "skill": "writing",
 "nav": "كتابة: مقال أكاديمي",
 "title": "✍️ كتابة: مقال أكاديمي",
 "subtitle": "اكتب مقال أكاديمي منظم بأسلوب رسمي",
 "blocks": [
  { "type": "p", "text": "المقال الأكاديمي في C1 بيتطلب أسلوب رسمي وحجج منطقية ومصادر. الهيكل: مقدمة، عرض النظريات، تحليل نقدي، ختام." },
  { "type": "h", "text": "تعبيرات أكاديمية" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["Il convient d'examiner", "من المناسب ندرس"],
   ["Il est à noter que", "من المهم ملاحظة إن"],
   ["Selon certains auteurs", "حسب بعض الكتاب"],
   ["Cette théorie postule que", "النظرية دي بتفترض إن"],
   ["Néanmoins, il reste à démontrer", "ومع ذلك، لسه محتاج إثبات"],
   ["En définitive", "في النهاية / في المحصلة"]
  ]},
  { "type": "ex", "task": "اكتب مقدمة مقال أكاديمي عن موضوع تختاره.", "hint": "Il convient d'examiner... Selon certains auteurs...", "code": "Il convient d'examiner la question de l'intelligence artificielle. Selon certains auteurs, elle transformera la société. Néanmoins, il reste à démontrer ses limites.", "why": "المقدمة الأكاديمية هي مفتاح المقال." }
 ],
 "quiz": [
  { "q": "`Il convient d'examiner` معناها؟", "options": [{ "text": "من السهل دراسة" }, { "text": "من المناسب ندرس" }, { "text": "من الصعب دراسة" }, { "text": "مش مهم دراسة" }], "answer": 1, "explain": "Il convient de = من المناسب / من الواجب." },
  { "q": "`Selon certains auteurs` معناها؟", "options": [{ "text": "كل الكتاب بيقولوا" }, { "text": "حسب بعض الكتاب" }, { "text": "مفيش كتاب" }, { "text": "أنا بقول" }], "answer": 1, "explain": "selon = حسب: حسب بعض الكتاب." },
  { "q": "`En définitive` معناها؟", "options": [{ "text": "في البداية" }, { "text": "في النهاية / في المحصلة" }, { "text": "في النص" }, { "text": "في الختام" }], "answer": 1, "explain": "en définitive = في النهاية / في المحصلة (رسمي)." },
  { "q": "`Néanmoins` معناها؟", "options": [{ "text": "عشان كده" }, { "text": "ومع ذلك" }, { "text": "كمان" }, { "text": "في الختام" }], "answer": 1, "explain": "néanmoins = ومع ذلك / لكن (رسمي)." },
  { "q": "`Cette théorie postule que` معناها؟", "options": [{ "text": "النظرية بتثبت إن" }, { "text": "النظرية بتفترض إن" }, { "text": "النظرية بتنفي إن" }, { "text": "النظرية بتقول إن" }], "answer": 1, "explain": "postuler = يفترض (فرضية)." },
  { "q": "`Il est à noter que` معناها؟", "options": [{ "text": "من السهل ملاحظة إن" }, { "text": "من المهم ملاحظة إن" }, { "text": "من الصعب ملاحظة إن" }, { "text": "مش مهم ملاحظة إن" }], "answer": 1, "explain": "Il est à noter que = من المهم ملاحظة إن." }
 ],
 "exercises": [
  { "task": "اكتب مقال أكاديمي قصير (10 جمل) عن موضوع تختاره.", "hint": "مقدمة، نظريات، تحليل، ختام.", "code": "Il convient d'examiner la question. Selon certains auteurs... Néanmoins... En définitive...", "why": "المقال الأكاديمي هو مهارة C1 الأساسية." },
  { "task": "صحح الغلط: `Je pense que c'est vrai.` (عايز أسلوب أكاديمي)", "hint": "الأسلوب الأكاديمي بيتجنب je.", "code": "Il convient de noter que cette affirmation est exacte. / Il est indéniable que cette thèse est valable.", "why": "الأسلوب الأكاديمي بيتجنب الضمير الشخصي." }
 ]
},
{
 "id": "c1-speak",
 "level": "C1",
 "skill": "speaking",
 "nav": "كلام: عرض تقديمي",
 "title": "🗣️ كلام: عرض تقديمي",
 "subtitle": "قدم عرض أكاديمي أو مهني بالفرنسي",
 "blocks": [
  { "type": "p", "text": "العرض التقديمي في C1 بيتطلب تنظيم واضح وأسلوب رسمي وثقة. الهيكل: مقدمة، نقاط رئيسية، أمثلة، ختام." },
  { "type": "h", "text": "تعبيرات العرض" },
  { "type": "list", "items": [
   "`Je vais vous parler de...` = هتكلم معاكم عن...",
   "`Tout d'abord... Ensuite... Enfin...` = الأول... بعدين... في الآخر...",
   "`Permettez-moi de citer un exemple.` = اسمحولي أذكر مثال.",
   "`Comme vous pouvez le constater...` = زي ما حضرتكم شايفين...",
   "`Pour conclure, je dirais que...` = عشان أخلص، هقول إن...",
   "`Je vous remercie de votre attention.` = متشكر على انتباهكم."
  ]},
  { "type": "speak", "en": "Je vais vous parler de l'importance des langues étrangères. Tout d'abord, elles ouvrent des portes professionnelles. Ensuite, elles enrichissent la culture personnelle. Enfin, elles permettent de comprendre le monde. Pour conclure, apprendre une langue est un investissement.", "ar": "هتكلم معاكم عن أهمية اللغات الأجنبية. الأول، بتفتح أبواب مهنية. بعدين، بتغني الثقافة الشخصية. في الآخر، بتخلينا نفهم العالم. عشان أخلص، تعلم لغة هو استثمار." }
 ],
 "quiz": [
  { "q": "أول جملة في العرض؟", "options": [{ "text": "الختام" }, { "text": "المقدمة" }, { "text": "الأمثلة" }, { "text": "الشكر" }], "answer": 1, "explain": "ابدأ بالمقدمة: Je vais vous parler de..." },
  { "q": "`Permettez-moi de citer un exemple` معناها؟", "options": [{ "text": "اسمحولي أذكر مثال" }, { "text": "اسمحولي أخلص" }, { "text": "اسمحولي أسأل" }, { "text": "اسمحولي أشكر" }], "answer": 0, "explain": "citer = يذكر: اسمحولي أذكر مثال." },
  { "q": "`Je vous remercie de votre attention` معناها؟", "options": [{ "text": "متشكر على وقتكم" }, { "text": "متشكر على انتباهكم" }, { "text": "متشكر على حضوركم" }, { "text": "متشكر على أسئلتكم" }], "answer": 1, "explain": "de votre attention = على انتباهكم." },
  { "q": "ترتيب العرض الصح؟", "options": [{ "text": "ختام، أمثلة، مقدمة" }, { "text": "مقدمة، نقاط، أمثلة، ختام" }, { "text": "أمثلة، مقدمة، ختام" }, { "text": "مقدمة، ختام" }], "answer": 1, "explain": "مقدمة، نقاط رئيسية، أمثلة، ختام." },
  { "q": "`Pour conclure` معناها؟", "options": [{ "text": "عشان أبدأ" }, { "text": "عشان أخلص" }, { "text": "عشان أوضح" }, { "text": "عشان أشكر" }], "answer": 1, "explain": "Pour conclure = عشان أخلص." },
  { "q": "`Comme vous pouvez le constater` معناها؟", "options": [{ "text": "زي ما حضرتكم شايفين" }, { "text": "زي ما أنا شايف" }, { "text": "مش واضح" }, { "text": "مش مهم" }], "answer": 0, "explain": "constater = يلاحظ: زي ما حضرتكم شايفين." }
 ],
 "exercises": [
  { "task": "سجل صوتك وانت بتقدم عرض قصير (دقيقة) عن موضوع تختاره.", "hint": "مقدمة، نقاط، ختام.", "code": "سجل، اسمع، صحح.", "why": "العرض التقديمي هو أعلى مهارة كلام." },
  { "task": "اكتب هيكل عرض عن موضوع تختاره (5 نقاط).", "hint": "مقدمة، 3 نقاط، ختام.", "code": "1. Je vais vous parler de... 2. Tout d'abord... 3. Ensuite... 4. Enfin... 5. Pour conclure...", "why": "الهيكل الواضح هو أساس العرض الجيد." }
 ]
}
);

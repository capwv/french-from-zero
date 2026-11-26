/* Level C2: core + skills (French) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "c2-core",
 "level": "C2",
 "skill": "core",
 "nav": "أساسي: البلاغة والتعابير",
 "title": "🎭 أساسي: البلاغة والتعابير",
 "subtitle": "التعابير الاصطلاحية والأساليب البلاغية في الفرنسي",
 "blocks": [
  { "type": "p", "text": "في C2 بتتقن الفرنسي زي الفرنسيين بالظبط. ده معناه فهم التعابير الاصطلاحية (expressions idiomatiques) والأساليب البلاغية (figures de style) واللعب بالكلام." },
  { "type": "h", "text": "تعابير اصطلاحية شهيرة" },
  { "type": "table", "head": ["التعبير", "المعنى الحرفي", "المعنى الحقيقي"], "rows": [
   ["Avoir le cœur sur la main", "القلب على اليد", "كريم جداً"],
   ["Mettre son grain de sel", "يحط ملحه", "يتدخل في اللي مش شغله"],
   ["Tomber dans les pommes", "يقع في التفاح", "يغمى عليه"],
   ["Avoir un coup de foudre", "ضربة برق", "حب من أول نظرة"],
   ["Être dans la lune", "يكون في القمر", "يكون سارح"],
   ["Poser un lapin", "يحط أرنب", "يطلع حد (مايجاش للموعد)"]
  ]},
  { "type": "h", "text": "الأساليب البلاغية" },
  { "type": "table", "head": ["الأسلوب", "التعريف", "مثال"], "rows": [
   ["La métaphore", "استعارة", "Il est un lion. = هو أسد (شجاع)"],
   ["La comparaison", "تشبيه", "Il est fort comme un lion. = قوي زي الأسد"],
   ["L'hyperbole", "مبالغة", "Je meurs de faim. = بموت من الجوع"],
   ["L'euphémisme", "تلطيف", "Il nous a quittés. = راح عنا (مات)"],
   ["La litote", "تقليل", "Ce n'est pas mal. = مش وحش (يعني كويس)"]
  ]},
  { "type": "ex", "task": "استخدم 3 تعابير اصطلاحية في جمل من حياتك.", "hint": "coup de foudre, tomber dans les pommes, être dans la lune.", "code": "J'ai eu un coup de foudre pour Paris. Mon ami est tombé dans les pommes. Il est toujours dans la lune.", "why": "التعابير الاصطلاحية هي علامة C2." }
 ],
 "quiz": [
  { "q": "`Avoir un coup de foudre` معناها؟", "options": [{ "text": "ضربة برق" }, { "text": "حب من أول نظرة" }, { "text": "يغمى عليه" }, { "text": "يكون سارح" }], "answer": 1, "explain": "coup de foudre = حب من أول نظرة (مجازي)." },
  { "q": "`Tomber dans les pommes` معناها؟", "options": [{ "text": "يقع في التفاح" }, { "text": "يغمى عليه" }, { "text": "ياكل تفاح" }, { "text": "يشتري تفاح" }], "answer": 1, "explain": "tomber dans les pommes = يغمى عليه." },
  { "q": "`Être dans la lune` معناها؟", "options": [{ "text": "يكون في القمر" }, { "text": "يكون سارح" }, { "text": "يكون نايم" }, { "text": "يكون صاحي" }], "answer": 1, "explain": "être dans la lune = يكون سارح / مش مركز." },
  { "q": "`Je meurs de faim` أسلوب إيه؟", "options": [{ "text": "استعارة" }, { "text": "تشبيه" }, { "text": "مبالغة" }, { "text": "تلطيف" }], "answer": 2, "explain": "hyperbole = مبالغة: بموت من الجوع." },
  { "q": "`Il nous a quittés` أسلوب إيه؟", "options": [{ "text": "مبالغة" }, { "text": "تلطيف" }, { "text": "استعارة" }, { "text": "تشبيه" }], "answer": 1, "explain": "euphémisme = تلطيف: راح عنا (مات)." },
  { "q": "`Poser un lapin` معناها؟", "options": [{ "text": "يحط أرنب" }, { "text": "يطلع حد (مايجاش للموعد)" }, { "text": "يشتري أرنب" }, { "text": "يربي أرنب" }], "answer": 1, "explain": "poser un lapin = يطلع حد / مايجاش للموعد." }
 ],
 "exercises": [
  { "task": "اكتب 3 جمل بتعابير اصطلاحية عن حياتك.", "hint": "coup de foudre, dans la lune, tomber dans les pommes.", "code": "J'ai eu un coup de foudre pour le français. Mon ami est toujours dans la lune. Hier, j'ai failli tomber dans les pommes.", "why": "التعابير الاصطلاحية هي علامة C2." },
  { "task": "حدد الأسلوب البلاغي في: `Il est fort comme un lion.`", "hint": "comme = زي.", "code": "Comparaison (تشبيه): قوي زي الأسد.", "why": "الفرق بين métaphore و comparaison مهم." }
 ]
},
{
 "id": "c2-listen",
 "level": "C2",
 "skill": "listening",
 "nav": "استماع: نقاش فكري",
 "title": "🎧 استماع: نقاش فكري",
 "subtitle": "اسمع نقاش فلسفي عن معنى الحياة",
 "blocks": [
  { "type": "p", "text": "النقاشات الفكرية هي قمة C2. اللغة فلسفية والأفكار عميقة. اسمع للفكرة العامة الأول، وبعدين للحجج الفلسفية." },
  { "type": "p", "text": "La question du sens de la vie traverse toute l'histoire de la philosophie. Les existentialistes, comme Sartre, affirment que l'existence précède l'essence : nous sommes d'abord jetés dans le monde, et c'est à nous de créer notre propre sens. Les stoïciens, au contraire, soutiennent que le bonheur réside dans l'acceptation de ce qui ne dépend pas de nous. Quant aux épicuriens, ils voient le bonheur dans la recherche du plaisir modéré et de l'amitié. Chaque école propose une voie, mais aucune ne détient la vérité absolue.", "ar": "سؤال معنى الحياة بيمر عبر تاريخ الفلسفة كله. الوجوديين، زي سارتر، بيقولوا إن الوجود بيسبق الجوهر: إحنا بنترمي في العالم الأول، وبعدين علينا نخلق معنى حياتنا. الرواقيين، بالعكس، بيؤكدوا إن السعادة في قبول اللي مش في إيدينا. أما الأبيقوريين، فبيشوفوا السعادة في البحث عن المتعة المعتدلة والصداقة. كل مدرسة بتقدم طريق، بس ولا واحدة عندها الحقيقة المطلقة." },
  { "type": "h", "text": "مفردات فلسفية" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["le sens de la vie", "معنى الحياة"],
   ["l'existence précède l'essence", "الوجود بيسبق الجوهر"],
   ["jeté dans le monde", "مرمي في العالم"],
   ["les stoïciens", "الرواقيين"],
   ["les épicuriens", "الأبيقوريين"],
   ["détenir la vérité", "يملك الحقيقة"]
  ]}
 ],
 "quiz": [
  { "q": "النقاش عن إيه؟", "options": [{ "text": "تاريخ فرنسا" }, { "text": "معنى الحياة" }, { "text": "الأكل الفرنسي" }, { "text": "السفر" }], "answer": 1, "explain": "la question du sens de la vie." },
  { "q": "الوجوديين بيقولوا إيه؟", "options": [{ "text": "الجوهر بيسبق الوجود" }, { "text": "الوجود بيسبق الجوهر" }, { "text": "السعادة في المتعة" }, { "text": "السعادة في القبول" }], "answer": 1, "explain": "l'existence précède l'essence." },
  { "q": "الرواقيين بيقولوا إيه؟", "options": [{ "text": "السعادة في المتعة" }, { "text": "السعادة في القبول" }, { "text": "الوجود بيسبق الجوهر" }, { "text": "مفيش معنى" }], "answer": 1, "explain": "le bonheur réside dans l'acceptation de ce qui ne dépend pas de nous." },
  { "q": "الأبيقوريين بيقولوا إيه؟", "options": [{ "text": "السعادة في المتعة المعتدلة" }, { "text": "السعادة في القبول" }, { "text": "الوجود بيسبق الجوهر" }, { "text": "مفيش معنى" }], "answer": 0, "explain": "le bonheur dans la recherche du plaisir modéré et de l'amitié." },
  { "q": "رأي المتحدث؟", "options": [{ "text": "الوجوديين صح" }, { "text": "الرواقيين صح" }, { "text": "ولا مدرسة عندها الحقيقة المطلقة" }, { "text": "مفيش رأي" }], "answer": 2, "explain": "aucune ne détient la vérité absolue." },
  { "q": "`jeté dans le monde` معناها؟", "options": [{ "text": "مرمي في العالم" }, { "text": "مسافر في العالم" }, { "text": "حاكم العالم" }, { "text": "مشي من العالم" }], "answer": 0, "explain": "jeté = مرمي (استعارة وجودية)." }
 ],
 "exercises": [
  { "task": "اكتب بالفرنسي: موقف كل مدرسة من التلاتة في جملة، ونقطة الاختلاف الجوهرية بينهم، والميل الضمني للمتحدث.", "hint": "الاختلاف الجوهري في مصدر المعنى: بيتصنع، بيتقبّل، ولا بيتعاش؟", "code": "L'existentialisme crée le sens, le stoïcisme l'accepte, l'épicurisme le savoure. Le désaccord porte sur la source du sens. Implicitement, le locuteur semble pencher pour une synthèse personnelle.", "why": "التمييز بين مواقف متداخلة والتقاط الميل الضمني هو مستوى C2 في الاستماع." },
  { "task": "اكتب رأيك في معنى الحياة في 3 جمل.", "hint": "À mon sens... Il est indéniable que... Cependant...", "code": "À mon sens, le sens de la vie est personnel. Il est indéniable que chacun doit trouver sa propre voie. Cependant, l'amitié est universelle.", "why": "التعبير عن الرأي الفلسفي مهارة C2." }
 ]
},
{
 "id": "c2-read",
 "level": "C2",
 "skill": "reading",
 "nav": "قراءة: نص فلسفي",
 "title": "📖 قراءة: نص فلسفي",
 "subtitle": "اقرا نص فلسفي عن الحرية والمسؤولية",
 "blocks": [
  { "type": "p", "text": "النصوص الفلسفية هي قمة C2. النص ده عن الحرية والمسؤولية عند سارتر." },
  { "type": "p", "text": "Pour Jean-Paul Sartre, l'homme est condamné à être libre. Cette liberté, loin d'être un cadeau, est un fardeau : nous sommes entièrement responsables de nos choix, sans excuse ni alibi. Il n'existe pas de nature humaine prédéfinie qui déterminerait nos actions. Nous sommes ce que nous faisons, rien de plus, rien de moins. Cette responsabilité absolue peut sembler écrasante, mais elle est aussi libératrice : si nous sommes responsables de tout, alors nous pouvons tout changer. La liberté n'est pas un état, c'est un devenir.", "ar": "عند جان بول سارتر، الإنسان محكوم عليه بالحرية. الحرية دي، بعيد عن كونها هدية، هي عبء: إحنا مسؤولين تماماً عن اختياراتنا، من غير عذر ولا حجة. مفيش طبيعة بشرية محددة مسبقاً بتحدد أفعالنا. إحنا اللي بنعمله، لا أكتر ولا أقل. المسؤولية المطلقة دي ممكن تبان مرهقة، بس هي كمان محررة: لو إحنا مسؤولين عن كل حاجة، يبقى نقدر نغير كل حاجة. الحرية مش حالة، هي عملية مستمرة." },
  { "type": "h", "text": "مفردات فلسفية" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["condamné à être libre", "محكوم عليه بالحرية"],
   ["un fardeau", "عبء"],
   ["sans excuse ni alibi", "من غير عذر ولا حجة"],
   ["prédéfini", "محدد مسبقاً"],
   ["écrasant", "مرهق / ساحق"],
   ["libérateur", "محرر"],
   ["un devenir", "عملية مستمرة / صيرورة"]
  ]}
 ],
 "quiz": [
  { "q": "النص عن إيه؟", "options": [{ "text": "تاريخ فرنسا" }, { "text": "الحرية والمسؤولية" }, { "text": "الأكل الفرنسي" }, { "text": "السفر" }], "answer": 1, "explain": "la liberté et la responsabilité chez Sartre." },
  { "q": "`L'homme est condamné à être libre` معناها؟", "options": [{ "text": "الإنسان حر" }, { "text": "الإنسان محكوم عليه بالحرية" }, { "text": "الإنسان مش حر" }, { "text": "الإنسان عايز حرية" }], "answer": 1, "explain": "condamné = محكوم عليه: الحرية إجبارية مش اختيارية." },
  { "q": "الحرية عند سارتر؟", "options": [{ "text": "هدية" }, { "text": "عبء" }, { "text": "سهلة" }, { "text": "مفيش حرية" }], "answer": 1, "explain": "loin d'être un cadeau, c'est un fardeau." },
  { "q": "`Nous sommes ce que nous faisons` معناها؟", "options": [{ "text": "إحنا اللي بنفكر فيه" }, { "text": "إحنا اللي بنعمله" }, { "text": "إحنا اللي بنقوله" }, { "text": "إحنا اللي بنحلم بيه" }], "answer": 1, "explain": "نحن أفعالنا: الهوية من الاختيارات." },
  { "q": "الحرية محررة ليه؟", "options": [{ "text": "لأنها سهلة" }, { "text": "لأنها بتخلينا نغير كل حاجة" }, { "text": "لأنها مش موجودة" }, { "text": "لأنها هدية" }], "answer": 1, "explain": "si nous sommes responsables de tout, alors nous pouvons tout changer." },
  { "q": "`La liberté n'est pas un état, c'est un devenir` معناها؟", "options": [{ "text": "الحرية حالة ثابتة" }, { "text": "الحرية عملية مستمرة" }, { "text": "الحرية مش موجودة" }, { "text": "الحرية سهلة" }], "answer": 1, "explain": "devenir = صيرورة / عملية مستمرة." }
 ],
 "exercises": [
  { "task": "اكتب بالفرنسي: أطروحة سارتر في جملة، والمفارقة (paradoxe) اللي بيقدمها النص، وتقييمك النقدي في جملة.", "hint": "المفارقة: الحرية عبء ومحررة في نفس الوقت.", "code": "Sartre soutient que la liberté est une responsabilité absolue. Le paradoxe : ce qui nous pèse est aussi ce qui nous libère. Critique : cette vision ignore les contraintes sociales réelles.", "why": "القراءة في C2 بتطلب التقاط المفارقة والتقييم النقدي، مش التلخيص." },
  { "task": "اكتب رأيك في الحرية والمسؤولية في 3 جمل.", "hint": "À mon sens... Il est indéniable que... Cependant...", "code": "À mon sens, la liberté est un fardeau nécessaire. Il est indéniable que nous sommes responsables de nos choix. Cependant, cette responsabilité est aussi libératrice.", "why": "التعبير عن الرأي الفلسفي مهارة C2." }
 ]
},
{
 "id": "c2-write",
 "level": "C2",
 "skill": "writing",
 "nav": "كتابة: نص أدبي",
 "title": "✍️ كتابة: نص أدبي",
 "subtitle": "اكتب نص أدبي قصير بأسلوب فني",
 "blocks": [
  { "type": "p", "text": "الكتابة الأدبية في C2 بتتطلب إبداع وأسلوب فني. مش مجرد معلومات، لكن تعبير فني عن تجربة أو فكرة." },
  { "type": "h", "text": "تقنيات أدبية" },
  { "type": "list", "items": [
   "الوصف الحسي: استخدم الحواس الخمس (البصر، السمع، الشم، اللمس، الذوق).",
   "الإيقاع: تنويع طول الجمل (قصيرة وطويلة).",
   "الصور البلاغية: استعارات وتشبيهات أصلية.",
   "الحوار الداخلي: أفكار الشخصية بدون كلام.",
   "البداية في المنتصف: ابدأ في وسط الحدث مش من البداية."
  ]},
  { "type": "h", "text": "مثال أدبي" },
  { "type": "p", "text": "Le café fumant entre mes mains, je regarde la ville s'éveiller. Le Caire, cette ville qui ne dort jamais, respire lentement ce matin. Les klaxons sont encore lointains, et le soleil se lève doucement sur le Nil. Je pense à toi, qui es partie il y a un an. Le temps passe, mais certains souvenirs restent, comme le goût du café amer sur la langue.", "ar": "القهوة بتتبخر في إيديا، وأنا ببص على المدينة وهي بتصحى. القاهرة، المدينة اللي مبتنامش أبدًا، بتتنفس ببطء الصبح ده. البوري لسه بعيد، والشمس بتطلع بهدوء على النيل. بفكر فيكي، إنتي اللي مشيتي من سنة. الوقت بيعدي، بس بعض الذكريات بتفضل، زي طعم القهوة المرة على اللسان." },
  { "type": "ex", "task": "اكتب فقرة أدبية قصيرة (4 جمل) عن ذكرى مهمة.", "hint": "وصف حسي، إيقاع، صورة بلاغية.", "code": "La pluie tombe sur la fenêtre. Je me souviens de ce jour-là. Ton rire résonne encore dans ma tête. Le temps passe, mais certains moments restent.", "why": "الكتابة الأدبية هي قمة C2." }
 ],
 "quiz": [
  { "q": "أهم تقنية أدبية؟", "options": [{ "text": "السرعة" }, { "text": "الوصف الحسي" }, { "text": "الطول" }, { "text": "الترجمة" }], "answer": 1, "explain": "الوصف الحسي = الحواس الخمس." },
  { "q": "الإيقاع في الكتابة؟", "options": [{ "text": "جمل طويلة بس" }, { "text": "جمل قصيرة بس" }, { "text": "تنويع طول الجمل" }, { "text": "مش مهم" }], "answer": 2, "explain": "تنويع طول الجمل = إيقاع." },
  { "q": "البداية في المنتصف؟", "options": [{ "text": "ابدأ من البداية" }, { "text": "ابدأ في وسط الحدث" }, { "text": "ابدأ من النهاية" }, { "text": "مش مهم" }], "answer": 1, "explain": "in medias res = ابدأ في وسط الحدث." },
  { "q": "`Le café fumant entre mes mains` تقنية إيه؟", "options": [{ "text": "وصف حسي" }, { "text": "مبالغة" }, { "text": "تلطيف" }, { "text": "تشبيه" }], "answer": 0, "explain": "وصف حسي: البصر واللمس والشم." },
  { "q": "`certains souvenirs restent, comme le goût du café amer` أسلوب إيه؟", "options": [{ "text": "استعارة" }, { "text": "تشبيه" }, { "text": "مبالغة" }, { "text": "تلطيف" }], "answer": 1, "explain": "comme = زي: تشبيه بين الذكريات وطعم القهوة." },
  { "q": "الحوار الداخلي؟", "options": [{ "text": "كلام بين شخصين" }, { "text": "أفكار الشخصية بدون كلام" }, { "text": "كلام بصوت عالي" }, { "text": "مش مهم" }], "answer": 1, "explain": "الحوار الداخلي = stream of consciousness." }
 ],
 "exercises": [
  { "task": "اكتب فقرة أدبية (6 جمل) عن ذكرى أو مكان مهم.", "hint": "وصف حسي، إيقاع، صورة بلاغية.", "code": "La pluie tombe. Je me souviens. Ton rire résonne. Le temps passe. Certains moments restent. Comme le goût du café.", "why": "الكتابة الأدبية هي قمة C2." },
  { "task": "حوّل الجملة العادية دي لأدبية: `Je me souviens de ce jour.`", "hint": "زود وصف حسي وصورة بلاغية.", "code": "Ce jour-là reste gravé dans ma mémoire, comme une empreinte sur le sable que la mer ne peut pas effacer.", "why": "التحويل من عادي لأدبي مهارة C2." }
 ]
},
{
 "id": "c2-speak",
 "level": "C2",
 "skill": "speaking",
 "nav": "كلام: نقاش فلسفي",
 "title": "🗣️ كلام: نقاش فلسفي",
 "subtitle": "شارك في نقاش فلسفي عميق بالفرنسي",
 "blocks": [
  { "type": "p", "text": "النقاش الفلسفي في C2 بيتطلب فهم عميق للأفكار المجردة والقدرة على التعبير عنها بأسلوب راقي." },
  { "type": "h", "text": "تعبيرات فلسفية" },
  { "type": "list", "items": [
   "`D'un point de vue philosophique...` = من وجهة نظر فلسفية...",
   "`Il convient de se demander si...` = من المناسب نتساءل إذا...",
   "`Cette question renvoie à...` = السؤال ده بيرجع لـ...",
   "`Dans une certaine mesure...` = لحد ما...",
   "`Il serait réducteur de penser que...` = هيبقى تبسيط لو فكرنا إن...",
   "`En définitive, la question reste ouverte.` = في النهاية، السؤال لسه مفتوح."
  ]},
  { "type": "speak", "en": "D'un point de vue philosophique, la liberté est un paradoxe. Il convient de se demander si nous sommes vraiment libres. Dans une certaine mesure, oui. Mais il serait réducteur de penser que la liberté est absolue. En définitive, la question reste ouverte.", "ar": "من وجهة نظر فلسفية، الحرية مفارقة. من المناسب نتساءل إذا كنا فعلاً أحرار. لحد ما، أيوه. بس هيبقى تبسيط لو فكرنا إن الحرية مطلقة. في النهاية، السؤال لسه مفتوح." }
 ],
 "quiz": [
  { "q": "`D'un point de vue philosophique` معناها؟", "options": [{ "text": "من وجهة نظر فلسفية" }, { "text": "من وجهة نظري" }, { "text": "من وجهة نظرك" }, { "text": "من وجهة نظرنا" }], "answer": 0, "explain": "تعبير رسمي: من وجهة نظر فلسفية." },
  { "q": "`Il convient de se demander si` معناها؟", "options": [{ "text": "من السهل نتساءل" }, { "text": "من المناسب نتساءل" }, { "text": "من الصعب نتساءل" }, { "text": "مش مهم نتساءل" }], "answer": 1, "explain": "Il convient de = من المناسب / من الواجب." },
  { "q": "`Dans une certaine mesure` معناها؟", "options": [{ "text": "تماماً" }, { "text": "لحد ما" }, { "text": "أبداً" }, { "text": "دايمًا" }], "answer": 1, "explain": "dans une certaine mesure = لحد ما / جزئياً." },
  { "q": "`Il serait réducteur de penser que` معناها؟", "options": [{ "text": "هيبقى صح لو فكرنا" }, { "text": "هيبقى تبسيط لو فكرنا" }, { "text": "هيبقى غلط لو فكرنا" }, { "text": "هيبقى صعب لو فكرنا" }], "answer": 1, "explain": "réducteur = تبسيطي / مختزل." },
  { "q": "`En définitive` معناها؟", "options": [{ "text": "في البداية" }, { "text": "في النهاية / في المحصلة" }, { "text": "في النص" }, { "text": "في الختام" }], "answer": 1, "explain": "en définitive = في النهاية / في المحصلة (رسمي)." },
  { "q": "النقاش الفلسفي بيتطلب إيه؟", "options": [{ "text": "السرعة" }, { "text": "الفهم العميق للأفكار المجردة" }, { "text": "الصوت العالي" }, { "text": "الكلام الكتير" }], "answer": 1, "explain": "النقاش الفلسفي = فهم عميق + تعبير راقي." }
 ],
 "exercises": [
  { "task": "سجل صوتك وانت بتشارك في نقاش فلسفي (دقيقتين) عن موضوع تختاره.", "hint": "D'un point de vue... Il convient de... En définitive...", "code": "سجل، اسمع، صحح.", "why": "النقاش الفلسفي هو قمة مهارة الكلام." },
  { "task": "اكتب رأيك الفلسفي في سؤال كبير (5 جمل).", "hint": "D'un point de vue philosophique... Dans une certaine mesure... En définitive...", "code": "D'un point de vue philosophique, la liberté est un paradoxe. Dans une certaine mesure, nous sommes libres. Mais il serait réducteur de penser que la liberté est absolue. En définitive, la question reste ouverte.", "why": "التعبير الفلسفي هو قمة C2." }
 ]
}
);

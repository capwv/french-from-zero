/* French From Zero — curriculum part 3 (A2 core continued) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "a2-core-7",
 "level": "A2",
 "skill": "core",
 "nav": "المقارنة والتفضيل",
 "title": "📊 المقارنة والتفضيل",
 "subtitle": "قارن بين أي حاجتين وقول الأفضل والأسوأ",
 "blocks": [
  { "type": "p", "text": "المقارنة في الفرنسي سهلة ومنطقية. عندك 3 مستويات: أكثر (plus)، أقل (moins)، ونفس (aussi). ومع التفضيل (superlatif) بتقول الأكثر والأقل على الإطلاق." },
  { "type": "h", "text": "المقارنة (comparatif)" },
  { "type": "table", "head": ["المستوى", "الصيغة", "مثال"], "rows": [
   ["أكثر", "plus + صفة + que", "Le Caire est plus grand qu'Assiout. = القاهرة أكبر من أسيوط"],
   ["أقل", "moins + صفة + que", "Le thé est moins fort que le café. = الشاي أضعف من القهوة"],
   ["نفس", "aussi + صفة + que", "Sara est aussi intelligente qu'Omar. = سارة زكية زي عمر"]
  ]},
  { "type": "note", "text": "bon (كويس) شاذ في المقارنة: meilleur = أحسن (مش plus bon). bien (كويس/حلو كحال) شاذ برضه: mieux = أحسن. Le pain est meilleur ici. = العيش أحسن هنا. Il chante mieux. = بيغني أحسن." },
  { "type": "h", "text": "التفضيل (superlatif)" },
  { "type": "table", "head": ["الصيغة", "مثال"], "rows": [
   ["le/la/les + plus + صفة", "Le Caire est la plus grande ville d'Égypte. = القاهرة أكبر مدينة في مصر"],
   ["le/la/les + moins + صفة", "C'est le moins cher. = ده الأرخص"],
   ["le meilleur", "C'est le meilleur restaurant. = ده أحسن مطعم"],
   ["le pire", "C'est le pire film. = ده أسوأ فيلم"]
  ]},
  { "type": "ex", "task": "قارن بين 3 حاجات من حياتك: مدينتين، أكلة، وسيلة مواصلات.", "hint": "plus/moins/aussi ... que.", "code": "Assiout est moins grande que le Caire. Le foul est meilleur que le sandwich. Le métro est plus rapide que le bus.", "why": "المقارنة بتخليك تعبر عن رأيك وتفاضل بين الاختيارات." }
 ],
 "quiz": [
  { "q": "`Le Caire est plus grand qu'Assiout` معناها؟", "options": [{ "text": "القاهرة أصغر من أسيوط" }, { "text": "القاهرة أكبر من أسيوط" }, { "text": "القاهرة زي أسيوط" }, { "text": "أسيوط أكبر" }], "answer": 1, "explain": "plus ... que = أكثر من." },
  { "q": "المقارنة الشاذة من bon؟", "options": [{ "text": "plus bon" }, { "text": "meilleur" }, { "text": "boner" }, { "text": "le bon" }], "answer": 1, "explain": "bon → meilleur (أحسن). زي bien → mieux." },
  { "q": "`C'est le meilleur restaurant` معناها؟", "options": [{ "text": "ده مطعم كويس" }, { "text": "ده أحسن مطعم" }, { "text": "ده أسوأ مطعم" }, { "text": "ده مطعم رخيص" }], "answer": 1, "explain": "le meilleur = الأحسن على الإطلاق (superlatif)." },
  { "q": "عايز تقول `الشاي أقل قوة من القهوة`؟", "options": [{ "text": "Le thé est plus fort que le café." }, { "text": "Le thé est moins fort que le café." }, { "text": "Le thé est aussi fort que le café." }, { "text": "Le thé est le moins fort." }], "answer": 1, "explain": "moins + صفة + que = أقل من." },
  { "q": "`aussi ... que` معناها؟", "options": [{ "text": "أكثر من" }, { "text": "أقل من" }, { "text": "زي / نفس" }, { "text": "أفضل من" }], "answer": 2, "explain": "aussi grand que = كبير زي." },
  { "q": "`le pire` معناها؟", "options": [{ "text": "الأحسن" }, { "text": "الأسوأ" }, { "text": "الأرخص" }, { "text": "الأغلى" }], "answer": 1, "explain": "le pire = الأسوأ (superlatif شاذ من mauvais)." }
 ],
 "exercises": [
  { "task": "اكتب 4 جمل مقارنة عن حاجات من حياتك.", "hint": "plus/moins/aussi ... que.", "code": "Le français est plus difficile que l'anglais. Le foul est moins cher que le sushi. Sara est aussi intelligente qu'Omar. Le Caire est plus grand qu'Assiout.", "why": "المقارنة بتخليك تعبر عن رأيك بوضوح." },
  { "task": "صحح الغلط: `C'est le plus bon film.`", "hint": "bon شاذ في التفضيل.", "code": "C'est le meilleur film.", "why": "bon → meilleur في المقارنة والتفضيل، مش plus bon." }
 ]
},
{
 "id": "a2-core-8",
 "level": "A2",
 "skill": "core",
 "nav": "الجمل التابعة: qui/que/où",
 "title": "🔗 الجمل التابعة",
 "subtitle": "اربط جملتين في جملة واحدة زي ما بنعمل في العربي",
 "blocks": [
  { "type": "p", "text": "بدل ما تقول جملتين منفصلين: عندي صاحب. هو بيسكن في القاهرة. تقول جملة واحدة: عندي صاحب ساكن في القاهرة. الفرنسي بيعمل كده بـ qui و que و où." },
  { "type": "h", "text": "qui = اللي (فاعل)" },
  { "type": "list", "items": [
   "`J'ai un ami qui habite au Caire.` = عندي صاحب ساكن في القاهرة.",
   "`C'est un livre qui parle d'Égypte.` = ده كتاب بيتكلم عن مصر.",
   "`La fille qui parle, c'est Sara.` = البنت اللي بتتكلم دي سارة.",
   "qui بيستخدم للفاعل (اللي بيعمل الحركة)، مهمش مذكر ولا مؤنث ولا جمع."
  ]},
  { "type": "h", "text": "que = اللي (مفعول)" },
  { "type": "list", "items": [
   "`Le livre que je lis est intéressant.` = الكتاب اللي بقراه ممتع.",
   "`La musique que tu écoutes est belle.` = المزيكا اللي بتسمعها حلوة.",
   "`Le café que j'aime est fort.` = القهوة اللي بحبها تقيلة.",
   "que بيستخدم للمفعول (اللي بيتعمل فيه الحركة)."
  ]},
  { "type": "h", "text": "où = اللي فيه / حيث" },
  { "type": "list", "items": [
   "`La ville où j'habite est petite.` = المدينة اللي ساكن فيها صغيرة.",
   "`Le café où on va est bon.` = الكافيه اللي بنروحه كويس.",
   "où للمكان والزمان: le jour où = اليوم اللي."
  ]},
  { "type": "h", "text": "parce que و si" },
  { "type": "list", "items": [
   "`Je reste parce que je suis fatigué.` = فاضل عشان أنا تعبان.",
   "`Si tu veux, on peut y aller.` = لو عايز، نقدر نروح.",
   "`Si j'avais de l'argent, je voyagerais.` = لو كان معايا فلوس، كنت سافرت. (شرطية غير حقيقية)"
  ]},
  { "type": "ex", "task": "اربط الجمل دي في جملة واحدة: J'ai un livre. Il parle d'Égypte. / Je vois un film. Il est intéressant.", "hint": "الكتاب والفيلم هما الفاعل في الجملة التانية → qui.", "code": "J'ai un livre qui parle d'Égypte. Je vois un film qui est intéressant.", "why": "الربط ده بيخليك تتكلم بجمل طبيعية مش مترجمة." }
 ],
 "quiz": [
  { "q": "`J'ai un ami qui habite au Caire` معناها؟", "options": [{ "text": "عندي صاحب في القاهرة" }, { "text": "عندي صاحب ساكن في القاهرة" }, { "text": "صاحبي راح القاهرة" }, { "text": "أنا ساكن في القاهرة" }], "answer": 1, "explain": "qui = اللي (فاعل): صاحب اللي ساكن." },
  { "q": "امتى نستخدم que بدل qui؟", "options": [{ "text": "للأماكن" }, { "text": "للمفعول" }, { "text": "للفاعل" }, { "text": "للجمع" }], "answer": 1, "explain": "que = اللي (مفعول): Le livre que je lis." },
  { "q": "`La ville où j'habite` معناها؟", "options": [{ "text": "المدينة اللي بسكنها" }, { "text": "المدينة اللي ساكن فيها" }, { "text": "المدينة اللي رحتها" }, { "text": "المدينة اللي بحبها" }], "answer": 1, "explain": "où = فيه/فيها (للمكان): المدينة اللي ساكن فيها." },
  { "q": "`Si tu veux, on peut y aller` معناها؟", "options": [{ "text": "لو عايز، نقدر نروح" }, { "text": "لازم تروح" }, { "text": "مش عايزين نروح" }, { "text": "هنروح بكرة" }], "answer": 0, "explain": "Si = لو: لو عايز، نقدر نروح." },
  { "q": "`Je reste parce que je suis fatigué` معناها؟", "options": [{ "text": "فاضل لأني تعبان" }, { "text": "مش فاضل لأني تعبان" }, { "text": "فاضل عشان أنا تعبان" }, { "text": "تعبان عشان فاضل" }], "answer": 2, "explain": "parce que = عشان/لأن: فاضل عشان أنا تعبان." },
  { "q": "أي جملة صح؟", "options": [{ "text": "Le livre qui je lis." }, { "text": "Le livre que je lis." }, { "text": "Le livre où je lis." }, { "text": "Le livre qui je lis est bon." }], "answer": 1, "explain": "الكتاب مفعول (أنا اللي بقراه) → que." }
 ],
 "exercises": [
  { "task": "اكتب 3 جمل مركبة بـ qui و que و où عن حاجات من حياتك.", "hint": "ami, livre, ville.", "code": "J'ai un ami qui parle français. Le livre que je lis est bon. La ville où j'habite est petite.", "why": "الجمل المركبة هي الفرق بين مبتدئ ومتوسط." },
  { "task": "صحح الغلط: `Le film qui je regarde est bon.`", "hint": "الفيلم فاعل ولا مفعول؟", "code": "Le film que je regarde est bon.", "why": "الفيلم مفعول (أنا اللي بتفرج عليه) → que مش qui." }
 ]
}
,
{
 "id": "a2-core-9",
 "level": "A2",
 "skill": "core",
 "nav": "المستقبل والشرطية",
 "title": "🔮 المستقبل والشرطية",
 "subtitle": "futur simple و conditionnel: هعمل إيه وكنت هعمل إيه",
 "blocks": [
  { "type": "p", "text": "الفرنسي عنده زمنين مهمين للمستقبل والتخيل: الـ futur simple (هعمل) والـ conditionnel (كنت هعمل / ممكن). الاتنين بيستخدموا نفس الجذع، والنهايات سهلة." },
  { "type": "h", "text": "المستقبل البسيط (futur simple)" },
  { "type": "p", "text": "الجذع = المصدر كامل (لأفعال -er و -ir)، أو المصدر من غير e الأخيرة (لأفعال -re). النهايات: -ai, -as, -a, -ons, -ez, -ont." },
  { "type": "table", "head": ["الضمير", "parler", "finir", "vendre"], "rows": [
   ["je", "parlerai", "finirai", "vendrai"],
   ["tu", "parleras", "finiras", "vendras"],
   ["il/elle/on", "parlera", "finira", "vendra"],
   ["nous", "parlerons", "finirons", "vendrons"],
   ["vous", "parlerez", "finirez", "vendrez"],
   ["ils/elles", "parleront", "finiront", "vendront"]
  ]},
  { "type": "note", "text": "أفعال شاذة في المستقبل: être → ser-، avoir → aur-، aller → ir-، faire → fer-، venir → viendr-، voir → verr-، pouvoir → pourr-، vouloir → voudr-." },
  { "type": "h", "text": "الشرطية (conditionnel)" },
  { "type": "p", "text": "نفس جذع المستقبل + نهايات الـ imparfait: -ais, -ais, -ait, -ions, -iez, -aient. المعنى: كنت هعمل / ممكن / عايز (بأدب)." },
  { "type": "list", "items": [
   "`Je voudrais un café.` = عايز قهوة (بأدب، مش هطلب).",
   "`Si j'avais de l'argent, je voyagerais.` = لو كان معايا فلوس، كنت سافرت.",
   "`Tu pourrais m'aider ?` = ممكن تساعدني؟ (طلب مهذب)",
   "`Il faudrait étudier.` = المفروض تذاكر."
  ]},
  { "type": "ex", "task": "حوّل للمستقبل: Je parle. / Nous finissons. / Ils vendent.", "hint": "المصدر + النهايات.", "code": "Je parlerai. Nous finirons. Ils vendront.", "why": "المستقبل البسيط هو الزمن اللي هتستخدمه في الخطط والوعود." }
 ],
 "quiz": [
  { "q": "تصريف parler في المستقبل مع je؟", "options": [{ "text": "je parle" }, { "text": "je parlerai" }, { "text": "j'ai parlé" }, { "text": "je parlais" }], "answer": 1, "explain": "المصدر + -ai: je parlerai = هتكلم." },
  { "q": "`Je voudrais un café` معناها؟", "options": [{ "text": "عايز قهوة" }, { "text": "عايز قهوة (بأدب)" }, { "text": "هشرب قهوة" }, { "text": "شربت قهوة" }], "answer": 1, "explain": "conditionnel = طلب مهذب: Je voudrais = عايز (بلطف)." },
  { "q": "جذع المستقبل من aller؟", "options": [{ "text": "all-" }, { "text": "ir-" }, { "text": "aller-" }, { "text": "vai-" }], "answer": 1, "explain": "aller شاذ: ir-. J'irai = هروح." },
  { "q": "`Si j'avais de l'argent, je voyagerais` معناها؟", "options": [{ "text": "لو معايا فلوس هسافر" }, { "text": "لو كان معايا فلوس كنت سافرت" }, { "text": "هسافر لما يكون معايا فلوس" }, { "text": "سافرت عشان كان معايا فلوس" }], "answer": 1, "explain": "Si + imparfait + conditionnel = شرطية غير حقيقية." },
  { "q": "نهايات الـ conditionnel زي أي زمن؟", "options": [{ "text": "présent" }, { "text": "imparfait" }, { "text": "passé composé" }, { "text": "futur" }], "answer": 1, "explain": "نفس نهايات imparfait: -ais, -ais, -ait, -ions, -iez, -aient." },
  { "q": "`Nous irons au Caire` معناها؟", "options": [{ "text": "إحنا بنروح القاهرة" }, { "text": "إحنا هنروح القاهرة" }, { "text": "إحنا رحنا القاهرة" }, { "text": "إحنا كنا بنروح" }], "answer": 1, "explain": "aller في المستقبل: ir- + -ons = irons = هنروح." }
 ],
 "exercises": [
  { "task": "اكتب 4 جمل عن خططك المستقبلية بـ futur simple.", "hint": "étudier, voyager, travailler, habiter.", "code": "J'étudierai le français. Je voyagerai en France. Je travaillerai dans une banque. J'habiterai au Caire.", "why": "المستقبل البسيط هو زمن الأحلام والخطط." },
  { "task": "صحح الغلط: `Je veux un café, s'il vous plaît.`", "hint": "دي مش غلطة، بس فيه أدب منها.", "code": "Je voudrais un café, s'il vous plaît.", "why": "conditionnel = أدب: voudrais ألطف من veux." }
 ]
},
{
 "id": "a2-core-10",
 "level": "A2",
 "skill": "core",
 "nav": "النفي المتقدم والـ subjonctif",
 "title": "🚫 النفي المتقدم والـ subjonctif",
 "subtitle": "ne...jamais و ne...rien و ne...plus، ومدخل للـ subjonctif",
 "blocks": [
  { "type": "p", "text": "الفرنسي عنده أنواع نفي كتير غير ne...pas. كل نوع بيعبر عن معنى مختلف: أبدًا، ولا حاجة، مش تاني، ولا حد. والـ subjonctif هو صيغة خاصة للمشاعر والرغبات والشك." },
  { "type": "h", "text": "أنواع النفي" },
  { "type": "table", "head": ["النوع", "المعنى", "مثال"], "rows": [
   ["ne ... pas", "مش", "Je ne parle pas. = مش بتكلم"],
   ["ne ... jamais", "أبدًا", "Je ne fume jamais. = مش بشرب سجاير أبدًا"],
   ["ne ... rien", "ولا حاجة", "Je ne vois rien. = مش شايف حاجة"],
   ["ne ... plus", "مش تاني", "Je ne travaille plus ici. = مش بشتغل هنا تاني"],
   ["ne ... personne", "ولا حد", "Je ne connais personne. = مش عارف حد"],
   ["ne ... ni ... ni", "ولا ... ولا", "Je n'aime ni le thé ni le café. = مش بحب لا الشاي ولا القهوة"]
  ]},
  { "type": "h", "text": "الـ subjonctif — مدخل بسيط" },
  { "type": "p", "text": "الـ subjonctif صيغة خاصة بتيجي بعد تعبيرات المشاعر والرغبة والشك والضرورة. مش زمن منفصل، هو صيغة (mode). أشهر استخداماته:" },
  { "type": "list", "items": [
   "`Il faut que tu viennes.` = لازم تيجي. (ضرورة)",
   "`Je veux que tu sois là.` = عايزك تكون موجود. (رغبة)",
   "`Je suis content que tu sois ici.` = مبسوط إنك هنا. (مشاعر)",
   "`Je ne pense pas qu'il vienne.` = مش فاكر إنه هيجي. (شك)"
  ]},
  { "type": "note", "text": "تصريف الـ subjonctif: خذ ils في المضارع، شيل -ent، وحط: -e, -es, -e, -ions, -iez, -ent. أفعال شاذة: être → sois، avoir → aie، aller → aille، faire → fasse، pouvoir → puisse." },
  { "type": "ex", "task": "حوّل للنفي المطلوب: Je fume. (أبدًا) / Je vois. (ولا حاجة) / Je travaille. (مش تاني)", "hint": "jamais, rien, plus.", "code": "Je ne fume jamais. Je ne vois rien. Je ne travaille plus.", "why": "أنواع النفي دي بتتستخدم في كل محادثة يومية." }
 ],
 "quiz": [
  { "q": "`Je ne fume jamais` معناها؟", "options": [{ "text": "مش بشرب سجاير" }, { "text": "مش بشرب سجاير أبدًا" }, { "text": "بشرب سجاير كتير" }, { "text": "بطلت سجاير" }], "answer": 1, "explain": "jamais = أبدًا: نفي كامل." },
  { "q": "`Je ne vois rien` معناها؟", "options": [{ "text": "مش شايف" }, { "text": "مش شايف حاجة" }, { "text": "شايف كل حاجة" }, { "text": "مش عايز أشوف" }], "answer": 1, "explain": "rien = ولا حاجة: Je ne vois rien = مش شايف حاجة." },
  { "q": "`Il faut que tu viennes` معناها؟", "options": [{ "text": "لازم تيجي" }, { "text": "عايزك تيجي" }, { "text": "ممكن تيجي" }, { "text": "هتيجي" }], "answer": 0, "explain": "Il faut que + subjonctif = لازم. viennes = subjonctif من venir." },
  { "q": "تصريف être في الـ subjonctif مع tu؟", "options": [{ "text": "tu es" }, { "text": "tu sois" }, { "text": "tu es-tu" }, { "text": "tu seras" }], "answer": 1, "explain": "être شاذ: je sois, tu sois, il soit." },
  { "q": "`Je ne travaille plus ici` معناها؟", "options": [{ "text": "مش بشتغل هنا" }, { "text": "مش بشتغل هنا تاني" }, { "text": "بشتغل هنا كتير" }, { "text": "بطلت شغل" }], "answer": 1, "explain": "plus = مش تاني / لم يعد." },
  { "q": "امتى نستخدم الـ subjonctif؟", "options": [{ "text": "بعد الحقائق" }, { "text": "بعد المشاعر والرغبات والشك" }, { "text": "في الماضي" }, { "text": "في المستقبل" }], "answer": 1, "explain": "subjonctif = مشاعر، رغبة، شك، ضرورة. مش حقائق." }
 ],
 "exercises": [
  { "task": "اكتب 4 جمل نفي بأنواع مختلفة.", "hint": "jamais, rien, plus, personne.", "code": "Je ne fume jamais. Je ne vois rien. Je ne travaille plus. Je ne connais personne.", "why": "أنواع النفي دي بتتسمع في كل محادثة فرنسية." },
  { "task": "صحح الغلط: `Je veux que tu viens.`", "hint": "بعد Je veux que محتاج إيه؟", "code": "Je veux que tu viennes.", "why": "بعد تعبيرات الرغبة (vouloir que) لازم subjonctif." }
 ]
}
);

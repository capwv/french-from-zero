/* Level A2 skills: listening, reading, writing, speaking (French) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "a2-listen",
 "level": "A2",
 "skill": "listening",
 "nav": "استماع: في المطعم",
 "title": "🎧 استماع: في المطعم",
 "subtitle": "محادثة كاملة في مطعم فرنسي: الحجز، الطلب، والحساب",
 "blocks": [
  { "type": "p", "text": "المطعم من أشهر مواقف الاستماع في A2. المحادثة فيها مفردات الأكل والطلبات والحساب. اسمع الأول من غير نص، وبعدين مع النص." },
  { "type": "dialogue", "lines": [
   { "who": "Serveur", "en": "Bonjour, vous avez réservé ?", "ar": "أهلاً، حضرتكم حاجزين؟" },
   { "who": "Omar", "en": "Oui, une table pour deux, au nom d'Omar.", "ar": "أيوه، ترابيزة لـ 2، باسم عمر." },
   { "who": "Serveur", "en": "Très bien, suivez-moi. Voici le menu.", "ar": "تمام، اتفضلوا معايا. ده المينيو." },
   { "who": "Sara", "en": "Merci. Qu'est-ce que vous recommandez ?", "ar": "متشكرة. بترشح إيه؟" },
   { "who": "Serveur", "en": "Le bœuf bourguignon est excellent aujourd'hui.", "ar": "البورجينيون ممتاز النهارده." },
   { "who": "Omar", "en": "Pour moi, le bœuf bourguignon. Et pour toi, Sara ?", "ar": "ليا البورجينيون. وإنتي يا سارة؟" },
   { "who": "Sara", "en": "Je voudrais le saumon, s'il vous plaît.", "ar": "أنا عايزة السلمون، لو سمحت." },
   { "who": "Serveur", "en": "Et comme boisson ?", "ar": "وكإيه تشربوا؟" },
   { "who": "Omar", "en": "Deux cafés, s'il vous plaît.", "ar": "2 قهوة، لو سمحت." },
   { "who": "Serveur", "en": "Très bien. Bon appétit !", "ar": "تمام. بالهنا والشفا!" }
  ]},
  { "type": "h", "text": "مفردات المطعم" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["réserver", "يحجز"],
   ["le menu", "المينيو"],
   ["recommander", "يرشح"],
   ["le bœuf bourguignon", "لحم بقري بصلصة النبيت"],
   ["le saumon", "سلمون"],
   ["la boisson", "المشروب"],
   ["l'addition", "الحساب"],
   ["Bon appétit !", "بالهنا والشفا!"]
  ]},
  { "type": "speak", "en": "Je voudrais le saumon, s'il vous plaît. Et comme boisson, un café.", "ar": "أنا عايزة السلمون، لو سمحت. وكإشرب، قهوة." }
 ],
 "quiz": [
  { "q": "عمر حجز ترابيزة لكام؟", "options": [{ "text": "1" }, { "text": "2" }, { "text": "3" }, { "text": "4" }], "answer": 1, "explain": "une table pour deux = ترابيزة لـ 2." },
  { "q": "الجرسون رشح إيه؟", "options": [{ "text": "السمك" }, { "text": "البورجينيون" }, { "text": "السلطة" }, { "text": "الشوربة" }], "answer": 1, "explain": "Le bœuf bourguignon est excellent." },
  { "q": "سارة طلبت إيه؟", "options": [{ "text": "البورجينيون" }, { "text": "السلمون" }, { "text": "الفراخ" }, { "text": "المكرونة" }], "answer": 1, "explain": "Je voudrais le saumon = عايزة السلمون." },
  { "q": "`l'addition` معناها؟", "options": [{ "text": "المينيو" }, { "text": "الحساب" }, { "text": "الطلب" }, { "text": "الحجز" }], "answer": 1, "explain": "l'addition = الحساب." },
  { "q": "`Qu'est-ce que vous recommandez ?` معناها؟", "options": [{ "text": "عايزين إيه؟" }, { "text": "بترشح إيه؟" }, { "text": "الحساب لو سمحت" }, { "text": "المينيو فين؟" }], "answer": 1, "explain": "recommander = يرشح: بترشح إيه؟" },
  { "q": "عمر وسارة طلبوا إيه كإشرب؟", "options": [{ "text": "مية" }, { "text": "عصير" }, { "text": "قهوة" }, { "text": "شاي" }], "answer": 2, "explain": "Deux cafés = 2 قهوة." }
 ],
 "exercises": [
  { "task": "اسمع المحادثة 3 مرات وجاوب من غير ما تبص: مين طلب إيه؟", "hint": "ركز على اسم الأكلة والشخص.", "code": "Omar = bœuf bourguignon, Sara = saumon.", "why": "الاستماع للتفاصيل مهارة A2 أساسية." },
  { "task": "اكتب طلبك في مطعم فرنسي في 3 جمل.", "hint": "Je voudrais... Comme boisson... L'addition, s'il vous plaît.", "code": "Je voudrais le bœuf bourguignon. Comme boisson, un café. L'addition, s'il vous plaît.", "why": "دي أهم 3 جمل في أي مطعم." }
 ]
},
{
 "id": "a2-read",
 "level": "A2",
 "skill": "reading",
 "nav": "قراءة: إعلان شقة",
 "title": "📖 قراءة: إعلان شقة",
 "subtitle": "اقرا إعلان شقة للإيجار وافهم التفاصيل المهمة",
 "blocks": [
  { "type": "p", "text": "إعلانات الشقق من أكتر النصوص العملية في A2. هتقرا إعلان حقيقي وتلقط التفاصيل: السعر، المكان، المساحة، والمرافق." },
  { "type": "p", "text": "À louer : bel appartement de 65 m² au centre-ville. Deux chambres, un salon, une cuisine équipée et une salle de bain. Troisième étage avec ascenseur. Proche du métro et des commerces. Loyer : 800 € par mois, charges comprises. Disponible à partir du 1er décembre. Contact : M. Dubois, 06 12 34 56 78.", "ar": "للإيجار: شقة حلوة 65 متر في وسط البلد. أوضتين، صالة، مطبخ مجهز وحمام. الدور التالت بأسانسير. قريبة من المترو والمحلات. الإيجار: 800 يورو في الشهر، شامل الخدمات. متاحة من أول ديسمبر. للتواصل: أستاذ دوبوا، 06 12 34 56 78." },
  { "type": "h", "text": "مفردات الإعلان" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["à louer", "للإيجار"],
   ["le loyer", "الإيجار"],
   ["les charges comprises", "شامل الخدمات"],
   ["l'ascenseur", "الأسانسير"],
   ["la cuisine équipée", "مطبخ مجهز"],
   ["disponible", "متاح"],
   ["à partir de", "ابتداءً من"],
   ["le centre-ville", "وسط البلد"]
  ]},
  { "type": "ex", "task": "اقرا الإعلان وجاوب: الشقة في الدور الكام؟ الإيجار شامل إيه؟", "hint": "شوف السطر التالت والرابع.", "code": "Troisième étage = الدور التالت. Charges comprises = شامل الخدمات.", "why": "القراءة العملية هي أساس A2." }
 ],
 "quiz": [
  { "q": "الشقة مساحتها كام؟", "options": [{ "text": "45 متر" }, { "text": "65 متر" }, { "text": "85 متر" }, { "text": "100 متر" }], "answer": 1, "explain": "65 m² = 65 متر مربع." },
  { "q": "الشقة في الدور الكام؟", "options": [{ "text": "الأول" }, { "text": "التاني" }, { "text": "التالت" }, { "text": "الرابع" }], "answer": 2, "explain": "Troisième étage = الدور التالت." },
  { "q": "الإيجار كام في الشهر؟", "options": [{ "text": "600 يورو" }, { "text": "700 يورو" }, { "text": "800 يورو" }, { "text": "900 يورو" }], "answer": 2, "explain": "800 € par mois = 800 يورو في الشهر." },
  { "q": "`charges comprises` معناها؟", "options": [{ "text": "الإيجار مش شامل" }, { "text": "شامل الخدمات" }, { "text": "الخدمات منفصلة" }, { "text": "مفيش خدمات" }], "answer": 1, "explain": "charges comprises = الإيجار شامل الكهربا والمية والخدمات." },
  { "q": "الشقة متاحة من امتى؟", "options": [{ "text": "أول نوفمبر" }, { "text": "أول ديسمبر" }, { "text": "أول يناير" }, { "text": "فوراً" }], "answer": 1, "explain": "à partir du 1er décembre = ابتداءً من أول ديسمبر." },
  { "q": "`le centre-ville` معناها؟", "options": [{ "text": "الضواحي" }, { "text": "وسط البلد" }, { "text": "الجامعة" }, { "text": "المطار" }], "answer": 1, "explain": "centre-ville = وسط البلد / داون تاون." }
 ],
 "exercises": [
  { "task": "اكتب إعلان شقة قصير بالفرنسي (4 جمل).", "hint": "À louer, chambres, loyer, disponible.", "code": "À louer : appartement de 50 m². Une chambre, un salon, une cuisine. Loyer : 500 € par mois. Disponible maintenant.", "why": "كتابة الإعلان بتثبت المفردات." },
  { "task": "لخص الإعلان في جملتين بالعربي.", "hint": "المكان، المساحة، السعر.", "code": "شقة 65 متر في وسط البلد، أوضتين، دور تالت بأسانسير، 800 يورو شامل الخدمات.", "why": "التلخيص بيثبت الفهم." }
 ]
}
,
{
 "id": "a2-write",
 "level": "A2",
 "skill": "writing",
 "nav": "كتابة: إيميل رسمي",
 "title": "✍️ كتابة: إيميل رسمي",
 "subtitle": "اكتب إيميل رسمي بالفرنسي لأستاذ أو جهة شغل",
 "blocks": [
  { "type": "p", "text": "الإيميل الرسمي في A2 ليه هيكل ثابت: تحية رسمية، مقدمة قصيرة، الموضوع، طلب أو سؤال، وختام مهذب. الهيكل ده بيشتغل في أي موقف رسمي." },
  { "type": "h", "text": "النموذج" },
  { "type": "p", "text": "Madame, Monsieur,\n\nJe m'appelle Ahmed et je suis étudiant en commerce à l'université. Je vous écris pour demander des informations sur le stage que vous proposez.\n\nEst-ce qu'il est possible de faire un stage pendant l'été ? Quelles sont les conditions ?\n\nJe vous remercie d'avance pour votre réponse.\n\nCordialement,\nAhmed", "ar": "سيدتي، سيدي،\n\nأنا اسمي أحمد وأنا طالب تجارة في الجامعة. بكتب لحضرتكم عشان أسأل عن التدريب اللي بتقدموه.\n\nهل ممكن أعمل تدريب في الصيف؟ وإيه الشروط؟\n\nمتشكر مقدماً على ردكم.\n\nمع خالص التحية،\nأحمد" },
  { "type": "h", "text": "الهيكل" },
  { "type": "list", "items": [
   "التحية: Madame, Monsieur, (رسمي جداً) أو Bonjour, (أقل رسمية).",
   "المقدمة: Je m'appelle... et je suis...",
   "السبب: Je vous écris pour...",
   "الطلب: Est-ce qu'il est possible de... ? / Je voudrais...",
   "الختام: Je vous remercie d'avance. / Cordialement, / Bien cordialement,"
  ]},
  { "type": "note", "text": "Cordialement = مع خالص التحية (المعيار). Bien cordialement = أدفأ شوية. Respectueusement = رسمي جداً جداً (للجهات الحكومية)." },
  { "type": "ex", "task": "اكتب إيميل رسمي تطلب فيه معلومات عن كورس فرنسي.", "hint": "اتبع الهيكل: تحية، مقدمة، سبب، طلب، ختام.", "code": "Madame, Monsieur,\n\nJe m'appelle Ahmed et je suis étudiant. Je vous écris pour demander des informations sur le cours de français.\n\nEst-ce qu'il est possible de commencer en janvier ? Quel est le prix ?\n\nJe vous remercie d'avance.\n\nCordialement,\nAhmed", "why": "الإيميل الرسمي مهارة أساسية في أي شغل أو دراسة." }
 ],
 "quiz": [
  { "q": "التحية الرسمية في الإيميل؟", "options": [{ "text": "Salut !" }, { "text": "Madame, Monsieur," }, { "text": "Coucou !" }, { "text": "Hey !" }], "answer": 1, "explain": "Madame, Monsieur = التحية الرسمية المعيار." },
  { "q": "`Je vous écris pour...` معناها؟", "options": [{ "text": "بكتب لحضرتك عشان..." }, { "text": "بقرأ لحضرتك..." }, { "text": "بقول لحضرتك..." }, { "text": "بسمع من حضرتك..." }], "answer": 0, "explain": "écrire = يكتب: Je vous écris pour = بكتب لحضرتك عشان." },
  { "q": "الختام الرسمي؟", "options": [{ "text": "Bisous !" }, { "text": "Cordialement," }, { "text": "À plus !" }, { "text": "Ciao !" }], "answer": 1, "explain": "Cordialement = مع خالص التحية." },
  { "q": "`Je vous remercie d'avance` معناها؟", "options": [{ "text": "متشكر على الرد" }, { "text": "متشكر مقدماً" }, { "text": "متشكر جداً" }, { "text": "متشكر على كل حاجة" }], "answer": 1, "explain": "d'avance = مقدماً: متشكر مقدماً على الرد." },
  { "q": "أي صيغة طلب ألطف؟", "options": [{ "text": "Je veux des informations." }, { "text": "Je voudrais des informations." }, { "text": "Donne-moi des informations." }, { "text": "Je demande des informations." }], "answer": 1, "explain": "conditionnel = أدب: voudrais ألطف من veux." },
  { "q": "`Cordialement` معناها؟", "options": [{ "text": "مع السلامة" }, { "text": "مع خالص التحية" }, { "text": "متشكر" }, { "text": "بكل حب" }], "answer": 1, "explain": "Cordialement = الختام الرسمي المعيار." }
 ],
 "exercises": [
  { "task": "اكتب إيميل رسمي لأستاذك تطلب فيه موعد.", "hint": "Madame/Monsieur, Je vous écris pour demander un rendez-vous.", "code": "Monsieur,\n\nJe m'appelle Ahmed et je suis votre étudiant. Je vous écris pour demander un rendez-vous.\n\nEst-ce que vous êtes disponible cette semaine ?\n\nJe vous remercie d'avance.\n\nCordialement,\nAhmed", "why": "طلب الموعد من أشهر الإيميلات الرسمية." },
  { "task": "صحح الغلط في الإيميل: `Salut prof ! Je veux un stage.`", "hint": "التحية والطلب محتاجين رسمية.", "code": "Monsieur, Je vous écris pour demander des informations sur le stage. Je voudrais savoir si c'est possible.", "why": "الإيميل الرسمي محتاج تحية وطلب مهذب." }
 ]
},
{
 "id": "a2-speak",
 "level": "A2",
 "skill": "speaking",
 "nav": "كلام: موقف في الشارع",
 "title": "🗣️ كلام: موقف في الشارع",
 "subtitle": "اسأل عن الاتجاهات وافهم الرد بالفرنسي",
 "blocks": [
  { "type": "p", "text": "سؤال الاتجاهات من أكثر المواقف العملية. هتتعلم تسأل عن أي مكان وتفهم الرد: يمين، شمال، على طول، جنب، ورا." },
  { "type": "h", "text": "الأسئلة" },
  { "type": "list", "items": [
   "`Excusez-moi, où est la gare ?` = لو سمحت، فين المحطة؟",
   "`Comment je peux aller au centre-ville ?` = أقدر أروح وسط البلد إزاي؟",
   "`C'est loin d'ici ?` = ده بعيد من هنا؟",
   "`Est-ce qu'il y a une pharmacie près d'ici ?` = فيه صيدلية قريبة من هنا؟"
  ]},
  { "type": "h", "text": "الردود" },
  { "type": "table", "head": ["الفرنسي", "المعنى"], "rows": [
   ["Allez tout droit", "امشي على طول"],
   ["Tournez à droite", "خد يمين"],
   ["Tournez à gauche", "خد شمال"],
   ["C'est à côté de...", "ده جنب..."],
   ["C'est derrière...", "ده ورا..."],
   ["C'est en face de...", "ده قدام..."],
   ["C'est à cinq minutes à pied", "ده 5 دقايق ماشي"],
   ["Prenez la première rue à droite", "خد أول شارع يمين"]
  ]},
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "Excusez-moi, où est la gare, s'il vous plaît ?", "ar": "لو سمحت، فين المحطة؟" },
   { "who": "Passant", "en": "Allez tout droit, puis tournez à gauche au feu.", "ar": "امشي على طول، وبعدين خد شمال عند الإشارة." },
   { "who": "Omar", "en": "C'est loin d'ici ?", "ar": "ده بعيد من هنا؟" },
   { "who": "Passant", "en": "Non, c'est à cinq minutes à pied.", "ar": "لأ، ده 5 دقايق ماشي." },
   { "who": "Omar", "en": "Merci beaucoup !", "ar": "متشكر جداً!" },
   { "who": "Passant", "en": "De rien, bonne journée !", "ar": "العفو، يومك سعيد!" }
  ]},
  { "type": "speak", "en": "Excusez-moi, où est la gare ? Allez tout droit, puis tournez à gauche. C'est à cinq minutes à pied.", "ar": "لو سمحت، فين المحطة؟ امشي على طول، وبعدين خد شمال. ده 5 دقايق ماشي." }
 ],
 "quiz": [
  { "q": "`Allez tout droit` معناها؟", "options": [{ "text": "خد يمين" }, { "text": "خد شمال" }, { "text": "امشي على طول" }, { "text": "ارجع" }], "answer": 2, "explain": "tout droit = على طول." },
  { "q": "`Tournez à gauche` معناها؟", "options": [{ "text": "خد يمين" }, { "text": "خد شمال" }, { "text": "امشي على طول" }, { "text": "استنى" }], "answer": 1, "explain": "à gauche = شمال." },
  { "q": "`C'est à cinq minutes à pied` معناها؟", "options": [{ "text": "ده 5 دقايق بالعربية" }, { "text": "ده 5 دقايق ماشي" }, { "text": "ده 5 كيلو" }, { "text": "ده بعيد" }], "answer": 1, "explain": "à pied = ماشي." },
  { "q": "عايز تسأل عن الصيدلية؟", "options": [{ "text": "Où est la gare ?" }, { "text": "Est-ce qu'il y a une pharmacie près d'ici ?" }, { "text": "C'est loin ?" }, { "text": "Comment ça va ?" }], "answer": 1, "explain": "Est-ce qu'il y a = هل فيه. près d'ici = قريب من هنا." },
  { "q": "`De rien` معناها؟", "options": [{ "text": "متشكر" }, { "text": "العفو" }, { "text": "مع السلامة" }, { "text": "صباح الخير" }], "answer": 1, "explain": "De rien = العفو (الرد على Merci)." },
  { "q": "`C'est en face de la banque` معناها؟", "options": [{ "text": "ده جنب البنك" }, { "text": "ده ورا البنك" }, { "text": "ده قدام البنك" }, { "text": "ده جوه البنك" }], "answer": 2, "explain": "en face de = قدام / في مواجهة." }
 ],
 "exercises": [
  { "task": "اكتب محادثة قصيرة (4 سطور) تسأل فيها عن مكان.", "hint": "Excusez-moi, où est...? Allez... Tournez...", "code": "Excusez-moi, où est la pharmacie ? — Allez tout droit, puis tournez à droite. — C'est loin ? — Non, c'est à deux minutes.", "why": "المحادثة دي هي أساس أي موقف في الشارع." },
  { "task": "علم صاحبك يسأل عن الاتجاهات بالفرنسي.", "hint": "ابدأ بـ Excusez-moi, où est...", "code": "علم صاحبك: Excusez-moi, où est la gare ?", "why": "التعليم بيثبت المعلومة." }
 ]
}
);

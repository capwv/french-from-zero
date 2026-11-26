/* French From Zero — curriculum part 2 (A2 core) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "a2-core-1",
 "level": "A2",
 "skill": "core",
 "nav": "الماضي: passé composé مع avoir",
 "title": "⏮️ الماضي المركب مع avoir",
 "subtitle": "أهم زمن في الفرنسي: اتكلم عن اللي حصل إمبارح",
 "blocks": [
  { "type": "p", "text": "الـ passé composé هو زمن الماضي الأساسي. بيتكون من فعل مساعد (avoir أو être) + اسم المفعول. زي ما تقول في المصري: أنا كنت أكلت، بالفرنسي: J'ai mangé." },
  { "type": "h", "text": "التركيب" },
  { "type": "list", "items": [
   "الفعل المساعد: avoir في المضارع (j'ai, tu as, il a, nous avons, vous avez, ils ont).",
   "اسم المفعول: جذع الفعل + نهاية حسب نوعه.",
   "النتيجة: J'ai mangé = أنا أكلت."
  ]},
  { "type": "h", "text": "اسم المفعول (participe passé)" },
  { "type": "table", "head": ["نوع الفعل", "النهاية", "مثال"], "rows": [
   ["-er", "-é", "manger → mangé، parler → parlé"],
   ["-ir", "-i", "finir → fini، choisir → choisi"],
   ["-re", "-u", "vendre → vendu، attendre → attendu"],
   ["شاذ", "احفظها", "avoir → eu، être → été، faire → fait، prendre → pris، voir → vu، boire → bu، lire → lu، mettre → mis"]
  ]},
  { "type": "note", "text": "النفي بيحط الفعل المساعد بين ne و pas: Je n'ai pas mangé = ماكلتش." },
  { "type": "ex", "task": "حوّل للماضي المركب: Je mange. / Tu finis. / Elle prend le bus.", "hint": "avoir + participe passé.", "code": "J'ai mangé. Tu as fini. Elle a pris le bus.", "why": "الـ passé composé هو الزمن اللي هتستخدمه في 90% من كلامك عن الماضي." }
 ],
 "quiz": [
  { "q": "اسم المفعول من manger؟", "options": [{ "text": "mangé" }, { "text": "mangi" }, { "text": "mangu" }, { "text": "mangait" }], "answer": 0, "explain": "أفعال -er بتاخد -é: manger → mangé." },
  { "q": "اسم المفعول من finir؟", "options": [{ "text": "finé" }, { "text": "fini" }, { "text": "finu" }, { "text": "finit" }], "answer": 1, "explain": "أفعال -ir بتاخد -i: finir → fini." },
  { "q": "اسم المفعول من prendre؟", "options": [{ "text": "prendré" }, { "text": "prendi" }, { "text": "pris" }, { "text": "prendu" }], "answer": 2, "explain": "prendre شاذ: pris. زي mettre → mis." },
  { "q": "`J'ai vu le match` معناها؟", "options": [{ "text": "أنا بشوف الماتش" }, { "text": "أنا شفت الماتش" }, { "text": "أنا هشوف الماتش" }, { "text": "أنا عايز أشوف الماتش" }], "answer": 1, "explain": "avoir + vu (اسم مفعول voir) = شفت." },
  { "q": "انفي: J'ai mangé.", "options": [{ "text": "Je n'ai mangé pas." }, { "text": "Je n'ai pas mangé." }, { "text": "Je n'ai pas mange." }, { "text": "Je ne pas ai mangé." }], "answer": 1, "explain": "ne + الفعل المساعد + pas + اسم المفعول." },
  { "q": "اسم المفعول من boire؟", "options": [{ "text": "boiré" }, { "text": "boi" }, { "text": "bu" }, { "text": "buvé" }], "answer": 2, "explain": "boire شاذ: bu. J'ai bu du café = شربت قهوة." }
 ],
 "exercises": [
  { "task": "اكتب 5 جمل عن اللي عملته إمبارح بالماضي المركب.", "hint": "manger, faire, regarder, étudier, boire.", "code": "J'ai mangé du foul. J'ai fait mes devoirs. J'ai regardé un film. J'ai étudié le français. J'ai bu du café.", "why": "الماضي المركب هو أول زمن هتحتاجه في أي محادثة عن يومك." },
  { "task": "صحح الغلط: `Je mange hier.`", "hint": "hier = إمبارح، يبقى محتاج ماضي.", "code": "J'ai mangé hier.", "why": "المضارع مينفعش مع أدوات الماضي زي hier." }
 ]
},
{
 "id": "a2-core-2",
 "level": "A2",
 "skill": "core",
 "nav": "الماضي: passé composé مع être",
 "title": "⏮️ الماضي المركب مع être",
 "subtitle": "أفعال الحركة والتغيير بتاخد être مش avoir",
 "blocks": [
  { "type": "p", "text": "معظم الأفعال بتاخد avoir، بس فيه مجموعة مهمة بتاخد être: أفعال الحركة والتغيير. والمفاجأة: اسم المفعول بيتغير حسب جنس وعدد الفاعل." },
  { "type": "h", "text": "أفعال être (الحركة والتغيير)" },
  { "type": "table", "head": ["الفعل", "المعنى", "مثال"], "rows": [
   ["aller", "يروح", "Je suis allé au Caire. = رحت القاهرة"],
   ["venir", "يجي", "Elle est venue me voir. = جت تشوفني"],
   ["arriver", "يوصل", "Nous sommes arrivés tard. = وصلنا متأخر"],
   ["partir", "يمشي", "Il est parti tôt. = مشي بدري"],
   ["entrer / sortir", "يدخل / يخرج", "Tu es entré. / Elle est sortie."],
   ["monter / descendre", "يطلع / ينزل", "Je suis monté. / Nous sommes descendus."],
   ["naître / mourir", "يتولد / يموت", "Il est né en 2004. / Il est mort jeune."],
   ["rester / retourner", "يفضل / يرجع", "Elle est restée. / Tu es retourné."],
   ["tomber / devenir", "يقع / يبقى", "Il est tombé. / Elle est devenue médecin."]
  ]},
  { "type": "note", "text": "اسم المفعول مع être بيتغير حسب الفاعل: مذكر = allé، مؤنث = allée، مذكر جمع = allés، مؤنث جمع = allées." },
  { "type": "h", "text": "الأفعال الانعكاسية كلها بتاخد être" },
  { "type": "list", "items": [
   "Je me suis réveillé tôt. = صحيت بدري.",
   "Elle s'est levée à sept heures. = قامت الساعة 7.",
   "Nous nous sommes lavés. = استحمينا.",
   "Tu t'es habillé vite. = لبست بسرعة.",
   "Il s'est couché tard. = نام متأخر."
  ]},
  { "type": "ex", "task": "حوّل للماضي المركب: Je vais au marché. / Elle se lève tôt. / Nous arrivons.", "hint": "أفعال حركة وانعكاسية = être.", "code": "Je suis allé au marché. Elle s'est levée tôt. Nous sommes arrivés.", "why": "الفرق بين avoir و être هو الفرق بين حد بيتكلم صح وحد بيتكلم مكسر." }
 ],
 "quiz": [
  { "q": "`Je suis allé` معناها؟", "options": [{ "text": "أنا رايح" }, { "text": "أنا رحت" }, { "text": "أنا هروح" }, { "text": "أنا بروح" }], "answer": 1, "explain": "aller بياخد être في الماضي المركب: Je suis allé = رحت." },
  { "q": "بنت راحت السوق. أي صيغة صح؟", "options": [{ "text": "Elle a allé au marché." }, { "text": "Elle est allé au marché." }, { "text": "Elle est allée au marché." }, { "text": "Elle a allée au marché." }], "answer": 2, "explain": "être + اسم مفعول مؤنث: allée (بزيادة e)." },
  { "q": "الأفعال الانعكاسية بتاخد أي فعل مساعد؟", "options": [{ "text": "avoir" }, { "text": "être" }, { "text": "faire" }, { "text": "aller" }], "answer": 1, "explain": "كل الأفعال الانعكاسية بتاخد être: Je me suis réveillé." },
  { "q": "`Nous sommes arrivés` معناها؟", "options": [{ "text": "إحنا بنوصل" }, { "text": "إحنا وصلنا" }, { "text": "إحنا هنوصل" }, { "text": "إحنا عايزين نوصل" }], "answer": 1, "explain": "arriver بياخد être: Nous sommes arrivés = وصلنا (جمع مذكر)." },
  { "q": "أي فعل من دول بياخد avoir مش être؟", "options": [{ "text": "aller" }, { "text": "manger" }, { "text": "partir" }, { "text": "naître" }], "answer": 1, "explain": "manger = ياكل، مش حركة ولا تغيير: J'ai mangé." },
  { "q": "`Elle s'est couchée tard` معناها؟", "options": [{ "text": "هي قامت بدري" }, { "text": "هي نامت متأخر" }, { "text": "هي لبست بسرعة" }, { "text": "هي خرجت" }], "answer": 1, "explain": "se coucher = ينام. s'est couchée = نامت (مؤنث)." }
 ],
 "exercises": [
  { "task": "اكتب 5 جمل عن رحلة قصيرة بالماضي المركب مع être.", "hint": "partir, arriver, entrer, sortir, retourner.", "code": "Je suis parti tôt. Je suis arrivé au Caire. Je suis entré dans un café. Je suis sorti à midi. Je suis retourné à Assiout.", "why": "أفعال الحركة هي أول حاجة هتحكي بيها عن أي رحلة." },
  { "task": "صحح الغلط: `Elle a allée au cinéma.`", "hint": "aller بياخد إيه؟", "code": "Elle est allée au cinéma.", "why": "aller بياخد être مش avoir، واسم المفعول مؤنث: allée." }
 ]
}
,
{
 "id": "a2-core-3",
 "level": "A2",
 "skill": "core",
 "nav": "الماضي المستمر: imparfait",
 "title": "🕰️ الماضي المستمر: imparfait",
 "subtitle": "الزمن اللي بتوصف بيه اللي كان بيحصل في الخلفية",
 "blocks": [
  { "type": "p", "text": "الـ imparfait هو زمن الوصف والعادات في الماضي. زي ما تقول في المصري: كنت بروح، كان بيشتغل، كنا بنلعب. بيوصف حاجة كانت مستمرة أو متكررة، مش حدث واحد خلص." },
  { "type": "h", "text": "التكوين" },
  { "type": "p", "text": "خذ nous في المضارع، شيل -ons، وحط النهايات: -ais, -ais, -ait, -ions, -iez, -aient." },
  { "type": "table", "head": ["الضمير", "parler", "finir", "faire"], "rows": [
   ["je", "parlais", "finissais", "faisais"],
   ["tu", "parlais", "finissais", "faisais"],
   ["il/elle/on", "parlait", "finissait", "faisait"],
   ["nous", "parlions", "finissions", "faisions"],
   ["vous", "parliez", "finissiez", "faisiez"],
   ["ils/elles", "parlaient", "finissaient", "faisaient"]
  ]},
  { "type": "note", "text": "être هو الفعل الوحيد الشاذ في الـ imparfait: j'étais, tu étais, il était, nous étions, vous étiez, ils étaient." },
  { "type": "h", "text": "امتى نستخدم imparfait؟" },
  { "type": "list", "items": [
   "عادات في الماضي: `Quand j'étais petit, je jouais au foot.` = لما كنت صغير، كنت بلعب كورة.",
   "وصف الخلفية: `Il faisait beau.` = الجو كان حلو.",
   "حالة مستمرة: `Elle dormait.` = هي كانت نايمة.",
   "مشاعر وأفكار في الماضي: `Je pensais que...` = أنا كنت فاكر إن...",
   "السن والوقت في الماضي: `J'avais dix ans.` = كان عندي 10 سنين."
  ]},
  { "type": "ex", "task": "اكتب 4 جمل عن طفولتك باستخدام imparfait.", "hint": "jouer, habiter, aimer, aller.", "code": "Quand j'étais petit, je jouais au foot. J'habitais à Assiout. J'aimais le foul. J'allais à l'école à pied.", "why": "الـ imparfait هو زمن الحكايات والذكريات." }
 ],
 "quiz": [
  { "q": "تصريف parler في imparfait مع je؟", "options": [{ "text": "je parle" }, { "text": "je parlais" }, { "text": "j'ai parlé" }, { "text": "je parlerai" }], "answer": 1, "explain": "imparfait: جذع nous (parl-) + -ais = je parlais." },
  { "q": "`Quand j'étais petit, je jouais au foot` معناها؟", "options": [{ "text": "لما أكبر هلعب كورة" }, { "text": "لما كنت صغير، كنت بلعب كورة" }, { "text": "أنا بلعب كورة دلوقتي" }, { "text": "أنا لعبت كورة إمبارح" }], "answer": 1, "explain": "imparfait = عادة في الماضي: كنت بلعب." },
  { "q": "تصريف être في imparfait مع nous؟", "options": [{ "text": "nous sommes" }, { "text": "nous étions" }, { "text": "nous avons été" }, { "text": "nous serons" }], "answer": 1, "explain": "être شاذ في الـ imparfait: j'étais, nous étions, ils étaient." },
  { "q": "امتى نستخدم imparfait؟", "options": [{ "text": "حدث واحد خلص" }, { "text": "عادة أو وصف في الماضي" }, { "text": "مستقبل" }, { "text": "أمر" }], "answer": 1, "explain": "imparfait = عادات، وصف، خلفية، مشاعر في الماضي." },
  { "q": "نهايات الـ imparfait لـ ils/elles؟", "options": [{ "text": "-ent" }, { "text": "-aient" }, { "text": "-ez" }, { "text": "-ons" }], "answer": 1, "explain": "ils parlaient, ils finissaient, ils faisaient." },
  { "q": "`Il faisait beau` معناها؟", "options": [{ "text": "الجو حلو دلوقتي" }, { "text": "الجو كان حلو" }, { "text": "الجو هيبقى حلو" }, { "text": "هو بيعمل حاجة حلوة" }], "answer": 1, "explain": "imparfait للوصف في الماضي: الجو كان حلو." }
 ],
 "exercises": [
  { "task": "اكتب 4 جمل تقارن بين الماضي والحاضر.", "hint": "Avant, je... / Maintenant, je...", "code": "Avant, j'habitais à Assiout. Maintenant, j'habite au Caire. Avant, je jouais au foot. Maintenant, je regarde le foot.", "why": "المقارنة بين الماضي والحاضر بتثبت الفرق بين imparfait و present." },
  { "task": "صحح الغلط: `Quand j'ai été petit, je jouais.`", "hint": "كان = حالة مستمرة، مش حدث واحد.", "code": "Quand j'étais petit, je jouais.", "why": "السن والحالة = imparfait، مش passé composé." }
 ]
},
{
 "id": "a2-core-4",
 "level": "A2",
 "skill": "core",
 "nav": "imparfait vs passé composé",
 "title": "⚖️ imparfait vs passé composé",
 "subtitle": "الفرق بين اللي كان بيحصل واللي حصل مرة واحدة",
 "blocks": [
  { "type": "p", "text": "أكبر تحدي في A2: امتى تستخدم imparfait وامتى passé composé؟ القاعدة بسيطة: imparfait للخلفية والوصف والعادات، passé composé للأحداث اللي خلصت. زي فيلم: الـ imparfait هو الخلفية والموسيقى، والـ passé composé هو الأحداث." },
  { "type": "table", "head": ["imparfait (الخلفية)", "passé composé (الحدث)"], "rows": [
   ["Il faisait beau. (الجو كان حلو)", "Soudain, il a commencé à pleuvoir. (فجأة بدأ يمطر)"],
   ["Je dormais. (كنت نايم)", "Le téléphone a sonné. (التليفون رن)"],
   ["Elle travaillait. (كانت بتشتغل)", "Son ami est arrivé. (صاحبها وصل)"],
   ["Nous jouions. (كنا بنلعب)", "Il a marqué un but. (جاب جون)"]
  ]},
  { "type": "h", "text": "القاعدة الذهبية" },
  { "type": "list", "items": [
   "imparfait = كان بيحصل (مستمر، متكرر، وصف، خلفية).",
   "passé composé = حصل وخلص (حدث واحد، نقطة في الزمن).",
   "في نفس الجملة: الخلفية imparfait + الحدث passé composé.",
   "كلمات بتدل على imparfait: toujours, souvent, tous les jours, chaque année.",
   "كلمات بتدل على passé composé: hier, soudain, d'abord, ensuite, une fois."
  ]},
  { "type": "ex", "task": "حط الفعل بين القوسين في الزمن الصح: `Il ___ (faire) beau quand nous ___ (arriver).`", "hint": "الجو = خلفية، الوصول = حدث.", "code": "Il faisait beau quand nous sommes arrivés.", "why": "دي أشهر صيغة في الفرنسي: خلفية + حدث." }
 ],
 "quiz": [
  { "q": "`Je dormais quand le téléphone a sonné` معناها؟", "options": [{ "text": "نمت ورن التليفون" }, { "text": "كنت نايم لما التليفون رن" }, { "text": "هنام لما التليفون يرن" }, { "text": "التليفون كان بيرن" }], "answer": 1, "explain": "dormais = imparfait (خلفية)، a sonné = passé composé (حدث)." },
  { "q": "أي زمن مع كلمة hier (إمبارح)؟", "options": [{ "text": "imparfait" }, { "text": "passé composé" }, { "text": "futur" }, { "text": "présent" }], "answer": 1, "explain": "hier = حدث خلص = passé composé." },
  { "q": "أي زمن مع tous les jours (كل يوم) في الماضي؟", "options": [{ "text": "imparfait" }, { "text": "passé composé" }, { "text": "futur" }, { "text": "présent" }], "answer": 0, "explain": "tous les jours = عادة متكررة = imparfait." },
  { "q": "`Soudain, il a commencé à pleuvoir` معناها؟", "options": [{ "text": "كان بيمطر" }, { "text": "فجأة بدأ يمطر" }, { "text": "هيمطر بكرة" }, { "text": "بيمطر دلوقتي" }], "answer": 1, "explain": "soudain + passé composé = حدث مفاجئ." },
  { "q": "أي جملة صح؟", "options": [{ "text": "J'ai dormi quand tu as appelé." }, { "text": "Je dormais quand tu as appelé." }, { "text": "Je dormais quand tu appelais." }, { "text": "J'ai dormi quand tu appelais." }], "answer": 1, "explain": "النوم = خلفية (imparfait)، المكالمة = حدث (passé composé)." },
  { "q": "`Elle travaillait quand son ami est arrivé` معناها؟", "options": [{ "text": "اشتغلت ووصل صاحبها" }, { "text": "كانت بتشتغل لما صاحبها وصل" }, { "text": "هتشتغل لما صاحبها يوصل" }, { "text": "صاحبها كان شغال" }], "answer": 1, "explain": "travaillait = خلفية، est arrivé = حدث." }
 ],
 "exercises": [
  { "task": "اكتب قصة قصيرة (4 جمل) فيها imparfait و passé composé.", "hint": "ابدأ بوصف الجو والمكان (imparfait)، وبعدين حكي اللي حصل (passé composé).", "code": "Il faisait beau. Je marchais dans la rue. Soudain, j'ai vu un ami. Nous avons pris un café ensemble.", "why": "القصة دي هي النموذج الأساسي لأي حكاية بالفرنسي." },
  { "task": "صحح الغلط: `Hier, je jouais au foot.`", "hint": "hier = حدث خلص.", "code": "Hier, j'ai joué au foot.", "why": "hier = نقطة في الزمن = passé composé. لو قلت tous les jours يبقى imparfait." }
 ]
}
,
{
 "id": "a2-core-5",
 "level": "A2",
 "skill": "core",
 "nav": "الضمائر: le/la/les و lui/leur",
 "title": "👆 ضمائر المفعول",
 "subtitle": "بدل ما تكرر الاسم، استخدم ضمير زي ما بنعمل في العربي",
 "blocks": [
  { "type": "p", "text": "لما حد يسألك: بتحب القهوة؟ مينفعش ترد: بحب القهوة. هتقول: بحبها. الفرنسي نفس الفكرة: ضمائر المفعول بتحل محل الاسم وتيجي قبل الفعل." },
  { "type": "h", "text": "ضمائر المفعول المباشر (COD)" },
  { "type": "table", "head": ["الضمير", "المعنى", "مثال"], "rows": [
   ["me/m'", "ـني", "Tu me vois ? = شايفني؟"],
   ["te/t'", "ـك", "Je te comprends. = فاهمك"],
   ["le/la/l'", "ـه / ـها", "Je le vois. = شايفه / Je la vois. = شايفها"],
   ["nous", "ـنا", "Il nous écoute. = بيسمعنا"],
   ["vous", "ـكم", "Je vous remercie. = بشكركم"],
   ["les", "ـهم", "Je les vois. = شايفهم"]
  ]},
  { "type": "list", "items": [
   "`Tu aimes le café ?` = بتحب القهوة؟ → `Oui, je l'aime.` = أيوه، بحبه.",
   "`Elle regarde la télé ?` = بتتفرج على التلفزيون؟ → `Oui, elle la regarde.` = أيوه، بتتفرج عليه.",
   "`Vous voyez les enfants ?` = شايفين الأولاد؟ → `Oui, nous les voyons.` = أيوه، شايفينهم."
  ]},
  { "type": "h", "text": "ضمائر المفعول غير المباشر (COI)" },
  { "type": "p", "text": "لما الفعل بياخد à + شخص (يتكلم مع، يدي لـ، يتكلم لـ)، استخدم lui (له/لها) أو leur (لهم)." },
  { "type": "table", "head": ["الضمير", "المعنى", "مثال"], "rows": [
   ["lui", "له / لها", "Je lui parle. = بكلمه/بكلمها"],
   ["leur", "لهم", "Nous leur écrivons. = بنكتبلهم"]
  ]},
  { "type": "list", "items": [
   "`Tu parles à ton ami ?` → `Oui, je lui parle.` = بكلمه.",
   "`Vous téléphonez à vos parents ?` → `Oui, nous leur téléphonons.` = بنتصل بيهم.",
   "`Il donne le livre à sa sœur.` → `Il lui donne le livre.` = بيديها الكتاب."
  ]},
  { "type": "ex", "task": "رد على الأسئلة دي بضمير: Tu aimes le thé ? / Tu parles à ta mère ?", "hint": "le thé = مذكر → le. parler à = lui.", "code": "Oui, je l'aime. / Oui, je lui parle.", "why": "الضمائر دي بتتستخدم في كل جملة تقريباً في المحادثة اليومية." }
 ],
 "quiz": [
  { "q": "`Je l'aime` معناها؟", "options": [{ "text": "بحبه/بحبها" }, { "text": "بحبهم" }, { "text": "بيحبني" }, { "text": "بحبك" }], "answer": 0, "explain": "l' = le أو la قبل متحرك: Je l'aime = بحبه أو بحبها." },
  { "q": "عايز تقول `بشوفهم`؟", "options": [{ "text": "Je leur vois." }, { "text": "Je les vois." }, { "text": "Je lui vois." }, { "text": "Je vous vois." }], "answer": 1, "explain": "les = ضمير مفعول مباشر جمع: Je les vois = بشوفهم." },
  { "q": "الفرق بين le و lui؟", "options": [{ "text": "مفيش فرق" }, { "text": "le مباشر و lui غير مباشر" }, { "text": "le جمع و lui مفرد" }, { "text": "le مؤنث و lui مذكر" }], "answer": 1, "explain": "le = مفعول مباشر (Je le vois)، lui = مفعول غير مباشر (Je lui parle)." },
  { "q": "`Nous leur téléphonons` معناها؟", "options": [{ "text": "بنتصل بيهم" }, { "text": "بنتصل بيكم" }, { "text": "بيكلمونا" }, { "text": "بنشوفهم" }], "answer": 0, "explain": "leur = لهم (مفعول غير مباشر جمع): Nous leur téléphonons." },
  { "q": "الضمير بييجي فين في الجملة؟", "options": [{ "text": "بعد الفعل" }, { "text": "قبل الفعل" }, { "text": "في الآخر" }, { "text": "في الأول" }], "answer": 1, "explain": "الضمير قبل الفعل دايمًا في الفرنسي: Je le vois." },
  { "q": "`Il nous écoute` معناها؟", "options": [{ "text": "بنسمعه" }, { "text": "بيسمعنا" }, { "text": "بيسمعهم" }, { "text": "بنسمعهم" }], "answer": 1, "explain": "nous = إحنا (مفعول): Il nous écoute = بيسمعنا." }
 ],
 "exercises": [
  { "task": "حوّل الجمل دي بضمير: Je vois le film. / Je parle à mon ami. / Nous regardons les photos.", "hint": "le film = le، à mon ami = lui، les photos = les.", "code": "Je le vois. Je lui parle. Nous les regardons.", "why": "التحويل ده هو أساس المحادثة الطبيعية." },
  { "task": "صحح الغلط: `Je vois le.`", "hint": "الضمير بييجي فين؟", "code": "Je le vois.", "why": "الضمير قبل الفعل مش بعده في الفرنسي." }
 ]
},
{
 "id": "a2-core-6",
 "level": "A2",
 "skill": "core",
 "nav": "الضمائر y و en",
 "title": "🔗 الضمائر y و en",
 "subtitle": "ضميرين صغيرين بيحلوا محل أماكن وكميات كاملة",
 "blocks": [
  { "type": "p", "text": "y و en من أكتر الكلمات استخداماً في الفرنسي اليومي، ومع ذلك معظم المبتدئين بيتخطوهم. y بيحل محل à + مكان أو حاجة، و en بيحل محل de + حاجة أو كمية." },
  { "type": "h", "text": "y = هناك / فيه / بيه" },
  { "type": "list", "items": [
   "بيحل محل à + مكان: `Tu vas au Caire ?` → `Oui, j'y vais.` = رايح هناك.",
   "بيحل محل à + حاجة: `Tu penses à ton examen ?` → `Oui, j'y pense.` = بفكر فيه.",
   "في التعبير الشهير: `Il y a...` = فيه/يوجد: Il y a un problème. = فيه مشكلة.",
   "`On y va ?` = نروح؟ / يلا بينا؟ (تعبير يومي جداً)"
  ]},
  { "type": "h", "text": "en = منه / منها / منهم / بعض" },
  { "type": "list", "items": [
   "بيحل محل de + حاجة: `Tu veux du café ?` → `Oui, j'en veux.` = عايز منه.",
   "مع الكميات: `Tu as combien de livres ?` → `J'en ai trois.` = عندي 3 منهم.",
   "مع الأفعال اللي بتاخد de: `Tu as besoin d'aide ?` → `Oui, j'en ai besoin.` = محتاجها.",
   "`J'en ai assez !` = كفاية كده! / زهقت! (تعبير يومي)"
  ]},
  { "type": "note", "text": "y و en بييجوا قبل الفعل زي باقي الضمائر. ومع بعض: y قبل en. مثال: Il y en a deux. = فيه 2 منهم." },
  { "type": "ex", "task": "رد بـ y أو en: Tu vas à la bibliothèque ? / Tu veux du thé ?", "hint": "à la bibliothèque = مكان → y. du thé = de + حاجة → en.", "code": "Oui, j'y vais. / Oui, j'en veux.", "why": "y و en بيخلوا كلامك طبيعي جداً، الفرنسيين بيستخدموهم في كل جملة." }
 ],
 "quiz": [
  { "q": "`J'y vais` معناها؟", "options": [{ "text": "أنا رايح" }, { "text": "أنا رايح هناك" }, { "text": "أنا جاي" }, { "text": "أنا فيه" }], "answer": 1, "explain": "y = هناك: J'y vais = رايح هناك." },
  { "q": "`J'en ai trois` معناها؟", "options": [{ "text": "عندي 3" }, { "text": "عندي 3 منهم" }, { "text": "هم عندهم 3" }, { "text": "فيه 3" }], "answer": 1, "explain": "en = منهم: J'en ai trois = عندي 3 منهم." },
  { "q": "`Il y a un problème` معناها؟", "options": [{ "text": "هو عنده مشكلة" }, { "text": "فيه مشكلة" }, { "text": "هو هناك" }, { "text": "مفيش مشكلة" }], "answer": 1, "explain": "Il y a = فيه/يوجد. تعبير ثابت." },
  { "q": "عايز تقول `عايز منه` (من القهوة)؟", "options": [{ "text": "J'y veux." }, { "text": "J'en veux." }, { "text": "Je le veux." }, { "text": "Je lui veux." }], "answer": 1, "explain": "du café = de + حاجة → en: J'en veux." },
  { "q": "`On y va ?` معناها في الكلام اليومي؟", "options": [{ "text": "إحنا هناك؟" }, { "text": "يلا بينا؟" }, { "text": "إحنا جايين؟" }, { "text": "إحنا فين؟" }], "answer": 1, "explain": "On y va ? = نروح؟ = يلا بينا؟ تعبير يومي جداً." },
  { "q": "`Il y en a deux` معناها؟", "options": [{ "text": "فيه 2" }, { "text": "فيه 2 منهم" }, { "text": "عنده 2" }, { "text": "هم 2" }], "answer": 1, "explain": "y + en مع بعض: Il y en a deux = فيه 2 منهم." }
 ],
 "exercises": [
  { "task": "رد بـ y أو en على الأسئلة دي: Tu penses à ton avenir ? / Tu as des frères ?", "hint": "penser à = y، des frères = de + جمع → en.", "code": "Oui, j'y pense. / Oui, j'en ai deux.", "why": "الردود دي بتتسمع في كل محادثة فرنسية." },
  { "task": "صحح الغلط: `Je vais y.`", "hint": "الضمير بييجي فين؟", "code": "J'y vais.", "why": "y قبل الفعل مش بعده." }
 ]
}
);

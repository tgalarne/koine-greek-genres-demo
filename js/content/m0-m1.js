/* Module 0 (Welcome) and Module 1 (Language and Society) */
(function(){
'use strict';
const C=window.C,{T,txt,call,impact,quote,FC,ACC,TABS,PROC,MC,MATCH,SORT,REF,gate,CARDS,PAIR,TL}=C.b;

/* ---------------- Module 0 ---------------- */
C.def('0.1',[
  {t:'outcomes',h:'What you will be able to do by the end'},
  txt('Welcome',`<p>Why would two ancient writers who used the same Greek sound so different? This course follows one answer: their social backgrounds, the genres they wrote in, and the choices they made as narrators left fingerprints on their language, and some of those fingerprints can be counted.</p>
   <p>You will move from ideas (sociolects, class, prestige, genre) to people (Luke and Plutarch), to editing and ordering, and finally to numbers: relative frequencies, pronouns, particles, vocabulary and the optative mood. You will finish by building your own reasoned argument.</p>`),
  TABS(null,'Choose the path that sounds like you',[
    {h:'I am new to linguistics',html:'<p>You are in the right place. Terms such as <em>sociolect</em> and <em>optative</em> are defined the first time they appear. Start at Module 1 and work through in order.</p><p>Modules 4 and 6 are optional. Skip them if you wish and you will still move up the scale of thinking tasks.</p>'},
    {h:'I know some Greek',html:'<p>Greek examples appear with transliteration or translation. Modules 5 to 8 will be familiar territory in places. Consider the optional Module 6 for the two competing schools of thought on emphasis and word order.</p>'},
    {h:'I only have a little time',html:'<p>Take the core path: Modules 1, 2, 3, 5, 7 and 8, then Module 9. Optional Modules 4 (editing sources) and 6 (emphasis and word order, advanced) can wait. Required work is the lessons, the graded checks, the final quiz and the one required capstone self-check.</p>'}]),
  {t:'thesis',id:'0.1',from:0,to:2,plain:true},
  impact('The ultimate goal for my thesis has become an examination of the impact of the respective authors’ sociological backgrounds on their speech as revealed in the Gospel of Luke and Acts of the Apostles and The Life of Caesar.'),
  {t:'thesis',id:'0.1',from:2,to:4,plain:true},
  ACC(null,'How this course works',[
    {h:'Lessons and navigation',html:'<p>Each lesson is one scroll. In a few places an activity holds back the next part until you commit an answer, and the bar at the foot of each lesson takes you to the next one. Use the menu (top left) to jump anywhere.</p>'},
    {h:'Graded checks and reflections',html:'<p>Knowledge checks, matching and sorting give feedback on every answer and can be taken again. They count toward your results. <b>Optional reflections</b> are not graded, never block you, and let you compare your own answer with a model answer. The <b>capstone in Module 9</b> is the one required reflection.</p>'},
    {h:'Keyboard and screen reader use',html:'<p>Every activity works by keyboard. Matching uses a menu per item, sorting uses a button per pile, and reordering uses move up and move down buttons. Charts come with a text description and a data table.</p>'},
    {h:'ID view (for reviewers)',html:'<p>The <b>ID view</b> button in the top bar shows which learning objective, activity type and assessment type each block is mapped to. The design page lists all of them.</p>'}],0)
]);

/* ---------------- Module 1 ---------------- */
/* 1.1 What sociolects are */
C.def('1.1',[
  {t:'thesis',id:'1.1',from:0,to:3,plain:true},
  impact('The major influences behind an individual’s linguistic tendencies and idiosyncrasies include gender, socioeconomic class, temperament, disposition, mood, age, profession, and surroundings.'),
  {t:'thesis',id:'1.1',from:3,to:4,plain:true,splitAt:['The major influences behind']},
  FC('1.1-1','Check your recall: sociolects and social factors',[
    ['Sociolect','A social dialect: a non-regional variety of language used by a particular social group.'],
    ['Social factors linked to variation','Gender, socioeconomic class, temperament, disposition, mood, age, profession and surroundings.'],
    ['Sociolinguistics','The study of the relations between language and society.'],
    ['Is class the only factor?','No. Class is seldom the only sociological factor involved in language variation between individuals or groups.']]),
  gate('Continue'),
  C.b.MC('1.1-2','Which statement best explains why the way a person speaks can signal group membership?',
    ['Speech is fixed by the place where a person was born and by nothing else.','People take on the speech patterns of the social groups they spend time in, so those patterns come to mark who belongs.','Everyone in the same social class speaks in exactly the same way.','Only formal vocabulary can signal group membership.'],[1],
    'People take on the speech patterns of the groups they spend time in. The thesis gives the example of someone from the working or lower class who moves into a white-collar job and ends up speaking in a way shaped equally by family and friends and by professional peers. It also notes that class is seldom the only factor. A sociolect is <em>non-regional</em>, so place alone cannot be the whole story, and nothing in the thesis says that everyone in a class speaks identically.'),
  gate('Continue'),
  CARDS('1.1-3','Four modern speech samples',[
    {h:'Sample A',html:'<p>“Y’all fixin’ to head out?”</p><p class="tnote">Heard across a wide area of the southern United States.</p>'},
    {h:'Sample B',html:'<p>“The patient is NPO with q4h vitals.”</p><p class="tnote">Heard at hospital handovers.</p>'},
    {h:'Sample C',html:'<p>“It was lit, no cap.”</p><p class="tnote">Heard in teen group chats.</p>'},
    {h:'Sample D',html:'<p>“Per my last email, let’s circle back.”</p><p class="tnote">Heard in office meetings.</p>'}]),
  C.b.MC('1.1-3','Which pairing correctly names a <em>sociolect</em> (a non-regional variety tied to a social group) and the group it marks?',
    ['Sample A marks teenagers.','Sample B marks hospital staff.','Sample C marks retirees.','Sample D marks speakers from the Midwest.'],[1],
    'Sample B is a profession-linked variety. Sample A is closer to a <em>regional</em> dialect feature, and the thesis defines sociolects as <em>non-regional</em>. Samples C and D are linked to age and office work, not to retirees or to one region.'),
  gate('Continue'),
  SORT('1.1-4','Read the passage, then sort each phrase: <em>“Hey folks, per my last email, let’s circle back on the deliverables before the standup. Also, the weather is nice.”</em> Which phrases mark the speaker’s social group (office workers) and which are neutral?',
    ['Marks the group (office workers)','Neutral'],
    [['per my last email',0],['circle back',0],['deliverables',0],['standup',0],['Hey folks',1],['before',1],['Also',1],['the weather is nice',1]],
    'The marked phrases are workplace jargon that signals who belongs. Everyday words and small talk do not mark a group.')
]);

/* 1.2 Class and prestige */
C.def('1.2',[
  {t:'heading',h:'Socioeconomic Class'},
  {t:'thesis',id:'1.2',from:0,to:9,plain:true,splitAt:['There are two interesting observations']},
  {t:'placeholder',label:'Placeholder: activity to be added',note:'Recall activity for the four tiers of the modern class model (objective 1.2-1). Replace this block.'},
  gate('Continue'),
  {t:'heading',h:'Class in Ancient Greece'},
  {t:'thesis',id:'1.2',from:9,to:20,nobar:true},
  MATCH('1.2-2','Match each ancient Greek social role to the modern tier it corresponds to.',
    ['A landowner whose estate is worked by slaves','A small free producer','An artisan or trader','A peasant','An agricultural tenant','A person held in chattel slavery'],
    ['Upper class','Middle class','Working class','Lower class'],[0,1,1,1,2,3],
    'The thesis adapts the modern hierarchy: the propertied class sits at the top, the intermediate class (small free producers, artisans and traders, peasants) corresponds to the middle tiers, and the landless sit below. The thesis does not give a one-to-one table, so placing tenants in the working class and the enslaved in the lower class is this course’s reading.'),
  gate('Continue'),
  {t:'heading',h:'Vernacular Change and Prestige'},
  {t:'thesis',id:'1.2',from:20,to:22,nobar:true,splitAt:['Overt prestige refers to the connotation','A general example that demonstrates']},
  FC('1.2-3','Overt and covert prestige',[
    ['Overt prestige','Respect for variants close to the cultural mean. Shifts move toward standardization and acceptance by the middle and upper echelons. Example: newcomers imitate local speech to fit in.'],
    ['Covert prestige','Respect for the norms of the extreme classes. Shifts move toward marginalization to show solidarity with local norms. Example: natives push their language further from the standard to keep their identity distinct from a foreign group.']]),
  gate('Continue'),
  MC('1.2-3','A newcomer to a town starts copying the standard local way of speaking to fit in. Which kind of prestige is the newcomer seeking?',
    ['Covert prestige','Overt prestige','Neither: prestige only applies to writing','Both at once, to the same degree'],[1],
    'Moving toward the standard to be accepted by the middle and upper echelons is overt prestige. The thesis’s own example has the foreigners imitating local speech for overt prestige.',{k:'overt'}),
  MC('1.2-3','Longtime residents push their speech further toward local norms to keep their identity distinct from newcomers. Which kind of prestige is this?',
    ['Overt prestige','Covert prestige','Standardization','Hypercorrection'],[1],
    'Moving toward marginalization to identify with local norms and show solidarity is covert prestige. The natives in the thesis’s example do exactly this.',{k:'covert'}),
  MC('1.2-4','A speaker works as a paralegal in a mid-size city. Her parents were warehouse workers, and her speech blends her family’s patterns with those of her office peers. Using the four-tier model, where does she belong?',
    ['Upper class','Middle class (lower middle), with speech shaped by both groups','Working class only','Lower class'],[1],
    'A white-collar job places her in the middle-class band, probably the lower middle. The thesis notes that people who advance from the working class to white-collar work carry patterns from both groups.')
]);

/* 1.3 Temperament, disposition and style */
C.def('1.3',[
  {t:'thesis',id:'1.3',from:0,to:2,plain:true,splitAt:['To give a simple example']},
  FC('1.3-1','Working definitions',[
    ['Temperament','A person’s nature when they come into the world: how they are wired. At its core it is outside anyone’s control.'],
    ['Disposition','Governed by the choices a person makes and the paths taken in growth and maturity. Shaped equally by internal and external factors.'],
    ['Style','The conscious thought and attention paid to the act of speaking or writing, and the formality of the language. Five styles on one continuum: Intimate, Casual, Consultative, Formal, Frozen.'],
    ['Mood (for contrast)','More fleeting than disposition and shaped mainly by external factors. It may affect individual conversations more than overall linguistic tendencies.']]),
  gate('Continue'),
  {t:'thesis',id:'1.3',from:2,to:4,nobar:true,splitAt:['Some of these styles are governed','In brief,'],bullets:[{from:'Intimate, Casual, Consultative, Formal, and Frozen.',items:['Intimate','Casual','Consultative','Formal','Frozen']}]},
  TABS('1.3-2','How each term shapes the way a person tells a story',[
    {h:'Temperament',html:'<p>The outlook you start with. It may lead you to make certain identifications and judgments about the people you meet.</p>'},
    {h:'Disposition',html:'<p>What you do with that outlook. Disposition governs which impressions, the negative or the positive, you focus on and emphasize. A story told by an upbeat narrator and a dictatorial one will differ even about the same event.</p>'},
    {h:'Style',html:'<p>How formal the telling is and how much attention is paid to the act. The thesis argues that an author’s environment affects how they see their audience, how equal reader and writer are, and how formal the relationship should be.</p>'},
    {h:'Compare',html:'<table class="data"><thead><tr><th>Term</th><th>Source</th><th>What it shapes in a story</th></tr></thead><tbody><tr><th scope="row">Temperament</th><th>Inborn</th><td>Overall outlook</td></tr><tr><th scope="row">Disposition</th><th>Choices and growth</th><td>What the narrator emphasizes</td></tr><tr><th scope="row">Style</th><th>Environment and setting</th><td>Formality and attention to the telling</td></tr></tbody></table>'}]),
  gate('Continue'),
  MC('1.3-2','A narrator tells a story and keeps returning to what went wrong, even though many positive details were available. Which term best explains the choice of what to emphasize?',
    ['Temperament, because it is inborn and outside anyone’s control','Disposition, because it governs which impressions a person focuses on','Style, because it only concerns formality','Mood, because it is the most permanent of the four'],[1],
    'Disposition is the term that governs what, positive or negative, a person focuses on and emphasizes. Temperament is inborn; style is about formality; mood is fleeting.'),
  gate('Continue'),
  {t:'callout',k:'Character sketch',html:'<p>Dara tells stories in a formal register and always picks the hopeful details on purpose, though she says she was a nervous child from the start.</p>'},
  MC('1.3-3','Which of the terms apply to Dara? Select all that apply.',
    ['Temperament (nervous from the start)','Disposition (choosing hopeful details)','Style (formal register)','Mood (a passing state today)'],[0,1,2],
    'Nervous “from the start” points to temperament, choosing the hopeful details points to disposition, and the formal register is style. Nothing in the sketch describes a passing mood.',{multi:true})
]);

/* 1.4 Narratives as choices */
C.def('1.4',[
  {t:'thesis',id:'1.4',from:0,to:2,plain:true,moveToNext:'Ultimately, these choices',bullets:[{from:'details, descriptions, forms, and structures.',colon:true,items:['Details','Descriptions','Forms','Structures']}]},
  PAIR('1.4-1','One event, worded two ways',
    {cap:'Wording A',html:'<p>“A car hit a cyclist at the corner.”</p>'},
    {cap:'Wording B',html:'<p>“A cyclist and a car collided at the corner.”</p>'}),
  MC('1.4-1','What choice does the wording make in A that B avoids?',
    ['A names the time of day and B does not.','A makes the car the actor and the cyclist the one acted on; B treats both as equal participants.','A is false and B is true.','A uses a more formal register than B.'],[1],
    'The narrator chose among alternatives: who is the subject of the sentence, and what verb frames the event. The thesis says these choices of details, descriptions, forms and structures are not neutral.'),
  gate('Continue'),
  ACC('1.4-2','Why wording is a choice, not a neutral record',[
    {h:'Decisions about inclusion',html:'<p>A narrator must decide which details to include. Whatever is left out is also a choice.</p>',open:true},
    {h:'Subjective representation',html:'<p>These choices of representation mean narratives cannot be regarded as strictly neutral or purely factual accounts.</p>'},
    {h:'A means to an end',html:'<p>A narrative represents the narrator’s intent and serves to make a point. It lets the narrator evaluate themselves and others and decide how each will be portrayed.</p>'}]),
  MC('1.4-2','Which statement best explains why a narrator’s wording is “a choice among alternatives”?',
    ['The narrator could only have described the event one way.','Every event has exactly one correct description.','The narrator selects details, descriptions and forms to represent the event and make a point.','The narrator’s social position has no effect on the wording.'],[2],
    'Because narration involves decisions about details, descriptions, forms and structures, it is a representation of the narrator’s intent rather than a neutral record.'),
  gate('Continue'),
  quote('“I was crawling through the intersection when a cyclist darted out.”','Narrator 1, a commuter driver'),
  quote('“Another cyclist was hit by a driver who failed to yield. This keeps happening.”','Narrator 2, a cycling-advocacy volunteer'),
  quote('“At 8:14 a.m. a collision occurred between a vehicle and a cyclist at the intersection.”','Narrator 3, a police incident report'),
  MC('1.4-3','Which narrator’s wording most clearly reveals an official, professional position, and how?',
    ['Narrator 1, because it uses the first person','Narrator 2, because it names a cause','Narrator 3, because the impersonal, time-stamped wording keeps the writer out of the account and avoids assigning blame','None of them: wording never reveals a social position'],[2],
    'The report’s register (impersonal, precise, no stance on fault) reflects an institutional role. Narrators 1 and 2 each frame the event from their own position as driver and as advocate.'),
  gate('Continue'),
  {t:'placeholder',label:'Placeholder: activity to be added',note:'Activity for objective 1.4-4: annotate a short news paragraph, marking two places where the writer chose between wordings. Replace this block.'}
]);
})();

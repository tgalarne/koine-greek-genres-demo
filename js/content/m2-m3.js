/* Module 2 (Genre Theory) and Module 3 (Two Authors, One Language) */
(function(){
'use strict';
const C=window.C,{T,txt,call,impact,quote,FC,ACC,TABS,PROC,MC,MATCH,SORT,REF,gate,CARDS,PAIR,TL,table}=C.b;

/* ---------------- Module 2 ---------------- */
C.def('2.1',[
  {t:'thesis',id:'2.1',from:0,to:2,plain:true},
  FC('2.1-1','Check your recall: genre and its conventions',[
    ['Genre','A category whose members take on meaning by comparison and contrast within a system. Genres are defined by the features and characteristics of texts, their strengths, weaknesses, frequency and absence.'],
    ['Convention','A typical feature of texts in a genre.'],
    ['Modern genre: news report','Headline, key facts first (who, what, when, where), named sources, an impersonal voice.'],
    ['Modern genre: blog post','First-person voice, informal tone, opinion allowed, often invites comments.']]),
  gate('Continue'),
  {t:'thesis',id:'2.1',from:2,to:4,nobar:true},
  impact('The process of genre classification is not neutral or objective, nor do the questions it raises have binary solutions.'),
  ACC('2.1-2','“Constructed” explained with a modern example',[
    {h:'Who decides what a podcast is?',html:'<p>Is a podcast an “audio blog”, a “radio show” or a new genre? Listeners, platforms, critics and the people who make them each draw the boundary differently. No experiment can settle it.</p>',open:true},
    {h:'Defined by people, not found in nature',html:'<p>Genres are societally, individually or purposefully defined. They can easily, and not incorrectly, be sorted into more than one class.</p>'}]),
  MC('2.1-2','Which statement best captures what it means to say a genre is <em>constructed</em> rather than natural?',
    ['Genres are discovered by experiments in the way species are.','Genres are defined by societies, individuals or purposes, so classification is not neutral and a text may belong to more than one.','Genres are invented by authors and can never be shared.','Each text has exactly one correct genre that scholars have not yet found.'],[1],
    'Constructed means societally, individually or purposefully defined. The thesis adds that generic decisions sit in a grey area and may be sorted into several classes.'),
  gate('Continue'),
  {t:'thesis',id:'2.1',from:4,to:6,nobar:true},
  REF('2.1-3','Classify these three short texts. Give more than one genre label where they overlap. (1) A mock-serious article reporting that a cat has been elected mayor. (2) A recipe that opens with a long story about the writer’s grandmother. (3) A film review posted as a reply in an online forum.',
    '<p>Many answers are acceptable. A sample: (1) news report and satire (or humor); (2) recipe and personal essay or blog post; (3) review and forum post (or comment). The point is that each can be sorted into more than one class and no single label is “the” answer.</p>',
    ['I gave at least two labels for one of the texts','I could say which conventions led to each label','I accepted that other labels could also be defended'],
    'This is ungraded: genres overlap, so there is no single right answer.'),
  gate('Continue'),
  TABS('2.1-4','Two modern genres side by side',[
    {h:'News report',html:'<ul><li>Headline, then who, what, when and where in the opening</li><li>Named sources and attributed quotes</li><li>Impersonal voice; opinion kept out of the report</li></ul>'},
    {h:'Blog post',html:'<ul><li>First person (“I”)</li><li>Informal tone, sometimes humor</li><li>Opinion welcome; comments invited</li></ul>'}]),
  MC('2.1-4','A text opens with a headline, answers who, what, when and where in the first paragraph, quotes named officials and never says “I”. Which genre’s conventions does it follow?',
    ['Blog post','News report','Diary entry','Personal essay'],[1],
    'Headline, key facts first, named sources and an impersonal voice are conventions of the news report.')
]);

C.def('2.2',[
  {t:'thesis',id:'2.2',from:0,to:1,plain:true,splitAt:['As far as changing in function']},
  ACC('2.2-1','How genres do social work',[
    {h:'They regularize transactions',html:'<p>Literary genres keep evolving so that they can regularize discursive transactions within societies and generate knowledge. A cover letter tells an employer what to expect and tells the applicant what to include.</p>',open:true},
    {h:'They keep readers and audiences in relation',html:'<p>Genres go with consistent ways of producing, composing and interpreting texts, so that the social relation between readers and their audiences is maintained.</p>'}]),
  MC('2.2-1','Which statement best explains how a genre does social work and not only organizes content?',
    ['It decides which words are spelled correctly.','It regularizes the exchange between writers and readers by setting shared expectations for producing and interpreting texts.','It guarantees that every text in the genre is true.','It prevents any new genre from emerging.'],[1],
    'The thesis says genres regularize discursive transactions and maintain the social relation of readers and audiences. Genres also emerge, disappear and change.'),
  gate('Continue'),
  TL('2.2-2','One genre across time: personal correspondence (an illustration)',[
    {d:'1800s',t:'Handwritten letters',p:'Formal salutations and closings; days or weeks to arrive.'},
    {d:'Early 1900s',t:'Typed letters and telegrams',p:'Telegrams force brevity; business letters keep fixed formulas.'},
    {d:'1990s',t:'Email',p:'A subject line is added; tone becomes less formal; replies arrive in minutes.'},
    {d:'2010s',t:'Text and direct messages',p:'Very short, often without greetings; emoji do some of the work of tone.'}]),
  MC('2.2-2','Which sentence best summarizes this case of a genre changing over time?',
    ['Personal correspondence disappeared once email arrived.','The genre kept its core purpose of reaching another person but shifted in form, speed and formality as technology and norms changed.','Telegrams invented personal correspondence.','Letters were never formal.'],[1],
    'Genres shift in form to fit the changing landscape while keeping social functions. (This timeline is an illustration; it is not from the thesis.)'),
  gate('Continue'),
  PAIR('2.2-3','An old and a current example of one genre: the business message',
    {cap:'Then (letter)',cls:'old',html:'<p>Dear Sir, I beg to acknowledge receipt of your esteemed favour of the 3rd inst. and trust the goods will reach you in good order. I remain, Sir, your obedient servant.</p>'},
    {cap:'Now (email)',html:'<p>Subject: Order shipped<br>Hi Sam, thanks for your order! It’s on its way and should reach you Friday. Let me know if anything looks off. Best, Priya</p>'}),
  REF('2.2-3','In a sentence or two, say what changed between the two messages, and what stayed the same.',
    '<p>Changed: formality, length, the subject line, and how the writer names themselves. Same: a greeting, a statement of purpose (confirming the order), a closing and a signature. The genre kept its job of confirming a transaction between two people.</p>',
    ['I named at least one convention that changed','I named at least one convention that persisted']),
  gate('Continue'),
  TABS('2.2-4','Persisted and changed conventions in the business message',[
    {h:'Persisted',html:'<ul><li>A greeting</li><li>A stated purpose (confirming an order)</li><li>A sign-off and a name</li></ul>'},
    {h:'Changed',html:'<ul><li>Formal phrases such as “esteemed favour”</li><li>Length and ceremony</li><li>A subject line</li></ul>'}]),
  MC('2.2-4','Which conventions persisted from the letter to the email? Select all that apply.',
    ['A greeting','A formal phrase such as “esteemed favour”','A stated purpose','A sign-off and name','A subject line'],[0,2,3],
    'Greeting, purpose and sign-off survived. The formal phrase and (in the other direction) the subject line are among the things that changed.',{multi:true})
]);

C.def('2.3',[
  {t:'thesis',id:'2.3',from:0,to:1,plain:true,splitAt:['These unstated particulars']},
  FC('2.3-1','Check your recall: background knowledge',[
    ['Background knowledge','What the author assumes the audience already knows, so it can be left unstated.'],
    ['Why is it left unstated?','Experience within a genre lets writers use shorthand to make communication more efficient.'],
    ['What can go wrong?','In some cases, explicitly stating what the audience is assumed to know is judged, and even stigmatized.']]),
  gate('Continue'),
  {t:'callout',k:'Read the passage twice',html:'<p>“With two out in the ninth he worked the count full, took ball four, and the runner on second trotted home.”</p>'},
  TABS('2.3-2','Same passage, two readers',[
    {h:'Without baseball background',html:'<p>You can follow the words, but “worked the count”, “ball four” and “two out” are unexplained. You may not know why a walk sends a runner home, or that this ends the game.</p>'},
    {h:'With baseball background',html:'<p>You read the shorthand at once: a walk with the bases loaded forced in the winning run. Nothing needed to be stated.</p>'}]),
  MC('2.3-2','What does this example show about background knowledge?',
    ['The passage means the same to every reader.','Readers with the shared background take far more from the same words than readers without it.','Background knowledge only matters in poetry.','Only the author needs background knowledge.'],[1],
    'The author assumed background knowledge; readers who share it get more from the text.'),
  gate('Continue'),
  quote('“For it is not histories we are writing, but Lives.”','Plutarch, quoted in the thesis (Methods of Narration)'),
  REF('2.3-3','Predict how a modern reader and an ancient reader would each take the sentence above. What does each assume “history” should be?',
    '<p>A modern reader, expecting history to be objective and chronological, might read it as an apology for getting things wrong. An ancient reader, for whom history was less bound to objectivity and valued the truths of archetypal texts over facts, would take it as a normal statement of aim: character, not a complete record of events.</p>',
    ['I contrasted what each reader assumes about history','I linked the contrast to background knowledge'])
]);

C.def('2.4',[
  {t:'thesis',id:'2.4',from:0,to:1,plain:true},
  impact('No text is without genre.'),
  MC('2.4-1','What does the thesis mean by the “tyranny of genre”?',
    ['Genres are unnecessary and should be abolished.','Genre can create tension between author and work, limit a text’s meaning-potential and lead to passive consumption.','Authors are forced to write in more than one genre.','Readers are always free from genre.'],[1],
    'The “tyranny of genre” names the worry that genre limits meaning and encourages passive reading. The thesis’s counterpoint is that audiences can read against the grain.'),
  gate('Continue'),
  {t:'thesis',id:'2.4',from:1,to:2,nobar:true},
  PROC('2.4-2','Reading against the grain',[
    {h:'Name the genre’s expectations',html:'<p>What does the genre lead you to expect and accept?</p>'},
    {h:'Read it as the genre invites',html:'<p>Take the text on its own terms first.</p>'},
    {h:'Impose your own philosophies and beliefs',html:'<p>The thesis notes that audiences are not prevented from reading against the grain and imposing their own philosophies and beliefs on generic texts.</p>'},
    {h:'Say what the genre was hiding or assuming',html:'<p>Whose interests does it serve? What does it leave out?</p>'}],
    {h:'Summary',html:'<p>You question actively and take the author’s proposition “with a grain of salt”, then respond.</p>'}),
  REF('2.4-2','Apply the steps to this sample ad: “Quiet, comfortable, reliable: the minivan for the family that has everything figured out.”',
    '<p>Expectation: an advertisement flatters the buyer and promises ease. Against the grain: who counts as “the family” and what does “everything figured out” assume about income and routine? The ad also hides price, trade-offs and families that do not fit the picture.</p>',
    ['I named what the genre expects','I asked what the text assumes or leaves out','I responded as a reader, not just as a consumer']),
  gate('Continue'),
  {t:'thesis',id:'2.4',from:2,to:3,nobar:true},
  TABS('2.4-3','One text, two readings: “Once upon a time a poor girl was rescued by a prince, and they lived happily ever after.”',[
    {h:'Inside the genre',html:'<p>You accept the pattern: hardship, rescue, reward. The happy ending feels natural, and the story’s moral works as it was meant to.</p>'},
    {h:'Against the grain',html:'<p>You ask why rescue comes from a prince, who is assumed to deserve what, and what the story says about where a girl’s security should come from. The text now shows the values the genre carries.</p>'}]),
  MC('2.4-3','What does reading <em>against</em> the grain show that reading <em>inside</em> the genre does not?',
    ['The plot of the story','The assumptions and values the genre builds into the text','The number of words in the text','Nothing: both readings show the same thing'],[1],
    'Reading inside the genre shows how the text works as intended. Reading against it exposes what the genre assumes and carries.'),
  gate('Continue'),
  REF('2.4-4','Think of a text you recently read. In a short comment, say what you expected from it because of its genre label, and what it actually did.',
    '<p>For example: “I expected a blog post to be personal and chatty. This one read like a formal report, with statistics and no ‘I’.” Notice where the genre label set an expectation and where the text departed from it.</p>',
    ['I named the genre label','I stated my expectation','I compared it with what the text did']),
  gate('Continue'),
  {t:'thesis',id:'2.4',from:3,to:4,nobar:true}
]);

/* ---------------- Module 3 ---------------- */
C.def('3.1',[
  {t:'thesis',id:'3.1',from:0,to:2,plain:true},
  impact('Some of what we believe to know is unsubstantiated, and some of what we propose is based on inferences drawn from details we do possess.'),
  ACC('3.1-2','Why the course hedges its claims about Luke',[
    {h:'Time, records and the nature of the works',html:'<p>Given the passage of time, the nature of the works and the lack of records, some details are simply not known.</p>',open:true},
    {h:'One person or several?',html:'<p>The name may refer to “the same individual, or possibly group”, responsible for at least one of, if not both, the Gospel of Luke and Acts.</p>'},
    {h:'Titles change meaning',html:'<p>“Historian” has meant different things over time, so care must be taken to assign it neither lightly nor anachronistically.</p>'}]),
  MC('3.1-2','Why does the course treat claims about Luke with caution?',
    ['Luke wrote nothing that survives.','There are few records, the author is uncertain, and some claims are inferences or have not survived scrutiny.','The Gospel of Luke is fiction.','Scholars agree on every detail of Luke’s life.'],[1],
    'The uncertainty about the historical figure of Luke is the thesis’s stated reason. It applies to a lesser degree to Plutarch.'),
  gate('Continue'),
  {t:'thesis',id:'3.1',from:2,to:6,nobar:true},
  FC('3.1-1','Documented and inferred: Luke',[
    ['Credited with…','The Gospel of Luke and Acts of the Apostles (at least one, perhaps both). <em>Documented.</em>'],
    ['Death','Historical accounts reckon he died about AD 150, aged 84, in the region of Boeotia. <em>Documented.</em>'],
    ['Birth: about AD 66','Calculated backward from the death date. <em>Inferred.</em>'],
    ['Birthplace: Antioch in Syria','The most widely accepted and likely claim, supported by idioms from northern Syria and other evidence. <em>Inferred.</em>']]),
  gate('Continue'),
  {t:'thesis',id:'3.1',from:6,to:9,nobar:true,splitAt:['Concerning the latter']},
  SORT('3.1-3','Sort each statement about Luke using the badge system. <b>Documented</b> means reported as fact by sources the thesis cites; <b>Inferred</b> means reasoned from other details.',
    ['Documented','Inferred'],
    [['Credited with the Gospel of Luke and Acts',0],['Died about AD 150 aged 84, per historical accounts',0],['Composed the gospel around Achaia and died in Boeotia (Ellis)',0],['One account says he had neither wife nor child',0],
     ['Born at Antioch in Syria',1],['Was a Gentile',1],['Was a physician',1],['Had independent means',1],['Was born about AD 66',1]],
    'The inferred claims are the ones the thesis reasons toward: the title of physician has “ultimately fallen flat upon closer inspection”, wealth is deduced from education, and the birth year is calculated from the death date.'),
  gate('Continue'),
  CARDS('3.1-4','Claims and the evidence behind them',[
    {badge:'Inferred',h:'Claim: Luke was from Syria',html:'<p>Evidence: idioms originating in northern Syria; the historical record; genetic evidence from the body attributed to Luke.</p>'},
    {badge:'Inferred',h:'Claim: Luke had independent means',html:'<p>Evidence: Lucian observed that time, wealth and a conspicuous social position were necessary for higher education, and Luke was educated.</p>'},
    {badge:'Inferred',h:'Claim: Luke was born in Troas or Philippi',html:'<p>Evidence: the “we passages” in Acts, which is the only support for it.</p>'}]),
  MC('3.1-4','Which evidence supports the claim that Luke was from Syria?',
    ['The “we passages” in Acts','Lucian’s three necessities for higher education','Idioms originating in northern Syria, the historical record and genetic evidence from the body attributed to Luke','The title “historian”'],[2],
    'Keep the claim and its evidence apart: the “we passages” support Troas or Philippi, and Lucian’s observation supports the claim about wealth.')
]);

C.def('3.2',[
  {t:'thesis',id:'3.2',from:0,to:4,splitAt:['Given the location and topography of the area','He married his wife Tixomena']},
  FC('3.2-1','Plutarch’s documented facts',[
    ['Birth and family','Born about AD 46 or 47, into a family of independent means with deep roots in Chaeronea.'],
    ['Education','About AD 66 studied under the Platonist Ammonius at the Academy of Athens. Became an Athenian citizen (the Leontis tribe).'],
    ['Family','Married Tixomena about AD 68. Four sons and a daughter.'],
    ['Public life','Diplomatic missions to Rome in the 70s; a second journey in the 90s. A fixture at Delphi (priesthood, Amphictyonic council, agonothete).'],
    ['Honors','Roman citizenship from Trajan (name Lucius Mestrius Plutarchus), <em>ornamenta consularia</em>, and Hadrian’s appointment as Procurator of Achaea.'],
    ['Death','About AD 120, more likely after than before.']]),
  gate('Continue'),
  {t:'thesis',id:'3.2',from:4,to:9,splitAt:['Given the location and topography of the area','He married his wife Tixomena']},
  TL('3.2-2','Plutarch’s life in outline',[
    {d:'About AD 46–47',t:'Born in Chaeronea'},{d:'About AD 66',t:'Studies in Athens under Ammonius'},{d:'About AD 68',t:'Marries Tixomena'},
    {d:'AD 70s',t:'Diplomatic missions to Rome'},{d:'AD 90s',t:'Second journey to Rome; about AD 99 returns to Chaeronea and Delphi'},{d:'Later life',t:'Offices at Delphi; honors from Trajan; appointment by Hadrian'},{d:'About AD 120',t:'Dies'}]),
  MC('3.2-2','Which summary of Plutarch’s background is best supported by the thesis?',
    ['A wealthy, well-educated Greek from Chaeronea who studied in Athens, served as an emissary to Rome and held high office at Delphi','A Roman general who retired to Athens','A poor scribe from Syria who travelled with Paul','A Roman historian who never left Italy'],[0],
    'The thesis describes a family of means, an Athenian education, diplomatic missions to Rome and offices at Delphi.'),
  gate('Continue'),
  T('3.2',9,13),
  SORT('3.2-3','Sort each statement about Plutarch as documented or inferred.',
    ['Documented','Inferred'],
    [['Studied under Ammonius at Athens about AD 66',0],['Married Tixomena; four sons and a daughter',0],['Given Roman citizenship by Trajan (an inscription at Delphi)',0],['Held a priesthood at Delphi',0],
     ['Was probably born in the family home in Chaeronea',1],['Most of the family’s wealth was in land',1],['His father’s name was Autoboulos',1],['Died about AD 120, more likely after than before',1],['Was born in AD 46 (or 47)',1]],
    'The inferred items are reasoned from other details: the father’s name from the eldest son’s name and an indirect reference in <em>Table Talk</em>; the land from the topography of Boeotia; the dates from different scholars’ estimates.'),
  gate('Continue'),
  TABS('3.2-4','What the evidence looks like for each author',[
    {h:'Luke',html:'<ul><li>Author’s identity itself uncertain (an individual or possibly a group)</li><li>Profession and identity rest on supposition</li><li>Evidence for wealth is a deduction from education</li></ul>'},
    {h:'Plutarch',html:'<ul><li>An inscription at Delphi records his Roman citizenship</li><li>His own works (for example <em>Table Talk</em>) give biographical clues</li><li>Several scholars offer birth years within a year of each other</li></ul>'}]),
  MC('3.2-4','Which statement fairly compares the quality of evidence?',
    ['Both authors are equally well documented.','The evidence for Plutarch is stronger: it includes an inscription and his own works, while much of Luke’s profile is inferred.','Luke is better documented because he is more famous.','Neither author’s life can be known at all.'],[1],
    'The thesis states the uncertainty applies to a lesser degree to Plutarch than to Luke.')
]);

C.def('3.3',[
  {t:'thesis',id:'3.3',from:0,to:1,splitAt:['Both were also well-travelled']},
  MATCH('3.3-3','Mind-map task: place each statement in the branch where it belongs.',
    ['Educated men of many talents and interests','Born into a family of well-established wealth','A Gentile learned in literary styles and medicine','Passion for mathematics; declared Platonist','Well-travelled','A theologian and historian of superior literary merit'],
    ['Both authors','Plutarch only','Luke only'],[0,1,2,1,0,2],
    'Wealth is “well-established” for Plutarch but only deduced for Luke. Mathematics and Platonism belong to Plutarch; the Gentile, literary-and-medical profile and the theological history belong to Luke.'),
  gate('Continue'),
  TL('3.3-1','The two lives on one timeline',[
    {d:'About AD 46–47',t:'Plutarch born at Chaeronea'},{d:'About AD 66',t:'Luke born (inferred); Plutarch begins study in Athens'},
    {d:'About AD 120',t:'Plutarch dies'},{d:'About AD 150',t:'Luke dies, aged 84'}]),
  MC('3.3-1','Using the timeline, which statement about their lives is correct?',
    ['Luke was born before Plutarch.','Their lifetimes overlapped for roughly half a century, with Plutarch about twenty years older.','They lived in different millennia.','They never lived at the same time.'],[1],
    'Plutarch (about AD 46–47) was about twenty years older than Luke (about AD 66), and the lives overlapped from about AD 66 to about AD 120.'),
  gate('Continue'),
  {t:'map',h:'Where they came from'},
  MC('3.3-2','Use the timeline and the map. What is the overlap in years, and what is the straight-line distance between their birthplaces, according to the thesis?',
    ['About 20 years; 1,300 miles','About 54 years (the thesis says fifty); 750 miles','About 84 years; 750 miles','About 54 years; 1,300 miles (straight line)'],[1],
    'Plutarch’s life runs to about AD 120 and Luke’s begins about AD 66, so the overlap is about 54 years (the thesis rounds to fifty). The birthplaces are 750 miles apart; 1,300 miles is the journey by land.'),
  gate('Continue'),
  ACC('3.3-4','What a shared language does and does not show',[
    {h:'What it suggests',html:'<p>People separated by about 750 miles and a generation shared one language, Koine Greek, which replaced the numerous regional dialects.</p>',open:true},
    {h:'What the evidence cannot show',html:'<p>It cannot show that their social worlds were alike, that the two ever met or read one another, or that differences in their Greek are due to one cause. That is the question the rest of the course weighs.</p>'}]),
  REF('3.3-4','In two or three sentences, infer what a shared language across that distance and time suggests, and note what the evidence cannot show.',
    '<p>A shared language suggests a widely used common standard (Koine) across the eastern Mediterranean, which makes comparing the two authors reasonable. It cannot show similar social conditions, contact between them, or why their usage differs; any such claim must be argued from other evidence.</p>',
    ['I stated what a shared language suggests','I named something the evidence cannot show'])
]);
})();

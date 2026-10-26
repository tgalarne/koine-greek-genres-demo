/* Module 6 (Emphasis and Word Order, advanced, optional) and Module 7 (Reading the Numbers) */
(function(){
'use strict';
const C=window.C,{T,txt,call,impact,quote,FC,ACC,TABS,PROC,MC,MATCH,SORT,REORDER,REF,gate,CARDS,PAIR,TL,table,CHART}=C.b;
const ANALOG={t:'callout',k:'English analogies',html:'<p>This module teaches ideas about Greek through English examples. The English sentences are written for the course; they are analogies, not Greek data.</p>'};
const APPB={t:'callout',k:'Trace the figures',html:'<p>Every figure in the chart comes from the tables in <a href="#/ref/b">Appendix B</a>. A text alternative and a data table are under the chart.</p>',kind:'data'};

/* ---------------- Module 6 ---------------- */
C.def('6.1',[
  {t:'thesis',id:'6.1',from:0,to:1,stopBefore:'Through close examination'},
  ANALOG,
  FC('6.1-1','Prominence in English',[
    ['Prominence','Which idea stands out as most important. The thesis calls this relative prominence or emphasis.'],
    ['At the level of a sentence','“Pizza I like.” Putting “pizza” first makes it stand out.'],
    ['At the level of a longer text','A news story puts its most important fact in the first paragraph, so that fact stands out in the text as a whole.'],
    ['Why two levels?','Like micro- and macro-economics, linguistics and literature can be studied at different levels of analysis.']]),
  {t:'thesis',id:'6.1',from:0,to:2,startAt:'Through close examination'},
  MC('6.1-2','In “<em>Pizza</em>, I’ll eat any day. <em>Salad</em>, never.” which elements are made prominent by being moved to the front? Select all that apply.',
    ['Pizza','Salad','I’ll eat','any day'],[0,1],
    '“Pizza” and “salad” are the fronted elements, put ahead of the rest of their clauses. This is an English analogy for Greek word order.',{multi:true}),
  gate('Continue'),
  TABS('6.1-3','Prominence at two levels',[
    {h:'Sentence level',html:'<p>“What she wanted was a quiet room.” Structure within one sentence makes “a quiet room” the point.</p>'},
    {h:'Text level',html:'<p>A reporter who moves the key fact from paragraph six to paragraph one has changed prominence across a stretch of text.</p>'}]),
  MC('6.1-3','A writer moves the most important fact from the end of an article to its first paragraph. At which level has prominence changed?',
    ['The sentence level only','The level of the longer text (paragraphs)','Neither','Both levels cannot change at once'],[1],
    'Moving a fact between paragraphs changes prominence within the longer text, in the same way the thesis says the ordering of paragraphs or sections carries significance.')
]);

C.def('6.2',[
  T('6.2',0,7),
  MC('6.2-1','Which description of the cline of specificity is accurate?',
    ['All ideas are expressed in the same way, whatever their importance.','The more pertinent an idea, the more specifically (more finitely) it is expressed.','Nouns are always the most important ideas.','Participles are always more specific than finite verbs.'],[1],
    'The cline runs from finite verbs to participles to infinitives to nominal expressions, from most to least specific.'),
  gate('Continue'),
  ANALOG,
  PROC('6.2-1','The cline of specificity, with English analogies',[
    {h:'Finite verb: most specific',html:'<p>“She resigned.” The idea is stated in full, with tense and person.</p>'},
    {h:'Participle',html:'<p>“Resigning, she left.” The idea is present but subordinate.</p>'},
    {h:'Infinitive',html:'<p>“She wanted to resign.” Less is said: no person or number on the verb.</p>'},
    {h:'Nominal expression: least specific',html:'<p>“Her resignation shocked us.” The idea has become a noun.</p>'}],
    {h:'The rule',html:'<p>An idea more pertinent to the whole is expressed more specifically; a less pertinent one tends to be expressed less specifically. (The thesis notes the steps are not evenly spaced.)</p>'}),
  T('6.2',7,8),
  REORDER('6.2-2','Rank these sentences on the cline of specificity, from the most specific way of expressing the idea of resigning (top) to the least specific (bottom).',[
    {label:'Most to least specific',items:['She resigned.','Resigning, she left.','She wanted to resign.','Her resignation shocked us.'],fb:'Finite verb, participle, infinitive, then a nominal expression.'}],'ranking (matching)'),
  gate('Continue'),
  T('6.2',8,9),
  TABS('6.2-3','Two sentences, one idea',[
    {h:'A',html:'<p>“The mayor announced the budget.”</p>'},
    {h:'B',html:'<p>“The mayor’s announcement of the budget pleased us.”</p>'}]),
  MC('6.2-3','Which sentence expresses the idea of announcing more specifically, and why?',
    ['B, because it uses a noun','A, because “announced” is a finite verb and B turns the idea into a nominal expression','Neither: they are the same','B, because it is longer'],[1],
    'The finite verb is the most specific form on the cline.'),
  MATCH('6.2-4','Place each new example on the cline.',
    ['They hoped to agree.','Their agreement was swift.','They agreed.','Agreeing, they signed.'],
    ['Finite verb','Participle','Infinitive','Nominal expression'],[2,3,0,1],
    'Each idea of agreeing appears in one of the four forms on the cline.')
]);

C.def('6.3',[
  T('6.3',0,1),
  ANALOG,
  FC('6.3-1','Three devices, with English analogues',[
    ['Fronting','Moving the subject, direct object or indirect object to the left of the main verb so it becomes the emphasis. English: “Pizza I like.” (normal order: “I like pizza.”)'],
    ['Clefting (the thesis’s sense)','Repositioning a modifier relative to its head. English analogue: “a great city” (normal) and “a city great” (repositioned). This is the thesis’s use of the term, not the English “it-cleft”.'],
    ['Topicalization','Placing the topic of a clause, sentence or text at the very beginning. English: “As for lunch, we skip it.”']]),
  gate('Continue'),
  T('6.3',1,5),
  MC('6.3-2','Select every sentence that uses fronting, clefting or topicalization.',
    ['Pizza I like.','I like pizza.','A city great was Rome.','Rome was a great city.','As for lunch, we skip it.','We skip lunch.'],[0,2,4],
    '“Pizza I like” is fronting; “A city great was Rome” repositions the modifier (clefting in the thesis’s sense); “As for lunch…” puts the topic first (topicalization).',{multi:true}),
  gate('Continue'),
  T('6.3',5,8),
  TABS('6.3-3','The effect each device creates',[
    {h:'Fronting',html:'<p>The moved element becomes the emphasis. It can transform the sentence in many ways: the subject can be emphasized over the object, and either over the verb.</p>'},
    {h:'Clefting',html:'<p>Does not necessarily make a large impact on the sentence as a whole unless the modifier is placed in front of the verb as well as the head.</p>'},
    {h:'Topicalization',html:'<p>Identifies and marks what the clause, paragraph or whole work is about.</p>'}]),
  MC('6.3-3','Which device has little effect on the sentence as a whole unless the modifier is also placed in front of the verb?',
    ['Fronting','Clefting','Topicalization','None of them'],[1],
    'The thesis says this about clefting.'),
  MC('6.3-4','A writer wants the <em>object</em> of the sentence to stand out ahead of the subject and verb. Which device fits best?',
    ['Fronting the object (“The budget we vote on Monday.”)','Clefting a modifier','Topicalization of a different clause','No device can do this'],[0],
    'Fronting moves the object left of the verb so it becomes the emphasis. Topicalization marks the topic; clefting moves a modifier relative to its head.')
]);

/* ---------------- Module 7 ---------------- */
C.def('7.1',[
  {t:'thesis',id:'7.1',from:0,to:1,splitAt:['Due to this great disparity in length']},
  ACC('7.1-1','Raw counts and rates',[
    {h:'A raw count',html:'<p>How many times a form appears. A longer text will almost always have more.</p>',open:true},
    {h:'A relative frequency',html:'<p>The count divided by the length of the text, scaled to a standard length. In this thesis, per 10,000 words.</p>'}]),
  MC('7.1-1','Why can raw counts mislead when texts differ in length?',
    ['A longer text has more chances for a form to occur, so a bigger count may only reflect a bigger text.','Raw counts are always wrong.','Shorter texts never contain common words.','Counts should only be used for poetry.'],[0],
    'Luke-Acts has about 35,239 words and <em>Caesar</em> about 16,119. A larger sample skews occurrences toward the larger text.'),
  gate('Continue'),
  PROC('7.1-2','Calculating a relative frequency',[
    {h:'Take the count',html:'<p>ὅτι occurs <b>297</b> times in Luke-Acts.</p>'},
    {h:'Divide by the length',html:'<p>297 ÷ 35,239 words = 0.00843…</p>'},
    {h:'Scale to 10,000 words',html:'<p>0.00843 × 10,000 = <b>84.28</b> per 10,000 words.</p>'}],
    {h:'Same method for Plutarch',html:'<p>12 ÷ 16,119 × 10,000 = 7.44.</p>'}),
  MC('7.1-2','The form γάρ occurs 12 times in 16,119 words of <em>Caesar</em> (illustration). What is its relative frequency per 10,000 words?',
    ['7.44','0.74','74.4','1,200'],[0],
    '12 ÷ 16,119 × 10,000 = 7.44.'),
  gate('Continue'),
  table('7.1-3','Two texts of different length',{caption:'Personal pronouns, raw and relative',head:['','Luke-Acts','Plutarch’s <em>Caesar</em>'],rowHead:true,num:[1,2],rows:[['Words','35,239','16,119'],['Raw count','3,116','652'],['Relative frequency per 10,000','884.25','404.49']]}),
  MC('7.1-3','Compared fairly, how much more often does Luke-Acts use personal pronouns than <em>Caesar</em>?',
    ['About 4.8 times (the ratio of raw counts)','About 2.2 times (the ratio of the relative frequencies)','About the same','About half as often'],[1],
    '884.25 ÷ 404.49 is about 2.2. The raw ratio, 3,116 ÷ 652, is about 4.8, which mostly reflects text length.'),
  gate('Continue'),
  call('Claim to test','“Luke-Acts uses more demonstrative pronouns than <em>Caesar</em>: 559 against 477.”'),
  MC('7.1-4','Does this raw-count claim hold up once the texts are compared fairly?',
    ['Yes: 559 is more than 477.','No: Luke-Acts is about 158.63 per 10,000 words and <em>Caesar</em> about 295.92, so <em>Caesar</em> uses them nearly twice as often.','It cannot be tested.','Yes, because Luke-Acts is the larger text.'],[1],
    'Once length is accounted for the order reverses. This is why the thesis uses relative frequencies.')
]);

C.def('7.2',[
  {t:'predict',obj:'7.2-1',q:'Luke tended to omit superfluous pronouns to streamline his narrative. Predict: which author uses more <b>personal</b> pronouns, per 10,000 words?',opts:['Luke-Acts','Plutarch’s Caesar','About the same'],
   after:'The data below show the result. Compare it with what you expected.',btn:'Commit my prediction and reveal the data'},
  T('7.2',0,1),
  APPB,
  CHART('7.2-2',{hh:'Pronoun frequencies',title:'Pronouns per 10,000 words',sub:'Relative frequency, Luke-Acts and Plutarch’s Caesar',series:['Luke-Acts','Plutarch’s Caesar'],groups:[
    {label:'Personal',vals:[884.25,404.49]},{label:'Reflexive',vals:[26.39,88.09]},{label:'Reciprocal',vals:[5.39,4.96]},{label:'Relative',vals:[124.29,324.46]}],unit:'Relative frequency per 10,000 words (Appendix B totals).'}),
  MC('7.2-2','Which statement reads the chart correctly?',
    ['<em>Caesar</em> has more personal pronouns; Luke-Acts has more reflexive and relative pronouns.','Luke-Acts has more personal pronouns, while <em>Caesar</em> has more reflexive and relative pronouns.','Luke-Acts has more of every type.','The two authors are identical on every type.'],[1],
    'Personal: 884.25 against 404.49 (Luke-Acts higher). Reflexive: 26.39 against 88.09. Relative: 124.29 against 324.46 (<em>Caesar</em> higher). The thesis calls the personal result “contrary to the other data”.'),
  gate('Continue'),
  T('7.2',2,4),
  CHART('7.2-2',{hh:'Personal pronouns by person',title:'Personal pronouns by person, per 10,000 words',series:['Luke-Acts','Plutarch’s Caesar'],groups:[
    {label:'First person',vals:[156.06,8.07]},{label:'Second person',vals:[187.17,4.34]},{label:'Third person',vals:[514.77,392.08]}],unit:'Relative frequency per 10,000 words (Appendix B). You will check these figures in lesson 7.4.'}),
  {t:'thesis',id:'7.2',from:5,to:6,splitAt:['The root of these wildly different distributions']},
  ACC('7.2-3','Possible meanings of the pattern',[
    {h:'Direct versus indirect speech',html:'<p>First and second person pronouns are prominent in direct speech. Most speech in <em>Caesar</em> was reported or indirect, so agents and subjects were usually in the third person.</p>',open:true},
    {h:'Genre and aim',html:'<p>The thesis later links the skew to genre: lives that are “largely observational” (he did, it happened) against a didactic theological history (“I say this”, “you should do these things”).</p>'}]),
  MC('7.2-3','Which inferences does the pronoun data support? Select all that apply.',
    ['Third-person pronouns dominate Plutarch’s personal pronouns.','Luke-Acts uses far more first and second person pronouns than <em>Caesar</em>.','<em>Caesar</em> contains no first person pronouns at all.','The data prove that Luke wrote more direct speech than Plutarch.','Pronoun counts show which author was better educated.'],[0,1],
    'The first two are in the data (96.9% third person in <em>Caesar</em>; 156.06 and 187.17 against 8.07 and 4.34). The thesis says the cause “may lie in” direct speech, which the numbers alone do not prove, and Appendix B lists 13 first person pronouns in <em>Caesar</em>.',{multi:true}),
  MC('7.2-4','How strong is the pronoun evidence on its own?',
    ['Conclusive proof of why the authors differ','Suggestive: it shows a large and consistent difference in pronoun distribution, but it does not by itself separate speech type, genre and subject matter','No evidence at all','Strong because both texts have the same length'],[1],
    'The size of the difference is clear; the cause is an interpretation that needs other evidence.')
]);

C.def('7.3',[
  FC('7.3-1','Particles and digrams',[
    ['Particle','A very common small word, such as ὅτι, γάρ, καί or δέ. The thesis notes that some are so common they are not considered in many lexical studies.'],
    ['Digram','A recurring pair of adjacent words, for example δὲ καί (“and also”) or ἐν τῷ.'],
    ['Why they are counted','Their sums, small in isolation, can show differences of style between authors.']]),
  {t:'thesis',id:'7.3',from:0,to:3,noTables:true},
  APPB,
  CHART('7.3-2',{hh:'Two particles',title:'ὅτι and γάρ per 10,000 words',series:['Luke-Acts','Plutarch’s Caesar'],groups:[{label:'ὅτι',vals:[84.28,7.44]},{label:'γάρ',vals:[50.23,58.32]}],unit:'Relative frequency per 10,000 words.'}),
  MC('7.3-2','Which comparison is accurate?',
    ['Luke-Acts uses ὅτι more than eleven times as often as <em>Caesar</em>, while γάρ is used at similar levels in both.','<em>Caesar</em> uses ὅτι more than Luke-Acts.','Both authors use γάρ ten times as often as ὅτι.','The two authors use the same number of ὅτι.'],[0],
    '84.28 ÷ 7.44 is about 11.3; γάρ is 50.23 against 58.32.'),
  gate('Continue'),
  {t:'thesis',id:'7.3',from:3,to:5,noTables:true},
  CHART('7.3-2',{hh:'καί, δέ and two digrams',title:'καί, δέ and the digrams δὲ καί, ἐν τῷ, per 10,000 words',series:['Luke-Acts','Plutarch’s Caesar'],groups:[{label:'καί',vals:[731.86,584.4]},{label:'δέ',vals:[309.6,353]},{label:'δὲ καί',vals:[29.23,27.92]},{label:'ἐν τῷ',vals:[80.03,9.93]}],unit:'Relative frequency per 10,000 words. ἐν τῷ is given in the text of the thesis (80.03 and 9.93).'}),
  gate('Continue'),
  {t:'thesis',id:'7.3',from:5,to:8,splitAt:['As prevalent as this preference is']},
  TABS('7.3-3','A real difference, or a small gap?',[
    {h:'Real difference',html:'<p>ἐν τῷ: 80.03 against 9.93, an eightfold difference. Hard to explain as noise.</p>'},
    {h:'Small gap',html:'<p>δὲ καί: 29.23 against 27.92, a gap of under 5%. The thesis does not run a significance test, so a small gap is better described as unremarkable than as proved to be chance.</p>'}]),
  MC('7.3-3','Which pairing is right?',
    ['δὲ καί (29.23 against 27.92) is a small gap; ἐν τῷ (80.03 against 9.93) is a large difference.','δὲ καί is a large difference; ἐν τῷ is a small gap.','Both are large differences.','Both are small gaps.'],[0],
    'The first pair differs by about 4.7%; the second by a factor of eight.'),
  gate('Continue'),
  T('7.3',8,9),
  quote('“The sum of these similarities and differences, insignificant in isolation, are not only applicable to the styles of these representative authors in a vacuum but also in light of their respective generic categorizations.”'),
  REF('7.3-4','Critique the claim that these particle and digram frequencies mark authorial style, citing the data.',
    '<p>For: ἐν τῷ differs eightfold and ὅτι more than elevenfold, which fits what the thesis says about Luke’s habits. Against: δέ and δὲ καί are close; Plutarch’s asyndeton, subject matter and genre could explain differences; no test of significance was run; and the thesis admits it could not examine the linguistic environments of the words. The claim is plausible for some features and unproved for others.</p>',
    ['I cited at least one specific figure','I gave a reason the claim could fail (genre, method, small gap)','I concluded with a qualified judgment'])
]);

C.def('7.4',[
  T('7.4',0,2),
  PROC('7.4-1','Calculating vocabulary density',[
    {h:'Take the totals',html:'<p>A hypothetical text: 12,000 total words and 2,000 unique words.</p>'},
    {h:'Divide',html:'<p>Vocabulary density, in the thesis’s sense, is the ratio of total words to unique words: 12,000 ÷ 2,000 = <b>6.0</b>.</p>'},
    {h:'Interpret',html:'<p>A lower score means a greater variety of vocabulary: each unique word is used fewer times on average.</p>'}],
    {h:'Check',html:'<p>Mark: 10,720 ÷ 1,259 = 8.515.</p>'}),
  MC('7.4-1','Matthew has 17,921 total words and 1,542 unique words. What is its vocabulary density?',
    ['11.621','1.542','17.921','8.515'],[0],
    '17,921 ÷ 1,542 = 11.621, matching the table.'),
  gate('Continue'),
  T('7.4',2,7),
  ACC('7.4-3','The limits of the data',[
    {h:'Software and stop words',html:'<p>Stop words created problems in calculating frequency statistics for Luke-Acts, and the Perseus tool filtered many pronouns.</p>',open:true},
    {h:'No linguistic environments',html:'<p>The software did not allow investigation of the environments around words, or the location of words as heads of clauses.</p>'},
    {h:'Different sources of vocabulary',html:'<p>Contemporaries gather vocabulary in different ways from different sources, so even density is not wholly conclusive.</p>'}]),
  MC('7.4-3','How should these limits affect the conclusions?',
    ['They make every conclusion false.','Conclusions should be stated as possibilities that the numbers support, not as proof.','They make no difference.','They only matter for Luke.'],[1],
    'The thesis itself says its conclusions “are only a start”.'),
  gate('Continue'),
  REF('7.4-4','Evaluate the course’s overall use of numbers as evidence for its argument.',
    '<p>Strengths: relative frequencies make unequal texts comparable; counts are traced to appendix tables; the differences are large for several features. Weaknesses: the figures do not always agree; no significance tests; stop-word and software limits; causes are inferred from patterns. Overall, the numbers are useful evidence for a pattern but weak evidence for any single explanation.</p>',
    ['I named at least one strength','I named at least one weakness','I reached an overall verdict']),
  REF('7.4-5','Compose a short data-based summary comparing the authors. Include a labeled chart idea and a text alternative for it.',
    '<p><b>Summary:</b> Per 10,000 words, Luke-Acts uses more personal pronouns than <em>Caesar</em> (884.25 against 404.49), especially first and second person, while <em>Caesar</em> uses more reflexive and relative pronouns. Luke-Acts uses ὅτι about eleven times as often. These patterns are consistent with different genre and speech habits, but the numbers do not by themselves show why.</p><p><b>Chart:</b> grouped bars titled “Pronouns per 10,000 words”, labeled by type, with a legend.</p><p><b>Text alternative:</b> “Grouped bar chart comparing Luke-Acts and Plutarch’s Caesar. Personal: 884.25 and 404.49. Reflexive: 26.39 and 88.09. Reciprocal: 5.39 and 4.96. Relative: 124.29 and 324.46.”</p>',
    ['I used relative frequencies, not raw counts','I stated what the numbers do not show','I gave the chart a title and labels','I wrote a text alternative that lists the values'])
]);
/* Data-check task (objective 7.4-2): shown on the Design and alignment page under Source-data flags, not inside a lesson */
C.def('flags',[
  {t:'callout',k:'Check the figures',kind:'data',html:'<p>The thesis states these figures in more than one place. Before you rely on them, check that they agree with each other.</p>'},
  table('7.4-2','Reported figures and what they imply',{caption:'Selected figures from the thesis and what each calculation gives',head:['Reported in the thesis','Check','Result'],rowHead:true,rows:[
    ['Caesar: 19,119 words, 3,724 unique, density 4.328','19,119 ÷ 3,724','5.134, not 4.328. (16,119 ÷ 3,724 = 4.328)'],
    ['Luke-Acts: 35,239 words, 2,697 unique, density 13.066','35,239 ÷ 2,697','13.066: agrees'],
    ['Luke-Acts person shares 18.19%, 21.81%, 60%; personal total 884.25','156.06 + 187.17 + 514.77','858.00, not 884.25'],
    ['Demonstratives in <em>Caesar</em>: 298.11 (text); 295.92 (Appendix B)','477 ÷ 16,119 × 10,000','295.92: the text figure disagrees'],
    ['<em>Caesar</em> person shares 1.99%, 1.07%, 96.94%','8.07, 4.34, 392.08 ÷ 404.49','1.99%, 1.07%, 96.93%: agrees (rounding)']],flag:[0,2,3]}),
  MC('7.4-2','Which reported figures do <em>not</em> agree with the thesis’s other figures? Select all that apply.',
    ['<em>Caesar</em> total of 19,119 words alongside a density of 4.328','Luke-Acts 35,239 words and 2,697 unique words giving 13.066','Luke-Acts person shares (18.19%, 21.81%, 60%) alongside a personal pronoun total of 884.25','<em>Caesar</em> demonstratives, 298.11 in the text and 295.92 in Appendix B','<em>Caesar</em> person shares (1.99%, 1.07%, 96.94%)'],[0,2,3],
    'The table above shows the arithmetic. The Luke-Acts density and the <em>Caesar</em> person shares agree with their sources.',{multi:true})
]);
})();

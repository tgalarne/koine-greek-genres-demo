/* Module 8 (The Optative Mood) and Module 9 (Literature as Conversation) */
(function(){
'use strict';
const C=window.C,{T,txt,call,impact,quote,FC,ACC,TABS,PROC,MC,MATCH,SORT,REF,gate,CARDS,PAIR,TL,table,CHART}=C.b;
const APPC={t:'callout',k:'Trace the figures',html:'<p>Optative counts come from <a href="#/ref/b">Appendix B</a>. The 28 locations in Luke-Acts are listed in <a href="#/ref/c">Appendix C</a>.</p>',kind:'data'};

/* ---------------- Module 8 ---------------- */
C.def('8.1',[
  T('8.1',0,2),
  FC('8.1-1','The optative mood',[
    ['What it is','One of the moods of Greek (indicative, subjunctive, optative and, earlier, injunctive). It is not present in Modern Greek.'],
    ['How it looks','Marked formally by an iota directly after the thematic vowel; it uses the secondary endings.'],
    ['What it expresses','Volitive: wishes (blessings, requests, imprecations). Potential: possibility (in questions and protases). Oblique: the verb of a subordinate clause after a secondary-sequence verb, or in indirect discourse.'],
    ['Example','λύοι (lýoi), “may he loose”: the iota after the thematic vowel marks the optative.']]),
  MC('8.1-1','Which statement best explains what the optative mood expresses?',
    ['Only commands','Wishes and possibilities, and in classical Greek the verb of subordinate clauses and indirect discourse after a past-tense main verb','Only past events','Only questions'],[1],
    'The three classical categories are the volitive (wish), the potential and the oblique.'),
  gate('Continue'),
  CARDS('8.1-2','Four verb forms of λύω (“loose”)',[
    {h:'A',html:'<p><span class="grc">λύει</span> (lýei)</p><p class="tnote">“he looses”</p>'},
    {h:'B',html:'<p><span class="grc">λύοι</span> (lýoi)</p><p class="tnote">“may he loose”</p>'},
    {h:'C',html:'<p><span class="grc">λύῃ</span> (lýēi)</p><p class="tnote">“he may loose”</p>'},
    {h:'D',html:'<p><span class="grc">λῦε</span> (lŷe)</p><p class="tnote">“loose!”</p>'}]),
  MC('8.1-2','Which form is optative?',
    ['A, λύει','B, λύοι','C, λύῃ','D, λῦε'],[1],
    'λύοι has the iota directly after the thematic vowel. The others are the present indicative, the subjunctive and the imperative.'),
  gate('Continue'),
  APPC,
  CHART('8.1-3',{hh:'How often the mood appears',title:'Optatives per 10,000 words',series:['Luke-Acts','Plutarch’s Caesar'],groups:[{label:'Optatives',vals:[7.95,1237.05]}],unit:'Appendix B totals: 28 optatives in Luke-Acts; 1,994 in Caesar. You will check these figures in lesson 8.2.'}),
  MC('8.1-3','As printed in the thesis, how does the frequency of the optative compare?',
    ['<em>Caesar</em> uses it far more often than Luke-Acts: more than a hundred times as often per 10,000 words.','Luke-Acts uses it far more often.','They are about the same.','<em>Caesar</em> uses it about twice as often.'],[0],
    '1,237.05 ÷ 7.95 is about 156. The thesis states a difference in magnitude of “over 15,000%”.')
]);

C.def('8.2',[
  {t:'thesis',id:'8.2',from:0,to:1,splitAt:['Within Plutarch’s Caesar there are']},
  APPC,
  CHART('8.2-1',{hh:'The optative counts',title:'Optatives: raw counts',series:['Luke-Acts','Plutarch’s Caesar'],groups:[{label:'Optatives in the text',vals:[28,1994]}],unit:'Raw counts from Appendix B. For context, the thesis gives 68 optatives among 28,121 verbs in the New Testament (0.24%) and 1,105 in the rest of the Parallel Lives.'}),
  MC('8.2-1','Which interpretation is best supported by the counts?',
    ['Luke-Acts is more optative-rich than the rest of the New Testament (7.95 against 4.94 per 10,000, about 61% more), but far below <em>Caesar</em>.','Luke-Acts has no optatives.','Luke-Acts and <em>Caesar</em> use the optative at the same rate.','<em>Caesar</em> has fewer optatives than the New Testament.'],[0],
    'The thesis reports 28 of the New Testament’s 68 optatives in Luke-Acts (about 41%) and a 61% higher frequency than in the New Testament as a whole.')
]);

/* Data-check task (objectives 8.2-2 and 8.2-3): shown on the Design and alignment page under Source-data flags, not inside a lesson */
C.def('flags82',[
  {t:'callout',k:'Check the figures',kind:'data',html:'<p>Some numbers around the optative deserve a second look before they carry an argument.</p><ul><li>The thesis reports 1,994 optatives in <em>Caesar</em>, and 1,105 in all the other Parallel Lives put together.</li><li>The relative frequency in <em>Caesar</em> is printed as 1,246.17 in the text and 1,237.05 in Appendix B.</li><li>Luke-Acts has 28 optatives, and Appendix C lists 28 locations.</li></ul>'},
  MC('8.2-2','Select the figures that look questionable.',
    ['1,994 optatives in one short Life, against 1,105 in all the other Lives combined','1,246.17 in the text against 1,237.05 in Appendix B for the same quantity','28 optatives in Luke-Acts, and 28 locations listed in Appendix C','68 of 28,121 verbs, given as 0.24%'],[0,1],
    'The first is implausibly high compared with the thesis’s own figure for the other Lives and should be rechecked. The second differs because it uses 16,001 words instead of 16,119. The last two are internally consistent (68 ÷ 28,121 = 0.24%).',{multi:true}),
  ACC('8.2-3','Is the gap large enough to need an explanation?',[
    {h:'Allow for error',html:'<p>Even if the 1,994 turns out to be inflated several times over, a gap of two orders of magnitude would remain.</p>',open:true},
    {h:'Allow for method',html:'<p>The two texts differ in length and genre; but the thesis already works in relative frequencies per 10,000 words.</p>'}]),
  REF('8.2-3','Judge whether the difference in optative counts is large enough to need an explanation.',
    '<p>Yes. Even allowing for the questionable figures, the thesis’s own other numbers (28 in Luke-Acts, over a thousand in <em>Caesar</em>, 7.95 against several hundred per 10,000 words) differ by orders of magnitude. A gap that large is unlikely to be chance, so an explanation is needed, though the figures should be rechecked first.</p>',
    ['I gave a clear yes or no','I allowed for the questionable figures','I referred to the size of the gap'])
]);

C.def('8.3',[
  {t:'thesis',id:'8.3',from:0,to:3,pullUp:'The other possibility to explain',splitAt:['Thus when he learned Greek']},
  TABS('8.3-1','Three competing explanations',[
    {h:'The sources’ linguistic background',html:'<p>Luke’s main source Mark appears to have been Jewish, with a Hebrew or Aramaic background, in which verbs have two tenses, both in primary sequence. Mark’s gospel has only one optative. A Gentile native Greek speaker like Luke might add more than Jewish authors.</p>'},
    {h:'Direct versus indirect speech',html:'<p>The New Testament prefers direct to indirect discourse, so there are fewer environments for the oblique optative, already a declining form. Most speech in <em>Caesar</em> is reported or indirect.</p>'},
    {h:'Deliberate restraint',html:'<p>The optative could have been kept for effect: formal, suited to “Christian aspiration and piety”. Its rarity may have been intentional, “so as not to dilute the desired impact”.</p>'}]),
  MC('8.3-1','Mark, Luke’s main source, contains only one optative. Which explanation does this evidence support?',
    ['The sources’ linguistic background','Direct versus indirect speech','Deliberate restraint','None of them'],[0],
    'It is evidence about what the sources could supply to Luke.',{k:'a'}),
  MC('8.3-1','The New Testament prefers direct speech, so there are fewer places for the oblique optative. Which explanation is this?',
    ['The sources’ linguistic background','Direct versus indirect speech','Deliberate restraint','None of them'],[1],
    'It concerns the environments in which the optative could appear.',{k:'b'}),
  gate('Continue'),
  {t:'thesis',id:'8.3',from:3,to:6,splitAt:['Luke-Acts, a Gentile writer, accordingly','Lastly, the most prominent uses']},
  REF('8.3-2','For each of the three explanations, name one piece of evidence for it and one against it.',
    '<p><b>Sources:</b> for, Mark’s single optative and a Semitic verbal system; against, Luke is a native Greek speaker who could add optatives, and the thesis says insertion would be at his discretion. <b>Direct speech:</b> for, the oblique optative needs indirect discourse; against, it does not explain why the volitive and potential uses are also scarce. <b>Restraint:</b> for, Turner’s observation that NT optatives are formal and liturgical; against, intent is hard to prove and a form in decline needs no motive to be rare.</p>',
    ['I gave evidence for each explanation','I gave evidence against each explanation','My evidence came from the thesis']),
  REF('8.3-3','Defend which explanation, or combination, is best supported.',
    '<p>A defensible position: a combination. The thesis itself concludes that the scarcity is attributable to all three factors, with direct speech and the sources limiting the environments and restraint shaping the uses that remain. A strong answer says which carries most weight and why.</p>',
    ['I took a position','I used at least two pieces of evidence','I addressed an objection']),
  REF('8.3-4','Propose a further piece of evidence that would test your preferred explanation.',
    '<p>Examples: count optatives in other Parallel Lives written in indirect speech (tests the direct-speech explanation); compare optative use in Greek writers of Jewish background who write in indirect discourse (tests the sources); compare the optatives in prayers and formal passages against narrative in the New Testament (tests restraint).</p>',
    ['My proposal would produce a clear result','It targets my preferred explanation']),
  REF('8.3-5','Case file. Compose a short, reasoned argument that weighs all three explanations. Use these headings: Question, Evidence, Three explanations, Limits of the numbers, Verdict.',
    '<p><b>Question:</b> why is the optative scarce in Luke-Acts and abundant in <em>Caesar</em>? <b>Evidence:</b> 7.95 against about 1,237 per 10,000 words; Mark has one optative. <b>Explanations:</b> sources, speech type, restraint, each weighed. <b>Limits:</b> some figures disagree, no significance test, software limits. <b>Verdict:</b> likely a combination, with the numbers establishing the difference more securely than its cause.</p>',
    ['I stated the question','I weighed all three explanations','I named limits of the numbers','I reached a verdict'],'Write on paper or here; either way, compare with the model.')
]);

/* ---------------- Module 9 ---------------- */
C.def('9.1',[
  {t:'thesis',id:'9.1',from:0,to:3,splitAt:['As I brought up before, reading is a conversation']},
  impact('Reading is a conversation: it ebbs and flows, and there is no party involved who speaks with absolute authority.'),
  gate('Continue'),
  T('9.1',3,6),
  ACC(null,'What you have built, module by module',[
    {h:'Modules 1 to 3: the people and the ideas',html:'<p>Sociolects, class and prestige, temperament, disposition and style; genres as constructed, acting, assuming background and exerting pull; what is documented and what is inferred about Luke and Plutarch.</p>',open:true},
    {h:'Modules 4 to 6: choices on the page',html:'<p>How Luke edited his sources; how Plutarch used his; how each ordered and narrated; and how emphasis is built in word order.</p>'},
    {h:'Modules 7 and 8: evidence you can count',html:'<p>Relative frequencies; pronouns, particles, digrams and vocabulary; the optative and three ways to explain its distribution.</p>'}])
]);

C.def('9.2',[
  T('9.2',0,7),
  impact('Ultimately limited by time and technology, these conclusions are only a start to the possible implications a more thorough and extensive analysis might hold.')
]);

C.def('9.3',[
  txt('Your capstone',`<p>This is the one required reflection in the course. You will write, compare and rate your own argument. Completing it needs you to do the step and submit your self-rating. It does not need any particular rating, and it is not scored.</p>
  <p>Write on paper or in the box below. Your text stays in this browser.</p>`),
  {t:'capstone',obj:null,q:'Write a short argument (about 150–250 words) that weighs the competing explanations for the differences between Luke and Plutarch (the sources’ linguistic background, direct versus indirect speech, and deliberate restraint) and says how strong the numerical evidence is.',
   hint:'Think about: which numbers you would cite; what each explanation can and cannot account for; what the numbers cannot show; and what you conclude.',
   range:'150 to 250 words',min:50,
   model:'<p>The optative is rare in Luke-Acts (7.95 per 10,000 words) and abundant in <em>Caesar</em> (over 1,200), a difference no plausible error removes. Three explanations compete. First, Luke’s sources: Mark has a single optative and a Semitic verbal system that gives little reason to use it. Second, direct speech: the New Testament prefers it, which removes most environments for the oblique optative. Third, restraint: the optative’s formal, devotional tone may have been rationed on purpose. The first two explain why the form was available; the third speaks to what Luke did with it, but intent is the hardest to prove. The numbers are strong on the size of the difference and weak on its cause: several figures in the thesis disagree, no significance tests were run, and the software could not examine the surrounding words. My verdict is a combination, with sources and speech type setting limits and genre and purpose shaping the rest.</p>',
   criteria:[
     {h:'Evidence cited',d:'You cite at least two specific figures.',revisit:'Module 7 or 8'},
     {h:'Each explanation weighed',d:'You address all three explanations.',revisit:'lesson 8.3'},
     {h:'Limits of the numbers named',d:'You say what the numbers cannot show.',revisit:'lessons 7.4 and 8.2'},
     {h:'Conclusion defended',d:'You reach a verdict and give a reason.',revisit:'lesson 8.3'}]},
  {t:'text',h:'Next',html:'<p>You can now take the final quiz.</p>'}
]);

/* Reference material for quiz questions that refer to something shown in their lesson (so the question stands alone) */
const LB=(id,fn)=>()=>C.lessons[id].blocks.filter(fn);
const QSTIM={
  '1.3-3':[LB('1.3',b=>b.t==='callout'&&b.k==='Character sketch')],
  '3.2-4':[LB('3.2',b=>b.t==='tabs'&&b.obj==='3.2-4')],
  '3.3-2':[LB('3.3',b=>b.t==='timeline'),LB('3.3',b=>b.t==='map')],
  '4.2-2':[C.b.table(null,'Documented omissions by category',{caption:'Omissions counted in four categories',head:['Category','Count'],num:[1],rowHead:true,rows:[['Parallel and antithetical clauses','8'],['Contextual supplements','12'],['References to the fulfillment of requests','14'],['Unnecessary explanatory clauses','6']]})],
  '4.2-3':[LB('4.2',b=>b.t==='pair')],
  '4.4-2':[LB('4.4',b=>b.t==='table'&&b.obj==='4.4-2')],
  '6.2-3':[LB('6.2',b=>b.t==='tabs'&&b.obj==='6.2-3')],
  '7.1-4':[LB('7.1',b=>b.t==='callout'&&b.k==='Claim to test'),C.b.table(null,'Reported figures',{caption:'Demonstrative pronouns and text lengths in the thesis',head:['','Luke-Acts','Plutarch’s <em>Caesar</em>'],num:[1,2],rowHead:true,rows:[['Demonstrative pronouns (raw count)','559','477'],['Total words','35,239','16,119']]})],
  '7.2-4':[LB('7.2',b=>b.t==='chart')],
  '7.3-3':[C.b.table(null,'Two digrams',{caption:'Relative frequency per 10,000 words',head:['Digram','Luke-Acts','Plutarch’s <em>Caesar</em>'],num:[1,2],rowHead:true,rows:[['δὲ καί','29.23','27.92'],['ἐν τῷ','80.03','9.93']]})],
  '7.4-3':[LB('7.4',b=>b.t==='acc'&&b.obj==='7.4-3')],
  '8.1-2':[LB('8.1',b=>b.t==='cards'&&b.obj==='8.1-2')],
  '8.2-1':[LB('8.2',b=>b.t==='chart')],
  '8.3-1~a':[{t:'callout',k:'The three explanations',html:'<ul><li><b>The sources’ linguistic background:</b> the sources Luke drew on came from authors with a Hebrew or Aramaic background.</li><li><b>Direct versus indirect speech:</b> the New Testament prefers direct speech, which offers fewer places for some optatives.</li><li><b>Deliberate restraint:</b> the optative was kept for formal effect, so its rarity may have been intended.</li></ul>'}]
};

C.def('9.4',[
  {t:'quiz',n:12,pass:80,intro:'This quiz samples items from the course modules. Answer each one and submit it to see feedback. You may take the quiz again.',
   pool:['1.1-2','1.2-4','1.3-2','1.3-3','2.1-2','2.2-1','2.4-1','3.1-2','3.1-4','3.2-4','3.3-2','5.1-1','5.2-3','5.3-1','7.1-1','7.1-4','7.2-4','7.3-3','7.4-3','8.1-2','8.2-1','8.3-1~a',
         '4.1-1','4.1-2','4.2-2','4.2-3','4.3-2~a','4.3-2~b','4.3-3','4.4-2','6.1-2','6.1-3','6.2-1','6.2-3','6.3-2','6.3-3','6.3-4'],
   optionalMods:[4,6],maxPer:3,stim:QSTIM}
]);
})();

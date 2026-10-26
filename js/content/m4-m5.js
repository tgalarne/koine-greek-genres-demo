/* Module 4 (Editing the Sources, optional) and Module 5 (Order and Narration) */
(function(){
'use strict';
const C=window.C,{T,txt,call,impact,quote,FC,ACC,TABS,PROC,MC,MATCH,SORT,REORDER,REF,gate,CARDS,PAIR,TL,table}=C.b;
const ILL='<p class="tnote">The examples in this activity are illustrative English sentences written for the course. They are not quotations from the Gospels.</p>';

/* ---------------- Module 4 ---------------- */
C.def('4.1',[
  {t:'thesis',id:'4.1',from:0,to:4,pullUp:'With regards to Plutarch and Luke'},
  ACC('4.1-1','What it means to say an author “edited” a source',[
    {h:'Drawing from sources',html:'<p>Luke draws from external sources, including Mark, mostly in large contiguous blocks, and from Q and possibly Matthew.</p>',open:true},
    {h:'Four ways of changing a source',html:'<p>Omission, combination, substitution, and change in form.</p>'},
    {h:'Faithful in order, free in wording',html:'<p>Even with his own additions and omissions, Luke preserves the original order of his source for the most part, and still shows literary freedom.</p>'}]),
  MC('4.1-1','Which statement best explains what it means to say Luke edited a source?',
    ['He copied Mark word for word.','He used a source but shortened, combined, substituted or reshaped it, mostly keeping its order.','He wrote without using any source.','He translated Mark into Latin.'],[1],
    'Editing here means working from a source while making changes through omission, combination, substitution and change in form.'),
  gate('Continue'),
  T('4.1',4,9),
  MC('4.1-2','Which statement best describes how Luke treats the order of events in his sources?',
    ['He keeps the original order for the most part, with a small number of striking exceptions.','He rearranges his sources throughout, so no order is preserved.','He follows Mark’s order exactly, with no exceptions.','He reorders only the passages taken from Matthew.'],[0],
    'Luke draws from Mark in large contiguous blocks and, even with his own additions and omissions, mostly preserves the original order. The exceptions are striking because they are rare.'),
]);

C.def('4.2',[
  T('4.1',9,12),
  T('4.1',12,17),
  {t:'callout',k:'Illustrations',html:ILL},
  MATCH('4.2-1','Each pair shows a source sentence and the edited version. Match each pair to the category of omission it illustrates.',
    ['“He did not come to be served, but to serve.” → “He came to serve.”','“On the evening of that day, by the lake, he spoke to them.” → “He spoke to them.”','“They asked him to stay, and he stayed as they had asked.” → “They asked him to stay.”','“He told them to wait, in order that they might be ready.” → “He told them to wait.”','“He came and saw the room, heard the noise and took the key.” → “He took the key.”'],
    ['Parallel and antithetical clauses','Contextual supplements','References to the fulfillment of requests','Unnecessary explanatory clauses','Observations of coming, seeing, hearing or taking'],[0,1,2,3,4],
    'Each category is one the thesis lists as something Luke tended to omit.'),
  gate('Continue'),
  PROC('4.2-2','Tally the omissions by category',[
    {h:'List the counted categories',html:'<p>Parallel and antithetical clauses; contextual supplements; references to the fulfillment of requests; unnecessary explanatory clauses. A fifth category, observations of coming, seeing, hearing or taking, has no count in the thesis.</p>'},
    {h:'Tally each one',html:'<p>Parallel and antithetical: <b>8</b>. Contextual supplements: <b>12</b>. Fulfillment of requests: <b>14</b>. Explanatory clauses: <b>6</b>.</p>'},
    {h:'Add and compare',html:'<p>8 + 12 + 14 + 6 = <b>40</b>. The largest category is references to the fulfillment of requests.</p>'}],
    {h:'Result',html:'<p>40 documented instances in the four counted categories.</p>'}),
  MC('4.2-2','Using the tally, how many documented omissions are in the four counted categories, and which is the largest?',
    ['34; contextual supplements','40; references to the fulfillment of requests','40; contextual supplements','46; references to the fulfillment of requests'],[1],
    '8 + 12 + 14 + 6 = 40, and 14 is the largest.'),
  gate('Continue'),
  T('4.1',17,27),
  PAIR('4.2-3','Before and after (illustrative)',
    {cap:'Source',html:'<p>And he said to them, “Why do you ask me? Why do you ask me? Ask those who heard what I said to them.”</p>'},
    {cap:'Edited',html:'<p>He said to them, “Ask those who heard me.”</p>'}),
  MC('4.2-3','Which editing patterns does this pair show? Select all that apply.',
    ['The dialogue is shortened.','A repeated clause is removed.','An explanatory clause is added.','The order of events is changed.'],[0,1],
    'The edited version shortens the speech and drops the repeated question. Nothing is added and nothing is reordered.',{multi:true}),
  gate('Continue'),
  TABS('4.2-4','Possible purposes for the pattern, and the evidence for each',[
    {h:'Smoother Greek',html:'<p>Evidence: omitted parallel and antithetical clauses; at least five striking cases where Luke corrects Mark’s broken constructions (anacoluthon).</p>'},
    {h:'Avoiding Semitic constructions',html:'<p>Evidence: the omission of parallel clauses “may be motivated not only by an aspiration for smoothness of language, but also by a desire to avoid Semitic language and constructions”; completing Mark’s sentences to resemble Classical Greek.</p>'},
    {h:'Hellenistic taste',html:'<p>Evidence: Luke’s streamlining is “in keeping with the more Hellenistic taste of his day” (thesis, Education and Level of Knowledge).</p>'}]),
  REF('4.2-4','Infer a purpose for the pattern of editing, and note the evidence it rests on.',
    '<p>The pattern is streamlining: shorter speech, fewer redundant clauses, completed sentences. A purpose consistent with the evidence is to write smoother, more Classical-looking Greek for an educated Gentile audience, and to avoid Semitic constructions. The evidence is the documented counts and the corrected broken constructions; it does not prove his intent.</p>',
    ['I named a purpose','I tied it to specific evidence','I noted that evidence shows a pattern, not an intention'])
]);


C.def('4.3',[
  {t:'thesis',id:'4.2',from:0,to:10,italicLi:['Anticato','On His Own Consulship','De Bello Gallico','De Bello Civili']},
  FC('4.3-1','Plutarch’s sources and what each gave him',[
    ['Asinius Pollio','The main source: most of <em>Caesar</em> from chapter thirteen, more than four-fifths of the writing and about three-fourths of the content.'],
    ['Livy and Strabo','Supplementary passages, both about omens; used as chance recollections or reported by assistants.'],
    ['Cicero’s <em>On His Own Consulship</em>','Mostly an effect of earlier research for his <em>Cicero</em>.'],
    ['Caius Oppius','Caesar’s companion; Plutarch looked into his journals of his own volition, with caution.'],
    ['Caesar’s works and Tanusius Geminus','Plutarch referred to the <em>Anticato</em> and <em>Commentarii</em>; probably met the <em>Commentarii</em> and Tanusius Geminus through Pollio.']]),
  gate('Continue'),
  {t:'thesis',id:'4.2',from:10,to:14,splitAt:['His use of Cicero’s']},
  gate('Continue'),
  CARDS('4.3-2','What each source contributed',[
    {h:'Asinius Pollio',html:'<p>Source of most of <em>Caesar</em> from chapter thirteen.</p>'},
    {h:'Livy and Strabo',html:'<p>Two supplementary passages about omens.</p>'},
    {h:'Cicero’s <em>On His Own Consulship</em>',html:'<p>Carried over from research for the <em>Cicero</em> installment.</p>'},
    {h:'Caius Oppius',html:'<p>Caesar’s companion; his journals were consulted with a grain of salt.</p>'}]),
  MC('4.3-2','Which source supplied most of <em>Caesar</em> from chapter thirteen?',
    ['Livy','Strabo','Asinius Pollio','Caius Oppius'],[2],
    'More than four-fifths of the writing and about three-fourths of the content came from Pollio.',{k:'a'}),
  MC('4.3-2','Which sources gave Plutarch supplementary passages on omens?',
    ['Pollio and Oppius','Livy and Strabo','Cicero and Caesar','Tanusius Geminus and Pollio'],[1],
    'Plutarch’s uses of Livy and Strabo are limited to the passages he cites, and both concern omens.',{k:'b'}),
  gate('Continue'),
  TABS('4.3-3','Plutarch’s trust for his sources',[
    {h:'Pollio',html:'<p>Plutarch’s main source. Even so, Suetonius reports Pollio’s own view that Caesar’s <em>Commentarii</em> were composed with insufficient care and respect for truth.</p>'},
    {h:'Oppius',html:'<p>Plutarch warns elsewhere: “one must be very cautious about believing Oppius when he is talking about Caesar’s friends or enemies.”</p>'},
    {h:'Livy and Strabo',html:'<p>Supplementary and probably remembered or reported; limited to passages Plutarch cites.</p>'}]),
  MC('4.3-3','About which source does Plutarch himself explicitly caution readers, and on what subject?',
    ['Pollio, about Caesar’s battles','Oppius, about Caesar’s friends or enemies','Livy, about omens','Strabo, about geography'],[1],
    'Plutarch’s comment in <em>Pompey</em> is about Oppius’s statements about Caesar’s friends or enemies.'),
  REF('4.3-4','Appraise how far Plutarch’s choice of sources shaped his account of Caesar, citing evidence.',
    '<p>Because Pollio supplied most of the account from chapter thirteen, much of the shape of <em>Caesar</em> reflects Pollio’s selection and viewpoint. Plutarch added supplementary passages from Livy and Strabo, took Oppius with caution, and made his own inferences, so his choices and interpretations matter as much as the sources themselves, as the thesis concludes.</p>',
    ['I cited at least one source and what it contributed','I weighed the source against Plutarch’s own choices','I gave a reasoned judgment'])
]);

C.def('4.4',[
  T('4.3',0,3),
  TABS('4.4-1','What editing evidence shows, and what it only suggests',[
    {h:'Shows',html:'<p>Counted, observable facts: for example, Luke alters dialogue at least 43 times compared with Mark; Plutarch cites nine sources by seven authors in <em>Caesar</em>.</p>'},
    {h:'Suggests',html:'<p>Interpretations of why: for example, that Luke omitted clauses to avoid Semitic constructions, or that Plutarch’s epithets reflect how well he knew a source.</p>'}]),
  SORT('4.4-1','Sort each statement as something the evidence <em>shows</em> or only <em>suggests</em>.',
    ['Shows','Suggests'],
    [['Luke alters dialogue no fewer than 43 times compared with Mark',0],['Plutarch cites nine sources by seven authors in <em>Caesar</em>',0],['Most of <em>Caesar</em> from chapter thirteen comes from Pollio',0],['Luke supplies a missing subject of the verb in 25 documented cases',0],
     ['Luke omitted parallel clauses to avoid Semitic constructions',1],['Luke streamlined to suit Hellenistic taste',1],['An indefinite article on a source shows Plutarch knew it less well',1],['Plutarch’s alterations were all made consciously and purposefully',1]],
    'Counts and attributions are what the evidence shows; reasons and intentions are what the author of the thesis infers from it.'),
  gate('Continue'),
  table('4.4-2','The editing evidence for both authors',{caption:'Editing evidence compared',head:['','Luke','Plutarch'],rowHead:true,rows:[
    ['Main method','Omission, combination, substitution and change in form; mostly keeps source order','Six kinds of alteration (see Module 5), working mostly from one main source (Pollio)'],
    ['Documented counts','43 changes to dialogue (vs Mark); 40 omissions in four counted categories; 51 supplied parts of speech','Nine sources by seven authors'],
    ['What it suggests','Smoother, more Classical Greek; avoiding Semitic constructions','Choices of source and interpretation matter more than the sources themselves']]}),
  MC('4.4-2','Which comparison is accurate?',
    ['Luke made no changes to his sources; Plutarch changed everything.','Luke’s evidence is a counted pattern of small edits; Plutarch’s evidence is a set of cited sources and kinds of alteration.','Neither author used sources.','Plutarch edited dialogue 43 times and Luke cited nine sources.'],[1],
    'The documented counts for Luke concern edits (such as 43 changes to dialogue); the documented counts for Plutarch concern sources (nine by seven authors).'),
  gate('Continue'),
  quote('“…he wrote in simple, clean, clearly understandable Greek to appeal to as many members of the target demographic as possible.”'),
  quote('“Thus he is able to put on display the entirety of his literary repertoire without the risk of alienating his target audience.”'),
  REF('4.4-3','Judge how well the editing evidence supports the course’s claim about each author’s purpose.',
    '<p>For Luke, the counted pattern of streamlining supports a purpose of clear, smooth Greek, but the evidence shows editing and not who he was writing for, so the audience claim rests on inference. For Plutarch, the evidence concerns sources and alterations, which show purposeful shaping; the claim about an educated audience is supported more by his references than by the editing evidence.</p>',
    ['I judged each author separately','I separated what the evidence shows from what it only suggests','I reached a reasoned verdict'])
]);

/* ---------------- Module 5 ---------------- */
C.def('5.1',[
  T('5.1',0,5),
  ACC('5.1-1','The three places Luke changes the order',[
    {h:'True Kindred of Jesus and the Parable of the Sower',html:'<p>Luke omits the Parable of the Growing Seed and the Accusation of Jesus, moves the Mustard Seed beside the Leaven, and shifts the True Kindred to fill the hole.</p>',open:true},
    {h:'Call of the Twelve and the Summary of Travel and Healing',html:'<p>Luke puts the Call before the Summary so the Twelve are the audience for the Beatitudes.</p>'},
    {h:'Prediction of the Traitor and the Last Supper',html:'<p>In Mark the Prediction comes before the majority of the Last Supper; in Luke, after it.</p>'}]),
  MC('5.1-1','Which description of Luke’s reordering is accurate?',
    ['Luke moves the Call of the Twelve before the Summary of Travel and Healing, so that the Twelve are an appropriate audience for the Beatitudes.','Luke moves the Last Supper before the True Kindred of Jesus.','Luke removes all three pairs of passages.','Luke puts every event in the order Mark does.'],[0],
    'The thesis names three pairs; the Call of the Twelve and the Summary is one, and the Beatitudes are inserted after the Summary.'),
  gate('Continue'),
  T('5.1',5,10),
  REORDER('5.1-2','Put the events in order. Use the move up and move down buttons. The order <em>between</em> the pairs follows the Gospels.',[
    {label:'Mark’s order (the source)',items:['Summary of Travel and Healing','Call of the Twelve','True Kindred of Jesus','Parable of the Sower','Prediction of the Traitor','Last Supper'],fb:'In Mark the Summary precedes the Call, the True Kindred precedes the Sower, and the Prediction precedes the Last Supper.'},
    {label:'Luke’s order',items:['Call of the Twelve','Summary of Travel and Healing','Parable of the Sower','True Kindred of Jesus','Last Supper','Prediction of the Traitor'],fb:'Within each of the three pairs, Luke reverses the order he found in Mark.'}],'matching and reordering'),
  gate('Continue'),
  TABS('5.1-3','Two orders side by side',[
    {h:'Mark’s order',html:'<p>The Summary of Travel ends with impure spirits declaring Jesus the Son of God, and then Jesus calls the twelve. The Prediction comes before the Last Supper.</p>'},
    {h:'Luke’s order',html:'<p>The Call comes first, so the Twelve become the audience for the Beatitudes. The Last Supper comes first, so the party has shared a meal and broken bread before the betrayal is predicted.</p>'}]),
  MC('5.1-3','Select what Luke’s order emphasizes. Select all that apply.',
    ['An appropriate audience for the Beatitudes','A more intimate setting for the Prediction of the Traitor','Strict chronological accuracy','Keeping paired thematic elements together'],[0,1,3],
    'The thesis gives three reasons: to indicate setting, create appropriate audiences and prevent the separation of paired thematic elements. The thesis does not claim strict chronology; Luke is not concerned with chronological sequence “except in the broadest outline”.',{multi:true}),
  REF('5.1-4','Assess two possible reasons for Luke’s reordering: (A) he reordered to improve setting and audience, as the thesis argues; (B) he was following a version of the order he found in another source. Which is better supported?',
    '<p>The thesis supports (A) with specific reasons for each pair. But the order of the three pairs is the same in Matthew and Luke, which a dependence between the Gospels (the Farrer hypothesis, or a source they shared) could explain without Luke’s independent motives. The thesis sets that question aside as beyond its scope, so (A) is better supported by the thesis’s own argument, while (B) remains a live alternative.</p>',
    ['I weighed both reasons','I used evidence from the thesis','I chose one and said why'])
]);

C.def('5.2',[
  T('5.2',0,7),
  {t:'placeholder',label:'Placeholder: activity to be added',note:'Recall activity for the six types of alteration (objective 5.2-1). Replace this block.'},
  gate('Continue'),
  T('5.2',7,9),
  MC('5.2-3','A writer describes two similarly named land laws as though they were a single law. Which type of alteration is this?',
    ['Transfer of actions','Conflation of similar items','Fabrication of context','Chronological displacement'],[1],
    'Treating two similar items as one is conflation, as with the lex Trebonia and lex Licinia Pompeia in <em>Caesar</em> 14.'),
  gate('Continue'),
  {t:'thesis',id:'5.2',from:9,to:11,splitAt:['The trip to Nicomedes is correctly placed']},
  gate('Continue'),
  T('5.2',11,13),
  MATCH('5.2-2','Match each example to the type of alteration.',
    ['Three senate debates on the Catilinarian conspiracy appear as one','Cato’s dispatch to Cyprus (58 BC) is implied to be recent (56 BC)','Nicomedes, the pirates and Rhodes are placed together before the return to Rome','The Rubicon speech is Caesar’s in <em>Caesar</em> but Antony’s and Crassus’s in <em>Antony</em>','The dagger the Arverni displayed, which Caesar smiled upon seeing','The Bona Dea scene: open doors, running maids, Aurelia’s formidability'],
    ['Conflation','Chronological compression','Chronological displacement','Transfer of actions','Fabrication of context','Imaginative elaboration'],[0,1,2,3,4,5],
    'Each pairs with the example the thesis gives for that type.'),
  gate('Continue'),
  TABS('5.2-4','Two alterations compared',[
    {h:'Compression',html:'<p>Events linked by theme or cause are brought closer in time. Reader’s impression: fluidity. Cato appears to have been sent away only recently.</p>'},
    {h:'Imaginative elaboration',html:'<p>Detail is invented or enriched. Reader’s impression: vividness. The Bona Dea scene becomes an almost theatrical story.</p>'}]),
  MC('5.2-4','Which pairing correctly states how each alteration changes a reader’s impression?',
    ['Compression makes events seem more closely connected; elaboration makes a scene more vivid.','Compression makes a scene vivid; elaboration makes events seem connected.','Both make no difference.','Both remove characters.'],[0],
    'Compression sacrifices the gaps in time; elaboration fills out detail.'),
  T('5.2',13,14),
  impact('Every alteration he made, he made consciously and purposefully.'),
  REF('5.2-5','Which alteration changes the story most? Defend your choice.',
    '<p>A defensible choice is transfer of actions (the Rubicon speech): it changes who is the hero of a scene. Another is displacement, which in the Rhodes case suggests Caesar’s rhetorical success came from his education. Either is acceptable if the argument uses evidence and weighs one alteration against another.</p>',
    ['I chose one alteration','I gave evidence from the thesis','I compared it with another alteration'])
]);

C.def('5.3',[
  {t:'thesis',id:'5.3',from:0,to:3,pullQuote:['“The ancient Hellenistic world']},
  ACC('5.3-1','A life is not a history',[
    {h:'A history',html:'<p>A continuous account of events, ideally in order.</p>',open:true},
    {h:'A life',html:'<p>An account of a person’s character. A small matter, a word or a jest may reveal more than a battle.</p>'}]),
  MC('5.3-1','Which statement best explains the difference between writing a life and writing a history?',
    ['A life tries to reveal character and may sacrifice strict chronology; a history aims at a continuous account of events.','A life is always shorter than a history.','A history is always false.','A life is written only about gods.'],[0],
    'Plutarch’s statement of aim: “it is not histories we are writing, but Lives.”'),
  gate('Continue'),
  {t:'placeholder',label:'Placeholder: activity to be added',note:'Activity for objective 5.3-2: the reasoning behind the alterations (aim, choice, alteration). Replace this block.'},
  {t:'placeholder',label:'Placeholder: assessment to be added',note:'Knowledge check for objective 5.3-2: ordering the reasoning that accounts for Plutarch’s alterations (aim, choice, alteration). Replace this block.'},
  gate('Continue'),
  T('5.3',3,6),
  quote('“Similarly, it is very doubtful that Luke intends to give a chronological sequence at all except in the broadest outline.”','Ellis, quoted in the thesis'),
  REF('5.3-3','Evaluate whether “alteration” is a fair label for these changes. Give reasons.',
    '<p>“Alteration” implies a departure from a correct original, which fits a modern view of history. Plutarch and Luke wrote lives and theological history, where the ancient view allowed freedom with chronology. The label is fair as a description of what changed relative to sources, but it can mislead if it suggests an error or a lapse in method.</p>',
    ['I considered what “alteration” implies','I used the aim of writing lives','I took a position'])
]);
})();

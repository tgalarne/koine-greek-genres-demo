/* Shared builders, thesis tables (as printed), Appendix B/C summaries, and source-data flags */
(function(){
'use strict';
const C=window.C;

/* terse builders for content files */
C.b={
  T:(id,from,to,label)=>({t:'thesis',id:id,from:from,to:to,label:label}),
  txt:(h,html,obj)=>({t:'text',h:h,html:html,obj:obj}),
  call:(k,html,kind)=>({t:'callout',k:k,html:html,kind:kind}),
  impact:(html,cite)=>({t:'impact',html:html,cite:cite}),
  quote:(html,cite)=>({t:'quote',html:html,cite:cite}),
  FC:(obj,h,cards)=>({t:'flash',obj:obj,h:h,cards:cards}),
  ACC:(obj,h,items,open)=>({t:'acc',obj:obj,h:h,items:items,open:open}),
  TABS:(obj,h,items)=>({t:'tabs',obj:obj,h:h,items:items}),
  PROC:(obj,h,steps,summary,start)=>({t:'process',obj:obj,h:h,steps:steps,summary:summary,start:start}),
  MC:(obj,q,opts,ans,fb,x)=>Object.assign({t:'mc',obj:obj,q:q,opts:opts,ans:[].concat(ans),fb:fb},x||{}),
  MATCH:(obj,q,left,right,ans,fb)=>({t:'match',obj:obj,q:q,left:left,right:right,ans:ans,fb:fb}),
  SORT:(obj,q,piles,cards,fb)=>({t:'sort',obj:obj,q:q,piles:piles,cards:cards,fb:fb}),
  REORDER:(obj,q,rounds,kind)=>({t:'reorder',obj:obj,q:q,rounds:rounds,kind:kind}),
  REF:(obj,q,model,rubric,hint)=>({t:'ref',obj:obj,q:q,model:model,rubric:rubric,hint:hint}),
  gate:label=>({t:'gate',label:label}),
  table:(obj,h,t)=>Object.assign({t:'table',obj:obj,h:h},t),
  TL:(obj,h,items)=>({t:'timeline',obj:obj,h:h,items:items}),
  CARDS:(obj,h,items)=>({t:'cards',obj:obj,h:h,items:items}),
  PAIR:(obj,h,a,b)=>({t:'pair',obj:obj,h:h,a:a,b:b}),
  CHART:(obj,x)=>Object.assign({t:'chart',obj:obj},x)
};

/* tables from the thesis, keyed lesson#index; values as printed */
const rel='Course note: values are relative frequencies per 10,000 words (Appendix A, Methodologies).';
C.TABLES['7.2#0']={caption:'Pronoun frequencies, Luke-Acts and Plutarch',head:['Pronoun type','Luke-Acts','Plutarch'],num:[1,2],rowHead:true,rows:[['Personal','884.25','404.49'],['Reflexive','26.39','88.09'],['Reciprocal','5.39','4.96'],['Relative','124.29','324.46']],note:rel};
C.TABLES['7.2#1']={caption:'Personal pronouns by person',head:['Person','Luke-Acts','Plutarch'],num:[1,2],rowHead:true,rows:[['First','156.06','8.07'],['Second','187.17','4.34'],['Third','514.77','392.08']],note:rel};
C.TABLES['7.3#0']={caption:'ὅτι and γάρ',head:['Particle','Luke-Acts','Plutarch'],num:[1,2],rowHead:true,rows:[['ὅτι','84.28','7.44'],['γάρ','50.23','58.32']],note:rel};
C.TABLES['7.3#1']={caption:'καί, δέ and the digram δὲ καί (raw frequencies adjusted so the three sets are mutually exclusive)',head:['Form','Luke-Acts','Plutarch'],num:[1,2],rowHead:true,rows:[['καί','731.86','584.4'],['δέ','309.6','353'],['δὲ καί','29.23','27.92']],note:rel};
C.TABLES['7.4#0']={caption:'Vocabulary density: other ancient authors',head:['Selection','Total word count','Unique word count','Vocabulary density'],num:[1,2,3],rowHead:true,rows:[['Xenophon’s <em>Anabasis</em>','57,183','4,007','14.271'],['Livy’s <em>History</em> (1-10)','159,186','7,446','21.379'],['Virgil’s <em>Aeneid</em>','63,719','6,677','9.543']]};
C.TABLES['7.4#1']={caption:'Vocabulary density: Luke and his contemporaries (Cadbury)',head:['Selection','Total word count','Unique word count','Vocabulary density'],num:[1,2,3],rowHead:true,rows:[['Luke-Acts','35,239','2,697','13.066'],['Matthew','17,921','1,542','11.621'],['Mark','10,720','1,259','8.515'],['John','27,185','1,396','19.473']]};

/* Appendix B (summary of the totals boxes) and Appendix C */
C.REF={
 b:[
  {t:'callout',k:'About this page',html:'<p>This is a summary of the totals boxes printed beside each table in Appendix B of the thesis. The full form-by-form tables (every case, number and gender) are in the thesis PDF. Relative frequency is per 10,000 words. Luke-Acts figures use 35,239 words; Plutarch’s <em>Caesar</em> figures use 16,119 words (Appendix A, footnote 155).</p>',kind:'data'},
  {t:'table',h:'Totals by word class',caption:'Raw count and relative frequency',head:['Word class','Luke-Acts raw','Luke-Acts relative','Plutarch raw','Plutarch relative'],num:[1,2,3,4],rowHead:true,rows:[
    ['Personal pronouns','3,116','884.25','652','404.49'],['Reflexive pronouns','93','26.39','142','88.09'],['Reciprocal pronouns','19','5.39','8','4.96'],['Demonstrative pronouns','559','158.63','477','295.92'],['Relative pronouns','438','124.29','523','324.46'],['ἅπας, πᾶς','348','98.75','102','63.28'],['ἕκαστος','16','4.54','27','16.87'],['Optatives','28','7.95','1,994','1,237.05']]},
  {t:'table',h:'Personal pronouns by person and number',caption:'Raw count and relative frequency',head:['Group','Luke-Acts raw','Luke-Acts relative','Plutarch raw','Plutarch relative'],num:[1,2,3,4],rowHead:true,rows:[
    ['First person','592','156.06','13','8.07'],['Second person','710','187.17','7','4.34'],['Third person','1,814','514.77','632','392.08'],['Singular','1,982','562.45','602','373.47'],['Plural','1,134','321.80','50','31.02']],flag:[0,1],note:'Shaded rows: the Luke-Acts first and second person relative figures do not match their raw counts (592 and 710 out of 35,239 words would give about 168.0 and 201.5), and the three printed person figures sum to 858.00, not 884.25. See the design page, source-data flags.'},
  {t:'table',h:'Optatives by voice and tense',caption:'Raw count and relative frequency',head:['Voice and tense','Luke-Acts raw','Luke-Acts relative','Plutarch raw','Plutarch relative'],num:[1,2,3,4],rowHead:true,rows:[
    ['Active present','16','4.54','562','348.66'],['Active future','0','0','9','5.58'],['Active first aorist','2','0.57','347','215.27'],['Active second aorist','2','0.57','355','220.24'],['Active first perfect','0','0','14','8.69'],['Active second perfect','0','0','16','9.93'],
    ['Middle present','4','1.14','176','109.19'],['Middle future','0','0','18','11.17'],['Middle first aorist','1','0.28','104','64.52'],['Middle second aorist','3','0.85','203','125.94'],['Middle first perfect','0','0','1','0.62'],['Middle second perfect','0','0','0','0'],
    ['Passive present','0','0','73','45.29'],['Passive future','0','0','2','1.24'],['Passive first aorist','0','0','83','51.49'],['Passive second aorist','0','0','31','19.23'],
    ['<b>Total</b>','<b>28</b>','<b>7.95</b>','<b>1,994</b>','<b>1,237.05</b>']],note:'Active, middle and passive subtotals: Luke-Acts 20, 8, 0 (5.68, 2.27, 0); Plutarch 1,303, 502, 189 (808.36, 311.43, 117.25).'}
 ],
 c:[
  {t:'callout',k:'About this page',html:'<p>The 28 optatives in Luke-Acts, by location. Reproduced from Appendix C of the thesis. The thesis lists "Aorist" as the voice for Luke 20:16; this is printed as it appears.</p>',kind:'data'},
  {t:'table',h:'Optative locations',caption:'Optative locations in Luke-Acts',head:['Book, chapter, verse','Tense','Voice'],rowHead:true,rows:[
   ['Luke 1:29','Present','Active'],['Luke 1:38','Second aorist','Middle'],['Luke 1:62','Present','Active'],['Luke 3:15','Present','Active'],['Luke 6:11','First aorist','Active'],['Luke 8:9','Present','Active'],['Luke 9:46','Present','Active'],['Luke 15:26','Present','Active'],['Luke 18:36','Present','Active'],['Luke 20:16','Second aorist','Aorist'],['Luke 22:23','Present','Active'],
   ['Acts 5:24','Second aorist','Middle'],['Acts 8:20','Present','Active'],['Acts 8:31','Present','Middle(/Passive)'],['Acts 10:17','Present','Active'],['Acts 17:11','Present','Active'],['Acts 17:18','Present','Active'],['Acts 17:27','First aorist','Active'],['Acts 17:27','Second aorist','Active'],['Acts 20:16','Present','Active'],['Acts 21:33','Present','Active'],['Acts 24:19','Present','Active'],['Acts 25:16','Present','Active'],['Acts 25:16','Second aorist','Active'],['Acts 25:20','Present','Middle'],['Acts 26:29','First aorist','Middle'],['Acts 27:12','Present','Middle(/Passive)'],['Acts 27:39','Present','Middle(/Passive)']]}
 ]
};

/* figures in the thesis that disagree with each other (surfaced, not corrected) */
C.FLAGS=[
 ['Caesar word count 19,119 (p. 48)','Appendix A (footnote 155) says 16,119 and "approximately 16-16.1k". The density of 4.328 only works with 16,119 (16,119 ÷ 3,724 = 4.328).','7.4-2'],
 ['Luke-Acts person shares 18.19%, 21.81%, 60% (p. 45)','These come from 156.06 + 187.17 + 514.77 = 858.00, but the personal pronoun total is 884.25. Raw counts 592 and 710 would give about 168.0 and 201.5.','7.4-2'],
 ['Demonstratives in Caesar: 298.11 (p. 42)','Appendix B gives 295.92 (477 ÷ 16,119 × 10,000).','7.4-2'],
 ['Caesar optatives: 1,246.17 per 10,000 (p. 53)','Appendix B gives 1,237.05. The first uses 16,001 words; the second uses 16,119.','8.2-2'],
 ['Caesar optatives: 1,994','The thesis reports 1,105 optatives for all the other Parallel Lives together (p. 53). 1,994 in one short Life is about one word in eight. Worth rechecking against the source.','8.2-2'],
 ['Lifetimes overlap "for fifty years" (p. 23)','Using the dates given (Plutarch about AD 46 to 120, Luke about AD 66 to 150), the overlap is about 54 years.','3.3-2'],
 ['δέ in Plutarch: 355.6 (p. 42) and 353 (p. 46)','The same form is given two slightly different figures; the second is adjusted to make the sets mutually exclusive.','7.3-3']
];
})();

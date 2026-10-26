/* Module Overview pages (Modules 1-8), seat times and module-level objectives.
   Seat times are planning estimates: module totals come from Learning_Objectives_by_Module.md;
   the split across lessons is an estimate for review. */
(function(){
'use strict';
const C=window.C,{txt}=C.b;

C.LESSON_MIN={
  '0.1':10,
  '1.1':6,'1.2':6,'1.3':4,'1.4':4,
  '2.1':4,'2.2':4,'2.3':3,'2.4':4,
  '3.1':5,'3.2':6,'3.3':4,
  '4.1':4,'4.2':5,'4.3':6,'4.4':5,
  '5.1':5,'5.2':6,'5.3':4,
  '6.1':4,'6.2':6,'6.3':5,
  '7.1':5,'7.2':6,'7.3':7,'7.4':7,
  '8.1':4,'8.2':5,'8.3':6,
  '9.1':4,'9.2':3,'9.3':7,'9.4':6
};
C.MODULE_MIN={1:20,2:15,3:15,4:20,5:15,6:15,7:25,8:15};

/* module-level objectives (draft approved for use in the module overviews) */
const MO={
 1:[['U','Explain how social factors, including class, prestige, temperament, disposition and style, shape the way people speak and tell stories.'],
    ['Ap','Use the course’s class model and working definitions to describe a speaker’s social position and linguistic habits.'],
    ['U','Explain why a narrator’s wording is a choice among alternatives that can reveal social position.']],
 2:[['U','Explain what it means to say that genres are constructed, do social work and change over time.'],
    ['Ap','Apply the ideas of background knowledge and reading against the grain to short texts.'],
    ['An','Compare a reading inside a genre with a reading against it, and say what each shows.']],
 3:[['Ap','Distinguish documented from inferred evidence about Luke and Plutarch.'],
    ['U','Compare the two authors’ lives using the timeline and the map.'],
    ['An','Infer what a shared language across that distance and time suggests, and note what the evidence cannot show.']],
 4:[['An','Identify patterns in how Luke edited his sources and infer purposes for them, noting the evidence each rests on.'],
    ['An','Compare Plutarch’s sources and what each contributed to his account.'],
    ['E','Judge how well the editing evidence supports claims about each author’s purpose.']],
 5:[['An','Analyze how Luke reordered, and how Plutarch altered, the material he took from his sources.'],
    ['An','Explain how the aim of writing lives rather than histories accounts for Plutarch’s alterations.'],
    ['E','Evaluate competing reasons for the changes, including whether “alteration” is a fair label.']],
 6:[['U','Explain prominence at two levels and the cline of specificity, using English analogies.'],
    ['Ap','Identify fronting, clefting and topicalization in English sentences.'],
    ['E','Justify which device best produces a stated emphasis, differentiating the three by their effects.']],
 7:[['Ap','Calculate relative frequencies and vocabulary density from raw counts and totals.'],
    ['An','Interpret and compare pronoun, particle, digram and vocabulary figures for the two authors, separating real differences from small gaps.'],
    ['E','Evaluate the strength and limits of the numerical evidence, including figures that do not agree with one another.'],
    ['C','Compose a short data-based summary of the authors with a labeled chart and a text alternative.']],
 8:[['An','Examine what the optative expresses and compare how often it appears in the two authors’ writing.'],
    ['E','Assess the reliability of the optative counts and judge whether the difference needs an explanation.'],
    ['E','Critique three competing explanations for the difference, naming evidence for and against each.'],
    ['C','Construct a reasoned argument that weighs all three explanations and proposes further evidence to test the preferred one.']]
};

const OV={
 1:'<p>This module lays the groundwork for the whole course. You will learn what a sociolect is, how class and prestige shape the way people speak, how temperament, disposition and style affect the way people write and tell stories, and why a narrator’s wording is always a choice.</p>',
 2:'<p>Genre is the second lens. This module shows why genres are constructed rather than natural, how they act socially and change over time, how they rely on background knowledge, and how readers can push back by reading against the grain.</p>',
 3:'<p>Here the two authors arrive. You will sort what is documented from what is only inferred about Luke and Plutarch, then set their lives side by side on a timeline and a map to ask what a shared language can and cannot tell us.</p>',
 4:'<p>This optional module looks at how the authors worked with their sources: how Luke shortened, combined and smoothed what he took from Mark and others, how Plutarch drew on Pollio, Oppius and more, and what those choices reveal about purpose.</p><p>You can skip it and still follow the rest of the course.</p>',
 5:'<p>This module follows how the authors ordered and narrated events. You will examine Luke’s three reorderings and Plutarch’s six kinds of alteration, and weigh why writing lives rather than histories allowed such freedom with chronology.</p>',
 6:'<p>This optional, advanced module explains how emphasis works in word order and sentence structure. It teaches the technical ideas (the cline of specificity, fronting, clefting and topicalization) through English analogies.</p><p>You can skip it and still follow the rest of the course.</p>',
 7:'<p>The course turns to numbers. You will learn why relative frequencies are needed, then compare pronouns, particles, digrams and vocabulary density in the two authors, and learn to check figures against each other and judge how far numbers can carry an argument.</p>',
 8:'<p>The last content module takes one feature, the optative mood, and follows it from definition to counts to three competing explanations. You will weigh the evidence for each and build a short reasoned case of your own.</p>'
};

for(let n=1;n<=8;n++){
  C.def(n+'.0',[
    txt('About this module',OV[n]),
    {t:'outcomes',h:'What you will be able to do',items:MO[n].map(x=>({text:x[1],lvl:x[0]}))},
    {t:'seattime',mod:n}
  ]);
}
C.MOD_OBJ=MO;
})();

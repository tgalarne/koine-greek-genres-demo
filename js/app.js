/* App shell: modules, router, cover, lesson pages, drawer, progress, design-alignment page */
(function(){
'use strict';
const C=window.C,h=C.h,S=C.S;
const $=s=>document.querySelector(s);
const reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const GATES={gate:1,predict:1,capstone:1,quiz:1};

/* ---------- course structure ---------- */
const meta=window.MODS_META.map(m=>({n:m.n,title:m.title,optional:m.optional,blurb:m.blurb.replace(/^\s+/,''),lessons:m.lessons}));
C.modules=[{n:0,title:'Welcome',optional:false,blurb:'10 min · Thesis pp. 3–4. Orientation: what the course is, what you will be able to do, and how it works.',lessons:[{id:'0.1',title:'Welcome and course overview'}]}]
  .concat(meta)
  .concat([{n:9,title:'Literature as Conversation',optional:false,blurb:'20 min · Thesis pp. 56–61. Culminating module: reading as conversation, the conclusions, a required self-checked capstone and the final quiz.',lessons:[{id:'9.1',title:'Reading as conversation'},{id:'9.2',title:'Conclusions and directions for further thought'},{id:'9.3',title:'Capstone: make your case'},{id:'9.4',title:'Final quiz'}]}]);
const SMALL=/^(a|an|the|and|but|or|nor|for|of|in|on|at|to|by|vs|as)$/i;
C.titleCase=function(s){
  const w=s.split(' ');
  return w.map((t,i)=>{
    const prevColon=i>0&&/:$/.test(w[i-1]);
    if(i>0&&i<w.length-1&&!prevColon&&SMALL.test(t.replace(/[^\w]/g,'')))return t.toLowerCase();
    return t.charAt(0).toUpperCase()+t.slice(1);
  }).join(' ');
};
C.modules.forEach(m=>{if(m.n>=1&&m.n<=8)m.lessons.unshift({id:m.n+'.0',title:'Module Overview'});});
C.modules.forEach(m=>{m.title=C.titleCase(m.title);m.lessons.forEach(l=>{l.title=C.titleCase(l.title);});});
C.order=[];C.modules.forEach(m=>m.lessons.forEach(l=>{l.mod=m;C.order.push(l.id);}));
/* menu label: [Module #:Lesson #]; the Welcome module has none */
C.label=id=>id.indexOf('0.')===0?'':id+':';
C.lessonMeta=id=>{for(const m of C.modules)for(const l of m.lessons)if(l.id===id)return l;};
C.TOTAL=C.order.length;

/* ---------- progress ---------- */
const requiredIds=()=>C.order.filter(id=>!C.lessonMeta(id).mod.optional);
C.pct=()=>{const r=requiredIds();return Math.round(r.filter(id=>S.done[id]).length/r.length*100);};
C.updateProgress=function(){
  const p=C.pct();const bar=$('#progress');bar.setAttribute('aria-valuenow',p);bar.firstElementChild.style.width=p+'%';
  buildDrawer();
};
C.updateScore=function(){};
function markDone(id){if(!S.done[id]){S.done[id]=true;C.save();}C.updateProgress();}

/* ---------- drawer ---------- */
const drawer=$('#drawer'),scrim=$('#scrim'),menuBtn=$('#menuBtn');
menuBtn.innerHTML=C.icon('menu',26);
let lastFocus=null,currentId=null;
function ring(p,size,label){
  const r=size/2-3,c=2*Math.PI*r;
  return h('span',{class:'ring',role:'img','aria-label':label,html:'<svg width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'" aria-hidden="true" focusable="false"><circle cx="'+size/2+'" cy="'+size/2+'" r="'+r+'" fill="none" stroke="var(--color-hair)" stroke-width="3"/><circle cx="'+size/2+'" cy="'+size/2+'" r="'+r+'" fill="none" stroke="var(--color-success)" stroke-width="3" stroke-linecap="round" stroke-dasharray="'+c.toFixed(2)+'" stroke-dashoffset="'+(c*(1-p/100)).toFixed(2)+'" transform="rotate(-90 '+size/2+' '+size/2+')"/>'+(p>=100?'<path d="M'+size*0.3+' '+size*0.52+'l'+size*0.14+' '+size*0.14+' '+size*0.27+'-'+size*0.28+'" fill="none" stroke="var(--color-success)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>':'')+'</svg>'});
}
C.modPct=m=>Math.round(m.lessons.filter(l=>S.done[l.id]).length/m.lessons.length*100);
function buildDrawer(){
  drawer.innerHTML='';
  drawer.append(h('button',{class:'close',type:'button','aria-label':'Close navigation menu',onclick:closeDrawer,html:C.icon('close',24)}),h('h2',null,h('a',{href:'#/',onclick:closeDrawer,style:'color:inherit;text-decoration:none'},'Style and Sociolects')));
  drawer.append(h('p',{class:'tnote',style:'padding:0 20px;margin:0 0 6px'},'Course progress: '+C.pct()+'% of required lessons'));
  C.modules.forEach(m=>{
    const mp=C.modPct(m);
    drawer.append(h('div',{class:'mod'+(mp===100?' done':'')},h('span',{class:'modname'},m.n===0?'Welcome':'Module '+m.n+': '+m.title,m.optional?h('small',null,' (optional)'):null),h('span',{class:'pct'},mp+'%')));
    drawer.append(h('ul',null,m.lessons.map(l=>{
      const done=!!S.done[l.id],lab=C.label(l.id);
      return h('li',null,h('a',{href:'#/lesson/'+l.id,class:done?'done':null,'aria-current':l.id===currentId?'page':null,onclick:closeDrawer},
        ring(done?100:0,24,done?'Lesson complete':'Lesson not complete'),
        h('span',{class:'ltxt'},lab?h('span',{class:'lab'},lab):null,h('span',null,l.title),l.id===currentId?h('span',{class:'chip',style:'margin-left:8px'},'Current'):null),
        h('span',{class:'pct'},done?'100% complete':'0% complete')));
    })));
  });
  drawer.append(h('div',{class:'extra'},
    h('div',{class:'mod'},'Reference'),
    h('ul',null,[['#/design','Design and alignment view'],['#/ref/a','Appendix A: sources and methods'],['#/ref/b','Appendix B: frequency data'],['#/ref/c','Appendix C: optative locations'],['#/ref/works','Works cited']].map(x=>h('li',null,h('a',{href:x[0],onclick:closeDrawer},h('span',null,x[1])))))));
}
function openDrawer(){lastFocus=document.activeElement;drawer.classList.add('open');scrim.classList.add('open');drawer.removeAttribute('aria-hidden');menuBtn.setAttribute('aria-expanded','true');const f=drawer.querySelector('.close');f&&f.focus();}
function closeDrawer(){if(!drawer.classList.contains('open'))return;drawer.classList.remove('open');scrim.classList.remove('open');drawer.setAttribute('aria-hidden','true');menuBtn.setAttribute('aria-expanded','false');(lastFocus||menuBtn).focus();}
menuBtn.addEventListener('click',openDrawer);scrim.addEventListener('click',closeDrawer);
document.addEventListener('keydown',e=>{
  if(!drawer.classList.contains('open'))return;
  if(e.key==='Escape'){e.preventDefault();closeDrawer();}
  if(e.key==='Tab'){const f=[...drawer.querySelectorAll('a,button')];const a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus();}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus();}}
});

/* ---------- dark mode ---------- */
const sysDark=()=>!!(window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches);
function setTheme(dark,save){
  document.documentElement.setAttribute('data-theme',dark?'dark':'light');
  const b=$('#themeBtn');b.setAttribute('aria-pressed',dark);$('#themeState').textContent=dark?'on':'off';
  if(save){S.theme=dark?'dark':'light';C.save();}
}
$('#themeBtn').addEventListener('click',()=>setTheme(document.documentElement.getAttribute('data-theme')!=='dark',true));

/* ---------- ID view toggle ---------- */
function setAnnot(on){S.annot=on;document.body.classList.toggle('show-annot',on);$('#annotBtn').setAttribute('aria-pressed',on);$('#annotState').textContent=on?'on':'off';C.save();}
$('#annotBtn').addEventListener('click',()=>setAnnot(!S.annot));

/* ---------- misc listeners ---------- */
document.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();const m=$('#main');m.focus();m.scrollIntoView();});
document.addEventListener('click',e=>{
  const a=e.target.closest&&e.target.closest('a[data-fn]');
  if(a){e.preventDefault();const li=document.getElementById('fn-'+a.dataset.fn);if(li){const d=li.closest('details');if(d)d.open=true;li.focus();li.scrollIntoView({block:'center',behavior:reduce?'auto':'smooth'});}}
});
const backTop=$('#backTop');
window.addEventListener('scroll',()=>{backTop.classList.toggle('show',window.scrollY>window.innerHeight&&/#\/lesson\//.test(location.hash));},{passive:true});
backTop.addEventListener('click',()=>{window.scrollTo({top:0,behavior:reduce?'auto':'smooth'});$('#main').focus();});

const io='IntersectionObserver' in window&&!reduce?new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}}),{rootMargin:'0px 0px -8% 0px'}):null;
function fade(el){el.classList.add('fade');if(io)io.observe(el);else el.classList.add('in');return el;}

function setTitle(t){document.title=t+' · Style and Sociolects';}
function focusMain(){const m=$('#main');const hh=m.querySelector('h1');if(hh){hh.tabIndex=-1;hh.focus({preventScroll:true});}else m.focus({preventScroll:true});window.scrollTo(0,0);}

/* ---------- cover ---------- */
function cover(){
  currentId=null;setTitle('Course overview');
  const main=$('#main');main.innerHTML='';
  const lets='ΑΒΓΔΕΖΗΘΙΚ';
  let bg='';for(let i=0;i<9;i++)bg+='<path d="M0 '+(70+i*52)+'H1600" stroke="#fff" stroke-opacity=".08" stroke-width="2"/>';
  const hero=h('section',{class:'cover-hero','aria-labelledby':'ct'},
    h('div',{html:'<svg viewBox="0 0 1600 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><rect width="1600" height="560" fill="#1F3A5F"/>'+bg+'<text x="1260" y="500" text-anchor="middle" font-family="Gentium Plus,GFS Didot,Palatino Linotype,serif" font-size="560" fill="#fff" fill-opacity=".12">Σ</text></svg>'}),
    h('div',{class:'inner'},h('div',{class:'wrap'},
      h('h1',{id:'ct'},'Style and Sociolects'),
      h('p',{class:'sub'},'How social background shaped the Greek of Luke-Acts and Plutarch’s Caesar, and what the numbers can and cannot show.'),
      h('a',{class:'btn',href:'#/lesson/'+(firstTodo()||'0.1')},C.pct()>0?'Resume course':'Start course'),
      h('a',{class:'btn ghost',href:'#/design'},'Design and alignment view'))));
  const body=h('div',{class:'wrap cover-body'});
  body.append(h('p',{class:'desc'},'This demo course is built from an undergraduate thesis in Classics and sociolinguistics. You will learn how social class, prestige and genre shape how ancient authors wrote and how readers read them, then work with real frequency data from Luke-Acts and Plutarch’s Caesar to weigh competing explanations for the differences between the two authors.'),
    h('p',{class:'nles'},(C.TOTAL-8)+' Lessons · 8 Module Overviews · About 170 minutes in all · Modules 4 and 6 are optional'));
  const ol=h('ol',{class:'outline'});
  body.append(h('h2',{style:'font-size:var(--text-h3);margin:var(--space-6) 0 0'},'Course outline'));
  C.modules.forEach(m=>{
    ol.append(h('h3',null,m.n===0?'Welcome':'Module '+m.n+': '+m.title+(m.optional?' (optional)':'')));
    m.lessons.forEach(l=>{const q=l.id==='9.4';ol.append(h('li',null,h('a',{href:'#/lesson/'+l.id},h('span',{class:'ic',html:C.icon(q?'quiz':'lesson',30)}),h('span',null,(C.label(l.id)?C.label(l.id)+' ':'')+l.title),h('span',{class:'circ'+(S.done[l.id]?' done':''),'aria-label':S.done[l.id]?'Completed':'Not completed',html:S.done[l.id]?C.icon('check',14):''}))));});
  });
  body.append(ol);
  body.append(h('p',{class:'tnote',style:'margin-top:var(--space-6)'},'Thesis text is reproduced verbatim for this demo. Banners are generated placeholders; no photographs were supplied. ',h('a',{href:'#',onclick:e=>{e.preventDefault();if(confirm('Clear saved progress and reflections in this browser?'))C.reset();}},'Reset saved progress')));
  main.append(hero,body);
  focusMain();
}
function firstTodo(){const r=requiredIds();return r.find(id=>!S.done[id])||null;}

/* time shows always; thesis pages and design notes only in ID view */
function timeLine(id,m){
  const own=id.slice(-2)==='.0'?C.MODULE_MIN[m.n]:C.LESSON_MIN[id];
  const i=m.blurb.indexOf(' · ');
  const out=[own?(id.slice(-2)==='.0'?'Module completion time: ':'')+own+' min':m.blurb.slice(0,i<0?undefined:i)];
  if(i>=0)out.push(h('span',{class:'idonly'},' · '+m.blurb.slice(i+3)));
  return out;
}

/* ---------- lesson ---------- */
function lesson(id){
  const L=C.lessons[id],meta=C.lessonMeta(id);
  if(!meta){location.hash='#/';return;}
  currentId=id;setTitle((C.label(id)?C.label(id)+' ':'')+meta.title);
  const main=$('#main');main.innerHTML='';
  const idx=C.order.indexOf(id),m=meta.mod;
  const wrap=h('div',{class:'wrap'});main.append(wrap);
  wrap.append(h('header',{class:'lesson-head'},
    h('div',{class:'count'},(m.n===0?'Welcome':'Module '+m.n+': '+m.title),m.optional?h('span',{class:'optional-tag'},'Optional'):null),
    h('h1',null,(C.label(id)?'Lesson '+C.label(id)+' ':'')+meta.title),h('hr',{class:'rule'}),
    h('p',{class:'meta'},timeLine(id,m))));
  const banner=h('div',{class:'banner'},h('div',{html:C.banner(m.n,'b'+idx)}));
  main.insertBefore(banner,wrap.nextSibling);
  /* header sits above the banner in the spec: move header before banner (already), text container after */
  const body=h('div',{class:'wrap',id:'lessonBody'});main.append(body);
  if(!L){body.append(h('p',null,'This lesson is not built yet.'));focusMain();return;}
  const blocks=[{t:'objectives'}].concat(L.blocks);
  let i=0,ended=false;
  const ctx={lesson:{id:id},release:()=>seg(true)};
  function seg(focusNew){
    const fresh=[];
    while(i<blocks.length){
      const b=blocks[i++],fn=C.BLK[b.t];
      if(!fn){console.warn('unknown block',b.t);continue;}
      const el=fn(b,ctx);
      if(!el)continue;
      const w=fade(h('div',null,el));body.append(w);fresh.push(w);
      if(GATES[b.t])return finish(focusNew,fresh,false);
    }
    finish(focusNew,fresh,true);
  }
  function finish(focusNew,fresh,atEnd){
    if(atEnd&&!ended){
      ended=true;
      const next=C.order[idx+1];
      const last=!next;
      const nl=last?'':(C.label(next)?C.label(next)+' ':'')+C.lessonMeta(next).title;
      const end=h('div',{class:'end-wrap'},
        last?h('p',{class:'prose end-msg'},C.pct()===100?'You have completed every required lesson. Well done.':'You can finish any remaining required lessons from the course outline.'):null,
        h('a',{class:'end-bar',href:last?'#/':'#/lesson/'+next,'aria-label':last?'Finish course':'Continue to '+nl},h('span',{html:C.icon('chevD',20)}),h('span',null,last?'Finish Course':nl),h('span',{html:C.icon('chevD',20)})));
      main.append(end);
      if('IntersectionObserver' in window){const o=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){o.disconnect();markDone(id);}});o.observe(end);}else markDone(id);
    }
    if(focusNew&&fresh.length){
      const t=fresh[0].querySelector('h2,h3,legend')||fresh[0];t.tabIndex=-1;t.focus({preventScroll:true});
      fresh[0].scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
    }
  }
  seg(false);
  buildDrawer();
  focusMain();
}

/* ---------- reference pages ---------- */
function refPage(which){
  currentId=null;
  const main=$('#main');main.innerHTML='';
  const wrap=h('div',{class:'wrap'});main.append(wrap);
  const titles={a:'Appendix A: Sources and methods',b:'Appendix B: Frequency data (summary)',c:'Appendix C: Optative locations',works:'Works cited'};
  setTitle(titles[which]||'Reference');
  wrap.append(h('header',{class:'lesson-head'},h('div',{class:'count'},'Reference'),h('h1',null,titles[which]||'Reference'),h('hr',{class:'rule'}),h('p',{class:'meta'},h('a',{href:'#/'},'Back to the course overview'))));
  const add=el=>wrap.append(h('div',null,el));
  if(which==='a'){add(C.BLK.thesis({id:'appA',label:'Thesis text, verbatim'}));add(C.BLK.thesis({id:'appA2',label:'Thesis text, verbatim'}));}
  else if(which==='works'){add(h('section',{class:'block verbatim prose'},h('p',{class:'src'},'Thesis text, verbatim'),window.THESIS.works.blocks.map(x=>h('p',{style:'padding-left:1.6em;text-indent:-1.6em',html:C.greek(x.h)}))));}
  else if(which==='b'||which==='c'){(C.REF[which]||[]).forEach(b=>add(C.BLK[b.t](b)));}
  wrap.append(h('div',{style:'height:60px'}));
  focusMain();
}

/* ---------- design and alignment page ---------- */
function design(){
  currentId=null;setTitle('Design and alignment');
  const main=$('#main');main.innerHTML='';
  const wrap=h('div',{class:'wrap'});main.append(wrap);
  wrap.append(h('header',{class:'lesson-head'},h('div',{class:'count'},'For reviewers'),h('h1',null,'Design and alignment view'),h('hr',{class:'rule'}),h('p',{class:'meta'},'How this demo maps to the objectives, the activity and assessment map, and the layout and branding specifications. Turn on "ID view" in the top bar to see each block’s objective and assessment as you go.')));
  const A=el=>wrap.append(h('div',{class:'block prose'},el));
  const rows=window.OBJ;
  /* coverage */
  const built=rows.filter(r=>C.covered.has(r.id)).length;
  A(h('div',null,h('h2',null,'Coverage'),h('p',null,built+' of '+rows.length+' objectives have an activity or assessment built in this demo.'),
    rows.length-built?h('p',{class:'tnote'},'Not yet built: '+rows.filter(r=>!C.covered.has(r.id)).map(r=>r.id).join(', ')):h('p',{class:'tnote'},'Every objective ID in Activity_Assessment_Map.md has a corresponding block.')));
  /* CLO x module */
  const P={1:['P','P','S'],2:['S','S','P','S'],3:['','','S','P','P','S'],4:[,,,,,'S','P','P'],5:[,,,,,,'S','P','P']};
  const mat=[[1,'PPS'],[2,'SSPS'],[3,'  SPPS'],[4,'     SPP'],[5,'      SPP']];
  const mt=h('table',{class:'matrix'},h('thead',null,h('tr',null,h('th',null,'Outcome'),[1,2,3,4,5,6,7,8,9].map(n=>h('th',null,'M'+n)))));
  const tb=h('tbody');mat.forEach(([n,s])=>{const cells=[];for(let k=0;k<9;k++){const c=(s[k]||' ').trim();cells.push(h('td',{class:c==='P'?'P':null},c));}tb.append(h('tr',null,h('td',null,'CLO '+n+' ['+window.CLOS[n-1].lvl+']'),cells));});
  mt.append(tb);
  A(h('div',null,h('h2',null,'Course outcomes by module'),h('p',{class:'tnote'},'P = primary focus, S = supporting (from Learning_Objectives_by_Module.md). Module 9 is the summative.'),h('div',{class:'tablewrap'},mt)));
  /* level distribution */
  const lv=['R','U','Ap','An','E','C'];
  const dist=h('table',{class:'matrix'},h('thead',null,h('tr',null,h('th',null,'Module'),lv.map(x=>h('th',null,x)),h('th',null,'Total'),h('th',null,'Higher-order'))));
  const db=h('tbody');
  for(let n=1;n<=8;n++){const rs=rows.filter(r=>r.id[0]==String(n));const c=lv.map(x=>rs.filter(r=>r.lvl===x).length);const ho=c[3]+c[4]+c[5];db.append(h('tr',null,h('td',null,'Module '+n),c.map(v=>h('td',null,String(v))),h('td',null,String(rs.length)),h('td',null,Math.round(ho/rs.length*100)+'%')));}
  dist.append(db);
  A(h('div',null,h('h2',null,'Cognitive level by module'),h('p',{class:'tnote'},'Computed live from the objective map. Higher-order = Analyzing + Evaluating + Creating.'),h('div',{class:'tablewrap'},dist)));
  const codes=['SC','MC','MS','MATCH','SORT','PRED','REF'];
  const mix=h('table',{class:'matrix'},h('thead',null,h('tr',null,h('th',null,'Module'),codes.map(x=>h('th',null,x)),h('th',null,'Auto-graded'))));
  const mb=h('tbody');
  for(let n=1;n<=8;n++){const rs=rows.filter(r=>r.id[0]==String(n));const c=codes.map(x=>rs.filter(r=>r.asm===x).length);const g=rs.filter(r=>C.GRADED.indexOf(r.asm)>=0).length;mb.append(h('tr',null,h('td',null,'Module '+n),c.map(v=>h('td',null,String(v))),h('td',null,Math.round(g/rs.length*100)+'%')));}
  mix.append(mb);
  A(h('div',null,h('h2',null,'Assessment mix by module'),h('p',{class:'tnote'},C.GRADED.concat(['SC','PRED','REF']).filter((v,i,a)=>a.indexOf(v)===i).map(c=>c+' = '+C.ASM[c]).join(' · ')),h('div',{class:'tablewrap'},mix)));
  /* data flags */
  A(h('div',null,h('h2',null,'Source-data flags'),h('p',null,'The thesis text is reproduced verbatim, including figures that disagree with each other. The data-check tasks on these figures (objective 7.4-2, and objectives 8.2-2 and 8.2-3 for the optative counts) are below, on this page, rather than in a lesson. Nothing is silently corrected.'),
    C.tableEl({head:['Figure in the thesis','Conflict','Check'],rows:C.FLAGS,rowHead:true}),
    [['flags','7.4','7.4-2','Data-check task: Check the figures'],['flags82','8.2','8.2-2 and 8.2-3','Data-check task: Check the optative figures']].map(f=>h('div',null,
      h('h3',{style:'margin-top:var(--space-6)'},f[3]),
      h('p',{class:'tnote'},'Moved from Lesson '+C.label(f[1])+' '+C.lessonMeta(f[1]).title+' (objective'+(f[2].indexOf(' and ')>0?'s ':' ')+f[2]+').'),
      C.lessons[f[0]].blocks.map(b=>C.BLK[b.t](b,{lesson:{id:f[1]},release:()=>{}}))))));
  /* per-module map */
  for(let n=1;n<=8;n++){
    const m=C.modules[n];
    const rs=rows.filter(r=>r.id[0]==String(n));
    A(h('div',null,h('h2',null,'Module '+n+': '+m.title+(m.optional?' (optional)':'')),
      C.tableEl({head:['ID','Level','Objective','Activity','Assessment'],rows:rs.map(r=>[
        C.covered.has(r.id)?'<a href="#/lesson/'+r.id.split('-')[0]+'">'+r.id+'</a>':r.id+' <em>(not built)</em>',r.lvl,r.obj,r.act,'<b>'+r.asm+'</b>'+(r.note?'<br><span class="tnote">'+r.note+'</span>':'')])})));
  }
  A(h('div',null,h('h2',null,'Specifications used'),h('ul',null,
    h('li',null,'Layout: Course_Layout_Specifications.md (920 px container, top bar with 4 px progress bar, drawer navigation, skip link, continue gates, 44 px touch targets, reduced-motion support).'),
    h('li',null,'Branding: Course_Branding_Guide_Starter.md (Classical Study tokens, Lato and Merriweather, Gentium Plus for Greek, outline icons, patterned chart series).'),
    h('li',null,'Interaction decisions: reflections are optional and unscored; the Module 9 capstone self-check is the one required reflection; matching, sorting and reordering use menus and buttons so they work by keyboard.'),
    h('li',null,'Not built: SCORM/xAPI packaging, audio and video, drag-and-drop layers, photographs.'))));
  wrap.append(h('div',{style:'height:60px'}));
  focusMain();
}

/* ---------- router ---------- */
function route(){
  closeDrawer&&drawer.classList.contains('open')&&closeDrawer();
  const hs=location.hash||'#/';
  let m;
  if((m=hs.match(/^#\/lesson\/([\d.]+)/)))lesson(m[1]);
  else if(hs==='#/design')design();
  else if((m=hs.match(/^#\/ref\/(a|b|c|works)$/)))refPage(m[1]);
  else cover();
  buildDrawer();
}
window.addEventListener('hashchange',route);
setAnnot(!!S.annot);
setTheme(S.theme?S.theme==='dark':sysDark(),false);
C.updateProgress();
route();
})();

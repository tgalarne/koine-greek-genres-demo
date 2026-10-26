/* Content block renderers: text, media-free display blocks and learning-activity blocks */
(function(){
'use strict';
const C=window.C,h=C.h,B=C.BLK;
let UID=0;const uid=()=>++UID;
C.uid=uid;

const objRow=id=>(window.OBJ||[]).find(o=>o.id===id);
C.objRow=objRow;

/* alignment chips shown in "ID view" */
C.annot=function(b,kind){
  if(!b.obj)return null;
  const ids=[].concat(b.obj);
  const box=h('div',{class:'annot','aria-label':'Instructional design annotation'});
  ids.forEach(id=>{
    const r=objRow(id);if(!r)return;
    box.append(h('span',{class:'chip'},'Objective '+id),h('span',{class:'chip lv-'+r.lvl},r.lvl+' · '+C.LV[r.lvl]));
    if(kind==='check')box.append(h('span',{class:'chip'},'Assessment: '+r.asm+' · '+C.ASM[r.asm]));
    else box.append(h('span',{class:'chip'},'Activity: '+r.act));
  });
  return box;
};

function wrapGreek(html){return C.greek(html);}
C.sec=function(b,inner,opts){
  const el=h('section',{class:'block'+(opts&&opts.prose?' prose':'')});
  if(b.h)el.append(h('h2',null,b.h));
  const a=C.annot(b,(opts&&opts.kind)||'act');if(a)el.append(a);
  [].concat(inner).forEach(x=>x&&el.append(x));
  return el;
};

/* ---------- verbatim thesis text ---------- */
B.thesis=function(b){
  const T=window.THESIS[b.id];
  if(!T)return h('p',null,'[missing thesis text '+b.id+']');
  const id=uid();
  let blocks=T.blocks.slice(b.from||0,b.to==null?undefined:b.to)
  if(b.noTables)blocks=blocks.filter(x=>x.t!=='table');
  /* moveToNext: a trailing sentence is carried to the start of the following paragraph */
  if(b.moveToNext){
    blocks.forEach((x,i)=>{
      if(x.t!=='p'||!blocks[i+1]||blocks[i+1].t!=='p')return;
      const k=x.h.indexOf(b.moveToNext);
      if(k>0){blocks[i+1]=Object.assign({},blocks[i+1],{h:x.h.slice(k)+' '+blocks[i+1].h});blocks[i]=Object.assign({},x,{h:x.h.slice(0,k).trim()});}
    });
  }
  /* pullUp: the first sentence of a paragraph that begins with this text is carried up to the end of the paragraph before it */
  if(b.pullUp){
    blocks.forEach((x,i)=>{
      if(i<1||x.t!=='p'||x.h.indexOf(b.pullUp)!==0||blocks[i-1].t!=='p')return;
      const k=x.h.search(/[.!?](\s|$)/)+1;
      if(k>0){blocks[i-1]=Object.assign({},blocks[i-1],{h:blocks[i-1].h+' '+x.h.slice(0,k)});blocks[i]=Object.assign({},x,{h:x.h.slice(k).trim()});}
    });
  }
  /* stopBefore / startAt: the text block ends before, or begins at, the given text, so one paragraph can be shared between two text blocks */
  if(b.stopBefore){
    const k=blocks.findIndex(x=>x.t==='p'&&x.h.indexOf(b.stopBefore)>=0);
    if(k>=0){const x=blocks[k];blocks.splice(k+1);blocks[k]=Object.assign({},x,{h:x.h.slice(0,x.h.indexOf(b.stopBefore)).trim()});}
  }
  if(b.startAt){
    const k=blocks.findIndex(x=>x.t==='p'&&x.h.indexOf(b.startAt)>=0);
    if(k>=0){const x=blocks[k];blocks.splice(0,k);blocks[0]=Object.assign({},x,{h:x.h.slice(x.h.indexOf(b.startAt))});}
  }
  const root=h('section',{class:'block verbatim prose'+(b.plain?' plain':'')+(b.nobar?' nobar':'')});
  if(!b.plain&&(b.label||!b.from))root.append(h('p',{class:'src'},b.label||'Thesis text, verbatim'));
  const used=[];
  const sup=html=>html.replace(/<sup>(\d+[a-z]?)<\/sup>/g,(m,n)=>{if(used.indexOf(n)<0)used.push(n);return '<sup><a href="#" data-fn="'+id+'-'+n+'" aria-label="Footnote '+n+'" id="r-'+id+'-'+n+'">'+n+'</a></sup>';});
  let ul=null,tier=null;
  const closeLists=()=>{ul=null;tier=null;};
  blocks.forEach(x=>{
    if(x.t==='li'){ if(!ul){ul=h('ul');root.append(ul);} ul.append(h('li',{html:wrapGreek(sup((b.italicLi||[]).reduce((t,w)=>t.replace(w,'<em>'+w+'</em>'),x.h)))})); return; }
    if(x.t==='tier'){ if(!tier){tier=h('ul',{class:'tierlist','aria-label':'Class hierarchy'});root.append(tier);} const m=x.h.match(/^(\d+(?:\.\d+)?)/);const depth=(m[1].match(/\./g)||[]).length;const li=h('li',{class:'tier',style:'padding-left:'+(depth*26)+'px'},x.h);tier.append(li);return; }
    closeLists();
    if(x.t==='h')root.append(h('h2',{class:'sub'},x.h));
    else if(x.t==='q')root.append(h('blockquote',{html:wrapGreek(sup(x.h))}));
    else if(x.t==='table'){const t=C.TABLES[b.id+'#'+x.n];root.append(t?C.tableEl(t):h('p',null,'[table '+b.id+'#'+x.n+']'));}
    else{
      let parts=[x.h];
      (b.splitAt||[]).forEach(s=>{parts=parts.flatMap(p=>{const i=p.indexOf(s);return i>0?[p.slice(0,i).trim(),p.slice(i)]:[p];});});
      /* pullQuote: an inline quotation (from the given opening text to its closing mark and note) becomes its own blockquote */
      (b.pullQuote||[]).forEach(s=>{parts=parts.flatMap(p=>{
        if(typeof p!=='string')return [p];
        const i=p.indexOf(s);if(i<0)return [p];
        const m=p.slice(i).match(/^[^”]*”(<sup>\d+[a-z]?<\/sup>)?/);if(!m)return [p];
        return [p.slice(0,i).trim(),{q:m[0]},p.slice(i+m[0].length).trim()].filter(z=>z);
      });});
      parts.forEach(p=>{
        if(typeof p!=='string'){root.append(h('blockquote',{html:wrapGreek(sup(p.q))}));return;}
        const bl=(b.bullets||[]).find(x=>p.indexOf(x.from)>=0);
        if(!bl){root.append(h('p',{html:wrapGreek(sup(p))}));return;}
        const i=p.indexOf(bl.from),before=p.slice(0,i).trim()+(bl.colon?':':''),after=p.slice(i+bl.from.length).trim();
        if(before)root.append(h('p',{html:wrapGreek(sup(before))}));
        root.append(h('ul',null,bl.items.map(t=>h('li',null,t))));
        if(after)root.append(h('p',{html:wrapGreek(sup(after))}));
      });
    }
  });
  /* notes: include footnotes referenced inside notes (e.g. 33a-d) */
  let ids=used.slice(),i=0;
  while(i<ids.length){(String(T.notes[ids[i]]||'').match(/<sup>(\d+[a-z]?)<\/sup>/g)||[]).forEach(s=>{const n=s.replace(/<\/?sup>/g,'');if(ids.indexOf(n)<0)ids.push(n);});i++;}
  if(ids.length){
    ids.sort((a,b)=>parseInt(a)-parseInt(b)||a.localeCompare(b));
    const ol=h('ol');
    ids.forEach(n=>ol.append(h('li',{id:'fn-'+id+'-'+n,tabindex:'-1',html:'<b>'+n+'</b> '+wrapGreek(String(T.notes[n]||'').replace(/<sup>(\d+[a-z]?)<\/sup>/g,'<b>$1</b>'))})));
    root.append(h('details',{class:'notes',id:'notes-'+id},h('summary',null,'Notes ('+ids.length+')'),ol));
  }
  return root;
};

/* ---------- authored text and simple display blocks ---------- */
B.text=function(b){return C.sec(b,h('div',{html:wrapGreek(b.html)}),{prose:true});};
B.impact=function(b){return h('section',{class:'block'},h('div',{class:'impact'+(b.cite?'':' solo'),html:wrapGreek(b.html)+(b.cite?'<cite>'+b.cite+'</cite>':'')}));};
B.quote=function(b){return h('section',{class:'block'},h('blockquote',{class:'pullquote',html:wrapGreek(b.html)+(b.cite?'<cite>'+b.cite+'</cite>':'')}));};
B.callout=function(b){return h('section',{class:'block prose'},C.annot(b,'act'),h('div',{class:'callout '+(b.kind||'')},b.k?h('span',{class:'k'},b.k):null,h('div',{html:wrapGreek(b.html)})));};
B.list=function(b){return C.sec(b,h(b.ordered?'ol':'ul',{class:'prose'},b.items.map(i=>h('li',{html:wrapGreek(i)}))),{prose:true});};
B.numdiv=function(b){return h('section',{class:'block'},h('div',{class:'numdiv'},h('span',{class:'num','aria-hidden':'true'},b.n),h('h2',null,b.h)));};
B.heading=function(b){return h('section',{class:'block'},h('h2',null,b.h));};
B.hr=function(){return h('hr',{class:'divider'});};

C.tableEl=function(t){
  const num=t.num||[];
  const w=h('div',{class:'tablewrap'});
  const th=t.head.map((x,i)=>'<th scope="col" class="'+(num.indexOf(i)>=0?'n':'')+'">'+x+'</th>').join('');
  const tr=t.rows.map((r,ri)=>'<tr class="'+((t.flag||[]).indexOf(ri)>=0?'flag':'')+'">'+r.map((c,i)=>(i===0&&t.rowHead?'<th scope="row">':'<td class="'+(num.indexOf(i)>=0?'n':'')+'">')+c+(i===0&&t.rowHead?'</th>':'</td>')).join('')+'</tr>').join('');
  w.innerHTML='<table class="data">'+(t.caption?'<caption>'+C.greek(t.caption)+'</caption>':'')+'<thead><tr>'+th+'</tr></thead><tbody>'+tr+'</tbody></table>'+(t.note?'<p class="tnote">'+C.greek(t.note)+'</p>':'');
  w.innerHTML=C.greek(w.innerHTML);
  return w;
};
B.table=function(b){return C.sec(b,C.tableEl(b),{prose:true});};
B.chart=function(b){const spec=Object.assign({uid:uid()},b);return C.sec({h:b.hh,obj:b.obj},C.chart(spec));};
B.map=function(b){return C.sec(b,C.map());};

B.timeline=function(b){
  return C.sec(b,h('ol',{class:'tl'},b.items.map(i=>h('li',null,h('span',{class:'date'},i.d),h('h3',null,i.t),i.p?h('p',{html:wrapGreek(i.p)}):null))));
};
B.cards=function(b){
  return C.sec(b,h('div',{class:'cards'+(b.items.length===4?' g4':'')},b.items.map(i=>h('div',{class:'card'},
    i.badge?h('span',{class:'badge '+(i.badge==='Documented'?'doc':'inf')},(i.badge==='Documented'?'✔ ':'? ')+i.badge):null,
    h('h3',{html:i.h}),h('div',{html:wrapGreek(i.html||'')})))));
};
B.pair=function(b){
  return C.sec(b,h('div',{class:'pair'},[b.a,b.b].map(s=>h('figure',{class:'specimen '+(s.cls||''),style:'margin:0'},h('figcaption',null,s.cap),h('div',{html:wrapGreek(s.html)})))));
};

/* ---------- seat time table for a module overview ---------- */
B.seattime=function(b){
  const m=C.modules.find(x=>x.n===b.mod);
  const rows=m.lessons.filter(l=>!/\.0$/.test(l.id)).map(l=>['<a href="#/lesson/'+l.id+'">'+C.label(l.id)+' '+l.title+'</a>',(C.LESSON_MIN[l.id]||0)+' min']);
  const total=C.MODULE_MIN[b.mod];
  return h('section',{class:'block prose'},h('h2',null,'Completion time'),
    h('p',null,h('strong',null,'Total completion time for this module: '+total+' minutes.'),m.optional?' This module is optional.':''),
    C.tableEl({caption:'Anticipated completion time by lesson',head:['Lesson','Completion time'],num:[1],rows:rows.concat([['<strong>Total</strong>','<strong>'+total+' min</strong>']]),note:'Estimates for planning; actual time varies with the learner.'}));
};

/* ---------- placeholder for an activity still to be written ---------- */
B.placeholder=function(b){
  return h('section',{class:'block'},h('div',{class:'placeholder',role:'note'},h('strong',null,b.label||'Placeholder'),b.note?h('p',null,b.note):null));
};

/* ---------- gate (continue) ---------- */
B.gate=function(b,ctx){
  const wrap=h('div',{class:'continue-wrap'});
  const btn=h('button',{class:'btn continue',type:'button',onclick:()=>{wrap.remove();ctx.release();}},b.label||'Continue');
  wrap.append(btn);return wrap;
};

/* ---------- objectives (auto from the objectives map) ---------- */
/* numbered outcome/objective cards (same format as the course outcomes) */
function outcomeList(items){
  return h('ol',{class:'clo-list'},items.map((o,i)=>h('li',null,h('span',{class:'n'},String(i+1)),h('span',null,h('span',{html:wrapGreek(o.text)}),' ',h('span',{class:'chip idonly',title:C.LV[o.lvl]},o.lvl)))));
}
B.outcomes=function(b){
  return h('section',{class:'block prose'},h('h2',null,b.h||'What you will be able to do'),outcomeList(b.items||window.CLOS),
    h('p',{class:'tnote idonly'},'Levels follow the revised Bloom taxonomy: R remembering, U understanding, Ap applying, An analyzing, E evaluating, C creating.'));
};
B.objectives=function(b,ctx){
  const rows=(window.OBJ||[]).filter(o=>o.id.indexOf(ctx.lesson.id+'-')===0);
  if(!rows.length)return null;
  return h('section',{class:'block prose idonly'},h('h2',null,'What you will be able to do'),outcomeList(rows.map(r=>({text:r.obj,lvl:r.lvl}))),
    h('p',{class:'tnote idonly'},'Levels follow the revised Bloom taxonomy: R remembering, U understanding, Ap applying, An analyzing, E evaluating, C creating.'));
};

/* ---------- flashcards (self-check) ---------- */
B.flash=function(b){
  const grid=h('div',{class:'fc-grid'+(b.cards.length===4?' g4':'')});
  const sum=h('p',{class:'fc-sum','aria-live':'polite'},'Self-check: 0 of '+b.cards.length+' marked "Got it"');
  const got=new Set();
  b.cards.forEach((c,i)=>{
    const id=uid();
    const front=h('div',{class:'face front','aria-hidden':'false'},h('div',{class:'t'},h('span',{html:wrapGreek(c[0])})),h('div',{class:'hint'},'Click to flip'));
    const back=h('div',{class:'face back','aria-hidden':'true'},h('div',{class:'b'},h('span',{html:wrapGreek(c[1])})),h('div',{class:'hint'},'Answer'));
    const flipBtn=h('button',{type:'button','aria-pressed':'false','aria-label':'Flashcard '+(i+1)+' of '+b.cards.length+'. Press to flip.',onclick:()=>{
      const f=card.classList.toggle('flipped');
      flipBtn.setAttribute('aria-pressed',f?'true':'false');
      front.setAttribute('aria-hidden',f?'true':'false');back.setAttribute('aria-hidden',f?'false':'true');
      flipBtn.setAttribute('aria-label','Flashcard '+(i+1)+', '+(f?'back':'front')+' showing. Press to flip.');
    }},h('div',{class:'in'},front,back));
    const gotBtn=h('button',{type:'button','aria-pressed':'false',onclick:()=>{const on=gotBtn.getAttribute('aria-pressed')!=='true';gotBtn.setAttribute('aria-pressed',on);if(on){got.add(i);againBtn.setAttribute('aria-pressed','false');}else got.delete(i);sum.textContent='Self-check: '+got.size+' of '+b.cards.length+' marked "Got it"';}},'Got it');
    const againBtn=h('button',{type:'button','aria-pressed':'false',onclick:()=>{const on=againBtn.getAttribute('aria-pressed')!=='true';againBtn.setAttribute('aria-pressed',on);if(on){got.delete(i);gotBtn.setAttribute('aria-pressed','false');sum.textContent='Self-check: '+got.size+' of '+b.cards.length+' marked "Got it"';}}},'Review again');
    const card=h('div',{class:'fc'},flipBtn,h('div',{class:'rate'},gotBtn,againBtn));
    grid.append(card);
  });
  return C.sec(b,[grid,sum]);
};

/* ---------- accordion ---------- */
B.acc=function(b){
  const root=h('div',{class:'acc'});
  b.items.forEach((it,i)=>{
    const id=uid();
    const panel=h('div',{class:'panel',id:'ap'+id,role:'region','aria-labelledby':'ab'+id,html:wrapGreek(it.html)});
    const open=false;
    panel.hidden=!open;
    const btn=h('button',{type:'button',id:'ab'+id,'aria-expanded':open?'true':'false','aria-controls':'ap'+id,onclick:()=>{const ex=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',!ex);panel.hidden=ex;}},h('span',{html:wrapGreek(it.h)}),h('span',{class:'pm','aria-hidden':'true'}));
    root.append(h('div',{class:'acc-item'},h('h3',null,btn),panel));
  });
  return C.sec(b,root);
};

/* ---------- tabs ---------- */
B.tabs=function(b){
  const id=uid();
  const list=h('div',{class:'tablist',role:'tablist','aria-label':b.label||b.h||'Tabs'});
  const tabs=[],panels=[];
  function sel(i,focus){tabs.forEach((t,k)=>{t.setAttribute('aria-selected',k===i);t.tabIndex=k===i?0:-1;panels[k].hidden=k!==i;});if(focus)tabs[i].focus();}
  b.items.forEach((it,i)=>{
    const t=h('button',{role:'tab',type:'button',id:'t'+id+'-'+i,'aria-controls':'p'+id+'-'+i,onclick:()=>sel(i),onkeydown:e=>{const n=b.items.length;if(e.key==='ArrowRight'){e.preventDefault();sel((i+1)%n,true);}else if(e.key==='ArrowLeft'){e.preventDefault();sel((i-1+n)%n,true);}else if(e.key==='Home'){e.preventDefault();sel(0,true);}else if(e.key==='End'){e.preventDefault();sel(n-1,true);}}},it.h);
    const p=h('div',{role:'tabpanel',id:'p'+id+'-'+i,'aria-labelledby':'t'+id+'-'+i,tabindex:'0',html:wrapGreek(it.html)});
    tabs.push(t);panels.push(p);list.append(t);
  });
  const root=h('div',{class:'tabs'},list,panels);
  sel(0);
  return C.sec(b,root);
};

/* ---------- process (stepper) ---------- */
B.process=function(b){
  const cards=[];
  const start=h('div',{class:'pcard pstart',html:'<h3>'+(b.start&&b.start.h||b.h||'Process')+'</h3><p>'+(b.start&&b.start.html||'Step through the process one card at a time.')+'</p>'});
  cards.push(start);
  b.steps.forEach((s,i)=>cards.push(h('div',{class:'pcard step',html:'<span class="num" aria-hidden="true">'+(i+1)+'</span><h3>'+s.h+'</h3>'+wrapGreek(s.html)})));
  if(b.summary)cards.push(h('div',{class:'pcard step',html:'<h3>'+b.summary.h+'</h3>'+wrapGreek(b.summary.html)}));
  let i=0;
  const pos=h('span',{class:'pos','aria-live':'polite'}),prev=h('button',{class:'round',type:'button','aria-label':'Previous step',html:C.icon('chevL'),onclick:()=>go(i-1)}),next=h('button',{class:'round',type:'button','aria-label':'Next step',html:C.icon('chevR'),onclick:()=>go(i+1)});
  const again=h('button',{class:'btn small secondary',type:'button',onclick:()=>go(0)},'Start again'),startBtn=h('button',{class:'btn small',type:'button',onclick:()=>go(1)},'Start');
  function go(n){
    i=Math.max(0,Math.min(cards.length-1,n));
    cards.forEach((c,k)=>c.classList.toggle('off',k!==i));
    prev.disabled=i===0;next.disabled=i===cards.length-1;
    startBtn.style.display=i===0?'':'none';again.style.display=i===cards.length-1?'':'none';
    pos.textContent=i===0?'Introduction':(i===cards.length-1&&b.summary?'Summary':'Step '+i+' of '+b.steps.length);
  }
  const root=h('div',{class:'process',role:'group','aria-roledescription':'process stepper','aria-label':b.h||'Process',onkeydown:e=>{if(e.key==='ArrowRight')go(i+1);if(e.key==='ArrowLeft')go(i-1);}},cards,h('div',{class:'pnav'},prev,pos,startBtn,again,next));
  go(0);
  return C.sec(b,root);
};
})();

/* Assessment and reflection blocks. Every drag-style task has a keyboard path (selects, buttons). */
(function(){
'use strict';
const C=window.C,h=C.h,B=C.BLK,S=C.S;
const G=html=>C.greek(html);
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
C.shuffle=shuffle;
const same=(a,b)=>a.length===b.length&&a.every(x=>b.indexOf(x)>=0);

function record(key,ok,extra){
  if(!key)return;
  const p=S.items[key]||{tries:0};
  S.items[key]=Object.assign({},p,{ok:ok,tries:(p.tries||0)+1,first:p.first==null?ok:p.first},extra||{});
  C.save();C.updateScore&&C.updateScore();
}
function verdict(box,ok,html,label){
  box.className='verdict show '+(ok?'ok':'no');
  box.innerHTML='<div class="v">'+C.icon(ok?'check':'cross',22)+'<span>'+(label||(ok?'Correct':'Incorrect'))+'</span></div>'+(html?'<div>'+G(html)+'</div>':'');
}

/* ---------- multiple choice / multiple response ---------- */
function mcBody(b,opts){
  opts=opts||{};
  const key=b.key||b.obj;
  const multi=b.ans.length>1||b.multi;
  const id=C.uid();
  const form=h('fieldset');
  form.append(h('legend',{html:G(b.q)}));
  if(multi)form.append(h('p',{class:'tnote',style:'margin:-6px 0 10px'},'Select all that apply.'));
  const inputs=[],labels=[];
  b.opts.forEach((o,i)=>{
    const inp=h('input',{type:multi?'checkbox':'radio',name:'q'+id,value:i,onchange:()=>{submit.disabled=!inputs.some(x=>x.checked);submit.setAttribute('aria-disabled',submit.disabled);}});
    const res=h('span',{class:'res'});
    const lab=h('label',{class:'opt'},inp,h('span',{class:'lbl',html:G(o)},res));
    lab.querySelector('.lbl').append(res);
    inputs.push(inp);labels.push({lab,res});form.append(lab);
  });
  const box=h('div',{class:'verdict','aria-live':'polite'});
  const submit=h('button',{class:'btn small',type:'button',disabled:true,'aria-disabled':'true',onclick:()=>{
    const sel=inputs.map((x,i)=>x.checked?i:-1).filter(i=>i>=0);
    const ok=same(sel,b.ans);
    inputs.forEach((x,i)=>{
      x.disabled=true;
      const isSel=sel.indexOf(i)>=0,isAns=b.ans.indexOf(i)>=0;
      const {lab,res}=labels[i];
      lab.classList.remove('good','bad');
      if(isSel&&isAns){lab.classList.add('good');res.textContent='✔ Correctly selected';}
      else if(isSel&&!isAns){lab.classList.add('bad');res.textContent='✘ Incorrectly selected';}
      else if(!isSel&&isAns){lab.classList.add('bad');res.textContent=multi?'✘ Incorrectly unselected':'✘ This was the correct answer';}
    });
    verdict(box,ok,ok?(b.fbOK||b.fb):(b.fbNo||b.fb));
    submit.hidden=true;
    if(opts.onSubmit){opts.onSubmit(ok,sel);}
    else{again.hidden=false;}
    if(!opts.noRecord)record(key,ok);
    C.live(ok?'Correct.':'Incorrect.');
  }},'Submit');
  const again=h('button',{class:'btn small secondary',type:'button',hidden:true,onclick:()=>{
    inputs.forEach(x=>{x.checked=false;x.disabled=false;});labels.forEach(l=>{l.lab.classList.remove('good','bad');l.res.textContent='';});
    box.className='verdict';box.innerHTML='';submit.hidden=false;submit.disabled=true;again.hidden=true;
  }},'Take again');
  return {form,box,actions:h('div',{class:'actions'},submit,again)};
}
B.mc=function(b){
  const m=mcBody(b);
  const el=h('section',{class:'block'},C.annot(b,'check'),h('div',{class:'check'},m.form,m.actions,m.box));
  return el;
};
C.mcBody=mcBody;

/* ---------- matching (graded; dropdown per item = keyboard alternative to dragging) ---------- */
B.match=function(b){
  const id=C.uid();
  const rows=[],box=h('div',{class:'verdict','aria-live':'polite'});
  const wrap=h('div');
  b.left.forEach((l,i)=>{
    const sel=h('select',{id:'m'+id+'-'+i,'aria-label':'Match for: '+l.replace(/<[^>]+>/g,''),onchange:()=>{submit.disabled=!rows.every(r=>r.sel.value!=='');submit.setAttribute('aria-disabled',submit.disabled);}},
      h('option',{value:''},'Choose…'),b.right.map((r,k)=>h('option',{value:k},r.replace(/<[^>]+>/g,''))));
    const res=h('span',{class:'res'});
    const row=h('div',{class:'sel-row'},h('label',{for:'m'+id+'-'+i,html:G(l)}),sel,res);
    rows.push({row,sel,res});wrap.append(row);
  });
  const submit=h('button',{class:'btn small',type:'button',disabled:true,'aria-disabled':'true',onclick:()=>{
    let n=0;
    rows.forEach((r,i)=>{const ok=parseInt(r.sel.value,10)===b.ans[i];if(ok)n++;r.row.classList.remove('good','bad');r.row.classList.add(ok?'good':'bad');r.sel.disabled=true;r.res.textContent=ok?'✔ Correct':'✘ Incorrect. Correct match: '+b.right[b.ans[i]].replace(/<[^>]+>/g,'');});
    const ok=n===b.left.length;
    verdict(box,ok,(ok?'':n+' of '+b.left.length+' matched correctly. ')+(b.fb||''),ok?'Correct':'Incorrect');
    submit.hidden=true;again.hidden=false;record(b.key||b.obj,ok,{pct:n/b.left.length});C.live(ok?'All matches correct.':n+' of '+b.left.length+' correct.');
  }},'Submit');
  const again=h('button',{class:'btn small secondary',type:'button',hidden:true,onclick:()=>{rows.forEach(r=>{r.sel.value='';r.sel.disabled=false;r.row.classList.remove('good','bad');r.res.textContent='';});box.className='verdict';box.innerHTML='';submit.hidden=false;submit.disabled=true;again.hidden=true;}},'Take again');
  return h('section',{class:'block'},C.annot(b,'check'),h('div',{class:'check'},h('p',{class:'prose',style:'font-size:var(--text-lg);font-weight:700',html:G(b.q)}),h('p',{class:'tnote'},'Use the menu beside each item to choose its match. No dragging is needed.'),wrap,h('div',{class:'actions'},submit,again),box));
};

/* ---------- sorting (binary piles; select a pile for the current card) ---------- */
B.sort=function(b){
  let deck,placed,wrong,first;
  const card=h('div',{class:'sort-card',role:'group','aria-label':'Current card','aria-live':'polite'});
  const cnt=h('span',{class:'sort-cnt'});
  const list=h('ul',{class:'sorted','aria-label':'Cards already sorted'});
  const msg=h('p',{class:'tnote',role:'status','aria-live':'polite',style:'min-height:20px;margin:6px 0'});
  const box=h('div',{class:'verdict','aria-live':'polite'});
  const pb=b.piles.map((p,k)=>h('button',{class:'pile',type:'button','aria-label':'Place the card in: '+p,onclick:()=>drop(k)},p));
  const replay=h('button',{class:'btn small secondary',type:'button',onclick:()=>init()},'Replay');
  function init(){deck=shuffle(b.cards.map((c,i)=>i));placed=0;wrong=0;first=0;list.innerHTML='';box.className='verdict';box.innerHTML='';msg.textContent='';pb.forEach(x=>x.disabled=false);show();}
  function show(){
    cnt.textContent=placed+'/'+b.cards.length+' Cards Correct';
    if(!deck.length){card.innerHTML='<span>All cards sorted</span>';pb.forEach(x=>x.disabled=true);return;}
    card.innerHTML=G(b.cards[deck[0]][0]);card.setAttribute('aria-label','Current card: '+card.textContent);
  }
  function drop(k){
    const i=deck[0],c=b.cards[i];
    if(c[1]===k){
      if(!card.dataset.miss)first++;
      card.dataset.miss='';
      placed++;deck.shift();
      list.append(h('li',{html:'✔ '+G(c[0])+' → <b>'+b.piles[k]+'</b>'+(c[2]?' · '+G(c[2]):'')}));
      msg.textContent='Correct: '+card.textContent+' goes in "'+b.piles[k]+'".';
      show();
      if(!deck.length){const ok=wrong===0;verdict(box,true,'You sorted all '+b.cards.length+' cards. '+first+' were correct on the first try. '+(b.fb||''),'Complete');record(b.key||b.obj,first/b.cards.length>=0.8,{pct:first/b.cards.length});C.live('All cards sorted.');}
    }else{
      wrong++;card.dataset.miss='1';
      card.classList.remove('bounce');void card.offsetWidth;card.classList.add('bounce');
      msg.textContent='✘ Not in "'+b.piles[k]+'". The card bounced back. Try the other pile.';
      C.live('Incorrect. Card returned to the deck.');
    }
  }
  init();
  return h('section',{class:'block'},C.annot(b,'check'),h('div',{class:'check'},h('p',{class:'prose',style:'font-size:var(--text-lg);font-weight:700',html:G(b.q)}),h('p',{class:'tnote'},'Read the card, then choose the pile it belongs in. Each pile is a button, so the whole activity works by keyboard.'),
    h('div',{class:'sort-area'},card,h('div',{class:'piles',role:'group','aria-label':'Piles'},pb),msg,h('div',{style:'display:flex;justify-content:space-between;align-items:center;gap:10px'},cnt,replay),list,box)));
};

/* ---------- reorder (move up/down buttons) ---------- */
B.reorder=function(b){
  const rounds=b.rounds;let r=0;
  const prompt=h('p',{class:'prose',style:'font-size:var(--text-lg);font-weight:700',html:G(b.q)});
  const rp=h('p',{class:'tnote',style:'font-weight:700'});
  const ul=h('ul',{class:'ro'});
  const box=h('div',{class:'verdict','aria-live':'polite'});
  let order=[];
  const check=h('button',{class:'btn small',type:'button',onclick:()=>{
    let n=0;
    [...ul.children].forEach((li,i)=>{const ok=order[i]===rounds[r].items[i];if(ok)n++;li.classList.remove('good','bad');li.classList.add(ok?'good':'bad');li.querySelector('.res').textContent=ok?'✔ Correct position':'✘ Not here';});
    const ok=n===rounds[r].items.length;
    verdict(box,ok,(ok?'':n+' of '+rounds[r].items.length+' in the right place. ')+(rounds[r].fb||''),ok?'Correct':'Incorrect');
    if(ok){check.hidden=true;if(r<rounds.length-1)nextBtn.hidden=false;else record(b.key||b.obj,true);}
    else record(b.key||b.obj+'#r'+r,false);
    C.live(ok?'Correct order.':n+' of '+rounds[r].items.length+' correct.');
  }},'Check order');
  const nextBtn=h('button',{class:'btn small',type:'button',hidden:true,onclick:()=>{r++;load();}},'Next round');
  const reset=h('button',{class:'btn small secondary',type:'button',onclick:()=>{r=0;load();}},'Start again');
  function load(){
    order=shuffle(rounds[r].items);
    if(order.join('|')===rounds[r].items.join('|'))order.reverse();
    rp.textContent='Round '+(r+1)+' of '+rounds.length+': '+rounds[r].label;
    box.className='verdict';box.innerHTML='';check.hidden=false;nextBtn.hidden=true;draw();
  }
  function draw(){
    ul.innerHTML='';
    order.forEach((t,i)=>{
      const up=h('button',{type:'button','aria-label':'Move up: '+t.replace(/<[^>]+>/g,''),disabled:i===0,html:'▲',onclick:()=>{[order[i-1],order[i]]=[order[i],order[i-1]];draw();ul.children[i-1].querySelector('button:not(:disabled)')&&ul.children[i-1].querySelector('button[aria-label^="Move up"]:not(:disabled), button[aria-label^="Move down"]:not(:disabled)').focus();}});
      const dn=h('button',{type:'button','aria-label':'Move down: '+t.replace(/<[^>]+>/g,''),disabled:i===order.length-1,html:'▼',onclick:()=>{[order[i+1],order[i]]=[order[i],order[i+1]];draw();const nb=ul.children[i+1].querySelector('button[aria-label^="Move down"]:not(:disabled), button[aria-label^="Move up"]:not(:disabled)');nb&&nb.focus();}});
      ul.append(h('li',null,h('span',{class:'tx'},h('span',{html:(i+1)+'. '+G(t)}),h('br'),h('span',{class:'res'})),h('span',{class:'mv'},up,dn)));
    });
  }
  load();
  return h('section',{class:'block'},C.annot(b,'check'),h('div',{class:'check'},prompt,rp,ul,h('div',{class:'actions'},check,nextBtn,reset),box));
};

/* ---------- optional reflection (REF) ---------- */
B.ref=function(b){
  const key=b.key||b.obj;
  const ta=h('textarea',{id:'ta'+C.uid(),'aria-label':'Your response (optional)',placeholder:'Write your response here. It stays in this browser and is not scored.'});
  ta.value=(S.refl[key]||'');
  const rev=h('div',{class:'reveal',hidden:true});
  const btn=h('button',{class:'btn small',type:'button',disabled:!ta.value.trim(),onclick:()=>{rev.hidden=false;btn.hidden=true;ta.readOnly=true;rev.querySelector('h3').focus();}},'Commit and show model answer');
  ta.addEventListener('input',()=>{S.refl[key]=ta.value;C.save();btn.disabled=!ta.value.trim();});
  const model=h('div',{class:'model'},h('p',{html:'<b>Model answer</b>'}),h('div',{html:G(b.model)}));
  const rub=h('ul',{class:'rubric','aria-label':'Self-assessment checklist'},(b.rubric||[]).map((r,i)=>h('li',null,h('label',null,h('input',{type:'checkbox'}),h('span',{html:G(r)})))));
  rev.append(h('h3',{tabindex:'-1',style:'font-size:var(--text-lg);margin-bottom:8px'},'Compare your answer'),model,h('p',{html:'<b>Rubric: tick what your answer did</b>'}),rub,h('p',{class:'tnote'},'This is self-assessed. It is not scored and does not count toward the pass score or lesson completion.'));
  return h('section',{class:'block'},C.annot(b,'check'),h('div',{class:'ref'},h('div',{class:'qtype'},'Optional reflection · Not graded'),h('p',{class:'prose',style:'font-size:var(--text-lg);font-weight:700;margin:0 0 8px',html:G(b.q)}),b.hint?h('p',{class:'tnote',html:G(b.hint)}):null,ta,h('div',{class:'actions'},btn),rev));
};

/* ---------- predict, then reveal (gate) ---------- */
B.predict=function(b,ctx){
  const id=C.uid();
  const inputs=[];
  const form=h('fieldset',null,h('legend',{html:G(b.q)}));
  b.opts.forEach((o,i)=>{const inp=h('input',{type:'radio',name:'pr'+id,value:i,onchange:()=>{btn.disabled=false;}});inputs.push(inp);form.append(h('label',{class:'opt'},inp,h('span',{class:'lbl',html:G(o)})));});
  const out=h('div',{class:'callout data',hidden:true});
  const btn=h('button',{class:'btn small',type:'button',disabled:true,onclick:()=>{const i=inputs.findIndex(x=>x.checked);inputs.forEach(x=>x.disabled=true);btn.hidden=true;out.hidden=false;out.innerHTML='<span class="k">Your prediction</span><p>'+G(b.opts[i])+'</p>'+(b.after?'<p>'+G(b.after)+'</p>':'');S.items[b.key||b.obj]={ok:null,pred:i};C.save();ctx.release();}},b.btn||'Commit my prediction and reveal the data');
  return h('section',{class:'block'},C.annot(b,'check'),h('div',{class:'check'},form,h('div',{class:'actions'},btn),out));
};

/* ---------- capstone: the one required self-checked step ---------- */
B.capstone=function(b,ctx){
  const key='capstone';
  const min=b.min||50;
  const ta=h('textarea',{'aria-label':'Your capstone argument','aria-describedby':'capcount',style:'min-height:220px'});
  ta.value=(S.refl[key]||'');
  const cnt=h('p',{id:'capcount',class:'tnote',role:'status'});
  const words=()=>ta.value.trim().split(/\s+/).filter(Boolean).length;
  const rev=h('div',{hidden:true});
  const reveal=h('button',{class:'btn small',type:'button',disabled:true,onclick:()=>{ta.readOnly=true;reveal.hidden=true;rev.hidden=false;rev.querySelector('h3').focus();}},'Commit and show model answer and rubric');
  function upd(){const w=words();cnt.textContent=w+' words. Aim for '+b.range+'. You need at least '+min+' words to continue.';reveal.disabled=w<min;S.refl[key]=ta.value;C.save();}
  ta.addEventListener('input',upd);upd();
  const ratings={};
  const submit=h('button',{class:'btn small',type:'button',disabled:true,onclick:()=>{
    S.capstone={ratings:Object.assign({},ratings),words:words(),at:Date.now()};S.done['9.3']=true;C.save();C.updateProgress&&C.updateProgress();
    const weak=b.criteria.filter((c,i)=>ratings[i]==='not');
    out.hidden=false;out.innerHTML='<span class="k">Self-check submitted</span>'+(weak.length?'<p>Criteria marked "not yet": '+weak.map(c=>'<b>'+c.h+'</b> (revisit '+c.revisit+')').join('; ')+'. You may continue either way.</p>':'<p>You rated every criterion as met or partly met. Nicely done. You may still revisit any lesson.</p>')+'<p class="tnote">The course cannot verify quality from a self-rating, only that you did the work. Your rating is not scored.</p>';
    submit.hidden=true;lock();ctx.release();C.live('Self-check submitted.');
  }},'Submit self-rating');
  const out=h('div',{class:'callout data',hidden:true});
  const critEls=b.criteria.map((c,i)=>{
    const name='cr'+C.uid();
    const radios=[['met','Met'],['partly','Partly met'],['not','Not yet']].map(([v,l])=>h('label',null,h('input',{type:'radio',name,value:v,onchange:()=>{ratings[i]=v;submit.disabled=Object.keys(ratings).length<b.criteria.length;}}),l));
    return h('div',{class:'crit'},h('b',{html:G(c.h)}),h('span',{class:'tnote',html:G(c.d)}),h('div',{class:'rate-row',role:'radiogroup','aria-label':'Self-rating: '+c.h},radios));
  });
  function lock(){rev.querySelectorAll('input').forEach(x=>x.disabled=true);}
  rev.append(h('h3',{tabindex:'-1',style:'font-size:var(--text-lg);margin:var(--space-3) 0 8px'},'Compare your answer'),h('div',{class:'model ref'},h('p',{html:'<b>Model answer</b>'}),h('div',{html:G(b.model)})),h('p',{html:'<b>Rubric: rate your own answer on each criterion</b> <span class="req">(required)</span>'}),...critEls,h('div',{class:'actions'},submit),out);
  return h('section',{class:'block'},C.annot(b,'check'),h('div',{class:'check',style:'border-color:var(--color-accent)'},h('div',{class:'qtype'},'Capstone · Required self-checked step · Not scored'),h('p',{class:'prose',style:'font-size:var(--text-lg);font-weight:700;margin:0 0 8px',html:G(b.q)}),h('div',{class:'tnote',html:G(b.hint)}),ta,cnt,h('div',{class:'actions'},reveal),rev));
};

/* quiz only: shuffle answer options and remap the correct answers; "None of ..."/"All of the above" options stay last, and letter-labelled options ("A, ...") keep their order */
function shuffleOpts(item){
  const O=item.opts,anchored=/^(none of|all of the above|both of the above)/i,lettered=/^[A-F], /;
  if(O.every(o=>lettered.test(o)))return item;
  const idx=O.map((o,i)=>i),free=idx.filter(i=>!anchored.test(O[i])),tail=idx.filter(i=>anchored.test(O[i]));
  const order=shuffle(free).concat(tail);
  return Object.assign({},item,{opts:order.map(i=>O[i]),ans:item.ans.map(a=>order.indexOf(a)).sort((x,y)=>x-y)});
}
/* ---------- quiz lesson (summative, samples items from Modules 1-8 by objective ID) ---------- */
B.quiz=function(b,ctx){
  const root=h('div',{class:'quiz'});
  const pass=b.pass||80;
  let qs,qi,right,log;
  const modOf=k=>parseInt(String(k).split('.')[0],10);
  const optMods=b.optionalMods||[];
  const opt=()=>{const o=S.quizOpt=S.quizOpt||{};return o;};
  /* pick n questions: at least 1 and at most 3 from each included module, random otherwise, shuffled order */
  function pick(){
    const inc=k=>optMods.indexOf(modOf(k))<0||opt()[modOf(k)];
    const pool=b.pool.filter(inc),mods=[];
    pool.forEach(k=>{if(mods.indexOf(modOf(k))<0)mods.push(modOf(k));});
    const maxPer=b.maxPer||3,chosen=[],count={};
    mods.forEach(m=>{const k=shuffle(pool.filter(x=>modOf(x)===m))[0];chosen.push(k);count[m]=1;});
    shuffle(pool.filter(k=>chosen.indexOf(k)<0)).forEach(k=>{if(chosen.length<b.n&&count[modOf(k)]<maxPer){chosen.push(k);count[modOf(k)]++;}});
    return shuffle(chosen);
  }
  function intro(){
    root.innerHTML='';
    const toggles=optMods.length?h('fieldset',{class:'quiz-opts',style:'margin:var(--space-3) 0'},h('legend',null,'Optional modules'),h('p',{class:'tnote',style:'margin:0 0 8px'},'Include questions from the optional modules only if you studied them.'),optMods.map(m=>{
      const cb=h('input',{type:'checkbox',checked:!!opt()[m],onchange:()=>{opt()[m]=cb.checked;C.save();setList();}});
      return h('label',{style:'display:flex;gap:10px;align-items:center;min-height:44px'},cb,h('span',null,'Include questions from Module '+m+(C.modules&&C.modules[m]?': '+C.modules[m].title:'')));
    })):null;
    const list=h('ul',{style:'padding-left:20px'});
    function setList(){
      const mods=[1,2,3,4,5,6,7,8].filter(m=>optMods.indexOf(m)<0||opt()[m]);
      list.innerHTML='';
      [b.n+' questions, one at a time, in random order','Passing score: '+pass+'%','Questions are drawn from Modules '+mods.join(', ')+', with at least 1 and at most '+(b.maxPer||3)+' from each module.'].forEach(t=>list.append(h('li',null,t)));
    }
    setList();
    root.append(h('h2',{style:'font-size:var(--text-h3);margin-bottom:8px'},'Summative quiz'),h('p',{html:G(b.intro)}),list,toggles,h('button',{class:'btn',type:'button',onclick:start},'Start quiz'));
  }
  function start(){qs=pick();qi=0;right=0;log=[];ask();}
  /* reference material shown with a question: a block, a function returning blocks from a lesson, or a list of either */
  function stimFor(key){
    const specs=[].concat((b.stim&&b.stim[key])||[]);
    const blocks=specs.flatMap(sp=>typeof sp==='function'?[].concat(sp()):[sp]).filter(Boolean);
    return blocks.map(x=>{
      if(x.t==='acc')x=Object.assign({},x,{items:x.items.map(i=>Object.assign({},i,{open:true}))});
      const fn=C.BLK[x.t];return fn?fn(x,ctx):null;
    }).filter(Boolean);
  }
  function ask(){
    const key=qs[qi],item=shuffleOpts(C.items[key]);
    root.innerHTML='';
    const m=mcBody(Object.assign({},item,{key:null}),{noRecord:true,onSubmit:(ok)=>{if(ok)right++;log.push({key:key,ok:ok,obj:item.obj});nx.hidden=false;nx.textContent=qi===qs.length-1?'See results':'Next';nx.focus();}});
    const nx=h('button',{class:'btn small',type:'button',hidden:true,onclick:()=>{qi++;if(qi<qs.length)ask();else results();}},'Next');
    m.actions.append(nx);
    const stim=stimFor(key);
    root.append(h('div',{class:'qcount'},h('span',null,'Question '+(qi+1)+' of '+qs.length),h('span',null,String(qi+1).padStart(2,'0')+'/'+String(qs.length).padStart(2,'0'))),
      ...(stim.length?[h('div',{class:'quiz-stim',role:'group','aria-label':'Information for this question'},h('p',{class:'tnote',style:'margin:var(--space-3) 0 0'},'Use this information to answer the question.'),stim)]:[]),
      m.form,m.actions,m.box);
    const lg=root.querySelector('legend');lg&&(lg.tabIndex=-1,lg.focus({preventScroll:false}));
  }
  function results(){
    const pct=Math.round(right/qs.length*100),ok=pct>=pass;
    root.innerHTML='';
    root.append(h('div',{class:'qcount'},h('span',null,'Results')),h('div',{class:'score'},pct+'%'),
      h('p',{class:'pf '+(ok?'pass':'fail'),html:C.icon(ok?'check':'cross',22)+'<span>'+(ok?'Passed':'Failed')+'</span>'}),
      h('p',null,right+' of '+qs.length+' correct. Passing threshold: '+pass+'%.'),
      h('ul',{class:'review','aria-label':'Item review'},log.map(l=>h('li',null,(l.ok?'✔ Correct':'✘ Incorrect')+' · Objective '+l.obj+(l.ok?'':' (revisit lesson '+l.obj.split('-')[0]+')')))),
      h('div',{class:'actions'},h('button',{class:'btn small secondary',type:'button',onclick:intro},'Take again')));
    S.quiz={pct:pct,at:Date.now(),pass:ok};
    if(ok){S.done[ctx.lesson.id]=true;C.updateProgress&&C.updateProgress();}
    C.save();C.live('Quiz finished. '+pct+' percent. '+(ok?'Passed.':'Failed.'));
    if(ok)ctx.release();
  }
  intro();
  return h('section',{class:'block'},root);
};
})();

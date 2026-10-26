/* Core helpers, state, icons and SVG builders */
(function(){
'use strict';
const C=window.C={lessons:{},BLK:{},TABLES:{},items:{},LV:{R:'Remembering',U:'Understanding',Ap:'Applying',An:'Analyzing',E:'Evaluating',C:'Creating'}};

C.ASM={SC:'Self-check (ungraded)',MC:'Knowledge check, single response (graded)',MS:'Knowledge check, multiple response (graded)',MATCH:'Matching (graded)',SORT:'Sorting activity (graded)',PRED:'Predict, then reveal (ungraded)',REF:'Optional reflection (self-assessed)'};
C.GRADED=['MC','MS','MATCH','SORT'];

function h(tag,attrs){
  const e=document.createElement(tag);
  attrs=attrs||{};
  for(const k in attrs){
    const v=attrs[k];
    if(v==null||v===false)continue;
    if(k==='class')e.className=v;
    else if(k==='html')e.innerHTML=v;
    else if(k.slice(0,2)==='on')e.addEventListener(k.slice(2),v);
    else e.setAttribute(k,v===true?'':v);
  }
  for(let i=2;i<arguments.length;i++){
    const kids=[].concat(arguments[i]);
    for(const c of kids){ if(c==null||c===false)continue; e.append(c.nodeType?c:document.createTextNode(c)); }
  }
  return e;
}
C.h=h;

/* wrap Greek runs for the polytonic-capable font */
const GR='[\\u0370-\\u03FF\\u1F00-\\u1FFF]';
const GRE=new RegExp('(<[^>]+>)|('+GR+'+(?:[ \\u00a0]'+GR+'+)*)','g');
C.greek=function(html){return String(html).replace(GRE,(m,tag,gr)=>tag?tag:'<span class="grc" lang="grc">'+gr+'</span>');};

/* persistent state (try/catch: storage can be blocked) */
const KEY='ssdemo.v1';
const S=C.S={done:{},items:{},refl:{},ratings:{},annot:false,capstone:null,quiz:{},flash:{}};
try{Object.assign(S,JSON.parse(localStorage.getItem(KEY)||'{}'));}catch(e){}
C.save=function(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}};
C.reset=function(){try{localStorage.removeItem(KEY);}catch(e){} location.reload();};
C.live=function(msg){const l=document.getElementById('live');if(l){l.textContent='';setTimeout(()=>l.textContent=msg,30);}};

/* icons: outline, 2px stroke */
const P={
 menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
 close:'<path d="M6 6l12 12M18 6L6 18"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
 cross:'<path d="M6 6l12 12M18 6L6 18"/>',
 lesson:'<path d="M5 4h10l4 4v12H5z"/><path d="M14 4v5h5M8 13h8M8 17h6"/>',
 quiz:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.7M12 17h.01"/>',
 pen:'<path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="M14 7l3 3"/>',
 chevL:'<path d="M15 5l-7 7 7 7"/>',
 chevR:'<path d="M9 5l7 7-7 7"/>',
 chevD:'<path d="M5 9l7 7 7-7"/>',
 flip:'<path d="M4 12a8 8 0 0 1 14-5l2 2M20 12a8 8 0 0 1-14 5l-2-2"/><path d="M20 4v5h-5M4 20v-5h5"/>'
};
C.icon=function(n,size,cls){return '<svg class="'+(cls||'')+'" width="'+(size||24)+'" height="'+(size||24)+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'+P[n]+'</svg>';};

/* generative banner (no photographs supplied): ruled "manuscript" lines + a large Greek letter per module */
const LET=['Α','Β','Γ','Δ','Ε','Ζ','Η','Θ','Ι','Κ'];
C.banner=function(mod,uid){
  let lines='';for(let i=0;i<9;i++)lines+='<path d="M0 '+(60+i*38)+'H1200" stroke="#fff" stroke-opacity=".10" stroke-width="2"/>';
  return '<svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Decorative banner: the Greek letter '+LET[mod]+' on ruled manuscript lines" focusable="false">'+
   '<defs><linearGradient id="bg'+uid+'" x1="0" x2="1"><stop offset="0" stop-color="#1F3A5F"/><stop offset="1" stop-color="#14263F"/></linearGradient></defs>'+
   '<rect width="1200" height="400" fill="url(#bg'+uid+')"/>'+lines+
   '<text x="930" y="360" text-anchor="middle" font-family="Gentium Plus,GFS Didot,Palatino Linotype,Times New Roman,serif" font-size="470" fill="#fff" fill-opacity=".13">'+LET[mod]+'</text>'+
   '<rect x="60" y="40" width="64" height="5" fill="#9C3D2A"/></svg>';
};

/* register keys for graded items; build the objective coverage set */
C.covered=new Set();
C.def=function(id,blocks){
  C.lessons[id]={id:id,blocks:blocks};
  blocks.forEach(b=>{
    if(b.obj)[].concat(b.obj).forEach(o=>C.covered.add(o));
    if(['mc','match','sort','reorder','ref','predict'].indexOf(b.t)>=0&&b.obj){
      b.key=b.obj+(b.k?'~'+b.k:'');
      if(b.t==='mc')C.items[b.key]=b;
    }
  });
};


/* ---------- charts ---------- */
C.fmt=function(v){return Number(v).toLocaleString('en-US',{maximumFractionDigits:2});};
/* spec: {title, sub, unit, series:[a,b], groups:[{label,vals:[a,b]}], alt, max?, tableHref?} */
C.chart=function(spec){
  const W=760,L=210,R=80,rowH=58,top=14;
  const n=spec.groups.length,H=top+n*rowH+10;
  const max=spec.max||Math.max.apply(null,spec.groups.flatMap(g=>g.vals));
  const bw=W-L-R;
  let s='<defs><pattern id="hat'+spec.uid+'" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="var(--color-surface)"/><rect width="3.5" height="8" fill="var(--color-accent)"/></pattern></defs>';
  spec.groups.forEach((g,i)=>{
    const y=top+i*rowH;
    s+='<text x="'+(L-12)+'" y="'+(y+30)+'" text-anchor="end" font-size="15" font-weight="700">'+g.label+'</text>';
    g.vals.forEach((v,k)=>{
      const w=Math.max(2,v/max*bw),yy=y+4+k*24;
      s+='<rect x="'+L+'" y="'+yy+'" width="'+w+'" height="20" '+(k===0?'fill="var(--color-primary)"':'fill="url(#hat'+spec.uid+')" stroke="var(--color-accent)" stroke-width="2"')+'/>';
      s+='<text x="'+(L+w+8)+'" y="'+(yy+15)+'" font-size="14" font-weight="700">'+C.fmt(v)+'</text>';
    });
  });
  s+='<line x1="'+L+'" y1="'+top+'" x2="'+L+'" y2="'+(H-10)+'" stroke="var(--color-border)" stroke-width="2"/>';
  const alt=spec.alt||(spec.title+'. '+spec.groups.map(g=>g.label+': '+spec.series.map((nm,k)=>nm+' '+C.fmt(g.vals[k])).join(', ')).join('; ')+'.');
  const rows=spec.groups.map(g=>'<tr><th scope="row">'+g.label+'</th>'+g.vals.map(v=>'<td class="n">'+C.fmt(v)+'</td>').join('')+'</tr>').join('');
  return h('figure',{class:'chart',style:'margin:0'},
    h('h3',null,spec.title),
    spec.sub?h('p',{class:'sub'},spec.sub):null,
    h('div',{class:'legend','aria-hidden':'true'},h('span',null,h('i'),spec.series[0]),h('span',null,h('i',{class:'a'}),spec.series[1])),
    h('div',{html:'<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+alt.replace(/"/g,'&quot;')+'" focusable="false">'+s+'</svg>'}),
    h('p',{class:'sr-only'},'Text alternative: '+alt),
    h('details',{class:'notes'},h('summary',null,'Show the data as a table'),
      h('div',{class:'tablewrap',html:'<table class="data"><caption class="sr-only">'+spec.title+'</caption><thead><tr><th scope="col">Item</th>'+spec.series.map(x=>'<th scope="col" class="n">'+x+'</th>').join('')+'</tr></thead><tbody>'+rows+'</tbody></table>'}),
      spec.unit?h('p',{class:'tnote'},spec.unit):null)
  );
};

/* ---------- schematic map ---------- */
C.map=function(){
  const X=lon=>(lon-8)/32*760+20, Y=lat=>(46.5-lat)/18.5*400+20;
  const pts=a=>a.map(p=>X(p[0]).toFixed(1)+','+Y(p[1]).toFixed(1)).join(' ');
  const land=[[8,46.5],[8,44.4],[9,44.3],[10.3,43.5],[11,42.4],[12.2,41.8],[13.8,41.2],[15.6,40],[15.7,38],[16.6,39],[17.2,40.4],[18.5,40.1],[16.9,41.1],[15.9,41.9],[14,42.6],[13.6,43.6],[12.3,44.6],[12.4,45.4],[13.7,45.6],[14.5,44.7],[15.5,43.7],[17.3,43],[18.5,42.4],[19.4,41.5],[19.4,40.4],[20,39.7],[21,38.5],[21.7,37],[22.5,36.4],[23.2,36.6],[22.9,37.6],[24,38],[23.2,39],[22.9,40.4],[23.9,40.2],[24.5,40.9],[26,40.8],[26.2,40.3],[26.2,39.5],[26.8,38.4],[27.2,37.8],[27.5,37],[28.2,36.7],[29.7,36.2],[30.7,36.8],[32.5,36.1],[34,36.3],[35.6,36.6],[36.2,36.8],[35.8,35.9],[35.9,34.5],[35.4,33.2],[34.9,32],[34.2,31.3],[32.3,31.2],[31,31.5],[29.9,31.2],[25.2,31.6],[23,32.7],[22,32.9],[20.1,32],[19,30.3],[15,32.3],[13.2,32.9],[10.2,33.9],[10.9,35],[10.6,36.8],[9,37.2],[8,36.9],[8,28],[40,28],[40,46.5]];
  const black=[[28,43],[28.6,41.2],[31.5,41.1],[33,42],[35,42],[38,41],[40,41],[40,45],[37.5,45.3],[35,45],[33.5,44.4],[33,45.2],[31,46],[30,45.5],[28.9,44.4]];
  const crete=[[23.5,35.3],[26.3,35.2],[26,35],[24,35]];
  const cities=[
    {n:'Chaeronea',lat:38.5,lon:22.9,c:'var(--color-accent)',dx:-8,dy:-12,a:'end'},
    {n:'Antioch (Luke, most likely)',lat:36.2,lon:36.2,c:'var(--color-primary)',dx:8,dy:26,a:'end'},
    {n:'Rome',lat:41.9,lon:12.5,c:'var(--color-text-muted)',dx:8,dy:-10,a:'start'},
    {n:'Alexandria',lat:31.2,lon:29.9,c:'var(--color-text-muted)',dx:0,dy:24,a:'middle'},
    {n:'Ravenna',lat:44.4,lon:12.2,c:'var(--color-text-muted)',dx:8,dy:-6,a:'start'},
    {n:'Philippi',lat:41.0,lon:24.3,c:'var(--color-text-muted)',dx:10,dy:-8,a:'start'},
    {n:'Troas',lat:39.8,lon:26.2,c:'var(--color-text-muted)',dx:12,dy:-4,a:'start'}
  ];
  let s='<rect width="800" height="440" fill="var(--map-sea)"/><polygon points="'+pts(land)+'" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5"/><polygon points="'+pts(black)+'" fill="var(--map-sea)" stroke="var(--color-border)" stroke-width="1.5"/><polygon points="'+pts(crete)+'" fill="var(--color-surface-alt)" stroke="var(--color-border)" stroke-width="1.5"/>';
  s+='<text x="470" y="320" font-size="15" fill="var(--color-text-muted)" font-style="italic" text-anchor="middle">Mediterranean Sea</text><text x="650" y="150" font-size="13" fill="var(--color-text-muted)" font-style="italic" text-anchor="middle">Black Sea</text>';
  const A=cities[0],B=cities[1];
  s+='<line x1="'+X(A.lon)+'" y1="'+Y(A.lat)+'" x2="'+X(B.lon)+'" y2="'+Y(B.lat)+'" stroke="var(--color-accent)" stroke-width="3" stroke-dasharray="8 6"/>';
  s+='<rect x="'+(X(29.6)-70)+'" y="'+(Y(37.3)-28)+'" width="150" height="24" rx="12" fill="var(--color-surface)" stroke="var(--color-accent)" stroke-width="2"/><text x="'+(X(29.6)+5)+'" y="'+(Y(37.3)-11)+'" font-size="13" font-weight="700" fill="var(--color-text)" text-anchor="middle">about 750 miles apart</text>';
  cities.forEach(c=>{
    const x=X(c.lon),y=Y(c.lat);
    s+=(c.c==='var(--color-text-muted)'?'<circle cx="'+x+'" cy="'+y+'" r="5" fill="var(--color-surface)" stroke="'+c.c+'" stroke-width="2.5"/>':'<rect x="'+(x-8)+'" y="'+(y-8)+'" width="16" height="16" fill="'+c.c+'" stroke="var(--color-surface)" stroke-width="2"/>')+
       '<text x="'+(x+c.dx)+'" y="'+(y+c.dy)+'" text-anchor="'+c.a+'" font-size="'+(c.c==='var(--color-text-muted)'?13:15)+'" font-weight="'+(c.c==='var(--color-text-muted)'?400:700)+'" fill="var(--color-text)" paint-order="stroke" stroke="var(--color-surface-alt)" stroke-width="3">'+c.n+'</text>';
  });
  s+='<g transform="translate(24,396)" fill="var(--color-text)"><rect x="0" y="-14" width="16" height="16" fill="var(--color-accent)"/><text x="24" y="0" font-size="13">Chaeronea (Plutarch)</text><rect x="170" y="-14" width="16" height="16" fill="var(--color-primary)"/><text x="194" y="0" font-size="13">Antioch (Luke)</text><circle cx="316" cy="-6" r="5" fill="var(--color-surface)" stroke="var(--color-text-muted)" stroke-width="2.5"/><text x="328" y="0" font-size="13">Other places in the thesis</text></g>';
  const alt='Schematic map of the eastern Mediterranean. Plutarch was born in Chaeronea in central Greece and Luke most likely in Antioch in Syria, about 750 miles apart in a straight line and a 1,300 mile journey by land. Rome, Ravenna, Alexandria, Philippi and Troas, places named in the thesis, are also marked. Coastlines are simplified.';
  return h('figure',{class:'map',style:'margin:0'},h('div',{html:'<svg viewBox="0 0 800 440" role="img" aria-label="'+alt+'" focusable="false">'+s+'</svg>'}),h('figcaption',{class:'tnote'},'Schematic map; coastlines are simplified and not to scale. Distances are those given in the thesis (about 750 miles between birthplaces; a 1,300 mile journey by land).'));
};
})();

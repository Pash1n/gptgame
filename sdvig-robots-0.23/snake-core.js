/* Shared deterministic rules for play, hints, level generation and replay checks. */
(function(root){'use strict';
const N=6;
const SHAPES={square:[[0,0],[0,1],[1,0],[1,1]],line:[[0,0],[0,1],[0,2],[0,3]],corner:[[0,0],[1,0],[2,0],[2,1],[2,2]],tee:[[0,0],[0,1],[0,2],[1,1],[2,1]]};
function rotations(cells){let a=cells.map(p=>p.slice());const out=[],seen=new Set();for(let k=0;k<4;k++){const r=Math.min(...a.map(p=>p[0])),c=Math.min(...a.map(p=>p[1]));const b=a.map(([y,x])=>[y-r,x-c]).sort((a,b)=>a[0]-b[0]||a[1]-b[1]),key=JSON.stringify(b);if(!seen.has(key)){seen.add(key);out.push(b)}a=a.map(([y,x])=>[x,-y])}return out}
const PATTERNS=Object.fromEntries(Object.entries(SHAPES).map(([k,v])=>[k,rotations(v)]));
const placements=Object.fromEntries(Object.entries(PATTERNS).map(([k,patterns])=>[k,patterns.flatMap(cells=>{const h=Math.max(...cells.map(p=>p[0]))+1,w=Math.max(...cells.map(p=>p[1]))+1,out=[];for(let r=0;r<=N-h;r++)for(let c=0;c<=N-w;c++)out.push(cells.map(([y,x])=>(r+y)*N+c+x));return out})]));
function seeded(seed){let s=seed|0;const f=()=>{s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};f.getState=()=>s;return f}
const color=t=>typeof t==='number'?t:t.color;
function match(grid,config){const flat=grid.flat(),ids=new Set(),groups=[];for(let c=0;c<5;c++)for(const cells of placements[config.rules[c]]){if(cells.every(i=>color(flat[i])===c)){cells.forEach(i=>ids.add(i));groups.push({color:c,ids:cells,shape:config.rules[c]})}}return{ids:[...ids].sort((a,b)=>a-b),groups}}
function slots(axis,index,pins){const pinned=new Set(pins);return Array.from({length:N},(_,k)=>axis==='x'?index*N+k:k*N+index).filter(i=>!pinned.has(i))}
function shifted(grid,axis,index,n,pins=[]){const out=grid.map(r=>r.slice()),free=slots(axis,index,pins),m=free.length;if(!m)return out;for(let k=0;k<m;k++){const from=free[k],to=free[((k+n)%m+m)%m];out[Math.floor(to/N)][to%N]=grid[Math.floor(from/N)][from%N]}return out}
// A frozen cell is outside the cyclic snake. Only cells in this route move.
// Contiguous ice is bypassed as one obstacle; a blocked preferred lane falls
// back to the opposite neighbour. Backtracking keeps several detours disjoint.
function route(state,config,axis,index){
 const pins=new Set(state.pins||[]),cell=(lane,k)=>axis==='x'?lane*N+k:k*N+lane;
 const free=Array.from({length:N},(_,k)=>k).filter(k=>!pins.has(cell(index,k)));
 if(free.length===N)return{cells:free.map(k=>cell(index,k)),detoured:false,blocked:false,sides:[]};
 if(free.length<2)return{cells:[],detoured:false,blocked:true,sides:[]};
 const preferred=state.routeSide||config.routeSide||-1,base=new Set(free.map(k=>cell(index,k)));
 function build(at,cells,used,sides){
  if(at===free.length)return{cells,detoured:true,blocked:false,sides};
  const from=free[at],to=free[(at+1)%free.length],distance=(to-from+N)%N;
  const next=cells.concat(cell(index,from));
  if(distance===1)return build(at+1,next,used,sides);
  const firstIce=cell(index,(from+1)%N),wanted=state.routeFlips?.[firstIce]?-preferred:preferred;
  for(const side of [wanted,-wanted]){
   const lane=index+side;if(lane<0||lane>=N)continue;
   const around=Array.from({length:distance+1},(_,k)=>cell(lane,(from+k)%N));
   if(around.some(i=>pins.has(i)||used.has(i)||base.has(i)))continue;
   const result=build(at+1,next.concat(around),new Set([...used,...around]),sides.concat(side));
   if(result)return result;
  }
  return null;
 }
 return build(0,[],new Set(),[])||{cells:[],detoured:false,blocked:true,sides:[]};
}
function frozenGroup(pins,cell){
 const set=new Set(pins);if(!set.has(cell))return[];const seen=new Set([cell]),queue=[cell];
 for(let at=0;at<queue.length;at++){const i=queue[at],r=Math.floor(i/N),c=i%N;for(const j of [r*N+(c+1)%N,r*N+(c+N-1)%N,((r+1)%N)*N+c,((r+N-1)%N)*N+c])if(set.has(j)&&!seen.has(j)){seen.add(j);queue.push(j);}}
 return queue;
}
function flipFrozen(state,cell){
 const group=frozenGroup(state.pins,cell);if(!group.length)throw Error('Not frozen');
 const next={...(state.routeFlips||{})},flip=!next[cell];for(const i of group){if(flip)next[i]=true;else delete next[i];}
 return{...state,routeFlips:next};
}
function routeShift(grid,axis,index,n,state,config){
 const track=route(state,config,axis,index);if(track.blocked)throw Error('Blocked detour');
 const cells=track.cells,out=grid.map(r=>r.slice()),length=cells.length;
 for(let k=0;k<length;k++){const from=cells[k],to=cells[((k+n)%length+length)%length];out[Math.floor(to/N)][to%N]=grid[Math.floor(from/N)][from%N];}
 return out;
}
function moves(pins=[]){const out=[];for(const axis of ['x','y'])for(let index=0;index<N;index++){const length=slots(axis,index,pins).length;for(let n=1;n<length;n++)out.push({axis,index,n:n>length/2?n-length:n})}return out}
function plan(state,config,forcedBomb=null){const m=forcedBomb==null?match(state.grid,config):{ids:[],groups:[]};const ids=new Set(m.ids),queue=forcedBomb==null?[]:[forcedBomb],detonated=new Set();for(const i of ids)if(state.grid[Math.floor(i/N)][i%N].bomb)queue.push(i);
while(queue.length){const i=queue.shift();if(detonated.has(i))continue;detonated.add(i);const r=Math.floor(i/N),c=i%N;for(let y=Math.max(0,r-1);y<=Math.min(N-1,r+1);y++)for(let x=Math.max(0,c-1);x<=Math.min(N-1,c+1);x++){const j=y*N+x;ids.add(j);if(state.grid[y][x].bomb&&!detonated.has(j))queue.push(j)}}
let reward=null;if(config.bombs&&m.ids.length>=6&&!detonated.size){const free=m.ids.filter(i=>!state.pins.includes(i));reward=free[Math.floor(free.length/2)]??m.ids[0]}
return{ids:[...ids].sort((a,b)=>a-b),groups:m.groups,detonated:[...detonated],reward};}
function collapse(grid,ids,spawn,pins=[]){const removed=new Set(ids),pinned=new Set(pins),out=grid.map(row=>row.slice()),falls=[];for(let c=0;c<N;c++){let top=0;for(let stop=0;stop<=N;stop++)if(stop===N||pinned.has(stop*N+c)){const kept=[];for(let r=top;r<stop;r++)if(!removed.has(r*N+c))kept.push({tile:grid[r][c],old:r});const missing=stop-top-kept.length;for(let r=stop-1;r>=top;r--){if(r>=top+missing){const k=kept[r-top-missing];out[r][c]=k.tile;if(k.old!==r)falls.push({r,c,from:k.old-r,fresh:false})}else{out[r][c]=spawn();falls.push({r,c,from:-(missing-(r-top)+.8),fresh:true,missing:top+missing})}}top=stop+1}}
return{grid:out,falls};}
function commit(state,config,p,spawn){const progress=state.progress.slice();for(const i of p.ids)progress[color(state.grid[Math.floor(i/N)][i%N])]++;const pins=state.pins.filter(i=>!p.ids.includes(i)),terrain=state.terrain.map((v,i)=>p.ids.includes(i)?Math.max(0,v-1):v),grid=state.grid.map(row=>row.slice());
if(p.reward!=null){const r=Math.floor(p.reward/N),c=p.reward%N;grid[r][c]={...grid[r][c],bomb:true};}
const drop=collapse(grid,p.ids.filter(i=>i!==p.reward),spawn,pins);
const runes=(state.runes||[]).map(r=>({...r,layers:Math.max(0,r.layers-(p.groups.some(g=>g.color===r.color&&g.ids.includes(r.cell))?1:0))}));
const nextColor=(config.beacons||[])[state.beacon||0],lit=state.litTurn!==state.turn&&p.groups.some(g=>g.color===nextColor);
const switched=config.switcher!=null&&p.ids.includes(config.switcher);
return{...state,routeSide:switched?-(state.routeSide||-1):(state.routeSide||-1),switchCount:(state.switchCount||0)+(switched?1:0),locked:state.locked&&!p.ids.includes(config.key),runes,beacon:(state.beacon||0)+(lit?1:0),litTurn:lit?state.turn:state.litTurn,grid:drop.grid,pins,terrain,progress,bombUsed:state.bombUsed+p.detonated.length,bombsMade:state.bombsMade+(p.reward!=null?1:0),falls:drop.falls};}
function initial(config){return{turn:0,tides:0,routeSide:config.routeSide||-1,routeFlips:{},detourUses:0,portalUses:0,switchCount:0,beacon:0,litTurn:-1,runes:(config.runes||[]).map(r=>({...r})),locked:config.lockRow!=null,grid:config.board.map(row=>row.map(t=>typeof t==='number'?{color:t}:{...t})),pins:config.pins.slice(),terrain:config.glass.slice(),progress:[0,0,0,0,0],bombUsed:0,bombsMade:0,rngState:config.seed+77};}
function won(state,c){return (state.detourUses||0)>=(c.detourGoal||0)&&(state.portalUses||0)>=(c.portalGoal||0)&&(state.switchCount||0)>=(c.switchGoal||0)&&(state.tides||0)>=(c.tideGoal||0)&&!state.locked&&(state.runes||[]).every(r=>r.layers===0)&&(state.beacon||0)>=(c.beacons||[]).length&&c.targets.every(t=>state.progress[t.color]>=t.count)&&(!c.pinGoal||state.pins.length===0)&&state.bombUsed>=(c.bombGoal||0)&&state.terrain.every(v=>v===0)}
// Every game, generator and test uses these exact legal actions and turn transitions.
function lineMoves(state,config,axis,index,n){
 if(!['x','y'].includes(axis)||!Number.isInteger(index)||index<0||index>=N||!Number.isInteger(n)||n===0||Math.abs(n)>5)return[];
 if(config.compass&&axis!==((state.turn||0)%2?'y':'x'))return[];
 if(config.singleStep&&Math.abs(n)!==1)return[];
 if(state.locked&&axis==='x'&&index===config.lockRow)return[];
 const p=config.pair,out=[{axis,index,n}];
 if(p&&p.axis===axis&&(index===p.a||index===p.b)){
 const other=index===p.a?p.b:p.a;
 if(state.locked&&axis==='x'&&other===config.lockRow)return[];
 out.push({axis,index:other,n:p.mode==='opposite'?-n:n});}
 {const tracks=out.map(m=>route(state,config,m.axis,m.index));if(tracks.some(t=>t.blocked))return[];if(tracks.length>1){const seen=new Set();for(const t of tracks)for(const cell of t.cells){if(seen.has(cell))return[];seen.add(cell);}}}
 return out;
}
function actions(state,config){const candidates=['x','y'].flatMap(axis=>Array.from({length:N},(_,index)=>{const length=route(state,config,axis,index).cells.length;return Array.from({length:Math.max(0,length-1)},(_,i)=>({axis,index,n:i+1>length/2?i+1-length:i+1}));}).flat());return candidates.filter(m=>lineMoves(state,config,m.axis,m.index,m.n).length).concat(state.grid.flatMap((row,r)=>row.flatMap((t,c)=>t.bomb?[{bomb:r*N+c}]:[])))}
function simulate(state,move,config,trace=false){
 const events=[];let grid=state.grid,detourUses=state.detourUses||0,portalUses=state.portalUses||0,portalSwap=null;
 if(move.bomb!=null){if(!Number.isInteger(move.bomb)||move.bomb<0||move.bomb>=36||!grid[Math.floor(move.bomb/N)][move.bomb%N].bomb)throw Error('Illegal bomb');}
 else{const lines=lineMoves(state,config,move.axis,move.index,move.n);if(!lines.length)throw Error('Illegal move');const moved=new Set();for(const m of lines){const track=route(state,config,m.axis,m.index);track.cells.forEach(i=>moved.add(i));if(track.detoured)detourUses++;grid=routeShift(grid,m.axis,m.index,m.n,state,config);}
 if(config.portals){const [a,b]=config.portals;if(moved.has(a)!==moved.has(b)&&!state.pins.includes(a)&&!state.pins.includes(b)){grid=grid.map(r=>r.slice());const ar=Math.floor(a/N),br=Math.floor(b/N),v=grid[ar][a%N];grid[ar][a%N]=grid[br][b%N];grid[br][b%N]=v;portalUses++;portalSwap=[a,b];}}}
 let s={...state,grid,detourUses,portalUses,turn:(state.turn||0)+1},rand=seeded(state.rngState);
 if(trace&&portalSwap)events.push({type:'portal',cells:portalSwap,after:s});
 function settle(bomb=null){for(let chain=0;chain<30;chain++){
 const p=plan(s,config,chain===0?bomb:null);if(!p.ids.length)return;
 s=commit(s,config,p,()=>({color:Math.floor(rand()*5)}));s.rngState=rand.getState();
 if(trace)events.push({type:'clear',plan:p,after:s});
 if(won(s,config))return;
 } }
 settle(move.bomb??null);
 if(!won(s,config)&&config.tide&&s.turn%config.tide.every===0&&!route(s,config,config.tide.axis,config.tide.index).blocked){
 const t=config.tide;s={...s,tides:(s.tides||0)+1,grid:routeShift(s.grid,t.axis,t.index,t.direction||1,s,config)};
 if(trace)events.push({type:'drift',move:{axis:t.axis,index:t.index,n:t.direction||1},after:s});settle();
 }
 s={...s,rngState:rand.getState()};return trace?{state:s,events}:s;
}
function heuristic(s,c){let score=Math.min(s.detourUses||0,c.detourGoal||0)*45+Math.min(s.portalUses||0,c.portalGoal||0)*45+Math.min(s.switchCount||0,c.switchGoal||0)*65+(s.beacon||0)*130+(s.locked?0:(c.lockRow!=null?65:0))+(c.runes||[]).reduce((a,r,i)=>a+(r.layers-s.runes[i].layers)*45,0);score+=c.targets.reduce((a,t)=>a+Math.min(s.progress[t.color],t.count)*8,0);score+=(c.pins.length-s.pins.length)*15+(c.glass.reduce((a,b)=>a+b,0)-s.terrain.reduce((a,b)=>a+b,0))*10;score+=Math.min(c.bombGoal||0,s.bombUsed)*50+Math.min(s.bombsMade,2)*3;
for(const t of [...c.targets,...((c.beacons||[])[s.beacon||0]!=null?[{color:c.beacons[s.beacon||0],count:Infinity}]:[])]){if(s.progress[t.color]>=t.count)continue;let near=0;const flat=s.grid.flat();for(const ids of placements[c.rules[t.color]]){let count=0;for(const i of ids)if(color(flat[i])===t.color)count++;near=Math.max(near,count/ids.length)}score+=near*5;}return score}
root.SdvigCampaign={N,SHAPES,PATTERNS,placements,seeded,match,slots,shifted,route,routeShift,frozenGroup,flipFrozen,moves,plan,collapse,commit,initial,won,simulate,actions,lineMoves,heuristic};
if(typeof module!=='undefined')module.exports=root.SdvigCampaign;
})(typeof globalThis!=='undefined'?globalThis:this);

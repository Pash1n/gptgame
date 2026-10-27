/* Delivery puzzles: deterministic, no matching, refills or random state. */
(function(root){'use strict';const C=root.SdvigCampaign||(typeof require!=='undefined'?require('./snake-core.js'):null),N=6;
const initial=c=>({grid:c.board.map(row=>row.map(color=>({color}))),pins:[...c.pins],routeSide:-1,routeFlips:{},stock:{freeze:c.freeze||0,thaw:c.thaw||0},turn:0});
const occupied=(s,g)=>s.grid[Math.floor(g.cell/N)][g.cell%N].color===g.color&&!s.pins.includes(g.cell);
const won=(s,c)=>c.stations.every(g=>occupied(s,g));
const key=s=>JSON.stringify([s.grid.map(r=>r.map(t=>t.color)),[...s.pins].sort((a,b)=>a-b),s.routeFlips,s.stock]);
function step(s,m,c){
 if(m.flip!=null)return C.flipFrozen(s,m.flip);
 if(s.turn>=c.budget)throw Error('No actions remaining');
 if(m.tool){const i=m.cell;if(!Number.isInteger(i)||i<0||i>=36||!['freeze','thaw'].includes(m.tool)||!s.stock[m.tool])throw Error('Tool unavailable');const frozen=s.pins.includes(i);if(m.tool==='freeze'?frozen:!frozen)throw Error('Wrong tool target');const pins=m.tool==='freeze'?[...s.pins,i].sort((a,b)=>a-b):s.pins.filter(k=>k!==i),routeFlips={...s.routeFlips};if(m.tool==='thaw')delete routeFlips[i];return{...s,pins,routeFlips,stock:{...s.stock,[m.tool]:s.stock[m.tool]-1},turn:s.turn+1};}
 if(!C.lineMoves(s,c,m.axis,m.index,m.n).length)throw Error('Blocked move');
 return{...s,grid:C.routeShift(s.grid,m.axis,m.index,m.n,s,c),turn:s.turn+1};
}
function actions(s,c){
 if(won(s,c)||s.turn>=c.budget)return[];
 const slides=C.actions(s,c).filter(m=>m.axis),out=[...slides];const groups=new Set();for(const i of s.pins){if(!groups.has(i)){const group=C.frozenGroup(s.pins,i);group.forEach(k=>groups.add(k));out.push({flip:i});}}
 if(s.stock.freeze)for(let i=0;i<36;i++)if(!s.pins.includes(i))out.push({tool:'freeze',cell:i});if(s.stock.thaw)for(const i of s.pins)out.push({tool:'thaw',cell:i});return out;
}
function solve(c,maxNodes=160000,start=initial(c)){
 const best=new Map([[key(start),start.turn]]),queue=[{s:start,path:[]}];let head=0,expanded=0;
 // Zero-cost flips are explored in the current action layer, paid moves in the next.
 let layer=queue;
 for(let depth=start.turn;depth<=c.budget;depth++){
  const next=[];for(let j=0;j<layer.length;j++){
   const node=layer[j];if(won(node.s,c))return{solution:node.path,state:node.s,expanded,complete:true};if(++expanded>maxNodes)return{solution:null,expanded,complete:false};
   for(const m of actions(node.s,c)){const s=step(node.s,m,c),k=key(s);if((best.get(k)??Infinity)<=s.turn)continue;best.set(k,s.turn);const n={s,path:node.path.concat(m)};if(m.flip!=null)layer.push(n);else next.push(n);}
  }layer=next;if(!layer.length)break;
 }return{solution:null,expanded,complete:true};
}
const api={N,initial,occupied,won,key,step,actions,solve};root.RoutePuzzle=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);

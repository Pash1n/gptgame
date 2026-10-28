const assert=require('node:assert/strict'),fs=require('node:fs'),T=require('../train-core'),levels=require('../train-levels'),G=require('../track-geometry');
assert.equal(levels.length,25);const rows=[],xy=p=>p.split(',').map(Number);let blockedEarlyStations=0;
for(const c of levels){
 assert.equal(c.id,rows.length+1);assert(T.validate(c,c.solution));assert(c.nodes[c.head]);assert.equal(new Set([...c.switches,...c.sockets].map(v=>v.id)).size,c.switches.length+c.sockets.length);
 for(const[pos,n]of Object.entries(c.nodes)){assert(n.x>=0&&n.x<c.width&&n.y>=0&&n.y<c.height);assert.equal(n.next.length>1,c.switches.some(s=>s.node===pos),'unprogrammed fork '+c.id+' '+pos);for(const dest of n.next){assert(c.nodes[dest]);const[a,b]=xy(pos),[x,y]=xy(dest);assert.equal(Math.abs(a-x)+Math.abs(b-y),1);}}
 const pads=new Map();for(const a of[...c.goals,...c.sockets,...c.supplies]){const[x,y]=xy(a.pad);assert(x>=0&&x<c.width&&y>=0&&y<c.height);assert(!c.nodes[a.pad],'pad overlaps rail '+c.id+' '+a.pad);if(pads.has(a.pad))assert(c.supplies.includes(a)||c.sockets.includes(a),'duplicate station pad');pads.set(a.pad,a);}
 for(const g of c.gates){assert(c.nodes[g.node]);assert(c.sockets.some(d=>d.id===g.hold));}
 if(c.deliveryOrder)assert.deepEqual([...c.deliveryOrder].sort(),c.goals.map(g=>g.id).sort());
 const r=T.simulate(c,c.solution);assert.equal(r.final.status,'won','level '+c.id);const events=r.states.flatMap(s=>s.events);if(c.deliveryOrder)assert.deepEqual(events.filter(e=>e.kind==='delivery').map(e=>e.goalId),c.deliveryOrder);
 // On ordered levels matching cargo must pass an out-of-order station unchanged.
 for(let i=0;i<r.states.length-1;i++){const s=r.states[i],n=r.states[i+1],tail=s.train.at(-1),at=s.train.length-1;if(!c.deliveryOrder||s.train.length<2)continue;const nextPos=s.train[at-1].pos,required=c.deliveryOrder.find(id=>!s.delivered[id]);for(const g of c.goals)if(g.id!==required&&!s.delivered[g.id]&&g.node===nextPos&&g.color===tail.color){assert(!n.delivered[g.id]);blockedEarlyStations++;}}
 const service=events.filter(e=>['capture','couple','delivery'].includes(e.kind));const captures=events.filter(e=>e.kind==='capture').length,pickups=events.filter(e=>e.kind==='couple').length;
 if(c.id>=16&&c.gates.length){for(const gate of c.gates)assert(r.states.some(s=>s.train[0].pos===gate.node&&T.gateState(c,s,gate).open),'unused gate '+c.id+' '+gate.node);}
 if(c.id>=16&&c.id!==22&&c.id!==23){assert(captures>0&&pickups>0,'buffer bypassed '+c.id);}
 if(c.id>=9){assert(c.fuel);assert(r.final.step<=c.maxSteps);const short=structuredClone(c);short.maxSteps=r.final.step-1;assert.equal(T.simulate(short,c.solution).final.blocked?.type,'fuel');const exact=structuredClone(c);exact.maxSteps=r.final.step;assert.equal(T.simulate(exact,c.solution).final.status,'won');}
 rows.push({id:c.id,title:c.title,steps:r.final.step,budget:c.fuel?c.maxSteps:null,railCells:Object.keys(c.nodes).length,switches:c.switches.length,deviceSites:c.sockets.length,cargo:c.goals.length,captures,pickups,serviceActions:service.length,ordered:!!c.deliveryOrder,gates:c.gates.length,routeChoices:c.switches.reduce((n,s)=>n*(s.allowAuto?4:2),1)});
}
assert(blockedEarlyStations>=4,'order must affect actual solutions');
const old=require('../../sdvig-dispatch-0.26/train-levels');assert.deepEqual(levels.slice(0,5),old,'original levels changed');
fs.writeFileSync('reports/campaign-tests.json',JSON.stringify({date:new Date().toISOString(),levels:rows,blockedEarlyStations,checks:['25 author solutions; exact fuel boundary and insufficient-fuel failure','Every rail edge cardinal, every branch programmable, every side pad off-track and inside board','Ordered deliveries enforced; out-of-order matching stations actually skipped','Each authored gate is crossed open, every buffer level uses parking and pickup','Original 1–5 data unchanged'],errors:[]},null,2));console.log('Campaign: 25 verified; out-of-order stations skipped',blockedEarlyStations);

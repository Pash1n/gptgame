import {initJolt,liveWorlds} from '../src/jolt-backend.js';
import {Warehouse} from '../src/warehouse.js';
import {STORAGE_SLOTS} from '../src/layout.js';
import assert from 'node:assert/strict';import fs from 'node:fs';
await initJolt();const w=new Warehouse(),checks=[],trace=[];
const advance=s=>{for(let t=0;t<s-1e-8;t+=1/60)w.step(1/60);};
function move(x,z,h,s=5){s=Math.max(s,Math.abs(w.anchor.position.x-x)/3+2);w.setTarget(x,z,h);advance(s);}
assert.equal(STORAGE_SLOTS.length,4);assert.equal(w.items.length,4);assert.equal(new Set(w.items.map(p=>p.x+','+p.z)).size,4);checks.push('Exactly four marked storage locations, four independent native Jolt pallets');
w.setTarget(-100,0);assert.equal(w.target.x,-1);w.setTarget(100,0);assert.equal(w.target.x,17);checks.push('Crane movement restricted to compact warehouse');
for(const id of ['pallet-0','pallet-1','pallet-2','pallet-3']){
 const p=w.items.find(p=>p.id===id);assert(w.requestRig(id));for(let t=0;t<60&&!p.rigged;t+=.1)advance(.1);assert(p.rigged,'Rigger cannot reach '+id);
 move(p.body.position.x,p.body.position.z,5.5);move(p.body.position.x,p.body.position.z,p.height+.84);assert.equal(w.active?.id,id,'Hook failed '+id);
 move(p.body.position.x,p.body.position.z,5.6);assert.equal(w.detach(),false,'Airborne release allowed');
 move(14.5,1.1,5.6);move(14.5,1.1,p.height+.78);assert(w.detach(),'Dock release failed '+id);move(14.5,1.1,5.5);advance(35);
 trace.push({id,total:w.totalLoaded,order:w.orderIndex,worker:w.worker.state,truck:w.truck.state});assert.equal(w.totalLoaded,trace.length);
}
assert(w.shiftFinished);assert.equal(w.totalLoaded,4);checks.push('All four actual pickups, pendulum carries, dock releases, worker unrigging, forklift loads and two truck departures');
assert(w.items.every(p=>p.body.position.toArray().every(Number.isFinite)));w.paused=true;const state=JSON.stringify(w.snapshot());advance(2);assert.equal(JSON.stringify(w.snapshot()),state);w.dispose();assert.equal(liveWorlds.size,0);checks.push('Pause freezes state; physics resources released');
fs.mkdirSync('reports',{recursive:true});fs.writeFileSync('reports/warehouse-gameplay.json',JSON.stringify({date:new Date().toISOString(),method:'Normal rig requests, crane target movement, fixed steps, detach. No cargo placement or score edits.',checks,trace},null,2));console.log('PASS',checks);

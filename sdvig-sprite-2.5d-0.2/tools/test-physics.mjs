import assert from 'node:assert/strict';import fs from 'node:fs';import{CraneProbe}from '../src/physics.js';
const step=(g,t)=>{for(let i=0;i<Math.round(t*120);i++)g.step(1/120)};
const report={};
let g=new CraneProbe();step(g,3);report.rest=g.snapshot();assert(Math.abs(g.cargo.body.position.y-2)<.04);assert(g.cargo.body.velocity.length()<.02);
g.setTarget(3.5,1.25,2.5);let speed=0,accel=0,swing=0,prev=0;for(let i=0;i<840;i++){g.step(1/120);speed=Math.max(speed,Math.abs(g.anchor.velocity.x));accel=Math.max(accel,Math.abs(g.anchor.velocity.x-prev)*120);prev=g.anchor.velocity.x;swing=Math.max(swing,Math.hypot(g.hook.position.x-g.anchor.position.x,g.hook.position.z-g.anchor.position.z));}assert(speed<=1.551);assert(accel<=1.001);assert(swing>.08&&swing<1.5);report.travel={speed,accel,swing,snapshot:g.snapshot()};
step(g,15);report.settled=g.snapshot();assert(Math.abs(g.anchor.position.x-3.5)<.01);assert(Math.abs(g.anchor.position.z-1.25)<.01);assert(g.cargo.body.velocity.length()<.3);assert.deepEqual(g.hook.quaternion.toArray(),[0,0,0,1]);
g.toggle();const y=g.cargo.body.position.y;step(g,.25);assert(g.cargo.body.position.y<y-.2);step(g,4);assert(g.cargo.body.position.y>=.49);assert(g.cargo.body.velocity.length()<.02);report.drop=g.snapshot();
// Deliberate isolated floor/stack fixtures, independent of gameplay routing.
g=new CraneProbe();g.toggle();g.cargo.body.position.set(.1,2.8,-1.55);g.cargo.body.velocity.set(0,0,0);g.cargo.body.aabbNeedsUpdate=true;step(g,4);report.stack=g.snapshot();assert(Math.abs(g.cargo.body.position.y-1.42)<.025);assert(g.loadContacts>0);assert(g.cargo.body.velocity.length()<.02);
// A lowering cable becomes slack; it must not press cargo through a stack.
g=new CraneProbe();g.setTarget(.1,-1.55,2.5);step(g,12);g.setTarget(.1,-1.55,5.5);step(g,10);report.lowered=g.snapshot();assert(g.cargo.body.position.y>=1.40);assert(g.items[1].body.position.y>=.44);assert(Math.abs(g.hook.position.y-g.anchor.position.y)>1);assert(g.hook.position.y>=g.cargo.body.position.y+.74);
// Reattach the normally placed pallet and hoist it again without teleporting.
g.toggle();assert.equal(g.attached,null);assert(g.toggle());g.setTarget(.1,-1.55,2.5);step(g,10);report.rehoist=g.snapshot();assert(g.cargo.body.position.y>2.0);
// Same projected X does not make the other row an invisible platform.
g=new CraneProbe();g.toggle();g.cargo.body.position.set(.1,2.8,1.25);g.cargo.body.velocity.set(0,0,0);g.cargo.body.aabbNeedsUpdate=true;step(g,4);report.separateRow=g.snapshot();assert(Math.abs(g.cargo.body.position.y-.5)<.025);assert.equal(g.loadContacts,0);
for(const r of [report.rest,report.settled,report.drop,report.stack,report.lowered])for(const b of r.items){assert(b.position.every(Number.isFinite));assert.deepEqual(b.quaternion,[0,0,0,1]);}
fs.mkdirSync('reports',{recursive:true});fs.writeFileSync('reports/physics.json',JSON.stringify({passed:true,...report},null,2));console.log(JSON.stringify({passed:true,speed,accel,swing}));

import assert from 'node:assert/strict';import fs from 'node:fs';import{CraneProbe}from '../src/physics.js';import{project,planeDelta}from '../src/projection.js';
let OldProbe;try{({CraneProbe:OldProbe}=await import('../../sdvig-sprite-2.5d-0.2/src/physics.js'))}catch{}
function sample(Probe){const g=new Probe(),x=g.anchor.position.x;g.setTarget(x+.4,g.target.z);let at50,at100,t90=null;for(let i=1;i<=240;i++){g.step(1/120);const moved=g.anchor.position.x-x;if(i===6)at50=moved;if(i===12)at100=moved;if(t90===null&&moved>=.36)t90=i/120}return{movedAt50ms:at50,movedAt100ms:at100,timeTo90percentMs:t90*1000};}
const current=sample(CraneProbe),previous=OldProbe?sample(OldProbe):null;assert(current.movedAt100ms>.33);assert(current.timeTo90percentMs<150);if(previous)assert(current.timeTo90percentMs<previous.timeTo90percentMs/3);
for(const z of[-2.5,0,2.5]){const a=project({x:-6.35,y:6.5,z}),b=project({x:6.35,y:6.5,z});assert.equal(a.y,b.y)}
for(const at of[{x:-3,y:6.5,z:-1.5},{x:3,y:6.5,z:1.2}]){const d=planeDelta(40,25,at),a=project(at),b=project({...at,x:at.x+d.x,z:at.z+d.z});assert(Math.abs(b.x-a.x-40)<1e-8);assert(Math.abs(b.y-a.y-25)<1e-8)}
for(const z of[-2,0,2])for(const x of[-4,0,4]){const p=project({x,y:0,z});assert(p.x>150&&p.x<1450&&p.y>400&&p.y<820)}
fs.writeFileSync('reports/response.json',JSON.stringify({passed:true,definition:'Simulated crane response to a 0.4 m target step, 120 Hz; not device input-to-display latency',current,previous,horizontalBridge:true,inverseTouchProjection:true,spaceForThreeRows:true},null,2));console.log(JSON.stringify({current,previous}));

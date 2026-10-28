import fs from'node:fs';import {CranePhysics,JOBS,BINS,TYPES}from'../src/physics.js';
const results=[];
for(let j=0;j<3;j++){
 const w=new CranePhysics({seed:JOBS[j].seed}),trace=[],commands=[];
 const advance=s=>{commands.push({advance:s});for(let i=0;i<s*120;i++){w.step(1/120);for(const e of w.drainEvents())if(['attach','deliver','reject'].includes(e.kind))trace.push({...e,time:Math.round(w.time*10)/10});}};
 const target=(x,z,h)=>{commands.push({target:[x,z,h]});w.setTarget(x,z,h);};const magnet=value=>{commands.push({magnet:value});w.setMagnet(value);};
 advance(2);
 for(const[type,need]of Object.entries(JOBS[j].needs)){
  let attempts=0;while((w.delivered[type]||0)<need&&attempts++<12){
   magnet(false);const list=w.items.filter(i=>i.type===type&&!i.delivered),item=list[(attempts-1)%list.length];if(!item)break;const p=item.body.position;
   target(p.x,p.z,3.4);advance(5);target(p.x,p.z,.58);magnet(true);advance(4);
   if(![...w.held.values()].some(h=>h.item.type===type)){magnet(false);advance(.5);continue;}
   target(w.target.x,w.target.z,3.4);advance(5);const bin=BINS.find(b=>b.id===TYPES[type].receiver);target(bin.x,bin.z,3.4);advance(9);magnet(false);advance(6);
  }
 }
 const won=Object.entries(JOBS[j].needs).every(([type,n])=>(w.delivered[type]||0)>=n);console.log(j+1,won,w.delivered,'seconds',w.time);results.push({job:j+1,won,delivered:w.delivered,simulatedSeconds:w.time,commands,trace});
}
fs.writeFileSync('reports/natural-playthroughs.json',JSON.stringify({date:new Date().toISOString(),method:'Only crane targets, height, magnet switch and physics time; no cargo teleportation or forced grip',jobs:results},null,2));if(results.some(r=>!r.won))process.exitCode=1;

import fs from'node:fs';import assert from'node:assert/strict';import{CranePhysics,JOBS,TYPES}from'../src/physics.js';
const startJob=Number(process.env.START_JOB||14),results=startJob>14?JSON.parse(fs.readFileSync('reports/chapter-physics.json')).results.filter(r=>r.index<startJob):[];
for(let index=Number(process.env.START_JOB||14);index<19;index++){
 const job=JOBS[index],commands=[],deliveries=[];let w=new CranePhysics({seed:job.seed,mission:job}),ticks=0,retries=0;
 const wait=s=>{commands.push({advance:s});for(let i=0;i<Math.round(s*120);i++){w.step(1/120);ticks++;for(const e of w.drainEvents())if(e.kind==='deliver')deliveries.push({at:w.time,...e});}},target=(x,z,h)=>{commands.push({target:[x,z,h]});w.setTarget(x,z,h)},mag=v=>{commands.push({magnet:v});w.setMagnet(v)};
 wait(2);let attempts=0;const won=()=>Object.entries(job.needs).every(([t,n])=>(w.delivered[t]||0)>=n);
 while(!won()&&attempts++<100){if(w.failed){if(retries++>=5)break;const owned={...w.delivered};commands.push({retry:true,owned});w=new CranePhysics({seed:job.seed,mission:job});for(const[type,n]of Object.entries(owned)){w.delivered[type]=n;for(const item of w.items.filter(i=>i.type===type).slice(0,n)){item.delivered=true;w.world.removeBody(item.body);}}}
  let item,bin='repair';const right=w.receiverStates.find(s=>s.id==='repair'),left=w.receiverStates.find(s=>s.id==='scrap');
  if(right.wrong.length){item=w.items.find(i=>i.id===right.wrong[0]);bin='scrap';}
  else if(left.wrong.length)item=w.items.find(i=>i.id===left.wrong[0]);
  else{const type=Object.keys(job.needs).find(t=>(w.delivered[t]||0)<job.needs[t]);const list=w.items.filter(i=>i.type===type&&!i.delivered);item=list[(attempts-1)%list.length];}
  if(!item)break;mag(false);if(job.gate&&(item.body.position.x<1)!==(w.magnet.position.x<1)){const from=w.magnet.position.x<1?-1.8:3,to=item.body.position.x<1?-1.8:3;target(from,0,3.4);wait(7);target(to,0,3.4);wait(9);}target(item.body.position.x,item.body.position.z,4.4);wait(6);
  const point=item.body.position;target(point.x,point.z,.50);mag(true);wait(4.5);if(!w.held.has(item.id)){if(!w.held.size){mag(false);wait(.5);continue;}const h=[...w.held.values()][0];item=h.item;bin=w.receiverFor(item.type);if(bin==='repair'&&right.wrong.length&&!right.wrong.includes(item.id))bin='stage';}target(w.target.x,w.target.z,4.4);wait(6);
  if(job.gate&&((bin==='repair'&&w.magnet.position.x<1)||(bin!=='repair'&&w.magnet.position.x>1))){const from=bin==='repair'?-1.8:3,to=bin==='repair'?3:-1.8;target(from,0,3.0);wait(7);target(to,0,3.0);wait(9);}
  const x=bin==='repair'?4.65:bin==='scrap'?-4.65:0,z=bin==='stage'?-3.6:2.9;target(x,z,4.4);wait(9);target(x,z,1.05);wait(7);mag(false);wait(7);
  if(attempts%10===0)console.log(job.moduleId,attempts,w.delivered,w.receiverStates.map(b=>b.message));
 }
 const result={id:job.moduleId,index,won:won(),failed:w.failed,items:w.items.length,attempts,retries,simulatedSeconds:w.time,delivered:w.delivered,receivers:w.receiverStates,deliveries,commands};results.push(result);fs.writeFileSync('reports/chapter-physics.json',JSON.stringify({date:new Date().toISOString(),method:'Adaptive crane targets, magnet and elapsed time only. No scripted cargo placement, fixtures, forced joints or direct scoring. Built-in lost-part recovery may run.',results},null,2));console.log(job.moduleId,result.won,result.failed,result.attempts,result.delivered);assert(result.won,JSON.stringify({id:job.moduleId,failed:w.failed,delivered:w.delivered,bins:w.receiverStates}));
}

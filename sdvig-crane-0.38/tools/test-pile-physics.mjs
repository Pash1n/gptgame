import {CranePhysics,JOBS} from '../src/physics.js';
import {performance} from 'node:perf_hooks';import assert from 'node:assert/strict';import fs from 'node:fs';
const summaries=[];
for(let id=19;id<22;id++){
 const mission=JOBS[id],start=performance.now(),w=new CranePhysics({seed:mission.seed,mission});const setupMs=performance.now()-start;assert.equal(w.items.length,[120,240,400][id-19]);assert(w.items.every(i=>i.body.mass>0));assert(w.items.every(i=>i.body.sleepState===2));
 const initial=w.items.map(i=>i.body.position.clone()),times=[],states=[];let maxHeld=0,maxAwake=0;
 const run=(steps,move=false)=>{for(let j=0;j<steps;j++){if(move){const t=j/60;w.setTarget(Math.sin(t*.8)*2.7,-1.3+Math.cos(t*.7)*1.2,j<180?2.5:3.7);if(j===0)w.setMagnet(true);if(j===400)w.setMagnet(false);}const t=performance.now();w.step(1/60);times.push(performance.now()-t);maxHeld=Math.max(maxHeld,w.held.size);maxAwake=Math.max(maxAwake,w.items.filter(i=>!i.delivered&&i.body.sleepState!==2).length);assert(!w.failed);if(j%60===0)states.push({time:w.time,awake:w.items.filter(i=>i.body.sleepState!==2).length});}};
 run(180);const idleTimes=times.splice(0);run(720,true);const disturbed=w.items.filter((i,k)=>i.body.position.distanceTo(initial[k])>.12).length;assert(disturbed>0);assert(maxAwake>0);assert(maxHeld>0);assert(w.items.every(i=>i.body.position.toArray().every(Number.isFinite)));
 const stat=a=>{a.sort((a,b)=>a-b);return{medianMs:a[Math.floor(a.length*.5)],p95Ms:a[Math.floor(a.length*.95)],maxMs:a.at(-1)}};
 summaries.push({count:w.items.length,setupMs,idle:stat(idleTimes),active:stat(times),maxHeld,maxAwake,disturbed,states});console.log(JSON.stringify(summaries.at(-1)));
}
fs.writeFileSync('reports/pile-physics.json',JSON.stringify({date:new Date().toISOString(),description:'Node CPU step timings only; no rendered FPS. Native control targets and magnet, no cargo position edits. All bodies dynamic, sleeping on load, contact and attraction wake them.',summaries},null,2));

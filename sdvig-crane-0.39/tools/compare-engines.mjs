import {initJolt} from '../src/jolt-backend.js';
import {CranePhysics as JoltCrane,JOBS} from '../src/physics.js';
import {CranePhysics as CannonCrane} from '../../sdvig-crane-0.38/src/physics.js';
import {performance} from 'node:perf_hooks';import fs from 'node:fs';import assert from 'node:assert/strict';
await initJolt();const results=[];
const summarize=a=>{a.sort((a,b)=>a-b);return{medianMs:a[Math.floor(a.length*.5)],p95Ms:a[Math.floor(a.length*.95)],meanMs:a.reduce((s,v)=>s+v,0)/a.length,maxMs:a.at(-1)}};
for(let id=19;id<22;id++)for(const [engine,Constructor]of [['Cannon 0.38',CannonCrane],['Jolt 0.39',JoltCrane]]){
 const mission=JOBS[id],w=new Constructor({seed:mission.seed,mission}),idle=[],active=[];let maxHeld=0,maxAwake=0;
 for(let n=0;n<900;n++){const j=n-180,t=j/60;if(n>=180){w.setTarget(Math.sin(t*.8)*2.7,-1.3+Math.cos(t*.7)*1.2,j<180?2.5:3.7);if(j===0)w.setMagnet(true);if(j===400)w.setMagnet(false);}const start=performance.now();w.step(1/60);(n<180?idle:active).push(performance.now()-start);maxHeld=Math.max(maxHeld,w.held.size);maxAwake=Math.max(maxAwake,w.items.filter(i=>!i.delivered&&i.body.sleepState!==2).length);}
 assert(!w.failed);assert(maxHeld>0);assert(w.items.every(i=>i.body.position.toArray().every(Number.isFinite)));results.push({engine,count:w.items.length,idle:summarize(idle),active:summarize(active),maxHeld,maxAwake});console.log(JSON.stringify(results.at(-1)));w.world.dispose?.();
}
fs.writeFileSync('reports/engine-comparison.json',JSON.stringify({date:new Date().toISOString(),method:'Serial on same Node process/machine, same 0.38 baked layouts, same target/magnet script, both fixed 1/60 step, 3s idle +12s motion, physics step wall CPU including JS bridge/game checks; no rendering or hardware FPS. Different solvers need not produce identical trajectories or contact counts. Fresh world each run. Single thread Jolt, no static pile substitution.',results},null,2));

import{MODULES,migrateStation,moduleState,moduleDone}from'./station.js';
const p=(type,x,z,y=.95,rotation={x:.04,y:.16,z:.04})=>({type,x,z,y,rotation});
export const ASSEMBLY_JOB=14;
// Each authored layout has its own target arrangement; clutter grows from 18 to 30 pieces.
const targets=[
 [p('housing',-1.8,-1.65,.8),p('shaft',1.25,-1.7,.8,{x:1.15,y:.5,z:.1}),p('shaft',-2.5,.45,.8,{x:.9,y:-.5,z:.1}),p('cog',.05,.45,.7,{x:1.4,y:.1,z:0}),p('cog',2.7,.4,.8,{x:1.5,y:0,z:.1}),p('cover',.3,-3,.8)],
 [p('engineBlock',-2.1,-1,.9),p('crank',1.1,-1.8,.8,{x:0,y:.8,z:.2}),p('piston',-1,.8),p('piston',2.4,.2),p('flywheel',-3.7,-2.7,1,{x:0,y:0,z:Math.PI/2}),p('engineHead',.3,-3.2)],
 [p('genFrame',-3.1,-2.4),p('coil',-1.8,.7),p('coil',2.7,-2.0),p('rotor',-1.6,-1.5),p('genCap',3.1,.4)],
 [p('radiator',-2.8,-2.1,.9,{x:Math.PI/2,y:0,z:0}),p('pump',1,-1.5),p('coolantPipe',-2,.6),p('coolantPipe',2.7,.2),p('fan',0,.5),p('coolantTank',.1,-3.1)],
 [p('console',-3,-2.4),p('circuit',-1.7,.7),p('circuit',1.8,-1.7),p('meter',-.4,-2),p('meter',3.2,-2.3),p('lever',2.6,.5),p('harness',-.2,1.2)]
];
const slots=[[-4,-3],[-.7,-1.4],[3.9,-1.8],[3.8,-3.3],[-2.8,1.7],[-1.3,1.6],[1.65,1.5],[.2,2.5],[-3.5,-.5],[-4.4,-2.2],[4.4,-1.4],[3.3,-.9],[-4.7,.2],[.8,-.6],[-1.4,-3.3],[2.8,-3.2],[-3.6,1.25],[3.9,.6],[-1,3],[.7,1.8],[-4.1,-1.2],[4,-2.6],[-2.8,-3.2],[1.6,2.8],[-.9,-2.6],[3.4,1.4],[-2.1,-2.6],[.8,.5],[-1.6,-.4],[2.3,-.7]];
export const STATION_JOBS=MODULES.map((m,i)=>({...m,id:undefined,moduleId:m.id,name:`${i+1}/5 · ${m.name}`,assembly:true,strictBins:true,gateGap:2.8,note:`Детали для узла «${m.name}» — в голубой приёмник справа. Лишний металл — в оранжевый слева. Если в приёмнике есть лишнее, сначала вытащи его. ${m.tip}`,hint:m.tip,layout:[...targets[i],...slots.slice(0,18+i*3).map(([x,z],k)=>p(i===2&&k%7===0?'scrapcoil':['bolt','pipe','gear','wheel'][k%4],x,z,k===22&&i>0?1.7:.8))]}));
export const REQUISITION=STATION_JOBS[0];
export function depotCount(save,type,id='gearbox'){const m=id==='station'?null:MODULES.find(m=>m.id===id);if(!m)return type.startsWith('unit-')?(moduleDone(save,type.slice(5))?1:0):MODULES.every(m=>moduleDone(save,m.id))?1:0;const n=m.needs[type]||0;return Math.min(n,Math.max(0,Math.floor(Number(moduleState(save,id).parts[type])||0)));}
export function partsReady(save,id='gearbox'){const m=id==='station'?{needs:Object.fromEntries([...MODULES.map(m=>['unit-'+m.id,1]),['driveCoupler',1],['stationHoses',1]])}:MODULES.find(m=>m.id===id);return !!m&&Object.entries(m.needs).every(([t,n])=>depotCount(save,t,id)>=n);}
export function receivePart(save,type,id='gearbox'){const m=MODULES.find(m=>m.id===id);if(!m?.needs[type])return false;migrateStation(save);moduleState(save,id).parts[type]=Math.min(m.needs[type],depotCount(save,type,id)+1);if(id==='gearbox')save.stationParts={...moduleState(save,id).parts};return true;}

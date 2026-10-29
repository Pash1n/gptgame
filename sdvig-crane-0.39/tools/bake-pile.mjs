import {CranePhysics,TYPES} from '../src/physics.js';
import fs from 'node:fs';
const layouts={},report=[];
for(const count of [120,240,400]){
 let seed=38000+count;const rnd=()=>((seed=(Math.imul(seed,1664525)+1013904223)|0)>>>0)/4294967296;
 const big=['housing','engineBlock','genFrame','console','radiator','engine','cover','engineHead'];
 const other=['bolt','gear','pipe','wheel','scrapcoil','cog','shaft','piston','coil','rotor','genCap','pump','coolantPipe','fan','coolantTank','circuit','meter','lever','harness','crank','flywheel'];
 const mission={seed:38000+count,heap:true,strictBins:true,baked:true,needs:{},layout:[]};
 const world=new CranePhysics({seed:mission.seed,mission});world.initializing=true;
 // Drop low-energy layers, rather than starting intersecting bodies inside each other.
 for(let i=0;i<count;i++){
  const type=i<big.length?big[i]:other[Math.floor(rnd()*other.length)];
  const x=(rnd()-.5)*7.3,z=-1.5+(rnd()-.5)*3.8;
  let top=0;for(const item of world.items){item.body.updateAABB();const a=item.body.aabb;if(Math.abs(item.body.position.x-x)<1.15&&Math.abs(item.body.position.z-z)<1.15)top=Math.max(top,a.upperBound.y);}
  world.spawn(type,{x,y:top+.85,z},i,{x:(rnd()-.5)*Math.PI,y:rnd()*Math.PI*2,z:(rnd()-.5)*Math.PI});
  for(let j=0;j<18;j++)world.world.step(1/120);
 }
 for(let j=0;j<960;j++)world.world.step(1/120);
 const maxSpeed=Math.max(...world.items.map(i=>i.body.velocity.length()));
 layouts[count]=world.items.map(i=>({type:i.type,x:+i.body.position.x.toFixed(5),y:+i.body.position.y.toFixed(5),z:+i.body.position.z.toFixed(5),quaternion:i.body.quaternion.toArray().map(v=>+v.toFixed(7))}));
 report.push({count,types:new Set(world.items.map(i=>i.type)).size,maxSpeed,height:Math.max(...world.items.map(i=>i.body.aabb.upperBound.y)),sleeping:world.items.filter(i=>i.body.sleepState===2).length});console.log(report.at(-1));
}
fs.writeFileSync('src/pile-layouts.js','// Settled by Cannon-es; all parts remain dynamic and wake on physical contact.\nexport const PILE_LAYOUTS='+JSON.stringify(layouts)+';\n');fs.writeFileSync('reports/pile-bake.json',JSON.stringify({date:new Date().toISOString(),report},null,2));

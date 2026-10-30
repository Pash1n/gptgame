import {route} from './navigation.js';
import {Warehouse} from './warehouse.js';
import {clone} from './metiz-catalog.js';
export const BENCH={x:2.9,z:4.4,width:6.4,depth:.6};
export const SEATS=Array.from({length:6},(_,i)=>({x:.4+i,z:4.35,approachZ:3.65}));
export const hireCost=count=>count===2?15000:30000;
export const hiringInvestment=count=>count===2?0:count===3?15000:45000;
export const newPayroll=()=>({shift:1,orders:0,accrued:0,due:0,paid:0,lastBill:0,lastPaid:0});
export function scaleOldSave(input){const s=clone(input);s.cash*=10;s.profit*=10;const contents=c=>{for(const l of Object.values(c||{}))l.cost*=10};for(const p of s.items){p.cost*=10;if(p.packCost!==undefined)p.packCost*=10;contents(p.contents);}if(s.trade){for(const k of['price','cost','fee','caseFee'])if(s.trade[k]!==undefined)s.trade[k]*=10;for(const c of s.trade.manifests||[])contents(c);}for(const h of s.history||[])for(const k of['price','profit'])if(h[k]!==undefined)h[k]*=10;if(s.packingJob){s.packingJob.offer.price*=10;s.packingJob.currencyLegacy=true;contents(s.packingJob.draft);for(const o of s.packingJob.origins||[])o.cost*=10;}for(const w of s.pickers||[])if(w.carry)w.carry.cost*=10;if(s.picker?.carry)s.picker.carry.cost*=10;return s;}
export function upgradeStaffSave(input,blank,alreadyScaled=false){const old=input;const s=alreadyScaled?clone(old):scaleOldSave(old);const crew=s.pickers||[s.picker];const refund=(crew.length===2?15000:0);s.cash+=refund;if(crew.length===1){const second=blank();second.x=7.4;second.z=3.4;crew.push(second);}s.pickers=crew;s.picker=clone(crew[0]);s.version=5;s.currency=10;s.payroll=newPayroll();s.riggerRest=[null,null];s.migration={from:old.version,refundedHire:refund};if(s.packingJob)s.packingJob.currencyLegacy=true;return s;}
export function restWorker(game,w,dt,seatIndex){
 const seat=SEATS[[4,5,0,1,2,3][seatIndex]];if(!seat)return false;const pending=seatIndex<2?(seatIndex?game.truckQueue:game.warehouseQueue).length>0:game.pickQueue.length>0&&!!game.openCase();
 if(w.job||w.carry){w.rest=null;w.idleFor=0;return false;}
 let rest=w.rest;
 if(rest?.phase==='walking'&&pending){w.rest=null;w.path=[];w.state='idle';w.idleFor=0;return false;}
 if(!rest){if(pending||w.state!=='idle'){w.idleFor=0;return false;}w.idleFor=(w.idleFor||0)+dt;if(w.idleFor<3)return false;const obstacles=game.pickerObstacles();const path=route(w,{x:seat.x,z:seat.approachZ},obstacles);if(!path){w.idleFor=2;return false;}w.rest=rest={phase:'walking',seat:seatIndex,t:0};w.path=path;w.state='walking';game.revision++;}
 if(rest.phase==='walking'){const previous=game.worker;game.worker=w;let walking;try{walking=Warehouse.prototype.walkWorker.call(game,dt)}finally{game.worker=previous;}if(walking)return true;rest.phase='sitting';rest.t=0;w.state='resting';w.speed=0;w.travelSpeed=0;w.turnRate=0;game.revision++;}
 if(rest.phase==='sitting'||rest.phase==='seated'){if(pending){rest.phase='rising';rest.t=0;rest.fromSit=w.sit||0;rest.fromZ=w.z;w.state='rising';game.revision++;}else{rest.t=Math.min(.65,rest.t+dt);const t=rest.phase==='seated'?1:rest.t/.65;w.x=seat.x;w.z=seat.approachZ+(seat.z-seat.approachZ)*t;w.angle=Math.PI;w.sit=t;w.y=0;if(t===1)rest.phase='seated';return true;}}
 if(rest.phase==='rising'){rest.t=Math.min(.5,rest.t+dt);const t=rest.t/.5;w.x=seat.x;w.z=rest.fromZ+(seat.approachZ-rest.fromZ)*t;w.angle=Math.PI;w.sit=rest.fromSit*(1-t);w.travelSpeed=0;w.speed=0;if(t===1){w.rest=null;w.sit=0;w.state='idle';w.idleFor=0;game.revision++;}return true;}
 return true;
}

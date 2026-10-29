const p=(type,x,z,y=.95,rotation={x:0,y:0,z:0})=>({type,x,z,y,rotation});
// Authored clusters leave a way to reach every target; loose clutter has real bodies.
export const ASSEMBLY_JOB=14;
export const REQUISITION={name:'Станция · редуктор',assembly:true,seed:361,needs:{housing:1,shaft:2,cog:2,cover:1},note:'Достань корпус, два вала, две шестерни и крышку. Все детали редуктора — в голубой приёмник справа. Лишний лом можно убрать в оранжевый. Затем соберём узел на верстаке.',hint:'WASD — перемещение, Q / E — высота, пробел — магнит. Нужные детали показаны сверху. Верстак сохраняет каждую доставленную деталь.',layout:[
 p('housing',-1.8,-1.65,.8),p('shaft',1.25,-1.7,.8,{x:1.15,y:.5,z:.1}),p('shaft',-2.5,.45,.8,{x:.9,y:-.5,z:.1}),p('cog',.05,.45,.7,{x:1.4,y:.1,z:0}),p('cog',2.7,.4,.8,{x:1.5,y:0,z:.1}),p('cover',.3,-3,.8,{x:.05,y:.2,z:.1}),
 p('engine',-3.5,-2.8),p('pipe',-.15,-1.3),p('gear',2.9,-2),p('tire',3.65,-3),p('bolt',-2.8,1.7),p('pipe',-1.3,1.6),p('gear',1.65,1.5),p('tire',.2,2.5),p('bolt',-3.5,-.5),p('gear',-4.4,-2.2),p('pipe',4.4,-1.4),p('bolt',3.3,-.9),p('tire',-4.7,.2),p('gear',.8,-.6),p('bolt',-1.4,-3.3),p('pipe',2.8,-3.2),p('gear',-2.8,-3.2,1.65),p('bolt',3.9,.6),p('tire',-1,3),p('bolt',.7,1.8),p('gear',-3.6,1.25),p('pipe',1.6,2.8),p('bolt',-4.1,-1.2),p('gear',4,-2.6)
]};
export function depotCount(save,type){return Math.min(REQUISITION.needs[type]||0,Math.max(0,Math.floor(Number(save.stationParts?.[type])||0)));}
export function partsReady(save){return Object.entries(REQUISITION.needs).every(([t,n])=>depotCount(save,t)>=n);}
export function receivePart(save,type){if(!REQUISITION.needs[type])return false;save.stationParts??={};save.stationParts[type]=Math.min(REQUISITION.needs[type],depotCount(save,type)+1);return true;}

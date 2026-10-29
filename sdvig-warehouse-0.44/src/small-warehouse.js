import * as T from 'three';
import {STORAGE_SLOTS,DOCK} from './layout.js';
// Static architecture is merged by material. Decorative hardware has no rigid bodies.
export function buildSmallWarehouse(scene,{B,m,board,contactShadow,asset}){
 const group=new T.Group();group.name='Four-bay warehouse';scene.add(group);
 const tex=(name,rx=1,ry=1)=>{const t=(name.includes('brick')?m.brickMap:m.slabMap).clone();t.colorSpace=T.SRGBColorSpace;t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(rx,ry);t.anisotropy=8;return t;};
 const brick=tex('warehouse-brick.png',.50,.50),slab=tex('warehouse-slab.png',.24,.24);
 const brickMat=new T.MeshStandardMaterial({map:brick,color:'#d4c6b5',roughness:.96,bumpMap:brick,bumpScale:.055});
 const floorMat=new T.MeshStandardMaterial({map:slab,color:'#b7c0bf',roughness:.74,bumpMap:slab,bumpScale:.014});
 const darkFloor=floorMat.clone();darkFloor.color.set('#626e70');darkFloor.roughness=.91;
 const grout=new T.MeshStandardMaterial({color:'#485352',roughness:.98});
 const beam=m.teal.clone();beam.color.set('#537d76');
 const b=new B();
 b.box(100,.3,60,darkFloor,[8,-.65,10],undefined,.015);
 // Continuous concrete slab with expansion joints, foundation and chipped edge cap.
 b.box(21,.42,11.5,floorMat,[7.5,-.22,0],undefined,.045);
 b.box(18,.12,12,darkFloor,[25.5,-.09,0],undefined,.015);
 b.box(21,.44,.22,darkFloor,[7.5,-.30,5.75],undefined,.04);
 for(let x=-3;x<=18;x+=3){b.box(.018,.005,11.4,grout,[x,.002,0]);for(const z of[-5.5,5.5]){b.box(.12,.005,.12,m.iron,[x,.005,z]);for(const dx of[-.03,.03])b.cyl(.012,.012,.007,m.steel,[x+dx,.014,z],undefined,6);}}
 for(const z of[-1,3.4])b.box(21,.005,.014,grout,[7.5,.002,z]);
 // Brick piers and sills leave actual openings for sunlight and shadow patterns.
 for(const x of[0,6,12]){
  b.box(6,1.65,.36,brickMat,[x,.825,-5.5],undefined,.018);
  b.box(6,2.4,.36,brickMat,[x,7.05,-5.5],undefined,.018);
  for(const dx of[-2.88,2.88])b.box(.24,4.2,.38,brickMat,[x+dx,3.75,-5.5]);
  b.box(5.7,.12,.52,m.ivory,[x,1.7,-5.40],undefined,.016);
  b.box(5.7,.09,.15,m.iron,[x,5.85,-5.28],undefined,.012);
  const pane=new T.Mesh(new T.PlaneGeometry(5.65,4.05),m.window);pane.position.set(x,3.78,-5.48);group.add(pane);
  for(let xx=x-2.7;xx<x+2.8;xx+=.9)b.box(.048,4.12,.09,m.iron,[xx,3.78,-5.22],undefined,.008);
  for(const y of[1.76,3.12,4.48,5.8])b.box(5.65,.048,.09,m.iron,[x,y,-5.22],undefined,.008);
  for(const side of[-1,1]){b.box(.035,1.27,.06,m.ivory,[x+side*2.67,2.45,-5.16]);b.box(.13,.035,.09,m.iron,[x+side*2.60,3.03,-5.10]);}
 }
 b.box(3,2.4,.36,brickMat,[16.5,7.05,-5.5]);
 b.box(3,5.8,.20,m.teal,[16.5,2.9,-5.48],undefined,.02);
 for(let y=.12;y<5.8;y+=.18)b.box(2.83,.024,.04,m.iron,[16.5,y,-5.35]);
 b.box(3.2,.16,.20,m.iron,[16.5,.12,-5.28]);
 b.box(.36,7.8,11.1,brickMat,[-3.12,3.9,0],undefined,.015);
 b.box(.08,.45,11,m.iron,[-2.90,.225,0]);
 // Riveted steel columns, two supported runway rails and roof trusses.
 for(const x of[-2.7,9,17.7]){
  for(const z of[-5.1,5.1]){
   if(z>0&&x===9)continue;
   b.box(.25,8.4,.29,beam,[x,4.2,z],undefined,.018);
   for(const zz of[-.18,.18])b.box(.44,8.4,.07,beam,[x,4.2,z+zz],undefined,.012);
   b.box(.75,.11,.70,m.iron,[x,.055,z],undefined,.022);
   for(const dx of[-.27,.27])for(const dz of[-.23,.23]){b.cyl(.035,.035,.12,m.steel,[x+dx,.09,z+dz],undefined,6);b.cyl(.052,.052,.025,m.iron,[x+dx,.15,z+dz],undefined,6);}
   b.box(.55,.17,.65,beam,[x,7.92,z],undefined,.02);
   for(const y of[.4,1.1,7.6,8.0])for(const dx of[-.15,.15])b.cyl(.03,.03,.035,m.steel,[x+dx,y,z+.23],[Math.PI/2,0,0],6);
   if(z>0){b.box(.49,1.2,.49,m.hazard,[x,.70,z],undefined,.025);}
  }
  b.box(.16,.16,10.5,m.iron,[x,8.97,0],undefined,.01);
  for(let z=-4;z<5;z+=2)b.box(.09,.09,2.4,beam,[x,8.65,z],[.35*(z%4?1:-1),0,0],.01);
 }
 for(const z of[-5.1]){b.box(21,.44,.27,beam,[7.5,8.05,z],undefined,.018);b.box(21,.10,.34,m.steel,[7.5,8.35,z],undefined,.012);}
 // Busbars, conduit clamps, junction boxes, ventilation and suspended lights.
 for(const y of[.6,.78,6.24]){b.cyl(.035,.035,20,m.iron,[7.5,y,-5.18],[0,0,Math.PI/2],12);for(let x=-2;x<18;x+=1.5)b.box(.06,.13,.05,m.steel,[x,y,-5.15],undefined,.006);}
 for(const x of[0,6,12]){
  b.box(.55,.70,.20,m.ivory,[x,1.04,-5.12],undefined,.025);b.box(.035,.15,.025,m.black,[x+.16,1.04,-4.995],undefined,.004);
  b.cyl(.025,.025,1.2,m.iron,[x,6.9,-2.8],undefined,8);
  b.box(2.25,.16,.50,m.iron,[x,6.30,-2.8],undefined,.045);b.box(2.10,.035,.41,m.white,[x,6.20,-2.8],undefined,.015);
  for(const dx of[-.9,.9])b.box(.08,.06,.51,m.steel,[x+dx,6.18,-2.8]);
 }
 // Workbench: thick planks, drawers, pegboard, bench vice and little tools.
 const wx=10.6;for(const x of[wx-1.35,wx+1.35])for(const z of[-4.9,-4.0])b.box(.09,.88,.09,m.iron,[x,.44,z],undefined,.012);
 b.box(3.05,.16,1.15,m.wood,[wx,.98,-4.45],undefined,.025);b.box(2.8,.07,.8,m.wood,[wx,.24,-4.45],undefined,.015);
 for(const x of[wx-.85,wx]){b.box(.72,.58,.78,m.teal,[x,.62,-4.40],undefined,.025);for(const y of[.42,.62,.82]){b.box(.66,.16,.035,m.teal,[x,y,-3.99],undefined,.01);b.box(.22,.025,.04,m.steel,[x,y,-3.95],undefined,.009);}}
 b.box(2.9,1.25,.07,m.iron,[wx,2.15,-5.12],undefined,.02);
 for(let x=wx-1.3;x<wx+1.4;x+=.15)for(let y=1.62;y<2.75;y+=.15)b.cyl(.012,.012,.012,m.black,[x,y,-5.073],[Math.PI/2,0,0],5);
 for(let j=0;j<6;j++){const x=wx-1.1+j*.36;b.box(.055,.36-j*.025,.04,m.steel,[x,2.22,-4.98],undefined,.01);b.ring(.06,.018,m.steel,[x,2.44-j*.012,-4.98]);}
 b.box(.30,.15,.24,m.teal,[wx+1,1.12,-4.25],undefined,.025);b.box(.40,.07,.32,m.iron,[wx+1,1.24,-4.25],undefined,.012);b.cyl(.035,.035,.48,m.steel,[wx+1,1.15,-4.25],[0,0,Math.PI/2],10);b.cyl(.02,.02,.20,m.iron,[wx+1.25,1.15,-4.25],undefined,8);
 b.cyl(.09,.09,.16,m.ivory,[wx-1.0,1.14,-4.48],undefined,16);b.ring(.065,.012,m.ivory,[wx-.89,1.15,-4.48],[0,Math.PI/2,0]);
 // Storage cabinet, fire equipment and a small ladder at the left end.
 b.box(.72,1.85,1.25,m.teal,[-2.38,.925,-2.45],undefined,.035);
 for(const z of[-2.76,-2.14]){b.box(.025,1.72,.59,m.teal,[-2.005,.93,z],undefined,.018);b.box(.04,.20,.035,m.steel,[-1.97,1.0,z-.13]);for(let y=1.42;y<1.7;y+=.055)b.box(.035,.014,.34,m.black,[-1.97,y,z]);}
 b.cyl(.14,.14,.57,m.coral,[-2.65,.50,1.8],undefined,20);b.cyl(.045,.045,.11,m.steel,[-2.65,.84,1.8],undefined,10);b.tube([[-2.64,.85,1.8],[-2.42,.82,1.8],[-2.44,.43,1.8]],.022,m.black);
 b.box(.045,.58,.45,m.coral,[-2.88,1.34,1.8],undefined,.012);
 for(const z of[2.3,2.8])b.box(.07,2.2,.07,m.steel,[-2.64,1.09,z],[0,0,-.12],.012);for(let y=.22;y<2.1;y+=.28)b.box(.07,.035,.56,m.steel,[-2.64+(y-1.09)*.12,y,2.55]);
 // Exactly four numbered storage pads. No decorative extra bays.
 for(const p of STORAGE_SLOTS){
  for(const z of[-1.02,1.02])b.box(2.65,.008,.075,m.yellow,[p.x,.012,p.z+z]);for(const x of[-1.325,1.325])b.box(.075,.008,2.11,m.yellow,[p.x+x,.012,p.z]);
  const root=new T.Group();board(root,p.name,'МЕСТО',[p.x,.025,p.z+1.28],.72,.37);root.children[0].rotation.x=-Math.PI/2;group.add(root);
 }
 for(const z of[-1.37,1.37])b.box(3.10,.008,.11,m.yellow,[DOCK.x,.015,DOCK.z+z]);for(const x of[-1.55,1.55])b.box(.11,.008,2.85,m.yellow,[DOCK.x+x,.015,DOCK.z]);
 for(let x=-1;x<17;x+=1.1)b.box(.48,.006,.06,m.ivory,[x,.012,3.6]);
 b.box(21,.04,.26,m.iron,[7.5,.015,5.45]);for(let x=-2.8;x<18;x+=.14)b.box(.025,.05,.22,m.black,[x,.017,5.45]);
 for(const x of[17.7])for(const z of[-3.2,1.9]){b.cyl(.12,.14,1.0,m.yellow,[x,.5,z],undefined,16);b.cyl(.125,.125,.25,m.iron,[x,.65,z],undefined,16);b.ball(.115,m.yellow,[x,1,z],[1,.4,1]);}
 // Computer and a generously sized interaction volume for desktop and touch.
 b.box(.93,.62,.095,m.iron,[wx,1.55,-4.48],undefined,.025);b.box(.10,.29,.10,m.iron,[wx,1.17,-4.48],undefined,.015);b.box(.48,.035,.30,m.iron,[wx,1.08,-4.43],undefined,.025);
 b.box(.72,.035,.24,m.black,[wx,1.085,-4.01],undefined,.025);for(let row=0;row<4;row++)for(let col=0;col<13;col++)b.box(.041,.009,.033,m.ivory,[wx-.31+col*.052,1.108,-4.09+row*.049],undefined,.004);
 b.ball(.07,m.ivory,[wx+.52,1.09,-4.03],[.65,.35,1]);b.ball(.018,m.cyan,[wx+.39,1.29,-4.42]);
 b.tube([[wx-.70,1.08,-4.75],[wx-.70,1.70,-4.75],[wx-.45,1.90,-4.55]],.025,m.iron);b.add(new T.ConeGeometry(.16,.14,16,1,true),m.teal,[wx-.44,1.88,-4.54]);b.cyl(.14,.14,.012,m.white,[wx-.44,1.805,-4.54],undefined,16);
 group.add(b.build());
 const screenCanvas=document.createElement('canvas');screenCanvas.width=800;screenCanvas.height=480;const sc=screenCanvas.getContext('2d');sc.fillStyle='#315b76';sc.fillRect(0,0,800,480);sc.fillStyle='#d3d8ca';sc.fillRect(0,0,800,23);sc.fillRect(0,450,800,30);sc.fillStyle='#34483d';sc.font='12px Tahoma';sc.fillText('Склад OS   /   Рабочая станция 01',14,16);const names=['Поставщики','Покупатели','Мой склад','Контракты'];for(let i=0;i<4;i++){const im=m.desktopIcons.image,half=im.width/2;sc.drawImage(im,(i%2)*half,Math.floor(i/2)*im.height/2,half,im.height/2,15,35+i*98,70,70);sc.fillStyle='#f2f4e7';sc.font='12px Tahoma';sc.fillText(names[i],15,118+i*98);}sc.fillStyle='#dfdfd1';sc.fillRect(155,65,600,322);sc.fillStyle='#2d5974';sc.fillRect(160,70,590,25);sc.fillStyle='#fff';sc.font='bold 13px Tahoma';sc.fillText('Задачи.txt — Блокнот',174,88);sc.fillStyle='#fffef2';sc.fillRect(160,98,590,283);sc.fillStyle='#354c40';sc.font='bold 25px Tahoma';sc.fillText('Добро пожаловать!',188,150);sc.font='18px Tahoma';sc.fillText('Твой склад начинается здесь.',188,191);sc.fillText('Открой поставщиков на рабочем столе.',188,226);const screenMap=new T.CanvasTexture(screenCanvas);screenMap.colorSpace=T.SRGBColorSpace;const monitorDisplay=new T.Mesh(new T.PlaneGeometry(.80,.48),new T.MeshBasicMaterial({map:screenMap}));monitorDisplay.position.set(wx,1.55,-4.423);group.add(monitorDisplay);
 const officeHit=new T.Mesh(new T.BoxGeometry(3.2,2.1,1.3),new T.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}));officeHit.position.set(wx,1.1,-4.45);officeHit.layers.set(2);officeHit.name='office-hit';officeHit.userData.office=true;group.add(officeHit);
 board(group,'СКЛАД 01','ЧЕТЫРЕ МЕСТА · НАЧАЛО ПУТИ',[3,6.8,-5.25],4.2,1.05);
 board(group,'ПРИЁМ / ОТГРУЗКА','КРАНОМ ПРЯМО В КУЗОВ',[14.5,2.8,-5.20],3.2,.83);
 const sign=new T.Group();board(sign,'МАНЁВР','ВРЕМЕННАЯ ПЕРЕСТАНОВКА',[14.5,.028,3.0],2.8,.62);sign.children[0].rotation.x=-Math.PI/2;group.add(sign);
 // Decals are generated surface dirt, not additional physical objects or lights.
 const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d');let seed=42;const rnd=()=>((seed=(1664525*seed+1013904223)>>>0)/4294967296);
 for(let i=0;i<95;i++){const x=rnd()*512,y=rnd()*512,r=2+rnd()*24,g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'rgba(30,24,16,.10)');g.addColorStop(1,'rgba(30,24,16,0)');ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);}
 ctx.strokeStyle='rgba(32,31,25,.12)';ctx.lineWidth=5;for(const x of[185,235]){ctx.beginPath();ctx.moveTo(x,512);ctx.bezierCurveTo(x+30,390,x-80,270,x+25,70);ctx.stroke();}
 const dt=new T.CanvasTexture(c),decal=new T.Mesh(new T.PlaneGeometry(19,10),new T.MeshBasicMaterial({map:dt,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1}));decal.rotation.x=-Math.PI/2;decal.position.set(7,.009,0);decal.renderOrder=1;group.add(decal);
 return [group];
}

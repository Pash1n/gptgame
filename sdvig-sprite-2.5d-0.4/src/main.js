import{CraneProbe,BAYS,HALL}from './physics.js';
import{TouchCrane}from './touch-controls.js';
import{createShadowStamp,drawGroundShadows}from './contact-shadows.js';
import{project as baseProject,planeDelta,depthScale,bounds}from './projection.js';
const canvas=document.querySelector('canvas'),ctx=canvas.getContext('2d',{alpha:false}),$=s=>document.querySelector(s),assets={};
let game,scale=1,ox=0,oy=0,dpr=1,last=0,acc=0,paused=false,ready=false,renderFrames=0,physicsMs=0,renderMs=0,cameraX=0,cameraTarget=0;
const keys=new Set(),points=new Map(),STEP=1/120;
const shadowStamp=createShadowStamp();
const project=p=>baseProject({...p,x:p.x-cameraX});
const world=(x,y,z)=>project({x,y,z});
const cssToWorld=(dx,dy)=>planeDelta(dx*dpr/scale,dy*dpr/scale,{x:game.target.x-cameraX,y:6.5,z:game.target.z});
const touches=new TouchCrane({move:(dx,dy)=>{if(paused)return;const w=cssToWorld(dx,dy);game.setTarget(game.target.x+w.x,game.target.z+w.z)},raise:dy=>{if(!paused)game.setTarget(game.target.x,game.target.z,game.target.length-dy*dpr/scale/(68*depthScale(game.hook.position.z)))}});
function line(a,b,width,color){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}
function strip(name,a,b,h){const dx=b.x-a.x,dy=b.y-a.y;ctx.save();ctx.translate(a.x,a.y);ctx.rotate(Math.atan2(dy,dx));ctx.drawImage(assets[name],0,-h/2,Math.hypot(dx,dy),h);ctx.restore()}
function bay(b){const corners=[[-1.15,-.93],[1.15,-.93],[1.15,.93],[-1.15,.93]].map(([x,z])=>world(b.x+x,.006,b.z+z));ctx.strokeStyle=b.row===1?'#cbb05f':'#d1ba74';ctx.lineWidth=3;ctx.beginPath();corners.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.stroke();const p=world(b.x,0,b.z+1.16);ctx.fillStyle='#6b6049';ctx.font='bold 18px system-ui';ctx.textAlign='center';ctx.fillText(String(b.n).padStart(2,'0'),p.x,p.y);}
function drawItem(item){const b=bounds(item,project);ctx.drawImage(assets[item.type],b.left,b.top,b.right-b.left,b.bottom-b.top);}
function drawSlings(){if(!game.attached)return;const item=game.attached,b=item.body.position,top=project(game.throat());for(const [sx,sz]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const end=world(b.x+sx*item.size[0]*.41,b.y+item.size[1]*.5,b.z+sz*item.size[2]*.38);line(top,end,4.5,'#344245');line({x:top.x-.8,y:top.y},{x:end.x-.8,y:end.y},1,'#b5b4a1');}}
function depth(p){return .618*p.y+p.z}
function draw(){if(!ready)return;const start=performance.now();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#263435';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.setTransform(scale,0,0,scale,ox,oy);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';const offset=-82*cameraX,tileWidth=assets.warehouse.width/assets.warehouse.height*900;
 const first=Math.floor(-offset/tileWidth)-1,last=Math.ceil((1600-offset)/tileWidth)+1;
 for(let tile=first;tile<=last;tile++){
  ctx.save();ctx.translate(tile*tileWidth+offset,0);
  if(tile%2){ctx.translate(tileWidth,0);ctx.scale(-1,1);}
  ctx.drawImage(assets.warehouse,0,0,tileWidth,900);ctx.restore();
 }
 for(const b of BAYS)bay(b);for(const [z,label]of[[-1.55,'ДАЛЬНИЙ РЯД'],[1.25,'БЛИЖНИЙ РЯД']]){const p=world(cameraX-5.4,0,z);ctx.fillStyle='#675d4c';ctx.font='14px system-ui';ctx.textAlign='left';ctx.fillText(label,p.x-55,p.y-47)}
 drawGroundShadows(ctx,shadowStamp,game.items,project,depthScale);
 // Runways are suspended from the roof. There are no posts on the playable floor.
 for(const z of[-3.1,3.1]){
  for(let x=HALL.minX+1;x<HALL.maxX;x+=4.5)strip('rail',world(x,8.35,z),world(x,6.5,z),8);
  strip('rail',world(HALL.minX,6.5,z),world(HALL.maxX,6.5,z),20);
 }
 const rear=world(game.anchor.position.x,6.5,-3.1),front=world(game.anchor.position.x,6.5,3.1);
 // A double girder bridge spans depth, travels along the long X runways.
 ctx.save();ctx.transform(1,0,(front.x-rear.x)/(front.y-rear.y),1,rear.x,rear.y);
 ctx.drawImage(assets.bridge,-42,-12,84,front.y-rear.y+24);ctx.restore();
 const anchor=project(game.anchor.position),hook=project(game.hook.position),end=world(game.hook.position.x,game.hook.position.y+.22,game.hook.position.z);
 line(anchor,end,4,'#36433f');line({x:anchor.x-1,y:anchor.y},{x:end.x-1,y:end.y},1,'#b2af9a');
 const sorted=[...game.items,{type:'hook',body:game.hook}].sort((a,b)=>depth(a.body.position)-depth(b.body.position));for(const item of sorted){if(item.type==='hook'){const hk=depthScale(game.hook.position.z);ctx.drawImage(assets.hook,hook.x-14*hk,hook.y-36*hk,28*hk,52*hk)}else{if(game.attached===item)drawSlings();drawItem(item)}}
 const tk=depthScale(game.anchor.position.z);ctx.drawImage(assets.trolley,anchor.x-63*tk,anchor.y-29*tk,126*tk,65*tk);
 for(const [a,b]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const q=world(game.anchor.position.x+a*.35,.01,game.anchor.position.z+b*.35);line(q,{x:q.x-a*9,y:q.y},2.5,'#467d7c')}
 renderFrames++;renderMs=performance.now()-start;updateUI();}
function updateUI(){$('#grip').textContent=game.attached?'Отцепить':'Подцепить';$('#state').textContent=game.feedback||(game.attached?'Груз на стропах':'Крюк свободен');$('#pause-layer').hidden=!paused;}
function resize(){dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(innerWidth*dpr);canvas.height=Math.round(innerHeight*dpr);scale=Math.min(canvas.width/1600,canvas.height/900);ox=(canvas.width-1600*scale)/2;oy=(canvas.height-900*scale)/2;draw()}
function reset(){game=new CraneProbe();cameraX=cameraTarget=0;keys.clear();touches.clear();points.clear();acc=0;last=0;draw()}
function pause(v){paused=v;keys.clear();touches.clear();points.clear();acc=0;last=0;updateUI()}
function controls(dt){const x=(keys.has('KeyD')?1:0)-(keys.has('KeyA')?1:0),z=(keys.has('KeyS')?1:0)-(keys.has('KeyW')?1:0),h=(keys.has('KeyE')?1:0)-(keys.has('KeyQ')?1:0);game.setTarget(game.target.x+x*2.8*dt,game.target.z+z*2.8*dt,game.target.length+h*1.5*dt)}
function advanceStep(){controls(STEP);game.step(STEP);
 const x=game.anchor.position.x;
 if(x-cameraTarget < -3.7)cameraTarget=x+3.7;
 if(x-cameraTarget > 3.7)cameraTarget=x-3.7;
 cameraTarget=Math.max(HALL.minX+6.8,Math.min(HALL.maxX-6.8,cameraTarget));
 cameraX+=(cameraTarget-cameraX)*(1-Math.exp(-STEP/ .09));
}
function frame(t){requestAnimationFrame(frame);if(!last)last=t;const dt=Math.max(0,Math.min(.05,(t-last)/1000));last=t;if(paused)return;const start=performance.now();acc+=dt;let n=0;while(acc>=STEP&&n++<6){advanceStep();acc-=STEP}physicsMs=performance.now()-start;draw()}
function focus(){document.activeElement?.blur();canvas.focus({preventScroll:true})}
canvas.addEventListener('pointerdown',e=>{if(paused)return;e.preventDefault();canvas.setPointerCapture(e.pointerId);if(e.pointerType==='touch'){points.set(e.pointerId,true);touches.down(e.pointerId,e.clientX,e.clientY)}else focus()});
canvas.addEventListener('pointermove',e=>{if(e.pointerType==='touch'&&points.has(e.pointerId))touches.update(e.pointerId,e.clientX,e.clientY)});
for(const type of['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(type,e=>{points.delete(e.pointerId);touches.up(e.pointerId)});
$('#grip').addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();if(!paused)game.toggle();focus();draw()});$('#grip').addEventListener('click',e=>{if(e.detail===0&&!paused){game.toggle();draw()}});
$('#reset').onclick=()=>{reset();focus()};$('#pause').onclick=()=>pause(!paused);$('#resume').onclick=()=>{pause(false);focus()};
addEventListener('keydown',e=>{if(['KeyW','KeyA','KeyS','KeyD','KeyQ','KeyE','Space','KeyR','KeyP'].includes(e.code))e.preventDefault();if(e.code==='KeyP'&&!e.repeat){pause(!paused);return}if(paused)return;if(e.code==='Space'&&!e.repeat){game.toggle();draw()}else if(e.code==='KeyR'&&!e.repeat)reset();else keys.add(e.code)});addEventListener('keyup',e=>keys.delete(e.code));
addEventListener('blur',()=>{if(ready)pause(true)});document.addEventListener('visibilitychange',()=>{if(document.hidden&&ready)pause(true)});addEventListener('resize',resize);for(const type of['contextmenu','selectstart','dragstart'])document.addEventListener(type,e=>e.preventDefault());
async function init(){try{await Promise.all(['warehouse','cargo','crate','hook','trolley','beam','rail','bridge'].map(name=>new Promise((resolve,reject)=>{const image=new Image;image.onload=()=>{assets[name]=image;resolve()};image.onerror=()=>reject(Error('Ресурс '+name));image.src=globalThis.ProbeAssets?.[name]??`assets/${name}.png`;})));game=new CraneProbe();ready=true;$('#loading').hidden=true;resize();requestAnimationFrame(frame);if(new URLSearchParams(location.search).has('test'))globalThis.Probe25={snapshot:()=>({...game.snapshot(),cameraX,cameraTarget,renderFrames,physicsMs,renderMs,canvas:[canvas.width,canvas.height],paused,touches:touches.state()}),pause,reset,advance:s=>{for(let i=0;i<Math.round(s/STEP);i++)advanceStep();draw()},target:(x,z,length)=>game.setTarget(x,z,length),toggle:()=>{const result=game.toggle();draw();return result},project:(x,y,z)=>{const p=world(x,y,z);return{x:(p.x*scale+ox)/dpr,y:(p.y*scale+oy)/dpr}},touch:(kind,id,x,y)=>touches[kind](id,x,y)};}catch(e){$('#loading').textContent='Ошибка загрузки: '+e.message;console.error(e)}}
init();

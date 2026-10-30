import * as C from '../vendor/cannon-es.js';
export const HALL={minX:-16.8,maxX:6.8,minZ:-3.5,maxZ:3.5};
export const LIMITS={minX:HALL.minX+1.1,maxX:HALL.maxX-1.1,minZ:-2.5,maxZ:2.5,minLength:.65,maxLength:5.95};
const columns=[-3.4,.1,3.6,-6.9,-10.4,-13.9];
export const BAYS=columns.flatMap((x,i)=>[{x,z:-1.55,row:1,n:i<3?i+1:7+(i-3)*2},{x,z:1.25,row:2,n:i<3?i+4:8+(i-3)*2}]);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
// Unilateral, tension-only cable. A slack cable can never push the load.
class Cable extends C.Constraint{
 constructor(a,b,pa,pb,length,maxForce=22000){super(a,b,{collideConnected:false});this.pa=new C.Vec3(...pa);this.pb=new C.Vec3(...pb);this.length=length;this.eq=new C.ContactEquation(a,b);this.eq.minForce=-maxForce;this.eq.maxForce=0;this.eq.setSpookParams(2e7,5,1/120);this.equations.push(this.eq);this.a=new C.Vec3();this.b=new C.Vec3();}
 update(){const a=this.bodyA,b=this.bodyB,e=this.eq;a.quaternion.vmult(this.pa,this.a);b.quaternion.vmult(this.pb,this.b);b.position.vadd(this.b,e.ni);e.ni.vsub(a.position,e.ni);e.ni.vsub(this.a,e.ni);e.ni.normalize();e.ni.scale(this.length*.5,e.ri);e.ri.vadd(this.a,e.ri);e.ni.scale(-this.length*.5,e.rj);e.rj.vadd(this.b,e.rj);}
}
export class CraneProbe{
 constructor(){this.world=new C.World({gravity:new C.Vec3(0,-9.81,0)});this.world.solver.iterations=25;this.world.solver.tolerance=1e-8;this.world.allowSleep=true;this.world.defaultContactMaterial.friction=.67;this.world.defaultContactMaterial.restitution=0;this.world.defaultContactMaterial.contactEquationStiffness=2e7;this.world.defaultContactMaterial.contactEquationRelaxation=4;this.items=[];this.contacts=0;this.loadContacts=0;this.time=0;this.attached=null;this.feedback='';this.target={x:-2.5,z:-1.55,length:2.5};this.velocity={x:0,z:0,hoist:0};this.length=2.5;this.anchor=new C.Body({mass:0,type:C.Body.KINEMATIC,allowSleep:false,position:new C.Vec3(-2.5,6.5,-1.55)});this.world.addBody(this.anchor);
 this.hook=new C.Body({mass:45,shape:new C.Box(new C.Vec3(.12,.27,.12)),position:new C.Vec3(-2.5,3.78,-1.55),fixedRotation:true,linearDamping:.35,allowSleep:false});this.hook.collisionFilterGroup=2;this.hook.collisionFilterMask=1;this.world.addBody(this.hook);this.rope=new Cable(this.anchor,this.hook,[0,0,0],[0,.22,0],this.length);this.world.addConstraint(this.rope);
 const floor=new C.Body({mass:0,shape:new C.Box(new C.Vec3((HALL.maxX-HALL.minX)/2,.15,5)),position:new C.Vec3((HALL.minX+HALL.maxX)/2,-.15,0)});floor.label='floor';this.world.addBody(floor);
 for(const [x,z,sx,sz] of [[HALL.minX,0,.15,4],[HALL.maxX,0,.15,4],[(HALL.minX+HALL.maxX)/2,HALL.minZ,(HALL.maxX-HALL.minX)/2,.15],[(HALL.minX+HALL.maxX)/2,HALL.maxZ,(HALL.maxX-HALL.minX)/2,.15]])this.world.addBody(new C.Body({mass:0,shape:new C.Box(new C.Vec3(sx,4,sz)),position:new C.Vec3(x,4,z)}));
 this.cargo=this.addItem('cargo',-2.5,2,-1.55,420);this.addItem('crate',.1,.46,-1.55,680);this.addItem('crate',3.6,.46,1.25,680);this.attach(this.cargo,true);
 this.world.addEventListener('beginContact',e=>{this.contacts++;if(e.bodyA.item&&e.bodyB.item)this.loadContacts++});
 }
 addItem(type,x,y,z,mass){const size=type==='cargo'?[1.65,1.0,1.15]:[1.6,.92,1.2];const b=new C.Body({mass,shape:new C.Box(new C.Vec3(...size.map(v=>v/2))),position:new C.Vec3(x,y,z),fixedRotation:true,linearDamping:.28,sleepSpeedLimit:.055,sleepTimeLimit:.6});const item={id:this.items.length+1,type,size,mass,body:b};b.item=item;this.items.push(item);this.world.addBody(b);return item;}
 eye(item){return item.body.position.vadd(new C.Vec3(0,item.size[1]/2,0));}
 throat(){return this.hook.position.vadd(new C.Vec3(0,-.25,0));}
 attach(item,initial=false){const d=this.eye(item).distanceTo(this.throat());if(!initial&&d>1.3){this.feedback='Подведи крюк ближе к верху груза';return false}this.sling=new Cable(this.hook,item.body,[0,-.25,0],[0,item.size[1]/2,0],initial?1.03:Math.max(.5,d),16000);this.sling.collideConnected=true;this.world.addConstraint(this.sling);this.attached=item;item.body.allowSleep=false;item.body.wakeUp();this.feedback='';return true;}
 toggle(){if(this.attached){this.world.removeConstraint(this.sling);this.sling=null;this.attached.body.allowSleep=true;this.attached.body.wakeUp();this.attached=null;this.feedback='';return true}const t=this.throat();const item=this.items.toSorted?this.items.toSorted((a,b)=>this.eye(a).distanceTo(t)-this.eye(b).distanceTo(t))[0]:[...this.items].sort((a,b)=>this.eye(a).distanceTo(t)-this.eye(b).distanceTo(t))[0];return this.attach(item);}
 setTarget(x,z,length=this.target.length){this.target.x=clamp(x,LIMITS.minX,LIMITS.maxX);this.target.z=clamp(z,LIMITS.minZ,LIMITS.maxZ);this.target.length=clamp(length,LIMITS.minLength,LIMITS.maxLength);}
 step(dt){const a=this.anchor,p=a.position,v=this.velocity;
 // Input follows a short response filter. Only the suspended load has heavy inertia.
 const rate=(1-Math.exp(-dt/.035))/dt;
 v.x=(this.target.x-p.x)*rate;v.z=(this.target.z-p.z)*rate;
 const speed=Math.hypot(v.x,v.z),max=4.2;
 if(speed>max){v.x*=max/speed;v.z*=max/speed;}
 a.velocity.set(v.x,0,v.z);
 const desired=(this.target.length-this.length)*(1-Math.exp(-dt/.045))/dt;
 v.hoist=clamp(desired,-1.5,1.5);
 this.length=clamp(this.length+v.hoist*dt,LIMITS.minLength,LIMITS.maxLength);this.rope.length=this.length;
 this.world.step(dt);this.time+=dt;
 }
 snapshot(){return{hall:{...HALL},limits:{...LIMITS},time:this.time,target:{...this.target},anchor:this.anchor.position.toArray(),hook:{position:this.hook.position.toArray(),velocity:this.hook.velocity.toArray(),quaternion:this.hook.quaternion.toArray()},length:this.length,velocity:{...this.velocity},attached:this.attached?.id??null,contacts:this.contacts,loadContacts:this.loadContacts,items:this.items.map(i=>({id:i.id,type:i.type,mass:i.mass,size:i.size,position:i.body.position.toArray(),velocity:i.body.velocity.toArray(),quaternion:i.body.quaternion.toArray()}))};}
}

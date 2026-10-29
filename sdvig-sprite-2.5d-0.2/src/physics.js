import * as C from '../vendor/cannon-es.js';
export const LIMITS={minX:-5.7,maxX:5.7,minZ:-2.5,maxZ:2.5,minLength:.65,maxLength:5.95};
export const BAYS=[{x:-3.4,z:-1.55,row:1,n:1},{x:.1,z:-1.55,row:1,n:2},{x:3.6,z:-1.55,row:1,n:3},{x:-3.4,z:1.25,row:2,n:4},{x:.1,z:1.25,row:2,n:5},{x:3.6,z:1.25,row:2,n:6}];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const approach=(v,t,d)=>v+clamp(t-v,-d,d);
// Unilateral, tension-only cable. A slack cable can never push the load.
class Cable extends C.Constraint{
 constructor(a,b,pa,pb,length,maxForce=22000){super(a,b,{collideConnected:false});this.pa=new C.Vec3(...pa);this.pb=new C.Vec3(...pb);this.length=length;this.eq=new C.ContactEquation(a,b);this.eq.minForce=-maxForce;this.eq.maxForce=0;this.eq.setSpookParams(2e7,5,1/120);this.equations.push(this.eq);this.a=new C.Vec3();this.b=new C.Vec3();}
 update(){const a=this.bodyA,b=this.bodyB,e=this.eq;a.quaternion.vmult(this.pa,this.a);b.quaternion.vmult(this.pb,this.b);b.position.vadd(this.b,e.ni);e.ni.vsub(a.position,e.ni);e.ni.vsub(this.a,e.ni);e.ni.normalize();e.ni.scale(this.length*.5,e.ri);e.ri.vadd(this.a,e.ri);e.ni.scale(-this.length*.5,e.rj);e.rj.vadd(this.b,e.rj);}
}
export class CraneProbe{
 constructor(){this.world=new C.World({gravity:new C.Vec3(0,-9.81,0)});this.world.solver.iterations=25;this.world.solver.tolerance=1e-8;this.world.allowSleep=true;this.world.defaultContactMaterial.friction=.67;this.world.defaultContactMaterial.restitution=0;this.world.defaultContactMaterial.contactEquationStiffness=2e7;this.world.defaultContactMaterial.contactEquationRelaxation=4;this.items=[];this.contacts=0;this.loadContacts=0;this.time=0;this.attached=null;this.feedback='';this.target={x:-2.5,z:-1.55,length:2.5};this.velocity={x:0,z:0,hoist:0};this.length=2.5;this.anchor=new C.Body({mass:0,type:C.Body.KINEMATIC,allowSleep:false,position:new C.Vec3(-2.5,6.5,-1.55)});this.world.addBody(this.anchor);
 this.hook=new C.Body({mass:45,shape:new C.Box(new C.Vec3(.12,.27,.12)),position:new C.Vec3(-2.5,3.78,-1.55),fixedRotation:true,linearDamping:.35,allowSleep:false});this.hook.collisionFilterGroup=2;this.hook.collisionFilterMask=1;this.world.addBody(this.hook);this.rope=new Cable(this.anchor,this.hook,[0,0,0],[0,.22,0],this.length);this.world.addConstraint(this.rope);
 const floor=new C.Body({mass:0,shape:new C.Box(new C.Vec3(8,.15,5)),position:new C.Vec3(0,-.15,0)});floor.label='floor';this.world.addBody(floor);
 for(const [x,z,sx,sz] of [[-6.8,0,.15,4],[6.8,0,.15,4],[0,-3.5,7,.15],[0,3.5,7,.15]])this.world.addBody(new C.Body({mass:0,shape:new C.Box(new C.Vec3(sx,4,sz)),position:new C.Vec3(x,4,z)}));
 this.cargo=this.addItem('cargo',-2.5,2,-1.55,420);this.addItem('crate',.1,.46,-1.55,680);this.addItem('crate',3.6,.46,1.25,680);this.attach(this.cargo,true);
 this.world.addEventListener('beginContact',e=>{this.contacts++;if(e.bodyA.item&&e.bodyB.item)this.loadContacts++});
 }
 addItem(type,x,y,z,mass){const size=type==='cargo'?[1.65,1.0,1.15]:[1.6,.92,1.2];const b=new C.Body({mass,shape:new C.Box(new C.Vec3(...size.map(v=>v/2))),position:new C.Vec3(x,y,z),fixedRotation:true,linearDamping:.28,sleepSpeedLimit:.055,sleepTimeLimit:.6});const item={id:this.items.length+1,type,size,mass,body:b};b.item=item;this.items.push(item);this.world.addBody(b);return item;}
 eye(item){return item.body.position.vadd(new C.Vec3(0,item.size[1]/2,0));}
 throat(){return this.hook.position.vadd(new C.Vec3(0,-.25,0));}
 attach(item,initial=false){const d=this.eye(item).distanceTo(this.throat());if(!initial&&d>1.3){this.feedback='Подведи крюк ближе к верху груза';return false}this.sling=new Cable(this.hook,item.body,[0,-.25,0],[0,item.size[1]/2,0],initial?1.03:Math.max(.5,d),16000);this.sling.collideConnected=true;this.world.addConstraint(this.sling);this.attached=item;item.body.allowSleep=false;item.body.wakeUp();this.feedback='';return true;}
 toggle(){if(this.attached){this.world.removeConstraint(this.sling);this.sling=null;this.attached.body.allowSleep=true;this.attached.body.wakeUp();this.attached=null;this.feedback='';return true}const t=this.throat();const item=this.items.toSorted?this.items.toSorted((a,b)=>this.eye(a).distanceTo(t)-this.eye(b).distanceTo(t))[0]:[...this.items].sort((a,b)=>this.eye(a).distanceTo(t)-this.eye(b).distanceTo(t))[0];return this.attach(item);}
 setTarget(x,z,length=this.target.length){this.target.x=clamp(x,LIMITS.minX,LIMITS.maxX);this.target.z=clamp(z,LIMITS.minZ,LIMITS.maxZ);this.target.length=clamp(length,LIMITS.minLength,LIMITS.maxLength);}
 step(dt){const a=this.anchor,p=a.position,v=this.velocity;const max=this.attached?1.55:1.95,acc=this.attached?1.0:1.4;
 for(const k of ['x','z']){const delta=this.target[k]-p[k],desired=Math.sign(delta)*Math.min(max,Math.sqrt(2*acc*Math.abs(delta)),Math.abs(delta)*3);v[k]=approach(v[k],desired,acc*dt);a.velocity[k]=v[k];}
 const dl=this.target.length-this.length,desiredHoist=Math.sign(dl)*Math.min(.7,Math.sqrt(2*.85*Math.abs(dl)),Math.abs(dl)*4);v.hoist=approach(v.hoist,desiredHoist,.85*dt);this.length=clamp(this.length+v.hoist*dt,LIMITS.minLength,LIMITS.maxLength);this.rope.length=this.length;
 this.world.step(dt);this.time+=dt;
 }
 snapshot(){return{time:this.time,target:{...this.target},anchor:this.anchor.position.toArray(),hook:{position:this.hook.position.toArray(),velocity:this.hook.velocity.toArray(),quaternion:this.hook.quaternion.toArray()},length:this.length,velocity:{...this.velocity},attached:this.attached?.id??null,contacts:this.contacts,loadContacts:this.loadContacts,items:this.items.map(i=>({id:i.id,type:i.type,mass:i.mass,size:i.size,position:i.body.position.toArray(),velocity:i.body.velocity.toArray(),quaternion:i.body.quaternion.toArray()}))};}
}

import * as THREE from 'three';
export const CHAIN_TOP=7.91;
export function makeGantry(m,models){
 const root=new THREE.Group(),fixed=new THREE.Group(),bridge=new THREE.Group(),trolley=new THREE.Group(),drum=new THREE.Group();root.name='overhead-crane';root.add(fixed,bridge,trolley);
 const b=new models.Builder();
 // Two runway I-beams, anchored on four slender columns outside the tray.
 for(const x of[-6.8,6.8]){
  b.box(.18,.46,10.5,m.iron,[x,8.8,0]);for(const y of[8.54,9.06])b.box(.52,.08,10.65,m.rust,[x,y,0]);b.box(.08,.08,10.3,m.steel,[x,9.14,0]);
  for(const z of[-4.8,4.8]){b.box(.26,9.74,.28,m.iron,[x,3.53,z]);b.box(.60,.16,.68,m.rust,[x,-1.42,z]);b.box(.65,.12,.65,m.rust,[x,8.5,z]);for(const X of[-.21,.21])for(const Z of[-.24,.24])b.cyl(.045,.045,.055,m.brass,[x+X,-1.31,z+Z],undefined,6);}
 }
 fixed.add(b.build());
 const c=new models.Builder();c.box(13.6,.48,.20,m.teal);for(const y of[-.29,.29])c.box(13.8,.09,.65,m.rust,[0,y,0]);c.box(12.8,.08,.025,m.hazard,[0,-.12,.114]);
 for(const x of[-6.8,6.8]){c.box(.74,.33,1.18,m.teal,[x,.38,0]);for(const z of[-.43,.43])c.box(.18,.55,.23,m.brass,[x,.68,z]);}
 bridge.add(c.build());
 // Wheels are instanced: no separate draw call for each roller.
 const wheelGeometry=new THREE.CylinderGeometry(.19,.19,.16,16),bridgeWheels=new THREE.InstancedMesh(wheelGeometry,m.steel,4),trolleyWheels=new THREE.InstancedMesh(wheelGeometry,m.brass,4);bridge.add(bridgeWheels);trolley.add(trolleyWheels);
 const d=new models.Builder();d.box(1.35,.16,.95,m.iron,[0,.39,0]);for(const z of[-.40,.40])d.box(1.20,.14,.14,m.teal,[0,.12,z]);for(const x of[-.51,.51])d.box(.12,.76,.73,m.teal,[x,-.13,0]);
 for(const x of[-.32,.32])d.box(.20,.11,.74,m.rust,[x,-.57,0]);for(const z of[-.31,.31])d.box(.84,.11,.12,m.rust,[0,-.57,z]);d.cyl(.22,.22,.38,m.iron,[.83,.20,0],[0,0,Math.PI/2]);d.cyl(.18,.18,.13,m.brass,[1.07,.20,0],[0,0,Math.PI/2]);d.box(.38,.20,.50,m.teal,[.77,.36,0]);
 for(const x of[-.52,.52])for(const z of[-.38,.38])d.cyl(.045,.045,.06,m.brass,[x,.50,z],undefined,6);
 for(const x of[-.47,.47])for(const z of[-.43,.43]){d.cyl(.12,.12,.175,m.iron,[x,.475,z],[Math.PI/2,0,0]);d.cyl(.05,.05,.19,m.steel,[x,.475,z],[Math.PI/2,0,0],6);}trolley.add(d.build());const spool=new models.Builder();spool.cyl(.24,.24,.72,m.iron,undefined,[0,0,Math.PI/2]);for(const x of[-.40,.40])spool.cyl(.34,.34,.07,m.brass,[x,0,0],[0,0,Math.PI/2]);for(let i=0;i<10;i++)spool.ring(.248,.018,m.steel,[-.32+i*.071,0,0],[0,Math.PI/2,0]);spool.box(.08,.09,.05,m.ivory,[0,.25,0]);drum.add(spool.build());drum.position.set(0,-.45,0);trolley.add(drum);
 const lamp=new models.Builder();lamp.cyl(.11,.15,.10,m.brass,[0,.56,0]);lamp.ball(.10,m.amber,[0,.70,0],[1,1.35,1]);const beacon=lamp.build();trolley.add(beacon);const bulb=beacon.children.find(o=>o.material===m.amber);bulb.material=bulb.material.clone();
 const straightChain=new THREE.InstancedMesh(new THREE.TorusGeometry(.115,.033,6,18),m.steel,24);root.add(straightChain);straightChain.frustumCulled=false;straightChain.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
 // The structure does not enter the cargo physics or shadow caster pass.
 root.traverse(o=>{if(o.isMesh){o.castShadow=false;o.receiveShadow=false;}});fixed.updateMatrixWorld(true);fixed.traverse(o=>o.matrixAutoUpdate=false);
 const dummy=new THREE.Object3D();
 function update(anchor,time){bulb.material.emissiveIntensity=.8+.4*Math.sin(time*5);bridge.position.set(0,8.55,anchor.z);trolley.position.set(anchor.x,8.60,anchor.z);drum.rotation.x=(anchor.y-6.85)/.24;
  let k=0;for(const x of[-6.8,6.8])for(const z of[-.43,.43]){dummy.position.set(x,.82,z);dummy.rotation.set(anchor.z/.19,0,Math.PI/2);dummy.scale.set(1,1,1);dummy.updateMatrix();bridgeWheels.setMatrixAt(k++,dummy.matrix);}bridgeWheels.instanceMatrix.needsUpdate=true;
  k=0;for(const x of[-.47,.47])for(const z of[-.43,.43]){dummy.position.set(x,.475,z);dummy.rotation.set(Math.PI/2,anchor.x/.19,0);dummy.updateMatrix();trolleyWheels.setMatrixAt(k++,dummy.matrix);}trolleyWheels.instanceMatrix.needsUpdate=true;
  const length=Math.max(0,CHAIN_TOP-anchor.y),count=Math.min(24,Math.max(1,Math.ceil(length/.27)));straightChain.count=count;
  for(let i=0;i<count;i++){dummy.position.set(anchor.x,CHAIN_TOP-(i+.5)*length/count,anchor.z);dummy.rotation.set(0,i%2?Math.PI/2:0,0);dummy.scale.set(1,1.5,1);dummy.updateMatrix();straightChain.setMatrixAt(i,dummy.matrix);}straightChain.instanceMatrix.needsUpdate=true;
 }
 update({x:0,y:6.85,z:1.4},0);return{root,bridge,trolley,drum,update};
}

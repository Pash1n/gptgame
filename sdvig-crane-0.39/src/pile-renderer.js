import * as T from 'three';
import {makeShadowProxy} from './performance.js';
// One draw per material and part type, independent of the number of copies.
// Original PBR models and original geometry are shared with normal missions.
export class PileRenderer{
 constructor(scene,models,items){this.root=new T.Group();scene.add(this.root);this.batches=[];this.position=new T.Vector3();this.rotation=new T.Quaternion();this.matrix=new T.Matrix4();this.composed=new T.Matrix4();this.identityScale=new T.Vector3(1,1,1);this.zero=new T.Matrix4().makeScale(0,0,0);this.last=new Map();const types=new Map();for(const i of items){if(!types.has(i.type))types.set(i.type,[]);types.get(i.type).push(i);}
  for(const [type,actors]of types){const source=models.item(type);source.updateMatrixWorld(true);const pieces=[];source.traverse(o=>{if(o.isMesh){pieces.push({geometry:o.geometry,material:o.material,local:o.matrixWorld.clone(),shadow:false});}});const proxy=makeShadowProxy(source);pieces.push({geometry:proxy.geometry,material:proxy.material,local:source.matrixWorld.clone(),shadow:true});
   const batches=pieces.map(p=>{const mesh=new T.InstancedMesh(p.geometry,p.material,actors.length);mesh.instanceMatrix.setUsage(T.DynamicDrawUsage);mesh.frustumCulled=false;mesh.castShadow=p.shadow;mesh.receiveShadow=!p.shadow;if(p.shadow)mesh.layers.set(1);this.root.add(mesh);return{...p,mesh};});this.batches.push({actors,batches});
  }this.update(true);
 }
 update(force=false){for(const {actors,batches}of this.batches){let changed=false;for(let j=0;j<actors.length;j++){const i=actors[j],b=i.body,p=b.position,q=b.quaternion;const old=this.last.get(i.id);if(!force&&old&&old.x===p.x&&old.y===p.y&&old.z===p.z&&old.qx===q.x&&old.qy===q.y&&old.qz===q.z&&old.qw===q.w&&old.delivered===i.delivered)continue;this.last.set(i.id,{x:p.x,y:p.y,z:p.z,qx:q.x,qy:q.y,qz:q.z,qw:q.w,delivered:i.delivered});changed=true;if(i.delivered){for(const batch of batches)batch.mesh.setMatrixAt(j,this.zero);}else{this.matrix.compose(this.position.copy(p),this.rotation.copy(q),this.identityScale);for(const batch of batches)batch.mesh.setMatrixAt(j,this.composed.multiplyMatrices(this.matrix,batch.local));}}if(changed)for(const b of batches)b.mesh.instanceMatrix.needsUpdate=true;}}
 dispose(){this.root.removeFromParent();for(const{batches}of this.batches)for(const b of batches)b.mesh.dispose();this.batches=[];this.last.clear();}
}

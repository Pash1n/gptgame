import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
// One depth-only draw per rigid assembly instead of one per paint/metal/optic material.
// Shadow layer is invisible to the beauty camera. Share geometry between identical actors.
const cache=new Map(),material=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking});
export function makeShadowProxy(root,cacheGeometry=true){
 root.updateMatrixWorld(true);const inverse=root.matrixWorld.clone().invert(),parts=[],key=[];
 root.traverse(o=>{if(!o.isMesh||o.layers.mask===2)return;o.castShadow=false;
  if(o.material.isMeshBasicMaterial||o.userData.noShadowProxy)return;
  const transform=new THREE.Matrix4().multiplyMatrices(inverse,o.matrixWorld);
  key.push(o.geometry.uuid+':'+transform.elements.map(v=>v.toFixed(4)).join(','));
  const g=new THREE.BufferGeometry();g.setAttribute('position',o.geometry.attributes.position.clone());if(o.geometry.index)g.setIndex(o.geometry.index.clone());const flat=g.index?g.toNonIndexed():g;flat.applyMatrix4(transform);if(flat!==g)g.dispose();parts.push(flat);
 });
 const id=key.join('|');let geometry=cacheGeometry?cache.get(id):null;if(!geometry){geometry=mergeGeometries(parts);if(cacheGeometry)cache.set(id,geometry);}for(const p of parts)p.dispose();
 const proxy=new THREE.Mesh(geometry,material);proxy.layers.set(1);proxy.castShadow=true;proxy.receiveShadow=false;proxy.userData.shadowProxy=true;return proxy;
}

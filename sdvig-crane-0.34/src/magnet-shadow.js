import * as THREE from 'three';
export const SHADOW_SLOPE={x:.4,z:-.6},FLOOR_Y=-.028;
export function shadowPoint(position){const h=position.y-FLOOR_Y;return{x:position.x+SHADOW_SLOPE.x*h,y:FLOOR_Y,z:position.z+SHADOW_SLOPE.z*h};}
// A tiny one-object silhouette target replaces the aiming circle. Geometry is
// projected along the same direction as the warm key light, with the real tilt.
export class MagnetShadow{
 constructor(geometry){
  this.target=new THREE.WebGLRenderTarget(192,192,{depthBuffer:false});this.scene=new THREE.Scene();this.camera=new THREE.OrthographicCamera(-1.7,1.7,1.7,-1.7,.1,10);this.camera.position.set(0,5,0);this.camera.up.set(0,0,-1);this.camera.lookAt(0,0,0);
  const material=new THREE.ShaderMaterial({uniforms:{slope:{value:new THREE.Vector2(SHADOW_SLOPE.x,SHADOW_SLOPE.z)}},side:THREE.DoubleSide,depthWrite:false,depthTest:false,vertexShader:'uniform vec2 slope; void main(){vec4 p=modelMatrix*vec4(position,1.0);p.xz+=slope*p.y;p.y=0.0;gl_Position=projectionMatrix*viewMatrix*p;}',fragmentShader:'void main(){gl_FragColor=vec4(1.0);}'});
  this.caster=new THREE.Mesh(geometry,material);this.scene.add(this.caster);this.caster.frustumCulled=false;
  this.material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{mask:{value:this.target.texture},blur:{value:1},opacity:{value:.3}},vertexShader:'varying vec2 uvShadow;varying vec2 ground;void main(){uvShadow=uv;vec4 p=modelMatrix*vec4(position,1.);ground=p.xz;gl_Position=projectionMatrix*viewMatrix*p;}',fragmentShader:`uniform sampler2D mask;uniform float blur;uniform float opacity;varying vec2 uvShadow;varying vec2 ground;void main(){if(abs(ground.x)>6.3||abs(ground.y)>4.5)discard;vec2 d=vec2(blur/192.0);float a=texture2D(mask,uvShadow).a*.25;for(int x=-1;x<=1;x++)for(int y=-1;y<=1;y++){if(x==0&&y==0)continue;a+=texture2D(mask,uvShadow+vec2(float(x),float(y))*d).a*.09375;}gl_FragColor=vec4(.025,.035,.032,a*opacity);}`});
  this.mesh=new THREE.Mesh(new THREE.PlaneGeometry(3.4,3.4),this.material);this.mesh.rotation.x=-Math.PI/2;this.mesh.renderOrder=1;this.mesh.name='magnet-ground-shadow';this.lastQuaternion=new THREE.Quaternion(0,0,0,0);this.lastTime=-Infinity;
 }
 invalidate(){this.lastTime=-Infinity;this.lastQuaternion.set(0,0,0,0);}
 update(renderer,position,quaternion,time){const point=shadowPoint(position);this.mesh.position.set(point.x,point.y,point.z);const h=Math.max(0,position.y-FLOOR_Y);this.material.uniforms.blur.value=.6+h*1.25;this.material.uniforms.opacity.value=Math.max(.14,.43-h*.047);
  if(this.lastTime!==-Infinity&&(time-this.lastTime<1/30||Math.abs(this.lastQuaternion.x*quaternion.x+this.lastQuaternion.y*quaternion.y+this.lastQuaternion.z*quaternion.z+this.lastQuaternion.w*quaternion.w)>.999999))return;
  this.caster.quaternion.copy(quaternion);const oldTarget=renderer.getRenderTarget(),oldColor=renderer.getClearColor(new THREE.Color()),oldAlpha=renderer.getClearAlpha();renderer.setRenderTarget(this.target);renderer.setClearColor(0x000000,0);renderer.clear();renderer.render(this.scene,this.camera);renderer.setRenderTarget(oldTarget);renderer.setClearColor(oldColor,oldAlpha);this.lastQuaternion.copy(quaternion);this.lastTime=time;
 }
 snapshot(){return{position:this.mesh.position.toArray(),blur:this.material.uniforms.blur.value,opacity:this.material.uniforms.opacity.value,lastTime:this.lastTime};}
}

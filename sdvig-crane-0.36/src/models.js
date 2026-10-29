import {moduleModels} from './module-models.js';
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z),E=(x=0,y=0,z=0)=>new THREE.Euler(x,y,z);
const cy=(a,b,h,n=20)=>new THREE.CylinderGeometry(a,b,h,n),sp=(r,w=16)=>new THREE.SphereGeometry(r,w,10),tor=(r,t=.025)=>new THREE.TorusGeometry(r,t,6,24);
function rounded(x,y,z,r){const g=new RoundedBoxGeometry(x,y,z,2,r??Math.min(x,y,z)*.22);g.userData.edgeWear=true;return g;}
class Builder{
 constructor(){this.parts=new Map()}
 add(geometry,material,p=[0,0,0],rotation=[0,0,0],scale=[1,1,1]){
  const g=geometry.index?geometry.toNonIndexed():geometry.clone(),n=g.attributes.normal,pos=g.attributes.position,wear=new Float32Array(pos.count);if(geometry.userData.longBox){const uv=g.attributes.uv;for(let i=0;i<pos.count;i++){const x=Math.abs(n.getX(i)),y=Math.abs(n.getY(i)),z=Math.abs(n.getZ(i));if(y>=x&&y>=z)uv.setXY(i,pos.getX(i)*.75+.5,pos.getZ(i)*.75+.5);else if(z>=x)uv.setXY(i,pos.getX(i)*.75+.5,pos.getY(i)*.75+.5);else uv.setXY(i,pos.getZ(i)*.75+.5,pos.getY(i)*.75+.5);}}
  if(geometry.userData.edgeWear)for(let i=0;i<wear.length;i++)wear[i]=Math.max(0,Math.abs(n.getX(i))+Math.abs(n.getY(i))+Math.abs(n.getZ(i))-1);
  g.setAttribute('edgeWear',new THREE.BufferAttribute(wear,1));g.applyMatrix4(new THREE.Matrix4().compose(V(...p),new THREE.Quaternion().setFromEuler(E(...rotation)),V(...scale)));
  if(!this.parts.has(material))this.parts.set(material,[]);this.parts.get(material).push(g);return this;
 }
 box(x,y,z,m,p,r,bevel){const g=Math.min(x,y,z)<.035?new THREE.BoxGeometry(x,y,z):rounded(x,y,z,bevel);g.userData.longBox=Math.max(x,y,z)>2.5;return this.add(g,m,p,r)}
 cyl(a,b,h,m,p,r,n=20){return this.add(cy(a,b,h,n),m,p,r)}
 ring(a,t,m,p,r){return this.add(tor(a,t),m,p,r)}
 ball(a,m,p,scale){return this.add(sp(a),m,p,undefined,scale)}
 tube(points,r,m){return this.add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>V(...p))),18,r,6,false),m)}
 build(){const group=new THREE.Group();for(const[m,parts]of this.parts){const geometry=mergeGeometries(parts),mesh=new THREE.Mesh(geometry,m);mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);for(const g of parts)g.dispose();}return group;}
}
function wearShader(material){material.onBeforeCompile=shader=>{
 shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nattribute float edgeWear;varying float vEdgeWear;varying vec3 vLocalPoint;').replace('#include <begin_vertex>','#include <begin_vertex>\nvEdgeWear=edgeWear;vLocalPoint=position;');
 shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying float vEdgeWear;varying vec3 vLocalPoint;float scratchNoise(vec3 p){return fract(sin(dot(floor(p),vec3(127.1,311.7,74.7)))*43758.5453);}')
 .replace('#include <map_fragment>',`#include <map_fragment>
 float grain=scratchNoise(vLocalPoint*170.0);float chip=smoothstep(.22,.58,vEdgeWear)*smoothstep(.25,.64,grain);vec3 bare=mix(vec3(.055,.037,.024),vec3(.32,.20,.085),grain);diffuseColor.rgb=mix(diffuseColor.rgb,bare,chip*.85);`);
 };material.customProgramCacheKey=()=> 'wear-31';return material;}
export async function makeMaterials(asset){
 const loader=new THREE.TextureLoader(),maps={};for(const n of['teal','rust','ivory','floor','coral','steel']){maps[n]=await loader.loadAsync(asset('assets/tex-'+n+'.webp'));maps[n].colorSpace=THREE.SRGBColorSpace;maps[n].wrapS=maps[n].wrapT=THREE.RepeatWrapping;maps[n].anisotropy=4;}
 const mat=(color,roughness=.5,metalness=.6,map=null)=>new THREE.MeshStandardMaterial({color,roughness,metalness,map});
 const paint=(map,color='#ffffff')=>wearShader(new THREE.MeshStandardMaterial({color,map,roughness:.48,metalness:.36,bumpMap:map,bumpScale:.009}));
 const m={teal:paint(maps.teal),ivory:paint(maps.ivory),coral:paint(maps.coral),rust:mat('#927d63',.62,.78,maps.rust),floor:mat('#b3ada2',.83,.36,maps.floor),iron:mat('#48535a',.38,.9,maps.steel),steel:mat('#c7c7bf',.29,.9,maps.steel),brass:mat('#c59b57',.29,.83),black:mat('#071014',.50,.44),rubber:mat('#20292c',.94,.02),cyan:mat('#43c7c4',.25,.5),amber:mat('#ffb54c',.25,.35),red:mat('#bd6955',.49,.4)};
 m.lens=new THREE.MeshPhysicalMaterial({color:'#06272d',roughness:.075,metalness:.28,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:2.8});m.pupil=new THREE.MeshPhysicalMaterial({color:'#01070a',roughness:.06,clearcoat:1,metalness:.1});m.glint=new THREE.MeshBasicMaterial({color:'#fff5da'});m.coil=mat('#39c8bb',.18,.65);m.coil.emissive.set('#26e5d1');m.coil.emissiveIntensity=1.2;m.cyan.emissive.set('#19a7a3');m.cyan.emissiveIntensity=.25;m.amber.emissive.set('#ff9c27');m.amber.emissiveIntensity=1.1;
 const canvas=document.createElement('canvas');canvas.width=canvas.height=256;const g=canvas.getContext('2d');g.fillStyle='#af8a3c';g.fillRect(0,0,256,256);g.fillStyle='#343634';for(let x=-256;x<512;x+=96){g.beginPath();g.moveTo(x,0);g.lineTo(x+45,0);g.lineTo(x+301,256);g.lineTo(x+256,256);g.closePath();g.fill();}const stripe=new THREE.CanvasTexture(canvas);stripe.colorSpace=THREE.SRGBColorSpace;stripe.wrapS=stripe.wrapT=THREE.RepeatWrapping;stripe.repeat.set(3,1);m.hazard=mat('#dfd0b3',.7,.45,stripe);return m;
}
function mesh(g,m,p=[0,0,0],r=[0,0,0],s=[1,1,1]){const o=new THREE.Mesh(g,m);o.position.set(...p);o.rotation.set(...r);o.scale.set(...s);o.castShadow=true;o.receiveShadow=true;return o;}
export function makeModels(m){
 const prototypes=new Map();
 function robot(variant=0){
  const coat=[m.teal,m.ivory,m.coral][variant%3],b=new Builder();
  b.box(.66,.68,.48,coat,[0,-.10,0],undefined,.15);
  b.box(.785,.56,.55,coat,[0,.435,0],undefined,.16);
  b.cyl(.105,.13,.13,m.brass,[0,.17,0]);b.ring(.12,.022,m.iron,[0,.21,0],[Math.PI/2,0,0]);
  // A broad, rounded face, two deep optical eyes and separate glossy pupils.
  for(const x of[-.185,.185]){
   b.cyl(.169,.184,.075,m.brass,[x,.455,.284],[Math.PI/2,0,0]);b.ring(.152,.018,m.iron,[x,.455,.332]);
   b.ball(.151,m.lens,[x,.455,.343],[1,1,.56]);
  }
  b.box(.13,.035,.045,m.black,[0,.279,.295],undefined,.012);b.box(.085,.013,.015,m.brass,[0,.265,.323],undefined,.005);
  for(const x of[-.325,.325])for(const y of[.31,.59])b.cyl(.022,.022,.022,m.brass,[x,y,.245],[Math.PI/2,0,0],8);
  // Chest service hatch, recessed fins, hand-worn border and exposed fasteners.
  b.box(.31,.27,.048,m.brass,[0,-.085,.257],undefined,.04);b.box(.265,.222,.055,m.iron,[0,-.083,.282],undefined,.028);
  for(let i=0;i<4;i++)b.box(.16,.018,.018,m.black,[0,-.145+i*.045,.316],undefined,.005);
  for(const x of[-.112,.112])for(const y of[-.168,.008])b.cyl(.017,.017,.023,m.steel,[x,y,.32],[Math.PI/2,0,0],6);
  for(const side of[-1,1]){
   const x=side*.385;b.ball(.115,m.brass,[x,-.01,0]);b.cyl(.09,.09,.29,coat,[side*.415,-.20,0],[0,0,side*.09]);b.ring(.09,.018,m.steel,[side*.425,-.30,0],[Math.PI/2,0,0]);b.ball(.10,m.iron,[side*.425,-.365,0]);
   for(const z of[-.065,.065])b.tube([[side*.42,-.38,z],[side*.49,-.46,z],[side*.46,-.51,z+.045]],.028,m.brass);
   b.cyl(.074,.074,.17,m.iron,[side*.165,-.48,.025]);for(let i=0;i<4;i++)b.ring(.075,.014,m.steel,[side*.165,-.42-i*.035,.025],[Math.PI/2,0,0]);
   b.box(.26,.17,.43,m.iron,[side*.165,-.635,.095],undefined,.07);b.box(.245,.14,.40,coat,[side*.165,-.617,.11],undefined,.06);b.cyl(.048,.048,.025,m.brass,[side*.165,-.61,.318],[Math.PI/2,0,0],8);
  }
  b.box(.31,.22,.08,m.iron,[0,-.10,-.27],undefined,.04);b.box(.24,.15,.10,m.rust,[0,-.10,-.30],undefined,.03);
  const group=b.build();for(let i=0;i<2;i++){const eye=new THREE.Group();eye.name='eye-'+i;eye.position.set(i? .185:-.185,.455,.417);eye.add(mesh(sp(.098),m.pupil,[0,0,0],undefined,[1,1,.42]));eye.add(mesh(sp(.025,12),m.glint,[-.039,.041,.046]));eye.add(mesh(sp(.009,10),m.glint,[.04,-.037,.040]));group.add(eye);}
  const antenna=new THREE.Group();antenna.name='antenna';antenna.position.set(.21,.685,-.015);const spring=[];for(let i=0;i<=48;i++){const a=i/48*Math.PI*6;spring.push([Math.sin(a)*.025,.025+i/48*.13,Math.cos(a)*.025]);}const ab=new Builder();ab.tube(spring,.009,m.steel);ab.cyl(.018,.018,.07,m.brass,[0,.19,0]);ab.ball(.047,m.coral,[0,.245,0]);antenna.add(ab.build());group.add(antenna);return group;
 }
 function gear(){const shape=new THREE.Shape(),teeth=14;for(let i=0;i<teeth*4;i++){const a=i*Math.PI*2/(teeth*4),r=i%4===1||i%4===2?.50:.385,x=Math.cos(a)*r,y=Math.sin(a)*r;i?shape.lineTo(x,y):shape.moveTo(x,y);}shape.closePath();const hole=new THREE.Path();hole.absarc(0,0,.142,0,Math.PI*2,true);shape.holes.push(hole);const g=new THREE.ExtrudeGeometry(shape,{depth:.15,bevelEnabled:true,bevelThickness:.026,bevelSize:.023,bevelSegments:2,curveSegments:16});g.translate(0,0,-.075);const b=new Builder();b.add(g,m.iron,[0,0,0],[Math.PI/2,0,0]);b.ring(.27,.025,m.steel,[0,.105,0],[Math.PI/2,0,0]);b.ring(.157,.02,m.brass,[0,.11,0],[Math.PI/2,0,0]);for(let i=0;i<6;i++){const a=i*Math.PI/3;b.cyl(.025,.025,.02,m.rust,[Math.cos(a)*.28,.12,Math.sin(a)*.28],undefined,8);}return b.build();}
 function bolt(){const b=new Builder();b.cyl(.108,.108,.6,m.steel);b.cyl(.245,.245,.18,m.iron,[0,.36,0],undefined,6);b.cyl(.225,.225,.025,m.steel,[0,.46,0],undefined,6);b.cyl(.084,.084,.008,m.rust,[0,.477,0],undefined,6);const helix=[];for(let i=0;i<=150;i++){const a=i/150*Math.PI*20;helix.push([Math.cos(a)*.112,-.27+i/150*.51,Math.sin(a)*.112]);}b.tube(helix,.018,m.iron);b.cyl(.072,.108,.09,m.steel,[0,-.34,0]);return b.build();}
 function pipe(){const b=new Builder();b.tube([[-.45,.32,0],[-.45,-.13,0],[-.30,-.22,0],[.30,-.22,0],[.45,-.13,0],[.45,.32,0]],.165,m.iron);for(const x of[-.45,.45]){b.cyl(.225,.225,.095,m.rust,[x,.245,0]);b.cyl(.205,.205,.055,m.steel,[x,.315,0]);b.cyl(.134,.134,.012,m.black,[x,.348,0]);b.ring(.14,.018,m.brass,[x,.352,0],[Math.PI/2,0,0]);for(let i=0;i<6;i++){const a=i*Math.PI/3;b.cyl(.021,.021,.025,m.iron,[x+Math.cos(a)*.179,.352,Math.sin(a)*.179],undefined,6);}}return b.build();}
 function engine(){const b=new Builder();b.cyl(.385,.385,.91,m.iron,[0,.02,0],[Math.PI/2,0,0]);for(let i=0;i<12;i++){const a=i*Math.PI/6;b.box(.045,.065,.82,m.steel,[Math.cos(a)*.365,.02+Math.sin(a)*.365,0],[0,0,a],.01);}for(const z of[-.45,.45]){b.cyl(.43,.43,.075,m.rust,[0,.02,z],[Math.PI/2,0,0]);b.ring(.37,.028,m.brass,[0,.02,z+.045]);for(let i=0;i<6;i++){const a=i*Math.PI/3;b.cyl(.035,.035,.04,m.steel,[Math.cos(a)*.35,.02+Math.sin(a)*.35,z+.06],[Math.PI/2,0,0],6);}}b.cyl(.16,.16,.23,m.steel,[0,.02,.61],[Math.PI/2,0,0]);b.cyl(.12,.12,.035,m.black,[0,.02,.74],[Math.PI/2,0,0]);for(const x of[-.55,.55]){b.box(.25,.18,.96,m.rust,[x,-.28,0],undefined,.04);for(const z of[-.35,.35])b.cyl(.052,.052,.045,m.iron,[x,-.16,z],undefined,6);}b.box(.42,.15,.39,m.teal,[0,.44,-.1],undefined,.04);b.box(.27,.018,.18,m.ivory,[0,.524,-.1],undefined,.01);return b.build();}
 function tire(){const b=new Builder();b.ring(.315,.145,m.rubber,[0,0,0],[Math.PI/2,0,0]);for(let i=0;i<34;i++){const a=i*Math.PI/17;b.box(.078,.22,.045,m.rubber,[Math.cos(a)*.455,0,Math.sin(a)*.455],[0,-a-Math.PI/2,.16*(i%2?1:-1)],.014);}for(const y of[-.1,.1]){b.ring(.23,.018,m.black,[0,y,0],[Math.PI/2,0,0]);b.ring(.38,.009,m.black,[0,y,0],[Math.PI/2,0,0]);}return b.build();}
 function magnet(){const b=new Builder();const profile=[[.0,-.22],[.60,-.22],[.68,-.15],[.675,.06],[.63,.16],[.48,.20],[.43,.28],[.18,.29],[.14,.39],[0,.39]].map(p=>new THREE.Vector2(...p));b.add(new THREE.LatheGeometry(profile,32),m.teal);b.cyl(.69,.69,.075,m.iron,[0,-.22,0]);b.ring(.645,.032,m.brass,[0,.11,0],[Math.PI/2,0,0]);b.ring(.66,.026,m.steel,[0,-.16,0],[Math.PI/2,0,0]);for(let i=0;i<5;i++)b.ring(.60,.018,m.brass,[0,-.13+i*.047,0],[Math.PI/2,0,0]);
  for(let i=0;i<8;i++){const a=i*Math.PI/4;b.box(.125,.31,.095,m.rust,[Math.cos(a)*.65,.045,Math.sin(a)*.65],[0,-a+Math.PI/2,0],.025);b.cyl(.036,.036,.048,m.steel,[Math.cos(a)*.48,.235,Math.sin(a)*.48],undefined,6);}b.cyl(.15,.15,.13,m.iron,[0,.37,0]);b.ring(.12,.035,m.steel,[0,.45,0],[0,Math.PI/2,0]);for(const x of[-.31,.31])b.box(.35,.08,.65,m.steel,[x,-.29,0],undefined,.018);
  const group=b.build();const lamps=new THREE.Group();lamps.name='top-lamps';const lens=m.red.clone();lens.color.set('#4b1110');lens.emissive.set('#ff2010');lens.emissiveIntensity=.01;for(let i=0;i<8;i++){const a=i*Math.PI/4;lamps.add(mesh(sp(.036,12),lens,[Math.cos(a)*.48,.275,Math.sin(a)*.48],undefined,[1,.65,1]));}group.add(lamps);const coil=new THREE.Group();coil.name='coil';for(const y of[-.12,-.065,-.01])coil.add(mesh(tor(.681,.017),m.coil,[0,y,0],[Math.PI/2,0,0]));group.add(coil);const lamp=new THREE.Group();lamp.name='status-light';lamp.position.set(.40,.27,.10);lamp.add(mesh(cy(.075,.10,.05),m.brass));lamp.add(mesh(sp(.064),m.amber,[0,.068,0],[0,0,0],[1,1.2,1]));group.add(lamp);return group;
 }
 function battery(){const b=new Builder();b.box(.64,.55,.50,m.teal,undefined,undefined,.08);b.box(.53,.43,.045,m.ivory,[0,0,.27],undefined,.04);for(const x of[-.16,.16]){b.cyl(.075,.09,.10,m.brass,[x,.32,0]);b.box(.08,.12,.15,m.iron,[x,.34,0],undefined,.025);}b.box(.35,.14,.045,m.black,[0,.02,.30],undefined,.02);for(let i=0;i<4;i++)b.box(.045,.08,.015,m.cyan,[-.12+i*.08,.02,.329],undefined,.01);b.box(.47,.07,.025,m.hazard,[0,-.18,.303],undefined,.01);for(const x of[-.25,.25])for(const y of[-.20,.20])b.cyl(.025,.025,.025,m.brass,[x,y,.29],[Math.PI/2,0,0],6);return b.build();}
 const modules=moduleModels(m,Builder);const constructors={robot,gear,bolt,pipe,engine,tire,battery,...Object.fromEntries(["housing","shaft","cog","cover"].map(t=>[t,()=>modules(t)]))};return{Builder,magnet,item(type,variant=0){const key=type+(type==='robot'?variant%3:0);if(!prototypes.has(key))prototypes.set(key,constructors[type](variant));const group=prototypes.get(key).clone(true);if(type==='housing'||type==='cover')group.scale.setScalar(.75);if(type==='robot'){group.userData.eyes=[group.getObjectByName('eye-0'),group.getObjectByName('eye-1')];group.userData.antenna=group.getObjectByName('antenna');}return group;}};
}
function pictogram(kind){const c=document.createElement('canvas');c.width=c.height=256;const g=c.getContext('2d');g.fillStyle='#d5ac6b';if(kind==='repair'){g.lineWidth=15;g.strokeStyle='#d5ac6b';g.beginPath();g.roundRect(40,72,176,133,31);g.stroke();g.beginPath();g.moveTo(128,72);g.lineTo(128,38);g.stroke();g.beginPath();g.arc(128,30,12,0,Math.PI*2);g.fill();for(const x of[86,170]){g.beginPath();g.arc(x,126,19,0,Math.PI*2);g.fill();}g.fillRect(96,172,64,11);}else{g.translate(128,128);for(let i=0;i<12;i++){g.rotate(Math.PI/6);g.fillRect(-21,-104,42,45);}g.beginPath();g.arc(0,0,86,0,Math.PI*2);g.fill();g.globalCompositeOperation='destination-out';g.beginPath();g.arc(0,0,39,0,Math.PI*2);g.fill();}const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
export function workshop(m,models){
 const root=new THREE.Group(),b=new Builder();b.box(13.45,.55,9.9,m.rust,[0,-.43,0],undefined,.15);b.box(12.7,.14,9.1,m.floor,[0,-.14,0],undefined,.04);
 for(let x=-5.4;x<=5.4;x+=1.8)for(let z=-3.6;z<=3.6;z+=1.8){b.box(1.77,.025,1.77,m.floor,[x,-.057,z],undefined,.015);for(const X of[-.75,.75])for(const Z of[-.75,.75])b.cyl(.023,.023,.019,m.iron,[x+X,-.035,z+Z],undefined,6);}
 for(const x of[-6.5,6.5]){b.box(.24,.80,9.6,m.rust,[x,.23,0],undefined,.075);b.box(.27,.12,9.7,m.hazard,[x,.70,0],undefined,.03);}for(const z of[-4.7,4.7]){b.box(13.1,.75,.25,m.rust,[0,.24,z],undefined,.075);b.box(13.2,.12,.27,m.hazard,[0,.67,z],undefined,.03);}for(const x of[-6.5,6.5])for(const z of[-4.6,4.6]){b.box(.53,1.05,.53,m.iron,[x,.36,z],undefined,.08);b.box(.61,.13,.61,m.rust,[x,.94,z],undefined,.04);for(const X of[-.18,.18])for(const Z of[-.18,.18])b.cyl(.055,.055,.055,m.steel,[x+X,1.03,z+Z],undefined,6);}
 root.add(b.build());const bins=[];
 for(const spec of[{id:'repair',x:4.65,z:2.9,color:m.teal},{id:'scrap',x:-4.65,z:2.9,color:m.coral}]){
  const q=new Builder();q.box(2.95,.20,2.55,m.iron,[spec.x,-.02,spec.z],undefined,.07);q.box(2.58,.06,2.15,m.black,[spec.x,.06,spec.z],undefined,.02);
  for(const x of[spec.x-1.45,spec.x+1.45]){q.box(.27,.80,2.50,spec.color,[x,.3,spec.z],undefined,.05);}
  for(const z of[spec.z-1.25,spec.z+1.25])q.box(2.63,.80,.27,spec.color,[spec.x,.3,z],undefined,.06);
  q.box(2.63,.09,.27,m.rust,[spec.x,.745,spec.z-1.25],undefined,.02);q.box(2.63,.09,.27,m.rust,[spec.x,.745,spec.z+1.25],undefined,.02);
  for(const x of[-1.15,1.15])for(const z of[-1.25,1.25])q.cyl(.05,.05,.035,m.brass,[spec.x+x,.8125,spec.z+z],undefined,8);
  // Dimensional intake rollers, backplate and a warm service lamp inside.
  q.box(1.13,.78,.12,spec.color,[spec.x,.80,spec.z-1.10],undefined,.07);q.box(.92,.09,.11,m.iron,[spec.x,.39,spec.z-1.02],undefined,.02);
  q.box(.65,.075,.075,m.amber,[spec.x,.48,spec.z-1.01],undefined,.025);
  const rollers=[];for(let i=0;i<4;i++){const z=spec.z-.64+i*.43;q.cyl(.12,.12,2.17,m.iron,[spec.x,.14,z],[0,0,Math.PI/2]);if(spec.id==='scrap')for(let k=0;k<7;k++)q.cyl(.18,.18,.13,k%2?m.rust:m.steel,[spec.x-.85+k*.28,.14,z],[0,0,Math.PI/2],8);}
  const binMesh=q.build();root.add(binMesh);const sign=mesh(new THREE.PlaneGeometry(.68,.68),new THREE.MeshBasicMaterial({map:pictogram(spec.id),transparent:true,depthWrite:false}),[spec.x,.85,spec.z-1.025]);root.add(sign);
  const halo=new THREE.Mesh(new THREE.PlaneGeometry(.82,.20),new THREE.MeshBasicMaterial({color:spec.id==='repair'?'#8de6db':'#ffc075',transparent:true,opacity:.20,depthWrite:false}));halo.position.set(spec.x,.47,spec.z-.97);root.add(halo);bins.push({...spec,mesh:binMesh,rollers});
 }
 return{root,bins};
}
export function labelTexture(text,sub,color='#bce8df'){const c=document.createElement('canvas');c.width=640;c.height=170;const g=c.getContext('2d');g.fillStyle='#142b2e';g.fillRect(0,0,640,170);g.strokeStyle='#af8452';g.lineWidth=10;g.strokeRect(5,5,630,160);g.fillStyle=color;g.font='bold 52px Trebuchet MS';g.textAlign='center';g.fillText(text,320,76);g.fillStyle='#baaa89';g.font='24px Trebuchet MS';g.fillText(sub,320,125);const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;return texture;}

import * as THREE from 'three';
// The same models are used in the pile, inventory and assembly scene.
export function moduleModels(m,Builder){
 const cache=new Map();
 function build(kind){const b=new Builder();
  if(kind==='housing'){
   b.box(2.35,.19,1.65,m.teal,[0,.05,0],undefined,.06);
   for(const x of[-1.09,1.09]){b.box(.17,1.06,1.65,m.teal,[x,.54,0],undefined,.065);b.box(.12,.11,1.7,m.steel,[x,1.08,0],undefined,.025);}
   for(const z of[-.75,.75]){b.box(2.18,.32,.16,m.teal,[0,.24,z],undefined,.06);for(const x of[-.48,.48]){b.ring(.23,.10,m.teal,[x,.67,z]);b.ring(.165,.035,m.brass,[x,.67,z+Math.sign(z)*.07]);}b.box(2.2,.12,.17,m.steel,[0,1.08,z],undefined,.025);}
   for(const x of[-.94,.94])for(const z of[-.61,.61]){b.cyl(.075,.075,.04,m.iron,[x,1.16,z],undefined,12);b.box(.36,.16,.40,m.iron,[x,-.09,z],undefined,.04);b.cyl(.06,.06,.018,m.black,[x,-.002,z],undefined,12);}
   for(const x of[-1.185,1.185])for(const z of[-.5,.5])b.cyl(.05,.05,.04,m.brass,[x,.39,z],[0,0,Math.PI/2],6);
   for(const x of[-.65,.65]){b.cyl(.09,.09,.42,m.brass,[x,1.15,-.81],[0,0,Math.PI/2],20);b.box(.22,.18,.14,m.teal,[x,1.03,-.78],undefined,.025);}
   b.box(.58,.25,.04,m.brass,[0,.26,.85],undefined,.025);for(let i=0;i<3;i++)b.box(.31,.018,.01,m.iron,[0,.20+i*.05,.875],undefined,.004);
  }else if(kind==='shaft'){
   b.cyl(.12,.12,1.98,m.steel,undefined,[Math.PI/2,0,0],28);for(const z of[-.72,.72]){b.cyl(.19,.19,.17,m.iron,[0,0,z],[Math.PI/2,0,0],28);b.ring(.155,.023,m.brass,[0,0,z+Math.sign(z)*.09]);}b.box(.065,.06,.42,m.brass,[0,.12,0],undefined,.015);
  }else if(kind==='cog'){
   const s=new THREE.Shape(),n=20;for(let i=0;i<n*4;i++){const a=i*Math.PI*2/(n*4),r=i%4===1||i%4===2?.50:.44;i?s.lineTo(Math.cos(a)*r,Math.sin(a)*r):s.moveTo(Math.cos(a)*r,Math.sin(a)*r);}s.closePath();const hole=new THREE.Path();hole.absarc(0,0,.125,0,Math.PI*2,true);s.holes.push(hole);const g=new THREE.ExtrudeGeometry(s,{depth:.23,bevelEnabled:true,bevelThickness:.018,bevelSize:.015,bevelSegments:2,curveSegments:20});g.translate(0,0,-.115);b.add(g,m.brass);b.ring(.18,.04,m.steel,[0,0,.14]);for(let i=0;i<6;i++){const a=i*Math.PI/3;b.cyl(.04,.04,.018,m.iron,[Math.cos(a)*.31,Math.sin(a)*.31,.145],[Math.PI/2,0,0],12);}
  }else if(kind==='cover'){
   b.box(2.35,.16,1.65,m.ivory,[0,0,0],undefined,.10);b.box(.83,.11,.54,m.ivory,[0,.12,0],undefined,.055);b.box(.50,.016,.24,m.brass,[0,.182,0],undefined,.018);for(let i=0;i<3;i++)b.box(.25,.009,.012,m.iron,[0,.193,-.06+i*.06],undefined,.002);
   for(const x of[-.94,.94])for(const z of[-.61,.61]){b.cyl(.082,.082,.015,m.iron,[x,.09,z],undefined,16);b.cyl(.046,.046,.017,m.black,[x,.10,z],undefined,12);}
   for(let i=0;i<5;i++)b.box(.06,.07,.5,m.teal,[-.65+i*.11,.115,0],undefined,.01);
  }return b.build();
 }
 return(kind)=>{if(!cache.has(kind))cache.set(kind,build(kind));return cache.get(kind).clone(true);};
}

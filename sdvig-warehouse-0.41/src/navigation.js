// Grid A*: the rigger walks around pallet footprints, never straight through stacks.
function simplify(path,start,obstacles){const clear=(a,b)=>{const length=Math.hypot(b.x-a.x,b.z-a.z),steps=Math.max(1,Math.ceil(length/.10));for(let n=1;n<=steps;n++){const x=a.x+(b.x-a.x)*n/steps,z=a.z+(b.z-a.z)*n/steps;if(obstacles.some(o=>Math.abs(x-o.x)<o.hx+.27&&Math.abs(z-o.z)<o.hz+.27))return false;}return true;};const result=[];let from=start,index=0;while(index<path.length){let next=path.length-1;while(next>index&&!clear(from,path[next]))next--;result.push(path[next]);from=path[next];index=next+1;}return result;}
const step=.5,x0=-28,z0=-4.5,nx=90,nz=19;
const key=(x,z)=>z*nx+x;
export function route(start,end,obstacles){
 const cell=p=>[Math.max(0,Math.min(nx-1,Math.round((p.x-x0)/step))),Math.max(0,Math.min(nz-1,Math.round((p.z-z0)/step)))];
 const [sx,sz]=cell(start),[ex,ez]=cell(end),goal=key(ex,ez),origin=key(sx,sz),closed=new Set(),open=new Set([origin]),came=new Map(),score=new Map([[origin,0]]),cost=i=>Math.abs(i%nx-ex)+Math.abs(Math.floor(i/nx)-ez);
 const free=(x,z)=>!obstacles.some(o=>Math.abs(x0+x*step-o.x)<o.hx+.27&&Math.abs(z0+z*step-o.z)<o.hz+.27);
 for(let n=0;n<1800&&open.size;n++){
  let current=-1,best=Infinity;for(const i of open){const v=score.get(i)+cost(i);if(v<best){best=v;current=i;}}
  if(current===goal){const path=[];for(let i=current;i!==origin;i=came.get(i))path.unshift({x:x0+(i%nx)*step,z:z0+Math.floor(i/nx)*step});path.push(end);return simplify(path,start,obstacles);}
  open.delete(current);closed.add(current);const x=current%nx,z=Math.floor(current/nx);
  for(const [dx,dz]of[[1,0],[-1,0],[0,1],[0,-1]]){const a=x+dx,b=z+dz,i=key(a,b);if(a<0||a>=nx||b<0||b>=nz||closed.has(i)||!free(a,b))continue;const next=score.get(current)+1;if(next<(score.get(i)??Infinity)){came.set(i,current);score.set(i,next);open.add(i);}}
 }return null;
}

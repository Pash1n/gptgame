// Symmetric elevated front view: no camera yaw. A small depth scale lets rails recede.
export const depthScale=z=>1+.03*z;
export function project(p){const k=depthScale(p.z);return{x:800+82*p.x*k,y:650+42*p.z-68*p.y*k};}
export function planeDelta(dx,dy,at){const z=at.z+dy/(42-68*at.y*.03);const x=(82*at.x*depthScale(at.z)+dx)/(82*depthScale(z));return{x:x-at.x,z:z-at.z};}
export function bounds(item){const b=item.body.position,[sx,sy,sz]=item.size,p=[];for(const x of[-sx/2,sx/2])for(const y of[-sy/2,sy/2])for(const z of[-sz/2,sz/2])p.push(project({x:b.x+x,y:b.y+y,z:b.z+z}));return{left:Math.min(...p.map(v=>v.x)),top:Math.min(...p.map(v=>v.y)),right:Math.max(...p.map(v=>v.x)),bottom:Math.max(...p.map(v=>v.y))};}

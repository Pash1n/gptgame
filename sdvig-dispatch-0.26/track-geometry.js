/* One geometric centreline shared by textured rails, vehicle anchors and previews. */
(function(root){'use strict';
const HALF=.5,GAUGE=.44,xy=id=>id.split(',').map(Number),clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function direction(a,b){const[x,y]=xy(a),[X,Y]=xy(b);return{x:Math.sign(X-x),y:Math.sign(Y-y)};}
function incoming(c,id){return Object.keys(c.nodes).filter(k=>c.nodes[k].next.includes(id));}
function path(c,id,previous,next){const[x,y]=xy(id),center={x:x+.5,y:y+.5};let a=previous&&previous!==id?direction(id,previous):null,b=next&&next!==id?direction(id,next):null;if(!a)a=b?{x:-b.x,y:-b.y}:{x:-1,y:0};if(!b)b={x:-a.x,y:-a.y};
 if(a.x===-b.x&&a.y===-b.y)return{kind:'line',id,a,b,length:1,point:t=>({x:center.x+a.x*.5+(b.x-a.x)*.5*t,y:center.y+a.y*.5+(b.y-a.y)*.5*t}),tangent:()=>({x:b.x,y:b.y})};
 const origin={x:center.x+(a.x+b.x)*.5,y:center.y+(a.y+b.y)*.5},start=Math.atan2(-b.y,-b.x),end=Math.atan2(-a.y,-a.x);let delta=end-start;while(delta>Math.PI)delta-=Math.PI*2;while(delta< -Math.PI)delta+=Math.PI*2;
 return{kind:'curve',id,a,b,length:Math.abs(delta)*HALF,point:t=>({x:origin.x+Math.cos(start+delta*t)*HALF,y:origin.y+Math.sin(start+delta*t)*HALF}),tangent:t=>({x:-Math.sin(start+delta*t)*Math.sign(delta),y:Math.cos(start+delta*t)*Math.sign(delta)})};
}
function segments(c){const out=[];for(const[id,n]of Object.entries(c.nodes)){const ins=incoming(c,id),outs=n.next;if(!ins.length&&outs.length)out.push(path(c,id,null,outs[0]));else if(!outs.length&&ins.length)out.push(path(c,id,ins[0],null));else for(const prev of ins)for(const next of outs)if(prev!==next)out.push(path(c,id,prev,next));}return out;}
function travel(a,b,t){const la=a.length/2,lb=b.length/2,d=clamp(t,0,1)*(la+lb),p=d<la?a.point(.5+d/a.length):b.point((d-la)/b.length),v=d<la?a.tangent(.5+d/a.length):b.tangent((d-la)/b.length);return{...p,dx:v.x,dy:v.y};}
function ribbon(ctx,image,curve,project,quad,width=GAUGE,pieces=null){const count=pieces||(curve.kind==='line'?4:18);for(let i=0;i<count;i++){const t=i/count,T=(i+1)/count,a=curve.point(t),b=curve.point(T),u=curve.tangent(t),v=curve.tangent(T),r=width/2;const corners=[project(a.x-u.y*r,a.y+u.x*r),project(b.x-v.y*r,b.y+v.x*r),project(b.x+v.y*r,b.y-v.x*r),project(a.x+u.y*r,a.y-u.x*r)];quad(ctx,image,corners,{u0:t,v0:0,u1:T,v1:1});}}
function line(a,b){const dx=b.x-a.x,dy=b.y-a.y,l=Math.hypot(dx,dy)||1;return{kind:'line',length:l,point:t=>({x:a.x+dx*t,y:a.y+dy*t}),tangent:()=>({x:dx/l,y:dy/l})};}
const api={GAUGE,xy,direction,incoming,path,segments,travel,ribbon,line};root.TrackGeometry=api;if(typeof module!=='undefined')module.exports=api;
})(globalThis);

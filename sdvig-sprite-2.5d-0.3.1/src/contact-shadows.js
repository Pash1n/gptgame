// One cached soft stamp. No light sources, ray tracing, blur passes or shadow maps.
export function createShadowStamp(){
 const canvas=document.createElement('canvas');canvas.width=256;canvas.height=128;
 const ctx=canvas.getContext('2d');ctx.scale(1,.5);
 const gradient=ctx.createRadialGradient(128,128,0,128,128,128);
 gradient.addColorStop(0,'rgba(36,31,25,.68)');
 gradient.addColorStop(.4,'rgba(36,31,25,.46)');
 gradient.addColorStop(.75,'rgba(36,31,25,.13)');
 gradient.addColorStop(1,'rgba(36,31,25,0)');
 ctx.fillStyle=gradient;ctx.fillRect(0,0,256,256);return canvas;
}
export function drawGroundShadows(ctx,stamp,items,project,depthScale){
 ctx.save();
 for(const item of items){
  const p=item.body.position,[sx,sy,sz]=item.size;
  const height=Math.max(0,p.y-sy/2),spread=1+Math.min(height,6)*.075;
  const k=depthScale(p.z),ground=project({x:p.x,y:.005,z:p.z});
  const width=sx*82*k*1.22*spread,depth=sz*42*1.45*spread;
  ctx.globalAlpha=.62/(1+.27*height);
  ctx.drawImage(stamp,ground.x-width/2,ground.y-depth/2,width,depth);
 }
 ctx.restore();
}

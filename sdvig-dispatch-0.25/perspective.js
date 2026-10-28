/* Perspective ground projection plus upright sprite billboards. No game state here. */
(function (root) {
  'use strict';
  const INSET = .087, INNER = 1 - 2 * INSET, DEPTH = .36;
  function create(width, height) {
    function frame(u, v) {
      const scale = 1 / (1 + DEPTH * (1 - v));
      return { x: width * (.5 + (u - .5) * .96 * scale),
        y: height * (.12 + .70 * v * scale), scale };
    }
    function project(x, y) { return frame(INSET + INNER * x / 6, INSET + INNER * y / 6); }
    function inverse(x, y) {
      const t = (y / height - .12) / .70;
      const v = t * (1 + DEPTH) / (1 + t * DEPTH);
      const u = .5 + (x / width - .5) * (1 + DEPTH * (1 - v)) / .96;
      return { x: (u - INSET) / INNER * 6, y: (v - INSET) / INNER * 6 };
    }
    function cellWidth(y) { return width * .96 * INNER / 6 * project(3, y).scale; }
    return { width, height, frame, project, inverse, cellWidth, thickness: height * .065 };
  }
  // Triangle texture mapping. Sprites stay raster artwork; only their surface is projected.
  function triangle(ctx, image, src, dst) {
    const [a,b,c] = src, [p,q,r] = dst;
    const det = a.x*(b.y-c.y)+b.x*(c.y-a.y)+c.x*(a.y-b.y);
    if (Math.abs(det) < 1e-8) return;
    const affine = key => [
      (p[key]*(b.y-c.y)+q[key]*(c.y-a.y)+r[key]*(a.y-b.y))/det,
      (p[key]*(c.x-b.x)+q[key]*(a.x-c.x)+r[key]*(b.x-a.x))/det,
      (p[key]*(b.x*c.y-c.x*b.y)+q[key]*(c.x*a.y-a.x*c.y)+r[key]*(a.x*b.y-b.x*a.y))/det
    ];
    const x=affine('x'), y=affine('y');
    const center={x:(p.x+q.x+r.x)/3,y:(p.y+q.y+r.y)/3},expand=z=>{const dx=z.x-center.x,dy=z.y-center.y,l=Math.hypot(dx,dy)||1;return{x:z.x+dx/l*.35,y:z.y+dy/l*.35}};const P=expand(p),Q=expand(q),R=expand(r);ctx.save();ctx.beginPath();ctx.moveTo(P.x,P.y);ctx.lineTo(Q.x,Q.y);ctx.lineTo(R.x,R.y);ctx.closePath();ctx.clip();
    ctx.transform(x[0],y[0],x[1],y[1],x[2],y[2]);ctx.drawImage(image,0,0);ctx.restore();
  }
  function quad(ctx, image, corners) {
    const w=image.naturalWidth||image.width,h=image.naturalHeight||image.height;
    triangle(ctx,image,[{x:0,y:0},{x:w,y:0},{x:w,y:h}],[corners[0],corners[1],corners[2]]);
    triangle(ctx,image,[{x:0,y:0},{x:w,y:h},{x:0,y:h}],[corners[0],corners[2],corners[3]]);
  }
  // Tessellation avoids an affine-looking diagonal in large perspective textures.
  function surface(ctx, image, project, divisions=12) {
    const w=image.naturalWidth||image.width,h=image.naturalHeight||image.height;
    for(let y=0;y<divisions;y++)for(let x=0;x<divisions;x++) {
      const u=x/divisions,v=y/divisions,U=(x+1)/divisions,V=(y+1)/divisions;
      const source=[{x:u*w,y:v*h},{x:U*w,y:v*h},{x:U*w,y:V*h},{x:u*w,y:V*h}];
      const dest=[project(u,v),project(U,v),project(U,V),project(u,V)];
      triangle(ctx,image,[source[0],source[1],source[2]],[dest[0],dest[1],dest[2]]);
      triangle(ctx,image,[source[0],source[2],source[3]],[dest[0],dest[2],dest[3]]);
    }
  }
  const api={create,quad,surface,INSET,INNER};root.SdvigPerspective=api;
  if(typeof module==='object'&&module.exports)module.exports=api;
})(globalThis);

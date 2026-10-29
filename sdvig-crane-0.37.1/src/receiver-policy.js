// Both receivers validate a complete settled batch before consuming anything.
export function classifyContents(contents,needs,delivered,binId){
 const used={},wrong=[],right=[];
 for(const item of contents){const remaining=Math.max(0,(needs[item.type]||0)-(delivered[item.type]||0)),needed=(used[item.type]||0)<remaining;
  const accepts=binId==='repair'?needed:remaining===0;
  if(accepts){right.push(item);used[item.type]=(used[item.type]||0)+1;}else wrong.push(item);
 }return{right,wrong};
}
export function overlapsBin(body,bin,top=.85){if(body.aabbNeedsUpdate)body.updateAABB();const a=body.aabb;return a.lowerBound.y<top&&a.upperBound.y>-.15&&Math.min(a.upperBound.x,bin.x+bin.w/2-.16)-Math.max(a.lowerBound.x,bin.x-bin.w/2+.16)>.12&&Math.min(a.upperBound.z,bin.z+bin.d/2-.16)-Math.max(a.lowerBound.z,bin.z-bin.d/2+.16)>.12;}

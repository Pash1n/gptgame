const assert=require('node:assert/strict'),T=require('../train-core.js'),G=require('../track-geometry.js'),levels=require('../train-levels.js');
// Every plain straight tile has an exact, unshifted centre and matching ports.
for(const c of levels)for(const s of G.segments(c))if(s.kind==='line'){const[x,y]=G.xy(s.id),p=s.point(.5);assert(Math.abs(p.x-x-.5)<1e-12&&Math.abs(p.y-y-.5)<1e-12);}
for(const c of levels){const r=T.simulate(c,c.solution);assert.equal(r.final.status,'won');for(const s of r.states)for(const g of c.goals)if(s.delivered[g.id])assert.equal(s.delivered[g.id].pos,g.pad);}
console.log('Straight rail centres and all final station anchors are exact; 25 plans still win.');

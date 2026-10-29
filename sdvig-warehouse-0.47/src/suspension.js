const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export class TruckSuspension{
 constructor(saved){this.y=0;this.roll=0;this.pitch=0;this.vy=0;this.vroll=0;this.vpitch=0;this.load=0;this.targetY=0;if(saved)for(const k of Object.keys(this))if(Number.isFinite(saved[k]))this[k]=saved[k];}
 step(dt,loads){const total=loads.reduce((s,p)=>s+p.mass,0),mx=loads.reduce((s,p)=>s+p.mass*p.x,0),mz=loads.reduce((s,p)=>s+p.mass*p.z,0);this.targetY=-Math.min(2400,total)/16000;const targets={y:this.targetY,roll:clamp(mz/50000,-.04,.04),pitch:clamp(-mx/250000,-.022,.022)};if(total>this.load+100)this.vy-=Math.min(.10,(total-this.load)/12000);this.load=total;for(const [key,v,k,c,limit]of[['y','vy',75,13,.19],['roll','vroll',95,15,.05],['pitch','vpitch',80,14,.028]]){this[v]+=((targets[key]-this[key])*k-this[v]*c)*dt;this[key]+=this[v]*dt;if(Math.abs(this[key])>limit){this[key]=clamp(this[key],-limit,limit);this[v]=0;}}}
 snapshot(){return{...this};}
}

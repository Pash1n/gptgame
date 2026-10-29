// A persistent deadline avoids losing every other 60 Hz callback to timestamp jitter.
// Missed wall time is discarded, never replayed as a burst of physics steps.
export class FrameClock {
 constructor({fps=60,maxDelta=.04}={}){this.interval=1000/fps;this.maxDelta=maxDelta;this.reset(0);}
 reset(now){this.previous=now;this.deadline=now+this.interval;this.rawDelta=0;}
 sample(now){if(now<this.previous){this.reset(now);return null;}if(now+.8<this.deadline)return null;
  this.rawDelta=Math.max(0,(now-this.previous)/1000);const dt=Math.min(this.maxDelta,this.rawDelta);this.previous=now;
  this.deadline+=this.interval;if(this.deadline<now-this.interval)this.deadline=now+this.interval;
  return dt;
 }
}

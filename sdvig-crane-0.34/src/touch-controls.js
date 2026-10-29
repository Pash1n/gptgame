/* Stable finger roles: adding/removing a finger never issues a movement command. */
export class TouchCrane{
 constructor({move,raise,change=()=>{}}){this.move=move;this.raise=raise;this.change=change;this.points=new Map();this.primary=null;this.secondary=null;}
 down(id,x,y){if(this.points.has(id)||this.points.size>=2)return false;this.points.set(id,{x,y});if(this.primary===null)this.primary=id;else this.secondary=id;this.change(this.state());return true;}
 update(id,x,y){const p=this.points.get(id);if(!p)return;const dx=x-p.x,dy=y-p.y;p.x=x;p.y=y;if(id===this.primary)this.move(dx,dy);else if(id===this.secondary)this.raise(-dy);}
 up(id){if(!this.points.delete(id))return;if(id===this.primary){this.primary=this.secondary;this.secondary=null;}else if(id===this.secondary)this.secondary=null;this.change(this.state());}
 clear(){this.points.clear();this.primary=this.secondary=null;this.change(this.state());}
 state(){return{count:this.points.size,primary:this.primary,secondary:this.secondary};}
}

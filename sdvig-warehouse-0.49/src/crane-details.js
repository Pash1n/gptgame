import * as T from 'three';
// Detail meshes are merged by material and do not add physics bodies.
export function detailCrane(crane,B,m){
 const b=new B();
 for(const x of[-.54,.54]){for(let z=-4.2;z<=4.2;z+=.7){b.box(.26,.48,.045,m.teal,[x,8.42,z],undefined,.009);for(const y of[8.22,8.62])for(const dx of[-.095,.095])b.cyl(.024,.024,.020,m.steel,[x+dx,y,z+.035],[Math.PI/2,0,0],6);}b.box(.042,.025,9.1,m.machined,[x,8.825,0],undefined,.006);for(const z of[-4.25,4.25])b.box(.23,.055,.28,m.grease,[x,8.81,z],undefined,.01);}
 for(const z of[-4.9,4.9])for(const x of[-.6,.6]){b.box(.32,.25,.38,m.teal,[x,8.20,z],undefined,.018);b.cyl(.06,.06,.08,m.brass,[x,8.21,z+.22],[Math.PI/2,0,0],12);for(const xx of[-.12,.12])b.cyl(.024,.024,.035,m.steel,[x+xx,8.33,z],undefined,6);}
 for(let z=-4.2;z<4.2;z+=.7){b.tube([[.83,8.56,z],[.83,8.0,z+.34],[.83,8.56,z+.67]],.020,m.rubber);b.box(.14,.07,.09,m.iron,[.83,8.57,z],undefined,.012);}
 crane.bridge.add(b.build());const t=new B();
 for(const x of[-.55,.55])for(const z of[-.36,.36]){t.box(.25,.20,.20,m.teal,[x,8.33,z],undefined,.02);t.cyl(.058,.058,.035,m.brass,[x,8.33,z+.12],[Math.PI/2,0,0],12);for(const xx of[-.075,.075])t.cyl(.018,.018,.022,m.steel,[x+xx,8.44,z],undefined,6);}
 for(let i=0;i<9;i++)t.box(.018,.39,.39,m.teal,[.33+i*.038,8.62,0],undefined,.007);
 t.cyl(.14,.14,.055,m.iron,[.83,8.62,0],[0,0,Math.PI/2],20);for(let j=0;j<8;j++){const a=j*Math.PI/4;t.cyl(.017,.017,.035,m.steel,[.865,8.62+Math.cos(a)*.11,Math.sin(a)*.11],[0,0,Math.PI/2],6);}
 t.tube([[.58,8.83,.18],[.65,8.95,.3],[.2,8.96,.36],[-.45,8.83,.32]],.024,m.rubber);
 t.box(.24,.27,.12,m.ivory,[-.58,8.65,.36],undefined,.022);t.box(.028,.10,.018,m.black,[-.52,8.65,.43],undefined,.006);
 for(const z of[-.29,.29]){t.box(.34,.24,.06,m.yellow,[0,8.05,z],undefined,.035);t.cyl(.10,.10,.11,m.machined,[0,8.06,z],[Math.PI/2,0,0],20);t.ring(.075,.012,m.grease,[0,8.06,z+Math.sign(z)*.065]);t.cyl(.025,.025,.025,m.brass,[0,8.06,z+Math.sign(z)*.08],[Math.PI/2,0,0],6);}
 crane.trolley.add(t.build());
 const rotor=new T.Group(),coils=new B(),points=[];for(let i=0;i<=208;i++){const u=i/208,a=u*Math.PI*26;points.push(new T.Vector3(-.34+u*.68,Math.cos(a)*.325,Math.sin(a)*.325));}coils.add(new T.TubeGeometry(new T.CatmullRomCurve3(points),104,.012,4,false),m.machined);for(const x of[-.40,.40]){coils.cyl(.025,.025,.015,m.brass,[x,.27,0],[0,0,Math.PI/2],6);coils.box(.015,.09,.035,m.coral,[x,.27,0],undefined,.004);}rotor.add(coils.build());rotor.position.set(0,8.63,0);crane.trolley.add(rotor);crane.drum=rotor;return crane;
}

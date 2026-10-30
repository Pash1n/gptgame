import*as THREE from'three';
// Approximate convex collision shapes match each decorated rigid part.
export const PART_DEFS={
 engineBlock:{name:'Блок цилиндров',mass:6.2,radius:.84,half:[.86,.68,.54],offset:[0,.30,0]},
 crank:{name:'Коленвал',mass:2.1,radius:.9,half:[.96,.20,.22]},piston:{name:'Поршень',mass:1.05,radius:.52,half:[.26,.395,.23],offset:[0,-.12,0]},flywheel:{name:'Маховик',mass:2.4,radius:.6,half:[.13,.61,.61]},engineHead:{name:'Головка блока',mass:2.5,radius:.8,half:[.83,.18,.43]},
 genFrame:{name:'Станина',mass:4.1,radius:.85,half:[.77,.48,.77],offset:[0,.26,0]},coil:{name:'Обмотка',mass:1.1,radius:.55,half:[.19,.4,.64]},rotor:{name:'Ротор',mass:2.7,radius:.82,half:[.28,.28,.93]},genCap:{name:'Щит генератора',mass:1.3,radius:.64,half:[.68,.68,.12]},
 radiator:{name:'Радиатор',mass:1.8,radius:.92,half:[.83,.69,.16],fragile:true},pump:{name:'Насос',mass:2.8,radius:.55,half:[.43,.33,.42]},coolantPipe:{name:'Патрубок',mass:1.0,radius:.74,half:[.19,.51,.44]},fan:{name:'Вентилятор',mass:1.1,radius:.68,half:[.64,.64,.13]},coolantTank:{name:'Бачок',mass:1.1,radius:.52,half:[.26,.52,.26],offset:[0,-.02,0]},
 console:{name:'Корпус пульта',mass:3.5,radius:.85,half:[.94,.60,.44],offset:[0,.16,0]},circuit:{name:'Плата',mass:.65,radius:.50,half:[.34,.39,.07],fragile:true},meter:{name:'Прибор',mass:.75,radius:.33,half:[.23,.23,.13],fragile:true},lever:{name:'Рубильник',mass:.7,radius:.4,half:[.18,.32,.18]},harness:{name:'Жгут проводов',mass:.8,radius:.65,half:[.65,.16,.18]},
 wheel:{name:'Стальное колесо',mass:1.4,radius:.5,half:[.5,.18,.5]},scrapcoil:{name:'Обрезок кабеля',mass:.85,radius:.48,half:[.42,.22,.36]}
};
export function decoratePart(kind,b,m){const P=Math.PI;
 const bolts=(xs,ys,z)=>{for(const x of xs)for(const y of ys)b.cyl(.028,.028,.035,m.brass,[x,y,z],[P/2,0,0],6);};
 if(kind==='engineBlock'){
  b.box(1.70,.35,.92,m.teal,[0,-.10,0],undefined,.10);for(const x of[-.42,.42]){b.add(new THREE.CylinderGeometry(.36,.37,.92,28,1,true,Math.PI*.25,Math.PI*1.5),m.teal,[x,.46,0]);for(let i=0;i<7;i++)b.ring(.375,.025,m.iron,[x,.09+i*.12,0],[P/2,0,0]);b.ring(.28,.068,m.steel,[x,.94,0],[P/2,0,0]);}for(const x of[-.72,.72]){b.box(.27,.14,1.08,m.iron,[x,-.30,0],undefined,.03);for(const z of[-.40,.40])b.cyl(.055,.055,.04,m.brass,[x,-.20,z],undefined,6);}bolts([-.65,-.23,.23,.65],[-.13,.09],.49);
 }else if(kind==='crank'){
  b.cyl(.11,.11,1.95,m.steel,undefined,[0,0,P/2],28);for(const x of[-.42,.42]){b.cyl(.25,.25,.10,m.iron,[x,0,0],[0,0,P/2],24);b.cyl(.12,.12,.24,m.steel,[x,.15,.05],[0,0,P/2],24);b.box(.12,.24,.16,m.brass,[x,.08,.025],undefined,.03);}for(const x of[-.75,.75])b.cyl(.16,.16,.15,m.brass,[x,0,0],[0,0,P/2],24);
 }else if(kind==='piston'){
  b.cyl(.25,.25,.34,m.steel,[0,.09,0],undefined,28);for(const y of[.12,.2,.26])b.ring(.25,.015,m.iron,[0,y,0],[P/2,0,0]);b.cyl(.23,.23,.02,m.iron,[0,.27,0],undefined,28);b.box(.11,.27,.11,m.steel,[0,-.18,0],undefined,.03);b.ring(.12,.045,m.brass,[0,-.35,0]);b.cyl(.07,.07,.55,m.brass,[0,-.03,0],[0,0,P/2],20);
 }else if(kind==='flywheel'){
  b.cyl(.60,.60,.16,m.iron,undefined,[0,0,P/2],40);b.ring(.54,.035,m.brass,[.10,0,0],[0,P/2,0]);b.cyl(.16,.16,.29,m.steel,undefined,[0,0,P/2],28);for(let i=0;i<8;i++){const a=i*P/4;b.cyl(.045,.045,.02,m.black,[.10,Math.cos(a)*.37,Math.sin(a)*.37],[0,0,P/2],16);}
 }else if(kind==='engineHead'){
  b.box(1.75,.30,.9,m.ivory,undefined,undefined,.08);for(let i=0;i<9;i++)b.box(.05,.08,.8,m.iron,[-.65+i*.16,.20,0],undefined,.012);for(const x of[-.42,.42]){b.cyl(.075,.075,.24,m.brass,[x,.31,0]);b.cyl(.10,.10,.12,m.ivory,[x,.43,0]);b.ball(.06,m.iron,[x,.52,0]);}bolts([-.72,.72],[-.09,.09],.47);
 }else if(kind==='genFrame'){
  b.box(1.75,.18,1.75,m.teal,[0,-.12,0],undefined,.06);for(const z of[-.68,.68]){b.ring(.56,.11,m.teal,[0,.56,z]);b.ring(.49,.028,m.steel,[0,.56,z+Math.sign(z)*.08]);}for(const x of[-.68,.68])b.box(.15,.48,1.40,m.teal,[x,.16,0],undefined,.04);for(const x of[-.72,.72])for(const z of[-.69,.69])b.cyl(.055,.055,.06,m.brass,[x,.01,z],undefined,6);
 }else if(kind==='coil'){
  b.box(.30,.66,1.15,m.iron,undefined,undefined,.06);for(let i=0;i<18;i++){const z=-.52+i*.061;b.tube([[-.17,-.30,z],[-.20,.25,z],[-.13,.35,z],[.13,.35,z],[.20,.25,z],[.17,-.30,z],[-.17,-.30,z]],.022,m.brass);}b.box(.2,.09,.14,m.ivory,[0,.42,.45],undefined,.02);b.tube([[0,.43,.45],[0,.53,.65],[.15,.53,.69]],.025,m.coral);
 }else if(kind==='rotor'){
  b.cyl(.28,.28,1.2,m.iron,undefined,[P/2,0,0],32);b.cyl(.09,.09,1.95,m.steel,undefined,[P/2,0,0],24);for(let i=0;i<12;i++){const a=i*P/6;b.box(.045,.05,1.12,m.brass,[Math.cos(a)*.27,Math.sin(a)*.27,0],[0,0,a],.01);}for(const z of[-.66,.66])b.cyl(.16,.16,.14,m.brass,[0,0,z],[P/2,0,0],24);
 }else if(kind==='genCap'){
  b.ring(.57,.105,m.teal);b.ring(.48,.022,m.brass,[0,0,.10]);b.ring(.14,.045,m.steel,[0,0,.08]);for(let i=0;i<8;i++){const a=i*P/4;b.box(.07,.43,.13,m.teal,[Math.sin(a)*.32,Math.cos(a)*.32,0],[0,0,-a],.02);b.cyl(.035,.035,.04,m.brass,[Math.sin(a)*.56,Math.cos(a)*.56,.1],[P/2,0,0],6);}
 }else if(kind==='radiator'){
  for(const x of[-.77,.77])b.box(.18,1.43,.26,m.teal,[x,0,0],undefined,.06);for(const y of[-.64,.64])b.box(1.6,.16,.27,m.ivory,[0,y,0],undefined,.035);for(let i=0;i<17;i++)b.box(.035,1.20,.21,m.steel,[-.67+i*.084,0,0],undefined,.008);for(let i=0;i<10;i++)b.box(1.4,.018,.24,m.iron,[0,-.54+i*.12,0],undefined,.004);for(const x of[-.72,.72])b.cyl(.09,.09,.20,m.brass,[x,-.63,.15],[P/2,0,0],20);
 }else if(kind==='pump'){
  b.cyl(.30,.30,.48,m.teal,undefined,[P/2,0,0],28);b.cyl(.24,.24,.12,m.ivory,[0,0,.29],[P/2,0,0],24);b.cyl(.10,.10,.27,m.brass,[.32,0,0],[0,0,P/2],20);b.cyl(.1,.1,.25,m.brass,[0,.34,0],undefined,20);b.box(.68,.12,.6,m.iron,[0,-.31,0],undefined,.04);bolts([-.15,.15],[-.15,.15],.37);
 }else if(kind==='coolantPipe'){
  m.fluidGlass??=new THREE.MeshStandardMaterial({color:'#c2fff1',transparent:true,opacity:.24,roughness:.18,metalness:.06,depthWrite:false});b.tube([[.14,-.25,-.32],[.14,.33,-.32]],.045,m.fluidGlass);b.tube([[0,-.43,.37],[0,-.43,-.20],[0,-.31,-.32],[0,.36,-.32]],.085,m.teal);for(const p of[[0,-.43,.38],[0,.36,-.32]]){b.ball(.13,m.brass,p);b.ring(.12,.025,m.steel,p,[P/2,0,0]);}
 }else if(kind==='fan'){
  b.ring(.60,.04,m.iron);b.cyl(.13,.13,.24,m.brass,undefined,[P/2,0,0],24);for(let i=0;i<5;i++){const a=i*P*2/5;b.box(.24,.40,.055,m.ivory,[Math.sin(a)*.34,Math.cos(a)*.34,0],[.18,0,-a+.2],.06);}b.ball(.12,m.teal,[0,0,.17],[1,1,.45]);
 }else if(kind==='coolantTank'){
  b.cyl(.23,.23,.67,m.ivory,undefined,undefined,28);for(const y of[-.34,.34])b.cyl(.26,.26,.07,m.teal,[0,y,0],undefined,28);b.box(.11,.39,.025,m.cyan,[0,0,.24],undefined,.025);b.cyl(.12,.12,.12,m.brass,[0,.43,0],undefined,12);b.cyl(.07,.07,.17,m.brass,[0,-.45,0],undefined,16);
 }else if(kind==='console'){
  b.box(1.95,.18,.93,m.teal,[0,-.36,0],undefined,.05);for(const x of[-.88,.88])b.box(.18,1.15,.93,m.teal,[x,.12,0],undefined,.06);b.box(1.9,.16,.93,m.ivory,[0,.75,0],undefined,.05);b.box(1.7,.95,.08,m.iron,[0,.15,-.43],undefined,.04);for(let i=0;i<5;i++)b.box(.46,.025,.05,m.black,[-.50,-.08+i*.09,.49],undefined,.006);bolts([-.82,.82],[-.27,.64],.49);
 }else if(kind==='circuit'){
  b.box(.66,.78,.06,m.teal,undefined,undefined,.025);for(let i=0;i<4;i++){b.box(.20,.11,.055,m.black,[-.13,-.23+i*.15,.06],undefined,.015);b.box(.045,.06,.10,m.ivory,[.18,-.23+i*.15,.07],undefined,.008);b.tube([[-.23,-.28+i*.15,.045],[.23,-.28+i*.15,.045],[.23,-.22+i*.15,.045]],.007,m.brass);}for(const x of[-.27,.27])for(const y of[-.33,.33])b.cyl(.025,.025,.025,m.brass,[x,y,.06],[P/2,0,0],6);
 }else if(kind==='meter'){
  b.cyl(.22,.22,.22,m.iron,undefined,[P/2,0,0],32);b.ring(.21,.028,m.brass,[0,0,.13]);b.cyl(.18,.18,.02,m.ivory,[0,0,.13],[P/2,0,0],32);for(let i=0;i<9;i++){const a=-P*.75+i*P*1.5/8;b.box(.015,.035,.01,m.iron,[Math.sin(a)*.14,Math.cos(a)*.14,.15],[0,0,-a],.003);}b.ball(.025,m.brass,[0,0,.18]);
 }else if(kind==='lever'){
  b.box(.35,.16,.35,m.iron,[0,-.10,0],undefined,.04);b.cyl(.045,.045,.38,m.brass,[0,.13,0],[0,0,-.3],16);b.ball(.095,m.coral,[.065,.34,0]);for(const x of[-.12,.12])b.cyl(.025,.025,.03,m.steel,[x,0,.12],undefined,6);
 }else if(kind==='harness'){
  for(let i=0;i<4;i++)b.tube([[-.6,.1-i*.035,0],[-.25,-.12-i*.035,0],[.25,-.12-i*.035,0],[.6,.1-i*.035,0]],.024,[m.brass,m.coral,m.iron,m.teal][i]);for(const x of[-.6,.6]){b.box(.14,.25,.14,m.black,[x,.02,0],undefined,.025);b.box(.18,.05,.17,m.brass,[x,.13,0],undefined,.015);}
 }else if(kind==='wheel'){
  b.ring(.37,.10,m.iron,[0,0,0],[P/2,0,0]);b.cyl(.16,.16,.32,m.rust);for(let i=0;i<8;i++){const a=i*P/4;b.box(.10,.16,.31,m.steel,[Math.sin(a)*.24,0,Math.cos(a)*.24],[0,a,0],.015);}
 }else if(kind==='scrapcoil'){
  for(let i=0;i<4;i++)b.ring(.22+i*.035,.025,m.brass,[0,i*.055,0],[P/2,.2,0]);b.tube([[.2,.19,0],[.42,.25,.2],[.38,.08,.35]],.035,m.black);
 }else if(kind==='driveCoupler'){for(const[x,len,z]of[[-.745,.35,.2256],[.413,.48,-.2256]]){b.cyl(.045,.045,len,m.steel,[x,0,z],[0,0,P/2],20);for(const side of[-1,1]){b.cyl(.085,.085,.09,m.brass,[x+side*len*.3,0,z],[0,0,P/2],20);b.ring(.075,.012,m.iron,[x+side*len*.3,0,z],[0,P/2,0]);}}}else if(kind==='stationHoses'){b.tube([[-1.22,.35,.98],[-1.7,.25,.98],[-1.7,.25,-.10],[-1.38,.45,-.30]],.04,m.teal);b.tube([[-1.1,.32,.98],[-.9,.19,.60],[-1.05,.19,-.1],[-1.30,.39,-.3]],.035,m.coral);b.tube([[1.35,.38,.98],[1.7,.20,.98],[1.7,.17,.3],[1.10,.37,-.30]],.027,m.brass);for(const pos of[[-1.22,.35,.98],[-1.38,.45,-.3],[1.35,.38,.98],[1.10,.37,-.3]])b.ball(.065,m.brass,pos);}else return false;return true;
}

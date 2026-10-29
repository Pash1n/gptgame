export const GOODS={motors:{name:'Электродвигатели',short:'Двигатели',height:1.35,mass:650},crates:{name:'Запчасти в ящиках',short:'Запчасти',height:1.6,mass:320},drums:{name:'Бочки с маслом',short:'Масло',height:1.65,mass:480},reels:{name:'Катушки кабеля',short:'Кабель',height:1.5,mass:400}};
export const DOCK={x:14.5,z:1.1};
export const STORAGE_SLOTS=[{name:'01',x:1,z:-2.5},{name:'02',x:6,z:-2.5},{name:'03',x:1,z:1.1},{name:'04',x:6,z:1.1}];
export const ORDERS=[{number:'001',type:'motors',count:2},{number:'002',type:'crates',count:2}];
export const LAYOUT=STORAGE_SLOTS.map((p,i)=>({id:'pallet-'+i,type:i<2?'motors':'crates',x:p.x,z:p.z,bottom:0,bay:p.name,...GOODS[i<2?'motors':'crates']}));

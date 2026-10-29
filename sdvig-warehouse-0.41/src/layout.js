export const GOODS={motors:{name:'Электродвигатели',short:'Двигатели',height:1.35,mass:650},crates:{name:'Запчасти в ящиках',short:'Запчасти',height:1.6,mass:320},drums:{name:'Бочки с маслом',short:'Масло',height:1.65,mass:480},reels:{name:'Катушки кабеля',short:'Кабель',height:1.5,mass:400}};
export const DOCK={x:14.5,z:1.1};
export const ORDERS=[{number:'014',type:'motors',count:2},{number:'015',type:'drums',count:2},{number:'016',type:'reels',count:2}];
export const LAYOUT=[
 ['motors',-20,-2.6,0,'А1'],['crates',-20,-2.6,1.35,'А1'],
 ['drums',-14,-2.6,0,'А2'],['reels',-14,-2.6,1.65,'А2'],
 ['crates',-8,-2.6,0,'А3'],['crates',-8,-2.6,1.6,'А3'],
 ['motors',-4,1.1,0,'Б4'],['crates',-4,1.1,1.35,'Б4'],
 ['motors',7,-2.6,0,'А6'],['crates',2,-2.6,0,'А5'],['drums',-11,1.1,0,'Б3'],['reels',-18,1.1,0,'Б1'],
 ['crates',-14,1.1,0,'Б2'],['crates',-24,-2.6,0,'А0'],['crates',-24,1.1,0,'Б0'],['drums',0,-2.6,0,'А4'],
 ['reels',4,1.1,0,'Б6'],['crates',10,-2.6,0,'А7'],['drums',-6,-2.6,0,'А3'],['crates',-1,1.1,0,'Б5']
].map(([type,x,z,bottom,bay],i)=>({id:'pallet-'+i,type,x,z,bottom,bay,...GOODS[type]}));

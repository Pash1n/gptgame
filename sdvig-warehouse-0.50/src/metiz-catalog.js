export const CASE_LIMIT=25,CASE_PRICE=35,PACK_FEE=20;
export const PACK_PAD={x:9.15,z:1.1};
export const FAMILIES=[['bolts','Болты'],['nuts','Гайки'],['washers','Шайбы'],['screws','Винты'],['self','Саморезы'],['nails','Гвозди'],['wire','Проволока'],['studs','Шпильки']];
const groups=[
 ['bolts','Болт',['М6×20','М6×40','М8×30','М8×50','М10×40','М12×60'],[140,170,190,240,280,360],'100 шт.'],
 ['nuts','Гайка',['М6','М8','М10','М12'],[90,120,170,230],'200 шт.'],
 ['washers','Шайба',['М6','М8','М10','М12'],[65,80,110,150],'500 шт.'],
 ['screws','Винт',['М4×16','М4×30','М5×20','М5×40'],[110,135,150,190],'200 шт.'],
 ['self','Саморез',['3,5×25','3,5×45','4,2×32','4,8×70'],[120,155,165,250],'200 шт.'],
 ['nails','Гвозди',['40 мм','60 мм','80 мм','100 мм'],[100,125,155,190],'2 кг'],
 ['wire','Проволока',['Ø1,2 мм','Ø2 мм'],[210,280],'2 кг'],
 ['studs','Шпилька',['М8×1000','М10×1000'],[350,460],'10 шт.']
];
export const SKUS=groups.flatMap(([family,title,sizes,prices,pack])=>sizes.map((size,i)=>({id:family+'-'+(i+1),family,icon:FAMILIES.findIndex(f=>f[0]===family),name:title+' '+size,size,pack,buy:prices[i],sell:Math.round(prices[i]*1.48)})));
export const SKU=Object.fromEntries(SKUS.map(s=>[s.id,s]));
export const clone=v=>JSON.parse(JSON.stringify(v));
export const qty=contents=>Object.values(contents).reduce((sum,line)=>sum+line.qty,0);
export const value=contents=>Object.values(contents).reduce((sum,line)=>sum+line.cost,0);
export const lineCount=lines=>Object.values(lines).reduce((sum,n)=>sum+n,0);
export function validLines(lines,allowEmpty=false,max=100){return !!lines&&typeof lines==='object'&&!Array.isArray(lines)&&(allowEmpty||Object.keys(lines).length>0)&&Object.entries(lines).every(([id,n])=>Object.hasOwn(SKU,id)&&Number.isInteger(n)&&n>0&&n<=max)&&lineCount(lines)<=max;}
export function validContents(contents){return !!contents&&typeof contents==='object'&&!Array.isArray(contents)&&Object.entries(contents).every(([id,l])=>Object.hasOwn(SKU,id)&&l&&Number.isInteger(l.qty)&&l.qty>0&&l.qty<=CASE_LIMIT&&Number.isInteger(l.cost)&&l.cost>=0)&&qty(contents)<=CASE_LIMIT;}
export function quote(lines,maxCases){if(!validLines(lines,false,maxCases*CASE_LIMIT))throw Error('Выбери от 1 до '+(maxCases*CASE_LIMIT)+' коробок известных товаров');const count=Math.ceil(lineCount(lines)/CASE_LIMIT),fee=count>2?70:40,packing=count*CASE_PRICE,total=lineCount(lines),surcharge=fee+packing;let index=0;const cases=Array.from({length:count},()=>({}));for(const sku of SKUS){const n=lines[sku.id]||0;for(let i=0;i<n;i++,index++){const container=cases[Math.floor(index/CASE_LIMIT)],cost=sku.buy+Math.floor(surcharge/total)+(index<surcharge%total?1:0);container[sku.id]??={qty:0,cost:0};container[sku.id].qty++;container[sku.id].cost+=cost;}}return{lines:clone(lines),boxes:total,count,fee,packing,price:cases.reduce((sum,c)=>sum+value(c),0),cases};}
const recipes=[{'bolts-3':4,'nuts-2':4,'washers-2':4},{'self-1':6,'nails-2':4,'wire-1':2},{'bolts-5':5,'nuts-3':5,'washers-3':5,'studs-2':2},{'screws-1':3,'screws-3':4,'washers-1':3},{'bolts-1':3,'bolts-2':2,'nuts-1':5,'washers-1':5},{'self-2':3,'self-3':4,'self-4':2,'nails-1':3},{'bolts-4':4,'nuts-2':4,'nails-3':3,'wire-2':2},{'bolts-6':3,'nuts-4':3,'washers-4':3,'studs-1':2},{'screws-2':4,'screws-4':4,'nails-4':4},{'wire-1':1}];
const customers=['Мастерская «Ротор»','Столярный цех','Монтажная бригада'];
export function hardwareOffers(round){return Array.from({length:3},(_,i)=>{const lines=clone(recipes[(round===0?[9,0,1][i]:round*3+i)%recipes.length]);return{id:'metiz-'+round+'-'+i,buyer:customers[i],lines,price:Object.entries(lines).reduce((s,[id,n])=>s+SKU[id].sell*n,0)+90,title:'Заявка '+(round+1)+'-'+(i+1)};});}
export function hardwareContract(completed,progress){const lines=clone(recipes[(completed+progress)%recipes.length]);return{id:'metiz-contract-'+completed+'-'+progress,buyer:'Постоянный клиент «Комплект»',lines,price:Object.entries(lines).reduce((s,[id,n])=>s+SKU[id].sell*n,0)+200,contract:true,title:'Поставка '+(progress+1)+' / 2'};}

const fs=require('node:fs'),P=require('../routes-core.js');
const slide=(axis,index,n)=>({axis,index,n}),ice=cell=>({tool:'freeze',cell}),melt=cell=>({tool:'thaw',cell}),flip=cell=>({flip:cell});
const defs=[
{title:'Первая доставка',note:"Потяни ряд и доставь красного робота в красное ремонтное гнездо.",actors:[[13,0]],stations:[[15,0]],pins:[],budget:3,path:[slide('x',2,2)]},
{title:'Верхний обход',note:"Магнит закрепляет клетку. Поток обходит её сверху — доставь синего робота.",actors:[[13,1]],stations:[[9,1]],pins:[14],budget:1,path:[slide('x',2,3)]},
{title:'Выбери другую сторону',note:"Нажми на магнит, чтобы переключить обход вниз. Затем потяни ряд.",actors:[[13,4]],stations:[[21,4]],pins:[14],budget:1,path:[flip(14),slide('x',2,3)]},
{title:'Найди свободный проход',note:"Верхний проход занят магнитом. Поток автоматически выберет свободный нижний путь.",actors:[[13,2]],stations:[[21,2]],pins:[14,8],budget:1,path:[slide('x',2,3)]},
{title:'Теперь по вертикали',note:"Потяни столбец: робот объедет магнит слева.",actors:[[8,3]],stations:[[19,3]],pins:[14],budget:1,path:[slide('y',2,3)]},
{title:'Две станции сразу',note:"Доставь обоих роботов одновременно. Объезд двигает также соседей на своём пути.",actors:[[13,0],[7,1]],stations:[[15,0],[21,1]],pins:[14],budget:2,path:[slide('x',2,3),slide('y',3,1)]},
{title:'Создай свой маршрут',note:"Выбери «Магнит» и закрепи клетку. Новый объезд подхватит соседнего робота.",actors:[[13,0],[7,1]],stations:[[9,0],[15,1]],pins:[],freeze:1,budget:2,path:[ice(14),slide('x',2,3)]},
{title:'Выпрями поток',note:"Выбери «Импульс» и отключи магнит, чтобы не сдвинуть уже доставленных роботов.",actors:[[13,0],[7,1],[19,4]],stations:[[15,0],[7,1],[19,4]],pins:[14],thaw:1,budget:2,path:[melt(14),slide('x',2,2)]},
{title:'Извилистая змейка',note:"Два магнита и общий участок. Переключай обходы и следи за обоими роботами.",actors:[[13,0],[26,1]],stations:[[29,0],[22,1]],pins:[14,27],budget:2,path:[flip(14),slide('x',2,3),slide('x',4,3)]},
{title:'Конструктор маршрута',note:"Отключи магнит на ремонтном гнезде, затем поставь новый — доставь троих роботов.",actors:[[13,0],[7,1],[12,4]],stations:[[9,0],[15,1],[8,4]],pins:[8],freeze:1,thaw:1,budget:3,path:[melt(8),ice(14),slide('x',2,3)]}
];
const report=[];const levels=defs.map((d,i)=>{const board=Array.from({length:6},()=>Array(6).fill(-1));d.actors.forEach(([cell,color])=>board[Math.floor(cell/6)][cell%6]=color);const c={id:i+1,title:d.title,note:d.note,board,stations:d.stations.map(([cell,color])=>({cell,color})),pins:d.pins,freeze:d.freeze||0,thaw:d.thaw||0,budget:d.budget,detour:true,routeSide:-1,lockRow:null,bombs:false,rules:Array(5).fill('square'),solution:d.path};let s=P.initial(c);if(P.won(s,c))throw Error('Initially won '+c.id);for(const m of c.solution)s=P.step(s,m,c);if(!P.won(s,c)||s.turn>c.budget)throw Error('Bad witness '+c.id);report.push({id:c.id,passed:true,actions:s.turn,freeChoices:c.solution.filter(m=>m.flip!=null).length});return c});
fs.writeFileSync('routes-levels.js','globalThis.ROUTE_LEVELS='+JSON.stringify(levels)+';\n');fs.writeFileSync('reports/witnesses.json',JSON.stringify({levels:report,passed:10},null,2));console.log(report);

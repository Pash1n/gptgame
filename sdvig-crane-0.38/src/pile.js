import {PILE_LAYOUTS} from './pile-layouts.js';
export const PILE_JOB=19;
export const PILE_COUNTS=[120,240,400];
export const PILE_JOBS=PILE_COUNTS.map(count=>({name:`Завал · ${count} деталей`,seed:38000+count,heap:true,strictBins:true,baked:true,needs:{},layout:PILE_LAYOUTS[count]||[],note:'Тест завала. Все предметы физические. Оба приёмника освобождают площадку. Находки и перестановки в этом тесте не сохраняются; прогресс главы остаётся прежним.',hint:'Разгребай завал магнитом. Оба приёмника принимают всё. Размер кучи меняется в меню. Это тест физики, без сборки узлов.'}));

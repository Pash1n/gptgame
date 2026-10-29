"""Export one self-contained HTML, playable ZIP and complete source ZIP."""
from pathlib import Path
import base64,re,json,zipfile,hashlib,os
root=Path(__file__).resolve().parent.parent;out=Path(os.environ.get('SDVIG_OUT','/workspace/artifacts'));out.mkdir(parents=True,exist_ok=True)
assets={'assets/'+p.name:'data:image/webp;base64,'+base64.b64encode(p.read_bytes()).decode() for p in (root/'assets').glob('*.webp')}
css=(root/'style.css').read_text();css=re.sub(r'url\(([\'\"]?)(assets/[^\)\'\"]+)\1\)',lambda m:'url("'+assets[m.group(2)]+'")',css);html=(root/'index.html').read_text().replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>')
for key,value in assets.items():html=html.replace('src="'+key+'"','src="'+value+'"')
script=(root/'game.js').read_text().replace('</script','<\\/script')
html=html.replace('<script src="game.js"></script>','<script>const CRANE_ASSETS='+json.dumps(assets,separators=(',',':'))+';globalThis.CraneAsset=p=>CRANE_ASSETS[p]||p;</script><script>'+script+'</script>')
name='Sdvig_CRANE_0.36';(out/(name+'.html')).write_text(html)
with zipfile.ZipFile(out/(name+'.zip'),'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 z.write(out/(name+'.html'),'Sdvig_MAGNETIC_CRANE.html');z.writestr('START_RU.txt','Распакуйте архив и откройте Sdvig_MAGNETIC_CRANE.html браузером с WebGL. Интернет не требуется. Новый уровень: соберите корпус, два вала, две шестерни и крышку редуктора; все они принимаются в голубой приёмник справа. Лишнее железо можно убирать в оранжевый приёмник. На ПК WASD перемещает кран, Q поднимает, E опускает, пробел включает/выключает магнит. На телефоне первый палец перемещает магнит, второй меняет высоту; большая кнопка управляет магнитом. После добычи кнопка Верстак открывает отдельную сборку. Перетащите шесть деталей в подсвеченные места, затем удерживайте каждый из четырёх болтов для затяжки. Запустите редуктор; крышку можно открыть. Доставленные детали и сборка сохраняются. Для немедленной проверки: меню → Тест верстака. Тестовые детали не меняют основной прогресс. Прежние десять глав, три заказа и свободная игра доступны через меню. Это первый полный узел будущей станции, а не готовый город. В меню можно снизить качество графики. После сворачивания нажмите Продолжить.');z.write(root/'THIRD_PARTY_NOTICES.txt','THIRD_PARTY_NOTICES.txt')
with zipfile.ZipFile(out/(name+'_sources.zip'),'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(root.rglob('*')):
  if p.is_file() and not any(v in ('node_modules','.git','dist','__pycache__') for v in p.relative_to(root).parts):z.write(p,'sdvig-crane-0.36/'+str(p.relative_to(root)))
for p in out.glob(name+'*'):
 if p.suffix=='.zip':
  with zipfile.ZipFile(p) as z:assert z.testzip() is None
 assert p.stat().st_size<100_000_000
 print(p.name,p.stat().st_size)

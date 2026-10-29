"""Export one self-contained HTML, playable ZIP and complete source ZIP."""
from pathlib import Path
import base64,re,json,zipfile,hashlib,os
root=Path(__file__).resolve().parent.parent;out=Path(os.environ.get('SDVIG_OUT','/workspace/artifacts'));out.mkdir(parents=True,exist_ok=True)
assets={'assets/'+p.name:'data:image/webp;base64,'+base64.b64encode(p.read_bytes()).decode() for p in (root/'assets').glob('*.webp')}
css=(root/'style.css').read_text();css=re.sub(r'url\(([\'\"]?)(assets/[^\)\'\"]+)\1\)',lambda m:'url("'+assets[m.group(2)]+'")',css);html=(root/'index.html').read_text().replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>')
for key,value in assets.items():html=html.replace('src="'+key+'"','src="'+value+'"')
script=(root/'game.js').read_text().replace('</script','<\\/script')
html=html.replace('<script src="game.js"></script>','<script>const CRANE_ASSETS='+json.dumps(assets,separators=(',',':'))+';globalThis.CraneAsset=p=>CRANE_ASSETS[p]||p;</script><script>'+script+'</script>')
name='Sdvig_CRANE_0.39';(out/(name+'.html')).write_text(html)
with zipfile.ZipFile(out/(name+'.zip'),'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 z.write(out/(name+'.html'),'Sdvig_MAGNETIC_CRANE.html');z.writestr('START_RU.txt','Распакуйте ZIP и откройте Sdvig_MAGNETIC_CRANE.html браузером с WebGL. Интернет не требуется. Версия 0.39: физика Jolt WASM встроена в HTML, интернет и сервер не нужны. Визуал прежний. По умолчанию тест завала из 240 деталей. Меню → заказ → Тест завала: 120 / 240 / 400. Оба приёмника принимают всё. Сверху показатели FPS, физики и активных тел. Тест не меняет прогресс сборок и не сохраняет раскладку. 400 — стресс-тест. Насадок пока нет. Прежняя глава доступна в меню. Глава 1: добыть детали и собрать редуктор, двигатель, генератор, охлаждение, пульт, затем всю электростанцию. Голубой приёмник справа принимает детали текущего узла, оранжевый слева — лишний металл. Если в приёмнике есть лишнее, правильные детали остаются лежать: вытащите подсвеченный предмет выше борта. Подпись объясняет причину. ПК: WASD — кран, Q/E — высота, пробел — магнит, P — пауза. Телефон: первый палец перемещает, второй меняет высоту, большая кнопка включает магнит. На верстаке перетаскивайте детали, затем удерживайте четыре болта. После сборки можно запустить узел и перейти к следующему уровню. Добыча и сборки сохраняются; старый прогресс совместим. Быстрая проверка: меню → Тест верстака, затем выбор любого из шести объектов. Тест не меняет основной профиль. Прежние режимы и доступ ко всем уровням находятся в меню. Реальные слабые телефоны и Safari здесь не проверены; при тормозах выберите графику Быстрее. Подробнее: README и REPORT_RU в исходниках.');z.write(root/'THIRD_PARTY_NOTICES.txt','THIRD_PARTY_NOTICES.txt')
with zipfile.ZipFile(out/(name+'_sources.zip'),'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(root.rglob('*')):
  if p.is_file() and not any(v in ('node_modules','.git','dist','__pycache__') for v in p.relative_to(root).parts):z.write(p,'sdvig-crane-0.39/'+str(p.relative_to(root)))
for p in out.glob(name+'*'):
 if p.suffix=='.zip':
  with zipfile.ZipFile(p) as z:assert z.testzip() is None
 assert p.stat().st_size<100_000_000
 print(p.name,p.stat().st_size)

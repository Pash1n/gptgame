"""Export one self-contained HTML, playable ZIP and complete source ZIP."""
from pathlib import Path
import base64,re,json,zipfile,hashlib,os
root=Path(__file__).resolve().parent.parent;out=Path(os.environ.get('SDVIG_OUT','/workspace/artifacts'));out.mkdir(parents=True,exist_ok=True)
assets={'assets/'+p.name:'data:image/webp;base64,'+base64.b64encode(p.read_bytes()).decode() for p in (root/'assets').glob('*.webp')}
html=(root/'index.html').read_text().replace('<link rel="stylesheet" href="style.css">','<style>'+(root/'style.css').read_text()+'</style>')
for key,value in assets.items():html=html.replace('src="'+key+'"','src="'+value+'"')
script=(root/'game.js').read_text().replace('</script','<\\/script')
html=html.replace('<script src="game.js"></script>','<script>const CRANE_ASSETS='+json.dumps(assets,separators=(',',':'))+';globalThis.CraneAsset=p=>CRANE_ASSETS[p]||p;</script><script>'+script+'</script>')
name='Sdvig_CRANE_0.30';(out/(name+'.html')).write_text(html)
with zipfile.ZipFile(out/(name+'.zip'),'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 z.write(out/(name+'.html'),'Sdvig_MAGNETIC_CRANE.html');z.writestr('START_RU.txt','Распакуйте архив, откройте Sdvig_MAGNETIC_CRANE.html обычным браузером. Установка и интернет для игры не нужны. Перетащите магнит мышью или пальцем над находкой, опустите кнопкой/ползунком и включите притяжение. Поднимите груз, перенесите над нужным приёмником, выключите магнит. Есть три заказа и свободная свалка. Нужен WebGL. Кнопка Ближе увеличивает площадку.');z.write(root/'THIRD_PARTY_NOTICES.txt','THIRD_PARTY_NOTICES.txt')
with zipfile.ZipFile(out/(name+'_sources.zip'),'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(root.rglob('*')):
  if p.is_file() and not any(v in ('node_modules','.git','dist','__pycache__') for v in p.relative_to(root).parts):z.write(p,'sdvig-crane-0.30/'+str(p.relative_to(root)))
for p in out.glob(name+'*'):
 if p.suffix=='.zip':
  with zipfile.ZipFile(p) as z:assert z.testzip() is None
 assert p.stat().st_size<100_000_000
 print(p.name,p.stat().st_size)

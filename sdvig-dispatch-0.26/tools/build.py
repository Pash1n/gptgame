"""Build offline HTML, test ZIP, ordinary runtime ZIP and complete demo sources."""
from pathlib import Path
import base64,json,re,mimetypes,zipfile,hashlib,os
root=Path(__file__).resolve().parent.parent;out=Path(os.environ.get('SDVIG_OUT',str(root/'dist')));out.mkdir(parents=True,exist_ok=True)
assets={('assets/'+p.name):'data:'+mimetypes.guess_type(p.name)[0]+';base64,'+base64.b64encode(p.read_bytes()).decode() for p in sorted((root/'assets').iterdir()) if p.is_file()}
html=(root/'index.html').read_text();css=(root/'style.css').read_text();css=re.sub(r'url\(([\'"]?)(assets/[^\)\'\"]+)\1\)',lambda m:'url("'+assets[m.group(2)]+'")',css);html=html.replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>')
html=re.sub(r'src="(assets/[^"]+)"',lambda m:'src="'+assets[m.group(1)]+'"',html)
html=html.replace('<body>','<body><script>const SDVIG_ART='+json.dumps(assets,separators=(',',':'))+';globalThis.SDVIG_ASSET=p=>SDVIG_ART[p]||p;</script>')
html=re.sub(r'<script src="([^\"]+)"></script>',lambda m:'<script>'+(root/m.group(1)).read_text().replace('</script','<\\/script')+'</script>',html)
name='Sdvig_DISPATCH_0.26_DEMO_1-5';(out/(name+'.html')).write_text(html)
with zipfile.ZipFile(out/(name+'.zip'),'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 z.write(out/(name+'.html'),'Sdvig_DISPATCH.html');z.writestr('START_RU.txt','Распакуйте архив и откройте Sdvig_DISPATCH.html браузером. Настройте развилки и устройства, нажмите Запустить. Устройства работают на хвосте состава. Пауза и Один шаг позволяют разобраться, К настройке бесплатно возвращает поезд и сохраняет ваш план. Все 5 участков открыты. План-пример выставляет проверенную конфигурацию. Сохранения прежней игры не затрагиваются.')
runtime=['index.html','style.css','game.js','perspective.js','train-core.js','train-levels.js','track-geometry.js','sprite-anchors.js','assets.js','README_RU.md','REPORT_RU.md']
with zipfile.ZipFile(out/'Sdvig_DISPATCH_0.26_build.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for f in runtime:
  if (root/f).exists():z.write(root/f,f)
 for p in sorted((root/'assets').iterdir()):z.write(p,'assets/'+p.name)
with zipfile.ZipFile(out/'Sdvig_DISPATCH_0.26_sources.zip','w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(root.rglob('*')):
  if p.is_file() and not any(x in ('node_modules','.git','__pycache__','dist') for x in p.relative_to(root).parts):z.write(p,'Sdvig_DISPATCH_0.26/'+str(p.relative_to(root)))
 original=Path('/workspace/attachments/a77d3939-b2f7-44f1-bbc6-44f5cf4aaead/Sdvig_0.12_PIKABU_TEST.zip')
 if original.exists():z.write(original,'original/'+original.name)
files=sorted(p for p in out.glob('Sdvig_DISPATCH_0.26*') if p.name!='Sdvig_DISPATCH_0.26_SHA256SUMS.txt')
for p in files:
 assert p.stat().st_size<100_000_000
 if p.suffix=='.zip':
  with zipfile.ZipFile(p) as z:assert z.testzip() is None
 print(p.name,p.stat().st_size)
(out/'Sdvig_DISPATCH_0.26_SHA256SUMS.txt').write_text(''.join(hashlib.sha256(p.read_bytes()).hexdigest()+'  '+p.name+'\n' for p in files))

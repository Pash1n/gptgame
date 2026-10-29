from pathlib import Path
import base64,json,re,zipfile,os
root=Path(__file__).resolve().parent.parent;out=Path(os.environ.get('SDVIG_OUT','/workspace/artifacts'));out.mkdir(parents=True,exist_ok=True)
used=['tex-'+n+'.webp' for n in ['teal','rust','ivory','floor','coral','steel']]+['warehouse-concrete.png','warehouse-wood.png','warehouse-coat.png','warehouse-yard.png','warehouse-brick.png','warehouse-slab.png','computer-case.png','computer-icons.png']
assets={'assets/'+n:'data:image/'+('png' if n.endswith('.png') else 'webp')+';base64,'+base64.b64encode((root/'assets'/n).read_bytes()).decode() for n in used}
css=(root/'style.css').read_text();html=(root/'index.html').read_text().replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>');script=(root/'game.js').read_text().replace('</script','<\\/script');html=html.replace('<script src="game.js"></script>','<script>const CRANE_ASSETS='+json.dumps(assets,separators=(',',':'))+';globalThis.CraneAsset=p=>CRANE_ASSETS[p]||p;</script><script>'+script+'</script>');name='Sdvig_WAREHOUSE_0.46';(out/(name+'.html')).write_text(html)
with zipfile.ZipFile(out/(name+'.zip'),'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 z.write(out/(name+'.html'),'Sdvig_WAREHOUSE.html');z.write(root/'README_RU.md','START_RU.txt');z.write(root/'THIRD_PARTY_NOTICES.txt','THIRD_PARTY_NOTICES.txt')
with zipfile.ZipFile(out/(name+'_sources.zip'),'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(root.rglob('*')):
  if p.is_file() and not any(v in ['node_modules','.git','__pycache__'] for v in p.relative_to(root).parts):z.write(p,'sdvig-warehouse-0.46/'+str(p.relative_to(root)))
for p in out.glob(name+'*'):
 if p.suffix=='.zip':
  with zipfile.ZipFile(p) as z:assert z.testzip() is None
 assert p.stat().st_size<100_000_000
 print(p.name,p.stat().st_size)

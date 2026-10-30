"""HTML5 upload ZIP: root index.html and local runtime assets, no source/history."""
from pathlib import Path
import hashlib,json,os,zipfile
root=Path(__file__).resolve().parent.parent
out=Path(os.environ.get('SDVIG_OUT','/workspace/artifacts'));out.mkdir(parents=True,exist_ok=True)
assets=['tex-'+n+'.webp' for n in ['teal','rust','ivory','floor','coral','steel']]+['warehouse-concrete.png','warehouse-wood.png','warehouse-coat.png','warehouse-yard.png','warehouse-brick.png','warehouse-slab.png','computer-case.png','computer-icons.png','baked-floor.png','hardware-icons.png']
files=['index.html','style.css','game.js','THIRD_PARTY_NOTICES.txt']+['assets/'+n for n in assets]
manifest={'version':'0.52','entrypoint':'index.html','format':'HTML5 ZIP','files':{name:hashlib.sha256((root/name).read_bytes()).hexdigest() for name in files}}
name='Sdvig_WAREHOUSE_0.52_PIKABU_DRAFT'
with zipfile.ZipFile(out/(name+'.zip'),'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for f in files:z.write(root/f,f)
 z.writestr('MANIFEST.json',json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
 z.writestr('START_PIKABU.txt','Сдвиг 0.52 — архив для HTML5-загрузки в черновик.\nЗагружайте этот ZIP целиком. Точка входа: index.html в корне.\nИгра и все 16 изображений внутри, внешние CDN не нужны.\nУправление: WASD — кран, Q/E — крюк, пробел — отцепить.\nНужен WebGL2 и WebAssembly. Проверка на самом Пикабу не выполнялась.\nИсходники и отчёты в этот архив не включены.\n')
with zipfile.ZipFile(out/(name+'.zip')) as z:
 assert z.testzip() is None
 assert 'index.html' in z.namelist()
 assert all(not n.startswith(('/','../')) for n in z.namelist())
assert (out/(name+'.zip')).stat().st_size<100_000_000
print(name+'.zip',(out/(name+'.zip')).stat().st_size)

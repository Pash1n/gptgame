from pathlib import Path
import base64,json,zipfile,hashlib
p=Path(__file__).resolve().parents[1];out=p.parent
assets={f.stem:'data:image/png;base64,'+base64.b64encode(f.read_bytes()).decode() for f in (p/'assets').glob('*.png')}
script='<script>globalThis.ProbeAssets='+json.dumps(assets,separators=(',',':'))+';</script><script>'+(p/'game.js').read_text()+'</script>'
html=(p/'index.html').read_text().replace('<script src="game.js"></script>',script)
(out/'Sdvig_SPRITE_25D_0.2.html').write_text(html)
with zipfile.ZipFile(out/'Sdvig_SPRITE_25D_0.2.zip','w',zipfile.ZIP_DEFLATED) as z:
 z.writestr('Sdvig_SPRITE_25D.html',html)
 z.write(p/'README.md','README.md');z.write(p/'vendor/CANNON_LICENSE.txt','CANNON_LICENSE.txt')
with zipfile.ZipFile(out/'Sdvig_SPRITE_25D_0.2_sources.zip','w',zipfile.ZIP_DEFLATED) as z:
 for f in p.rglob('*'):
  if f.is_file() and 'node_modules' not in f.parts:z.write(f,'sdvig-sprite-2.5d-0.2/'+str(f.relative_to(p)))
print(json.dumps({'htmlBytes':len(html.encode()),'sha256':hashlib.sha256(html.encode()).hexdigest()}))

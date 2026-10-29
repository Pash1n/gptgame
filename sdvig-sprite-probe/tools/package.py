from pathlib import Path
import base64,re,zipfile,hashlib,json
p=Path(__file__).resolve().parents[1]
out=p.parent
s=(p/'game.js').read_text()
for name in ['warehouse','cargo','trolley','hook','crate']:
    uri='data:image/png;base64,'+base64.b64encode((p/'assets'/f'{name}.png').read_bytes()).decode()
    s=s.replace('`assets/${name}.png`', '{'+','.join(repr(n)+':'+repr('data:image/png;base64,'+base64.b64encode((p/'assets'/f'{n}.png').read_bytes()).decode()) for n in ['warehouse','cargo','trolley','hook','crate'])+'}[name]')
    break
html=(p/'index.html').read_text().replace('<script src="vendor/matter.min.js"></script>','<script>'+(p/'vendor/matter.min.js').read_text()+'</script>').replace('<script src="game.js"></script>','<script>'+s+'</script>')
(out/'Sdvig_SPRITE_PROBE.html').write_text(html)
with zipfile.ZipFile(out/'Sdvig_SPRITE_PROBE.zip','w',zipfile.ZIP_DEFLATED) as z:
    z.writestr('Sdvig_SPRITE_PROBE.html',html)
    z.write(p/'README.md','README.md')
    z.write(p/'vendor/MATTER_LICENSE.txt','MATTER_LICENSE.txt')
print(json.dumps({'htmlBytes':len(html.encode()),'sha256':hashlib.sha256(html.encode()).hexdigest()}))

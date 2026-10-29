from PIL import Image
from pathlib import Path
paths=sorted(Path('/tmp/crane34frames').glob('*.png'))[:36]
assert len(paths)==36
frames=[Image.open(p).convert('RGB') for p in paths];w,h=frames[0].size
sheet=Image.new('RGB',(w*4,h*3))
for i,f in enumerate(frames[::3][:12]):sheet.paste(f,(i%4*w,i//4*h))
palette=sheet.quantize(colors=224);frames=[f.quantize(palette=palette,dither=Image.Dither.NONE) for f in frames]
out=Path('/workspace/artifacts/Sdvig_CRANE_0.35_gameplay.gif');frames[0].save(out,save_all=True,append_images=frames[1:],duration=200,loop=0,optimize=True)
print('36 actual pickup/lift/carry frames, 2.5× speed, bytes',out.stat().st_size)

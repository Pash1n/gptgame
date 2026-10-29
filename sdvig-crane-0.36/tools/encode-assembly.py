from pathlib import Path
from PIL import Image
paths=sorted(Path('/tmp/crane36frames').glob('*.png'));assert len(paths)==42,len(paths)
frames=[Image.open(p).convert('RGB') for p in paths]
sheet=Image.new('RGB',(900*3,620*3))
for i,f in enumerate(frames[::5][:9]):sheet.paste(f,(i%3*900,i//3*620))
palette=sheet.quantize(colors=224);frames=[f.quantize(palette=palette,dither=Image.Dither.NONE) for f in frames]
out=Path('/workspace/artifacts/Sdvig_CRANE_0.36_assembly.gif');frames[0].save(out,save_all=True,append_images=frames[1:],duration=180,loop=0,optimize=True);print(out.name,out.stat().st_size)

from PIL import Image
from pathlib import Path
paths=sorted(Path('/tmp/crane37reviewframes').glob('*.png'));assert len(paths)==48,len(paths)
frames=[Image.open(p).convert('RGB') for p in paths];sheet=Image.new('RGB',(900*3,620*2))
for i,f in enumerate(frames[::8]):sheet.paste(f,(i%3*900,i//3*620))
palette=sheet.quantize(colors=224);frames=[f.quantize(palette=palette,dither=Image.Dither.NONE) for f in frames]
p=Path('/workspace/artifacts/Sdvig_CRANE_0.37_chapter.gif');frames[0].save(p,save_all=True,append_images=frames[1:],duration=160,loop=0,optimize=True);print(p.name,p.stat().st_size)

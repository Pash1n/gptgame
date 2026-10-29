from PIL import Image
from pathlib import Path
paths=sorted(Path('/tmp/crane35storyframes').glob('*.png'))[:44]
assert len(paths)==44
frames=[Image.open(p).convert('RGB') for p in paths];w,h=frames[0].size
sheet=Image.new('RGB',(w*4,h*3))
for i,f in enumerate(frames[::4][:11]):sheet.paste(f,(i%4*w,i//4*h))
palette=sheet.quantize(colors=224);frames=[f.quantize(palette=palette,dither=Image.Dither.NONE) for f in frames]
out=Path('/workspace/artifacts/Sdvig_CRANE_0.35_story.gif');frames[0].save(out,save_all=True,append_images=frames[1:],duration=140,loop=0,optimize=True)
print(out.name,out.stat().st_size)

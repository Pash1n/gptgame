"""Slice artist-generated transparent sprite sheets; keep full-resolution originals."""
from pathlib import Path
from PIL import Image
import shutil,json
root=Path(__file__).resolve().parent.parent
out=root/'assets';src=root/'art-source';out.mkdir(exist_ok=True)
# New release has a dedicated sprite set; legacy assets are preserved in 0.21.
for p in out.glob('*'):p.unlink()
names=['coral','aqua','lemon','violet','mint']
def source(file,label):
 p=Path('/workspace/generated_images')/file
 if not p.exists():p=src/(label+'.png')
 if p.resolve()!=(src/(label+'.png')).resolve():shutil.copy2(p,src/(label+'.png'))
 return Image.open(p).convert('RGBA')
def export(im,name,side=512,trim=True):
 if trim:
  a=im.getchannel('A'); box=a.point(lambda x:255 if x>12 else 0).getbbox()
  if box:im=im.crop(box)
  scale=min((side-28)/im.width,(side-28)/im.height);im=im.resize((round(im.width*scale),round(im.height*scale)),Image.Resampling.LANCZOS)
  c=Image.new('RGBA',(side,side));c.alpha_composite(im,((side-im.width)//2,side-14-im.height));im=c
 im.save(out/(name+'.webp'),'WEBP',lossless=True,method=6)
def grid(im,cols,rows,labels,trim=True):
 for y in range(rows):
  for x in range(cols):
   box=(round(x*im.width/cols)+3,round(y*im.height/rows)+3,round((x+1)*im.width/cols)-3,round((y+1)*im.height/rows)-3)
   export(im.crop(box),labels[y*cols+x],trim=trim)
im=source('exec-586392fd-29a4-4555-afa1-0cddcb1f895e.png','robots');grid(im,5,3,[prefix+n for prefix in ['robot-','clamped-','docked-'] for n in names])
im=source('exec-20eb93fd-0c4c-4a5d-aa0b-7efecbbc20bf.png','robot-animation');grid(im,5,3,[prefix+n for prefix in ['look-left-','look-right-','blink-'] for n in names])
im=source('exec-5d732d6b-fde2-4bba-bfd3-f59fbaccdda1.png','controls');grid(im,4,3,['ui-undo','ui-magnet','ui-impulse','ui-restart','ui-help','ui-hint','ui-award','clamp-empty','tile-white','tile-amber','shadow','vfx-electric'])
im=source('exec-433ef323-a716-41f3-a438-6628ca3b8a3a.png','table');box=im.getchannel('A').point(lambda x:255 if x>30 else 0).getbbox();board=im.crop(box);board.resize((1536,1536),Image.Resampling.LANCZOS).save(out/'board-frame.webp','WEBP',lossless=True,method=6)
# Hand-painted tile from the source table, repeated as an actual six-by-six board.
tile=im.crop((106,126,277,294));tile.resize((384,384),Image.Resampling.LANCZOS).save(out/'tile.webp','WEBP',lossless=True,method=6)
# A physical numbered button uses the quiet enamel surface of the painted tile.
tile.save(out/'level-button.webp','WEBP',lossless=True,method=6)
im=source('exec-e81fab16-9332-4fcc-a9b9-2dd7ba2f1620.png','workshop');im.save(out/'workshop.webp','WEBP',quality=98,method=6)
print('First atlases extracted')

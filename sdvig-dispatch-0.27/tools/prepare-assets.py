from pathlib import Path
from PIL import Image
import shutil,json
root=Path(__file__).resolve().parent.parent;out=root/'assets';src=root/'art-source';shared=root.parent/'sdvig-robots-0.24/assets'
base=['workshop','board-frame','tile','table-front','logo','panel-mission','panel-dark','panel-toolbar','level-button','ui-undo','ui-magnet','ui-impulse','ui-help','ui-hint','ui-award','ui-restart','vfx-beam','vfx-comet','vfx-preview','vfx-ring','vfx-spark','shadow','tile-white','tile-amber']
base += [p+n for p in ['socket-','socket-glow-','docked-','robot-'] for n in ['coral','aqua','mint']]
for n in base:
 if (shared/(n+'.webp')).exists():shutil.copy2(shared/(n+'.webp'),out/(n+'.webp'))
def sheet(filename,label,cols,rows,names,normalize=True):
 p=Path('/workspace/generated_images')/filename;target=src/(label+'.png')
 if p.exists():shutil.copy2(p,target)
 im=Image.open(target).convert('RGBA')
 for k,n in enumerate(names):
  x=k%cols;y=k//cols;part=im.crop((round(x*im.width/cols)+3,round(y*im.height/rows)+3,round((x+1)*im.width/cols)-3,round((y+1)*im.height/rows)-3))
  if normalize:
   box=part.getchannel('A').point(lambda a:255 if a>16 else 0).getbbox()
   if box:part=part.crop(box)
   scale=min(484/part.width,484/part.height);part=part.resize((round(part.width*scale),round(part.height*scale)),Image.Resampling.LANCZOS);c=Image.new('RGBA',(512,512));c.alpha_composite(part,((512-part.width)//2,498-part.height));part=c
  else:part=part.resize((512,512),Image.Resampling.LANCZOS)
  part.save(out/(n+'.webp'),'WEBP',lossless=True,method=6)
sheet('exec-10d458ce-6ad9-42d4-8c40-575ece867de1.png','train-atlas',4,3,['engine-east','engine-north','engine-west','coupling-link','wagon-coral','wagon-aqua','wagon-mint','train-shadow','parked-coral','parked-aqua','parked-mint','device-coupler'])
sheet('exec-3ffd0e8d-5d2a-41ea-bb17-f9de5db819f7.png','rail-atlas',4,2,['rail-straight','rail-curve','rail-turnout','rail-stop','pressure-pad','gate-closed','gate-open','train-spark'],False)
sheet('exec-5f5b2394-1c4a-4de5-8952-4a65c77f1226.png','delivery-and-motion',3,2,['delivered-coral','delivered-aqua','delivered-mint','engine-blink-east','engine-work-east','engine-blink-west'])
(root/'assets.js').write_text('globalThis.DISPATCH_ART='+json.dumps([p.stem for p in sorted(out.glob('*.webp'))])+';\n')
print('Assets:',len(list(out.glob('*.webp'))))

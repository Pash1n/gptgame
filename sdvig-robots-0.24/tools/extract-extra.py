from pathlib import Path
from PIL import Image
import shutil
root=Path(__file__).resolve().parent.parent;out=root/'assets';src=root/'art-source';names=['coral','aqua','lemon','violet','mint']
def source(n,label):
 p=Path('/workspace/generated_images')/n
 if not p.exists():p=src/(label+'.png')
 if p.resolve()!=(src/(label+'.png')).resolve():shutil.copy2(p,src/(label+'.png'))
 return Image.open(p).convert('RGBA')
def save(im,n,trim=True,square=False):
 if trim:
  box=im.getchannel('A').point(lambda x:255 if x>15 else 0).getbbox()
  if box:im=im.crop(box)
 if square:
  scale=min(484/im.width,484/im.height);im=im.resize((round(im.width*scale),round(im.height*scale)),Image.Resampling.LANCZOS);s=Image.new('RGBA',(512,512));s.alpha_composite(im,((512-im.width)//2,498-im.height));im=s
 im.save(out/(n+'.webp'),'WEBP',lossless=True,method=6)
im=source('exec-9eed4c12-3696-42ef-81cc-4ce5c53706ba.png','panels');w=im.width//2;cut=round(im.height*.56)
for n,b in zip(['logo','panel-mission','panel-dark','panel-toolbar'],[(0,0,w,cut),(w,0,im.width,cut),(0,cut,w,im.height),(w,cut,im.width,im.height)]):save(im.crop(b),n)
im=source('exec-6e26bc7f-7168-464a-a63f-d66cca192629.png','effects')
for k,n in enumerate(['vfx-beam','vfx-elbow','vfx-comet','vfx-preview','vfx-spark','vfx-ring']):
 x=k%3;y=k//3;save(im.crop((x*512+4,y*512+4,(x+1)*512-4,(y+1)*512-4)),n,trim=False)
print('Extra UI ready')
im=source('exec-30168556-d43b-4452-8c91-1ea9f4c4ea27.png','repair-sockets')
for y,prefix in enumerate(['socket-','socket-glow-']):
 for x,n in enumerate(names):save(im.crop((round(x*im.width/5)+5,round(y*im.height/2)+5,round((x+1)*im.width/5)-5,round((y+1)*im.height/2)-5)),prefix+n,square=True)
print('Flat docking sockets ready')
im=source('exec-423b6138-7020-40d3-bbcd-02af818d464d.png','clamp-animation')
for y,prefix in enumerate(['clamp-blink-','released-']):
 for x,n in enumerate(names):save(im.crop((round(x*im.width/5)+4,round(y*im.height/2)+4,round((x+1)*im.width/5)-4,round((y+1)*im.height/2)-4)),prefix+n,square=True)
print('Clamps animated')

im=source('exec-92de3b57-83f5-4a2d-b536-aa48fcdef186.png','table-front')
save(im,'table-front')

"""Extract whole sprites using alpha gutters and keep explicit contact anchors."""
from pathlib import Path
from PIL import Image
import shutil,json,warnings
warnings.filterwarnings('ignore',category=DeprecationWarning)
r=Path(__file__).resolve().parent.parent;out=r/'assets';src=r/'art-source'
def load(name,label):
 p=Path('/workspace/generated_images')/name;dest=src/(label+'.png')
 if p.exists():shutil.copy2(p,dest)
 return Image.open(dest).convert('RGBA')
def bounds(im,threshold=64):return im.getchannel('A').point(lambda n:255 if n>threshold else 0).getbbox()
def save(im,name,normalize=True):
 if normalize:
  box=bounds(im,48)
  if box:im=im.crop(box)
  scale=min(480/im.width,474/im.height);im=im.resize((round(im.width*scale),round(im.height*scale)),Image.Resampling.LANCZOS);b=Image.new('RGBA',(512,512));b.alpha_composite(im,((512-im.width)//2,496-im.height));im=b
 im.save(out/(name+'.webp'),'WEBP',lossless=True,method=6)
def valley(alpha,axis,target,lo,hi):
 vals=[]
 for k in range(lo,hi):
  strip=alpha.crop((k,0,k+1,alpha.height)) if axis=='x' else alpha.crop((0,k,alpha.width,k+1))
  vals.append((sum(v>150 for v in strip.getdata()),k))
 best=min(v for v,k in vals);candidates=[k for v,k in vals if v==best];runs=[]
 for k in candidates:
  if not runs or k>runs[-1][-1]+1:runs.append([k])
  else:runs[-1].append(k)
 # Prefer a real transparent gutter, then the closest one to nominal boundary.
 run=max(runs,key=lambda a:(len(a),-abs((a[0]+a[-1])/2-target)))
 return round((run[0]+run[-1])/2)
def adaptive(im,cols,rows,names):
 w,h=im.size;ys=[0]+[valley(im.getchannel('A'),'y',h*k/rows,round(h*k/rows-h*.075),round(h*k/rows+h*.075)) for k in range(1,rows)]+[h]
 records=[]
 for y in range(rows):
  a=im.crop((0,ys[y],w,ys[y+1]));xs=[0]+[valley(a.getchannel('A'),'x',w*k/cols,round(w*k/cols-w*.055),round(w*k/cols+w*.055)) for k in range(1,cols)]+[w]
  for x in range(cols):
   name=names[y*cols+x];part=a.crop((xs[x],0,xs[x+1],a.height));save(part,name);records.append({'name':name,'sourceBox':[xs[x],ys[y],xs[x+1],ys[y+1]]})
 return records
records=adaptive(Image.open(src/'train-atlas.png').convert('RGBA'),4,3,['engine-east','engine-north','engine-west','coupling-link','wagon-coral','wagon-aqua','wagon-mint','train-shadow','parked-coral','parked-aqua','parked-mint','device-coupler'])
# Keep the successful 0.25 delivery sprites, with ground contact handled by renderer anchors.
im=load('exec-9c9cf37a-d32a-4d52-9cfc-8937f9d1fcc2.png','signals-atlas')
labels=['signal-coupled','signal-detached','signal-held','signal-empty','wire-on','wire-off','wire-elbow-on','wire-elbow-off','signal-locked','signal-unlocked','signal-ring','switch-lever']
# Regular cells for UI symbols; wire strips are trimmed to their visible metal below.
for k,n in enumerate(labels):
 x=k%4;y=k//4;save(im.crop((round(x*im.width/4)+3,round(y*im.height/3)+3,round((x+1)*im.width/4)-3,round((y+1)*im.height/3)-3)),n)
for n in ['wire-on','wire-off']:
 im=Image.open(out/(n+'.webp')).convert('RGBA');im=im.crop(bounds(im,90));im.resize((512,160),Image.Resampling.LANCZOS).save(out/(n+'-strip.webp'),'WEBP',lossless=True,method=6)
# One painted straight strip supplies all rails: curves deform this exact texture.
im=Image.open(out/'rail-straight.webp').convert('RGBA');box=bounds(im,100);im=im.crop((box[0],box[1],box[2],box[3]));im.resize((768,256),Image.Resampling.LANCZOS).save(out/'rail-ribbon.webp','WEBP',lossless=True,method=6)
for n in ['pressure-pad','socket-coral','socket-aqua','socket-mint']:
 im=Image.open(out/(n+'.webp')).convert('RGBA');im=im.crop(bounds(im,60));save(im,'floor-'+n,False)
im=load('exec-2d4ccd01-b850-4f2e-b8c4-57c116ccadd7.png','empty-table-rim');save(im,'table-rim',False)
im=load('exec-243c03c3-0dcd-49ab-86f4-812234f052de.png','gate-animation')
# Find whole gate gutters, then align both post bases to the same screen contacts.
xs=[0]+[valley(im.getchannel('A'),'x',im.width*k/4,round(im.width*k/4-100),round(im.width*k/4+100)) for k in range(1,4)]+[im.width]
canvasH=768;gateRecords=[]
for k in range(4):
 part=im.crop((xs[k],0,xs[k+1],im.height));alpha=part.getchannel('A');start=round(part.height*.78)
 counts=[sum(v>160 for v in alpha.crop((x,start,x+1,part.height)).getdata()) for x in range(part.width)];groups=[]
 for x,n in enumerate(counts):
  if n<8:continue
  if not groups or x>groups[-1][-1]+2:groups.append([x])
  else:groups[-1].append(x)
 groups=sorted(sorted(groups,key=len,reverse=True)[:2],key=lambda z:z[0]);centres=[sum(x*counts[x] for x in g)/sum(counts[x] for x in g) for g in groups]
 scaleX=(512*.62)/(centres[1]-centres[0]);scaleY=.85;offsetX=512*.19-centres[0]*scaleX
 rows=[y for y in range(start,part.height) if sum(v>160 for v in alpha.crop((0,y,part.width,y+1)).getdata())>25];base=max(rows);offsetY=752-base*scaleY
 resized=part.resize((round(part.width*scaleX),round(part.height*scaleY)),Image.Resampling.LANCZOS);c=Image.new('RGBA',(512,canvasH));c.alpha_composite(resized,(round(offsetX),round(offsetY)));save(c,'barrier-'+str(k),False)
 gateRecords.append({'sourceBox':[xs[k],0,xs[k+1],im.height],'leftPost':.19,'rightPost':.81,'groundY':.95})
meta={name:{'x':.5,'y':.89} for name in ['engine-east','engine-north','engine-west','engine-blink-east','engine-work-east','engine-blink-west','wagon-coral','wagon-aqua','wagon-mint','parked-coral','parked-aqua','parked-mint','delivered-coral','delivered-aqua','delivered-mint']}
meta.update({'barrier-'+str(k):{'x':.5,'y':.95} for k in range(4)})
(r/'sprite-anchors.js').write_text('globalThis.SPRITE_ANCHORS='+json.dumps(meta)+';\n')
exclude=['board-frame', 'rail-curve', 'rail-straight', 'rail-stop', 'gate-closed', 'gate-open', 'shadow', 'vfx-preview', 'vfx-comet', 'vfx-spark', 'train-spark', 'wire-elbow-on', 'wire-elbow-off', 'docked-coral', 'docked-aqua', 'docked-mint', 'robot-coral', 'robot-aqua', 'robot-mint', 'socket-coral', 'socket-aqua', 'socket-mint', 'socket-glow-coral', 'socket-glow-aqua', 'socket-glow-mint']
(r/'assets.js').write_text('globalThis.DISPATCH_ART='+json.dumps([p.stem for p in sorted(out.glob('*.webp')) if p.stem not in exclude])+';\n')
(r/'reports/sprite-extraction.json').write_text(json.dumps({'adaptiveCrops':records,'gateCanvas':[512,canvasH],'gateContacts':gateRecords,'railRibbon':[768,256]},indent=2))
print('Sprite extraction:',len(records),'whole train parts;',len(list(out.glob('*.webp'))),'assets')

"""Extract six complete isolated icons by their alpha components, not equal cell cuts."""
from pathlib import Path
from PIL import Image
import numpy as np
from scipy import ndimage
import json
root=Path(__file__).resolve().parent.parent
im=Image.open(root/'art-source/campaign-atlas.png').convert('RGBA');pixels=np.array(im)
labels,n=ndimage.label(pixels[:,:,3]>100);counts=np.bincount(labels.ravel());major=np.argsort(counts[1:])[-6:]+1
boxes={}
for k in major:
 ys,xs=np.where(labels==k);boxes[int(k)]=(int(xs.min()),int(ys.min()),int(xs.max()+1),int(ys.max()+1))
major=sorted(major,key=lambda k:(boxes[int(k)][1]>490,boxes[int(k)][0]))
# Assign faint antialiasing and contact shadow to its nearest complete object.
_,nearest=ndimage.distance_transform_edt(labels==0,return_indices=True)
owners=labels[tuple(nearest)]
names=['fuel-full','fuel-half','fuel-empty','work-order','route-emblem','dual-gate-emblem'];report=[]
for name,k in zip(names,major):
 data=pixels.copy();data[:,:,3]=np.where(owners==k,data[:,:,3],0);sprite=Image.fromarray(data)
 x,y,X,Y=boxes[int(k)];box=(max(0,x-10),max(0,y-10),min(im.width,X+10),min(im.height,Y+10));sprite=sprite.crop(box);sprite.thumbnail((480,480),Image.Resampling.LANCZOS)
 out=Image.new('RGBA',(512,512));out.alpha_composite(sprite,((512-sprite.width)//2,(512-sprite.height)//2));out.save(root/'assets'/(name+'.webp'),lossless=True,method=6)
 report.append({'sprite':name,'wholeObjectBounds':[x,y,X,Y]})
(root/'reports/campaign-art.json').write_text(json.dumps(report,indent=2));print('Six whole icons, no neighboring atlas fragments')

from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
import math
W,H=960,620
font='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
def f(n):return ImageFont.truetype(font,n)
F={n:f(n) for n in [15,18,20,23,28,32]}
# Eight live slots form one cyclic row, bent around the frozen middle slot.
route=[(0,1),(1,1),(1,0),(2,0),(3,0),(3,1),(4,1),(5,1)]
X,Y,DX,DY=130,192,140,134
pts=[(X+c*DX,Y+r*DY) for c,r in route]
wrap=[pts[-1],(902,326),(902,461),(58,461),(58,326),pts[0]]
colors=['#72c9ff','#ff75ad','#f9ce62','#b693ff','#65dfb5','#f3a06b','#75b8ff','#cd91ed']
def linepos(points,t):
 lengths=[math.dist(a,b) for a,b in zip(points,points[1:])];d=t*sum(lengths)
 for a,b,l in zip(points,points[1:],lengths):
  if d<=l:return (a[0]+(b[0]-a[0])*d/l,a[1]+(b[1]-a[1])*d/l)
  d-=l
 return points[-1]
def draw(offset,caption,sub):
 im=Image.new('RGB',(W,H),'#0b1027');d=ImageDraw.Draw(im)
 d.text((W/2,30),'ЧТО ПРОИСХОДИТ С № 9, 10 И 11',font=F[28],fill='#eff2ff',anchor='mm')
 d.text((W/2,72),'Они остаются на месте — змейка проходит между ними',font=F[20],fill='#bdc9ea',anchor='mm')
 for row in range(2):
  for col in range(6):
   x,y=X+col*DX,Y+row*DY;active=(col,row) in route;frozen=(col,row)==(2,1)
   box=(x-61,y-56,x+61,y+56)
   if active:
    d.rounded_rectangle((x-65,y-60,x+65,y+60),18,fill='#51443c')
   d.rounded_rectangle(box,15,fill='#172945' if active else '#11192e',outline='#eac773' if active else '#29324d',width=2)
   if not active and not frozen:
    d.ellipse((x-33,y-31,x+33,y+35),fill='#273954',outline='#9ce8ff',width=3)
    number={0:9,4:10,5:11}[col]
    d.text((x,y+1),str(number),font=F[28],fill='#e4f9ff',anchor='mm')
 # Guide connects actual involved cells. Frozen square is outside this route.
 d.line(pts,fill='#d8ba73',width=4,joint='curve')
 for a,b in zip(pts,pts[1:]):
  mx,my=(a[0]+b[0])/2,(a[1]+b[1])/2;ang=math.atan2(b[1]-a[1],b[0]-a[0]);u=(math.cos(ang),math.sin(ang));v=(-u[1],u[0])
  d.polygon([(mx+u[0]*10,my+u[1]*10),(mx-u[0]*6+v[0]*6,my-u[1]*6+v[1]*6),(mx-u[0]*6-v[0]*6,my-u[1]*6-v[1]*6)],fill='#f0d88c')
 # Existing row wrapping, shown outside the diagram rather than through static cells.
 d.line(wrap,fill='#39445e',width=2,joint='curve')
 d.text((480,484),'Через край поля — в начало того же ряда',font=F[15],fill='#74829e',anchor='mm')
 x,y=X+2*DX,Y+DY
 d.rounded_rectangle((x-49,y-47,x+49,y+47),14,fill='#164361',outline='#a5f0ff',width=3)
 d.polygon([(x-41,y-31),(x-15,y-42),(x+40,y-27),(x+31,y+35),(x-29,y+41)],fill='#3d8fa7',outline='#b7effc',width=2)
 for ang in [0,math.pi/3,2*math.pi/3]:
  a,b=math.cos(ang)*20,math.sin(ang)*20;d.line((x-a,y-b,x+a,y+b),fill='#d4f6ff',width=3)
 d.text((x,y+70),'ЛЁД: СТОИТ',font=F[18],fill='#a8e9ff',anchor='mm')
 for i in range(8):
  p=(i+offset)%8;j=int(p);u=p-j
  if j==7:px,py=linepos(wrap,u)
  else:a,b=pts[j],pts[j+1];px=a[0]+(b[0]-a[0])*u;py=a[1]+(b[1]-a[1])*u
  rad=37 if i==1 else 31
  if i==1:d.ellipse((px-rad-5,py-rad-5,px+rad+5,py+rad+5),fill='#802e63',outline='#ffd4e5',width=2)
  d.ellipse((px-rad,py-rad,px+rad,py+rad),fill=colors[i],outline='#f3f1ff',width=2)
  d.text((px,py+1),str(i+1),font=F[32] if i==1 else F[28],fill='#13203a',anchor='mm',stroke_width=0)
 d.rounded_rectangle((44,517,916,599),15,fill='#161e37',outline='#364363',width=1)
 d.text((480,541),caption,font=F[23],fill='#f0efff',anchor='mm')
 d.text((480,576),sub,font=F[18],fill='#b7c7e2',anchor='mm')
 return im
frames=[]
intro=draw(0,'№ 9, 10 и 11 не входят в маршрут.','Золотые клетки двигаются; голубые номера и лёд — стоят.')
for _ in range(12):frames.append(intro.copy())
captions=[('№ 2 поднимается перед льдом.','Верхняя № 3 освобождает ей место, двигаясь вправо.'),('№ 2 проходит над замороженной желейкой.','Каждая желейка на маршруте занимает место следующей.'),('№ 2 движется ещё на одну клетку вправо.','Двигаются три верхние клетки маршрута. № 9, 10 и 11 стоят.'),('№ 2 спускается обратно в основной ряд.','№ 9, 10, 11 и лёд сохранили свои исходные места.')]
for k in range(4):
 for t in range(18):
  u=t/17;u=u*u*(3-2*u)
  frames.append(draw(k+u,*captions[k]))
 for _ in range(4):frames.append(frames[-1].copy())
for _ in range(14):frames.append(frames[-1].copy())
# A single shared palette keeps labels and shapes crisp while making the GIF small.
palette=frames[0].quantize(colors=128)
frames=[im.quantize(palette=palette,dither=Image.Dither.NONE) for im in frames]
out=Path('/workspace/artifacts/Sdvig_snake_numbered.gif');frames[0].save(out,save_all=True,append_images=frames[1:],duration=80,loop=0,optimize=True)
draw(4,'№ 9, 10 и 11 остались на прежних местах.','Участвуют только золотые клетки: три верхние и пять нижних.').save('/workspace/artifacts/Sdvig_snake_numbered.png')
print(out,len(frames),'frames',out.stat().st_size,'bytes')

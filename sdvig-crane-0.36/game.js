(()=>{var Bh="170";var Xp=0,Hu=1,Yp=2;var of=1,Uh=2,ci=3,Fi=0,Xe=1,Dn=2,Bi=0,Zs=1,Gu=2,Wu=3,qu=4,jp=5,as=100,Zp=101,$p=102,Jp=103,Kp=104,Qp=200,tm=201,em=202,nm=203,pl=204,ml=205,im=206,sm=207,rm=208,om=209,am=210,cm=211,lm=212,hm=213,um=214,gl=0,xl=1,yl=2,tr=3,vl=4,_l=5,bl=6,Ml=7,af=0,dm=1,fm=2,Ui=0,pm=1,mm=2,gm=3,Fh=4,xm=5,ym=6,vm=7;var cf=300,er=301,nr=302,wl=303,Sl=304,Ha=306,zi=1e3,ls=1001,El=1002,cn=1003,_m=1004;var No=1005;var Yn=1006,Nc=1007;var hs=1008;var ui=1009,lf=1010,hf=1011,$r=1012,zh=1013,us=1014,jn=1015,po=1016,Oh=1017,kh=1018,ir=1020,uf=35902,df=1021,ff=1022,Bn=1023,pf=1024,mf=1025,$s=1026,sr=1027,Vh=1028,Hh=1029,gf=1030,Gh=1031;var Wh=1033,ha=33776,ua=33777,da=33778,fa=33779,Tl=35840,Al=35841,Cl=35842,Rl=35843,Il=36196,Pl=37492,Ll=37496,Nl=37808,Dl=37809,Bl=37810,Ul=37811,Fl=37812,zl=37813,Ol=37814,kl=37815,Vl=37816,Hl=37817,Gl=37818,Wl=37819,ql=37820,Xl=37821,pa=36492,Yl=36494,jl=36495,xf=36283,Zl=36284,$l=36285,Jl=36286;var ma=2300,Kl=2301,Dc=2302,Xu=2400,Yu=2401,ju=2402;var bm=3200,qh=3201;var yf=0,Mm=1,Ni="",Ae="srgb",fr="srgb-linear",Ga="linear",fe="srgb";var Ps=7680;var Zu=519,wm=512,Sm=513,Em=514,vf=515,Tm=516,Am=517,Cm=518,Rm=519,$u=35044,_f=35048;var Ju="300 es",li=2e3,ga=2001,Oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=1234567,Js=Math.PI/180,Jr=180/Math.PI;function ys(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[s&255]+We[s>>8&255]+We[s>>16&255]+We[s>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Pe(s,t,e){return Math.max(t,Math.min(e,s))}function Xh(s,t){return(s%t+t)%t}function Im(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Pm(s,t,e){return s!==t?(e-s)/(t-s):0}function qr(s,t,e){return(1-e)*s+e*t}function Lm(s,t,e,n){return qr(s,t,1-Math.exp(-e*n))}function Nm(s,t=1){return t-Math.abs(Xh(s,t*2)-t)}function Dm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Bm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Um(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Fm(s,t){return s+Math.random()*(t-s)}function zm(s){return s*(.5-Math.random())}function Om(s){s!==void 0&&(Ku=s);let t=Ku+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function km(s){return s*Js}function Vm(s){return s*Jr}function Hm(s){return(s&s-1)===0&&s!==0}function Gm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qm(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*d,c*u,a*l);break;case"YZY":s.set(c*u,a*h,c*d,a*l);break;case"ZXZ":s.set(c*d,c*u,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ze(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Mn={DEG2RAD:Js,RAD2DEG:Jr,generateUUID:ys,clamp:Pe,euclideanModulo:Xh,mapLinear:Im,inverseLerp:Pm,lerp:qr,damp:Lm,pingpong:Nm,smoothstep:Dm,smootherstep:Bm,randInt:Um,randFloat:Fm,randFloatSpread:zm,seededRandom:Om,degToRad:km,radToDeg:Vm,isPowerOfTwo:Hm,ceilPowerOfTwo:Gm,floorPowerOfTwo:Wm,setQuaternionFromProperEuler:qm,normalize:Ze,denormalize:Xs},at=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class s{constructor(t,e,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],_=i[4],y=i[7],E=i[2],T=i[5],C=i[8];return r[0]=o*x+a*v+c*E,r[3]=o*g+a*_+c*T,r[6]=o*p+a*y+c*C,r[1]=l*x+h*v+d*E,r[4]=l*g+h*_+d*T,r[7]=l*p+h*y+d*C,r[2]=u*x+f*v+m*E,r[5]=u*g+f*_+m*T,r[8]=u*p+f*y+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,m=e*d+n*u+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bc.makeScale(t,e)),this}rotate(t){return this.premultiply(Bc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bc=new Yt;function bf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Kr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xm(){let s=Kr("canvas");return s.style.display="block",s}var Qu={};function Gr(s){s in Qu||(Qu[s]=!0,console.warn(s))}function Ym(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function jm(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zm(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Ga:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var td=[.64,.33,.3,.6,.15,.06],ed=[.2126,.7152,.0722],nd=[.3127,.329],id=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[fr]:{primaries:td,whitePoint:nd,transfer:Ga,toXYZ:id,fromXYZ:sd,luminanceCoefficients:ed,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:td,whitePoint:nd,transfer:fe,toXYZ:id,fromXYZ:sd,luminanceCoefficients:ed,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}});var Ls,Ql=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ls===void 0&&(Ls=Kr("canvas")),Ls.width=t.width,Ls.height=t.height;let n=Ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$m=0,xa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=ys(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Uc(i[o].image)):r.push(Uc(i[o]))}else r=Uc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ql.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jm=0,Je=class s extends Oi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ls,i=ls,r=Yn,o=hs,a=Bn,c=ui,l=s.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=ys(),this.name="",this.source=new xa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zi:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case El:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zi:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case El:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=cf;Je.DEFAULT_ANISOTROPY=1;var pe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,y=(f+1)/2,E=(p+1)/2,T=(h+u)/4,C=(d+x)/4,L=(m+g)/4;return _>y&&_>E?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=T/n,r=C/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=L/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=C/r,i=L/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},th=class extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Je(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new xa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends th{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ya=class extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var eh=class extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(d!==x||c!==u||l!==f||h!==m){let g=1-a,p=c*u+l*f+h*m+d*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let E=Math.sqrt(_),T=Math.atan2(E,p*v);g=Math.sin(g*T)/E,a=Math.sin(a*T)/E}let y=a*v;if(c=c*g+u*y,l=l*g+f*y,h=h*g+m*y,d=d*g+x*y,g===1-a){let E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*d+c*f-l*u,t[e+1]=c*m+h*u+l*d-a*f,t[e+2]=l*m+h*f+a*u-c*d,t[e+3]=h*m-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d+u*f*m;break;case"YZX":this._x=u*h*d+l*f*m,this._y=l*f*d+u*h*m,this._z=l*h*m-u*f*d,this._w=l*h*d-u*f*m;break;case"XZY":this._x=u*h*d-l*f*m,this._y=l*f*d-u*h*m,this._z=l*h*m+u*f*d,this._w=l*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fc.copy(this).projectOnVector(t),this.sub(Fc)}reflect(t){return this.sub(Fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fc=new I,rd=new yn,di=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Do.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Do.copy(n.boundingBox)),Do.applyMatrix4(t.matrixWorld),this.union(Do)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),Bo.subVectors(this.max,Br),Ns.subVectors(t.a,Br),Ds.subVectors(t.b,Br),Bs.subVectors(t.c,Br),Ai.subVectors(Ds,Ns),Ci.subVectors(Bs,Ds),ts.subVectors(Ns,Bs);let e=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-ts.z,ts.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,ts.z,0,-ts.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-ts.y,ts.x,0];return!zc(e,Ns,Ds,Bs,Bo)||(e=[1,0,0,0,1,0,0,0,1],!zc(e,Ns,Ds,Bs,Bo))?!1:(Uo.crossVectors(Ai,Ci),e=[Uo.x,Uo.y,Uo.z],zc(e,Ns,Ds,Bs,Bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ii=[new I,new I,new I,new I,new I,new I,new I,new I],In=new I,Do=new di,Ns=new I,Ds=new I,Bs=new I,Ai=new I,Ci=new I,ts=new I,Br=new I,Bo=new I,Uo=new I,es=new I;function zc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){es.fromArray(s,r);let a=i.x*Math.abs(es.x)+i.y*Math.abs(es.y)+i.z*Math.abs(es.z),c=t.dot(es),l=e.dot(es),h=n.dot(es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Km=new di,Ur=new I,Oc=new I,ki=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Km.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);let e=Ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ur,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(Oc)),this.expandByPoint(Ur.copy(t.center).sub(Oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},si=new I,kc=new I,Fo=new I,Ri=new I,Vc=new I,zo=new I,Hc=new I,Qr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){kc.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(kc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Fo),a=Ri.dot(this.direction),c=-Ri.dot(Fo),l=Ri.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*c-a,u=o*a-c,m=r*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(kc).addScaledVector(Fo,u),f}intersectSphere(t,e){si.subVectors(t.center,this.origin);let n=si.dot(this.direction),i=si.dot(si)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,i,r){Vc.subVectors(e,t),zo.subVectors(n,t),Hc.crossVectors(Vc,zo);let o=this.direction.dot(Hc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);let c=a*this.direction.dot(zo.crossVectors(Ri,zo));if(c<0)return null;let l=a*this.direction.dot(Vc.cross(Ri));if(l<0||c+l>o)return null;let h=-a*Ri.dot(Hc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class s{constructor(t,e,n,i,r,o,a,c,l,h,d,u,f,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,d,u,f,m,x,g)}set(t,e,n,i,r,o,a,c,l,h,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),o=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+m*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,m=l*h,x=l*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,m=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,x=a*d;e[0]=c*h,e[4]=m*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*c,f=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qm,t,tg)}lookAt(t,e,n){let i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Ii.crossVectors(n,on),Ii.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ii.crossVectors(n,on)),Ii.normalize(),Oo.crossVectors(on,Ii),i[0]=Ii.x,i[4]=Oo.x,i[8]=on.x,i[1]=Ii.y,i[5]=Oo.y,i[9]=on.y,i[2]=Ii.z,i[6]=Oo.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],_=n[7],y=n[11],E=n[15],T=i[0],C=i[4],L=i[8],S=i[12],b=i[1],P=i[5],O=i[9],N=i[13],U=i[2],z=i[6],B=i[10],$=i[14],H=i[3],J=i[7],ut=i[11],dt=i[15];return r[0]=o*T+a*b+c*U+l*H,r[4]=o*C+a*P+c*z+l*J,r[8]=o*L+a*O+c*B+l*ut,r[12]=o*S+a*N+c*$+l*dt,r[1]=h*T+d*b+u*U+f*H,r[5]=h*C+d*P+u*z+f*J,r[9]=h*L+d*O+u*B+f*ut,r[13]=h*S+d*N+u*$+f*dt,r[2]=m*T+x*b+g*U+p*H,r[6]=m*C+x*P+g*z+p*J,r[10]=m*L+x*O+g*B+p*ut,r[14]=m*S+x*N+g*$+p*dt,r[3]=v*T+_*b+y*U+E*H,r[7]=v*C+_*P+y*z+E*J,r[11]=v*L+_*O+y*B+E*ut,r[15]=v*S+_*N+y*$+E*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*f-n*c*f)+x*(+e*c*f-e*l*u+r*o*u-i*o*f+i*l*h-r*c*h)+g*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],v=d*g*l-x*u*l+x*c*f-a*g*f-d*c*p+a*u*p,_=m*u*l-h*g*l-m*c*f+o*g*f+h*c*p-o*u*p,y=h*x*l-m*d*l+m*a*f-o*x*f-h*a*p+o*d*p,E=m*d*c-h*x*c-m*a*u+o*x*u+h*a*g-o*d*g,T=e*v+n*_+i*y+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=v*C,t[1]=(x*u*r-d*g*r-x*i*f+n*g*f+d*i*p-n*u*p)*C,t[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*p+n*c*p)*C,t[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*f-n*c*f)*C,t[4]=_*C,t[5]=(h*g*r-m*u*r+m*i*f-e*g*f-h*i*p+e*u*p)*C,t[6]=(m*c*r-o*g*r-m*i*l+e*g*l+o*i*p-e*c*p)*C,t[7]=(o*u*r-h*c*r+h*i*l-e*u*l-o*i*f+e*c*f)*C,t[8]=y*C,t[9]=(m*d*r-h*x*r-m*n*f+e*x*f+h*n*p-e*d*p)*C,t[10]=(o*x*r-m*a*r+m*n*l-e*x*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*C,t[12]=E*C,t[13]=(h*x*i-m*d*i+m*n*u-e*x*u-h*n*g+e*d*g)*C,t[14]=(m*a*i-o*x*i-m*n*c+e*x*c+o*n*g-e*a*g)*C,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,m=r*d,x=o*h,g=o*d,p=a*d,v=c*l,_=c*h,y=c*d,E=n.x,T=n.y,C=n.z;return i[0]=(1-(x+p))*E,i[1]=(f+y)*E,i[2]=(m-_)*E,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(u+p))*T,i[6]=(g+v)*T,i[7]=0,i[8]=(m+_)*C,i[9]=(g-v)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Us.set(i[0],i[1],i[2]).length(),o=Us.set(i[4],i[5],i[6]).length(),a=Us.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Pn.copy(this);let l=1/r,h=1/o,d=1/a;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,e.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=li){let c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,m;if(a===li)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===ga)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=li){let c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*l,f=(n+i)*h,m,x;if(a===li)m=(o+r)*d,x=-2*d;else if(a===ga)m=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Us=new I,Pn=new re,Qm=new I(0,0,0),tg=new I(1,1,1),Ii=new I,Oo=new I,on=new I,od=new re,ad=new yn,vn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return od.makeRotationFromQuaternion(t),this.setFromRotationMatrix(od,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ad.setFromEuler(this),this.setFromQuaternion(ad,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var to=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},eg=0,cd=new I,Fs=new yn,ri=new re,ko=new I,Fr=new I,ng=new I,ig=new yn,ld=new I(1,0,0),hd=new I(0,1,0),ud=new I(0,0,1),dd={type:"added"},sg={type:"removed"},zs={type:"childadded",child:null},Gc={type:"childremoved",child:null},ze=class s extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new vn,n=new yn,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Yt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(t,e){return Fs.setFromAxisAngle(t,e),this.quaternion.premultiply(Fs),this}rotateX(t){return this.rotateOnAxis(ld,t)}rotateY(t){return this.rotateOnAxis(hd,t)}rotateZ(t){return this.rotateOnAxis(ud,t)}translateOnAxis(t,e){return cd.copy(t).applyQuaternion(this.quaternion),this.position.add(cd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ld,t)}translateY(t){return this.translateOnAxis(hd,t)}translateZ(t){return this.translateOnAxis(ud,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ko.copy(t):ko.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Fr,ko,this.up):ri.lookAt(ko,Fr,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),Fs.setFromRotationMatrix(ri),this.quaternion.premultiply(Fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dd),zs.child=t,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sg),Gc.child=t,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dd),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,ng),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ze.DEFAULT_UP=new I(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new I,oi=new I,Wc=new I,ai=new I,Os=new I,ks=new I,fd=new I,qc=new I,Xc=new I,Yc=new I,jc=new pe,Zc=new pe,$c=new pe,Di=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ln.subVectors(t,e),i.cross(Ln);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ln.subVectors(i,e),oi.subVectors(n,e),Wc.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(oi),c=Ln.dot(Wc),l=oi.dot(oi),h=oi.dot(Wc),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return jc.setScalar(0),Zc.setScalar(0),$c.setScalar(0),jc.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,n),$c.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(jc,r.x),o.addScaledVector(Zc,r.y),o.addScaledVector($c,r.z),o}static isFrontFacing(t,e,n,i){return Ln.subVectors(n,e),oi.subVectors(t,e),Ln.cross(oi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Ln.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Os.subVectors(i,n),ks.subVectors(r,n),qc.subVectors(t,n);let c=Os.dot(qc),l=ks.dot(qc);if(c<=0&&l<=0)return e.copy(n);Xc.subVectors(t,i);let h=Os.dot(Xc),d=ks.dot(Xc);if(h>=0&&d<=h)return e.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Os,o);Yc.subVectors(t,r);let f=Os.dot(Yc),m=ks.dot(Yc);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(ks,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return fd.subVectors(r,i),a=(d-h)/(d-h+(f-m)),e.copy(i).addScaledVector(fd,a);let p=1/(g+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(Os,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function Jc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=Xh(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Jc(o,r,t+1/3),this.g=Jc(o,r,t),this.b=Jc(o,r,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=Mf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return ne.fromWorkingColorSpace(qe.copy(this),t),Math.round(Pe(qe.r*255,0,255))*65536+Math.round(Pe(qe.g*255,0,255))*256+Math.round(Pe(qe.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(qe.copy(this),e);let n=qe.r,i=qe.g,r=qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Ae){ne.fromWorkingColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,i=qe.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Vo);let n=qr(Pi.h,Vo.h,e),i=qr(Pi.s,Vo.s,e),r=qr(Pi.l,Vo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Gt;Gt.NAMES=Mf;var rg=0,Vi=class extends Oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=ys(),this.name="",this.blending=Zs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pl&&(n.blendSrc=this.blendSrc),this.blendDst!==ml&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ke=class extends Vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new I,Ho=new at,Oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ho.fromBufferAttribute(this,e),Ho.applyMatrix3(t),this.setXY(e,Ho.x,Ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$u&&(t.usage=this.usage),t}};var va=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var _a=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},og=0,xn=new re,Kc=new ze,Vs=new I,an=new di,zr=new di,Fe=new I,Ne=class s extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bf(t)?_a:va)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Kc.lookAt(t),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(an.min,zr.min),an.expandByPoint(Fe),Fe.addVectors(an.max,zr.max),an.expandByPoint(Fe)):(an.expandByPoint(zr.min),an.expandByPoint(zr.max))}an.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Fe.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(t,l),Fe.add(Vs)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new I,c[L]=new I;let l=new I,h=new I,d=new I,u=new at,f=new at,m=new at,x=new I,g=new I;function p(L,S,b){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,b),u.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,b),h.sub(l),d.sub(l),f.sub(u),m.sub(u);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[L].add(x),a[S].add(x),a[b].add(x),c[L].add(g),c[S].add(g),c[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,S=v.length;L<S;++L){let b=v[L],P=b.start,O=b.count;for(let N=P,U=P+O;N<U;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new I,y=new I,E=new I,T=new I;function C(L){E.fromBufferAttribute(i,L),T.copy(E);let S=a[L];_.copy(S),_.sub(E.multiplyScalar(E.dot(S))).normalize(),y.crossVectors(T,S);let P=y.dot(c[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,P)}for(let L=0,S=v.length;L<S;++L){let b=v[L],P=b.start,O=b.count;for(let N=P,U=P+O;N<U;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)u[m++]=l[f++]}return new Oe(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pd=new re,ns=new Qr,Go=new ki,md=new I,Wo=new I,qo=new I,Xo=new I,Qc=new I,Yo=new I,gd=new I,jo=new I,zt=class extends ze{constructor(t=new Ne,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Yo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Qc.fromBufferAttribute(d,t),o?Yo.addScaledVector(Qc,h):Yo.addScaledVector(Qc.sub(e),h))}e.add(Yo)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(Go.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Go,md)===null||ns.origin.distanceToSquared(md)>(t.far-t.near)**2))&&(pd.copy(r).invert(),ns.copy(t.ray).applyMatrix4(pd),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,E=_;y<E;y+=3){let T=a.getX(y),C=a.getX(y+1),L=a.getX(y+2);i=Zo(this,p,t,n,l,h,d,T,C,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);i=Zo(this,o,t,n,l,h,d,v,_,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,E=_;y<E;y+=3){let T=y,C=y+1,L=y+2;i=Zo(this,p,t,n,l,h,d,T,C,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,_=g+1,y=g+2;i=Zo(this,o,t,n,l,h,d,v,_,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function ag(s,t,e,n,i,r,o,a){let c;if(t.side===Xe?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Fi,a),c===null)return null;jo.copy(a),jo.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(jo);return l<e.near||l>e.far?null:{distance:l,point:jo.clone(),object:s}}function Zo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Wo),s.getVertexPosition(c,qo),s.getVertexPosition(l,Xo);let h=ag(s,t,e,n,Wo,qo,Xo,gd);if(h){let d=new I;Di.getBarycoord(gd,Wo,qo,Xo,d),i&&(h.uv=Di.getInterpolatedAttribute(i,a,c,l,d,new at)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,c,l,d,new at)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new I,materialIndex:0};Di.getNormal(Wo,qo,Xo,u.normal),h.face=u,h.barycoord=d}return h}var Un=class s extends Ne{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function m(x,g,p,v,_,y,E,T,C,L,S){let b=y/C,P=E/L,O=y/2,N=E/2,U=T/2,z=C+1,B=L+1,$=0,H=0,J=new I;for(let ut=0;ut<B;ut++){let dt=ut*P-N;for(let st=0;st<z;st++){let $t=st*b-O;J[x]=$t*v,J[g]=dt*_,J[p]=U,l.push(J.x,J.y,J.z),J[x]=0,J[g]=0,J[p]=T>0?1:-1,h.push(J.x,J.y,J.z),d.push(st/C),d.push(1-ut/L),$+=1}}for(let ut=0;ut<L;ut++)for(let dt=0;dt<C;dt++){let st=u+dt+z*ut,$t=u+dt+z*(ut+1),Y=u+(dt+1)+z*(ut+1),rt=u+(dt+1)+z*ut;c.push(st,$t,rt),c.push($t,Y,rt),H+=6}a.addGroup(f,H,S),f+=H,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function rr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function $e(s){let t={};for(let e=0;e<s.length;e++){let n=rr(s[e]);for(let i in n)t[i]=n[i]}return t}function cg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function wf(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var lg={clone:rr,merge:$e},hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hg,this.fragmentShader=ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=cg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ba=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new I,xd=new at,yd=new at,Le=class extends ba{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,xd,yd),e.subVectors(yd,xd)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hs=-90,Gs=1,nh=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Le(Hs,Gs,t,e);i.layers=this.layers,this.add(i);let r=new Le(Hs,Gs,t,e);r.layers=this.layers,this.add(r);let o=new Le(Hs,Gs,t,e);o.layers=this.layers,this.add(o);let a=new Le(Hs,Gs,t,e);a.layers=this.layers,this.add(a);let c=new Le(Hs,Gs,t,e);c.layers=this.layers,this.add(c);let l=new Le(Hs,Gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ma=class extends Je{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:er,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ih=class extends ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ma(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Un(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Bi});r.uniforms.tEquirect.value=e;let o=new zt(i,r),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=Yn),new nh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},tl=new I,dg=new I,fg=new Yt,Nn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=tl.subVectors(n,e).cross(dg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(tl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fg.getNormalMatrix(t),i=this.coplanarPoint(tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new ki,$o=new I,eo=class{constructor(t=new Nn,e=new Nn,n=new Nn,i=new Nn,r=new Nn,o=new Nn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],m=i[9],x=i[10],g=i[11],p=i[12],v=i[13],_=i[14],y=i[15];if(n[0].setComponents(c-r,u-l,g-f,y-p).normalize(),n[1].setComponents(c+r,u+l,g+f,y+p).normalize(),n[2].setComponents(c+o,u+h,g+m,y+v).normalize(),n[3].setComponents(c-o,u-h,g-m,y-v).normalize(),n[4].setComponents(c-a,u-d,g-x,y-_).normalize(),e===li)n[5].setComponents(c+a,u+d,g+x,y+_).normalize();else if(e===ga)n[5].setComponents(a,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if($o.x=i.normal.x>0?t.max.x:t.min.x,$o.y=i.normal.y>0?t.max.y:t.min.y,$o.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint($o)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function pg(s){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Fn=class s extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*u-o;for(let _=0;_<l;_++){let y=_*d-r;m.push(y,-v,0),x.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let _=v+l*p,y=v+l*(p+1),E=v+1+l*(p+1),T=v+1+l*p;f.push(_,y,T),f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ag=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,p0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ex=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ax=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ux=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ox=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:mg,alphahash_pars_fragment:gg,alphamap_fragment:xg,alphamap_pars_fragment:yg,alphatest_fragment:vg,alphatest_pars_fragment:_g,aomap_fragment:bg,aomap_pars_fragment:Mg,batching_pars_vertex:wg,batching_vertex:Sg,begin_vertex:Eg,beginnormal_vertex:Tg,bsdfs:Ag,iridescence_fragment:Cg,bumpmap_pars_fragment:Rg,clipping_planes_fragment:Ig,clipping_planes_pars_fragment:Pg,clipping_planes_pars_vertex:Lg,clipping_planes_vertex:Ng,color_fragment:Dg,color_pars_fragment:Bg,color_pars_vertex:Ug,color_vertex:Fg,common:zg,cube_uv_reflection_fragment:Og,defaultnormal_vertex:kg,displacementmap_pars_vertex:Vg,displacementmap_vertex:Hg,emissivemap_fragment:Gg,emissivemap_pars_fragment:Wg,colorspace_fragment:qg,colorspace_pars_fragment:Xg,envmap_fragment:Yg,envmap_common_pars_fragment:jg,envmap_pars_fragment:Zg,envmap_pars_vertex:$g,envmap_physical_pars_fragment:a0,envmap_vertex:Jg,fog_vertex:Kg,fog_pars_vertex:Qg,fog_fragment:t0,fog_pars_fragment:e0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:r0,lights_pars_begin:o0,lights_toon_fragment:c0,lights_toon_pars_fragment:l0,lights_phong_fragment:h0,lights_phong_pars_fragment:u0,lights_physical_fragment:d0,lights_physical_pars_fragment:f0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:g0,logdepthbuf_fragment:x0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:_0,map_fragment:b0,map_pars_fragment:M0,map_particle_fragment:w0,map_particle_pars_fragment:S0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:T0,morphinstance_vertex:A0,morphcolor_vertex:C0,morphnormal_vertex:R0,morphtarget_pars_vertex:I0,morphtarget_vertex:P0,normal_fragment_begin:L0,normal_fragment_maps:N0,normal_pars_fragment:D0,normal_pars_vertex:B0,normal_vertex:U0,normalmap_pars_fragment:F0,clearcoat_normal_fragment_begin:z0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:k0,iridescence_pars_fragment:V0,opaque_fragment:H0,packing:G0,premultiplied_alpha_fragment:W0,project_vertex:q0,dithering_fragment:X0,dithering_pars_fragment:Y0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:$0,shadowmap_pars_vertex:J0,shadowmap_vertex:K0,shadowmask_pars_fragment:Q0,skinbase_vertex:tx,skinning_pars_vertex:ex,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ox,tonemapping_pars_fragment:ax,transmission_fragment:cx,transmission_pars_fragment:lx,uv_pars_fragment:hx,uv_pars_vertex:ux,uv_vertex:dx,worldpos_vertex:fx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:xx,cube_vert:yx,cube_frag:vx,depth_vert:_x,depth_frag:bx,distanceRGBA_vert:Mx,distanceRGBA_frag:wx,equirect_vert:Sx,equirect_frag:Ex,linedashed_vert:Tx,linedashed_frag:Ax,meshbasic_vert:Cx,meshbasic_frag:Rx,meshlambert_vert:Ix,meshlambert_frag:Px,meshmatcap_vert:Lx,meshmatcap_frag:Nx,meshnormal_vert:Dx,meshnormal_frag:Bx,meshphong_vert:Ux,meshphong_frag:Fx,meshphysical_vert:zx,meshphysical_frag:Ox,meshtoon_vert:kx,meshtoon_frag:Vx,points_vert:Hx,points_frag:Gx,shadow_vert:Wx,shadow_frag:qx,sprite_vert:Xx,sprite_frag:Yx},pt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Xn={basic:{uniforms:$e([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:$e([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:$e([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:$e([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:$e([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:$e([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:$e([pt.points,pt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:$e([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:$e([pt.common,pt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:$e([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:$e([pt.sprite,pt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:$e([pt.common,pt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:$e([pt.lights,pt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Xn.physical={uniforms:$e([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Jo={r:0,b:0,g:0},ss=new vn,jx=new re;function Zx(s,t,e,n,i,r,o){let a=new Gt(0),c=r===!0?0:1,l,h,d=null,u=0,f=null;function m(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function x(v){let _=!1,y=m(v);y===null?p(a,c):y&&y.isColor&&(p(y,1),_=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,_){let y=m(_);y&&(y.isCubeTexture||y.mapping===Ha)?(h===void 0&&(h=new zt(new Un(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:rr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ss.copy(_.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(ss)),h.material.toneMapped=ne.getTransfer(y.colorSpace)!==fe,(d!==y||u!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new zt(new Fn(2,2),new hn({name:"BackgroundMaterial",uniforms:rr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ne.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,_){v.getRGB(Jo,wf(s)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:g}}function $x(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(b,P,O,N,U){let z=!1,B=d(N,O,P);r!==B&&(r=B,l(r.object)),z=f(b,N,O,U),z&&m(b,N,O,U),U!==null&&t.update(U,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(b,P,O,N),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function d(b,P,O){let N=O.wireframe===!0,U=n[b.id];U===void 0&&(U={},n[b.id]=U);let z=U[P.id];z===void 0&&(z={},U[P.id]=z);let B=z[N];return B===void 0&&(B=u(c()),z[N]=B),B}function u(b){let P=[],O=[],N=[];for(let U=0;U<e;U++)P[U]=0,O[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:N,object:b,attributes:{},index:null}}function f(b,P,O,N){let U=r.attributes,z=P.attributes,B=0,$=O.getAttributes();for(let H in $)if($[H].location>=0){let ut=U[H],dt=z[H];if(dt===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor)),ut===void 0||ut.attribute!==dt||dt&&ut.data!==dt.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function m(b,P,O,N){let U={},z=P.attributes,B=0,$=O.getAttributes();for(let H in $)if($[H].location>=0){let ut=z[H];ut===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ut=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ut=b.instanceColor));let dt={};dt.attribute=ut,ut&&ut.data&&(dt.data=ut.data),U[H]=dt,B++}r.attributes=U,r.attributesNum=B,r.index=N}function x(){let b=r.newAttributes;for(let P=0,O=b.length;P<O;P++)b[P]=0}function g(b){p(b,0)}function p(b,P){let O=r.newAttributes,N=r.enabledAttributes,U=r.attributeDivisors;O[b]=1,N[b]===0&&(s.enableVertexAttribArray(b),N[b]=1),U[b]!==P&&(s.vertexAttribDivisor(b,P),U[b]=P)}function v(){let b=r.newAttributes,P=r.enabledAttributes;for(let O=0,N=P.length;O<N;O++)P[O]!==b[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function _(b,P,O,N,U,z,B){B===!0?s.vertexAttribIPointer(b,P,O,U,z):s.vertexAttribPointer(b,P,O,N,U,z)}function y(b,P,O,N){x();let U=N.attributes,z=O.getAttributes(),B=P.defaultAttributeValues;for(let $ in z){let H=z[$];if(H.location>=0){let J=U[$];if(J===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(J=b.instanceColor)),J!==void 0){let ut=J.normalized,dt=J.itemSize,st=t.get(J);if(st===void 0)continue;let $t=st.buffer,Y=st.type,rt=st.bytesPerElement,St=Y===s.INT||Y===s.UNSIGNED_INT||J.gpuType===zh;if(J.isInterleavedBufferAttribute){let ht=J.data,Nt=ht.stride,Vt=J.offset;if(ht.isInstancedInterleavedBuffer){for(let Ut=0;Ut<H.locationSize;Ut++)p(H.location+Ut,ht.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ut=0;Ut<H.locationSize;Ut++)g(H.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let Ut=0;Ut<H.locationSize;Ut++)_(H.location+Ut,dt/H.locationSize,Y,ut,Nt*rt,(Vt+dt/H.locationSize*Ut)*rt,St)}else{if(J.isInstancedBufferAttribute){for(let ht=0;ht<H.locationSize;ht++)p(H.location+ht,J.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ht=0;ht<H.locationSize;ht++)g(H.location+ht);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let ht=0;ht<H.locationSize;ht++)_(H.location+ht,dt/H.locationSize,Y,ut,dt*rt,dt/H.locationSize*ht*rt,St)}}else if(B!==void 0){let ut=B[$];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(H.location,ut);break;case 3:s.vertexAttrib3fv(H.location,ut);break;case 4:s.vertexAttrib4fv(H.location,ut);break;default:s.vertexAttrib1fv(H.location,ut)}}}}v()}function E(){L();for(let b in n){let P=n[b];for(let O in P){let N=P[O];for(let U in N)h(N[U].object),delete N[U];delete P[O]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let O in P){let N=P[O];for(let U in N)h(N[U].object),delete N[U];delete P[O]}delete n[b.id]}function C(b){for(let P in n){let O=n[P];if(O[b.id]===void 0)continue;let N=O[b.id];for(let U in N)h(N[U].object),delete N[U];delete O[b.id]}}function L(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Jx(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let m=0;for(let x=0;x<d;x++)m+=h[x]*u[x];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Kx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Bn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ui&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==jn&&!L)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:E,maxSamples:T}}function Qx(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Nn,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=s.get(d);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let v=r?0:n,_=v*4,y=p.clippingState||null;c.value=y,y=h(m,u,_,f);for(let E=0;E!==_;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function ty(s){let t=new WeakMap;function e(o,a){return a===wl?o.mapping=er:a===Sl&&(o.mapping=nr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wl||a===Sl)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new ih(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var or=class extends ba{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ys=4,vd=[.125,.215,.35,.446,.526,.582],cs=20,el=new or,_d=new Gt,nl=null,il=0,sl=0,rl=!1,os=(1+Math.sqrt(5))/2,Ws=1/os,bd=[new I(-os,Ws,0),new I(os,Ws,0),new I(-Ws,0,os),new I(Ws,0,os),new I(0,os,-Ws),new I(0,os,Ws),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ar=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nl,il,sl),this._renderer.xr.enabled=rl,t.scissorTest=!1,Ko(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===er||t.mapping===nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),rl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:po,format:Bn,colorSpace:fr,depthBuffer:!1},i=Md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ey(r)),this._blurMaterial=ny(r,t,e)}return i}_compileMaterial(t){let e=new zt(this._lodPlanes[0],t);this._renderer.compile(e,el)}_sceneToCubeUV(t,e,n,i){let a=new Le(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(_d),h.toneMapping=Ui,h.autoClear=!1;let f=new ke({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),m=new zt(new Un,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(_d),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;Ko(i,v*_,p>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===er||t.mapping===nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ko(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,el)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bd[(i-r-1)%bd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new zt(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*cs-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):cs;g>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${cs}`);let p=[],v=0;for(let C=0;C<cs;++C){let L=C/x,S=Math.exp(-L*L/2);p.push(S),C===0?v+=S:C<g&&(v+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=m,u.mipInt.value=_-n;let y=this._sizeLods[i],E=3*y*(i>_-Ys?i-_+Ys:0),T=4*(this._cubeSize-y);Ko(e,E,T,3*y,2*y),c.setRenderTarget(e),c.render(d,el)}};function ey(s){let t=[],e=[],n=[],i=s,r=s-Ys+1+vd.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ys?c=vd[o-s+Ys-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),_=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let T=0;T<f;T++){let C=T%3*2/3-1,L=T>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(S,x*m*T),_.set(u,g*m*T);let b=[T,T,T,T,T,T];y.set(b,p*m*T)}let E=new Ne;E.setAttribute("position",new Oe(v,x)),E.setAttribute("uv",new Oe(_,g)),E.setAttribute("faceIndex",new Oe(y,p)),t.push(E),i>Ys&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Md(s,t,e){let n=new ln(s,t,e);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ko(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ny(s,t,e){let n=new Float32Array(cs),i=new I(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function wd(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Sd(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Yh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iy(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===wl||c===Sl,h=c===er||c===nr;if(l||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ar(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ar(s)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function sy(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Gr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ry(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let x=u.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let m in u)t.update(u[m],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],s.ARRAY_BUFFER)}}function l(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,y=v.length;_<y;_+=3){let E=v[_+0],T=v[_+1],C=v[_+2];u.push(E,T,T,C,C,E)}}else if(m!==void 0){let v=m.array;x=m.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let E=_+0,T=_+1,C=_+2;u.push(E,T,T,C,C,E)}}else return;let g=new(bf(u)?_a:va)(u,1);g.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function oy(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,u*o,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(u,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ay(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cy(s,t,e){let n=new WeakMap,i=new pe;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*E*4*d),C=new ya(T,y,E,d);C.type=jn,C.needsUpdate=!0;let L=_*4;for(let b=0;b<d;b++){let P=g[b],O=p[b],N=v[b],U=y*E*4*b;for(let z=0;z<P.count;z++){let B=z*L;f===!0&&(i.fromBufferAttribute(P,z),T[U+B+0]=i.x,T[U+B+1]=i.y,T[U+B+2]=i.z,T[U+B+3]=0),m===!0&&(i.fromBufferAttribute(O,z),T[U+B+4]=i.x,T[U+B+5]=i.y,T[U+B+6]=i.z,T[U+B+7]=0),x===!0&&(i.fromBufferAttribute(N,z),T[U+B+8]=i.x,T[U+B+9]=i.y,T[U+B+10]=i.z,T[U+B+11]=N.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new at(y,E)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function ly(s,t,e,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var wa=class extends Je{constructor(t,e,n,i,r,o,a,c,l,h=$s){if(h!==$s&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$s&&(n=us),n===void 0&&h===sr&&(n=ir),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ef=new Je,Ed=new wa(1,1),Tf=new ya,Af=new eh,Cf=new Ma,Td=[],Ad=[],Cd=new Float32Array(16),Rd=new Float32Array(9),Id=new Float32Array(4);function pr(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Td[i];if(r===void 0&&(r=new Float32Array(i),Td[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Wa(s,t){let e=Ad[t];e===void 0&&(e=new Int32Array(t),Ad[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function hy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function uy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Be(e,t)}}function dy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Be(e,t)}}function fy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Be(e,t)}}function py(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(De(e,n))return;Id.set(n),s.uniformMatrix2fv(this.addr,!1,Id),Be(e,n)}}function my(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(De(e,n))return;Rd.set(n),s.uniformMatrix3fv(this.addr,!1,Rd),Be(e,n)}}function gy(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(De(e,n))return;Cd.set(n),s.uniformMatrix4fv(this.addr,!1,Cd),Be(e,n)}}function xy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function yy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Be(e,t)}}function vy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Be(e,t)}}function _y(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Be(e,t)}}function by(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function My(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Be(e,t)}}function wy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Be(e,t)}}function Sy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Be(e,t)}}function Ey(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ed.compareFunction=vf,r=Ed):r=Ef,e.setTexture2D(t||r,i)}function Ty(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Af,i)}function Ay(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Cf,i)}function Cy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Tf,i)}function Ry(s){switch(s){case 5126:return hy;case 35664:return uy;case 35665:return dy;case 35666:return fy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return xy;case 35667:case 35671:return yy;case 35668:case 35672:return vy;case 35669:case 35673:return _y;case 5125:return by;case 36294:return My;case 36295:return wy;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Cy}}function Iy(s,t){s.uniform1fv(this.addr,t)}function Py(s,t){let e=pr(t,this.size,2);s.uniform2fv(this.addr,e)}function Ly(s,t){let e=pr(t,this.size,3);s.uniform3fv(this.addr,e)}function Ny(s,t){let e=pr(t,this.size,4);s.uniform4fv(this.addr,e)}function Dy(s,t){let e=pr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function By(s,t){let e=pr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Uy(s,t){let e=pr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Fy(s,t){s.uniform1iv(this.addr,t)}function zy(s,t){s.uniform2iv(this.addr,t)}function Oy(s,t){s.uniform3iv(this.addr,t)}function ky(s,t){s.uniform4iv(this.addr,t)}function Vy(s,t){s.uniform1uiv(this.addr,t)}function Hy(s,t){s.uniform2uiv(this.addr,t)}function Gy(s,t){s.uniform3uiv(this.addr,t)}function Wy(s,t){s.uniform4uiv(this.addr,t)}function qy(s,t,e){let n=this.cache,i=t.length,r=Wa(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Ef,r[o])}function Xy(s,t,e){let n=this.cache,i=t.length,r=Wa(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Af,r[o])}function Yy(s,t,e){let n=this.cache,i=t.length,r=Wa(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Cf,r[o])}function jy(s,t,e){let n=this.cache,i=t.length,r=Wa(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Tf,r[o])}function Zy(s){switch(s){case 5126:return Iy;case 35664:return Py;case 35665:return Ly;case 35666:return Ny;case 35674:return Dy;case 35675:return By;case 35676:return Uy;case 5124:case 35670:return Fy;case 35667:case 35671:return zy;case 35668:case 35672:return Oy;case 35669:case 35673:return ky;case 5125:return Vy;case 36294:return Hy;case 36295:return Gy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return jy}}var sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ry(e.type)}},rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zy(e.type)}},oh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ol=/(\w+)(\])?(\[|\.)?/g;function Pd(s,t){s.seq.push(t),s.map[t.id]=t}function $y(s,t,e){let n=s.name,i=n.length;for(ol.lastIndex=0;;){let r=ol.exec(n),o=ol.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Pd(e,l===void 0?new sh(a,s,t):new rh(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new oh(a),Pd(e,d)),e=d}}}var Qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);$y(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Ld(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Jy=37297,Ky=0;function Qy(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Nd=new Yt;function tv(s){ne._getMatrix(Nd,ne.workingColorSpace,s);let t=`mat3( ${Nd.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case Ga:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Dd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Qy(s.getShaderSource(t),o)}else return i}function ev(s,t){let e=tv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nv(s,t){let e;switch(t){case pm:e="Linear";break;case mm:e="Reinhard";break;case gm:e="Cineon";break;case Fh:e="ACESFilmic";break;case ym:e="AgX";break;case vm:e="Neutral";break;case xm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qo=new I;function iv(){ne.getLuminanceCoefficients(Qo);let s=Qo.x.toFixed(4),t=Qo.y.toFixed(4),e=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function rv(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ov(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Wr(s){return s!==""}function Bd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ud(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var av=/^[ \t]*#include +<([\w\d./]+)>/gm;function ah(s){return s.replace(av,lv)}var cv=new Map;function lv(s,t){let e=Zt[t];if(e===void 0){let n=cv.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ah(e)}var hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fd(s){return s.replace(hv,uv)}function uv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===of?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function fv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case er:case nr:t="ENVMAP_TYPE_CUBE";break;case Ha:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case nr:t="ENVMAP_MODE_REFRACTION";break}return t}function mv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case af:t="ENVMAP_BLENDING_MULTIPLY";break;case dm:t="ENVMAP_BLENDING_MIX";break;case fm:t="ENVMAP_BLENDING_ADD";break}return t}function gv(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xv(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=dv(e),l=fv(e),h=pv(e),d=mv(e),u=gv(e),f=sv(e),m=rv(r),x=i.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(g=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Ui?nv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,ev("linearToOutputTexel",e.outputColorSpace),iv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),o=ah(o),o=Bd(o,e),o=Ud(o,e),a=ah(a),a=Bd(a,e),a=Ud(a,e),o=Fd(o),a=Fd(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+g+o,y=v+p+a,E=Ld(i,i.VERTEX_SHADER,_),T=Ld(i,i.FRAGMENT_SHADER,y);i.attachShader(x,E),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(P){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(x).trim(),N=i.getShaderInfoLog(E).trim(),U=i.getShaderInfoLog(T).trim(),z=!0,B=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,E,T);else{let $=Dd(i,E,"vertex"),H=Dd(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+$+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||U==="")&&(B=!1);B&&(P.diagnostics={runnable:z,programLog:O,vertexShader:{log:N,prefix:g},fragmentShader:{log:U,prefix:p}})}i.deleteShader(E),i.deleteShader(T),L=new Qs(i,x),S=ov(i,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(x,Jy)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ky++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}var yv=0,ch=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lh(t),e.set(t,n)),n}},lh=class{constructor(t){this.id=yv++,this.code=t,this.usedTimes=0}};function vv(s,t,e,n,i,r,o){let a=new to,c=new ch,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,b,P,O,N){let U=O.fog,z=N.geometry,B=S.isMeshStandardMaterial?O.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),H=$&&$.mapping===Ha?$.image.height:null,J=m[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ut=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,dt=ut!==void 0?ut.length:0,st=0;z.morphAttributes.position!==void 0&&(st=1),z.morphAttributes.normal!==void 0&&(st=2),z.morphAttributes.color!==void 0&&(st=3);let $t,Y,rt,St;if(J){let de=Xn[J];$t=de.vertexShader,Y=de.fragmentShader}else $t=S.vertexShader,Y=S.fragmentShader,c.update(S),rt=c.getVertexShaderID(S),St=c.getFragmentShaderID(S);let ht=s.getRenderTarget(),Nt=s.state.buffers.depth.getReversed(),Vt=N.isInstancedMesh===!0,Ut=N.isBatchedMesh===!0,ee=!!S.map,Q=!!S.matcap,ct=!!$,D=!!S.aoMap,Pt=!!S.lightMap,it=!!S.bumpMap,Mt=!!S.normalMap,ft=!!S.displacementMap,Dt=!!S.emissiveMap,_t=!!S.metalnessMap,R=!!S.roughnessMap,w=S.anisotropy>0,G=S.clearcoat>0,j=S.dispersion>0,tt=S.iridescence>0,Z=S.sheen>0,At=S.transmission>0,mt=w&&!!S.anisotropyMap,bt=G&&!!S.clearcoatMap,Kt=G&&!!S.clearcoatNormalMap,ot=G&&!!S.clearcoatRoughnessMap,Et=tt&&!!S.iridescenceMap,Bt=tt&&!!S.iridescenceThicknessMap,Ot=Z&&!!S.sheenColorMap,Tt=Z&&!!S.sheenRoughnessMap,Qt=!!S.specularMap,jt=!!S.specularColorMap,me=!!S.specularIntensityMap,F=At&&!!S.transmissionMap,gt=At&&!!S.thicknessMap,X=!!S.gradientMap,K=!!S.alphaMap,vt=S.alphaTest>0,xt=!!S.alphaHash,qt=!!S.extensions,Ee=Ui;S.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ee=s.toneMapping);let Ge={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:Y,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:St,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&N._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&N.instanceColor!==null,instancingMorph:Vt&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ht===null?s.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:fr,alphaToCoverage:!!S.alphaToCoverage,map:ee,matcap:Q,envMap:ct,envMapMode:ct&&$.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Pt,bumpMap:it,normalMap:Mt,displacementMap:u&&ft,emissiveMap:Dt,normalMapObjectSpace:Mt&&S.normalMapType===Mm,normalMapTangentSpace:Mt&&S.normalMapType===yf,metalnessMap:_t,roughnessMap:R,anisotropy:w,anisotropyMap:mt,clearcoat:G,clearcoatMap:bt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:ot,dispersion:j,iridescence:tt,iridescenceMap:Et,iridescenceThicknessMap:Bt,sheen:Z,sheenColorMap:Ot,sheenRoughnessMap:Tt,specularMap:Qt,specularColorMap:jt,specularIntensityMap:me,transmission:At,transmissionMap:F,thicknessMap:gt,gradientMap:X,opaque:S.transparent===!1&&S.blending===Zs&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:vt,alphaHash:xt,combine:S.combine,mapUv:ee&&x(S.map.channel),aoMapUv:D&&x(S.aoMap.channel),lightMapUv:Pt&&x(S.lightMap.channel),bumpMapUv:it&&x(S.bumpMap.channel),normalMapUv:Mt&&x(S.normalMap.channel),displacementMapUv:ft&&x(S.displacementMap.channel),emissiveMapUv:Dt&&x(S.emissiveMap.channel),metalnessMapUv:_t&&x(S.metalnessMap.channel),roughnessMapUv:R&&x(S.roughnessMap.channel),anisotropyMapUv:mt&&x(S.anisotropyMap.channel),clearcoatMapUv:bt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&x(S.sheenRoughnessMap.channel),specularMapUv:Qt&&x(S.specularMap.channel),specularColorMapUv:jt&&x(S.specularColorMap.channel),specularIntensityMapUv:me&&x(S.specularIntensityMap.channel),transmissionMapUv:F&&x(S.transmissionMap.channel),thicknessMapUv:gt&&x(S.thicknessMap.channel),alphaMapUv:K&&x(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Mt||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(ee||K),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Nt,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:st,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:ee&&S.map.isVideoTexture===!0&&ne.getTransfer(S.map.colorSpace)===fe,decodeVideoTextureEmissive:Dt&&S.emissiveMap.isVideoTexture===!0&&ne.getTransfer(S.emissiveMap.colorSpace)===fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Dn,flipSided:S.side===Xe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&S.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function p(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(b,S),_(b,S),b.push(s.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let b=m[S.type],P;if(b){let O=Xn[b];P=lg.clone(O.uniforms)}else P=S.uniforms;return P}function E(S,b){let P;for(let O=0,N=h.length;O<N;O++){let U=h[O];if(U.cacheKey===b){P=U,++P.usedTimes;break}}return P===void 0&&(P=new xv(s,b,S,r),h.push(P)),P}function T(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:E,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:L}}function _v(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function bv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Od(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function kd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,m,x,g){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=x,p.group=g),t++,p}function a(d,u,f,m,x,g){let p=o(d,u,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,u,f,m,x,g){let p=o(d,u,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||bv),n.length>1&&n.sort(u||Od),i.length>1&&i.sort(u||Od)}function h(){for(let d=t,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Mv(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new kd,s.set(n,[o])):i>=r.length?(o=new kd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function wv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function Sv(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Ev=0;function Tv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Av(s){let t=new wv,e=Sv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,r=new re,o=new re;function a(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,_=0,y=0,E=0,T=0,C=0;l.sort(Tv);for(let S=0,b=l.length;S<b;S++){let P=l[S],O=P.color,N=P.intensity,U=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*N,d+=O.g*N,u+=O.b*N;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],N);C++}else if(P.isDirectionalLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=B,f++}else if(P.isSpotLight){let B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(O).multiplyScalar(N),B.distance=U,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[x]=B;let $=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,$.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=$.matrix,P.castShadow){let H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=z,y++}x++}else if(P.isRectAreaLight){let B=t.get(P);B.color.copy(O).multiplyScalar(N),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=B,g++}else if(P.isPointLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){let $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=B,m++}else if(P.isHemisphereLight){let B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(N),B.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=B,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==_||L.numSpotShadows!==y||L.numSpotMaps!==E||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.directionalLength=f,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=_,L.numSpotShadows=y,L.numSpotMaps=E,L.numLightProbes=C,n.version=Ev++)}function c(l,h){let d=0,u=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let _=l[p];if(_.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),u++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Vd(s){let t=new Av(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Cv(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Vd(s),t.set(i,[a])):r>=o.length?(a=new Vd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var no=class extends Vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hh=class extends Vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pv(s,t,e){let n=new eo,i=new at,r=new at,o=new pe,a=new no({depthPacking:qh}),c=new hh,l={},h=e.maxTextureSize,d={[Fi]:Xe,[Xe]:Fi,[Dn]:Dn},u=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Rv,fragmentShader:Iv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ne;m.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new zt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let p=this.type;this.render=function(T,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=s.getRenderTarget(),b=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Bi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let N=p!==ci&&this.type===ci,U=p===ci&&this.type!==ci;for(let z=0,B=T.length;z<B;z++){let $=T[z],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let J=H.getFrameExtents();if(i.multiply(J),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,H.mapSize.y=r.y)),H.map===null||N===!0||U===!0){let dt=this.type!==ci?{minFilter:cn,magFilter:cn}:{};H.map!==null&&H.map.dispose(),H.map=new ln(i.x,i.y,dt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let ut=H.getViewportCount();for(let dt=0;dt<ut;dt++){let st=H.getViewport(dt);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),O.viewport(o),H.updateMatrices($,dt),n=H.getFrustum(),y(C,L,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===ci&&v(H,L),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,b,P)};function v(T,C){let L=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ln(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,L,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,L,f,x,null)}function _(T,C,L,S){let b=null,P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=L.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let O=b.uuid,N=C.uuid,U=l[O];U===void 0&&(U={},l[O]=U);let z=U[N];z===void 0&&(z=b.clone(),U[N]=z,C.addEventListener("dispose",E)),b=z}if(b.visible=C.visible,b.wireframe=C.wireframe,S===ci?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=s.properties.get(b);O.light=L}return b}function y(T,C,L,S,b){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===ci)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let N=t.update(T),U=T.material;if(Array.isArray(U)){let z=N.groups;for(let B=0,$=z.length;B<$;B++){let H=z[B],J=U[H.materialIndex];if(J&&J.visible){let ut=_(T,J,S,b);T.onBeforeShadow(s,T,C,L,N,ut,H),s.renderBufferDirect(L,null,N,ut,T,H),T.onAfterShadow(s,T,C,L,N,ut,H)}}}else if(U.visible){let z=_(T,U,S,b);T.onBeforeShadow(s,T,C,L,N,z,null),s.renderBufferDirect(L,null,N,z,T,null),T.onAfterShadow(s,T,C,L,N,z,null)}}let O=T.children;for(let N=0,U=O.length;N<U;N++)y(O[N],C,L,S,b)}function E(T){T.target.removeEventListener("dispose",E);for(let L in l){let S=l[L],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var Lv={[gl]:xl,[yl]:bl,[vl]:Ml,[tr]:_l,[xl]:gl,[bl]:yl,[Ml]:vl,[_l]:tr};function Nv(s,t){function e(){let F=!1,gt=new pe,X=null,K=new pe(0,0,0,0);return{setMask:function(vt){X!==vt&&!F&&(s.colorMask(vt,vt,vt,vt),X=vt)},setLocked:function(vt){F=vt},setClear:function(vt,xt,qt,Ee,Ge){Ge===!0&&(vt*=Ee,xt*=Ee,qt*=Ee),gt.set(vt,xt,qt,Ee),K.equals(gt)===!1&&(s.clearColor(vt,xt,qt,Ee),K.copy(gt))},reset:function(){F=!1,X=null,K.set(-1,0,0,0)}}}function n(){let F=!1,gt=!1,X=null,K=null,vt=null;return{setReversed:function(xt){if(gt!==xt){let qt=t.get("EXT_clip_control");gt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);let Ee=vt;vt=null,this.setClear(Ee)}gt=xt},getReversed:function(){return gt},setTest:function(xt){xt?ht(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(xt){X!==xt&&!F&&(s.depthMask(xt),X=xt)},setFunc:function(xt){if(gt&&(xt=Lv[xt]),K!==xt){switch(xt){case gl:s.depthFunc(s.NEVER);break;case xl:s.depthFunc(s.ALWAYS);break;case yl:s.depthFunc(s.LESS);break;case tr:s.depthFunc(s.LEQUAL);break;case vl:s.depthFunc(s.EQUAL);break;case _l:s.depthFunc(s.GEQUAL);break;case bl:s.depthFunc(s.GREATER);break;case Ml:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=xt}},setLocked:function(xt){F=xt},setClear:function(xt){vt!==xt&&(gt&&(xt=1-xt),s.clearDepth(xt),vt=xt)},reset:function(){F=!1,X=null,K=null,vt=null,gt=!1}}}function i(){let F=!1,gt=null,X=null,K=null,vt=null,xt=null,qt=null,Ee=null,Ge=null;return{setTest:function(de){F||(de?ht(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(de){gt!==de&&!F&&(s.stencilMask(de),gt=de)},setFunc:function(de,Cn,ei){(X!==de||K!==Cn||vt!==ei)&&(s.stencilFunc(de,Cn,ei),X=de,K=Cn,vt=ei)},setOp:function(de,Cn,ei){(xt!==de||qt!==Cn||Ee!==ei)&&(s.stencilOp(de,Cn,ei),xt=de,qt=Cn,Ee=ei)},setLocked:function(de){F=de},setClear:function(de){Ge!==de&&(s.clearStencil(de),Ge=de)},reset:function(){F=!1,gt=null,X=null,K=null,vt=null,xt=null,qt=null,Ee=null,Ge=null}}}let r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},d={},u=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,_=null,y=null,E=null,T=null,C=new Gt(0,0,0),L=0,S=!1,b=null,P=null,O=null,N=null,U=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,$=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=$>=2);let J=null,ut={},dt=s.getParameter(s.SCISSOR_BOX),st=s.getParameter(s.VIEWPORT),$t=new pe().fromArray(dt),Y=new pe().fromArray(st);function rt(F,gt,X,K){let vt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(F,xt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<X;qt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(gt+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return xt}let St={};St[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(s.DEPTH_TEST),o.setFunc(tr),it(!1),Mt(Hu),ht(s.CULL_FACE),D(Bi);function ht(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Nt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Vt(F,gt){return d[F]!==gt?(s.bindFramebuffer(F,gt),d[F]=gt,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=gt),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ut(F,gt){let X=f,K=!1;if(F){X=u.get(gt),X===void 0&&(X=[],u.set(gt,X));let vt=F.textures;if(X.length!==vt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,qt=vt.length;xt<qt;xt++)X[xt]=s.COLOR_ATTACHMENT0+xt;X.length=vt.length,K=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,K=!0);K&&s.drawBuffers(X)}function ee(F){return m!==F?(s.useProgram(F),m=F,!0):!1}let Q={[as]:s.FUNC_ADD,[Zp]:s.FUNC_SUBTRACT,[$p]:s.FUNC_REVERSE_SUBTRACT};Q[Jp]=s.MIN,Q[Kp]=s.MAX;let ct={[Qp]:s.ZERO,[tm]:s.ONE,[em]:s.SRC_COLOR,[pl]:s.SRC_ALPHA,[am]:s.SRC_ALPHA_SATURATE,[rm]:s.DST_COLOR,[im]:s.DST_ALPHA,[nm]:s.ONE_MINUS_SRC_COLOR,[ml]:s.ONE_MINUS_SRC_ALPHA,[om]:s.ONE_MINUS_DST_COLOR,[sm]:s.ONE_MINUS_DST_ALPHA,[cm]:s.CONSTANT_COLOR,[lm]:s.ONE_MINUS_CONSTANT_COLOR,[hm]:s.CONSTANT_ALPHA,[um]:s.ONE_MINUS_CONSTANT_ALPHA};function D(F,gt,X,K,vt,xt,qt,Ee,Ge,de){if(F===Bi){x===!0&&(Nt(s.BLEND),x=!1);return}if(x===!1&&(ht(s.BLEND),x=!0),F!==jp){if(F!==g||de!==S){if((p!==as||y!==as)&&(s.blendEquation(s.FUNC_ADD),p=as,y=as),de)switch(F){case Zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gu:s.blendFunc(s.ONE,s.ONE);break;case Wu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Wu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,_=null,E=null,T=null,C.set(0,0,0),L=0,g=F,S=de}return}vt=vt||gt,xt=xt||X,qt=qt||K,(gt!==p||vt!==y)&&(s.blendEquationSeparate(Q[gt],Q[vt]),p=gt,y=vt),(X!==v||K!==_||xt!==E||qt!==T)&&(s.blendFuncSeparate(ct[X],ct[K],ct[xt],ct[qt]),v=X,_=K,E=xt,T=qt),(Ee.equals(C)===!1||Ge!==L)&&(s.blendColor(Ee.r,Ee.g,Ee.b,Ge),C.copy(Ee),L=Ge),g=F,S=!1}function Pt(F,gt){F.side===Dn?Nt(s.CULL_FACE):ht(s.CULL_FACE);let X=F.side===Xe;gt&&(X=!X),it(X),F.blending===Zs&&F.transparent===!1?D(Bi):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let K=F.stencilWrite;a.setTest(K),K&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Dt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(F){b!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),b=F)}function Mt(F){F!==Xp?(ht(s.CULL_FACE),F!==P&&(F===Hu?s.cullFace(s.BACK):F===Yp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),P=F}function ft(F){F!==O&&(B&&s.lineWidth(F),O=F)}function Dt(F,gt,X){F?(ht(s.POLYGON_OFFSET_FILL),(N!==gt||U!==X)&&(s.polygonOffset(gt,X),N=gt,U=X)):Nt(s.POLYGON_OFFSET_FILL)}function _t(F){F?ht(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function R(F){F===void 0&&(F=s.TEXTURE0+z-1),J!==F&&(s.activeTexture(F),J=F)}function w(F,gt,X){X===void 0&&(J===null?X=s.TEXTURE0+z-1:X=J);let K=ut[X];K===void 0&&(K={type:void 0,texture:void 0},ut[X]=K),(K.type!==F||K.texture!==gt)&&(J!==X&&(s.activeTexture(X),J=X),s.bindTexture(F,gt||St[F]),K.type=F,K.texture=gt)}function G(){let F=ut[J];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Kt(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(F){$t.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),$t.copy(F))}function Tt(F){Y.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function Qt(F,gt){let X=l.get(gt);X===void 0&&(X=new WeakMap,l.set(gt,X));let K=X.get(F);K===void 0&&(K=s.getUniformBlockIndex(gt,F.name),X.set(F,K))}function jt(F,gt){let K=l.get(gt).get(F);c.get(gt)!==K&&(s.uniformBlockBinding(gt,K,F.__bindingPointIndex),c.set(gt,K))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},J=null,ut={},d={},u=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,_=null,y=null,E=null,T=null,C=new Gt(0,0,0),L=0,S=!1,b=null,P=null,O=null,N=null,U=null,$t.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Nt,bindFramebuffer:Vt,drawBuffers:Ut,useProgram:ee,setBlending:D,setMaterial:Pt,setFlipSided:it,setCullFace:Mt,setLineWidth:ft,setPolygonOffset:Dt,setScissorTest:_t,activeTexture:R,bindTexture:w,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:tt,texImage2D:Et,texImage3D:Bt,updateUBOMapping:Qt,uniformBlockBinding:jt,texStorage2D:Kt,texStorage3D:ot,texSubImage2D:Z,texSubImage3D:At,compressedTexSubImage2D:mt,compressedTexSubImage3D:bt,scissor:Ot,viewport:Tt,reset:me}}function Hd(s,t,e,n){let i=Dv(n);switch(e){case df:return s*t;case pf:return s*t;case mf:return s*t*2;case Vh:return s*t/i.components*i.byteLength;case Hh:return s*t/i.components*i.byteLength;case gf:return s*t*2/i.components*i.byteLength;case Gh:return s*t*2/i.components*i.byteLength;case ff:return s*t*3/i.components*i.byteLength;case Bn:return s*t*4/i.components*i.byteLength;case Wh:return s*t*4/i.components*i.byteLength;case ha:case ua:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case da:case fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Al:case Rl:return Math.max(s,16)*Math.max(t,8)/4;case Tl:case Cl:return Math.max(s,8)*Math.max(t,8)/2;case Il:case Pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case kl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ql:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case pa:case Yl:case jl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case xf:case Zl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case $l:case Jl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dv(s){switch(s){case ui:case lf:return{byteLength:1,components:1};case $r:case hf:case po:return{byteLength:2,components:1};case Oh:case kh:return{byteLength:2,components:4};case us:case zh:case jn:return{byteLength:4,components:1};case uf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Bv(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,w){return f?new OffscreenCanvas(R,w):Kr("canvas")}function x(R,w,G){let j=1,tt=_t(R);if((tt.width>G||tt.height>G)&&(j=G/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Z=Math.floor(j*tt.width),At=Math.floor(j*tt.height);d===void 0&&(d=m(Z,At));let mt=w?m(Z,At):d;return mt.width=Z,mt.height=At,mt.getContext("2d").drawImage(R,0,0,Z,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+At+")."),mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(R,w,G,j,tt=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=w;if(w===s.RED&&(G===s.FLOAT&&(Z=s.R32F),G===s.HALF_FLOAT&&(Z=s.R16F),G===s.UNSIGNED_BYTE&&(Z=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(Z=s.R8UI),G===s.UNSIGNED_SHORT&&(Z=s.R16UI),G===s.UNSIGNED_INT&&(Z=s.R32UI),G===s.BYTE&&(Z=s.R8I),G===s.SHORT&&(Z=s.R16I),G===s.INT&&(Z=s.R32I)),w===s.RG&&(G===s.FLOAT&&(Z=s.RG32F),G===s.HALF_FLOAT&&(Z=s.RG16F),G===s.UNSIGNED_BYTE&&(Z=s.RG8)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(Z=s.RG8UI),G===s.UNSIGNED_SHORT&&(Z=s.RG16UI),G===s.UNSIGNED_INT&&(Z=s.RG32UI),G===s.BYTE&&(Z=s.RG8I),G===s.SHORT&&(Z=s.RG16I),G===s.INT&&(Z=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),G===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),G===s.UNSIGNED_INT&&(Z=s.RGB32UI),G===s.BYTE&&(Z=s.RGB8I),G===s.SHORT&&(Z=s.RGB16I),G===s.INT&&(Z=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),G===s.UNSIGNED_INT&&(Z=s.RGBA32UI),G===s.BYTE&&(Z=s.RGBA8I),G===s.SHORT&&(Z=s.RGBA16I),G===s.INT&&(Z=s.RGBA32I)),w===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),w===s.RGBA){let At=tt?Ga:ne.getTransfer(j);G===s.FLOAT&&(Z=s.RGBA32F),G===s.HALF_FLOAT&&(Z=s.RGBA16F),G===s.UNSIGNED_BYTE&&(Z=At===fe?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(R,w){let G;return R?w===null||w===us||w===ir?G=s.DEPTH24_STENCIL8:w===jn?G=s.DEPTH32F_STENCIL8:w===$r&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===us||w===ir?G=s.DEPTH_COMPONENT24:w===jn?G=s.DEPTH_COMPONENT32F:w===$r&&(G=s.DEPTH_COMPONENT16),G}function E(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==Yn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function T(R){let w=R.target;w.removeEventListener("dispose",T),L(w),w.isVideoTexture&&h.delete(w)}function C(R){let w=R.target;w.removeEventListener("dispose",C),b(w)}function L(R){let w=n.get(R);if(w.__webglInit===void 0)return;let G=R.source,j=u.get(G);if(j){let tt=j[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(R),Object.keys(j).length===0&&u.delete(G)}n.remove(R)}function S(R){let w=n.get(R);s.deleteTexture(w.__webglTexture);let G=R.source,j=u.get(G);delete j[w.__cacheKey],o.memory.textures--}function b(R){let w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(w.__webglFramebuffer[j]))for(let tt=0;tt<w.__webglFramebuffer[j].length;tt++)s.deleteFramebuffer(w.__webglFramebuffer[j][tt]);else s.deleteFramebuffer(w.__webglFramebuffer[j]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[j])}else{if(Array.isArray(w.__webglFramebuffer))for(let j=0;j<w.__webglFramebuffer.length;j++)s.deleteFramebuffer(w.__webglFramebuffer[j]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let j=0;j<w.__webglColorRenderbuffer.length;j++)w.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[j]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let G=R.textures;for(let j=0,tt=G.length;j<tt;j++){let Z=n.get(G[j]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(R)}let P=0;function O(){P=0}function N(){let R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function U(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function z(R,w){let G=n.get(R);if(R.isVideoTexture&&ft(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){let j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,R,w);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function B(R,w){let G=n.get(R);if(R.version>0&&G.__version!==R.version){Y(G,R,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function $(R,w){let G=n.get(R);if(R.version>0&&G.__version!==R.version){Y(G,R,w);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function H(R,w){let G=n.get(R);if(R.version>0&&G.__version!==R.version){rt(G,R,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}let J={[zi]:s.REPEAT,[ls]:s.CLAMP_TO_EDGE,[El]:s.MIRRORED_REPEAT},ut={[cn]:s.NEAREST,[_m]:s.NEAREST_MIPMAP_NEAREST,[No]:s.NEAREST_MIPMAP_LINEAR,[Yn]:s.LINEAR,[Nc]:s.LINEAR_MIPMAP_NEAREST,[hs]:s.LINEAR_MIPMAP_LINEAR},dt={[wm]:s.NEVER,[Rm]:s.ALWAYS,[Sm]:s.LESS,[vf]:s.LEQUAL,[Em]:s.EQUAL,[Cm]:s.GEQUAL,[Tm]:s.GREATER,[Am]:s.NOTEQUAL};function st(R,w){if(w.type===jn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Yn||w.magFilter===Nc||w.magFilter===No||w.magFilter===hs||w.minFilter===Yn||w.minFilter===Nc||w.minFilter===No||w.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,J[w.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,J[w.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,J[w.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ut[w.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ut[w.minFilter]),w.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,dt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===cn||w.minFilter!==No&&w.minFilter!==hs||w.type===jn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function $t(R,w){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",T));let j=w.source,tt=u.get(j);tt===void 0&&(tt={},u.set(j,tt));let Z=U(w);if(Z!==R.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[Z].usedTimes++;let At=tt[R.__cacheKey];At!==void 0&&(tt[R.__cacheKey].usedTimes--,At.usedTimes===0&&S(w)),R.__cacheKey=Z,R.__webglTexture=tt[Z].texture}return G}function Y(R,w,G){let j=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(j=s.TEXTURE_3D);let tt=$t(R,w),Z=w.source;e.bindTexture(j,R.__webglTexture,s.TEXTURE0+G);let At=n.get(Z);if(Z.version!==At.__version||tt===!0){e.activeTexture(s.TEXTURE0+G);let mt=ne.getPrimaries(ne.workingColorSpace),bt=w.colorSpace===Ni?null:ne.getPrimaries(w.colorSpace),Kt=w.colorSpace===Ni||mt===bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let ot=x(w.image,!1,i.maxTextureSize);ot=Dt(w,ot);let Et=r.convert(w.format,w.colorSpace),Bt=r.convert(w.type),Ot=_(w.internalFormat,Et,Bt,w.colorSpace,w.isVideoTexture);st(j,w);let Tt,Qt=w.mipmaps,jt=w.isVideoTexture!==!0,me=At.__version===void 0||tt===!0,F=Z.dataReady,gt=E(w,ot);if(w.isDepthTexture)Ot=y(w.format===sr,w.type),me&&(jt?e.texStorage2D(s.TEXTURE_2D,1,Ot,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Ot,ot.width,ot.height,0,Et,Bt,null));else if(w.isDataTexture)if(Qt.length>0){jt&&me&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let X=0,K=Qt.length;X<K;X++)Tt=Qt[X],jt?F&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,Tt.width,Tt.height,Et,Bt,Tt.data):e.texImage2D(s.TEXTURE_2D,X,Ot,Tt.width,Tt.height,0,Et,Bt,Tt.data);w.generateMipmaps=!1}else jt?(me&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,ot.width,ot.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,Et,Bt,ot.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,ot.width,ot.height,0,Et,Bt,ot.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){jt&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ot,Qt[0].width,Qt[0].height,ot.depth);for(let X=0,K=Qt.length;X<K;X++)if(Tt=Qt[X],w.format!==Bn)if(Et!==null)if(jt){if(F)if(w.layerUpdates.size>0){let vt=Hd(Tt.width,Tt.height,w.format,w.type);for(let xt of w.layerUpdates){let qt=Tt.data.subarray(xt*vt/Tt.data.BYTES_PER_ELEMENT,(xt+1)*vt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,xt,Tt.width,Tt.height,1,Et,qt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,Tt.width,Tt.height,ot.depth,Et,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Ot,Tt.width,Tt.height,ot.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,Tt.width,Tt.height,ot.depth,Et,Bt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,Ot,Tt.width,Tt.height,ot.depth,0,Et,Bt,Tt.data)}else{jt&&me&&e.texStorage2D(s.TEXTURE_2D,gt,Ot,Qt[0].width,Qt[0].height);for(let X=0,K=Qt.length;X<K;X++)Tt=Qt[X],w.format!==Bn?Et!==null?jt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,X,Ot,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?F&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,Tt.width,Tt.height,Et,Bt,Tt.data):e.texImage2D(s.TEXTURE_2D,X,Ot,Tt.width,Tt.height,0,Et,Bt,Tt.data)}else if(w.isDataArrayTexture)if(jt){if(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,Ot,ot.width,ot.height,ot.depth),F)if(w.layerUpdates.size>0){let X=Hd(ot.width,ot.height,w.format,w.type);for(let K of w.layerUpdates){let vt=ot.data.subarray(K*X/ot.data.BYTES_PER_ELEMENT,(K+1)*X/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,ot.width,ot.height,1,Et,Bt,vt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Et,Bt,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,ot.width,ot.height,ot.depth,0,Et,Bt,ot.data);else if(w.isData3DTexture)jt?(me&&e.texStorage3D(s.TEXTURE_3D,gt,Ot,ot.width,ot.height,ot.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Et,Bt,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,ot.width,ot.height,ot.depth,0,Et,Bt,ot.data);else if(w.isFramebufferTexture){if(me)if(jt)e.texStorage2D(s.TEXTURE_2D,gt,Ot,ot.width,ot.height);else{let X=ot.width,K=ot.height;for(let vt=0;vt<gt;vt++)e.texImage2D(s.TEXTURE_2D,vt,Ot,X,K,0,Et,Bt,null),X>>=1,K>>=1}}else if(Qt.length>0){if(jt&&me){let X=_t(Qt[0]);e.texStorage2D(s.TEXTURE_2D,gt,Ot,X.width,X.height)}for(let X=0,K=Qt.length;X<K;X++)Tt=Qt[X],jt?F&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,Et,Bt,Tt):e.texImage2D(s.TEXTURE_2D,X,Ot,Et,Bt,Tt);w.generateMipmaps=!1}else if(jt){if(me){let X=_t(ot);e.texStorage2D(s.TEXTURE_2D,gt,Ot,X.width,X.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,Bt,ot)}else e.texImage2D(s.TEXTURE_2D,0,Ot,Et,Bt,ot);g(w)&&p(j),At.__version=Z.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function rt(R,w,G){if(w.image.length!==6)return;let j=$t(R,w),tt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+G);let Z=n.get(tt);if(tt.version!==Z.__version||j===!0){e.activeTexture(s.TEXTURE0+G);let At=ne.getPrimaries(ne.workingColorSpace),mt=w.colorSpace===Ni?null:ne.getPrimaries(w.colorSpace),bt=w.colorSpace===Ni||At===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Kt=w.isCompressedTexture||w.image[0].isCompressedTexture,ot=w.image[0]&&w.image[0].isDataTexture,Et=[];for(let K=0;K<6;K++)!Kt&&!ot?Et[K]=x(w.image[K],!0,i.maxCubemapSize):Et[K]=ot?w.image[K].image:w.image[K],Et[K]=Dt(w,Et[K]);let Bt=Et[0],Ot=r.convert(w.format,w.colorSpace),Tt=r.convert(w.type),Qt=_(w.internalFormat,Ot,Tt,w.colorSpace),jt=w.isVideoTexture!==!0,me=Z.__version===void 0||j===!0,F=tt.dataReady,gt=E(w,Bt);st(s.TEXTURE_CUBE_MAP,w);let X;if(Kt){jt&&me&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,Bt.width,Bt.height);for(let K=0;K<6;K++){X=Et[K].mipmaps;for(let vt=0;vt<X.length;vt++){let xt=X[vt];w.format!==Bn?Ot!==null?jt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,0,0,xt.width,xt.height,Ot,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,Qt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,0,0,xt.width,xt.height,Ot,Tt,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt,Qt,xt.width,xt.height,0,Ot,Tt,xt.data)}}}else{if(X=w.mipmaps,jt&&me){X.length>0&&gt++;let K=_t(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Qt,K.width,K.height)}for(let K=0;K<6;K++)if(ot){jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et[K].width,Et[K].height,Ot,Tt,Et[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Qt,Et[K].width,Et[K].height,0,Ot,Tt,Et[K].data);for(let vt=0;vt<X.length;vt++){let qt=X[vt].image[K].image;jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,0,0,qt.width,qt.height,Ot,Tt,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,Qt,qt.width,qt.height,0,Ot,Tt,qt.data)}}else{jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ot,Tt,Et[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Qt,Ot,Tt,Et[K]);for(let vt=0;vt<X.length;vt++){let xt=X[vt];jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,0,0,Ot,Tt,xt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,vt+1,Qt,Ot,Tt,xt.image[K])}}}g(w)&&p(s.TEXTURE_CUBE_MAP),Z.__version=tt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function St(R,w,G,j,tt,Z){let At=r.convert(G.format,G.colorSpace),mt=r.convert(G.type),bt=_(G.internalFormat,At,mt,G.colorSpace),Kt=n.get(w),ot=n.get(G);if(ot.__renderTarget=w,!Kt.__hasExternalTextures){let Et=Math.max(1,w.width>>Z),Bt=Math.max(1,w.height>>Z);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,bt,Et,Bt,w.depth,0,At,mt,null):e.texImage2D(tt,Z,bt,Et,Bt,0,At,mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),Mt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,tt,ot.__webglTexture,0,it(w)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,tt,ot.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(R,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,R),w.depthBuffer){let j=w.depthTexture,tt=j&&j.isDepthTexture?j.type:null,Z=y(w.stencilBuffer,tt),At=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=it(w);Mt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,Z,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,Z,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Z,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,R)}else{let j=w.textures;for(let tt=0;tt<j.length;tt++){let Z=j[tt],At=r.convert(Z.format,Z.colorSpace),mt=r.convert(Z.type),bt=_(Z.internalFormat,At,mt,Z.colorSpace),Kt=it(w);G&&Mt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,bt,w.width,w.height):Mt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,bt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,bt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(w.depthTexture);j.__renderTarget=w,(!j.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);let tt=j.__webglTexture,Z=it(w);if(w.depthTexture.format===$s)Mt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(w.depthTexture.format===sr)Mt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Vt(R){let w=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),j){let tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=j}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Nt(w.__webglFramebuffer,R)}else if(G){w.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[j]),w.__webglDepthbuffer[j]===void 0)w.__webglDepthbuffer[j]=s.createRenderbuffer(),ht(w.__webglDepthbuffer[j],R,!1);else{let tt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=w.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ht(w.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(R,w,G){let j=n.get(R);w!==void 0&&St(j.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Vt(R)}function ee(R){let w=R.texture,G=n.get(R),j=n.get(w);R.addEventListener("dispose",C);let tt=R.textures,Z=R.isWebGLCubeRenderTarget===!0,At=tt.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=w.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[mt]=[];for(let bt=0;bt<w.mipmaps.length;bt++)G.__webglFramebuffer[mt][bt]=s.createFramebuffer()}else G.__webglFramebuffer[mt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let mt=0;mt<w.mipmaps.length;mt++)G.__webglFramebuffer[mt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(At)for(let mt=0,bt=tt.length;mt<bt;mt++){let Kt=n.get(tt[mt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Mt(R)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let mt=0;mt<tt.length;mt++){let bt=tt[mt];G.__webglColorRenderbuffer[mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[mt]);let Kt=r.convert(bt.format,bt.colorSpace),ot=r.convert(bt.type),Et=_(bt.internalFormat,Kt,ot,bt.colorSpace,R.isXRRenderTarget===!0),Bt=it(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,Et,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,G.__webglColorRenderbuffer[mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ht(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),st(s.TEXTURE_CUBE_MAP,w);for(let mt=0;mt<6;mt++)if(w.mipmaps&&w.mipmaps.length>0)for(let bt=0;bt<w.mipmaps.length;bt++)St(G.__webglFramebuffer[mt][bt],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,bt);else St(G.__webglFramebuffer[mt],R,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(w)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let mt=0,bt=tt.length;mt<bt;mt++){let Kt=tt[mt],ot=n.get(Kt);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),st(s.TEXTURE_2D,Kt),St(G.__webglFramebuffer,R,Kt,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,0),g(Kt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let mt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(mt,j.__webglTexture),st(mt,w),w.mipmaps&&w.mipmaps.length>0)for(let bt=0;bt<w.mipmaps.length;bt++)St(G.__webglFramebuffer[bt],R,w,s.COLOR_ATTACHMENT0,mt,bt);else St(G.__webglFramebuffer,R,w,s.COLOR_ATTACHMENT0,mt,0);g(w)&&p(mt),e.unbindTexture()}R.depthBuffer&&Vt(R)}function Q(R){let w=R.textures;for(let G=0,j=w.length;G<j;G++){let tt=w[G];if(g(tt)){let Z=v(R),At=n.get(tt).__webglTexture;e.bindTexture(Z,At),p(Z),e.unbindTexture()}}}let ct=[],D=[];function Pt(R){if(R.samples>0){if(Mt(R)===!1){let w=R.textures,G=R.width,j=R.height,tt=s.COLOR_BUFFER_BIT,Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(R),mt=w.length>1;if(mt)for(let bt=0;bt<w.length;bt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<w.length;bt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let Kt=n.get(w[bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Kt,0)}s.blitFramebuffer(0,0,G,j,0,0,G,j,tt,s.NEAREST),c===!0&&(ct.length=0,D.length=0,ct.push(s.COLOR_ATTACHMENT0+bt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ct.push(Z),D.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),mt)for(let bt=0;bt<w.length;bt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);let Kt=n.get(w[bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+bt,s.TEXTURE_2D,Kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let w=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function it(R){return Math.min(i.maxSamples,R.samples)}function Mt(R){let w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ft(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Dt(R,w){let G=R.colorSpace,j=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==fr&&G!==Ni&&(ne.getTransfer(G)===fe?(j!==Bn||tt!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function _t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Ut,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Mt}function Uv(s,t){function e(n,i=Ni){let r,o=ne.getTransfer(i);if(n===ui)return s.UNSIGNED_BYTE;if(n===Oh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===kh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===uf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===lf)return s.BYTE;if(n===hf)return s.SHORT;if(n===$r)return s.UNSIGNED_SHORT;if(n===zh)return s.INT;if(n===us)return s.UNSIGNED_INT;if(n===jn)return s.FLOAT;if(n===po)return s.HALF_FLOAT;if(n===df)return s.ALPHA;if(n===ff)return s.RGB;if(n===Bn)return s.RGBA;if(n===pf)return s.LUMINANCE;if(n===mf)return s.LUMINANCE_ALPHA;if(n===$s)return s.DEPTH_COMPONENT;if(n===sr)return s.DEPTH_STENCIL;if(n===Vh)return s.RED;if(n===Hh)return s.RED_INTEGER;if(n===gf)return s.RG;if(n===Gh)return s.RG_INTEGER;if(n===Wh)return s.RGBA_INTEGER;if(n===ha||n===ua||n===da||n===fa)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===Al||n===Cl||n===Rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Pl||n===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Il||n===Pl)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ll)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nl||n===Dl||n===Bl||n===Ul||n===Fl||n===zl||n===Ol||n===kl||n===Vl||n===Hl||n===Gl||n===Wl||n===ql||n===Xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ql)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pa||n===Yl||n===jl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pa)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xf||n===Zl||n===$l||n===Jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var uh=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},se=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fv={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&u>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ov=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Je,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:zv,fragmentShader:Ov,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zt(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fh=class extends Oi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,m=null,x=new dh,g=e.getContextAttributes(),p=null,v=null,_=[],y=[],E=new at,T=null,C=new Le;C.viewport=new pe;let L=new Le;L.viewport=new pe;let S=[C,L],b=new uh,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let rt=_[Y];return rt===void 0&&(rt=new Xr,_[Y]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Y){let rt=_[Y];return rt===void 0&&(rt=new Xr,_[Y]=rt),rt.getGripSpace()},this.getHand=function(Y){let rt=_[Y];return rt===void 0&&(rt=new Xr,_[Y]=rt),rt.getHandSpace()};function N(Y){let rt=y.indexOf(Y.inputSource);if(rt===-1)return;let St=_[rt];St!==void 0&&(St.update(Y.inputSource,Y.frame,l||o),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function U(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",z);for(let Y=0;Y<_.length;Y++){let rt=y[Y];rt!==null&&(y[Y]=null,_[Y].disconnect(rt))}P=null,O=null,x.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,v=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",U),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){let rt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ln(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let rt=null,St=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=g.stencil?sr:$s,St=g.stencil?ir:us);let Nt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Nt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new ln(u.textureWidth,u.textureHeight,{format:Bn,type:ui,depthTexture:new wa(u.textureWidth,u.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z(Y){for(let rt=0;rt<Y.removed.length;rt++){let St=Y.removed[rt],ht=y.indexOf(St);ht>=0&&(y[ht]=null,_[ht].disconnect(St))}for(let rt=0;rt<Y.added.length;rt++){let St=Y.added[rt],ht=y.indexOf(St);if(ht===-1){for(let Vt=0;Vt<_.length;Vt++)if(Vt>=y.length){y.push(St),ht=Vt;break}else if(y[Vt]===null){y[Vt]=St,ht=Vt;break}if(ht===-1)break}let Nt=_[ht];Nt&&Nt.connect(St)}}let B=new I,$=new I;function H(Y,rt,St){B.setFromMatrixPosition(rt.matrixWorld),$.setFromMatrixPosition(St.matrixWorld);let ht=B.distanceTo($),Nt=rt.projectionMatrix.elements,Vt=St.projectionMatrix.elements,Ut=Nt[14]/(Nt[10]-1),ee=Nt[14]/(Nt[10]+1),Q=(Nt[9]+1)/Nt[5],ct=(Nt[9]-1)/Nt[5],D=(Nt[8]-1)/Nt[0],Pt=(Vt[8]+1)/Vt[0],it=Ut*D,Mt=Ut*Pt,ft=ht/(-D+Pt),Dt=ft*-D;if(rt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Dt),Y.translateZ(ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Nt[10]===-1)Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let _t=Ut+ft,R=ee+ft,w=it-Dt,G=Mt+(ht-Dt),j=Q*ee/R*_t,tt=ct*ee/R*_t;Y.projectionMatrix.makePerspective(w,G,j,tt,_t,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function J(Y,rt){rt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(rt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let rt=Y.near,St=Y.far;x.texture!==null&&(x.depthNear>0&&(rt=x.depthNear),x.depthFar>0&&(St=x.depthFar)),b.near=L.near=C.near=rt,b.far=L.far=C.far=St,(P!==b.near||O!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,O=b.far),C.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,b.layers.mask=C.layers.mask|L.layers.mask;let ht=Y.parent,Nt=b.cameras;J(b,ht);for(let Vt=0;Vt<Nt.length;Vt++)J(Nt[Vt],ht);Nt.length===2?H(b,C,L):b.projectionMatrix.copy(C.projectionMatrix),ut(Y,b,ht)};function ut(Y,rt,St){St===null?Y.matrix.copy(rt.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(rt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Jr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let dt=null;function st(Y,rt){if(h=rt.getViewerPose(l||o),m=rt,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ht=!1;St.length!==b.cameras.length&&(b.cameras.length=0,ht=!0);for(let Vt=0;Vt<St.length;Vt++){let Ut=St[Vt],ee=null;if(f!==null)ee=f.getViewport(Ut);else{let ct=d.getViewSubImage(u,Ut);ee=ct.viewport,Vt===0&&(t.setRenderTargetTextures(v,ct.colorTexture,u.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(v))}let Q=S[Vt];Q===void 0&&(Q=new Le,Q.layers.enable(Vt),Q.viewport=new pe,S[Vt]=Q),Q.matrix.fromArray(Ut.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ut.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ee.x,ee.y,ee.width,ee.height),Vt===0&&(b.matrix.copy(Q.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ht===!0&&b.cameras.push(Q)}let Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let Vt=d.getDepthInformation(St[0]);Vt&&Vt.isValid&&Vt.texture&&x.init(t,Vt,i.renderState)}}for(let St=0;St<_.length;St++){let ht=y[St],Nt=_[St];ht!==null&&Nt!==void 0&&Nt.update(ht,rt,l||o)}dt&&dt(Y,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),m=null}let $t=new Sf;$t.setAnimationLoop(st),this.setAnimationLoop=function(Y){dt=Y},this.dispose=function(){}}},rs=new vn,kv=new re;function Vv(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,wf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),_=v.envMap,y=v.envMapRotation;_&&(g.envMap.value=_,rs.copy(y),rs.x*=-1,rs.y*=-1,rs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4(kv.makeRotationFromEuler(rs)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hv(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=i[v.id];y===void 0&&(m(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",g));let E=_.program;n.updateUBOMapping(v,E);let T=t.render.frame;r[v.id]!==T&&(u(v),r[v.id]=T)}function h(v){let _=d();v.__bindingPointIndex=_;let y=s.createBuffer(),E=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,E,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=i[v.id],y=v.uniforms,E=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,C=y.length;T<C;T++){let L=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,b=L.length;S<b;S++){let P=L[S];if(f(P,T,S,E)===!0){let O=P.__offset,N=Array.isArray(P.value)?P.value:[P.value],U=0;for(let z=0;z<N.length;z++){let B=N[z],$=x(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,O+U,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,U),U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,_,y,E){let T=v.value,C=_+"_"+y;if(E[C]===void 0)return typeof T=="number"||typeof T=="boolean"?E[C]=T:E[C]=T.clone(),!0;{let L=E[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return E[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function m(v){let _=v.uniforms,y=0,E=16;for(let C=0,L=_.length;C<L;C++){let S=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,P=S.length;b<P;b++){let O=S[b],N=Array.isArray(O.value)?O.value:[O.value];for(let U=0,z=N.length;U<z;U++){let B=N[U],$=x(B),H=y%E,J=H%$.boundary,ut=H+J;y+=J,ut!==0&&E-ut<$.storage&&(y+=E-ut),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=$.storage}}}let T=y%E;return T>0&&(y+=E-T),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){let _=v.target;_.removeEventListener("dispose",g);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Sa=class{constructor(t={}){let{canvas:e=Xm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=Ui,this.toneMappingExposure=1;let y=this,E=!1,T=0,C=0,L=null,S=-1,b=null,P=new pe,O=new pe,N=null,U=new Gt(0),z=0,B=e.width,$=e.height,H=1,J=null,ut=null,dt=new pe(0,0,B,$),st=new pe(0,0,B,$),$t=!1,Y=new eo,rt=!1,St=!1,ht=new re,Nt=new re,Vt=new I,Ut=new pe,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function ct(){return L===null?H:1}let D=n;function Pt(A,k){return e.getContext(A,k)}try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bh}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),D===null){let k="webgl2";if(D=Pt(k,A),D===null)throw Pt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let it,Mt,ft,Dt,_t,R,w,G,j,tt,Z,At,mt,bt,Kt,ot,Et,Bt,Ot,Tt,Qt,jt,me,F;function gt(){it=new sy(D),it.init(),jt=new Uv(D,it),Mt=new Kx(D,it,t,jt),ft=new Nv(D,it),Mt.reverseDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),Dt=new ay(D),_t=new _v,R=new Bv(D,it,ft,_t,Mt,jt,Dt),w=new ty(y),G=new iy(y),j=new pg(D),me=new $x(D,j),tt=new ry(D,j,Dt,me),Z=new ly(D,tt,j,Dt),Ot=new cy(D,Mt,R),ot=new Qx(_t),At=new vv(y,w,G,it,Mt,me,ot),mt=new Vv(y,_t),bt=new Mv,Kt=new Cv(it),Bt=new Zx(y,w,G,ft,Z,f,c),Et=new Pv(y,Z,Mt),F=new Hv(D,Dt,Mt,ft),Tt=new Jx(D,it,Dt),Qt=new oy(D,it,Dt),Dt.programs=At.programs,y.capabilities=Mt,y.extensions=it,y.properties=_t,y.renderLists=bt,y.shadowMap=Et,y.state=ft,y.info=Dt}gt();let X=new fh(y,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=it.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=it.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(B,$,!1))},this.getSize=function(A){return A.set(B,$)},this.setSize=function(A,k,W=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,$=k,e.width=Math.floor(A*H),e.height=Math.floor(k*H),W===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(B*H,$*H).floor()},this.setDrawingBufferSize=function(A,k,W){B=A,$=k,H=W,e.width=Math.floor(A*W),e.height=Math.floor(k*W),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(dt)},this.setViewport=function(A,k,W,q){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,k,W,q),ft.viewport(P.copy(dt).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(st)},this.setScissor=function(A,k,W,q){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,k,W,q),ft.scissor(O.copy(st).multiplyScalar(H).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(A){ft.setScissorTest($t=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){ut=A},this.getClearColor=function(A){return A.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(A=!0,k=!0,W=!0){let q=0;if(A){let V=!1;if(L!==null){let lt=L.texture.format;V=lt===Wh||lt===Gh||lt===Hh}if(V){let lt=L.texture.type,yt=lt===ui||lt===us||lt===$r||lt===ir||lt===Oh||lt===kh,Ct=Bt.getClearColor(),Rt=Bt.getClearAlpha(),Ht=Ct.r,Xt=Ct.g,It=Ct.b;yt?(m[0]=Ht,m[1]=Xt,m[2]=It,m[3]=Rt,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Ht,x[1]=Xt,x[2]=It,x[3]=Rt,D.clearBufferiv(D.COLOR,0,x))}else q|=D.COLOR_BUFFER_BIT}k&&(q|=D.DEPTH_BUFFER_BIT),W&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),bt.dispose(),Kt.dispose(),_t.dispose(),w.dispose(),G.dispose(),Z.dispose(),me.dispose(),F.dispose(),At.dispose(),X.dispose(),X.removeEventListener("sessionstart",Du),X.removeEventListener("sessionend",Bu),Qi.stop()};function K(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let A=Dt.autoReset,k=Et.enabled,W=Et.autoUpdate,q=Et.needsUpdate,V=Et.type;gt(),Dt.autoReset=A,Et.enabled=k,Et.autoUpdate=W,Et.needsUpdate=q,Et.type=V}function xt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qt(A){let k=A.target;k.removeEventListener("dispose",qt),Ee(k)}function Ee(A){Ge(A),_t.remove(A)}function Ge(A){let k=_t.get(A).programs;k!==void 0&&(k.forEach(function(W){At.releaseProgram(W)}),A.isShaderMaterial&&At.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,W,q,V,lt){k===null&&(k=ee);let yt=V.isMesh&&V.matrixWorld.determinant()<0,Ct=Gp(A,k,W,q,V);ft.setMaterial(q,yt);let Rt=W.index,Ht=1;if(q.wireframe===!0){if(Rt=tt.getWireframeAttribute(W),Rt===void 0)return;Ht=2}let Xt=W.drawRange,It=W.attributes.position,ie=Xt.start*Ht,ge=(Xt.start+Xt.count)*Ht;lt!==null&&(ie=Math.max(ie,lt.start*Ht),ge=Math.min(ge,(lt.start+lt.count)*Ht)),Rt!==null?(ie=Math.max(ie,0),ge=Math.min(ge,Rt.count)):It!=null&&(ie=Math.max(ie,0),ge=Math.min(ge,It.count));let ve=ge-ie;if(ve<0||ve===1/0)return;me.setup(V,q,Ct,W,Rt);let tn,oe=Tt;if(Rt!==null&&(tn=j.get(Rt),oe=Qt,oe.setIndex(tn)),V.isMesh)q.wireframe===!0?(ft.setLineWidth(q.wireframeLinewidth*ct()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(V.isLine){let Lt=q.linewidth;Lt===void 0&&(Lt=1),ft.setLineWidth(Lt*ct()),V.isLineSegments?oe.setMode(D.LINES):V.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else V.isPoints?oe.setMode(D.POINTS):V.isSprite&&oe.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)oe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))oe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Lt=V._multiDrawStarts,ni=V._multiDrawCounts,ae=V._multiDrawCount,Rn=Rt?j.get(Rt).bytesPerElement:1,Is=_t.get(q).currentProgram.getUniforms();for(let rn=0;rn<ae;rn++)Is.setValue(D,"_gl_DrawID",rn),oe.render(Lt[rn]/Rn,ni[rn])}else if(V.isInstancedMesh)oe.renderInstances(ie,ve,V.count);else if(W.isInstancedBufferGeometry){let Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ni=Math.min(W.instanceCount,Lt);oe.renderInstances(ie,ve,ni)}else oe.render(ie,ve)};function de(A,k,W){A.transparent===!0&&A.side===Dn&&A.forceSinglePass===!1?(A.side=Xe,A.needsUpdate=!0,Lo(A,k,W),A.side=Fi,A.needsUpdate=!0,Lo(A,k,W),A.side=Dn):Lo(A,k,W)}this.compile=function(A,k,W=null){W===null&&(W=A),p=Kt.get(W),p.init(k),_.push(p),W.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==W&&A.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let q=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let lt=V.material;if(lt)if(Array.isArray(lt))for(let yt=0;yt<lt.length;yt++){let Ct=lt[yt];de(Ct,W,V),q.add(Ct)}else de(lt,W,V),q.add(lt)}),_.pop(),p=null,q},this.compileAsync=function(A,k,W=null){let q=this.compile(A,k,W);return new Promise(V=>{function lt(){if(q.forEach(function(yt){_t.get(yt).currentProgram.isReady()&&q.delete(yt)}),q.size===0){V(A);return}setTimeout(lt,10)}it.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Cn=null;function ei(A){Cn&&Cn(A)}function Du(){Qi.stop()}function Bu(){Qi.start()}let Qi=new Sf;Qi.setAnimationLoop(ei),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(A){Cn=A,X.setAnimationLoop(A),A===null?Qi.stop():Qi.start()},X.addEventListener("sessionstart",Du),X.addEventListener("sessionend",Bu),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(k),k=X.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,k,L),p=Kt.get(A,_.length),p.init(k),_.push(p),Nt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(Nt),St=this.localClippingEnabled,rt=ot.init(this.clippingPlanes,St),g=bt.get(A,v.length),g.init(),v.push(g),X.enabled===!0&&X.isPresenting===!0){let lt=y.xr.getDepthSensingMesh();lt!==null&&Lc(lt,k,-1/0,y.sortObjects)}Lc(A,k,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(J,ut),Q=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Q&&Bt.addToRenderList(g,A),this.info.render.frame++,rt===!0&&ot.beginShadows();let W=p.state.shadowsArray;Et.render(W,A,k),rt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,V=g.transmissive;if(p.setupLights(),k.isArrayCamera){let lt=k.cameras;if(V.length>0)for(let yt=0,Ct=lt.length;yt<Ct;yt++){let Rt=lt[yt];Fu(q,V,A,Rt)}Q&&Bt.render(A);for(let yt=0,Ct=lt.length;yt<Ct;yt++){let Rt=lt[yt];Uu(g,A,Rt,Rt.viewport)}}else V.length>0&&Fu(q,V,A,k),Q&&Bt.render(A),Uu(g,A,k);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(y,A,k),me.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],rt===!0&&ot.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Lc(A,k,W,q){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){q&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Nt);let yt=Z.update(A),Ct=A.material;Ct.visible&&g.push(A,yt,Ct,W,Ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){let yt=Z.update(A),Ct=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ut.copy(yt.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(Nt)),Array.isArray(Ct)){let Rt=yt.groups;for(let Ht=0,Xt=Rt.length;Ht<Xt;Ht++){let It=Rt[Ht],ie=Ct[It.materialIndex];ie&&ie.visible&&g.push(A,yt,ie,W,Ut.z,It)}}else Ct.visible&&g.push(A,yt,Ct,W,Ut.z,null)}}let lt=A.children;for(let yt=0,Ct=lt.length;yt<Ct;yt++)Lc(lt[yt],k,W,q)}function Uu(A,k,W,q){let V=A.opaque,lt=A.transmissive,yt=A.transparent;p.setupLightsView(W),rt===!0&&ot.setGlobalState(y.clippingPlanes,W),q&&ft.viewport(P.copy(q)),V.length>0&&Po(V,k,W),lt.length>0&&Po(lt,k,W),yt.length>0&&Po(yt,k,W),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Fu(A,k,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ln(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?po:ui,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let lt=p.state.transmissionRenderTarget[q.id],yt=q.viewport||P;lt.setSize(yt.z,yt.w);let Ct=y.getRenderTarget();y.setRenderTarget(lt),y.getClearColor(U),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),Q&&Bt.render(W);let Rt=y.toneMapping;y.toneMapping=Ui;let Ht=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),rt===!0&&ot.setGlobalState(y.clippingPlanes,q),Po(A,W,q),R.updateMultisampleRenderTarget(lt),R.updateRenderTargetMipmap(lt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let It=0,ie=k.length;It<ie;It++){let ge=k[It],ve=ge.object,tn=ge.geometry,oe=ge.material,Lt=ge.group;if(oe.side===Dn&&ve.layers.test(q.layers)){let ni=oe.side;oe.side=Xe,oe.needsUpdate=!0,zu(ve,W,q,tn,oe,Lt),oe.side=ni,oe.needsUpdate=!0,Xt=!0}}Xt===!0&&(R.updateMultisampleRenderTarget(lt),R.updateRenderTargetMipmap(lt))}y.setRenderTarget(Ct),y.setClearColor(U,z),Ht!==void 0&&(q.viewport=Ht),y.toneMapping=Rt}function Po(A,k,W){let q=k.isScene===!0?k.overrideMaterial:null;for(let V=0,lt=A.length;V<lt;V++){let yt=A[V],Ct=yt.object,Rt=yt.geometry,Ht=q===null?yt.material:q,Xt=yt.group;Ct.layers.test(W.layers)&&zu(Ct,k,W,Rt,Ht,Xt)}}function zu(A,k,W,q,V,lt){A.onBeforeRender(y,k,W,q,V,lt),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(y,k,W,q,A,lt),V.transparent===!0&&V.side===Dn&&V.forceSinglePass===!1?(V.side=Xe,V.needsUpdate=!0,y.renderBufferDirect(W,k,q,V,A,lt),V.side=Fi,V.needsUpdate=!0,y.renderBufferDirect(W,k,q,V,A,lt),V.side=Dn):y.renderBufferDirect(W,k,q,V,A,lt),A.onAfterRender(y,k,W,q,V,lt)}function Lo(A,k,W){k.isScene!==!0&&(k=ee);let q=_t.get(A),V=p.state.lights,lt=p.state.shadowsArray,yt=V.state.version,Ct=At.getParameters(A,V.state,lt,k,W),Rt=At.getProgramCacheKey(Ct),Ht=q.programs;q.environment=A.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(A.isMeshStandardMaterial?G:w).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",qt),Ht=new Map,q.programs=Ht);let Xt=Ht.get(Rt);if(Xt!==void 0){if(q.currentProgram===Xt&&q.lightsStateVersion===yt)return ku(A,Ct),Xt}else Ct.uniforms=At.getUniforms(A),A.onBeforeCompile(Ct,y),Xt=At.acquireProgram(Ct,Rt),Ht.set(Rt,Xt),q.uniforms=Ct.uniforms;let It=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=ot.uniform),ku(A,Ct),q.needsLights=qp(A),q.lightsStateVersion=yt,q.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.directionalShadowMap.value=V.state.directionalShadowMap,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotShadowMap.value=V.state.spotShadowMap,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMap.value=V.state.pointShadowMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Xt,q.uniformsList=null,Xt}function Ou(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=Qs.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function ku(A,k){let W=_t.get(A);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Gp(A,k,W,q,V){k.isScene!==!0&&(k=ee),R.resetTextureUnits();let lt=k.fog,yt=q.isMeshStandardMaterial?k.environment:null,Ct=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:fr,Rt=(q.isMeshStandardMaterial?G:w).get(q.envMap||yt),Ht=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),It=!!W.morphAttributes.position,ie=!!W.morphAttributes.normal,ge=!!W.morphAttributes.color,ve=Ui;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ve=y.toneMapping);let tn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,oe=tn!==void 0?tn.length:0,Lt=_t.get(q),ni=p.state.lights;if(rt===!0&&(St===!0||A!==b)){let gn=A===b&&q.id===S;ot.setState(q,A,gn)}let ae=!1;q.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==ni.state.version||Lt.outputColorSpace!==Ct||V.isBatchedMesh&&Lt.batching===!1||!V.isBatchedMesh&&Lt.batching===!0||V.isBatchedMesh&&Lt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Lt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Lt.instancing===!1||!V.isInstancedMesh&&Lt.instancing===!0||V.isSkinnedMesh&&Lt.skinning===!1||!V.isSkinnedMesh&&Lt.skinning===!0||V.isInstancedMesh&&Lt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Lt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Lt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Lt.instancingMorph===!1&&V.morphTexture!==null||Lt.envMap!==Rt||q.fog===!0&&Lt.fog!==lt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ot.numPlanes||Lt.numIntersection!==ot.numIntersection)||Lt.vertexAlphas!==Ht||Lt.vertexTangents!==Xt||Lt.morphTargets!==It||Lt.morphNormals!==ie||Lt.morphColors!==ge||Lt.toneMapping!==ve||Lt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Lt.__version=q.version);let Rn=Lt.currentProgram;ae===!0&&(Rn=Lo(q,k,V));let Is=!1,rn=!1,Nr=!1,_e=Rn.getUniforms(),qn=Lt.uniforms;if(ft.useProgram(Rn.program)&&(Is=!0,rn=!0,Nr=!0),q.id!==S&&(S=q.id,rn=!0),Is||b!==A){ft.buffers.depth.getReversed()?(ht.copy(A.projectionMatrix),jm(ht),Zm(ht),_e.setValue(D,"projectionMatrix",ht)):_e.setValue(D,"projectionMatrix",A.projectionMatrix),_e.setValue(D,"viewMatrix",A.matrixWorldInverse);let Ei=_e.map.cameraPosition;Ei!==void 0&&Ei.setValue(D,Vt.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&_e.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_e.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,rn=!0,Nr=!0)}if(V.isSkinnedMesh){_e.setOptional(D,V,"bindMatrix"),_e.setOptional(D,V,"bindMatrixInverse");let gn=V.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),_e.setValue(D,"boneTexture",gn.boneTexture,R))}V.isBatchedMesh&&(_e.setOptional(D,V,"batchingTexture"),_e.setValue(D,"batchingTexture",V._matricesTexture,R),_e.setOptional(D,V,"batchingIdTexture"),_e.setValue(D,"batchingIdTexture",V._indirectTexture,R),_e.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&_e.setValue(D,"batchingColorTexture",V._colorsTexture,R));let Dr=W.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&Ot.update(V,W,Rn),(rn||Lt.receiveShadow!==V.receiveShadow)&&(Lt.receiveShadow=V.receiveShadow,_e.setValue(D,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(qn.envMap.value=Rt,qn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(qn.envMapIntensity.value=k.environmentIntensity),rn&&(_e.setValue(D,"toneMappingExposure",y.toneMappingExposure),Lt.needsLights&&Wp(qn,Nr),lt&&q.fog===!0&&mt.refreshFogUniforms(qn,lt),mt.refreshMaterialUniforms(qn,q,H,$,p.state.transmissionRenderTarget[A.id]),Qs.upload(D,Ou(Lt),qn,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Qs.upload(D,Ou(Lt),qn,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_e.setValue(D,"center",V.center),_e.setValue(D,"modelViewMatrix",V.modelViewMatrix),_e.setValue(D,"normalMatrix",V.normalMatrix),_e.setValue(D,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let gn=q.uniformsGroups;for(let Ei=0,Ti=gn.length;Ei<Ti;Ei++){let Vu=gn[Ei];F.update(Vu,Rn),F.bind(Vu,Rn)}}return Rn}function Wp(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function qp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,k,W){_t.get(A.texture).__webglTexture=k,_t.get(A.depthTexture).__webglTexture=W;let q=_t.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){let W=_t.get(A);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,W=0){L=A,T=k,C=W;let q=!0,V=null,lt=!1,yt=!1;if(A){let Rt=_t.get(A);if(Rt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Rt.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Rt.__hasExternalTextures)R.rebindTextures(A,_t.get(A.texture).__webglTexture,_t.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let It=A.depthTexture;if(Rt.__boundDepthTexture!==It){if(It!==null&&_t.has(It)&&(A.width!==It.image.width||A.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}let Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(yt=!0);let Xt=_t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[k])?V=Xt[k][W]:V=Xt[k],lt=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?V=_t.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?V=Xt[W]:V=Xt,P.copy(A.viewport),O.copy(A.scissor),N=A.scissorTest}else P.copy(dt).multiplyScalar(H).floor(),O.copy(st).multiplyScalar(H).floor(),N=$t;if(ft.bindFramebuffer(D.FRAMEBUFFER,V)&&q&&ft.drawBuffers(A,V),ft.viewport(P),ft.scissor(O),ft.setScissorTest(N),lt){let Rt=_t.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Rt.__webglTexture,W)}else if(yt){let Rt=_t.get(A.texture),Ht=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.__webglTexture,W||0,Ht)}S=-1},this.readRenderTargetPixels=function(A,k,W,q,V,lt,yt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){ft.bindFramebuffer(D.FRAMEBUFFER,Ct);try{let Rt=A.texture,Ht=Rt.format,Xt=Rt.type;if(!Mt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-q&&W>=0&&W<=A.height-V&&D.readPixels(k,W,q,V,jt.convert(Ht),jt.convert(Xt),lt)}finally{let Rt=L!==null?_t.get(L).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(A,k,W,q,V,lt,yt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){let Rt=A.texture,Ht=Rt.format,Xt=Rt.type;if(!Mt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-q&&W>=0&&W<=A.height-V){ft.bindFramebuffer(D.FRAMEBUFFER,Ct);let It=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.bufferData(D.PIXEL_PACK_BUFFER,lt.byteLength,D.STREAM_READ),D.readPixels(k,W,q,V,jt.convert(Ht),jt.convert(Xt),0);let ie=L!==null?_t.get(L).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,ie);let ge=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ym(D,ge,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,lt),D.deleteBuffer(It),D.deleteSync(ge),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,W=0){A.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);let q=Math.pow(2,-W),V=Math.floor(A.image.width*q),lt=Math.floor(A.image.height*q),yt=k!==null?k.x:0,Ct=k!==null?k.y:0;R.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,yt,Ct,V,lt),ft.unbindTexture()},this.copyTextureToTexture=function(A,k,W=null,q=null,V=0){A.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],k=arguments[2],V=arguments[3]||0,W=null);let lt,yt,Ct,Rt,Ht,Xt,It,ie,ge,ve=A.isCompressedTexture?A.mipmaps[V]:A.image;W!==null?(lt=W.max.x-W.min.x,yt=W.max.y-W.min.y,Ct=W.isBox3?W.max.z-W.min.z:1,Rt=W.min.x,Ht=W.min.y,Xt=W.isBox3?W.min.z:0):(lt=ve.width,yt=ve.height,Ct=ve.depth||1,Rt=0,Ht=0,Xt=0),q!==null?(It=q.x,ie=q.y,ge=q.z):(It=0,ie=0,ge=0);let tn=jt.convert(k.format),oe=jt.convert(k.type),Lt;k.isData3DTexture?(R.setTexture3D(k,0),Lt=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(R.setTexture2DArray(k,0),Lt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(k,0),Lt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let ni=D.getParameter(D.UNPACK_ROW_LENGTH),ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Rn=D.getParameter(D.UNPACK_SKIP_PIXELS),Is=D.getParameter(D.UNPACK_SKIP_ROWS),rn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xt);let Nr=A.isDataArrayTexture||A.isData3DTexture,_e=k.isDataArrayTexture||k.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let qn=_t.get(A),Dr=_t.get(k),gn=_t.get(qn.__renderTarget),Ei=_t.get(Dr.__renderTarget);ft.bindFramebuffer(D.READ_FRAMEBUFFER,gn.__webglFramebuffer),ft.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Ti=0;Ti<Ct;Ti++)Nr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.get(A).__webglTexture,V,Xt+Ti),A.isDepthTexture?(_e&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.get(k).__webglTexture,V,ge+Ti),D.blitFramebuffer(Rt,Ht,lt,yt,It,ie,lt,yt,D.DEPTH_BUFFER_BIT,D.NEAREST)):_e?D.copyTexSubImage3D(Lt,V,It,ie,ge+Ti,Rt,Ht,lt,yt):D.copyTexSubImage2D(Lt,V,It,ie,ge+Ti,Rt,Ht,lt,yt);ft.bindFramebuffer(D.READ_FRAMEBUFFER,null),ft.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _e?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Lt,V,It,ie,ge,lt,yt,Ct,tn,oe,ve.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Lt,V,It,ie,ge,lt,yt,Ct,tn,ve.data):D.texSubImage3D(Lt,V,It,ie,ge,lt,yt,Ct,tn,oe,ve):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,V,It,ie,lt,yt,tn,oe,ve.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,V,It,ie,ve.width,ve.height,tn,ve.data):D.texSubImage2D(D.TEXTURE_2D,V,It,ie,lt,yt,tn,oe,ve);D.pixelStorei(D.UNPACK_ROW_LENGTH,ni),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Is),D.pixelStorei(D.UNPACK_SKIP_IMAGES,rn),V===0&&k.generateMipmaps&&D.generateMipmap(Lt),ft.unbindTexture()},this.copyTextureToTexture3D=function(A,k,W=null,q=null,V=0){return A.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,A=arguments[2],k=arguments[3],V=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,W,q,V)},this.initRenderTarget=function(A){_t.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),ft.unbindTexture()},this.resetState=function(){T=0,C=0,L=null,ft.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Ea=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ph=class extends Je{constructor(t=null,e=1,n=1,i,r,o,a,c,l=cn,h=cn,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var io=class extends Oe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qs=new re,Gd=new re,ta=[],Wd=new di,Gv=new re,Or=new zt,kr=new ki,cr=class extends zt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new io(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),Wd.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(Wd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qs),kr.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(kr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),t.ray.intersectsSphere(kr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qs),Gd.multiplyMatrices(n,qs),Or.matrixWorld=Gd,Or.raycast(t,ta);for(let o=0,a=ta.length;o<a;o++){let c=ta[o];c.instanceId=r,c.object=this,e.push(c)}ta.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new io(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ph(new Float32Array(i*this.count),i,this.count,Vh,jn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var so=class extends Vi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ta=new I,Aa=new I,qd=new re,Vr=new Qr,ea=new ki,al=new I,Xd=new I,mh=class extends ze{constructor(t=new Ne,e=new so){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ta.fromBufferAttribute(e,i-1),Aa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ta.distanceTo(Aa);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;qd.copy(i).invert(),Vr.copy(t.ray).applyMatrix4(qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=h.getX(x),v=h.getX(x+1),_=na(this,t,Vr,c,p,v);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(f),p=na(this,t,Vr,c,x,g);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=na(this,t,Vr,c,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=na(this,t,Vr,c,m-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function na(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Ta.fromBufferAttribute(o,i),Aa.fromBufferAttribute(o,r),e.distanceSqToSegment(Ta,Aa,al,Xd)>n)return;al.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(al);if(!(c<t.near||c>t.far))return{distance:c,point:Xd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Yd=new I,jd=new I,Ca=class extends mh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Yd.fromBufferAttribute(e,i),jd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yd.distanceTo(jd);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ds=class extends Je{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new at:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,i=[],r=[],o=[],a=new I,c=new re;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Pe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Pe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ro=class extends _n{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new at){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},gh=class extends ro{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jh(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var ia=new I,cl=new jh,ll=new jh,hl=new jh,oo=class extends _n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(ia.subVectors(i[0],i[1]).add(i[0]),l=ia);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ia.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ia),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),cl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,m,x,g),ll.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,m,x,g),hl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ll.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),hl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(cl.calc(c),ll.calc(c),hl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zd(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Wv(s,t){let e=1-s;return e*e*t}function qv(s,t){return 2*(1-s)*s*t}function Xv(s,t){return s*s*t}function Yr(s,t,e,n){return Wv(s,t)+qv(s,e)+Xv(s,n)}function Yv(s,t){let e=1-s;return e*e*e*t}function jv(s,t){let e=1-s;return 3*e*e*s*t}function Zv(s,t){return 3*(1-s)*s*s*t}function $v(s,t){return s*s*s*t}function jr(s,t,e,n,i){return Yv(s,t)+jv(s,e)+Zv(s,n)+$v(s,i)}var Ra=class extends _n{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,i.x,r.x,o.x,a.x),jr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xh=class extends _n{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,i.x,r.x,o.x,a.x),jr(t,i.y,r.y,o.y,a.y),jr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ia=class extends _n{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yh=class extends _n{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pa=class extends _n{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Yr(t,i.x,r.x,o.x),Yr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},La=class extends _n{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Yr(t,i.x,r.x,o.x),Yr(t,i.y,r.y,o.y),Yr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Na=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Zd(a,c.x,l.x,h.x,d.x),Zd(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new at().fromArray(i))}return this}},Da=Object.freeze({__proto__:null,ArcCurve:gh,CatmullRomCurve3:oo,CubicBezierCurve:Ra,CubicBezierCurve3:xh,EllipseCurve:ro,LineCurve:Ia,LineCurve3:yh,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:La,SplineCurve:Na}),vh=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Da[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Da[i.type]().fromJSON(i))}return this}},Hi=class extends vh{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ia(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Pa(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Ra(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Na(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let l=new ro(t,e,n,i,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ba=class s extends Ne{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Pe(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,d=new I,u=new at,f=new I,m=new I,x=new I,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=e;v++){let _=n+v*h*i,y=Math.sin(_),E=Math.cos(_);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*y,d.y=t[T].y,d.z=t[T].x*E,o.push(d.x,d.y,d.z),u.x=v/e,u.y=T/(t.length-1),a.push(u.x,u.y);let C=c[3*T+0]*y,L=c[3*T+1],S=c[3*T+0]*E;l.push(C,L,S)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){let y=_+v*t.length,E=y,T=y+t.length,C=y+t.length+1,L=y+1;r.push(E,T,L),r.push(C,L,T)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var lr=class s extends Ne{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],m=0,x=[],g=n/2,p=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function v(){let y=new I,E=new I,T=0,C=(e-t)/n;for(let L=0;L<=r;L++){let S=[],b=L/r,P=b*(e-t)+t;for(let O=0;O<=i;O++){let N=O/i,U=N*c+a,z=Math.sin(U),B=Math.cos(U);E.x=P*z,E.y=-b*n+g,E.z=P*B,d.push(E.x,E.y,E.z),y.set(z,C,B).normalize(),u.push(y.x,y.y,y.z),f.push(N,1-b),S.push(m++)}x.push(S)}for(let L=0;L<i;L++)for(let S=0;S<r;S++){let b=x[S][L],P=x[S+1][L],O=x[S+1][L+1],N=x[S][L+1];(t>0||S!==0)&&(h.push(b,P,N),T+=3),(e>0||S!==r-1)&&(h.push(P,O,N),T+=3)}l.addGroup(p,T,0),p+=T}function _(y){let E=m,T=new at,C=new I,L=0,S=y===!0?t:e,b=y===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,g*b,0),u.push(0,b,0),f.push(.5,.5),m++;let P=m;for(let O=0;O<=i;O++){let U=O/i*c+a,z=Math.cos(U),B=Math.sin(U);C.x=S*B,C.y=g*b,C.z=S*z,d.push(C.x,C.y,C.z),u.push(0,b,0),T.x=z*.5+.5,T.y=B*.5*b+.5,f.push(T.x,T.y),m++}for(let O=0;O<i;O++){let N=E+O,U=P+O;y===!0?h.push(U,U+1,N):h.push(U+1,U,N),L+=3}l.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var sa=new I,ra=new I,ul=new I,oa=new Di,Ua=class extends Ne{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Js*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:x,b:g,c:p}=oa;if(x.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),oa.getNormal(ul),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){let _=(v+1)%3,y=d[v],E=d[_],T=oa[h[v]],C=oa[h[_]],L=`${y}_${E}`,S=`${E}_${y}`;S in u&&u[S]?(ul.dot(u[S].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),u[S]=null):L in u||(u[L]={index0:l[v],index1:l[_],normal:ul.clone()})}}for(let m in u)if(u[m]){let{index0:x,index1:g}=u[m];sa.fromBufferAttribute(a,x),ra.fromBufferAttribute(a,g),f.push(sa.x,sa.y,sa.z),f.push(ra.x,ra.y,ra.z)}this.setAttribute("position",new ce(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},fs=class extends Hi{constructor(t){super(t),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Hi().fromJSON(i))}return this}},Jv={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Rf(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,u,f;if(n&&(r=n_(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let m=e;m<i;m+=e)d=s[m],u=s[m+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return ao(r,o,e,a,c,f,0),o}};function Rf(s,t,e,n,i){let r,o;if(i===f_(s,t,e,n)>0)for(r=t;r<e;r+=n)o=$d(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=$d(r,s[r],s[r+1],o);return o&&qa(o,o.next)&&(lo(o),o=o.next),o}function ps(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(qa(e,e.next)||Se(e.prev,e,e.next)===0)){if(lo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ao(s,t,e,n,i,r,o){if(!s)return;!o&&r&&a_(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Qv(s,n,i,r):Kv(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),lo(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=t_(ps(s),t,e),ao(s,t,e,n,i,r,2)):o===2&&e_(s,t,e,n,i,r):ao(ps(s),t,e,n,i,r,1);break}}}function Kv(s){let t=s.prev,e=s,n=s.next;if(Se(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,u=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=d&&m.y<=f&&js(i,a,r,c,o,l,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Qv(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Se(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,h=i.y,d=r.y,u=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<d?h<u?h:u:d<u?d:u,x=a>c?a>l?a:l:c>l?c:l,g=h>d?h>u?h:u:d>u?d:u,p=_h(f,m,t,e,n),v=_h(x,g,t,e,n),_=s.prevZ,y=s.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&js(a,h,c,d,l,u,_.x,_.y)&&Se(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&js(a,h,c,d,l,u,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&js(a,h,c,d,l,u,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&js(a,h,c,d,l,u,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function t_(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!qa(i,r)&&If(i,n,n.next,r)&&co(i,r)&&co(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),lo(n),lo(n.next),n=s=r),n=n.next}while(n!==s);return ps(n)}function e_(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&h_(o,a)){let c=Pf(o,a);o=ps(o,o.next),c=ps(c,c.next),ao(o,t,e,n,i,r,0),ao(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function n_(s,t,e,n){let i=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Rf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(l_(l));for(i.sort(i_),r=0;r<i.length;r++)e=s_(i[r],e);return e}function i_(s,t){return s.x-t.x}function s_(s,t){let e=r_(s,t);if(!e)return t;let n=Pf(e,s);return ps(n,n.next),ps(e,e.next)}function r_(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,d;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&js(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),co(e,s)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&o_(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function o_(s,t){return Se(s.prev,s,t.prev)<0&&Se(t.next,s,s.next)<0}function a_(s,t,e,n){let i=s;do i.z===0&&(i.z=_h(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,c_(i)}function c_(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function _h(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function l_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function js(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function h_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!u_(s,t)&&(co(s,t)&&co(t,s)&&d_(s,t)&&(Se(s.prev,s,t.prev)||Se(s,t.prev,t))||qa(s,t)&&Se(s.prev,s,s.next)>0&&Se(t.prev,t,t.next)>0)}function Se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function qa(s,t){return s.x===t.x&&s.y===t.y}function If(s,t,e,n){let i=ca(Se(s,t,e)),r=ca(Se(s,t,n)),o=ca(Se(e,n,s)),a=ca(Se(e,n,t));return!!(i!==r&&o!==a||i===0&&aa(s,e,t)||r===0&&aa(s,n,t)||o===0&&aa(e,s,n)||a===0&&aa(e,t,n))}function aa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ca(s){return s>0?1:s<0?-1:0}function u_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&If(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function co(s,t){return Se(s.prev,s,s.next)<0?Se(s,t,s.next)>=0&&Se(s,s.prev,t)>=0:Se(s,t,s.prev)<0||Se(s,s.next,t)<0}function d_(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Pf(s,t){let e=new bh(s.i,s.x,s.y),n=new bh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $d(s,t,e,n){let i=new bh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function lo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function f_(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Zr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Jd(t),Kd(n,t);let o=t.length;e.forEach(Jd);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Kd(n,e[c]);let a=Jv.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Jd(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Kd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var hr=class s extends Ne{constructor(t=new fs([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ce(i,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:p_,_,y=!1,E,T,C,L;p&&(_=p.getSpacedPoints(h),y=!0,u=!1,E=p.computeFrenetFrames(h,!1),T=new I,C=new I,L=new I),u||(g=0,f=0,m=0,x=0);let S=a.extractPoints(l),b=S.shape,P=S.holes;if(!Zr.isClockWise(b)){b=b.reverse();for(let Q=0,ct=P.length;Q<ct;Q++){let D=P[Q];Zr.isClockWise(D)&&(P[Q]=D.reverse())}}let N=Zr.triangulateShape(b,P),U=b;for(let Q=0,ct=P.length;Q<ct;Q++){let D=P[Q];b=b.concat(D)}function z(Q,ct,D){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ct,D)}let B=b.length,$=N.length;function H(Q,ct,D){let Pt,it,Mt,ft=Q.x-ct.x,Dt=Q.y-ct.y,_t=D.x-Q.x,R=D.y-Q.y,w=ft*ft+Dt*Dt,G=ft*R-Dt*_t;if(Math.abs(G)>Number.EPSILON){let j=Math.sqrt(w),tt=Math.sqrt(_t*_t+R*R),Z=ct.x-Dt/j,At=ct.y+ft/j,mt=D.x-R/tt,bt=D.y+_t/tt,Kt=((mt-Z)*R-(bt-At)*_t)/(ft*R-Dt*_t);Pt=Z+ft*Kt-Q.x,it=At+Dt*Kt-Q.y;let ot=Pt*Pt+it*it;if(ot<=2)return new at(Pt,it);Mt=Math.sqrt(ot/2)}else{let j=!1;ft>Number.EPSILON?_t>Number.EPSILON&&(j=!0):ft<-Number.EPSILON?_t<-Number.EPSILON&&(j=!0):Math.sign(Dt)===Math.sign(R)&&(j=!0),j?(Pt=-Dt,it=ft,Mt=Math.sqrt(w)):(Pt=ft,it=Dt,Mt=Math.sqrt(w/2))}return new at(Pt/Mt,it/Mt)}let J=[];for(let Q=0,ct=U.length,D=ct-1,Pt=Q+1;Q<ct;Q++,D++,Pt++)D===ct&&(D=0),Pt===ct&&(Pt=0),J[Q]=H(U[Q],U[D],U[Pt]);let ut=[],dt,st=J.concat();for(let Q=0,ct=P.length;Q<ct;Q++){let D=P[Q];dt=[];for(let Pt=0,it=D.length,Mt=it-1,ft=Pt+1;Pt<it;Pt++,Mt++,ft++)Mt===it&&(Mt=0),ft===it&&(ft=0),dt[Pt]=H(D[Pt],D[Mt],D[ft]);ut.push(dt),st=st.concat(dt)}for(let Q=0;Q<g;Q++){let ct=Q/g,D=f*Math.cos(ct*Math.PI/2),Pt=m*Math.sin(ct*Math.PI/2)+x;for(let it=0,Mt=U.length;it<Mt;it++){let ft=z(U[it],J[it],Pt);ht(ft.x,ft.y,-D)}for(let it=0,Mt=P.length;it<Mt;it++){let ft=P[it];dt=ut[it];for(let Dt=0,_t=ft.length;Dt<_t;Dt++){let R=z(ft[Dt],dt[Dt],Pt);ht(R.x,R.y,-D)}}}let $t=m+x;for(let Q=0;Q<B;Q++){let ct=u?z(b[Q],st[Q],$t):b[Q];y?(C.copy(E.normals[0]).multiplyScalar(ct.x),T.copy(E.binormals[0]).multiplyScalar(ct.y),L.copy(_[0]).add(C).add(T),ht(L.x,L.y,L.z)):ht(ct.x,ct.y,0)}for(let Q=1;Q<=h;Q++)for(let ct=0;ct<B;ct++){let D=u?z(b[ct],st[ct],$t):b[ct];y?(C.copy(E.normals[Q]).multiplyScalar(D.x),T.copy(E.binormals[Q]).multiplyScalar(D.y),L.copy(_[Q]).add(C).add(T),ht(L.x,L.y,L.z)):ht(D.x,D.y,d/h*Q)}for(let Q=g-1;Q>=0;Q--){let ct=Q/g,D=f*Math.cos(ct*Math.PI/2),Pt=m*Math.sin(ct*Math.PI/2)+x;for(let it=0,Mt=U.length;it<Mt;it++){let ft=z(U[it],J[it],Pt);ht(ft.x,ft.y,d+D)}for(let it=0,Mt=P.length;it<Mt;it++){let ft=P[it];dt=ut[it];for(let Dt=0,_t=ft.length;Dt<_t;Dt++){let R=z(ft[Dt],dt[Dt],Pt);y?ht(R.x,R.y+_[h-1].y,_[h-1].x+D):ht(R.x,R.y,d+D)}}}Y(),rt();function Y(){let Q=i.length/3;if(u){let ct=0,D=B*ct;for(let Pt=0;Pt<$;Pt++){let it=N[Pt];Nt(it[2]+D,it[1]+D,it[0]+D)}ct=h+g*2,D=B*ct;for(let Pt=0;Pt<$;Pt++){let it=N[Pt];Nt(it[0]+D,it[1]+D,it[2]+D)}}else{for(let ct=0;ct<$;ct++){let D=N[ct];Nt(D[2],D[1],D[0])}for(let ct=0;ct<$;ct++){let D=N[ct];Nt(D[0]+B*h,D[1]+B*h,D[2]+B*h)}}n.addGroup(Q,i.length/3-Q,0)}function rt(){let Q=i.length/3,ct=0;St(U,ct),ct+=U.length;for(let D=0,Pt=P.length;D<Pt;D++){let it=P[D];St(it,ct),ct+=it.length}n.addGroup(Q,i.length/3-Q,1)}function St(Q,ct){let D=Q.length;for(;--D>=0;){let Pt=D,it=D-1;it<0&&(it=Q.length-1);for(let Mt=0,ft=h+g*2;Mt<ft;Mt++){let Dt=B*Mt,_t=B*(Mt+1),R=ct+Pt+Dt,w=ct+it+Dt,G=ct+it+_t,j=ct+Pt+_t;Vt(R,w,G,j)}}}function ht(Q,ct,D){c.push(Q),c.push(ct),c.push(D)}function Nt(Q,ct,D){Ut(Q),Ut(ct),Ut(D);let Pt=i.length/3,it=v.generateTopUV(n,i,Pt-3,Pt-2,Pt-1);ee(it[0]),ee(it[1]),ee(it[2])}function Vt(Q,ct,D,Pt){Ut(Q),Ut(ct),Ut(Pt),Ut(ct),Ut(D),Ut(Pt);let it=i.length/3,Mt=v.generateSideWallUV(n,i,it-6,it-3,it-2,it-1);ee(Mt[0]),ee(Mt[1]),ee(Mt[3]),ee(Mt[1]),ee(Mt[2]),ee(Mt[3])}function Ut(Q){i.push(c[Q*3+0]),i.push(c[Q*3+1]),i.push(c[Q*3+2])}function ee(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return m_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Da[i.type]().fromJSON(i)),new s(n,t.options)}},p_={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new at(r,o),new at(a,c),new at(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],m=t[i*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new at(o,1-c),new at(l,1-d),new at(u,1-m),new at(x,1-p)]:[new at(a,1-c),new at(h,1-d),new at(f,1-m),new at(g,1-p)]}};function m_(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ur=class s extends Ne{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new I,u=new I,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],_=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){let T=E/e;d.x=-t*Math.cos(i+T*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(i+T*r)*Math.sin(o+_*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(T+y,1-_),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let _=h[p][v+1],y=h[p][v],E=h[p+1][v],T=h[p+1][v+1];(p!==0||o>0)&&f.push(_,y,T),(p!==n-1||c<Math.PI)&&f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new ce(m,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bn=class s extends Ne{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new I,d=new I,u=new I;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let x=m/i*r,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(x),d.y=(t+e*Math.cos(g))*Math.sin(x),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;o.push(x,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Fa=class s extends Ne{constructor(t=new La(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new at,h=new I,d=[],u=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function x(){for(let _=0;_<e;_++)g(_);g(r===!1?e:0),v(),p()}function g(_){h=t.getPointAt(_/e,h);let y=o.normals[_],E=o.binormals[_];for(let T=0;T<=i;T++){let C=T/i*Math.PI*2,L=Math.sin(C),S=-Math.cos(C);c.x=S*y.x+L*E.x,c.y=S*y.y+L*E.y,c.z=S*y.z+L*E.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=i;y++){let E=(i+1)*(_-1)+(y-1),T=(i+1)*_+(y-1),C=(i+1)*_+y,L=(i+1)*(_-1)+y;m.push(E,T,L),m.push(T,C,L)}}function v(){for(let _=0;_<=e;_++)for(let y=0;y<=i;y++)l.x=_/e,l.y=y/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Da[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ye=class extends Vi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ho=class extends Ye{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function la(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function g_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var dr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mh=class extends dr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xu,endingEnd:Xu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yu:r=t,a=2*e-n;break;case ju:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yu:o=t,c=2*n-e;break;case ju:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,_=(-1-f)*g+(1.5+f)*x+.5*m,y=f*g-f*x;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+v*o[l+E]+_*o[c+E]+y*o[d+E];return r}},wh=class extends dr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Sh=class extends dr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},On=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=la(e,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:la(t.times,Array),values:la(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Mh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ma:e=this.InterpolantFactoryMethodDiscrete;break;case Kl:e=this.InterpolantFactoryMethodLinear;break;case Dc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return Kl;case this.InterpolantFactoryMethodSmooth:return Dc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&g_(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Dc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Kl;var ms=class extends On{constructor(t,e,n){super(t,e,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=ma;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Eh=class extends On{};Eh.prototype.ValueTypeName="color";var Th=class extends On{};Th.prototype.ValueTypeName="number";var Ah=class extends dr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)yn.slerpFlat(r,0,o,l-a,o,l,c);return r}},za=class extends On{InterpolantFactoryMethodLinear(t){return new Ah(this.times,this.values,this.getValueSize(),t)}};za.prototype.ValueTypeName="quaternion";za.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends On{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ma;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ch=class extends On{};Ch.prototype.ValueTypeName="vector";var Qd={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Rh=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],m=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},x_=new Rh,uo=class{constructor(t){this.manager=t!==void 0?t:x_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ih=class extends uo{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Qd.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=Kr("img");function c(){h(),Qd.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){h(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var Oa=class extends uo{constructor(t){super(t)}load(t,e,n,i){let r=new Je,o=new Ih(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},fo=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},xs=class extends fo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},dl=new re,tf=new I,ef=new I,ka=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;tf.setFromMatrixPosition(t.matrixWorld),e.position.copy(tf),ef.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ef),e.updateMatrixWorld(),dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var nf=new re,Hr=new I,fl=new I,Ph=class extends ka{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hr),fl.copy(n.position),fl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fl),n.updateMatrixWorld(),i.makeTranslation(-Hr.x,-Hr.y,-Hr.z),nf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nf)}},Gi=class extends fo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ph}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Lh=class extends ka{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fi=class extends fo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Lh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Zh="\\[\\]\\.:\\/",y_=new RegExp("["+Zh+"]","g"),$h="[^"+Zh+"]",v_="[^"+Zh.replace("\\.","")+"]",__=/((?:WC+[\/:])*)/.source.replace("WC",$h),b_=/(WCOD+)?/.source.replace("WCOD",v_),M_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),w_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),S_=new RegExp("^"+__+b_+M_+w_+"$"),E_=["material","materials","bones","map"],Nh=class{constructor(t,e,n){let i=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(y_,"")}static parseTrackName(t){let e=S_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);E_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Nh;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dM=new Float32Array(1);var sf=new re,Va=class{constructor(t,e,n=0,i=1/0){this.ray=new Qr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new to,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sf),this}intersectObject(t,e=!0,n=[]){return Dh(t,this,n,e),n.sort(rf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Dh(t[i],this,n,e);return n.sort(rf),n}};function rf(s,t){return s.distance-t.distance}function Dh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Dh(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);function Xa(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Ne,l=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+h);h+=s[u].attributes.position.count}c.setIndex(d)}for(let h in r){let d=Lf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let m=Lf(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Lf(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Oe(o,e,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let u=0,f=h.count;u<f;u++)for(let m=0;m<e;m++){let x=h.getComponent(u,m);a.setComponent(u+d,m,x)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var Nf=new Map,T_=new no({depthPacking:qh});function en(s,t=!0){s.updateMatrixWorld(!0);let e=s.matrixWorld.clone().invert(),n=[],i=[];s.traverse(c=>{if(!c.isMesh||c.layers.mask===2||(c.castShadow=!1,c.material.isMeshBasicMaterial||c.userData.noShadowProxy))return;let l=new re().multiplyMatrices(e,c.matrixWorld);i.push(c.geometry.uuid+":"+l.elements.map(u=>u.toFixed(4)).join(","));let h=new Ne;h.setAttribute("position",c.geometry.attributes.position.clone()),c.geometry.index&&h.setIndex(c.geometry.index.clone());let d=h.index?h.toNonIndexed():h;d.applyMatrix4(l),d!==h&&h.dispose(),n.push(d)});let r=i.join("|"),o=t?Nf.get(r):null;o||(o=Xa(n),t&&Nf.set(r,o));for(let c of n)c.dispose();let a=new zt(o,T_);return a.layers.set(1),a.castShadow=!0,a.receiveShadow=!1,a.userData.shadowProxy=!0,a}function Ya(s,t){let e=new Map;function n(i){let r=new t;if(i==="housing"){r.box(2.35,.19,1.65,s.teal,[0,.05,0],void 0,.06);for(let o of[-1.09,1.09])r.box(.17,1.06,1.65,s.teal,[o,.54,0],void 0,.065),r.box(.12,.11,1.7,s.steel,[o,1.08,0],void 0,.025);for(let o of[-.75,.75]){r.box(2.18,.32,.16,s.teal,[0,.24,o],void 0,.06);for(let a of[-.48,.48])r.ring(.23,.1,s.teal,[a,.67,o]),r.ring(.165,.035,s.brass,[a,.67,o+Math.sign(o)*.07]);r.box(2.2,.12,.17,s.steel,[0,1.08,o],void 0,.025)}for(let o of[-.94,.94])for(let a of[-.61,.61])r.cyl(.075,.075,.04,s.iron,[o,1.16,a],void 0,12),r.box(.36,.16,.4,s.iron,[o,-.09,a],void 0,.04),r.cyl(.06,.06,.018,s.black,[o,-.002,a],void 0,12);for(let o of[-1.185,1.185])for(let a of[-.5,.5])r.cyl(.05,.05,.04,s.brass,[o,.39,a],[0,0,Math.PI/2],6);for(let o of[-.65,.65])r.cyl(.09,.09,.42,s.brass,[o,1.15,-.81],[0,0,Math.PI/2],20),r.box(.22,.18,.14,s.teal,[o,1.03,-.78],void 0,.025);r.box(.58,.25,.04,s.brass,[0,.26,.85],void 0,.025);for(let o=0;o<3;o++)r.box(.31,.018,.01,s.iron,[0,.2+o*.05,.875],void 0,.004)}else if(i==="shaft"){r.cyl(.12,.12,1.98,s.steel,void 0,[Math.PI/2,0,0],28);for(let o of[-.72,.72])r.cyl(.19,.19,.17,s.iron,[0,0,o],[Math.PI/2,0,0],28),r.ring(.155,.023,s.brass,[0,0,o+Math.sign(o)*.09]);r.box(.065,.06,.42,s.brass,[0,.12,0],void 0,.015)}else if(i==="cog"){let o=new fs,a=20;for(let h=0;h<a*4;h++){let d=h*Math.PI*2/(a*4),u=h%4===1||h%4===2?.5:.44;h?o.lineTo(Math.cos(d)*u,Math.sin(d)*u):o.moveTo(Math.cos(d)*u,Math.sin(d)*u)}o.closePath();let c=new Hi;c.absarc(0,0,.125,0,Math.PI*2,!0),o.holes.push(c);let l=new hr(o,{depth:.23,bevelEnabled:!0,bevelThickness:.018,bevelSize:.015,bevelSegments:2,curveSegments:20});l.translate(0,0,-.115),r.add(l,s.brass),r.ring(.18,.04,s.steel,[0,0,.14]);for(let h=0;h<6;h++){let d=h*Math.PI/3;r.cyl(.04,.04,.018,s.iron,[Math.cos(d)*.31,Math.sin(d)*.31,.145],[Math.PI/2,0,0],12)}}else if(i==="cover"){r.box(2.35,.16,1.65,s.ivory,[0,0,0],void 0,.1),r.box(.83,.11,.54,s.ivory,[0,.12,0],void 0,.055),r.box(.5,.016,.24,s.brass,[0,.182,0],void 0,.018);for(let o=0;o<3;o++)r.box(.25,.009,.012,s.iron,[0,.193,-.06+o*.06],void 0,.002);for(let o of[-.94,.94])for(let a of[-.61,.61])r.cyl(.082,.082,.015,s.iron,[o,.09,a],void 0,16),r.cyl(.046,.046,.017,s.black,[o,.1,a],void 0,12);for(let o=0;o<5;o++)r.box(.06,.07,.5,s.teal,[-.65+o*.11,.115,0],void 0,.01)}return r.build()}return i=>(e.has(i)||e.set(i,n(i)),e.get(i).clone(!0))}var le=(s,t,e,n=.95,i={x:0,y:0,z:0})=>({type:s,x:t,z:e,y:n,rotation:i});var kn={name:"\u0421\u0442\u0430\u043D\u0446\u0438\u044F \xB7 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440",assembly:!0,seed:361,needs:{housing:1,shaft:2,cog:2,cover:1},note:"\u0414\u043E\u0441\u0442\u0430\u043D\u044C \u043A\u043E\u0440\u043F\u0443\u0441, \u0434\u0432\u0430 \u0432\u0430\u043B\u0430, \u0434\u0432\u0435 \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u0438 \u0438 \u043A\u0440\u044B\u0448\u043A\u0443. \u0412\u0441\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\u0430 \u2014 \u0432 \u0433\u043E\u043B\u0443\u0431\u043E\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A \u0441\u043F\u0440\u0430\u0432\u0430. \u041B\u0438\u0448\u043D\u0438\u0439 \u043B\u043E\u043C \u043C\u043E\u0436\u043D\u043E \u0443\u0431\u0440\u0430\u0442\u044C \u0432 \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439. \u0417\u0430\u0442\u0435\u043C \u0441\u043E\u0431\u0435\u0440\u0451\u043C \u0443\u0437\u0435\u043B \u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u0435.",hint:"WASD \u2014 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435, Q / E \u2014 \u0432\u044B\u0441\u043E\u0442\u0430, \u043F\u0440\u043E\u0431\u0435\u043B \u2014 \u043C\u0430\u0433\u043D\u0438\u0442. \u041D\u0443\u0436\u043D\u044B\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0441\u0432\u0435\u0440\u0445\u0443. \u0412\u0435\u0440\u0441\u0442\u0430\u043A \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u043A\u0430\u0436\u0434\u0443\u044E \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0443\u044E \u0434\u0435\u0442\u0430\u043B\u044C.",layout:[le("housing",-1.8,-1.65,.8),le("shaft",1.25,-1.7,.8,{x:1.15,y:.5,z:.1}),le("shaft",-2.5,.45,.8,{x:.9,y:-.5,z:.1}),le("cog",.05,.45,.7,{x:1.4,y:.1,z:0}),le("cog",2.7,.4,.8,{x:1.5,y:0,z:.1}),le("cover",.3,-3,.8,{x:.05,y:.2,z:.1}),le("engine",-3.5,-2.8),le("pipe",-.15,-1.3),le("gear",2.9,-2),le("tire",3.65,-3),le("bolt",-2.8,1.7),le("pipe",-1.3,1.6),le("gear",1.65,1.5),le("tire",.2,2.5),le("bolt",-3.5,-.5),le("gear",-4.4,-2.2),le("pipe",4.4,-1.4),le("bolt",3.3,-.9),le("tire",-4.7,.2),le("gear",.8,-.6),le("bolt",-1.4,-3.3),le("pipe",2.8,-3.2),le("gear",-2.8,-3.2,1.65),le("bolt",3.9,.6),le("tire",-1,3),le("bolt",.7,1.8),le("gear",-3.6,1.25),le("pipe",1.6,2.8),le("bolt",-4.1,-1.2),le("gear",4,-2.6)]};function vs(s,t){return Math.min(kn.needs[t]||0,Math.max(0,Math.floor(Number(s.stationParts?.[t])||0)))}function ja(s){return Object.entries(kn.needs).every(([t,e])=>vs(s,t)>=e)}function Df(s,t){return kn.needs[t]?(s.stationParts??(s.stationParts={}),s.stationParts[t]=Math.min(kn.needs[t],vs(s,t)+1),!0):!1}var Ce=s=>document.querySelector(s),Re=Math.PI,Za=[{id:"housing",type:"housing",name:"\u041A\u043E\u0440\u043F\u0443\u0441 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\u0430",target:[0,0,0],home:[-3.05,.05,.5]},{id:"shaft-a",type:"shaft",name:"\u0412\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u0430\u043B",target:[-.48,.67,0],home:[2.5,.08,-.9]},{id:"shaft-b",type:"shaft",name:"\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u0430\u043B",target:[.48,.67,0],home:[3.5,.08,-.9]},{id:"cog-a",type:"cog",name:"\u0412\u0435\u0434\u0443\u0449\u0430\u044F \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u044F",target:[-.48,.67,0],home:[2.3,.16,1]},{id:"cog-b",type:"cog",name:"\u0412\u0435\u0434\u043E\u043C\u0430\u044F \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u044F",target:[.48,.67,0],home:[3.6,.16,1]},{id:"cover",type:"cover",name:"\u041A\u0440\u044B\u0448\u043A\u0430 \u043A\u043E\u0440\u043F\u0443\u0441\u0430",target:[0,1.25,0],home:[3.05,.07,2.35]}],mo=Mn.clamp,A_=Mn.lerp,$a=class{constructor({renderer:t,canvas:e,mats:n,models:i,environment:r,save:o,persist:a,onExit:c,onSalvage:l}){Object.assign(this,{renderer:t,canvas:e,mats:n,models:i,save:o,persist:a,onExit:c,onSalvage:l}),this.scene=new zn,this.scene.background=new Gt("#292b27"),this.scene.fog=new Ea("#393b32",17,39),this.scene.environment=r,this.scene.environmentIntensity=.72,this.camera=new Le(40,1,.1,70),this.root=new se,this.root.position.set(-.65,2.82,0),this.scene.add(this.root),this.make=Ya(n,i.Builder),this.time=0,this.active=!1,this.running=!1,this.angle=0,this.drag=null,this.hold=null,this.settling=[],this.bolts=[],this.parts=[],this.zoom=1,this.soundOn=!0,this.lastShadow=-99,this.sparkTime=0;let h=new xs("#c4dfe4","#3a2518",2);this.scene.add(h),this.key=new fi("#ffe0af",4.3),this.key.position.set(-4,11,5),this.key.castShadow=!0,Object.assign(this.key.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:35}),this.key.shadow.mapSize.set(1024,1024),this.key.shadow.bias=-18e-5,this.key.shadow.normalBias=.016,this.key.shadow.autoUpdate=!1,this.key.shadow.camera.layers.enable(1),this.scene.add(this.key);let d=new fi("#8acbd4",1.3);d.position.set(6,7,-6),this.scene.add(d),this.buildRoom(),this.buildParts(),this.bind()}buildRoom(){let t=this.mats,e={...t};e.floor=new Ye({color:"#716b5c",roughness:.94,metalness:.04}),e.wall=new Ye({color:"#736b5c",roughness:.92,metalness:.02}),e.top=new Ye({color:"#83745d",map:t.steel.map,roughness:.62,metalness:.62}),e.window=new Ye({color:"#c2d4ce",emissive:"#d7e6d8",emissiveIntensity:.65,roughness:.38,metalness:.1});let n=this.models.Builder,i=new n,r=document.createElement("canvas");r.width=r.height=512;let o=r.getContext("2d");o.fillStyle="#726a5b",o.fillRect(0,0,512,512);let a=36,c=()=>(a=Math.imul(a,1664525)+1013904223|0,(a>>>0)/4294967296);for(let p=0;p<45e3;p++){let v=80+Math.floor(c()*70);o.fillStyle=`rgba(${v+9},${v+5},${v},.14)`,o.fillRect(c()*512,c()*512,1+c()*3,1+c()*3)}o.strokeStyle="#3c393233",o.lineWidth=2,o.strokeRect(1,1,510,510);let l=new ds(r);l.colorSpace=Ae,l.wrapS=l.wrapT=zi,l.repeat.set(6,6),e.floor.map=l,e.floor.color.set("#d5c5a8"),i.box(25,.25,24,e.floor,[0,-.14,-3],void 0,.03),i.box(11.1,.22,6.3,e.iron,[0,2.28,.3],void 0,.07),i.box(11,.12,6.2,e.top,[0,2.45,.3],void 0,.045);for(let p of[-5.37,5.37])i.box(.13,.25,6.3,e.coral,[p,2.33,.3],void 0,.04);for(let p of[-2.8,3.4])i.box(11,.25,.13,e.coral,[0,2.33,p],void 0,.03);for(let p of[-4.7,4.7])for(let v of[-2.1,2.7])i.box(.26,2.16,.26,e.iron,[p,1.08,v],void 0,.045),i.box(.6,.12,.6,e.iron,[p,.06,v],void 0,.04);for(let p of[-4.2,4.2]){i.box(1.65,1.8,3.9,e.teal,[p,1.25,.2],void 0,.08);for(let v=0;v<4;v++){i.box(1.52,.37,.08,e.teal,[p,.64+v*.41,2.21],void 0,.035),i.box(.55,.065,.08,e.brass,[p,.68+v*.41,2.29],void 0,.02);for(let _ of[-.58,.58])i.cyl(.025,.025,.03,e.steel,[p+_,.64+v*.41,2.27],[Re/2,0,0],6)}}i.box(3.15,.12,2.4,e.black,[-.65,2.55,0],void 0,.045),i.box(2.95,.04,2.2,e.iron,[-.65,2.63,0],void 0,.025);for(let p of[-1.95,.65])for(let v of[-.95,.95])i.cyl(.1,.12,.18,e.brass,[p,2.74,v]),i.cyl(.065,.065,.07,e.steel,[p,2.85,v],void 0,6);i.box(1.1,.15,.9,e.iron,[-3.75,2.6,2.05],void 0,.08),i.cyl(.43,.46,.14,e.rust,[-3.75,2.73,2.05]),i.box(.85,.48,.55,e.teal,[-3.75,3.01,2.05],void 0,.07);for(let p of[1.79,2.31])i.box(.97,.32,.15,e.iron,[-3.75,3.2,p],void 0,.04),i.box(.93,.075,.17,e.steel,[-3.75,3.38,p],void 0,.018);i.cyl(.08,.08,.9,e.steel,[-3.75,2.97,2.67],[Re/2,0,0]),i.cyl(.045,.045,.8,e.brass,[-3.75,2.97,3.12],[0,0,Re/2]);for(let p of[-4.15,-3.35])i.ball(.08,e.brass,[p,2.97,3.12]);((p,v)=>{i.cyl(.33,.39,.11,e.iron,[p,2.59,v]),i.tube([[p,2.65,v],[p-.18,3.65,v],[p+.4,4.45,v],[p+.9,4.1,v]],.055,e.brass);for(let y of[[p-.18,3.65,v],[p+.4,4.45,v]])i.cyl(.13,.13,.12,e.iron,y,[Re/2,0,0]),i.cyl(.07,.07,.14,e.brass,y,[Re/2,0,0]);i.cyl(.16,.43,.38,e.brass,[p+.9,3.95,v],void 0,32),i.cyl(.37,.37,.035,e.amber,[p+.9,3.75,v]);let _=new Gi("#ffc26b",35,7,2);_.position.set(p+.9,3.7,v),this.scene.add(_)})(-4.7,-1.5),i.box(.3,10,18,e.wall,[-12,4.8,-1],void 0,.03);for(let p of[-7,-3,1,5]){i.box(.18,9,.2,e.iron,[-11.79,4.5,p],void 0,.025);for(let v of[1,3.7,6.5])i.cyl(.065,.065,.06,e.brass,[-11.66,v,p],[0,0,Re/2],6)}for(let p of[1.3,6.7])i.box(.14,.12,17,e.iron,[-11.8,p,-1],void 0,.02);i.tube([[-11.68,.2,3],[-11.68,3.5,3],[-11.68,3.8,2.7],[-11.68,3.8,-4]],.09,e.brass),i.box(25,10,.3,e.wall,[0,4.8,-7],void 0,.03),i.box(25,1.1,.35,e.teal,[0,.55,-6.78],void 0,.04);for(let p of[-10,-6,-2,2,6,10])i.box(.15,9,.22,e.iron,[p,4.5,-6.73],void 0,.02);for(let p of[2,5,8]){i.box(2.8,4.3,.14,e.iron,[p,5.3,-6.76],void 0,.03),i.box(2.63,4.11,.05,e.window,[p,5.3,-6.65],void 0,.02);for(let v of[-.88,0,.88])i.box(.06,4.12,.1,e.iron,[p+v,5.3,-6.59],void 0,.01);for(let v of[4.65,5.95])i.box(2.65,.06,.1,e.iron,[p,v,-6.59],void 0,.01)}i.box(6,.18,1.8,e.top,[-5,2.5,-5],void 0,.05),i.box(6,.18,1.8,e.top,[-5,4.3,-5],void 0,.05);for(let p of[-7.7,-2.3])i.box(.17,4.2,.17,e.iron,[p,2.15,-5],void 0,.02);for(let p=0;p<5;p++){let v=-7+p*.85;i.box(.6,.12,.12,e.iron,[v,3.6,-6.4],void 0,.02),i.tube([[v-.12,3.5,-6.4],[v-.12,3,-6.4],[v+.12,3,-6.4],[v+.12,3.5,-6.4]],.05,e.steel)}i.tube([[-9,.2,-6.3],[-9,5.8,-6.3],[-8.6,6.2,-6.3],[0,6.2,-6.3]],.14,e.rust);for(let p of[-8,-6,-4,-2])i.ring(.16,.035,e.brass,[p,6.2,-6.3],[0,Re/2,0]);i.box(6,.3,3.4,e.iron,[5,.18,-4.3],void 0,.07);for(let p of[2.5,7.5]){i.box(.25,.35,3,e.coral,[p,.48,-4.3],void 0,.05);for(let v of[-5.4,-3.2])i.box(.65,.9,.65,e.teal,[p,.95,v],void 0,.07),i.cyl(.15,.15,.08,e.steel,[p,1.44,v])}i.box(1.18,.08,.62,e.iron,[3.7,2.58,2.85],void 0,.04);for(let p=0;p<9;p++){let v=3.27+p%3*.38,_=2.65+Math.floor(p/3)*.2;i.cyl(.035,.035,.25,e.steel,[v,2.7,_],[Re/2,0,0],12),i.cyl(.09,.09,.06,e.brass,[v,2.7,_+.14],[Re/2,0,0],6)}i.box(.8,.12,.7,e.black,[4.65,2.59,-1.9],void 0,.04),i.box(.28,.6,.24,e.teal,[4.65,2.93,-1.9],[0,0,-.12],.055),i.cyl(.18,.18,.68,e.teal,[4.55,3.29,-1.9],[0,0,Re/2],24),i.cyl(.12,.14,.2,e.steel,[4.1,3.29,-1.9],[0,0,Re/2],20),i.box(.1,.09,.15,e.brass,[4.71,3.1,-1.74],void 0,.02);let d=i.build();this.scene.add(d),d.updateMatrixWorld(!0),d.traverse(p=>p.matrixAutoUpdate=!1),this.scene.add(en(d,!1));let u=this.models.item("robot",1);u.position.set(-2.9,3.26,-2.1),u.rotation.y=.28,this.scene.add(u),this.robot=u,u.add(en(u));let f=this.models.item("engine");f.position.set(-5.9,2.98,-5),f.scale.setScalar(1.2),this.scene.add(f),f.add(en(f));let m=new n;m.cyl(.48,.48,1.18,e.iron,void 0,[0,0,Re/2],32);for(let p=0;p<16;p++)m.ring(.49,.028,e.brass,[-.49+p*.065,0,0],[0,Re/2,0]);for(let p of[-.65,.65])m.cyl(.53,.53,.15,e.teal,[p,0,0],[0,0,Re/2],28),m.box(.3,.18,.8,e.iron,[p,-.43,0],void 0,.04);let x=m.build();x.position.set(-3.5,3.08,-5),this.scene.add(x),x.add(en(x,!1)),this.feedback=new zt(new bn(.18,.018,8,40),new ke({color:"#ffd887",transparent:!0,opacity:0,depthWrite:!1})),this.feedback.rotation.x=-Re/2,this.scene.add(this.feedback),this.driver=new se;let g=new n;g.cyl(.12,.15,.42,e.teal,[0,.35,0]),g.cyl(.045,.045,.35,e.steel,[0,.02,0]),g.box(.19,.12,.19,e.black,[0,.6,0],void 0,.03),this.driver.add(g.build()),this.driver.visible=!1,this.root.add(this.driver)}buildParts(){this.parts=Za.map((i,r)=>{let o=this.make(i.type);return o.name=i.id,o.userData.part=r,this.root.add(o),o.add(en(o,!1)),{...i,obj:o,placed:!1}});let t=this.models.Builder,e=new t;e.cyl(.055,.055,.15,this.mats.steel),e.cyl(.1,.1,.065,this.mats.brass,[0,.09,0],void 0,6),e.box(.065,.012,.016,this.mats.iron,[0,.128,0],void 0,.002);let n=e.build();for(let i of[-.94,.94])for(let r of[-.61,.61]){let o=n.clone(!0);o.position.set(i,1.47,r),this.root.add(o);let a=new zt(new bn(.125,.018,8,28),new ke({color:"#76f5d1",transparent:!0,opacity:.85}));a.rotation.x=Re/2,a.position.y=.125,o.add(a),this.bolts.push({obj:o,glow:a,turn:0,done:!1})}this.ghostMaterial=new ke({color:"#71ece1",wireframe:!1,transparent:!0,opacity:.15,depthWrite:!1}),this.edgeMaterial=new so({color:"#8effe8",transparent:!0,opacity:.45,depthWrite:!1}),this.halo=new se,this.root.add(this.halo)}bind(){this.down=t=>{if(!this.active||t.button>0)return;t.preventDefault(),this.audio();let e=this.ray(t);if(this.phase==="fasten"){this.root.updateMatrixWorld(!0);let c=this.raycaster.intersectObjects(this.bolts.filter(h=>!h.done).map(h=>h.obj),!0),l=c.length?this.bolts.find(h=>h.obj===this.owner(c[0].object)):null;if(!l){let h=this.bolts.filter(d=>!d.done).map(d=>({b:d,p:this.project(d.obj.getWorldPosition(new I))})).sort((d,u)=>Math.hypot(d.p.x-t.clientX,d.p.y-t.clientY)-Math.hypot(u.p.x-t.clientX,u.p.y-t.clientY));h[0]&&Math.hypot(h[0].p.x-t.clientX,h[0].p.y-t.clientY)<48&&(l=h[0].b)}l&&(this.hold={bolt:l,id:t.pointerId},this.canvas.setPointerCapture(t.pointerId));return}if(this.phase!=="place")return;let n=this.parts[this.step];if(!this.available(n))return;this.settling=this.settling.filter(c=>c.obj!==n.obj);let i=this.raycaster.intersectObject(n.obj,!0),r=this.project(n.obj.getWorldPosition(new I));if(!i.length&&Math.hypot(r.x-t.clientX,r.y-t.clientY)>55)return;let o=new Nn(new I(0,1,0),-(this.root.position.y+n.target[1])),a=this.raycaster.ray.intersectPlane(o,new I);a&&(this.root.worldToLocal(a),this.drag={id:t.pointerId,part:n,plane:o,offset:new I},n.obj.position.copy(a),n.obj.rotation.x=0,this.canvas.setPointerCapture(t.pointerId),this.canvas.style.cursor="grabbing",this.tone(330,.045,.025))},this.move=t=>{if(!this.active||!this.drag||this.drag.id!==t.pointerId)return;t.preventDefault(),this.ray(t);let e=this.raycaster.ray.intersectPlane(this.drag.plane,new I);e&&(e.add(this.drag.offset),this.root.worldToLocal(e),this.drag.part.obj.position.set(mo(e.x,-4.6,4.6),this.drag.part.target[1],mo(e.z,-2.4,3)),this.lastShadow=-99)},this.up=t=>{var i;if(!this.active||(this.hold?.id===t.pointerId&&(this.hold=null,this.driver.visible=!1),this.drag?.id!==t.pointerId))return;let e=this.drag.part,n=Math.hypot(e.obj.position.x-e.target[0],e.obj.position.z-e.target[2]);if(this.drag=null,this.canvas.style.cursor="default",t.type==="pointerup"&&n<.88){if(e.placed=!0,this.settling.push({obj:e.obj,from:e.obj.position.clone(),to:new I(...e.target),at:this.time}),(i=this.save).gearboxAssembly??(i.gearboxAssembly={placed:0,bolts:0}),this.save.gearboxAssembly.placed=++this.step,this.persist(),this.tone(620,.09,.04),this.tone(920,.13,.025,.06),navigator.vibrate)try{navigator.vibrate(15)}catch{}this.flash(e.obj.getWorldPosition(new I)),this.refresh()}else this.settling.push({obj:e.obj,from:e.obj.position.clone(),to:this.home(e),at:this.time})},this.canvas.addEventListener("pointerdown",this.down),this.canvas.addEventListener("pointermove",this.move);for(let t of["pointerup","pointercancel","lostpointercapture"])this.canvas.addEventListener(t,this.up);this.raycaster=new Va,Ce("#assembly-back").onclick=()=>this.onExit(),Ce("#assembly-salvage").onclick=()=>this.onSalvage(),Ce("#assembly-run").onclick=()=>{this.audio(),this.running=!this.running,this.openLid=this.running,this.tone(this.running?180:100,.3,.03),this.refresh()},Ce("#assembly-rebuild").onclick=()=>{this.save.gearboxAssembly={placed:0,bolts:0,boltMask:0},this.persist(),this.enter()},Ce("#assembly-lid").onclick=()=>{this.openLid=!this.openLid},Ce("#assembly-view").onclick=()=>{this.wide=!this.wide,this.resize()},Ce("#assembly-sound").onclick=()=>{this.soundOn=!this.soundOn,Ce("#assembly-sound").textContent=this.soundOn?"\u0417\u0432\u0443\u043A: \u0432\u043A\u043B":"\u0417\u0432\u0443\u043A: \u0432\u044B\u043A\u043B"}}owner(t){for(;t.parent!==this.root&&t.parent;)t=t.parent;return t}ray(t){let e=this.canvas.getBoundingClientRect();return this.raycaster.setFromCamera(new at((t.clientX-e.left)/e.width*2-1,-(t.clientY-e.top)/e.height*2+1),this.camera),this.raycaster}project(t){let e=this.canvas.getBoundingClientRect(),n=t.clone().project(this.camera);return{x:e.left+(n.x+1)*e.width/2,y:e.top+(1-n.y)*e.height/2}}home(t){let e=new I(...this.mobile?[0,0,2.35]:t.home);return e.y={housing:-.14,shaft:-.1,cog:-.15,cover:-.22}[t.type],e}available(t){let e=Za.indexOf(Za.find(i=>i.id===t.id)),n=Za.slice(0,e+1).filter(i=>i.type===t.type).length;return vs(this.save,t.type)>=n}enter(){this.active=!0,this.running=!1,this.openLid=!1,this.lidAmount=0,this.angle=0,this.wide=!1,this.drag=null,this.hold=null,this.settling=[];let t=this.save.gearboxAssembly||{};this.step=mo(Math.floor(Number(t.placed)||0),0,6),this.step=Math.min(this.step,this.unlockedSteps()),this.bolts.forEach((e,n)=>{e.done=(Number.isInteger(t.boltMask)?!!(t.boltMask&1<<n):n<mo(Number(t.bolts)||0,0,4))&&this.step===6,e.turn=e.done?1:0}),this.resize(),this.parts.forEach((e,n)=>{e.placed=n<this.step,e.obj.position.copy(e.placed?new I(...e.target):this.home(e)),e.obj.rotation.set(!e.placed&&e.type==="cog"?-Re/2:0,0,0)}),Ce("#assembly-ui").hidden=!1,this.refresh()}unlockedSteps(){let t=0;for(let e of this.parts){if(!this.available(e))break;t++}return t}exit(){this.active=!1,this.cancel(),Ce("#assembly-ui").hidden=!0,this.canvas.style.cursor="default"}cancel(){if(this.drag){let t=this.drag.part;this.settling.push({obj:t.obj,from:t.obj.position.clone(),to:this.home(t),at:this.time})}this.drag=null,this.hold=null,this.driver.visible=!1}resize(){let t=this.canvas.getBoundingClientRect();this.mobile=t.width/t.height<.85,this.camera.aspect=t.width/t.height;let e=this.wide?new I(0,2,-1.4):this.mobile?new I(-.65,3.08,.65):new I(0,2.9,.35),n=new I(this.mobile?.13:.47,this.mobile?.95:.65,1).normalize(),i=this.wide?20:this.mobile?5.9:12.4,r=Math.max(this.wide?17:10,i/(2*Math.tan(Mn.degToRad(this.camera.fov/2))*this.camera.aspect));this.camera.position.copy(e).addScaledVector(n,r),this.camera.lookAt(e),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld();for(let o of this.parts)o.placed||o.obj.position.copy(this.home(o));this.lastShadow=-99}refresh(){this.phase=this.step<6?"place":this.bolts.every(e=>e.done)?"ready":"fasten";let t=this.parts[this.step];Ce("#assembly-progress").textContent=(this.preview?"\u0422\u0415\u0421\u0422 \u0412\u0415\u0420\u0421\u0422\u0410\u041A\u0410 \xB7 ":"\u0420\u0415\u0414\u0423\u041A\u0422\u041E\u0420 \xB7 ")+this.step+"/6 \u0434\u0435\u0442\u0430\u043B\u0435\u0439",Ce("#assembly-title").textContent=this.phase==="place"?t.name:this.phase==="fasten"?"\u0417\u0430\u043A\u0440\u0435\u043F\u0438 \u043A\u0440\u044B\u0448\u043A\u0443":"\u0420\u0435\u0434\u0443\u043A\u0442\u043E\u0440 \u0441\u043E\u0431\u0440\u0430\u043D",Ce("#assembly-note").textContent=this.phase==="place"?this.available(t)?"\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438 \u0434\u0435\u0442\u0430\u043B\u044C \u0432 \u043F\u043E\u0434\u0441\u0432\u0435\u0447\u0435\u043D\u043D\u043E\u0435 \u043F\u043E\u0441\u0430\u0434\u043E\u0447\u043D\u043E\u0435 \u043C\u0435\u0441\u0442\u043E.":"\u042D\u0442\u043E\u0439 \u0434\u0435\u0442\u0430\u043B\u0438 \u0435\u0449\u0451 \u043D\u0435\u0442 \u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u0435. \u0414\u043E\u0441\u0442\u0430\u043D\u044C \u0435\u0451 \u043A\u0440\u0430\u043D\u043E\u043C \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u044C \u0432 \u0433\u043E\u043B\u0443\u0431\u043E\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A.":this.phase==="fasten"?"\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439 \u043F\u0430\u043B\u0435\u0446 \u0438\u043B\u0438 \u043C\u044B\u0448\u044C \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u0441\u0432\u0435\u0442\u044F\u0449\u0435\u043C\u0441\u044F \u0431\u043E\u043B\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0442\u044F\u043D\u0443\u0442\u044C \u0435\u0433\u043E.":this.running?"\u0428\u0435\u0441\u0442\u0435\u0440\u043D\u0438 \u0432 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0438. \u0423\u0437\u0435\u043B \u0433\u043E\u0442\u043E\u0432 \u0434\u043B\u044F \u0431\u0443\u0434\u0443\u0449\u0435\u0439 \u0441\u0442\u0430\u043D\u0446\u0438\u0438.":"\u0412\u0441\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435. \u0417\u0430\u043F\u0443\u0441\u0442\u0438 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C \u0438 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438 \u0435\u0433\u043E \u0438\u0437\u043D\u0443\u0442\u0440\u0438.",Ce("#assembly-run").hidden=this.phase!=="ready",Ce("#assembly-run").textContent=this.running?"\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C":"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440",Ce("#assembly-lid").hidden=this.phase!=="ready",Ce("#assembly-rebuild").hidden=this.phase!=="ready",Ce("#assembly-salvage").hidden=this.phase!=="place"||this.available(t),Ce("#assembly-status").textContent=Object.entries(kn.needs).map(([e,n])=>vs(this.save,e)+"/"+n).join(" \xB7 "),Ce("#assembly-status").title="\u041A\u043E\u0440\u043F\u0443\u0441 \xB7 \u0432\u0430\u043B\u044B \xB7 \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u0438 \xB7 \u043A\u0440\u044B\u0448\u043A\u0430",this.parts.forEach((e,n)=>e.obj.visible=n<this.step||(!this.mobile||n===this.step)&&this.available(e)),this.bolts.forEach(e=>e.obj.visible=this.step===6);for(let e of[...this.halo.children])e.geometry?.dispose(),this.halo.remove(e);this.phase==="place"&&this.available(t)?(t.obj.traverse(e=>{if(!e.isMesh||e.layers.mask===2)return;let n=new zt(e.geometry.clone(),this.ghostMaterial);n.position.copy(e.position),n.rotation.copy(e.rotation),n.scale.copy(e.scale),this.halo.add(n);let i=new Ca(new Ua(e.geometry,32),this.edgeMaterial);i.position.copy(e.position),i.rotation.copy(e.rotation),i.scale.copy(e.scale),this.halo.add(i)}),this.halo.position.set(...t.target),this.halo.visible=!0):this.halo.visible=!1,this.phase==="ready"&&!this.save.gearboxAssembly?.finished&&(this.save.gearboxAssembly={placed:6,bolts:4,boltMask:15,finished:!0},this.persist(),this.tone(1040,.25,.04))}flash(t){this.feedback.position.copy(t),this.flashAt=this.time}audio(){if(this.soundOn)try{this.audioContext??(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.audioContext.state==="suspended"&&this.audioContext.resume().catch(()=>{})}catch{}}tone(t,e,n=.03,i=0){if(!this.soundOn||!this.audioContext)return;let r=this.audioContext,o=r.createOscillator(),a=r.createGain(),c=r.currentTime+i;o.type="sine",o.frequency.setValueAtTime(t,c),o.frequency.exponentialRampToValueAtTime(t*.65,c+e),a.gain.setValueAtTime(n,c),a.gain.exponentialRampToValueAtTime(.001,c+e),o.connect(a),a.connect(r.destination),o.start(c),o.stop(c+e+.01)}update(t){let e=Math.min(.05,Math.max(0,t-this.time));this.time=t;for(let o=this.settling.length-1;o>=0;o--){let a=this.settling[o],c=mo((t-a.at)/.28,0,1),l=1-(1-c)**3;if(a.obj.position.lerpVectors(a.from,a.to,l),c===1){this.settling.splice(o,1);let h=this.parts.find(d=>d.obj===a.obj);h&&!h.placed&&(h.obj.rotation.x=h.type==="cog"?-Re/2:0)}}if(this.hold){let o=this.hold.bolt;o.turn=Math.min(1,o.turn+e/1.05),this.driver.visible=!0,this.driver.position.copy(o.obj.position),this.driver.position.y+=.16,this.driver.rotation.y+=e*30,o.obj.rotation.y=o.turn*Re*8,o.obj.position.y=1.47-o.turn*.14,t-this.sparkTime>.14&&(this.sparkTime=t,this.tone(130+Math.random()*45,.06,.015)),o.turn===1&&(o.done=!0,this.hold=null,this.driver.visible=!1,this.save.gearboxAssembly={placed:6,bolts:this.bolts.filter(a=>a.done).length,boltMask:this.bolts.reduce((a,c,l)=>a|(c.done?1<<l:0),0)},this.persist(),this.flash(o.obj.getWorldPosition(new I)),this.tone(480,.08,.035),this.refresh())}if(this.bolts.forEach(o=>{o.glow.visible=!o.done,o.obj.position.y=1.47-o.turn*.14,o.obj.scale.setScalar(o.done?1:1+.1*Math.sin(t*5))}),this.phase==="place"&&!this.drag){let o=this.parts[this.step];this.settling.some(a=>a.obj===o.obj)||(o.obj.position.y=this.home(o).y+Math.sin(t*2.4)*.025)}this.halo.visible=this.phase==="place"&&this.available(this.parts[this.step]),this.ghostMaterial.opacity=.1+.06*(.5+.5*Math.sin(t*3));let n=this.parts[5];if(n.placed&&!this.settling.some(o=>o.obj===n.obj)){let o=this.openLid?1:0;this.lidAmount=A_(this.lidAmount||0,o,Math.min(1,e*6));let a=this.lidAmount*1.35;n.obj.position.set(0,1.25+.825*Math.sin(a),-.825+.825*Math.cos(a)),n.obj.rotation.x=-a;for(let c of this.bolts)c.obj.position.y+=this.lidAmount*.95,c.obj.visible=this.lidAmount<.12}if(this.running&&(this.angle+=e*1.9,this.parts[1].obj.rotation.z=this.angle,this.parts[2].obj.rotation.z=-this.angle,this.parts[3].obj.rotation.z=this.angle,this.parts[4].obj.rotation.z=-this.angle+Re/20),this.robot.userData.eyes)for(let o of this.robot.userData.eyes)o.scale.y=t%6>5.84?.12:1;this.robot.userData.antenna&&(this.robot.userData.antenna.rotation.z=Math.sin(t*2)*.07);let i=t-(this.flashAt??-99);this.feedback.material.opacity=Math.max(0,1-i*2)*.7,this.feedback.scale.setScalar(1+i*.7);let r=this.renderer.getPixelRatio()<.7?1/20:1/30;t-this.lastShadow>=r&&(this.key.shadow.needsUpdate=!0,this.renderer.shadowMap.needsUpdate=!0,this.lastShadow=t)}render(t){this.update(t),this.renderer.render(this.scene,this.camera)}snapshot(){return this.scene.updateMatrixWorld(!0),{active:this.active,preview:!!this.preview,step:this.step,phase:this.phase,running:this.running,partsReady:ja(this.save),mobile:this.mobile,parts:this.parts.map(t=>({id:t.id,type:t.type,placed:t.placed,available:this.available(t),visible:t.obj.visible,screen:this.project(t.obj.getWorldPosition(new I)),target:this.project(this.root.localToWorld(new I(...t.target))),position:t.obj.position.toArray()})),bolts:this.bolts.map(t=>({done:t.done,turn:t.turn,screen:this.project(t.obj.getWorldPosition(new I))})),calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles}}};var Ft=(s,t,e,n=.95,i)=>({type:s,x:t,y:n,z:e,rotation:i}),wn=[{id:"pip",name:"\u0421\u0438\u0433\u043D\u0430\u043B \u0438\u0437 \u043A\u0443\u0447\u0438",seed:201,needs:{robot:1},story:"\u0421\u0432\u0430\u043B\u043A\u0443 \u0441\u043A\u043E\u0440\u043E \u0437\u0430\u043A\u0440\u043E\u044E\u0442. \u041F\u043E\u0434 \u0433\u0440\u0443\u0434\u043E\u0439 \u0436\u0435\u043B\u0435\u0437\u0430 \u043A\u0442\u043E-\u0442\u043E \u043F\u043E\u0434\u0430\u0451\u0442 \u0441\u0438\u0433\u043D\u0430\u043B. \u0421\u043F\u0430\u0441\u0438 \u041F\u0438\u043F\u0430 \u2014 \u043E\u043D \u0437\u043D\u0430\u0435\u0442, \u0433\u0434\u0435 \u043B\u0435\u0436\u0438\u0442 \u0441\u0442\u0430\u0440\u044B\u0439 \u0440\u043E\u0431\u043E\u0442-\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A.",hint:"\u041F\u043E\u0434\u043D\u0438\u043C\u0438 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0433\u043E \u0440\u043E\u0431\u043E\u0442\u0430 \u0438 \u043E\u0442\u043D\u0435\u0441\u0438 \u0432 \u0433\u043E\u043B\u0443\u0431\u043E\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A \u0441\u043F\u0440\u0430\u0432\u0430.",reward:"\u041F\u0438\u043F \u0441\u043F\u0430\u0441\u0451\u043D. \u041E\u043D \u043D\u0430\u0448\u0451\u043B \u0447\u0435\u0440\u0442\u0451\u0436 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A\u0430 \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043B \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u0443\u044E \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0443.",layout:[Ft("robot",-1.8,.2),Ft("gear",1.2,-1),Ft("bolt",.3,1.2),Ft("tire",2.6,.5)]},{id:"power",name:"\u0417\u0430\u0436\u0435\u0447\u044C \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0443\u044E",seed:202,needs:{engine:1,bolt:1},story:"\u041D\u043E\u0447\u044C\u044E \u0440\u043E\u0431\u043E\u0442\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0431\u0435\u0437 \u0441\u0432\u0435\u0442\u0430. \u0414\u043B\u044F \u0441\u0442\u0430\u0440\u043E\u0433\u043E \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u043D\u0443\u0436\u043D\u044B \u043C\u043E\u0442\u043E\u0440 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436.",hint:"\u041C\u043E\u0442\u043E\u0440 \u0438 \u0431\u043E\u043B\u0442 \u2014 \u0432 \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A \u0441\u043B\u0435\u0432\u0430. \u041C\u043E\u0442\u043E\u0440 \u0432\u0435\u0441\u0438\u0442 8,8 \u043A\u0433: \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0434\u043D\u0438\u043C\u0438 \u0435\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E.",reward:"\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043B. \u0412 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439 \u0437\u0430\u0433\u043E\u0440\u0435\u043B\u0441\u044F \u0441\u0432\u0435\u0442.",layout:[Ft("engine",-.2,-1),Ft("bolt",-2.5,1),Ft("gear",2.5,-1.5),Ft("tire",1.8,1.3)]},{id:"drive",name:"\u041F\u0435\u0440\u0432\u044B\u0435 \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u0438",seed:203,needs:{gear:2},story:"\u041F\u0438\u043F \u0440\u0430\u0441\u0447\u0438\u0441\u0442\u0438\u043B \u0440\u0430\u043C\u0443. \u0414\u0432\u0435 \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u0438 \u0432\u0435\u0440\u043D\u0443\u0442 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0433\u043B\u0430\u0432\u043D\u043E\u043C\u0443 \u043F\u0440\u0438\u0432\u043E\u0434\u0443.",hint:"\u0421\u043E\u0431\u0435\u0440\u0438 \u0434\u0432\u0435 \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u0438 \u0432 \u0433\u043E\u043B\u0443\u0431\u043E\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A. \u0414\u043B\u0438\u043D\u043D\u044B\u0435 \u0441\u0432\u044F\u0437\u043A\u0438 \u043F\u0440\u0438 \u0440\u0435\u0437\u043A\u043E\u043C \u0440\u0430\u0437\u0432\u043E\u0440\u043E\u0442\u0435 \u043C\u043E\u0433\u0443\u0442 \u043E\u0431\u043E\u0440\u0432\u0430\u0442\u044C\u0441\u044F.",reward:"\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u043F\u0440\u0438\u0432\u043E\u0434 \u0441\u043E\u0431\u0440\u0430\u043D. \u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A \u0432\u043F\u0435\u0440\u0432\u044B\u0435 \u0448\u0435\u0432\u0435\u043B\u044C\u043D\u0443\u043B \u0432\u0430\u043B\u043E\u043C.",layout:[Ft("gear",-2.2,-.6),Ft("gear",1.5,.3),Ft("pipe",-.3,-2),Ft("bolt",-1,1.5),Ft("tire",2.6,-1.7)]},{id:"rivet",name:"\u041C\u0435\u0445\u0430\u043D\u0438\u043A \u043F\u043E\u0434 \u0437\u0430\u0432\u0430\u043B\u043E\u043C",seed:204,needs:{engine:1,robot:1},story:"\u041C\u0435\u0445\u0430\u043D\u0438\u043A\u0430 \u041A\u043B\u0451\u043F\u0443 \u043F\u0440\u0438\u0434\u0430\u0432\u0438\u043B\u043E \u043C\u043E\u0442\u043E\u0440\u043E\u043C. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0437\u0431\u0435\u0440\u0438 \u0437\u0430\u0432\u0430\u043B, \u043F\u043E\u0442\u043E\u043C \u043F\u043E\u0434\u043D\u0438\u043C\u0438 \u0435\u0433\u043E \u0441\u0430\u043C\u043E\u0433\u043E.",hint:"\u0423\u043D\u0435\u0441\u0438 \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u043C\u043E\u0442\u043E\u0440 \u0432 \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A, \u0430 \u043C\u0435\u0445\u0430\u043D\u0438\u043A\u0430 \u2014 \u0432 \u0433\u043E\u043B\u0443\u0431\u043E\u0439.",reward:"\u041A\u043B\u0451\u043F\u0430 \u0441\u043F\u0430\u0441\u0451\u043D. \u041E\u043D \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B \u043F\u0435\u0440\u0435\u0434\u043D\u044E\u044E \u043F\u0430\u0440\u0443 \u043E\u043F\u043E\u0440 \u0438 \u0432\u0437\u044F\u043B\u0441\u044F \u0437\u0430 \u0433\u0438\u0434\u0440\u0430\u0432\u043B\u0438\u043A\u0443.",layout:[Ft("robot",-1,-.5,.85,{x:.03,y:0,z:1.15}),Ft("engine",-1,-.5,1.9,{x:0,y:0,z:0}),Ft("bolt",1.7,.6),Ft("pipe",2.3,-1.6),Ft("tire",-2.6,1.3)]},{id:"heart",name:"\u0425\u0440\u0443\u043F\u043A\u043E\u0435 \u0441\u0435\u0440\u0434\u0446\u0435",seed:205,needs:{battery:1},story:"\u042D\u043D\u0435\u0440\u0433\u043E\u044F\u0447\u0435\u0439\u043A\u0430 \u0435\u0449\u0451 \u0436\u0438\u0432\u0430. \u0421\u0438\u043B\u044C\u043D\u044B\u0439 \u0443\u0434\u0430\u0440 \u0440\u0430\u0441\u043A\u043E\u043B\u0435\u0442 \u0435\u0451 \u043A\u043E\u0440\u043F\u0443\u0441 \u2014 \u0431\u0435\u0437 \u043D\u0435\u0451 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A \u043D\u0435 \u043F\u0440\u043E\u0441\u043D\u0451\u0442\u0441\u044F.",hint:"\u0421\u0438\u043D\u044E\u044E \u044D\u043D\u0435\u0440\u0433\u043E\u044F\u0447\u0435\u0439\u043A\u0443 \u0434\u043E\u0441\u0442\u0430\u0432\u044C \u0432 \u0433\u043E\u043B\u0443\u0431\u043E\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A. \u041F\u0435\u0440\u0435\u0434 \u043E\u0442\u043F\u0443\u0441\u043A\u0430\u043D\u0438\u0435\u043C \u043E\u043F\u0443\u0441\u0442\u0438 \u0433\u0440\u0443\u0437 \u0432\u043D\u0443\u0442\u0440\u044C, \u043D\u0435 \u0431\u0440\u043E\u0441\u0430\u0439 \u0441\u0432\u0435\u0440\u0445\u0443.",reward:"\u042D\u043D\u0435\u0440\u0433\u043E\u044F\u0447\u0435\u0439\u043A\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430. \u041D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A\u0430 \u043F\u043E\u044F\u0432\u0438\u043B\u0441\u044F \u043F\u0435\u0440\u0432\u044B\u0439 \u043E\u0433\u043E\u043D\u0451\u043A.",layout:[Ft("battery",-1.8,.5),Ft("gear",1.3,-1.2),Ft("bolt",.4,1.4),Ft("tire",2.5,.8)]},{id:"legs",name:"\u0427\u0435\u0442\u044B\u0440\u0435 \u043E\u043F\u043E\u0440\u044B",seed:206,needs:{pipe:2,gear:1},story:"\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A \u0442\u044F\u0436\u0451\u043B\u044B\u0439. \u041D\u0443\u0436\u043D\u044B \u0442\u0440\u0443\u0431\u044B \u0434\u043B\u044F \u0433\u0438\u0434\u0440\u0430\u0432\u043B\u0438\u043A\u0438 \u0438 \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u044F \u0441\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u0430\u0434\u043D\u0438\u0445 \u043E\u043F\u043E\u0440.",hint:"\u0414\u0432\u0435 \u0442\u0440\u0443\u0431\u044B \u2014 \u0432 \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A, \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u044F \u2014 \u0432 \u0433\u043E\u043B\u0443\u0431\u043E\u0439. \u0421\u043B\u0435\u0434\u0438 \u0437\u0430 \u0432\u0435\u0441\u043E\u043C \u0438 \u043A\u0430\u0447\u0430\u043D\u0438\u0435\u043C \u0441\u0432\u044F\u0437\u043A\u0438.",reward:"\u0412\u0441\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u043E\u043F\u043E\u0440\u044B \u043D\u0430 \u043C\u0435\u0441\u0442\u0435. \u0420\u0430\u043C\u0430 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043B\u0435\u0436\u0438\u0442 \u043D\u0430 \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0445 \u0441\u0442\u043E\u0439\u043A\u0430\u0445.",layout:[Ft("pipe",-2,-1),Ft("pipe",1.6,-1.4),Ft("gear",-.2,1.2),Ft("bolt",-2.5,1.5),Ft("tire",2.7,1.1)]},{id:"scout",name:"\u0427\u0435\u0440\u0435\u0437 \u0443\u0437\u043A\u0438\u0439 \u043F\u0440\u043E\u0441\u0432\u0435\u0442",seed:207,needs:{robot:1},story:"\u0420\u0430\u0437\u0432\u0435\u0434\u0447\u0438\u043A \u0428\u043F\u0443\u043D\u0442 \u043E\u043A\u0430\u0437\u0430\u043B\u0441\u044F \u0437\u0430 \u043F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043A\u043E\u0439. \u0427\u0435\u0440\u0435\u0437 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u0432\u0435\u0442 \u0435\u0449\u0451 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0439\u0442\u0438.",hint:"\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u0435\u0434\u0438 \u0433\u0440\u0443\u0437 \u043A \u043F\u0440\u043E\u0441\u0432\u0435\u0442\u0443 \u043F\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435 \u043F\u0435\u0440\u0435\u0433\u043E\u0440\u043E\u0434\u043A\u0438, \u0437\u0430\u0442\u0435\u043C \u0432\u043F\u0440\u0430\u0432\u043E \u0438 \u043A \u0433\u043E\u043B\u0443\u0431\u043E\u043C\u0443 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A\u0443.",reward:"\u0428\u043F\u0443\u043D\u0442 \u0441\u043F\u0430\u0441\u0451\u043D. \u041E\u043D \u043F\u0440\u043E\u043B\u043E\u0436\u0438\u043B \u043F\u0443\u0442\u044C \u0441\u043E \u0441\u0432\u0430\u043B\u043A\u0438 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u043B \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044E.",gate:!0,layout:[Ft("robot",-3.4,0),Ft("bolt",-2.4,-2),Ft("tire",-3,2.7),Ft("gear",3.6,-2)]},{id:"reserve",name:"\u0417\u0430\u043F\u0430\u0441 \u043D\u0430 \u0434\u043E\u0440\u043E\u0433\u0443",seed:208,needs:{battery:2},story:"\u041E\u0434\u043D\u043E\u0439 \u044F\u0447\u0435\u0439\u043A\u0438 \u0445\u0432\u0430\u0442\u0438\u0442 \u043B\u0438\u0448\u044C \u043D\u0430 \u0437\u0430\u043F\u0443\u0441\u043A. \u0414\u0432\u0435 \u0437\u0430\u043F\u0430\u0441\u043D\u044B\u0435 \u0434\u0430\u0434\u0443\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u0448\u0430\u043D\u0441 \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F \u0434\u043E \u0433\u043E\u0440\u043E\u0434\u0430.",hint:"\u041F\u0435\u0440\u0435\u0432\u0435\u0437\u0438 \u0434\u0432\u0435 \u0445\u0440\u0443\u043F\u043A\u0438\u0435 \u044F\u0447\u0435\u0439\u043A\u0438 \u0432 \u0433\u043E\u043B\u0443\u0431\u043E\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A. \u041B\u0443\u0447\u0448\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0432\u0430 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0445 \u0440\u0435\u0439\u0441\u0430.",reward:"\u0420\u0435\u0437\u0435\u0440\u0432\u043D\u044B\u0439 \u0431\u043B\u043E\u043A \u0433\u043E\u0442\u043E\u0432. \u041D\u0430 \u043F\u0430\u043B\u0443\u0431\u0435 \u043F\u043E\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u043C\u0435\u0441\u0442\u0430 \u0434\u043B\u044F \u0441\u043F\u0430\u0441\u0451\u043D\u043D\u044B\u0445 \u0440\u043E\u0431\u043E\u0442\u043E\u0432.",layout:[Ft("battery",-2.2,-.4),Ft("battery",1.7,-1.5),Ft("pipe",0,1.3),Ft("tire",-2.8,1.6),Ft("bolt",2.7,.8)]},{id:"transmission",name:"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0442\u0440\u0430\u043D\u0441\u043C\u0438\u0441\u0441\u0438\u044E",seed:209,needs:{engine:1,gear:2,bolt:2},story:"\u0414\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u043E\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0441\u0438\u043B\u043E\u0432\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430. \u041A\u043B\u0451\u043F\u0430 \u0436\u0434\u0451\u0442 \u043C\u043E\u0442\u043E\u0440, \u0434\u0432\u0435 \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u0438 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436.",hint:"\u0420\u0430\u0437\u0434\u0435\u043B\u044F\u0439 \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u0438 \u043C\u0435\u043B\u043A\u0438\u0439 \u0433\u0440\u0443\u0437. \u041C\u043E\u0442\u043E\u0440 \u0438 \u0431\u043E\u043B\u0442\u044B \u2014 \u043D\u0430\u043B\u0435\u0432\u043E, \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u0438 \u2014 \u043D\u0430\u043F\u0440\u0430\u0432\u043E.",reward:"\u0422\u0440\u0430\u043D\u0441\u043C\u0438\u0441\u0441\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442. \u041A\u0430\u0431\u0438\u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0430, \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0433\u043B\u0430\u0437\u0430 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A\u0430 \u0437\u0430\u0436\u0433\u043B\u0438\u0441\u044C.",layout:[Ft("engine",.4,-1.4),Ft("gear",-2,.3),Ft("gear",2.1,.3),Ft("bolt",-2.5,-1.6),Ft("bolt",.2,1.4),Ft("tire",2.8,-2.1)]},{id:"departure",name:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0435\u0439\u0441",seed:210,needs:{robot:1,battery:1,bolt:1},story:"\u0412 \u0434\u0430\u043B\u044C\u043D\u0435\u043C \u0443\u0433\u043B\u0443 \u043E\u0441\u0442\u0430\u043B\u0441\u044F \u0440\u0430\u0434\u0438\u0441\u0442 \u0413\u0443\u043B. \u0417\u0430\u0431\u0435\u0440\u0438 \u0435\u0433\u043E, \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u044F\u0447\u0435\u0439\u043A\u0443 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436 \u2014 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0433\u043E\u0442\u043E\u0432\u0430 \u043A \u0434\u043E\u0440\u043E\u0433\u0435.",hint:"\u041F\u043E\u0434\u043D\u0438\u043C\u0438 \u0433\u0440\u0443\u0437 \u043D\u0430\u0434 \u043D\u0438\u0437\u043A\u0438\u043C\u0438 \u0441\u0442\u043E\u0439\u043A\u0430\u043C\u0438. \u0425\u0440\u0443\u043F\u043A\u0443\u044E \u044F\u0447\u0435\u0439\u043A\u0443 \u043E\u043F\u0443\u0441\u043A\u0430\u0439 \u0432 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A \u043F\u0435\u0440\u0435\u0434 \u043E\u0442\u043F\u0443\u0441\u043A\u0430\u043D\u0438\u0435\u043C.",reward:"\u0412\u0441\u0435 \u0447\u0435\u0442\u0432\u0435\u0440\u043E \u0432 \u0441\u0431\u043E\u0440\u0435. \u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A \u0433\u043E\u0442\u043E\u0432 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0435\u0440\u0432\u044B\u0439 \u0448\u0430\u0433.",posts:!0,layout:[Ft("robot",-2.2,-1.7),Ft("battery",1,-1.8),Ft("bolt",-1,.8),Ft("pipe",-3.1,1.2),Ft("tire",3,-2.2)]}].map((s,t)=>({...s,chapter:t+1}));function qi(s){let t=wn.filter(e=>s.storyCompleted?.[e.id]).map(e=>e.id);return{ids:t,count:t.length,crew:["pip","rivet","scout","departure"].filter(e=>t.includes(e)),finished:t.length===wn.length}}function Bf(s,t){if(!t.id)return!1;s.storyCompleted??(s.storyCompleted={});let e=!s.storyCompleted[t.id];return s.storyCompleted[t.id]=!0,e}function Uf(s,t){return t===0||!!s.storyCompleted?.[wn[t-1]?.id]}var Yi=class s{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);let n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new s);let n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],f=n[7],m=n[8],x=i[0],g=i[1],p=i[2],v=i[3],_=i[4],y=i[5],E=i[6],T=i[7],C=i[8];return r[0]=o*x+a*v+c*E,r[1]=o*g+a*_+c*T,r[2]=o*p+a*y+c*C,r[3]=l*x+h*v+d*E,r[4]=l*g+h*_+d*T,r[5]=l*p+h*y+d*C,r[6]=u*x+f*v+m*E,r[7]=u*g+f*_+m*T,r[8]=u*p+f*y+m*C,e}scale(t,e){e===void 0&&(e=new s);let n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new M);let n=3,i=4,r=[],o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let c=3,l=c,h,d=4,u;do{if(o=l-c,r[o+i*o]===0){for(a=o+1;a<l;a++)if(r[o+i*a]!==0){h=d;do u=d-h,r[u+i*o]+=r[u+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<l;a++){let f=r[o+i*a]/r[o+i*o];h=d;do u=d-h,r[u+i*a]=u<=o?0:r[u+i*a]-r[u+i*o]*f;while(--h)}}while(--c);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new s);let e=3,n=6,i=C_,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3,c=a,l,h=n,d;do{if(r=c-a,i[r+n*r]===0){for(o=r+1;o<c;o++)if(i[r+n*o]!==0){l=h;do d=h-l,i[d+n*r]+=i[d+n*o];while(--l);break}}if(i[r+n*r]!==0)for(o=r+1;o<c;o++){let u=i[r+n*o]/i[r+n*r];l=h;do d=h-l,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*u;while(--l)}}while(--a);r=2;do{o=r-1;do{let u=i[r+n*o]/i[r+n*r];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*r]*u;while(--l)}while(o--)}while(--r);r=2;do{let u=1/i[r+n*r];l=n;do d=n-l,i[d+n*r]=i[d+n*r]*u;while(--l)}while(r--);r=2;do{o=2;do{if(d=i[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,f=n*c,m=i*c,x=r*o,g=r*a,p=r*c,v=this.elements;return v[3*0+0]=1-(u+m),v[3*0+1]=h-p,v[3*0+2]=d+g,v[3*1+0]=h+p,v[3*1+1]=1-(l+m),v[3*1+2]=f-x,v[3*2+0]=d-g,v[3*2+1]=f+x,v[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new s);let e=this.elements,n=t.elements,i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}},C_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],M=class s{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new s);let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*i,e.y=c*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new s(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new s(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Yi([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){let r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new s);let e=this.x,n=this.y,i=this.z,r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new s);let n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new s),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new s),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new s),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let i=R_,r=1/n;i.set(this.x*r,this.y*r,this.z*r);let o=I_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Ff),Ff.almostEquals(t,e)}clone(){return new s(this.x,this.y,this.z)}};M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);var R_=new M,I_=new M,Ff=new M,un=class s{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,zf),l=zf),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new s().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,c=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,c){let l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){let n=Of,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=Of,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,r,o,a,c,l,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(m<0||f>m)}},zf=new M,Of=[new M,new M,new M,new M,new M,new M,new M,new M],nc=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){let r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){let o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},ic=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}},Ie=class s{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=P_,i=L_;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new s);let n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-r*c,e.y=i*h+o*c+r*a-n*l,e.z=r*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-r*l,e}inverse(t){t===void 0&&(t=new s);let e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);let o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new s),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);let n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*i,d=l*i+c*n-o*r,u=l*r+o*i-a*n,f=-o*n-a*i-c*r;return e.x=h*l+f*-o+d*-c-u*-a,e.y=d*l+f*-a+u*-o-h*-c,e.z=u*l+f*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r,o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":let h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*f),i=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");let r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new s(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new s);let i=this.x,r=this.y,o=this.z,a=this.w,c=t.x,l=t.y,h=t.z,d=t.w,u,f,m,x,g;return f=i*c+r*l+o*h+a*d,f<0&&(f=-f,c=-c,l=-l,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),m=Math.sin(u),x=Math.sin((1-e)*u)/m,g=Math.sin(e*u)/m):(x=1-e,g=e),n.x=x*i+g*c,n.y=x*r+g*l,n.z=x*o+g*h,n.w=x*a+g*d,n}integrate(t,e,n,i){i===void 0&&(i=new s);let r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(r*d+o*h-a*l),i.y+=u*(o*d+a*c-r*h),i.z+=u*(a*d+r*l-o*c),i.w+=u*(-r*c-o*l-a*h),i}},P_=new M,L_=new M,N_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},wt=class s{constructor(t){t===void 0&&(t={}),this.id=s.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};wt.idCounter=0;wt.types=N_;var he=class s{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new Ie,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return s.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return s.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(kf),kf.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}},kf=new Ie,sc=class s extends wt{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:wt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let i=new M;for(let r=0;r!==t.length;r++){let o=t[r],a=o.length;for(let c=0;c!==a;c++){let l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);let e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];s.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){let r=new M,o=new M;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,c,l){let h=new M,d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),r.vmult(h,h);let x=h.dot(o);x>u&&(u=x,d=m)}let f=[];for(let m=0;m<n.faces[d].length;m++){let x=n.vertices[n.faces[d][m]],g=new M;g.copy(x),r.vmult(g,g),i.vadd(g,g),f.push(g)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,r,o,a,c){let l=new M,h=new M,d=new M,u=new M,f=new M,m=new M,x=Number.MAX_VALUE,g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],l);let v=g.testSepAxis(l,t,e,n,i,r);if(v===!1)return!1;v<x&&(x=v,o.copy(l))}else{let p=a?a.length:g.faces.length;for(let v=0;v<p;v++){let _=a?a[v]:v;l.copy(g.faceNormals[_]),n.vmult(l,l);let y=g.testSepAxis(l,t,e,n,i,r);if(y===!1)return!1;y<x&&(x=y,o.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],h);let v=g.testSepAxis(h,t,e,n,i,r);if(v===!1)return!1;v<x&&(x=v,o.copy(h))}else{let p=c?c.length:t.faces.length;for(let v=0;v<p;v++){let _=c?c[v]:v;h.copy(t.faceNormals[_]),r.vmult(h,h);let y=g.testSepAxis(h,t,e,n,i,r);if(y===!1)return!1;y<x&&(x=y,o.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(r.vmult(t.uniqueEdges[v],f),u.cross(f,m),!m.almostZero()){m.normalize();let _=g.testSepAxis(m,t,e,n,i,r);if(_===!1)return!1;_<x&&(x=_,o.copy(m))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){let a=this;s.project(a,t,n,i,Jh),s.project(e,t,r,o,Kh);let c=Jh[0],l=Jh[1],h=Kh[0],d=Kh[1];if(c<d||h<l)return!1;let u=c-d,f=h-l;return u<f?u:f}calculateLocalInertia(t,e){let n=new M,i=new M;this.computeLocalAABB(i,n);let r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){let c=new M,l=new M,h=new M,d=new M,u=new M,f=new M,m=new M,x=new M,g=this,p=[],v=i,_=p,y=-1,E=Number.MAX_VALUE;for(let b=0;b<g.faces.length;b++){c.copy(g.faceNormals[b]),n.vmult(c,c);let P=c.dot(t);P<E&&(E=P,y=b)}if(y<0)return;let T=g.faces[y];T.connectedFaces=[];for(let b=0;b<g.faces.length;b++)for(let P=0;P<g.faces[b].length;P++)T.indexOf(g.faces[b][P])!==-1&&b!==y&&T.connectedFaces.indexOf(b)===-1&&T.connectedFaces.push(b);let C=T.length;for(let b=0;b<C;b++){let P=g.vertices[T[b]],O=g.vertices[T[(b+1)%C]];P.vsub(O,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(P),n.vmult(f,f),e.vadd(f,f);let N=T.connectedFaces[b];m.copy(this.faceNormals[N]);let U=this.getPlaneConstantOfFace(N);x.copy(m),n.vmult(x,x);let z=U-x.dot(e);for(this.clipFaceAgainstPlane(v,_,x,z);v.length;)v.shift();for(;_.length;)v.push(_.shift())}m.copy(this.faceNormals[y]);let L=this.getPlaneConstantOfFace(y);x.copy(m),n.vmult(x,x);let S=L-x.dot(e);for(let b=0;b<v.length;b++){let P=x.dot(v[b])+S;if(P<=r&&(console.log(`clamped: depth=${P} to minDist=${r}`),P=r),P<=o){let O=v[b];if(P<=1e-6){let N={point:O,normal:x,depth:P};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o,a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];r=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,r<0)if(o<0){let d=new M;d.copy(l),e.push(d)}else{let d=new M;c.lerp(l,r/(r-o),d),e.push(d)}else if(o<0){let d=new M;c.lerp(l,r/(r-o),d),e.push(d),e.push(l)}c=l,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);let n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);let n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){let r=this.vertices,o,a,c,l,h,d,u=new M;for(let f=0;f<r.length;f++){u.copy(r[f]),e.vmult(u,u),t.vadd(u,u);let m=u;(o===void 0||m.x<o)&&(o=m.x),(l===void 0||m.x>l)&&(l=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(c===void 0||m.z<c)&&(c=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){let o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){let o=i[r];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new M;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=i[a],l=e[n[a][0]],h=new M;t.vsub(l,h);let d=c.dot(h),u=new M;o.vsub(l,u);let f=c.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(t,e,n,i,r){let o=t.vertices.length,a=B_,c=0,l=0,h=U_,d=t.vertices;h.setZero(),he.vectorToLocalFrame(n,i,e,a),he.pointToLocalFrame(n,i,h,h);let u=h.dot(a);l=c=d[0].dot(a);for(let f=1;f<o;f++){let m=d[f].dot(a);m>c&&(c=m),m<l&&(l=m)}if(l-=u,c-=u,l>c){let f=l;l=c,c=f}r[0]=c,r[1]=l}},Jh=[],Kh=[],D_=new M,B_=new M,U_=new M,Kn=class s extends wt{constructor(t){super({type:wt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new sc({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),s.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){let n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)Xi.set(r[o][0],r[o][1],r[o][2]),e.vmult(Xi,Xi),t.vadd(Xi,Xi),n(Xi.x,Xi.y,Xi.z)}calculateWorldAABB(t,e,n,i){let r=this.halfExtents;Zn[0].set(r.x,r.y,r.z),Zn[1].set(-r.x,r.y,r.z),Zn[2].set(-r.x,-r.y,r.z),Zn[3].set(-r.x,-r.y,-r.z),Zn[4].set(r.x,-r.y,-r.z),Zn[5].set(r.x,r.y,-r.z),Zn[6].set(-r.x,r.y,-r.z),Zn[7].set(r.x,-r.y,r.z);let o=Zn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){let c=Zn[a];e.vmult(c,c),t.vadd(c,c);let l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},Xi=new M,Zn=[new M,new M,new M,new M,new M,new M,new M,new M],hu={DYNAMIC:1,STATIC:2,KINEMATIC:4},uu={AWAKE:0,SLEEPY:1,SLEEPING:2},kt=class s extends ic{constructor(t){t===void 0&&(t={}),super(),this.id=s.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?s.STATIC:s.DYNAMIC,typeof t.type==typeof s.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=s.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new Ie,this.initQuaternion=new Ie,this.previousQuaternion=new Ie,this.interpolatedQuaternion=new Ie,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new Yi,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new Yi,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new un,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=s.AWAKE,this.wakeUpAfterNarrowphase=!1,t===s.SLEEPING&&this.dispatchEvent(s.wakeupEvent)}sleep(){this.sleepState=s.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===s.AWAKE&&n<i?(this.sleepState=s.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(s.sleepyEvent)):e===s.SLEEPY&&n>i?this.wakeUp():e===s.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(s.sleepEvent))}}updateSolveMassProperties(){this.sleepState===s.SLEEPING||this.type===s.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){let i=new M,r=new Ie;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,i=0;for(let r=0;r!==n;r++){let o=t[r];o.updateBoundingSphereRadius();let a=e[r].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=F_,o=z_,a=this.quaternion,c=this.aabb,l=O_;for(let h=0;h!==i;h++){let d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=k_,i=V_;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=G_;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==s.DYNAMIC)return;let n=W_,i=q_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===s.DYNAMIC&&(this.sleepState===s.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==s.DYNAMIC)return;this.sleepState===s.SLEEPING&&this.wakeUp();let n=e,i=X_;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let r=Y_;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==s.DYNAMIC)return;let n=j_,i=Z_;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){let t=$_;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Kn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===s.DYNAMIC||this.type===s.KINEMATIC)||this.sleepState===s.SLEEPING)return;let i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;let m=d.elements,x=this.angularFactor,g=c.x*x.x,p=c.y*x.y,v=c.z*x.z;r.x+=t*(m[0]*g+m[1]*p+m[2]*v),r.y+=t*(m[3]*g+m[4]*p+m[5]*v),r.z+=t*(m[6]*g+m[7]*p+m[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};kt.idCounter=0;kt.COLLIDE_EVENT_NAME="collide";kt.DYNAMIC=hu.DYNAMIC;kt.STATIC=hu.STATIC;kt.KINEMATIC=hu.KINEMATIC;kt.AWAKE=uu.AWAKE;kt.SLEEPY=uu.SLEEPY;kt.SLEEPING=uu.SLEEPING;kt.wakeupEvent={type:"wakeup"};kt.sleepyEvent={type:"sleepy"};kt.sleepEvent={type:"sleep"};var F_=new M,z_=new Ie,O_=new un,k_=new Yi,V_=new Yi,H_=new Yi,G_=new M,W_=new M,q_=new M,X_=new M,Y_=new M,j_=new M,Z_=new M,$_=new M,rc=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&kt.STATIC)!==0||t.sleepState===kt.SLEEPING)&&((e.type&kt.STATIC)!==0||e.sleepState===kt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){let r=J_;e.position.vsub(t.position,r);let o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){let n=K_,i=Q_,r=tb,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let c=i[a].id,l=r[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(r[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new M;t.position.vsub(e.position,n);let i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},J_=new M;new M;new Ie;new M;var K_={keys:[]},Q_=[],tb=[];new M;var RM=new M;new M;var iu=class extends rc{constructor(){super()}collisionPairs(t,e,n){let i=t.bodies,r=i.length,o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){let r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}},yr=class{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}},Kf,Qf,tp,ep,np,ip,sp,du={CLOSEST:1,ANY:2,ALL:4};Kf=wt.types.SPHERE;Qf=wt.types.PLANE;tp=wt.types.BOX;ep=wt.types.CYLINDER;np=wt.types.CONVEXPOLYHEDRON;ip=wt.types.HEIGHTFIELD;sp=wt.types.TRIMESH;var Sn=class s{get[Kf](){return this._intersectSphere}get[Qf](){return this._intersectPlane}get[tp](){return this._intersectBox}get[ep](){return this._intersectConvex}get[np](){return this._intersectConvex}get[ip](){return this._intersectHeightfield}get[sp](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=s.ANY,this.result=new yr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||s.ANY,this.result=e.result||new yr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Vf),Qh.length=0,t.broadphase.aabbQuery(t,Vf,Qh),this.intersectBodies(Qh),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=eb,r=nb;for(let o=0,a=t.shapes.length;o<a;o++){let c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){let r=this.from;if(yb(r,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){let o=this.from,a=this.to,c=this.direction,l=new M(0,0,1);e.vmult(l,l);let h=new M;o.vsub(n,h);let d=h.dot(l);a.vsub(n,h);let u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;let f=l.dot(c);if(Math.abs(f)<this.precision)return;let m=new M,x=new M,g=new M;o.vsub(n,m);let p=-l.dot(m)/f;c.scale(p,x),o.vadd(x,g),this.reportIntersection(l,g,r,i,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;let o=ib;o.from.copy(this.from),o.to.copy(this.to),he.pointToLocalFrame(n,e,o.from,o.from),he.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=sb,c,l,h,d;c=l=0,h=d=t.data.length-1;let u=new un;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=c;f<h;f++)for(let m=l;m<d;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,m,!1),he.pointToWorldFrame(n,e,t.pillarOffset,Ja),this._intersectConvex(t.pillarConvex,e,Ja,i,r,Hf),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),he.pointToWorldFrame(n,e,t.pillarOffset,Ja),this._intersectConvex(t.pillarConvex,e,Ja,i,r,Hf)}}}_intersectSphere(t,e,n,i,r){let o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,f=rb,m=ob;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,i,-1);else{let x=(-h-Math.sqrt(u))/(2*l),g=(-h+Math.sqrt(u))/(2*l);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(o.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){let a=ab,c=Gf,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,m=this.from,x=this.to,g=m.distanceTo(x),p=l?l.length:h.length,v=this.result;for(let _=0;!v.shouldStop&&_<p;_++){let y=l?l[_]:_,E=h[y],T=u[y],C=e,L=n;c.copy(d[E[0]]),C.vmult(c,c),c.vadd(L,c),c.vsub(m,c),C.vmult(T,a);let S=f.dot(a);if(Math.abs(S)<this.precision)continue;let b=a.dot(c)/S;if(!(b<0)){f.scale(b,nn),nn.vadd(m,nn),Vn.copy(d[E[0]]),C.vmult(Vn,Vn),L.vadd(Vn,Vn);for(let P=1;!v.shouldStop&&P<E.length-1;P++){$n.copy(d[E[P]]),Jn.copy(d[E[P+1]]),C.vmult($n,$n),C.vmult(Jn,Jn),L.vadd($n,$n),L.vadd(Jn,Jn);let O=nn.distanceTo(m);!(s.pointInTriangle(nn,Vn,$n,Jn)||s.pointInTriangle(nn,$n,Vn,Jn))||O>g||this.reportIntersection(a,nn,r,i,y)}}}}_intersectTrimesh(t,e,n,i,r,o){let a=hb,c=gb,l=xb,h=Gf,d=ub,u=db,f=fb,m=mb,x=pb,g=t.indices;t.vertices;let p=this.from,v=this.to,_=this.direction;l.position.copy(n),l.quaternion.copy(e),he.vectorToLocalFrame(n,e,_,d),he.pointToLocalFrame(n,e,p,u),he.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();let y=u.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let E=0,T=c.length;!this.result.shouldStop&&E!==T;E++){let C=c[E];t.getNormal(C,a),t.getVertex(g[C*3],Vn),Vn.vsub(u,h);let L=d.dot(a),S=a.dot(h)/L;if(S<0)continue;d.scale(S,nn),nn.vadd(u,nn),t.getVertex(g[C*3+1],$n),t.getVertex(g[C*3+2],Jn);let b=nn.distanceSquared(u);!(s.pointInTriangle(nn,$n,Vn,Jn)||s.pointInTriangle(nn,Vn,$n,Jn))||b>y||(he.vectorToWorldFrame(e,a,x),he.pointToWorldFrame(n,e,nn,m),this.reportIntersection(x,m,r,i,C))}c.length=0}reportIntersection(t,e,n,i,r){let o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case s.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case s.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case s.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,bs),n.vsub(e,go),t.vsub(e,tu);let r=bs.dot(bs),o=bs.dot(go),a=bs.dot(tu),c=go.dot(go),l=go.dot(tu),h,d;return(h=c*a-o*l)>=0&&(d=r*l-o*a)>=0&&h+d<r*c-o*o}};Sn.CLOSEST=du.CLOSEST;Sn.ANY=du.ANY;Sn.ALL=du.ALL;var Vf=new un,Qh=[],go=new M,tu=new M,eb=new M,nb=new Ie,nn=new M,Vn=new M,$n=new M,Jn=new M;new M;new yr;var Hf={faceList:[0]},Ja=new M,ib=new Sn,sb=[],rb=new M,ob=new M,ab=new M,cb=new M,lb=new M,Gf=new M,hb=new M,ub=new M,db=new M,fb=new M,pb=new M,mb=new M;new un;var gb=[],xb=new he,bs=new M,Ka=new M;function yb(s,t,e){e.vsub(s,bs);let n=bs.dot(t);return t.scale(n,Ka),Ka.vadd(s,Ka),e.distanceTo(Ka)}var oc=class s extends rc{static checkBounds(t,e,n){let i,r;n===0?(i=t.position.x,r=e.position.x):n===1?(i=t.position.y,r=e.position.y):n===2&&(i=t.position.z,r=e.position.z);let o=t.boundingRadius,a=e.boundingRadius,c=i+o;return r-a<c}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){let i=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=i.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){let i=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=i.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){let i=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=i.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;let e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{let i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){let i=this.axisList,r=i.length,o=this.axisIndex,a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let l=i[a];for(c=a+1;c<r;c++){let h=i[c];if(this.needBroadphaseCollision(l,h)){if(!s.checkBounds(l,h,o))break;this.intersectionTest(l,h,e,n)}}}}sortList(){let t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){let r=t[i];r.aabbNeedsUpdate&&r.updateAABB()}e===0?s.insertionSortX(t):e===1?s.insertionSortY(t):e===2&&s.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,r=0,o=0,a=this.axisList,c=a.length,l=1/c;for(let f=0;f!==c;f++){let m=a[f],x=m.position.x;t+=x,e+=x*x;let g=m.position.y;n+=g,i+=g*g;let p=m.position.z;r+=p,o+=p*p}let h=e-t*t*l,d=i-n*n*l,u=o-r*r*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let i=this.axisIndex,r="x";i===1&&(r="y"),i===2&&(r="z");let o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){let c=o[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&n.push(c)}return n}},ac=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},cc=class s{constructor(t,e,n){n===void 0&&(n={}),n=ac.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=s.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};cc.idCounter=0;var lc=class{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},_o=class s{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=s.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new lc,this.jacobianElementB=new lc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){let i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return r.scale(l,Wf),a.scale(h,qf),n.invInertiaWorldSolve.vmult(o,Xf),i.invInertiaWorldSolve.vmult(c,Yf),t.multiplyVectors(Wf,Xf)+e.multiplyVectors(qf,Yf)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve,l=r+o;return a.vmult(t.rotational,Qa),l+=Qa.dot(t.rotational),c.vmult(e.rotational,Qa),l+=Qa.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=vb;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};_o.idCounter=0;var Wf=new M,qf=new M,Xf=new M,Yf=new M,Qa=new M,vb=new M,xr=class extends _o{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){let e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,c=_b,l=bb,h=i.velocity,d=i.angularVelocity;i.force,i.torque;let u=r.velocity,f=r.angularVelocity;r.force,r.torque;let m=Mb,x=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(x.spatial),c.negate(x.rotational),g.spatial.copy(p),g.rotational.copy(l),m.copy(r.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);let v=p.dot(m),_=this.restitution+1,y=_*u.dot(p)-_*h.dot(p)+f.dot(l)-d.dot(c),E=this.computeGiMf();return-v*e-y*n-t*E}getImpactVelocityAlongNormal(){let t=wb,e=Sb,n=Eb,i=Tb,r=Ab;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}},_b=new M,bb=new M,Mb=new M,wb=new M,Sb=new M,Eb=new M,Tb=new M,Ab=new M,vr=class extends cc{constructor(t,e,n,i,r){e===void 0&&(e=new M),i===void 0&&(i=new M),r===void 0&&(r=1e6),super(t,n),this.pivotA=e.clone(),this.pivotB=i.clone();let o=this.equationX=new xr(t,n),a=this.equationY=new xr(t,n),c=this.equationZ=new xr(t,n);this.equations.push(o,a,c),o.minForce=a.minForce=c.minForce=-r,o.maxForce=a.maxForce=c.maxForce=r,o.ni.set(1,0,0),a.ni.set(0,1,0),c.ni.set(0,0,1)}update(){let t=this.bodyA,e=this.bodyB,n=this.equationX,i=this.equationY,r=this.equationZ;t.quaternion.vmult(this.pivotA,n.ri),e.quaternion.vmult(this.pivotB,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),r.ri.copy(n.ri),r.rj.copy(n.rj)}};var IM=new M,PM=new M;var LM=new M,NM=new M;new M;new M;var DM=new M,BM=new M;var UM=new M,FM=new M,hc=class extends _o{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,r=Cb,o=Rb,a=this.t;n.cross(a,r),i.cross(a,o);let c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}},Cb=new M,Rb=new M,uc=class s{constructor(t,e,n){n=ac.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};uc.idCounter=0;var _r=class s{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=s.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};_r.idCounter=0;var zM=new M,OM=new M,kM=new M,VM=new M,HM=new M,GM=new M,WM=new M,qM=new M,XM=new M,YM=new M,jM=new M;var ZM=new M,$M=new M;new M;new M;new M;var JM=new M,KM=new M,QM=new M;new Sn;new M;var tw=new M,ew=new M,nw=[new M(1,0,0),new M(0,1,0),new M(0,0,1)],iw=new M;var sw=new M,rw=new M,ow=new M;var aw=new M,cw=new M,lw=new M,hw=new M;var uw=new M,dw=new M,fw=new M;var bo=class extends wt{constructor(t){if(super({type:wt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);let n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){let r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){let c=o[a];n[c]=t[c]-r,i[c]=t[c]+r}}};var pw=new M,mw=new M;var gw=new M,xw=new M,yw=new M,vw=new M,_w=new M,bw=new M,Mw=new M,dn=class extends sc{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");let r=i,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new M(-e*u(0),-n*.5,e*d(0))),l.push(0),o.push(new M(-t*u(0),n*.5,t*d(0))),h.push(1);for(let m=0;m<r;m++){let x=2*Math.PI/r*(m+1),g=2*Math.PI/r*(m+.5);m<r-1?(o.push(new M(-e*u(x),-n*.5,e*d(x))),l.push(2*m+2),o.push(new M(-t*u(x),n*.5,t*d(x))),h.push(2*m+3),c.push([2*m,2*m+1,2*m+3,2*m+2])):c.push([2*m,2*m+1,1,0]),(r%2===1||m<r/2)&&a.push(new M(-u(g),0,d(g)))}c.push(l),a.push(new M(0,1,0));let f=[];for(let m=0;m<h.length;m++)f.push(h[h.length-m-1]);c.push(f),super({vertices:o,faces:c,axes:a}),this.type=wt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}};var ww=new M;var Sw=new M,Ew=new M,Tw=new M,Aw=new M,Cw=new M,Rw=new M,Iw=new M,Pw=new M,Lw=new M;var Nw=new M,Dw=new un;var Bw=new M,Uw=new un,Fw=new M,zw=new M,Ow=new M,kw=new M,Vw=new M,Hw=new M,Gw=new M,Ww=new un,qw=new M,Xw=new he,Yw=new un,su=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},ru=class extends su{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t,d,u,f,m,x,g;if(a!==0)for(let y=0;y!==l;y++)c[y].updateSolveMassProperties();let p=Pb,v=Lb,_=Ib;p.length=a,v.length=a,_.length=a;for(let y=0;y!==a;y++){let E=o[y];_[y]=0,v[y]=E.computeB(h),p[y]=1/E.computeC()}if(a!==0){for(let T=0;T!==l;T++){let C=c[T],L=C.vlambda,S=C.wlambda;L.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let T=0;T!==a;T++){let C=o[T];d=v[T],u=p[T],g=_[T],x=C.computeGWlambda(),f=u*(d-x-C.eps*g),g+f<C.minForce?f=C.minForce-g:g+f>C.maxForce&&(f=C.maxForce-g),_[T]+=f,m+=f>0?f:-f,C.addToWlambda(f)}if(m*m<r)break}for(let T=0;T!==l;T++){let C=c[T],L=C.velocity,S=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),L.vadd(C.vlambda,L),C.wlambda.vmul(C.angularFactor,C.wlambda),S.vadd(C.wlambda,S)}let y=o.length,E=1/h;for(;y--;)o[y].multiplier=_[y]*E}return n}},Ib=[],Pb=[],Lb=[];var jw=kt.STATIC;var ou=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},au=class extends ou{constructor(){super(...arguments),this.type=M}constructObject(){return new M}},be={sphereSphere:wt.types.SPHERE,spherePlane:wt.types.SPHERE|wt.types.PLANE,boxBox:wt.types.BOX|wt.types.BOX,sphereBox:wt.types.SPHERE|wt.types.BOX,planeBox:wt.types.PLANE|wt.types.BOX,convexConvex:wt.types.CONVEXPOLYHEDRON,sphereConvex:wt.types.SPHERE|wt.types.CONVEXPOLYHEDRON,planeConvex:wt.types.PLANE|wt.types.CONVEXPOLYHEDRON,boxConvex:wt.types.BOX|wt.types.CONVEXPOLYHEDRON,sphereHeightfield:wt.types.SPHERE|wt.types.HEIGHTFIELD,boxHeightfield:wt.types.BOX|wt.types.HEIGHTFIELD,convexHeightfield:wt.types.CONVEXPOLYHEDRON|wt.types.HEIGHTFIELD,sphereParticle:wt.types.PARTICLE|wt.types.SPHERE,planeParticle:wt.types.PLANE|wt.types.PARTICLE,boxParticle:wt.types.BOX|wt.types.PARTICLE,convexParticle:wt.types.PARTICLE|wt.types.CONVEXPOLYHEDRON,cylinderCylinder:wt.types.CYLINDER,sphereCylinder:wt.types.SPHERE|wt.types.CYLINDER,planeCylinder:wt.types.PLANE|wt.types.CYLINDER,boxCylinder:wt.types.BOX|wt.types.CYLINDER,convexCylinder:wt.types.CONVEXPOLYHEDRON|wt.types.CYLINDER,heightfieldCylinder:wt.types.HEIGHTFIELD|wt.types.CYLINDER,particleCylinder:wt.types.PARTICLE|wt.types.CYLINDER,sphereTrimesh:wt.types.SPHERE|wt.types.TRIMESH,planeTrimesh:wt.types.PLANE|wt.types.TRIMESH},cu=class{get[be.sphereSphere](){return this.sphereSphere}get[be.spherePlane](){return this.spherePlane}get[be.boxBox](){return this.boxBox}get[be.sphereBox](){return this.sphereBox}get[be.planeBox](){return this.planeBox}get[be.convexConvex](){return this.convexConvex}get[be.sphereConvex](){return this.sphereConvex}get[be.planeConvex](){return this.planeConvex}get[be.boxConvex](){return this.boxConvex}get[be.sphereHeightfield](){return this.sphereHeightfield}get[be.boxHeightfield](){return this.boxHeightfield}get[be.convexHeightfield](){return this.convexHeightfield}get[be.sphereParticle](){return this.sphereParticle}get[be.planeParticle](){return this.planeParticle}get[be.boxParticle](){return this.boxParticle}get[be.convexParticle](){return this.convexParticle}get[be.cylinderCylinder](){return this.convexConvex}get[be.sphereCylinder](){return this.sphereConvex}get[be.planeCylinder](){return this.planeConvex}get[be.boxCylinder](){return this.boxConvex}get[be.convexCylinder](){return this.convexConvex}get[be.heightfieldCylinder](){return this.heightfieldCylinder}get[be.particleCylinder](){return this.particleCylinder}get[be.sphereTrimesh](){return this.sphereTrimesh}get[be.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new au,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new xr(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;let c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){let n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial,l=c.friction,h=r.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){let u=l*(a.frictionGravity||a.gravity).length(),f=n.invMass+i.invMass;f>0&&(f=1/f);let m=this.frictionEquationPool,x=m.length?m.pop():new hc(n,i,u*f),g=m.length?m.pop():new hc(n,i,u*f);return x.bi=g.bi=n,x.bj=g.bj=i,x.minForce=g.minForce=-u*f,x.maxForce=g.maxForce=u*f,x.ri.copy(t.ri),x.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(x.t,g.t),x.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),g.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),x.enabled=g.enabled=t.enabled,e.push(x,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];_s.setZero(),mr.setZero(),gr.setZero();let r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(_s.vadd(e.ni,_s),mr.vadd(e.ri,mr),gr.vadd(e.rj,gr)):(_s.vsub(e.ni,_s),mr.vadd(e.rj,mr),gr.vadd(e.ri,gr));let o=1/t;mr.scale(o,n.ri),gr.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),_s.normalize(),_s.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;let c=Bb,l=Ub,h=Nb,d=Db;for(let u=0,f=t.length;u!==f;u++){let m=t[u],x=e[u],g=null;m.material&&x.material&&(g=n.getContactMaterial(m.material,x.material)||null);let p=m.type&kt.KINEMATIC&&x.type&kt.STATIC||m.type&kt.STATIC&&x.type&kt.KINEMATIC||m.type&kt.KINEMATIC&&x.type&kt.KINEMATIC;for(let v=0;v<m.shapes.length;v++){m.quaternion.mult(m.shapeOrientations[v],c),m.quaternion.vmult(m.shapeOffsets[v],h),h.vadd(m.position,h);let _=m.shapes[v];for(let y=0;y<x.shapes.length;y++){x.quaternion.mult(x.shapeOrientations[y],l),x.quaternion.vmult(x.shapeOffsets[y],d),d.vadd(x.position,d);let E=x.shapes[y];if(!(_.collisionFilterMask&E.collisionFilterGroup&&E.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+E.boundingSphereRadius)continue;let T=null;_.material&&E.material&&(T=n.getContactMaterial(_.material,E.material)||null),this.currentContactMaterial=T||g||n.defaultContactMaterial;let C=_.type|E.type,L=this[C];if(L){let S=!1;_.type<E.type?S=L.call(this,_,E,h,d,c,l,m,x,_,E,p):S=L.call(this,E,_,d,h,l,c,x,m,_,E,p),S&&p&&(n.shapeOverlapKeeper.set(_.id,E.id),n.bodyOverlapKeeper.set(m.id,x.id))}}}}}sphereSphere(t,e,n,i,r,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,c,l,h,d){let u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,tc),u.ni.scale(u.ni.dot(tc),jf),tc.vsub(jf,u.rj),-tc.dot(u.ni)<=t.radius){if(d)return!0;let f=u.ri,m=u.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(c.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,d)}sphereBox(t,e,n,i,r,o,a,c,l,h,d){let u=this.v3pool,f=c1;n.vsub(i,ec),e.getSideNormals(f,o);let m=t.radius,x=!1,g=h1,p=u1,v=d1,_=null,y=0,E=0,T=0,C=null;for(let B=0,$=f.length;B!==$&&x===!1;B++){let H=r1;H.copy(f[B]);let J=H.length();H.normalize();let ut=ec.dot(H);if(ut<J+m&&ut>0){let dt=o1,st=a1;dt.copy(f[(B+1)%3]),st.copy(f[(B+2)%3]);let $t=dt.length(),Y=st.length();dt.normalize(),st.normalize();let rt=ec.dot(dt),St=ec.dot(st);if(rt<$t&&rt>-$t&&St<Y&&St>-Y){let ht=Math.abs(ut-J-m);if((C===null||ht<C)&&(C=ht,E=rt,T=St,_=J,g.copy(H),p.copy(dt),v.copy(st),y++,d))return!0}}}if(y){x=!0;let B=this.createContactEquation(a,c,t,e,l,h);g.scale(-m,B.ri),B.ni.copy(g),B.ni.negate(B.ni),g.scale(_,g),p.scale(E,p),g.vadd(p,g),v.scale(T,v),g.vadd(v,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(c.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}let L=u.get(),S=l1;for(let B=0;B!==2&&!x;B++)for(let $=0;$!==2&&!x;$++)for(let H=0;H!==2&&!x;H++)if(L.set(0,0,0),B?L.vadd(f[0],L):L.vsub(f[0],L),$?L.vadd(f[1],L):L.vsub(f[1],L),H?L.vadd(f[2],L):L.vsub(f[2],L),i.vadd(L,S),S.vsub(n,S),S.lengthSquared()<m*m){if(d)return!0;x=!0;let J=this.createContactEquation(a,c,t,e,l,h);J.ri.copy(S),J.ri.normalize(),J.ni.copy(J.ri),J.ri.scale(m,J.ri),J.rj.copy(L),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(c.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}u.release(L),L=null;let b=u.get(),P=u.get(),O=u.get(),N=u.get(),U=u.get(),z=f.length;for(let B=0;B!==z&&!x;B++)for(let $=0;$!==z&&!x;$++)if(B%3!==$%3){f[$].cross(f[B],b),b.normalize(),f[B].vadd(f[$],P),O.copy(n),O.vsub(P,O),O.vsub(i,O);let H=O.dot(b);b.scale(H,N);let J=0;for(;J===B%3||J===$%3;)J++;U.copy(n),U.vsub(N,U),U.vsub(P,U),U.vsub(i,U);let ut=Math.abs(H),dt=U.length();if(ut<f[J].length()&&dt<m){if(d)return!0;x=!0;let st=this.createContactEquation(a,c,t,e,l,h);P.vadd(N,st.rj),st.rj.copy(st.rj),U.negate(st.ni),st.ni.normalize(),st.ri.copy(st.rj),st.ri.vadd(i,st.ri),st.ri.vsub(n,st.ri),st.ri.normalize(),st.ri.scale(m,st.ri),st.ri.vadd(n,st.ri),st.ri.vsub(a.position,st.ri),st.rj.vadd(i,st.rj),st.rj.vsub(c.position,st.rj),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult)}}u.release(b,P,O,N,U)}planeBox(t,e,n,i,r,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,d)}convexConvex(t,e,n,i,r,o,a,c,l,h,d,u,f){let m=A1;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,m,u,f)){let x=[],g=C1;t.clipAgainstHull(n,r,e,i,o,m,-100,100,x);let p=0;for(let v=0;v!==x.length;v++){if(d)return!0;let _=this.createContactEquation(a,c,t,e,l,h),y=_.ri,E=_.rj;m.negate(_.ni),x[v].normal.negate(g),g.scale(x[v].depth,g),x[v].point.vadd(g,y),E.copy(x[v].point),y.vsub(n,y),E.vsub(i,E),y.vadd(n,y),y.vsub(a.position,y),E.vadd(i,E),E.vsub(c.position,E),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,r,o,a,c,l,h,d){let u=this.v3pool;n.vsub(i,f1);let f=e.faceNormals,m=e.faces,x=e.vertices,g=t.radius,p=!1;for(let v=0;v!==x.length;v++){let _=x[v],y=x1;o.vmult(_,y),i.vadd(y,y);let E=g1;if(y.vsub(n,E),E.lengthSquared()<g*g){if(d)return!0;p=!0;let T=this.createContactEquation(a,c,t,e,l,h);T.ri.copy(E),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(g,T.ri),y.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(c.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let v=0,_=m.length;v!==_&&p===!1;v++){let y=f[v],E=m[v],T=y1;o.vmult(y,T);let C=v1;o.vmult(x[E[0]],C),C.vadd(i,C);let L=_1;T.scale(-g,L),n.vadd(L,L);let S=b1;L.vsub(C,S);let b=S.dot(T),P=M1;if(n.vsub(C,P),b<0&&P.dot(T)>0){let O=[];for(let N=0,U=E.length;N!==U;N++){let z=u.get();o.vmult(x[E[N]],z),i.vadd(z,z),O.push(z)}if(s1(O,T,n)){if(d)return!0;p=!0;let N=this.createContactEquation(a,c,t,e,l,h);T.scale(-g,N.ri),T.negate(N.ni);let U=u.get();T.scale(-b,U);let z=u.get();T.scale(-g,z),n.vsub(i,N.rj),N.rj.vadd(z,N.rj),N.rj.vadd(U,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),u.release(U),u.release(z),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let B=0,$=O.length;B!==$;B++)u.release(O[B]);return}else for(let N=0;N!==E.length;N++){let U=u.get(),z=u.get();o.vmult(x[E[(N+1)%E.length]],U),o.vmult(x[E[(N+2)%E.length]],z),i.vadd(U,U),i.vadd(z,z);let B=p1;z.vsub(U,B);let $=m1;B.unit($);let H=u.get(),J=u.get();n.vsub(U,J);let ut=J.dot($);$.scale(ut,H),H.vadd(U,H);let dt=u.get();if(H.vsub(n,dt),ut>0&&ut*ut<B.lengthSquared()&&dt.lengthSquared()<g*g){if(d)return!0;let st=this.createContactEquation(a,c,t,e,l,h);H.vsub(i,st.rj),H.vsub(n,st.ni),st.ni.normalize(),st.ni.scale(g,st.ri),st.rj.vadd(i,st.rj),st.rj.vsub(c.position,st.rj),st.ri.vadd(n,st.ri),st.ri.vsub(a.position,st.ri),this.result.push(st),this.createFrictionEquationsFromContact(st,this.frictionResult);for(let $t=0,Y=O.length;$t!==Y;$t++)u.release(O[$t]);u.release(U),u.release(z),u.release(H),u.release(dt),u.release(J);return}u.release(U),u.release(z),u.release(H),u.release(dt),u.release(J)}for(let N=0,U=O.length;N!==U;N++)u.release(O[N])}}}planeConvex(t,e,n,i,r,o,a,c,l,h,d){let u=w1,f=S1;f.set(0,0,1),r.vmult(f,f);let m=0,x=E1;for(let g=0;g!==e.vertices.length;g++)if(u.copy(e.vertices[g]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,x),f.dot(x)<=0){if(d)return!0;let v=this.createContactEquation(a,c,t,e,l,h),_=T1;f.scale(f.dot(x),_),u.vsub(_,_),_.vsub(n,v.ri),v.ni.copy(f),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,r,o,a,c,l,h,d){let u=e.data,f=t.radius,m=e.elementSize,x=k1,g=O1;he.pointToLocalFrame(i,o,n,g);let p=Math.floor((g.x-f)/m)-1,v=Math.ceil((g.x+f)/m)+1,_=Math.floor((g.y-f)/m)-1,y=Math.ceil((g.y+f)/m)+1;if(v<0||y<0||p>u.length||_>u[0].length)return;p<0&&(p=0),v<0&&(v=0),_<0&&(_=0),y<0&&(y=0),p>=u.length&&(p=u.length-1),v>=u.length&&(v=u.length-1),y>=u[0].length&&(y=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let E=[];e.getRectMinMax(p,_,v,y,E);let T=E[0],C=E[1];if(g.z-f>C||g.z+f<T)return;let L=this.result;for(let S=p;S<v;S++)for(let b=_;b<y;b++){let P=L.length,O=!1;if(e.getConvexTrianglePillar(S,b,!1),he.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,c,t,e,d)),d&&O||(e.getConvexTrianglePillar(S,b,!0),he.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,x,r,o,a,c,t,e,d)),d&&O))return!0;if(L.length-P>2)return}}boxHeightfield(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,r,o,a,c,l,h,d){let u=e.data,f=e.elementSize,m=t.boundingSphereRadius,x=F1,g=z1,p=U1;he.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-m)/f)-1,_=Math.ceil((p.x+m)/f)+1,y=Math.floor((p.y-m)/f)-1,E=Math.ceil((p.y+m)/f)+1;if(_<0||E<0||v>u.length||y>u[0].length)return;v<0&&(v=0),_<0&&(_=0),y<0&&(y=0),E<0&&(E=0),v>=u.length&&(v=u.length-1),_>=u.length&&(_=u.length-1),E>=u[0].length&&(E=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);let T=[];e.getRectMinMax(v,y,_,E,T);let C=T[0],L=T[1];if(!(p.z-m>L||p.z+m<C))for(let S=v;S<_;S++)for(let b=y;b<E;b++){let P=!1;if(e.getConvexTrianglePillar(S,b,!1),he.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,c,null,null,d,g,null)),d&&P||(e.getConvexTrianglePillar(S,b,!0),he.pointToWorldFrame(i,o,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,x,r,o,a,c,null,null,d,g,null)),d&&P))return!0}}sphereParticle(t,e,n,i,r,o,a,c,l,h,d){let u=L1;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let m=this.createContactEquation(c,a,e,t,l,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,c,l,h,d){let u=R1;u.set(0,0,1),a.quaternion.vmult(u,u);let f=I1;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let x=this.createContactEquation(c,a,e,t,l,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);let g=P1;u.scale(u.dot(i),g),i.vsub(g,g),x.rj.copy(g),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,d)}convexParticle(t,e,n,i,r,o,a,c,l,h,d){let u=-1,f=D1,m=B1,x=null,g=N1;if(g.copy(i),g.vsub(n,g),r.conjugate(Zf),Zf.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,v=t.faces.length;p!==v;p++){let _=[t.worldVertices[t.faces[p][0]]],y=t.worldFaceNormals[p];i.vsub(_[0],$f);let E=-y.dot($f);if(x===null||Math.abs(E)<Math.abs(x)){if(d)return!0;x=E,u=p,f.copy(y)}}if(u!==-1){let p=this.createContactEquation(c,a,e,t,l,h);f.scale(x,m),m.vadd(i,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);let v=p.ri,_=p.rj;v.vadd(i,v),v.vsub(c.position,v),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,r,c,a,l,h,d)}particleCylinder(t,e,n,i,r,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,r,c,a,l,h,d)}sphereTrimesh(t,e,n,i,r,o,a,c,l,h,d){let u=Wb,f=qb,m=Xb,x=Yb,g=jb,p=Zb,v=Qb,_=Gb,y=Vb,E=t1;he.pointToLocalFrame(i,o,n,g);let T=t.radius;v.lowerBound.set(g.x-T,g.y-T,g.z-T),v.upperBound.set(g.x+T,g.y+T,g.z+T),e.getTrianglesInAABB(v,E);let C=Hb,L=t.radius*t.radius;for(let N=0;N<E.length;N++)for(let U=0;U<3;U++)if(e.getVertex(e.indices[E[N]*3+U],C),C.vsub(g,y),y.lengthSquared()<=L){if(_.copy(C),he.pointToWorldFrame(i,o,_,C),C.vsub(n,y),d)return!0;let z=this.createContactEquation(a,c,t,e,l,h);z.ni.copy(y),z.ni.normalize(),z.ri.copy(z.ni),z.ri.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.copy(C),z.rj.vsub(c.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}for(let N=0;N<E.length;N++)for(let U=0;U<3;U++){e.getVertex(e.indices[E[N]*3+U],u),e.getVertex(e.indices[E[N]*3+(U+1)%3],f),f.vsub(u,m),g.vsub(f,p);let z=p.dot(m);g.vsub(u,p);let B=p.dot(m);if(B>0&&z<0&&(g.vsub(u,p),x.copy(m),x.normalize(),B=p.dot(x),x.scale(B,p),p.vadd(u,p),p.distanceTo(g)<t.radius)){if(d)return!0;let H=this.createContactEquation(a,c,t,e,l,h);p.vsub(g,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),he.pointToWorldFrame(i,o,p,p),p.vsub(c.position,H.rj),he.vectorToWorldFrame(o,H.ni,H.ni),he.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}let S=$b,b=Jb,P=Kb,O=kb;for(let N=0,U=E.length;N!==U;N++){e.getTriangleVertices(E[N],S,b,P),e.getNormal(E[N],O),g.vsub(S,p);let z=p.dot(O);if(O.scale(z,p),g.vsub(p,p),z=p.distanceTo(g),Sn.pointInTriangle(p,S,b,P)&&z<t.radius){if(d)return!0;let B=this.createContactEquation(a,c,t,e,l,h);p.vsub(g,B.ni),B.ni.normalize(),B.ni.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),he.pointToWorldFrame(i,o,p,p),p.vsub(c.position,B.rj),he.vectorToWorldFrame(o,B.ni,B.ni),he.vectorToWorldFrame(o,B.ri,B.ri),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}}E.length=0}planeTrimesh(t,e,n,i,r,o,a,c,l,h,d){let u=new M,f=Fb;f.set(0,0,1),r.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);let x=new M;x.copy(u),he.pointToWorldFrame(i,o,x,u);let g=zb;if(u.vsub(n,g),f.dot(g)<=0){if(d)return!0;let v=this.createContactEquation(a,c,t,e,l,h);v.ni.copy(f);let _=Ob;f.scale(g.dot(f),_),u.vsub(_,_),v.ri.copy(_),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}},_s=new M,mr=new M,gr=new M,Nb=new M,Db=new M,Bb=new Ie,Ub=new Ie,Fb=new M,zb=new M,Ob=new M,kb=new M,Vb=new M;new M;var Hb=new M,Gb=new M,Wb=new M,qb=new M,Xb=new M,Yb=new M,jb=new M,Zb=new M,$b=new M,Jb=new M,Kb=new M,Qb=new un,t1=[],tc=new M,jf=new M,e1=new M,n1=new M,i1=new M;function s1(s,t,e){let n=null,i=s.length;for(let r=0;r!==i;r++){let o=s[r],a=e1;s[(r+1)%i].vsub(o,a);let c=n1;a.cross(t,c);let l=i1;e.vsub(o,l);let h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var ec=new M,r1=new M,o1=new M,a1=new M,c1=[new M,new M,new M,new M,new M,new M],l1=new M,h1=new M,u1=new M,d1=new M,f1=new M,p1=new M,m1=new M,g1=new M,x1=new M,y1=new M,v1=new M,_1=new M,b1=new M,M1=new M;new M;new M;var w1=new M,S1=new M,E1=new M,T1=new M,A1=new M,C1=new M,R1=new M,I1=new M,P1=new M,L1=new M,Zf=new Ie,N1=new M;new M;var D1=new M,$f=new M,B1=new M,U1=new M,F1=new M,z1=[0],O1=new M,k1=new M,dc=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),i=this.current,r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,i=this.previous,r=n.length,o=i.length,a=0;for(let c=0;c<r;c++){let l=!1,h=n[c];for(;h>i[a];)a++;l=h===i[a],l||Jf(t,h)}a=0;for(let c=0;c<o;c++){let l=!1,h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||Jf(e,h)}}};function Jf(s,t){s.push((t&4294901760)>>16,t&65535)}var eu=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`,lu=class{constructor(){this.data={keys:[]}}get(t,e){let n=eu(t,e);return this.data[n]}set(t,e,n){let i=eu(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){let n=eu(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},fc=class extends ic{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new iu,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new ru,this.constraints=[],this.narrowphase=new cu(this),this.collisionMatrix=new nc,this.collisionMatrixPrevious=new nc,this.bodyOverlapKeeper=new dc,this.shapeOverlapKeeper=new dc,this.contactmaterials=[],this.contactMaterialTable=new lu,this.defaultMaterial=new _r("default"),this.defaultContactMaterial=new uc(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof yr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Sn.ALL,n.from=t,n.to=e,n.callback=i,nu.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Sn.ANY,n.from=t,n.to=e,n.result=i,nu.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Sn.CLOSEST,n.from=t,n.to=e,n.result=i,nu.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof kt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let i=e[n].shapes;for(let r=0;r<i.length;r++){let o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Ue.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let i=Ue.now(),r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Ue.now()-i>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=q1,i=X1,r=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=kt.DYNAMIC,u=-1/0,f=this.constraints,m=W1;c.length();let x=c.x,g=c.y,p=c.z,v=0;for(l&&(u=Ue.now()),v=0;v!==r;v++){let N=o[v];if(N.type===d){let U=N.force,z=N.mass;U.x+=z*x,U.y+=z*g,U.z+=z*p}}for(let N=0,U=this.subsystems.length;N!==U;N++)this.subsystems[N].update();l&&(u=Ue.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=Ue.now()-u);let _=f.length;for(v=0;v!==_;v++){let N=f[v];if(!N.collideConnected)for(let U=n.length-1;U>=0;U-=1)(N.bodyA===n[U]&&N.bodyB===i[U]||N.bodyB===n[U]&&N.bodyA===i[U])&&(n.splice(U,1),i.splice(U,1))}this.collisionMatrixTick(),l&&(u=Ue.now());let y=G1,E=e.length;for(v=0;v!==E;v++)y.push(e[v]);e.length=0;let T=this.frictionEquations.length;for(v=0;v!==T;v++)m.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,m),l&&(h.narrowphase=Ue.now()-u),l&&(u=Ue.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);let C=e.length;for(let N=0;N!==C;N++){let U=e[N],z=U.bi,B=U.bj,$=U.si,H=U.sj,J;if(z.material&&B.material?J=this.getContactMaterial(z.material,B.material)||this.defaultContactMaterial:J=this.defaultContactMaterial,J.friction,z.material&&B.material&&(z.material.friction>=0&&B.material.friction>=0&&z.material.friction*B.material.friction,z.material.restitution>=0&&B.material.restitution>=0&&(U.restitution=z.material.restitution*B.material.restitution)),a.addEquation(U),z.allowSleep&&z.type===kt.DYNAMIC&&z.sleepState===kt.SLEEPING&&B.sleepState===kt.AWAKE&&B.type!==kt.STATIC){let ut=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),dt=B.sleepSpeedLimit**2;ut>=dt*2&&(z.wakeUpAfterNarrowphase=!0)}if(B.allowSleep&&B.type===kt.DYNAMIC&&B.sleepState===kt.SLEEPING&&z.sleepState===kt.AWAKE&&z.type!==kt.STATIC){let ut=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),dt=z.sleepSpeedLimit**2;ut>=dt*2&&(B.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(z,B,!0),this.collisionMatrixPrevious.get(z,B)||(xo.body=B,xo.contact=U,z.dispatchEvent(xo),xo.body=z,B.dispatchEvent(xo)),this.bodyOverlapKeeper.set(z.id,B.id),this.shapeOverlapKeeper.set($.id,H.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=Ue.now()-u,u=Ue.now()),v=0;v!==r;v++){let N=o[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(_=f.length,v=0;v!==_;v++){let N=f[v];N.update();for(let U=0,z=N.equations.length;U!==z;U++){let B=N.equations[U];a.addEquation(B)}}a.solve(t,this),l&&(h.solve=Ue.now()-u),a.removeAllEquations();let L=Math.pow;for(v=0;v!==r;v++){let N=o[v];if(N.type&d){let U=L(1-N.linearDamping,t),z=N.velocity;z.scale(U,z);let B=N.angularVelocity;if(B){let $=L(1-N.angularDamping,t);B.scale($,B)}}}this.dispatchEvent(H1),l&&(u=Ue.now());let b=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(t,b,P);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=Ue.now()-u),this.stepnumber+=1,this.dispatchEvent(V1);let O=!0;if(this.allowSleep)for(O=!1,v=0;v!==r;v++){let N=o[v];N.sleepTick(this.time),N.sleepState!==kt.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(pi,mi),t){for(let r=0,o=pi.length;r<o;r+=2)yo.bodyA=this.getBodyById(pi[r]),yo.bodyB=this.getBodyById(pi[r+1]),this.dispatchEvent(yo);yo.bodyA=yo.bodyB=null}if(e){for(let r=0,o=mi.length;r<o;r+=2)vo.bodyA=this.getBodyById(mi[r]),vo.bodyB=this.getBodyById(mi[r+1]),this.dispatchEvent(vo);vo.bodyA=vo.bodyB=null}pi.length=mi.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(pi,mi),n){for(let r=0,o=pi.length;r<o;r+=2){let a=this.getShapeById(pi[r]),c=this.getShapeById(pi[r+1]);gi.shapeA=a,gi.shapeB=c,a&&(gi.bodyA=a.body),c&&(gi.bodyB=c.body),this.dispatchEvent(gi)}gi.bodyA=gi.bodyB=gi.shapeA=gi.shapeB=null}if(i){for(let r=0,o=mi.length;r<o;r+=2){let a=this.getShapeById(mi[r]),c=this.getShapeById(mi[r+1]);xi.shapeA=a,xi.shapeB=c,a&&(xi.bodyA=a.body),c&&(xi.bodyB=c.body),this.dispatchEvent(xi)}xi.bodyA=xi.bodyB=xi.shapeA=xi.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new un;var nu=new Sn,Ue=globalThis.performance||{};if(!Ue.now){let s=Date.now();Ue.timing&&Ue.timing.navigationStart&&(s=Ue.timing.navigationStart),Ue.now=()=>Date.now()-s}new M;var V1={type:"postStep"},H1={type:"preStep"},xo={type:kt.COLLIDE_EVENT_NAME,body:null,contact:null},G1=[],W1=[],q1=[],X1=[],pi=[],mi=[],yo={type:"beginContact",bodyA:null,bodyB:null},vo={type:"endContact",bodyA:null,bodyB:null},gi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},xi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var Ke={robot:{mass:1.8,magnetic:!0,radius:.72,receiver:"repair",name:"\u0420\u043E\u0431\u043E\u0442"},gear:{mass:.9,magnetic:!0,radius:.49,receiver:"repair",name:"\u0428\u0435\u0441\u0442\u0435\u0440\u043D\u044F"},bolt:{mass:.6,magnetic:!0,radius:.4,receiver:"scrap",name:"\u0411\u043E\u043B\u0442"},pipe:{mass:2.1,magnetic:!0,radius:.72,receiver:"scrap",name:"\u0422\u0440\u0443\u0431\u0430"},engine:{mass:8.8,magnetic:!0,radius:.91,receiver:"scrap",name:"\u041C\u043E\u0442\u043E\u0440"},battery:{mass:1.2,magnetic:!0,radius:.48,receiver:"repair",name:"\u042D\u043D\u0435\u0440\u0433\u043E\u044F\u0447\u0435\u0439\u043A\u0430",fragile:!0},tire:{mass:1.3,magnetic:!1,radius:.49,receiver:null,name:"\u0420\u0435\u0437\u0438\u043D\u043E\u0432\u0430\u044F \u0448\u0438\u043D\u0430"}};Object.assign(Ke,{housing:{mass:4.2,magnetic:!0,radius:.88,receiver:"repair",name:"\u041A\u043E\u0440\u043F\u0443\u0441"},shaft:{mass:1.1,magnetic:!0,radius:.85,receiver:"repair",name:"\u0412\u0430\u043B\u044B"},cog:{mass:.9,magnetic:!0,radius:.5,receiver:"repair",name:"\u0428\u0435\u0441\u0442\u0435\u0440\u043D\u0438"},cover:{mass:1.5,magnetic:!0,radius:.84,receiver:"repair",name:"\u041A\u0440\u044B\u0448\u043A\u0430"}});var fu=-1.5,rp=[{id:"repair",x:4.65,z:2.9,w:2.9,d:2.5,name:"\u0420\u0435\u043C\u043E\u043D\u0442"},{id:"scrap",x:-4.65,z:2.9,w:2.9,d:2.5,name:"\u0421\u043A\u043B\u0430\u0434 \u0434\u0435\u0442\u0430\u043B\u0435\u0439"}],op=[{name:"\u0421\u043F\u0430\u0441\u0442\u0438 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0445",note:"\u0414\u043E\u0441\u0442\u0430\u0432\u044C \u0434\u0432\u0443\u0445 \u0440\u043E\u0431\u043E\u0442\u043E\u0432 \u0432 \u0433\u043E\u043B\u0443\u0431\u043E\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A \u0440\u0435\u043C\u043E\u043D\u0442\u0430. \u041B\u0438\u0448\u043D\u0435\u0435 \u0436\u0435\u043B\u0435\u0437\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0443.",needs:{robot:2},seed:32},{name:"\u0417\u0430\u043F\u0447\u0430\u0441\u0442\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439",note:"\u041D\u0443\u0436\u043D\u044B \u0442\u0440\u0438 \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u0438 \u0438 \u043E\u0434\u0438\u043D \u0440\u043E\u0431\u043E\u0442. \u0428\u0438\u043D\u044B \u043D\u0435 \u043F\u0440\u0438\u0442\u044F\u0433\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u2014 \u043C\u0430\u0433\u043D\u0438\u0442\u0443 \u043D\u0443\u0436\u0435\u043D \u043C\u0435\u0442\u0430\u043B\u043B.",needs:{gear:3,robot:1},seed:84},{name:"\u0422\u044F\u0436\u0451\u043B\u044B\u0439 \u0440\u0435\u0439\u0441",note:"\u0423\u043D\u0435\u0441\u0438 \u043C\u043E\u0442\u043E\u0440 \u0438 \u0434\u0432\u0430 \u0431\u043E\u043B\u0442\u0430 \u0432 \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0443, \u043E\u0434\u043D\u043E\u0433\u043E \u0440\u043E\u0431\u043E\u0442\u0430 \u2014 \u0432 \u0440\u0435\u043C\u043E\u043D\u0442. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0441\u0432\u043E\u0431\u043E\u0434\u0438 \u043C\u043E\u0442\u043E\u0440 \u043E\u0442 \u043C\u0435\u043B\u043E\u0447\u0435\u0439.",needs:{engine:1,bolt:2,robot:1},seed:107},{name:"\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0441\u0432\u0430\u043B\u043A\u0430",note:"\u041D\u0438\u043A\u0430\u043A\u043E\u0439 \u0441\u043F\u0435\u0448\u043A\u0438. \u041F\u043E\u0434\u043D\u0438\u043C\u0430\u0439, \u0440\u0430\u0441\u043A\u0430\u0447\u0438\u0432\u0430\u0439, \u043F\u0435\u0440\u0435\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0439 \u0438 \u0441\u043E\u0440\u0442\u0438\u0440\u0443\u0439 \u043D\u0430\u0445\u043E\u0434\u043A\u0438.",needs:{},seed:63}],mc=13,xe=[...op.slice(0,3),...wn,op[3],kn],Ms=(s,t,e)=>Math.max(t,Math.min(e,s));function j1(s){return()=>(s=Math.imul(s,1664525)+1013904223|0,(s>>>0)/4294967296)}var pc=class{constructor({seed:t=32,mission:e=null}={}){this.seed=t,this.mission=e,this.reset(t,e)}reset(t=this.seed,e=this.mission){this.seed=t,this.mission=e?.seed===t?e:null,this.failed=!1,this.obstacles=[],this.world=new fc({gravity:new M(0,-9.81,0),allowSleep:!0}),this.world.broadphase=new oc(this.world),this.world.solver.iterations=25,this.world.solver.tolerance=1e-5,this.world.defaultContactMaterial.friction=.46,this.world.defaultContactMaterial.restitution=.08,this.world.defaultContactMaterial.contactEquationStiffness=2e7,this.world.defaultContactMaterial.contactEquationRelaxation=5,this.world.defaultContactMaterial.frictionEquationStiffness=1e7,this.items=[],this.held=new Map,this.events=[],this.on=!1,this.time=0,this.delivered={},this.capacity=12,this.overloaded=!1,this.jointCooldown=new Map,this.target={x:0,z:1.4,height:4.4},this.paused=!1;let n=new kt({mass:0,shape:new Kn(new M(6.6,.25,4.8)),position:new M(0,-.35,0)});n.material=new _r({friction:.55,restitution:.06}),this.world.addBody(n),this.floor=n,this.groundFloor=new kt({mass:0,shape:new Kn(new M(24,.15,26)),position:new M(0,fu-.15,0)}),this.world.addBody(this.groundFloor);let i=(a,c,l,h,d,u)=>this.world.addBody(new kt({mass:0,shape:new Kn(new M(h,d,u)),position:new M(a,c,l)}));i(-6.45,.35,0,.16,.6,4.8),i(6.45,.35,0,.16,.6,4.8),i(0,.35,-4.65,6.6,.6,.16),i(0,.2,4.65,6.6,.45,.16);for(let a of rp)i(a.x-a.w/2,.3,a.z,.13,.4,a.d/2),i(a.x+a.w/2,.3,a.z,.13,.4,a.d/2),i(a.x,.3,a.z-a.d/2,a.w/2,.4,.13),i(a.x,.3,a.z+a.d/2,a.w/2,.4,.13);if(this.mission?.gate)for(let a of[-2.9,2.9])i(1,2.6,a,.18,2.7,2),this.obstacles.push({x:1,y:2.6,z:a,w:.36,h:5.4,d:4,kind:"gate"});if(this.mission?.posts)for(let a of[1.1,2.5])i(2.2,.7,a,.28,.8,.28),this.obstacles.push({x:2.2,y:.7,z:a,w:.56,h:1.6,d:.56,kind:"post"});this.anchor=new kt({type:kt.KINEMATIC,allowSleep:!1,position:new M(0,6.85,1.4)}),this.world.addBody(this.anchor),this.links=[];let r=this.anchor,o=.27;for(let a=0;a<8;a++){let c=new kt({mass:.42,allowSleep:!1,shape:new bo(.075),position:new M(0,6.85-(a+.5)*o,1.4),linearDamping:.12,angularDamping:.55,collisionFilterGroup:2,collisionFilterMask:0});this.world.addBody(c);let l=new M(0,r===this.anchor?0:-o/2,0),h=new M(0,o/2,0),d=new vr(r,l,c,h,1e5);this.world.addConstraint(d),this.links.push(c),r=c}this.magnet=new kt({mass:5,allowSleep:!1,position:new M(0,6.85-8*o-.29,1.4),linearDamping:.18,angularDamping:.7}),this.magnet.addShape(new dn(.66,.68,.4,16));for(let a of[-.31,.31])this.magnet.addShape(new Kn(new M(.175,.04,.325)),new M(a,-.27,0));this.world.addBody(this.magnet),this.world.addConstraint(new vr(r,new M(0,-o/2,0),this.magnet,new M(0,.29,0),1e5)),this.makePile(t);for(let a=0;a<210;a++)this.world.step(1/120);this.events=[],this.time=0}makePile(t){if(this.mission?.layout){let o=0;for(let[a,c]of this.mission.layout.entries())this.spawn(c.type,{x:c.x,y:c.y,z:c.z},a,c.rotation||(c.type==="robot"?{x:.03,y:-.1,z:o++%2?-.8:.7}:{x:.05,y:.2,z:.1}));return}let e=j1(t),n=t===84?["robot","gear","gear","robot","bolt","gear","pipe","engine","tire","bolt"]:t===107?["robot","gear","pipe","robot","bolt","engine","tire","bolt","pipe"]:t===63?["robot","gear","pipe","robot","bolt","gear","engine","tire","robot","gear","bolt","pipe"]:["robot","gear","pipe","robot","bolt","engine","tire","gear","bolt","robot"],i=[[-1.65,.5],[.55,-.4],[-2.4,1.05],[2.1,.65],[-.5,1.15],[2.5,-2.2],[0,-2.65],[-2.5,-2.3],[1.4,1.3],[-.45,-1.95],[-3.6,-.1],[3.7,-.25]],r=0;for(let o=0;o<n.length;o++){let a=n[o],[c,l]=i[o],h=a==="robot"?{x:.035,y:-.24+r%2*.35,z:r++%2?-1.05:.72}:{x:(e()-.5)*1.1,y:e()*Math.PI*2,z:(e()-.5)*1.1};this.spawn(a,{x:c+(e()-.5)*.08,y:.95,z:l+(e()-.5)*.08},o,h)}}spawn(t,e,n=this.items.length,i={x:0,y:0,z:0}){let r=Ke[t],o=new kt({mass:r.mass,position:new M(e.x,e.y,e.z),linearDamping:.08,angularDamping:.15,sleepSpeedLimit:.14,sleepTimeLimit:1});o.quaternion.setFromEuler(i.x,i.y,i.z);let a=(l,h,d,u,f,m)=>o.addShape(new Kn(new M(u,f,m)),new M(l,h,d));if(t==="robot"&&(a(0,-.12,0,.32,.33,.24),a(0,.43,0,.385,.27,.27),a(-.39,-.1,0,.1,.25,.12),a(.39,-.1,0,.1,.25,.12),a(-.17,-.52,.08,.13,.12,.25),a(.17,-.52,.08,.13,.12,.25)),t==="gear"){o.addShape(new dn(.45,.45,.19,12));for(let l=0;l<12;l++){let h=l*Math.PI/6;o.addShape(new Kn(new M(.105,.105,.105)),new M(Math.cos(h)*.43,0,Math.sin(h)*.43))}}if(t==="bolt"&&(o.addShape(new dn(.105,.105,.6,10)),o.addShape(new dn(.25,.25,.18,6),new M(0,.36,0))),t==="pipe"){let l=new Ie().setFromEuler(0,0,Math.PI/2);o.addShape(new dn(.17,.17,.9,10),new M(0,-.22,0),l),o.addShape(new dn(.17,.17,.54,10),new M(-.45,.05,0)),o.addShape(new dn(.17,.17,.54,10),new M(.45,.05,0))}if(t==="engine"&&(a(0,0,0,.55,.38,.4),o.addShape(new dn(.35,.35,.25,12),new M(0,.15,.48),new Ie().setFromEuler(Math.PI/2,0,0)),a(-.57,-.19,0,.14,.16,.5),a(.57,-.19,0,.14,.16,.5)),t==="housing"){a(0,.05,0,1.175,.095,.825);for(let l of[-1.09,1.09])a(l,.54,0,.085,.53,.825);for(let l of[-.75,.75])a(0,.36,l,1.09,.28,.08)}if(t==="shaft"&&o.addShape(new dn(.16,.16,1.98,12),new M,new Ie().setFromEuler(Math.PI/2,0,0)),t==="cog"&&o.addShape(new dn(.5,.5,.28,16),new M,new Ie().setFromEuler(Math.PI/2,0,0)),t==="cover"&&a(0,.02,0,1.175,.1,.825),t==="battery"&&(a(0,0,0,.32,.28,.25),a(0,.31,0,.24,.055,.17)),t==="tire")for(let l=0;l<12;l++){let h=l*Math.PI/6;o.addShape(new bo(.15),new M(Math.cos(h)*.32,0,Math.sin(h)*.32))}if(t==="housing"||t==="cover"){for(let l of o.shapes)l.halfExtents?.scale(.75,l.halfExtents),l.updateConvexPolyhedronRepresentation?.(),l.updateBoundingSphereRadius();for(let l of o.shapeOffsets)l.scale(.75,l);o.updateMassProperties(),o.updateBoundingRadius()}this.world.addBody(o);let c={id:"item-"+n,type:t,body:o,variant:n%2,settled:0,rejected:!1,delivered:!1,damage:0,lastImpact:-10,floorTime:0};return Ke[t].fragile&&o.addEventListener("collide",l=>{let h=Math.abs(l.contact.getImpactVelocityAlongNormal());h>5&&this.time-c.lastImpact>.25&&(c.lastImpact=this.time,c.damage=Math.min(1,c.damage+(h-5)/8),this.events.push({kind:"damage",id:c.id,damage:c.damage}),c.damage>=1&&!this.failed&&(this.failed=!0,this.events.push({kind:"fragile-broken",id:c.id})))}),o.craneItem=c,this.items.push(c),c}setTarget(t,e,n=this.target.height){this.target={x:Ms(t,-5.65,5.65),z:Ms(e,-3.8,3.6),height:Ms(n,.32,5)}}setMagnet(t){this.on!==t&&(this.on=t,t||this.releaseAll(),this.events.push({kind:t?"on":"off"}))}releaseAll(){for(let t of this.held.values())this.world.removeConstraint(t.joint),t.item.body.wakeUp();for(let t of this.held.keys())this.jointCooldown.set(t,this.time+.4);this.held.clear()}get load(){let t=0;for(let e of this.held.values())t+=e.item.body.mass;return t}hold(t,e=this.magnet,n=null){if(this.held.has(t.id)||!Ke[t.type].magnetic||t.delivered||this.jointCooldown.get(t.id)>this.time)return!1;let i=e===this.magnet?1:(this.held.get(e.craneItem?.id)?.depth||0)+1;if(i>3||this.load+t.body.mass>this.capacity)return this.overloaded=!0,!1;let r=n||e.position.vadd(t.body.position).scale(.5),o=e.pointToLocalFrame(r),a=t.body.pointToLocalFrame(r),c=new vr(e,o,t.body,a,550);return c.collideConnected=!0,this.world.addConstraint(c),this.held.set(t.id,{item:t,parent:e,joint:c,depth:i,stress:0,tension:0,strength:0,created:this.time,warned:!1}),t.body.wakeUp(),this.events.push({kind:"attach",id:t.id,type:t.type,depth:i}),!0}subtree(t){let e=new Set([t]),n=!0;for(;n;){n=!1;for(let[i,r]of this.held)e.has(r.parent.craneItem?.id)&&!e.has(i)&&(e.add(i),n=!0)}return[...e].map(i=>this.held.get(i)).filter(Boolean)}breakBranch(t){let e=this.subtree(t),n=this.held.get(t);if(!n)return!1;let i=n.parent.pointToWorldFrame(n.joint.pivotA);for(let r of e)this.world.removeConstraint(r.joint),this.held.delete(r.item.id),this.jointCooldown.set(r.item.id,this.time+.9),r.item.body.wakeUp();return this.events.push({kind:"break",id:t,count:e.length,point:i.toArray(),tension:n.tension,strength:n.strength}),!0}checkGrips(t){for(let[n,i]of this.held){let r=this.subtree(n).reduce((l,h)=>l+h.item.body.mass,0);i.strength=i.parent===this.magnet?450+r*35:20+r*14;let o=Math.hypot(...i.joint.equations.map(l=>l.multiplier||0));if(this.subtree(n).some(l=>(l.item.body.aabbNeedsUpdate&&l.item.body.updateAABB(),l.item.body.aabb.lowerBound.y<.1))||this.time-i.created<.65){i.tension=0,i.stress=0;continue}i.tension+=(o-i.tension)*(1-Math.exp(-t/.06));let c=i.tension/i.strength;c>1?i.stress=Math.min(1,i.stress+Math.min(4,c-1)*t/.28):i.stress=Math.max(0,i.stress-t*1.7),i.stress>.18&&!i.warned&&(i.warned=!0,this.events.push({kind:"strain",id:n,point:i.parent.pointToWorldFrame(i.joint.pivotA).toArray()})),i.stress<.03&&(i.warned=!1)}let e=[...this.held].filter(([,n])=>n.stress>=1).sort((n,i)=>i[1].depth-n[1].depth);for(let[n]of e)this.held.has(n)&&this.breakBranch(n)}attract(t){this.overloaded=!1;let e=this.magnet.pointToWorldFrame(new M(0,-.23,0));for(let n of this.items){if(n.delivered||!Ke[n.type].magnetic||this.held.has(n.id)||this.jointCooldown.get(n.id)>this.time)continue;let i=n.body,r=e.vsub(i.position),o=r.length(),a=Ke[n.type].radius,c=Math.max(0,o-a-.42);if(c>1.5)continue;let l=(1-c/1.5)**2,h=Math.min(155,i.mass*38)*l;o>.01&&(r.scale(h/o,r),i.applyForce(r),i.wakeUp());for(let d of this.held.values()){if(d.depth>=3)continue;let u=d.item.body.position.vsub(i.position),f=u.length(),m=a+Ke[d.item.type].radius+.2;f>m||f<.01||(u.scale(Math.min(35,i.mass*12)*(1-f/(m+.1))/f,u),i.applyForce(u))}}for(let n of this.world.contacts){let i,r,o;n.bi===this.magnet&&n.bj.craneItem?(i=n.bj.craneItem,r=this.magnet,o=n.bi.position.vadd(n.ri)):n.bj===this.magnet&&n.bi.craneItem?(i=n.bi.craneItem,r=this.magnet,o=n.bj.position.vadd(n.rj)):n.bi.craneItem&&n.bj.craneItem&&(this.held.has(n.bi.craneItem.id)&&!this.held.has(n.bj.craneItem.id)?(i=n.bj.craneItem,r=n.bi,o=n.bi.position.vadd(n.ri)):this.held.has(n.bj.craneItem.id)&&!this.held.has(n.bi.craneItem.id)&&(i=n.bi.craneItem,r=n.bj,o=n.bj.position.vadd(n.rj))),i&&r&&this.hold(i,r,o)}}step(t=1/120){if(this.paused||this.failed)return;t=Math.min(t,1/60),this.time+=t;let e=new M(this.target.x,this.target.height+2.45,this.target.z),n=e.vsub(this.anchor.position),i=3.7,r=(o,a,c)=>o+Ms(a-o,-c*t,c*t);this.anchor.velocity.set(r(this.anchor.velocity.x,Ms(n.x*4,-i,i),7),r(this.anchor.velocity.y,Ms(n.y*3.5,-1.7,1.7),2.6),r(this.anchor.velocity.z,Ms(n.z*4,-i,i),7)),this.on&&this.attract(t);for(let o of this.held.values())o.item.body.wakeUp();this.world.step(t),this.checkGrips(t);for(let o of this.items){if(o.delivered)continue;let a=o.body.position,c=(Math.abs(a.x)>6.3||Math.abs(a.z)>4.5)&&a.y<-.6&&!this.held.has(o.id);if(o.floorTime=c&&o.body.velocity.length()<.7?o.floorTime+t:0,(o.floorTime>.8||a.y<-5||Math.abs(a.x)>10||Math.abs(a.z)>9)&&(o.body.position.set(0,1.5,-1),o.body.velocity.setZero(),o.body.angularVelocity.setZero(),o.floorTime=0,this.events.push({kind:"recover",id:o.id})),!Number.isFinite(a.x+a.y+a.z))throw Error("Physics diverged");this.checkDelivery(o,t)}}checkDelivery(t,e){if(this.held.has(t.id)){t.settled=0;return}let n=t.body,i=n.position,r=rp.find(a=>Math.abs(i.x-a.x)<a.w/2-.2&&Math.abs(i.z-a.z)<a.d/2-.2&&i.y<.95);if(!r||n.velocity.length()>1.05||n.angularVelocity.length()>2){t.settled=0,r||(t.rejected=!1);return}if(t.settled+=e,t.settled<.65)return;let o=Ke[t.type].receiver;if(r.id!==o){t.rejected||(t.rejected=!0,this.events.push({kind:"reject",id:t.id,type:t.type,bin:r.id,reason:o?"\u042D\u0442\u043E "+Ke[t.type].name.toLowerCase()+": \u043D\u0443\u0436\u0435\u043D \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A \xAB"+(o==="repair"?"\u0420\u0435\u043C\u043E\u043D\u0442":"\u0421\u043A\u043B\u0430\u0434 \u0434\u0435\u0442\u0430\u043B\u0435\u0439")+"\xBB.":"\u0420\u0435\u0437\u0438\u043D\u0430 \u043D\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u043D\u0438 \u043E\u0434\u043D\u043E\u043C\u0443 \u0438\u0437 \u044D\u0442\u0438\u0445 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A\u043E\u0432."}));return}t.delivered=!0,this.world.removeBody(n),this.delivered[t.type]=(this.delivered[t.type]||0)+1,this.events.push({kind:"deliver",id:t.id,type:t.type,bin:r.id})}drainEvents(){let t=this.events;return this.events=[],t}snapshot(){return{time:this.time,on:this.on,paused:this.paused,failed:this.failed,obstacles:this.obstacles,load:this.load,capacity:this.capacity,target:{...this.target},magnet:{position:this.magnet.position.toArray(),quaternion:this.magnet.quaternion.toArray(),velocity:this.magnet.velocity.toArray()},anchor:this.anchor.position.toArray(),held:[...this.held].map(([t,e])=>({id:t,parent:e.parent===this.magnet?"magnet":e.parent.craneItem?.id,depth:e.depth,stress:e.stress,tension:e.tension,strength:e.strength})),delivered:{...this.delivered},items:this.items.map(t=>({id:t.id,type:t.type,position:t.body.position.toArray(),quaternion:t.body.quaternion.toArray(),velocity:t.body.velocity.toArray(),delivered:t.delivered,damage:t.damage,magnetic:Ke[t.type].magnetic}))}}};var yi=fu;function Z1(s){s.traverse(t=>{t.isMesh&&t.geometry.dispose()})}function ap(s,t){let e=new se,n=new se,i=new t.Builder,r=s.floor.map.clone();r.repeat.set(7,8),r.needsUpdate=!0;let o=new zt(new Fn(48,52),new Ye({color:"#e5ddc7",map:r,roughness:.98,metalness:.025,transparent:!0}));o.material.onBeforeCompile=_=>{_.vertexShader=_.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloorWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloorWorld=(modelMatrix*vec4(position,1.0)).xz;`),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFloorWorld;`).replace("#include <alphatest_fragment>",`diffuseColor.a*=(1.0-smoothstep(17.0,24.0,abs(vFloorWorld.x)))*(1.0-smoothstep(17.0,26.0,abs(vFloorWorld.y)));
#include <alphatest_fragment>`)},o.material.customProgramCacheKey=()=>"yard-floor",o.rotation.x=-Math.PI/2,o.position.y=yi,o.receiveShadow=!0,o.userData.noShadowProxy=!0,e.add(n),n.add(o);for(let _ of[-5.8,0,5.8])for(let y of[-4.15,4.15]){i.box(.64,.12,.64,s.rust,[_,-1.44,y]),i.box(.27,.66,.29,s.iron,[_,-1.05,y]);for(let E of[-.22,.22])for(let T of[-.22,.22])i.cyl(.035,.035,.05,s.brass,[_+E,-1.355,y+T],void 0,6)}for(let _ of[-4.15,4.15])i.box(12,.18,.22,s.rust,[0,-.72,_]),i.box(10.8,.11,.1,s.iron,[0,-1.05,_]);for(let _ of[-5.8,5.8])i.box(.22,.18,8.4,s.rust,[_,-.72,0]);n.add(i.build());let a=new t.Builder;a.box(7.4,.1,10.4,s.rust,[0,yi+.05,-10.5],void 0,.03),a.box(7.05,.06,10.05,s.floor,[0,yi+.13,-10.5],void 0,.02);for(let _ of[-3.6,3.6])a.box(.14,.025,10.4,s.hazard,[_,yi+.12,-10.5]);n.add(a.build());let c=new se;c.position.set(0,yi+.16,-8.8),e.add(c);let l=null,h=null,d=[],u=[],f=0,m=[],x=null,g=[0,1,2,0].map((_,y)=>{let E=t.item("robot",_);return E.position.set(-3+y*1.9,.71,-6.3),E.rotation.y=Math.PI+(y-1)*.2,e.add(E),E.traverse(T=>{T.isMesh&&(T.castShadow=!1,T.receiveShadow=!1)}),E});function p(_){f=_.count,m=_.ids,x=null,h&&(c.remove(h),h.geometry.dispose()),l&&(c.remove(l),Z1(l)),l=new se,c.add(l),d=[],u=[];let y=new t.Builder;y.box(4.2,.32,2.3,s.iron,[0,1.24,0],void 0,.12);for(let E of[-1.65,1.65])y.box(.25,.42,2.5,s.rust,[E,1.25,0]);for(let E of[-.88,.88])y.box(3.7,.16,.16,s.brass,[0,1.48,E]);if(f<6)for(let E of[-1.4,1.4])y.box(.6,.16,1.6,s.rust,[E,.09,0]),y.box(.24,.95,.3,s.iron,[E,.56,0]);if(f>=2){y.cyl(.38,.38,1.3,s.iron,[-.8,1.63,0],[0,0,Math.PI/2]),y.box(.66,.64,.85,s.teal,[-.7,1.65,0],void 0,.1);for(let E=0;E<4;E++)y.box(.48,.035,.04,s.brass,[-.7,1.5+E*.1,.45])}if(f>=3)for(let E of[-1.4,1.4])y.cyl(.21,.21,1.5,s.brass,[E,1.25,0],[Math.PI/2,0,0]);if(f>=5){y.box(.8,.52,.72,s.ivory,[.6,1.62,0],void 0,.07);for(let E=0;E<3;E++)y.box(.07,.15,.03,s.cyan,[.4+E*.15,1.68,.38])}if(f>=8){y.box(3.4,.12,.45,s.iron,[0,1.95,-.82]);for(let E of[-1.3,1.3])y.cyl(.055,.055,.34,s.brass,[E,1.75,-.82]);y.box(3.8,.14,2.1,s.teal,[0,1.56,0],void 0,.05);for(let E of[-1.75,1.75])y.box(.09,.4,1.8,s.brass,[E,1.8,0])}if(f>=9){y.box(2.1,1.05,1.4,s.ivory,[0,2.15,.38],void 0,.24),y.box(2.26,.13,1.58,s.teal,[0,2.72,.38],void 0,.07);for(let E of[-.46,.46])y.cyl(.29,.32,.11,s.brass,[E,2.27,1.12],[Math.PI/2,0,0]),y.ball(.25,s.lens,[E,2.27,1.2],[1,1,.52]),y.ball(.13,s.pupil,[E,2.27,1.34],[1,1,.4]),y.ball(.045,s.glint,[E-.055,2.33,1.4]);y.box(.55,.05,.05,s.black,[0,1.98,1.12],void 0,.015)}l.add(y.build());for(let E=0;E<4;E++){if(f<(E<2?4:6))continue;let T=new se,C=new t.Builder;T.position.set(E%2?1.55:-1.55,1.23,E<2?.72:-.72),C.ball(.2,s.brass,[0,0,0]),C.cyl(.12,.12,.68,s.steel,[0,-.38,0]),C.cyl(.19,.19,.37,s.teal,[0,-.22,0]),C.ball(.16,s.iron,[0,-.72,0]),C.cyl(.1,.1,.28,s.steel,[0,-.93,0]),C.box(.68,.22,.72,s.rust,[0,-1.12,.11],void 0,.08),T.add(C.build()),l.add(T),d.push(T)}l.traverse(E=>{E.isMesh&&(E.castShadow=!1,E.receiveShadow=!1)}),h=en(l,!1),c.add(h)}function v(_,y,E,T=!1){(y.count!==f||y.ids.join("|")!==m.join("|"))&&p(y),T&&x===null&&(x=_);let C=x===null?0:Math.max(0,_-x),L=y.finished&&C>1.4&&C<11;c.position.set(L?Math.sin(C*.35)*.3:0,yi+.16+(L?Math.sin(C*6)*.025:0),-8.8-(x!==null?Math.min(3.6,Math.max(0,C-1.4)*.38):0));for(let b=0;b<d.length;b++)d[b].rotation.x=L?Math.sin(C*5+b%2*Math.PI+(b>1?Math.PI:0))*.24:f>=6?Math.sin(_*1.4+b)*.015:0;let S=0;for(let b=0;b<g.length;b++){let P=b<y.crew.length,O=g[b];if(O.visible=P&&E,!!P){if(x!==null&&C>1?(O.position.set(-1.35+S*.9,c.position.y+2.465,c.position.z-.82),O.rotation.y=0,O.rotation.z=Math.sin(_*3+b)*.025,O.scale.setScalar(.65)):(O.scale.setScalar(1),O.rotation.y=Math.PI+(b-1)*.2,O.position.set(-3+S*1.9,yi+.71,-6.3),O.rotation.z=Math.sin(_*2.5+b)*.04,O.userData.antenna&&(O.userData.antenna.rotation.z=Math.sin(_*9+b)*.14)),O.userData.eyes)for(let N of O.userData.eyes)N.scale.y=(_+b*.6)%5.5>5.3?.15:1;S++}}return{stage:f,crew:y.crew.length,walking:L,launchElapsed:C,position:c.position.toArray()}}return p({count:0,ids:[],crew:[]}),{root:e,stationary:n,carrier:c,floor:o,update:v,rebuild:p,resetLaunch:()=>{x=null},groundY:yi,supportBottom:yi,platformUnderside:-.705}}function cp(s,t,e){let n=new e.Builder;for(let i of s)if(n.box(i.w,i.h,i.d,t.iron,[i.x,i.y,i.z],void 0,.06),n.box(i.w+.02,.1,i.d,t.hazard,[i.x,i.y+i.h/2+.05,i.z]),i.kind==="gate"){for(let r of[i.z-i.d/2+.12,i.z+i.d/2-.12])n.box(.44,i.h,.18,t.rust,[i.x,i.y,r]);for(let r=.3;r<5;r+=.8)n.box(.04,.045,i.d-.4,t.steel,[i.x+.2,r,i.z])}else n.box(i.w+.18,.1,i.d+.18,t.rust,[i.x,0,i.z]);return n.build()}var lp=7.91;function hp(s,t){let e=new se,n=new se,i=new se,r=new se,o=new se;e.name="overhead-crane",e.add(n,i,r);let a=new t.Builder;for(let y of[-6.8,6.8]){a.box(.18,.46,10.5,s.iron,[y,8.8,0]);for(let E of[8.54,9.06])a.box(.52,.08,10.65,s.rust,[y,E,0]);a.box(.08,.08,10.3,s.steel,[y,9.14,0]);for(let E of[-4.8,4.8]){a.box(.26,9.74,.28,s.iron,[y,3.53,E]),a.box(.6,.16,.68,s.rust,[y,-1.42,E]),a.box(.65,.12,.65,s.rust,[y,8.5,E]);for(let T of[-.21,.21])for(let C of[-.24,.24])a.cyl(.045,.045,.055,s.brass,[y+T,-1.31,E+C],void 0,6)}}n.add(a.build());let c=new t.Builder;c.box(13.6,.48,.2,s.teal);for(let y of[-.29,.29])c.box(13.8,.09,.65,s.rust,[0,y,0]);c.box(12.8,.08,.025,s.hazard,[0,-.12,.114]);for(let y of[-6.8,6.8]){c.box(.74,.33,1.18,s.teal,[y,.38,0]);for(let E of[-.43,.43])c.box(.18,.55,.23,s.brass,[y,.68,E])}i.add(c.build());let l=new lr(.19,.19,.16,16),h=new cr(l,s.steel,4),d=new cr(l,s.brass,4);i.add(h),r.add(d);let u=new t.Builder;u.box(1.35,.16,.95,s.iron,[0,.39,0]);for(let y of[-.4,.4])u.box(1.2,.14,.14,s.teal,[0,.12,y]);for(let y of[-.51,.51])u.box(.12,.76,.73,s.teal,[y,-.13,0]);for(let y of[-.32,.32])u.box(.2,.11,.74,s.rust,[y,-.57,0]);for(let y of[-.31,.31])u.box(.84,.11,.12,s.rust,[0,-.57,y]);u.cyl(.22,.22,.38,s.iron,[.83,.2,0],[0,0,Math.PI/2]),u.cyl(.18,.18,.13,s.brass,[1.07,.2,0],[0,0,Math.PI/2]),u.box(.38,.2,.5,s.teal,[.77,.36,0]);for(let y of[-.52,.52])for(let E of[-.38,.38])u.cyl(.045,.045,.06,s.brass,[y,.5,E],void 0,6);for(let y of[-.47,.47])for(let E of[-.43,.43])u.cyl(.12,.12,.175,s.iron,[y,.475,E],[Math.PI/2,0,0]),u.cyl(.05,.05,.19,s.steel,[y,.475,E],[Math.PI/2,0,0],6);r.add(u.build());let f=new t.Builder;f.cyl(.24,.24,.72,s.iron,void 0,[0,0,Math.PI/2]);for(let y of[-.4,.4])f.cyl(.34,.34,.07,s.brass,[y,0,0],[0,0,Math.PI/2]);for(let y=0;y<10;y++)f.ring(.248,.018,s.steel,[-.32+y*.071,0,0],[0,Math.PI/2,0]);f.box(.08,.09,.05,s.ivory,[0,.25,0]),o.add(f.build()),o.position.set(0,-.45,0),r.add(o);let m=new t.Builder;m.cyl(.11,.15,.1,s.brass,[0,.56,0]),m.ball(.1,s.amber,[0,.7,0],[1,1.35,1]);let x=m.build();r.add(x);let g=x.children.find(y=>y.material===s.amber);g.material=g.material.clone();let p=new cr(new bn(.115,.033,6,18),s.steel,24);e.add(p),p.frustumCulled=!1,p.instanceMatrix.setUsage(_f),e.traverse(y=>{y.isMesh&&(y.castShadow=!1,y.receiveShadow=!1)}),n.updateMatrixWorld(!0),n.traverse(y=>y.matrixAutoUpdate=!1);let v=new ze;function _(y,E){g.material.emissiveIntensity=.8+.4*Math.sin(E*5),i.position.set(0,8.55,y.z),r.position.set(y.x,8.6,y.z),o.rotation.x=(y.y-6.85)/.24;let T=0;for(let S of[-6.8,6.8])for(let b of[-.43,.43])v.position.set(S,.82,b),v.rotation.set(y.z/.19,0,Math.PI/2),v.scale.set(1,1,1),v.updateMatrix(),h.setMatrixAt(T++,v.matrix);h.instanceMatrix.needsUpdate=!0,T=0;for(let S of[-.47,.47])for(let b of[-.43,.43])v.position.set(S,.475,b),v.rotation.set(Math.PI/2,y.x/.19,0),v.updateMatrix(),d.setMatrixAt(T++,v.matrix);d.instanceMatrix.needsUpdate=!0;let C=Math.max(0,lp-y.y),L=Math.min(24,Math.max(1,Math.ceil(C/.27)));p.count=L;for(let S=0;S<L;S++)v.position.set(y.x,lp-(S+.5)*C/L,y.z),v.rotation.set(0,S%2?Math.PI/2:0,0),v.scale.set(1,1.5,1),v.updateMatrix(),p.setMatrixAt(S,v.matrix);p.instanceMatrix.needsUpdate=!0}return _({x:0,y:6.85,z:1.4},0),{root:e,bridge:i,trolley:r,drum:o,update:_}}var gc={x:.4,z:-.6},pu=-.028;function $1(s){let t=s.y-pu;return{x:s.x+gc.x*t,y:pu,z:s.z+gc.z*t}}var xc=class{constructor(t){this.target=new ln(192,192,{depthBuffer:!1}),this.scene=new zn,this.camera=new or(-1.7,1.7,1.7,-1.7,.1,10),this.camera.position.set(0,5,0),this.camera.up.set(0,0,-1),this.camera.lookAt(0,0,0);let e=new hn({uniforms:{slope:{value:new at(gc.x,gc.z)}},side:Dn,depthWrite:!1,depthTest:!1,vertexShader:"uniform vec2 slope; void main(){vec4 p=modelMatrix*vec4(position,1.0);p.xz+=slope*p.y;p.y=0.0;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:"void main(){gl_FragColor=vec4(1.0);}"});this.caster=new zt(t,e),this.scene.add(this.caster),this.caster.frustumCulled=!1,this.material=new hn({transparent:!0,depthWrite:!1,uniforms:{mask:{value:this.target.texture},blur:{value:1},opacity:{value:.3}},vertexShader:"varying vec2 uvShadow;varying vec2 ground;void main(){uvShadow=uv;vec4 p=modelMatrix*vec4(position,1.);ground=p.xz;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:"uniform sampler2D mask;uniform float blur;uniform float opacity;varying vec2 uvShadow;varying vec2 ground;void main(){if(abs(ground.x)>6.3||abs(ground.y)>4.5)discard;vec2 d=vec2(blur/192.0);float a=texture2D(mask,uvShadow).a*.25;for(int x=-1;x<=1;x++)for(int y=-1;y<=1;y++){if(x==0&&y==0)continue;a+=texture2D(mask,uvShadow+vec2(float(x),float(y))*d).a*.09375;}gl_FragColor=vec4(.025,.035,.032,a*opacity);}"}),this.mesh=new zt(new Fn(3.4,3.4),this.material),this.mesh.rotation.x=-Math.PI/2,this.mesh.renderOrder=1,this.mesh.name="magnet-ground-shadow",this.lastQuaternion=new yn(0,0,0,0),this.lastTime=-1/0}invalidate(){this.lastTime=-1/0,this.lastQuaternion.set(0,0,0,0)}update(t,e,n,i){let r=$1(e);this.mesh.position.set(r.x,r.y,r.z);let o=Math.max(0,e.y-pu);if(this.material.uniforms.blur.value=.6+o*1.25,this.material.uniforms.opacity.value=Math.max(.14,.43-o*.047),this.lastTime!==-1/0&&(i-this.lastTime<1/30||Math.abs(this.lastQuaternion.x*n.x+this.lastQuaternion.y*n.y+this.lastQuaternion.z*n.z+this.lastQuaternion.w*n.w)>.999999))return;this.caster.quaternion.copy(n);let a=t.getRenderTarget(),c=t.getClearColor(new Gt),l=t.getClearAlpha();t.setRenderTarget(this.target),t.setClearColor(0,0),t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(a),t.setClearColor(c,l),this.lastQuaternion.copy(n),this.lastTime=i}snapshot(){return{position:this.mesh.position.toArray(),blur:this.material.uniforms.blur.value,opacity:this.material.uniforms.opacity.value,lastTime:this.lastTime}}};var yc=class{constructor({fps:t=60,maxDelta:e=.04}={}){this.interval=1e3/t,this.maxDelta=e,this.reset(0)}reset(t){this.previous=t,this.deadline=t+this.interval,this.rawDelta=0}sample(t){if(t<this.previous)return this.reset(t),null;if(t+.8<this.deadline)return null;this.rawDelta=Math.max(0,(t-this.previous)/1e3);let e=Math.min(this.maxDelta,this.rawDelta);return this.previous=t,this.deadline+=this.interval,this.deadline<t-this.interval&&(this.deadline=t+this.interval),e}};var vc=class{constructor({move:t,raise:e,change:n=()=>{}}){this.move=t,this.raise=e,this.change=n,this.points=new Map,this.primary=null,this.secondary=null}down(t,e,n){return this.points.has(t)||this.points.size>=2?!1:(this.points.set(t,{x:e,y:n}),this.primary===null?this.primary=t:this.secondary=t,this.change(this.state()),!0)}update(t,e,n){let i=this.points.get(t);if(!i)return;let r=e-i.x,o=n-i.y;i.x=e,i.y=n,t===this.primary?this.move(r,o):t===this.secondary&&this.raise(-o)}up(t){this.points.delete(t)&&(t===this.primary?(this.primary=this.secondary,this.secondary=null):t===this.secondary&&(this.secondary=null),this.change(this.state()))}clear(){this.points.clear(),this.primary=this.secondary=null,this.change(this.state())}state(){return{count:this.points.size,primary:this.primary,secondary:this.secondary}}};var _c=class extends zn{constructor(){super();let t=new Un;t.deleteAttribute("uv");let e=new Ye({side:Xe}),n=new Ye,i=new Gi(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new zt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new zt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new zt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let c=new zt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);let l=new zt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);let h=new zt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new zt(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new zt(t,br(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let f=new zt(t,br(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let m=new zt(t,br(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let x=new zt(t,br(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let g=new zt(t,br(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new zt(t,br(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function br(s){let t=new ke;return t.color.setScalar(s),t}var Mo=new I;function En(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Mo.copy(t),Mo[n]=0,Mo.normalize();let l=.5*o/(o+a),h=1-Mo.angleTo(s)/c;return Math.sign(Mo[e])===1?h*l:a/(o+a)+l+l*(1-h)}var bc=class extends Un{constructor(t=1,e=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,c=new I,l=new I(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,m=new I,x=.5/i;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[g+0]=l.x*Math.sign(a.x)+c.x*r,h[g+1]=l.y*Math.sign(a.y)+c.y*r,h[g+2]=l.z*Math.sign(a.z)+c.z*r,d[g+0]=c.x,d[g+1]=c.y,d[g+2]=c.z,Math.floor(g/f)){case 0:m.set(1,0,0),u[p+0]=En(m,c,"z","y",r,n),u[p+1]=1-En(m,c,"y","z",r,e);break;case 1:m.set(-1,0,0),u[p+0]=1-En(m,c,"z","y",r,n),u[p+1]=1-En(m,c,"y","z",r,e);break;case 2:m.set(0,1,0),u[p+0]=1-En(m,c,"x","z",r,t),u[p+1]=En(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),u[p+0]=1-En(m,c,"x","z",r,t),u[p+1]=1-En(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),u[p+0]=1-En(m,c,"x","y",r,t),u[p+1]=1-En(m,c,"y","x",r,e);break;case 5:m.set(0,0,-1),u[p+0]=En(m,c,"x","y",r,t),u[p+1]=1-En(m,c,"y","x",r,e);break}}};var mu=(s=0,t=0,e=0)=>new I(s,t,e),J1=(s=0,t=0,e=0)=>new vn(s,t,e),up=(s,t,e,n=20)=>new lr(s,t,e,n),Mr=(s,t=16)=>new ur(s,t,10),dp=(s,t=.025)=>new bn(s,t,6,24);function K1(s,t,e,n){let i=new bc(s,t,e,2,n??Math.min(s,t,e)*.22);return i.userData.edgeWear=!0,i}var Qe=class{constructor(){this.parts=new Map}add(t,e,n=[0,0,0],i=[0,0,0],r=[1,1,1]){let o=t.index?t.toNonIndexed():t.clone(),a=o.attributes.normal,c=o.attributes.position,l=new Float32Array(c.count);if(t.userData.longBox){let h=o.attributes.uv;for(let d=0;d<c.count;d++){let u=Math.abs(a.getX(d)),f=Math.abs(a.getY(d)),m=Math.abs(a.getZ(d));f>=u&&f>=m?h.setXY(d,c.getX(d)*.75+.5,c.getZ(d)*.75+.5):m>=u?h.setXY(d,c.getX(d)*.75+.5,c.getY(d)*.75+.5):h.setXY(d,c.getZ(d)*.75+.5,c.getY(d)*.75+.5)}}if(t.userData.edgeWear)for(let h=0;h<l.length;h++)l[h]=Math.max(0,Math.abs(a.getX(h))+Math.abs(a.getY(h))+Math.abs(a.getZ(h))-1);return o.setAttribute("edgeWear",new Oe(l,1)),o.applyMatrix4(new re().compose(mu(...n),new yn().setFromEuler(J1(...i)),mu(...r))),this.parts.has(e)||this.parts.set(e,[]),this.parts.get(e).push(o),this}box(t,e,n,i,r,o,a){let c=Math.min(t,e,n)<.035?new Un(t,e,n):K1(t,e,n,a);return c.userData.longBox=Math.max(t,e,n)>2.5,this.add(c,i,r,o)}cyl(t,e,n,i,r,o,a=20){return this.add(up(t,e,n,a),i,r,o)}ring(t,e,n,i,r){return this.add(dp(t,e),n,i,r)}ball(t,e,n,i){return this.add(Mr(t),e,n,void 0,i)}tube(t,e,n){return this.add(new Fa(new oo(t.map(i=>mu(...i))),18,e,6,!1),n)}build(){let t=new se;for(let[e,n]of this.parts){let i=Xa(n),r=new zt(i,e);r.castShadow=!0,r.receiveShadow=!0,t.add(r);for(let o of n)o.dispose()}return t}};function Q1(s){return s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float edgeWear;varying float vEdgeWear;varying vec3 vLocalPoint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vEdgeWear=edgeWear;vLocalPoint=position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vEdgeWear;varying vec3 vLocalPoint;float scratchNoise(vec3 p){return fract(sin(dot(floor(p),vec3(127.1,311.7,74.7)))*43758.5453);}`).replace("#include <map_fragment>",`#include <map_fragment>
 float grain=scratchNoise(vLocalPoint*170.0);float chip=smoothstep(.22,.58,vEdgeWear)*smoothstep(.25,.64,grain);vec3 bare=mix(vec3(.055,.037,.024),vec3(.32,.20,.085),grain);diffuseColor.rgb=mix(diffuseColor.rgb,bare,chip*.85);`)},s.customProgramCacheKey=()=>"wear-31",s}async function fp(s){let t=new Oa,e={};for(let l of["teal","rust","ivory","floor","coral","steel"])e[l]=await t.loadAsync(s("assets/tex-"+l+".webp")),e[l].colorSpace=Ae,e[l].wrapS=e[l].wrapT=zi,e[l].anisotropy=4;let n=(l,h=.5,d=.6,u=null)=>new Ye({color:l,roughness:h,metalness:d,map:u}),i=(l,h="#ffffff")=>Q1(new Ye({color:h,map:l,roughness:.48,metalness:.36,bumpMap:l,bumpScale:.009})),r={teal:i(e.teal),ivory:i(e.ivory),coral:i(e.coral),rust:n("#927d63",.62,.78,e.rust),floor:n("#b3ada2",.83,.36,e.floor),iron:n("#48535a",.38,.9,e.steel),steel:n("#c7c7bf",.29,.9,e.steel),brass:n("#c59b57",.29,.83),black:n("#071014",.5,.44),rubber:n("#20292c",.94,.02),cyan:n("#43c7c4",.25,.5),amber:n("#ffb54c",.25,.35),red:n("#bd6955",.49,.4)};r.lens=new ho({color:"#06272d",roughness:.075,metalness:.28,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:2.8}),r.pupil=new ho({color:"#01070a",roughness:.06,clearcoat:1,metalness:.1}),r.glint=new ke({color:"#fff5da"}),r.coil=n("#39c8bb",.18,.65),r.coil.emissive.set("#26e5d1"),r.coil.emissiveIntensity=1.2,r.cyan.emissive.set("#19a7a3"),r.cyan.emissiveIntensity=.25,r.amber.emissive.set("#ff9c27"),r.amber.emissiveIntensity=1.1;let o=document.createElement("canvas");o.width=o.height=256;let a=o.getContext("2d");a.fillStyle="#af8a3c",a.fillRect(0,0,256,256),a.fillStyle="#343634";for(let l=-256;l<512;l+=96)a.beginPath(),a.moveTo(l,0),a.lineTo(l+45,0),a.lineTo(l+301,256),a.lineTo(l+256,256),a.closePath(),a.fill();let c=new ds(o);return c.colorSpace=Ae,c.wrapS=c.wrapT=zi,c.repeat.set(3,1),r.hazard=n("#dfd0b3",.7,.45,c),r}function ji(s,t,e=[0,0,0],n=[0,0,0],i=[1,1,1]){let r=new zt(s,t);return r.position.set(...e),r.rotation.set(...n),r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,r}function pp(s){let t=new Map;function e(u=0){let f=[s.teal,s.ivory,s.coral][u%3],m=new Qe;m.box(.66,.68,.48,f,[0,-.1,0],void 0,.15),m.box(.785,.56,.55,f,[0,.435,0],void 0,.16),m.cyl(.105,.13,.13,s.brass,[0,.17,0]),m.ring(.12,.022,s.iron,[0,.21,0],[Math.PI/2,0,0]);for(let _ of[-.185,.185])m.cyl(.169,.184,.075,s.brass,[_,.455,.284],[Math.PI/2,0,0]),m.ring(.152,.018,s.iron,[_,.455,.332]),m.ball(.151,s.lens,[_,.455,.343],[1,1,.56]);m.box(.13,.035,.045,s.black,[0,.279,.295],void 0,.012),m.box(.085,.013,.015,s.brass,[0,.265,.323],void 0,.005);for(let _ of[-.325,.325])for(let y of[.31,.59])m.cyl(.022,.022,.022,s.brass,[_,y,.245],[Math.PI/2,0,0],8);m.box(.31,.27,.048,s.brass,[0,-.085,.257],void 0,.04),m.box(.265,.222,.055,s.iron,[0,-.083,.282],void 0,.028);for(let _=0;_<4;_++)m.box(.16,.018,.018,s.black,[0,-.145+_*.045,.316],void 0,.005);for(let _ of[-.112,.112])for(let y of[-.168,.008])m.cyl(.017,.017,.023,s.steel,[_,y,.32],[Math.PI/2,0,0],6);for(let _ of[-1,1]){let y=_*.385;m.ball(.115,s.brass,[y,-.01,0]),m.cyl(.09,.09,.29,f,[_*.415,-.2,0],[0,0,_*.09]),m.ring(.09,.018,s.steel,[_*.425,-.3,0],[Math.PI/2,0,0]),m.ball(.1,s.iron,[_*.425,-.365,0]);for(let E of[-.065,.065])m.tube([[_*.42,-.38,E],[_*.49,-.46,E],[_*.46,-.51,E+.045]],.028,s.brass);m.cyl(.074,.074,.17,s.iron,[_*.165,-.48,.025]);for(let E=0;E<4;E++)m.ring(.075,.014,s.steel,[_*.165,-.42-E*.035,.025],[Math.PI/2,0,0]);m.box(.26,.17,.43,s.iron,[_*.165,-.635,.095],void 0,.07),m.box(.245,.14,.4,f,[_*.165,-.617,.11],void 0,.06),m.cyl(.048,.048,.025,s.brass,[_*.165,-.61,.318],[Math.PI/2,0,0],8)}m.box(.31,.22,.08,s.iron,[0,-.1,-.27],void 0,.04),m.box(.24,.15,.1,s.rust,[0,-.1,-.3],void 0,.03);let x=m.build();for(let _=0;_<2;_++){let y=new se;y.name="eye-"+_,y.position.set(_?.185:-.185,.455,.417),y.add(ji(Mr(.098),s.pupil,[0,0,0],void 0,[1,1,.42])),y.add(ji(Mr(.025,12),s.glint,[-.039,.041,.046])),y.add(ji(Mr(.009,10),s.glint,[.04,-.037,.04])),x.add(y)}let g=new se;g.name="antenna",g.position.set(.21,.685,-.015);let p=[];for(let _=0;_<=48;_++){let y=_/48*Math.PI*6;p.push([Math.sin(y)*.025,.025+_/48*.13,Math.cos(y)*.025])}let v=new Qe;return v.tube(p,.009,s.steel),v.cyl(.018,.018,.07,s.brass,[0,.19,0]),v.ball(.047,s.coral,[0,.245,0]),g.add(v.build()),x.add(g),x}function n(){let u=new fs,f=14;for(let p=0;p<f*4;p++){let v=p*Math.PI*2/(f*4),_=p%4===1||p%4===2?.5:.385,y=Math.cos(v)*_,E=Math.sin(v)*_;p?u.lineTo(y,E):u.moveTo(y,E)}u.closePath();let m=new Hi;m.absarc(0,0,.142,0,Math.PI*2,!0),u.holes.push(m);let x=new hr(u,{depth:.15,bevelEnabled:!0,bevelThickness:.026,bevelSize:.023,bevelSegments:2,curveSegments:16});x.translate(0,0,-.075);let g=new Qe;g.add(x,s.iron,[0,0,0],[Math.PI/2,0,0]),g.ring(.27,.025,s.steel,[0,.105,0],[Math.PI/2,0,0]),g.ring(.157,.02,s.brass,[0,.11,0],[Math.PI/2,0,0]);for(let p=0;p<6;p++){let v=p*Math.PI/3;g.cyl(.025,.025,.02,s.rust,[Math.cos(v)*.28,.12,Math.sin(v)*.28],void 0,8)}return g.build()}function i(){let u=new Qe;u.cyl(.108,.108,.6,s.steel),u.cyl(.245,.245,.18,s.iron,[0,.36,0],void 0,6),u.cyl(.225,.225,.025,s.steel,[0,.46,0],void 0,6),u.cyl(.084,.084,.008,s.rust,[0,.477,0],void 0,6);let f=[];for(let m=0;m<=150;m++){let x=m/150*Math.PI*20;f.push([Math.cos(x)*.112,-.27+m/150*.51,Math.sin(x)*.112])}return u.tube(f,.018,s.iron),u.cyl(.072,.108,.09,s.steel,[0,-.34,0]),u.build()}function r(){let u=new Qe;u.tube([[-.45,.32,0],[-.45,-.13,0],[-.3,-.22,0],[.3,-.22,0],[.45,-.13,0],[.45,.32,0]],.165,s.iron);for(let f of[-.45,.45]){u.cyl(.225,.225,.095,s.rust,[f,.245,0]),u.cyl(.205,.205,.055,s.steel,[f,.315,0]),u.cyl(.134,.134,.012,s.black,[f,.348,0]),u.ring(.14,.018,s.brass,[f,.352,0],[Math.PI/2,0,0]);for(let m=0;m<6;m++){let x=m*Math.PI/3;u.cyl(.021,.021,.025,s.iron,[f+Math.cos(x)*.179,.352,Math.sin(x)*.179],void 0,6)}}return u.build()}function o(){let u=new Qe;u.cyl(.385,.385,.91,s.iron,[0,.02,0],[Math.PI/2,0,0]);for(let f=0;f<12;f++){let m=f*Math.PI/6;u.box(.045,.065,.82,s.steel,[Math.cos(m)*.365,.02+Math.sin(m)*.365,0],[0,0,m],.01)}for(let f of[-.45,.45]){u.cyl(.43,.43,.075,s.rust,[0,.02,f],[Math.PI/2,0,0]),u.ring(.37,.028,s.brass,[0,.02,f+.045]);for(let m=0;m<6;m++){let x=m*Math.PI/3;u.cyl(.035,.035,.04,s.steel,[Math.cos(x)*.35,.02+Math.sin(x)*.35,f+.06],[Math.PI/2,0,0],6)}}u.cyl(.16,.16,.23,s.steel,[0,.02,.61],[Math.PI/2,0,0]),u.cyl(.12,.12,.035,s.black,[0,.02,.74],[Math.PI/2,0,0]);for(let f of[-.55,.55]){u.box(.25,.18,.96,s.rust,[f,-.28,0],void 0,.04);for(let m of[-.35,.35])u.cyl(.052,.052,.045,s.iron,[f,-.16,m],void 0,6)}return u.box(.42,.15,.39,s.teal,[0,.44,-.1],void 0,.04),u.box(.27,.018,.18,s.ivory,[0,.524,-.1],void 0,.01),u.build()}function a(){let u=new Qe;u.ring(.315,.145,s.rubber,[0,0,0],[Math.PI/2,0,0]);for(let f=0;f<34;f++){let m=f*Math.PI/17;u.box(.078,.22,.045,s.rubber,[Math.cos(m)*.455,0,Math.sin(m)*.455],[0,-m-Math.PI/2,.16*(f%2?1:-1)],.014)}for(let f of[-.1,.1])u.ring(.23,.018,s.black,[0,f,0],[Math.PI/2,0,0]),u.ring(.38,.009,s.black,[0,f,0],[Math.PI/2,0,0]);return u.build()}function c(){let u=new Qe,f=[[0,-.22],[.6,-.22],[.68,-.15],[.675,.06],[.63,.16],[.48,.2],[.43,.28],[.18,.29],[.14,.39],[0,.39]].map(_=>new at(..._));u.add(new Ba(f,32),s.teal),u.cyl(.69,.69,.075,s.iron,[0,-.22,0]),u.ring(.645,.032,s.brass,[0,.11,0],[Math.PI/2,0,0]),u.ring(.66,.026,s.steel,[0,-.16,0],[Math.PI/2,0,0]);for(let _=0;_<5;_++)u.ring(.6,.018,s.brass,[0,-.13+_*.047,0],[Math.PI/2,0,0]);for(let _=0;_<8;_++){let y=_*Math.PI/4;u.box(.125,.31,.095,s.rust,[Math.cos(y)*.65,.045,Math.sin(y)*.65],[0,-y+Math.PI/2,0],.025),u.cyl(.036,.036,.048,s.steel,[Math.cos(y)*.48,.235,Math.sin(y)*.48],void 0,6)}u.cyl(.15,.15,.13,s.iron,[0,.37,0]),u.ring(.12,.035,s.steel,[0,.45,0],[0,Math.PI/2,0]);for(let _ of[-.31,.31])u.box(.35,.08,.65,s.steel,[_,-.29,0],void 0,.018);let m=u.build(),x=new se;x.name="top-lamps";let g=s.red.clone();g.color.set("#4b1110"),g.emissive.set("#ff2010"),g.emissiveIntensity=.01;for(let _=0;_<8;_++){let y=_*Math.PI/4;x.add(ji(Mr(.036,12),g,[Math.cos(y)*.48,.275,Math.sin(y)*.48],void 0,[1,.65,1]))}m.add(x);let p=new se;p.name="coil";for(let _ of[-.12,-.065,-.01])p.add(ji(dp(.681,.017),s.coil,[0,_,0],[Math.PI/2,0,0]));m.add(p);let v=new se;return v.name="status-light",v.position.set(.4,.27,.1),v.add(ji(up(.075,.1,.05),s.brass)),v.add(ji(Mr(.064),s.amber,[0,.068,0],[0,0,0],[1,1.2,1])),m.add(v),m}function l(){let u=new Qe;u.box(.64,.55,.5,s.teal,void 0,void 0,.08),u.box(.53,.43,.045,s.ivory,[0,0,.27],void 0,.04);for(let f of[-.16,.16])u.cyl(.075,.09,.1,s.brass,[f,.32,0]),u.box(.08,.12,.15,s.iron,[f,.34,0],void 0,.025);u.box(.35,.14,.045,s.black,[0,.02,.3],void 0,.02);for(let f=0;f<4;f++)u.box(.045,.08,.015,s.cyan,[-.12+f*.08,.02,.329],void 0,.01);u.box(.47,.07,.025,s.hazard,[0,-.18,.303],void 0,.01);for(let f of[-.25,.25])for(let m of[-.2,.2])u.cyl(.025,.025,.025,s.brass,[f,m,.29],[Math.PI/2,0,0],6);return u.build()}let h=Ya(s,Qe),d={robot:e,gear:n,bolt:i,pipe:r,engine:o,tire:a,battery:l,...Object.fromEntries(["housing","shaft","cog","cover"].map(u=>[u,()=>h(u)]))};return{Builder:Qe,magnet:c,item(u,f=0){let m=u+(u==="robot"?f%3:0);t.has(m)||t.set(m,d[u](f));let x=t.get(m).clone(!0);return(u==="housing"||u==="cover")&&x.scale.setScalar(.75),u==="robot"&&(x.userData.eyes=[x.getObjectByName("eye-0"),x.getObjectByName("eye-1")],x.userData.antenna=x.getObjectByName("antenna")),x}}}function tM(s){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");if(e.fillStyle="#d5ac6b",s==="repair"){e.lineWidth=15,e.strokeStyle="#d5ac6b",e.beginPath(),e.roundRect(40,72,176,133,31),e.stroke(),e.beginPath(),e.moveTo(128,72),e.lineTo(128,38),e.stroke(),e.beginPath(),e.arc(128,30,12,0,Math.PI*2),e.fill();for(let i of[86,170])e.beginPath(),e.arc(i,126,19,0,Math.PI*2),e.fill();e.fillRect(96,172,64,11)}else{e.translate(128,128);for(let i=0;i<12;i++)e.rotate(Math.PI/6),e.fillRect(-21,-104,42,45);e.beginPath(),e.arc(0,0,86,0,Math.PI*2),e.fill(),e.globalCompositeOperation="destination-out",e.beginPath(),e.arc(0,0,39,0,Math.PI*2),e.fill()}let n=new ds(t);return n.colorSpace=Ae,n}function mp(s,t){let e=new se,n=new Qe;n.box(13.45,.55,9.9,s.rust,[0,-.43,0],void 0,.15),n.box(12.7,.14,9.1,s.floor,[0,-.14,0],void 0,.04);for(let r=-5.4;r<=5.4;r+=1.8)for(let o=-3.6;o<=3.6;o+=1.8){n.box(1.77,.025,1.77,s.floor,[r,-.057,o],void 0,.015);for(let a of[-.75,.75])for(let c of[-.75,.75])n.cyl(.023,.023,.019,s.iron,[r+a,-.035,o+c],void 0,6)}for(let r of[-6.5,6.5])n.box(.24,.8,9.6,s.rust,[r,.23,0],void 0,.075),n.box(.27,.12,9.7,s.hazard,[r,.7,0],void 0,.03);for(let r of[-4.7,4.7])n.box(13.1,.75,.25,s.rust,[0,.24,r],void 0,.075),n.box(13.2,.12,.27,s.hazard,[0,.67,r],void 0,.03);for(let r of[-6.5,6.5])for(let o of[-4.6,4.6]){n.box(.53,1.05,.53,s.iron,[r,.36,o],void 0,.08),n.box(.61,.13,.61,s.rust,[r,.94,o],void 0,.04);for(let a of[-.18,.18])for(let c of[-.18,.18])n.cyl(.055,.055,.055,s.steel,[r+a,1.03,o+c],void 0,6)}e.add(n.build());let i=[];for(let r of[{id:"repair",x:4.65,z:2.9,color:s.teal},{id:"scrap",x:-4.65,z:2.9,color:s.coral}]){let o=new Qe;o.box(2.95,.2,2.55,s.iron,[r.x,-.02,r.z],void 0,.07),o.box(2.58,.06,2.15,s.black,[r.x,.06,r.z],void 0,.02);for(let d of[r.x-1.45,r.x+1.45])o.box(.27,.8,2.5,r.color,[d,.3,r.z],void 0,.05);for(let d of[r.z-1.25,r.z+1.25])o.box(2.63,.8,.27,r.color,[r.x,.3,d],void 0,.06);o.box(2.63,.09,.27,s.rust,[r.x,.745,r.z-1.25],void 0,.02),o.box(2.63,.09,.27,s.rust,[r.x,.745,r.z+1.25],void 0,.02);for(let d of[-1.15,1.15])for(let u of[-1.25,1.25])o.cyl(.05,.05,.035,s.brass,[r.x+d,.8125,r.z+u],void 0,8);o.box(1.13,.78,.12,r.color,[r.x,.8,r.z-1.1],void 0,.07),o.box(.92,.09,.11,s.iron,[r.x,.39,r.z-1.02],void 0,.02),o.box(.65,.075,.075,s.amber,[r.x,.48,r.z-1.01],void 0,.025);let a=[];for(let d=0;d<4;d++){let u=r.z-.64+d*.43;if(o.cyl(.12,.12,2.17,s.iron,[r.x,.14,u],[0,0,Math.PI/2]),r.id==="scrap")for(let f=0;f<7;f++)o.cyl(.18,.18,.13,f%2?s.rust:s.steel,[r.x-.85+f*.28,.14,u],[0,0,Math.PI/2],8)}let c=o.build();e.add(c);let l=ji(new Fn(.68,.68),new ke({map:tM(r.id),transparent:!0,depthWrite:!1}),[r.x,.85,r.z-1.025]);e.add(l);let h=new zt(new Fn(.82,.2),new ke({color:r.id==="repair"?"#8de6db":"#ffc075",transparent:!0,opacity:.2,depthWrite:!1}));h.position.set(r.x,.47,r.z-.97),e.add(h),i.push({...r,mesh:c,rollers:a})}return{root:e,bins:i}}var nt=s=>document.querySelector(s),eM=s=>globalThis.CraneAsset?CraneAsset(s):s,ti=nt("#view"),Rc=nt("#stage"),yu=matchMedia("(prefers-reduced-motion:reduce)").matches,$i,_i=!0,Tp=!0,bi="auto",wc=1,Sr=1,Pu=1/30,gp=-1/0,Ts=!0,vu=0,xp=0,wr=[],Tc=0,_u=0,bu=0,Er=14,ws=20,Wn=!1,Jt,ue,te,et,Qn,Gn,Zi,sn,Sc=[],Ap,He=!1,Mu=performance.now(),Eo=0,Me=0,Wt=0,Ao=!1,wu=0,Su=!1,Cp=0,Rp={},ye={completed:{}},Ji=[],vi=new Set,Ec=0,So=0,Ip=0,Eu=0,yp=new Map,Tu=new yc,Ss=0,Ki=!1,Au=0,To=0,Pp,Ve,An=!1,Lp=!1,vp,gu,Tr,Rr,fn,wo=null,Mc=null,je=!1,Np=!1,Ir=!1,Dp=null,Ac=new URLSearchParams(location.search).get("test")==="1",nM=new ur(.025,4,3),_p=new Map;function Ic(){let s=bi==="fast",t=bi==="sharp",e=Rc.getBoundingClientRect();wc=Math.min(devicePixelRatio,t?1.5:s?.8:1,Math.sqrt((s?65e4:t?21e5:11e5)/(e.width*e.height)))*(bi==="auto"?Sr:1);let i=Math.round(e.width),r=Math.round(e.height),o=Jt.getSize(new at);Math.abs(Jt.getPixelRatio()-wc)>.001&&(Jt.setPixelRatio(wc),Au++),(o.x!==i||o.y!==r)&&(Jt.setSize(i,r,!1),Au++),Pu=s?1/20:1/30;let a=s?512:t?1536:1024;$i.shadow.mapSize.x!==a&&($i.shadow.mapSize.set(a,a),$i.shadow.map?.dispose(),$i.shadow.map=null),Ts=!0,Tp=!s}function Cu(s,t=!0){bi=s,Sr=1,wr=[],To=0,Tc=Me+2,Ic(),t&&(ye.graphicsMode=s,Pr()),wi(),pn()}function bp(s){if(bi!=="auto"||Me<Tc||document.hidden||et.paused&&!An||(wr.push(s*1e3),To+=s,wr.length<12||To<1.6))return;let t=wr.sort((n,i)=>n-i),e=t[Math.floor(t.length/2)];wr=[],To=0,e>23&&Sr>.55&&(Sr=Math.max(.55,Sr*.85),Ic(),Tc=Me+2)}var Ar=new Map;function Hn(s,t=5){nt("#tip").textContent=s,wu=Me+t}function Pr(){try{localStorage.setItem("sdvig-crane-v1",JSON.stringify(ye))}catch{}}function iM(s){let t=new I(...s).project(te),e=ti.getBoundingClientRect();return{x:e.x+(t.x+1)*e.width/2,y:e.y+(1-t.y)*e.height/2}}function Bp(){if(!te||!et)return;if(je&&fn){let e=fn.carrier.position,n=new I(e.x,e.y+1.1,e.z+.4),i=Math.max(11.7,8.2/(2*Math.tan(Mn.degToRad(te.fov/2))*te.aspect));te.position.copy(n).addScaledVector(new I(.557,.397,.729).normalize(),i),te.lookAt(n),te.updateMatrixWorld();return}let s=new I(_i?et.anchor.position.x*.64+(et.magnet.position.x-et.anchor.position.x)*.3:0,2.15,_i?et.anchor.position.z*.25-.25:0),t=new I(0,.625,.781).normalize();if(te.position.copy(s).addScaledVector(t,ws),te.lookAt(s),te.updateMatrixWorld(),_i){let e=[new I(et.anchor.position.x,9.35,et.anchor.position.z),new I(et.magnet.position.x,-.15,et.magnet.position.z),new I().copy(et.magnet.position).add(new I(0,.65,0)),new I().copy(et.magnet.position).add(new I(0,-.4,0))];for(let r of et.held.values())e.push(new I().copy(r.item.body.position).add(new I(0,-.75,0)));let n=e.map(r=>r.clone().project(te).y),i=Math.max(...n)-Math.min(...n);i>1.38&&(te.position.copy(s).addScaledVector(t,ws*Math.min(1.85,i/1.38)),te.updateMatrixWorld());for(let r=0;r<2;r++){n=e.map(u=>u.clone().project(te).y);let o=Math.max(...n),a=Math.min(...n),c=o>.72?o-.72:a<-.66?a+.66:0;if(!c)break;let l=-new I().copy(et.magnet.position).applyMatrix4(te.matrixWorldInverse).z,h=new I().setFromMatrixColumn(te.matrixWorld,1),d=c*l*Math.tan(Mn.degToRad(te.fov/2));te.position.addScaledVector(h,d),s.addScaledVector(h,d),te.lookAt(s),te.updateMatrixWorld()}}Er=2*te.position.distanceTo(s)*Math.tan(Mn.degToRad(te.fov/2))*te.aspect}function Ro(){An&&Ve.resize();let s=Rc.getBoundingClientRect(),t=s.width/s.height;te.aspect=t,Er=_i?s.width<850?6.8:14:16.3,ws=Er/(2*Math.tan(Mn.degToRad(te.fov/2))*t),ws=Math.max(ws,_i?10.5:22),Er=2*ws*Math.tan(Mn.degToRad(te.fov/2))*t,te.near=.3,te.far=Math.max(60,ws+25),te.updateProjectionMatrix(),Bp(),Ic(),pn()}function sM(){ue.background=null,ue.add(new xs("#cbdad5","#49311e",1.15));let s=new fi("#ffdfa4",4);s.position.set(-4,10,6),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),Object.assign(s.shadow.camera,{left:-11,right:11,top:12,bottom:-12,near:1,far:40}),s.shadow.normalBias=.018,s.shadow.bias=-15e-5,s.shadow.radius=1.5,s.shadow.camera.layers.enable(1),s.shadow.autoUpdate=!1,$i=s,ue.add(s);let t=new fi("#8fc4d0",1.25);t.position.set(7,5,-5),ue.add(t);let e=new Gi("#ffb951",48,15,2);e.position.set(-3,6,-3),Pp=e,ue.add(e),Up()}function Up(){gu?.dispose();let s=new ar(Jt),t=new _c;gu=s.fromScene(t,.06),ue.environment=gu.texture,ue.environmentIntensity=.85,t.dispose(),s.dispose()}function rM(){Zi=mp(Gn,Qn),ue.add(Zi.root),fn=ap(Gn,Qn),ue.add(fn.root);let s=en(fn.stationary);ue.add(s),fn.stationary.updateMatrixWorld(!0),fn.stationary.traverse(r=>r.matrixAutoUpdate=!1);for(let r of Zi.bins)r.acceptedAt=-100;vp=en(Zi.root),ue.add(vp),Zi.root.updateMatrixWorld(!0),Zi.root.traverse(r=>{r.matrixAutoUpdate=!1});let t=new bn(.115,.033,8,24);for(let r=0;r<8;r++){let o=new se,a=new zt(t,r%2?Gn.iron:Gn.steel);a.scale.y=1.5,a.rotation.y=r%2?Math.PI/2:0,a.castShadow=!1,o.add(a),ue.add(o),Sc.push(o)}sn=Qn.magnet(),ue.add(sn);let e=sn.getObjectByName("status-light").children[1];e.material=e.material.clone();let n=en(sn);n.castShadow=!1,Rr=new xc(n.geometry),ue.add(Rr.mesh),Tr=hp(Gn,Qn),ue.add(Tr.root);let i=new zt(new bn(.63,.018,6,48),new ke({color:"#64fff1",transparent:!0,opacity:.8}));i.rotation.x=Math.PI/2,i.position.y=-.235,sn.add(i),sn.userData.glow=i,Ap={intensity:0}}function Mp(s){let t=new zn;t.add(new xs("#ddf8ff","#6b442a",3));let e=new fi("#ffe0b8",4);e.position.set(-3,5,4),t.add(e),t.environment=ue.environment;let n=s==="magnet"?Qn.magnet():Qn.item(s,s==="robot"?1:0);t.add(n);let i=new Le(34,1,.1,20);i.position.set(1.7,1.3,2.8),i.lookAt(0,0,0);let r=new ln(128,128),o=new Uint8Array(128*128*4),a=Jt.getClearAlpha();Jt.setClearAlpha(0),Jt.setRenderTarget(r),Jt.render(t,i),Jt.readRenderTargetPixels(r,0,0,128,128,o),Jt.setRenderTarget(null),Jt.setClearAlpha(a);let c=document.createElement("canvas");c.width=c.height=128;let l=c.getContext("2d"),h=l.createImageData(128,128);for(let d=0;d<128;d++)h.data.set(o.subarray((127-d)*512,(128-d)*512),d*512);return l.putImageData(h,0,0),r.dispose(),c.toDataURL("image/png")}function oM(){for(let s of Ji)ue.remove(s.obj);for(let s of Ar.values())ue.remove(s);Ar.clear(),yp.clear();for(let s of et.items){if(s.delivered)continue;let t=et.items.filter(r=>r.type==="robot").indexOf(s),e={pip:0,rivet:1,scout:2,departure:0}[xe[Wt].id]??t,n=Qn.item(s.type,s.type==="robot"?e:s.variant);n.userData.itemId=s.id;let i=en(n);n.add(i),yp.set(s.id,i),ue.add(n),Ar.set(s.id,n)}Ji=[],Ts=!0}function As(s,t=!1){if(An&&(Ve.exit(),An=!1,nt("#stage").classList.remove("assembling")),Wt=Math.max(0,Math.min(xe.length-1,s)),et=t?new pc({seed:xe[Wt].seed,mission:xe[Wt]}):et,t||et.reset(xe[Wt].seed,xe[Wt]),Ao=!1,Su=!1,Eo=0,Cs.clear(),Wt===14)for(let[e,n]of Object.entries(kn.needs)){let i=vs(ye,e);et.delivered[e]=i;for(let r of et.items.filter(o=>o.type===e).slice(0,i))r.delivered=!0,et.world.removeBody(r.body)}nt("#failed").hidden=!0,je=!1,Ir=!1,nt("#stage").classList.remove("inspect"),nt("#workshop-panel").hidden=!0,xe[Wt].id&&(ye.storyCurrent=xe[Wt].id,Pr()),nt("#job-select").value=Wt,nt("#complete").hidden=!0,nt("#paused").hidden=!0,nt("#pause").textContent="\u041F\u0430\u0443\u0437\u0430",nt("#job-title").textContent=xe[Wt].name,nt("#job-note").textContent=xe[Wt].note,nt("#requirements").replaceChildren();for(let[e,n]of Object.entries(xe[Wt].needs)){let i=document.createElement("div");i.className="requirement",i.dataset.type=e;let r=new Image;r.src=Rp[e],r.alt=Ke[e].name;let o=document.createElement("div"),a=document.createElement("strong"),c=document.createElement("small");a.textContent="0 / "+n,c.textContent=Ke[e].name,i.append(r,o),o.append(a,c),nt("#requirements").append(i)}if(Wt===mc){let e=document.createElement("div");e.className="requirement";let n=new Image;n.src=nt("#magnet-icon").src,n.alt="";let i=document.createElement("strong");i.textContent="\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E",i.style.fontSize="17px",e.append(n,i),nt("#requirements").append(e)}hM(),oM(),xe[Wt].id&&(nt("#job-title").textContent=xe[Wt].chapter+" \xB7 "+xe[Wt].name,nt("#job-note").textContent=xe[Wt].story+" "+xe[Wt].hint),Hn(xe[Wt].hint||(innerWidth<850?"\u041E\u0434\u0438\u043D \u043F\u0430\u043B\u0435\u0446 \u2014 \u0432\u0435\u0441\u0442\u0438. \u0412\u0442\u043E\u0440\u043E\u0439 \u0432\u0432\u0435\u0440\u0445-\u0432\u043D\u0438\u0437 \u2014 \u0432\u044B\u0441\u043E\u0442\u0430.":"WASD \u2014 \u0432\u0435\u0441\u0442\u0438 \xB7 Q \u0432\u0432\u0435\u0440\u0445 \xB7 E \u0432\u043D\u0438\u0437 \xB7 \u043F\u0440\u043E\u0431\u0435\u043B \u2014 \u043C\u0430\u0433\u043D\u0438\u0442."),9),wi(),Cc(),pn()}function Pc(s){!He||et.paused||Ki||(et.setMagnet(s),s?Hn("\u041C\u0430\u0433\u043D\u0438\u0442 \u0432\u043A\u043B\u044E\u0447\u0451\u043D. \u041F\u043E\u0434\u0432\u0435\u0434\u0438 \u0435\u0433\u043E \u0432\u043F\u043B\u043E\u0442\u043D\u0443\u044E \u043A \u043C\u0435\u0442\u0430\u043B\u043B\u0443 \u2014 \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u0437\u0430\u0445\u0432\u0430\u0442.",5):Hn("\u0413\u0440\u0443\u0437 \u043E\u0442\u043F\u0443\u0449\u0435\u043D. \u041D\u0430\u0434 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A\u043E\u043C \u0434\u043E\u0436\u0434\u0438\u0441\u044C, \u043F\u043E\u043A\u0430 \u043E\u043D \u0443\u043F\u0430\u0434\u0451\u0442 \u0438 \u0443\u0441\u043F\u043E\u043A\u043E\u0438\u0442\u0441\u044F.",4),wi())}function aM(s){He&&(et.setTarget(et.target.x,et.target.z,s),wi())}function cM(){vi.clear(),Cs.clear(),Cp=0}function Si(){Mu=performance.now(),Tu.reset(Mu),Eo=0,wr=[],To=0,Tc=Me+2,Ec=0,So=0}function lM(){Ss&&cancelAnimationFrame(Ss),Ss=0,Cr&&cancelAnimationFrame(Cr),Cr=0}function Mi(){He&&!Ki&&!document.hidden&&(!et.paused||je)&&!Ss&&(Ss=requestAnimationFrame(kp))}function Rs(){document.querySelector("dialog[open]")||(document.activeElement?.blur(),ti.focus({preventScroll:!0}))}function mn(s=!et.paused){He&&(!s&&et.failed&&(s=!0),et.paused=s,cM(),Si(),s?lM():Mi(),nt("#paused").hidden=!s,nt("#pause").textContent=s?"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C":"\u041F\u0430\u0443\u0437\u0430")}function Io(){if(He){if(An){Ve.cancel(),je=!1;for(let s of document.querySelectorAll("dialog[open]"))s.close();Wn=!0,mn(!0);return}je&&(je=!1,Ir=!1,nt("#stage").classList.remove("inspect"),nt("#workshop-panel").hidden=!0);for(let s of document.querySelectorAll("dialog[open]"))s.close();Wn=!0,mn(!0)}}nt("#resume").onclick=()=>{Ki||(An?(je=!0,nt("#paused").hidden=!0,Si(),pn(),Mi()):mn(!1),Rs())};function hM(){for(let s of[wo,Mc])s&&(ue.remove(s),s.traverse(t=>{t.isMesh&&t.geometry.dispose()}));wo=Mc=null,et.obstacles.length&&(wo=cp(et.obstacles,Gn,Qn),ue.add(wo),Mc=en(wo,!1),ue.add(Mc)),Ts=!0}function Lu(){let s=nt("#job-select");s.replaceChildren();let t=document.createElement("optgroup");t.label="\u041D\u043E\u0432\u0430\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \xB7 \u0441\u0442\u0430\u043D\u0446\u0438\u044F",t.append(new Option("\u0414\u043E\u0431\u044B\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\u0430",String(14))),s.append(t);let e=document.createElement("optgroup");e.label="\u0418\u0441\u0442\u043E\u0440\u0438\u044F \xB7 \u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A";for(let i=0;i<wn.length;i++){let r=new Option((ye.storyCompleted?.[wn[i].id]?"\u2713 ":"")+(i+1)+" \xB7 "+wn[i].name,String(i+3));r.disabled=!Ac&&!Uf(ye,i),e.append(r)}s.append(e);let n=document.createElement("optgroup");n.label="\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0438\u0433\u0440\u0430 \u0438 \u043F\u0440\u0435\u0436\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u044B",n.append(new Option("\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0441\u0432\u0430\u043B\u043A\u0430",String(mc)));for(let i=0;i<3;i++)n.append(new Option("\u041F\u0440\u0435\u0436\u043D\u0438\u0439 "+(i+1)+" \xB7 "+xe[i].name,String(i)));s.append(n),s.value=String(Wt),nt("#test-mode").textContent="\u0414\u043E\u0441\u0442\u0443\u043F \u043A\u043E \u0432\u0441\u0435\u043C \u0433\u043B\u0430\u0432\u0430\u043C: "+(Ac?"\u0442\u0435\u0441\u0442":"\u043F\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0438")}function Cc(){let s=xe[Wt],t=s.needs;for(let[e,n]of Object.entries(t)){let i=nt('[data-type="'+e+'"]'),r=Math.min(n,et.delivered[e]||0);i.querySelector("strong").textContent=r+" / "+n,i.classList.toggle("done",r>=n)}Object.keys(t).length&&!Ao&&!et.failed&&Object.entries(t).every(([e,n])=>(et.delivered[e]||0)>=n)&&(Ao=!0,s.id?Bf(ye,s):s.assembly||(ye.completed[Wt]=!0),Pr(),Lu(),nt("#complete-title").textContent=s.assembly?"\u0414\u0435\u0442\u0430\u043B\u0438 \u043D\u0430 \u0432\u0435\u0440\u0441\u0442\u0430\u043A\u0435":s.id?"\u0413\u043B\u0430\u0432\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430":"\u0417\u0430\u043A\u0430\u0437 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D!",nt("#complete-note").textContent=s.assembly?"\u041A\u043E\u0440\u043F\u0443\u0441, \u0432\u0430\u043B\u044B, \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u0438 \u0438 \u043A\u0440\u044B\u0448\u043A\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B. \u0422\u0435\u043F\u0435\u0440\u044C \u0441\u043E\u0431\u0435\u0440\u0438 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440 \u0432 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u043E\u0439.":s.reward||"\u0413\u0440\u0443\u0437 \u043F\u0440\u0438\u043D\u044F\u0442. \u041C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0442\u044C.",nt("#inspect-reward").hidden=!s.id,nt("#next-job").textContent=s.assembly?"\u0421\u043E\u0431\u0440\u0430\u0442\u044C \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440":Wt===12?qi(ye).finished?"\u041F\u0435\u0440\u0432\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A":"\u0412 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0443\u044E":s.id?"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0433\u043B\u0430\u0432\u0430":Wt<2?"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0437\u0430\u043A\u0430\u0437":"\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u0441\u0432\u0430\u043B\u043A\u0430",nt("#complete").hidden=!1,Hn(s.reward||"\u0417\u0430\u043A\u0430\u0437 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D!",9))}function Co(s=!1){if(He){Ve.preview=s,Ve.save=s?{stationParts:{...kn.needs}}:ye,Ve.persist=s?()=>{}:Pr,Lp=nt("#menu-dialog").open?Wn:et.paused;for(let t of document.querySelectorAll("dialog[open]"))t.close();mn(!0),je=!0,An=!0,nt("#paused").hidden=!0,nt("#complete").hidden=!0,nt("#workshop-panel").hidden=!0,nt("#stage").classList.remove("inspect"),nt("#stage").classList.add("assembling"),Ve.enter(),pn(),Si(),Mi()}}function Ru(){An&&(Ve.exit(),An=!1,je=!1,nt("#stage").classList.remove("assembling"),mn(Lp),Ts=!0,pn(),Rs())}function Nu(s=!1){if(!He)return;s=s&&qi(ye).finished,Np=nt("#menu-dialog").open?Wn:et.paused;for(let e of document.querySelectorAll("dialog[open]"))e.close();mn(!0),je=!0,Ir=s,fn.resetLaunch(),nt("#workshop-back").textContent="\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u0440\u0430\u043D\u0443",nt("#paused").hidden=!0,nt("#complete").hidden=!0,nt("#workshop-panel").hidden=!1,nt("#stage").classList.add("inspect");let t=qi(ye);nt("#workshop-title").textContent=t.finished?"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0432 \u0441\u0431\u043E\u0440\u0435":"\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A \xB7 "+t.count+"/10",nt("#workshop-copy").textContent=s?"\u041F\u0435\u0440\u0432\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A. \u0414\u0435\u0440\u0436\u0438\u043C\u0441\u044F \u0432\u043C\u0435\u0441\u0442\u0435!":t.count?wn[Math.max(0,t.count-1)].reward:"\u041D\u0430 \u0437\u0430\u0431\u0440\u043E\u0448\u0435\u043D\u043D\u043E\u0439 \u0441\u0432\u0430\u043B\u043A\u0435 \u043E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0436\u0438\u0432\u044B\u0435 \u0440\u043E\u0431\u043E\u0442\u044B. \u0421\u043F\u0430\u0441\u0438 \u0438\u0445 \u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A\u0430: \u043E\u043D \u0443\u0432\u0435\u0437\u0451\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u043E\u0442\u0441\u044E\u0434\u0430.",nt("#crew-list").textContent=t.crew.length?"\u0421\u043F\u0430\u0441\u0435\u043D\u044B: "+t.crew.map(e=>({pip:"\u041F\u0438\u043F",rivet:"\u041A\u043B\u0451\u043F\u0430",scout:"\u0428\u043F\u0443\u043D\u0442",departure:"\u0413\u0443\u043B"})[e]).join(", "):"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0435\u0449\u0451 \u0436\u0434\u0451\u0442 \u0441\u043F\u0430\u0441\u0435\u043D\u0438\u044F",nt("#launch-carrier").hidden=!t.finished,pn(),Si(),Mi()}function Fp(){je=!1,Ir=!1,nt("#stage").classList.remove("inspect"),nt("#workshop-panel").hidden=!0,mn(Np),Ao&&(nt("#complete").hidden=!1),Rs()}var wp=new Map,Sp=new Map;function Tn(s,t,e){let n=s+t;if(wp.get(n)===e)return;wp.set(n,e);let i=Sp.get(s);i||(i=nt(s),Sp.set(s,i)),t.startsWith("style.")?i.style[t.slice(6)]=e:t==="aria-pressed"?i.setAttribute(t,e):t==="quiet"?i.classList.toggle("quiet",e):i[t]=e}function wi(){if(!et)return;let s=et.load;Tn("#load","innerHTML",s.toFixed(1).replace(".",",")+" <small>/ 12 \u043A\u0433</small>"),Tn("#load-bar","style.width",Math.min(100,s/12*100)+"%"),Tn("#magnet","aria-pressed",String(et.on)),Tn("#magnet-label","textContent",et.on?"\u041E\u0422\u041F\u0423\u0421\u0422\u0418\u0422\u042C \u0413\u0420\u0423\u0417":"\u0412\u041A\u041B\u042E\u0427\u0418\u0422\u042C \u041C\u0410\u0413\u041D\u0418\u0422"),Tn("#grip-state","textContent",[...et.held.values()].some(e=>e.stress>.18)?"\u0421\u0432\u044F\u0437\u043A\u0430 \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043D\u0430!":et.overloaded?"\u041B\u0438\u0448\u043D\u0438\u0439 \u0433\u0440\u0443\u0437 \u043D\u0435 \u0443\u0434\u0435\u0440\u0436\u0430\u0442\u044C":et.held.size?"\u0417\u0430\u0446\u0435\u043F\u043B\u0435\u043D\u043E: "+et.held.size:et.on?"\u0418\u0449\u0435\u0442 \u043C\u0435\u0442\u0430\u043B\u043B":"\u041C\u0430\u0433\u043D\u0438\u0442 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D"),Tn("#height-label","textContent",et.target.height<.8?"\u041D\u0438\u0437\u043A\u043E":et.target.height<1.9?"\u0421\u0440\u0435\u0434\u043D\u044F\u044F":"\u0412\u044B\u0441\u043E\u043A\u043E"),Tn("#height-bar","style.height",((et.target.height-.32)/4.68*100).toFixed(1)+"%"),Tn("#tip","quiet",Me>wu),Tn("#gesture-hint","quiet",Me>12||Me<wu);let t=qi(ye);Tn("#story-open","textContent","\u0412\u0435\u0440\u0441\u0442\u0430\u043A \xB7 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440"),Tn("#battery-state","textContent",et.items.some(e=>e.type==="battery"&&!e.delivered)?"\u041A\u043E\u0440\u043F\u0443\u0441 \u044F\u0447\u0435\u0435\u043A: "+Math.round(100*(1-Math.max(0,...et.items.filter(e=>e.type==="battery"&&!e.delivered).map(e=>e.damage))))+"%":""),Tn("#quality","textContent","\u0413\u0440\u0430\u0444\u0438\u043A\u0430: "+{auto:"\u0430\u0432\u0442\u043E",sharp:"\u0447\u0451\u0442\u0447\u0435",fast:"\u0431\u044B\u0441\u0442\u0440\u0435\u0435"}[bi])}function zp(){for(let s of et.drainEvents())if(s.kind==="attach"){if(navigator.vibrate)try{navigator.vibrate(18)}catch{}Su||(Su=!0,Hn(Wt===14?"\u0415\u0441\u0442\u044C \u0437\u0430\u0445\u0432\u0430\u0442! \u0412\u0441\u0435 \u0434\u0435\u0442\u0430\u043B\u0438 \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440\u0430 \u2014 \u0432 \u0433\u043E\u043B\u0443\u0431\u043E\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A \u0441\u043F\u0440\u0430\u0432\u0430.":"\u0415\u0441\u0442\u044C \u0437\u0430\u0445\u0432\u0430\u0442! \u0420\u043E\u0431\u043E\u0442\u044B, \u0448\u0435\u0441\u0442\u0435\u0440\u043D\u0438 \u0438 \u044D\u043D\u0435\u0440\u0433\u043E\u044F\u0447\u0435\u0439\u043A\u0438 \u2014 \u0432 \u0433\u043E\u043B\u0443\u0431\u043E\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A \u0441\u043F\u0440\u0430\u0432\u0430.",6)),xu(et.items.find(t=>t.id===s.id)?.body.position,"#8be9dd",7)}else if(s.kind==="deliver"){Wt===14&&Df(ye,s.type)&&Pr();let t=Zi.bins.find(n=>n.id===s.bin);t&&(t.acceptedAt=Me);let e=Ar.get(s.id);e&&(Ji.push({kind:"intake",obj:e,start:Me,base:e.position.clone()}),Ar.delete(s.id)),Hn(Ke[s.type].name+" \u043F\u0440\u0438\u043D\u044F\u0442. "+(s.bin==="repair"?"\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0430\u044F \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u0442!":"\u0414\u0435\u0442\u0430\u043B\u0438 \u043F\u0440\u0438\u043D\u044F\u0442\u044B \u043D\u0430 \u0441\u043A\u043B\u0430\u0434."),4),Cc()}else s.kind==="strain"?(xu(new I(...s.point),"#ffd183",4),Hn("\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u2014 \u0434\u0432\u0438\u0433\u0430\u0439 \u043F\u043B\u0430\u0432\u043D\u0435\u0435!",4)):s.kind==="break"?(xu(new I(...s.point),"#ffad55",7),Hn("\u0421\u0440\u044B\u0432! "+(s.count>1?"\u041D\u0438\u0436\u043D\u044F\u044F \u0447\u0430\u0441\u0442\u044C \u0441\u0432\u044F\u0437\u043A\u0438 \u043E\u0442\u043E\u0440\u0432\u0430\u043B\u0430\u0441\u044C.":"\u0414\u0435\u0442\u0430\u043B\u044C \u043E\u0442\u0446\u0435\u043F\u0438\u043B\u0430\u0441\u044C \u043E\u0442 \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0437\u043A\u0438."),5)):s.kind==="damage"?Hn("\u0423\u0434\u0430\u0440 \u043F\u043E \u044D\u043D\u0435\u0440\u0433\u043E\u044F\u0447\u0435\u0439\u043A\u0435! \u041E\u043F\u0443\u0441\u043A\u0430\u0439 \u0433\u0440\u0443\u0437 \u043D\u0438\u0436\u0435 \u043F\u0435\u0440\u0435\u0434 \u043E\u0442\u043F\u0443\u0441\u043A\u0430\u043D\u0438\u0435\u043C.",6):s.kind==="fragile-broken"?(mn(!0),nt("#paused").hidden=!0,nt("#failed").hidden=!1):s.kind==="reject"?Hn(s.reason+" \u041F\u043E\u0434\u043D\u0438\u043C\u0438 \u0435\u0433\u043E \u043E\u0431\u0440\u0430\u0442\u043D\u043E.",7):s.kind==="recover"&&Hn("\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0432\u0435\u0440\u043D\u0443\u043B\u0438 \u043D\u0430 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0443.",3)}function xu(s,t,e){if(!s||yu)return;let n=nM,i=_p.get(t);i||(i=new ke({color:t}),_p.set(t,i));for(let r=0;r<e;r++){let o=new zt(n,i);o.position.copy(s),ue.add(o),Ji.push({kind:"spark",obj:o,start:Me,base:o.position.clone(),velocity:new I((Math.random()-.5)*2,1+Math.random()*2,(Math.random()-.5)*2)})}}function Ep(s,t=!1){let e=.008333333333333333;for(let n=0;n<s-1e-9;n+=e)t&&Op(Math.min(e,s-n)),et.step(Math.min(e,s-n)),Me+=Math.min(e,s-n),An&&Ve.update(Me),zp();wi()}function Op(s){if(!et||et.paused)return;let t=0,e=0,n=Cp,i=new I().setFromMatrixColumn(te.matrixWorld,0);i.y=0,i.normalize();let r=new I(-i.z,0,i.x);vi.has("a")&&(t-=i.x,e-=i.z),vi.has("d")&&(t+=i.x,e+=i.z),vi.has("w")&&(t-=r.x,e-=r.z),vi.has("s")&&(t+=r.x,e+=r.z),vi.has("q")&&(n=1),vi.has("e")&&(n=-1),(t||e||n)&&et.setTarget(et.target.x+t*s*3.6,et.target.z+e*s*3.6,et.target.height+n*s*1.25)}function pn(){if(!Jt||!ue||!et||Ki||document.hidden)return;if(Jt.info.reset(),An){Ve.render(Me),vu++;return}Pp.intensity=qi(ye).ids.includes("power")?68:28,Dp=fn.update(Me,qi(ye),je,Ir),Bp();for(let e of et.items){let n=Ar.get(e.id);if(n&&(n.position.copy(e.body.position),n.quaternion.copy(e.body.quaternion),e.type==="robot"&&n.userData.eyes)){let i=n.worldToLocal(new I().copy(et.magnet.position));for(let r=0;r<2;r++){let o=n.userData.eyes[r];o.position.x=(r?.185:-.185)+Mn.clamp(i.x*.012,-.023,.023),o.position.y=.455+Mn.clamp(i.y*.01,-.018,.018);let a=(Me+Number(e.id.slice(5))*.39)%5.7;o.scale.y=yu?1:a>5.48?Math.max(.1,Math.abs(a-5.59)*9):1}n.userData.antenna&&!yu&&(n.userData.antenna.rotation.z=Math.sin(Me*8+e.body.position.x)*Math.min(.17,.025+e.body.velocity.length()*.025))}}sn.position.copy(et.magnet.position),sn.quaternion.copy(et.magnet.quaternion),sn.userData.glow.visible=et.on,Gn.coil.emissiveIntensity=et.on?1.8:.035;let s=sn.getObjectByName("status-light");s&&(s.visible=!0,s.children[1].material.emissiveIntensity=et.on?1.8:.03);let t=sn.getObjectByName("top-lamps");if(t){let e=t.children[0].material;e.color.set(et.on?"#ff3623":"#4b1110"),e.emissiveIntensity=et.on?3:.01}Ap.intensity=et.on?2:0;for(let e=0;e<Sc.length;e++)Sc[e].position.copy(et.links[e].position),Sc[e].quaternion.copy(et.links[e].quaternion);Tr.update(et.anchor.position,Me),Rr.update(Jt,et.magnet.position,et.magnet.quaternion,Me);for(let e=Ji.length-1;e>=0;e--){let n=Ji[e],i=Me-n.start;n.kind==="intake"?(n.obj.position.y=n.base.y-i*1.4,n.obj.scale.setScalar(Math.max(.02,1-i*.55)),i>.6&&(ue.remove(n.obj),Ji.splice(e,1))):n.kind==="spark"&&(n.obj.position.copy(n.base).addScaledVector(n.velocity,i),n.obj.position.y-=2*i*i,n.obj.scale.setScalar(Math.max(0,1-i*2)),i>.5&&(ue.remove(n.obj),Ji.splice(e,1)))}(Ts||Me-gp>=Pu)&&(Jt.shadowMap.needsUpdate=!0,$i.shadow.needsUpdate=!0,gp=Me,Ts=!1),Gn.amber.emissiveIntensity=1.1+Math.max(0,...Zi.bins.map(e=>1-(Me-e.acceptedAt)/.9))*1.5,Jt.render(ue,te),vu++}function kp(s){if(Ss=0,!He||Ki||document.hidden||et.paused&&!je)return;let t=Tu.sample(s);if(t===null){Mi();return}let e=performance.now(),n=Tu.rawDelta;if(Mu=s,je){Me+=t;let a=performance.now();pn(),bu=performance.now()-a,_u=0,Eu=performance.now()-e,bp(n),Mi();return}Op(t),Eo+=t;let i=performance.now(),r=0;for(;Eo>=1/120&&r++<5;)et.step(1/120),Me+=1/120,zp(),Eo-=1/120;_u=performance.now()-i,s-xp>=100&&(wi(),xp=s);let o=performance.now();pn(),bu=performance.now()-o,Ec++,So+=n,So>=1&&(Ip=Ec/So,Ec=0,So=0),Eu=performance.now()-e,bp(n),Mi()}var Cs=new vc({move:(s,t)=>{if(!He||et.paused)return;let e=Er/Math.max(1,Rc.clientWidth);et.setTarget(et.target.x+s*e,et.target.z+t*e*1.35)},raise:s=>{He&&!et.paused&&aM(et.target.height+s*.012)},change:s=>{document.documentElement.dataset.touchCount=s.count,nt("#touch-state").hidden=s.count<2}});ti.addEventListener("pointerdown",s=>{!He||et.paused||(s.preventDefault(),s.pointerType==="touch"?(ti.setPointerCapture(s.pointerId),Cs.down(s.pointerId,s.clientX,s.clientY)):Rs())});ti.addEventListener("pointermove",s=>{s.pointerType==="touch"&&Cs.update(s.pointerId,s.clientX,s.clientY)});for(let s of["pointerup","pointercancel","lostpointercapture"])ti.addEventListener(s,t=>{t.pointerType==="touch"&&Cs.up(t.pointerId)});nt("#magnet").addEventListener("pointerdown",s=>{s.pointerType==="mouse"&&s.button!==0||(s.preventDefault(),s.stopPropagation(),Pc(!et.on))});nt("#magnet").onclick=s=>{s.detail===0&&Pc(!et.on)};for(let s of["selectstart","dragstart","contextmenu"])document.addEventListener(s,t=>{t.target.closest("#stage,dialog")&&t.preventDefault()});function Lr(){nt("#menu-dialog").open&&nt("#menu-dialog").close(),mn(Wn),Rs()}nt("#menu").onclick=()=>{Wn=et.paused,mn(!0),nt("#pause").textContent=Wn?"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C":"\u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043F\u0430\u0443\u0437\u0443",nt("#menu-dialog").showModal()};nt("#close-menu").onclick=Lr;nt("#menu-dialog").addEventListener("cancel",s=>{s.preventDefault(),Lr()});nt("#zoom").onclick=()=>{_i=!_i,nt("#zoom").textContent=_i?"\u041E\u0431\u0449\u0438\u0439 \u0432\u0438\u0434":"\u041A\u0440\u0443\u043F\u043D\u044B\u0439 \u0432\u0438\u0434",Ro(),Lr()};nt("#reset").onclick=()=>{As(Wt),Wn=!1,Lr()};nt("#job-select").onchange=s=>{As(Number(s.target.value)),Wn=!1,Lr()};nt("#pause").onclick=()=>{Wn=!Wn,Lr()};nt("#quality").onclick=()=>Cu({auto:"sharp",sharp:"fast",fast:"auto"}[bi]);nt("#help").onclick=()=>{nt("#help-dialog").showModal()};nt("#close-help").onclick=()=>nt("#help-dialog").close();nt("#next-job").onclick=()=>{if(Wt===14){Co();return}Wt===12?Nu(!0):As(xe[Wt].id?Math.min(12,Wt+1):Wt<2?Wt+1:mc)};nt("#keep-playing").onclick=()=>nt("#complete").hidden=!0;nt("#story-open").onclick=()=>Co();nt("#old-story").onclick=()=>Nu();nt("#assembly-preview").onclick=()=>Co(!0);nt("#inspect-reward").onclick=()=>Nu();nt("#workshop-back").onclick=Fp;nt("#launch-carrier").onclick=()=>{fn.resetLaunch(),Ir=!0};nt("#test-mode").onclick=()=>{Ac=!Ac,Lu()};nt("#retry").onclick=()=>{As(Wt),mn(!1),Rs()};var Iu={KeyW:"w",KeyA:"a",KeyS:"s",KeyD:"d",KeyQ:"q",KeyE:"e"};function Vp(s){return s.code||{" ":"Space",w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD",q:"KeyQ",e:"KeyE",p:"KeyP"}[s.key?.toLowerCase()]||s.key}addEventListener("keydown",s=>{if(!He||s.ctrlKey||s.metaKey||s.altKey||document.querySelector("dialog[open]")||s.target.matches?.("select,textarea,input"))return;let t=Vp(s);if(je){t==="Escape"&&(s.preventDefault(),An?Ru():Fp());return}if(t==="Space"){s.preventDefault(),s.stopPropagation(),!s.repeat&&!et.paused&&Pc(!et.on);return}if(t==="KeyP"){s.preventDefault(),s.repeat||(mn(),et.paused||Rs());return}Iu[t]&&(s.preventDefault(),et.paused||vi.add(Iu[t]))},!0);addEventListener("keyup",s=>vi.delete(Iu[Vp(s)]));addEventListener("blur",Io);document.addEventListener("visibilitychange",()=>{if(document.hidden)Io();else if(Si(),He){let s=Rc.getBoundingClientRect(),t=Jt.getSize(new at);(t.x!==Math.round(s.width)||t.y!==Math.round(s.height))&&Ro(),Mi()}});document.addEventListener("freeze",Io);document.addEventListener("resume",()=>{He&&Si()});addEventListener("pagehide",Io);addEventListener("pageshow",()=>{He&&Si()});ti.addEventListener("webglcontextlost",s=>{s.preventDefault(),Ki=!0,Io(),nt("#resume").disabled=!0,nt("#pause-note").textContent="\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u0433\u0440\u0430\u0444\u0438\u043A\u0443\u2026"});ti.addEventListener("webglcontextrestored",()=>{Ki=!1,Hp(),$i.shadow.map?.dispose(),$i.shadow.map=null,Up(),Ve&&(Ve.scene.environment=ue.environment,Ve.key.shadow.map?.dispose(),Ve.key.shadow.map=null,Ve.lastShadow=-99),Rr?.invalidate(),Ts=!0,nt("#resume").disabled=!1,nt("#pause-note").textContent="\u041C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0442\u044C",Si(),pn()});var Cr=0;addEventListener("resize",()=>{!He||document.hidden||Cr||(Cr=requestAnimationFrame(()=>{Cr=0,Ro()}))});function Hp(){Jt.info.autoReset=!1,Jt.shadowMap.enabled=!0,Jt.shadowMap.autoUpdate=!1;let s=Jt.shadowMap.render.bind(Jt.shadowMap);Jt.shadowMap.render=(t,e,n)=>{let i=n.layers.mask;n.layers.enable(1);try{return s(t,e,n)}finally{n.layers.mask=i}},Jt.shadowMap.type=Uh}async function uM(){try{Jt=new Sa({canvas:ti,antialias:!0,powerPreference:"high-performance",alpha:!0}),Jt.setPixelRatio(1),Hp(),Jt.outputColorSpace=Ae,Jt.toneMapping=Fh,Jt.toneMappingExposure=1.03,Jt.setClearColor(0,0),ue=new zn,te=new Le(46,1,.1,100),te.position.set(0,13,17),te.lookAt(0,.65,0),sM(),Gn=await fp(eM),Qn=pp(Gn),rM();for(let e of Object.keys(Ke))Rp[e]=Mp(e);nt("#magnet-icon").src=Mp("magnet");try{let e=JSON.parse(localStorage.getItem("sdvig-crane-v1")||"null");e?.completed&&(ye=e)}catch{}bi=["auto","sharp","fast"].includes(ye.graphicsMode)?ye.graphicsMode:ye.quality===!1?"fast":"auto",Ic();let s=wn.findIndex(e=>e.id===ye.storyCurrent),t=wn.findIndex(e=>!ye.storyCompleted?.[e.id]);As(14,!0),Lu(),Ve=new $a({renderer:Jt,canvas:ti,mats:Gn,models:Qn,environment:ue.environment,save:ye,persist:Pr,onExit:Ru,onSalvage:()=>{Ru(),As(14),Cc()}}),He=!0,Cc(),nt("#loading").hidden=!0,document.documentElement.dataset.ready="true",Ro(),Si(),Mi(),new URLSearchParams(location.search).get("workbench")==="1"?Co(!0):ja(ye)&&!new URLSearchParams(location.search).has("test")&&Co()}catch(s){console.error(s),nt("#loading strong").textContent="\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044C 3D-\u043C\u0430\u0441\u0442\u0435\u0440\u0441\u043A\u0443\u044E",nt("#loading small").textContent="\u041F\u0440\u043E\u0432\u0435\u0440\u044C, \u0447\u0442\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 WebGL. "+s.message,document.documentElement.dataset.error=s.message}}new URLSearchParams(location.search).get("test")==="1"&&(globalThis.CraneTest={snapshot:()=>({...et.snapshot(),assembly:Ve?.snapshot(),magnetLamps:{count:sn.getObjectByName("top-lamps")?.children.length,on:et.on,color:sn.getObjectByName("top-lamps")?.children[0].material.color.getHexString(),emissive:sn.getObjectByName("top-lamps")?.children[0].material.emissiveIntensity},jobIndex:Wt,mission:{id:xe[Wt].id,chapter:xe[Wt].chapter,needs:xe[Wt].needs,gate:!!xe[Wt].gate,posts:!!xe[Wt].posts},completed:Ao,stats:{fps:Ip,frameCost:Eu,physicsMs:_u,renderMs:bu,renderCount:vu,resizeCount:Au,contextLost:Ki,rafActive:!!Ss,memory:{...Jt.info.memory},programs:Jt.info.programs.length,resolutionScale:wc,adaptiveScale:Sr,shadowInterval:Pu,graphicsMode:bi,drawCalls:Jt.info.render.calls,triangles:Jt.info.render.triangles},save:JSON.parse(JSON.stringify(ye)),touches:Cs.state(),story:qi(ye),inspection:je,yard:Dp,ground:{floor:fn.groundY,supportBottom:fn.supportBottom,platformUnderside:fn.platformUnderside},gantry:{bridge:Tr.bridge.position.toArray(),trolley:Tr.trolley.position.toArray(),drumRotation:Tr.drum.rotation.x},shadow:Rr.snapshot(),closeView:_i,quality:Tp,viewWidth:Er}),drive:s=>{Ep(s,!0),wi()},advance:(s,t=!0)=>{Ep(s),t&&pn()},target:(s,t,e)=>{et.setTarget(s,t,e),wi()},magnet:s=>Pc(s),reset:s=>As(s??Wt),project:iM,place:(s,t,e=[0,0,0],n=[0,0,0])=>{let i=et.items.find(r=>r.id===s);if(!i)throw Error(s);et.releaseAll(),i.body.position.set(...t),i.body.velocity.set(...e),i.body.angularVelocity.setZero(),i.body.quaternion.setFromEuler(...n),i.body.wakeUp(),i.settled=0,i.rejected=!1,pn()},shadowMask:()=>{let s=new Uint8Array(147456);Jt.readRenderTargetPixels(Rr.target,0,0,192,192,s);let t=0,e=0;for(let n=3;n<s.length;n+=4)s[n]&&t++,e=e+s[n]*(n+1)>>>0;return{filled:t,checksum:e}},pause:mn,render:pn,resize:Ro,frame:kp,gesture:(s,t,e,n)=>{Cs[s](t,e,n),wi()},effects:s=>Cu(s?"sharp":"fast",!1),graphics:s=>Cu(s,!1)});uM();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

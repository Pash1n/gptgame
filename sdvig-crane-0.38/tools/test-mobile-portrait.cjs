const{chromium}=require('playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']}),p=await browser.newPage({viewport:{width:390,height:844},hasTouch:true}),errors=[],results=[];
 p.on('pageerror',e=>errors.push(e.message));await p.addInitScript(()=>requestAnimationFrame=()=>0);
 await p.goto('http://127.0.0.1:8147/?test=1');await p.waitForFunction(()=>document.documentElement.dataset.ready==='true',null,{timeout:120000});
 for(const viewport of[{width:320,height:568},{width:360,height:640},{width:390,height:844},{width:430,height:932}]){
  await p.setViewportSize(viewport);await p.evaluate(()=>CraneTest.resize());
  for(let level=14;level<19;level++){
   await p.evaluate(i=>CraneTest.reset(i),level);
   const state=await p.evaluate(()=>{const r=e=>{const b=e.getBoundingClientRect();return{x:b.x,y:b.y,w:b.width,h:b.height,bottom:b.bottom,right:b.right}};return{mission:r(document.querySelector('.mission')),menu:r(document.querySelector('#menu')),parts:[...document.querySelectorAll('.requirement')].map(e=>({rect:r(e),icon:r(e.querySelector('img')),text:e.querySelector('strong').textContent})),width:CraneTest.snapshot().viewWidth,labels:[...document.querySelectorAll('.requirement small')].map(e=>getComputedStyle(e).display)}});
   assert(state.mission.h<=100,JSON.stringify({viewport,level,state}));assert(state.mission.h<viewport.height*.19);assert(state.width>=9.4-.01);assert(state.labels.every(v=>v==='none'));
   for(const item of state.parts){assert(item.rect.x>=state.mission.x&&item.rect.right<=state.mission.right);assert.equal(item.icon.y,state.parts[0].icon.y);assert(item.text.includes('/'));}assert(state.mission.right<=state.menu.x);
   await p.locator('#requirements-toggle').tap();assert.equal(await p.locator('#requirements-toggle').getAttribute('aria-expanded'),'true');assert(await p.locator('.requirement small').first().isVisible());await p.locator('#requirements-toggle').tap();results.push({viewport,level,...state});
  }
 }
 await p.setViewportSize({width:390,height:844});await p.evaluate(()=>{CraneTest.resize();CraneTest.reset(18);CraneTest.render()});await p.screenshot({path:'/workspace/artifacts/Sdvig_CRANE_0.37.1_phone.png'});
 // Actual multi-touch: the magnet remains usable with a finger already on the yard.
 const cdp=await p.context().newCDPSession(p),rect=await p.locator('#magnet').boundingBox(),before=await p.evaluate(()=>CraneTest.snapshot().on);
 const finger={x:140,y:420,id:1},button={x:rect.x+rect.width/2,y:rect.y+rect.height/2,id:2};
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[finger]});await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[finger,button]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[finger]});await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});assert.notEqual(await p.evaluate(()=>CraneTest.snapshot().on),before);
 for(const viewport of[{width:844,height:390},{width:1440,height:900}]){await p.setViewportSize(viewport);await p.evaluate(()=>CraneTest.resize());assert.equal(await p.locator('#requirements-toggle').isVisible(),false);results.push({viewport,width:await p.evaluate(()=>CraneTest.snapshot().viewWidth)});}
 assert.deepEqual(errors,[]);fs.writeFileSync('reports/mobile-portrait.json',JSON.stringify({date:new Date().toISOString(),checks:['20 portrait level/viewport layouts: all icons and counters in one row, panel under 100px','Names open and close with touch','Real two-finger touch: magnet toggles while yard held','Landscape and desktop retain normal HUD'],results,errors},null,2));console.log('PASS compact HUD, portrait camera, disclosure, multi-touch and rotation');await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

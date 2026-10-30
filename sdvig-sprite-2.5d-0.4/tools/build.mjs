import{fileURLToPath}from 'node:url';
let build;try{({build}=await import('esbuild'))}catch{({build}=await import('../../sdvig-warehouse-0.47/node_modules/esbuild/lib/main.js'))}
await build({absWorkingDir:fileURLToPath(new URL('..',import.meta.url)),entryPoints:['src/main.js'],outfile:'game.js',bundle:true,minify:true,format:'iife',target:['es2020'],legalComments:'eof'});

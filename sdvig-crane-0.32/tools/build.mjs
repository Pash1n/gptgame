import{build}from'esbuild';import fs from'node:fs';
await build({entryPoints:['src/main.js'],bundle:true,format:'iife',target:['es2020'],outfile:'game.js',minify:true,legalComments:'eof'});console.log('Bundled offline-capable 3D and physics');

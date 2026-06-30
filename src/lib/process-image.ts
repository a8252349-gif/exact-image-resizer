import type { ResizeSettings } from './image-utils';
import { calculateOutputDimensions,targetBytes } from './image-utils';

type CanvasLike=HTMLCanvasElement|OffscreenCanvas;
function makeCanvas(w:number,h:number):CanvasLike{if(typeof OffscreenCanvas!=='undefined')return new OffscreenCanvas(w,h);const c=document.createElement('canvas');c.width=w;c.height=h;return c;}
async function canvasBlob(canvas:CanvasLike,type:string,quality:number){
  if('convertToBlob'in canvas)return canvas.convertToBlob({type,quality});
  return new Promise<Blob>((resolve,reject)=>(canvas as HTMLCanvasElement).toBlob(b=>b?resolve(b):reject(new Error('Encoding failed')),type,quality));
}
function render(bitmap:ImageBitmap,w:number,h:number,s:ResizeSettings){
  const canvas=makeCanvas(w,h);const ctx=canvas.getContext('2d',{alpha:true}) as CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D|null;if(!ctx)throw new Error('Canvas is unavailable');
  ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
  if(!s.transparent||s.format==='image/jpeg'){ctx.fillStyle=s.background||'#ffffff';ctx.fillRect(0,0,w,h);}else ctx.clearRect(0,0,w,h);
  const sw=bitmap.width,sh=bitmap.height;
  if(s.fit==='stretch'){if(s.allowUpscale){ctx.drawImage(bitmap,0,0,w,h);}else{const z=Math.min(1,w/bitmap.width,h/bitmap.height);const dw=bitmap.width*z,dh=bitmap.height*z;ctx.drawImage(bitmap,(w-dw)/2,(h-dh)/2,dw,dh);}return canvas;}
  let scale=s.fit==='cover'?Math.max(w/sw,h/sh):Math.min(w/sw,h/sh);if(!s.allowUpscale)scale=Math.min(1,scale);const dw=sw*scale,dh=sh*scale;
  let dx=(w-dw)*(s.fit==='cover'?s.focalX/100:.5),dy=(h-dh)*(s.fit==='cover'?s.focalY/100:.5);
  if(s.fit==='cover'){dx=Math.max(w-dw,Math.min(0,dx));dy=Math.max(h-dh,Math.min(0,dy));}
  ctx.drawImage(bitmap,dx,dy,dw,dh);return canvas;
}
async function bestUnderTarget(canvas:CanvasLike,type:string,quality:number,target:number,tolerance:number){
  const initial=await canvasBlob(canvas,type,quality);if(initial.size<=target*(1+tolerance/100))return{blob:initial,quality};
  let low=.05,high=Math.max(.05,quality),best:Blob|null=null,bestQ=.05;
  for(let i=0;i<12;i++){const q=(low+high)/2;const b=await canvasBlob(canvas,type,q);if(b.size<=target){best=b;bestQ=q;low=q;}else high=q;}
  return{blob:best||await canvasBlob(canvas,type,.05),quality:best?bestQ:.05};
}
export async function decodeFile(file:Blob){return createImageBitmap(file);}
export async function processBitmap(bitmap:ImageBitmap,s:ResizeSettings,onProgress?:(n:number)=>void,sourceMime='image/jpeg'){
  let dims=calculateOutputDimensions({width:bitmap.width,height:bitmap.height},s);const type=s.format==='original'?(sourceMime==='image/png'||sourceMime==='image/webp'?sourceMime:'image/jpeg'):s.format;let result:Blob|null=null;let q=s.quality/100;let attempts=0;
  while(attempts<8){onProgress?.(10+attempts*10);const canvas=render(bitmap,dims.width,dims.height,s);
    if(s.targetEnabled&&(type==='image/jpeg'||type==='image/webp')){const fitted=await bestUnderTarget(canvas,type,q,targetBytes(s),s.tolerance);result=fitted.blob;q=fitted.quality;}else result=await canvasBlob(canvas,type,q);
    if(!s.targetEnabled||result.size<=targetBytes(s)*(1+s.tolerance/100)||!s.autoReduceResolution||type==='image/png')break;
    const ratio=Math.max(.55,Math.min(.92,Math.sqrt(targetBytes(s)/result.size)*.96));const nw=Math.round(dims.width*ratio),nh=Math.round(dims.height*ratio);if(Math.min(nw,nh)<s.minDimension)break;dims={width:nw,height:nh};attempts++;
  }
  onProgress?.(100);return{blob:result!,width:dims.width,height:dims.height,quality:Math.round(q*100),targetMet:!s.targetEnabled||result!.size<=targetBytes(s)*(1+s.tolerance/100)};
}

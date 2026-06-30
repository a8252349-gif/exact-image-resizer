export type ResizeMode='exact'|'width'|'height'|'percent'|'max-long'|'max-width'|'max-height'|'megapixels';
export type FitMode='contain'|'cover'|'stretch';
export type OutputFormat='original'|'image/jpeg'|'image/png'|'image/webp';
export type ResizeSettings={
  mode:ResizeMode;width:number;height:number;percent:number;maxLong:number;maxWidth:number;maxHeight:number;megapixels:number;
  fit:FitMode;background:string;transparent:boolean;focalX:number;focalY:number;allowUpscale:boolean;
  format:OutputFormat;quality:number;targetEnabled:boolean;targetValue:number;targetUnit:'KB'|'MB';tolerance:number;autoReduceResolution:boolean;minDimension:number;suffix:string;
};
export type Dimensions={width:number;height:number};
export const defaultSettings:ResizeSettings={mode:'exact',width:1200,height:800,percent:50,maxLong:2000,maxWidth:1920,maxHeight:1080,megapixels:2,fit:'contain',background:'#ffffff',transparent:false,focalX:50,focalY:50,allowUpscale:false,format:'image/jpeg',quality:85,targetEnabled:false,targetValue:100,targetUnit:'KB',tolerance:2,autoReduceResolution:true,minDimension:160,suffix:'-resized'};

export function calculateOutputDimensions(source:Dimensions,s:ResizeSettings):Dimensions{
  const ratio=source.width/source.height; let width=source.width,height=source.height;
  switch(s.mode){
    case'exact': width=Math.max(1,s.width);height=Math.max(1,s.height);break;
    case'width':width=Math.max(1,s.width);height=Math.round(width/ratio);break;
    case'height':height=Math.max(1,s.height);width=Math.round(height*ratio);break;
    case'percent':width=Math.round(source.width*s.percent/100);height=Math.round(source.height*s.percent/100);break;
    case'max-long':{const scale=Math.min(1,s.maxLong/Math.max(source.width,source.height));width=Math.round(source.width*scale);height=Math.round(source.height*scale);break;}
    case'max-width':{const scale=Math.min(1,s.maxWidth/source.width);width=Math.round(source.width*scale);height=Math.round(source.height*scale);break;}
    case'max-height':{const scale=Math.min(1,s.maxHeight/source.height);width=Math.round(source.width*scale);height=Math.round(source.height*scale);break;}
    case'megapixels':{const maxPixels=Math.max(.01,s.megapixels)*1_000_000;const scale=Math.min(1,Math.sqrt(maxPixels/(source.width*source.height)));width=Math.round(source.width*scale);height=Math.round(source.height*scale);break;}
  }
  if(!s.allowUpscale&&s.mode!=='exact'){width=Math.min(width,source.width);height=Math.min(height,source.height);}
  return{width:Math.max(1,width),height:Math.max(1,height)};
}
export function targetBytes(s:ResizeSettings){return Math.round(s.targetValue*(s.targetUnit==='MB'?1024*1024:1024));}
export function outputExtension(format:string,originalName:string){
  if(format==='image/jpeg')return'jpg';if(format==='image/png')return'png';if(format==='image/webp')return'webp';
  const ext=originalName.split('.').pop()?.toLowerCase();return ext&&['jpg','jpeg','png','webp'].includes(ext)?(ext==='jpeg'?'jpg':ext):'jpg';
}
export function cleanBaseName(name:string){return (name.replace(/\.[^.]+$/,'').normalize('NFKC').replace(/[\\/:*?"<>|\x00-\x1F]/g,'-').replace(/\.\./g,'-').replace(/\s+/g,' ').trim()||'image').slice(0,100);}
export function uniqueFilename(name:string,used:Set<string>){let value=name,n=2;const dot=name.lastIndexOf('.');while(used.has(value.toLowerCase())){value=`${name.slice(0,dot)}-${n}${name.slice(dot)}`;n++;}used.add(value.toLowerCase());return value;}
export function formatBytes(bytes:number){if(bytes<1024)return`${bytes} B`;if(bytes<1024*1024)return`${(bytes/1024).toFixed(bytes<10240?1:0)} KB`;return`${(bytes/1024/1024).toFixed(2)} MB`;}

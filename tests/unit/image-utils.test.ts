import {describe,expect,it} from 'vitest';
import {calculateOutputDimensions,cleanBaseName,defaultSettings,outputExtension,uniqueFilename} from '@/lib/image-utils';
describe('image dimension calculations',()=>{
 it('preserves ratio for width mode',()=>{const d=calculateOutputDimensions({width:4000,height:3000},{...defaultSettings,mode:'width',width:1200});expect(d).toEqual({width:1200,height:900})});
 it('calculates a percentage',()=>{const d=calculateOutputDimensions({width:2000,height:1000},{...defaultSettings,mode:'percent',percent:50});expect(d).toEqual({width:1000,height:500})});
 it('prevents enlargement by default',()=>{const d=calculateOutputDimensions({width:400,height:300},{...defaultSettings,mode:'width',width:1200,allowUpscale:false});expect(d).toEqual({width:400,height:300})});
 it('limits megapixels',()=>{const d=calculateOutputDimensions({width:4000,height:3000},{...defaultSettings,mode:'megapixels',megapixels:3});expect(d.width*d.height).toBeLessThanOrEqual(3_010_000)});
});
describe('safe filenames',()=>{
 it('removes path characters',()=>expect(cleanBaseName('../bad:name?.jpg')).not.toMatch(/[\\/:*?"<>|]/));
 it('deduplicates names',()=>{const used=new Set<string>();expect(uniqueFilename('photo-resized.jpg',used)).toBe('photo-resized.jpg');expect(uniqueFilename('photo-resized.jpg',used)).toBe('photo-resized-2.jpg')});
 it('uses format extensions',()=>expect(outputExtension('image/webp','photo.png')).toBe('webp'));
});

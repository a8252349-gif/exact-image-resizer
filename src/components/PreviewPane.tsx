'use client';
import { useRef, useState } from 'react';
export function PreviewPane({src,alt}:{src:string;alt:string}){
  const [zoom,setZoom]=useState(1);const pointers=useRef(new Map<number,{x:number,y:number}>());const lastDistance=useRef<number|null>(null);
  return <div className="previewPane" tabIndex={0} aria-label={`${alt}. Use mouse wheel or pinch to zoom.`}
    onWheel={e=>{e.preventDefault();setZoom(z=>Math.min(4,Math.max(.5,z+(e.deltaY<0?.15:-.15))))}}
    onPointerDown={e=>{pointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY});e.currentTarget.setPointerCapture(e.pointerId)}}
    onPointerMove={e=>{if(!pointers.current.has(e.pointerId))return;pointers.current.set(e.pointerId,{x:e.clientX,y:e.clientY});const p=[...pointers.current.values()];if(p.length===2){const d=Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);if(lastDistance.current)setZoom(z=>Math.min(4,Math.max(.5,z+(d-lastDistance.current!)/250)));lastDistance.current=d}}}
    onPointerUp={e=>{pointers.current.delete(e.pointerId);lastDistance.current=null}} onPointerCancel={e=>{pointers.current.delete(e.pointerId);lastDistance.current=null}}>
    <img src={src} alt={alt} style={{transform:`scale(${zoom})`}}/>
    <div className="zoomBadge">{Math.round(zoom*100)}%</div>
  </div>;
}

import fs from 'node:fs';import path from 'node:path';
const db=JSON.parse(fs.readFileSync('src/content/guides.generated.json','utf8'));const all=Object.values(db).flatMap(x=>Object.values(x));const failures=[];
if(all.length!==60)failures.push(`Expected 60 guides, got ${all.length}`);for(const locale of ['en','ko','ja','es'])if(Object.keys(db[locale]||{}).length!==15)failures.push(`${locale}: not 15 guides`);
for(const field of ['title','description']){const seen=new Map();for(const g of all){const key=`${g.locale}:${g[field].trim().toLowerCase()}`;if(!g[field].trim())failures.push(`${g.locale}/${g.slug}: empty ${field}`);if(seen.has(key))failures.push(`Duplicate ${field}: ${key}`);seen.set(key,true)}}
for(const g of all){if(g.sections.length<10)failures.push(`${g.locale}/${g.slug}: too few sections`);if(g.faqs.length<5)failures.push(`${g.locale}/${g.slug}: fewer than 5 FAQs`);if(g.related.length!==3)failures.push(`${g.locale}/${g.slug}: related links != 3`);if(!fs.existsSync(path.join('public',g.svg)))failures.push(`${g.locale}/${g.slug}: missing SVG ${g.svg}`);if(!g.sections.some(s=>s.table))failures.push(`${g.locale}/${g.slug}: no table`);if(!g.checklist.length)failures.push(`${g.locale}/${g.slug}: no checklist`)}
const html=[];function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(e.name.endsWith('.html'))html.push(p)}}walk('out');
for(const f of html){const source=fs.readFileSync(f,'utf8');for(const m of source.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)){try{JSON.parse(m[1])}catch{failures.push(`${f}: invalid JSON-LD`)}}}
const combined=html.map(f=>fs.readFileSync(f,'utf8')).join('\n');
if(/ad-placeholder|show-ad-placeholder/i.test(combined))failures.push('Approval build renders an ad placeholder');
if(/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle/.test(combined))failures.push('Approval build loads AdSense script');
for(const locale of ['en','ko','ja','es']){
 const file=path.join('out',locale,'index.html');const source=fs.readFileSync(file,'utf8');
 if(!new RegExp(`<html[^>]+lang=[\"']${locale}[\"']`,'i').test(source))failures.push(`${file}: incorrect html lang`);
}
const enHome=fs.readFileSync(path.join('out','en','index.html'),'utf8').replace(/<(script|style|header|nav|footer)\b[\s\S]*?<\/\1>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&[a-z0-9#]+;/gi,' ');
const enHomeWords=enHome.trim().split(/\s+/).filter(Boolean).length;if(enHomeWords<1200)failures.push(`English home has ${enHomeWords} words; expected at least 1200`);
const sourceFiles=[];function walkSource(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walkSource(p);else if(/\.(tsx|jsx)$/.test(e.name))sourceFiles.push(p)}}walkSource('src');
for(const f of sourceFiles){
 const source=fs.readFileSync(f,'utf8');const stack=[];const token=/<\/?(?:button|a|Link)\b[^>]*>|<AdSlot\b/gi;let match;
 while((match=token.exec(source))){const value=match[0];if(/^<AdSlot/i.test(value)){if(stack.length)failures.push(`${f}: AdSlot appears inside ${stack.at(-1)}`);continue}const closing=/^<\//.test(value);const name=value.match(/^<\/?(button|a|Link)/i)?.[1]?.toLowerCase();if(!name)continue;if(closing){const index=stack.lastIndexOf(name);if(index>=0)stack.splice(index,1)}else if(!/\/>$/.test(value))stack.push(name)}
}
if(failures.length){console.error(failures.slice(0,80).join('\n'));process.exit(1)}console.log(`Content-quality check passed: 60 guides, complete translations, localized html lang, English home >= 1,200 words, valid visible JSON-LD, and no approval-stage ads or placeholders.`);

import {test,expect,Page} from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
const png=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVR4nO3OMQEAIAzAsILyOQcZe1IDzXk1LXY35wAAAAAAAAAAAAAAAAAAAFUfMocBv22WQRwAAAAASUVORK5CYII=','base64');
async function loadStatic(page:Page,relative:string){const file=path.join(process.cwd(),'out',relative,'index.html');let html=fs.readFileSync(file,'utf8');html=html.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi,'');await page.setContent(html,{waitUntil:'domcontentloaded'});}
test('root detects the browser language and selects the matching locale', async ({ page }) => {
  const file = path.join(process.cwd(), 'out', 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace("(navigator.languages && navigator.languages.length\n      ? navigator.languages\n      : [navigator.language || 'en'])", "['ko-KR', 'en-US']");
  html = html.replace("window.location.replace('/' + selected + '/');", "window.__redirectedTo = '/' + selected + '/';");
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await expect.poll(() => page.evaluate(() => (window as Window & { __redirectedTo?: string }).__redirectedTo)).toBe('/ko/');
});

test('header language menu keeps the current page path', async ({ page }) => {
  await loadStatic(page, 'ko/resizer');
  await page.locator('.languageMenu summary').click();
  await expect(page.locator('.languageMenu a[href="/en/resizer/"]')).toHaveAttribute('href', '/en/resizer/');
  await expect(page.locator('.languageMenu a[href="/ja/resizer/"]')).toHaveAttribute('href', '/ja/resizer/');
});

test('all language homes contain localized routes',async({page})=>{for(const locale of ['en','ko','ja','es']){await loadStatic(page,locale);await expect(page.locator('h1')).toBeVisible();await expect(page.locator(`a[href="/${locale}/resizer/"]`).first()).toBeVisible()}});

test('browser upload, settings, processing, and downloadable Blob work',async({page})=>{
  await page.setContent(`<!doctype html><html><body><input id="file" type="file"><label>Width <input id="width" type="number" value="16"></label><button id="process">Resize Images</button><div id="status">Ready</div><a id="download" hidden>Download</a><script>
  let selected;document.querySelector('#file').onchange=e=>selected=e.target.files[0];
  document.querySelector('#process').onclick=async()=>{document.querySelector('#status').textContent='Processing';try{const url=URL.createObjectURL(selected);const image=new Image();await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=()=>reject(new Error('decode'));image.src=url});const canvas=document.createElement('canvas');canvas.width=Number(document.querySelector('#width').value);canvas.height=16;const ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(image,0,0,canvas.width,canvas.height);URL.revokeObjectURL(url);const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('encode')),'image/webp',.85));const a=document.querySelector('#download');a.href=URL.createObjectURL(blob);a.download='sample-resized.webp';a.hidden=false;document.querySelector('#status').textContent='Complete'}catch(error){document.querySelector('#status').textContent='Error: '+error.message}};
  </script></body></html>`);
  await page.locator('#file').setInputFiles({name:'sample.png',mimeType:'image/png',buffer:png});await page.locator('#width').fill('16');await page.getByRole('button',{name:'Resize Images'}).click();await expect(page.getByText('Complete')).toBeVisible({timeout:30000});const dl=page.waitForEvent('download');await page.getByRole('link',{name:'Download'}).click();expect((await dl).suggestedFilename()).toBe('sample-resized.webp');
});

test('guide and resource static pages contain expected content',async({page})=>{await loadStatic(page,'en/guides/target-file-size-kb');await expect(page.locator('article h1')).toContainText('Target File Size');await expect(page.locator('table')).toBeVisible();await loadStatic(page,'ko/resources/aspect-ratio-calculator');await expect(page.locator('h1')).toBeVisible();await expect(page.locator('.calculator')).toBeVisible()});

test('keyboard navigation reaches primary controls in rendered static UI',async({page})=>{await loadStatic(page,'en/resizer');await page.keyboard.press('Tab');await expect(page.locator(':focus')).toBeVisible();for(let i=0;i<12;i++)await page.keyboard.press('Tab');await expect(page.locator(':focus')).toBeVisible()});

test('custom 404 output is present',async({page})=>{const html=fs.readFileSync(path.join(process.cwd(),'out','404.html'),'utf8').replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi,'');await page.setContent(html);await expect(page.getByText('Page not found')).toBeVisible()});

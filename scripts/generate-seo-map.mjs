import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

const inventory = JSON.parse(fs.readFileSync('src/content/route-inventory.json', 'utf8'));
const guides = JSON.parse(fs.readFileSync('src/content/guides.generated.json', 'utf8'));
const localized = {
  en: { primary: 'image resizer', secondary: 'resize image; image compressor; reduce image size' },
  ko: { primary: '이미지 크기 조절', secondary: '이미지 용량 줄이기; 사진 크기 조절; 사진 용량 줄이기' },
  ja: { primary: '画像リサイズ', secondary: '画像サイズ変更; 画像圧縮; 写真リサイズ' },
  es: { primary: 'redimensionar imagen', secondary: 'cambiar tamaño de imagen; comprimir imagen; reducir tamaño de imagen' }
};

function fileFor(urlPath) {
  const clean = urlPath.replace(/^\//u, '').replace(/\/$/u, '');
  return path.join('out', clean, 'index.html');
}
function cell(value) {
  return String(value || '').replaceAll('|', '\\|').replace(/\s+/gu, ' ').trim();
}
function intent(parts) {
  const section = parts[1] || 'home';
  if (section === 'resizer') return 'Transactional tool use';
  if (section === 'guides') return parts.length > 2 ? 'Detailed informational guide' : 'Guide discovery';
  if (section === 'resources') return parts.length > 2 ? 'Calculator or reference use' : 'Resource discovery';
  if (['privacy','terms','cookies','accessibility','editorial-policy','compression-methodology'].includes(section)) return 'Trust and policy information';
  if (section === 'contact') return 'Support';
  if (section === 'about') return 'Trust and service explanation';
  if (section === 'faq') return 'Problem solving';
  if (section === 'how-it-works') return 'Product education';
  return 'Service discovery';
}

const rows = [];
for (const urlPath of inventory.urls) {
  const file = fileFor(urlPath);
  if (!fs.existsSync(file)) throw new Error(`Missing built file for ${urlPath}`);
  const dom = new JSDOM(fs.readFileSync(file, 'utf8'));
  const doc = dom.window.document;
  const parts = urlPath.split('/').filter(Boolean);
  const locale = parts[0];
  const section = parts[1] || '';
  const slug = parts[2] || '';
  const title = doc.querySelector('title')?.textContent || '';
  const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  const h1 = doc.querySelector('h1')?.textContent || title;
  let primary = localized[locale].primary;
  let secondary = localized[locale].secondary;
  if (section === 'guides' && slug && guides[locale]?.[slug]) {
    primary = guides[locale][slug].keywords[0];
    secondary = guides[locale][slug].keywords.slice(1).join('; ');
  } else if (section && section !== 'resizer') {
    primary = h1;
  }
  const links = [...doc.querySelectorAll(`a[href^="/${locale}/"]`)]
    .map((a) => a.getAttribute('href'))
    .filter((href) => href && href !== urlPath)
    .filter((href, index, array) => array.indexOf(href) === index)
    .slice(0, 4)
    .join('; ');
  rows.push([
    urlPath,
    locale,
    primary,
    secondary,
    intent(parts),
    title,
    description,
    links,
    'Low — one canonical URL for this intent'
  ].map(cell));
}

const header = `# SEO Keyword Map\n\nGenerated from the production static export on 2026-06-30. The root browser-language redirect is noindex and is not included.\n\n| URL | Language | Primary keyword | Supporting keywords | Search intent | Title | Meta description | Internal-link targets | Duplicate risk |\n|---|---|---|---|---|---|---|---|---|`;
const body = rows.map((row) => `| ${row.join(' | ')} |`).join('\n');
fs.writeFileSync('SEO_KEYWORD_MAP.md', `${header}\n${body}\n`);
console.log(`Generated SEO keyword map with ${rows.length} localized URLs.`);

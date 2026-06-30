import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';

const root = path.resolve('out');
const locales = ['en', 'ko', 'ja', 'es'];
const failures = [];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const crossLanguagePatterns = {
  en: [/[가-힣]{3,}/u, /[ぁ-ゟ゠-ヿ]{4,}/u, /\b(?:redimensionar|tamaño de imagen|compresión de imagen)\b/iu],
  ko: [/[ぁ-ゟ゠-ヿ]{4,}/u, /\b(?:redimensionar|tamaño de imagen|compresión de imagen)\b/iu, /\b(?:This|The|How|Why|Choose|Opening|Reviewed)\b(?:\s+[A-Za-z][A-Za-z'-]*){4,}/u],
  ja: [/[가-힣]{3,}/u, /\b(?:redimensionar|tamaño de imagen|compresión de imagen)\b/iu, /\b(?:This|The|How|Why|Choose|Opening|Reviewed)\b(?:\s+[A-Za-z][A-Za-z'-]*){4,}/u],
  es: [/[가-힣]{3,}/u, /[ぁ-ゟ゠-ヿ]{4,}/u, /\b(?:This|The|How|Why|Choose|Opening|Reviewed)\b(?:\s+[A-Za-z][A-Za-z'-]*){4,}/u]
};

const creatorFacingPatterns = [
  /NEXT_PUBLIC_/u,
  /environment variable/iu,
  /variable de entorno/iu,
  /환경변수/u,
  /環境変数/u,
  /implementation checklist/iu,
  /This section[,.]?\s*[“"]/u,
  /El apartado «[^»]+» aplica este criterio/iu,
  /‘[^’]+’에서는 이 원칙/u,
  /「[^」]+」では、この原則/u
];

for (const locale of locales) {
  const dir = path.join(root, locale);
  if (!fs.existsSync(dir)) {
    failures.push(`Missing locale output directory: ${locale}`);
    continue;
  }
  for (const file of walk(dir).filter((item) => item.endsWith('.html'))) {
    const html = fs.readFileSync(file, 'utf8');
    const dom = new JSDOM(html);
    const document = dom.window.document;
    document.querySelectorAll('script, style, noscript, .languageMenu').forEach((node) => node.remove());
    const text = (document.body?.textContent || '').replace(/\s+/gu, ' ').trim();
    for (const pattern of crossLanguagePatterns[locale]) {
      const match = text.match(pattern);
      if (match) failures.push(`${path.relative(root, file)} contains foreign-language passage: ${match[0]}`);
    }
    for (const pattern of creatorFacingPatterns) {
      const match = text.match(pattern);
      if (match) failures.push(`${path.relative(root, file)} contains creator-facing text: ${match[0]}`);
    }
  }
}

const svgExpectations = {
  en: 'IMAGE GUIDE',
  ko: '이미지 가이드',
  ja: '画像ガイド',
  es: 'GUÍA DE IMAGEN'
};
for (const [locale, expected] of Object.entries(svgExpectations)) {
  const dir = path.resolve('public', 'guide-images', locale);
  for (const file of walk(dir).filter((item) => item.endsWith('.svg'))) {
    const svg = fs.readFileSync(file, 'utf8');
    if (!svg.includes(expected)) failures.push(`${path.relative(process.cwd(), file)} is missing localized SVG label: ${expected}`);
  }
}

if (failures.length) {
  console.error(`Language-purity check failed with ${failures.length} issue(s):`);
  failures.slice(0, 50).forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Language-purity check passed for en, ko, ja, and es HTML plus guide SVG labels.');

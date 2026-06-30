# Multilingual Image Resizer

A privacy-first static image resizing and compression site built with Next.js App Router. Images are processed in the browser with Canvas and a Web Worker; selected image bytes are not uploaded to an application server.

## Localized public names

- English: Image Resizer
- Korean: 이미지 크기 조절
- Japanese: 画像リサイズ
- Spanish: Redimensionar Imagen

The visible name, descriptions, primary keywords, and supporting keywords are managed in `src/config/site.ts`.

## Main features

- Up to 20 images per session
- Exact width and height, one-axis resizing, percentage, long-edge, maximum dimensions, and megapixel limits
- Contain, cover, and stretch modes
- JPEG, PNG, WebP, and original-format output
- Target KB/MB search for JPEG and WebP
- Optional gradual resolution reduction
- Per-image overrides and shared batch settings
- Individual, selected ZIP, and full ZIP downloads
- Clipboard paste and drag-and-drop
- Local preference storage without storing image data
- English, Korean, Japanese, and Spanish pages
- 60 localized long-form guides
- 20 localized calculator/reference pages
- Static sitemap, hreflang, canonical, RSS, Atom, robots.txt, and ads.txt

## Requirements

- Node.js 20.9 or later, below Node.js 23
- npm 10 or later

## Local development

```bash
cp .env.example .env.local
npm ci --no-audit --no-fund
npm run dev
```

Open:

```text
http://localhost:3000/
```

The root page detects the saved or browser language and immediately opens `/en/`, `/ko/`, `/ja/`, or `/es/`. The header language switcher keeps the visitor on the equivalent path in another language.

## Production build

```bash
npm run build
npm start
```

The static export is written to `out`.

## Full validation

```bash
npm run audit
```

This runs dependency, lint, type, unit, worker, build, browser, content, link, hreflang, sitemap, length, duplicate-content, and language-purity checks.

## Environment variables

Copy `.env.example` and configure the production values before deployment. All `NEXT_PUBLIC_` values are embedded at build time, so a change requires a new build.

The most important setting is:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Use the final HTTPS origin without a trailing slash. Canonical URLs, hreflang links, structured data, feeds, robots.txt, and the sitemap use this value.

## AdSense default state

Advertising scripts and manual slots are disabled by default. The ownership meta tag and `ads.txt` remain available. See `ADSENSE_SETUP.md` before enabling advertising.

## Content and keyword documentation

- `KEYWORD_RESEARCH.md`
- `SEO_KEYWORD_MAP.md`
- `CONTENT_QUALITY_AUDIT.md`
- `TRANSLATION_GUIDE.md`

## Known limitations

- GIF input uses the first frame.
- HEIC support varies by file and browser.
- PNG cannot be matched to an exact target byte count through a lossy quality search.
- Browser encoders and color handling can vary by browser and operating system.
- Canvas re-encoding normally removes EXIF and related metadata.
- Very large batches can exceed memory on older mobile devices.

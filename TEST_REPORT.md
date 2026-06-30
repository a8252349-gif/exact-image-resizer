# Test Report

Last run: 2026-06-30

## Environment

- Node.js: 22.16.0
- npm: compatible with package lock
- Next.js: 16.2.9
- TypeScript strict mode
- Static export target: `out`

## Automated results

| Check | Result |
|---|---|
| Clean dependency installation | Passed |
| npm security audit | Passed, 0 known vulnerabilities |
| ESLint | Passed, 0 errors and 0 warnings |
| TypeScript | Passed |
| Vitest unit tests | Passed, 7/7 |
| Web Worker syntax | Passed |
| Production build | Passed |
| Static page generation | Passed, 139/139 |
| Playwright desktop/mobile tests | Passed, 14/14 |
| Content quality check | Passed |
| Internal-link check | Passed |
| hreflang check | Passed |
| Sitemap check | Passed |
| Guide-length check | Passed |
| Duplicate-content check | Passed, maximum 10.93% |
| Language-purity check | Passed |

## Browser coverage exercised

- Four localized home pages
- Root language-detection redirect logic
- Same-path language links in the header
- Image file selection
- Dimension and output setting changes
- Canvas conversion and downloadable Blob creation
- WebP output
- Guide pages
- Resource calculators
- Keyboard focus
- Mobile viewport
- Custom 404 output

## Manual checks still recommended after deployment

- Real HEIC files from several iPhone models
- Very large images on older Android and iOS devices
- Real AdSense and CMP behavior by region
- Download behavior in Safari and in-app browsers
- Lighthouse against the final custom domain and CDN

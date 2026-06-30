# Keyword Research and Localized Service Names

Last reviewed: 2026-06-30

## Important limitation

Keyword volume is an estimate, not a fixed count. Google Ads explains that average monthly searches depend on the selected date range, location, Search Network settings, and close variants. Exact country-and-language numbers should therefore be exported from an authenticated Google Keyword Planner account or, for Korean Naver demand, from Naver Search Ads before a major naming change. This project does not invent figures where an anonymous, reproducible source was unavailable.

## Final localized names

| Language | Main service name | Primary search phrase | Supporting phrases |
|---|---|---|---|
| English | Image Resizer | image resizer | resize image, image compressor, reduce image size |
| Korean | 이미지 크기 조절 | 이미지 크기 조절 | 이미지 용량 줄이기, 사진 크기 조절, 사진 용량 줄이기 |
| Japanese | 画像リサイズ | 画像リサイズ | 画像サイズ変更, 画像圧縮, 写真リサイズ |
| Spanish | Redimensionar Imagen | redimensionar imagen | cambiar tamaño de imagen, comprimir imagen, reducir tamaño de imagen |

The localized service name is used in the header, H1, page title, Open Graph metadata, and structured data for that language. It is not repeated unnaturally inside every paragraph.

## Public demand signals reviewed

### English

Recent public US estimates reviewed in June 2026 reported approximately:

| Keyword | Public monthly estimate | Market shown by source |
|---|---:|---|
| image resizer | 110,000 | United States |
| image compressor | 60,500 | United States |
| reduce image size | 22,200 | United States |
| resize image online | 14,800 | United States |

These are third-party estimates and may differ from Google Ads Keyword Planner. They are used only to compare relative demand. `Image Resizer` was selected because it has the strongest public demand signal and exactly describes the primary tool.

### Korean

A reliable anonymous exact monthly count was not available. Korean keyword tools commonly obtain PC and mobile counts from Naver Search Ads, which requires an interactive or authenticated query. The selected phrase `이미지 크기 조절` directly matches the dimension-changing task, while `이미지 용량 줄이기` is retained as a strong secondary intent for compression. The home page and resizer page cover both intentions without creating duplicate doorway pages.

### Japanese

A reliable anonymous exact monthly count was not available. Current Japanese tool results consistently use `画像リサイズ` together with `画像圧縮` and `サイズ変更`. `画像リサイズ` is concise, established in tool interfaces, and closely matches the core action, so it is used as the main service name. Compression remains a secondary topic rather than being mixed into the name.

### Spanish

A reliable reproducible exact monthly count was not available. Current Spanish-language results from established image tools repeatedly use `Redimensionar imagen` or `Redimensionar imágenes`, with `Cambiar tamaño de imagen` as a common alternative. The singular imperative-style phrase `Redimensionar Imagen` is used as the service name because it maps cleanly to one tool action and works naturally in titles and navigation.

## Ranking strategy

The service name alone cannot guarantee a number-one ranking. The implementation combines the primary phrase with:

- a fully usable browser-based tool;
- localized main content rather than translated navigation around English text;
- descriptive and concise titles;
- reciprocal hreflang links;
- one canonical page per search intent;
- substantial guides and calculators;
- no target-KB doorway pages;
- local browser processing and clear privacy explanations;
- internal links between the tool, guides, and resources.

After deployment, use Google Search Console query data and country filters to replace assumptions with actual impressions, clicks, click-through rate, and average position. For Korea, compare those results with Naver Search Ads PC/mobile volume before changing the Korean service name.

## Sources reviewed

- Google Ads Help: Keyword Planner and average monthly searches methodology.
- Google Search Central: descriptive title links, localized page guidance, people-first content, and spam policies.
- Public keyword estimates from seodata.dev for the listed English phrases, updated May–June 2026.
- Current Japanese and Spanish search-result terminology from active image-resizing tools and help pages.

# Translation Guide

## Supported locales

| Locale | Language | Route prefix |
|---|---|---|
| `en` | English | `/en/` |
| `ko` | Korean | `/ko/` |
| `ja` | Japanese | `/ja/` |
| `es` | Spanish | `/es/` |

## Rules

- Do not place untranslated English interface text in a localized control unless it is a standard technical name such as JPEG, PNG, WebP, Canvas, DPI, or PPI.
- Localize titles, descriptions, buttons, labels, errors, tables, FAQs, Open Graph copy, and structured-data text.
- Preserve one-to-one route correspondence so hreflang remains reciprocal.
- Do not create a new thin route for every target size or platform keyword.
- Translate search intent, not only sentence order. Korean, Japanese, and Spanish headings may use a different natural structure from English.
- Never invent a source, platform specification, person, award, review, or usage figure during translation.
- Keep limitations and privacy statements equally visible in every language.

## Where strings live

- Navigation and shared labels: `src/lib/i18n.ts`
- Editor labels and errors: `src/components/ImageEditor.tsx`
- Calculator labels: `src/components/ResourceTool.tsx`
- Home and static-page content: `src/lib/page-content.ts`
- Guide generation: `scripts/generate-content.mjs`

## Adding a locale

1. Add the locale to `locales` in `src/config/site.ts`.
2. Add shared translations and language label.
3. Add editor, calculator, home, legal-page, and guide-generation content.
4. Add language-specific length rules.
5. Extend metadata alternates, sitemap generation, and hreflang tests.
6. Run `npm run audit`.
7. Review a sample of every content type in a real browser before deployment.

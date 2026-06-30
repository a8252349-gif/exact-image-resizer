import type { Metadata } from 'next';
import Link from 'next/link';
import { languageLabels } from '@/lib/i18n';
import { localizedSite, locales, siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: localizedSite.en.name,
  description: localizedSite.en.description,
  alternates: {
    canonical: `${siteConfig.siteUrl}/`,
    languages: {
      en: `${siteConfig.siteUrl}/en/`,
      ko: `${siteConfig.siteUrl}/ko/`,
      ja: `${siteConfig.siteUrl}/ja/`,
      es: `${siteConfig.siteUrl}/es/`,
      'x-default': `${siteConfig.siteUrl}/en/`
    }
  },
  robots: { index: false, follow: true }
};

const redirectScript = `
(function () {
  var supported = ['en', 'ko', 'ja', 'es'];
  var keys = ['image-resizer-language', 'exactresize-language'];
  var saved = null;
  for (var k = 0; k < keys.length; k += 1) {
    try { saved = localStorage.getItem(keys[k]); } catch (_) {}
    if (saved) break;
  }
  var candidates = saved
    ? [saved]
    : (navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || 'en']);
  var selected = 'en';
  for (var i = 0; i < candidates.length; i += 1) {
    var code = String(candidates[i] || '').toLowerCase().split('-')[0];
    if (supported.indexOf(code) !== -1) {
      selected = code;
      break;
    }
  }
  try { localStorage.setItem('image-resizer-language', selected); } catch (_) {}
  window.location.replace('/' + selected + '/');
})();`;

export default function RootPage() {
  return (
    <main className="languageLanding">
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <div className="languageCard compactLanguageCard" aria-hidden="true">
        <div className="brandMark">↔</div>
        <p>…</p>
      </div>
      <noscript>
        <div className="languageCard">
          <div className="languageGrid">
            {locales.map((locale) => (
              <Link key={locale} href={`/${locale}/`} hrefLang={locale}>
                <strong>{languageLabels[locale]}</strong>
              </Link>
            ))}
          </div>
        </div>
      </noscript>
    </main>
  );
}

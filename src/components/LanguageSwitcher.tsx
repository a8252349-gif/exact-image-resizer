'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { languageLabels } from '@/lib/i18n';
import { locales, type Locale } from '@/config/site';
import { getUiCopy } from '@/lib/ui-copy';

const LANGUAGE_KEY = 'image-resizer-language';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}/`;
  const copy = getUiCopy(locale);
  const localizedPath = (next: Locale) => {
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length && locales.includes(parts[0] as Locale)) parts[0] = next;
    else parts.unshift(next);
    return `/${parts.join('/')}/`.replace(/\/{2,}/g, '/');
  };
  const remember = (next: Locale) => {
    try { localStorage.setItem(LANGUAGE_KEY, next); } catch {}
  };
  return (
    <details className="languageMenu">
      <summary aria-label={copy.chooseLanguage}>{languageLabels[locale]}</summary>
      <div>
        {locales.map((next) => (
          <Link
            key={next}
            href={localizedPath(next)}
            hrefLang={next}
            aria-current={next === locale ? 'page' : undefined}
            onClick={() => remember(next)}
          >
            {languageLabels[next]}
          </Link>
        ))}
      </div>
    </details>
  );
}

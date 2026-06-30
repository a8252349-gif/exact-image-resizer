import Link from 'next/link';
import { t } from '@/lib/i18n';
import { localizedSite, type Locale } from '@/config/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { getUiCopy } from '@/lib/ui-copy';

export function Header({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const ui = getUiCopy(locale);
  const service = localizedSite[locale];
  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link className="logo" href={`/${locale}/`} aria-label={`${service.name} ${copy.common.home}`}>
          <span aria-hidden="true">↔</span>{service.shortName}
        </Link>
        <nav className="mainNav" aria-label={ui.primaryNav}>
          <Link href={`/${locale}/resizer/`}>{copy.nav.resizer}</Link>
          <Link href={`/${locale}/guides/`}>{copy.nav.guides}</Link>
          <Link href={`/${locale}/resources/`}>{copy.nav.resources}</Link>
          <Link href={`/${locale}/how-it-works/`}>{copy.nav.how}</Link>
          <Link href={`/${locale}/faq/`}>{copy.nav.faq}</Link>
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}

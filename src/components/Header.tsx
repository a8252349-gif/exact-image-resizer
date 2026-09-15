import Link from 'next/link';
import { t } from '@/lib/i18n';
import { localizedSite, type Locale } from '@/config/site';
import { LanguageSwitcher } from './LanguageSwitcher';
import { getUiCopy } from '@/lib/ui-copy';

type IconName = 'brand' | 'resize' | 'guides' | 'resources' | 'how' | 'faq';

function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, marginRight: 6, verticalAlign: '-3px', flex: '0 0 auto' } as const;
  if (name === 'brand') return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={common}><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 12h8M8 12l2.5-2.5M8 12l2.5 2.5M16 12l-2.5-2.5M16 12l-2.5 2.5"/></svg>;
  if (name === 'resize') return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={common}><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/><path d="M9 9h6v6H9z"/></svg>;
  if (name === 'guides') return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={common}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5zM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21.5z"/></svg>;
  if (name === 'resources') return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={common}><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M14 11h2M8 15h2M14 15h2"/></svg>;
  if (name === 'how') return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={common}><circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7h.01"/></svg>;
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={common}><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.8 1.95c-.95.7-1.6 1.15-1.6 2.55M12 17h.01"/></svg>;
}

export function Header({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const ui = getUiCopy(locale);
  const service = localizedSite[locale];
  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link className="logo" href={`/${locale}/`} aria-label={`${service.name} ${copy.common.home}`}>
          <Icon name="brand" size={20} />{service.shortName}
        </Link>
        <nav className="mainNav" aria-label={ui.primaryNav}>
          <Link href={`/${locale}/resizer/`}><Icon name="resize" />{copy.nav.resizer}</Link>
          <Link href={`/${locale}/guides/`}><Icon name="guides" />{copy.nav.guides}</Link>
          <Link href={`/${locale}/resources/`}><Icon name="resources" />{copy.nav.resources}</Link>
          <Link href={`/${locale}/how-it-works/`}><Icon name="how" />{copy.nav.how}</Link>
          <Link href={`/${locale}/faq/`}><Icon name="faq" />{copy.nav.faq}</Link>
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}

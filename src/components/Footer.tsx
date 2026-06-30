'use client';

import Link from 'next/link';
import { t } from '@/lib/i18n';
import { localizedSite, type Locale } from '@/config/site';
import { getUiCopy } from '@/lib/ui-copy';

export function Footer({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const ui = getUiCopy(locale);
  const service = localizedSite[locale];
  const links = [
    ['about', copy.footer.about], ['contact', copy.footer.contact], ['privacy', copy.footer.privacy],
    ['terms', copy.footer.terms], ['cookies', copy.footer.cookies], ['accessibility', copy.footer.accessibility],
    ['editorial-policy', copy.footer.editorial], ['compression-methodology', copy.footer.methodology],
    ['guides', copy.footer.guides], ['resources', copy.footer.resources]
  ];
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div><strong>{service.name}</strong><p>{ui.footerDescription}</p></div>
        <nav aria-label={ui.footerNav}>
          {links.map(([path, label]) => <Link key={path} href={`/${locale}/${path}/`}>{label}</Link>)}
        </nav>
        <button type="button" className="linkButton" onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-settings'))}>
          {copy.common.privacySettings}
        </button>
        <p className="copyright">© {new Date().getFullYear()} {service.name}. {ui.copyright}</p>
      </div>
    </footer>
  );
}

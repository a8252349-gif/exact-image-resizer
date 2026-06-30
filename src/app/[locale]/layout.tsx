import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '@/app/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieSettings } from '@/components/CookieSettings';
import { DocumentLanguage } from '@/components/DocumentLanguage';
import { AdSenseScript } from '@/components/AdSenseScript';
import { isLocale, locales } from '@/config/site';
import { baseMetadata } from '@/lib/base-metadata';
import { getUiCopy } from '@/lib/ui-copy';

export const metadata: Metadata = baseMetadata;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const ui = getUiCopy(locale);
  return (
    <html lang={locale}>
      <body>
        <DocumentLanguage locale={locale} />
        <a className="skipLink" href="#main-content">{ui.skip}</a>
        <Header locale={locale} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} />
        <CookieSettings locale={locale} />
        <AdSenseScript />
      </body>
    </html>
  );
}

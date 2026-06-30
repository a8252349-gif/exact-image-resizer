import type { Metadata } from 'next';
import { absoluteUrl, locales, localizedSite, siteConfig, type Locale } from '@/config/site';

export function localizedPath(locale: Locale, path = '') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `/${locale}/${clean ? `${clean}/` : ''}`;
}

export function pageMetadata(locale: Locale, path: string, title: string, description: string, options?: { noIndex?: boolean; image?: string; type?: 'website' | 'article' }): Metadata {
  const canonicalPath = localizedPath(locale, path);
  const alternates: Record<string, string> = {};
  for (const candidate of locales) alternates[candidate] = absoluteUrl(localizedPath(candidate, path));
  alternates['x-default'] = absoluteUrl(localizedPath('en', path));
  const image = absoluteUrl(options?.image || '/og-default.svg');
  return {
    title,
    description,
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: { canonical: absoluteUrl(canonicalPath), languages: alternates },
    robots: options?.noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: { title, description, url: absoluteUrl(canonicalPath), siteName: localizedSite[locale].name, locale, type: options?.type || 'website', images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
    other: { 'last-modified': siteConfig.lastUpdated }
  };
}

export function jsonLd(value: unknown) {
  return { __html: JSON.stringify(value).replace(/</g, '\\u003c') };
}

import type { Metadata } from 'next';
import { localizedSite, siteConfig } from '@/config/site';

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: localizedSite.en.name,
    template: `%s | ${localizedSite.en.name}`
  },
  description: localizedSite.en.description,
  manifest: '/site.webmanifest',
  icons: { icon: '/favicon.svg' },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: siteConfig.publisherId
    ? { 'google-adsense-account': siteConfig.publisherId }
    : undefined
};

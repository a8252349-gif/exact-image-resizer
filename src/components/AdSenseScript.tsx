'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { adsConfig, siteConfig } from '@/config/site';
import { consentChangeEvent, readConsent } from '@/lib/consent';

export function AdSenseScript() {
  const configured = adsConfig.scriptEnabled && Boolean(siteConfig.publisherId);
  const [allowed, setAllowed] = useState(adsConfig.googleCmpEnabled);

  useEffect(() => {
    if (!configured || adsConfig.googleCmpEnabled) return;
    const sync = () => setAllowed(readConsent()?.advertising === true);
    sync();
    window.addEventListener(consentChangeEvent, sync);
    return () => window.removeEventListener(consentChangeEvent, sync);
  }, [configured]);

  if (!configured || !allowed) return null;
  return (
    <Script
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.publisherId}`}
    />
  );
}

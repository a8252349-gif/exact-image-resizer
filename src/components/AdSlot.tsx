'use client';

import { useEffect, useState } from 'react';
import { adsConfig, siteConfig } from '@/config/site';
import { consentChangeEvent, readConsent } from '@/lib/consent';

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

export function AdSlot({ slot, label = 'Advertisement' }: { slot: string; label?: string }) {
  const configured = adsConfig.scriptEnabled && adsConfig.manualAdsEnabled && Boolean(slot);
  const [allowed, setAllowed] = useState(adsConfig.googleCmpEnabled);

  useEffect(() => {
    if (!configured || adsConfig.googleCmpEnabled) return;
    const sync = () => setAllowed(readConsent()?.advertising === true);
    sync();
    window.addEventListener(consentChangeEvent, sync);
    return () => window.removeEventListener(consentChangeEvent, sync);
  }, [configured]);

  const enabled = configured && allowed;
  useEffect(() => {
    if (!enabled) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers or a delayed script can reject the request without affecting the editor.
    }
  }, [enabled]);

  if (!enabled) return null;
  return (
    <aside className="adSlot" aria-label={label}>
      <span>{label}</span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={siteConfig.publisherId}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}

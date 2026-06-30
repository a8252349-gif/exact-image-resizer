export const consentStorageKey = 'exactresize-consent';
export const consentChangeEvent = 'exactresize-consent-change';

export type ConsentPreferences = {
  preferences: boolean;
  analytics: boolean;
  advertising: boolean;
};

export const defaultConsent: ConsentPreferences = {
  preferences: true,
  analytics: false,
  advertising: false
};

export function readConsent(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(consentStorageKey);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<ConsentPreferences>;
    return {
      preferences: parsed.preferences === true,
      analytics: parsed.analytics === true,
      advertising: parsed.advertising === true
    };
  } catch {
    return null;
  }
}

export function saveConsent(value: ConsentPreferences) {
  window.localStorage.setItem(consentStorageKey, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(consentChangeEvent, { detail: value }));
}

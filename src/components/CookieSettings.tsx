'use client';

import { useEffect, useRef, useState } from 'react';
import { adsConfig, type Locale } from '@/config/site';
import {
  defaultConsent,
  readConsent,
  saveConsent,
  type ConsentPreferences
} from '@/lib/consent';

const copy = {
  en: { title: 'Privacy preferences', body: 'Image Resizer stores only tool preferences on this device. Optional analytics and advertising are disabled until you choose them, unless a configured Google CMP manages consent.', save: 'Save preferences', necessary: 'Necessary', preferences: 'Preferences', analytics: 'Analytics', advertising: 'Advertising', close: 'Close privacy preferences' },
  ko: { title: '개인정보 설정', body: '이미지 크기 조절 도구는 최근 사용 설정만 이 기기에 저장합니다. Google CMP가 동의를 관리하도록 설정된 경우를 제외하면, 선택하기 전까지 분석과 광고 기능은 비활성화됩니다.', save: '설정 저장', necessary: '필수', preferences: '환경설정', analytics: '분석', advertising: '광고', close: '개인정보 설정 닫기' },
  ja: { title: 'プライバシー設定', body: '画像リサイズは最近使った設定だけを端末に保存します。Google CMPが同意を管理する設定を除き、選択するまで解析と広告は無効です。', save: '設定を保存', necessary: '必須', preferences: '設定', analytics: '解析', advertising: '広告', close: 'プライバシー設定を閉じる' },
  es: { title: 'Preferencias de privacidad', body: 'Redimensionar Imagen solo guarda en este dispositivo las preferencias recientes de la herramienta. La analítica y la publicidad permanecen desactivadas hasta que las elijas, salvo que un CMP de Google configurado gestione el consentimiento.', save: 'Guardar preferencias', necessary: 'Necesarias', preferences: 'Preferencias', analytics: 'Analítica', advertising: 'Publicidad', close: 'Cerrar preferencias de privacidad' }
};

const focusableSelector = 'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

export function CookieSettings({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPreferences>(defaultConsent);
  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (adsConfig.googleCmpEnabled) return;
    const saved = readConsent();
    queueMicrotask(() => {
      if (saved) setPrefs(saved);
      else setOpen(true);
    });
    const show = () => setOpen(true);
    window.addEventListener('open-cookie-settings', show);
    return () => window.removeEventListener('open-cookie-settings', show);
  }, []);

  useEffect(() => {
    if (!open || adsConfig.googleCmpEnabled) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previous = document.activeElement as HTMLElement | null;
    const focusables = () => Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector));
    focusables()[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previous?.focus();
    };
  }, [open]);

  if (adsConfig.googleCmpEnabled || !open) return null;
  const c = copy[locale];
  return (
    <div className="modalBackdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <section ref={dialogRef} className="modal" role="dialog" aria-modal="true" aria-labelledby="cookie-title" aria-describedby="cookie-description">
        <button className="iconButton modalClose" aria-label={c.close} onClick={() => setOpen(false)}>×</button>
        <h2 id="cookie-title">{c.title}</h2>
        <p id="cookie-description">{c.body}</p>
        <label className="toggleRow"><input type="checkbox" checked disabled />{c.necessary}</label>
        {(['preferences', 'analytics', 'advertising'] as const).map((key) => (
          <label className="toggleRow" key={key}>
            <input type="checkbox" checked={prefs[key]} onChange={(event) => setPrefs({ ...prefs, [key]: event.target.checked })} />
            {c[key]}
          </label>
        ))}
        <button onClick={() => { saveConsent(prefs); setOpen(false); }}>{c.save}</button>
      </section>
    </div>
  );
}

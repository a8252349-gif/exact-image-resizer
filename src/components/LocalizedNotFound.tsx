'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/config/site';

const copy = {
  en: { title: 'Page not found', body: 'The requested page does not exist or may have moved.', action: 'Go to Image Resizer' },
  ko: { title: '페이지를 찾을 수 없습니다', body: '요청한 페이지가 없거나 주소가 변경되었을 수 있습니다.', action: '이미지 크기 조절 홈으로 이동' },
  ja: { title: 'ページが見つかりません', body: '指定したページは存在しないか、移動した可能性があります。', action: '画像リサイズのホームへ' },
  es: { title: 'Página no encontrada', body: 'La página solicitada no existe o puede haberse movido.', action: 'Ir a Redimensionar Imagen' }
} as const;

export function LocalizedNotFound() {
  const [locale, setLocale] = useState<Locale>('en');
  useEffect(() => {
    const match = window.location.pathname.match(/^\/(en|ko|ja|es)(?:\/|$)/);
    const detected = (match?.[1] || 'en') as Locale;
    queueMicrotask(() => setLocale(detected));
    document.documentElement.lang = detected;
  }, []);
  const text = copy[locale];
  return (
    <main className="notFound">
      <div>
        <span className="eyebrow">404</span>
        <h1>{text.title}</h1>
        <p>{text.body}</p>
        <Link className="button" href={`/${locale}/`}>{text.action}</Link>
      </div>
    </main>
  );
}

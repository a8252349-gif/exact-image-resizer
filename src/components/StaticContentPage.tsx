import Link from 'next/link';
import { SectionRenderer } from './SectionRenderer';
import { JsonLd } from './JsonLd';
import { staticPageContent } from '@/lib/page-content';
import { siteConfig, type Locale } from '@/config/site';

const faqItems = {
  en: [
    ['Does the image resizer upload images?', 'No. The editing workflow uses browser APIs and does not send selected image bytes or filenames to an image-processing server.'],
    ['Can it guarantee an exact byte size?', 'No. JPEG and WebP are searched toward the target, but encoder output is discrete and PNG behaves differently.'],
    ['Are original files changed?', 'No. New output files are created. Keep the originals because metadata and some profile information may not be copied.'],
    ['Why can HEIC fail?', 'HEIC and HEIF decoding differs across browsers and operating systems. Local conversion is attempted, but not every variant is supported.'],
    ['What is stored on my device?', 'Tool preferences such as dimensions, format, quality, target value, suffix, language, and consent choices may be stored. Actual image data is not stored.']
  ],
  ko: [
    ['이미지가 서버로 업로드되나요?', '아니요. 편집 과정은 브라우저 API를 사용하며 선택한 이미지 바이트나 파일명을 이미지 처리 서버로 보내지 않습니다.'],
    ['정확히 같은 바이트를 보장하나요?', '아니요. JPEG와 WebP는 목표에 가깝게 탐색하지만 인코더 결과는 불연속적이며 PNG는 압축 방식이 다릅니다.'],
    ['원본 파일이 변경되나요?', '아니요. 새로운 결과 파일을 만듭니다. 메타데이터와 일부 프로필 정보가 복사되지 않을 수 있으므로 원본을 보관하세요.'],
    ['HEIC가 실패할 수 있는 이유는 무엇인가요?', '브라우저와 운영체제마다 HEIC·HEIF 지원 범위가 다릅니다. 로컬 변환을 시도하지만 모든 변형을 지원하지는 않습니다.'],
    ['기기에 무엇이 저장되나요?', '최근 크기, 형식, 품질, 목표 용량, 접미사, 언어와 동의 설정이 저장될 수 있습니다. 실제 이미지는 저장하지 않습니다.']
  ],
  ja: [
    ['画像はサーバーへ送られますか？', 'いいえ。編集処理はブラウザAPIを使い、画像バイトやファイル名を画像処理サーバーへ送りません。'],
    ['完全に同じバイト数を保証しますか？', 'いいえ。JPEGとWebPは目標へ近づけますが、エンコーダー出力は離散的でPNGは方式が異なります。'],
    ['原本は変更されますか？', 'いいえ。新しい出力ファイルを作成します。メタデータや一部のプロファイルが移らない場合があるため原本を保存してください。'],
    ['HEICが失敗する理由は？', 'ブラウザとOSでHEIC・HEIF対応が異なります。ローカル変換を試しますが、すべての形式には対応しません。'],
    ['端末には何が保存されますか？', '寸法、形式、品質、目標、接尾辞、言語、同意設定が保存される場合があります。画像データは保存しません。']
  ],
  es: [
    ['¿Se suben las imágenes?', 'No. La edición usa APIs del navegador y no envía los bytes ni los nombres a un servidor de procesamiento.'],
    ['¿Garantiza un número exacto de bytes?', 'No. JPEG y WebP se buscan hacia el objetivo, pero el codificador produce valores discretos y PNG funciona de otra forma.'],
    ['¿Se modifica el original?', 'No. Se crea un archivo nuevo. Conserva el original porque los metadatos y ciertos perfiles pueden no copiarse.'],
    ['¿Por qué puede fallar HEIC?', 'La compatibilidad HEIC y HEIF cambia entre navegador y sistema. Se intenta una conversión local, pero no se admiten todas las variantes.'],
    ['¿Qué se guarda en el dispositivo?', 'Pueden guardarse dimensiones, formato, calidad, objetivo, sufijo, idioma y consentimiento. No se guarda la imagen real.']
  ]
} as const;

const wrapperCopy = {
  en: { reviewed: 'Last reviewed', contact: 'Contact method', unavailable: 'No public contact email is currently available.', privacy: 'Do not attach sensitive original images. Describe the browser, operating system, input format, dimensions, settings, and visible error instead.', ctaTitle: 'Use the browser-based editor', ctaBody: 'Apply exact dimensions, target-size compression, and batch settings to your own files.', cta: 'Open Image Resizer' },
  ko: { reviewed: '마지막 검토일', contact: '문의 방법', unavailable: '현재 공개된 이메일 문의 채널이 없습니다.', privacy: '문의할 때 개인정보가 포함된 원본 이미지는 첨부하지 마세요. 브라우저, 운영체제, 파일 형식, 크기, 사용한 설정과 화면에 표시된 오류를 글로 설명해 주세요.', ctaTitle: '브라우저 이미지 편집기 사용하기', ctaBody: '내 이미지에 정확한 크기, 목표 용량 압축과 일괄 설정을 적용할 수 있습니다.', cta: '이미지 크기 조절 열기' },
  ja: { reviewed: '最終確認日', contact: '問い合わせ方法', unavailable: '現在公開されている問い合わせメールはありません。', privacy: '個人情報を含む原本画像を添付しないでください。ブラウザ、OS、形式、寸法、設定、表示されたエラーを文章で説明してください。', ctaTitle: 'ブラウザ画像編集ツールを使う', ctaBody: '正確な寸法、目標容量、一括設定を自分の画像へ適用できます。', cta: '画像リサイズを開く' },
  es: { reviewed: 'Última revisión', contact: 'Método de contacto', unavailable: 'Actualmente no hay un correo de contacto público.', privacy: 'No adjuntes imágenes originales sensibles. Describe el navegador, sistema, formato, dimensiones, ajustes y el error visible.', ctaTitle: 'Usa el editor del navegador', ctaBody: 'Aplica dimensiones exactas, compresión por objetivo y ajustes por lotes a tus archivos.', cta: 'Abrir Redimensionar Imagen' }
} as const;

export function StaticContentPage({ slug, locale }: { slug: Parameters<typeof staticPageContent>[0]; locale: Locale }) {
  const content = staticPageContent(slug, locale);
  const copy = wrapperCopy[locale];
  return (
    <div className="pageShell narrow">
      <JsonLd data={{ '@context':'https://schema.org', '@type':'WebPage', name:content.title, description:content.description, url:`${siteConfig.siteUrl}/${locale}/${slug}/`, dateModified:siteConfig.lastUpdated, inLanguage:locale }} />
      <header className="pageHero"><span className="eyebrow">{copy.reviewed} {siteConfig.lastUpdated}</span><h1>{content.title}</h1><p>{content.description}</p></header>
      {slug === 'faq'
        ? <section className="faqList">{faqItems[locale].map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
        : <SectionRenderer sections={content.sections} />}
      {slug === 'contact' && <section className="contactPanel">
        <h2>{copy.contact}</h2>
        {siteConfig.contactEmail ? <p><a className="button" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></p> : <p>{copy.unavailable}</p>}
        <p>{copy.privacy}</p>
      </section>}
      <div className="endCta"><h2>{copy.ctaTitle}</h2><p>{copy.ctaBody}</p><Link className="button" href={`/${locale}/resizer/`}>{copy.cta}</Link></div>
    </div>
  );
}

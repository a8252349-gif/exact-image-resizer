import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isLocale, localizedSite, type Locale, siteConfig, adsConfig } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { ImageEditor } from '@/components/ImageEditor';
import { JsonLd } from '@/components/JsonLd';
import { AdSlot } from '@/components/AdSlot';
import { getUiCopy } from '@/lib/ui-copy';

const localized = {
  en: { title:'Resize Images to Exact Pixels or File Size', desc:'Resize and compress up to 20 images locally. Set exact dimensions, contain or cover, JPEG PNG or WebP, quality, and a target size in KB.', h1:'Resize images to exact pixels or a target file size', intro:'Process up to 20 photos directly in your browser. Choose exact width and height, preserve a ratio, fit with padding or crop, convert formats, and aim for a maximum KB or MB value.', steps:['Choose images','Set output options','Process in the browser','Download the results'] },
  ko: { title:'이미지 크기 조절과 사진 용량 줄이기' , desc:'최대 20장의 이미지 크기를 브라우저에서 조절하고 용량을 줄입니다. 정확한 크기, 맞춤 방식, 형식, 품질, 목표 KB를 설정할 수 있습니다.', h1:'이미지 크기 조절과 사진 용량 줄이기를 한 번에', intro:'최대 20장의 사진을 브라우저에서 직접 처리합니다. 정확한 가로·세로, 비율 유지, 여백 또는 크롭, 형식 변환, 최대 KB·MB를 설정할 수 있습니다.', steps:['이미지 선택','출력 설정','브라우저에서 처리','결과 다운로드'] },
  ja: { title:'画像リサイズ・画像サイズ変更・圧縮' , desc:'最大20枚をブラウザ内でサイズ変更・圧縮。正確な寸法、フィット、JPEG PNG WebP、品質、目標KBを設定できます。', h1:'画像リサイズで正確な寸法と目標容量に調整', intro:'最大20枚をブラウザで直接処理します。幅と高さ、比率、余白や切り抜き、形式変換、最大KB・MBを設定できます。', steps:['画像を選択','出力を設定','ブラウザで処理','結果を保存'] },
  es: { title:'Redimensionar Imagen y Comprimir Online' , desc:'Redimensiona y comprime hasta 20 imágenes localmente. Define medidas, encaje, JPEG PNG WebP, calidad y un objetivo en KB.', h1:'Redimensionar imagen a píxeles exactos o un peso objetivo', intro:'Procesa hasta 20 fotos en el navegador. Define ancho y alto, conserva proporción, añade margen o recorta, convierte formatos y fija un máximo en KB o MB.', steps:['Elegir imágenes','Configurar la salida','Procesar en el navegador','Descargar resultados'] }
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = localized[locale];
  return pageMetadata(locale, 'resizer', content.title, content.desc);
}

export default async function Resizer({ params }: { params: Promise<{ locale:string }> }) {
  const { locale:raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const content = localized[locale];
  const ui = getUiCopy(locale);
  const sections = ui.resizer.sections;
  const faq = sections[6][1];

  return <>
    <JsonLd data={[
      { '@context':'https://schema.org', '@type':['SoftwareApplication','WebApplication'], name:localizedSite[locale].name, applicationCategory:'MultimediaApplication', operatingSystem:'Web browser', url:`${siteConfig.siteUrl}/${locale}/resizer/`, description:content.desc, offers:{ '@type':'Offer', price:'0', priceCurrency:'USD' } },
      { '@context':'https://schema.org', '@type':'HowTo', name:content.h1, step:content.steps.map((name) => ({ '@type':'HowToStep', name })) }
    ]} />
    <header className="toolHero"><span className="eyebrow">{ui.resizer.eyebrow}</span><h1>{content.h1}</h1><p>{content.intro}</p></header>
    <div className="toolWrap"><ImageEditor locale={locale} /></div>
    <div className="contentWrap toolContent">
      {sections.slice(0, 2).map(([heading, paragraphs]) => <section key={heading}><h2>{heading}</h2>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
      <section>
        <h2>{sections[2][0]}</h2>
        {sections[2][1].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="tableWrap"><table><thead><tr>{ui.resizer.tableHeaders.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{ui.resizer.tableRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>
      </section>
      {sections.slice(3, 4).map(([heading, paragraphs]) => <section key={heading}><h2>{heading}</h2>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
      <section><h2>{sections[4][0]}</h2><ul className="checklist">{sections[4][1].map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>{sections[5][0]}</h2>{sections[5][1].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
      <section><h2>{sections[6][0]}</h2>
        {[0, 2, 4].map((index) => <details key={faq[index]}><summary>{faq[index]}</summary><p>{faq[index + 1]}</p></details>)}
      </section>
      <AdSlot slot={adsConfig.slots.toolBottom} label={ui.ad} />
    </div>
  </>;
}

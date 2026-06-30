import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isLocale, locales, siteConfig, type Locale } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { resourceTools } from '@/lib/page-content';
import { ResourceTool } from '@/components/ResourceTool';
import { JsonLd } from '@/components/JsonLd';
import { getUiCopy } from '@/lib/ui-copy';

const copy = {
  en: { home:'Home', resources:'Resources', intro:'Enter the known values below. Calculations update immediately in the browser and no image is required.', use:'How to use the result', useBody:'Start with the destination requirement and treat the output as a planning aid. Dimension and ratio calculations are exact for the entered numbers, while file-size estimates remain a range because image complexity and browser encoders vary.', next:'Apply the calculated dimensions in the full image editor, choose contain or cover, select a format, and inspect the downloaded file.', limits:'Important limitations', limitBody:'A calculator cannot add detail to a small original, predict every platform’s later compression, or guarantee visual quality. Keep the source, confirm current platform requirements, and make a test upload or print when the result matters.' },
  ko: { home:'홈', resources:'계산 도구', intro:'알고 있는 값을 입력하면 브라우저에서 즉시 계산됩니다. 이미지를 업로드하거나 선택할 필요가 없습니다.', use:'계산 결과 활용 방법', useBody:'먼저 최종 사용처의 조건을 확인하고 계산값은 작업 계획에 활용하세요. 크기와 비율 계산은 입력한 숫자를 기준으로 정확하지만 파일 용량은 이미지 복잡도와 브라우저 인코더에 따라 달라져 범위로 표시합니다.', next:'계산한 크기를 전체 이미지 편집기에 입력한 뒤 전체 표시 또는 영역 채우기, 출력 형식을 선택하고 다운로드 결과를 확인하세요.', limits:'계산 도구의 한계', limitBody:'계산기는 작은 원본에 새로운 디테일을 만들거나 플랫폼의 추가 압축을 정확히 예측할 수 없습니다. 원본을 보관하고 최신 규격을 확인하며 중요한 작업은 시험 업로드나 시험 인쇄를 해보세요.' },
  ja: { home:'ホーム', resources:'計算ツール', intro:'分かっている数値を入力すると、ブラウザ内ですぐに計算されます。画像を選択する必要はありません。', use:'計算結果の使い方', useBody:'最終利用先の条件から考え、結果を作業計画に使ってください。寸法と比率は入力値に対して正確ですが、容量推定は画像の複雑さとブラウザのエンコーダーで変わるため範囲表示です。', next:'計算した寸法を完全版の編集ツールへ入力し、全体表示または枠を埋める方法、出力形式を選び、保存後のファイルを確認してください。', limits:'計算ツールの制限', limitBody:'計算機は小さな原本に新しい細部を加えたり、各プラットフォームの追加圧縮を完全に予測したりできません。原本を保存し、最新仕様を確認し、重要な場合は試験アップロードや印刷を行ってください。' },
  es: { home:'Inicio', resources:'Herramientas', intro:'Introduce los valores conocidos. El cálculo se actualiza en el navegador y no necesitas seleccionar una imagen.', use:'Cómo utilizar el resultado', useBody:'Empieza por los requisitos del destino y usa el resultado para planificar. Las dimensiones y proporciones son exactas para los valores introducidos, mientras que el peso estimado se muestra como intervalo porque depende de la complejidad y del codificador.', next:'Aplica las dimensiones en el editor completo, elige contain o cover, selecciona el formato y revisa el archivo descargado.', limits:'Límites importantes', limitBody:'Una calculadora no puede añadir detalle a un original pequeño, predecir toda recompresión posterior ni garantizar la calidad visual. Conserva el original, confirma las especificaciones actuales y realiza una prueba cuando el resultado sea importante.' }
} as const;

export function generateStaticParams() { return locales.flatMap((locale) => resourceTools.map((tool) => ({ locale, tool:tool[0] }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale:string; tool:string }> }): Promise<Metadata> {
  const { locale, tool } = await params;
  if (!isLocale(locale)) return {};
  const item = resourceTools.find((entry) => entry[0] === tool);
  if (!item) return {};
  const title = item[{ en:1, ko:2, ja:3, es:4 }[locale]];
  const description = getUiCopy(locale).resources.metaDescription;
  return pageMetadata(locale, `resources/${tool}`, title, description);
}

export default async function Tool({ params }: { params: Promise<{ locale:string; tool:string }> }) {
  const { locale:raw, tool } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const item = resourceTools.find((entry) => entry[0] === tool);
  if (!item) notFound();
  const title = item[{ en:1, ko:2, ja:3, es:4 }[locale]];
  const c = copy[locale];
  const ui = getUiCopy(locale).resources;
  return <div className="pageShell narrow">
    <JsonLd data={[
      { '@context':'https://schema.org', '@type':'WebApplication', name:title, applicationCategory:'UtilitiesApplication', operatingSystem:'Web browser', url:`${siteConfig.siteUrl}/${locale}/resources/${tool}/` },
      { '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:[
        { '@type':'ListItem', position:1, name:c.home, item:`${siteConfig.siteUrl}/${locale}/` },
        { '@type':'ListItem', position:2, name:c.resources, item:`${siteConfig.siteUrl}/${locale}/resources/` },
        { '@type':'ListItem', position:3, name:title, item:`${siteConfig.siteUrl}/${locale}/resources/${tool}/` }
      ] }
    ]} />
    <nav className="breadcrumbs"><Link href={`/${locale}/`}>{c.home}</Link> / <Link href={`/${locale}/resources/`}>{c.resources}</Link> / <span>{title}</span></nav>
    <header className="pageHero"><h1>{title}</h1><p>{c.intro}</p></header>
    <ResourceTool tool={tool} locale={locale} />
    <div className="proseSections">
      <section><h2>{c.use}</h2><p>{c.useBody}</p><p>{c.next}</p><Link className="button" href={`/${locale}/resizer/`}>{ui.editorButton}</Link></section>
      <section><h2>{c.limits}</h2><p>{c.limitBody}</p></section>
    </div>
  </div>;
}

import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { homeContent, resourceTools } from '@/lib/page-content';
import { getGuides } from '@/lib/content';
import { isLocale, localizedSite, siteConfig, type Locale, adsConfig } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { SectionRenderer } from '@/components/SectionRenderer';
import { GuideCard } from '@/components/GuideCard';
import { AdSlot } from '@/components/AdSlot';
import { getUiCopy } from '@/lib/ui-copy';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = homeContent(locale);
  return pageMetadata(locale, '', content.title, content.description);
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const content = homeContent(locale);
  const copy = getUiCopy(locale).home;
  const guides = getGuides(locale).slice(0, 6);
  const toolIndex = { en: 1, ko: 2, ja: 3, es: 4 }[locale];

  return <>
    <JsonLd data={[
      { '@context': 'https://schema.org', '@type': 'WebSite', name: localizedSite[locale].name, url: siteConfig.siteUrl, inLanguage: locale },
      { '@context': 'https://schema.org', '@type': 'Organization', name: localizedSite[locale].name, url: siteConfig.siteUrl },
      { '@context': 'https://schema.org', '@type': 'WebApplication', name: localizedSite[locale].name, applicationCategory: 'MultimediaApplication', operatingSystem: 'Web browser', url: `${siteConfig.siteUrl}/${locale}/resizer/`, description: content.description }
    ]} />
    <section className="hero">
      <div className="heroCopy">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h1>{content.hero}</h1>
        <p>{content.sub}</p>
        <div className="heroActions">
          <Link className="button" href={`/${locale}/resizer/`}>{copy.primary}</Link>
          <Link className="button secondary" href={`/${locale}/how-it-works/`}>{copy.secondary}</Link>
        </div>
        <div className="trustRow">{copy.trust.map((item) => <span key={item}>✓ {item}</span>)}</div>
      </div>
      <div className="heroVisual" aria-hidden="true">
        <div className="visualFrame sourceFrame">4032 × 3024<br /><small>4.8 MB</small></div>
        <span>→</span>
        <div className="visualFrame outputFrame">1200 × 800<br /><small>98 KB</small></div>
      </div>
    </section>
    <section className="quickStart">
      <div><h2>{copy.quickTitle}</h2><p>{copy.quickBody}</p></div>
      <Link className="button" href={`/${locale}/resizer/`}>{copy.quickButton}</Link>
    </section>
    <AdSlot slot={adsConfig.slots.home} label={getUiCopy(locale).ad} />
    <div className="contentWrap">
      <SectionRenderer sections={content.sections} />
      <section>
        <div className="sectionHeading">
          <div><span className="eyebrow">{copy.resourcesEyebrow}</span><h2>{copy.resourcesTitle}</h2></div>
          <Link href={`/${locale}/resources/`}>{copy.resourcesAll} →</Link>
        </div>
        <div className="resourceGrid">
          {resourceTools.map((tool) => <Link className="resourceCard" key={tool[0]} href={`/${locale}/resources/${tool[0]}/`}><strong>{tool[toolIndex]}</strong><span>{copy.calculatorOpen} →</span></Link>)}
        </div>
      </section>
      <section>
        <div className="sectionHeading">
          <div><span className="eyebrow">{copy.guidesEyebrow}</span><h2>{copy.guidesTitle}</h2></div>
          <Link href={`/${locale}/guides/`}>{copy.guidesAll} →</Link>
        </div>
        <div className="guideGrid">{guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div>
      </section>
      <section className="faqPreview">
        <h2>{copy.faqTitle}</h2>
        {copy.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
      </section>
    </div>
  </>;
}

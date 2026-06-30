import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getGuide, getGuideSlugs } from '@/lib/content';
import { isLocale, locales, localizedSite, siteConfig, type Locale, adsConfig } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { AdSlot } from '@/components/AdSlot';
import { getUiCopy } from '@/lib/ui-copy';

export function generateStaticParams() { return locales.flatMap((locale) => getGuideSlugs().map((slug) => ({ locale, slug }))); }

export async function generateMetadata({ params }: { params: Promise<{ locale:string; slug:string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const guide = getGuide(locale, slug);
  if (!guide) return {};
  return pageMetadata(locale, `guides/${slug}`, guide.title, guide.description, { type:'article', image:guide.svg });
}

export default async function GuidePage({ params }: { params: Promise<{ locale:string; slug:string }> }) {
  const { locale:raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const guide = getGuide(locale, slug);
  if (!guide) notFound();
  const copy = getUiCopy(locale);
  const guideCopy = copy.guides;
  const faq = { '@context':'https://schema.org', '@type':'FAQPage', mainEntity:guide.faqs.map((item) => ({ '@type':'Question', name:item.question, acceptedAnswer:{ '@type':'Answer', text:item.answer } })) };
  const article = { '@context':'https://schema.org', '@type':'Article', headline:guide.title, description:guide.description, dateModified:guide.lastReviewed, inLanguage:locale, mainEntityOfPage:`${siteConfig.siteUrl}/${locale}/guides/${guide.slug}/`, image:`${siteConfig.siteUrl}${guide.svg}`, publisher:{ '@type':'Organization', name:localizedSite[locale].name } };
  const length = locale === 'ko' || locale === 'ja' ? guide.characterCountNoSpaces.toLocaleString() : guide.wordCount.toLocaleString();
  const unit = locale === 'ko' ? '자' : locale === 'ja' ? '文字' : guideCopy.wordUnit;

  return <article className="articleShell">
    <JsonLd data={[article, faq, { '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:[
      { '@type':'ListItem', position:1, name:guideCopy.home, item:`${siteConfig.siteUrl}/${locale}/` },
      { '@type':'ListItem', position:2, name:guideCopy.guides, item:`${siteConfig.siteUrl}/${locale}/guides/` },
      { '@type':'ListItem', position:3, name:guide.title, item:`${siteConfig.siteUrl}/${locale}/guides/${guide.slug}/` }
    ] }]} />
    <nav className="breadcrumbs"><Link href={`/${locale}/`}>{guideCopy.home}</Link> / <Link href={`/${locale}/guides/`}>{guideCopy.guides}</Link> / <span>{guide.title}</span></nav>
    <header className="articleHeader">
      <span className="eyebrow">{guide.keywords.join(' · ')}</span>
      <h1>{guide.title}</h1><p>{guide.description}</p>
      <div className="articleMeta"><span>{guideCopy.lastReviewed}: {guide.lastReviewed}</span><span>{length} {unit}</span></div>
      <img src={guide.svg} alt={`${guideCopy.diagramAlt} ${guide.title}`} />
    </header>
    <div className="articleLayout">
      <aside className="toc"><strong>{guideCopy.toc}</strong>{guide.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.heading}</a>)}</aside>
      <div className="articleBody">
        {guide.intro.map((paragraph, index) => <p className={index === 0 ? 'lead' : undefined} key={paragraph}>{paragraph}</p>)}
        <div className="articleCta"><div><strong>{guideCopy.ctaTitle}</strong><p>{guideCopy.ctaBody}</p></div><Link className="button" href={`/${locale}/resizer/`}>{guideCopy.ctaButton}</Link></div>
        {guide.sections.map((section, index) => <section id={section.id} key={section.id}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.table && <div className="tableWrap"><table><thead><tr>{section.table.headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>}
          {section.list && <ul className="checklist">{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
          {index === 4 && <AdSlot slot={adsConfig.slots.guide} label={copy.ad} />}
        </section>)}
        <section><h2>{guideCopy.checklist}</h2><ul className="checklist">{guide.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><h2>{guideCopy.faq}</h2>{guide.faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
        {guide.sources?.length ? <section><h2>{guideCopy.sources}</h2><ul>{guide.sources.map((source) => <li key={source.url}><a href={source.url} rel="noreferrer">{source.label}</a></li>)}</ul></section> : null}
        <p className="reviewStandard"><strong>{guideCopy.review}:</strong> {guide.reviewStandard}</p>
        <AdSlot slot={adsConfig.slots.content} label={copy.ad} />
        <section><h2>{guideCopy.related}</h2><div className="relatedLinks">{guide.related.map((relatedSlug) => { const related = getGuide(locale, relatedSlug); return related ? <Link key={relatedSlug} href={`/${locale}/guides/${relatedSlug}/`}>{related.title}</Link> : null; })}</div></section>
      </div>
    </div>
  </article>;
}

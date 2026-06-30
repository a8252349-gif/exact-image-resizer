import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isLocale, type Locale } from '@/config/site';
import { getGuides } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';
import { GuideCard } from '@/components/GuideCard';
import { getUiCopy } from '@/lib/ui-copy';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getUiCopy(locale).guides;
  return pageMetadata(locale, 'guides', copy.indexMetaTitle, copy.indexDescription);
}

export default async function Guides({ params }: { params: Promise<{ locale:string }> }) {
  const { locale:raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const copy = getUiCopy(locale).guides;
  const guides = getGuides(locale);
  return <div className="pageShell">
    <header className="pageHero"><span className="eyebrow">{copy.indexEyebrow}</span><h1>{copy.indexTitle}</h1><p>{copy.indexIntro}</p></header>
    <div className="guideGrid">{guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div>
  </div>;
}

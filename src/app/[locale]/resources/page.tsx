import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isLocale, type Locale } from '@/config/site';
import { pageMetadata } from '@/lib/seo';
import { resourceTools } from '@/lib/page-content';
import { getUiCopy } from '@/lib/ui-copy';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const copy = getUiCopy(locale).resources;
  return pageMetadata(locale, 'resources', copy.metaTitle, copy.metaDescription);
}

export default async function Resources({ params }: { params: Promise<{ locale:string }> }) {
  const { locale:raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const copy = getUiCopy(locale).resources;
  const index = { en:1, ko:2, ja:3, es:4 }[locale];
  return <div className="pageShell">
    <header className="pageHero"><span className="eyebrow">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.intro}</p></header>
    <div className="resourceGrid large">{resourceTools.map((tool) => <Link className="resourceCard" href={`/${locale}/resources/${tool[0]}/`} key={tool[0]}><span className="resourceIcon">↔</span><strong>{tool[index]}</strong><p>{copy.cardBody}</p><span>{copy.open} →</span></Link>)}</div>
  </div>;
}

import{notFound}from'next/navigation';import type{Metadata}from'next';import{isLocale,type Locale}from'@/config/site';import{pageMetadata}from'@/lib/seo';import{staticPageContent}from'@/lib/page-content';import{StaticContentPage}from'@/components/StaticContentPage';
const slug='how-it-works' as const;
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const{locale}=await params;if(!isLocale(locale))return{};const c=staticPageContent(slug,locale);return pageMetadata(locale,slug,c.title,c.description)}
export default async function Page({params}:{params:Promise<{locale:string}>}){const{locale}=await params;if(!isLocale(locale))notFound();return <StaticContentPage slug={slug} locale={locale as Locale}/>}

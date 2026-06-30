import Link from 'next/link';
import type { Guide } from '@/types/content';
import { getUiCopy } from '@/lib/ui-copy';

export function GuideCard({ guide }: { guide: Guide }) {
  const copy = getUiCopy(guide.locale).guides;
  const length = guide.locale === 'ko' || guide.locale === 'ja'
    ? guide.characterCountNoSpaces.toLocaleString()
    : guide.wordCount.toLocaleString();
  const unit = guide.locale === 'ko' ? '자' : guide.locale === 'ja' ? '文字' : copy.wordUnit;
  return (
    <article className="guideCard">
      <img src={guide.svg} alt="" loading="lazy" />
      <div>
        <span className="eyebrow">{guide.keywords[0]}</span>
        <h3><Link href={`/${guide.locale}/guides/${guide.slug}/`}>{guide.title}</Link></h3>
        <p>{guide.description}</p>
        <span>{length} {unit} · {copy.lastReviewed} {guide.lastReviewed}</span>
      </div>
    </article>
  );
}

import type { ContentSection } from '@/lib/page-content';
export function SectionRenderer({sections}:{sections:ContentSection[]}){return <div className="proseSections">{sections.map((s,i)=><section key={`${s.heading}-${i}`} id={`section-${i+1}`}><h2>{s.heading}</h2>{s.paragraphs.map((p,j)=><p key={j}>{p}</p>)}{s.bullets&&<ul>{s.bullets.map(x=><li key={x}>{x}</li>)}</ul>}</section>)}</div>}

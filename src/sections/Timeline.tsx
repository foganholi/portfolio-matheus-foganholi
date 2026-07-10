import { SectionHeading } from '../components/SectionHeading';
import { timeline } from '../data/timeline';
import type { Locale } from '../types';

interface TimelineProps {
  locale: Locale;
  title: string;
}

export function Timeline({ locale, title }: TimelineProps) {
  return (
    <section id="timeline" className="content-section">
      <SectionHeading eyebrow="career.trace" title={title} />
      <ol className="timeline">
        {timeline.map((item, index) => (
          <li key={item.id}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{item.title[locale]}</h3>
              <p>{item.description[locale]}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

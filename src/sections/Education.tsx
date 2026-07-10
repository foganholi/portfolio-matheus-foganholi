import { GraduationCap } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { education } from '../data/education';
import type { Locale } from '../types';

interface EducationProps {
  locale: Locale;
  title: string;
}

export function Education({ locale, title }: EducationProps) {
  return (
    <section id="education" className="content-section">
      <SectionHeading eyebrow="education.record" title={title} />
      <div className="education-grid">
        <article className="education-main">
          <GraduationCap aria-hidden="true" />
          <span>{education.status[locale]}</span>
          <h3>{education.course[locale]}</h3>
          <p>{education.institution[locale]}</p>
        </article>
        {education.extras.map((item) => (
          <article className="glass-panel compact" key={item.title[locale]}>
            <h3>{item.title[locale]}</h3>
            <p>{item.description[locale]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

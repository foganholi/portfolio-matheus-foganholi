import { MapPin } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { profile } from '../data/profile';
import type { Locale } from '../types';

interface AboutProps {
  locale: Locale;
  title: string;
}

export function About({ locale, title }: AboutProps) {
  return (
    <section id="about" className="content-section">
      <SectionHeading eyebrow="profile.module" title={title} />
      <div className="about-layout">
        <article className="glass-panel">
          <p>{profile.summary[locale]}</p>
        </article>
        <div className="indicator-grid">
          {profile.highlights.map((item) => (
            <div className="indicator" key={item.label[locale]}>
              <span>{item.label[locale]}</span>
              <strong>{item.value[locale]}</strong>
            </div>
          ))}
          <div className="indicator">
            <span>Localização</span>
            <strong>
              <MapPin aria-hidden="true" />
              {profile.location[locale]}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}

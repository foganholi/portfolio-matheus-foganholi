import { Cpu } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { skills } from '../data/skills';
import type { Locale } from '../types';

interface SkillsProps {
  locale: Locale;
  title: string;
}

export function Skills({ locale, title }: SkillsProps) {
  return (
    <section id="skills" className="content-section">
      <SectionHeading eyebrow="skills.map" title={title} />
      <div className="skill-map">
        {skills.map((group) => (
          <article className="skill-node" key={group.group[locale]}>
            <div className="node-title">
              <Cpu aria-hidden="true" />
              <h3>{group.group[locale]}</h3>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <em>{item.level}</em>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

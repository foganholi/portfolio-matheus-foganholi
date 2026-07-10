import { Cpu } from 'lucide-react';
import type { CSSProperties } from 'react';
import { useMemo, useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import type { Locale } from '../types';

interface SkillsProps {
  locale: Locale;
  title: string;
}

export function Skills({ locale, title }: SkillsProps) {
  const skillItems = useMemo(
    () => skills.flatMap((group) => group.items.map((item) => ({ ...item, group: group.group[locale] }))).slice(0, 18),
    [locale],
  );
  const [selectedSkill, setSelectedSkill] = useState(skillItems[0]);
  const relatedProjects = projects.filter((project) =>
    project.technologies.some((tech) => tech.toLowerCase().includes(selectedSkill.name.toLowerCase())),
  );

  return (
    <section id="skills" className="content-section">
      <SectionHeading eyebrow="skills.map" title={title} />
      <div className="tech-core-layout">
        <div className="tech-core" aria-label={locale === 'pt' ? 'Tecnologias orbitando' : 'Orbiting technologies'}>
          <div className="tech-core-center">
            <Cpu aria-hidden="true" />
            <span>MF CORE</span>
          </div>
          {skillItems.map((item, index) => (
            <button
              key={`${item.group}-${item.name}`}
              type="button"
              className={`skill-orbit-item${selectedSkill.name === item.name ? ' is-selected' : ''}`}
              style={{ '--angle': `${(360 / skillItems.length) * index}deg` } as CSSProperties}
              onClick={() => setSelectedSkill(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <article className="skill-detail-panel">
          <span>{selectedSkill.group}</span>
          <h3>{selectedSkill.name}</h3>
          <p>{selectedSkill.level}</p>
          <div>
            <strong>{locale === 'pt' ? 'Projetos relacionados' : 'Related projects'}</strong>
            <ul>
              {(relatedProjects.length ? relatedProjects : projects.slice(0, 2)).map((project) => (
                <li key={project.id}>{project.name}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

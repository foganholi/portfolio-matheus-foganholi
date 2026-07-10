import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLinkIcon, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ExternalLink } from '../components/ExternalLink';
import { SectionHeading } from '../components/SectionHeading';
import { projectCategories, projects } from '../data/projects';
import type { Locale, Project, ProjectCategory } from '../types';

interface ProjectsProps {
  locale: Locale;
  title: string;
  t: {
    search: string;
    open: string;
    live: string;
    code: string;
    details: string;
    problem: string;
    solution: string;
    architecture: string;
    features: string;
    challenges: string;
    learnings: string;
    nextSteps: string;
    snippet: string;
    noResults: string;
  };
}

export function Projects({ locale, title, t }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');
  const [query, setQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'Todos' || project.category.includes(activeCategory);
      const searchable = [project.name, project.description[locale], ...project.technologies].join(' ').toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [activeCategory, locale, query]);

  return (
    <section id="projects" className="content-section">
      <SectionHeading eyebrow="project.loader" title={title} />
      <div className="project-toolbar">
        <label className="search-field">
          <Search aria-hidden="true" />
          <span className="sr-only">{t.search}</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.search} />
        </label>
        <div className="filter-row" aria-label="Filtros de projetos">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <motion.article className="project-module" key={project.id} layout>
            <img src={project.image} alt={`Demonstração visual do projeto ${project.name}`} loading="lazy" />
            <div className="project-body">
              <div>
                <span>{project.status[locale]}</span>
                <h3>{project.name}</h3>
                <p>{project.description[locale]}</p>
              </div>
              <ul>
                {project.technologies.slice(0, 5).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-actions">
                <button type="button" onClick={() => setSelectedProject(project)}>
                  {t.open}
                </button>
                <ExternalLink href={project.githubUrl}>
                  {t.code}
                  <ExternalLinkIcon aria-hidden="true" />
                </ExternalLink>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      {filteredProjects.length === 0 ? <p className="empty-state">{t.noResults}</p> : null}
      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal project={selectedProject} locale={locale} t={t} onClose={() => setSelectedProject(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

interface ProjectModalProps extends Pick<ProjectsProps, 'locale' | 't'> {
  project: Project;
  onClose: () => void;
}

function ProjectModal({ project, locale, t, onClose }: ProjectModalProps) {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="presentation"
      onMouseDown={onClose}
    >
      <motion.article
        className="project-modal"
        initial={{ scale: 0.96, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 16 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span>{t.details}</span>
            <h3 id="project-modal-title">{project.name}</h3>
          </div>
          <button type="button" aria-label="Fechar detalhes" onClick={onClose}>
            <X aria-hidden="true" />
          </button>
        </div>
        <img src={project.image} alt={`Prévia do projeto ${project.name}`} loading="lazy" />
        <div className="modal-grid">
          <Detail title="Visão geral" text={project.description[locale]} />
          <Detail title={t.problem} text={project.problem[locale]} />
          <Detail title={t.solution} text={project.solution[locale]} />
          <Detail title={t.architecture} text={project.architecture[locale]} />
          <Detail title={t.challenges} text={project.challenges[locale]} />
          <Detail title={t.learnings} text={project.learnings[locale]} />
        </div>
        <div className="modal-list">
          <h4>{t.features}</h4>
          <ul>
            {project.features.map((feature) => (
              <li key={feature[locale]}>{feature[locale]}</li>
            ))}
          </ul>
        </div>
        <div className="modal-list">
          <h4>{t.nextSteps}</h4>
          <ul>
            {project.nextSteps.map((step) => (
              <li key={step[locale]}>{step[locale]}</li>
            ))}
          </ul>
        </div>
        {project.codeSnippet ? (
          <div className="code-window">
            <span>{t.snippet}</span>
            <pre>
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        ) : null}
        <div className="project-actions">
          <ExternalLink href={project.githubUrl}>{t.code}</ExternalLink>
          <ExternalLink href={project.liveUrl ?? ''}>{t.live}</ExternalLink>
        </div>
      </motion.article>
    </motion.div>
  );
}

function Detail({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

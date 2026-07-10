import { motion } from 'framer-motion';
import { ArrowDown, Download, MessageSquare, Play, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { socialLinks } from '../data/socialLinks';
import type { Locale } from '../types';
import { ExternalLink } from '../components/ExternalLink';
import { useResumeStatus } from '../hooks/useResumeStatus';

interface HeroProps {
  locale: Locale;
  t: {
    eyebrow: string;
    greeting: string;
    phrases: string[];
    projects: string;
    journey: string;
    resume: string;
    contact: string;
    resumeMissing: string;
  };
}

export function Hero({ locale, t }: HeroProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const resumeExists = useResumeStatus(profile.resumePath);
  const shelves = [
    {
      href: '#projects',
      label: locale === 'pt' ? 'Projetos' : 'Projects',
      meta: locale === 'pt' ? '3 títulos' : '3 titles',
    },
    {
      href: '#skills',
      label: locale === 'pt' ? 'Tecnologias' : 'Technologies',
      meta: locale === 'pt' ? '5 coleções' : '5 collections',
    },
    {
      href: '#timeline',
      label: locale === 'pt' ? 'Trajetória' : 'Journey',
      meta: locale === 'pt' ? '7 episódios' : '7 episodes',
    },
    {
      href: '#education',
      label: locale === 'pt' ? 'Formação' : 'Education',
      meta: locale === 'pt' ? 'em andamento' : 'in progress',
    },
    {
      href: '#contact',
      label: locale === 'pt' ? 'Contato' : 'Contact',
      meta: locale === 'pt' ? 'canais abertos' : 'open channels',
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhraseIndex((index) => (index + 1) % t.phrases.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [t.phrases.length]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1>{t.greeting}</h1>
          <p>{profile.role[locale]}</p>
          <div className="hero-meta" aria-label="Resumo profissional">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>APIs REST</span>
            <span>SQL</span>
          </div>
          <motion.strong
            key={t.phrases[phraseIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="animated-role"
          >
            {t.phrases[phraseIndex]}
          </motion.strong>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              <Play aria-hidden="true" />
              {t.projects}
            </a>
            <a className="button" href="#timeline">
              <ArrowDown aria-hidden="true" />
              {t.journey}
            </a>
            {resumeExists ? (
              <a className="button" href={profile.resumePath} download>
                <Download aria-hidden="true" />
                {t.resume}
              </a>
            ) : (
              <button className="button" type="button" disabled title={t.resumeMissing}>
                <Download aria-hidden="true" />
                {t.resume}
              </button>
            )}
            <a className="button" href="#contact">
              <MessageSquare aria-hidden="true" />
              {t.contact}
            </a>
          </div>
          <div className="hero-socials" aria-label="Links profissionais">
            {socialLinks.map((link) => (
              <ExternalLink key={link.kind} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>
        <div
          className="catalog-spotlight"
          aria-label={locale === 'pt' ? 'Prévia do catálogo profissional' : 'Professional catalog preview'}
        >
          <div className="poster-card">
            <span className="poster-label">{locale === 'pt' ? 'Destaque' : 'Featured'}</span>
            <h2>Portfolio Collection</h2>
            <p>{profile.summary[locale].slice(0, 154)}...</p>
            <div className="rating-row">
              <Star aria-hidden="true" />
              <span>{locale === 'pt' ? 'Projetos reais' : 'Real projects'}</span>
              <span>{locale === 'pt' ? 'Dados editáveis' : 'Editable data'}</span>
            </div>
          </div>
          <div className="shelf-preview">
            {shelves.map((item, index) => (
              <a key={item.href} href={item.href}>
                <small>{String(index + 1).padStart(2, '0')}</small>
                <span>{item.label}</span>
                <em>{item.meta}</em>
              </a>
            ))}
          </div>
          <div className="now-playing-strip" aria-label={locale === 'pt' ? 'Projetos em cartaz' : 'Projects on display'}>
            {projects.map((project) => (
              <a key={project.id} href="#projects">
                <img src={project.image} alt="" loading="lazy" />
                <span>{project.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

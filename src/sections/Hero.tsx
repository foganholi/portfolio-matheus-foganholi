import { motion } from 'framer-motion';
import { ArrowDown, Download, MessageSquare, PanelsTopLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
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
              <PanelsTopLeft aria-hidden="true" />
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
        <div className="command-panel" aria-label="Painel de módulos">
          <div className="panel-header">
            <span />
            <span />
            <span />
            <strong>system.navigator</strong>
          </div>
          <div className="module-grid">
            {['Sobre mim', 'Projetos', 'Tecnologias', 'Experiência', 'Formação', 'Contato'].map((label, index) => (
              <a key={label} href={`#${['about', 'projects', 'skills', 'timeline', 'education', 'contact'][index]}`}>
                <small>0{index + 1}</small>
                <span>{label}</span>
              </a>
            ))}
          </div>
          <div className="system-readout">
            <span>status: online</span>
            <span>stack: java / spring / sql / web</span>
            <span>location: {profile.location[locale]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

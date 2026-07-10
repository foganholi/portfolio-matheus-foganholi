import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLinkIcon, MessageSquare } from 'lucide-react';
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
  const resumeExists = useResumeStatus(profile.resumePath);

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
          <strong className="animated-role">{t.phrases[0]}</strong>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
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
                <ExternalLinkIcon aria-hidden="true" />
              </ExternalLink>
            ))}
          </div>
        </div>
        <motion.aside
          className="hero-summary"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          aria-label={locale === 'pt' ? 'Resumo profissional' : 'Professional summary'}
        >
          <div className="summary-header">
            <span className="mf-mark large" aria-hidden="true">MF</span>
            <div>
              <strong>{profile.name}</strong>
              <span>{profile.location[locale]}</span>
            </div>
          </div>
          <dl>
            {profile.highlights.map((item) => (
              <div key={item.label[locale]}>
                <dt>{item.label[locale]}</dt>
                <dd>{item.value[locale]}</dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}

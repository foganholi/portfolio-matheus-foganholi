import { Github, Languages, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import type { Locale } from '../types';
import { socialLinks } from '../data/socialLinks';
import { ExternalLink } from './ExternalLink';

interface AppShellProps {
  children: React.ReactNode;
  locale: Locale;
  theme: 'light' | 'dark';
  t: {
    skip: string;
    nav: Record<string, string>;
    controls: Record<string, string>;
  };
  onThemeToggle: () => void;
  onLocaleToggle: () => void;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export function AppShell({ children, locale, theme, t, onThemeToggle, onLocaleToggle }: AppShellProps) {
  const navItems = [
    ['about', t.nav.about],
    ['projects', t.nav.projects],
    ['skills', t.nav.skills],
    ['timeline', t.nav.timeline],
    ['education', t.nav.education],
    ['contact', t.nav.contact],
  ];

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Matheus Foganholi">
          <span className="mf-mark" aria-hidden="true">
            <span>M</span>
            <span>F</span>
          </span>
          <span>Matheus Foganholi</span>
        </a>
        <nav aria-label="Navegação principal">
          {navItems.map(([href, label], index) => (
            <a key={href} href={`#${href}`}>
              <small>{String(index + 1).padStart(2, '0')}</small>
              {label}
            </a>
          ))}
        </nav>
        <div className="topbar-actions">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.kind];
            return (
              <ExternalLink key={link.kind} href={link.href} ariaLabel={link.label} className="icon-button">
                <Icon aria-hidden="true" />
              </ExternalLink>
            );
          })}
          <button type="button" className="icon-button" onClick={onLocaleToggle} aria-label={t.controls.language}>
            <Languages aria-hidden="true" />
            <span>{locale.toUpperCase()}</span>
          </button>
          <button type="button" className="icon-button" onClick={onThemeToggle} aria-label={t.controls.theme}>
            {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>
        </div>
      </header>
      {children}
    </>
  );
}

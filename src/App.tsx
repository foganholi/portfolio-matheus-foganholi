import { AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { AppShell } from './components/AppShell';
import { BootSequence } from './components/BootSequence';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Terminal } from './sections/Terminal';
import { Timeline } from './sections/Timeline';
import { translations } from './translations/ui';
import type { Locale } from './types';
import { usePersistentState } from './hooks/usePersistentState';

type Theme = 'light' | 'dark';

export function App() {
  const [theme, setTheme] = usePersistentState<Theme>('portfolio-theme', 'light');
  const [locale, setLocale] = usePersistentState<Locale>('portfolio-locale', 'pt');
  const [showBoot, setShowBoot] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.sessionStorage.getItem('portfolioBootSeen') !== 'true';
  });

  const t = useMemo(() => translations[locale], [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale, theme]);

  return (
    <AppShell
      locale={locale}
      theme={theme}
      t={t}
      onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      onLocaleToggle={() => setLocale(locale === 'pt' ? 'en' : 'pt')}
    >
      <AnimatePresence>{showBoot ? <BootSequence onDone={() => setShowBoot(false)} skipLabel={t.bootSkip} /> : null}</AnimatePresence>
      <main id="main">
        <Hero locale={locale} t={t.hero} />
        <About locale={locale} title={t.sections.about} />
        <Projects locale={locale} title={t.sections.projects} t={t.projects} />
        <Skills locale={locale} title={t.sections.skills} />
        <Timeline locale={locale} title={t.sections.timeline} />
        <Education locale={locale} title={t.sections.education} />
        <Terminal locale={locale} title={t.sections.terminal} placeholder={t.terminal.placeholder} help={t.terminal.help} />
        <Contact locale={locale} title={t.sections.contact} t={t.contact} />
      </main>
    </AppShell>
  );
}

import { TerminalSquare } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import type { Locale } from '../types';
import { runPortfolioCommand } from '../utils/terminal';

interface TerminalProps {
  locale: Locale;
  title: string;
  placeholder: string;
  help: string;
}

interface Line {
  type: 'input' | 'output';
  text: string;
}

export function Terminal({ locale, title, placeholder, help }: TerminalProps) {
  const [command, setCommand] = useState('');
  const [lines, setLines] = useState<Line[]>([{ type: 'output', text: help }]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = runPortfolioCommand(command, locale);
    if (result.clear) {
      setLines([]);
      setCommand('');
      return;
    }

    setLines((current) => [
      ...current,
      { type: 'input', text: command },
      ...result.output.map((text) => ({ type: 'output' as const, text })),
    ]);
    setCommand('');

    if (result.target) {
      document.getElementById(result.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="content-section" aria-label={title}>
      <SectionHeading eyebrow="terminal.session" title={title} />
      <div className="terminal-window">
        <div className="terminal-title">
          <TerminalSquare aria-hidden="true" />
          <span>portfolio@matheus:~</span>
        </div>
        <div className="terminal-output" aria-live="polite">
          {lines.map((line, index) => (
            <p key={`${line.text}-${index}`} className={line.type}>
              {line.type === 'input' ? '$ ' : '> '}
              {line.text}
            </p>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="terminal-command">
            {placeholder}
          </label>
          <span aria-hidden="true">$</span>
          <input
            id="terminal-command"
            value={command}
            onChange={(event) => setCommand(event.target.value)}
            placeholder={placeholder}
            autoComplete="off"
          />
        </form>
      </div>
    </section>
  );
}

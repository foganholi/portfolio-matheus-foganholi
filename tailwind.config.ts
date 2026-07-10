import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        brand: 'rgb(var(--color-brand) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        violet: 'rgb(var(--color-violet) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
      },
      boxShadow: {
        glow: '0 0 48px rgb(59 130 246 / 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;

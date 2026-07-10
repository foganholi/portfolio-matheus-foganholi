import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { App } from './App';

beforeEach(() => {
  window.localStorage.clear();
  window.sessionStorage.setItem('portfolioBootSeen', 'true');
  vi.stubGlobal(
    'fetch',
    vi.fn(() => Promise.resolve({ ok: false })) as unknown as typeof fetch,
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('App', () => {
  it('renders main portfolio sections', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /Olá, eu sou Matheus Foganholi/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Coleção de projetos/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Coleções de habilidades/i })).toBeInTheDocument();
  });

  it('filters projects by search input', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByPlaceholderText(/Buscar por nome ou tecnologia/i), 'Oficina');

    expect(screen.getAllByRole('heading', { name: /Projeto Oficina/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByRole('heading', { name: /Car Hunter Fast/i })).not.toBeInTheDocument();
  });

  it('toggles language and theme preferences', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Alternar idioma/i }));
    expect(screen.getByRole('heading', { name: /Hi, I am Matheus Foganholi/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Toggle theme/i }));
    await waitFor(() => expect(document.documentElement.dataset.theme).toBe('light'));
  });

  it('uses terminal commands to show portfolio data', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/Digite um comando/i), 'skills');
    await user.keyboard('{Enter}');

    expect(screen.getByText(/Back-end: Java/i)).toBeInTheDocument();
  });

  it('validates contact form fields', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Enviar mensagem/i }));

    expect(screen.getByText(/Preencha nome/i)).toBeInTheDocument();
  });
});

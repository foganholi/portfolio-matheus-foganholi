import { describe, expect, it } from 'vitest';
import { sanitizeInput, validateContactForm } from './contact';

describe('contact utils', () => {
  it('sanitizes angle brackets', () => {
    expect(sanitizeInput('<script>Matheus</script>')).toBe('scriptMatheus/script');
  });

  it('validates required contact fields', () => {
    expect(
      validateContactForm({
        name: 'Matheus',
        email: 'matheus@example.com',
        subject: 'Contato',
        message: 'Mensagem com tamanho válido',
      }),
    ).toBe(true);

    expect(
      validateContactForm({
        name: 'M',
        email: 'email-invalido',
        subject: '',
        message: 'curta',
      }),
    ).toBe(false);
  });
});

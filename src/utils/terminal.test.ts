import { describe, expect, it } from 'vitest';
import { runPortfolioCommand } from './terminal';

describe('runPortfolioCommand', () => {
  it('returns project information for projects command', () => {
    const result = runPortfolioCommand('projects', 'pt');

    expect(result.target).toBe('projects');
    expect(result.output.join(' ')).toContain('Car Hunter Fast');
  });

  it('handles invalid commands without executing system commands', () => {
    const result = runPortfolioCommand('rm -rf /', 'pt');

    expect(result.output[0]).toContain('Comando não reconhecido');
    expect(result.target).toBeUndefined();
  });
});

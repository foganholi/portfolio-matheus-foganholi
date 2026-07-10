import { education } from '../data/education';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { socialLinks } from '../data/socialLinks';
import type { Locale } from '../types';

export interface TerminalResult {
  output: string[];
  target?: string;
  clear?: boolean;
}

export function runPortfolioCommand(rawCommand: string, locale: Locale): TerminalResult {
  const command = rawCommand.trim().toLowerCase();

  if (!command) {
    return { output: [] };
  }

  if (command === 'clear') {
    return { output: [], clear: true };
  }

  if (command === 'help') {
    return {
      output: ['help, about, projects, skills, education, contact, github, linkedin, clear'],
    };
  }

  if (command === 'about') {
    return { output: [profile.summary[locale]], target: 'about' };
  }

  if (command === 'projects') {
    return {
      output: projects.map((project) => `${project.name} - ${project.status[locale]}`),
      target: 'projects',
    };
  }

  if (command === 'skills') {
    return {
      output: skills.map((group) => `${group.group[locale]}: ${group.items.map((item) => item.name).join(', ')}`),
      target: 'skills',
    };
  }

  if (command === 'education') {
    return {
      output: [`${education.course[locale]} - ${education.status[locale]}`],
      target: 'education',
    };
  }

  if (command === 'contact') {
    return { output: [`${profile.contactEmail}`], target: 'contact' };
  }

  if (command === 'github' || command === 'linkedin') {
    const social = socialLinks.find((link) => link.kind === command);
    if (social) {
      return { output: [`${social.label}: ${social.href}`] };
    }
  }

  return {
    output: [
      locale === 'pt'
        ? 'Comando não reconhecido. Digite help para ver as opções.'
        : 'Unknown command. Type help to see the options.',
    ],
  };
}

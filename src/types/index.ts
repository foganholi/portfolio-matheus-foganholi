export type Locale = 'pt' | 'en';

export type LocalizedText = Record<Locale, string>;

export type SkillLevel =
  | 'Em estudo'
  | 'Conhecimento básico'
  | 'Conhecimento intermediário'
  | 'Experiência prática';

export type ProjectCategory =
  | 'Todos'
  | 'Back-end'
  | 'Full Stack'
  | 'Java'
  | 'Banco de dados'
  | 'Desktop'
  | 'Estudos';

export interface SocialLink {
  label: string;
  href: string;
  kind: 'github' | 'linkedin' | 'email';
}

export interface Profile {
  name: string;
  role: LocalizedText;
  location: LocalizedText;
  summary: LocalizedText;
  highlights: Array<{ label: LocalizedText; value: LocalizedText }>;
  resumePath: string;
  contactEmail: string;
}

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory[];
  description: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  technologies: string[];
  features: LocalizedText[];
  status: LocalizedText;
  period: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  architecture: LocalizedText;
  challenges: LocalizedText;
  learnings: LocalizedText;
  nextSteps: LocalizedText[];
  codeSnippet?: string;
}

export interface SkillGroup {
  group: LocalizedText;
  items: Array<{
    name: string;
    level: SkillLevel;
  }>;
}

export interface TimelineItem {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface Education {
  course: LocalizedText;
  institution: LocalizedText;
  status: LocalizedText;
  extras: Array<{ title: LocalizedText; description: LocalizedText }>;
}

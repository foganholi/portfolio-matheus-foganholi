import type { SocialLink } from '../types';
import { profile } from './profile';

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/foganholi',
    kind: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matheus-foganholi',
    kind: 'linkedin',
  },
  {
    label: 'E-mail',
    href: `mailto:${profile.contactEmail}`,
    kind: 'email',
  },
];

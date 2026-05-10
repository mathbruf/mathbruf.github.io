import { Github, Linkedin, Mail } from 'lucide-react';
import type { Social } from '@/types';

export const EMAIL = 'mathbruf@hotmail.com';

export const socials: Social[] = [
  {
    label: { en: 'Email', no: 'E-post' },
    href: `mailto:${EMAIL}`,
    icon: Mail,
    secondary: EMAIL,
    copy: EMAIL,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mathbruf',
    icon: Github,
    secondary: '@mathbruf',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mathias-bruflot-84b639240/',
    icon: Linkedin,
    secondary: '/in/mathias-bruflot',
  },
];

import { Github, Linkedin, Mail } from 'lucide-react';
import type { Social } from '@/types';

export const EMAIL = 'mathbruf@hotmail.com';

export const socials: Social[] = [
  {
    label: 'Email',
    href: `mailto:${EMAIL}`,
    icon: Mail,
    copy: EMAIL,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mathbruf',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mathias-bruflot-84b639240/',
    icon: Linkedin,
  },
];

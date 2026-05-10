import type { LucideIcon } from 'lucide-react';
import type { Loc } from '@/lib/i18n';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  thumbnail?: string;
}

export interface ExperienceItem {
  period: Loc;
  title: Loc;
  company: Loc;
  location?: Loc;
  description: Loc;
  bullets?: Loc[];
  url?: string;
}

export interface EducationItem {
  period?: Loc;
  degree: Loc;
  school: Loc;
  description: Loc;
  details?: Loc;
}

export interface Social {
  label: Loc;
  href: string;
  icon: LucideIcon;
  secondary: string;
  copy?: string;
}

export type SectionId =
  | 'hero'
  | 'about'
  | 'experience'
  | 'education'
  | 'projects'
  | 'contact';

export interface Repo {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  topics: string[];
  pushedAt: string;
}

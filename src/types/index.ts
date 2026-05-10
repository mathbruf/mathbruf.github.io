import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  thumbnail?: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  url?: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  description: string;
  period?: string;
}

export interface Social {
  label: string;
  href: string;
  icon: LucideIcon;
  secondary: string;
  copy?: string;
}

export type SectionId = 'projects' | 'experience' | 'education' | 'contact';

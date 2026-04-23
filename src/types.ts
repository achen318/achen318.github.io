import type { IconType } from 'react-icons';

export interface CourseItem {
  code: string;
  name: string;
  url: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  startDate: string;
  endDate?: string;
  url: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  github: string;
}

export interface SocialItem {
  name: string;
  url: string;
  icon: IconType;
}

export interface SkillItem {
  name: string;
  icon: IconType;
  color: string;
  year: number;
}

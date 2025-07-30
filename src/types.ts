export interface CourseItem {
  code: string;
  name: string;
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
  icon: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  year: number;
}

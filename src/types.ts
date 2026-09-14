export interface Project {
  id: string;
  title: string;
  codename: string;
  period: string;
  role: string;
  github: string;
  demoUrl?: string;
  stack: string[];
  achievement: string;
  summary: string;
  bullets: string[];
  image: string;
  stats: { label: string; value: string }[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: 'Advanced' | 'Proficient' | 'Working'; highlight?: boolean }[];
}

export interface Achievement {
  id: string;
  title: string;
  rank: string;
  organization: string;
  date: string;
  description: string;
  projectLinked?: string;
  iconName: string;
  badge: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  coursework: string[];
}


export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  tech: string[];
  description: string[];
}

export interface Project {
  title: string;
  tech: string[];
  period: string;
  description: string[];
  github?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

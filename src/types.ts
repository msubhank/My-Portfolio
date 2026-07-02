export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  details: string[];
  technologies: string[];
  category: 'fullstack' | 'frontend' | 'all';
  liveUrl?: string;
  codeUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  details: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks & Libraries' | 'Databases' | 'Tools';
  level: number; // percentage
  iconName: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

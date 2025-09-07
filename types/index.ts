export interface Skill {
    name: string;
    level: number;
    category: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    features: string[];
    github: string;
    demo: string;
    image: string;
  }
  
  export interface Certificate {
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
    image: string;
  }
  
  export interface Activity {
    title: string;
    role: string;
    description: string;
    achievement: string;
    date: string;
    skills: string[];
  }
  
  export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }
  
  export interface NavItem {
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }
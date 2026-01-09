export interface PersonalInfo {
  name: string;
  role: string;
  summary: string;
  email: string;
  phone?: string;
  location: string;
  photo: string;
  resume?: string;
  social: SocialLinks;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  description?: string;
}

export interface Skills {
  languages: string[];
  backend: string[];
  frontend: string[];
  tools: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  type: 'Full-time' | 'Internship' | 'Contract' | 'Part-time';
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  github?: string;
  demo?: string;
  date: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  description: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  education: Education[];
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  certificates: Certificate[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  iconLists: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  year: number;
}

export interface ProjectCardProps {
  project: Project;
}

export interface WorkExperience {
  id: number;
  title: string;
  description: string;
  className: string;
  thumbnail: string;
}

export interface TechStack {
  id: number;
  name: string;
  logo: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
  yearsOfExperience?: number;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  username?: string;
  color?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  timezone?: string;
  availability: "available" | "busy" | "not-available";
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  twitterHandle?: string;
}

export interface DevelopmentPhase {
  id: number;
  phase: string;
  title: string;
  description: string;
  animationSpeed: number;
  containerClassName: string;
  colors?: number[][];
  dotSize?: number;
  hasMask?: boolean;
}

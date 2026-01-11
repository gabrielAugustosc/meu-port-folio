import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface AnimationConfig {
  initial: {
    opacity: number;
    y?: number;
    scale?: number;
  };
  animate?: {
    opacity: number;
    y?: number;
    scale?: number;
  };
  whileInView?: {
    opacity: number;
    y?: number;
  };
  transition: {
    duration: number;
    delay?: number;
  };
  viewport?: {
    once: boolean;
  };
}

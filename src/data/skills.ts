import { SkillCategory } from '../types';
import { 
  Code2, 
  Database, 
  Palette, 
  Workflow, 
  Box, 
  Server, 
  FileCode, 
  GitBranch, 
  Zap, 
  Figma as FigmaIcon, 
  Globe 
} from 'lucide-react';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'TypeScript', icon: FileCode },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'Framer Motion', icon: Workflow },
      { name: 'Radix UI', icon: Box },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'API REST', icon: Globe },
      { name: 'SQL', icon: Database },
      { name: 'JAVA', icon: Code2 },
      { name: 'Spring Boot', icon: Code2 },
    ],
  },
  {
    category: 'Ferramentas',
    skills: [
      { name: 'Git/GitHub', icon: GitBranch },
      { name: 'Vite', icon: Zap },
      { name: 'Figma', icon: FigmaIcon },
      { name: 'Postman', icon: Globe },
    ],
  },
];

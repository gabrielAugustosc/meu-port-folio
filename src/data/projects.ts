import { Project } from '../types';
import figmaV from '../../public/image/figmaVivo.png';  
import vivaOn from '../../public/image/site.png';
import advocacia from '../../public/image/advocacia.png';


export const projects: Project[] = [
  {
    title: 'Projeto Vivo Figma',
    description: 'Protótipo da plataforma Vivo',
    image: figmaV,
    tags: ['Figma'],
    githubUrl: 'https://www.figma.com/design/5lyoipb1rysAkAcpkBjn1A/SITE-vivo?node-id=0-1&t=t6PDZ4nVpAOrDs7g-1',
    demoUrl: 'https://www.figma.com/design/5lyoipb1rysAkAcpkBjn1A/SITE-vivo?node-id=0-1&t=t6PDZ4nVpAOrDs7g-1',
  },
  {
    title: 'Site Vivo',
    description: 'Site da Vivo ja finalizado com todas funcionalidades',
    image: vivaOn,
    tags: ['React', 'Tailwind', 'SQL', 'JAVA'],
    githubUrl: 'https://github.com/gabrielAugustosc/VivaOn-main',
    demoUrl: 'https://sitevivo.vercel.app/',
  },
  {
    title: 'Site Pereira & Silva Advocacia',
    description: 'Site para escritório de advocacia, com design moderno e responsivo.',
    image: advocacia,
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Radix UI', 'Lucide React', 'Motion'],
    githubUrl: 'https://github.com/gabrielAugustosc/SITE-PEREIRA-SILVA',
    demoUrl: 'https://pereira-silva.vercel.app',
  },
];

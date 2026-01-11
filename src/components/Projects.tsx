import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './common/ImageWithFallback';
import { projects } from '../data/projects';
import { Project } from '../types';
import { SECTION_IDS, ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants';

/**
 * Componente Projects - Seção de projetos do portfólio
 * Exibe os projetos em um grid responsivo com animações
 */
export function Projects() {

    return (
        <section id={SECTION_IDS.projects} className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: ANIMATION_DURATIONS.normal }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl mb-6 text-white">
                        Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projetos</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Alguns dos meus trabalhos recentes
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

/**
 * Card individual de projeto
 */
function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.normal, delay: index * ANIMATION_DELAYS.short }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/50 transition-all flex flex-col h-full"
        >
            <div className="relative h-48 overflow-hidden shrink-0">
                <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-sm rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <ProjectLinks githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
            </div>
        </motion.div>
    );
}

interface ProjectLinksProps {
    githubUrl: string;
    demoUrl: string;
}

/**
 * Links de ação do projeto (GitHub e Demo)
 */
function ProjectLinks({ githubUrl, demoUrl }: ProjectLinksProps) {
    return (
        <div className="flex gap-4 mt-auto">
            <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
            >
                <Github size={20} />
                <span>Code</span>
            </motion.a>
            <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
            >
                <ExternalLink size={20} />
                <span>Demo</span>
            </motion.a>
        </div>
    );
}

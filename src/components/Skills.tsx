import { motion } from 'motion/react';
import { skillCategories } from '../data/skills';
import { SkillCategory as SkillCategoryType } from '../types';
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants';

/**
 * Componente Skills - Seção de habilidades técnicas
 * Exibe as competências organizadas por categoria com barras de progresso
 */
export function Skills() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: ANIMATION_DURATIONS.normal }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl mb-6 text-white">
                        Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Habilidades</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Tecnologias e ferramentas que domino
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCategory key={category.category} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface SkillCategoryProps {
    category: SkillCategoryType;
    index: number;
}

/**
 * Card de categoria de habilidades
 */
function SkillCategory({ category, index }: SkillCategoryProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.normal, delay: index * ANIMATION_DELAYS.medium }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all"
        >
            <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {category.category}
            </h3>

            <div className="flex flex-wrap gap-4 justify-center items-center">
                {category.skills.map((skill, skillIndex) => (
                    <SkillBadge 
                        key={skill.name} 
                        name={skill.name} 
                        icon={skill.icon}
                        delay={index * ANIMATION_DELAYS.medium + skillIndex * 0.05}
                    />
                ))}
            </div>
        </motion.div>
    );
}

interface SkillBadgeProps {
    name: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    delay?: number;
}

/**
 * Badge de habilidade individual (formato chip)
 */
function SkillBadge({ name, icon: Icon, delay = 0 }: SkillBadgeProps) {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08, y: -2 }}
            transition={{ duration: 0.3, delay }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600/25 to-blue-600/25 border border-purple-500/40 text-purple-200 hover:border-purple-400/60 hover:bg-purple-600/35 hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-default text-sm font-medium"
        >
            <Icon size={18} className="text-purple-300 flex-shrink-0" />
            <span className="whitespace-nowrap">{name}</span>
        </motion.span>
    );
}

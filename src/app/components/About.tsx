import { motion } from 'motion/react';
import { features } from '../../data/features';
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../../constants';

/**
 * Componente About - Seção sobre o desenvolvedor
 * Apresenta as principais áreas de atuação e competências
 */
export function About() {
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
                        Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Mim</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Sou um estudante de Sistema de Informação da faculdade FIAP.
                        Sou apaixonado por tecnologia e negócios.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface FeatureCardProps {
    feature: typeof features[0];
    index: number;
}

/**
 * Card individual de feature/habilidade
 */
function FeatureCard({ feature, index }: FeatureCardProps) {
    const Icon = feature.icon;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.normal, delay: index * ANIMATION_DELAYS.medium }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/50 transition-all"
        >
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                <Icon className="text-white" size={28} />
            </div>
            <h3 className="text-xl mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
        </motion.div>
    );
}
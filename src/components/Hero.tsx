import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { SECTION_IDS, ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants';

/**
 * Componente Hero - Seção principal da página
 * Responsável por exibir a apresentação inicial do portfólio
 */
export function Hero() {
    /**
     * Realiza scroll suave para uma seção específica da página
     * @param sectionId - ID da seção de destino
     */
    const handleSmoothScroll = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950">
            <BackgroundEffects />

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: ANIMATION_DURATIONS.slow }}
                >
                    <DeveloperBadge />

                    <h1 className="text-5xl md:text-7xl mb-6 text-white">
                        Olá, eu sou{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
                            Gabriel Augusto
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                        Criando experiências digitais inovadoras com tecnologia de ponta
                    </p>

                    <ActionButtons onNavigate={handleSmoothScroll} />
                </motion.div>
            </div>

            <ScrollIndicator />
        </section>
    );
}

/**
 * Efeitos de fundo animados
 */
function BackgroundEffects() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}

/**
 * Badge de identificação profissional
 */
function DeveloperBadge() {
    return (
        <motion.div
            className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: ANIMATION_DELAYS.medium }}
        >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Desenvolvedor Full Stack
            </span>
        </motion.div>
    );
}

interface ActionButtonsProps {
    onNavigate: (sectionId: string) => void;
}

/**
 * Botões de ação principais
 */
function ActionButtons({ onNavigate }: ActionButtonsProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
                onClick={() => onNavigate(SECTION_IDS.projects)}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Ver Projetos
            </motion.button>
            <motion.button
                onClick={() => onNavigate(SECTION_IDS.contact)}
                className="px-8 py-4 rounded-lg border border-purple-500/50 text-white hover:bg-purple-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Entrar em Contato
            </motion.button>
        </div>
    );
}

/**
 * Indicador de scroll animado
 */
function ScrollIndicator() {
    return (
        <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <ChevronDown className="text-purple-400" size={32} />
        </motion.div>
    );
}

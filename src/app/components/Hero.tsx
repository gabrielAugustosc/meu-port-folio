import { motion } from 'motion/react'; // Importa a biblioteca de animações
import { ChevronDown } from 'lucide-react'; // Importa o ícone da setinha

export function Hero() {
    
    // --- FUNÇÃO DE ROLAGEM SUAVE (SCROLL) ---
    // Essa função é o "controle remoto". Ela recebe o ID de onde queremos ir (ex: 'projetos')
    // e manda o navegador deslizar até lá suavemente.
    const handleScroll = (id: string) => {
        const element = document.getElementById(id); // Procura o elemento no HTML
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // Faz a mágica da rolagem
        }
    };

    return (
        // min-h-screen: Garante que essa seção ocupe a altura total da tela do usuário
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950">
            
            {/* --- EFEITOS DE FUNDO (BACKGROUND) --- */}
            {/* Aqui criamos aquelas "bolhas" de luz que ficam se movendo atrás do texto */}
            <div className="absolute inset-0 overflow-hidden">
                
                {/* Bolha Roxa */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],       // Aumenta e diminui (pulsa)
                        opacity: [0.3, 0.5, 0.3], // Fica mais e menos transparente
                    }}
                    transition={{
                        duration: 8,              // Animação lenta de 8 segundos
                        repeat: Infinity,         // Repete para sempre
                        ease: "easeInOut",        // Movimento suave
                    }}
                />
                
                {/* Bolha Azul (mesma lógica, mas no canto oposto) */}
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* --- CONTEÚDO PRINCIPAL (TEXTOS) --- */}
            {/* z-10: Garante que o texto fique NA FRENTE das bolhas de fundo */}
            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }} // Começa invisível e mais pra baixo
                    animate={{ opacity: 1, y: 0 }}  // Sobe e aparece
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge (Etiqueta) "Desenvolvedor Full Stack" */}
                    <motion.div
                        className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }} // Aparece um pouquinho depois
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                            Desenvolvedor Full Stack
                        </span>
                    </motion.div>

                    {/* Título Principal */}
                    <h1 className="text-5xl md:text-7xl mb-6 text-white">
                        Olá, eu sou{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
                            Gabriel Augusto
                        </span>
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                        Criando experiências digitais inovadoras com tecnologia de ponta
                    </p>

                    {/* --- BOTÕES DE AÇÃO --- */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        
                        {/* Botão Ver Projetos */}
                        <motion.button
                            onClick={() => handleScroll('projetos')} // Chama a função para ir até id="projetos"
                            className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
                            whileHover={{ scale: 1.05 }} // Efeito de zoom ao passar o mouse
                            whileTap={{ scale: 0.95 }}   // Efeito de clique
                        >
                            Ver Projetos
                        </motion.button>
                        
                        {/* Botão Entrar em Contato */}
                        <motion.button
                            onClick={() => handleScroll('contato')} // Chama a função para ir até id="contato"
                            className="px-8 py-4 rounded-lg border border-purple-500/50 text-white hover:bg-purple-500/10 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Entrar em Contato
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* --- SETINHA INDICADORA (SCROLL DOWN) --- */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }} // Faz a seta subir e descer (quicar)
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown className="text-purple-400" size={32} />
            </motion.div>
        </section>
    );
}
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback'; // Componente que carrega a imagem (se falhar, mostra um fallback)

export function Projects() {
    
    // --- LISTA DE PROJETOS (BANCO DE DADOS) ---
    // Aqui é onde você adiciona ou remove projetos.
    // Não precisa mexer no HTML lá embaixo. Só adicione um novo bloco {} aqui com as informações.
    const projects = [
        {
            title: 'Projeto Vivo Figma',
            description: 'Protótipo da plataforma Vivo',
            image: '/image/image.png',
            tags: ['Figma'],
            githubUrl: 'https://www.figma.com/design/5lyoipb1rysAkAcpkBjn1A/SITE-vivo?node-id=0-1&t=t6PDZ4nVpAOrDs7g-1', 
            demoUrl: 'https://www.figma.com/design/5lyoipb1rysAkAcpkBjn1A/SITE-vivo?node-id=0-1&t=t6PDZ4nVpAOrDs7g-1',
        },
        {
            title: 'Site Vivo',
            description: 'Site da Vivo ja finalizado com todas funcionalidades',
            image: 'https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3MzY4NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
            tags: ['HTML', 'Tailwind', 'SQL', 'JAVA'],
            githubUrl: 'https://github.com/GustavoPMarques/VivaOn',
            demoUrl: 'https://site-vivo.com',
        },
        {
            title: 'EM BREVE',
            description: 'Futuro projeto',
            image: '/image/Gemini_Generated_Image_efb4dwefb4dwefb4.png',
            tags: ['EM BREVE'],
            githubUrl: '#', // Link vazio (placeholder)
            demoUrl: '#',
        },
    ];

    return (
        // --- ID DE NAVEGAÇÃO ---
        // O id='projetos' é o endereço que o botão "Ver Projetos" (na Hero) procura pra rolar até aqui.
        <section id='projetos' className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="max-w-6xl mx-auto">
                
                {/* Cabeçalho da Seção */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
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

                {/* --- GRID LAYOUT (O SEGREDO DO ALINHAMENTO) --- */}
                {/* Define quantas colunas aparecem: 1 no Celular, 2 no Tablet, 3 no PC. */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Percorremos a lista 'projects' e criamos um card pra cada um */}
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            
                            // Animação de entrada (Cascata)
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            
                            whileHover={{ y: -10 }} // Card sobe um pouco ao passar o mouse
                            
                            // 'h-full': Força o card a ocupar toda a altura disponível da linha.
                            // Isso impede que um card fique menor que o outro se tiver menos texto.
                            className="group rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/50 transition-all flex flex-col h-full"
                        >
                            {/* Área da Imagem */}
                            <div className="relative h-48 overflow-hidden shrink-0">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    // group-hover:scale-110 -> Dá zoom na imagem quando passa o mouse no card
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
                            </div>

                            {/* Conteúdo do Card */}
                            {/* flex-grow: Faz essa parte ocupar todo o espaço vazio, empurrando os botões pro final */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                {/* Lista de Tags (Figma, HTML, etc) */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-sm rounded-full bg-purple-600/20 text-purple-300 border border-purple-500/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Botões (Code e Demo) */}
                                {/* mt-auto: O "Pulo do Gato". Empurra esses botões pra colar no rodapé do card,
                                    garantindo que fiquem alinhados mesmo se o texto de cima for curto. */}
                                <div className="flex gap-4 mt-auto">
                                    
                                    {/* Botão GitHub */}
                                    <motion.a
                                        href={project.githubUrl} 
                                        target="_blank"           // Abre nova aba
                                        rel="noopener noreferrer" // Segurança
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                                    >
                                        <Github size={20} />
                                        <span>Code</span>
                                    </motion.a>
                                    
                                    {/* Botão Demo */}
                                    <motion.a
                                        href={project.demoUrl}
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
import { motion } from 'motion/react'; // Importa a biblioteca de animações

export function Skills() {
    
    // --- LISTA DE HABILIDADES (DATA) ---
    // Aqui usamos uma lista dentro de outra lista (Array aninhado).
    // O nível mais alto são as Categorias (Frontend, Backend...).
    // Dentro de cada categoria, temos a lista de 'skills' específicas com nome e nível (%).
    const skillCategories = [
        {
            category: 'Frontend',
            skills: [
                { name: 'React', level: 6 },
                { name: 'HTML', level: 100 },
                { name: 'Tailwind CSS', level: 20 },
            ],
        },
        {
            category: 'Backend',
            skills: [
                { name: 'Node.js', level: 20 },
                { name: 'SQL', level: 58 },
                { name: 'JAVA', level: 76 },
            ],
        },
        {
            category: 'Ferramentas',
            skills: [
                { name: 'Git', level: 93 },
                { name: 'Cisco', level: 64 },
                { name: 'Figma', level: 88 },
            ],
        },
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="max-w-6xl mx-auto">
                
                {/* --- TÍTULO DA SEÇÃO --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
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

                {/* --- GRID DE CATEGORIAS --- */}
                {/* Divide em 3 colunas no PC (md:grid-cols-3) e 1 no celular */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Loop 1: Percorre as Categorias (Frontend, Backend, Ferramentas) */}
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            
                            // Animação de entrada dos cards
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            // Delay baseado no índice cria o efeito cascata entre as colunas
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                            viewport={{ once: true }}
                            
                            className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
                        >
                            {/* Título da Categoria */}
                            <h3 className="text-2xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                {category.category}
                            </h3>

                            {/* Lista de Skills dentro da Categoria */}
                            <div className="space-y-4">
                                {/* Loop 2: Percorre as Skills individuais */}
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex}>
                                        
                                        {/* Nome e Porcentagem (Texto acima da barra) */}
                                        <div className="flex justify-between mb-2">
                                            <span className="text-white">{skill.name}</span>
                                            <span className="text-gray-400">{skill.level}%</span>
                                        </div>
                                        
                                        {/* Barra de Progresso (Fundo cinza escuro) */}
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            
                                            {/* Preenchimento Colorido Animado */}
                                            <motion.div
                                                initial={{ width: 0 }} // Começa com largura 0
                                                whileInView={{ width: `${skill.level}%` }} // Cresce até a porcentagem real
                                                // A animação dura 1 segundo e tem um delay calculado para ser sequencial
                                                transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
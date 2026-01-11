import { motion } from 'motion/react';
import { Code2, Palette, Rocket } from 'lucide-react';

export function About() {
    
    // Criei essa lista (array) aqui pra não precisar ficar copiando e colando HTML lá embaixo.
    // Assim, se eu quiser adicionar uma nova habilidade no futuro, é só incluir mais um objeto aqui.
    const features = [
        {
            icon: Code2, 
            title: 'Desenvolvimento',
            description: 'Experiência em Java, HTML, CSS, Tailwind, React e Node.js',
        },
        {
            icon: Palette,
            title: 'Design',
            description: 'Interfaces intuitivas e visualmente atraentes',
        },
        {
            icon: Rocket,
            title: 'Performance',
            description: 'Otimização e melhores práticas em cada projeto',
        },
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="max-w-6xl mx-auto">
                
                {/* Bloco do Título e Texto */}
                <motion.div
                    // Configuração da animação: começa invisível e um pouco pra baixo (y: 30)
                    initial={{ opacity: 0, y: 30 }}
                    // Quando a pessoa rola a tela e chega aqui, ele fica visível e sobe (y: 0)
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }} // Roda a animação só na primeira vez
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

                {/* Grid dos Cards */}
                {/* No mobile fica 1 coluna, no PC (md) viram 3 colunas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Aqui eu percorro minha lista 'features' e crio um card pra cada item automaticamente */}
                    {features.map((feature, index) => (
                        <motion.div
                            key={index} // O React pede essa chave única pra não se perder
                            
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            // Truque legal: uso o index pra dar um delay diferente em cada card.
                            // O primeiro aparece na hora, o segundo demora um pouquinho, criando um efeito cascata.
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            
                            // Quando passo o mouse, o card aumenta um pouquinho
                            whileHover={{ scale: 1.05 }}
                            
                            className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/50 transition-all"
                        >
                            {/* Ícone do card */}
                            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                                <feature.icon className="text-white" size={28} />
                            </div>
                            
                            {/* Título e descrição vindos da lista */}
                            <h3 className="text-xl mb-3 text-white">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

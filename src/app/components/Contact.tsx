import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

export function Contact() {
    
    // --- LISTA DE REDES SOCIAIS ---
    // Assim como fizemos no About, criei essa lista para facilitar.
    // Se você mudar o link do seu LinkedIn, é só alterar aqui e o ícone atualiza sozinho.
    const socialLinks = [
        { icon: Github, label: 'GitHub', href: 'https://github.com/gabrielAugustosc' }, 
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-augusto-fiap/' }, 
        { icon: Mail, label: 'Email', href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZZzpZRFBtgpqRCXbxXsjblgNFnWqmdNrrFBgdSCnGNWldzSMVvGZWcBTkkTWClVdlzklB' },
    ];

    // --- LÓGICA DO FORMULÁRIO (HOOKS) ---
    // useRef: Cria uma "conexão direta" com a tag <form> lá embaixo no HTML.
    const form = useRef<HTMLFormElement>(null);
    
    // useState: Serve para guardar o "estado" atual do envio.
    // Pode ser: '' (nada acontecendo), 'sending' (enviando), 'success' (foi!), 'error' (deu ruim).
    const [status, setStatus] = useState('');

    // --- FUNÇÃO DE ENVIAR EMAIL ---
    // Essa função é chamada automaticamente quando o usuário clica no botão "Enviar Mensagem".
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault(); // O Pulo do Gato: Impede que a página recarregue (comportamento padrão de formulários).
        setStatus('sending'); // Avisa o sistema: "Estou enviando, mostre o loading..."

        // Segurança: Se o formulário não existir por algum motivo, para tudo.
        if (!form.current) return;

        // Aqui a mágica acontece: Mandamos os dados pro EmailJS
        emailjs.sendForm(
            'service_0drhun8',  // Seu ID do Serviço
            'template_7m39ygc', // Seu ID do Modelo de Email
            form.current,       // Os dados que o usuário digitou
            'PwGe_ip1O50AKW7TY' // Sua Chave Pública (Senha de acesso)
        )
        .then(() => {
            // Se cair aqui, DEU CERTO!
            setStatus('success');        // Mostra mensagem verde
            form.current?.reset();       // Limpa os campos pra pessoa não enviar duplicado
            setTimeout(() => setStatus(''), 5000); // Espera 5 segundos e apaga a mensagem de sucesso
        }, (error) => {
            // Se cair aqui, DEU ERRO!
            console.error(error);        // Mostra o erro no console (F12) pra gente saber o que foi
            setStatus('error');          // Mostra mensagem vermelha
        });
    };

    return (
        // O id='contato' é OBRIGATÓRIO pro botão lá da tela inicial saber pra onde descer.
        <section id='contato' className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="max-w-4xl mx-auto">
                
                {/* --- TÍTULO DA SEÇÃO --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl mb-6 text-white">
                        Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Conversar</span>
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Interessado em trabalhar juntos? Entre em contato!
                    </p>
                </motion.div>

                {/* --- CARD DO FORMULÁRIO --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
                >
                    {/* Conectamos o <form> com a referência 'form' e a função 'sendEmail' */}
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        
                        {/* Linha com 2 colunas (Nome e Email) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-white mb-2">Nome</label>
                                {/* O atributo 'name="user_name"' é essencial pro EmailJS saber que campo é esse */}
                                <input
                                    type="text"
                                    name="user_name" 
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label className="block text-white mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email" 
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="seu@email.com"
                                />
                            </div>
                        </div>

                        {/* Campo Assunto */}
                        <div>
                            <label className="block text-white mb-2">Assunto</label>
                            <input
                                type="text"
                                name="subject" 
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                placeholder="Assunto da mensagem"
                            />
                        </div>

                        {/* Campo Mensagem */}
                        <div>
                            <label className="block text-white mb-2">Mensagem</label>
                            <textarea
                                name="message" 
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                placeholder="Sua mensagem..."
                            />
                        </div>

                        {/* --- BOTÃO DE ENVIAR --- */}
                        <motion.button
                            type="submit"
                            // Se estiver enviando (status === 'sending'), desativa o botão pra evitar cliques duplos
                            disabled={status === 'sending'}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-shadow disabled:opacity-50"
                        >
                            {/* Texto muda dinamicamente: "Enviar" ou "Enviando..." */}
                            {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                        </motion.button>

                        {/* --- MENSAGENS DE FEEDBACK (O que aparece depois de clicar) --- */}
                        {status === 'success' && (
                            <p className="text-green-400 text-center animate-pulse mt-4">
                                Mensagem enviada com sucesso!
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-center mt-4">
                                Erro ao enviar. Tente novamente.
                            </p>
                        )}
                    </form>
                </motion.div>

                {/* --- BOTÕES REDES SOCIAIS --- */}
                {/* Aqui uso o map para criar os 3 botões (Github, Linkedin, Email) automaticamente */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-6 mt-12"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank" // Abre em nova aba
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }} // Efeito legal ao passar o mouse
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:text-purple-300 hover:border-purple-500/50 transition-colors"
                            aria-label={social.label}
                        >
                            <social.icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { useState, useRef, FormEvent } from 'react';
import { socialLinks } from '../data/socialLinks';
import { SECTION_IDS, EMAILJS_CONFIG, SUCCESS_MESSAGE_DURATION, ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants';

type FormStatus = '' | 'sending' | 'success' | 'error';

/**
 * Componente Contact - Seção de contato
 * Formulário integrado com EmailJS para envio de mensagens
 */
export function Contact() {
    const form = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<FormStatus>('');

    /**
     * Envia o email através do EmailJS
     */
    const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setStatus('sending');

        if (!form.current) return;

        emailjs.sendForm(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            form.current,
            EMAILJS_CONFIG.publicKey
        )
        .then(() => {
            setStatus('success');
            form.current?.reset();
            setTimeout(() => setStatus(''), SUCCESS_MESSAGE_DURATION);
        })
        .catch((error) => {
            console.error('Erro ao enviar email:', error);
            setStatus('error');
        });
    };

    return (
        <section id={SECTION_IDS.contact} className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: ANIMATION_DURATIONS.normal }}
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

                <ContactForm form={form} status={status} onSubmit={sendEmail} />
                <SocialLinksBar />
            </div>
        </section>
    );
}

interface ContactFormProps {
    form: React.RefObject<HTMLFormElement | null>;
    status: FormStatus;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

/**
 * Formulário de contato
 */
function ContactForm({ form, status, onSubmit }: ContactFormProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.normal, delay: ANIMATION_DELAYS.medium }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20"
        >
            <form ref={form} onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput label="Nome" name="user_name" type="text" placeholder="Seu nome" />
                    <FormInput label="Email" name="user_email" type="email" placeholder="seu@email.com" />
                </div>

                <FormInput label="Assunto" name="subject" type="text" placeholder="Assunto da mensagem" />

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

                <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-shadow disabled:opacity-50"
                >
                    {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
                </motion.button>

                <FormStatusMessage status={status} />
            </form>
        </motion.div>
    );
}

interface FormInputProps {
    label: string;
    name: string;
    type: string;
    placeholder: string;
}

/**
 * Campo de input do formulário
 */
function FormInput({ label, name, type, placeholder }: FormInputProps) {
    return (
        <div>
            <label className="block text-white mb-2">{label}</label>
            <input
                type={type}
                name={name}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder={placeholder}
            />
        </div>
    );
}

interface FormStatusMessageProps {
    status: FormStatus;
}

/**
 * Mensagem de status do formulário
 */
function FormStatusMessage({ status }: FormStatusMessageProps) {
    if (status === 'success') {
        return (
            <p className="text-green-400 text-center animate-pulse mt-4">
                Mensagem enviada com sucesso!
            </p>
        );
    }
    
    if (status === 'error') {
        return (
            <p className="text-red-400 text-center mt-4">
                Erro ao enviar. Tente novamente.
            </p>
        );
    }
    
    return null;
}

/**
 * Barra de links sociais
 */
function SocialLinksBar() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.normal, delay: ANIMATION_DELAYS.long }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mt-12"
        >
            {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                    <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:text-purple-300 hover:border-purple-500/50 transition-colors"
                        aria-label={social.label}
                    >
                        <Icon size={24} />
                    </motion.a>
                );
            })}
        </motion.div>
    );
}

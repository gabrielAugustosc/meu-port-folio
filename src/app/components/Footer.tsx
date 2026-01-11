

/**
 * Componente Footer - Rodapé do portfólio
 * Exibe informações de copyright
 */
export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-4 bg-slate-950 border-t border-purple-500/20">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-400 flex items-center justify-center gap-2">
                    Feito por Gabriel Augusto © {currentYear}
                </p>
            </div>
        </footer>
    );
}
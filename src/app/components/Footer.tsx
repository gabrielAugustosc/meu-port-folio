

export function Footer() {
    return (
        // --- CONTAINER DO RODAPÉ ---
        // A tag <footer> é importante pro Google saber que isso é o fim da página.
        // border-t: Cria aquela linha fina roxa apenas na parte de cima (Top).
        <footer className="py-8 px-4 bg-slate-950 border-t border-purple-500/20">
            
            <div className="max-w-6xl mx-auto text-center">
                
                {/* --- TEXTO DE CRÉDITOS --- */}
                {/* flex items-center: Garante que o texto e o ícone fiquem alinhados na mesma linha. */}
                <p className="text-gray-400 flex items-center justify-center gap-2">
                    Feito por Gabriel Augusto © 2026
                </p>
            </div>
        </footer>
    );
}
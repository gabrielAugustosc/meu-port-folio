// --- IMPORTAÇÃO DOS COMPONENTES ---
// Aqui estamos trazendo todas as "peças" que criamos nos outros arquivos.
// Sem importar, o App não sabe que eles existem.
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
    return (
        // --- CONTAINER PRINCIPAL (A "CAIXA" DO SITE) ---
        // min-h-screen: Garante que o site tenha NO MÍNIMO a altura da tela inteira (sem ficar branco embaixo se tiver pouco conteúdo).
        // bg-slate-950: Define a cor de fundo padrão (aquele azul quase preto) para o fundo do site todo.
        <div className="min-h-screen bg-slate-950">
            
            {/* --- ORDEM DE EXIBIÇÃO --- */}
            {/* Aqui nós simplesmente empilhamos os blocos na ordem que queremos que apareçam na tela. */}
            
            <Hero />      {/* 1. A primeira coisa que aparece (Foto, Nome, Botões) */}
            
            <About />     {/* 2. Seção "Sobre Mim" */}
            
            <Projects />  {/* 3. Seção "Meus Projetos" */}
            
            <Skills />    {/* 4. Seção "Habilidades" (Barras de progresso) */}
            
            <Contact />   {/* 5. Seção "Contato" (Formulário) */}
            
            <Footer />    {/* 6. O rodapé (Créditos) no final de tudo */}
            
        </div>
    );
}

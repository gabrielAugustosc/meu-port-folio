// Importa a função 'createRoot' do React. 
// É ela que cria a "raiz" onde todo o nosso site vai viver dentro do HTML.
import { createRoot } from "react-dom/client";

// Importa o componente 'App'. 
// Lembra do arquivo App.tsx que acabamos de ver? É ele sendo trazido pra cá.
import App from "./App.tsx";

// Importa o CSS Global.
// É aqui que o Tailwind CSS e suas configurações de estilo são carregados pro site todo.
import "./styles/index.css";

// --- A MÁGICA DA RENDERIZAÇÃO ---
// 1. document.getElementById("root"): Procura no arquivo 'index.html' uma <div> com id="root".
// 2. o sinal '!': Diz pro TypeScript "Pode confiar, essa div existe, não vai ser nula".
// 3. .render(<App />): Pega o nosso componente <App /> (e tudo que tem dentro dele) e injeta dentro dessa div.
createRoot(document.getElementById("root")!).render(<App />);
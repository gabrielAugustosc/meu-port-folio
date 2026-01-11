# 📁 Estrutura do Projeto - Portfólio Gabriel Augusto

## 🎯 Visão Geral

Este projeto foi refatorado seguindo as melhores práticas de desenvolvimento React/TypeScript, com foco em:
- **Separação de responsabilidades**
- **Reutilização de código**
- **Tipagem forte com TypeScript**
- **Organização modular**
- **Manutenibilidade**

## 📂 Estrutura de Pastas

```
src/
├── app/
│   └── components/         # Componentes da versão alternativa
│       ├── About.tsx
│       └── Footer.tsx
│
├── components/             # Componentes principais
│   ├── About.tsx          # Seção sobre o desenvolvedor
│   ├── Contact.tsx        # Formulário de contato
│   ├── Footer.tsx         # Rodapé
│   ├── Hero.tsx           # Seção principal/hero
│   ├── Projects.tsx       # Seção de projetos
│   ├── Skills.tsx         # Seção de habilidades
│   ├── common/            # Componentes reutilizáveis
│   │   └── ImageWithFallback.tsx
│   └── ui/                # Componentes de UI (shadcn/ui)
│
├── constants/             # ✨ NOVO: Constantes da aplicação
│   └── index.ts          # Configurações, IDs, delays, etc.
│
├── data/                  # ✨ NOVO: Dados estáticos
│   ├── features.ts       # Lista de features/habilidades
│   ├── projects.ts       # Lista de projetos
│   ├── skills.ts         # Lista de skills técnicas
│   └── socialLinks.ts    # Links de redes sociais
│
├── types/                 # ✨ NOVO: Definições de tipos TypeScript
│   └── index.ts          # Interfaces e types compartilhados
│
├── lib/                   # Utilitários
│   └── utils.ts
│
└── styles/                # Estilos globais
    ├── fonts.css
    ├── index.css
    ├── tailwind.css
    └── theme.css
```

## 🔧 Arquivos Criados na Refatoração

### 1. **`src/types/index.ts`**
Define todas as interfaces TypeScript do projeto:
- `Project` - Estrutura de dados de um projeto
- `Skill` / `SkillCategory` - Estrutura de habilidades
- `Feature` - Features/características
- `SocialLink` - Links sociais
- `AnimationConfig` - Configurações de animação

### 2. **`src/data/`**
Separa os dados dos componentes:
- **`projects.ts`** - Array com todos os projetos
- **`skills.ts`** - Categorias e níveis de habilidades
- **`features.ts`** - Features do About (Desenvolvimento, Design, Performance)
- **`socialLinks.ts`** - Links do GitHub, LinkedIn e Email

### 3. **`src/constants/index.ts`**
Centraliza valores constantes:
```typescript
- EMAILJS_CONFIG - Configurações do EmailJS (com variáveis de ambiente)
- ANIMATION_DURATIONS - Durações padrão de animações
- ANIMATION_DELAYS - Delays padrão de animações
- SECTION_IDS - IDs das seções para navegação
- SUCCESS_MESSAGE_DURATION - Tempo de exibição de mensagens
```

### 4. **`.env` e `.env.example`**
Variáveis de ambiente para chaves sensíveis:
```env
VITE_EMAILJS_SERVICE_ID=service_0drhun8
VITE_EMAILJS_TEMPLATE_ID=template_7m39ygc
VITE_EMAILJS_PUBLIC_KEY=PwGe_ip1O50AKW7TY
```

## 🎨 Melhorias Implementadas

### **1. Separação de Dados e Lógica**
**Antes:**
```tsx
export function Projects() {
  const projects = [
    { title: '...', description: '...' },
    // ... dentro do componente
  ];
}
```

**Depois:**
```tsx
// src/data/projects.ts
export const projects: Project[] = [...];

// src/components/Projects.tsx
import { projects } from '../data/projects';
```

### **2. Tipagem Forte**
**Antes:**
```tsx
const features = [
  { icon: Code2, title: 'Dev' }
];
```

**Depois:**
```tsx
import { Feature } from '../types';

export const features: Feature[] = [
  { icon: Code2, title: 'Dev', description: '...' }
];
```

### **3. Componentização**
**Antes:** Componente monolítico com muito JSX

**Depois:** Componentes menores e focados
```tsx
// Hero.tsx
export function Hero() { ... }
function BackgroundEffects() { ... }
function DeveloperBadge() { ... }
function ActionButtons() { ... }
function ScrollIndicator() { ... }
```

### **4. Constantes Reutilizáveis**
**Antes:**
```tsx
transition={{ duration: 0.6, delay: 0.2 }}
```

**Depois:**
```tsx
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from '../constants';
transition={{ 
  duration: ANIMATION_DURATIONS.normal, 
  delay: ANIMATION_DELAYS.medium 
}}
```

### **5. Variáveis de Ambiente**
**Antes:**
```tsx
emailjs.sendForm(
  'service_0drhun8',  // Hardcoded
  'template_7m39ygc',
  form.current,
  'PwGe_ip1O50AKW7TY'
);
```

**Depois:**
```tsx
import { EMAILJS_CONFIG } from '../constants';
emailjs.sendForm(
  EMAILJS_CONFIG.serviceId,  // De variável de ambiente
  EMAILJS_CONFIG.templateId,
  form.current,
  EMAILJS_CONFIG.publicKey
);
```

## 📝 Documentação

Todos os componentes e funções agora possuem:
- **JSDoc comments** explicativos
- **Interfaces** para props
- **Tipos** explícitos para estados e retornos
- **Nomes descritivos** de variáveis e funções

Exemplo:
```tsx
/**
 * Componente Hero - Seção principal da página
 * Responsável por exibir a apresentação inicial do portfólio
 */
export function Hero() {
    /**
     * Realiza scroll suave para uma seção específica da página
     * @param sectionId - ID da seção de destino
     */
    const handleSmoothScroll = (sectionId: string): void => {
        // ...
    };
}
```

## 🚀 Como Adicionar Novos Dados

### Adicionar um Projeto:
```typescript
// src/data/projects.ts
export const projects: Project[] = [
  // ...projetos existentes
  {
    title: 'Novo Projeto',
    description: 'Descrição aqui',
    image: '/path/to/image.png',
    tags: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/...',
    demoUrl: 'https://demo.com',
  },
];
```

### Adicionar uma Skill:
```typescript
// src/data/skills.ts
export const skillCategories: SkillCategory[] = [
  {
    category: 'Nova Categoria',
    skills: [
      { name: 'Nova Skill', level: 75 },
    ],
  },
];
```

### Adicionar uma Feature:
```typescript
// src/data/features.ts
import { Rocket } from 'lucide-react';

export const features: Feature[] = [
  // ...features existentes
  {
    icon: Rocket,
    title: 'Nova Feature',
    description: 'Descrição da feature',
  },
];
```

## 🎯 Benefícios da Refatoração

✅ **Manutenibilidade** - Código mais fácil de manter e atualizar
✅ **Escalabilidade** - Estrutura preparada para crescer
✅ **Legibilidade** - Código mais limpo e compreensível
✅ **Reutilização** - Componentes e constantes reutilizáveis
✅ **Tipagem** - TypeScript previne erros em tempo de desenvolvimento
✅ **Segurança** - Chaves sensíveis em variáveis de ambiente
✅ **Performance** - Separação adequada evita re-renders desnecessários
✅ **Testabilidade** - Componentes menores são mais fáceis de testar

## 🔍 Convenções de Código

- **Nomes de arquivo**: PascalCase para componentes (`Hero.tsx`)
- **Nomes de pasta**: camelCase (`data/`, `types/`)
- **Constantes**: UPPER_SNAKE_CASE (`EMAILJS_CONFIG`)
- **Interfaces**: PascalCase com sufixo Props quando aplicável
- **Funções**: camelCase descritivo (`handleSmoothScroll`)
- **Componentes auxiliares**: Função dentro do arquivo, não exportada

## 📦 Dependências Principais

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Framer Motion** - Animações
- **Tailwind CSS** - Estilização
- **EmailJS** - Envio de emails
- **Lucide React** - Ícones
- **Vite** - Build tool

---

**Última atualização:** Janeiro 2026
**Desenvolvedor:** Gabriel Augusto
**Status:** ✨ Refatorado e otimizado

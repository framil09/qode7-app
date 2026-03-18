# 🎨 Qodeseven

Um site moderno e profissional construído com **React**, **TypeScript** e **Tailwind CSS**, apresentando uma abordagem de **minimalismo corporativo** com design limpo e responsivo.

## 📋 Visão Geral

Qodeseven é uma aplicação web full-stack que combina:
- **Frontend**: Interface moderna com React 19, componentes Radix UI e animações Framer Motion
- **Backend**: Servidor Express para servir a aplicação
- **Build**: Vite para desenvolvimento rápido e build otimizado

O projeto segue uma filosofia de design **corporativo minimalista** com enfoque em:
- 🎯 Espaço negativo abundante
- 📱 Responsividade total
- ✨ Animações suaves e naturais
- 🎨 Paleta de cores profissional

---

## 🚀 Quick Start

### Pré-requisitos

- **Node.js** 18+ 
- **npm** 9+ ou **pnpm** 10+

### Instalação

```bash
# Clone ou abra o projeto
cd /Users/virtualmachine/Desktop/Documentos/Projetos\ /qodeseven

# Instale as dependências
npm install --legacy-peer-deps
# ou
pnpm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# O servidor estará disponível em:
# http://localhost:5173 (Vite)
```

A aplicação recarrega automaticamente ao fazer alterações no código.

### Build para Produção

```bash
# Build da aplicação e servidor
npm run build

# Inicie o servidor de produção
npm start
```

### Outros comandos

```bash
# Verificar tipos TypeScript
npm run check

# Formatar código
npm run format

# Preview da build de produção
npm run preview
```

---

## 🌐 Deploy

### AWS Amplify ⭐ (Recomendado)

**Guia rápido**: [AMPLIFY_QUICK_START.md](./AMPLIFY_QUICK_START.md)  
**Guia completo**: [AWS_AMPLIFY_DEPLOY.md](./AWS_AMPLIFY_DEPLOY.md)

```bash
# 1. Build local para testar
npm run build

# 2. Push para GitHub
git push origin main

# 3. Conectar no Amplify Console
# https://console.aws.amazon.com/amplify/

# 4. Deploy automático ativado!
```

**Arquivo de configuração**: `amplify.yml` ✅

### Variáveis de Ambiente

```bash
# Mínimo
NODE_ENV=production

# Opcional (frontend)
VITE_API_URL=https://sua-api.com
```

Ver `.env.example` para todas as opções.

---

## 📁 Estrutura do Projeto

```
qodeseven/
├── client/                          # Frontend React
│   ├── public/
│   │   └── __manus__/              # Scripts de debug
│   │       └── debug-collector.js
│   ├── src/
│   │   ├── components/              # Componentes React
│   │   │   ├── Header.tsx           # Cabeçalho navegável
│   │   │   ├── HeroSection.tsx      # Banner principal
│   │   │   ├── ServicesSection.tsx  # Seção de serviços
│   │   │   ├── AboutSection.tsx     # Seção sobre
│   │   │   ├── PortfolioSection.tsx # Galeria de portfólio
│   │   │   ├── CTASection.tsx       # Call-to-action
│   │   │   ├── Footer.tsx           # Rodapé
│   │   │   ├── WhatsAppButton.tsx   # Botão flutuante WhatsApp
│   │   │   ├── ErrorBoundary.tsx    # Captura de erros
│   │   │   ├── ManusDialog.tsx      # Dialog modal
│   │   │   └── ui/                  # Componentes base (Radix UI)
│   │   │       ├── button.tsx, input.tsx, card.tsx, etc.
│   │   │       └── [40+ componentes reutilizáveis]
│   │   ├── pages/
│   │   │   ├── Home.tsx             # Página inicial
│   │   │   └── NotFound.tsx         # Página 404
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx     # Contexto de tema (light/dark)
│   │   ├── hooks/
│   │   │   ├── useComposition.ts    # Hook customizado
│   │   │   ├── useIntersectionObserver.ts
│   │   │   ├── useMobile.tsx        # Detecção de device
│   │   │   └── usePersistFn.ts
│   │   ├── lib/
│   │   │   └── utils.ts             # Utilitários
│   │   ├── App.tsx                  # Componente raiz
│   │   ├── main.tsx                 # Ponto de entrada
│   │   └── index.css                # Estilos globais
│   └── index.html
├── server/
│   └── index.ts                     # Servidor Express
├── patches/
│   └── wouter@3.7.1.patch          # Patch de dependência
├── package.json                     # Configuração npm
├── tsconfig.json                    # Configuração TypeScript
├── tsconfig.node.json              # TS para Build tools
├── vite.config.ts                   # Configuração Vite
├── tailwind.config.js              # Configuração Tailwind CSS
└── postcss.config.js               # Configuração PostCSS
```

---

## 🎨 Design System

### Filosofia de Design: Minimalismo Corporativo Moderno

**Princípios:**
- ✨ Espaço negativo como elemento de design
- 📐 Grid assimétrico com colunas variáveis
- 🎯 Funcionalidade acima de decoração
- 🔤 Hierarquia tipográfica clara

### Paleta de Cores

| Cor | Valor | Uso |
|-----|-------|-----|
| Primária | #0F3A7D | Títulos, elementos principais |
| Secundária | #6B7280 | Texto secundário |
| Acentos | #10B981 | Botões e CTAs |
| Fundo | #FFFFFF / #0F172A | Light/Dark theme |

### Sistema Tipográfico

```
🔤 Títulos:
   - Display: Poppins Bold 700 (48px)
   - H1: Poppins Bold 700 (36px)
   - H2: Poppins Bold 700 (28px)

📝 Corpo:
   - Padrão: Inter Regular 400 (16px)
   - Pequeno: Inter Regular 400 (14px)
   - Leve: Inter Light 300 (14px)
```

### Componentes UI Disponíveis

A biblioteca de componentes inclui:
- **Feedback**: Alert, Toast, Progress, Spinner
- **Forms**: Button, Input, Select, Checkbox, RadioGroup, Textarea
- **Navigation**: Header, Breadcrumb, Navigation Menu, Pagination
- **Data Display**: Card, Table, Carousel, Chart, Badge
- **Modais**: Dialog, AlertDialog, Sheet, Popover, Drawer
- **Layout**: Grid, Tabs, Accordion, Resizable Panels
- **Outros**: Tooltip, Hover Card, Context Menu, Command

---

## 🛠️ Stack Tecnológico

### Frontend

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **React** | 19.2.1 | UI Framework |
| **TypeScript** | 5.6.3 | Type Safety |
| **Vite** | 7.1.7 | Build Tool |
| **Tailwind CSS** | 4.1.14 | Styling |
| **Radix UI** | Latest | Componentes base |
| **Framer Motion** | 12.23.22 | Animações |
| **React Hook Form** | 7.64.0 | Gerenciamento de forms |
| **Wouter** | 3.3.5 | Roteamento |
| **Recharts** | 2.15.2 | Gráficos |
| **Zod** | 4.1.12 | Validação de schemas |
| **Sonner** | 2.0.7 | Toast notifications |

### Backend

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **Express** | 4.21.2 | HTTP Server |
| **Node.js** | 18+ | Runtime |

### Dev Tools

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **ESBuild** | 0.25.0 | Minificação |
| **Prettier** | 3.6.2 | Code Formatting |
| **Vitest** | 2.1.4 | Testing |

---

## 📱 Estrutura de Páginas

### Home (Página Principal)

A página inicial contém as seguintes seções:

1. **Header** - Barra de navegação fixa com logo e menu
2. **Hero Section** - Banner principal com CTA
3. **Services Section** - Apresentação de serviços
4. **About Section** - Informações sobre a empresa
5. **Portfolio Section** - Galeria de trabalhos
6. **CTA Section** - Chamada à ação final
7. **Footer** - Rodapé com links
8. **WhatsApp Button** - Botão flutuante para contato

### NotFound (404)

Página exibida quando a rota não existe.

---

## 🔧 Configuração

### Tailwind CSS

Configurado em `tailwind.config.js` com:
- Tema customizado com paleta de cores
- Plugins de animação
- Typography plugin

### Vite Configuration

- **Hot Module Replacement (HMR)** para desenvolvimento eficiente
- **Asset Optimization** para produção
- **Manus Debug Collector** para logging em desenvolvimento

### TypeScript

Configuração rigorosa com:
- `strict: true`
- `noUnusedLocals`: previne variáveis não usadas
- `moduleResolution: "bundler"`

### Theme System

O projeto suporta temas light/dark via `ThemeContext`:

```typescript
// Em App.tsx
<ThemeProvider defaultTheme="light">
  {/* Componentes */}
</ThemeProvider>
```

---

## 🎬 Animações

O projeto utiliza **Framer Motion** para:
- ✨ Fade-in ao scroll (0.6s ease-out)
- 🔄 Transições suaves em hover (300ms)
- 📍 Slide-in lateral para elementos de lista
- 🎯 Micro-interações em botões

---

## 📦 Build & Deploy

### Processo de Build

```bash
# Build do frontend (Vite)
vite build
  → Gera: dist/

# Build do backend (ESBuild)  
esbuild server/index.ts --bundle
  → Gera: dist/index.js
```

### Estrutura de Produção

```
dist/
├── index.html           # HTML bundled
├── assets/              # CSS, JS minificados
├── public/              # Arquivos estáticos
└── index.js            # Server bundle
```

### Servidor em Produção

```bash
NODE_ENV=production node dist/index.js
# Servidor rodará na porta 3000 (ou PORT env var)
```

---

## 🔌 Variáveis de Ambiente

```env
# Server
NODE_ENV=production|development   # Ambiente
PORT=3000                         # Porta do servidor
```

---

## 🐛 Debugging

### Manus Debug Collector

Sistema automático de logging que coleta:
- 🖥️ Console logs do navegador
- 🌐 Requisições de rede
- 📹 Session replay

Logs salvos em `.manus-logs/`

### Error Boundary

Componente `ErrorBoundary` captura erros do React:

```typescript
import ErrorBoundary from "@/components/ErrorBoundary";

<ErrorBoundary>
  {/* Seus componentes */}
</ErrorBoundary>
```

---

## 📊 Performance

### Otimizações Implementadas

- ✅ Code splitting automático (Vite)
- ✅ Lazy loading de componentes
- ✅ Image optimization
- ✅ CSS minification
- ✅ Tree shaking de dependências

### Hooks de Performance

```typescript
// Memoização de funções
usePersistFn()

// Observação de elementos
useIntersectionObserver()
```

---

## 🧪 Testing

O projeto usa **Vitest** para testes:

```bash
npm run test         # Executar testes
npm run test:ui      # UI interativa
npm run test:watch   # Watch mode
```

---

## 📝 Convenções de Código

### Estrutura de Componentes

```typescript
// 1. Imports
import { useState } from "react";
import { Button } from "@/components/ui/button";

// 2. Types/Interfaces
interface Props {
  title: string;
}

// 3. Componente
export default function MyComponent({ title }: Props) {
  const [state, setState] = useState("");
  
  return <div>{title}</div>;
}
```

### Naming Conventions

- 📦 **Componentes**: PascalCase (`MyComponent.tsx`)
- 🔧 **Hooks**: camelCase com prefixo `use` (`useMyHook.ts`)
- 📂 **Pastas**: camelCase ou kebab-case
- 🎯 **Classes CSS**: kebab-case (`my-class`)

### TypeScript

- Sempre usar types/interfaces
- Evitar `any`
- Usar strict mode

---

## 🤝 Contribuindo

1. **Clone** o repositório
2. **Crie uma branch**: `git checkout -b feature/nova-feature`
3. **Faça commits**: `git commit -m 'Add: descrição'`
4. **Push** para a branch: `git push origin feature/nova-feature`
5. **Abra um PR** com descrição detalhada

### Padrão de Commits

```
feat:   Adiciona feature
fix:    Corrige bug
docs:   Documentação
style:  Formatação
refactor: Refatoração
test:   Testes
chore:  Build, deps
```

---

## 📚 Recursos Úteis

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Framer Motion](https://www.framer.com/motion)
- [Wouter Router](https://www.npmjs.com/package/wouter)

---

## 📄 Licença

MIT - Veja LICENSE para mais detalhes

---

## 👨‍💼 Autor

**Qodeseven** - Desenvolvido com ❤️

---

## 🆘 Suporte

### Comune Issues

**Q: Erro de peer dependencies ao instalar?**
```bash
npm install --legacy-peer-deps
```

**Q: Porta 5173 já está em uso?**
```bash
# Vite usará automaticamente a próxima porta disponível
npm run dev
```

**Q: TypeScript errors após alterações?**
```bash
npm run check
```

**Q: Build falhando?**
```bash
rm -rf dist node_modules
npm install --legacy-peer-deps
npm run build
```

---

## 🎯 Status do Projeto

- ✅ Frontend componentizado
- ✅ Design System implementado
- ✅ Roteamento funcional
- ✅ Temas light/dark (preparado)
- ✅ Otimizações de performance
- ✅ Error handling
- 📋 Testes (em desenvolvimento)

---

## 📞 Contato

Para dúvidas sobre o projeto:
- 💬 WhatsApp: [Botão flutuante na página]
- 📧 Email: [Será configurado]

---

**Última atualização**: 18 de fevereiro de 2026

---

<div align="center">

Made with 💚 using React + TypeScript + Tailwind CSS

[Voltar ao topo](#-qodeseven)

</div>

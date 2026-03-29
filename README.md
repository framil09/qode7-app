# QodeSeven Technology

Site institucional da **QodeSeven** — empresa de tecnologia com atuação no Brasil e Itália, especializada em soluções de gestão empresarial, pública e hospitalar.

## Visão Geral

Aplicação web full-stack com design dark/teal profissional:

- **Frontend**: React 19 + TypeScript + Tailwind CSS 4 + Framer Motion
- **Backend**: Express com envio de emails via Nodemailer
- **Design**: Tema dark (#0b0f1a) com acentos teal (#1dc9a4)
- **Fontes**: DM Sans (corpo) + Space Mono (números/código)

---

## Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| **Landing Page** | Hero com grid mesh, stats bar, produtos, como funciona, sobre, segmentos |
| **Agendamento de Reunião** | Formulário com calendário, horários e envio de email para comercial@qode7.com |
| **Email Profissional** | Templates HTML no tema dark/teal para cliente e equipe comercial |
| **Convite .ics** | Arquivo de calendário anexado ao email (compatível com Outlook, iPhone, Google) |
| **SEO Otimizado** | Meta tags, Open Graph, Schema.org (JSON-LD), sitemap.xml, robots.txt |
| **Responsivo** | Layout adaptável para desktop, tablet e mobile |
| **Internacionalização** | Suporte a PT-BR e outros idiomas via i18next |

---

## Quick Start

### Pré-requisitos

- **Node.js** 18+
- **npm** 9+ (ou pnpm 10+)

### Instalação

```bash
git clone https://github.com/framil09/qode7-app.git
cd qode7-app
npm install
```

### Configuração de Email

Copie o arquivo de exemplo e configure suas credenciais SMTP:

```bash
cp .env.example .env
```

Edite o `.env` com suas credenciais:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-de-app
COMPANY_EMAIL=comercial@qode7.com
```

Para Gmail, crie uma **Senha de App** em: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

### Desenvolvimento

```bash
# Iniciar frontend (Vite)
npm run dev:client

# Iniciar backend (Express)
npm run dev:server

# Ou ambos simultaneamente
npm run dev
```

O frontend estará em `http://localhost:3001` e o backend em `http://localhost:5001`.

### Build para Produção

```bash
npm run build
npm start
```

---

## Estrutura do Projeto

```
qode7-app/
├── client/
│   ├── public/
│   │   ├── locales/              # Traduções (pt, en, it)
│   │   ├── robots.txt            # SEO
│   │   └── sitemap.xml           # SEO
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx            # Navegação com logo [Q7]
│   │   │   ├── HeroSection.tsx       # Hero com grid mesh
│   │   │   ├── StatsBar.tsx          # Barra de estatísticas
│   │   │   ├── ProdutosSection.tsx   # Q7Flow, Q7Gov, Q7Saúde
│   │   │   ├── ComoFuncionaSection.tsx # 4 passos com timeline
│   │   │   ├── AboutSection.tsx      # Sobre com barras de competência
│   │   │   ├── SegmentosSection.tsx  # 6 segmentos de atuação
│   │   │   ├── CTASection.tsx        # Call-to-action
│   │   │   ├── Footer.tsx            # Rodapé 4 colunas
│   │   │   ├── ScheduleMeetingDialog.tsx # Formulário de agendamento
│   │   │   └── ui/                   # Componentes Radix UI
│   │   ├── contexts/
│   │   │   ├── ThemeContext.tsx
│   │   │   └── ScheduleMeetingContext.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css             # Tema dark/teal
│   └── index.html                # Meta tags SEO + Schema.org
├── server/
│   └── index.ts                  # Express + Nodemailer
├── .env.example                  # Template de variáveis
└── package.json
```

---

## Design System

### Paleta de Cores

| Cor | Valor | Uso |
|---|---|---|
| Background | `#0b0f1a` | Fundo principal |
| Surface | `#111827` | Cards e seções |
| Teal (accent) | `#1dc9a4` | Botões, badges, destaques |
| Teal Glow | `#00ffe0` | Hover states |
| Text Primary | `#f0f4f8` | Títulos e texto principal |
| Text Secondary | `rgba(160,174,192,0.7)` | Texto secundário |
| Border | `rgba(255,255,255,0.06)` | Bordas sutis |

### Tipografia

| Elemento | Fonte | Peso |
|---|---|---|
| Corpo | DM Sans | 400, 500, 600, 700 |
| Números/Código | Space Mono | 700 |
| Logo [Q7] | Space Mono | 700 |

---

## SEO

O site inclui otimizações de SEO:

- **Meta tags**: title, description, keywords, author, robots
- **Open Graph**: og:title, og:description, og:image, og:type, og:locale
- **Twitter Cards**: twitter:card, twitter:title, twitter:description
- **Schema.org**: JSON-LD com Organization e SoftwareApplication
- **sitemap.xml**: Mapa do site para crawlers
- **robots.txt**: Diretivas para bots de busca
- **Heading hierarchy**: h1, h2, h3 semânticos
- **Preconnect**: Fontes Google pré-conectadas

---

## Email de Agendamento

Quando um cliente agenda uma reunião pelo site:

1. **Dados salvos** localmente em `data/meetings.json`
2. **Email para o cliente** com confirmação, botão Google Calendar e arquivo .ics
3. **Email para comercial@qode7.com** com dados do cliente, botões WhatsApp e Responder Email
4. Ambos os emails usam template HTML profissional no tema dark/teal da Qode7

---

## Stack Tecnológico

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19.2.1 | UI Framework |
| TypeScript | 5.6.3 | Type Safety |
| Vite | 7.1.7 | Build Tool |
| Tailwind CSS | 4.1.14 | Styling |
| Framer Motion | 12.23.22 | Animações |
| Express | 4.21.2 | HTTP Server |
| Nodemailer | 6.x | Envio de emails |
| Radix UI | Latest | Componentes base |
| Lucide React | 0.453.0 | Ícones |
| i18next | Latest | Internacionalização |

---

## Contato

- **Email**: comercial@qode7.com
- **WhatsApp**: +55 35 99210-1025
- **CNPJ**: 21.462.653/0001-98
- **Sedes**: Lambari/MG (Brasil) e Modena (Itália)

---

**Última atualização**: 28 de março de 2026

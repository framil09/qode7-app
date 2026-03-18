# 📅 Guia de Integração: Google Calendar e Notificações

Este guia detalha como configurar e utilizar a nova funcionalidade de agendamento de reuniões com integração direta ao Google Calendar e sistema de notificações automáticas por e-mail.

## 🚀 O que foi implementado?

1.  **Integração com Google Calendar API (OAuth2):** O sistema agora cria automaticamente um evento no calendário do Google, convidando tanto a empresa quanto o cliente.
2.  **Notificações por E-mail (Nodemailer):** 
    *   **Para o Cliente:** Confirmação de agendamento com um resumo dos detalhes e um botão direto para adicionar ao calendário.
    *   **Para a Empresa:** Notificação de nova solicitação de reunião com todos os dados do lead.
3.  **Fallback de Segurança:** Se a API do Google falhar ou não estiver configurada, o sistema gera um link de backup no e-mail do cliente para que ele adicione o evento manualmente.
4.  **Persistência Local:** Todas as reuniões continuam sendo salvas no arquivo `data/meetings.json` para consulta futura.

## 🛠️ Configuração Necessária

Para que a integração funcione, você deve configurar as seguintes variáveis no seu arquivo `.env`:

### 1. Configuração de E-mail (SMTP)
Recomendamos o uso do Gmail com uma "Senha de Aplicativo".
- `EMAIL_HOST`: `smtp.gmail.com`
- `EMAIL_PORT`: `465`
- `EMAIL_USER`: Seu e-mail do Gmail.
- `EMAIL_PASSWORD`: Sua senha de aplicativo gerada no Google (não é a sua senha normal).
- `COMPANY_EMAIL`: O e-mail que receberá as notificações de novas reuniões (ex: `comercial@qode7.com`).

### 2. Google Calendar API (OAuth2)
1.  Acesse o [Google Cloud Console](https://console.cloud.google.com/).
2.  Crie um novo projeto.
3.  Vá em **APIs e Serviços > Biblioteca** e ative a **Google Calendar API**.
4.  Configure a **Tela de consentimento OAuth** (User Type: Externo).
5.  Em **Credenciais**, clique em **Criar Credenciais > ID do cliente OAuth**.
    *   Tipo: Aplicativo da Web.
    *   URIs de redirecionamento: `http://localhost:3000/api/auth/google/callback`.
6.  Copie o `GOOGLE_CLIENT_ID` e o `GOOGLE_CLIENT_SECRET`.
7.  Para obter o `GOOGLE_REFRESH_TOKEN`, você pode usar o [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/):
    *   Selecione `Google Calendar API v3` (escopo `https://www.googleapis.com/auth/calendar.events`).
    *   Use suas credenciais (Client ID e Secret).
    *   Autorize e troque o código de autorização por tokens.

## 📦 Dependências Instaladas
Foi adicionada a biblioteca `googleapis` para gerenciar a comunicação com o Google.
```bash
npm install googleapis
```

## 📝 Como Testar
1.  Certifique-se de que o `.env` está preenchido.
2.  Inicie o servidor: `npm run dev` (ou o comando de sua preferência).
3.  Abra o modal de agendamento no site.
4.  Preencha os dados e clique em "Agendar Reunião".
5.  Verifique se o evento apareceu no Google Calendar e se os e-mails foram enviados.

---
*Desenvolvido por Manus para Qode7*

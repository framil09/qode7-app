# 📅 Agendamento Universal (Sem Google API)

Esta nova solução permite que você tenha um sistema de agendamento profissional **sem precisar configurar APIs complexas do Google Cloud**.

## 🚀 Como funciona?

1.  **Convite Universal (.ics):** O sistema gera automaticamente um arquivo de convite de agenda padrão (iCalendar). 
    - Quando o cliente recebe o e-mail, ele pode abrir o anexo e o evento será adicionado automaticamente ao **Google Calendar, Outlook, iPhone (iCal) ou Android**.
2.  **Notificações por E-mail:** 
    - O **Cliente** recebe uma confirmação com os detalhes da reunião, um botão direto para o Google Calendar e o anexo `.ics`.
    - A **Empresa** recebe um e-mail com todos os dados do lead para entrar em contato.
3.  **Zero Configuração de API:** Você só precisa de uma conta de e-mail (como Gmail) para enviar as notificações.

## 🛠️ Configuração Necessária

Você só precisa configurar as variáveis de e-mail no seu arquivo `.env`:

### 1. Configuração de E-mail (SMTP)
Recomendamos usar o Gmail com uma **Senha de Aplicativo**.
- `EMAIL_HOST`: `smtp.gmail.com`
- `EMAIL_PORT`: `465`
- `EMAIL_USER`: Seu e-mail (ex: `contato@qode7.com`).
- `EMAIL_PASSWORD`: Sua **Senha de Aplicativo** (gerada em: https://myaccount.google.com/apppasswords).
- `COMPANY_EMAIL`: O e-mail que deve receber os avisos de novas reuniões.

## ✅ Vantagens desta solução
- **Privacidade:** Não precisa dar permissões de leitura/escrita na sua conta Google para o app.
- **Universal:** Funciona com qualquer calendário do mundo.
- **Simplicidade:** Menos código, menos erros e mais fácil de manter.

---
*Desenvolvido por Manus para Qode7*

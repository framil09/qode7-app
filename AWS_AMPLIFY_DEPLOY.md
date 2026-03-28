# 🚀 Deploy AWS Amplify - Qode7

## Deploy Rápido (5 minutos)

### 1️⃣ Acesse o AWS Amplify Console
https://console.aws.amazon.com/amplify/

### 2️⃣ Conecte o Repositório
- Clique: **"New app"** → **"Host web app"**
- Selecione: **GitHub**
- Repositório: `framil09/qode7-app`
- Branch: `main`

### 3️⃣ Configurações de Build (Auto-detectadas)
O Amplify usará automaticamente o arquivo `amplify.yml`:
- Build command: `npm run build`
- Output directory: `dist/public`
- Node version: 20

### 4️⃣ Variáveis de Ambiente (Mínimas)
Adicione em **Environment variables**:
```env
NODE_ENV=production
```

### 5️⃣ Deploy!
- Clique: **"Save and deploy"**
- Aguarde ~5 minutos
- Acesse: `https://[branch].[app-id].amplifyapp.com`

---

## ⚙️ Configurações Opcionais

### Email (para formulário de contato)
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-de-app
COMPANY_EMAIL=comercial@qode7.com
```

### Google Calendar (opcional)
```env
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxx
GOOGLE_REFRESH_TOKEN=xxx
```

---

## 🌐 Domínio Personalizado

1. Vá em **Domain management**
2. Clique em **"Add domain"**
3. Digite seu domínio
4. Configure DNS conforme instruções do Amplify
5. Aguarde propagação (até 24h)

---

## 🔄 Deploy Automático

Cada `git push` para o branch `main` dispara um deploy automático.

```bash
git add .
git commit -m "Atualização"
git push origin main
```

---

## 🐛 Troubleshooting

### Build falha?
- Verifique os logs no Amplify Console
- Teste localmente: `npm run build`
- Confirme variáveis de ambiente

### Site não carrega?
- Confirme que build completou ✅
- Limpe cache do navegador
- Verifique console por erros JavaScript

---

## ℹ️ Nota sobre Backend

AWS Amplify Hosting é para **frontend estático apenas**.

O servidor Express (`server/index.ts`) **não será deployado**.

**Para usar o backend**, considere:
- **AWS Lambda** (serverless)
- **AWS Elastic Beanstalk** (tradicional)
- **Alternative**: Remover funcionalidades que dependem do backend

---

**✅ Pronto! Seu site estará no ar em minutos.**

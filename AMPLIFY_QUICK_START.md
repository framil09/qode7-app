# ⚡ AWS Amplify - Deploy Rápido

## 🚀 5 Passos para Deploy

### 1. Validar Build Local
```bash
npm run build
```

### 2. Commit e Push (se houver mudanças)
```bash
git add .
git commit -m "Deploy AWS Amplify"
git push origin main
```

### 3. Conectar no Amplify
- Acesse: https://console.aws.amazon.com/amplify/
- **"New app"** → **"Host web app"**
- Escolha **GitHub** → repositório `framil09/qode7-app`
- Branch: `main`

### 4. Variável de Ambiente (Mínima)
```env
NODE_ENV=production
```

### 5. Deploy
- **"Save and deploy"**
- Aguarde ~5 minutos
- Acesse: `https://[app-id].amplifyapp.com`

---

## 📝 Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Cliente + Servidor

# Build
npm run build            # Só frontend (para Amplify)
npm run build:full       # Frontend + Backend (local)

# Verificar
npm run check            # TypeScript
npm run preview          # Testar build localmente
```

---

## 🔒 Variáveis de Ambiente

### Frontend (opcional)
```env
VITE_API_URL=https://sua-api.com
```

### Backend (se deployar separadamente)
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=senha-app-gmail
COMPANY_EMAIL=comercial@qode7.com
```

---

## ⚠️ Importante

**AWS Amplify Hosting = Frontend apenas**

O servidor Express (`server/`) não será deployado.

---

## 🔗 Links

- **Console**: https://console.aws.amazon.com/amplify/
- **Repositório**: https://github.com/framil09/qode7-app
- **Guia Completo**: [AWS_AMPLIFY_DEPLOY.md](./AWS_AMPLIFY_DEPLOY.md)

---

**✅ Deploy automático a cada `git push`!**

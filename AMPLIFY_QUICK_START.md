# 🚀 Guia Rápido - AWS Amplify Deploy

Referência rápida para deploy do projeto Qode7 na AWS Amplify.

## ⚡ Deploy Rápido (5 passos)

### 1. Validar o Projeto
```bash
npm run validate
```

### 2. Commit e Push
```bash
git add .
git commit -m "Deploy para AWS Amplify"
git push origin main
```

### 3. Conectar no Amplify
- Acesse: https://console.aws.amazon.com/amplify/
- Clique: **"New app"** → **"Host web app"**
- Escolha seu provedor Git e repositório
- Selecione o branch `main`

### 4. Configurar Variáveis (Mínimas)
```env
NODE_ENV=production
NODE_VERSION=20
```

### 5. Deploy!
- Clique: **"Save and deploy"**
- Aguarde ~5 minutos
- Acesse: `https://[branch].[app-id].amplifyapp.com`

---

## 📝 Comandos Úteis

### Desenvolvimento
```bash
npm run dev              # Inicia dev server (client + server)
npm run dev:client       # Apenas frontend
npm run dev:server       # Apenas backend
```

### Build e Teste
```bash
npm run check            # Verifica TypeScript
npm run build            # Build de produção
npm run preview          # Preview do build
npm run validate         # Check + Build
```

### Pré-Deploy
```bash
npm run predeploy        # Validação completa antes de deploy
```

---

## 🔒 Variáveis de Ambiente (Completas)

### Produção Mínima
```env
NODE_ENV=production
NODE_VERSION=20
```

### Com Email
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-de-app-gmail
COMPANY_EMAIL=comercial@qode7.com
```

### Com Google Calendar
```env
GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=xxx
GOOGLE_REFRESH_TOKEN=xxx
GOOGLE_REDIRECT_URI=https://seu-dominio.amplifyapp.com/api/auth/google/callback
```

---

## 🌐 Configurar Domínio Personalizado

### No AWS Amplify Console:

1. **Adicionar domínio**
   - Navegue até: **Domain management**
   - Clique: **"Add domain"**
   - Digite seu domínio: `www.qode7.com`

2. **Configurar DNS**
   - No seu provedor de domínio (Registro.br, GoDaddy, etc.)
   - Adicione os registros DNS fornecidos pelo Amplify:
     ```
     Type: CNAME
     Name: www
     Value: [fornecido pelo Amplify]
     ```

3. **Aguardar propagação**
   - DNS pode levar 24-48h para propagar
   - SSL é configurado automaticamente
   - Amplify verifica o domínio automaticamente

### Redirecionar domínio raiz (opcional)
```
Type: A
Name: @
Value: [IP fornecido pelo Amplify]
```

---

## 🔧 Troubleshooting Rápido

### Build falha?
```bash
# Teste localmente primeiro
npm run validate

# Verifique os logs no Amplify Console
# Geralmente é problema de:
# - Variáveis de ambiente faltando
# - Versão do Node.js errada (use 20)
# - Dependências não instaladas
```

### Site não carrega?
1. Confirme que build completou ✅
2. Verifique URL: `https://[branch].[app-id].amplifyapp.com`
3. Limpe cache do navegador
4. Verifique console do navegador por erros

### Variáveis não funcionam?
1. Variáveis no **frontend** precisam prefixo `VITE_`
   ```env
   VITE_API_URL=https://api.qode7.com
   ```
2. Variáveis no **backend** não precisam prefixo
3. Refaça deploy após adicionar variáveis

---

## 📊 Estrutura de Build

```
amplify.yml           → Configuração de build
├── Frontend Build
│   ├── npm ci
│   ├── npm run build
│   └── Output: dist/public/
└── Backend Build (servidor)
    ├── npm run build
    └── Output: dist/
```

---

## 🔗 Links Úteis

### Documentação
- [AWS Amplify Docs](https://docs.aws.amazon.com/amplify/)
- [Amplify Console](https://console.aws.amazon.com/amplify/)
- [Guia Completo](./AWS_AMPLIFY_DEPLOY.md)
- [Checklist](./AMPLIFY_CHECKLIST.md)

### Ferramentas
- [Amplify CLI](https://docs.amplify.aws/cli/)
- [AWS CLI](https://aws.amazon.com/cli/)

---

## 💡 Dicas Pro

### Deploy Automático
- Amplify faz deploy automático em cada `git push`
- Configure branch preview para testar antes do prod
- Use tags Git para versionar releases

### Performance
- Amplify CDN global incluído
- Compressão Gzip/Brotli automática
- HTTP/2 habilitado por padrão

### Monitoramento
- Monitore métricas no Amplify Console
- Configure SNS para notificações de build
- Use AWS CloudWatch para logs detalhados

### Custos
- 1000 build minutes/mês grátis
- 15 GB hosting grátis
- 5 GB data transfer/mês grátis
- [Calculadora de preços](https://aws.amazon.com/amplify/pricing/)

---

**🎉 Pronto! Seu projeto está configurado para AWS Amplify.**

Para mais detalhes, consulte [AWS_AMPLIFY_DEPLOY.md](./AWS_AMPLIFY_DEPLOY.md)

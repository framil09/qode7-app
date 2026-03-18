# ⚡ Deploy AWS Amplify - Qode7

## ✅ Projeto Otimizado

Este projeto está configurado para deploy no AWS Amplify com:
- ✅ Build otimizado (apenas frontend)
- ✅ Configurações simplificadas
- ✅ Documentação direta

---

## 🚀 Deploy em 3 Passos

### 1️⃣ Conectar Repositório
- Acesse: https://console.aws.amazon.com/amplify/
- **"New app"** → **"Host web app"** → **GitHub**
- Repositório: `framil09/qode7-app`
- Branch: `main`

### 2️⃣ Configuração (auto-detectada)
O Amplify usará o arquivo `amplify.yml`:
- Build: `npm run build`
- Output: `dist/public`

### 3️⃣ Variável de Ambiente
```env
NODE_ENV=production
```

**Clique "Save and deploy"** - Pronto! ✅

---

## 📚 Documentação

- **Guia Rápido**: [AMPLIFY_QUICK_START.md](./AMPLIFY_QUICK_START.md)
- **Guia Completo**: [AWS_AMPLIFY_DEPLOY.md](./AWS_AMPLIFY_DEPLOY.md)

---

## 🔄 Deploy Automático

Cada `git push` para `main` = novo deploy automático

```bash
git add .
git commit -m "Update"
git push origin main
```

---

## 📋 Checklist

- [x] `amplify.yml` configurado
- [x] Build testado: `npm run build` ✅
- [x] Arquivos desnecessários removidos
- [x] Scripts otimizados
- [x] Documentação simplificada
- [ ] Conectar no Amplify Console
- [ ] Fazer primeiro deploy

---

**✨ Projeto pronto para produção na AWS Amplify!**

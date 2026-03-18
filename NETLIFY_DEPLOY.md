# 🚀 Guia de Deploy no Netlify

## Preparação Concluída ✅

Seu projeto qodeseven está pronto para ser enviado para o Netlify! Todos os arquivos necessários foram configurados.

## Arquivos Importantes Criados/Atualizados

- ✅ **netlify.toml** - Configuração oficial do Netlify (build, publish, redirects)
- ✅ **client/index.html** - Analytics comentadas (remova comentários se usar)
- ✅ **.env.example** - Variáveis de ambiente documentadas
- ✅ **.gitignore** - Configurado corretamente para não enviar node_modules

## Passo a Passo para Deploy

### 1. Preparar o Repositório Git
```bash
# Se ainda não tiver repository git iniciado
git init
git add .
git commit -m "Initial commit - qodeseven ready for Netlify"

# Fazer push para GitHub (ou GitLab, Bitbucket)
git remote add origin https://github.com/seu-usuario/qodeseven.git
git branch -M main
git push -u origin main
```

### 2. Conectar ao Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"New site from Git"**
3. Escolha seu provedor (GitHub, GitLab, ou Bitbucket)
4. Selecione o repositório **qodeseven**
5. Clique em **"Deploy site"**

> Se o Netlify não detectar o build automaticamente, use estas configurações:
> - **Build command:** `npm run build`
> - **Publish directory:** `dist/public`
> - **Node version:** 20

### 3. Configurar Variáveis de Ambiente (Opcional)

Se você quiser usar **Analytics (Umami)**:

1. No dashboard do Netlify, vá em **Site settings** → **Build & deploy** → **Environment**
2. Adicione as variáveis:
   - `VITE_ANALYTICS_ENDPOINT`: sua URL do Umami
   - `VITE_ANALYTICS_WEBSITE_ID`: seu ID do website
   
3. Descomente o script de analytics em `client/index.html`:
```html
<!-- Remova os comentários desta seção -->
<script
  defer
  src="%VITE_ANALYTICS_ENDPOINT%/umami"
  data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"></script>
```

### 4. Configurar Email (Para Formulário de Contato)

Se você tiver um formulário de contato funcionando:

1. Crie variáveis de ambiente no Netlify para:
   - `EMAIL_USER`: seu email
   - `EMAIL_PASSWORD`: sua [App Password do Gmail](https://support.google.com/accounts/answer/185833)

2. Ou use serviços como:
   - [Formspree](https://formspree.io) - gratuito e simples
   - [Getform](https://getform.io) - opção profissional
   - [Basin](https://usebasin.com) - alternativa leve

## Estrutura de Build

```
dist/
├── public/              # Arquivos estáticos (HTML, CSS, JS)
│   ├── index.html
│   ├── assets/
│   └── locales/         # Arquivos de tradução (i18n)
└── index.js            # Servidor Node.js
```

## Verificação Final

Antes de fazer deploy, execute:

```bash
# 1. Limpar build anterior
rm -rf dist

# 2. Build completo
npm run build

# 3. Verificar se netlify.toml está correto
cat netlify.toml
```

## Troubleshooting

### "Cannot find module 'i18next'"
Verifique se o `npm install` foi executado com sucesso:
```bash
npm install
```

### Analytics não aparecendo
Certifique-se de que as variáveis estão configuradas nas variáveis de ambiente do Netlify.

### Erro 404 em rotas
Isso já está configurado no `netlify.toml` com:
```toml
[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

## Domínio Customizado

1. No Netlify, vá em **Site settings** → **Domain management**
2. Clique em **Add custom domain**
3. Digite seu domínio (ex: qodeseven.com.br)
4. Siga os passos para configurar DNS ou nameservers

## Performance

O site está otimizado com:
- ✅ Minificação de CSS/JS
- ✅ Compressão gzip
- ✅ Tree-shaking de código não usado
- ✅ Lazy loading de componentes
- ✅ i18n com 3 idiomas

## Próximos Passos

1. ✅ Fazer commit do código
2. ✅ Push para GitHub
3. ✅ Conectar ao Netlify
4. ✅ Configurar variáveis de ambiente (se necessário)
5. ✅ Aguardar deploy (geralmente 1-2 minutos)
6. ✅ Testar site em produção

---

**Seu site estará ao vivo em:** `https://seu-site.netlify.app` (ou seu domínio customizado)

Happy deploying! 🎉

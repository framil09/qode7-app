# ✅ Checklist Pré-Deploy AWS Amplify

Use este checklist antes de fazer deploy na AWS Amplify.

## 📋 Verificações Essenciais

### 1. Código e Repositório
- [ ] Todo código está commitado
- [ ] Sem arquivos sensíveis (senhas, tokens) no código
- [ ] `.env` está no `.gitignore`
- [ ] `.env.example` está atualizado com todas as variáveis necessárias
- [ ] Push feito para o branch principal

```bash
git status
git add .
git commit -m "Preparar para deploy AWS Amplify"
git push origin main
```

### 2. Build Local
- [ ] Build roda sem erros localmente
- [ ] Testes passam (se houver)
- [ ] TypeScript compila sem erros

```bash
npm run check
npm run build
npm run preview
```

### 3. Arquivos de Configuração
- [ ] `amplify.yml` existe no root do projeto ✅
- [ ] `package.json` tem todos os scripts necessários ✅
- [ ] `vite.config.ts` está configurado corretamente ✅

### 4. Dependências
- [ ] Todas as dependências estão no `package.json`
- [ ] Não há dependências quebradas
- [ ] Versões estão fixadas ou com ranges adequados

```bash
npm install
npm audit
```

### 5. Variáveis de Ambiente

Prepare estas variáveis para configurar no AWS Amplify Console:

#### Obrigatórias
```env
NODE_ENV=production
NODE_VERSION=20
```

#### Email (se usar funcionalidade de agendamento)
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-de-app
COMPANY_EMAIL=comercial@qode7.com
```

#### Google Calendar (se configurado)
```env
GOOGLE_CLIENT_ID=seu-client-id
GOOGLE_CLIENT_SECRET=seu-client-secret
GOOGLE_REFRESH_TOKEN=seu-refresh-token
GOOGLE_REDIRECT_URI=https://seu-dominio.amplifyapp.com/api/auth/google/callback
```

### 6. Otimizações de Produção
- [ ] Imagens otimizadas
- [ ] Sem `console.log` desnecessários em produção
- [ ] Assets grandes estão comprimidos
- [ ] Fontes estão otimizadas

### 7. SEO e Meta Tags
- [ ] Título da página configurado
- [ ] Meta description configurada
- [ ] Favicon presente
- [ ] Open Graph tags (para redes sociais)

### 8. Funcionalidades Testadas
- [ ] Navegação entre páginas funciona
- [ ] Formulários funcionam
- [ ] Botões e links funcionam
- [ ] Responsividade em diferentes dispositivos
- [ ] Dark mode funciona (se aplicável)
- [ ] Internacionalização funciona (se aplicável)

### 9. Performance
- [ ] Lighthouse score > 90 (Performance)
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Sem warnings no console do navegador

```bash
# Teste com Lighthouse
npm install -g lighthouse
lighthouse http://localhost:4173 --view
```

### 10. Segurança
- [ ] HTTPS será usado (Amplify faz isso automaticamente)
- [ ] Sem credenciais hardcoded
- [ ] Headers de segurança configurados (se necessário)
- [ ] CORS configurado corretamente (se tiver API)

## 🚀 Pronto para Deploy?

Se você marcou todos os itens relevantes, está pronto para fazer deploy!

### Próximos Passos:

1. **Acesse AWS Amplify Console**
   - https://console.aws.amazon.com/amplify/

2. **Conecte seu repositório**
   - Escolha GitHub, GitLab ou Bitbucket
   - Autorize o acesso
   - Selecione o repositório e branch

3. **O Amplify detectará automaticamente:**
   - `amplify.yml` para configurações de build
   - Node.js como runtime
   - Comandos de build e diretório de output

4. **Configure as variáveis de ambiente**
   - Vá em "Environment variables"
   - Adicione todas as variáveis listadas acima

5. **Inicie o deploy**
   - Clique em "Save and deploy"
   - Aguarde 5-10 minutos
   - Verifique os logs se houver erros

## 🔍 Após o Deploy

### Testes em Produção
- [ ] Site está acessível pela URL do Amplify
- [ ] Todas as páginas carregam
- [ ] Formulários funcionam
- [ ] Links externos funcionam
- [ ] Não há erros no console

### Monitoramento
- [ ] Configure notificações no Amplify
- [ ] Monitore logs de build
- [ ] Configure domínio personalizado (opcional)
- [ ] Configure SSL (já vem por padrão)

### Performance em Produção
- [ ] Teste em diferentes navegadores
- [ ] Teste em diferentes dispositivos
- [ ] Verifique tempos de carregamento
- [ ] Monitore uso de recursos

## ❌ Troubleshooting

### Build Falha
1. Verifique os logs no Amplify Console
2. Teste o build localmente: `npm run build`
3. Verifique versões do Node.js
4. Confirme que todas as dependências estão instaladas

### Site não carrega
1. Verifique se o build completou com sucesso
2. Confirme o diretório de output: `dist/public`
3. Verifique regras de redirecionamento
4. Confirme que variáveis de ambiente estão configuradas

### Variáveis de ambiente não funcionam
1. No frontend, use prefixo `VITE_` para variáveis acessíveis
2. Refaça o deploy após adicionar variáveis
3. Verifique se não há typos nos nomes

## 📚 Recursos

- [Guia Completo de Deploy](./AWS_AMPLIFY_DEPLOY.md)
- [Documentação AWS Amplify](https://docs.aws.amazon.com/amplify/)
- [Amplify CLI Guide](https://docs.amplify.aws/cli/)

---

**👍 Boa sorte com seu deploy!**

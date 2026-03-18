# Deploy na AWS Amplify - Guia Completo

Este guia mostra como fazer deploy do projeto Qode7 na AWS Amplify.

## 📋 Pré-requisitos

- Conta AWS ativa
- Repositório Git (GitHub, GitLab ou Bitbucket)
- Código commitado e pushed para o repositório

## 🚀 Passo a Passo para Deploy

### 1. Preparar o Repositório

Certifique-se de que todo o código está commitado:

```bash
git add .
git commit -m "Preparar projeto para AWS Amplify"
git push origin main
```

### 2. Acessar o AWS Amplify Console

1. Acesse [AWS Console](https://console.aws.amazon.com/)
2. Procure por "Amplify" no campo de busca
3. Clique em "AWS Amplify"
4. Clique em "Get Started" ou "New app"

### 3. Conectar o Repositório

1. Escolha seu provedor Git (GitHub, GitLab, Bitbucket)
2. Autorize o AWS Amplify a acessar seus repositórios
3. Selecione o repositório do projeto Qode7
4. Selecione o branch que deseja fazer deploy (geralmente `main`)

### 4. Configurar Build Settings

O Amplify detectará automaticamente o arquivo `amplify.yml`. Verifique se as configurações estão corretas:

- **Build command**: `npm run build`
- **Output directory**: `dist/public`
- **Node version**: 20

Se necessário, você pode editar o `amplify.yml` diretamente.

### 5. Configurar Variáveis de Ambiente

No console do Amplify, vá para "Environment variables" e adicione as seguintes variáveis:

**Variáveis Essenciais:**

```
NODE_ENV=production
NODE_VERSION=20
```

**Variáveis de Email (se usar funcionalidade de agendamento):**

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-de-app
```

**Variáveis do Google Calendar (se configurado):**

```
GOOGLE_CLIENT_ID=seu-client-id
GOOGLE_CLIENT_SECRET=seu-client-secret
GOOGLE_REFRESH_TOKEN=seu-refresh-token
```

> **Nota**: Para Gmail, você precisa criar uma "senha de app" nas configurações de segurança do Google.

### 6. Configurações Avançadas (Opcional)

#### Configurar Domínio Personalizado

1. No console do Amplify, vá para "Domain management"
2. Clique em "Add domain"
3. Siga as instruções para configurar DNS

#### Configurar Redirecionamentos

O arquivo `amplify.yml` já inclui configuração de SPA (Single Page Application).
Se precisar de redirecionamentos adicionais, adicione em "Rewrites and redirects".

### 7. Iniciar o Deploy

1. Revise todas as configurações
2. Clique em "Save and deploy"
3. Aguarde o processo de build e deploy (5-10 minutos)

## 🔧 Sobre o Backend (API)

**Importante**: O AWS Amplify Hosting é principalmente para aplicações frontend. O backend Express.js deste projeto **NÃO** será deployado automaticamente.

### Opções para o Backend:

#### Opção 1: AWS Lambda + API Gateway (Recomendado)
Converta o Express para funcionar em Lambda. Você pode usar o framework Serverless:

```bash
npm install -g serverless
serverless deploy
```

#### Opção 2: AWS Elastic Beanstalk
Para manter o Express como está:

1. Acesse AWS Elastic Beanstalk
2. Crie uma nova aplicação Node.js
3. Faça upload do código do servidor
4. Configure as variáveis de ambiente

#### Opção 3: AWS ECS/Fargate
Se preferir usar containers:

1. Crie um Dockerfile para o backend
2. Use AWS ECS ou Fargate
3. Configure o Application Load Balancer

#### Opção 4: EC2
Para controle total:

1. Lance uma instância EC2
2. Instale Node.js
3. Clone o repositório e rode o servidor

### Conectar Frontend ao Backend

Depois de fazer deploy do backend, atualize a variável de ambiente no Amplify:

```
VITE_API_URL=https://sua-api-url.com
```

## 📊 Monitoramento

No console do Amplify você pode:

- Ver logs de build
- Monitorar métricas de performance
- Configurar notificações
- Ver histórico de deploys

## 🔄 Deploys Automáticos

O Amplify está configurado para fazer deploy automático sempre que você der push no branch configurado:

```bash
git add .
git commit -m "Atualização"
git push origin main
```

O Amplify detectará a mudança e iniciará um novo build automaticamente.

## 🛠️ Troubleshooting

### Build Falha

1. Verifique os logs de build no console do Amplify
2. Teste o build localmente: `npm run build`
3. Verifique se todas as dependências estão no `package.json`

### Variáveis de Ambiente Não Funcionam

1. Certifique-se de que as variáveis começam com `VITE_` para serem acessíveis no frontend
2. Após adicionar variáveis, faça um novo deploy

### Problemas de Roteamento

1. Verifique se o `amplify.yml` está configurado corretamente
2. Adicione regras de rewrite se necessário

## 📝 Checklist de Deploy

- [ ] Código commitado e pushed
- [ ] `amplify.yml` criado
- [ ] Conectado ao repositório no Amplify
- [ ] Variáveis de ambiente configuradas
- [ ] Build executado com sucesso
- [ ] Site acessível pelo URL do Amplify
- [ ] Backend deployado (se necessário)
- [ ] Domínio personalizado configurado (opcional)
- [ ] SSL/HTTPS funcionando
- [ ] Testes realizados em produção

## 🎉 Pronto!

Seu projeto Qode7 está no ar na AWS Amplify!

URL padrão: `https://[branch-name].[app-id].amplifyapp.com`

## 📚 Recursos Adicionais

- [Documentação AWS Amplify](https://docs.aws.amazon.com/amplify/)
- [Amplify Hosting Guide](https://docs.aws.amazon.com/amplify/latest/userguide/getting-started.html)
- [Environment Variables](https://docs.aws.amazon.com/amplify/latest/userguide/environment-variables.html)

import { ChevronRight } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted pt-24 pb-20">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <span>Home</span>
            <ChevronRight size={16} />
            <span className="text-primary font-semibold">Política de Privacidade</span>
          </div>
          <h1 className="text-5xl font-black text-foreground mb-4">Política de Privacidade</h1>
          <p className="text-lg text-muted-foreground">Última atualização: 18 de fevereiro de 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introduction */}
          <section className="bg-foreground/5 border border-border/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Introdução</h2>
            <p className="text-muted-foreground leading-relaxed">
              A qodeseven ("nós", "nosso" ou "nossa") respeita a privacidade de nossos usuários ("usuário" ou "você"). Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você visita nosso website e utiliza nossos serviços.
            </p>
          </section>

          {/* 1. Informações que Coletamos */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Informações que Coletamos</h2>
            <div className="space-y-4">
              <div className="bg-foreground/5 border-l-2 border-primary p-4 rounded">
                <h3 className="font-bold text-foreground mb-2">Informações Pessoais</h3>
                <p className="text-muted-foreground text-sm">
                  Nome, endereço de email, número de telefone, empresa e outras informações que você voluntariamente fornece quando preenche formulários, entra em contato conosco ou se registra para nossos serviços.
                </p>
              </div>
              <div className="bg-foreground/5 border-l-2 border-accent p-4 rounded">
                <h3 className="font-bold text-foreground mb-2">Informações de Dispositivo</h3>
                <p className="text-muted-foreground text-sm">
                  Tipo de navegador, endereço IP, sistema operacional, páginas visitadas e informações de cliques. Coletamos essas informações automaticamente através de tecnologias como cookies e análise web.
                </p>
              </div>
              <div className="bg-foreground/5 border-l-2 border-emerald-500 p-4 rounded">
                <h3 className="font-bold text-foreground mb-2">Informações de Interação</h3>
                <p className="text-muted-foreground text-sm">
                  Dados sobre como você interage com nosso website, incluindo tempo gasto, páginas visitadas e recursos utilizados.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Como Usamos as Informações */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Como Usamos as Informações</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Fornecer, operar e manter nosso website e serviços</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Melhorar, personalizar e expandir nosso website e serviços</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Comunicar-se com você, incluindo responder suas dúvidas e enviar atualizações</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Processar suas transações e enviar informações relacionadas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Gerar análises e entender o uso do website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Detectar, prevenir e abordar fraudes, abuso e outras questões de segurança</span>
              </li>
            </ul>
          </section>

          {/* 3. Proteção de Dados */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Proteção de Dados</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Implementamos medidas de segurança apropriadas projetadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Criptografia SSL/TLS para dados em trânsito</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Firewalls e sistemas de detecção de intrusão</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Backups regulares e redundância de dados</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                <span>Acesso restrito a informações pessoais</span>
              </li>
            </ul>
          </section>

          {/* 4. Compartilhamento de Dados */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar informações apenas:
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2">
                <span className="font-bold text-foreground">•</span>
                <span>Com prestadores de serviços que nos auxiliam na operação do website (sob acordos de confidencialidade)</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-foreground">•</span>
                <span>Quando exigido por lei ou em resposta a solicitações legais válidas</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-foreground">•</span>
                <span>Para proteger nossos direitos, privacidade, segurança ou propriedade</span>
              </li>
            </ul>
          </section>

          {/* 5. Seus Direitos */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Seus Direitos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você tem o direito de:
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Acessar as informações pessoais que mantemos sobre você</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Corrigir informações imprecisas ou incompletas</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Solicitar a exclusão de suas informações pessoais</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Optar por não receber comunicações de marketing</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">→</span>
                <span>Revogar sua permissão para processamento de dados</span>
              </li>
            </ul>
          </section>

          {/* 6. Contato */}
          <section className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Entre em Contato</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Se você tem dúvidas sobre esta Política de Privacidade ou nossas práticas de privacidade, por favor entre em contato conosco:
            </p>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold text-foreground">Email:</span> <span className="text-muted-foreground">privacy@qodeseven.com</span></p>
              <p><span className="font-semibold text-foreground">Telefone:</span> <span className="text-muted-foreground">+55 (11) 91615-5584</span></p>
              <p><span className="font-semibold text-foreground">Endereço:</span> <span className="text-muted-foreground">São Paulo, SP, Brasil</span></p>
            </div>
          </section>

          {/* Last Update */}
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>Esta Política de Privacidade foi atualizada pela última vez em 18 de fevereiro de 2026.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

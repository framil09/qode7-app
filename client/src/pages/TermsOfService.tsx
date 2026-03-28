import { ChevronRight, FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted pt-24 pb-20">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <span>Home</span>
            <ChevronRight size={16} />
            <span className="text-primary font-semibold">Termos de Serviço</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <FileText size={32} className="text-primary" />
            <h1 className="text-5xl font-black text-foreground">Termos de Serviço</h1>
          </div>
          <p className="text-lg text-muted-foreground">Última atualização: 18 de fevereiro de 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-foreground/5 border border-border/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Bem-vindo aos Termos de Serviço</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estes Termos de Serviço ("Termos") constituem um contrato vinculativo entre você ("Usuário", "você") e a qodeseven ("Empresa", "nós", "nosso"). Ao acessar e usar nosso website, você concorda em cumprir estes Termos. Se você não concorda, não use nossos serviços.
            </p>
          </section>

          {/* 1. Descrição do Serviço */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Descrição do Serviço</h2>
            <div className="bg-foreground/5 border-l-2 border-primary p-6 rounded">
              <p className="text-muted-foreground leading-relaxed mb-4">
                A qodeseven fornece serviços de desenvolvimento de software, incluindo:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-foreground">•</span>
                  <span>Desenvolvimento Web e Mobile</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-foreground">•</span>
                  <span>Design e UX/UI</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-foreground">•</span>
                  <span>Consultoria em Tecnologia</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-foreground">•</span>
                  <span>Suporte e Manutenção</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-foreground">•</span>
                  <span>Outras soluções digitais personalizadas</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 2. Direitos de Uso */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Direitos de Uso</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ao usar nosso website, você concorda em:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Usar o website apenas para fins legais e legítimos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Não interferir com a segurança do website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Não tentar obter acesso não autorizado ao website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Respeitar a propriedade intelectual do conteúdo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Não fornecer informações falsas ou enganosas</span>
              </li>
            </ul>
          </section>

          {/* 3. Propriedade Intelectual */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Propriedade Intelectual</h2>
            <div className="bg-foreground/5 border-l-4 border-accent p-6 rounded">
              <h3 className="font-bold text-foreground mb-2">Conteúdo Proprietário</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Todo o conteúdo do website, incluindo texto, gráficos, logos, imagens e software, é propriedade da qodeseven ou de seus fornecedores de conteúdo e é protegido por leis de direitos autorais internacionais.
              </p>
              <h3 className="font-bold text-foreground mb-2">Restrições</h3>
              <p className="text-muted-foreground text-sm">
                Você não pode reproduzir, modificar, distribuir ou transmitir qualquer conteúdo do website sem permissão prévia por escrito da qodeseven.
              </p>
            </div>
          </section>

          {/* 4. Limitação de Responsabilidade */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Na máxima extensão permitida pela lei, a qodeseven não será responsável por:
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2">
                <span className="font-bold text-foreground">•</span>
                <span>Danos indiretos, incidentais, especiais ou consequentes</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-foreground">•</span>
                <span>Perda de dados, lucros ou receita</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-foreground">•</span>
                <span>Erros ou omissões no conteúdo</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-foreground">•</span>
                <span>Acesso não autorizado ou alteração de suas transmissões</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-foreground">•</span>
                <span>Qualquer outro assunto relacionado ao serviço</span>
              </li>
            </ul>
          </section>

          {/* 5. Indenização */}
          <section className="bg-foreground/5 border border-border/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Indenização</h2>
            <p className="text-muted-foreground leading-relaxed">
              Você concorda em indenizar, defender e manter inofensiva a qodeseven e seus diretores, funcionários e agentes de quaisquer reclamações, danos, perdas, responsabilidades e despesas decorrentes de seu uso do website ou violação destes Termos.
            </p>
          </section>

          {/* 6. Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O website é fornecido "como está" e "conforme disponível". A qodeseven não faz garantias, expressas ou implícitas, quanto ao website ou ao conteúdo. Isso inclui:
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Garantias de comercialidade ou adequação a um propósito específico</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Garantias de títulos ou não violação</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Garantias de disponibilidade contínua do website</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Que o website está livre de erros ou vírus</span>
              </li>
            </ul>
          </section>

          {/* 7. Modificações do Website */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Modificações do Website</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamos o direito de modificar, suspender ou descontinuar o website no todo ou em parte, a qualquer momento, sem aviso prévio. Não somos responsáveis por qualquer inexatidão, omissão, conclusão enganosa ou perda do website.
            </p>
          </section>

          {/* 8. Links Externos */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Links Externos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nosso website pode conter links para websites de terceiros. Não somos responsáveis pelo conteúdo, precisão ou práticas desses sites externos. O acesso a qualquer link externo se dá por conta e risco do usuário.
            </p>
          </section>

          {/* 9. Lei Aplicável */}
          <section className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Lei Aplicável</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estes Termos de Serviço são regidos e interpretados de acordo com as leis de São Paulo, Brasil, sem considerar seus conflitos de Lei.
            </p>
            <p className="text-muted-foreground text-sm">
              Qualquer ação legal ou arbitragem decorrente destes Termos deverá ser trazida nas cortes localizadas em São Paulo, Brasil.
            </p>
          </section>

          {/* 10. Contato */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Entre em Contato</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Se você tiver dúvidas ou preocupações sobre estes Termos de Serviço, entre em contato conosco:
            </p>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold text-foreground">Email:</span> <span className="text-muted-foreground">legal@qodeseven.com</span></p>
              <p><span className="font-semibold text-foreground">Telefone:</span> <span className="text-muted-foreground">+55 (11) 91615-5584</span></p>
              <p><span className="font-semibold text-foreground">WhatsApp:</span> <span className="text-muted-foreground">+55 (11) 91615-5584</span></p>
            </div>
          </section>

          {/* 11. Alterações aos Termos */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Alterações aos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservamos o direito de modificar estes Termos a qualquer hora. Alterações material entrarão em vigência quando publicadas no website. Seu uso continuado do website após as alterações constitui aceitação dos novos Termos.
            </p>
          </section>

          {/* Last Update */}
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>Estes Termos de Serviço foram atualizados pela última vez em 18 de fevereiro de 2026.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

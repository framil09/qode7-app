import { ChevronRight, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted pt-24 pb-20">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <span>Home</span>
            <ChevronRight size={16} />
            <span className="text-primary font-semibold">Política de Cookies</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Cookie size={32} className="text-accent" />
            <h1 className="text-5xl font-black text-foreground">Política de Cookies</h1>
          </div>
          <p className="text-lg text-muted-foreground">Última atualização: 18 de fevereiro de 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-foreground/5 border border-border/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">O que são Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita nosso website. Eles servem para melhorar sua experiência de navegação, lembrando suas preferências e atividades. Usando nosso website, você consente com o uso de cookies de acordo com esta Política de Cookies.
            </p>
          </section>

          {/* 1. Tipos de Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">1. Tipos de Cookies que Usamos</h2>
            <div className="space-y-4">
              <div className="bg-foreground/5 border-l-4 border-primary p-6 rounded">
                <h3 className="font-bold text-foreground mb-2 text-lg">🔒 Cookies Essenciais</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Necessários para o funcionamento básico do website. Sem estes cookies, o website não funcionará corretamente.
                </p>
                <p className="text-xs text-muted-foreground">Exemplos: autenticação, preferências de segurança, carregamento de página</p>
              </div>

              <div className="bg-foreground/5 border-l-4 border-accent p-6 rounded">
                <h3 className="font-bold text-foreground mb-2 text-lg">📊 Cookies de Análise</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Nos ajudam a entender como você usa o website. Coletamos dados agregados sobre o uso do site.
                </p>
                <p className="text-xs text-muted-foreground">Exemplos: Google Analytics, rastreamento de páginas vistas, tempo na página</p>
              </div>

              <div className="bg-foreground/5 border-l-4 border-emerald-500 p-6 rounded">
                <h3 className="font-bold text-foreground mb-2 text-lg">✨ Cookies de Preferência</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Recordam suas escolhas e preferências para personalizar sua experiência no website.
                </p>
                <p className="text-xs text-muted-foreground">Exemplos: preferência de idioma, modo escuro/claro, dados de formulário</p>
              </div>

              <div className="bg-foreground/5 border-l-4 border-blue-500 p-6 rounded">
                <h3 className="font-bold text-foreground mb-2 text-lg">🎯 Cookies de Marketing</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Usados para fornecer anúncios relevantes baseados em seus interesses. Completamente opcionais.
                </p>
                <p className="text-xs text-muted-foreground">Exemplos: rastreamento de comportamento, anúncios personalizados</p>
              </div>
            </div>
          </section>

          {/* 2. Como Usamos Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Como Usamos Cookies</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Manter você conectado durante sua visita</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Lembrar suas preferências e configurações</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Analisar o desempenho e uso do website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Melhorar a segurança e prevenção de fraudes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Entender o tratamento de dados pessoais</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Fornecer conteúdo e anúncios personalizados</span>
              </li>
            </ul>
          </section>

          {/* 3. Cookies de Terceiros */}
          <section className="bg-foreground/5 border border-border/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Cookies de Terceiros</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Alguns cookies podem ser colocados por serviços de terceiros que usamos, como:
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm space-y-2">
              <li className="flex gap-2">
                <span className="font-bold text-foreground">•</span>
                <span><strong>Google Analytics:</strong> Para análise de tráfego</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-foreground">•</span>
                <span><strong>Google Ads:</strong> Para publicidade direcionada</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-foreground">•</span>
                <span><strong>Facebook Pixel:</strong> Para rastreamento de conversão</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-foreground">•</span>
                <span><strong>Provedor de Chat:</strong> Para suporte ao cliente</span>
              </li>
            </ul>
            <p className="text-muted-foreground text-sm mt-4">
              Estes terceiros têm suas próprias políticas de cookies. Não temos controle sobre cookies de terceiros.
            </p>
          </section>

          {/* 4. Controles de Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Como Controlar Seus Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você pode controlar e/ou deletar cookies como desejar. Você pode deletar todos os cookies já presentes no seu computador e configurar a maioria dos navegadores para evitar que eles sejam colocados no futuro. No entanto, se fizer isso, você pode ter que ajustar manualmente algumas preferências cada vez que visitar nosso website.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-foreground/5 p-4 rounded border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">🔧 Navegadores Principais</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Chrome: Configurações → Privacidade e segurança</li>
                  <li>• Firefox: Opções → Privacidade e segurança</li>
                  <li>• Safari: Preferências → Privacidade</li>
                  <li>• Edge: Configurações → Privacidade</li>
                </ul>
              </div>
              <div className="bg-foreground/5 p-4 rounded border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">🛡️ Ferramentas de Privacidade</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
                  <li>• <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Digital Advertising Alliance</a></li>
                  <li>• <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Cookie Banner */}
          <section className="bg-gradient-to-r from-accent/10 to-primary/10 border border-border/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookie Banner</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Na sua primeira visita ao nosso website, você verá um banner informando sobre os cookies. Você pode:
            </p>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong>Aceitar Todos:</strong> Aceitar todos os tipos de cookies</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong>Rejeitar Não-Essenciais:</strong> Apenas cookies essenciais</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong>Personalizar:</strong> Escolher quais cookies deseja aceitar</span>
              </div>
            </div>
          </section>

          {/* 6. Alterações Nesta Política */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Alterações Nesta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos atualizar esta Política de Cookies periodicamente. A versão mais recente sempre será publicada em nosso website. Alterações significativas serão comunicadas por email ou através de um aviso proeminente no website.
            </p>
          </section>

          {/* 7. Contato */}
          <section className="bg-gradient-to-r from-primary/10 to-accent/10 border border-border/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Entre em Contato</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tem dúvidas sobre nossa Política de Cookies? Entre em contato:
            </p>
            <div className="space-y-2 text-sm">
              <p><span className="font-semibold text-foreground">Email:</span> <span className="text-muted-foreground">cookies@qodeseven.com</span></p>
              <p><span className="font-semibold text-foreground">Telefone:</span> <span className="text-muted-foreground">+55 (11) 91615-5584</span></p>
            </div>
          </section>

          {/* Last Update */}
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>Esta Política de Cookies foi atualizada pela última vez em 18 de fevereiro de 2026.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Facebook, Linkedin, Twitter, Github, CheckCircle2, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background via-primary/2 to-foreground/3 border-t border-border/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl opacity-0 animate-pulse" style={{animation: 'pulse 8s ease-in-out infinite'}} />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl opacity-0 animate-pulse" style={{animation: 'pulse 10s ease-in-out infinite 2s'}} />

      <div className="container relative z-10">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 py-12 mb-8 border-b border-border/50">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full opacity-60" style={{ background: 'linear-gradient(135deg, #0F3A7D30, #10B98130)', filter: 'blur(8px)' }} />
                <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg" style={{ border: '2px solid rgba(15, 58, 125, 0.25)' }}>
                  <img src="/logo-qode7.jpeg" alt="Qode7 Logo" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-background" style={{ backgroundColor: '#10B981' }} />
              </div>
              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-bold text-xl leading-tight" style={{ color: '#0F3A7D', letterSpacing: '-0.03em' }}>Qode</span>
                  <span className="font-bold text-xl leading-tight" style={{ color: '#10B981', letterSpacing: '-0.03em' }}>7</span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest block mt-0.5" style={{ color: '#6B7280' }}>Digital Solutions</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {t("footer.companyDescription")}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="p-3 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                title="Twitter"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg"
                title="Facebook"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
            <div className="text-xs text-muted-foreground">
              <CheckCircle2 size={14} className="inline text-emerald-600 mr-1" />
              {t("hero.tag")}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-widest">{t("footer.services")}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-flex items-center gap-1 group">
                  Sistemas Personalizados
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-flex items-center gap-1 group">
                  Apps Mobile
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-flex items-center gap-1 group">
                  Websites
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-flex items-center gap-1 group">
                  Consultoria Digital
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-widest">{t("footer.company_section")}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-flex items-center gap-1 group">
                  Sobre Nós
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-flex items-center gap-1 group">
                  Portfólio
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-flex items-center gap-1 group">
                  Contato
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-flex items-center gap-1 group">
                  Blog
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-widest">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-flex items-center gap-1 group">
                  Política de Privacidade
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-flex items-center gap-1 group">
                  Termos de Serviço
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-flex items-center gap-1 group">
                  Cookies
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex justify-center items-center">
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group">
            <span className="text-primary text-lg group-hover:scale-110 transition-transform">&lt;/&gt;</span>
            <span className="text-muted-foreground">©</span>
            <span className="font-bold text-foreground">{currentYear}</span>
            <div className="w-px h-4 bg-primary/20"></div>
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent font-black text-lg tracking-tight group-hover:from-primary group-hover:via-cyan-400 group-hover:to-primary transition-all duration-500">Qode7</span>
            <span className="text-primary text-lg group-hover:scale-110 transition-transform">&lt;/&gt;</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

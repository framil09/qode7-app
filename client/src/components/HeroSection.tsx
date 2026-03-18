import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Check, Zap, Globe, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScheduleMeeting } from "@/contexts/ScheduleMeetingContext";

export default function HeroSection() {
  const { t } = useTranslation();
  const { openDialog } = useScheduleMeeting();
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-24 pb-20 md:pt-40 md:pb-32">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-0 animate-pulse" style={{animation: 'pulse 4s ease-in-out infinite'}} />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-0 animate-pulse" style={{animation: 'pulse 6s ease-in-out infinite 1s'}} />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-0 animate-pulse" style={{animation: 'pulse 8s ease-in-out infinite 2s'}} />

      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://private-us-east-1.manuscdn.com/sessionFile/HoOVmJgxWp7OtakNJGNXBQ/sandbox/f546qranRpGremkZEP4WMr-img-1_1771459282000_na1fn_aGVyby1zeXN0ZW1zLWRldmVsb3BtZW50.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSG9PVm1KZ3hXcDdPdGFrTkpHTlhCUS9zYW5kYm94L2Y1NDZxcmFuUnBHcmVta1pFUDRXTXItaW1nLTFfMTc3MTQ1OTI4MjAwMF9uYTFmbl9hR1Z5YnkxemVYTjBaVzF6TFdSbGRtVnNiM0J0Wlc1MC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=R4ruBHQ3HwUTEYM72wxdi~XqLQQuSWBpL2g2D9fDw6BFHU~468LsmL9ywjiJSRwyNaciHSrhvy1pAGJrEBd3sY8zdzVkcN0B6Cg4Bs6z6sITGb87cA~WgPLw3Fxm-SMbh6yxil0EYJCfr4UH3GIyXLkzfBuYZ5YdpkuHa0u9pxvwc93iBxSwdgVfd5EzSg9ATdgiAyCuRGXQSdxmNq94IFOjCWZdyLwzVeoM9aeN69xGJYTmkZ442iGRUGBovHNrULPwU5-N1zJHFdHyFNJCay0yNqAwNdbIh7VrGFpsEblwTzMFNcdTliNYoTMO6n32KR59C6PELP~ZyTsSdbazAg__')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 to-white/75 dark:from-background/90 dark:to-background/85" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2.5 rounded-full bg-gradient-to-r from-accent/15 to-primary/15 border border-accent/40 hover:border-accent/70 transition-all cursor-pointer group">
            <Sparkles size={16} className="text-accent group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold text-accent">
              {t("hero.tag")}
            </span>
          </div>

          {/* Title - More Impactful */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 leading-tight tracking-tight">
            {t("hero.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-emerald-600 animate-pulse relative block">
              {t("hero.highlight")}
            </span>
          </h1>

          {/* Description - More Compelling */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-medium max-w-2xl">
            {t("hero.description")}
          </p>

          {/* Services Tags - Enhanced */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="group inline-flex items-center gap-2 px-4 py-2 bg-primary/12 hover:bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30 hover:border-primary/60 transition-all cursor-pointer">
              <Check size={16} className="group-hover:scale-110 transition-transform" /> 
              {t("services.web.title")}
            </div>
            <div className="group inline-flex items-center gap-2 px-4 py-2 bg-accent/12 hover:bg-accent/20 text-accent rounded-full text-sm font-semibold border border-accent/30 hover:border-accent/60 transition-all cursor-pointer">
              <Check size={16} className="group-hover:scale-110 transition-transform" /> 
              {t("services.app.title")}
            </div>
            <div className="group inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/12 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-semibold border border-indigo-500/30 hover:border-indigo-500/60 transition-all cursor-pointer">
              <Check size={16} className="group-hover:scale-110 transition-transform" /> 
              {t("services.ecommerce.title")}
            </div>
          </div>

          {/* CTA Buttons - More Urgent */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              onClick={openDialog}
              className="bg-gradient-to-r from-accent to-emerald-600 hover:from-accent/95 hover:to-emerald-600/95 text-white font-bold flex items-center gap-2 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-base h-14"
            >
              <Zap size={20} />
              {t("hero.cta")} <ArrowRight size={20} />
            </Button>
            <Button
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary/10 font-bold rounded-lg transition-all h-14 text-base"
            >
              {t("hero.secondary")}
            </Button>
          </div>

          {/* Key Benefits Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 p-6 bg-white/40 dark:bg-foreground/10 backdrop-blur-sm border border-border/50 rounded-2xl">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/20 rounded-lg mt-1">
                <Zap size={18} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Rápido & Ágil</p>
                <p className="text-xs text-muted-foreground">Sem burocracias</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent/20 rounded-lg mt-1">
                <Shield size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Código Premium</p>
                <p className="text-xs text-muted-foreground">Qualidade garantida</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-indigo-500/20 rounded-lg mt-1">
                <Globe size={18} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Suporte 24/7</p>
                <p className="text-xs text-muted-foreground">Sempre disponível</p>
              </div>
            </div>
          </div>

          {/* Trust Indicators - Enhanced */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/50">
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform origin-left">
                  50+
                </p>
                <Zap size={20} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm font-semibold text-foreground">Projetos Entregues</p>
              <p className="text-xs text-muted-foreground mt-1">Com 99% de satisfação</p>
            </div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform origin-left">
                  30+
                </p>
                <Shield size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm font-semibold text-foreground">Clientes Felizes</p>
              <p className="text-xs text-muted-foreground mt-1">95% são recorrentes</p>
            </div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform origin-left">
                  8+
                </p>
                <Globe size={20} className="text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm font-semibold text-foreground">Anos de Aceitação</p>
              <p className="text-xs text-muted-foreground mt-1">Líderes em inovação</p>
            </div>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform origin-left">
                  24/7
                </p>
                <Check size={20} className="text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm font-semibold text-foreground">Suporte Dedicado</p>
              <p className="text-xs text-muted-foreground mt-1">Sempre para você</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">Scroll</span>
          <svg className="w-6 h-6 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

import { Mail, Phone, MessageCircle, Clock, CheckCircle2, ArrowRight, Shield, Users, Zap, Rocket, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 99622-1995",
      href: "tel:+5511996221995",
      description: "Chamada direta",
      time: "Seg-Sex 9h-18h",
      color: "from-blue-600 to-blue-500",
      bgGradient: "from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900",
      icon_bg: "bg-blue-100 dark:bg-blue-900",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+55 (11) 91615-5584",
      href: "https://wa.me/5511916155584?text=Olá! Gostaria de saber mais sobre os serviços da qodeseven.",
      description: "Chat instantâneo",
      time: "Resposta imediata",
      color: "from-emerald-600 to-emerald-500",
      bgGradient: "from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900",
      icon_bg: "bg-emerald-100 dark:bg-emerald-900",
      isWhatsApp: true,
    },
    {
      icon: Mail,
      title: "Email",
      value: "comercial@qode7.com",
      href: "mailto:comercial@qode7.com",
      description: "Mensagem profissional",
      time: "Resposta em até 2h",
      color: "from-amber-600 to-amber-500",
      bgGradient: "from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900",
      icon_bg: "bg-amber-100 dark:bg-amber-900",
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Resposta em 2 Horas",
      description: "Respondemos rapidamente para entender seu projeto",
      color: "from-yellow-600 to-orange-600",
      icon_color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Rocket,
      title: "Projetos Escaláveis",
      description: "Soluções que crescem com seu negócio",
      color: "from-blue-600 to-cyan-600",
      icon_color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Shield,
      title: "Código Seguro",
      description: "Desenvolvimento com altos padrões de qualidade",
      color: "from-emerald-600 to-teal-600",
      icon_color: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Users,
      title: "Equipe Dedicada",
      description: "Suporte contínuo durante e após o projeto",
      color: "from-purple-600 to-pink-600",
      icon_color: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Target,
      title: "Resultado Garantido",
      description: "Entrega no prazo com qualidade premium",
      color: "from-red-600 to-pink-600",
      icon_color: "text-red-600 dark:text-red-400",
    },
    {
      icon: CheckCircle2,
      title: "100% Personalizado",
      description: "Cada projeto é único e sob medida",
      color: "from-green-600 to-emerald-600",
      icon_color: "text-green-600 dark:text-green-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-foreground/1 to-foreground/3 relative overflow-hidden pt-8">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl opacity-0 animate-pulse" style={{animation: 'pulse 8s ease-in-out infinite'}} />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl opacity-0 animate-pulse" style={{animation: 'pulse 10s ease-in-out infinite 2s'}} />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl opacity-0 animate-pulse" style={{animation: 'pulse 12s ease-in-out infinite 4s'}} />

      {/* Main Section */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="container max-w-6xl">
          
          {/* Hero Heading */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block mb-6 animate-bounce" style={{animation: 'bounce 2s infinite'}}>
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-emerald-500/10 text-primary font-bold rounded-full text-sm border border-primary/30 backdrop-blur">
                {t("contact.tag")}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t("contact.title")}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-500 to-primary animate-pulse" style={{animation: 'pulse 3s ease-in-out infinite'}}>
                {t("contact.highlight")}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              {t("contact.description")}
            </p>
          </div>

          {/* Hours Section */}
          <div className="bg-gradient-to-r from-primary/15 via-emerald-500/10 to-primary/15 border border-primary/30 rounded-2xl p-8 md:p-12 mb-16 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                    <Clock size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t("contact.hours")}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t("contact.hoursDescription")}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-white/70 dark:bg-foreground/10 rounded-xl border border-emerald-300/50 hover:border-emerald-500/50 transition-colors">
                    <CheckCircle2 size={20} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 animate-pulse" />
                    <div>
                      <p className="font-bold text-foreground">{t("contact.weekdays")}</p>
                      <p className="text-sm text-muted-foreground">{t("contact.weekdaysTime")}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/40 dark:bg-foreground/5 rounded-xl border border-yellow-300/30">
                    <Clock size={20} className="text-yellow-600 dark:text-yellow-500 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">{t("contact.weekend")}</p>
                      <p className="text-sm text-muted-foreground">{t("contact.weekendMessage")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-px h-56 bg-gradient-to-b from-primary/30 via-primary/50 to-emerald-500/30" />

              <div className="text-center">
                <div className="inline-block relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 via-emerald-500/40 to-primary/40 rounded-3xl blur-2xl opacity-70 animate-pulse" />
                  <div className="relative bg-gradient-to-br from-white to-primary/5 dark:from-foreground/20 dark:to-foreground/5 rounded-3xl p-8 backdrop-blur border border-primary/30">
                    <p className="text-xs text-muted-foreground mb-2 uppercase tracking-widest font-bold">{t("contact.responseTime")}</p>
                    <div className="mb-6">
                      <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">2h</p>
                      <p className="text-xs text-muted-foreground mt-2">{t("contact.responseEmail")}</p>
                    </div>
                    <hr className="my-5 border-border/30" />
                    <p className="text-xs text-muted-foreground mb-2 font-semibold">WhatsApp & Telefone</p>
                    <p className="font-bold text-lg text-emerald-600 dark:text-emerald-400">{t("contact.responseInstant")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a key={index} href={method.href} target={method.isWhatsApp ? "_blank" : undefined} rel={method.isWhatsApp ? "noopener noreferrer" : undefined} className="group">
                  <div className={`bg-gradient-to-br ${method.bgGradient} border border-border/50 rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer backdrop-blur`}>
                    <div className={`w-16 h-16 ${method.icon_bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={32} className={`text-transparent bg-clip-text bg-gradient-to-r ${method.color}`} />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {method.description}
                    </p>

                    <div className="mb-6 p-3 bg-white/50 dark:bg-foreground/5 rounded-lg border border-border/30 group-hover:border-primary/30 transition-colors">
                      <p className="font-bold text-foreground group-hover:text-primary transition-colors">{method.value}</p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/50 dark:bg-foreground/10 rounded-full">
                      <Clock size={14} className="text-primary" />
                      <span className="text-xs font-semibold text-muted-foreground">{method.time}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t("contact.benefits")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">{t("contact.whyChoose")}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t("contact.whyDescription")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const titleKey = `contact.benefit${index + 1}`;
                const descKey = `contact.benefit${index + 1}Desc`;
                return (
                  <div key={index} className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 bg-white/50 dark:bg-foreground/5 backdrop-blur p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon size={28} className={benefit.icon_color} />
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{t(titleKey)}</h3>
                      <p className="text-muted-foreground leading-relaxed">{t(descKey)}</p>

                      <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-semibold">{t("contact.readMore")}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary/20 via-emerald-500/20 to-primary/20 border border-primary/30 rounded-3xl p-8 md:p-16 text-center backdrop-blur-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {t("contact.ctaTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("contact.ctaDescription")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary via-primary to-emerald-600 hover:from-primary/90 hover:via-primary/90 hover:to-emerald-600/90 text-primary-foreground font-bold rounded-lg h-14 text-base shadow-lg hover:shadow-2xl transition-all"
              >
                <a href="https://wa.me/5511916155584?text=Olá! Gostaria de saber mais sobre os serviços da qodeseven." target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} />
                  {t("contact.whatsappBtn")}
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-lg h-14 text-base font-bold border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                <a href="tel:+5511996221995">
                  <Phone size={20} />
                  {t("contact.callBtn")}
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-lg h-14 text-base font-bold border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                <a href="mailto:comercial@qode7.com">
                  <Mail size={20} />
                  {t("contact.emailBtn")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


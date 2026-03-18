import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Rocket, CheckCircle2, Clock, Users } from "lucide-react";
import { useScheduleMeeting } from "@/contexts/ScheduleMeetingContext";
import { useTranslation } from "react-i18next";

export default function CTASection() {
  const { openDialog } = useScheduleMeeting();
  const { t } = useTranslation();
  const benefits: Array<{icon: any, title: string, description: string}> = [
    {
      icon: Zap,
      title: t("cta.benefit1"),
      description: "Começamos em dias, não semanas"
    },
    {
      icon: Users,
      title: t("cta.benefit2"),
      description: "Seu projeto, nossa prioridade"
    },
    {
      icon: CheckCircle2,
      title: t("cta.benefit3"),
      description: "100% satisfação garantida"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-40 bg-gradient-to-b from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-0 animate-pulse" style={{animation: 'pulse 4s ease-in-out infinite'}} />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl opacity-0 animate-pulse" style={{animation: 'pulse 6s ease-in-out infinite 1s'}} />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent/20 text-accent-foreground font-semibold rounded-full text-base border border-accent/40 backdrop-blur">
              {t("cta.tag")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("cta.title")}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent">
              {t("cta.contact")}
            </span>
          </h2>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed font-medium">
            {t("cta.description")}
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={20} className="text-accent" />
                  <h4 className="font-bold text-sm">{benefit.title}</h4>
                </div>
                <p className="text-xs opacity-80">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={openDialog}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold flex items-center gap-2 justify-center rounded-lg shadow-lg hover:shadow-2xl transition-all"
          >
            <Rocket size={20} />
            {t("cta.schedule")} <ArrowRight size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold rounded-lg transition-all"
          >
            <Clock size={20} />
            {t("cta.contact")}
          </Button>
        </div>
      </div>
    </section>
  );
}

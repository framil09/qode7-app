import { 
  Award, 
  Zap, 
  Users, 
  Rocket, 
  Shield, 
  TrendingUp,
  Headphones,
  Code2
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Award,
      titleKey: "about_section.highlights.experience.title",
      descriptionKey: "about_section.highlights.experience.description"
    },
    {
      icon: Zap,
      titleKey: "about_section.highlights.speed.title",
      descriptionKey: "about_section.highlights.speed.description"
    },
    {
      icon: Code2,
      titleKey: "about_section.highlights.tech.title",
      descriptionKey: "about_section.highlights.tech.description"
    },
    {
      icon: Shield,
      titleKey: "about_section.highlights.quality.title",
      descriptionKey: "about_section.highlights.quality.description"
    },
    {
      icon: Users,
      titleKey: "about_section.highlights.communication.title",
      descriptionKey: "about_section.highlights.communication.description"
    },
    {
      icon: Headphones,
      titleKey: "about_section.highlights.support.title",
      descriptionKey: "about_section.highlights.support.description"
    },
    {
      icon: Rocket,
      titleKey: "about_section.highlights.innovation.title",
      descriptionKey: "about_section.highlights.innovation.description"
    },
    {
      icon: TrendingUp,
      titleKey: "about_section.highlights.growth.title",
      descriptionKey: "about_section.highlights.growth.description"
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl"></div>
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/HoOVmJgxWp7OtakNJGNXBQ/sandbox/f546qranRpGremkZEP4WMr-img-4_1771459283000_na1fn_dGVhbS1jb2xsYWJvcmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSG9PVm1KZ3hXcDdPdGFrTkpHTlhCUS9zYW5kYm94L2Y1NDZxcmFuUnBHcmVta1pFUDRXTXItaW1nLTRfMTc3MTQ1OTI4MzAwMF9uYTFmbl9kR1ZoYlMxamIyeHNZV0p2Y21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=urPIhXCyiYVNFpvytumeU0DQUdxiy-0ox97DAecsvlGKLG0uchdniCn2dib52aAs0ZeA7CatgQeZcF-1mKIRLG2hXHjyDwpKqpW9B1fGlmXagonBK6txaeLYy3lnI9OT3hRRzgxRnTW9ZsjEIbGClXW7ua1~jB1L6uy033GmaV73QDr5MFuZgqBh5y0bJ82hfGb5XN80cKxDpqVtNy9OjnL7AP4lypFPZAaxDxc9oQfHuL2RIMo7twFNzAQc6mf-6HuQ-0I9skMPzng9RGcXiIQcfEizx4YJt2bRPqVkF3TRHzIYEc21DuogRISprmdT7MRTHPfl9avGAwcdlnPjWQ__"
                alt="Equipe qodeseven"
                className="rounded-lg shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm border border-accent/20">
                {t("about_section.whyChoose")}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Sua ideia merece <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">excelência</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos uma empresa especializada em desenvolvimento de software com foco em entregar soluções que realmente funcionam. Nosso compromisso é transformar suas ideias em produtos de qualidade, utilizando as melhores práticas do mercado.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Entrega Rápida</h4>
                  <p className="text-sm text-muted-foreground">Sprint ágil sem comprometer qualidade</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Segurança Total</h4>
                  <p className="text-sm text-muted-foreground">Seu projeto está em boas mãos</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Suporte Dedicado</h4>
                  <p className="text-sm text-muted-foreground">Sempre quando você precisa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            Diferenciais que nos destacam
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Uma combinação perfeita de experiência, tecnologia e dedicação ao seu sucesso
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="group bg-background border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
                >
                  <div className="mb-4">
                    <div className="inline-block p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                      <Icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    </div>
                  </div>
                  <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {t(highlight.titleKey)}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(highlight.descriptionKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

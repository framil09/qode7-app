import { Code2, Smartphone, Globe, Cloud, ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useScheduleMeeting } from "@/contexts/ScheduleMeetingContext";
import { useTranslation } from "react-i18next";

export default function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver();
  const { openDialog } = useScheduleMeeting();
  const { t } = useTranslation();

  const services = [
    {
      icon: Code2,
      title: "Sistemas Personalizados",
      description:
        "Desenvolvemos sistemas robustos e escaláveis adaptados às necessidades específicas do seu negócio. Arquitetura moderna, código limpo e performance otimizada.",
      features: ["Backend robusto", "Integração de APIs", "Segurança avançada"],
      badge: "Mais Popular",
      highlight: true,
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/HoOVmJgxWp7OtakNJGNXBQ/sandbox/f546qranRpGremkZEP4WMr-img-1_1771459282000_na1fn_aGVyby1zeXN0ZW1zLWRldmVsb3BtZW50.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSG9PVm1KZ3hXcDdPdGFrTkpHTlhCUS9zYW5kYm94L2Y1NDZxcmFuUnBHcmVta1pFUDRXTXItaW1nLTFfMTc3MTQ1OTI4MjAwMF9uYTFmbl9hR1Z5YnkxemVYTjBaVzF6TFdSbGRtVnNiM0J0Wlc1MC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=R4ruBHQ3HwUTEYM72wxdi~XqLQQuSWBpL2g2D9fDw6BFHU~468LsmL9ywjiJSRwyNaciHSrhvy1pAGJrEBd3sY8zdzVkcN0B6Cg4Bs6z6sITGb87cA~WgPLw3Fxm-SMbh6yxil0EYJCfr4UH3GIyXLkzfBuYZ5YdpkuHa0u9pxvwc93iBxSwdgVfd5EzSg9ATdgiAyCuRGXQSdxmNq94IFOjCWZdyLwzVeoM9aeN69xGJYTmkZ442iGRUGBovHNrULPwU5-N1zJHFdHyFNJCay0yNqAwNdbIh7VrGFpsEblwTzMFNcdTliNYoTMO6n32KR59C6PELP~ZyTsSdbazAg__",
    },
    {
      icon: Smartphone,
      title: "Aplicativos Mobile",
      description:
        "Apps iOS e Android de alta performance. Experiência do usuário intuitiva, design moderno e funcionalidades que convertem. Desenvolvidos com as melhores tecnologias.",
      features: ["iOS e Android", "UI/UX profissional", "Offline-first"],
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/HoOVmJgxWp7OtakNJGNXBQ/sandbox/f546qranRpGremkZEP4WMr-img-2_1771459295000_na1fn_bW9iaWxlLWFwcHMtc2hvd2Nhc2U.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSG9PVm1KZ3hXcDdPdGFrTkpHTlhCUS9zYW5kYm94L2Y1NDZxcmFuUnBHcmVta1pFUDRXTXItaW1nLTJfMTc3MTQ1OTI5NTAwMF9uYTFmbl9iVzlpYVd4bExXRndjSE10YzJodmQyTmhjMlUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OCHLmmkG8yv~cUaFwyrbcGO4SI3FoMDHWXENVW6sZAk5ou10UasLdIQ37dIHVSIh8ToKxVvdhfhGYgGHxT-UOiGe7JBWBilEAtzt5wouRlxJOlTa6OlUaQMm6m2oE4OtOvT7sR-x0ZtW2lEajEYVRUvHDGNnW7BZI6kC9djZ1LGFca1CJS8Fygx9zQAlPgHh8KEOEUaQIUQ2r3cB6-Z5BnVHToTFo8iqA2gczAkaGH~lehgITIWeiD7ldIYfmW57PvADXvKuAwX0h~5SKmksmzI4cFzTKFQL1Ge4LBzku2crgPL0ut2o7rQKyzqvsBXcnoGUcP~eCI6pvf8L~IWBMg__",
    },
    {
      icon: Globe,
      title: "Websites Modernos",
      description:
        "Sites responsivos, rápidos e otimizados para conversão. Design contemporâneo, SEO-friendly e com foco em experiência do usuário. Seu site, seu diferencial.",
      features: ["Responsivo", "SEO otimizado", "Performance"],
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/HoOVmJgxWp7OtakNJGNXBQ/sandbox/f546qranRpGremkZEP4WMr-img-3_1771459283000_na1fn_d2ViLXNvbHV0aW9ucy12aXN1YWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSG9PVm1KZ3hXcDdPdGFrTkpHTlhCUS9zYW5kYm94L2Y1NDZxcmFuUnBHcmVta1pFUDRXTXItaW1nLTNfMTc3MTQ1OTI4MzAwMF9uYTFmbl9kMlZpTFhOdmJIVjBhVzl1Y3kxMmFYTjFZV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=G2zVqYYdwur~stkYOnN3QYiEUI~ToYORcoYB1SgqXEUbpoxzYJUBCaq9z~1ufOE4v5yO9Opih0c0oklMEr8oE5ebqpx2uvnEiA8fKif6KyWDXnR-s1mWe3uu4yjstAigNEb1xoHex8KlpYSdarG5Na-5Pm1zLqUBQV0SauKYLHtLX4e8~4cs~-G72UckScRa53sxTdwlsN9E8x8KeAXXgr97nSqZ3Qg2bYlkUADgCDtANqTCPeh2bEfKiog0mB3h10~wX1hJhuSW6yhfW6S4BdQUAG8td8CURvOP7wNq4DL8EOqPXoOOaLfBr2zmBE6z1uQcKoFbnCs6tXzFtS6PNg__",
    },
    {
      icon: Cloud,
      title: "Serviços de Cloud",
      description:
        "Infraestrutura em nuvem escalável e segura. Migração, gerenciamento e otimização de recursos cloud. Soluções AWS, Azure e Google Cloud para máxima disponibilidade.",
      features: ["AWS, Azure, GCP", "Escalabilidade automática", "Backup e segurança"],
      image:
        "https://private-us-east-1.manuscdn.com/sessionFile/HoOVmJgxWp7OtakNJGNXBQ/sandbox/knrOwyBST28tzcJBAt9ZPi-img-1_1771463636000_na1fn_Y2xvdWQtc2VydmljZXM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvSG9PVm1KZ3hXcDdPdGFrTkpHTlhCUS9zYW5kYm94L2tuck93eUJTVDI4dHpjSkJBdDlaUGktaW1nLTFfMTc3MTQ2MzYzNjAwMF9uYTFmbl9ZMnh2ZFdRdGMyVnlkbWxqWlhNLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=IEKgJfBHVObwtXyygIvH9OjG1RF8FFK7BHJlrqe4c7mRif~5xDunDSoi6nbREufZsnMsyAbpyhZwoQUTFYmC6C9kfGP62fKFhEFBK4IapeKA19yIj3ZSZZY5QL-8wLkjGpC1weyPwYiZPv~-sE7M-VIWpebpYX0rLexAMJhwsKIMlLr3esW0F-b0VPQ8iF6FuhKoQGy59WmZ~VKbh6SBM23bK8jnKG7Jgrj7WPyRaFa4cMzqNSn-4Jz7gvr~MNzgCreYfresM13BKWgyZ-daBkhhlx2vUVQyCdsZAWeIHR-QIfJsJetmVnvhBf3pPw9KixfaAv6jyhFYtcQyCNdRaA__",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-40 bg-gradient-to-b from-background to-muted" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm border border-accent/20">
              {t("services.tag")}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Tecnologia que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">impulsiona</span> seu negócio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Oferecemos soluções completas em desenvolvimento de software e infraestrutura em nuvem, adaptadas para crescer junto com seu negócio. Cada projeto é entregue com excelência e foco em resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const animationDelay = index * 100;
            return (
              <Card
                key={index}
                className={`group relative hover:shadow-2xl transition-all duration-300 overflow-hidden bg-background border-border hover:border-primary ${
                  service.highlight ? "lg:col-span-1 md:col-span-1 ring-2 ring-primary ring-opacity-50" : ""
                } ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${animationDelay}ms` : "0ms",
                }}
              >
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-full">
                    {service.badge}
                  </div>
                )}

                {/* Service Image */}
                <div className="h-40 overflow-hidden bg-muted relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Service Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Icon + Title */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 mb-3 transition-all">
                      <Icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6 py-4 border-t border-border">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                        <span className="text-xs text-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={openDialog}
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold group-hover:shadow-lg transition-all cursor-pointer"
                  >
                    Saiba Mais <ArrowRight size={16} />
                  </Button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Não encontrou a solução que procura? Temos expertise em várias outras áreas de desenvolvimento. 
            <span className="text-primary font-semibold"> Vamos discutir seu projeto!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openDialog}
              size="lg"
              className="bg-gradient-to-r from-accent to-emerald-600 hover:from-accent/90 hover:to-emerald-700 text-white font-semibold rounded-lg cursor-pointer"
            >
              Agendar Consulta <ArrowRight size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-semibold"
            >
              Fale com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

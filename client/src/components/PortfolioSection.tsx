import { useTranslation } from "react-i18next";

export default function PortfolioSection() {
  const { t } = useTranslation();

  const projects = [
    {
      titleKey: "portfolio_section.project1.title",
      descriptionKey: "portfolio_section.project1.description",
      categoryKey: "portfolio_section.categoryWeb",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      titleKey: "portfolio_section.project2.title",
      descriptionKey: "portfolio_section.project2.description",
      categoryKey: "portfolio_section.categoryMobile",
      tags: ["React Native", "Firebase", "Maps API"],
    },
    {
      titleKey: "portfolio_section.project3.title",
      descriptionKey: "portfolio_section.project3.description",
      categoryKey: "portfolio_section.categoryWeb",
      tags: ["Vue.js", "D3.js", "Python"],
    },
    {
      titleKey: "portfolio_section.project4.title",
      descriptionKey: "portfolio_section.project4.description",
      categoryKey: "portfolio_section.categoryWeb",
      tags: ["Next.js", "PostgreSQL", "Stripe"],
    },
    {
      titleKey: "portfolio_section.project5.title",
      descriptionKey: "portfolio_section.project5.description",
      categoryKey: "portfolio_section.categoryMobile",
      tags: ["Flutter", "Firebase", "Blockchain"],
    },
    {
      titleKey: "portfolio_section.project6.title",
      descriptionKey: "portfolio_section.project6.description",
      categoryKey: "portfolio_section.categoryWebsite",
      tags: ["Next.js", "Tailwind", "CMS"],
    },
    {
      titleKey: "portfolio_section.project7.title",
      descriptionKey: "portfolio_section.project7.description",
      categoryKey: "portfolio_section.categoryWeb",
      tags: ["React", "WebSocket", "MongoDB"],
    },
    {
      titleKey: "portfolio_section.project8.title",
      descriptionKey: "portfolio_section.project8.description",
      categoryKey: "portfolio_section.categoryMobile",
      tags: ["React Native", "Expo", "Redux"],
    },
    {
      titleKey: "portfolio_section.project9.title",
      descriptionKey: "portfolio_section.project9.description",
      categoryKey: "portfolio_section.categoryWebsite",
      tags: ["Vue.js", "Laravel", "WebRTC"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("portfolio_section.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("portfolio_section.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <div className="mb-4">
                <p className="text-sm text-accent font-semibold mb-1">
                  {t(project.categoryKey)}
                </p>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {t(project.titleKey)}
                </h3>
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {t(project.descriptionKey)}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-muted text-foreground text-xs rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

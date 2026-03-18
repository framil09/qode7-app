import { useState } from "react";
import { Menu, X, Globe, Briefcase, Zap, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "pt", name: "Português" },
    { code: "en", name: "English" },
    { code: "it", name: "Italiano" },
  ];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsLanguageOpen(false);
  };

  const navItems = [
    { label: t("header.services"), href: "#services", icon: Zap },
    { label: t("header.portfolio"), href: "#portfolio", icon: Briefcase },
    { label: t("header.about"), href: "#about", icon: Users },
    { label: t("header.contact"), href: "/contact", icon: Phone },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between py-4">
        {/* Logo - Enhanced */}
        <a href="/" className="flex items-center gap-3.5 group cursor-pointer no-underline">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, #0F3A7D40, #10B98140)', filter: 'blur(6px)' }} />
            <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300" style={{ border: '2px solid rgba(15, 58, 125, 0.25)' }}>
              <img src="/logo-qode7.jpeg" alt="Qode7 Logo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            {/* Active indicator dot */}
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background" style={{ backgroundColor: '#10B981' }} />
          </div>
          <div className="hidden sm:flex flex-col">
            <div className="flex items-baseline gap-0.5">
              <span className="font-black text-xl leading-tight" style={{ color: '#0F3A7D', letterSpacing: '-0.03em' }}>Qode</span>
              <span className="font-black text-xl leading-tight" style={{ color: '#10B981', letterSpacing: '-0.03em' }}>7</span>
              <span className="text-[8px] font-bold uppercase ml-1 px-1.5 py-0.5 rounded-full" style={{ backgroundColor: '#10B98115', color: '#10B981', letterSpacing: '0.05em' }}>PRO</span>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: '#6B7280' }}>Digital Solutions</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isRoute = item.href.startsWith("/");
            const Component = isRoute ? Link : "a";
            const IconComponent = item.icon;
            return (
              <Component
                key={item.label}
                href={item.href}
                className="group relative px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 text-sm font-semibold flex items-center gap-2"
              >
                <IconComponent size={16} className="group-hover:scale-110 transition-transform" />
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full" />
              </Component>
            );
          })}
        </nav>

        {/* Language Selector & CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all text-sm font-semibold text-foreground group"
            >
              <Globe size={16} className="group-hover:scale-110 transition-transform" />
              <span className="uppercase font-bold">{i18n.language}</span>
            </button>

            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-xl w-52 z-10 overflow-hidden">
                {languages.map((lang, idx) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-3 text-sm font-semibold transition-all flex items-center gap-2 ${
                      i18n.language === lang.code
                        ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-l-2 border-primary"
                        : "text-foreground hover:bg-primary/10"
                    } ${idx !== languages.length - 1 ? "border-b border-border/30" : ""}`}
                  >
                    <Globe size={14} />
                    {lang.name}
                    {i18n.language === lang.code && <span className="ml-auto">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-gradient-to-b from-background to-muted/30">
          <nav className="container py-6 flex flex-col gap-3">
            {navItems.map((item) => {
              const isRoute = item.href.startsWith("/");
              const Component = isRoute ? Link : "a";
              const IconComponent = item.icon;
              return (
                <Component
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 px-4 py-3 rounded-lg bg-foreground/5 hover:bg-primary/15 text-foreground hover:text-primary transition-all duration-300 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <IconComponent size={18} className="group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Component>
              );
            })}

            {/* Mobile Language Selector */}
            <div className="border-t border-border pt-6 mt-4">
              <p className="text-sm font-semibold text-foreground mb-3">{t("header.language")}</p>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-bold transition-all ${
                      i18n.language === lang.code
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

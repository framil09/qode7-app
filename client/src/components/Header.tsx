import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#produtos", label: "Produtos" },
    { href: "#como", label: "Como funciona" },
    { href: "#sobre", label: "Sobre" },
    { href: "#segmentos", label: "Segmentos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f1a]/90 backdrop-blur-xl border-b border-white/[0.07]"
          : "bg-transparent"
      }`}
      style={{ height: "72px" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-full flex items-center gap-12">
        {/* Logo Q7 melhorada */}
        <a
          href="#"
          className="shrink-0 no-underline flex items-center gap-2"
        >
          {/* Ícone Q7 com borda teal */}
          <div
            className="flex items-center justify-center rounded-xl transition-all duration-300"
            style={{
              width: "44px",
              height: "44px",
              background: "linear-gradient(135deg, rgba(29, 201, 164, 0.18) 0%, rgba(29, 201, 164, 0.05) 100%)",
              border: "1.5px solid rgba(29, 201, 164, 0.35)",
              boxShadow: "0 0 20px rgba(29, 201, 164, 0.08)",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "18px",
                fontWeight: 700,
                color: "#1dc9a4",
                letterSpacing: "-0.5px",
                lineHeight: 1,
              }}
            >
              Q7
            </span>
          </div>
          {/* Texto QodeSeven */}
          <div className="flex flex-col leading-none">
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#f0f4f8",
                letterSpacing: "-0.5px",
                lineHeight: 1.1,
              }}
            >
              Qode<span style={{ color: "#1dc9a4" }}>Seven</span>
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9.5px",
                fontWeight: 400,
                color: "rgba(160, 174, 192, 0.5)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                lineHeight: 1,
                marginTop: "4px",
              }}
            >
              TECHNOLOGY
            </span>
          </div>
        </a>

        {/* Desktop Nav — centralizado */}
        <nav className="hidden md:flex items-center gap-1.5 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium px-4 py-1.5 rounded-lg transition-colors text-white/45 hover:text-white hover:bg-white/5 no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Espaço vazio à direita para balancear o layout (sem botões) */}
        <div className="hidden md:block" style={{ width: "180px" }} />

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden ml-auto text-white/60 hover:text-white bg-transparent border-0 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-[#0b0f1a]/95 backdrop-blur-xl border-b border-white/[0.07] p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

import { Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0b0f1a",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        padding: "56px 48px 32px",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div
              className="mb-4"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "20px",
                fontWeight: 700,
                color: "#f0f4f8",
                letterSpacing: "-0.5px",
              }}
            >
              <span style={{ color: "#1dc9a4" }}>[</span>Q7
              <span style={{ color: "#1dc9a4" }}>]</span>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(160,174,192,0.5)",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Soluções digitais que resolvem de verdade. Tecnologia, estratégia e
              experiência — do problema ao produto.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/qodeseven"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg transition-all no-underline"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "rgba(160,174,192,0.5)",
                  fontSize: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(29,201,164,0.3)";
                  e.currentTarget.style.color = "#1dc9a4";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "rgba(160,174,192,0.5)";
                }}
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/qodeseven"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg transition-all no-underline"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "rgba(160,174,192,0.5)",
                  fontSize: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(29,201,164,0.3)";
                  e.currentTarget.style.color = "#1dc9a4";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "rgba(160,174,192,0.5)";
                }}
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/qodeseven"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg transition-all no-underline"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "rgba(160,174,192,0.5)",
                  fontSize: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(29,201,164,0.3)";
                  e.currentTarget.style.color = "#1dc9a4";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "rgba(160,174,192,0.5)";
                }}
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/5511916155584"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg transition-all no-underline"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "rgba(160,174,192,0.5)",
                  fontSize: "14px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(29,201,164,0.3)";
                  e.currentTarget.style.color = "#1dc9a4";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.color = "rgba(160,174,192,0.5)";
                }}
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h5
              style={{
                fontSize: "11.5px",
                fontWeight: 700,
                color: "rgba(160,174,192,0.5)",
                letterSpacing: "1.5px",
                textTransform: "uppercase" as const,
                marginBottom: "16px",
              }}
            >
              Produtos
            </h5>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {["Q7Flow", "Q7Gov", "Q7Saúde"].map((item) => (
                <li key={item}>
                  <a
                    href="#produtos"
                    className="no-underline transition-colors"
                    style={{ fontSize: "13.5px", color: "rgba(160,174,192,0.5)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#1dc9a4")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(160,174,192,0.5)")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h5
              style={{
                fontSize: "11.5px",
                fontWeight: 700,
                color: "rgba(160,174,192,0.5)",
                letterSpacing: "1.5px",
                textTransform: "uppercase" as const,
                marginBottom: "16px",
              }}
            >
              Empresa
            </h5>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {[
                { label: "Sobre nós", href: "#sobre" },
                { label: "Como funciona", href: "#como" },
                { label: "Segmentos", href: "#segmentos" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="no-underline transition-colors"
                    style={{ fontSize: "13.5px", color: "rgba(160,174,192,0.5)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#1dc9a4")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(160,174,192,0.5)")
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h5
              style={{
                fontSize: "11.5px",
                fontWeight: 700,
                color: "rgba(160,174,192,0.5)",
                letterSpacing: "1.5px",
                textTransform: "uppercase" as const,
                marginBottom: "16px",
              }}
            >
              Contato
            </h5>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li style={{ fontSize: "13.5px", color: "rgba(160,174,192,0.5)" }}>
                🇧🇷 +55 11 91615-5584
              </li>
              <li style={{ fontSize: "13.5px", color: "rgba(160,174,192,0.5)" }}>
                🇮🇹 +39 345 212 2046
              </li>
              <li>
                <a
                  href="mailto:comercial@qode7.com"
                  className="no-underline transition-colors"
                  style={{ fontSize: "13.5px", color: "rgba(160,174,192,0.5)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#1dc9a4")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(160,174,192,0.5)")
                  }
                >
                  comercial@qode7.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p style={{ fontSize: "12px", color: "rgba(160,174,192,0.35)" }}>
            &copy; {new Date().getFullYear()} QodeSeven Technology. Todos os
            direitos reservados.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(160,174,192,0.35)" }}>
            CNPJ 55.139.813/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}

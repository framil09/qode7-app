const competencias = [
  { name: "Produto", val: 95 },
  { name: "UX/Design", val: 90 },
  { name: "Backend", val: 92 },
  { name: "Integrações", val: 85 },
];

const atuacao = [
  { name: "GovTech", val: 88 },
  { name: "HealthTech", val: 80 },
  { name: "LegalTech", val: 75 },
];

const values = [
  "Excelência",
  "Inovação",
  "Transparência",
  "Escuta ativa",
  "Parceria estratégica",
  "Personalização",
];

function BarRow({ name, val }: { name: string; val: number }) {
  return (
    <div className="flex items-center gap-2.5 mb-2">
      <span
        className="shrink-0"
        style={{ fontSize: "12px", color: "rgba(160,174,192,0.6)", width: "70px" }}
      >
        {name}
      </span>
      <div
        className="flex-1 rounded-full overflow-hidden"
        style={{ height: "5px", background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${val}%`,
            background: "linear-gradient(90deg, #0d9b7a, #1dc9a4)",
          }}
        />
      </div>
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "11px",
          color: "#1dc9a4",
          width: "32px",
          textAlign: "right" as const,
        }}
      >
        {val}%
      </span>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="sobre" style={{ background: "#111827", padding: "100px 48px" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual card */}
          <div className="relative" style={{ height: "440px" }}>
            {/* Main card */}
            <div
              className="absolute rounded-xl flex flex-col gap-5"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: "120px",
                background: "#1a2233",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "24px 28px",
              }}
            >
              <div>
                <div
                  className="mb-2.5"
                  style={{
                    fontSize: "11px",
                    color: "rgba(160,174,192,0.6)",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Competências
                </div>
                {competencias.map((c, i) => (
                  <BarRow key={i} name={c.name} val={c.val} />
                ))}
              </div>

              <div>
                <div
                  className="mb-2.5"
                  style={{
                    fontSize: "11px",
                    color: "rgba(160,174,192,0.6)",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Atuação
                </div>
                {atuacao.map((a, i) => (
                  <BarRow key={i} name={a.name} val={a.val} />
                ))}
              </div>
            </div>

            {/* Float card */}
            <div
              className="absolute flex items-center gap-3.5 rounded-xl"
              style={{
                bottom: 0,
                left: "32px",
                right: "32px",
                background: "#0b0f1a",
                border: "1px solid rgba(29,201,164,0.2)",
                padding: "24px 28px",
              }}
            >
              <div
                className="shrink-0 flex items-center justify-center rounded-lg text-lg"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "rgba(29,201,164,0.08)",
                  border: "1px solid rgba(29,201,164,0.15)",
                }}
              >
                🚀
              </div>
              <div>
                <h5
                  style={{
                    fontSize: "13.5px",
                    fontWeight: 700,
                    color: "#f0f4f8",
                    marginBottom: "2px",
                  }}
                >
                  Tecnologia sem fronteiras
                </h5>
                <p style={{ fontSize: "12px", color: "rgba(160,174,192,0.6)" }}>
                  Brasil 🇧🇷 · Itália 🇮🇹 · Expansão global
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-[11.5px] font-bold uppercase"
              style={{
                background: "rgba(29,201,164,0.08)",
                border: "1px solid rgba(29,201,164,0.15)",
                color: "#1dc9a4",
                letterSpacing: "1.5px",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#1dc9a4" }}
              />
              Sobre nós
            </div>

            {/* Title */}
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: "#f0f4f8",
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              Especialistas que ouvem antes de codar.
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: "15.5px",
                color: "rgba(160,174,192,0.7)",
                lineHeight: 1.7,
                marginBottom: "32px",
              }}
            >
              A QodeSeven Technology surgiu da união de especialistas com um
              propósito estratégico: impulsionar negócios por meio da inovação.
              Nosso ponto de partida é sempre ouvir, analisar e entender a fundo
              a necessidade de cada cliente — para que cada entrega seja única e
              de alto impacto.
            </p>

            {/* Values chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {values.map((v, i) => (
                <span
                  key={i}
                  className="rounded-full text-[12.5px] font-semibold"
                  style={{
                    background: "rgba(29,201,164,0.08)",
                    border: "1px solid rgba(29,201,164,0.15)",
                    color: "#1dc9a4",
                    padding: "6px 14px",
                  }}
                >
                  {v}
                </span>
              ))}
            </div>

            {/* Offices */}
            <div className="flex flex-col gap-2.5">
              <div
                className="flex items-center gap-2.5"
                style={{ fontSize: "13.5px", color: "rgba(160,174,192,0.6)" }}
              >
                🇧🇷{" "}
                <strong style={{ color: "#f0f4f8" }}>Brasil</strong> · +55 11
                91615-5584
              </div>
              <div
                className="flex items-center gap-2.5"
                style={{ fontSize: "13.5px", color: "rgba(160,174,192,0.6)" }}
              >
                🇮🇹{" "}
                <strong style={{ color: "#f0f4f8" }}>Itália</strong> · +39 345
                212 2046
              </div>
              <div
                className="flex items-center gap-2.5"
                style={{ fontSize: "13.5px", color: "rgba(160,174,192,0.6)" }}
              >
                ✉️{" "}
                <strong style={{ color: "#f0f4f8" }}>comercial@qode7.com</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

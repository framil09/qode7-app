const segmentos = [
  {
    icon: "\u{1F3DB}\u{FE0F}",
    title: "Prefeituras e Governo",
    desc: "Digitaliza serviços públicos, organiza filas e dá transparência ao cidadão — do protocolo à entrega, com controle total para a gestão.",
  },
  {
    icon: "\u{1F3E5}",
    title: "Saúde Pública",
    desc: "Triagem digital, agendamento inteligente e controle de estoque para UBS, ESF e unidades hospitalares do SUS.",
  },
  {
    icon: "\u{2696}\u{FE0F}",
    title: "Jurídico e Compliance",
    desc: "Gestão completa do ciclo contratual com assinatura digital ICP-Brasil, aprovações e alertas automáticos de vencimento.",
  },
  {
    icon: "\u{1F3D7}\u{FE0F}",
    title: "Construtoras e Obras",
    desc: "Controle de solicitações de manutenção e obras com foto, endereço, prioridade e acompanhamento por equipe em campo.",
  },
  {
    icon: "\u{1F4BC}",
    title: "Empresas e Startups",
    desc: "Desenvolvimento de produtos digitais sob medida — apps, plataformas SaaS e automações que escalam com o seu negócio.",
  },
  {
    icon: "\u{1F310}",
    title: "Operações Internacionais",
    desc: "Com equipes no Brasil e na Itália, a QodeSeven atende projetos globais com fuso, idioma e legislação local.",
  },
];

export default function SegmentosSection() {
  return (
    <section
      id="segmentos"
      style={{ background: "#0b0f1a", padding: "100px 48px" }}
    >
      <div className="max-w-[1200px] mx-auto">
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
          Segmentos
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
          Para quem a QodeSeven
          <br />
          foi construída.
        </h2>

        {/* Description */}
        <p
          className="max-w-[560px]"
          style={{
            fontSize: "15.5px",
            color: "rgba(160,174,192,0.7)",
            lineHeight: 1.7,
            marginBottom: "56px",
          }}
        >
          Atendemos organizações que precisam de tecnologia que funciona na
          realidade, não apenas no papel.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {segmentos.map((seg, i) => (
            <div
              key={i}
              className="rounded-xl transition-all duration-300"
              style={{
                background: "#1a2233",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "32px 28px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(29,201,164,0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")
              }
            >
              <div className="text-[28px] mb-4">{seg.icon}</div>
              <h4
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#f0f4f8",
                  letterSpacing: "-0.3px",
                  marginBottom: "10px",
                }}
              >
                {seg.title}
              </h4>
              <p
                style={{
                  fontSize: "13.5px",
                  color: "rgba(160,174,192,0.6)",
                  lineHeight: 1.7,
                }}
              >
                {seg.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

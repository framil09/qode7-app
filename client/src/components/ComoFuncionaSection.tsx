const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Mapeamos seu processo, seus gargalos e o que precisa mudar para gerar resultado de verdade.",
  },
  {
    num: "02",
    title: "Proposta sob medida",
    desc: "Definimos escopo, tecnologia e prazo — sem surpresas. Cada entrega tem responsável e objetivo claro.",
  },
  {
    num: "03",
    title: "Implantação ágil",
    desc: "Entregamos em sprints curtos. Você vê o produto evoluir e aprova cada etapa antes de seguir.",
  },
  {
    num: "04",
    title: "Suporte contínuo",
    desc: "Após o lançamento, ficamos do lado. Monitoramos, ajustamos e evoluímos o produto com você.",
  },
];

export default function ComoFuncionaSection() {
  return (
    <section id="como" style={{ background: "#0b0f1a", padding: "100px 48px" }}>
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 mx-auto mb-4 px-4 py-1.5 rounded-full text-[11.5px] font-bold uppercase"
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
          Como funciona
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
          Do diagnóstico à entrega,
          <br />
          com você em cada passo.
        </h2>

        {/* Description */}
        <p
          className="max-w-[560px] mx-auto"
          style={{
            fontSize: "15.5px",
            color: "rgba(160,174,192,0.7)",
            lineHeight: 1.7,
            marginBottom: "0",
          }}
        >
          Não vendemos software genérico. Ouvimos, entendemos e construímos
          junto — do problema real à solução que funciona no seu dia a dia.
        </p>

        {/* Steps */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 mt-16">
          {/* Dashed line connecting steps (desktop only) */}
          <div
            className="hidden md:block absolute"
            style={{
              top: "30px",
              left: "calc(12.5% + 20px)",
              right: "calc(12.5% + 20px)",
              height: "1px",
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(29,201,164,0.2) 0, rgba(29,201,164,0.2) 8px, transparent 8px, transparent 18px)",
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center px-6 relative"
            >
              {/* Number circle */}
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-6 shrink-0 relative z-10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(29,201,164,0.15)]"
                style={{
                  background: "#1a2233",
                  border: "1.5px solid rgba(29,201,164,0.2)",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#1dc9a4",
                }}
              >
                {step.num}
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#f0f4f8",
                  letterSpacing: "-0.3px",
                  marginBottom: "10px",
                }}
              >
                {step.title}
              </h4>

              {/* Description */}
              <p
                style={{
                  fontSize: "13.5px",
                  color: "rgba(160,174,192,0.6)",
                  lineHeight: 1.65,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

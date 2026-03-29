import { useScheduleMeeting } from "@/contexts/ScheduleMeetingContext";

export default function CTASection() {
  const { openDialog } = useScheduleMeeting();

  return (
    <section
      id="cta"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0b0f1a, #111827)",
        padding: "100px 48px",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(29,201,164,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[720px] mx-auto text-center relative z-10">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 mx-auto mb-6 px-4 py-1.5 rounded-full text-[11.5px] font-bold uppercase"
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
          Sua próxima evolução começa aqui
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
            color: "#f0f4f8",
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Vamos resolver o seu
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #1dc9a4, #00ffe0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            problema juntos.
          </span>
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "15.5px",
            color: "rgba(160,174,192,0.7)",
            lineHeight: 1.7,
            marginBottom: "40px",
          }}
        >
          Conte o seu desafio — nós ouvimos, entendemos e criamos a solução
          certa com tecnologia que funciona no mundo real.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 justify-center flex-wrap">
          <button
            onClick={openDialog}
            className="inline-flex items-center gap-1.5 px-8 py-3.5 rounded-lg text-[14.5px] font-semibold transition-all cursor-pointer border-0"
            style={{
              background: "#1dc9a4",
              color: "#0b0f1a",
              boxShadow: "0 4px 20px rgba(29,201,164,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00ffe0";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1dc9a4";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Agendar reunião &rarr;
          </button>
          <a
            href="https://wa.me/5511916155584"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-8 py-3.5 rounded-lg text-[14.5px] font-semibold transition-all no-underline"
            style={{
              background: "transparent",
              color: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Trust note */}
        <p
          className="mt-8"
          style={{
            fontSize: "12px",
            color: "rgba(160,174,192,0.4)",
          }}
        >
          Sem compromisso · Resposta em até 24h · Atendimento personalizado
        </p>
      </div>
    </section>
  );
}

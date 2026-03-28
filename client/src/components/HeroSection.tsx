import { useScheduleMeeting } from "@/contexts/ScheduleMeetingContext";

export default function HeroSection() {
  const { openDialog } = useScheduleMeeting();

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: "#0b0f1a",
        paddingTop: "calc(72px + 60px)",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      {/* Grid mesh background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "600px",
          background: "radial-gradient(ellipse, rgba(29,201,164,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Eyebrow badge */}
      <div
        className="relative inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full text-[12.5px] font-semibold"
        style={{
          background: "rgba(29,201,164,0.06)",
          border: "1px solid rgba(29,201,164,0.15)",
          color: "#1dc9a4",
          letterSpacing: "0.5px",
        }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full animate-pulse"
          style={{ background: "#1dc9a4" }}
        />
        Tecnologia sem fronteiras
      </div>

      {/* Title */}
      <h1
        className="relative"
        style={{
          fontSize: "clamp(40px, 6vw, 76px)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-3px",
          color: "#f0f4f8",
          marginBottom: "28px",
        }}
      >
        Soluções digitais
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #1dc9a4, #00ffe0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          que resolvem
        </span>
        <br />
        <span
          style={{
            WebkitTextStroke: "1.5px rgba(240,244,248,0.25)",
            WebkitTextFillColor: "transparent",
          }}
        >
          de verdade
        </span>
      </h1>

      {/* Subtitle */}
      <p
        className="relative max-w-[580px] mx-auto"
        style={{
          fontSize: "16.5px",
          color: "rgba(160,174,192,0.85)",
          lineHeight: 1.75,
          marginBottom: "44px",
        }}
      >
        A QodeSeven une tecnologia, estratégia e experiência para transformar os
        desafios do seu negócio em resultados concretos — da ideia ao produto,
        com precisão e velocidade.
      </p>

      {/* Actions */}
      <div className="relative flex items-center gap-3 flex-wrap justify-center">
        <button
          onClick={openDialog}
          className="inline-flex items-center gap-1.5 px-7 py-3 rounded-lg text-[14.5px] font-semibold transition-all bg-[#1dc9a4] text-[#0b0f1a] hover:bg-[#00ffe0] hover:-translate-y-px cursor-pointer border-0"
          style={{ boxShadow: "0 4px 20px rgba(29,201,164,0.2)" }}
        >
          Quero uma solução &rarr;
        </button>
        <a
          href="#produtos"
          className="inline-flex items-center gap-1.5 px-7 py-3 rounded-lg text-[14.5px] font-semibold transition-all bg-transparent text-white/50 border border-white/[0.08] hover:text-white hover:border-white/20 hover:bg-white/[0.04] no-underline"
        >
          Ver produtos
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute flex flex-col items-center gap-2"
        style={{
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(160,174,192,0.35)",
          fontSize: "10px",
          fontFamily: "'Space Mono', monospace",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        <div
          className="w-px animate-pulse"
          style={{
            height: "40px",
            background: "linear-gradient(to bottom, rgba(29,201,164,0.3), transparent)",
          }}
        />
        scroll
      </div>
    </section>
  );
}

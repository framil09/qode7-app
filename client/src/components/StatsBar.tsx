const stats = [
  { num: "+50", label: "Projetos entregues" },
  { num: "2", label: "Países de atuação" },
  { num: "6", label: "Produtos proprietários" },
  { num: "100%", label: "Soluções sob medida" },
];

export default function StatsBar() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f1420, #111827)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        padding: "44px 48px",
      }}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center"
            style={{
              borderRight:
                i < stats.length - 1
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "none",
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "clamp(28px, 3.5vw, 40px)",
                fontWeight: 700,
                color: "#1dc9a4",
                letterSpacing: "-1px",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              {stat.num}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "rgba(160,174,192,0.6)",
                fontWeight: 500,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const produtos = [
  {
    icon: "\u{1F4C4}",
    tag: "Q7Flow",
    title: "Gestão de Contratos",
    desc: "Centraliza o ciclo de vida contratual da sua organização — da criação à assinatura, do vencimento à auditoria.",
    features: [
      "Aprovações configuráveis em múltiplos níveis",
      "Assinatura digital com validade jurídica (ICP-Brasil)",
      "Alertas automáticos de vencimento e renovação",
      "Relatórios e dashboards gerenciais",
      "Criptografia AES-256 e trilha de auditoria",
    ],
  },
  {
    icon: "\u{1F3DB}\u{FE0F}",
    tag: "Q7Gov",
    title: "Plataforma Municipal",
    desc: "Digitaliza a gestão de serviços públicos — organiza filas, protocolos e o atendimento ao cidadão em um único sistema.",
    features: [
      "Entrada única para qualquer canal (WhatsApp, balcão, site)",
      "Filas com etapa, responsável e prazo definidos",
      "Acompanhamento do pedido do início ao fim",
      "Dashboards de gargalos e desempenho por secretaria",
      "Comunicação proativa com o cidadão",
    ],
  },
  {
    icon: "\u{1F3E5}",
    tag: "Q7Saúde",
    title: "Gestão em Saúde Pública",
    desc: "Gestão integrada para unidades de saúde com triagem pelo Protocolo de Manchester, filas em tempo real e controle de estoque.",
    features: [
      "Triagem com Protocolo de Manchester digital",
      "Fila de atendimento em tempo real por prioridade",
      "Agenda com confirmação automática e relatório de faltas",
      "Controle de estoque de insumos e medicamentos",
      "Integração ESF e UBS",
    ],
  },
  {
    icon: "\u{1F393}",
    tag: "Q7Edu",
    title: "Gestão Educacional",
    desc: "Plataforma completa para redes de ensino — matrículas, diário de classe digital, comunicação com pais e indicadores de desempenho.",
    features: [
      "Matrícula online com validação automática de documentos",
      "Diário de classe digital com lançamento de notas e faltas",
      "Portal do aluno e comunicação com responsáveis",
      "Dashboards de desempenho escolar por turma e disciplina",
      "Integração com Censo Escolar e sistemas do MEC",
    ],
  },
  {
    icon: "\u{1F4CA}",
    tag: "Q7Data",
    title: "Business Intelligence",
    desc: "Transforme dados brutos em decisões estratégicas — dashboards interativos, relatórios automatizados e indicadores em tempo real.",
    features: [
      "Dashboards interativos com drill-down por dimensão",
      "Conexão com múltiplas fontes de dados (ERP, CRM, planilhas)",
      "Relatórios automatizados com envio agendado",
      "Indicadores-chave (KPIs) com alertas configuráveis",
      "Exportação em PDF, Excel e integração via API",
    ],
  },
  {
    icon: "\u{2699}\u{FE0F}",
    tag: "Q7Gestão",
    title: "ERP Empresarial",
    desc: "Sistema de gestão integrado para empresas — financeiro, estoque, compras, vendas e RH em uma única plataforma.",
    features: [
      "Contas a pagar e receber com conciliação bancária",
      "Controle de estoque com entrada e saída automáticas",
      "Módulo de compras com cotação e aprovação",
      "Gestão de vendas com funil e comissionamento",
      "Folha de pagamento e controle de ponto integrados",
    ],
  },
];

export default function ProdutosSection() {
  return (
    <section
      id="produtos"
      style={{ background: "#111827", padding: "100px 48px" }}
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
          Produtos
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
          Plataformas prontas.
          <br />
          Configuradas para você.
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
          Cada produto nasceu de um problema real. Implantamos rápido,
          configuramos com você e entregamos controle desde o primeiro dia.
        </p>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-5">
          {produtos.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-xl transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              style={{
                background: "#1a2233",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "36px 32px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(29,201,164,0.25)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")
              }
            >
              {/* Icon */}
              <div className="text-3xl mb-5">{p.icon}</div>

              {/* Tag */}
              <div
                className="inline-block self-start mb-3 px-3 py-1 rounded-md text-[11px] font-bold uppercase"
                style={{
                  background: "rgba(29,201,164,0.08)",
                  color: "#1dc9a4",
                  letterSpacing: "1px",
                }}
              >
                {p.tag}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#f0f4f8",
                  letterSpacing: "-0.5px",
                  marginBottom: "12px",
                }}
              >
                {p.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "13.5px",
                  color: "rgba(160,174,192,0.7)",
                  lineHeight: 1.7,
                  marginBottom: "20px",
                }}
              >
                {p.desc}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {p.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2"
                    style={{ fontSize: "12.5px", color: "rgba(160,174,192,0.55)" }}
                  >
                    <span style={{ color: "#1dc9a4", flexShrink: 0 }}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#cta"
                className="inline-flex items-center gap-1 text-[13px] font-semibold no-underline transition-colors"
                style={{ color: "#1dc9a4" }}
              >
                Conhecer o {p.tag}
                <span className="transition-transform group-hover:translate-x-1 inline-block">
                  &rarr;
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

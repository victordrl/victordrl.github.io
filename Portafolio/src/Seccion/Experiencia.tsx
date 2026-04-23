// EXPERIENCIA
import Acordeon from "../compnent/Acordeon_exp";

export default function Experiencia() {
  const experiencias = [
    {
      empresa: "Kiari Shop House J & L, C.A.",
      cargo: "SOFTWARE ENGINEER / SYSTEMS CORE",
      tiempo: "2021 - 2025",
      lista: [
        "Desarrollo de plataforma web estática optimizada para la presencia digital corporativa.",
        "Supervisión y optimización de algoritmos de control de calidad en líneas de producción.",
        "Gestión técnica de inventarios mediante sistemas de base de datos distribuidos.",
        "Arquitectura de flujos ETL para la toma de decisiones basada en métricas de producción.",
      ],
      path: "https://kiari-shop-house-jl.netlify.app/",
      open: true,
    },
  ];

  return (
    <section id="xp" className="tech-container py-24">
      {/* Section Label */}
      <div className="tech-section-label">
        <span>04 // CAREER_PATH</span>
        <div className="line"></div>
      </div>

      <div className="flex flex-col gap-6">
        {experiencias.map((exp, index) => (
          <Acordeon key={index} {...exp} />
        ))}
        
        {/* Empty State / Continuous Growth Block */}
        <div className="border border-dashed border-outline/20 p-12 flex flex-col items-center justify-center text-center">
          <div className="font-mono text-[10px] text-primary/30 uppercase tracking-[0.5em] mb-4">
            AWAITING_NEXT_CORE_INTEGRATION
          </div>
          <p className="text-on-surface-variant/40 font-sans text-xs max-w-sm">
            Buscando activamente desafíos técnicos que requieran orquestación de sistemas complejos y desarrollo de alto impacto.
          </p>
        </div>
      </div>
    </section>
  );
}

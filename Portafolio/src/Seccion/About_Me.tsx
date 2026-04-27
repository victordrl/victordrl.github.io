// ABOUT ME SECCION
import CardInfo from "../compnent/Card_info";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { SiPagespeedinsights } from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";

const data_card = [
  {
    children: <BsPcDisplayHorizontal className="size-10 md:size-12" />,
    titulo: "// APPS_ENG",
    contenido: "Diseño y desarrollo de aplicaciones de escritorio con arquitecturas robustas y eficientes.",
  },
  {
    children: <SiPagespeedinsights className="size-10 md:size-12" />,
    titulo: "// WEB_CORE",
    contenido: "Creación de sitios Web responsivos y dinámicos optimizados para máximo rendimiento.",
  },
  {
    children: <AiFillDatabase className="size-10 md:size-12" />,
    titulo: "// DATA_ARCH",
    contenido: "Análisis de datos, diseño y mantenimiento de arquitecturas de bases de datos relacionales.",
  },
];

export default function About_Me() {
  return (
    <main id="me" className="tech-container py-24 relative">
      {/* HUD background labels */}
      <div className="absolute top-10 right-10 text-hud-gold/30 hidden lg:block">
        <span className="text-[8px] tracking-[0.3em] text-primary/40">IDENTITY_SCAN: IN_PROGRESS</span>
      </div>

      {/* Section Label - Gold Decoration */}
      <div className="tech-section-label">
        <span className="text-hud-gold">01 // TERMINAL_CORE_IDENTITY</span>
        <div className="line !bg-primary/40"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
        {/* Profile Bio Card */}
        <div className="lg:col-span-5 bg-surface-bright border border-primary/20 p-6 md:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 p-2 text-hud-gold">
            BIO_LOG_SCAN_091
          </div>
          
          <h3 className="font-mono text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-hud-gold tracking-tighter">[ SYSTEM_USER ]</span>
            VICTOR_ROJAS
          </h3>

          <p className="text-on-surface-variant font-sans text-base leading-relaxed opacity-100 mb-8">
            Hola, soy Victor Rojas, estudiante de Ingeniería Informática apasionado
            por escribir código. Me entusiasma colaborar en proyectos que
            representen desafíos reales, donde pueda aplicar mi creatividad y seguir
            aprendiendo cada día.
          </p>

          {/* Technical Data Grid - Gold accents */}
          <div className="font-mono text-[10px] text-on-surface-variant leading-loose font-bold">
            <div className="flex justify-between border-b border-primary/10 pb-2 mb-2">
              <span className="text-hud-purple">SPECIALIZATION</span>
              <span className="text-hud-gold tracking-widest">CORE_DEV_SYSTEMS</span>
            </div>
            <div className="flex justify-between border-b border-primary/10 pb-2 mb-2">
              <span className="text-hud-purple">LOCATION</span>
              <span className="text-hud-gold tracking-widest">VE_LATAM_NODE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-hud-purple">ACADEMIC_PATH</span>
              <span className="text-hud-gold tracking-widest">UGMA_CS_ENG</span>
            </div>
          </div>
          
          <div className="mt-8 flex gap-1">
            <div className="h-1 flex-1 bg-primary/20"></div>
            <div className="h-1 w-4 bg-primary animate-pulse"></div>
          </div>
        </div>

        {/* Core Services Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
          {data_card.map((data, index) => (
            <CardInfo key={index} titulo={data.titulo} contenido={data.contenido}>
              {data.children}
            </CardInfo>
          ))}
          
          {/* Decorative Technical Block - Gold Text */}
          <div className="hidden lg:flex lg:col-span-3 h-24 border border-dashed border-primary/20 items-center justify-center p-4">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05),transparent)] flex flex-col items-center justify-center">
              <span className="text-hud-gold">SYSTEM_LATENCY: 0.04ms // CORE_SYNC: ACTIVE</span>
              <span className="text-hud-purple mt-1">INTEGRITY_CHECK: PASSED_v4.0.1</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

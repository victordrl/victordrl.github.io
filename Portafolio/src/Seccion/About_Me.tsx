// ABOUT ME SECCION
import CardInfo from "../compnent/Card_info";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { SiPagespeedinsights } from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";

const data_card = [
  {
    children: <BsPcDisplayHorizontal className="size-12" />,
    titulo: "// APPS_ENG",
    contenido: "Diseño y desarrollo de aplicaciones de escritorio con arquitecturas robustas.",
  },
  {
    children: <SiPagespeedinsights className="size-12" />,
    titulo: "// WEB_CORE",
    contenido: "Creación de sitios Web responsivos y dinámicos optimizados para performance.",
  },
  {
    children: <AiFillDatabase className="size-12" />,
    titulo: "// DATA_ARCH",
    contenido: "Análisis de datos, diseño y mantenimiento de bases de datos relacionales.",
  },
];

export default function About_Me() {
  return (
    <main id="me" className="tech-container py-24">
      {/* Section Label */}
      <div className="tech-section-label">
        <span>01 // TERMINAL_CORE</span>
        <div className="line"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Profile Bio Card */}
        <div className="lg:col-span-5 bg-surface-bright border border-outline/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-primary/30 uppercase tracking-widest">
            BIO_SCAN_091
          </div>
          
          <h3 className="font-mono text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-primary text-sm tracking-tighter">[ SYSTEM_USER ]</span>
            VICTOR_ROJAS
          </h3>

          <p className="text-on-surface-variant font-sans text-base leading-relaxed opacity-80 mb-8">
            Hola, soy Victor Rojas, estudiante de Ingeniería Informática apasionado
            por escribir código. Me entusiasma colaborar en proyectos que
            representen desafíos reales, donde pueda aplicar mi creatividad y seguir
            aprendiendo cada día.
          </p>

          <div className="font-mono text-xs text-on-surface-variant/60 leading-loose">
            <div className="flex justify-between border-b border-outline/20 pb-2 mb-2">
              <span>SPECIALIZATION</span>
              <span className="text-primary">CORE_DEV</span>
            </div>
            <div className="flex justify-between border-b border-outline/20 pb-2 mb-2">
              <span>LOCATION</span>
              <span className="text-primary">VENEZUELA</span>
            </div>
            <div className="flex justify-between">
              <span>ACADEMIC_PATH</span>
              <span className="text-primary">UGMA_CS</span>
            </div>
          </div>
        </div>

        {/* Core Services Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
          {data_card.map((data, index) => (
            <CardInfo key={index} titulo={data.titulo} contenido={data.contenido}>
              {data.children}
            </CardInfo>
          ))}
          
          {/* Decorative Technical Block */}
          <div className="hidden lg:flex lg:col-span-3 h-24 border border-dashed border-outline/20 items-center justify-center p-4">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05),transparent)] flex items-center justify-center font-mono text-[8px] text-on-surface-variant/30 uppercase tracking-[0.5em]">
              SYSTEM_LATENCY: 0.04ms // CORE_SYNC: ACTIVE
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

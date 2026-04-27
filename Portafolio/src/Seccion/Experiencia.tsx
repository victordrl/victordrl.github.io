// EXPERIENCIA SECCION
import Acordeon from "../compnent/Acordeon_exp";

const data_exp = [
  {
    empresa: "KIARI SHOP HOUSE J & L",
    cargo: "GERENTE DE OPERACIONES Y TECNOLOGÍA",
    tiempo: "2021 — PRESENTE",
    lista: [
      "Dirección de la producción y digitalización de procesos en planta de procesamiento de alimentos.",
      "Implementación de la infraestructura digital de la empresa.",
      "Desarrollo e integración de procesos administrativos con soluciones tecnológicas para optimizar el rendimiento."
    ],
    path: "https://kiari-shop-house-jl.netlify.app/",
    open: true,
  },
  {
    empresa: "UNIVERSIDAD GRAN MARISCAL DE AYACUCHO",
    cargo: "DESARROLLADOR WEB INSTITUCIONAL",
    tiempo: "DESARROLLO Y MANTENIMIENTO",
    lista: [
      "Diseño e implementación del portal de posgrado para la Universidad Gran Mariscal de Ayacucho.",
      "Desarrollo de una plataforma web funcional para la coordinación de posgrado, gestionando flujos de información reales.",
      "Optimización de la presencia digital académica de la institución."
    ],
    path: "https://ugmamoniherre77.wixstudio.com/posgradosugma",
    open: false,
  },
];

export default function Experiencia() {
  return (
    <section id="xp" className="tech-container py-24 relative overflow-hidden">
      {/* HUD Background Decorations */}
      <div className="absolute top-20 right-0 font-mono text-[10px] text-primary/5 tracking-[0.8em] vertical-text hidden lg:block">
        CAREER_HISTORY_DATABASE_v4.0
      </div>

      {/* Section Label - Gold Decoration */}
      <div className="tech-section-label">
        <span className="text-primary font-bold">04 // CAREER_PATH_SCANNER</span>
        <div className="line !bg-primary/50"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Experience List HUD */}
        <div className="lg:col-span-12 flex flex-col gap-6">
          <div className="flex items-center gap-4 mb-4 font-mono text-[10px] font-bold text-primary tracking-[0.2em] uppercase italic">
            <span>[ SYSTEM_LOGS: PROFESSIONAL_RECORDS ]</span>
            <div className="h-px flex-1 bg-primary/20"></div>
          </div>
          
          <div className="w-full">
            {data_exp.map((exp, index) => (
              <Acordeon
                key={index}
                empresa={exp.empresa}
                cargo={exp.cargo}
                tiempo={exp.tiempo}
                lista={exp.lista}
                path={exp.path}
                open={exp.open}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Technical labels - Gold */}
      <div className="mt-12 flex justify-between items-center font-mono text-[8px] text-primary font-bold tracking-[0.3em] uppercase opacity-50">
        <span>// DATA_INTEGRITY: 100%</span>
        <span className="hidden sm:inline">// LOG_SESSION: {new Date().getTime()}</span>
        <span>// STATUS: VERIFIED</span>
      </div>
    </section>
  );
}

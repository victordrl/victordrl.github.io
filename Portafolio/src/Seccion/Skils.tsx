// SKILLS SECCION
import CardSkils from "../compnent/Card_skils";

const frontend_skills = [
  { logo: "/React.svg", name: "React", level: "Avanzado" },
  { logo: "/Next.js.svg", name: "Next.js", level: "Avanzado" },
  { logo: "/Tailwind CSS.svg", name: "Tailwind", level: "Avanzado" },
  { logo: "/HTML5.svg", name: "HTML5", level: "Avanzado" },
  { logo: "/CSS3.svg", name: "CSS3", level: "Avanzado" },
  { logo: "/JavaScript.svg", name: "JavaScript", level: "Intermedio" },
  { logo: "/Qt Framework.svg", name: "Qt Framework", level: "Avanzado" },
];

const backend_skills = [
  { logo: "/Python.svg", name: "Python", level: "Avanzado" },
  { logo: "/FastAPI.svg", name: "FastAPI", level: "Avanzado" },
  { logo: "/C++ (CPlusPlus).svg", name: "C++", level: "Avanzado" },
  { logo: "/TensorFlow.svg", name: "TensorFlow", level: "Avanzado" },
  { logo: "/Python.svg", name: "FastAPI", level: "Avanzado" },
  { logo: "/MySQL.svg", name: "MySQL", level: "Avanzado" },
  { logo: "/GitHub.svg", name: "Git / GitHub", level: "Intermedio" },
];

export default function Skils() {
  return (
    <section id="skil" className="tech-container py-24 overflow-hidden relative">
      {/* HUD background labels */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-hud-gold/10 whitespace-nowrap hidden lg:block">
        <span className="text-[8px] tracking-[0.3em] text-primary/40">INFRASTRUCTURE_MODULE_SYSTEM_CORE_LOADED</span>
      </div>

      {/* Section Label - Gold Decoration */}
      <div className="tech-section-label">
        <span className="text-hud-gold">02 // TECHNICA_CORE_SCAN</span>
        <div className="line !bg-primary/50"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
        {/* Frontend Module */}
        <div className="w-full">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-hud-gold italic">[ MODULE_01: FRONTEND_STACK_OVERVIEW ]</span>
            <div className="h-px flex-1 bg-primary/20"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {frontend_skills.map((skill, index) => (
              <CardSkils key={index} titulo={skill.name} contenido={skill.level}>
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className={`size-8 img-tech ${skill.name.includes("GitHub") || skill.name.includes("Next.js") ? "invert" : ""}`} 
                />
              </CardSkils>
            ))}
          </div>
        </div>

        {/* Backend & Tools Module */}
        <div className="w-full">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-hud-gold italic">[ MODULE_02: BACKEND_CORE_INFRA ]</span>
            <div className="h-px flex-1 bg-primary/20"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {backend_skills.map((skill, index) => (
              <CardSkils key={index} titulo={skill.name} contenido={skill.level}>
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className={`size-8 img-tech ${skill.name.includes("GitHub") || skill.name.includes("Next.js") ? "invert" : ""}`} 
                />
              </CardSkils>
            ))}
          </div>
          
          {/* Decorative Terminal Output - Updated Colors and Content */}
          <div className="mt-8 bg-surface-bright/30 border border-primary/20 p-4 w-full relative">
            <div className="absolute top-0 right-0 p-1 bg-primary text-black text-[6px] font-bold">LIVE_FEED</div>
            <p className="text-hud-gold animate-pulse"> {">> "} SYSTEM_LOGS_SYNC_INITIALIZED</p>
            <div className="flex flex-col gap-1 font-bold">
              <p className="text-hud-purple">SKILL_SCAN: <span className="text-hud-gold tracking-widest">SUCCESSFUL</span></p>
              <p className="text-hud-purple">INTEGRITY_CHECK: <span className="text-hud-gold tracking-widest">98.4%_NOMINAL</span></p>
              <p className="text-hud-purple">COMPATIBILITY: <span className="text-hud-gold tracking-widest">MULTI-NODE_OPTIMIZED</span></p>
              <p className="text-hud-gold opacity-40 mt-2">// ENCRYPTED_KEY: ****************</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

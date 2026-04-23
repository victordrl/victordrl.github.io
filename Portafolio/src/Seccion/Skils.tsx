// SKILLS SECCION
import CardSkils from "../compnent/Card_skils";

const frontend_skills = [
  { logo: "/React.svg", name: "React", level: "Avanzado" },
  { logo: "/Tailwind CSS.svg", name: "Tailwind", level: "Avanzado" },
  { logo: "/HTML5.svg", name: "HTML5", level: "Avanzado" },
  { logo: "/CSS3.svg", name: "CSS3", level: "Avanzado" },
  { logo: "/JavaScript.svg", name: "JavaScript", level: "Intermedio" },
];

const backend_skills = [
  { logo: "/Python.svg", name: "Python", level: "Avanzado" },
  { logo: "/MySQL.svg", name: "MySQL", level: "Avanzado" },
  { logo: "/GitHub.svg", name: "Git / GitHub", level: "Intermedio" },
];

export default function Skils() {
  return (
    <section id="skil" className="tech-container py-24">
      {/* Section Label */}
      <div className="tech-section-label">
        <span>02 // TECHNICA_CORE</span>
        <div className="line"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Frontend Module */}
        <div>
          <div className="flex items-center gap-4 mb-8 font-mono text-xs font-bold text-primary tracking-[0.2em] uppercase italic">
            <span>[ MODULE_01: FRONTEND_STACK ]</span>
            <div className="h-px flex-1 bg-outline/20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frontend_skills.map((skill, index) => (
              <CardSkils key={index} titulo={skill.name} contenido={skill.level}>
                <img src={skill.logo} alt={skill.name} className="size-8" />
              </CardSkils>
            ))}
          </div>
        </div>

        {/* Backend & Tools Module */}
        <div>
          <div className="flex items-center gap-4 mb-8 font-mono text-xs font-bold text-primary tracking-[0.2em] uppercase italic">
            <span>[ MODULE_02: BACKEND_CORE ]</span>
            <div className="h-px flex-1 bg-outline/20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {backend_skills.map((skill, index) => (
              <CardSkils key={index} titulo={skill.name} contenido={skill.level}>
                <img src={skill.logo} alt={skill.name} className="size-8" />
              </CardSkils>
            ))}
          </div>
          
          {/* Decorative Terminal Output */}
          <div className="mt-8 bg-surface-bright/30 border border-outline/20 p-4 font-mono text-[10px] text-on-surface-variant/40 leading-relaxed">
            <p className="text-primary/50 text-[8px] mb-2 font-bold uppercase tracking-widest">>> SYSTEM_LOGS</p>
            <p>SKILL_SCAN: COMPLETED</p>
            <p>INTEGRITY_CHECK: 98.4% SUCCESS</p>
            <p>COMPATIBILITY_MODE: OPTIMIZED</p>
          </div>
        </div>
      </div>
    </section>
  );
}

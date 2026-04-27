// ESTUDIOS
export default function Education() {
  return (
    <section id="educ" className="tech-container py-24 overflow-hidden relative">
      {/* HUD background labels */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-mono text-[10px] text-primary/5 tracking-[1em] vertical-text hidden lg:block">
        ACADEMIC_CERTIFICATION_PIPELINE_ACTIVE
      </div>

      {/* Section Label - Gold Decoration */}
      <div className="tech-section-label">
        <span className="text-primary font-bold">05 // ACADEMIC_RECORD_VERIFICATION</span>
        <div className="line !bg-primary/50"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto w-full">
        {/* UGMA Card */}
        <div className="bg-surface-bright border border-primary/20 p-6 sm:p-10 relative overflow-hidden group hover:border-primary/50 transition-all flex-1 shadow-2xl">
          <div className="absolute top-0 right-0 p-3 font-mono text-[8px] text-primary font-bold uppercase tracking-[0.4em] hidden sm:block">
            ACADEMIC_SCAN_v2.0
          </div>
          <div className="absolute bottom-0 left-0 p-3 font-mono text-[8px] text-primary font-bold uppercase tracking-[0.4em] hidden sm:block">
            VERIFIED_CREDENTIALS
          </div>
          
          <div className="text-center relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="font-mono text-primary text-[10px] font-bold tracking-[0.3em] mb-4 uppercase italic">
                [ INSTITUTION_CORE_DATA ]
              </div>
              
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mb-2 tracking-tighter uppercase">
                Universidad Nororiental Privada<br />
                <span className="text-primary italic">"Gran Mariscal de Ayacucho"</span>
              </h3>
              <p className="font-mono font-bold tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs text-secondary mb-8">UGMA_SYSTEMS_ENG</p>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-8 bg-primary/20"></div>
              <div className="size-2 bg-primary animate-pulse shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
              <div className="h-px w-8 bg-primary/20"></div>
            </div>
            
            <div>
              <div className="space-y-2 mb-8">
                <p className="text-lg sm:text-xl text-on-surface font-mono font-bold tracking-tight uppercase">
                  Ingeniería Informática
                </p>
                <p className="text-[10px] md:text-xs text-primary font-mono tracking-[0.2em] font-bold uppercase">
                  STATUS: IN_PROGRESS // YEAR: 4/5
                </p>
              </div>

              <div className="inline-block border border-primary/30 px-6 py-2 bg-surface">
                <span className="text-xs md:text-sm text-white font-mono tracking-widest uppercase font-bold">
                  TIMELINE: 2021 — 2026
                </span>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(168,85,247,0.3)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
        </div>

        {/* Fyr Lois Card */}
        <div className="bg-surface-bright border border-primary/20 p-6 sm:p-10 relative overflow-hidden group hover:border-primary/50 transition-all flex-1 shadow-2xl">
          <div className="absolute top-0 right-0 p-3 font-mono text-[8px] text-primary font-bold uppercase tracking-[0.4em] hidden sm:block">
            LANGUAGE_SCAN_v1.0
          </div>
          <div className="absolute bottom-0 left-0 p-3 font-mono text-[8px] text-primary font-bold uppercase tracking-[0.4em] hidden sm:block">
            CERTIFIED_PROFICIENCY
          </div>
          
          <div className="text-center relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="font-mono text-primary text-[10px] font-bold tracking-[0.3em] mb-4 uppercase italic">
                [ LANGUAGE_CORE_DATA ]
              </div>
              
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mb-2 tracking-tighter uppercase mt-6">
                Fyr Lois<br />
                <span className="text-primary italic">English Academy</span>
              </h3>
              <p className="font-mono font-bold tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-xs text-secondary mb-8">ENGLISH_PROFICIENCY</p>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-8 bg-primary/20"></div>
              <div className="size-2 bg-primary animate-pulse shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
              <div className="h-px w-8 bg-primary/20"></div>
            </div>
            
            <div>
              <div className="space-y-2 mb-8">
                <p className="text-lg sm:text-xl text-on-surface font-mono font-bold tracking-tight uppercase">
                  Certificación B1
                </p>
                <p className="text-[10px] md:text-xs text-primary font-mono tracking-[0.2em] font-bold uppercase">
                  STATUS: COMPLETED // LEVEL: INTERMEDIATE
                </p>
              </div>

              <div className="inline-block border border-primary/30 px-6 py-2 bg-surface">
                <span className="text-xs md:text-sm text-white font-mono tracking-widest uppercase font-bold">
                  SKILL: FLUENCY_ACQUIRED
                </span>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(168,85,247,0.3)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
        </div>
      </div>
    </section>
  );
}

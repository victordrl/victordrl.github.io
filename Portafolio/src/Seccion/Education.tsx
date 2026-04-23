// ESTUDIOS
export default function Education() {
  return (
    <section id="educ" className="tech-container py-24">
      {/* Section Label */}
      <div className="tech-section-label">
        <span>05 // ACADEMIC_RECORD</span>
        <div className="line"></div>
      </div>

      <div className="bg-surface-bright border border-outline/30 p-8 sm:p-16 relative overflow-hidden group hover:border-primary/50 transition-all max-w-3xl mx-auto">
        {/* Terminal HUD Elements */}
        <div className="absolute top-0 right-0 p-3 font-mono text-[8px] text-primary/20 uppercase tracking-[0.4em]">
          ACADEMIC_SCAN_v2.0
        </div>
        <div className="absolute bottom-0 left-0 p-3 font-mono text-[8px] text-primary/20 uppercase tracking-[0.4em]">
          VERIFIED_CREDENTIALS
        </div>
        
        <div className="text-center">
          <div className="font-mono text-primary text-[10px] font-bold tracking-[0.3em] mb-4 uppercase italic">
            [ INSTITUTION_CORE ]
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white mb-2 tracking-tighter uppercase">
            Universidad Nororiental Privada<br />
            <span className="text-primary italic">"Gran Mariscal de Ayacucho"</span>
          </h3>
          <p className="font-mono font-bold tracking-[0.5em] text-xs text-on-surface-variant/40 mb-10">UGMA_SYSTEMS</p>
          
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-8 bg-outline/20"></div>
            <div className="size-2 bg-primary animate-pulse"></div>
            <div className="h-px w-8 bg-outline/20"></div>
          </div>
          
          <div className="space-y-2 mb-8">
            <p className="text-xl sm:text-2xl text-on-surface font-mono font-bold tracking-tight uppercase">
              Ingeniería Informática
            </p>
            <p className="text-xs text-primary font-mono tracking-[0.2em] font-bold uppercase">
              STATUS: IN_PROGRESS // YEAR: 4/5
            </p>
          </div>

          <div className="inline-block border border-outline/20 px-6 py-2 bg-surface">
            <span className="text-sm text-on-surface-variant font-mono tracking-widest uppercase">
              TIMELINE: 2021 — 2026
            </span>
          </div>
        </div>
        
        {/* Scanning Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(250,204,21,0.5)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
      </div>
    </section>
  );
}

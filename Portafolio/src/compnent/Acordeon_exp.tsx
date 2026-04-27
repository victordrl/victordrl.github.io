// CARD DE EXPERIENCIA EN EMPRESA
import { IoLinkOutline, IoTerminalOutline } from "react-icons/io5";

interface Props {
  empresa: string;
  cargo: string;
  tiempo: string;
  lista: string[];
  path: string;
  open?: boolean;
}

export default function Acordeon({
  empresa,
  cargo,
  tiempo,
  lista,
  path,
  open = false,
}: Props) {
  return (
    <div className="bg-surface border border-outline/30 overflow-hidden group hover:border-primary/40 transition-all mb-4 w-full">
      <div className="collapse collapse-arrow rounded-none">
        <input type="checkbox" name="experience-accordion" defaultChecked={open} />
        
        <div className="collapse-title p-4 md:p-6 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="size-8 shrink-0 bg-surface-bright border border-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
              <IoTerminalOutline className="size-4" />
            </div>
            <h3 className="font-mono font-bold text-base md:text-lg text-white uppercase tracking-tighter truncate">
              {empresa}
            </h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[9px] md:text-[10px] uppercase tracking-widest">
            <span className="text-primary font-bold">{cargo}</span>
            <span className="text-secondary/30 hidden sm:inline">|</span>
            <span className="text-secondary/60">{tiempo}</span>
          </div>
        </div>
        
        <div className="collapse-content px-4 md:px-6 pb-6">
          <div className="h-px w-full bg-secondary/10 mb-6"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            <div className="lg:col-span-8">
              <ul className="space-y-4">
                {lista.map((item, index) => (
                  <li key={index} className="flex gap-3 md:gap-4 text-on-surface-variant font-sans text-xs md:text-sm leading-relaxed opacity-90 text-break">
                    <span className="text-secondary mt-1.5 font-mono text-[9px] md:text-[10px] font-bold shrink-0">[{index + 1}]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-4 justify-end">
              {path && (
                <button
                  className="btn-tech-outline w-full justify-center text-[10px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(path, "_blank");
                  }}
                >
                  ACCESS_JOB_LOG <IoLinkOutline className="size-4" />
                </button>
              )}
              <div className="font-mono text-[8px] text-secondary/30 uppercase tracking-[0.3em] text-center italic">
                // INTEGRITY_VERIFIED_BY_CORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

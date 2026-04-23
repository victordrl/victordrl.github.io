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
    <div className="bg-surface border border-outline/30 overflow-hidden group hover:border-primary/40 transition-all mb-4">
      <div className="collapse collapse-arrow rounded-none">
        <input type="checkbox" name="experience-accordion" defaultChecked={open} />
        
        <div className="collapse-title p-6 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-surface-bright border border-outline/20 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
              <IoTerminalOutline className="size-4" />
            </div>
            <h3 className="font-mono font-bold text-lg text-white uppercase tracking-tighter">
              {empresa}
            </h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-widest">
            <span className="text-primary font-bold">{cargo}</span>
            <span className="text-on-surface-variant/30 hidden sm:inline">|</span>
            <span className="text-on-surface-variant/60">{tiempo}</span>
          </div>
        </div>
        
        <div className="collapse-content px-6 pb-6">
          <div className="h-px w-full bg-outline/10 mb-6"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <ul className="space-y-4">
                {lista.map((item, index) => (
                  <li key={index} className="flex gap-4 text-on-surface-variant font-sans text-sm leading-relaxed opacity-80">
                    <span className="text-primary mt-1.5 font-mono text-[10px] font-bold">[{index + 1}]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-4 flex flex-col gap-4 justify-end">
              {path && (
                <button
                  className="btn-tech-outline w-full justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(path, "_blank");
                  }}
                >
                  ACCESS_JOB_LOG <IoLinkOutline className="size-4" />
                </button>
              )}
              <div className="font-mono text-[8px] text-on-surface-variant/20 uppercase tracking-[0.3em] text-center">
                INTEGRITY_VERIFIED_BY_CORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

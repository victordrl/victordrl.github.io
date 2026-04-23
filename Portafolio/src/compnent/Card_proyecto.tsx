// PROYECTO CARD
import { IoLinkOutline, IoCodeSlash } from "react-icons/io5";

interface Props {
  nombre: string;
  descripcion: string;
  lenguajes: string[];
  image: string;
  path: string;
}

export default function Card_P({
  nombre,
  descripcion,
  lenguajes,
  image,
  path,
}: Props) {
  return (
    <div className="bg-surface-bright border border-outline/30 overflow-hidden group hover:border-primary/50 transition-all flex flex-col h-full relative">
      {/* Terminal Top Bar */}
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <IoCodeSlash className="text-primary size-3" />
          <span>PROJECT_SCAN: {nombre}</span>
        </div>
        <span className="text-[8px] opacity-40">READY_FOR_EXECUTION</span>
      </div>

      {/* Image Preview */}
      <div className="relative h-56 overflow-hidden bg-black/50 border-b border-outline/20">
        <img
          src={image}
          alt={nombre}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
        />
        {/* Technical HUD Overlay */}
        <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
          <div className="flex justify-between font-mono text-[8px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span>[ TARGET_LOCKED ]</span>
            <span>ZOOM: 1.05x</span>
          </div>
          <div className="flex justify-between font-mono text-[8px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span>OBJ_ID: {Math.floor(Math.random() * 900) + 100}</span>
            <span>TYPE: SOURCE_CODE</span>
          </div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-mono font-bold text-xl text-white mb-4 uppercase tracking-tighter">
          {nombre}
        </h3>
        
        <p className="text-on-surface-variant text-xs font-sans leading-relaxed mb-8 flex-1 opacity-70 group-hover:opacity-100 transition-opacity">
          {descripcion}
        </p>
        
        {/* Technical Data Table */}
        <div className="grid grid-cols-2 gap-4 border-t border-outline/20 pt-6 mb-8 font-mono text-[10px] uppercase tracking-widest">
          <div className="flex flex-col gap-1">
            <span className="text-on-surface-variant/40">ENV_CORE</span>
            <span className="text-primary truncate">{lenguajes[0]}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-on-surface-variant/40">LIBRARIES</span>
            <span className="text-primary truncate">{lenguajes[1] || "N/A"}</span>
          </div>
        </div>

        <button
          className="btn-tech w-full"
          onClick={() => window.open(path, "_blank")}
        >
          ACCESS_SOURCE_CODE <IoLinkOutline className="size-4" />
        </button>
      </div>
      
      {/* Bottom Scanning Bar */}
      <div className="h-[2px] bg-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary w-1/3 animate-[scan_4s_linear_infinite] group-hover:animate-[scan_1s_linear_infinite]"></div>
      </div>
    </div>
  );
}

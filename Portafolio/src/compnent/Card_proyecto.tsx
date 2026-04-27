// PROYECTO CARD
import { IoLinkOutline, IoCodeSlash } from "react-icons/io5";

interface Props {
  nombre: string;
  descripcion: string;
  lenguajes: string[];
  image?: string;
  video?: string;
  path: string;
}

export default function Card_P({
  nombre,
  descripcion,
  lenguajes,
  image,
  video,
  path,
}: Props) {
  return (
    <div className="bg-surface-bright border border-outline/30 overflow-hidden group hover:border-primary/50 transition-all flex flex-col h-full relative w-full">
      {/* Terminal Top Bar */}
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <IoCodeSlash className="text-primary size-3" />
          <span className="truncate">PROJECT_SCAN: {nombre}</span>
        </div>
        <span className="text-[8px] opacity-40 hidden sm:inline">READY_FOR_EXECUTION</span>
      </div>

      {/* Media Preview */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-black/50 border-b border-secondary/10">
        {video ? (
          <video
            src={video}
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={image}
            alt={nombre}
            className="w-full h-full object-cover opacity-60 img-tech group-hover:scale-105"
          />
        )}
        {/* Technical HUD Overlay */}
        <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
          <div className="flex justify-between font-mono text-[8px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span>[ TARGET_LOCKED ]</span>
            <span>ZOOM: 1.05x</span>
          </div>
          <div className="flex justify-between font-mono text-[8px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
            <span>OBJ_ID: {Math.floor(Math.random() * 900) + 100}</span>
            <span>TYPE: SOURCE_CODE</span>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="font-mono font-bold text-lg md:text-xl text-white mb-4 uppercase tracking-tighter truncate">
          {nombre}
        </h3>
        
        <p className="text-on-surface-variant text-xs font-sans leading-relaxed mb-8 flex-1 opacity-80 group-hover:opacity-100 transition-opacity text-break">
          {descripcion}
        </p>
        
        {/* Technical Data Table */}
        <div className="grid grid-cols-2 gap-4 border-t border-secondary/10 pt-6 mb-8 font-mono text-[9px] md:text-[10px] uppercase tracking-widest">
          <div className="flex flex-col gap-1 overflow-hidden">
            <span className="text-on-surface-variant/40">ENV_CORE</span>
            <span className="text-primary truncate">{lenguajes[0]}</span>
          </div>
          <div className="flex flex-col gap-1 overflow-hidden">
            <span className="text-on-surface-variant/40">LIBRARIES</span>
            <span className="text-primary truncate">{lenguajes[1] || "N/A"}</span>
          </div>
        </div>

        <button
          className="btn-tech w-full text-[10px]"
          onClick={() => window.open(path, "_blank")}
        >
          ACCESS_SOURCE_CODE <IoLinkOutline className="size-4" />
        </button>
      </div>
      
      {/* Bottom Scanning Bar */}
      <div className="h-[2px] bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary w-1/3 animate-[scan_4s_linear_infinite] group-hover:animate-[scan_1s_linear_infinite]"></div>
      </div>
    </div>
  );
}

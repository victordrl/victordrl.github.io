// CARD INFO SKILS
interface Props {
  children: React.ReactNode;
  titulo: string;
  contenido: string;
}

export default function CardSkils({ children, titulo, contenido }: Props) {
  return (
    <div className="glass-card flex items-center p-4 gap-4 w-full tech-border group">
      <div className="flex-shrink-0 bg-surface-bright p-3 border border-secondary/20 group-hover:border-primary/30 transition-colors">
        <div className="img-tech">
          {children}
        </div>
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <div className="font-mono font-bold text-sm text-white uppercase tracking-tight">{titulo}</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`size-1.5 rounded-full animate-pulse ${
              contenido === "Avanzado" ? "bg-primary" : 
              contenido === "Intermedio" ? "bg-secondary" : 
              "bg-tertiary"
            }`}></div>
            <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">
              {contenido}
            </span>
          </div>
          {/* Technical Progress Bar */}
          <div className="w-16 h-[2px] bg-outline/20 rounded-full overflow-hidden hidden sm:block">
            <div className={`h-full transition-all duration-1000 ${
              contenido === "Avanzado" ? "w-[90%] bg-primary" : 
              contenido === "Intermedio" ? "w-[65%] bg-secondary" : 
              "w-[35%] bg-tertiary"
            }`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

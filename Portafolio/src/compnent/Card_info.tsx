// CARD INFO ABOUT ME
interface Props {
  children: React.ReactNode;
  titulo: string;
  contenido: string;
}

export default function CardInfo({ children, titulo, contenido }: Props) {
  return (
    <div className="glass-card flex flex-col items-center p-6 tech-border relative group">
      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 size-4 border-t border-r border-primary/30 group-hover:border-primary transition-colors"></div>
      
      <figure className="text-primary mb-6 transition-transform duration-500 group-hover:scale-110">
        {children}
      </figure>
      
      <div className="font-mono text-sm font-bold tracking-[0.2em] text-white mb-2 uppercase italic">
        {titulo}
      </div>
      
      <div className="h-px w-8 bg-primary/20 mb-4 group-hover:w-16 transition-all"></div>
      
      <div className="text-xs text-on-surface-variant font-sans text-center leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
        {contenido}
      </div>
    </div>
  );
}

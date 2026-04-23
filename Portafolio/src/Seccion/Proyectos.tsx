// PORTAFOLIO CUADRICULA
import Card_P from "../compnent/Card_proyecto";

export default function Portafolio() {
  const proyectos = [
    {
      nombre: "Puzzle Game",
      descripcion: "Algoritmos de ruteo y resolución de estados aplicados a un motor de juego de escritorio nativo.",
      lenguajes: ["C++", "VS_2022_CORE"],
      image: "/puzzle_img.png",
      path: "https://github.com/victordrl/PUZZLE",
    },
    {
      nombre: "Poker Neural Network",
      descripcion: "Simulación de múltiples salas de juego con integración de lógica distribuida y análisis de tiempo real.",
      lenguajes: ["REACT_TS", "FASTAPI_BACKEND"],
      image: "/poker_img.png",
      path: "https://github.com/victordrl/POKER",
    },
    {
      nombre: "Survey Intelligence",
      descripcion: "Framework de captura y procesamiento estadístico de datos masivos con filtros de alta precisión.",
      lenguajes: ["PYTHON_ML", "QT_FRAMEWORK"],
      image: "/encuesta_img.png",
      path: "https://github.com/victordrl/SURVEY-MNAGER",
    },
    {
      nombre: "Schedule Optimizer",
      descripcion: "Sistema de optimización logística para la gestión de colisiones en flujos de datos temporales.",
      lenguajes: ["REACT_TS", "TAILWIND_V4"],
      image: "/horario_img.png",
      path: "https://github.com/victordrl/Hypsi",
    },
  ];

  return (
    <section id="proyec" className="tech-container py-24">
      {/* Section Label */}
      <div className="tech-section-label">
        <span>03 // SELECTED_WORKS</span>
        <div className="line"></div>
      </div>

      {/* Featured Technical Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {proyectos.map((proyecto, index) => (
          <Card_P
            key={index}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            lenguajes={proyecto.lenguajes}
            image={proyecto.image}
            path={proyecto.path}
          />
        ))}
      </div>

      {/* Technical Footer Accent */}
      <div className="mt-16 border border-dashed border-outline/30 p-8 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="font-mono text-xs text-on-surface-variant uppercase tracking-widest italic opacity-50">
          // SCANNING_REMAINING_REPOS: 04_OBJECTS_DETECTED
        </div>
        <a 
          href="https://github.com/victordrl" 
          target="_blank"
          className="btn-tech-outline"
        >
          VIEW_ALL_REPOSITORY_SOURCES >>
        </a>
      </div>
    </section>
  );
}

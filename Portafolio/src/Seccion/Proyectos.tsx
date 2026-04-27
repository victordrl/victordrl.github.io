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
      nombre: "Cripty Chat",
      descripcion: "Comunicación segura con cifrado de extremo a extremo (libsodium) y autenticación biométrica WebAuthn.",
      lenguajes: ["Next.js 15", "Socket.io"],
      video: "/chat_video.mp4",
      path: "https://github.com/victordrl/chat_encrypt",
    },
    {
      nombre: "Survey Intelligence",
      descripcion: "Framework de captura y procesamiento estadístico de datos masivos con filtros de alta precisión.",
      lenguajes: ["PYTHON_ML", "QT_FRAMEWORK"],
      image: "/encuesta_img.png",
      path: "https://github.com/victordrl/SURVEY-MNAGER",
    },
    {
      nombre: "Survey Models API",
      descripcion: "Motor de análisis predictivo basado en regresión lineal para el procesamiento de encuestas dinámicas.",
      lenguajes: ["FastAPI", "Scikit-Learn"],
      video: "/-.mp4",
      path: "https://github.com/victordrl/survey-models",
    },
  ];

  return (
    <section id="proyec" className="tech-container py-24 relative overflow-hidden">
      {/* Section Label - Gold Decoration */}
      <div className="tech-section-label">
        <span className="text-primary font-bold">03 // SELECTED_WORKS_REPOSITORY</span>
        <div className="line !bg-primary/40"></div>
      </div>

      {/* Featured Technical Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {proyectos.map((proyecto, index) => (
          <Card_P
            key={index}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            lenguajes={proyecto.lenguajes}
            image={proyecto.image}
            video={proyecto.video}
            path={proyecto.path}
          />
        ))}
      </div>

      {/* Technical Footer Accent - Gold Text */}
      <div className="mt-16 border border-dashed border-primary/20 p-8 flex flex-col sm:flex-row justify-between items-center gap-6 bg-surface-bright/20 relative">
        <div className="absolute top-0 left-0 px-2 bg-primary text-black font-mono text-[6px] font-bold">SOURCE_MAP_SCAN</div>
        <div className="font-mono text-xs text-primary uppercase tracking-[0.2em] font-bold italic">
          // SCANNING_REMAINING_REPOS: 04_OBJECTS_DETECTED
        </div>
        <a 
          href="https://github.com/victordrl" 
          target="_blank"
          className="btn-tech-outline group"
        >
          <span className="group-hover:text-white transition-colors">VIEW_ALL_REPOSITORY_SOURCES {'>>'}</span>
        </a>
      </div>

      {/* HUD background labels */}
      <div className="absolute bottom-4 right-6 font-mono text-[7px] text-primary/10 tracking-[0.5em] uppercase hidden lg:block">
        OBJECT_DETECTION_ALGORITHM_RUNNING
      </div>
    </section>
  );
}

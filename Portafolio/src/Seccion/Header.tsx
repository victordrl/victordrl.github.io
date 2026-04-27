// HEADER SECCION
import { useState, useEffect } from "react";
import { IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiDocumentArrowDown, HiChevronRight } from "react-icons/hi2";
import cv from "../assets/CVPilon.pdf";

export default function Header() {
  const [copyMessage, setCopyMessage] = useState("");
  const [matrixColumns, setMatrixColumns] = useState<{ id: number; left: string; duration: string; delay: string; text: string }[]>([]);

  useEffect(() => {
    // Generate Matrix Columns
    const cols = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${(i * 2.5)}%`,
      duration: `${Math.random() * 5 + 10}s`, // Slower: 10-15s
      delay: `${Math.random() * -20}s`,
      text: Array.from({ length: 20 }).map(() => 
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 36)]
      ).join(" ")
    }));
    setMatrixColumns(cols);
  }, []);

  const copy_text = (text: string) => {
    return (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopyMessage("Copiado");
          setTimeout(() => setCopyMessage(""), 1000);
        })
        .catch((err) => console.error("Error", err));
    };
  };

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      {/* Matrix Background Effect - Increased opacity for visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-black overflow-hidden opacity-70">
        <div className="flex w-full h-full justify-between">
          {matrixColumns.map((col) => (
            <div
              key={col.id}
              className="animate-matrix font-mono text-[10px] md:text-xs text-primary writing-vertical break-all whitespace-pre"
              style={{
                left: col.left,
                animationDuration: col.duration,
                animationDelay: col.delay,
              }}
            >
              {col.text}
            </div>
          ))}
        </div>
      </div>

      <div className="tech-container z-10 w-full flex flex-col items-center">
        {/* Terminal Header Info - Using HUD Gold Utility */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center md:items-end mb-6 gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-hud-gold animate-pulse">// SYSTEM_NODE_ACTIVE</span>
            <span className="text-hud-gold">SCAN_COORD: 8.2974° N, 62.7214° W</span>
          </div>
          <div className="text-center md:text-right flex flex-col gap-1">
            <span className="text-hud-gold">VERIFICATION: SUCCESSFUL</span>
            <span className="text-hud-purple italic">PROTOCOL_VERSION: AR-LTS_v4</span>
          </div>
        </div>

        {/* Hero Terminal Card */}
        <div className="w-full max-w-5xl bg-surface/90 border border-primary/20 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] relative group backdrop-blur-sm">
          {/* Top Bar */}
          <div className="terminal-header">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-primary"></div>
              <span className="text-hud-gold">PROJECT_CORE_ENGINE</span>
            </div>
            <div className="flex gap-4">
              <span className="hidden sm:inline text-hud-purple">LATENCY: 12ms</span>
              <span className="text-hud-gold">TERMINAL_ID: AR-901</span>
            </div>
          </div>

          <div className="p-6 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-12">
            {/* Portrait Section */}
            <div className="relative shrink-0">
              <div className="absolute -top-2 -left-2 size-6 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute -bottom-2 -right-2 size-6 border-b-2 border-r-2 border-primary"></div>
              
              <figure className="relative w-44 h-44 sm:w-64 sm:h-64 overflow-hidden border border-primary/20 bg-surface-bright p-1">
                <img
                  src="/kirby.png"
                  alt="Victor Rojas"
                  className="w-full h-full object-cover img-tech"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-secondary/10 bg-[size:100%_4px] pointer-events-none opacity-20"></div>
              </figure>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 text-center md:text-left w-full">
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start font-mono text-primary text-[10px] md:text-xs font-bold tracking-[0.3em]">
                <span>[ CORE_IDENTITY_ESTABLISHED ]</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-mono font-bold tracking-tighter mb-4 text-white">
                VICTOR ROJAS<br />
                <span className="text-primary italic">AI-NATIVE ENGINEER</span>
              </h1>
              
              <p className="text-on-surface-variant font-sans text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto md:mx-0 opacity-100">
                Especialista en orquestación de datos y arquitectura de sistemas complejos. 
                Estudiante de Ingeniería Informática enfocado en el desarrollo de software 
                de alta precisión y análisis predictivo. Construyendo el puente entre el 
                silicio y la inteligencia biológica.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#proyec" className="btn-tech w-full sm:w-auto">
                  EXECUTE_PROJECT_SCAN <HiChevronRight className="size-4" />
                </a>
                <a href={cv} download className="btn-tech-outline w-full sm:w-auto">
                  GET_DOCS.PDF <HiDocumentArrowDown className="size-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="h-1 bg-secondary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary w-1/4 animate-[scan_3s_linear_infinite]"></div>
          </div>
        </div>

        {/* Social Links Footer Bar */}
        <div className="w-full max-w-5xl mt-12 flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 border-t border-primary/20 pt-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a
              href="https://github.com/victordrl"
              target="_blank"
              className="text-hud-gold hover:text-white transition-colors flex items-center gap-2"
            >
              <IoLogoGithub className="size-4" /> GITHUB_REPO
            </a>
            <a
              href="#"
              onClick={copy_text("+58 0412 9884153")}
              className="text-hud-gold hover:text-white transition-colors flex items-center gap-2"
            >
              <IoLogoWhatsapp className="size-4" /> VOICE_COMMS
            </a>
            <a
              href="#"
              onClick={copy_text("victor.rojas17.09@gmail.com")}
              className="text-hud-gold hover:text-white transition-colors flex items-center gap-2 relative"
            >
              <IoMail className="size-4" /> NEURAL_MAIL
              {copyMessage && <span className="absolute -top-6 left-0 text-secondary text-[8px] animate-bounce">{copyMessage}</span>}
            </a>
          </div>
          <div className="text-hud-purple italic text-center">
            // SEEKING_HIGH_IMPACT_COLLABORATIONS
          </div>
        </div>
      </div>

      <style>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: upright;
        }
      `}</style>
    </header>
  );
}

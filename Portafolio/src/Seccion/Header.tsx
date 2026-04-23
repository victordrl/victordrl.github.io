// HEADER SECCION
import { useState } from "react";
import { IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiDocumentArrowDown, HiChevronRight } from "react-icons/hi2";
import cv from "../assets/CVPilon.pdf";

export default function Header() {
  const [copyMessage, setCopyMessage] = useState("");

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
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Scanning Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FACC15_1px,transparent_1px),linear-gradient(to_bottom,#FACC15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.1),transparent_70%)]"></div>
      </div>

      <div className="tech-container z-10 w-full flex flex-col items-center">
        {/* Terminal Header Info */}
        <div className="w-full max-w-5xl flex justify-between items-end mb-4 font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">
          <div className="flex flex-col gap-1">
            <span className="text-primary font-bold">// SYSTEM_ACTIVE</span>
            <span>SCAN_COORD: 8.2974° N, 62.7214° W</span>
          </div>
          <div className="text-right flex flex-col gap-1">
            <span>VERIFICATION: SUCCESSFUL</span>
            <span>OS_CORE: v4.0.17_LTS</span>
          </div>
        </div>

        {/* Hero Terminal Card */}
        <div className="w-full max-w-5xl bg-surface border border-outline/30 overflow-hidden shadow-2xl relative group">
          {/* Top Bar */}
          <div className="terminal-header">
            <div className="flex items-center gap-2">
              <div className="size-2 bg-primary"></div>
              <span>PROJECT_CORE_ENGINE</span>
            </div>
            <div className="flex gap-4">
              <span>001:X</span>
              <span>TERMINAL_ID: AR-901</span>
            </div>
          </div>

          <div className="p-8 sm:p-12 flex flex-col md:flex-row items-center gap-12">
            {/* Portrait Section */}
            <div className="relative">
              {/* Corner Accents */}
              <div className="absolute -top-2 -left-2 size-6 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute -bottom-2 -right-2 size-6 border-b-2 border-r-2 border-primary"></div>
              
              <figure className="relative w-48 h-48 sm:w-64 sm:h-64 overflow-hidden border border-outline/50 bg-surface-bright p-1">
                <img
                  src="/kirby.png"
                  alt="Victor Rojas"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/10 bg-[size:100%_4px] pointer-events-none opacity-20"></div>
              </figure>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start font-mono text-primary text-xs font-bold tracking-[0.3em]">
                <span>[ CORE_IDENTITY ]</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-mono font-bold tracking-tighter mb-2 text-white">
                VICTOR ROJAS<br />
                <span className="text-primary italic">AI-NATIVE ENGINEER</span>
              </h1>
              
              <p className="text-on-surface-variant font-sans text-sm sm:text-base leading-relaxed mb-10 max-w-xl opacity-80">
                Especialista en orquestación de datos y arquitectura de sistemas complejos. 
                Estudiante de Ingeniería Informática enfocado en el desarrollo de software 
                de alta precisión y análisis predictivo. Construyendo el puente entre el 
                silicio y la inteligencia biológica.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#proyec" className="btn-tech">
                  EXECUTE_PROJECT_SCAN <HiChevronRight className="size-4" />
                </a>
                <a href={cv} download className="btn-tech-outline">
                  GET_DOCS.PDF <HiDocumentArrowDown className="size-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Scanline */}
          <div className="h-1 bg-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary w-1/4 animate-[scan_3s_linear_infinite]"></div>
          </div>
        </div>

        {/* Social Links Footer Bar */}
        <div className="w-full max-w-5xl mt-8 flex flex-wrap justify-center md:justify-between items-center gap-8 border-t border-outline/20 pt-8">
          <div className="flex gap-8">
            <a
              href="https://github.com/victordrl"
              target="_blank"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold"
            >
              <IoLogoGithub className="size-4" /> GITHUB
            </a>
            <a
              href="#"
              onClick={copy_text("+58 0412 9884153")}
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold"
            >
              <IoLogoWhatsapp className="size-4" /> WHATSAPP
            </a>
            <a
              href="#"
              onClick={copy_text("victor.rojas17.09@gmail.com")}
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold relative"
            >
              <IoMail className="size-4" /> EMAIL
              {copyMessage && <span className="absolute -top-6 left-0 text-primary text-[8px] animate-bounce">{copyMessage}</span>}
            </a>
          </div>
          <div className="font-mono text-[10px] text-primary/50 uppercase tracking-[0.2em] italic">
            // SEEKING_CORE_OPPORTUNITIES
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </header>
  );
}

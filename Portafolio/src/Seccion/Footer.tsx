// FOOTER SECCION
import { useState } from "react";
import { IoMail } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiLocationMarker, HiChevronRight } from "react-icons/hi";

export default function Footer() {
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
    <footer id="info" className="tech-container py-16 md:py-24 border-t border-secondary/20 overflow-hidden">
      {/* Section Label */}
      <div className="tech-section-label">
        <span className="text-primary">05 // CONTACT_CORE</span>
        <div className="line !bg-secondary/30"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Identity */}
        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="size-20 bg-surface-bright border border-primary/20 p-1 shrink-0">
              <img src="/kirby.png" alt="Victor Rojas" className="w-full h-full object-cover img-tech" />
            </div>
            <div>
              <h4 className="font-mono font-bold text-2xl text-white uppercase tracking-tighter">VICTOR ROJAS</h4>
              <p className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] italic animate-pulse">// AI_NATIVE_ENGINEER</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-on-surface-variant font-mono text-sm">
            <HiLocationMarker className="text-secondary size-5" />
            <span className="tracking-tight">PUERTO ORDAZ, VENEZUELA</span>
          </div>
          
          <p className="text-on-surface-variant/70 font-sans text-sm leading-relaxed max-w-sm">
            Diseñando y construyendo el futuro del software con precisión técnica, 
            arquitecturas escalables y una visión orientada a la inteligencia artificial.
          </p>

          <div className="font-mono text-[8px] text-secondary/30 uppercase tracking-[0.4em] mt-auto">
            © 2025 // CORE_RESERVED // SYSTEM_TIME: {new Date().getFullYear()}
          </div>
        </div>

        {/* Right Side: Technical Contact Form Placeholder / Links */}
        <div className="lg:col-span-7 bg-surface-bright border border-outline/30 p-6 md:p-12 relative overflow-hidden w-full">
          <div className="terminal-header absolute top-0 left-0 w-full">
            <span className="text-primary/70">INITIATE_CONTACT_PROTOCOL</span>
            <span className="text-secondary/70">STATUS: READY</span>
          </div>
          
          <div className="mt-8 flex flex-col gap-6 w-full">
            <h3 className="font-mono text-lg md:text-xl font-bold text-white uppercase tracking-tighter mb-2 md:mb-4">
              LET'S_BUILD_SOMETHING_PRECISE
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <a
                href="#"
                onClick={copy_text("victor.rojas17.09@gmail.com")}
                className="glass-card p-4 md:p-6 tech-border group flex flex-col gap-3 overflow-hidden"
              >
                <div className="flex justify-between items-center">
                  <IoMail className="text-primary size-6" />
                  <HiChevronRight className="text-secondary/20 group-hover:text-primary transition-colors" />
                </div>
                <div className="overflow-hidden">
                  <div className="font-mono text-[8px] text-secondary/50 uppercase tracking-widest mb-1">EMAIL_CHANNEL</div>
                  <div className="font-mono text-[10px] md:text-xs text-white truncate text-break">
                    {copyMessage || "victor.rojas17.09@gmail.com"}
                  </div>
                </div>
              </a>

              <a
                href="#"
                onClick={copy_text("+58 0412 9884153")}
                className="glass-card p-4 md:p-6 tech-border group flex flex-col gap-3"
              >
                <div className="flex justify-between items-center">
                  <IoLogoWhatsapp className="text-primary size-6" />
                  <HiChevronRight className="text-secondary/20 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="font-mono text-[8px] text-secondary/50 uppercase tracking-widest mb-1">VOICE_LINK</div>
                  <div className="font-mono text-xs text-white tracking-tighter">+58 0412 9884153</div>
                </div>
              </a>

              <a
                href="https://github.com/victordrl"
                target="_blank"
                className="glass-card p-4 md:p-6 tech-border group flex flex-col gap-3 sm:col-span-2"
              >
                <div className="flex justify-between items-center">
                  <IoLogoGithub className="text-primary size-6" />
                  <HiChevronRight className="text-secondary/20 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="font-mono text-[8px] text-secondary/50 uppercase tracking-widest mb-1">SOURCE_CONTROL</div>
                  <div className="font-mono text-xs text-white">github.com/victordrl</div>
                </div>
              </a>
            </div>
            
            <div className="mt-4 pt-8 border-t border-secondary/10 flex justify-center">
              <div className="font-mono text-[9px] md:text-[10px] text-secondary/40 animate-pulse tracking-[0.3em] text-center">
                // LISTENING_FOR_INCOMING_CONNECTIONS
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

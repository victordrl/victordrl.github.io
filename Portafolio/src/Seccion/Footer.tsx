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
    <footer id="info" className="tech-container py-24 border-t border-outline/20">
      {/* Section Label */}
      <div className="tech-section-label">
        <span>05 // CONTACT_CORE</span>
        <div className="line"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Identity */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <div className="size-20 bg-surface-bright border border-outline/20 p-1">
              <img src="/kirby.png" alt="Victor Rojas" className="w-full h-full object-cover grayscale" />
            </div>
            <div>
              <h4 className="font-mono font-bold text-2xl text-white uppercase tracking-tighter">VICTOR ROJAS</h4>
              <p className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] italic">// AI_NATIVE_ENGINEER</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-on-surface-variant font-mono text-sm">
            <HiLocationMarker className="text-primary size-5" />
            <span>PUERTO ORDAZ, VENEZUELA</span>
          </div>
          
          <p className="text-on-surface-variant/60 font-sans text-sm leading-relaxed max-w-sm">
            Diseñando y construyendo el futuro del software con precisión técnica, 
            arquitecturas escalables y una visión orientada a la inteligencia artificial.
          </p>

          <div className="font-mono text-[8px] text-on-surface-variant/20 uppercase tracking-[0.4em] mt-auto">
            © 2025 // CORE_RESERVED // SYSTEM_TIME: {new Date().getFullYear()}
          </div>
        </div>

        {/* Right Side: Technical Contact Form Placeholder / Links */}
        <div className="lg:col-span-7 bg-surface-bright border border-outline/30 p-8 sm:p-12 relative overflow-hidden">
          <div className="terminal-header absolute top-0 left-0 w-full">
            <span>INITIATE_CONTACT_PROTOCOL</span>
            <span>STATUS: READY</span>
          </div>
          
          <div className="mt-6 flex flex-col gap-6">
            <h3 className="font-mono text-xl font-bold text-white uppercase tracking-tighter mb-4">
              LET'S_BUILD_SOMETHING_PRECISE
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="#"
                onClick={copy_text("victor.rojas17.09@gmail.com")}
                className="glass-card p-6 tech-border group flex flex-col gap-3"
              >
                <div className="flex justify-between items-center">
                  <IoMail className="text-primary size-6" />
                  <HiChevronRight className="text-on-surface-variant/20 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="font-mono text-[8px] text-on-surface-variant/40 uppercase tracking-widest mb-1">EMAIL_CHANNEL</div>
                  <div className="font-mono text-xs text-white truncate">{copyMessage || "victor.rojas17.09@gmail.com"}</div>
                </div>
              </a>

              <a
                href="#"
                onClick={copy_text("+58 0412 9884153")}
                className="glass-card p-6 tech-border group flex flex-col gap-3"
              >
                <div className="flex justify-between items-center">
                  <IoLogoWhatsapp className="text-primary size-6" />
                  <HiChevronRight className="text-on-surface-variant/20 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="font-mono text-[8px] text-on-surface-variant/40 uppercase tracking-widest mb-1">VOICE_LINK</div>
                  <div className="font-mono text-xs text-white">+58 0412 9884153</div>
                </div>
              </a>

              <a
                href="https://github.com/victordrl"
                target="_blank"
                className="glass-card p-6 tech-border group flex flex-col gap-3 md:col-span-2"
              >
                <div className="flex justify-between items-center">
                  <IoLogoGithub className="text-primary size-6" />
                  <HiChevronRight className="text-on-surface-variant/20 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="font-mono text-[8px] text-on-surface-variant/40 uppercase tracking-widest mb-1">SOURCE_CONTROL</div>
                  <div className="font-mono text-xs text-white">github.com/victordrl</div>
                </div>
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-outline/10 flex justify-center">
              <div className="font-mono text-[10px] text-primary/40 animate-pulse tracking-[0.3em]">
                // LISTENING_FOR_INCOMING_CONNECTIONS
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

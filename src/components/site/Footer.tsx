import { Phone, Mail, Linkedin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer id="contato" className="bg-foreground text-cream/90 py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 grid md:grid-cols-3 gap-12">
        {/* Bloco de Identidade */}
        <div className="flex flex-col gap-4">
          <a
            href="#top"
            className="flex items-center gap-3 leading-tight hover:opacity-80 transition"
          >
            <img
              src={logo}
              alt="Logo Jade Távora Soares"
              className="h-12 w-auto md:h-14 opacity-90"
            />
            <span className="flex flex-col">
              <span className="font-serif text-lg md:text-xl text-cream">Jade Távora Soares</span>
              <span className="text-[11px] tracking-[0.18em] uppercase text-cream/70">
                Psicóloga · CRP 04/74248
              </span>
            </span>
          </a>
          <p className="text-cream/80 text-sm mt-2">Será um prazer te receber.</p>
        </div>

        {/* Links de Contato */}
        <div className="space-y-4 text-sm">
          <a
            href="https://wa.me/5531972123810?text=Ol%C3%A1!%20Acessei%20o%20site%20e%20gostaria%20de%20saber%20sobre%20a%20disponibilidade%20de%20hor%C3%A1rios%20para%20agendar%20uma%20sess%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-cream/60 transition text-cream"
          >
            <Phone className="h-4 w-4" /> +55 31 97212-3810
          </a>
          <a
            href="mailto:psijadetavora@gmail.com"
            className="flex items-center gap-3 hover:text-cream/60 transition text-cream"
          >
            <Mail className="h-4 w-4" /> psijadetavora@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/jade-távora-soares/"
            aria-label="LinkedIn"
            className="flex items-center gap-3 hover:text-cream/60 transition text-cream"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        {/* Horários de Atendimento */}
        <div className="space-y-3 text-sm text-cream/70">
          <div className="flex items-start gap-3">
            <Clock className="h-4 w-4 mt-0.5 shrink-0" />
            <div>
              <p className="text-cream">Seg a Sex · 8h às 20h</p>
              <p className="text-cream/60">Consultar disponibilidade.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="mx-auto max-w-6xl px-6 lg:px-10 mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
        <p>© {new Date().getFullYear()} Jade Távora Soares · Psicóloga · CRP 04/74248</p>
        <p>Florescer é aprender no próprio tempo.</p>
      </div>
    </footer>
  );
}

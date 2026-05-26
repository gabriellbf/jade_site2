import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-3 md:h-20 md:py-0 flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-0">
        <a href="#top" className="flex items-center gap-3 leading-tight">
          <img src={logo} alt="Logo Jade Távora Soares" className="h-12 w-auto md:h-14" />
          <span className="flex flex-col">
            <span className="font-serif text-lg md:text-xl text-foreground">
              Jade Távora Soares
            </span>
            <span className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              Psicóloga · CRP 04/74248
            </span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground transition">
            Sobre
          </a>
          <a href="#servicos" className="hover:text-foreground transition">
            Serviços
          </a>
          <a href="#faq" className="hover:text-foreground transition">
            FAQ
          </a>
          <a href="#contato" className="hover:text-foreground transition">
            Contato
          </a>
        </nav>
        <a
          href="https://wa.me/5531972123810?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition shadow-sm w-full md:w-auto"
        >
          Agendar sessão
        </a>
      </div>
    </header>
  );
}

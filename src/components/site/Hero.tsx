import heroImg from "@/assets/jade-hero.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-8">
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-sage-deep">
            <span className="h-px w-8 bg-sage-deep/60" />
            Psicologia Clínica
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Psicóloga <span className="italic text-sage-deep">especialista</span> em Análise do
            Comportamento
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-muted-foreground max-w-xl">
            “Florescer é aprender no próprio tempo.”
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://wa.me/5531972123810?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-4 text-base font-medium hover:bg-primary/90 transition shadow-md"
            >
              Agendar minha primeira sessão
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center rounded-full border border-border bg-card px-7 py-4 text-base font-medium text-foreground hover:bg-muted transition"
            >
              Conhecer a terapia
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="absolute -inset-6 bg-sage/30 rounded-[2.5rem] -rotate-2" aria-hidden />
          <div
            className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-accent/40 blur-2xl"
            aria-hidden
          />
          <img
            src={heroImg}
            alt="Jade Távora Soares, psicóloga, sorrindo enquanto lê um livro à luz natural"
            className="relative rounded-[2rem] shadow-2xl object-cover w-full aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}

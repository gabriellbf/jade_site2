export function Quote() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center space-y-8">
        <span className="font-serif text-6xl text-sage-deep/40 leading-none">“</span>
        <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug italic text-foreground/90">
          Não considere nenhuma prática como imutável. Mude e esteja pronto a mudar novamente.
          Não aceite verdade eterna. Experimente.
        </p>
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">— B. F. Skinner</p>
      </div>
    </section>
  );
}

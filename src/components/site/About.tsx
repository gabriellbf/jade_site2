import portrait from "@/assets/jade-portrait.png";

export function About() {
  return (
    <section id="sobre" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 relative">
          <img
            src={portrait}
            alt="Jade Távora Soares sorrindo, com luz natural"
            className="rounded-[2rem] shadow-xl object-cover w-full aspect-[4/5]"
          />
        </div>
        <div className="lg:col-span-7 space-y-8">
          <span className="text-xs tracking-[0.25em] uppercase text-sage-deep">Sobre a Terapia</span>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Um caminho gentil para melhorar a sua qualidade de vida.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A terapia é um processo de cuidado: um tempo dedicado a olhar para você, compreender suas
            emoções e construir, junto comigo, formas mais leves de viver. Cada encontro é planejado
            com escuta, ciência e respeito ao seu ritmo.
          </p>
          <blockquote className="border-l-2 border-sage-deep pl-6 font-serif italic text-2xl text-foreground/90 leading-snug">
            “Aqui você encontra um espaço acolhedor para falar sobre o que sente sem julgamentos.
            Um lugar seguro para olhar para as suas emoções e cuidar da sua saúde mental.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

import jade2 from "@/assets/jade-2.png";
import jade3 from "@/assets/jade-3.png";

const therapies = [
  {
    title: "Psicoterapia Infantil",
    text: "A infância é fundamental para o desenvolvimento emocional, social e comportamental. A psicoterapia infantil ajuda a criança a compreender e expressar suas emoções, desenvolvendo habilidades importantes para o dia a dia.",
  },
  {
    title: "Psicoterapia para Adolescentes",
    text: "A adolescência é uma fase de muitas mudanças, descobertas e desafios. A terapia é um espaço seguro para o adolescente se expressar, compreender suas emoções e desenvolver recursos para essa fase.",
  },
  {
    title: "Psicoterapia para Adultos",
    text: "Um espaço de escuta, reflexão e desenvolvimento. Trabalhamos juntos para compreender padrões, emoções difíceis e situações que impactam sua qualidade de vida — e construir caminhos mais funcionais e saudáveis.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 space-y-24">
        {/* Terapias */}
        <div>
          <div className="max-w-2xl mb-12">
            <span className="text-xs tracking-[0.25em] uppercase text-sage-deep">Serviços</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">Terapias</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {therapies.map((t, i) => (
              <article
                key={t.title}
                className="rounded-3xl bg-card border border-border p-8 flex flex-col gap-4 hover:shadow-lg transition"
              >
                <span className="font-serif text-5xl text-sage-deep/30">0{i + 1}</span>
                <h3 className="font-serif text-2xl">{t.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.text}</p>
              </article>
            ))}
          </div>
        </div>

        {/* ABA */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <img
              src={jade2}
              alt="Jade conversando"
              className="rounded-[2rem] shadow-xl object-cover w-full aspect-[4/5]"
            />
          </div>
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs tracking-[0.25em] uppercase text-sage-deep">
              Especialidade
            </span>
            <h3 className="font-serif text-3xl md:text-4xl">Intervenção ABA</h3>
            <p className="text-muted-foreground leading-relaxed">
              A Análise do Comportamento Aplicada (ABA) é uma abordagem científica voltada para
              compreender e desenvolver comportamentos importantes para a vida diária. É amplamente
              utilizada em intervenções com crianças com Transtorno do Espectro Autista (TEA),
              visando o desenvolvimento de habilidades sociais, comunicativas, cognitivas e de
              autonomia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada intervenção é planejada de forma individualizada, respeitando as necessidades de
              cada paciente, com ensino estruturado e baseado em evidências.
            </p>
          </div>
        </div>

        {/* Orientação de Pais */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
            <span className="text-xs tracking-[0.25em] uppercase text-sage-deep">Famílias</span>
            <h3 className="font-serif text-3xl md:text-4xl">Orientação de Pais</h3>
            <p className="text-muted-foreground leading-relaxed">
              Um espaço dedicado aos pais ou responsáveis que desejam compreender melhor o
              comportamento da criança e aprender estratégias mais eficazes. Ajuda em dificuldades
              de comportamento, birras, frustrações, rotina, comunicação e dúvidas sobre
              desenvolvimento.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Durante os encontros, analisamos as situações e desenvolvemos estratégias práticas
              baseadas na Análise do Comportamento.
            </p>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <img
              src={jade3}
              alt="Jade com livros de psicologia"
              className="rounded-[2rem] shadow-xl object-cover w-full aspect-[4/5]"
            />
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="rounded-3xl bg-sage-deep text-primary-foreground p-10 md:p-14 text-center space-y-6">
          <h3 className="font-serif text-3xl md:text-4xl max-w-2xl mx-auto leading-tight">
            Ficou com dúvidas sobre qual é o melhor formato para você?
          </h3>
          <p className="text-primary-foreground/80">Vamos conversar.</p>
          <a
            href="https://wa.me/5531972123810?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-accent text-accent-foreground px-7 py-4 font-medium hover:bg-accent/90 transition"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona o processo terapêutico?",
    a: "Começamos com uma conversa inicial para entender suas demandas. A partir daí, definimos juntos objetivos e a frequência ideal dos encontros.",
  },
  {
    q: "Você atende apenas online?",
    a: "Realizo atendimentos online para todo o Brasil e presenciais conforme disponibilidade. Você escolhe o formato que melhor se adapta à sua rotina.",
  },
  {
    q: "Como saber se é hora de procurar terapia?",
    a: "Quando emoções, pensamentos ou comportamentos começam a impactar seu bem-estar, é um bom momento. Não é preciso esperar uma crise para se cuidar.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs tracking-[0.25em] uppercase text-sage-deep">FAQ</span>
          <h2 className="font-serif text-4xl md:text-5xl">Perguntas Frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 data-[state=open]:shadow-md transition"
            >
              <AccordionTrigger className="font-serif text-lg text-left hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

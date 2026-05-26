import {
  Sparkles, Compass, CloudRain, HeartCrack, Wind, BookOpen, ShieldQuestion, Heart, Scale,
} from "lucide-react";

const items = [
  { icon: Sparkles, label: "Autoconhecimento" },
  { icon: Compass, label: "Desenvolvimento Pessoal" },
  { icon: CloudRain, label: "Frustração" },
  { icon: HeartCrack, label: "Depressão" },
  { icon: Wind, label: "Ansiedade" },
  { icon: BookOpen, label: "Dificuldade de Aprendizagem" },
  { icon: ShieldQuestion, label: "Insegurança" },
  { icon: Heart, label: "Autoestima" },
  { icon: Scale, label: "Limites pessoais" },
];

export function Areas() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <span className="text-xs tracking-[0.25em] uppercase text-sage-deep">Áreas de atuação</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Posso te ajudar com:</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-sage-deep/40 hover:shadow-md transition"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sage/30 text-sage-deep group-hover:bg-sage/50 transition">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="font-medium text-foreground leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

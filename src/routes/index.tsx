import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Areas } from "@/components/site/Areas";
import { Services } from "@/components/site/Services";
import { Quote } from "@/components/site/Quote";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
// Importando o favicon diretamente da pasta de assets
import favicon from "@/assets/favicon.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jade Távora Soares · Psicóloga Clínica · Análise do Comportamento" },
      {
        name: "description",
        content:
          "Psicoterapia para crianças, adolescentes e adultos, intervenção ABA e orientação de pais. Um espaço acolhedor para cuidar da sua saúde mental.",
      },
      { property: "og:title", content: "Jade Távora Soares · Psicóloga Clínica" },
      {
        property: "og:description",
        content:
          "Florescer é aprender no próprio tempo. Psicoterapia e Análise do Comportamento Aplicada (ABA).",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      // Inserção da tag de ícone
      { rel: "icon", type: "image/svg+xml", href: favicon },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Areas />
      <Services />
      <Quote />
      <Faq />
      <Footer />
    </main>
  );
}

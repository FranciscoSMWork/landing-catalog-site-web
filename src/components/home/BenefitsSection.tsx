import { Headphones, Palette, Smartphone, Zap } from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

const benefits = [
  {
    title: "Design responsivo",
    icon: Smartphone,
    description: "Sites preparados para oferecer uma boa experiência em computadores, tablets e smartphones.",
  },
  {
    title: "Desempenho",
    icon: Zap,
    description: "Desenvolvimento com atenção à velocidade de carregamento e à eficiência dos recursos.",
  },
  {
    title: "Personalização",
    icon: Palette,
    description: "Layouts adaptados às necessidades e à identidade visual de cada cliente.",
  },
  {
    title: "Manutenção e suporte",
    icon: Headphones,
    description: "Possibilidade de contratar serviços de manutenção e atualizações após a publicação.",
  },
];

export function BenefitsSection() {
  return (
    <Section aria-labelledby="benefits-title">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <Heading level="h2" id="benefits-title" className="max-w-reading text-balance lg:max-w-sm">
          Tecnologia e simplicidade em cada detalhe.
        </Heading>
        <ul className="grid gap-x-8 gap-y-8 md:grid-cols-2">
          {benefits.map(({ title, description, icon }) => (
            <li key={title} className="min-w-0 border-t border-border pt-6">
              <IconBadge icon={icon} className="mb-5" />
              <Heading level="h3">{title}</Heading>
              <p className="mt-4 max-w-xl text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

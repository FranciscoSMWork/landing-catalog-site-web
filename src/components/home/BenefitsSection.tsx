import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

const benefits = [
  {
    title: "Design responsivo",
    description: "Sites preparados para oferecer uma boa experiência em computadores, tablets e smartphones.",
  },
  {
    title: "Desempenho",
    description: "Desenvolvimento com atenção à velocidade de carregamento e à eficiência dos recursos.",
  },
  {
    title: "Personalização",
    description: "Layouts adaptados às necessidades e à identidade visual de cada cliente.",
  },
  {
    title: "Manutenção e suporte",
    description: "Possibilidade de contratar serviços de manutenção e atualizações após a publicação.",
  },
];

export function BenefitsSection() {
  return (
    <Section aria-labelledby="benefits-title">
      <Container>
        <Heading level="h2" id="benefits-title" className="max-w-reading text-balance">
          Tecnologia e simplicidade em cada detalhe.
        </Heading>
        <ul className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {benefits.map(({ title, description }) => (
            <li key={title} className="min-w-0 border-t border-border pt-6">
              <Heading level="h3">{title}</Heading>
              <p className="mt-4 max-w-xl text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Escolha a solução",
    description: "Conheça nossos serviços e identifique a solução mais adequada para seu objetivo.",
  },
  {
    number: "02",
    title: "Personalização",
    description: "Definimos o conteúdo, a identidade visual e os ajustes necessários para seu projeto.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Implementamos e preparamos o site para avaliação, considerando os requisitos acordados.",
  },
  {
    number: "04",
    title: "Publicação",
    description: "Após a aprovação, realizamos a publicação e orientamos sobre manutenção e atualizações.",
  },
];

export function ProcessSection() {
  return (
    <Section aria-labelledby="process-title" className="border-t border-border">
      <Container>
        <Heading level="h2" id="process-title" className="max-w-reading text-balance">
          Do primeiro contato à publicação.
        </Heading>
        <ol className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ number, title, description }) => (
            <li key={number} className="min-w-0 border-t border-border pt-6">
              <span aria-hidden="true" className="font-mono text-sm text-muted-foreground">{number}</span>
              <Heading level="h3" className="mt-4">{title}</Heading>
              <p className="mt-4 text-sm text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
        <Link href="/como-funciona" className="mt-8 inline-flex min-h-11 items-center text-sm font-medium underline hover:text-muted-foreground">
          Entenda nosso processo
        </Link>
      </Container>
    </Section>
  );
}

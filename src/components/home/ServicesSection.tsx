import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

const services = [
  {
    title: "Sites profissionais",
    description: "Páginas de apresentação pessoal e portfólios para profissionais que desejam divulgar seus trabalhos, experiências e serviços.",
  },
  {
    title: "Sites empresariais",
    description: "Sites institucionais para empresas que precisam apresentar seus serviços, fortalecer sua presença digital e facilitar o contato com clientes.",
  },
  {
    title: "Landing pages para campanhas",
    description: "Páginas direcionadas à divulgação de produtos, lançamentos, eventos e campanhas comerciais.",
  },
];

export function ServicesSection() {
  return (
    <Section aria-labelledby="services-title" className="border-y border-border bg-surface">
      <Container>
        <div className="max-w-reading">
          <Heading level="h2" id="services-title" className="text-balance">
            Soluções digitais para diferentes necessidades.
          </Heading>
          <p className="mt-4 text-muted-foreground">
            Criamos experiências digitais que combinam design, desempenho e funcionalidade.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map(({ title, description }) => (
            <li key={title} className="min-w-0">
              <Card className="h-full">
                <Heading level="h3">{title}</Heading>
                <p className="mt-4 text-sm text-muted-foreground">{description}</p>
              </Card>
            </li>
          ))}
        </ul>
        <Link href="/servicos" className="mt-8 inline-flex min-h-11 items-center text-sm font-medium underline text-primary transition-colors hover:text-primary-hover">
          Conhecer todos os serviços
        </Link>
      </Container>
    </Section>
  );
}

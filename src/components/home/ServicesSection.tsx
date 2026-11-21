import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Building2, Monitor, PanelsTopLeft } from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";

const services = [
  {
    title: "Sites profissionais",
    icon: Monitor,
    description: "Páginas de apresentação pessoal e portfólios para profissionais que desejam divulgar seus trabalhos, experiências e serviços.",
  },
  {
    title: "Sites empresariais",
    icon: Building2,
    description: "Sites institucionais para empresas que precisam apresentar seus serviços, fortalecer sua presença digital e facilitar o contato com clientes.",
  },
  {
    title: "Landing pages para campanhas",
    icon: PanelsTopLeft,
    description: "Páginas direcionadas à divulgação de produtos, lançamentos, eventos e campanhas comerciais.",
  },
];

export function ServicesSection() {
  return (
    <Section aria-labelledby="services-title" className="border-y border-border bg-muted/50">
      <Container>
        <div className="max-w-reading">
          <Heading level="h2" id="services-title" className="text-balance">
            Soluções digitais para diferentes necessidades.
          </Heading>
          <p className="mt-4 text-muted-foreground">
            Criamos experiências digitais que combinam design, desempenho e funcionalidade.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map(({ title, description, icon }) => (
            <li key={title} className="min-w-0">
              <Card className="h-full">
                <IconBadge icon={icon} className="mb-6" />
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

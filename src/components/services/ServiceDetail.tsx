import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

type ServiceDetailProps = {
  slug: "profissionais" | "empresas" | "campanhas";
  title: string;
  description: string;
  audienceTitle: string;
  audience: string[];
  features: string[];
};

export function ServiceDetail({ slug, title, description, audienceTitle, audience, features }: ServiceDetailProps) {
  return (
    <Section aria-labelledby={`service-${slug}`} className="border-t border-border">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Heading level="h2" id={`service-${slug}`} className="text-balance">{title}</Heading>
            <p className="mt-6 max-w-xl text-muted-foreground">{description}</p>
            <Link href={`/contato?servico=${slug}`} className={buttonStyles({ className: "mt-8 w-full sm:w-auto" })}>
              Solicitar orçamento
            </Link>
          </div>
          <div className="space-y-8">
            <div>
              <Heading level="h3">{audienceTitle}</Heading>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground marker:text-muted-foreground">
                {audience.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <Heading level="h3">Possíveis funcionalidades</Heading>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground marker:text-muted-foreground">
                {features.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">As funcionalidades são definidas conforme o escopo contratado.</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

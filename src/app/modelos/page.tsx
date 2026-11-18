import type { Metadata } from "next";
import Link from "next/link";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { TemplateFilters } from "@/components/templates/TemplateFilters";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { templates } from "@/data/templates";
import { getActiveTemplates } from "@/lib/templates";

export const metadata: Metadata = {
  title: "Modelos de Sites e Landing Pages | Estúdio Web",
  description: "Explore modelos de sites profissionais, empresariais e landing pages para campanhas. Escolha uma base e personalize seu projeto.",
};

export default function TemplatesPage() {
  const activeTemplates = getActiveTemplates(templates);
  return (
    <>
      <Section spacing="lg" aria-labelledby="catalog-title">
        <Container>
          <div className="max-w-reading">
            <Badge>NOSSOS MODELOS</Badge>
            <Heading id="catalog-title" className="mt-6 text-balance">Encontre o ponto de partida para seu próximo site.</Heading>
            <p className="mt-6 text-muted-foreground sm:text-lg">Explore modelos profissionais que podem ser personalizados para representar sua identidade, seus serviços e seus objetivos.</p>
          </div>
        </Container>
      </Section>
      <Section aria-labelledby="available-templates-title" className="border-t border-border">
        <Container>
          <Heading level="h2" id="available-templates-title" className="mb-8">Modelos disponíveis</Heading>
          <TemplateFilters
            items={activeTemplates.map((template) => ({ id: template.id, category: template.category, content: <TemplateCard template={template} /> }))}
            emptyState={
              <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
                <Heading level="h3">Novos modelos em preparação.</Heading>
                <p className="mt-4 max-w-2xl text-muted-foreground">Estamos preparando uma seleção de modelos profissionais. Enquanto isso, você pode entrar em contato para conversar sobre seu projeto.</p>
                <Link href="/contato" className={buttonStyles({ variant: "outline", className: "mt-6 w-full sm:w-auto" })}>Conversar sobre meu projeto</Link>
              </div>
            }
          />
        </Container>
      </Section>
    </>
  );
}

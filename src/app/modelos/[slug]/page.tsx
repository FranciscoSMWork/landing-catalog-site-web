import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { templates } from "@/data/templates";

export function generateStaticParams() {
  // Esta versão exige um parâmetro mesmo no catálogo vazio.
  // O marcador não é um modelo: a página retorna notFound() abaixo.
  return templates.length > 0
    ? templates.map(({ slug }) => ({ slug }))
    : [{ slug: "__empty__" }];
}

export default async function TemplatePage({ params }: PageProps<"/modelos/[slug]">) {
  const { slug } = await params;
  const template = templates.find((item) => item.slug === slug);
  if (!template) notFound();

  return (
    <Section>
      <Container>
        <Heading>{template.name}</Heading>
        <p className="mt-4 max-w-2xl text-foreground/70">{template.description}</p>
      </Container>
    </Section>
  );
}

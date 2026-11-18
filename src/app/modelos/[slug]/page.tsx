import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemplateDetails } from "@/components/templates/TemplateDetails";
import { templates } from "@/data/templates";
import { getTemplateBySlug, getTemplateSlugs } from "@/lib/templates";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = getTemplateSlugs(templates);
  // Esta versão do export também exige um parâmetro com catálogo vazio.
  // O marcador técnico resulta em notFound(), nunca em um modelo fictício.
  return slugs.length > 0 ? slugs.map((slug) => ({ slug })) : [{ slug: "__empty__" }];
}

export async function generateMetadata({ params }: PageProps<"/modelos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(templates, slug);
  if (!template) notFound();
  return { title: `${template.name} | Estúdio Web`, description: template.description };
}

export default async function TemplatePage({ params }: PageProps<"/modelos/[slug]">) {
  const { slug } = await params;
  const template = getTemplateBySlug(templates, slug);
  if (!template) notFound();
  return <TemplateDetails template={template} />;
}

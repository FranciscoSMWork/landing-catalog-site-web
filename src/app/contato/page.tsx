import type { Metadata } from "next";
import { Suspense } from "react";
import { templates } from "@/data/templates";
import { getActiveTemplates } from "@/lib/templates";
import { ContactForm } from "@/components/contact/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Solicite um Orçamento | Desenvolvimento Web",
  description: "Entre em contato para solicitar um orçamento de site profissional, empresarial ou landing page.",
};

export default function ContactPage() {
  return (
    <>
      <Section spacing="lg" aria-labelledby="contact-title">
        <Container variant="narrow">
          <Badge>ENTRE EM CONTATO</Badge>
          <Heading id="contact-title" className="mt-6 text-balance">Vamos conversar sobre seu projeto?</Heading>
          <p className="mt-6 text-muted-foreground sm:text-lg">Conte-nos um pouco sobre sua ideia e entraremos em contato para entender suas necessidades.</p>
          <p className="mt-4 text-sm text-muted-foreground">O envio pelo formulário estará disponível em breve.</p>
        </Container>
      </Section>
      <Section aria-labelledby="form-title" className="border-t border-border">
        <Container variant="narrow">
          <Heading level="h2" id="form-title">Sobre o seu projeto</Heading>
          <div className="mt-8">
            <Suspense fallback={<p role="status" className="text-muted-foreground">Carregando formulário…</p>}>
              <ContactForm models={getActiveTemplates(templates).map(({ slug, name, category }) => ({ slug, name, category }))} />
            </Suspense>
            <noscript>Ative o JavaScript para visualizar o formulário. O envio estará disponível em breve.</noscript>
          </div>
        </Container>
      </Section>
    </>
  );
}

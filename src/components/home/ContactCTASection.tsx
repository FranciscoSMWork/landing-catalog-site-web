import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export function ContactCTASection() {
  return (
    <Section spacing="lg" aria-labelledby="contact-title" className="border-t border-border bg-surface">
      <Container>
        <div className="max-w-reading">
          <Heading level="h2" id="contact-title" className="text-balance">
            Vamos construir sua presença digital?
          </Heading>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Conte-nos sobre sua ideia e descubra como podemos transformá-la em um site profissional.
          </p>
          <Link href="/contato" className={buttonStyles({ size: "lg", className: "mt-8 w-full sm:w-auto" })}>
            Solicitar orçamento
          </Link>
        </div>
      </Container>
    </Section>
  );
}

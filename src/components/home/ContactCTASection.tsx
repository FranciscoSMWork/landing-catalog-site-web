import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

import styles from "./Home.module.css";

export function ContactCTASection() {
  return (
    <Section spacing="lg" aria-labelledby="contact-title">
      <Container>
        <div className={`${styles.cta} px-6 py-12 sm:px-12 sm:py-16 lg:px-16`}>
          <div className="max-w-reading">
            <Heading level="h2" id="contact-title" className={`${styles.ctaTitle} text-balance`}>
              Vamos construir sua presença digital?
            </Heading>
            <p className="mt-6 max-w-2xl text-primary-foreground/80">
              Conte-nos sobre sua ideia e descubra como podemos transformá-la em um site profissional.
            </p>
            <Link href="/contato" className={buttonStyles({ size: "lg", className: "mt-8 w-full sm:w-auto" })}>
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

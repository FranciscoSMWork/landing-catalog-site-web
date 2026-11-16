import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export function HeroSection() {
  return (
    <Section spacing="lg" aria-labelledby="hero-title">
      <Container>
        <div className="max-w-reading">
          <Badge>DESENVOLVIMENTO WEB PROFISSIONAL</Badge>
          <Heading id="hero-title" className="mt-6 text-balance">
            Sites modernos. Simples, rápidos e profissionais.
          </Heading>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Desenvolvemos sites e landing pages para profissionais e empresas
            que buscam uma presença digital moderna, funcional e de qualidade.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/servicos" className={buttonStyles({ size: "lg" })}>
              Conhecer serviços
            </Link>
            <Link href="/contato" className={buttonStyles({ variant: "outline", size: "lg" })}>
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

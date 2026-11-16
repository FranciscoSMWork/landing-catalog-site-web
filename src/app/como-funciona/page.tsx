import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export default function Page() {
  return (
    <Section>
      <Container>
        <Heading>Como funciona</Heading>
        <p className="mt-4 max-w-2xl text-foreground/70">Em breve, apresentaremos as etapas de criação de uma landing page.</p>
      </Container>
    </Section>
  );
}

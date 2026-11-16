import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export default function Page() {
  return (
    <Section>
      <Container>
        <Heading>Serviços</Heading>
        <p className="mt-4 max-w-2xl text-muted-foreground">Informações sobre nossos serviços serão disponibilizadas em breve.</p>
      </Container>
    </Section>
  );
}

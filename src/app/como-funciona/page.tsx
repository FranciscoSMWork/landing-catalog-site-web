import { CircleCheck, ClipboardList, CodeXml, MessageSquare, Rocket } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ProcessStep } from "@/components/process/ProcessStep";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Como Funciona o Desenvolvimento do Seu Site",
  description: "Conheça nosso processo de criação de sites, desde o primeiro contato até a publicação e manutenção.",
};

const steps = [
  { number: "01", icon: MessageSquare, title: "Primeiro contato", description: "Você nos apresenta sua ideia, seus objetivos e o tipo de site que deseja desenvolver." },
  { number: "02", icon: ClipboardList, title: "Definição do projeto", description: "Analisamos suas necessidades, definimos o escopo, as personalizações e as condições comerciais." },
  { number: "03", icon: CodeXml, title: "Desenvolvimento", description: "Criamos e personalizamos o site conforme os requisitos acordados." },
  { number: "04", icon: CircleCheck, title: "Revisão e aprovação", description: "Você avalia o resultado e solicita os ajustes previstos no escopo contratado." },
  { number: "05", icon: Rocket, title: "Publicação", description: "Após a aprovação, realizamos a publicação do site e orientamos sobre as opções de manutenção." },
];
const materials = ["Nome profissional ou empresarial.", "Descrição dos serviços ou produtos.", "Logotipo, caso exista.", "Imagens e materiais disponíveis.", "Informações de contato.", "Preferências visuais e referências."];

export default function ProcessPage() {
  return (
    <>
      <Section spacing="lg" aria-labelledby="process-title">
        <Container>
          <div className="max-w-reading">
            <Badge>NOSSO PROCESSO</Badge>
            <Heading id="process-title" className="mt-6 text-balance">Simples do início ao fim.</Heading>
            <p className="mt-6 text-muted-foreground sm:text-lg">Um processo organizado e transparente para transformar sua ideia em um site profissional.</p>
          </div>
        </Container>
      </Section>
      <Section aria-labelledby="steps-title" className="border-t border-border">
        <Container>
          <div className="max-w-reading">
            <Heading level="h2" id="steps-title">Da ideia à publicação.</Heading>
            <ol className="mt-10 space-y-5">
              {steps.map((step) => <ProcessStep key={step.number} {...step} />)}
            </ol>
          </div>
        </Container>
      </Section>
      <Section aria-labelledby="materials-title" className="border-y border-border bg-surface">
        <Container>
          <div className="max-w-reading">
            <Heading level="h2" id="materials-title">O que precisamos para começar?</Heading>
            <ul className="mt-8 list-disc space-y-3 pl-5 text-muted-foreground">
              {materials.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">Os materiais necessários podem variar conforme o projeto.</p>
          </div>
        </Container>
      </Section>
      <Section aria-labelledby="maintenance-title">
        <Container>
          <div className="max-w-reading">
            <Heading level="h2" id="maintenance-title">Seu site continua acompanhado.</Heading>
            <p className="mt-6 text-muted-foreground">Após a publicação, você poderá contratar serviços de manutenção, atualizações de conteúdo e ajustes adicionais conforme suas necessidades.</p>
          </div>
        </Container>
      </Section>
      <Section spacing="lg" aria-labelledby="process-contact-title" className="border-t border-border bg-surface">
        <Container>
          <div className="max-w-reading">
            <Heading level="h2" id="process-contact-title">Pronto para começar?</Heading>
            <p className="mt-6 text-muted-foreground">Apresente sua ideia e vamos conversar sobre a melhor maneira de colocá-la em prática.</p>
            <Link href="/contato" className={buttonStyles({ size: "lg", className: "mt-8 w-full sm:w-auto" })}>Solicitar orçamento</Link>
          </div>
        </Container>
      </Section>
    </>
  );
}

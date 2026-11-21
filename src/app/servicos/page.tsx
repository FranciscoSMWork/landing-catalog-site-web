import type { Metadata } from "next";
import { ResponsiveMockup } from "@/components/visuals/ResponsiveMockup";
import Link from "next/link";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { Badge } from "@/components/ui/Badge";
import { buttonStyles } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Criação de Sites e Landing Pages | Serviços",
  description: "Desenvolvimento de sites profissionais, empresariais e landing pages para campanhas, com design responsivo e personalização.",
};

export default function ServicesPage() {
  return (
    <>
      <Section spacing="lg" aria-labelledby="services-title">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="min-w-0 max-w-reading">
            <Badge>NOSSOS SERVIÇOS</Badge>
            <Heading id="services-title" className="mt-6 text-balance">Soluções digitais para cada necessidade.</Heading>
            <p className="mt-6 text-muted-foreground sm:text-lg">Desenvolvemos sites modernos, responsivos e personalizados para profissionais e empresas que desejam fortalecer sua presença digital.</p>
          </div>
          <ResponsiveMockup />
        </Container>
      </Section>
      <ServiceDetail
        slug="profissionais"
        title="Sites profissionais e portfólios."
        description="Apresente sua trajetória, experiências, projetos e serviços em um site profissional desenvolvido para valorizar seu trabalho."
        audienceTitle="Para quem"
        audience={["Desenvolvedores.", "Designers.", "Fotógrafos.", "Arquitetos.", "Consultores.", "Profissionais autônomos."]}
        features={["Apresentação pessoal.", "Experiências profissionais.", "Portfólio de projetos.", "Serviços oferecidos.", "Links para redes sociais.", "Informações de contato."]}
      />
      <ServiceDetail
        slug="empresas"
        title="Sites institucionais para empresas."
        description="Fortaleça a presença digital da sua empresa com um site profissional que apresente seus serviços, diferenciais e canais de atendimento."
        audienceTitle="Para quem"
        audience={["Pequenas empresas.", "Escritórios.", "Consultorias.", "Prestadores de serviços.", "Negócios locais."]}
        features={["Apresentação institucional.", "Descrição de serviços.", "Informações comerciais.", "Localização e contato.", "Integração com WhatsApp.", "Formulários de contato, conforme escopo contratado."]}
      />
      <ServiceDetail
        slug="campanhas"
        title="Landing pages para campanhas e vendas."
        description="Páginas desenvolvidas para apresentar produtos, divulgar lançamentos, promover eventos e incentivar ações específicas dos visitantes."
        audienceTitle="Possíveis aplicações"
        audience={["Lançamento de produtos.", "Divulgação de cursos.", "Campanhas promocionais.", "Eventos.", "Captação de contatos.", "Divulgação de aplicativos e serviços."]}
        features={["Apresentação do produto.", "Benefícios e diferenciais.", "Chamadas para ação.", "Formulários de interesse.", "Integrações externas, conforme escopo contratado.", "Links para plataformas de pagamento externas."]}
      />
      <Section spacing="lg" aria-labelledby="services-contact-title" className="border-t border-border bg-surface">
        <Container>
          <div className="max-w-reading">
            <Heading level="h2" id="services-contact-title">Não sabe qual solução escolher?</Heading>
            <p className="mt-6 text-muted-foreground">Conte-nos sobre seu projeto e ajudaremos a identificar a melhor opção para sua necessidade.</p>
            <Link href="/contato" className={buttonStyles({ size: "lg", className: "mt-8 w-full sm:w-auto" })}>Conversar sobre meu projeto</Link>
          </div>
        </Container>
      </Section>
    </>
  );
}

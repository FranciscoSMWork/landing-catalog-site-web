import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button, buttonStyles } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Design System | Estúdio Web",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "background", className: "bg-background" },
  { name: "foreground", className: "bg-foreground" },
  { name: "surface", className: "bg-surface" },
  { name: "muted", className: "bg-muted" },
  { name: "muted-foreground", className: "bg-muted-foreground" },
  { name: "border", className: "bg-border" },
  { name: "primary", className: "bg-primary" },
  { name: "primary-foreground", className: "bg-primary-foreground" },
  { name: "primary-hover", className: "bg-primary-hover" },
  { name: "focus-ring", className: "bg-focus-ring" },
];
const buttonVariants = ["primary", "secondary", "outline", "ghost"] as const;
const buttonSizes = ["sm", "md", "lg"] as const;
const containerVariants = ["narrow", "default", "wide"] as const;
const sectionSizes = ["sm", "md", "lg"] as const;

export default function DesignSystemPage() {
  return (
    <>
      <Section aria-labelledby="design-system-title">
        <Container>
          <Badge bordered>Referência interna · Etapa 2</Badge>
          <Heading id="design-system-title" className="mt-6">Design System</Heading>
          <p className="mt-6 max-w-reading text-muted-foreground">
            Fundamentos e componentes do Estúdio Web. Uma base clara, monocromática
            e consistente para as próximas páginas.
          </p>
          <nav aria-label="Seções da demonstração" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {[ ["paleta", "Paleta"], ["tipografia", "Tipografia"], ["botoes", "Botões"], ["componentes", "Componentes"], ["containers", "Containers"], ["espacamento", "Espaçamento"]].map(([id, label]) => (
              <a key={id} href={`#${id}`} className="inline-flex min-h-11 items-center underline hover:text-muted-foreground">{label}</a>
            ))}
          </nav>
        </Container>
      </Section>
      <Divider />
      <Section aria-labelledby="paleta">
        <Container>
          <Heading level="h2" id="paleta">Paleta de cores</Heading>
          <p className="mt-4 text-muted-foreground">Tokens semânticos compartilhados pelo CSS e pelo Tailwind.</p>
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {colors.map(({ name, className }) => (
              <li key={name} className="min-w-0">
                <div aria-hidden="true" className={`h-24 rounded-md border border-border ${className}`} />
                <p className="mt-3 break-words font-mono text-xs">{name}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Divider />
      <Section aria-labelledby="tipografia">
        <Container>
          <Heading level="h2" id="tipografia">Tipografia</Heading>
          <p className="mt-4 text-muted-foreground">Geist Sans para leitura; Geist Mono para referências técnicas.</p>
          <div className="mt-8 space-y-8">
            <div><Badge>H1 · 36 / 56 px</Badge><p className="mt-3 text-heading-1 font-semibold tracking-tight lg:text-heading-1-desktop">Clareza em cada detalhe.</p><p className="mt-2 text-xs text-muted-foreground">Amostra visual do H1; o título da página mantém a hierarquia semântica.</p></div>
            <div><Badge>H2 · 30 / 40 px</Badge><Heading level="h2" className="mt-3">Uma base consistente.</Heading></div>
            <div><Badge>H3 · 24 / 28 px</Badge><Heading level="h3" className="mt-3">Estrutura e precisão.</Heading></div>
            <div><Badge>H4 · 18 / 22 px</Badge><Heading level="h4" className="mt-3">Atenção ao essencial.</Heading></div>
            <div className="max-w-reading space-y-3">
              <p>Texto normal · 16 px. Uma altura de linha confortável facilita a leitura em diferentes tamanhos de tela.</p>
              <p className="text-sm text-muted-foreground">Texto secundário · 14 px. Informações de apoio com contraste legível.</p>
              <p className="text-xs text-muted-foreground">Texto pequeno · 12 px. Rótulos e metadados curtos.</p>
            </div>
          </div>
        </Container>
      </Section>
      <Divider />
      <Section aria-labelledby="botoes">
        <Container>
          <Heading level="h2" id="botoes">Botões e links</Heading>
          <p className="mt-4 text-muted-foreground">Amostras visuais sem ações. Use Tab para verificar o foco; botões desabilitados ficam fora da navegação.</p>
          <div className="mt-8 space-y-8">
            {buttonVariants.map((variant) => (
              <div key={variant}>
                <Heading level="h3">{variant}</Heading>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {buttonSizes.map((size) => <Button key={size} variant={variant} size={size}>{variant} · {size}</Button>)}
                  <Button variant={variant} disabled>{variant} · desabilitado</Button>
                </div>
              </div>
            ))}
            <Link href="/contato" className={buttonStyles({ variant: "outline" })}>Link para Contato</Link>
          </div>
        </Container>
      </Section>
      <Divider />
      <Section aria-labelledby="componentes" className="bg-surface">
        <Container>
          <Heading level="h2" id="componentes">Badges, cards e divisores</Heading>
          <div className="mt-8 flex flex-wrap gap-3"><Badge>Rótulo informativo</Badge><Badge bordered>Com borda</Badge></div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <Heading level="h3">Card informativo</Heading>
              <p className="mt-4 text-sm text-muted-foreground">Conteúdo estático, com borda e espaçamento consistentes.</p>
              <Divider className="my-6" />
              <p className="text-xs text-muted-foreground">Divisor semântico com o elemento hr.</p>
            </Card>
            <Card href="/como-funciona">
              <Heading level="h3">Card de navegação</Heading>
              <p className="mt-4 text-sm text-muted-foreground">Este card é um link para a página Como funciona.</p>
              <span className="mt-6 inline-block text-sm font-medium underline">Conhecer as etapas →</span>
            </Card>
          </div>
        </Container>
      </Section>
      <Divider />
      <Section aria-labelledby="containers">
        <Container><Heading level="h2" id="containers">Containers</Heading><p className="mt-4 text-muted-foreground">Larguras máximas de 768, 1200 e 1400 px, incluindo padding lateral responsivo.</p></Container>
        <div className="mt-8 space-y-4">
          {containerVariants.map((variant) => (
            <Container key={variant} variant={variant}>
              <div className="rounded-md border border-border bg-surface px-4 py-6 text-sm"><span className="font-mono">{variant}</span> · largura limitada e conteúdo centralizado.</div>
            </Container>
          ))}
        </div>
      </Section>
      <Divider />
      <Section aria-labelledby="espacamento">
        <Container>
          <Heading level="h2" id="espacamento">Espaçamento das seções</Heading>
          <p className="mt-4 text-muted-foreground">Padding vertical por lado, em mobile / tablet / desktop: sm 40/56/64, md 56/72/96 e lg 72/96/120 px.</p>
          <div className="mt-8 space-y-6">
            {sectionSizes.map((spacing) => (
              <Section key={spacing} spacing={spacing} aria-labelledby={`spacing-${spacing}`} className="rounded-md border border-border bg-surface px-5">
                <Heading level="h3" id={`spacing-${spacing}`}>Section · {spacing}</Heading>
                <p className="mt-3 text-sm text-muted-foreground">O espaço acima e abaixo deste conteúdo usa a variante {spacing}.</p>
              </Section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

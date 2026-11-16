import Link from "next/link";
import { Container } from "@/components/ui/Container";

const linkClass = "inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline";

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <Container className="flex flex-col gap-2 py-4 md:min-h-20 md:flex-row md:items-center md:justify-between md:gap-8 md:py-0">
        <Link href="/" className="inline-flex min-h-11 w-fit items-center text-base font-semibold tracking-tight">Estúdio Web</Link>
        <nav aria-label="Navegação principal" className="flex flex-wrap gap-x-5 gap-y-1">
          <Link href="/" className={linkClass}>Início</Link>
          <Link href="/servicos" className={linkClass}>Serviços</Link>
          <Link href="/modelos" className={linkClass}>Modelos</Link>
          <Link href="/como-funciona" className={linkClass}>Como funciona</Link>
          <Link href="/contato" className={linkClass}>Contato</Link>
        </nav>
      </Container>
    </header>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="border-b border-foreground/10">
      <Container className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="font-semibold">Estúdio Web</Link>
        <nav aria-label="Navegação principal" className="flex flex-wrap gap-x-5 gap-y-3 text-sm">
          <Link href="/">Início</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/modelos">Modelos</Link>
          <Link href="/como-funciona">Como funciona</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </Container>
    </header>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 text-sm">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Estúdio Web.</p>
        <nav aria-label="Links institucionais" className="flex flex-wrap gap-x-5 gap-y-3">
          <Link href="/servicos">Serviços</Link>
          <Link href="/modelos">Modelos</Link>
          <Link href="/como-funciona">Como funciona</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </Container>
    </footer>
  );
}

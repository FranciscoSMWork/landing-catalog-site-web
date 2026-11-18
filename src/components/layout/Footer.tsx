import Link from "next/link";
import { Container } from "@/components/ui/Container";

const linkClass = "inline-flex min-h-11 items-center transition-colors hover:text-foreground hover:underline";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface text-sm text-muted-foreground">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:gap-8 md:py-12">
        <div>
          <Link href="/" className="inline-flex min-h-11 items-center font-medium text-foreground">Estúdio Web</Link>
          <p className="text-xs">© {year} Estúdio Web.</p>
        </div>
        <nav aria-label="Links institucionais" className="flex flex-wrap gap-x-5 gap-y-1">
          <Link href="/servicos" className={linkClass}>Serviços</Link>
          <Link href="/modelos" className={linkClass}>Modelos</Link>
          <Link href="/como-funciona" className={linkClass}>Como funciona</Link>
          <Link href="/contato" className={linkClass}>Contato</Link>
        </nav>
      </Container>
    </footer>
  );
}

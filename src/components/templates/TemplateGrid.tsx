import type { ReactNode } from "react";

export function TemplateGrid({ children }: { children: ReactNode }) {
  return <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{children}</ul>;
}

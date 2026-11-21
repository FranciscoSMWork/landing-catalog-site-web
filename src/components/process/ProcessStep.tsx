import type { LucideIcon } from "lucide-react";
import { IconBadge } from "@/components/ui/IconBadge";
import { Heading } from "@/components/ui/Heading";

type ProcessStepProps = { number: string; title: string; description: string; icon: LucideIcon };

export function ProcessStep({ number, title, description, icon }: ProcessStepProps) {
  return (
    <li className="grid gap-5 rounded-xl border border-border bg-background p-6 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:p-8">
      <div className="flex items-center gap-3 sm:flex-col sm:items-start">
        <IconBadge icon={icon} />
        <span aria-hidden="true" className="font-mono text-sm text-muted-foreground">{number}</span>
      </div>
      <div>
        <Heading level="h3">{title}</Heading>
        <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>
      </div>
    </li>
  );
}

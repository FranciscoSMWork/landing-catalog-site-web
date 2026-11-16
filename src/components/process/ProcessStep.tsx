import { Heading } from "@/components/ui/Heading";

type ProcessStepProps = { number: string; title: string; description: string };

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <li className="grid gap-4 border-t border-border py-8 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-10">
      <span aria-hidden="true" className="font-mono text-sm text-muted-foreground">{number}</span>
      <div>
        <Heading level="h3">{title}</Heading>
        <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>
      </div>
    </li>
  );
}

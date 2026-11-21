import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBadgeProps = { icon: LucideIcon; className?: string };

export function IconBadge({ icon: Icon, className }: IconBadgeProps) {
  return (
    <span aria-hidden="true" className={cn("inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-muted text-primary", className)}>
      <Icon size={24} strokeWidth={1.75} aria-hidden="true" focusable="false" />
    </span>
  );
}

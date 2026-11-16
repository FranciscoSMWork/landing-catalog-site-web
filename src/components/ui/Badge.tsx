import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = ComponentProps<"span"> & { bordered?: boolean };

export function Badge({ bordered = false, className, ...props }: BadgeProps) {
  return <span className={cn("inline-flex items-center rounded-sm bg-muted px-2.5 py-1 text-xs font-medium leading-5 text-foreground", bordered && "border border-border", className)} {...props} />;
}

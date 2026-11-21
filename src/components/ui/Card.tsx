import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type CardProps =
  | (ComponentProps<"div"> & { href?: never })
  | ComponentProps<typeof Link>;

export function Card(props: CardProps) {
  const base = "block min-w-0 rounded-lg border border-border bg-background p-6 sm:p-8";
  if ("href" in props && props.href !== undefined) {
    const { className, ...linkProps } = props;
    return <Link className={cn(base, "transition-colors duration-150 hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring", className)} {...linkProps} />;
  }
  const { className, ...divProps } = props;
  return <div className={cn(base, className)} {...divProps} />;
}

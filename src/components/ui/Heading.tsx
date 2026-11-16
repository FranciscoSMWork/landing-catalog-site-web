import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: "h1" | "h2" | "h3" | "h4";
};
const styles = {
  h1: "text-heading-1 lg:text-heading-1-desktop",
  h2: "text-heading-2 lg:text-heading-2-desktop",
  h3: "text-heading-3 lg:text-heading-3-desktop",
  h4: "text-heading-4 lg:text-heading-4-desktop",
};

export function Heading({ level: Tag = "h1", className, ...props }: HeadingProps) {
  return <Tag className={cn("font-semibold tracking-tight text-foreground", styles[Tag], className)} {...props} />;
}

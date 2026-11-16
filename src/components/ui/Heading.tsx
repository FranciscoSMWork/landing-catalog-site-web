import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: "h1" | "h2" | "h3" | "h4";
};

const styles = {
  h1: "text-3xl sm:text-4xl",
  h2: "text-2xl sm:text-3xl",
  h3: "text-xl sm:text-2xl",
  h4: "text-lg sm:text-xl",
};

export function Heading({ level: Tag = "h1", className, ...props }: HeadingProps) {
  return <Tag className={cn("font-semibold tracking-tight", styles[Tag], className)} {...props} />;
}

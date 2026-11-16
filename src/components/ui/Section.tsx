import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SectionProps = ComponentProps<"section"> & {
  spacing?: "sm" | "md" | "lg";
};
const spacingStyles = {
  sm: "py-10 md:py-14 lg:py-16",
  md: "py-14 md:py-18 lg:py-24",
  lg: "py-18 md:py-24 lg:py-30",
};

export function Section({ spacing = "md", className, ...props }: SectionProps) {
  return <section className={cn(spacingStyles[spacing], className)} {...props} />;
}

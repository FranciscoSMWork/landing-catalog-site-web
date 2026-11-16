import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = ComponentProps<"div"> & {
  variant?: "default" | "narrow" | "wide";
};
const widths = {
  default: "max-w-content",
  narrow: "max-w-reading",
  wide: "max-w-wide",
};

export function Container({ variant = "default", className, ...props }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-5 sm:px-8 lg:px-10", widths[variant], className)} {...props} />;
}

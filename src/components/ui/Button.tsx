import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary: "bg-foreground text-background hover:opacity-90",
  secondary: "bg-foreground/10 text-foreground hover:bg-foreground/15",
  outline: "border border-foreground/30 text-foreground hover:bg-foreground/5",
};
const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export function Button({ variant = "primary", size = "md", type = "button", className, ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn("inline-flex items-center justify-center rounded-md font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground disabled:pointer-events-none disabled:opacity-50", variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

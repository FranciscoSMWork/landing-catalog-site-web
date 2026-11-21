import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonStyleProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};
type ButtonProps = ComponentProps<"button"> & ButtonStyleProps;

const variants = {
  primary: "border-transparent bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary: "border-control-border bg-background text-primary hover:bg-muted hover:border-primary",
  outline: "border-control-border bg-background text-foreground hover:bg-muted hover:border-primary",
  ghost: "border-transparent bg-transparent text-primary hover:bg-muted",
};
const sizes = {
  sm: "min-h-11 px-3 text-sm",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-6 text-base",
};

// Reuse on next/link for navigation while preserving anchor semantics.
export function buttonStyles({ variant = "primary", size = "md", className }: ButtonStyleProps = {}) {
  return cn(
    "inline-flex max-w-full items-center justify-center gap-2 rounded-md border py-2 text-center font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring disabled:pointer-events-none disabled:border-border disabled:bg-disabled disabled:text-disabled-foreground",
    variants[variant], sizes[size], className,
  );
}

export function Button({ variant, size, type = "button", className, ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles({ variant, size, className })} {...props} />;
}

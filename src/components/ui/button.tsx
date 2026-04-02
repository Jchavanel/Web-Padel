import * as React from "react";
import { cn } from "@/lib/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "md" | "lg" | "sm";

export function buttonVariants({
  variant = "primary",
  size = "md",
  className
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 disabled:pointer-events-none disabled:opacity-50",
    size === "lg" && "px-5 py-3 text-sm",
    size === "md" && "px-4 py-2.5 text-sm",
    size === "sm" && "px-3 py-2 text-xs",
    variant === "primary" && "bg-brand text-white shadow-sm hover:opacity-90",
    variant === "secondary" && "bg-slate-900 text-white shadow-sm hover:opacity-90",
    variant === "ghost" && "bg-transparent text-slate-700 hover:bg-slate-100",
    variant === "outline" && "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
    className
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
}

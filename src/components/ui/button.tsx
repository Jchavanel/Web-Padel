import * as React from "react";
import { cn } from "@/lib/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition",
        variant === "primary" && "bg-brand text-white hover:opacity-90",
        variant === "secondary" && "bg-slate-900 text-white hover:opacity-90",
        variant === "ghost" && "bg-transparent text-slate-700 hover:bg-slate-100",
        className
      )}
      {...props}
    />
  );
}

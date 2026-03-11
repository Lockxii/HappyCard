import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,#ff8a1f_0%,#f97316_48%,#d97706_100%)] text-white shadow-[0_18px_40px_-18px_rgba(249,115,22,0.7)] hover:scale-[1.02] hover:shadow-[0_22px_48px_-18px_rgba(249,115,22,0.82)]",
        outline:
          "border border-[color:var(--glass-border)] bg-[color:var(--hero-badge-bg)] text-[color:var(--heading)] backdrop-blur hover:border-[color:var(--line-strong)] hover:bg-[color:var(--surface-4)]",
        secondary:
          "bg-[color:var(--surface-4)] text-[color:var(--foreground)] shadow-[0_18px_35px_-24px_rgba(24,18,13,0.18)] hover:bg-[color:var(--surface-3)]",
        ghost:
          "text-[color:var(--nav-link)] hover:bg-[color:var(--hero-badge-bg)] hover:text-[color:var(--heading)]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-sm",
        lg: "h-13 px-7 text-base",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]",
  {
    variants: {
      variant: {
        default:
          "border-[color:var(--glass-border)] bg-[color:var(--hero-badge-bg)] text-[color:var(--hero-badge-text)]",
        secondary:
          "border-[color:var(--line)] bg-[color:var(--card)] text-[color:var(--heading)]",
        muted:
          "border-[color:var(--line-strong)] bg-[color:var(--surface-3)] text-[color:var(--section-highlight)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

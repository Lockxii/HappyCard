import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type BentoCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  children?: React.ReactNode;
};

export function BentoCard({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
  children,
}: BentoCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden p-4 backdrop-blur-xl sm:p-5",
        className,
      )}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div
          className={cn(
            "mb-3.5 flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg",
            iconClassName,
          )}
        >
          <Icon className="size-[18px]" />
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--heading)]">
          {title}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-[color:var(--copy-muted)]">
          {description}
        </p>
        <div className="mt-4">{children}</div>
      </div>
    </Card>
  );
}

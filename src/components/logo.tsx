import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
  subtitle?: string;
};

export function Logo({
  className,
  showText = true,
  subtitle,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex size-11 items-center justify-center rounded-[1rem] border border-[color:var(--line)] bg-[color:var(--surface-4)] text-[color:var(--primary)] shadow-[0_16px_30px_-18px_rgba(249,115,22,0.35)]">
          <svg viewBox="0 0 48 48" className="size-7" fill="none" aria-hidden="true">
            <rect x="9" y="13" width="30" height="20" rx="6" stroke="currentColor" strokeWidth="2.4" />
            <circle cx="17.5" cy="23" r="2" fill="currentColor" />
            <circle cx="23.5" cy="23" r="2" fill="currentColor" />
            <circle cx="29.5" cy="23" r="2" fill="currentColor" />
            <path d="M31.2 12.8l0.9 2 2.2 0.2-1.65 1.4 0.5 2.15-1.95-1.1-1.95 1.1 0.5-2.15-1.64-1.4 2.18-0.2 0.91-2Z" fill="currentColor" />
          </svg>
      </div>

      {showText ? (
        <div>
          <p className="font-display text-lg font-semibold tracking-[-0.05em] text-[color:var(--heading)]">
            HappyCard
          </p>
          {subtitle ? (
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--copy-soft)]">
              {subtitle}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

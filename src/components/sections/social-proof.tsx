import { Star } from "lucide-react";

import { Card } from "@/components/ui/card";

export function SocialProof() {
  return (
    <section className="px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Card className="border-[color:var(--accent-panel-border)] bg-[radial-gradient(circle_at_top_right,var(--accent-glow),transparent_32%),linear-gradient(180deg,var(--accent-panel-start)_0%,var(--accent-panel-end)_100%)] p-8 text-[color:var(--accent-panel-text)] sm:p-10">
          <div className="flex gap-1 text-[color:var(--star)]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-4xl">
            &ldquo;On économise 400€/mois en SMS et nos clients utilisent leur carte
            3x plus souvent qu&apos;avant.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.24em] text-[color:var(--accent-panel-soft)]">
            Marie L., Café Lumière, Lille
          </p>
        </Card>
      </div>
    </section>
  );
}

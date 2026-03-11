import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-[color:var(--accent-panel-border)] bg-[radial-gradient(circle_at_top_right,var(--accent-glow),transparent_24%),linear-gradient(180deg,var(--accent-panel-start)_0%,var(--accent-panel-end)_100%)] px-8 py-16 text-center text-[color:var(--accent-panel-text)] shadow-[0_40px_120px_-50px_rgba(0,0,0,0.3)] sm:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--section-highlight)]">
          Dernière étape
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
          Prêt à remplacer vos SMS ?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[color:var(--accent-panel-muted)]">
          Commencez gratuitement. Carte bleue non requise.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="#tarifs">Créer ma première carte</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

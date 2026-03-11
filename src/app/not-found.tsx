import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md rounded-[2rem] border border-[#ead9c6] bg-[#fffaf3]/92 p-8 text-center shadow-[0_24px_70px_-34px_rgba(24,18,13,0.2)]">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-orange-600">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] text-[#f8efe6]">
          Cette page n&apos;existe pas.
        </h1>
        <p className="mt-4 text-sm leading-7 text-[#b6997f]">
          Revenez à l&apos;accueil pour retrouver la landing HappyCard.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

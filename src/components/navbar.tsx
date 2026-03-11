"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-[1.25rem] border border-[color:var(--nav-border)] bg-[color:var(--nav-bg)] px-3 py-2.5 text-[color:var(--foreground)] shadow-[0_18px_50px_-30px_rgba(0,0,0,0.32)] backdrop-blur-md sm:px-4">
          <Link href="/" className="shrink-0">
            <Logo subtitle="Cartes de fidélité wallet" />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 px-8 text-sm text-[color:var(--nav-link)] lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 transition hover:bg-[color:var(--hero-badge-bg)] hover:text-[color:var(--heading)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <ThemeToggle />
            <Button asChild variant="ghost">
              <Link href="#">Connexion</Link>
            </Button>
            <Button asChild size="sm" className="px-5">
              <Link href="#tarifs">Essai Gratuit</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Ouvrir le menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-l-[color:var(--line)] bg-[color:var(--popover)]">
                <SheetTitle>
                  <Logo subtitle="Cartes de fidélité wallet" />
                </SheetTitle>
                <div className="mt-5">
                  <ThemeToggle />
                </div>
                <nav className="mt-6 flex flex-col gap-4 text-lg">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-2xl border border-[color:var(--line)] px-4 py-3 text-[color:var(--heading)] transition hover:bg-[color:var(--hero-badge-bg)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-3">
                  <Button asChild variant="ghost" className="justify-center">
                    <Link href="#">Connexion</Link>
                  </Button>
                  <Button asChild className="justify-center">
                    <Link href="#tarifs">Essai Gratuit</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

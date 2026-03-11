"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { PhoneMockup } from "@/components/phone-mockup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const copyItems = [
  {
    value: "Wallet natif",
    label: "Apple Wallet & Google Pay",
  },
  {
    value: "∞ Push",
    label: "Sans coût SMS",
  },
  {
    value: "0 app",
    label: "À installer côté client",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, var(--hero-glow), transparent 24%), radial-gradient(circle at 82% 10%, var(--hero-glow-soft), transparent 18%), linear-gradient(180deg, var(--background) 0%, var(--background) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-20 -z-10 mx-auto h-[24rem] max-w-5xl rounded-full blur-3xl"
        style={{
          backgroundImage: "radial-gradient(circle, var(--hero-glow), transparent 62%)",
        }}
      />
      <div
        className="absolute inset-x-6 top-24 -z-10 mx-auto hidden h-[32rem] max-w-7xl rounded-[3rem] border lg:block"
        style={{
          borderColor: "var(--hero-shell-border)",
          backgroundImage:
            "linear-gradient(180deg, var(--glass-top), rgba(255,255,255,0))",
        }}
      />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="relative z-10">
          <div className="flex max-w-2xl flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge>
                <Sparkles className="mr-2 size-3.5" />
                Rétention sans dépense SMS
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.6 }}
              className="mt-7 max-w-[9ch] font-display text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-[color:var(--heading-strong)] sm:text-6xl lg:text-7xl"
            >
              Engagez vos clients sans frais de SMS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.6 }}
              className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--copy)] sm:text-xl"
            >
              Créez des cartes de fidélité pour Apple &amp; Google Wallet. Envoyez
              des notifications push illimitées et boostez votre rétention.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.6 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg">
                <Link href="#tarifs">
                  Commencer gratuitement
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#demo">Voir la démo</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.6 }}
              className="mt-10 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {copyItems.map((item) => (
                <div
                  key={item.value}
                  className="flex min-h-28 flex-col items-center justify-center rounded-[1.5rem] border px-4 py-4 text-center shadow-[0_18px_50px_-28px_rgba(0,0,0,0.18)]"
                  style={{
                    borderColor: "var(--line)",
                    backgroundImage:
                      "linear-gradient(180deg, var(--glass-top), var(--glass-bottom))",
                  }}
                >
                  <p className="font-display text-[1.35rem] font-semibold tracking-[-0.05em] text-[color:var(--heading-strong)]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-[color:var(--copy-muted)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 -z-10 rounded-full blur-3xl"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--hero-glow), transparent 58%)",
            }}
          />
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}

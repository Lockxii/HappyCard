"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Gratuit",
    price: "0",
    suffix: "€",
    description: "Pour lancer un premier programme wallet sans risque.",
    features: [
      "1 carte de fidélité",
      "100 notifications/mois",
      "50 clients",
      "Support email",
    ],
    cta: "Commencer",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "29",
    suffix: "€/mois",
    description: "Le plan le plus rentable pour un commerce qui veut vraiment activer sa base.",
    features: [
      "Cartes illimitées",
      "Notifications illimitées",
      "Clients illimités",
      "Analytics avancés",
      "API d'accès",
    ],
    cta: "Essayer Pro",
    highlighted: true,
  },
  {
    name: "Business",
    price: "79",
    suffix: "€/mois",
    description: "Pour les réseaux et équipes qui gèrent plusieurs établissements.",
    features: [
      "Tout Pro +",
      "Multi-établissements",
      "Marque blanche",
      "Support prioritaire",
    ],
    cta: "Parler à l'équipe",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="scroll-mt-28 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-orange-600">
            Tarifs
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] text-[color:var(--heading)] sm:text-5xl">
            Un pricing lisible, sans coût caché par notification.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={cn("h-full", tier.highlighted && "lg:scale-105")}
            >
              <Card
                className={cn(
                  "flex h-full flex-col border-[color:var(--line)] bg-[color:var(--card)]",
                  tier.highlighted &&
                    "border-[color:var(--accent-panel-border)] bg-[radial-gradient(circle_at_top_right,var(--accent-glow),transparent_26%),linear-gradient(180deg,var(--accent-panel-start)_0%,var(--accent-panel-end)_100%)] text-[color:var(--accent-panel-text)] shadow-[0_35px_120px_-45px_rgba(24,18,13,0.35)]",
                )}
              >
                <CardHeader className="space-y-5">
                  <div className="flex items-center justify-between">
                    <CardTitle
                      className={
                        tier.highlighted
                          ? "text-[color:var(--accent-panel-text)]"
                          : "text-[color:var(--heading)]"
                      }
                    >
                      {tier.name}
                    </CardTitle>
                    {tier.highlighted ? <Badge variant="default">Populaire</Badge> : null}
                  </div>
                  <div>
                    <div className="flex items-end gap-2">
                      <span className="font-display text-6xl font-semibold tracking-[-0.06em]">
                        {tier.price}
                      </span>
                      <span
                        className={cn(
                          "pb-2 text-sm",
                          tier.highlighted
                            ? "text-[color:var(--accent-panel-muted)]"
                            : "text-[color:var(--copy-soft)]",
                        )}
                      >
                        {tier.suffix}
                      </span>
                    </div>
                    <CardDescription
                      className={
                        tier.highlighted
                          ? "text-[color:var(--accent-panel-muted)]"
                          : "text-[color:var(--copy-muted)]"
                      }
                    >
                      {tier.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col">
                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={cn(
                            "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full",
                            tier.highlighted
                              ? "bg-white/10 text-[color:var(--section-highlight)]"
                              : "bg-[color:var(--surface-4)] text-[color:var(--heading)]",
                          )}
                        >
                          <Check className="size-4" />
                        </div>
                        <span
                          className={
                            tier.highlighted
                              ? "text-[color:var(--accent-panel-muted)]"
                              : "text-[color:var(--copy-muted)]"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      asChild
                      variant={tier.highlighted ? "default" : "secondary"}
                      className="w-full justify-center"
                    >
                      <Link href="#cta">{tier.cta}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Bell, Gift, Palette, QrCode } from "lucide-react";

import { BentoCard } from "@/components/bento-card";

const features = [
  {
    icon: Bell,
    title: "Push illimités & gratuits",
    description: "Zéro coût par notification. Fini les forfaits SMS.",
    className:
      "border-[color:var(--line)] bg-[linear-gradient(180deg,var(--surface-2)_0%,var(--surface)_100%)]",
    visual: (
      <div className="rounded-[1.5rem] border border-[color:var(--line-strong)] bg-[color:var(--surface-2)] p-3.5">
        <div className="rounded-[1.1rem] bg-[color:var(--surface-4)] p-3.5 text-[color:var(--heading)]">
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--copy-soft)]">
            Push live
          </p>
          <p className="mt-2 text-sm">Revenez avant 18h pour doubler vos points.</p>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {["Segment café", "18h", "Sans SMS"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[color:var(--line-strong)] bg-[color:var(--surface-4)] px-3 py-1 text-[11px] text-[color:var(--copy-muted)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: QrCode,
    title: "Scan QR universel",
    description: "Un QR code = CRM intégré. Scannez, cumulez, analysez.",
    className:
      "border-[color:var(--line)] bg-[linear-gradient(180deg,var(--surface-2)_0%,var(--surface)_100%)]",
    visual: (
      <div className="rounded-[1.4rem] border border-[color:var(--line-strong)] bg-[color:var(--surface-3)] p-3.5">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--copy-soft)]">
            Scan caisse
          </p>
          <span className="rounded-full border border-[color:var(--line-strong)] px-3 py-1 text-[11px] text-[color:var(--section-highlight)]">
            Temps réel
          </span>
        </div>
        <div className="mt-3 grid grid-cols-[0.8fr_1.2fr] gap-2.5">
          <div className="flex items-center justify-center rounded-[1.1rem] bg-[color:var(--surface-4)] p-3 text-[color:var(--section-highlight)]">
            <QrCode className="size-16" />
          </div>
          <div className="rounded-[1.1rem] border border-[color:var(--line)] bg-[color:var(--surface-4)] p-3.5">
            <div className="h-2 w-20 rounded-full bg-[color:var(--surface-5)]" />
            <div className="mt-3 space-y-2">
              <div className="h-2 rounded-full bg-[color:var(--surface-5)]" />
              <div className="h-2 w-4/5 rounded-full bg-[color:var(--surface-5)]" />
              <div className="h-2 w-2/3 rounded-full bg-[color:var(--surface-5)]" />
            </div>
          </div>
        </div>
        <div className="mt-2.5 flex items-center gap-2 text-sm text-[color:var(--section-highlight)]">
          <span className="size-2 rounded-full bg-[color:var(--primary)]" />
          Wallet + CRM synchronisés
        </div>
      </div>
    ),
  },
  {
    icon: Gift,
    title: "Points automatisés",
    description:
      "10e café offert, anniversaire, parrainage... Tout se fait tout seul.",
    className:
      "border-[color:var(--line)] bg-[linear-gradient(180deg,var(--surface-2)_0%,var(--surface)_100%)]",
    visual: (
      <div className="rounded-[1.4rem] border border-[color:var(--line-strong)] bg-[color:var(--surface-2)] p-3.5">
        <div className="flex items-center justify-between rounded-[1rem] bg-[color:var(--surface-5)] px-3.5 py-2.5">
          <span className="text-sm font-semibold text-[color:var(--section-highlight)]">
            Règles actives
          </span>
          <span className="rounded-full bg-[color:var(--surface-4)] px-3 py-1 text-xs text-[color:var(--heading)]">
            3 scénarios
          </span>
        </div>
        <div className="mt-2.5 space-y-2">
          {[
            "10e achat → café offert",
            "Anniversaire → bonus x2",
            "Parrainage → +5 points",
          ].map((rule) => (
            <div
              key={rule}
              className="rounded-[1rem] border border-[color:var(--line)] bg-[color:var(--surface-4)] px-3 py-2.5 text-sm text-[color:var(--copy-muted)]"
            >
              {rule}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Palette,
    title: "Design pixel perfect",
    description:
      "Vos couleurs, votre logo. Une carte qui ressemble à votre marque.",
    className:
      "border-[color:var(--line)] bg-[linear-gradient(180deg,var(--surface-2)_0%,var(--surface)_100%)]",
    visual: (
      <div className="grid grid-cols-4 gap-2.5">
        {["#120d08", "#3a2414", "#8b4513", "#f59e0b"].map((color) => (
          <div
            key={color}
            className="h-[4.5rem] rounded-[1.25rem]"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    ),
  },
];

export function Features() {
  const renderFeatureCard = (
    feature: (typeof features)[number],
    index: number,
  ) => (
    <motion.div
      key={feature.title}
      className="h-fit"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <BentoCard
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
        className={feature.className}
        iconClassName="bg-[#120d08]"
      >
        {feature.visual}
      </BentoCard>
    </motion.div>
  );

  return (
    <section id="fonctionnalites" className="scroll-mt-28 px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-orange-600">
            Fonctionnalités
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em] text-[color:var(--heading)] sm:text-5xl">
            Une stack wallet claire, chaude, utile. Pas un décor de landing.
          </h2>
        </div>

        <div className="mt-10 space-y-4 md:hidden">
          {features.map((feature, index) => renderFeatureCard(feature, index))}
        </div>

        <div className="mt-10 hidden items-start gap-4 md:grid md:grid-cols-2 lg:gap-5">
          <div className="space-y-4 lg:space-y-5">
            {renderFeatureCard(features[0], 0)}
            {renderFeatureCard(features[2], 2)}
          </div>
          <div className="space-y-4 lg:space-y-5">
            {renderFeatureCard(features[1], 1)}
            {renderFeatureCard(features[3], 3)}
          </div>
        </div>
      </div>
    </section>
  );
}

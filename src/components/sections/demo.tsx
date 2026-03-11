"use client";

import { motion } from "framer-motion";
import { Bell, QrCode, WandSparkles } from "lucide-react";

import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: WandSparkles,
    title: "Créez",
    description:
      "Composez votre pass, vos couleurs, vos règles de points et vos messages en quelques minutes.",
    eyebrow: "Éditeur de carte",
  },
  {
    icon: QrCode,
    title: "Distribuez",
    description:
      "Le client ajoute sa carte via QR code, email ou SMS et la garde dans son wallet natif.",
    eyebrow: "Ajout instantané",
  },
  {
    icon: Bell,
    title: "Fidélisez",
    description:
      "Relancez au bon moment avec des push gratuits, visibles directement sur la carte.",
    eyebrow: "Push wallet",
  },
];

export function DemoSection() {
  return (
    <section id="demo" className="scroll-mt-28 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-orange-600">
            Comment ça marche
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] text-[color:var(--heading)] sm:text-5xl">
            Trois étapes pour passer du QR code à la rétention.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[color:var(--copy-muted)]">
            Une expérience simple côté équipe, native côté client, mesurable côté business.
          </p>
        </div>

        <div className="relative mt-14">
          <motion.div
            initial={{ scaleX: 0, opacity: 0.4 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute left-[16.666%] right-[16.666%] top-[4.75rem] hidden h-px origin-left bg-[linear-gradient(90deg,rgba(249,115,22,0.12)_0%,rgba(249,115,22,0.85)_50%,rgba(251,191,36,0.16)_100%)] lg:block"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                >
                  <Card className="relative h-full p-6 sm:p-7">
                    <div className="flex items-center gap-4">
                      <div className="flex size-14 items-center justify-center rounded-[1.4rem] bg-[color:var(--surface-4)] text-[color:var(--section-highlight)]">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--copy-soft)]">
                          {step.eyebrow}
                        </p>
                        <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--heading)]">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[color:var(--copy-muted)]">
                      {step.description}
                    </p>

                    <div className="mt-8 rounded-[1.75rem] border border-[color:var(--line-strong)] bg-[linear-gradient(180deg,var(--surface-3)_0%,var(--surface-4)_100%)] p-4">
                      {index === 0 && (
                        <div className="space-y-3">
                          <div className="rounded-[1.2rem] border border-[color:var(--line-strong)] bg-[color:var(--surface-3)] p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-[color:var(--copy-muted)]">
                                Palette
                              </span>
                              <span className="rounded-full bg-[color:var(--surface-5)] px-3 py-1 text-xs font-semibold text-[color:var(--section-highlight)]">
                                Premium
                              </span>
                            </div>
                            <div className="mt-4 flex gap-2">
                              {["#120d08", "#3a2414", "#b45309", "#f59e0b"].map((color) => (
                                <div
                                  key={color}
                                  className="h-10 flex-1 rounded-2xl"
                                  style={{ backgroundColor: color }}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-[1.2rem] bg-[color:var(--surface-3)] p-4 text-sm text-[color:var(--copy-muted)]">
                              10e café offert
                            </div>
                            <div className="rounded-[1.2rem] bg-[color:var(--surface-4)] p-4 text-sm text-[color:var(--heading)]">
                              Notification anniversaire
                            </div>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        <div className="space-y-3">
                          <div className="rounded-[1.2rem] border border-dashed border-orange-300/70 bg-[color:var(--surface-3)] p-6 text-center">
                            <div className="mx-auto flex size-20 items-center justify-center rounded-[1.4rem] bg-[color:var(--surface-4)] text-[color:var(--section-highlight)]">
                              <QrCode className="size-10" />
                            </div>
                            <p className="mt-4 text-sm font-medium text-[color:var(--copy-muted)]">
                              Scanner pour ajouter la carte
                            </p>
                          </div>
                          <div className="rounded-[1.2rem] bg-[color:var(--surface-3)] p-4">
                            <div className="h-3 w-24 rounded-full bg-[color:var(--surface-5)]" />
                            <div className="mt-3 h-3 w-full rounded-full bg-[color:var(--surface-5)]" />
                            <div className="mt-2 h-3 w-2/3 rounded-full bg-[color:var(--surface-5)]" />
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        <div className="space-y-3">
                          <div className="rounded-[1.2rem] border border-[color:var(--line-strong)] bg-[color:var(--surface-3)] p-4">
                            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--copy-soft)]">
                              Campagne
                            </p>
                            <p className="mt-2 text-sm font-semibold text-[color:var(--heading)]">
                              Votre café gratuit expire vendredi.
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-[1.2rem] bg-[color:var(--surface-4)] p-4 text-[color:var(--heading)]">
                              92% délivré
                            </div>
                            <div className="rounded-[1.2rem] bg-[color:var(--surface-3)] p-4 text-[color:var(--copy-muted)]">
                              +31% retours
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

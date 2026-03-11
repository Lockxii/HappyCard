"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const items = [
  {
    question: "Comment fonctionnent les notifications push ?",
    answer:
      "HappyCard envoie des push directement sur les cartes Apple Wallet et Google Wallet déjà ajoutées par vos clients. Pas de coût unitaire, pas de campagne SMS à acheter.",
  },
  {
    question: "Mes clients doivent-ils installer une app ?",
    answer:
      "Non. Ils ajoutent simplement leur carte dans leur wallet natif depuis un QR code, un lien ou un email.",
  },
  {
    question: "Puis-je importer mes clients existants ?",
    answer:
      "Oui. Vous pouvez recréer votre base existante pour générer des cartes et continuer le programme sans repartir de zéro.",
  },
  {
    question: "Quelle est la différence avec les SMS ?",
    answer:
      "Le wallet garde une carte vivante, visible et mise à jour. Les push coûtent moins cher, sont plus contextuels et s'appuient sur une présence durable dans le téléphone.",
  },
  {
    question: "Comment annuler mon abonnement ?",
    answer:
      "Depuis votre espace client, sans engagement. Votre plan reste actif jusqu'à la fin de la période déjà payée.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-28 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-orange-600">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] text-[color:var(--heading)] sm:text-5xl">
            Les questions qui reviennent avant de lancer.
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Card
                key={item.question}
                className="overflow-hidden border-[color:var(--line)] bg-[color:var(--card)] backdrop-blur"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                >
                  <span className="font-semibold text-[color:var(--heading)]">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 text-[color:var(--copy-soft)] transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-sm leading-7 text-[color:var(--copy-muted)] sm:px-7">
                        {item.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

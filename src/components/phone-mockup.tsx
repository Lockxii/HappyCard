"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BellRing,
  Coffee,
  Gift,
  QrCode,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type NotificationItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  body: string;
  toneClassName: string;
};

const defaultNotification: NotificationItem = {
  id: "rush",
  icon: BellRing,
  title: "Point validé",
  body: "+1 achat ajouté à la carte",
  toneClassName: "bg-[#fff0dc] text-orange-600",
};

const rewardNotification: NotificationItem = {
  id: "reward",
  icon: Gift,
  title: "Récompense débloquée",
  body: "Votre café offert est prêt",
  toneClassName: "bg-[#fff0dc] text-orange-600",
};

const confettiPieces = [
  { x: -138, y: -86, rotate: -52, color: "#fb923c", width: 6, height: 14, radius: 999 },
  { x: -116, y: -42, rotate: -20, color: "#fdba74", width: 12, height: 6, radius: 999 },
  { x: -102, y: -118, rotate: -64, color: "#f59e0b", width: 7, height: 16, radius: 999 },
  { x: -74, y: -94, rotate: -14, color: "#facc15", width: 10, height: 10, radius: 999 },
  { x: -52, y: -132, rotate: -26, color: "#fb923c", width: 8, height: 16, radius: 999 },
  { x: -18, y: -110, rotate: -8, color: "#fed7aa", width: 12, height: 6, radius: 999 },
  { x: 22, y: -136, rotate: 18, color: "#fb923c", width: 6, height: 14, radius: 999 },
  { x: 52, y: -112, rotate: 32, color: "#f59e0b", width: 10, height: 10, radius: 999 },
  { x: 78, y: -88, rotate: 46, color: "#fdba74", width: 8, height: 16, radius: 999 },
  { x: 108, y: -56, rotate: 24, color: "#facc15", width: 12, height: 6, radius: 999 },
  { x: 136, y: -92, rotate: 54, color: "#fb923c", width: 6, height: 14, radius: 999 },
  { x: 118, y: -16, rotate: 10, color: "#fed7aa", width: 10, height: 10, radius: 999 },
  { x: 92, y: 18, rotate: 38, color: "#fb923c", width: 8, height: 16, radius: 999 },
  { x: 58, y: 34, rotate: 22, color: "#f59e0b", width: 12, height: 6, radius: 999 },
  { x: -52, y: 28, rotate: -18, color: "#fdba74", width: 10, height: 10, radius: 999 },
  { x: -92, y: 8, rotate: -34, color: "#facc15", width: 6, height: 14, radius: 999 },
];

export function PhoneMockup() {
  const [points, setPoints] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [displayedNotification, setDisplayedNotification] =
    useState<NotificationItem>(defaultNotification);

  useEffect(() => {
    if (showConfetti) return;

    let showTimeout = 0;
    let hideTimeout = 0;
    let cancelled = false;

    const loop = (delay: number) => {
      showTimeout = window.setTimeout(() => {
        if (cancelled) return;

        setDisplayedNotification(defaultNotification);
        setShowNotification(true);

        hideTimeout = window.setTimeout(() => {
          if (cancelled) return;

          setShowNotification(false);
          loop(1400);
        }, 1550);
      }, delay);
    };

    setShowNotification(false);
    loop(950);

    return () => {
      cancelled = true;
      window.clearTimeout(showTimeout);
      window.clearTimeout(hideTimeout);
    };
  }, [showConfetti]);

  useEffect(() => {
    if (!showConfetti) return;

    setShowNotification(false);

    const showTimeout = window.setTimeout(() => {
      setDisplayedNotification(rewardNotification);
      setShowNotification(true);
    }, 320);

    return () => {
      window.clearTimeout(showTimeout);
    };
  }, [showConfetti]);

  useEffect(() => {
    let step = 0;

    const interval = window.setInterval(() => {
      step += 1;

      if (step <= 10) {
        setPoints(step);
        setShowConfetti(step === 10);
        return;
      }

      if (step <= 14) {
        setShowConfetti(true);
        return;
      }

      if (step <= 18) {
        setShowConfetti(false);
        return;
      }

      step = 0;
      setPoints(0);
      setShowConfetti(false);
    }, 260);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className="relative mx-auto w-full max-w-[370px]"
    >
      <div className="absolute inset-x-7 top-8 z-30">
        <div className="mx-auto max-w-[20.5rem]">
          <AnimatePresence mode="wait" initial={false}>
            {showNotification ? (
              <motion.div
                key={displayedNotification.id}
                initial={{ y: -12, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -10, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <NotificationCard notification={displayedNotification} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[3.2rem] border-[11px] border-[#050505] bg-[linear-gradient(180deg,#e9e2d8_0%,#f8f3eb_100%)] px-4 pb-5 pt-6 shadow-[0_46px_140px_-52px_rgba(0,0,0,0.85)]">
        <div className="mx-auto mb-5 h-1.5 w-24 rounded-full bg-[#18120d]" />

        <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_78%_90%,rgba(249,115,22,0.8),transparent_24%),linear-gradient(145deg,#120d08_0%,#27180e_48%,#6d3414_100%)] p-5 text-white shadow-[0_24px_50px_-30px_rgba(24,18,13,0.95)]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_38%)]" />

          <motion.div
            animate={showConfetti ? { scale: [0.3, 2.1], opacity: [0.6, 0] } : { scale: 0.3, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute left-1/2 top-[44%] z-10 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ffd8af]/70"
          />
          <motion.div
            animate={showConfetti ? { scale: [0.2, 1.4], opacity: [0.4, 0] } : { scale: 0.2, opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="absolute left-1/2 top-[44%] z-10 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/20 blur-2xl"
          />
          {confettiPieces.map((piece, index) => (
            <motion.span
              key={`${piece.x}-${piece.y}`}
              initial={false}
              animate={
                showConfetti
                  ? {
                      opacity: [0, 1, 1, 0],
                      x: [0, piece.x, piece.x * 1.08],
                      y: [0, piece.y, piece.y * 1.18],
                      rotate: [0, piece.rotate, piece.rotate * 1.4],
                      scale: [0.45, 1.18, 0.74],
                    }
                  : { opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.45 }
              }
              transition={{ duration: 1.15, delay: index * 0.015, ease: "easeOut" }}
              className="absolute left-1/2 top-[44%] z-20"
              style={{
                width: `${piece.width}px`,
                height: `${piece.height}px`,
                borderRadius: `${piece.radius}px`,
                backgroundColor: piece.color,
              }}
            />
          ))}

          <div className="relative z-10 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-white/50">Café Atelier</p>
              <p className="mt-2 font-display text-[2.1rem] font-semibold tracking-[-0.06em]">
                Carte Fidélité
              </p>
            </div>
            <div className="flex size-14 items-center justify-center rounded-[1.3rem] bg-white/10 backdrop-blur">
              <Wallet className="size-6 text-[#ffd9b4]" />
            </div>
          </div>

          <div className="relative z-10 mt-8 rounded-[1.7rem] border border-white/12 bg-white/7 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/65">Progression</span>
              <motion.span
                key={points}
                initial={{ opacity: 0.5, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl font-semibold tracking-[-0.04em]"
              >
                {points} / 10 achats
              </motion.span>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {Array.from({ length: 10 }).map((_, index) => {
                const filled = index < points;

                return (
                  <motion.div
                    key={index}
                    animate={{
                      scale: filled ? [0.92, 1.08, 1] : 1,
                      backgroundColor: filled ? "#f6c44f" : "rgba(255,255,255,0.08)",
                      borderColor: filled ? "rgba(246,196,79,0.95)" : "rgba(255,255,255,0.14)",
                    }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className={cn(
                      "h-10 rounded-[1.15rem] border",
                      filled ? "shadow-[0_8px_18px_-10px_rgba(246,196,79,0.85)]" : "",
                    )}
                  />
                );
              })}
            </div>
          </div>

          <div className="relative z-10 mt-5 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-white/50">Avantage</p>
              <motion.div
                animate={showConfetti ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                transition={{ duration: 0.45 }}
                className="mt-2 flex items-center gap-2 text-lg font-semibold"
              >
                <Coffee className="size-5 text-[#ffd495]" />
                Café offert
              </motion.div>
            </div>
            <div className="rounded-[1.35rem] border border-white/12 bg-[#fff8f0] p-3 text-[#0f0d0a] shadow-[0_18px_28px_-18px_rgba(0,0,0,0.55)]">
              <QrCode className="size-14" />
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-[1.05fr_0.95fr] gap-3">
          <div className="rounded-[1.6rem] border border-[#e8d8c7] bg-[#fffaf3] p-4">
            <p className="text-xs uppercase tracking-[0.28em] text-[#94a0b2]">Clients actifs</p>
            <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-[#0f0d0a]">
              2 184
            </p>
            <p className="mt-2 text-sm text-[#0f9b6c]">+18% ce mois-ci</p>
          </div>
          <div className="rounded-[1.6rem] border border-[#18120d] bg-[#050505] p-4 text-white">
            <p className="text-xs uppercase tracking-[0.28em] text-white/38">Canal</p>
            <p className="mt-3 text-sm leading-7 text-[#f2ddca]">
              Apple Wallet + Google Pay
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NotificationCard({
  notification,
}: {
  notification: NotificationItem;
}) {
  const Icon = notification.icon;

  return (
    <div className="rounded-[1.55rem] border border-[#eadcca] bg-[#fff8f0] p-3.5 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.42)]">
      <div className="flex items-start gap-2.5">
        <div
          className={cn(
            "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-[1rem]",
            notification.toneClassName,
          )}
        >
          <Icon className="size-[18px]" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#93a0b2]">
              HappyCard
            </p>
            <span className="text-[11px] text-[#b6a594]">Maintenant</span>
          </div>
          <p
            className="mt-1 font-semibold tracking-[-0.04em] text-[#111111] text-[1.02rem]"
          >
            {notification.title}
          </p>
          <p className="mt-0.5 text-[13px] leading-5 text-[#4f4339]">{notification.body}</p>
        </div>
      </div>
    </div>
  );
}

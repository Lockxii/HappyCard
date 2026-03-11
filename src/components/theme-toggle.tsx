"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoonStar, SunMedium } from "lucide-react";

const STORAGE_KEY = "happycard-theme";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
      className="relative inline-flex h-10 w-[5.4rem] items-center rounded-full border border-[color:var(--line)] bg-[color:var(--nav-bg)] p-1 shadow-[0_14px_32px_-22px_rgba(0,0,0,0.45)] backdrop-blur-md transition"
    >
      <span className="sr-only">Changer le thème</span>
      <motion.span
        initial={false}
        animate={{ x: theme === "light" ? 40 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 32 }}
        className="absolute left-1 top-1 h-8 w-8 rounded-full bg-[color:var(--surface-4)] shadow-[0_12px_24px_-16px_rgba(0,0,0,0.35)]"
      />
      <span
        className={`relative z-10 flex w-1/2 items-center justify-center transition ${
          mounted && theme === "dark"
            ? "text-[color:var(--heading)]"
            : "text-[color:var(--copy-soft)]"
        }`}
      >
        <MoonStar className="size-4" />
      </span>
      <span
        className={`relative z-10 flex w-1/2 items-center justify-center transition ${
          mounted && theme === "light"
            ? "text-[color:var(--heading)]"
            : "text-[color:var(--copy-soft)]"
        }`}
      >
        <SunMedium className="size-4" />
      </span>
    </button>
  );
}

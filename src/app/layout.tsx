import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";

import "./globals.css";

const themeInitScript = `
  (() => {
    try {
      const storedTheme = localStorage.getItem("happycard-theme");
      const theme = storedTheme === "light" ? "light" : "dark";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (_) {
      document.documentElement.dataset.theme = "dark";
      document.documentElement.style.colorScheme = "dark";
    }
  })();
`;

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HappyCard | Cartes de fidélité Wallet",
  description:
    "HappyCard permet aux commerces de créer des cartes de fidélité Apple Wallet et Google Pay avec notifications push illimitées.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className="scroll-smooth"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${manrope.variable} ${syne.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

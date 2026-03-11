import Link from "next/link";

const groups = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#fonctionnalites" },
      { label: "Tarifs", href: "#tarifs" },
      { label: "API", href: "#" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Exemples", href: "#" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "CGV", href: "#" },
      { label: "Confidentialité", href: "#" },
      { label: "Mentions légales", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Twitter/X", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Email", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] px-6 pb-10 pt-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--heading)]">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-[color:var(--footer-text)]">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-[color:var(--heading)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[color:var(--line)] pt-6 text-sm text-[color:var(--copy-soft)]">
          © 2025 HappyCard. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

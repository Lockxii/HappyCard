# HappyCard

Landing page marketing pour `HappyCard`, une solution SaaS qui permet aux commerces de creer des cartes de fidelite Apple Wallet et Google Pay avec notifications push.

## Apercu

Le projet contient une landing page complete en `Next.js 15`, avec une direction artistique sombre/orange et un toggle clair/sombre dans la navbar.

Sections incluses :

- Navbar fixe avec menu mobile et toggle de theme
- Hero avec mockup mobile anime
- Section demo en 3 etapes
- Grille de fonctionnalites
- Preuve sociale
- Tarifs
- FAQ
- CTA final
- Footer

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Composants UI maison / style shadcn

## Lancer le projet

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
npm run start
```

Lint :

```bash
npm run lint
```

## Arborescence utile

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    navbar.tsx
    logo.tsx
    phone-mockup.tsx
    theme-toggle.tsx
    bento-card.tsx
    sections/
      hero.tsx
      demo.tsx
      features.tsx
      pricing.tsx
      faq.tsx
      social-proof.tsx
      cta.tsx
      footer.tsx
```

## Notes

- Le mode developpement et le build utilisent des dossiers distincts (`.next-dev` et `.next-build`) pour eviter les conflits.
- Le theme choisi est persiste dans le navigateur.


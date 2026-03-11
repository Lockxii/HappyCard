# HappyCard

Landing page marketing realisee pour `HappyCard`, un SaaS qui permet aux commerces de creer des cartes de fidelite pour Apple Wallet et Google Pay, avec notifications push wallet a la place des SMS payants.

Ce README documente clairement :

- ce que fait le projet
- ce qui a ete implemente
- comment le projet est structure
- comment le lancer en local
- quels choix techniques et UI ont ete mis en place

## 1. Objectif du projet

Le projet est une landing page statique orientee conversion pour presenter HappyCard.

L'objectif etait de reconstruire une vraie page marketing avec une direction artistique plus travaillee que le template initial, en mettant en avant :

- la promesse principale : remplacer le SMS par le push wallet
- une interface hero forte avec mockup mobile
- une presentation claire du fonctionnement
- des sections pricing, FAQ et CTA qui vendent proprement
- une DA sombre orange, avec aussi un mode clair activable

## 2. Stack utilisee

Le projet utilise strictement :

- `Next.js 15` avec `App Router`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `Lucide React`
- composants UI dans un style proche `shadcn`

## 3. Ce qui a ete implemente

### Structure globale de la page

La page principale est composee dans :

- [src/app/page.tsx](/Users/arthurm/Desktop/Code/happycard/src/app/page.tsx)

Elle assemble :

- `Navbar`
- `Hero`
- `DemoSection`
- `Features`
- `SocialProof`
- `Pricing`
- `Faq`
- `Cta`
- `Footer`

### Navbar

Fichier :

- [src/components/navbar.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/navbar.tsx)

Ce qui a ete mis en place :

- navbar fixe
- logo HappyCard
- liens d'ancrage vers les sections
- CTA de connexion et essai
- menu mobile avec `Sheet`
- toggle de theme sombre / clair dans la navbar

### Hero

Fichier :

- [src/components/sections/hero.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/sections/hero.tsx)

Ce qui a ete mis en place :

- titre principal de conversion
- sous-titre produit
- CTA principal et secondaire
- 3 mini blocs de preuve rapide sous les CTA
- mise en page desktop / mobile adaptee
- fond visuel avec glow orange
- integration du mockup telephone

### Mockup telephone

Fichier :

- [src/components/phone-mockup.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/phone-mockup.tsx)

Ce qui a ete mis en place :

- frame telephone custom en CSS
- carte de fidelite a l'interieur
- progression des points
- cycle de notifications wallet
- petite pause entre les notifications
- etat de recompense debloquee
- confettis animes
- cartes de stats sous le pass wallet

### Section demo

Fichier :

- [src/components/sections/demo.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/sections/demo.tsx)

Ce qui a ete mis en place :

- 3 etapes claires : creer, distribuer, fideliser
- cartes visuelles pour chaque etape
- animation d'apparition au scroll
- ligne de liaison animee sur desktop

### Section fonctionnalites

Fichier :

- [src/components/sections/features.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/sections/features.tsx)

Composant reutilisable :

- [src/components/bento-card.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/bento-card.tsx)

Ce qui a ete mis en place :

- 4 cartes de fonctionnalites
- visuels internes pour chaque benefice
- layout retravaille pour eviter les gros vides entre cartes
- structure en colonnes independantes sur desktop pour supprimer les "trous" visuels

### Social proof

Fichier :

- [src/components/sections/social-proof.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/sections/social-proof.tsx)

Ce qui a ete mis en place :

- carte de temoignage
- note 5 etoiles
- citation client mise en avant

### Pricing

Fichier :

- [src/components/sections/pricing.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/sections/pricing.tsx)

Ce qui a ete mis en place :

- 3 offres
- offre du milieu mise en avant
- liste des avantages
- CTA par plan

### FAQ

Fichier :

- [src/components/sections/faq.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/sections/faq.tsx)

Ce qui a ete mis en place :

- accordions avec animation
- contenu en francais
- ouverture / fermeture fluide

### CTA final

Fichier :

- [src/components/sections/cta.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/sections/cta.tsx)

Ce qui a ete mis en place :

- bloc de fermeture de page
- message simple de conversion
- bouton principal vers l'essai

### Footer

Fichier :

- [src/components/sections/footer.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/sections/footer.tsx)

Ce qui a ete mis en place :

- colonnes de liens produit / ressources / legal / contact
- ligne finale copyright

## 4. Systeme de theme sombre / clair

Fichiers principaux :

- [src/app/layout.tsx](/Users/arthurm/Desktop/Code/happycard/src/app/layout.tsx)
- [src/app/globals.css](/Users/arthurm/Desktop/Code/happycard/src/app/globals.css)
- [src/components/theme-toggle.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/theme-toggle.tsx)

Ce qui a ete mis en place :

- un toggle dans la navbar pour passer du mode sombre au mode clair
- persistance du theme dans `localStorage`
- initialisation du theme avant hydratation pour eviter un flash visuel
- variables CSS globales pour piloter :
  - fond
  - texte
  - bordures
  - surfaces
  - panneaux accent
  - couleurs de navigation

Le projet ne se contente pas de changer le fond : les composants principaux ont ete relies aux variables de theme pour que le mode clair reste coherent.

## 5. Composants UI mutualises

Fichiers :

- [src/components/ui/button.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/ui/button.tsx)
- [src/components/ui/card.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/ui/card.tsx)
- [src/components/ui/badge.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/ui/badge.tsx)
- [src/components/ui/sheet.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/ui/sheet.tsx)
- [src/lib/utils.ts](/Users/arthurm/Desktop/Code/happycard/src/lib/utils.ts)

Ce qui a ete mis en place :

- variantes de boutons
- cartes de base
- badges
- sheet mobile
- helper `cn`

Ces composants servent de base reutilisable sur toute la landing.

## 6. Animations mises en place

Les animations sont principalement gerees avec `Framer Motion`.

Exemples :

- apparition progressive du hero
- flottement visuel du mockup telephone
- notifications wallet animees
- confettis lors du debloquage de la recompense
- reveal des cartes au scroll
- transitions des FAQ
- animation du toggle de theme

## 7. Corrections techniques importantes ajoutees

En plus de l'UI, plusieurs points techniques ont ete corriges :

### Separation des dossiers de build et de dev

Fichiers :

- [package.json](/Users/arthurm/Desktop/Code/happycard/package.json)
- [next.config.ts](/Users/arthurm/Desktop/Code/happycard/next.config.ts)
- [tsconfig.json](/Users/arthurm/Desktop/Code/happycard/tsconfig.json)
- [eslint.config.mjs](/Users/arthurm/Desktop/Code/happycard/eslint.config.mjs)
- [.gitignore](/Users/arthurm/Desktop/Code/happycard/.gitignore)

Probleme traite :

- `next dev` et `next build` pouvaient se marcher dessus dans `.next`

Solution mise en place :

- `npm run dev` utilise `.next-dev`
- `npm run build` et `npm run start` utilisent `.next-build`
- le lint ignore ces dossiers generes

### Offset de scroll pour les ancres

Sections corrigees :

- [src/components/sections/demo.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/sections/demo.tsx)
- [src/components/sections/features.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/sections/features.tsx)
- [src/components/sections/pricing.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/sections/pricing.tsx)
- [src/components/sections/faq.tsx](/Users/arthurm/Desktop/Code/happycard/src/components/sections/faq.tsx)

Probleme traite :

- la navbar fixe recouvrait le haut des sections lors des navigations par ancre

Solution mise en place :

- ajout de `scroll-mt-*` sur les sections concernees

### Page not-found et icone

Fichiers :

- [src/app/not-found.tsx](/Users/arthurm/Desktop/Code/happycard/src/app/not-found.tsx)
- [src/app/icon.svg](/Users/arthurm/Desktop/Code/happycard/src/app/icon.svg)

Ajouts :

- page `not-found`
- icone d'application

## 8. Arborescence du projet

```text
src/
  app/
    globals.css
    icon.svg
    layout.tsx
    not-found.tsx
    page.tsx
  components/
    bento-card.tsx
    logo.tsx
    navbar.tsx
    phone-mockup.tsx
    theme-toggle.tsx
    sections/
      cta.tsx
      demo.tsx
      faq.tsx
      features.tsx
      footer.tsx
      hero.tsx
      logo-cloud.tsx
      pricing.tsx
      social-proof.tsx
    ui/
      badge.tsx
      button.tsx
      card.tsx
      sheet.tsx
  lib/
    utils.ts
```

Note :

- `logo-cloud.tsx` existe encore dans le dossier, mais n'est plus utilise dans la composition actuelle de la page.

## 9. Scripts disponibles

Dans [package.json](/Users/arthurm/Desktop/Code/happycard/package.json) :

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Details :

- `npm run dev` : lance le serveur local sur le dossier `.next-dev`
- `npm run build` : build de production dans `.next-build`
- `npm run start` : demarre le build de production
- `npm run lint` : verifie le code avec ESLint

## 10. Installation et lancement

### Installation

```bash
npm install
```

### Developpement

```bash
npm run dev
```

### Build de production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## 11. Etat actuel du projet

Le projet est actuellement :

- structure
- fonctionnel
- responsive
- avec mode sombre et mode clair
- avec animations en place
- sans backend
- pret pour iteration UI ou deploiement statique / Vercel

## 12. Resume rapide

Ce qui a ete fait concretement :

- reconstruction complete de la landing
- nouvelle DA sombre / orange
- hero retravaille avec mockup wallet anime
- sections marketing completement structurees
- meilleure densite visuelle dans les blocs
- ajout d'un vrai systeme de theme clair / sombre
- correction des problemes de build/dev Next
- README de documentation complet


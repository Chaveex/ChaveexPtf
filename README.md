# Portfolio — Vivien Chavee

Site personnel (FR / EN) : parcours, stack, ce que je cherche, contact. Next.js 14 (pages router), TypeScript, CSS modules. Trois styles visuels (memphis, aurora, mono) et trois variantes de hero, réglables depuis l'interface.

## Lancer en local

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
```

## Structure

- `src/pages/index.tsx` : page unique (hero, stack, expérience, ce que je cherche, contact).
- `src/lib/i18n.ts` : **tous les textes** FR et EN (expérience, stack, accroche). C'est ici qu'on modifie le contenu.
- `src/lib/types.ts` : types des données.
- `src/components/` : sections et variantes de hero.
- `src/styles/` : styles (variables de thème dans `globals.css`, composants dans `portfolio.module.css`).
- `public/CV-Vivien-Chavee.pdf` (FR) et `public/CV-Vivien-Chavee-en.pdf` (EN) : CV téléchargeables depuis le site. Version publique, sans numéro de téléphone.

## Déploiement

Netlify, via `netlify.toml` et `@netlify/plugin-nextjs`. Chaque push sur la branche principale déclenche un déploiement.

## Mettre à jour les CV

Remplacer les deux PDF de `public/` en gardant les mêmes noms de fichier : les boutons « Télécharger CV » pointent dessus.

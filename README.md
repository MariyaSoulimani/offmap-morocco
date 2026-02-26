# OffMap Morocco

Site vitrine + reservation MVP pour la marque de voyages OffMap Morocco.

Stack:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Installation

```bash
npm install
npm run dev
```

Le site tourne sur `http://localhost:3000`.

## Commandes

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Arborescence

```text
app/
  about/page.tsx
  booking/page.tsx
  booking/thanks/page.tsx
  contact/page.tsx
  faq/page.tsx
  trips/page.tsx
  trips/[slug]/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  booking-form.tsx
  contact-form.tsx
  container.tsx
  footer.tsx
  header.tsx
  section-title.tsx
  trip-card.tsx
  trip-filters.tsx
data/
  morocco-images.ts
  trips.ts
lib/
  trips.ts
  types.ts
next.config.mjs
tailwind.config.ts
```

## Modifier les trips

Editez `data/trips.ts`.

Chaque trip contient:
- `slug`, `title`, `tagline`
- `theme`, `level`
- `durationDays`, `startDate`, `endDate`
- `priceMad`, `placesTotal`, `placesRemaining`
- `description`, `included`, `toBring`, `itinerary`, `safetyRules`
- `imageIds`, `tags`

## Modifier couleurs et fonts

Couleurs:
- `tailwind.config.ts` (objet `theme.extend.colors.offmap`)

Fonts:
- `app/layout.tsx`
- `Montserrat` pour les titres
- `Roboto` pour le texte

Styles globaux:
- `app/globals.css`

## Ajouter le logo

1. Ajoutez votre logo dans `public/` (ex: `public/logo-offmap.svg`).
2. Mettez a jour:
   - `components/header.tsx`
   - `components/footer.tsx`
3. Utilisez `next/image` pour un rendu optimise.

## Remplacer les images (Maroc uniquement)

Editez `data/morocco-images.ts`.

Regles a respecter:
- images localisees uniquement au Maroc
- conserver pour chaque image:
  - `url`
  - `alt`
  - `credit`

## Images actuelles (Maroc uniquement)

| id | url | alt | credit |
|---|---|---|---|
| `merzouga-dunes` | `https://upload.wikimedia.org/wikipedia/commons/2/24/%22Ein_beeindruckender_Teil_der_Sahara%22._01.jpg` | Sand dunes in Erg Chebbi near Merzouga, Morocco | Wikimedia Commons - Holger Uwe Schmitt |
| `atlas-mountains` | `https://upload.wikimedia.org/wikipedia/commons/6/6f/%22Armed%22_village_in_Toubkal_National_Park.jpg` | Atlas Mountains landscape in Toubkal National Park, Morocco | Wikimedia Commons - Mohamed Haddi |
| `akchour-cascade` | `https://upload.wikimedia.org/wikipedia/commons/9/92/Akchour_Camp_-_National_park_of_Talassemtane.jpg` | Akchour area in Talassemtane National Park, Morocco | Wikimedia Commons - Jodal rachid |
| `chefchaouen-blue-city` | `https://upload.wikimedia.org/wikipedia/commons/2/20/068_-_Marokko_Handybilder_2018_-_Chefchaouen_%2841490657944%29.jpg` | Blue street in the medina of Chefchaouen, Morocco | Wikimedia Commons - Uwe Brodrecht |
| `ait-benhaddou` | `https://upload.wikimedia.org/wikipedia/commons/4/4f/%22Hervorragendes_Beispiel_marokkanischer_Lehmbauarchitektur%22._01.jpg` | Ait Benhaddou ksar architecture in Morocco | Wikimedia Commons - Holger Uwe Schmitt |
| `hassan-ii-mosque` | `https://upload.wikimedia.org/wikipedia/commons/e/e9/Hassan_II_Mosque_-_general_framing%2C_Casablanca%2C_Morocco.jpg` | Hassan II Mosque in Casablanca, Morocco | Wikimedia Commons - Tinuzzo |
| `todra-gorge` | `https://upload.wikimedia.org/wikipedia/commons/4/4c/%22Ein_beeindruckendes_Naturwunder%22%2C_01.jpg` | Rock walls inside Todgha Gorge, Morocco | Wikimedia Commons - Holger Uwe Schmitt |
| `dades-valley` | `https://upload.wikimedia.org/wikipedia/commons/9/97/%22Die_Schlucht_geh%C3%B6rt_zu_dem_absoluten_H%C3%B6hepunkten_einer_Reise_durch_Marokko%22._01.jpg` | Landscape in Dades Gorge, Morocco | Wikimedia Commons - Holger Uwe Schmitt |
| `sidi-ifni-beach` | `https://upload.wikimedia.org/wikipedia/commons/f/f8/Plage_sidi_ifni.jpg` | Ocean shore in Sidi Ifni, Morocco | Wikimedia Commons - INTHCON |

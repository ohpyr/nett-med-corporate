# Nett-Med — Site Architecture

## Routing model

French is the default locale and lives at the root. English is prefixed.

```
/                       FR (default, no prefix)
/en/                    EN
```

Slugs are written in the language of the page. A French page never carries an
English slug, because the slug itself is a ranking signal. This means every
route needs an explicit translation pair rather than a shared key.

## Route map

| FR | EN | Tier |
|---|---|---|
| `/` | `/en` | — |
| `/services` | `/en/services` | — |
| `/services/entretien-menager-commercial` | `/en/services/commercial-cleaning` | 1 |
| `/services/nettoyage-immeubles-parties-communes` | `/en/services/building-common-area-cleaning` | 1 |
| `/services/lavage-de-garage` | `/en/services/parking-garage-cleaning` | 1 |
| `/services/nettoyage-de-bureaux` | `/en/services/office-cleaning` | 1 |
| `/services/nettoyage-apres-construction` | `/en/services/post-construction-cleaning` | 2 |
| `/services/nettoyage-de-tapis` | `/en/services/carpet-cleaning` | 2 |
| `/services/nettoyage-cliniques-medicales` | `/en/services/medical-clinic-cleaning` | 2 |
| `/services/nettoyage-garderies-ecoles` | `/en/services/daycare-school-cleaning` | 2 |
| `/services/decapage-cirage-planchers` | `/en/services/floor-stripping-waxing` | 2 |
| `/services/lavage-de-vitres` | `/en/services/window-cleaning` | 2 |
| `/services/nettoyage-de-restaurants` | `/en/services/restaurant-cleaning` | 3 |
| `/services/nettoyage-de-commerces` | `/en/services/retail-store-cleaning` | 3 |
| `/services/nettoyage-entrepots` | `/en/services/warehouse-cleaning` | 3 |
| `/services/entretien-menager-residentiel` | `/en/services/residential-cleaning` | 3 |
| `/services/grand-menage` | `/en/services/deep-cleaning` | 3 |
| `/services/menage-demenagement` | `/en/services/move-in-move-out-cleaning` | 3 |
| `/services/nettoyage-airbnb` | `/en/services/airbnb-cleaning` | 3 |
| `/services/peinture-commerciale` | `/en/services/commercial-painting` | 4 |
| `/realisations` | `/en/our-work` | — |
| `/a-propos` | `/en/about` | — |
| `/contact` | `/en/contact` | — |
| `/soumission` | `/en/quote` | — |

18 service pages + services index + home + 4 core (réalisations, à propos,
contact, soumission) = 24 routes × 2 locales = **48 pages**.

## Tier meaning

Tier is build-and-publish order, ranked by contract value × winnability, not by
how impressive the service sounds.

- **Tier 1** — the four pages that pay for the site. Commercial focus per the
  client's stated priority.
- **Tier 2** — high-margin verticals and specialized work that supports Tier 1
  contracts as add-ons.
- **Tier 3** — residential and lower-value commercial. Real demand, lower ticket.
- **Tier 4** — painting. Recently added, not a focus. One page, no expansion.

## Location pages — deliberately deferred

Do **not** build service × location combination pages in the first phase.

`themontrealcleaners.ca` runs 40+ of them successfully, but they have 15 years
of domain age to absorb the thin-content risk. A new site publishing
"nettoyage de bureaux Laval / Longueuil / Brossard / Saint-Léonard…" as near
duplicate pages is the single most common way local service sites get filtered
out of the index.

Phase 2 approach, once Tier 1 and 2 rank: build **area hub pages** only
(`/secteurs/rive-sud`, `/secteurs/laval`), each with genuinely local content —
named boroughs served, actual completed jobs in that area, travel/response
times. Cap at 6 area pages. The template's hard stop is 50 location pages; we
should not approach a tenth of that.

## Internal linking

The commercial pillar is the hub. Link flow:

```
Home
 └─→ /services/entretien-menager-commercial          (pillar)
      ├─→ nettoyage-immeubles-parties-communes
      ├─→ nettoyage-de-bureaux
      ├─→ lavage-de-garage
      ├─→ nettoyage-cliniques-medicales
      ├─→ nettoyage-garderies-ecoles
      ├─→ nettoyage-de-restaurants
      ├─→ nettoyage-de-commerces
      └─→ nettoyage-entrepots

Home
 └─→ /services/entretien-menager-residentiel         (secondary pillar)
      ├─→ grand-menage
      ├─→ menage-demenagement
      └─→ nettoyage-airbnb
```

Cross-links that matter commercially, because they follow how the work
actually gets sold:

- `nettoyage-immeubles-parties-communes` ⇄ `lavage-de-garage` — same buyer
  (syndicat / property manager), garage washing is the natural upsell
- `nettoyage-immeubles-parties-communes` ⇄ `decapage-cirage-planchers` — lobby
  and corridor floors
- `nettoyage-apres-construction` → `peinture-commerciale` — the only sensible
  entry point to the painting page
- `nettoyage-de-bureaux` ⇄ `nettoyage-de-tapis` ⇄ `lavage-de-vitres`

Every service page links **up** to its pillar and **sideways** to two or three
genuinely related services. No link dumps, no "you might also like" grids.

## hreflang

Every page needs reciprocal annotations, including a self-reference:

```html
<link rel="alternate" hreflang="fr-CA" href="https://nett-med.ca/services/lavage-de-garage" />
<link rel="alternate" hreflang="en-CA" href="https://nett-med.ca/en/services/parking-garage-cleaning" />
<link rel="alternate" hreflang="x-default" href="https://nett-med.ca/services/lavage-de-garage" />
```

`x-default` points at the French version. The business is Montreal-based and
French is the legally required primary language under Bill 96.

## Canonical rules

- Trailing slashes off, enforced consistently
- Lowercase URLs only
- `www` → apex, single 301 hop
- Self-referencing canonical on every page

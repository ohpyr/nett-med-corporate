# Nett-Med — Implementation Roadmap

## Phase 1 — Foundation (weeks 1–4)

Build the machine and the four pages that pay for it.

- [ ] SvelteKit bilingual routing, FR at root, EN at `/en`
- [ ] Fluid layout system (see `docs/design/LAYOUT.md`)
- [ ] Shared layout: header, footer, quote CTA, tap-to-call
- [ ] Home page, both locales
- [ ] Tier 1 service pages, both locales — commercial pillar, immeubles,
      lavage de garage, bureaux
- [ ] Contact + soumission with a working form handler
- [ ] `LocalBusiness` + `Service` + `FAQPage` + `BreadcrumbList` schema
- [ ] hreflang across all published pages, `x-default` → FR
- [ ] `sitemap.xml`, `robots.txt`
- [ ] Google Search Console + GA4, both verified
- [ ] `info@nett-med.ca` live and replacing the Hotmail address

**Blocking on the client:** working email address, insurance/CNESST details to
publish, the three positive reviews with permission to attribute, job-site
photos.

## Phase 2 — Expansion (weeks 5–12)

- [ ] Tier 2 service pages, both locales (6 services)
- [ ] Réalisations gallery from the five job sites
- [ ] À propos with real team detail and credentials
- [ ] Google Business Profile verified, categories matched to Tier 1
- [ ] Review campaign — target 15 reviews, respond to both negatives
- [ ] Internal linking pass per `SITE-STRUCTURE.md`
- [ ] First three blog posts (below)

## Phase 3 — Scale (weeks 13–24)

- [ ] Tier 3 service pages (7 services)
- [ ] Painting page (Tier 4), linked from post-construction only
- [ ] Area hub pages — max 6, only with genuinely local content
- [ ] Local citations: PagesJaunes, Yelp, Apple Maps, 411, Bing Places
- [ ] Core Web Vitals: field LCP <2.0s, INP <200ms
- [ ] Reassess `AggregateRating` schema once rating >4.3 with 20+ reviews

## Phase 4 — Authority (months 7–12)

- [ ] Contract-buyer content: RFP guidance, comparing bids, contract terms
- [ ] Partnerships with property management firms and syndicate associations
- [ ] Case studies from named contract clients, with permission
- [ ] Quarterly content refresh on Tier 1 pages

## Content calendar

Written for the syndicat and property manager, not for a search engine. Each
post exists to answer a question that buyer genuinely asks before signing.

| # | FR working title | Targets | Links to |
|---|---|---|---|
| 1 | Entretien des parties communes : les obligations du syndicat de copropriété | obligations syndicat entretien | immeubles |
| 2 | Combien coûte un contrat d'entretien ménager commercial à Montréal ? | prix entretien ménager commercial | commercial pillar |
| 3 | Quand faire laver le garage intérieur de votre immeuble | lavage garage immeuble quand | lavage de garage |
| 4 | Contrat régulier ou service ponctuel : comment choisir | contrat vs ponctuel nettoyage | commercial pillar |
| 5 | Ce qu'il faut vérifier avant d'engager une entreprise de nettoyage | choisir entreprise nettoyage | commercial pillar |
| 6 | Nettoyage après rénovation : ce que couvre le service | nettoyage après rénovation | après construction |
| 7 | Normes de propreté en garderie au Québec | normes propreté garderie | garderies |
| 8 | Décapage ou polissage : quel traitement pour vos planchers | décapage vs polissage | planchers |

Cadence: two per month starting week 5. Publish French first, translate once
the French version has been live long enough to check it holds up.

Post #1 is the highest-value piece on this list. It targets a legal obligation
that no competitor is writing about, and it speaks to the exact buyer for the
highest-value contract Nett-Med can sign.

## Definition of done, per service page

- [ ] 500–700 words, unique, no boilerplate shared between pages
- [ ] Primary keyword in H1, title, first paragraph, URL slug
- [ ] Concrete task list — the actual work, not adjectives
- [ ] Contract vs. one-time framing
- [ ] Cost drivers stated honestly
- [ ] 3–5 FAQs with `FAQPage` schema
- [ ] Links up to pillar, sideways to 2–3 related services
- [ ] `Service` + `BreadcrumbList` schema
- [ ] hreflang pair complete and reciprocal
- [ ] Unique title (≤60 chars) and meta description (≤155)
- [ ] Passes read-aloud test: no sentence that could appear on any competitor's site

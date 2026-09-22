# Nett-Med — SEO Strategy

## Business facts (NAP — must stay identical everywhere)

```
Nett-Med
4175 rue Jarry, Montréal, QC  H1Z 2H5
+1 (514) 218-7341
info@nett-med.ca          ← not live yet; see Risks
```

Serves Montréal, Rive-Sud, Rive-Nord. Seven years in business.

## Positioning

Every competitor opens with a variation of "professional, reliable, attention
to detail, X years of experience." That sentence is invisible — it appears on
every cleaning site in Quebec, so it differentiates nothing and gets skimmed.

Nett-Med leads instead with **what it does, for whom, where**, in the first
sentence. Concretely:

> Entretien ménager commercial et résidentiel à Montréal, Rive-Sud et Rive-Nord.

The commercial building buyer is the priority. That buyer is not a homeowner
looking for a cleaner — it is a **syndicat de copropriété** or a **property
manager**, and their motivation is different in a way the site should exploit:
maintaining common areas is a legal obligation of the syndicate under Quebec
condominium law, and deferred maintenance shows up directly in property
valuation. That is a mandate, not a preference. Content aimed at this buyer
should speak to obligation, predictable scheduling, and a single accountable
contact — not to sparkle.

## Keyword targets

One primary per page. Secondaries are variants the same page can hold without
being split.

### Tier 1

| Page | Primary FR | Primary EN | Secondaries |
|---|---|---|---|
| Commercial pillar | entretien ménager commercial montréal | commercial cleaning montreal | nettoyage commercial montréal · janitorial services montreal · contrat entretien ménager |
| Immeubles / parties communes | nettoyage d'immeubles montréal | building cleaning montreal | entretien parties communes copropriété · condo common area cleaning · entretien immeuble syndicat |
| Lavage de garage | lavage de garage montréal | parking garage cleaning montreal | nettoyage garage intérieur immeuble · garage souterrain · underground garage washing |
| Bureaux | nettoyage de bureaux montréal | office cleaning montreal | entretien ménager bureau · commercial office cleaning |

`lavage de garage` is the sleeper. Search volume is modest, but competition is
thin, the work is seasonal contract work (spring), and the buyer is the same
syndicat that buys common-area maintenance. It is the cheapest realistic path
to a first-page ranking, and it opens the door to the larger contract.

### Tier 2

| Page | Primary FR | Primary EN |
|---|---|---|
| Après construction | nettoyage après construction montréal | post construction cleaning montreal |
| Tapis | nettoyage de tapis montréal | carpet cleaning montreal |
| Cliniques | nettoyage clinique médicale montréal | medical clinic cleaning montreal |
| Garderies / écoles | nettoyage garderie montréal | daycare cleaning montreal |
| Planchers | décapage et cirage de plancher montréal | floor stripping and waxing montreal |
| Vitres | lavage de vitres montréal | window cleaning montreal |

### Tier 3

Restaurants · commerces · entrepôts · résidentiel · grand ménage ·
déménagement · Airbnb.

Note on `femme de ménage montréal`: high volume, but it attracts price
shoppers and one-off jobs. Worth a mention on the residential page; not worth
building strategy around when the stated focus is commercial contracts.

## Page length — deviating from the template

The local-service template specifies 800 words minimum for service pages. The
page currently ranking #1 for `entretien ménager commercial montréal`
(nettoyageprocleaning.com) is **roughly 450 words**.

Target **500–700 words** of substantive copy per service page. Enough to cover
scope, frequency, pricing factors, and objections; short enough that every
sentence earns its place. Padding a cleaning service page to 800 words means
writing filler, and filler is exactly the "nonsense" this rebuild exists to
remove. Depth here comes from specificity — naming what is actually cleaned,
at what frequency, under what contract terms — not from volume.

## Required content blocks per service page

Derived from what the ranking competitor pages have in common:

1. H1 stating service + city
2. Two or three sentences on scope — what is included, concretely
3. Bulleted task list (the actual work performed)
4. Contract vs. one-time framing, with frequency options
5. What determines price — no fixed prices, but honest cost drivers
6. Three to five FAQs answering real objections
7. Quote CTA + tap-to-call

## Schema plan

| Page | Types |
|---|---|
| Home | `LocalBusiness` + `WebSite` |
| Service pages | `Service` + `BreadcrumbList` + `FAQPage` |
| Contact | `ContactPage` + `LocalBusiness` |
| Réalisations | `ImageObject` per job |

Schema.org has no `CleaningService` type. Use `LocalBusiness` with:

```json
"additionalType": "http://www.productontology.org/id/Commercial_cleaning"
```

**Do not emit `AggregateRating`.** With three positive and two negative
reviews, a marked-up rating would render roughly 3.4 stars in search results.
That actively suppresses click-through — worse than showing no stars at all.
Revisit once the profile is above 4.3 with 20+ reviews.

`areaServed` must list municipalities, not a province. Google's June 2025 SAB
guidelines disallow whole states/provinces as service areas.

## Trust signals to build in

Ranked by what the buyer of a building contract actually checks:

1. **Insurance and liability coverage stated explicitly** — every competitor
   says "bonded and fully insured"; Nett-Med's current site says nothing. For
   a syndicat, an uninsured contractor is disqualifying, full stop.
2. **CNESST registration** — verify status and display it. This is the first
   thing a property manager asks for in Quebec.
3. **Free on-site assessment** — market standard, expected.
4. **Named testimonials** — use the three well-written positive reviews as
   attributed quotes. No star widget, no review count.
5. **Seven years in business** — supporting detail, not the headline.
6. **Real job-site photography** — five sites available. See Risks.

## KPI targets

Baselines are effectively zero: the current site is a single page with no
service pages and no schema.

| Metric | Baseline | 3 mo | 6 mo | 12 mo |
|---|---|---|---|---|
| Indexed pages | ~5 | 48 | 54 | 60 |
| Keywords in top 10 | ~0 | 3–5 | 12–18 | 30–40 |
| Keywords in top 3 | 0 | 0–1 | 3–5 | 10–15 |
| Organic sessions / mo | unknown | 150 | 500 | 1,200 |
| Quote form + call conversions | unknown | 8 | 25 | 60 |
| Google reviews | 5 | 15 | 30 | 50 |
| LCP (mobile, field) | unknown | <2.5s | <2.0s | <2.0s |
| INP (mobile, field) | unknown | <200ms | <200ms | <200ms |

Realistic expectation: a new-ish domain will not take
`entretien ménager commercial montréal` from competitors with 15 years of
history inside a year. The winnable near-term targets are `lavage de garage
montréal`, `nettoyage garderie montréal`, and the English-language variants,
where the competitive field is materially weaker.

## Risks and blockers

| Risk | Impact | Action |
|---|---|---|
| `nett-med@hotmail.com` on a commercial site | Disqualifying for procurement | Ship `info@nett-med.ca`; keep the address in one config constant so it flips in a single edit |
| Two negative reviews out of five | Suppresses conversion; blocks rating schema | Respond publicly to both; run a review request campaign with existing contract clients |
| Only five job sites photographed | Thin gallery, repeated images | Design must not depend on photo volume; photograph every job from now on, before/after where possible |
| No GBP verification confirmed | No map pack presence at all | Verify profile (video verification is now standard); set categories to match Tier 1 services |
| Bilingual duplicate content | Dilution if hreflang is wrong | Reciprocal hreflang on all 48 pages, `x-default` → FR |
| Painting dilutes a cleaning brand | Confuses positioning | Single page, reachable mainly from post-construction. No expansion until it is a real revenue line |

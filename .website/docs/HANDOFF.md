# Handoff — what's blocking launch

Everything below needs input from Nett-Med. Each is marked `TODO(client)` in
the code at the location given.

## Blocking (site should not go live without these)

| # | Item | Where | Why it blocks |
|---|---|---|---|
| 1 | ~~Working email address~~ | `src/lib/config.ts` → `email` | **Done.** `nett-med@hotmail.com` is live and appears in the footer on all pages, on the contact page, and in JSON-LD. Still worth moving to `info@nett-med.ca` when it exists — a free webmail address reads as less established to property managers, and some procurement processes screen on it. One line in `config.ts`. |
| 2 | ~~Quote form endpoint~~ | `src/lib/server/leads.ts` | **Done, no third party.** The site now runs on Node and the form posts to its own SvelteKit action. Every submission is appended to `data/leads.jsonl` *before* any notification is attempted, so a lead is never lost to an SMTP outage. Works without JavaScript. Honeypot and per-IP throttle included. **Set `ORIGIN` in production or every submission is rejected with 403** — see Deploying. |
| 3 | **Insurance + CNESST details** | `src/lib/content/pages.ts` → `about.*.sections[1]` | The site states you are insured and CNESST-covered. That claim needs the real policy/attestation details behind it, since it is the first thing a syndicate verifies. The sentence naming the numbers is held in a code comment so nothing unfinished renders. |
| 4 | ~~Real testimonials~~ | `src/lib/config.ts` → `testimonials` | **Done.** Three real reviews, attributed. French is verbatim (including the grammatical slips in the second — tidying a real review misquotes the person). The English versions carry a "Translated from French" line so they do not read as the customer's own English. Still confirm you have permission to attribute each by name. |

## Important, not blocking

| # | Item | Where |
|---|---|---|
| 5 | **Job details for the 5 photos** | `src/lib/content/work.ts` — the photos are wired and optimized. Still needed: the borough for four of the five jobs, and confirmation of two categories I inferred from the images (see the TODO block at the top of that file). |
| 5b | **A garage photo** | None of the five is a garage, and `lavage-de-garage` is the cheapest realistic shot at page one. Worth photographing one job this spring. Before/after pairs are worth far more than single shots for cleaning work. |
| 6 | **Rooftop coordinates** | `src/lib/config.ts` → `geo`. Left `null` deliberately; the schema builder omits `geo` while null. Wrong coordinates put the business in the wrong borough in Maps, which is worse than omitting them. |
| 7 | **Google Business Profile** | Verify the profile (video verification is now standard). Set the primary category to match commercial cleaning. Respond publicly to both negative reviews. **Then paste the profile URL into `business.sameAs` and the Maps link into `business.mapUrl` in `src/lib/config.ts`** — `sameAs` is how Google ties this site to the listing, and both are currently empty. |
| 9 | **Notification channel for leads** | Leads are captured to disk regardless, but nobody is told when one arrives. Set either the `SMTP_*` + `LEAD_NOTIFY_TO` vars or `LEAD_WEBHOOK_URL` in `.env` — see `.env.example`. A Discord or Telegram webhook is the quickest way to get a phone notification without running mail. |
| 8 | **Domain / deploy** | Runs as a Node server behind a reverse proxy — see Deploying. Set up `www` → apex as a single 301. |

## Decisions already made that you may want to revisit

**No star rating anywhere.** With three positive and two negative reviews, an
`AggregateRating` marks up to roughly 3.4 stars in search results, which
suppresses clicks more than showing nothing. The three positive reviews are
used as named quotes instead. Revisit once the profile is above 4.3 with 20+
reviews — the schema builder in `src/lib/schema.ts` has a note where it goes.

**No service × location pages yet.** `themontrealcleaners.ca` runs 40+ of them
and it works for them, but they have 15 years of domain age absorbing the
thin-content risk. Publishing near-duplicate "service in Laval / Longueuil /
Brossard" pages on a new site is the most common way local service sites get
filtered out of the index. Phase 2 in `docs/seo/ROADMAP.md` covers doing this
safely, capped at 6 genuinely local area pages.

**Painting is one page, linked from post-construction.** Per your note that it
is recent and not a focus. It is not in the main navigation.

**French is the default locale at the root; English is at `/en`.** Slugs are
written in the language of the page, so `/services/lavage-de-garage` pairs with
`/en/services/parking-garage-cleaning`. Every page carries reciprocal hreflang
with `x-default` pointing at French.

## Commands

```sh
npm run dev           # local dev server (port 5173)
npm run check         # type check
npm run build         # build into build/ (Node server + prerendered pages)
npm run verify        # whole-site integrity check against build/
npm run build:verify  # both — run this before deploying
npm run preview       # serve the build locally (port 4173)
node build/index.js   # run the production server (needs ORIGIN, see Deploying)
```

`npm run verify` is the one that matters before a deploy. It checks what the
build and type-checker do not: NAP consistency (phone, email, address
identical in the UI and in JSON-LD, `tel:` links in E.164, no stray phone
numbers), hreflang reciprocity and self-references, canonical correctness,
every internal link and image asset resolving, one `<h1>` per page, title and
description length and uniqueness, valid JSON-LD with no `AggregateRating`,
sitemap matching the built pages exactly in both directions, `robots.txt`
pointing at the sitemap, and visible `TODO`/placeholder text leaking into
rendered copy. It exits non-zero on failure, so it can gate a deploy.

## Deploying

The site runs as a Node server (`@sveltejs/adapter-node`). Build, then:

```sh
ORIGIN=https://nett-med.ca PORT=3000 node build/index.js
```

Put it behind nginx or Caddy as a reverse proxy, with a process manager
(systemd, pm2) to restart it.

**`ORIGIN` is not optional.** SvelteKit validates the `Origin` header on form
posts to block CSRF. Without `ORIGIN` set, the server cannot work out its own
public address, every quote submission is rejected with 403, and the failure is
silent from the visitor's side. This is the single most likely way to deploy a
site that looks fine and quietly takes no leads.

Copy `.env.example` to `.env` and fill it in. `data/` holds captured leads and
is gitignored — make sure it is on persistent storage, not inside a container
layer that gets replaced on redeploy.

All pages except the two quote pages are prerendered to static HTML at build
time and served straight off disk, so the marketing pages stay as fast as they
were on a static host.

## Testing note for whoever works on this next

`svelte-check` and `npm run build` both pass on code that crashes in the
browser, because prerendering runs server-side rendering only — it never
hydrates. A duplicate key in an `{#each}` block, for example, builds and
prerenders perfectly and then tears the whole page down on load.

Loading the built site over `file://` does not catch this either: Firefox
blocks ES modules over `file://` via CORS, so hydration never runs and the
page looks fine.

To actually exercise hydration, serve `build/` over HTTP and load it in a
browser. A page whose content vanishes a moment after load is a hydration
failure, not a CSS problem.

## Visibility

Beyond the per-service pages, these are the levers already wired up:

- **Share images.** `static/og-fr.png` / `og-en.png`, 1200×630, generated by
  `node scripts/generate-og.mjs`. Regenerate after any brand or tagline change.
  Before these existed, every share on Facebook, LinkedIn or WhatsApp rendered
  as a blank rectangle.
- **Articles** at `/blogue` and `/en/blog`. Two to start, both aimed at the
  syndicate and property-manager buyer. The first targets an angle no
  competitor found in research covers: common area maintenance as a duty under
  article 1039 of the Civil Code of Québec, not a discretionary expense. Add
  more from the calendar in `docs/seo/ROADMAP.md`.
- **Image sitemap.** The five job photos are declared with bilingual captions,
  so they can surface in image search rather than only being crawlable.
- **`LocalBusiness` schema** now carries `image`, `logo`, structured
  `openingHoursSpecification`, `currenciesAccepted` and `paymentAccepted`.
  `sameAs` and `hasMap` are wired but empty until the GBP URL exists — they are
  only emitted when set, so nothing broken gets published.
- **`llms.txt`** at the root, generated from the same content modules. Honest
  framing: this is a proposed convention, not a standard, and Google ignores
  it. It costs one generated file and some assistants read it.

## Verified at handoff

- 52 pages prerendered + 2 server-rendered (the quote form) = 54 routes
- 2,108 internal links, 0 broken
- 0 duplicate titles, 0 duplicate meta descriptions
- All titles ≤ 60 chars, all descriptions ≤ 155
- Every page has exactly one `<h1>` and complete reciprocal hreflang
- `svelte-check`: 0 errors, 0 warnings
- All page types load and **hydrate** cleanly over HTTP in a real browser
- Quote form tested end-to-end: valid submit persists and shows the success
  state, invalid submit returns 400 with the right-language error and keeps the
  entered values, honeypot submissions are silently dropped, requests with no
  `Origin` are rejected — all of it working with JavaScript disabled
- 102 generated image URLs across both gallery pages resolve to real files
- Every `<img>` has alt text; every job photo carries intrinsic width/height
- Gallery costs ~70 KB at 1dpr instead of the 1,139 KB of raw phone photos

## Images

Job photos live in `src/lib/assets/work/` and are imported in
`src/lib/content/work.ts` with `?enhanced&w=1200;800;400`.

Import them — never reference them by path string. Vite only rewrites asset
URLs for imported files, so `image: 'src/lib/assets/work/x.jpg'` ships
unchanged and 404s in the browser.

The `&w=` list is what makes enhanced-img emit `w` descriptors instead of
`1x`/`2x`. That matters because a `sizes` attribute is ignored unless the
srcset uses `w` descriptors — without it the browser fetches the full 1536px
file for a 320px-wide column. If you change that width list, update the
ambient declaration in `src/enhanced-img.d.ts` to match; a TypeScript wildcard
module pattern may contain only one `*`, so it cannot be written generically.

Favicons are pre-sized files in `static/`, generated from the cropped mark.
Do not point the icon link at `nett-med-logo.png` — it is 218 KB and was being
downloaded on every page to draw a 16px icon.

# Handoff — Dr. Amol Gawande personal website (v7 visual system, 2026-09-30)

Next.js 16 (App Router), React 19, TypeScript, one plain CSS file. No CMS: content is typed data in `src/content/`. Every page is statically generated. This build replaces `../amol-gawande-site` (v1–v3). The v4 pass (2026-09-24) rebuilt every page on a white minimal system; v5 (2026-09-25, morning) moved to a dark editorial direction; v6 (2026-09-25) was a photographic editorial pass with a violet accent. **v7 (2026-09-30, current)** redesigned the whole site against a LinkedIn-creator personal-brand reference: deep green and mint, Poppins with a Caveat handwritten accent, pill buttons and tag pills, stat chips and icon chips, soft mint cards, curved line decoration, dark page-header bands on every inner page. Routes, content database, evidence gate, SEO and schema are unchanged. See `DESIGN.md`.

```
npm install
npm run dev          # http://localhost:3000
npm run build
npm run start
npm run sources      # regenerates CONTENT-SOURCES.md from src/content/sources.ts
```

Env vars: `NEXT_PUBLIC_SITE_URL` (required at launch; the placeholder is `https://www.amolgawande.com`), `RESEND_API_KEY` + `CONTACT_TO` (+ optional `CONTACT_FROM`) for the contact form. Until those are set the form tells the visitor it is not connected yet.

---

## 1. Read first: adverse press finding

Research on 2026-09-24 found July 2026 press reports of a police FIR against "Amol Anandrao Gawande, former Director of Dr. D. Y. Patil B-School". The reports allege financial misappropriation; the complainant is that institution. These are **allegations only**: no source reports charges or a conviction. Sources are in `research/dossier.md` §0.

How the build handles it:
- Nothing about the case appears on the site.
- The D. Y. Patil directorship is always **former** and in past tense. The institution's own current page confirms he no longer holds the role. The end date (October 2025) is from press only and is not published; the Journey page shows "2019 – former".
- No awards, experience-year counts or "granted patents" are shown.

**Recommend before launch:** the client, and ideally counsel, review how the D. Y. Patil years are presented (credential strip, author box, About, Journey, and the Education Post media item whose headline calls him Director).

## 2. Evidence system (how "no fake authority" is enforced)

- `src/content/sources.ts` holds every source with a status: `verified` / `likely` / `unverified`.
- Each record (role, publication, IPR, media item, engagement, profile) lists `sourceIds`.
- `src/lib/evidence.ts` → `publishable()` renders a record only if at least one of its sources is `verified`. To publish a held-back record, verify it and flip the source's status. Nothing else is needed.
- Bio sentences and the credential strip (`person.ts`) are assembled only from verified roles.
- `CONTENT-SOURCES.md` (generated) lists every claim, its source and whether it is on the site. It is internal; nothing on the site links to it.

## 3. Copy that needs Dr. Gawande's approval

Everything positioning-flavoured is marked `[AMOL APPROVAL REQUIRED]` in code comments. The marker is never rendered.

| What | Where |
|---|---|
| Hero headline and supporting line | `src/content/home.ts` → `hero` |
| Philosophy ("Education should prepare people for the world ahead." + three paragraphs) | `home.ts` → `philosophy`. Editorial positioning; never shown as a quotation. |
| Think / Apply / Adapt | `home.ts` → `principles` |
| Areas-of-exploration descriptions | `src/content/articles/index.ts` → `explorationAreas` |
| Speaking topic titles and summaries | `src/content/speaking.ts` → `speakingTopics` |
| The Gen Z article (written in his voice) | `src/content/articles/why-gen-z-….ts` |
| About page prose (facts are sourced; framing is editorial) | `src/content/person.ts` → `aboutSections` |

Pull quotes: the article body supports `quote` blocks but `ArticleBody` does not render them. Enable once a quotation is real and approved.

## 4. Assets and information still required

| Item | Why | Where |
|---|---|---|
| Production domain | Canonicals, sitemap, JSON-LD | `NEXT_PUBLIC_SITE_URL` |
| **Better photographs** (optional). Two source photos were supplied on 2026-09-30 and are cropped, upscaled 1.5–2.4x with unsharp masking, and graded per slot in `public/photos/` (hero mirrored natural, about natural, research and closing card mint duotone, speaking black and white, leadership warm tone, ideas natural). Regenerate with Pillow if the originals are replaced. The desk photo is cropped to exclude the Dr. D. Y. Patil B-School certificates and the award plaque on the wall, in line with the no-awards rule. Higher-resolution originals (at least 2000px on the long side), a classroom or campus setting, and a portrait on a dark background would improve the hero, leadership and closing-card slots. | The desk crops are 530–918px wide and look soft on large retina screens | `public/photos/` + `src` / `width` / `height` in `src/content/images.ts` |
| Portrait for schema `image` | Person `image` | `portrait` in `person.ts` (can point at `/photos/hero.jpg`) |
| Approval of all copy in §3 | It represents his views | see §3 |
| PhD institution, year, thesis title | **[VERIFY: EXACT DOCTORATE INSTITUTION]**, not found anywhere | `education` in `person.ts` |
| Current AIMS status | The AIMS 2026–27 page still lists his D. Y. Patil affiliation | source `aims-board` |
| ResearchGate URL | Needed for `sameAs` and footer; page blocks automated fetch | source `researchgate` |
| Update ORCID and Google Scholar affiliations | Both still say D. Y. Patil B-School | external |
| Indian patent applications (7), Australian innovation patent, copyrights (12) | Held back until checked on IP India / AusPat / Copyright Office | `src/content/ipr.ts` |
| Book author order and ISBNs | From Zenodo deposits; CASEPEDIA Vol. 1 ISBN conflicts with another book | `publications.ts` |
| Paper abstracts | Current summaries describe topics only | `publications.ts` |
| Documented keynotes and panels (with organiser URLs) | None found; Speaking page lists only the three proceedings he co-edited | `speaking.ts` |
| Times of India coverage | None found; send links if any exist | `media.ts` |
| BW Education article | Page returns 403 to automated fetch; confirm manually to publish | source `m-bw-2019` |
| Contact delivery | Resend API key and destination address | env vars |
| X/Twitter handle | For `twitter:site` | `site.twitter` in `lib/site.ts` |

## 5. Site map and navigation

```
/                          Homepage (hero, credentials, philosophy, principles, ideas, research, journey, media, about, contact)
/ideas                     Ideas hub: articles + areas of exploration (pillar anchors)
/ideas/[slug]              Article (BlogPosting + FAQPage schema)
/research                  Research hub: areas, featured research, counts by type
/research/publications     Filterable, searchable archive (ItemList schema)
/research/publications/[slug]  Individual work (ScholarlyArticle / Chapter / Book schema)
/research/books            Books, edited volumes, chapters
/research/ipr              IPR, grouped: patents / applications / other (only verified groups render)
/journey                   Vertical timeline, verified dates only
/media                     Editorial list, links out to the publication
/about                     Profile (ProfilePage schema), credentials, education
/about/speaking            Documented engagements, then speaking topics
/contact                   Form with five categories; ?topic=Speaking preselects
```

Primary nav: Ideas · Research · Journey · Media · About + "Let's talk". Research and About show a sub-navigation tab row (`SubNav`) on their pages; the mobile menu nests the same items.

## 6. Adding content

- **Article:** copy `src/content/articles/why-gen-z-….ts`, change the fields, import it in `articles/index.ts`, and remove its title from `planned` (internal list, never rendered). Routes, sitemap, OG image, schema and the Ideas listing update automatically.
- **Publication:** add to `publications.ts` with a `doi` (check it on Crossref) and `page: true` plus a `summary` to get a detail page.
- **Media / engagement / IPR:** add a source to `sources.ts` first, then the record.
- **Role:** add to `roles` in `person.ts` with `sourceIds`; the Journey timeline order is in `lib/journey.ts`.

## 7. Design system

See `DESIGN.md` (v5). In short: Instrument Serif for statements, Inter Tight for everything else; deep charcoal, warm paper, white, soft lavender, one muted amber accent; sections alternate dark → light → lavender → dark image-led → light; 12-column grid at 1280px; H1 42–66px via `clamp()`; rounded photography containers; hairline editorial lists instead of cards; reveal-on-scroll only, disabled under reduced motion. House rule: no em-dashes in visible copy.

Homepage copy blocks (all `[AMOL APPROVAL REQUIRED]` in `src/content/home.ts`): hero role stack ("Education strategist" is positioning), About statement and paragraphs, expertise framing (used on inner pages), research statement, and the v6 additions `ideas`, `principle` (the lavender statement; editorial positioning, never a quotation), `leadership`, `work`, `speaking`, plus the closing statement. The publisher strip and the "Also published in" list are derived from verified records, not copy.

## 7a. Inner pages (v7.1, 2026-09-30 evening)

Every inner page opens with the dark `PageHead` band (pill eyebrow, H1 with a mint phrase, lede, action buttons, optional photograph, optional script motto). Sections alternate white and soft-mint bands with `rv` reveal animation. About: stat row, numbered Q&A cards, sticky credential cards. Journey: two vertical-line timelines with a wide photo between. Ideas: featured article card + five pillar cards. Research: stat row, six area cards, dark featured band. Publications: stat row + filter. Books: shelf of cover objects + lists. IPR: stat row + record cards. Media: interview and byline cards + speaking panel. Speaking: topic cards + engagement timeline. Contact: dark header with photo, form in a card.

## 8. Verification done on 2026-09-30 (v7, whole site)

- `next build`: 42 static pages, no type errors (`tsc --noEmit` clean).
- Headless Chrome at 1440 and 390: no horizontal overflow on the homepage; one H1 per page; Poppins active (64px desktop, 40px mobile); zero em-dashes.
- About, Journey, Publications, Article and Contact pages re-checked visually on the new system.
- Not re-run: axe, link crawl, JSON-LD parse (markup for schema and links is unchanged).

## 8b. Verification done on 2026-09-25 (v6 homepage)

- `next build`: all pages static, no type errors (`tsc --noEmit` clean).
- Headless Chrome at 1440 and 390: no horizontal overflow on the homepage; one H1; hero headline renders in Archivo (68px desktop, 44px mobile); zero em-dashes in rendered text.
- Journey and Publications pages re-checked after the stylesheet change (shared list and timeline styles retained).
- Not re-run for v6: axe, link crawl, JSON-LD parse (markup for schema and links is unchanged; the homepage still emits the same graph).

## 8a. Verification done earlier on 2026-09-25 (v5)

- `next build`: 42 static pages, no type errors.
- Headless Chrome at 1440 / 834 / 390: no horizontal overflow on any page, one H1 per page.
- Link crawl: 38 internal pages, 0 broken links, 0 missing anchors.
- JSON-LD parses on every page: WebSite, Person, WebPage/ProfilePage/CollectionPage/ContactPage, BreadcrumbList, BlogPosting, FAQPage, ScholarlyArticle, Chapter, Book, ItemList.
- axe-core (WCAG 2.1 AA + best practice): clean on home, about, article, publications, contact, journey, IPR at both widths.
- Homepage at mobile: CLS 0. Shipped JS is the Next/React baseline (~180 KB gzipped); two self-hosted font families (Instrument Serif regular + italic, Inter Tight variable).
- Grep for em-dashes in rendered HTML: none.

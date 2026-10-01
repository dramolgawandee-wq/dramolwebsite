# Design system v7 — deep green, mint, Poppins (2026-09-30, supersedes v6)

Reference: a LinkedIn-creator personal-brand site (dark green photographic hero, mint accent, pill controls, tag pills, stat chips, icon chips, soft mint cards, curved line decoration, handwritten mottos). What was taken is the design language; the information architecture is Dr. Gawande's own.

## Tokens (`src/app/globals.css`)

| Token | Value | Use |
|---|---|---|
| `--green-950` | `#061410` | hero, research, statement, CTA card, footer, page headers, nav |
| `--green-900/800/700` | `#0a1d17` / `#0f2a22` / `#154034` | raised dark surfaces, book objects |
| `--mint` | `#7ff0cf` | primary buttons, headline phrases on dark, icons, chips |
| `--mint-2/3/soft` | `#a9f2dc` / `#d9f8ee` / `#eefaf5` | pill fills, card backgrounds, panels |
| `--teal` | `#0e6b52` | accent text and headline phrases on light (AA on white) |
| `--ink` / `--ink-2` / `--mute` | `#0d1b17` / `#3f4f49` / `#66766f` | text on light |
| `--on-dark` / `--on-dark-2` | `#f3faf7` / `#b7c9c2` | text on dark |

Legacy aliases (`--serif`, `--gold`, `--violet`, `--lav`, `--paper`, `--ink-950`, `--accent`) are mapped onto the new palette so inner-page rules keep working.

## Type

- **Poppins** 400/500/600/700 for everything. Headings 600, letter-spacing -0.02em. H1 40–64px, H2 30–44px, H3 20–24px, body 16px / 1.7.
- **Caveat** (`.script`) for the signature and short mottos only, rotated -6°, never for content.
- Two-tone statements: `em` in a heading is upright and takes the accent (mint on dark, teal on light).

## Components

- `.tag` pills: `--dark` (green fill, mint text, uppercase), `--mint` (mint fill), `--outline` (on dark, mixed case). Every section opens with one.
- `.btn` pills, 46px: `.btn--mint` primary, `.btn--outline` secondary (`.btn--dark-text` on light). `.btn--solid/--ghost/--violet/--light` alias onto these.
- `.stat-chip` mint rounded card with a large number, overlapping an image corner.
- `.stats` (hero) and `.chips` (about): icon square/circle + two-line label.
- `.checks` mint check circles; `.cards` soft mint cards with icon squares; `.roles` cards; `.quotes` press cards; `.bylines` bordered links.
- `.curves` inline SVG line pairs on dark sections at 25–50% opacity.
- Image containers 20–28px radius; placeholders are dashed-frame tonal fields with a label.

## Section rhythm (homepage)

dark hero → white about (stat chip, icon chips) → white ideas (mint blobs, six cards) → dark research (image, checklist, featured papers) → white leadership (21:9 image, three role cards) → soft-mint panel (books, IPR, proceedings) → dark statement → white writing → soft-mint panel (press cards, speaking) → dark CTA card bridging into footer → footer.

## Photography

Two source photographs (speaking at an evening event; at his desk) are cropped per slot in `public/photos/`. Hero: full speaking photo as a right-side cover fading into the green. About and closing card: desk crops that exclude the wall certificates. Research and speaking: tighter speaking crops. Ideas and books: the desk with books. Leadership: a 21:9 crop of the speaking photo. Curves sit at 12–28% opacity and are masked away from the text column.

## Inner pages

Nav is always dark green. Section sub-navigation renders as pill tabs on a green band; `PageHead` is a dark band with an outlined pill eyebrow, white H1 and a mint glow. Lists keep hairlines with teal years; timeline years are mint pills; filters and enquiry types are pills; form fields are 14px-radius boxes; the article "short answer" is a mint callout; author box and FAQ items are soft cards.

## Mobile

Hero becomes a 30rem photographic top with the text below; script motto hidden; chips wrap; cards, roles and columns stack; CTA image stacks above the text.

---

Previous systems (v4 white minimal, v5 dark editorial, v6 photographic editorial with violet) are superseded; their notes were removed from this file on 2026-09-30.

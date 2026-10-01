# Runebog GM — project brief for the CV site

**What this file is.** The reference description of a personal project of mine, written to
be handed to Claude Code in the repository of my CV site. Its purpose is to produce a
page, a portfolio entry or a CV paragraph **without inventing anything**.

(The Italian original is `SCHEDA-PROGETTO-RUNEBOG.md`. When the two disagree, the Italian
one is the source — this is a translation of it.)

**Rules for whoever reads this, agents included.**

- This file is the source. If a fact is not here, **do not infer it** — ask me.
  Specifically absent, and not to be invented: user counts, traffic, Windows app
  downloads, awards, clients, hours spent, "used by studios/clubs".
- The figures were **measured on the stated date**. Quote them as orders of magnitude
  ("over 200 tests", "around 330 monster stat blocks") if the copy needs to age well.
- The licence must be stated exactly as written in its section. It is a legal fact.
- Brief last updated: **1 October 2026**, against the repository at version **v0.2.9**
  (last commit on 29 September 2026).

---

## 1. Ready-to-use summaries

### One line
Runebog GM — a web app for tabletop RPG Game Masters: nested campaign maps, an Italian
D&D 5e bestiary and rules reference, a shared table for players and a portable Windows app.

### ~40 words
A web app for tabletop RPG Game Masters: nested maps from world to room, floor plans with
walls and painted floors, Italian D&D 5e SRD monster stat blocks, a deterministic dungeon
generator and a read-only table for players. Next.js 15 and Postgres for the site;
framework-free vanilla JavaScript for the editor.

### ~120 words
Runebog GM is a tool for tabletop RPG Game Masters that began as a single one-shot and grew
into a complete application. At its core is a map of "bubbles" that nest with no depth
limit — a world holds nations, a city holds districts, a building holds rooms — with walls,
doors, painted floors, a square or hex grid and a combat mode. A secret link opens a
**read-only table** for players, rebuilt on the server field by field. It ships the
bestiary and ten chapters of the SRD 5.2.1 in Italian, extracted from the official PDF by
purpose-built scripts, an in-game calendar, and it works offline as a PWA. The same editor
also runs in a **portable Windows app** with a local network table. The site is Next.js 15
on Postgres; the editor is vanilla JavaScript, with no framework and no build step.

---

## 2. What it does, for a non-technical reader

- **Nested maps.** Every "bubble" is a place that can contain more of them, with no depth
  limit. The scale runs from *world* to *room* and can be widened after the fact (zooming
  out turns a campaign that started as a city into a region). Bubbles can be copied, cut
  and pasted between levels.
- **Playable floor plans.** Walls drawn with a pen tool, typed doors and openings (open,
  closed, locked, secret), a to-scale square or hex grid (1 square = 1.5 m), floors painted
  with twelve materials and shorelines between water and land, formatted text boxes,
  resizable tokens, and a combat mode with tokens and an initiative order.
- **A table for the players.** A shareable link shows only what the GM has revealed:
  separate player-facing notes, invisible secret passages, secret doors rendered as solid
  wall.
- **Portable Windows app.** An executable that needs no installation and no Internet, with
  the same editor as the site. It includes a **local table**: players' phones on the same
  Wi-Fi scan a QR code and see the revealed map, refreshed roughly every 5 seconds, with no
  account and no cloud.
- **D&D 5e content in Italian.** 331 monster stat blocks and ten rules chapters
  (SRD 5.2.1, 2024 edition), with cross-chapter title search and navigable cross-references.
- **A dungeon generator**, deterministic from a seed and available inside the editor: it
  creates a bubble with rooms, corridors, walls, encounters balanced to the party and the
  player characters as tokens at the entrance.
- **Campaign journal**: quests with states and filters, an in-game calendar with deadlines
  and recurring events tied to bubbles, NPCs, checklists, a player roster.
- **Table-side tools**: a ruler in metres, areas of effect (circle, cone, line, square), a
  dice roller, reference images and floor-plan backgrounds.
- **Accounts and saves.** Sign-in with Google or with username and password, campaigns and
  images saved to the cloud, JSON export and import, account deletion.
- **Offline and installable.** The editor runs without a network as a PWA; the rules are
  downloaded on request, with their size stated up front.
- **Eleven visual themes**, each automatically checked for WCAG contrast.

---

## 3. Technical stack

| Area | Choice |
|---|---|
| Site | Next.js 15 (App Router), React 19, TypeScript |
| Authentication | Auth.js v5 — Google OAuth + credentials, JWT sessions, stdlib scrypt, single-use reset tokens (only their SHA-256 is stored) |
| Database | Neon Postgres, Drizzle ORM, versioned SQL migrations; campaigns in a JSONB column, images with per-account quotas |
| Email | Resend REST API via `fetch`, no SDK (password recovery) |
| Editor | Vanilla JavaScript in ES modules — no framework, no runtime dependencies, no build step |
| Map rendering | Hand-written SVG, pan/zoom via `viewBox`, Pointer Events |
| Offline | Service worker **generated at build time** (file list and versions = content hashes), PWA manifest |
| Desktop app | Electron + electron-builder, portable Windows 64-bit executable published as a GitHub Release asset; local table server and QR codes (`qrcode`) |
| Tests | `node:test`, pure tests with no DOM and no dependencies; browser checks for editor flows |
| CI | GitHub Actions: typecheck + tests + build on every push and PR; workflows to build the EXE (signed too) |
| Deploy | Vercel, `runebog.app` domain (all on free tiers: Vercel Hobby + Neon free) |

---

## 4. The decisions worth talking about

These are the "interview" points: each one is a decision with a reason, not a feature.

1. **One JSON for everything.** A campaign's state is a single serialisable object: the
   same shape for export, for the database's JSONB column, for injection into the page and
   for the Windows app. Export becomes trivial and import symmetrical; there is no second
   representation to keep in sync.
2. **Two applications, one format.** The site (Next.js) and the editor (vanilla) share only
   the document contract, defined in a dependency-free module used on both sides. Stated
   rule: *strict on write, tolerant on read* — the API rejects a malformed document with a
   422, but no read path ever throws, because an error there would lock players out.
3. **A build-free editor, therefore portable.** Precisely because the editor has no
   framework and no build step, the same code runs in the site, offline as a PWA and inside
   the Electron executable, which only adds the profile next to the EXE and the local table
   server.
4. **Optimistic concurrency done properly.** Every save declares the revision it starts
   from and the condition sits **inside** the `UPDATE` (`WHERE id AND user_id AND revision =
   base`): zero rows updated *is* the conflict. Verified with genuinely concurrent requests
   against a throwaway database branch — eight writes from the same base produce exactly one
   winner, while the same route written as "read-then-write" lets six through.
5. **No automatic merge, no silent loss.** On conflict the local copy is written *before*
   the request, and the user chooses between three explicit actions, with both titles and
   both dates in front of them.
6. **The table's security is a projection, not a client-side filter.** Players receive only
   what the server rebuilds field by field: IDs resolved to names, GM notes kept apart,
   secret passages absent. Polling is conditional (ETag = revision number, weak comparison
   per RFC 9110). The Windows app's local table also shows players only revealed bubbles.
7. **PDF → JSON: a purpose-built extractor.** The rules chapters and the 331 stat blocks are
   extracted from the official PDF by my own scripts, because in that document meaning lives
   in *fonts and colours*, not in the text: headings recognised by the relationship between
   RGB channels, tables rebuilt from column geometry, ligatures and Private Use Area
   characters resolved by hand. Every chapter goes through a verifier that compares it with
   `pdftotext` before it is published.
8. **Accessibility measured, not claimed.** A script checks the WCAG contrast ratio of every
   colour pair across all themes and fails below threshold; accent families are checked in
   ΔE Lab, because the WCAG ratio treats two different hues of the same luminance as equal.
   44px touch targets are declared by **role**, not by CSS class.
9. **Tests on the right invariants.** No cosmetic tests: they cover JSON serialisation inside
   `<script>` (XSS), the player projection as a whitelist, sanitising untrusted input, the
   dungeon generator's determinism, recovering local copies after a conflict, the calendar
   and floor-plan drawing.
10. **Documentation as part of the work.** The repository keeps an extensive `CLAUDE.md`
    recording invariants, traps already paid for and, for each choice, *the direction in
    which it is acceptable to be wrong* — written so the project can be picked up cold.

---

## 5. Verified figures

Measured on **1 October 2026** against the repository at v0.2.9, by running the
repository's own commands.

| Figure | Value |
|---|---|
| First commit | 13 July 2026 |
| Total commits | 202 |
| Portable app version | v0.2.9 (29 September 2026) |
| Site code (TypeScript/TSX) | ~6,500 lines, 64 files |
| Editor code (JS, excluding the dataset) | ~12,500 lines, 37 ES modules |
| Automated tests (`npm test`) | 212, all passing |
| Italian SRD monster stat blocks | 331 |
| Published rules chapters | 10 (plus the legal information) |
| Visual themes | 11 |
| Floor materials | 12 textures |
| Site runtime dependencies | 7 (`next`, `react`, `react-dom`, `next-auth`, `@auth/drizzle-adapter`, `drizzle-orm`, `@neondatabase/serverless`) |
| Editor dependencies | 0 |
| Desktop app runtime dependencies | 1 (`qrcode`) |

A personal, non-commissioned project by **Federico Ordonselli**. Developed with Claude Code
as a pair programmer: 168 of 202 commits are co-authored by Claude. Federico led the
product, decisions, review and release.

---

## 6. Demonstrable skills (CV tags)

`Next.js 15` · `React 19` · `TypeScript` · `PostgreSQL` · `Drizzle ORM` · `Auth.js / OAuth`
· `vanilla JavaScript / ES modules` · `SVG` · `Pointer Events` · `PWA / service worker`
· `Electron` · `optimistic concurrency` · `REST API design` · `application security (XSS,
authorisation, password hashing, single-use tokens)` · `WCAG accessibility` · `PDF parsing`
· `deterministic algorithms (procedural generation)` · `CI/CD (GitHub Actions, Vercel,
GitHub Releases)` · `technical writing` · `AI-assisted development (Claude Code)`

---

## 7. Links, licences, attributions

- Site: **https://runebog.app**
- Repository: **https://github.com/Federico-Ordonselli/runebog-gm**
- Windows app: the site's **Scarica** (Download) page or GitHub Release v0.2.9
- Contact published by the project: `support@runebog.app`

**Careful, these are legal facts — state them as written:**

- The **code** is released under **PolyForm Noncommercial 1.0.0**: commercial use is not
  permitted. **Do not write "open source"** without qualifying it: PolyForm is not an
  OSI-approved licence. If a short phrasing is needed: *"public source, non-commercial
  licence (PolyForm Noncommercial 1.0.0)"*. Versions distributed before 29 July 2026 were
  MIT and that grant remains valid.
- The **floor textures** are **CC BY-NC 4.0** (attribution: "Texture di Runebog GM,
  Federico Ordonselli, CC BY-NC 4.0"). They were generated with an AI tool: if you show or
  mention them, do not present them as hand-drawn.
- The **SRD content** (stat blocks, rules chapters) is **CC-BY-4.0** and allows commercial
  use. If the CV page quotes or shows that content, the attribution must be kept: it is a
  condition of the licence.
- D&D and its trademarks are not mine: the project uses the SRD 5.2.1, licensed material.
  Do not present it as an official or affiliated product.

---

## 8. What NOT to write

- ❌ "open source" without qualification (see above) — ❌ "MIT licensed" (no longer true).
- ❌ User counts, downloads, traffic, ratings: I have no public ones.
- ❌ "commercial product", "startup", "paid SaaS": it is free and non-commercial, with a
  donations page.
- ❌ "native mobile app" or "store app": it is an installable PWA plus a portable Windows
  executable.
- ❌ "signed" or "certified app": the signing workflow exists, but it needs a code-signing
  certificate; do not assume the published EXE is signed.
- ❌ "built with React" applied to the editor: the site is React, the **editor is vanilla** —
  and that is a deliberate choice, not a shortcoming.
- ❌ "built solo, without AI": it was developed with Claude Code (see section 5).
- ❌ "official D&D product" or "Wizards of the Coast".
- ❌ File names, internal paths or repository details in public copy: they are here to
  explain, not to be published.

**Known limits stated by the project** (useful to avoid overclaiming): login throttling is
in memory and applies per instance; JWT sessions cannot be revoked server-side; in the
standalone version campaigns and images use the browser's `localStorage` quota.

---

## 9. How to refresh this brief

In the Runebog repository, after significant changes:

```bash
npm test                         # test count
git rev-list --count HEAD        # commits
find src -name '*.ts' -o -name '*.tsx' | xargs wc -l | tail -1
ls public/app/*.js | grep -v srd | xargs wc -l | tail -1   # editor
```

The full architectural context lives in the repository's `CLAUDE.md` and the work log in
`TODO.md`; this brief is their publishable summary. When they disagree, the repository
wins. After refreshing, also update `SCHEDA-PROGETTO-RUNEBOG.md` and the
`/projects/runebog-gm` page (data in `src/data/caseStudies.js`).

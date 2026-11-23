"""Genera i CV pubblici in public/cv/ (IT e EN) con ReportLab.

Uso (dalla radice del repo):
    uv run --with reportlab scripts/cv/build_cv.py            # scrive public/cv/
    uv run --with reportlab scripts/cv/build_cv.py --out DIR  # scrive altrove

I testi stanno in CONTENT, la grafica in build(). I CV pubblici NON contengono
il numero di telefono (scelta del 13 ottobre 2026): non aggiungerlo qui.
La foto (assets/photo.jpg) non è versionata: resta solo in locale.
"""

import argparse
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (Flowable, KeepTogether, ListFlowable, ListItem, Paragraph,
                                SimpleDocTemplate, Spacer, Table, TableStyle)

HERE = Path(__file__).resolve().parent
ASSETS = HERE / "assets"
ROOT = HERE.parent.parent

for name, file in [("Carlito", "Carlito-Regular.ttf"), ("Carlito-Bold", "Carlito-Bold.ttf"),
                   ("Carlito-Italic", "Carlito-Italic.ttf")]:
    pdfmetrics.registerFont(TTFont(name, str(ASSETS / file)))
pdfmetrics.registerFontFamily("Carlito", normal="Carlito", bold="Carlito-Bold",
                              italic="Carlito-Italic", boldItalic="Carlito-Bold")

GREEN = HexColor("#1F3D33")
TEXT = HexColor("#1A1A1A")
MUTED = HexColor("#555555")
LINK = "#1F5A96"
MARGIN = 17 * mm
WIDTH = A4[0] - 2 * MARGIN

S = {
    "name": ParagraphStyle("name", fontName="Carlito-Bold", fontSize=27, leading=31, textColor=GREEN),
    "role": ParagraphStyle("role", fontName="Carlito-Bold", fontSize=13.5, leading=17, textColor=TEXT, spaceAfter=2),
    "contact": ParagraphStyle("contact", fontName="Carlito", fontSize=10, leading=13.2, textColor=MUTED),
    "heading": ParagraphStyle("heading", fontName="Carlito-Bold", fontSize=12.5, leading=15, textColor=GREEN),
    "body": ParagraphStyle("body", fontName="Carlito", fontSize=10.2, leading=13.6, textColor=TEXT, spaceAfter=4),
    "title": ParagraphStyle("title", fontName="Carlito-Bold", fontSize=11, leading=14, textColor=TEXT),
    "meta": ParagraphStyle("meta", fontName="Carlito-Italic", fontSize=9.8, leading=12.6, textColor=MUTED),
    "tech": ParagraphStyle("tech", fontName="Carlito", fontSize=9.6, leading=12.4, textColor=MUTED, spaceBefore=1.5, spaceAfter=2),
    "bullet": ParagraphStyle("bullet", fontName="Carlito", fontSize=10.2, leading=13.4, textColor=TEXT),
    "skill": ParagraphStyle("skill", fontName="Carlito", fontSize=10.2, leading=13.4, textColor=TEXT, spaceAfter=1.5),
    "small": ParagraphStyle("small", fontName="Carlito", fontSize=8, leading=10, textColor=MUTED),
}


def link(text, url=None):
    url = url or "https://" + text
    return f'<a href="{url}" color="{LINK}">{text}</a>'


def mail(addr):
    return f'<a href="mailto:{addr}" color="{LINK}">{addr}</a>'


EMAIL = "fede.ordons@gmail.com"

# ─── CONTENUTI ────────────────────────────────────────────────────────────────
# Fonte: overview dei progetti in ~/progetti/overviews_1811 (18 novembre 2026).
CONTENT = {
    "it": {
        "file": "Ordonselli_CV_IT.pdf",
        "role": "Junior Full-Stack Developer | React, Next.js, TypeScript, Node.js",
        "contact": [
            "Roma, Italia · Disponibile a trasferte e trasferimenti",
            mail(EMAIL),
            "Portfolio: " + link("ordonselli.info", "https://www.ordonselli.info"),
            "GitHub: " + link("github.com/Federico-Ordonselli") + " · GitLab: " + link("gitlab.com/Federico-Ordonselli"),
            "LinkedIn: " + link("linkedin.com/in/federico-ordonselli-aa7363226"),
        ],
        "h": {"profile": "PROFILO", "client": "PROGETTI PER CLIENTI", "personal": "PROGETTI PERSONALI", "more": "ALTRI PROGETTI",
              "work": "ESPERIENZA PROFESSIONALE", "skills": "COMPETENZE TECNICHE", "certs": "CERTIFICAZIONI",
              "edu": "FORMAZIONE, LINGUE E ALTRE INFORMAZIONI"},
        "tech": "Tecnologie principali:",
        "profile": [
            "Sviluppatore junior con tre siti pubblicati per clienti reali e diversi progetti full-stack personali. Lavoro "
            "principalmente con React, Next.js, TypeScript e Node.js, occupandomi di interfacce, API e database PostgreSQL; "
            "ho realizzato anche app mobili con Flutter e Capacitor.",
            "Con i clienti ho seguito la raccolta dei requisiti, il design, lo sviluppo e la pubblicazione, lasciando loro "
            "un CMS per aggiornare i contenuti in autonomia. Le certificazioni CompTIA Security+ e CySA+ completano il mio "
            "percorso con una formazione sulla sicurezza informatica. Cerco un’opportunità junior in cui contribuire allo "
            "sviluppo e consolidare le mie competenze attraverso l’affiancamento e la revisione del codice.",
        ],
        "client": [
            {
                "title": "Vagabondando — sito per un’accompagnatrice di trekking",
                "meta": "Progetto per una cliente · Online: " + link("vagabondando.site"),
                "tech": "Next.js, React, TypeScript, Tailwind CSS, Sanity, Vercel.",
                "bullets": [
                    "Raccolta dei requisiti direttamente con la cliente e sito in italiano e inglese, con contenuti "
                    "modificabili da Sanity Studio senza intervenire sul codice.",
                    "Gestione di pubblicazione, dominio, DNS, email e SEO multilingua. Modulo contatti protetto da spam e "
                    "invii ripetuti, con test automatici e pipeline GitHub Actions prima del rilascio.",
                    "Prima versione con prenotazioni e pagamenti Stripe, PostgreSQL e area amministrativa, verificata "
                    "end-to-end; convertita in sito vetrina quando la cliente ha rinunciato ai pagamenti online.",
                ],
            },
            {
                "title": "Manpietro — sito catalogo per un music producer",
                "meta": "Progetto per un cliente · Online: " + link("manpietro.vercel.app"),
                "tech": "Next.js, React, TypeScript, Tailwind CSS, Sanity, Zustand, wavesurfer.js.",
                "bullets": [
                    "Catalogo di beat su Sanity, aggiornato dal cliente in autonomia al posto di BeatStars, che non offre "
                    "API; un webhook firmato aggiorna le pagine in cache senza un nuovo deploy.",
                    "Player audio persistente tra le pagine, con waveform pre-calcolate e controlli dal blocco schermo. "
                    "Prima versione online in tre giorni, poi nuove sezioni su richiesta del cliente.",
                ],
            },
            {
                "title": "Manabikai — sito per una pedagogista",
                "meta": "Progetto per una cliente · Online: " + link("irenemoscapedagogista.vercel.app"),
                "tech": "Astro, Sanity, Vercel.",
                "bullets": [
                    "Sito statico con Sanity Studio integrato e una guida d’uso per la cliente, che aggiorna testi, orari "
                    "e foto da sola. Tre proposte di design sullo stesso sito, revisione insieme e scelta finale.",
                ],
            },
        ],
        "personal": [
            {
                "title": "Weirder — CAD per tablet per la stampa 3D",
                "meta": "Progetto personale · Demo: " + link("weirder.vercel.app"),
                "tech": "TypeScript, three.js, WebAssembly (manifold-3d), Vite, PWA, Vitest, Playwright.",
                "bullets": [
                    "Web app che trasforma uno schizzo a mano in un pezzo con misure in millimetri, esportato in STL o 3MF "
                    "sempre stampabile: il progetto è una “ricetta” di operazioni valutata con manifold-3d in WebAssembly.",
                ],
            },
            {
                "title": "Matchday — piattaforma di scommesse simulata",
                "meta": "Progetto personale · Demo: " + link("matchday-web-plum.vercel.app") + " · Codice: "
                        + link("gitlab.com/Federico-Ordonselli/matchday"),
                "tech": "React, Angular, TypeScript, Node.js, Express, PostgreSQL, Drizzle ORM.",
                "bullets": [
                    "Interfaccia React, pannello operatori Angular e API REST Node.js/Express, con cookie HttpOnly, "
                    "protezione CSRF e validazione degli input. Gitflow, merge request e pipeline GitLab CI fino alla release v1.0.0.",
                ],
            },
            {
                "title": "Runebog — gestionale per campagne di giochi di ruolo",
                "meta": "Progetto personale · Demo: " + link("runebog.app"),
                "tech": "Next.js, React, TypeScript, PostgreSQL, Drizzle ORM, Auth.js.",
                "bullets": [
                    "PWA con accesso OAuth, sincronizzazione nel cloud, editor di mappe SVG e generatore di dungeon; "
                    "104 test automatici su sanitizzazione degli input, prevenzione XSS e generazione dei dungeon.",
                ],
            },
        ],
        "more": [
            "<b>Compagnia</b> — scheda di D&amp;D per principianti, app Android in JavaScript e Capacitor in arrivo su "
            "Google Play: spiega ogni tiro e fa le somme, con 339 incantesimi verificati dal PDF SRD e 130 test automatici.",
            "<b>Do sta?</b> — inventario di casa offline-first (Flutter, FastAPI, SQLite): sincronizzazione progettata da "
            "zero con operazioni idempotenti e conflitti risolti per campo; riconoscimento degli oggetti dalle foto con un "
            "modello vision locale.",
        ],
        "work": {
            "title": "ICTS Italia — Addetto alla sicurezza aeroportuale",
            "meta": "2023 – 2025 · Aeroporto di Roma Fiumicino",
            "bullets": [
                "Monitoraggio dei sistemi di controllo in un ambiente operativo attivo 24 ore su 24.",
                "Gestione di situazioni critiche seguendo procedure definite, con escalation e reportistica.",
                "Esperienza di lavoro sotto pressione, con attenzione al rispetto delle procedure e alla precisione operativa.",
            ],
        },
        "skills": [
            ("Front-end", "TypeScript, JavaScript, React, Next.js, Angular, Astro, HTML, CSS, Tailwind CSS, Zustand, "
                          "three.js; PWA, internazionalizzazione, accessibilità e SEO tecnica."),
            ("Mobile", "Flutter, Dart, Riverpod, Drift; Capacitor per pubblicare web app su Android."),
            ("Back-end e database", "Node.js, Express, Python, FastAPI, API REST, PostgreSQL, Drizzle ORM, SQLite, Redis; "
                                    "validazione degli input, transazioni, sincronizzazione e gestione della concorrenza."),
            ("CMS e servizi", "Sanity, WordPress, Elementor, Stripe, Vercel, Neon, Upstash, Resend, Clerk, Auth.js e OAuth."),
            ("Test e qualità", "Vitest, React Testing Library, Cypress, Playwright, pytest, node:test, TDD; controlli "
                               "automatici di tipi, lint e build."),
            ("Sicurezza applicativa", "prevenzione XSS e CSRF, Content Security Policy, protezione delle sessioni, rate "
                                      "limiting, controlli SAST e rilevamento di segreti nel codice."),
            ("Strumenti e ambiente", "Git, GitHub Actions, GitLab CI/CD, Docker, Linux e Bash."),
            ("Sviluppo assistito da IA", "Claude Code e Codex con specifiche scritte, revisione delle modifiche e verifica "
                                         "tramite test e CI."),
        ],
        "certs": [
            "CompTIA CySA+ — CS0-003 · gennaio 2026",
            "CompTIA Security+ — SY0-701 · ottobre 2025",
            "IBM Data Analyst Professional Certificate — Coursera · agosto 2025",
            "Meta Front-End Developer Professional Certificate — Coursera · in corso",
        ],
        "edu": ("Diploma di Liceo Scientifico, opzione Scienze Applicate",
                "Liceo Scientifico A. Labriola, Roma · Informatica curricolare"),
        "other": "Italiano: madrelingua · Inglese: C1 · Patente B",
        "gdpr": "Autorizzo il trattamento dei dati personali contenuti nel curriculum vitae ai sensi del Regolamento UE "
                "2016/679 (GDPR) e del D.Lgs. 196/2003.",
        "footer": "Federico Ordonselli · Curriculum vitae · {}",
    },
    "en": {
        "file": "Ordonselli_CV_EN.pdf",
        "role": "Junior Full-Stack Developer | React, Next.js, TypeScript, Node.js",
        "contact": [
            "Rome, Italy · Open to travel and relocation",
            mail(EMAIL),
            "Portfolio: " + link("ordonselli.info", "https://www.ordonselli.info"),
            "GitHub: " + link("github.com/Federico-Ordonselli") + " · GitLab: " + link("gitlab.com/Federico-Ordonselli"),
            "LinkedIn: " + link("linkedin.com/in/federico-ordonselli-aa7363226"),
        ],
        "h": {"profile": "PROFILE", "client": "CLIENT PROJECTS", "personal": "PERSONAL PROJECTS", "more": "OTHER PROJECTS",
              "work": "WORK EXPERIENCE", "skills": "TECHNICAL SKILLS", "certs": "CERTIFICATIONS",
              "edu": "EDUCATION, LANGUAGES AND OTHER INFORMATION"},
        "tech": "Key technologies:",
        "profile": [
            "Junior developer with three websites delivered and live for real clients, plus several personal full-stack "
            "projects. I work mainly with React, Next.js, TypeScript and Node.js, building user interfaces, APIs and "
            "PostgreSQL databases, and I have also built mobile apps with Flutter and Capacitor.",
            "With clients I handled requirements gathering, design, development and launch, leaving them a CMS to update "
            "content on their own. My CompTIA Security+ and CySA+ certifications add a solid grounding in cybersecurity. "
            "I’m looking for a junior role where I can contribute to development and grow my skills through mentoring "
            "and code review.",
        ],
        "client": [
            {
                "title": "Vagabondando — website for a trekking guide",
                "meta": "Client project · Live: " + link("vagabondando.site"),
                "tech": "Next.js, React, TypeScript, Tailwind CSS, Sanity, Vercel.",
                "bullets": [
                    "Gathered requirements directly with the client and built a site in Italian and English, with content "
                    "editable in Sanity Studio and no code changes required.",
                    "Managed deployment, domain, DNS, email and multilingual SEO. Built a contact form protected against "
                    "spam and duplicate submissions, with automated tests and a GitHub Actions pipeline before release.",
                    "Built a first version with bookings and Stripe payments, PostgreSQL and an admin area, verified "
                    "end-to-end; converted it into a showcase site when the client dropped online payments.",
                ],
            },
            {
                "title": "Manpietro — catalogue website for a music producer",
                "meta": "Client project · Live: " + link("manpietro.vercel.app"),
                "tech": "Next.js, React, TypeScript, Tailwind CSS, Sanity, Zustand, wavesurfer.js.",
                "bullets": [
                    "Moved the beat catalogue to Sanity, which the client updates on his own, instead of BeatStars, which "
                    "has no API; a signed webhook refreshes cached pages without a new deploy.",
                    "Built a persistent audio player that keeps playing across pages, with pre-computed waveforms and "
                    "lock-screen controls. Shipped the first version in three days, then added sections on request.",
                ],
            },
            {
                "title": "Manabikai — website for an educational consultant",
                "meta": "Client project · Live: " + link("irenemoscapedagogista.vercel.app"),
                "tech": "Astro, Sanity, Vercel.",
                "bullets": [
                    "Static site with an embedded Sanity Studio and a how-to guide for the client, who updates copy, hours "
                    "and photos herself. Proposed three designs on the same site, reviewed them together and shipped one.",
                ],
            },
        ],
        "personal": [
            {
                "title": "Weirder — tablet CAD for 3D printing",
                "meta": "Personal project · Demo: " + link("weirder.vercel.app"),
                "tech": "TypeScript, three.js, WebAssembly (manifold-3d), Vite, PWA, Vitest, Playwright.",
                "bullets": [
                    "Web app that turns a freehand sketch into a part with measurements in millimetres, exported as an "
                    "STL or 3MF that always prints: each project is a “recipe” of operations evaluated with manifold-3d in WebAssembly.",
                ],
            },
            {
                "title": "Matchday — simulated sports betting platform",
                "meta": "Personal project · Demo: " + link("matchday-web-plum.vercel.app") + " · Code: "
                        + link("gitlab.com/Federico-Ordonselli/matchday"),
                "tech": "React, Angular, TypeScript, Node.js, Express, PostgreSQL, Drizzle ORM.",
                "bullets": [
                    "React front end, Angular operator dashboard and Node.js/Express REST API, with HttpOnly cookies, CSRF "
                    "protection and input validation. Gitflow, merge requests and a GitLab CI pipeline up to release v1.0.0.",
                ],
            },
            {
                "title": "Runebog — campaign manager for tabletop role-playing games",
                "meta": "Personal project · Demo: " + link("runebog.app"),
                "tech": "Next.js, React, TypeScript, PostgreSQL, Drizzle ORM, Auth.js.",
                "bullets": [
                    "PWA with OAuth sign-in, cloud sync, an SVG map editor and a dungeon generator; 104 automated tests "
                    "covering input sanitisation, XSS prevention and dungeon generation.",
                ],
            },
        ],
        "more": [
            "<b>Compagnia</b> — beginner-friendly D&amp;D character sheet, an Android app in JavaScript and Capacitor heading "
            "to Google Play: explains every roll and does the maths, with 339 spells verified against the SRD and 130 automated tests.",
            "<b>Do sta?</b> — offline-first home inventory (Flutter, FastAPI, SQLite): sync designed from scratch with "
            "idempotent operations and per-field conflict resolution; recognises items from photos with a local vision model.",
        ],
        "work": {
            "title": "ICTS Italia — Airport Security Officer",
            "meta": "2023 – 2025 · Rome Fiumicino Airport",
            "bullets": [
                "Monitored control systems in a 24/7 operational environment.",
                "Handled critical situations following defined procedures, including escalation and reporting.",
                "Worked under pressure with strict attention to procedural compliance and operational accuracy.",
            ],
        },
        "skills": [
            ("Front end", "TypeScript, JavaScript, React, Next.js, Angular, Astro, HTML, CSS, Tailwind CSS, Zustand, "
                          "three.js; PWAs, internationalisation, accessibility and technical SEO."),
            ("Mobile", "Flutter, Dart, Riverpod, Drift; Capacitor to ship web apps on Android."),
            ("Back end and databases", "Node.js, Express, Python, FastAPI, REST APIs, PostgreSQL, Drizzle ORM, SQLite, "
                                       "Redis; input validation, transactions, sync and concurrency handling."),
            ("CMS and services", "Sanity, WordPress, Elementor, Stripe, Vercel, Neon, Upstash, Resend, Clerk, Auth.js and OAuth."),
            ("Testing and quality", "Vitest, React Testing Library, Cypress, Playwright, pytest, node:test, TDD; automated "
                                    "type, lint and build checks."),
            ("Application security", "XSS and CSRF prevention, Content Security Policy, session protection, rate "
                                     "limiting, SAST checks and secret detection in code."),
            ("Tools and environment", "Git, GitHub Actions, GitLab CI/CD, Docker, Linux and Bash."),
            ("AI-assisted development", "Claude Code and Codex with written specifications, reviewing changes and "
                                        "verifying them through tests and CI."),
        ],
        "certs": [
            "CompTIA CySA+ — CS0-003 · January 2026",
            "CompTIA Security+ — SY0-701 · October 2025",
            "IBM Data Analyst Professional Certificate — Coursera · August 2025",
            "Meta Front-End Developer Professional Certificate — Coursera · in progress",
        ],
        "edu": ("Scientific High School Diploma — Applied Sciences track",
                "Liceo Scientifico A. Labriola, Rome · Computer Science as a core subject"),
        "other": "Italian: native · English: C1 · Driving licence: Category B",
        "gdpr": "I authorise the processing of the personal data contained in this CV pursuant to EU Regulation 2016/679 "
                "(GDPR) and Italian Legislative Decree 196/2003.",
        "footer": "Federico Ordonselli · Curriculum vitae · {}",
    },
}


# ─── GRAFICA ──────────────────────────────────────────────────────────────────
class CirclePhoto(Flowable):
    """Foto ritagliata a cerchio, come nel CV originale."""

    def __init__(self, path, size):
        super().__init__()
        self.path, self.size = str(path), size

    def wrap(self, *_):
        return self.size, self.size

    def draw(self):
        c, r = self.canv, self.size / 2
        c.saveState()
        p = c.beginPath()
        p.circle(r, r, r)
        c.clipPath(p, stroke=0, fill=0)
        c.drawImage(self.path, 0, 0, self.size, self.size)
        c.restoreState()


class Rule(Flowable):
    def wrap(self, *_):
        return WIDTH, 3

    def draw(self):
        self.canv.setStrokeColor(GREEN)
        self.canv.setLineWidth(0.8)
        self.canv.line(0, 1.5, WIDTH, 1.5)


def heading(text):
    return [Spacer(0, 9), Paragraph(text, S["heading"]), Spacer(0, 1.5), Rule(), Spacer(0, 5)]


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, S["bullet"]), leftIndent=11, value="•") for t in items],
        bulletType="bullet", bulletFontName="Carlito", bulletFontSize=10, leftIndent=11, bulletOffsetY=0,
        spaceBefore=0, spaceAfter=0,
    )


def project(p, tech_label, first=False):
    parts = [] if first else [Spacer(0, 6)]
    parts += [Paragraph(p["title"], S["title"]), Paragraph(p["meta"], S["meta"])]
    if p.get("tech"):
        parts.append(Paragraph(f"<b>{tech_label}</b> {p['tech']}", S["tech"]))
    else:
        parts.append(Spacer(0, 2))
    parts.append(bullets(p["bullets"]))
    return parts


def section(title, blocks):
    """Il titolo resta sempre attaccato al primo blocco; gli altri possono andare a pagina nuova."""
    first, *rest = blocks
    return [KeepTogether(heading(title) + first)] + [KeepTogether(b) for b in rest]


def build(lang, out_dir):
    photo = ASSETS / "photo.jpg"
    if not photo.exists():
        # La foto non è nel repo (scelta del 23 novembre 2026): va messa a mano in assets/.
        raise SystemExit(f"Manca {photo}: copia lì la foto quadrata del CV (non è versionata).")
    c = CONTENT[lang]
    out = Path(out_dir) / c["file"]
    # Il Frame di ReportLab ha 6 pt di padding interno: margini ridotti di 6 pt = testo a 17 mm dal bordo.
    pad = 6
    doc = SimpleDocTemplate(str(out), pagesize=A4, leftMargin=MARGIN - pad, rightMargin=MARGIN - pad,
                            topMargin=MARGIN - pad, bottomMargin=MARGIN - pad,
                            title="Federico Ordonselli — Curriculum vitae", author="Federico Ordonselli")

    left = [Paragraph("Federico Ordonselli", S["name"]), Paragraph(c["role"], S["role"])]
    left += [Paragraph(line, S["contact"]) for line in c["contact"]]
    header = Table([[left, CirclePhoto(ASSETS / "photo.jpg", 102)]], colWidths=[WIDTH - 102, 102])
    header.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
                                ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0),
                                ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))

    h, tech = c["h"], c["tech"]
    w = c["work"]
    story = [header]
    story += section(h["profile"], [[Paragraph(t, S["body"])] for t in c["profile"]])
    story += section(h["client"], [project(p, tech, i == 0) for i, p in enumerate(c["client"])])
    story += section(h["personal"], [project(p, tech, i == 0) for i, p in enumerate(c["personal"])])
    story += section(h["more"], [[bullets(c["more"])]])
    story += section(h["work"], [project({**w, "bullets": w["bullets"]}, tech, True)])
    story += section(h["skills"], [[Paragraph(f"<b>{k}:</b> {v}", S["skill"])] for k, v in c["skills"]])
    story += section(h["certs"], [[bullets(c["certs"])]])
    story += section(h["edu"], [[Paragraph(c["edu"][0], S["title"]), Paragraph(c["edu"][1], S["meta"]), Spacer(0, 5),
                                  Paragraph(c["other"], S["body"]), Spacer(0, 4), Paragraph(c["gdpr"], S["small"])]])

    def footer(canvas, d):
        canvas.saveState()
        canvas.setFont("Carlito", 8)
        canvas.setFillColor(MUTED)
        canvas.drawRightString(A4[0] - MARGIN, 22.68, c["footer"].format(d.page))
        canvas.restoreState()

    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    return out


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default=str(ROOT / "public" / "cv"))
    args = ap.parse_args()
    for lang in CONTENT:
        print(build(lang, args.out))

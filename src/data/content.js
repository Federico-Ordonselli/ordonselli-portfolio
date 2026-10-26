// ─── i18n helper ───────────────────────────────────────────────────────────
// tr(it, en) marca una stringa traducibile. getContent(lang) risolve l'intero
// albero restituendo la variante nella lingua scelta. I campi non avvolti da
// tr() (nomi propri, tecnologie, colori, path, link) restano identici.
const tr = (it, en) => ({ __t: true, it, en });

function resolve(node, lang) {
  if (Array.isArray(node)) return node.map((n) => resolve(n, lang));
  if (node && typeof node === "object") {
    if (node.__t) return node[lang];
    const out = {};
    for (const k in node) out[k] = resolve(node[k], lang);
    return out;
  }
  return node;
}

// ─── DATI ────────────────────────────────────────────────────────────────────
const RAW = {
  name: "Federico",
  role: tr("Sviluppatore frontend junior", "Junior frontend developer"),
  tagline: tr(
          "Sviluppo applicazioni web con React, TypeScript e Next.js. Mi piace creare strumenti che mi servono; nel tempo libero suono e gioco ai videogiochi.",
          "I develop web applications with React, TypeScript and Next.js. I enjoy building tools I need; in my free time, I play music and video games."
        ),
  location: tr("Roma, Italia", "Rome, Italy"),
  email: "fede.ordons@gmail.com",
  github: "https://github.com/Federico-Ordonselli",
  linkedin: "https://www.linkedin.com/in/federico-ordonselli-aa7363226/",
  cv: tr("/cv/Ordonselli_CV_IT.pdf", "/cv/Ordonselli_CV_EN.pdf"),

  projects: {
    data: [
      {
        title: "NTSB Aviation Safety Analysis",
        desc: tr(
          "Analisi di 7.438 incidenti aerei negli Stati Uniti, con pulizia dei dati in Python e dashboard Power BI. Esplora tipologie di volo, gravità e distribuzione geografica, evidenziando i limiti di copertura del dataset.",
          "Analysis of 7,438 aviation accidents in the United States, with Python data cleaning and a Power BI dashboard. Explores flight categories, severity and geographic distribution, highlighting gaps in dataset coverage."
        ),
        tags: ["Python", "Pandas", "Power BI", "DAX"],
        color: "#6C63FF",
        link: "https://github.com/Federico-Ordonselli/ntsb-aviation-safety-analysis",
      },
      {
        title: "Customer Churn Analysis",
        desc: tr(
          "Analisi di 7.043 clienti del dataset IBM Telco: pulizia dei dati in Python e dashboard Tableau su abbandono, contratti, anzianità dei clienti e metodi di pagamento.",
          "Analysis of 7,043 customers from the IBM Telco dataset: Python data cleaning and a Tableau dashboard covering churn, contracts, customer tenure and payment methods."
        ),
        tags: ["Python", "Pandas", "Tableau"],
        color: "#FF6584",
        link: "https://github.com/Federico-Ordonselli/telco-churn-analysis",
      },
      {
        title: "Azure Data Pipeline",
        desc: tr(
          "Pipeline ETL in Python per leggere CSV da Azure Data Lake, normalizzare le colonne e caricare i dati in Azure SQL. Il repository include la configurazione dell’infrastruttura con Terraform.",
          "A Python ETL pipeline that reads CSV files from Azure Data Lake, normalises columns and loads data into Azure SQL. The repository includes Terraform infrastructure configuration."
        ),
        tags: ["Python", "Pandas", "Azure SQL", "ADLS Gen2", "Terraform"],
        color: "#43B89C",
        link: "#",
      },
      {
        title: "SQL Northwind Analysis",
        desc: tr(
          "Query SQL sul database Northwind per analizzare fatturato, clienti, vendite per dipendente e livelli di scorta. Uno script Python genera grafici e un report CSV dei risultati.",
          "SQL queries on the Northwind database to analyse revenue, customers, sales by employee and stock levels. A Python script generates charts and a CSV report of the results."
        ),
        tags: ["SQL", "SQLite", "Python", "Pandas", "Matplotlib"],
        color: "#F7971E",
        link: "https://github.com/Federico-Ordonselli/sql-northwind-analysis",
      },
      {
        title: "E-commerce Sales Analysis",
        desc: tr(
          "Analisi delle vendite del dataset Online Retail con Python: pulizia dei dati, fatturato mensile, prodotti principali e ordini per orario e paese. I risultati sono raccolti in grafici e riepiloghi.",
          "Python analysis of the Online Retail sales dataset: data cleaning, monthly revenue, leading products and orders by time of day and country. Results are presented as charts and summaries."
        ),
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        color: "#6C63FF",
        link: "https://github.com/Federico-Ordonselli/ecommerce-sales-analysis",
      },
    ],
    web: [
      {
        title: "Runebog GM",
        desc: tr(
          "Applicazione per organizzare campagne di giochi di ruolo: mappe navigabili, schede mostro D&D, generazione di dungeon e gestione degli incontri. Include salvataggio cloud, una vista del tavolo condivisibile con i giocatori, uso offline come PWA e un’app portable per Windows.",
          "An app for organising tabletop RPG campaigns: navigable maps, D&D monster stat blocks, dungeon generation and encounter management. Includes cloud saves, a table view that can be shared with players, offline use as a PWA and a portable Windows app."
        ),
        tags: ["Next.js", "JavaScript", "TypeScript", "PostgreSQL", "Auth.js", "Electron"],
        color: "#43B89C",
        link: "https://runebog.app",
        caseStudy: "/projects/runebog-gm",
      },
      {
        title: "Matchday",
        desc: tr(
          "Piattaforma di scommesse sportive simulate con partite reali dei cinque principali campionati europei, quote generate dall’applicazione e crediti fittizi. Monorepo TypeScript con sito React, API Express su PostgreSQL e backoffice Angular, testato con Vitest e Cypress e pubblicato su Vercel.",
          "A simulated sports betting platform with real fixtures from Europe’s top five leagues, odds generated by the app and fictitious credits. A TypeScript monorepo with a React site, an Express API on PostgreSQL and an Angular back-office, tested with Vitest and Cypress and deployed on Vercel."
        ),
        tags: ["React", "Angular", "TypeScript", "Express", "PostgreSQL", "GitLab CI"],
        color: "#6C63FF",
        link: "https://gitlab.com/Federico-Ordonselli/matchday",
        caseStudy: "/projects/matchday",
      },
      {
        title: "Covershift",
        desc: tr(
          "Piattaforma multi-tenant per pianificare i turni e scambiarli tra colleghi, con approvazione del manager e controllo delle certificazioni. Monorepo TypeScript con API NestJS, web app React e contratti Zod condivisi; l’accesso ai dati è affidato alla Row Level Security di Postgres su Supabase. Oltre 380 test, con e2e Playwright e controlli di accessibilità.",
          "A multi-tenant platform for scheduling shifts and swapping them between colleagues, with manager approval and certification checks. A TypeScript monorepo with a NestJS API, a React web app and shared Zod contracts; data access is enforced by Postgres Row Level Security on Supabase. Over 380 tests, including Playwright e2e and accessibility checks."
        ),
        tags: ["NestJS", "React", "TypeScript", "Supabase", "PostgreSQL", "Playwright"],
        color: "#43B89C",
        link: "https://github.com/Federico-Ordonselli/covershift",
        caseStudy: "/projects/covershift",
      },
      {
        title: "Vagabondando",
        desc: tr(
          "Sito bilingue di diari di viaggio per un’accompagnatrice di trekking, online su vagabondando.site. La cliente scrive i racconti in Sanity Studio e le pagine si aggiornano entro un minuto; il form contatti è protetto da BotID, honeypot e rate limit su Redis. La prima versione gestiva prenotazioni con Stripe e PostgreSQL.",
          "A bilingual travel-journal site for a trekking guide, live at vagabondando.site. The client writes her stories in Sanity Studio and pages update within a minute; the contact form is protected by BotID, a honeypot and a Redis rate limit. The first version handled bookings with Stripe and PostgreSQL."
        ),
        tags: ["Next.js", "TypeScript", "Sanity", "next-intl", "Resend", "Upstash Redis"],
        color: "#6C63FF",
        link: "https://vagabondando.site",
        caseStudy: "/projects/vagabondando",
      },
      {
        title: "qrinventory",
        desc: tr(
          "Inventario self-hosted di oggetti fisici con QR code: ogni oggetto e contenitore ha un’etichetta che, inquadrata dal telefono, apre la sua scheda. API FastAPI e SQLModel su SQLite, contenitori annidati senza cicli, fogli di etichette PDF e scanner dalla fotocamera. Gira in Docker sul PC di casa, in HTTPS con Caddy e Let’s Encrypt, senza aprire porte del router.",
          "A self-hosted inventory of physical objects with QR codes: every item and container has a label that opens its page when scanned with a phone. A FastAPI and SQLModel API on SQLite, nested containers with cycle protection, PDF label sheets and a camera scanner. It runs in Docker on a home PC, over HTTPS with Caddy and Let’s Encrypt, without opening any router ports."
        ),
        tags: ["FastAPI", "SQLModel", "SQLite", "Docker", "Caddy", "pytest"],
        color: "#6C63FF",
        link: "#",
      },
      {
        title: "StudyBuddy v2",
        desc: tr(
          "Tutor di studio AI che gira tutto in locale: ogni corso online scaricato diventa un tutor socratico che cita il minuto esatto del video. Ricerca ibrida (sqlite-vec + BM25, fusione RRF, cross-encoder su GPU), quiz valutati da un LLM, ripasso SM-2, mappe concettuali esplorabili e set di eval per misurare i prompt. In uso quotidiano.",
          "A local-first AI study tutor: every downloaded online course becomes a Socratic tutor that cites the exact minute of the video. Hybrid retrieval (sqlite-vec + BM25, RRF fusion, GPU cross-encoder), LLM-graded quizzes, SM-2 review, explorable concept maps and eval sets to measure prompts. In daily use."
        ),
        tags: ["Next.js", "TypeScript", "RAG", "SQLite", "Ollama", "Transformers.js"],
        color: "#FF6584",
        link: "https://github.com/Federico-Ordonselli/studybuddy-v2",
        caseStudy: "/projects/studybuddy",
      },
      {
        title: "ordonselli.info",
        desc: tr(
          "Questo sito: portfolio bilingue in Next.js 16 e React 19, migrato da una SPA Vite mantenendo i vecchi URL. Lingua salvata in un cookie e letta dal server per evitare il lampo di contenuto, Content Security Policy con nonce per richiesta, demo interattiva di interfacce in tre stili e test Playwright su desktop e mobile.",
          "This site: a bilingual portfolio in Next.js 16 and React 19, migrated from a Vite SPA while keeping the old URLs. The language is stored in a cookie and read on the server to avoid a content flash, with a per-request nonce Content Security Policy, an interactive three-style interface demo and Playwright tests on desktop and mobile."
        ),
        tags: ["Next.js", "React", "CSP", "Playwright", "Vercel"],
        color: "#6C63FF",
        link: "https://github.com/Federico-Ordonselli/ordonselli-portfolio",
      },
    ],
    cyber: [
      {
        title: "StudyBuddy",
        desc: tr(
          "Assistente di studio locale che trasforma documenti, audio e video in riassunti, flashcard e quiz. Permette di fare domande sui materiali con riferimenti alle fonti e di ripassare con ripetizione dilazionata.",
          "A local study assistant that turns documents, audio and video into summaries, flashcards and quizzes. Supports questions about the material with source references, plus spaced repetition for review."
        ),
        tags: ["Python", "Streamlit", "Ollama", "ChromaDB", "Whisper"],
        color: "#F7971E",
        link: "https://github.com/Federico-Ordonselli/studybuddy",
      },
      {
        title: "Full Studio",
        desc: tr(
          "Lettore di lezioni audio con codice sincronizzato: una voce sintetica spiega quattro guide full stack mentre a schermo compaiono gli esempi, con le righe di cui si parla evidenziate. Oltre 10 ore di audio generate da una pipeline Python idempotente con validatore, e un player React senza pause tra i segmenti. Sviluppato orchestrando Claude Code e Codex, con revisione e test miei.",
          "An audio lesson player with synchronised code: a synthetic voice explains four full-stack guides while the examples appear on screen, with the lines being discussed highlighted. Over 10 hours of audio generated by an idempotent Python pipeline with a validator, and a React player with no gaps between segments. Built by orchestrating Claude Code and Codex, with my own review and testing."
        ),
        tags: ["React", "TypeScript", "Vite", "Shiki", "Python", "TTS", "Playwright"],
        color: "#43B89C",
        link: "#",
      },
      {
        title: "Diario KH",
        desc: tr(
          "App offline per completare al 100% Kingdom Hearts Final Mix: checklist di 794 obiettivi con ricerca e filtri, inventario dei materiali e un pianificatore che risolve le dipendenze tra ricette. Riscritta da React a Flutter mantenendo compatibili i backup, con salvataggi atomici, undo e import dai salvataggi di gioco con anteprima delle differenze.",
          "An offline app for completing Kingdom Hearts Final Mix to 100%: a checklist of 794 goals with search and filters, a materials inventory and a planner that resolves dependencies between recipes. Rewritten from React to Flutter while keeping backups compatible, with atomic saves, undo and save-file imports with a diff preview."
        ),
        tags: ["Flutter", "Dart", "Material 3", "React"],
        color: "#6C63FF",
        link: "#",
      },
      {
        title: "PokéHome Organizer",
        desc: tr(
          "App desktop per organizzare la Living Dex di Pokémon HOME box per box, come nel gioco, con dove trovare ogni Pokémon grazie a PokéAPI. Porting di un foglio Google Sheets della community: dataset estratto da Excel con Python, cache locale delle risposte, salvataggio su file e pacchetti AppImage e .deb.",
          "A desktop app for organising a Pokémon HOME Living Dex box by box, just like in the game, showing where to find each Pokémon via PokéAPI. A port of a community Google Sheets tracker: a dataset extracted from Excel with Python, a local response cache, file-based saves and AppImage and .deb packages."
        ),
        tags: ["Tauri", "React", "TypeScript", "Tailwind CSS", "PokéAPI"],
        color: "#FF6584",
        link: "#",
      },
      {
        title: "D&D Transcription App",
        desc: tr(
          "Trascrizione delle sessioni di D&D con faster-whisper e pyannote.audio, con riconoscimento dei parlanti e distinzione tra dialoghi dei personaggi e conversazioni dei giocatori.",
          "D&D session transcription using faster-whisper and pyannote.audio, with speaker identification and a distinction between character dialogue and player conversation."
        ),
        tags: ["Python", "Whisper", "NLP", "Speaker Diarization"],
        color: "#F7971E",
        link: "#",
      },
      {
        title: "Sub Tracker",
        desc: tr(
          "Applicazione desktop per tenere traccia degli abbonamenti, realizzata con PyQt6 e SQLite e integrata con systemd su Linux.",
          "A desktop app for tracking subscriptions, built with PyQt6 and SQLite and integrated with systemd on Linux."
        ),
        tags: ["PyQt6", "SQLite", "Linux", "systemd"],
        color: "#6C63FF",
        link: "#",
      },
      {
        title: "Security Log Analysis",
        desc: tr(
          "Progetto di analisi di eventi SSH simulati: individua sequenze di accessi falliti e indirizzi IP sospetti, con grafici per orario e giorno. Realizzato in Python con Pandas, Matplotlib e Seaborn.",
          "An analysis project using simulated SSH events to identify repeated failed logins and suspicious IP addresses, with charts by hour and day. Built with Python, Pandas, Matplotlib and Seaborn."
        ),
        tags: ["Python", "Pandas", "Matplotlib", "Security"],
        color: "#FF6584",
        link: "https://github.com/Federico-Ordonselli/security-log-analysis",
      },
    ],
  },

  hobbies: [
    {
      icon: "🖨️",
      title: tr("Stampa 3D", "3D printing"),
      desc: tr(
          "Uso una Bambu Lab A1 con AMS Lite per realizzare piccoli progetti. Sto costruendo un controller leverless con scocca stampata in 3D; ho anche modellato in Blender una replica della Piramide Cestia.",
          "I use a Bambu Lab A1 with AMS Lite for small projects. I’m building a leverless controller with a 3D-printed case, and have also modelled a replica of the Pyramid of Cestius in Blender."
        ),
      tags: ["Bambu Lab", "Blender", "FDM", "Hitbox"],
      color: "#6C63FF",
    },
    {
      icon: "🔧",
      title: tr("Elettronica", "Electronics"),
      desc: tr(
          "Mi interessano l’elettronica e le modifiche ai controller.",
          "I’m interested in electronics and controller modifications."
        ),
      tags: ["DIY", "Modding"],
      color: "#F7971E",
    },
    {
      icon: "🎮",
      title: tr("Videogiochi", "Video Games"),
      desc: tr(
          "Mi piace passare il tempo libero a videogiocare. Il mio gioco preferito è The Legend of Zelda: Breath of the Wild.",
          "I enjoy playing video games in my free time. My favourite is The Legend of Zelda: Breath of the Wild."
        ),
      tags: ["Zelda", "Breath of the Wild"],
      color: "#FF6584",
    },
    {
      icon: "🎵",
      title: tr("Musica", "Music"),
      desc: tr(
          "Nel tempo libero mi piace suonare.",
          "I enjoy playing music in my free time."
        ),
      tags: [],
      color: "#43B89C",
    },
  ],

  about: {
    bio: tr(
          "Sono Federico, uno sviluppatore frontend junior di Roma. Lavoro con React, TypeScript e Next.js. Ho iniziato a programmare perché mi piace creare strumenti che mi servono: il primo tentativo è stato StudyBuddy, per generare flashcard e riassunti con modelli AI locali. Runebog è il progetto di cui oggi ho più voglia di parlare. Prima dello sviluppo ho lavorato nella sicurezza aeroportuale con ICTS a Fiumicino, dal 2023 al 2025: di quell’esperienza mi porto dietro l’attenzione ai dettagli. Ho conseguito le certificazioni CompTIA Security+ e CySA+.",
          "I’m Federico, a junior frontend developer based in Rome. I work with React, TypeScript and Next.js. I started programming because I enjoy building tools I need: my first attempt was StudyBuddy, for generating flashcards and summaries with local AI models. Runebog is the project I’m most keen to talk about today. Before moving into development, I worked in airport security with ICTS at Fiumicino from 2023 to 2025. Attention to detail is something I’ve carried with me from that experience. I hold CompTIA Security+ and CySA+ certifications."
        ),
    facts: [
      { label: tr("Videogioco preferito", "Favorite video game"), value: "The Legend of Zelda: Breath of the Wild", icon: "🕹️" },
      { label: tr("Musica", "Music"), value: tr("Mi piace suonare", "I enjoy playing music"), icon: "🎹" },
      { label: tr("Progetti manuali", "Hands-on projects"), value: tr("Stampa 3D", "3D printing"), icon: "🖨️" },
      { label: "Setup", value: "Ryzen 7 9700X · RTX 4080 Super · CachyOS", icon: "💻" },
      { label: tr("Città", "City"), value: tr("Roma, Italia", "Rome, Italy"), icon: "🏛️" },
    ],
    spotify: "https://open.spotify.com/embed/track/6LgJvl0Xdtc73RJ1mmpotq?utm_source=generator&si=c53ea5d1921441cc",
    certs: [
      { name: "CompTIA Security+", color: "#FF6584" },
      { name: "CompTIA CySA+", color: "#43B89C" },
      { name: "IBM Data Analyst Professional", color: "#6C63FF" },
      { name: tr("Meta Front-End Developer (in corso)", "Meta Front-End Developer (in progress)"), color: "#F7971E" },
    ],

    // Stack allineato al CV e alle overview dei progetti di ottobre 2026
    // (Covershift, Full Studio, Diario KH). I nomi delle tecnologie non passano da tr():
    // "PostgreSQL" è "PostgreSQL" in entrambe le lingue, solo le etichette
    // dei gruppi sono tradotte.
    skills: [
      {
        label: tr("Linguaggi e frontend", "Languages & frontend"),
        color: "#6C63FF",
        items: ["TypeScript", "JavaScript", "React", "Next.js", "Angular", "TanStack Query", "HTML", "CSS", "CSS Modules", "Tailwind CSS", "Python", "Flutter"],
      },
      {
        label: tr("Backend e dati", "Backend & data"),
        color: "#43B89C",
        items: ["Node.js", "Express", "NestJS", "FastAPI", "PostgreSQL", "Row Level Security", "MySQL", "Drizzle ORM", "TypeORM", "SQLite", "REST API", "OpenAPI", "Zod"],
      },
      {
        label: tr("Servizi e infrastruttura", "Services & infrastructure"),
        color: "#F7971E",
        items: ["WordPress", "Stripe", "Sanity", "Supabase", "Auth.js", "Clerk", "Resend", "Vercel", "NeonDB", "Azure", "Terraform", "Caddy"],
      },
      {
        label: tr("Sistemi e workflow", "Systems & workflow"),
        color: "#FF6584",
        items: ["Arch Linux", "Bash/CLI", "Docker", "Docker Compose", "Git", "Gitflow", "GitLab CI", "GitHub Actions · CI/CD", "npm", "pnpm", tr("Modelli AI locali", "Local AI models")],
      },
      {
        label: tr("Qualità e sicurezza", "Quality & security"),
        color: "#6C63FF",
        items: ["Vitest", "React Testing Library", "Jest", "node:test", "Playwright", "Cypress", "pytest", "CI/CD", tr("Accessibilità WCAG di base", "WCAG accessibility basics"), "OAuth", "XSS prevention", "Content Security Policy"],
      },
    ],
  },

  // ─── CERTIFICAZIONI ──────────────────────────────────────────────────────
  // Ogni cert punta a un PDF in /public/certs. Date e link estratti dai PDF.
  certifications: [
    {
      category: tr("Sicurezza informatica", "Cybersecurity"),
      color: "#FF6584",
      items: [
        {
          name: "CompTIA Security+ (ce)",
          file: "/certs/comptia-security-plus.pdf",
          issuer: "CompTIA",
          date: tr("Ott 2025", "Oct 2025"),
          credentialUrl: "https://www.comptia.org/certifications/verify",
        },
        {
          name: "CompTIA CySA+ (ce)",
          file: "/certs/comptia-cysa-plus.pdf",
          issuer: "CompTIA",
          date: tr("Gen 2026", "Jan 2026"),
          credentialUrl: "https://www.comptia.org/certifications/verify",
        },
      ],
    },
    {
      category: tr("Analisi dei dati", "Data analysis"),
      color: "#6C63FF",
      items: [
        {
          name: "IBM Data Analyst Professional Certificate",
          file: "/certs/ibm-data-analyst.pdf",
          issuer: "IBM · Coursera",
          date: tr("Ago 2025", "Aug 2025"),
          credentialUrl: "",
        },
        {
          name: "Excel Basics for Data Analysis",
          file: "/certs/excel-basics-data-analysis.pdf",
          issuer: "IBM · Coursera",
          date: tr("Mag 2025", "May 2025"),
          credentialUrl: "https://coursera.org/verify/6UAPG29YPR26",
        },
        {
          name: "Data Visualization and Dashboards with Excel and Cognos",
          file: "/certs/data-viz-excel-cognos.pdf",
          issuer: "IBM · Coursera",
          date: tr("Mag 2025", "May 2025"),
          credentialUrl: "https://coursera.org/verify/YS71E8P728UQ",
        },
        {
          name: "Databases and SQL for Data Science with Python",
          file: "/certs/databases-sql-data-science.pdf",
          issuer: "IBM · Coursera",
          date: tr("Mag 2025", "May 2025"),
          credentialUrl: "https://coursera.org/verify/7ST0S3L06XQZ",
        },
      ],
    },
    {
      category: "Python & AI",
      color: "#43B89C",
      items: [
        {
          name: "Python for Data Science, AI & Development",
          file: "/certs/python-data-science-ai-dev.pdf",
          issuer: "IBM · Coursera",
          date: tr("Mag 2025", "May 2025"),
          credentialUrl: "https://coursera.org/verify/1JD6Y1FYAD8B",
        },
        {
          name: "Python Project for Data Science",
          file: "/certs/python-project-data-science.pdf",
          issuer: "IBM · Coursera",
          date: tr("Mag 2025", "May 2025"),
          credentialUrl: "https://coursera.org/verify/6MJZ5Q3DK60T",
        },
        {
          name: "Data Analysis with Python",
          file: "/certs/data-analysis-with-python.pdf",
          issuer: "IBM · Coursera",
          date: tr("Giu 2025", "Jun 2025"),
          credentialUrl: "https://coursera.org/verify/C9YWMCVFPVWP",
        },
        {
          name: "Data Visualization with Python",
          file: "/certs/data-visualization-with-python.pdf",
          issuer: "IBM · Coursera",
          date: tr("Giu 2025", "Jun 2025"),
          credentialUrl: "https://coursera.org/verify/H6ERGSTJN9NT",
        },
        {
          name: "Generative AI",
          file: "/certs/generative-ai.pdf",
          issuer: "IBM · Coursera",
          date: tr("Ago 2025", "Aug 2025"),
          credentialUrl: "https://coursera.org/verify/EGNJALEI19Y5",
        },
      ],
    },
  ],

  // ─── STRINGHE UI ───────────────────────────────────────────────────────────
  ui: {
    nav: {
      home: tr("Home", "Home"),
      projects: tr("Progetti", "Projects"),
      certifications: tr("Certificazioni", "Certifications"),
      hobbies: tr("Hobby", "Hobbies"),
      about: tr("Chi sono", "About"),
    },
    footerSuffix: tr("Roma, Italia", "Rome, Italy"),
    downloadCv: tr("Scarica CV", "Download CV"),
    projectsPage: {
      subtitle: tr("Portfolio", "Portfolio"),
      title: tr("Progetti", "Projects"),
      data: tr("Analisi dei dati", "Data analysis"),
      web: tr("Applicazioni web", "Web applications"),
      cyber: tr("Strumenti e sicurezza", "Tools & security"),
    },
    certsPage: {
      subtitle: tr("Formazione", "Education"),
      title: tr("Certificazioni", "Certifications"),
      intro: tr(
        "Qui puoi consultare gli attestati in PDF e, dove disponibile, il link di verifica.",
        "View the certificates as PDFs or follow the verification link where available."
      ),
      view: tr("Visualizza certificato", "View certificate"),
      verify: tr("Verifica", "Verify"),
      open: tr("Apri", "Open"),
      close: tr("Chiudi", "Close"),
    },
    hobbiesPage: {
      subtitle: tr("Tempo libero", "Outside work"),
      title: tr("Hobby e interessi", "Hobbies & interests"),
    },
    aboutPage: {
      subtitle: tr("Profilo", "Profile"),
      title: tr("Chi sono", "About me"),
      skillsHeading: tr("Competenze tecniche", "Technical skills"),
      certsHeading: tr("Certificazioni", "Certifications"),
      playlistHeading: tr("Una canzone che ascolto spesso", "A song I often listen to"),
      loadSpotify: tr("Ascolta su Spotify", "Listen on Spotify"),
    },
  },
};

export function getContent(lang = "en") {
  return resolve(RAW, lang);
}

// Lingue disponibili (per il toggle in Navbar)
export const LANGS = ["en", "it"];

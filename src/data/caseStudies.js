// Pagine di approfondimento dei progetti, servite da /projects/[slug].
// Ogni testo è { it, en }, come in expertise.js. I contenuti di Matchday sono
// verificati sul README e sulla guida al deploy del repository (release v1.0.0);
// fonte completa e punti da confermare in docs/SCHEDA-PROGETTO-MATCHDAY.md.
// Runebog GM segue docs/SCHEDA-PROGETTO-RUNEBOG.md, con i dati aggiornati sul
// repository a v0.2.10 (2 ottobre 2026). Vagabondando segue il documento di progetto di ottobre 2026, riassunto in
// docs/SCHEDA-PROGETTO-VAGABONDANDO.md. StudyBuddy v2 segue il README di
// portfolio scritto a ottobre 2026 (docs/SCHEDA-PROGETTO-STUDYBUDDY.md), con i
// numeri verificati sul repository studybuddy-v2 al 7 ottobre 2026 e test ed eval
// aggiornati al 26 ottobre. Covershift segue l'overview di progetto del 26 ottobre
// 2026 (docs/SCHEDA-PROGETTO-COVERSHIFT.md), verificata su README e report di fase 2.
export const caseStudies = [
  {
    slug: 'runebog-gm',
    title: 'Runebog GM',
    art: 'runebog',
    eyebrow: { it: 'WEB APP · NEXT.JS + JAVASCRIPT VANILLA · v0.2.10', en: 'WEB APP · NEXT.JS + VANILLA JAVASCRIPT · v0.2.10' },
    headline: { it: 'Un intero mondo, organizzato in una web app.', en: 'An entire world, organised in a web app.' },
    intro: {
      it: 'Runebog GM è uno strumento per chi guida partite di giochi di ruolo da tavolo. È nato per una one-shot di compleanno ed è cresciuto fino a diventare un’applicazione completa: mappe annidabili dal mondo alla singola stanza, regole e bestiario D&D 5e in italiano, un tavolo condiviso con i giocatori e un’app portable per Windows. È un progetto personale AI-assisted: l’ho progettato e rilasciato io, con il codice scritto insieme a Claude Code.',
      en: 'Runebog GM is a tool for people who run tabletop role-playing games. It started as a birthday one-shot and grew into a complete application: maps that nest from a whole world down to a single room, D&D 5e rules and monsters in Italian, a table shared with players and a portable Windows app. It is a personal AI-assisted project: I designed and released it, with the code written together with Claude Code.',
    },
    facts: [
      { label: { it: 'Ruolo', en: 'Role' }, value: { it: 'Progetto personale AI-assisted: progettazione, revisione e rilascio', en: 'Personal AI-assisted project: design, review and release' } },
      { label: { it: 'Stack', en: 'Stack' }, value: { it: 'Next.js 15 · React 19 · TypeScript · Auth.js · PostgreSQL (Neon) · Drizzle · editor in JavaScript vanilla · Electron', en: 'Next.js 15 · React 19 · TypeScript · Auth.js · PostgreSQL (Neon) · Drizzle · vanilla JavaScript editor · Electron' } },
      { label: { it: 'Qualità', en: 'Quality' }, value: { it: 'Oltre 200 test con node:test · GitHub Actions: tipi, test e build', en: 'Over 200 tests with node:test · GitHub Actions: types, tests and build' } },
      { label: { it: 'Stato', en: 'Status' }, value: { it: 'Online su runebog.app · gratuito · sorgente pubblico con licenza non commerciale', en: 'Live at runebog.app · free · public source under a non-commercial licence' } },
    ],
    problem: {
      it: 'Durante una partita il master deve avere sotto mano luoghi, personaggi, quest e mostri, e mostrare ai giocatori solo ciò che hanno scoperto. Gli strumenti esistenti sono spesso in inglese, a pagamento o pensati per una sola scala di mappa. L’obiettivo era un diario unico che seguisse la campagna dal continente alla stanza, funzionasse anche senza rete e non perdesse mai il lavoro.',
      en: 'During a session the game master needs places, characters, quests and monsters at hand, and must show players only what they have discovered. Existing tools are often English-only, paid, or built around a single map scale. The goal was one journal that follows the campaign from continent to room, works offline and never loses work.',
    },
    solution: {
      it: 'Due applicazioni che condividono un solo formato. Il sito Next.js gestisce account, salvataggio su PostgreSQL, tavolo condiviso e pagine delle regole. L’editor delle mappe è JavaScript vanilla in moduli ES, senza framework, dipendenze o build: gira identico nel sito, offline come PWA e dentro l’app portable per Windows. Tutta la campagna è un unico JSON, uguale per esportazione, database e pagina.',
      en: 'Two applications sharing a single format. The Next.js site handles accounts, PostgreSQL saves, the shared table and the rules pages. The map editor is vanilla JavaScript in ES modules, with no framework, dependencies or build step: it runs the same in the site, offline as a PWA and inside the portable Windows app. A whole campaign is one JSON document, identical for export, the database and the page.',
    },
    features: [
      {
        title: { it: 'Mappe a bolle annidate', en: 'Nested bubble maps' },
        text: {
          it: 'Ogni luogo è una “bolla” che può contenerne altre, senza limite di profondità: una città contiene quartieri, un edificio contiene stanze. Collegamenti tipizzati, segnalini per quest, incontri e personaggi, e uno zoom indietro che allarga la campagna a posteriori.',
          en: 'Every place is a “bubble” that can contain others, with no depth limit: a city holds districts, a building holds rooms. Typed connections, markers for quests, encounters and characters, and a zoom-out that widens the campaign after the fact.',
        },
      },
      {
        title: { it: 'Piante giocabili', en: 'Playable floor plans' },
        text: {
          it: 'Muri, porte di vari tipi, griglia quadrata o a esagoni in scala, pavimenti dipinti con materiali e riva fra acqua e terra. Righello in metri, aree d’effetto e modalità combattimento con pedine e ordine d’iniziativa.',
          en: 'Walls, several kinds of doors, a scaled square or hex grid, painted floors with materials and shorelines between water and land. A ruler in metres, areas of effect and a combat mode with tokens and initiative order.',
        },
      },
      {
        title: { it: 'Tavolo per i giocatori', en: 'Player table' },
        text: {
          it: 'Un link segreto mostra ai giocatori solo ciò che il master ha rivelato, aggiornandosi da solo. Nell’app per Windows c’è anche un tavolo in rete locale: i telefoni inquadrano un QR e funziona senza Internet.',
          en: 'A secret link shows players only what the game master has revealed, updating on its own. The Windows app also offers a local network table: phones scan a QR code and it works without Internet access.',
        },
      },
      {
        title: { it: 'Regole e bestiario in italiano', en: 'Rules and monsters in Italian' },
        text: {
          it: 'Circa 330 schede mostro e dieci capitoli di regole dell’SRD 5.2.1, con ricerca e rimandi navigabili. Le schede si collegano agli incontri della mappa, dove si tengono i punti ferita durante il combattimento.',
          en: 'About 330 monster stat blocks and ten rules chapters from the SRD 5.2.1, with search and navigable cross-references. Stat blocks link to the map’s encounters, where hit points are tracked during combat.',
        },
      },
      {
        title: { it: 'Generatore di dungeon', en: 'Dungeon generator' },
        text: {
          it: 'Dungeon generati da un seed, quindi riproducibili: stanze, corridoi, muri, incontri bilanciati sul livello del gruppo e personaggi già all’ingresso. Il risultato entra nella campagna come una bolla qualsiasi.',
          en: 'Dungeons generated from a seed, so they are reproducible: rooms, corridors, walls, encounters balanced to the party’s level and characters waiting at the entrance. The result joins the campaign like any other bubble.',
        },
      },
      {
        title: { it: 'Quest, calendario e temi', en: 'Quests, calendar and themes' },
        text: {
          it: 'Diario delle quest con stati e filtri, calendario di gioco con scadenze ed eventi ricorrenti legati ai luoghi, checklist e scheda dei giocatori. Undici temi grafici, tutti controllati automaticamente per il contrasto WCAG.',
          en: 'A quest log with states and filters, an in-game calendar with deadlines and recurring events tied to places, checklists and a player sheet. Eleven visual themes, all checked automatically for WCAG contrast.',
        },
      },
    ],
    screenshots: [
      {
        src: '/projects/runebog/map.jpg', width: 1000, height: 633,
        alt: { it: 'Editor di Runebog con la campagna d’esempio: luoghi collegati da strade, un ponte e un passaggio segreto, segnalini di quest e personaggi, e pannello dei dettagli a destra.', en: 'Runebog editor with the example campaign: places connected by a road, a bridge and a secret passage, quest and character markers, and the details panel on the right.' },
        caption: { it: 'Mappa della campagna d’esempio', en: 'Example campaign map' },
      },
      {
        src: '/projects/runebog/monster-mobile.jpg', width: 390, height: 806,
        alt: { it: 'Scheda dell’aboleth da telefono: classe armatura, punti ferita, caratteristiche, sensi, lingue e primi tratti, in italiano.', en: 'The aboleth stat block on a phone: armour class, hit points, ability scores, senses, languages and first traits, in Italian.' },
        caption: { it: 'Scheda mostro da telefono', en: 'Monster stat block on a phone' },
      },
      {
        src: '/projects/runebog/dungeon.jpg', width: 1000, height: 633,
        alt: { it: 'Dungeon generato con undici stanze collegate da corridoi, e nel pannello il riepilogo di seed, livello del gruppo, creature e bottino.', en: 'A generated dungeon with eleven rooms linked by corridors, and a panel summarising the seed, party level, creatures and treasure.' },
        caption: { it: 'Dungeon generato da un seed', en: 'Dungeon generated from a seed' },
      },
    ],
    screenshotNote: {
      it: 'Schermate reali di runebog.app, ottobre 2026, con la campagna d’esempio. La scheda mostro include materiale del System Reference Document 5.2.1 di Wizards of the Coast LLC, disponibile su dndbeyond.com/srd con licenza Creative Commons Attribution 4.0. Runebog non è un prodotto ufficiale né affiliato.',
      en: 'Real screenshots of runebog.app, October 2026, using the example campaign. The stat block includes material from the System Reference Document 5.2.1 by Wizards of the Coast LLC, available at dndbeyond.com/srd under the Creative Commons Attribution 4.0 licence. Runebog is not an official or affiliated product.',
    },
    decisions: [
      {
        title: { it: 'Un solo JSON per tutto', en: 'One JSON for everything' },
        text: {
          it: 'La campagna ha la stessa forma nel file esportato, nella colonna JSONB del database e nella pagina. Non esiste una seconda rappresentazione da tenere allineata, e un modulo senza dipendenze definisce il contratto per entrambe le applicazioni.',
          en: 'A campaign has the same shape in the exported file, the database’s JSONB column and the page. There is no second representation to keep in sync, and a dependency-free module defines the contract for both applications.',
        },
      },
      {
        title: { it: 'Editor senza framework', en: 'A framework-free editor' },
        text: {
          it: 'L’editor è JavaScript vanilla con SVG scritto a mano e Pointer Events: nessuna dipendenza e nessun build step. Per questo lo stesso codice funziona nel sito, offline e nell’eseguibile Windows. È una scelta deliberata, non una mancanza.',
          en: 'The editor is vanilla JavaScript with hand-written SVG and Pointer Events: no dependencies and no build step. That is why the same code runs in the site, offline and in the Windows executable. It is a deliberate choice, not a gap.',
        },
      },
      {
        title: { it: 'Conflitti senza perdite', en: 'Conflicts without data loss' },
        text: {
          it: 'Ogni salvataggio dichiara la revisione da cui parte e la condizione sta dentro l’UPDATE: zero righe aggiornate significa conflitto. Con otto scritture concorrenti ne passa una sola. La copia locale si salva prima della richiesta e l’utente sceglie fra azioni esplicite, senza fusioni automatiche.',
          en: 'Every save declares the revision it starts from and the condition lives inside the UPDATE: zero rows updated means a conflict. With eight concurrent writes, only one gets through. The local copy is saved before the request and the user picks between explicit actions, with no automatic merging.',
        },
      },
      {
        title: { it: 'Il tavolo si costruisce sul server', en: 'The table is built on the server' },
        text: {
          it: 'Ai giocatori non arriva la campagna filtrata dal browser, ma una proiezione ricostruita sul server campo per campo: note del master assenti, passaggi segreti invisibili, porte segrete mostrate come muro. Gli aggiornamenti usano richieste condizionali con ETag.',
          en: 'Players do not receive the campaign filtered in the browser, but a projection rebuilt on the server field by field: no game master notes, hidden secret passages, secret doors drawn as walls. Updates use conditional requests with ETags.',
        },
      },
      {
        title: { it: 'Regole estratte dal PDF', en: 'Rules extracted from the PDF' },
        text: {
          it: 'Capitoli e schede mostro vengono da script propri che leggono il PDF ufficiale, dove il significato sta nei font e nei colori più che nel testo: titoli riconosciuti dal colore, tabelle ricostruite dalla geometria delle colonne. Ogni capitolo viene confrontato con il testo del PDF prima di essere pubblicato.',
          en: 'Chapters and stat blocks come from custom scripts that read the official PDF, where meaning lives in fonts and colours more than in the text: headings recognised by colour, tables rebuilt from column geometry. Each chapter is compared with the PDF text before publishing.',
        },
      },
    ],
    limits: {
      it: 'Runebog è un progetto personale gratuito, non un prodotto commerciale, e non ho dati pubblici su utenti o traffico. Il codice è pubblico con licenza PolyForm Noncommercial 1.0.0, che non consente l’uso commerciale; i contenuti SRD sono CC-BY-4.0. L’app per Windows è un eseguibile portable, non un’app da store.',
      en: 'Runebog is a free personal project, not a commercial product, and I have no public user or traffic data. The code is public under the PolyForm Noncommercial 1.0.0 licence, which does not allow commercial use; the SRD content is CC-BY-4.0. The Windows app is a portable executable, not a store app.',
    },
    links: {
      repo: 'https://github.com/Federico-Ordonselli/runebog-gm',
      demo: 'https://runebog.app',
    },
  },
  {
    slug: 'matchday',
    title: 'Matchday',
    art: 'matchday',
    eyebrow: { it: 'FULL STACK · DEMO TECNICA · v1.0.0', en: 'FULL STACK · TECHNICAL DEMO · v1.0.0' },
    headline: { it: 'Scommesse simulate, dati calcistici reali.', en: 'Simulated betting, real football data.' },
    intro: {
      it: 'Matchday è una piattaforma di scommesse sportive simulate: partite reali dei cinque principali campionati europei, quote generate dall’applicazione e crediti fittizi. L’ho progettata e rilasciata come monorepo TypeScript con sito React, API Express su PostgreSQL e backoffice Angular, su Vercel con Neon; il codice è stato scritto con Claude Code e ogni modifica è passata da una merge request.',
      en: 'Matchday is a simulated sports betting platform: real fixtures from Europe’s top five leagues, odds generated by the app and fictitious credits. I designed and released it as a TypeScript monorepo with a React site, an Express API on PostgreSQL and an Angular back-office, on Vercel with Neon; the code was written with Claude Code and every change went through a merge request.',
    },
    facts: [
      { label: { it: 'Ruolo', en: 'Role' }, value: { it: 'Progetto personale AI-assisted: progettazione, integrazione, revisione e rilascio', en: 'Personal AI-assisted project: design, integration, review and release' } },
      { label: { it: 'Stack', en: 'Stack' }, value: { it: 'React · Angular · Express · TypeScript · PostgreSQL · Drizzle · Zod', en: 'React · Angular · Express · TypeScript · PostgreSQL · Drizzle · Zod' } },
      { label: { it: 'Qualità', en: 'Quality' }, value: { it: 'Vitest · React Testing Library · Cypress · GitLab CI', en: 'Vitest · React Testing Library · Cypress · GitLab CI' } },
      { label: { it: 'Stato', en: 'Status' }, value: { it: 'Release v1.0.0 su Vercel e Neon · crediti fittizi', en: 'v1.0.0 released on Vercel and Neon · fictitious credits' } },
    ],
    problem: {
      it: 'L’obiettivo era mostrare un’applicazione completa, non solo un’interfaccia: dati da un fornitore esterno con limiti di utilizzo, regole che devono reggere a ogni richiesta, un pannello per gli operatori e un rilascio controllato. Un sistema di scommesse simulate mette insieme questi vincoli senza usare denaro reale.',
      en: 'The goal was to show a complete application, not just an interface: data from an external provider with usage limits, rules that must hold on every request, an operator panel and a controlled release. A simulated betting system brings these constraints together without any real money.',
    },
    solution: {
      it: 'Tre applicazioni nello stesso repository, con tipi condivisi. L’API integra football-data.org, genera e salva le quote e registra le puntate. Il sito pubblico mostra partite, quote e schedina. Il backoffice permette agli operatori di intervenire su quote ed eventi.',
      en: 'Three applications in one repository, with shared types. The API integrates football-data.org, generates and stores odds, and records bets. The public site shows fixtures, odds and the bet slip. The back-office lets operators manage odds and events.',
    },
    features: [
      {
        title: { it: 'Dati calcistici', en: 'Football data' },
        text: {
          it: 'Competizioni, partite e classifiche da football-data.org. La chiave resta sul server, le risposte sono validate con Zod e convertite in tipi interni, e una cache aiuta a rispettare i limiti del piano gratuito. Se il fornitore è lento o limita le richieste, l’API serve l’ultima risposta in cache invece di un errore.',
          en: 'Competitions, fixtures and standings from football-data.org. The key stays on the server, responses are validated with Zod and mapped to internal types, and a cache helps respect the free tier’s limits. If the provider is slow or rate-limits a refresh, the API serves the last cached response instead of an error.',
        },
      },
      {
        title: { it: 'Quote simulate', en: 'Simulated odds' },
        text: {
          it: 'Un modello deterministico per il mercato 1X2: punti per partita, vantaggio casalingo, probabilità di pareggio che cala con la differenza di forza e margine del 5%. È una funzione pura, quindi facile da testare.',
          en: 'A deterministic model for the 1X2 market: points per game, home advantage, a draw probability that falls as the strength gap widens, and a 5% margin. It is a pure function, so it is easy to test.',
        },
      },
      {
        title: { it: 'Sito pubblico', en: 'Public site' },
        text: {
          it: 'Serie A, Premier League, Liga, Bundesliga e Ligue 1, con prossime partite e dettaglio con le quote. Layout mobile first con CSS Modules e variabili di design, stati di caricamento, errore, lista vuota e pagina non trovata.',
          en: 'Serie A, Premier League, La Liga, Bundesliga and Ligue 1, with upcoming fixtures and a match page with odds. Mobile-first layout with CSS Modules and design tokens, plus loading, error, empty and not-found states.',
        },
      },
      {
        title: { it: 'Schedina e limite settimanale', en: 'Bet slip and weekly limit' },
        text: {
          it: 'Selezioni, quota totale, vincita potenziale e un limite settimanale in crediti fittizi. All’invio l’API ricontrolla le quote e registra la puntata in una transazione che verifica il credito residuo.',
          en: 'Selections, total odds, potential payout and a weekly limit in fictitious credits. On submission the API rechecks the odds and records the bet in a transaction that verifies the remaining allowance.',
        },
      },
      {
        title: { it: 'Backoffice Angular', en: 'Angular back-office' },
        text: {
          it: 'Accesso operatore per sospendere e riattivare partite, impostare quote manuali e consultare utenti fittizi, puntate e limite residuo. Sessioni in PostgreSQL, cookie HttpOnly e token CSRF per le modifiche.',
          en: 'Operator sign-in to suspend and resume fixtures, set manual odds and review fictitious users, bets and remaining limits. Sessions in PostgreSQL, an HttpOnly cookie and a CSRF token for changes.',
        },
      },
      {
        title: { it: 'Test e accessibilità', en: 'Tests and accessibility' },
        text: {
          it: 'Test unitari e di componente per logica, API e interfacce; due flussi Cypress per navigazione, schedina, puntata e blocco del limite, con risposte fisse. Struttura semantica, tastiera, focus nella schedina e annunci per caricamenti ed errori.',
          en: 'Unit and component tests for logic, API and interfaces; two Cypress flows for browsing, the bet slip, placing a bet and the limit block, using fixed responses. Semantic structure, keyboard support, focus management in the bet slip and announcements for loading and errors.',
        },
      },
    ],
    screenshots: [
      {
        src: '/projects/matchday/fixtures.png', width: 1000, height: 633,
        alt: { it: 'Elenco delle prossime partite di Serie A, con i campionati selezionabili in alto e il pulsante della schedina.', en: 'Upcoming Serie A fixtures, with the league selector at the top and the bet slip button.' },
        caption: { it: 'Prossime partite per campionato', en: 'Upcoming fixtures by league' },
      },
      {
        src: '/projects/matchday/bet-slip.png', width: 384, height: 633,
        alt: { it: 'Schedina con limite settimanale di 20 crediti, due selezioni, quota totale 6,72 e puntata di 10 crediti.', en: 'Bet slip with a 20-credit weekly limit, two selections, total odds of 6.72 and a 10-credit stake.' },
        caption: { it: 'Schedina e limite settimanale', en: 'Bet slip and weekly limit' },
      },
      {
        src: '/projects/matchday/backoffice-odds.png', width: 1000, height: 633,
        alt: { it: 'Backoffice: gestione delle quote di una partita, con i pulsanti per modificare i prezzi e sospendere l’evento.', en: 'Back-office: odds management for one fixture, with buttons to edit prices and suspend the event.' },
        caption: { it: 'Backoffice: gestione delle quote', en: 'Back-office: odds management' },
      },
    ],
    screenshotNote: {
      it: 'Schermate reali dell’applicazione, acquisite con dati di prova e non con dati live di football-data.org.',
      en: 'Real screenshots of the app, captured with test data rather than live football-data.org data.',
    },
    decisions: [
      {
        title: { it: 'API a livelli', en: 'Layered API' },
        text: {
          it: 'Route HTTP, servizi di business, client esterni e repository del database hanno responsabilità distinte. Le dipendenze esterne vengono iniettate o sostituite nei test.',
          en: 'HTTP routes, business services, external clients and database repositories each have a distinct responsibility. External dependencies are injected or replaced in tests.',
        },
      },
      {
        title: { it: 'Contratti coerenti', en: 'Consistent contracts' },
        text: {
          it: 'Tipi TypeScript condivisi tra le applicazioni, validazione Zod ai confini dell’API e un unico formato per risposte ed errori. Il resto del codice non dipende dal formato del fornitore.',
          en: 'TypeScript types shared across the apps, Zod validation at the API boundary and a single format for responses and errors. The rest of the code does not depend on the provider’s format.',
        },
      },
      {
        title: { it: 'Stato persistente dove serve', en: 'Persistent state where it matters' },
        text: {
          it: 'Quote offerte, puntate, limiti e sessioni operatore sono in PostgreSQL e sopravvivono al riavvio delle funzioni serverless. Una quota salvata conserva il prezzo mostrato all’utente e le modifiche del backoffice. Le migrazioni partono all’avvio dell’API sotto un advisory lock di Postgres, così più avvii a freddo simultanei non le applicano due volte.',
          en: 'Offered odds, bets, limits and operator sessions live in PostgreSQL and survive serverless restarts. A stored price keeps what the user was shown, along with back-office changes. Migrations run at API startup under a Postgres advisory lock, so several simultaneous cold starts never apply them twice.',
        },
      },
      {
        title: { it: 'Stessa origine per le API', en: 'Same-origin API calls' },
        text: {
          it: 'Sito e backoffice chiamano /api sul proprio dominio e Vercel inoltra le richieste all’API: niente CORS e cookie di prima parte. Neon usa una connessione pooled per le richieste e una diretta per le migrazioni.',
          en: 'The site and back-office call /api on their own domain and Vercel forwards requests to the API: no CORS and first-party cookies. Neon uses a pooled connection for requests and a direct one for migrations.',
        },
      },
      {
        title: { it: 'Workflow AI-assisted e rilascio', en: 'AI-assisted workflow and release' },
        text: {
          it: 'Sviluppo con Claude Code su branch feature/*, con revisione in merge request e pipeline GitLab obbligatorie per lint, tipi, test, build e sicurezza. Preview separata da Production, verifica manuale dei flussi principali e tag v1.0.0.',
          en: 'Development with Claude Code on feature/* branches, with review in merge requests and required GitLab pipelines for linting, types, tests, builds and security. Preview separate from Production, manual checks of the main flows and a v1.0.0 tag.',
        },
      },
    ],
    limits: {
      it: 'Matchday è una demo tecnica, non un prodotto commerciale: usa solo crediti fittizi. Il sito pubblico usa un unico account dimostrativo condiviso, senza registrazione; l’autenticazione è prevista solo per gli operatori del backoffice.',
      en: 'Matchday is a technical demo, not a commercial product: it only uses fictitious credits. The public site uses a single shared demo account with no sign-up; authentication exists only for back-office operators.',
    },
    links: {
      repo: 'https://gitlab.com/Federico-Ordonselli/matchday',
      // Dominio di Production del sito pubblico: stabile e senza Vercel Authentication.
      demo: 'https://matchday-web-plum.vercel.app/',
    },
  },
  {
    slug: 'vagabondando',
    title: 'Vagabondando',
    art: 'trekking',
    eyebrow: { it: 'SITO CLIENTE · NEXT.JS + SANITY · ONLINE', en: 'CLIENT SITE · NEXT.JS + SANITY · LIVE' },
    headline: { it: 'Diari di viaggio, scritti dalla cliente.', en: 'Travel journals, written by the client.' },
    intro: {
      it: 'Vagabondando è il sito di un’accompagnatrice che organizza trekking e viaggi in piccoli gruppi. Chi arriva legge com’è andato un viaggio e, se gli viene voglia di partire, trova accanto al racconto un modo semplice per contattarla. L’ho progettato e pubblicato con Next.js 16 e Sanity, sviluppandolo con Claude Code: ho guidato io prodotto, architettura, revisione e infrastruttura.',
      en: 'Vagabondando is the website of a guide who organises hikes and small-group trips. Visitors read how a trip went and, if they feel like joining, find a simple way to get in touch right next to the story. I designed and shipped it with Next.js 16 and Sanity, developing it with Claude Code: I led the product, architecture, review and infrastructure.',
    },
    facts: [
      { label: { it: 'Ruolo', en: 'Role' }, value: { it: 'Progetto per una cliente, AI-assisted: prodotto, architettura, revisione e infrastruttura', en: 'Client project, AI-assisted: product, architecture, review and infrastructure' } },
      { label: { it: 'Stack', en: 'Stack' }, value: { it: 'Next.js 16 · React 19 · TypeScript · Tailwind 4 · Sanity · next-intl · Resend · Upstash Redis', en: 'Next.js 16 · React 19 · TypeScript · Tailwind 4 · Sanity · next-intl · Resend · Upstash Redis' } },
      { label: { it: 'Qualità', en: 'Quality' }, value: { it: 'Vitest, 102 test · GitHub Actions: tipi, lint, test e build', en: 'Vitest, 102 tests · GitHub Actions: types, lint, tests and build' } },
      { label: { it: 'Stato', en: 'Status' }, value: { it: 'Online su vagabondando.site · demo non indicizzata in attesa del lancio', en: 'Live at vagabondando.site · non-indexed demo awaiting launch' } },
    ],
    problem: {
      it: 'La cliente aveva un sito WordPress e voleva raccontare i suoi viaggi e ricevere richieste di contatto, senza dipendere da qualcuno per ogni modifica. Ne sono nati tre vincoli: ciò che cambia spesso deve essere modificabile da un’interfaccia visuale; nessun guasto deve far perdere in silenzio una richiesta, perché per lei è un cliente; i costi devono restare a zero finché il sito non porta lavoro.',
      en: 'The client had a WordPress site and wanted to share her trips and receive enquiries without depending on someone for every change. That set three constraints: anything that changes often must be editable through a visual interface; no failure may silently lose an enquiry, because to her it is a customer; and costs must stay at zero until the site brings in work.',
    },
    solution: {
      it: 'Pagine statiche rigenerate ogni minuto: i racconti stanno in Sanity e la cliente li scrive dallo Studio integrato nel sito. Il form contatti è una Server Action che invia una sola email alla cliente, con il visitatore come destinatario della risposta: niente database e nessun archivio di dati personali. Le regole del dominio vivono in moduli TypeScript puri e testati; pagine e action si limitano a chiamarli.',
      en: 'Static pages regenerated every minute: stories live in Sanity and the client writes them in the Studio built into the site. The contact form is a Server Action that sends a single email to the client, with the visitor as the reply-to address: no database and no archive of personal data. Domain rules live in pure, tested TypeScript modules; pages and actions just call them.',
    },
    features: [
      {
        title: { it: 'Diario di viaggio', en: 'Travel journal' },
        text: {
          it: 'Elenco con il racconto più recente in evidenza; ogni racconto ha capolettera, data, luogo, il link al post Instagram da cui è nato e i racconti precedente e successivo. Un diario pubblicato compare sul sito entro un minuto, senza deploy.',
          en: 'A list with the latest story featured; each story has a drop cap, date, place, a link to the Instagram post it came from, and the previous and next stories. A newly published journal appears on the site within a minute, with no deploy.',
        },
      },
      {
        title: { it: 'Contenuti in mano alla cliente', en: 'Content in the client’s hands' },
        text: {
          it: 'Sanity Studio è integrato su /studio: diari, foto della home, profilo Instagram e informativa privacy si cambiano senza toccare codice. Ogni campo ha versione italiana e inglese; se manca l’inglese, il racconto resta leggibile in italiano.',
          en: 'Sanity Studio is built in at /studio: journals, the home photo, the Instagram profile and the privacy policy change without touching code. Every field has an Italian and English version; if the English is missing, the story stays readable in Italian.',
        },
      },
      {
        title: { it: 'Form contatti protetto', en: 'Protected contact form' },
        text: {
          it: 'Quattro controlli prima dell’invio, dal più economico: Vercel BotID, un campo trappola per i bot, validazione dei campi e un limite di 3 invii ogni 10 minuti su Upstash Redis. La logica è coperta da 28 test e un errore non viene mai mostrato come “inviato”.',
          en: 'Four checks before sending, cheapest first: Vercel BotID, a honeypot field, field validation and a limit of 3 submissions every 10 minutes on Upstash Redis. The logic is covered by 28 tests, and a failure is never shown as “sent”.',
        },
      },
      {
        title: { it: 'Due lingue, due temi', en: 'Two languages, two themes' },
        text: {
          it: 'Italiano e inglese con next-intl e la lingua nell’URL, plurali tradotti, date localizzate e pagine d’errore in entrambe le lingue. Tema chiaro e scuro, applicato prima del caricamento di React per evitare il lampo di colore sbagliato.',
          en: 'Italian and English with next-intl and the language in the URL, translated plurals, localised dates and error pages in both languages. Light and dark themes, applied before React loads to avoid a flash of the wrong colours.',
        },
      },
      {
        title: { it: 'SEO e immagini', en: 'SEO and images' },
        text: {
          it: 'Canonical, hreflang, Open Graph e sitemap localizzata nascono dalla stessa logica testata. Le immagini arrivano dalla CDN di Sanity nella larghezza adatta allo schermo, con lo spazio riservato in anticipo perché il testo non salti.',
          en: 'Canonical URLs, hreflang, Open Graph and a localised sitemap come from the same tested logic. Images are served by Sanity’s CDN at the right width for the screen, with space reserved in advance so the text does not jump.',
        },
      },
      {
        title: { it: 'Migrazione da WordPress', en: 'WordPress migration' },
        text: {
          it: 'Uno script porta in Sanity gli 8 diari e la privacy del vecchio sito, convertendo l’HTML in Portable Text. Di default mostra solo cosa farebbe, si può rilanciare senza creare doppioni e non sovrascrive i testi già curati dalla cliente.',
          en: 'A script moves the old site’s 8 journals and privacy policy into Sanity, converting HTML to Portable Text. By default it only shows what it would do, it can be rerun without creating duplicates, and it never overwrites text the client has already edited.',
        },
      },
    ],
    screenshots: [
      {
        src: '/projects/vagabondando/home.jpg', width: 1000, height: 633,
        alt: { it: 'Home di Vagabondando: foto di un gruppo in un prato di montagna, titolo “Cammina dove finisce la strada” e pulsanti per scrivere e leggere il diario.', en: 'Vagabondando home page: a group in a mountain meadow, the headline “Cammina dove finisce la strada” and buttons to get in touch and read the journal.' },
        caption: { it: 'Home con la foto principale', en: 'Home page with the hero photo' },
      },
      {
        src: '/projects/vagabondando/story-mobile.jpg', width: 390, height: 844,
        alt: { it: 'Racconto sul Serengeti visto da telefono, con foto di elefanti, data, luogo e primo paragrafo con capolettera.', en: 'A Serengeti story on a phone, with a photo of elephants, date, place and an opening paragraph with a drop cap.' },
        caption: { it: 'Un racconto da telefono', en: 'A story on a phone' },
      },
      {
        src: '/projects/vagabondando/story-dark.jpg', width: 1000, height: 633,
        alt: { it: 'Racconto sui Monti Lucretili in tema scuro, con accanto il riquadro contatti: pulsante Instagram e form con nome ed email.', en: 'A Monti Lucretili story in dark mode, next to the contact box: an Instagram button and a name and email form.' },
        caption: { it: 'Racconto e contatti, tema scuro', en: 'Story and contact box, dark mode' },
      },
    ],
    screenshotNote: {
      it: 'Schermate del sito in produzione, ottobre 2026. Foto e racconti sono della cliente.',
      en: 'Screenshots of the live site, October 2026. Photos and stories belong to the client.',
    },
    decisions: [
      {
        title: { it: 'Il sito non scrive mai al visitatore', en: 'The site never emails the visitor' },
        text: {
          it: 'Nessuna email di conferma e nessun archivio: arriva una sola email nella casella della cliente, che risponde direttamente a chi ha scritto. Così spariscono un database, un archivio di dati personali da proteggere e il rischio che il form venga usato per spedire posta a terzi.',
          en: 'No confirmation emails and no archive: a single email reaches the client’s inbox, and she replies straight to the sender. That removes a database, an archive of personal data to protect, and the risk of the form being abused to send mail to third parties.',
        },
      },
      {
        title: { it: 'Logica pura, adattatori sottili', en: 'Pure logic, thin adapters' },
        text: {
          it: 'La funzione che gestisce il form riceve come parametri BotID, rate limit, lettura dal CMS e invio email. Nei test si sostituiscono con versioni finte, quindi ogni caso limite si prova senza rete né chiavi.',
          en: 'The function that handles the form receives BotID, the rate limiter, CMS reads and email sending as parameters. Tests replace them with fakes, so every edge case runs without network access or keys.',
        },
      },
      {
        title: { it: 'Bloccare in modo visibile', en: 'Block visibly' },
        text: {
          it: 'Se BotID scambia una persona per un bot, la pagina lo dice e propone Instagram invece di fingere un invio riuscito: una richiesta persa in silenzio è un cliente perso. Il finto successo resta solo per il campo trappola, che una persona non può compilare.',
          en: 'If BotID mistakes a person for a bot, the page says so and suggests Instagram instead of faking a successful send: an enquiry lost in silence is a lost customer. A fake success is kept only for the honeypot, which a person cannot fill in.',
        },
      },
      {
        title: { it: '“Non esiste” non è “non risponde”', en: '“Missing” is not “unavailable”' },
        text: {
          it: 'Un guasto temporaneo di Sanity produce una pagina d’errore con “Riprova”, non un 404. Un 404 direbbe a Google di togliere la pagina dall’indice per un problema di mezz’ora.',
          en: 'A temporary Sanity outage produces an error page with “Try again”, not a 404. A 404 would tell Google to drop the page from its index over a half-hour problem.',
        },
      },
      {
        title: { it: 'Da e-commerce a vetrina in un giorno', en: 'From e-commerce to showcase in a day' },
        text: {
          it: 'La prima versione vendeva viaggi con Stripe Checkout, acconto e saldo, PostgreSQL con SELECT … FOR UPDATE contro l’overbooking e webhook idempotenti. Quando la cliente ha scelto di non incassare online, quella versione è finita nel tag git v1-stripe e il sottosistema dei pagamenti è stato tolto in un giorno, senza riscrivere contenuti, lingue o design.',
          en: 'The first version sold trips with Stripe Checkout, deposits and balances, PostgreSQL with SELECT … FOR UPDATE against overbooking, and idempotent webhooks. When the client chose not to take payments online, that version went into the v1-stripe git tag and the payment subsystem was removed in a day, without rewriting content, languages or design.',
        },
      },
    ],
    limits: {
      it: 'Al 1° ottobre 2026 Vagabondando è online come demo non indicizzata dai motori di ricerca, in attesa che la cliente lo adotti: non ci sono ancora utenti reali né dati di traffico. La versione con pagamenti è stata completata e verificata con le chiavi di test di Stripe, mai con incassi reali. Il codice è in un repository privato.',
      en: 'As of 1 October 2026, Vagabondando is live as a demo hidden from search engines while it awaits the client’s adoption: there are no real users or traffic figures yet. The payments version was completed and verified with Stripe test keys, never with real charges. The code is in a private repository.',
    },
    links: {
      demo: 'https://vagabondando.site',
    },
  },
  {
    slug: 'studybuddy',
    title: 'StudyBuddy v2',
    art: 'studybuddy',
    eyebrow: { it: 'AI LOCALE · RAG · NEXT.JS + OLLAMA · IN USO', en: 'LOCAL AI · RAG · NEXT.JS + OLLAMA · IN DAILY USE' },
    headline: { it: 'Un tutor che conosce il tuo corso.', en: 'A tutor that knows your course.' },
    intro: {
      it: 'StudyBuddy trasforma i corsi online scaricati (video, trascrizioni, PDF e letture) in tutor personali: rispondono con il metodo socratico citando il minuto esatto del video, generano quiz e flashcard con ripetizione spaziata, riassunti e mappe concettuali esplorabili. Tutto gira su una GPU consumer, senza che nessun dato esca dal computer. È un progetto personale AI-assisted: ho deciso io architettura, modelli e prodotto, con il codice scritto insieme a Claude Code.',
      en: 'StudyBuddy turns downloaded online courses (videos, transcripts, PDFs and readings) into personal tutors: they answer Socratically, citing the exact minute of the video, and generate quizzes, spaced-repetition flashcards, summaries and explorable concept maps. Everything runs on a consumer GPU, and no data leaves the computer. It is a personal AI-assisted project: I chose the architecture, models and product, with the code written together with Claude Code.',
    },
    facts: [
      { label: { it: 'Ruolo', en: 'Role' }, value: { it: 'Progetto personale AI-assisted: architettura, scelta dei modelli e prodotto', en: 'Personal AI-assisted project: architecture, model selection and product' } },
      { label: { it: 'Stack', en: 'Stack' }, value: { it: 'Next.js 16 · React 19 · TypeScript · SQLite (Drizzle, sqlite-vec, FTS5) · Ollama · Transformers.js · Docker', en: 'Next.js 16 · React 19 · TypeScript · SQLite (Drizzle, sqlite-vec, FTS5) · Ollama · Transformers.js · Docker' } },
      { label: { it: 'Scala', en: 'Scale' }, value: { it: '783 documenti da 9 corsi · 2.321 chunk · ~3–6 s per risposta su una RTX 4080 Super', en: '783 documents from 9 courses · 2,321 chunks · ~3–6 s per answer on an RTX 4080 Super' } },
      { label: { it: 'Qualità e stato', en: 'Quality and status' }, value: { it: 'Oltre 80 file di test con node:test · set di eval dei prompt · in uso quotidiano, codice pubblico su GitHub', en: 'Over 80 test files with node:test · prompt eval sets · in daily use, public code on GitHub' } },
    ],
    problem: {
      it: 'I corsi online sono pieni di materiale ma poveri di interazione: ore di video e centinaia di file, e quando hai un dubbio ritrovare dove se ne parlava è lento. Gli assistenti AI generalisti non sanno cosa dice il tuo corso, inventano dettagli e chiedono di caricare il materiale su servizi esterni. Volevo un compagno di studio che risponda solo in base al corso citando le fonti, mi faccia ragionare invece di darmi la soluzione e programmi il ripasso, senza abbonamenti né API a consumo.',
      en: 'Online courses are full of material but short on interaction: hours of video and hundreds of files, and when you have a doubt, finding where it was covered is slow. General AI assistants do not know what your course says, make up details and ask you to upload the material to external services. I wanted a study companion that answers only from the course, cites its sources, makes me reason instead of handing me the answer and schedules my reviews, with no subscriptions or pay-per-use APIs.',
    },
    solution: {
      it: 'Un comando di ingestion legge la cartella del corso, spezza trascrizioni, letture e PDF in passaggi che ricordano il proprio minuto di video, e li indicizza in un unico file SQLite. A ogni domanda una ricerca ibrida (semantica e per parole chiave) trova 20 candidati, un cross-encoder su GPU tiene i 6 migliori, e un modello da 12B in locale risponde usando solo quelli. Ogni chiamata ai modelli passa da un livello unico che assegna a ciascun compito il suo modello.',
      en: 'An ingestion command reads the course folder, splits transcripts, readings and PDFs into passages that remember their minute in the video, and indexes them in a single SQLite file. For each question a hybrid search (semantic and keyword) finds 20 candidates, a cross-encoder on the GPU keeps the best 6, and a local 12B model answers using only those. Every model call goes through a single layer that assigns each task its own model.',
    },
    features: [
      {
        title: { it: 'Tutor socratico con citazioni', en: 'Socratic tutor with citations' },
        text: {
          it: 'Il tutor non dà la risposta: conferma, aggiunge un pezzo e rilancia con una domanda. Ogni risposta mostra fonti numerate; un clic su una trascrizione apre il video integrato esattamente al minuto in cui il docente ne parla. Funziona anche con domande in italiano su materiale in inglese.',
          en: 'The tutor does not give the answer: it confirms, adds a piece and asks the next question. Every answer shows numbered sources; clicking a transcript opens the built-in player at the exact minute the instructor covers it. It also works with questions in Italian on English material.',
        },
      },
      {
        title: { it: 'Quiz valutati da un LLM', en: 'LLM-graded quizzes' },
        text: {
          it: 'Dato un argomento, il modello genera una domanda a scelta multipla con un JSON schema imposto. Un secondo prompt fa da giudice: voto da 0 a 5 e spiegazione ancorata al testo del corso.',
          en: 'Given a topic, the model generates a multiple-choice question constrained by a JSON schema. A second prompt acts as the judge: a 0–5 grade and an explanation anchored to the course text.',
        },
      },
      {
        title: { it: 'Ripasso con SM-2', en: 'Spaced repetition with SM-2' },
        text: {
          it: 'Le flashcard nascono da un argomento o da un concetto della mappa. Rispondi a parole tue, l’LLM valuta e l’algoritmo SM-2, lo stesso alla base di Anki, decide quando riproporre la carta.',
          en: 'Flashcards come from a topic or a concept on the map. You answer in your own words, the LLM grades it, and the SM-2 algorithm, the one behind Anki, decides when to show the card again.',
        },
      },
      {
        title: { it: 'Mappe concettuali esplorabili', en: 'Explorable concept maps' },
        text: {
          it: 'Il modello propone concetti e relazioni, ognuno con definizione, esempi e fonti. Con un doppio clic si entra in una bolla e il sotto-livello viene generato dal materiale, riusando i concetti già presenti. Le modifiche dell’AI sono comandi atomici: annulla e ripeti funzionano anche su di esse.',
          en: 'The model proposes concepts and relations, each with a definition, examples and sources. Double-clicking enters a bubble and the sub-level is generated from the material, reusing concepts already on the map. AI edits are atomic commands, so undo and redo work on them too.',
        },
      },
      {
        title: { it: 'Riassunti e slide', en: 'Summaries and slides' },
        text: {
          it: 'I riassunti procedono a blocchi e poi sintetizzano il tutto (map-reduce), così anche un intero modulo entra nel contesto del modello. Le slide hanno illustrazioni SVG disegnate dal modello in locale.',
          en: 'Summaries work in blocks and then combine them (map-reduce), so even a whole module fits in the model’s context. Slides come with SVG illustrations drawn by the local model.',
        },
      },
      {
        title: { it: 'Libreria e import guidato', en: 'Library and guided import' },
        text: {
          it: 'L’app analizza in sola lettura la cartella dei corsi, distingue corsi e specializzazioni e mostra un’anteprima modificabile prima di scrivere sul database. L’import gira in background; grazie a un hash per file salta quelli invariati, e i pochi video senza sottotitoli vengono trascritti da Whisper.',
          en: 'The app scans the courses folder read-only, tells courses apart from specialisations and shows an editable preview before writing to the database. Import runs in the background; a per-file hash lets it skip unchanged files, and the few videos without subtitles are transcribed by Whisper.',
        },
      },
    ],
    shotLayout: 'grid',
    screenshots: [
      {
        src: '/projects/studybuddy/concept-map.jpg', width: 1200, height: 750,
        alt: { it: 'Mappa concettuale su React: bolle collegate da relazioni come “include” e “vincolano”, con la scheda del concetto useEffect aperta a destra con definizione, esempi e collegamenti.', en: 'A concept map about React: bubbles linked by relations such as “include” and “constrain”, with the useEffect concept card open on the right showing its definition, examples and links.' },
        caption: { it: 'Mappa concettuale e scheda del concetto', en: 'Concept map and concept card' },
      },
      {
        src: '/projects/studybuddy/concept-map-level.jpg', width: 1200, height: 750,
        alt: { it: 'Dentro la bolla useEffect: sotto-concetti generati dal materiale, come Dependency Array e Cleanup Function, con pillole tratteggiate che rimandano ad altri livelli.', en: 'Inside the useEffect bubble: sub-concepts generated from the material, such as Dependency Array and Cleanup Function, with dashed pills pointing to other levels.' },
        caption: { it: 'Dentro una bolla: il sotto-livello', en: 'Inside a bubble: the sub-level' },
      },
      {
        src: '/projects/studybuddy/socratic-tutor.jpg', width: 888, height: 900,
        alt: { it: 'Il tutor socratico: il video della lezione, sfocato, aperto al minuto 4:20 sopra una domanda su useEffect e la risposta del tutor, che rilancia con una domanda.', en: 'The Socratic tutor: the lesson video, blurred, opened at 4:20 above a question about useEffect and the tutor’s reply, which answers with a question.' },
        caption: { it: 'Una citazione apre il video al minuto giusto', en: 'A citation opens the video at the right minute' },
      },
      {
        src: '/projects/studybuddy/quiz.jpg', width: 888, height: 880,
        alt: { it: 'Quiz su Flexbox e Grid con quattro opzioni, sei fonti con timestamp e la valutazione finale con qualità SM-2 5 su 5.', en: 'A quiz on Flexbox and Grid with four options, six timestamped sources and the final grading with SM-2 quality 5 out of 5.' },
        caption: { it: 'Quiz con fonti e valutazione', en: 'Quiz with sources and grading' },
      },
    ],
    screenshotNote: {
      it: 'Output reali dell’app, generati in locale sul materiale di un percorso di corsi front-end, ottobre 2026. Video, nome del corso e percorsi dei file sono sfocati per rispetto dei diritti sul materiale.',
      en: 'Real app output, generated locally from a front-end course series, October 2026. Videos, the course name and file paths are blurred out of respect for the rights to the material.',
    },
    decisions: [
      {
        title: { it: 'Ricerca ibrida, fusa per posizione', en: 'Hybrid search, fused by rank' },
        text: {
          it: 'La ricerca semantica sbaglia sui termini esatti come useEffect; quella per parole chiave non capisce una domanda in italiano su materiale inglese. Uso entrambe (sqlite-vec e BM25 su FTS5) e le fondo con Reciprocal Rank Fusion, che unisce le liste per posizione e non deve confrontare punteggi incomparabili.',
          en: 'Semantic search misses exact terms like useEffect; keyword search does not understand an Italian question on English material. I use both (sqlite-vec and BM25 on FTS5) and merge them with Reciprocal Rank Fusion, which combines the lists by rank and never has to compare incompatible scores.',
        },
      },
      {
        title: { it: 'Il contesto tagliato in silenzio', en: 'Context silently cut off' },
        text: {
          it: 'Ollama usa 4.096 token di contesto di default e, quando il prompt è più lungo, ne taglia l’inizio: proprio i passaggi del corso. Ho portato il contesto a 16k in modo esplicito.',
          en: 'Ollama defaults to a 4,096-token context and, when the prompt is longer, cuts off its beginning: exactly the course passages. I set the context to 16k explicitly.',
        },
      },
      {
        title: { it: 'Reranker da 13 secondi a 0,6', en: 'Reranker from 13 seconds to 0.6' },
        text: {
          it: 'Senza troncamento, il padding al documento più lungo portava il cross-encoder a 13 secondi e 13 GB di RAM. Con batch da 8 e al massimo 512 token scende a 0,6 s su GPU. Su GPU i pesi int8 sono risultati più lenti degli fp16, perché molti operatori interi non hanno kernel CUDA e tornano sulla CPU.',
          en: 'Without truncation, padding to the longest document pushed the cross-encoder to 13 seconds and 13 GB of RAM. With batches of 8 and at most 512 tokens it drops to 0.6 s on the GPU. On the GPU, int8 weights turned out slower than fp16, because many integer operators have no CUDA kernels and fall back to the CPU.',
        },
      },
      {
        title: { it: 'Un voto non valido non azzera una carta', en: 'An invalid grade never resets a card' },
        text: {
          it: 'Se il giudice LLM produce un output non valido anche dopo un nuovo tentativo, il sistema segnala un errore invece di registrare zero. Per SM-2 uno zero significa ricominciare da capo una carta già imparata.',
          en: 'If the LLM judge returns invalid output even after a retry, the system reports an error instead of recording a zero. For SM-2, a zero means starting a card you already know from scratch.',
        },
      },
      {
        title: { it: 'Prompt misurati, non a sensazione', en: 'Prompts measured, not guessed' },
        text: {
          it: 'Ogni modifica a un prompt si rigira su un set di casi fissi con verdetti rivisti a mano: accordo esatto, accordo entro un livello e matrice di confusione, salvati per versione del prompt. Così il giudice delle flashcard è passato da un voto 0–5 a un verdetto che elenca cosa la domanda richiede e cosa manca nella risposta.',
          en: 'Every prompt change is rerun on a fixed set of cases with hand-reviewed verdicts: exact agreement, agreement within one level and a confusion matrix, saved per prompt version. That is how the flashcard judge moved from a 0–5 score to a verdict that lists what the question requires and what the answer is missing.',
        },
      },
      {
        title: { it: 'Un’app locale va protetta lo stesso', en: 'A local app still needs protecting' },
        text: {
          it: 'Un sito malevolo può puntare il proprio dominio a 127.0.0.1 o inviare richieste cross-site a un server locale. Le API accettano solo host locali e scritture JSON, che obbligano il browser a un controllo CORS preventivo; i percorsi restano nella home e il server video serve solo file indicizzati.',
          en: 'A malicious site can point its domain at 127.0.0.1 or send cross-site requests to a local server. The APIs accept only local hosts and JSON writes, which force a CORS preflight; paths stay inside the home folder, and the video server only serves indexed files.',
        },
      },
    ],
    limits: {
      it: 'Al 26 ottobre 2026 StudyBuddy v2 è in uso quotidiano e cresce per fasi, ciascuna con spec, eval e report. È un’app single-user e solo locale per scelta, senza autenticazione né sincronizzazione. La logica è coperta da test che girano senza Ollama e i prompt principali hanno un set di valutazione, ma la qualità del retrieval non è ancora misurata. Le illustrazioni SVG di un modello da 12B sono semplici e a volte imprecise, e le opzioni dei quiz possono riprendere frasi in inglese del materiale. Il codice è pubblico con licenza MIT, tranne il motore delle mappe, che resta sotto PolyForm Noncommercial.',
      en: 'As of 26 October 2026, StudyBuddy v2 is in daily use and grows in phases, each with a spec, evals and a report. It is a single-user, local-only app by design, with no authentication or sync. The logic is covered by tests that run without Ollama and the main prompts have an evaluation set, but retrieval quality is not measured yet. SVG illustrations from a 12B model are simple and sometimes inaccurate, and quiz options can reuse English sentences from the material. The code is public under the MIT licence, except for the concept-map engine, which remains under PolyForm Noncommercial.',
    },
    links: {
      repo: 'https://github.com/Federico-Ordonselli/studybuddy-v2',
    },
  },
  {
    slug: 'covershift',
    title: 'Covershift',
    art: 'covershift',
    eyebrow: { it: 'FULL STACK · NESTJS + REACT + SUPABASE · FASE 2', en: 'FULL STACK · NESTJS + REACT + SUPABASE · PHASE 2' },
    headline: { it: 'Scambi di turno, protetti fino al database.', en: 'Shift swaps, secured down to the database.' },
    intro: {
      it: 'Covershift è una piattaforma multi-tenant per pianificare i turni di team operativi, come la sicurezza aeroportuale, il retail o la sanità. I manager compongono la settimana, il personale si scambia i turni e un manager approva, con una regola che non si aggira: nessuno lavora una postazione senza una certificazione valida fino alla fine del turno. L’ho impostato come un prodotto B2B, per fasi con report e decisioni architetturali scritte, in un monorepo TypeScript sviluppato con Claude Code.',
      en: 'Covershift is a multi-tenant platform for scheduling shifts in operational teams such as airport security, retail or healthcare. Managers build the week, staff swap shifts and a manager approves, under one rule that cannot be bypassed: nobody works a position without a certification valid until the shift ends. I set it up as a B2B product, in phases with written reports and architecture decisions, in a TypeScript monorepo developed with Claude Code.',
    },
    facts: [
      { label: { it: 'Ruolo', en: 'Role' }, value: { it: 'Progetto personale AI-assisted: architettura, revisione, test e decisioni documentate', en: 'Personal AI-assisted project: architecture, review, testing and documented decisions' } },
      { label: { it: 'Stack', en: 'Stack' }, value: { it: 'NestJS · React 19 · TypeScript · Supabase (Postgres + Auth) · TypeORM · Zod · TanStack Query', en: 'NestJS · React 19 · TypeScript · Supabase (Postgres + Auth) · TypeORM · Zod · TanStack Query' } },
      { label: { it: 'Qualità', en: 'Quality' }, value: { it: 'Oltre 380 test · 14 e2e Playwright con axe (WCAG 2.1 AA) · CodeQL, gitleaks, Trivy', en: 'Over 380 tests · 14 Playwright e2e tests with axe (WCAG 2.1 AA) · CodeQL, gitleaks, Trivy' } },
      { label: { it: 'Stato', en: 'Status' }, value: { it: 'Fasi 1 e 2 completate · deploy su AWS predisposto · codice su GitHub', en: 'Phases 1 and 2 complete · AWS deployment prepared · code on GitHub' } },
    ],
    problem: {
      it: 'Nei team operativi i turni si scambiano di continuo, e ogni scambio deve rispettare regole precise: chi prende un turno deve essere abilitato alla postazione e avere una certificazione che non scade prima della fine. L’obiettivo era rendere lo scambio semplice per il personale e verificabile per il manager, in un’applicazione dove i dati di un’organizzazione non possano finire in un’altra, nemmeno per un bug del backend.',
      en: 'In operational teams shifts change hands all the time, and every swap must follow precise rules: whoever takes a shift must be cleared for the position and hold a certification that does not expire before it ends. The goal was to make swapping easy for staff and verifiable for managers, in an application where one organisation’s data cannot leak into another, not even through a backend bug.',
    },
    solution: {
      it: 'Un monorepo pnpm con tre pacchetti: l’API NestJS, la web app React e i contratti Zod condivisi. Supabase fornisce Postgres e l’autenticazione, ma tutti i dati passano dall’API: verifica il token e poi esegue ogni richiesta in una transazione che impersona l’utente, così sono le policy Row Level Security di Postgres a decidere quali righe esistono per lui. Ogni regola di dominio ha un errore leggibile nel servizio e un vincolo nel database che non si può saltare.',
      en: 'A pnpm monorepo with three packages: the NestJS API, the React web app and shared Zod contracts. Supabase provides Postgres and authentication, but all data goes through the API: it verifies the token, then runs every request in a transaction that impersonates the user, so Postgres Row Level Security policies decide which rows exist for them. Every domain rule has a readable error in the service and a database constraint that cannot be skipped.',
    },
    features: [
      {
        title: { it: 'Calendario settimanale', en: 'Weekly schedule' },
        text: {
          it: 'Settimana da lunedì a lunedì nel fuso orario dell’organizzazione, corretta anche al cambio dell’ora legale. L’organizzazione sta nell’URL ed è verificata contro il profilo dell’utente; si passa da “tutti” a “i miei turni” con un clic.',
          en: 'A Monday-to-Monday week in the organisation’s time zone, correct across daylight saving changes. The organisation lives in the URL and is checked against the user’s profile; one click switches between everyone and my shifts.',
        },
      },
      {
        title: { it: 'Turni con controllo di idoneità', en: 'Shifts with eligibility checks' },
        text: {
          it: 'Il manager assegna un turno solo a chi è membro attivo, è abilitato alla postazione, ha una certificazione valida fino a fine turno e non ha sovrapposizioni. Un’eccezione è possibile solo con una motivazione di 5–500 caratteri, salvata sul turno.',
          en: 'A manager can only assign a shift to an active member who is cleared for the position, holds a certification valid until the shift ends and has no overlaps. An override needs a 5–500 character reason, stored on the shift.',
        },
      },
      {
        title: { it: 'Scambi tra colleghi', en: 'Swaps between colleagues' },
        text: {
          it: 'Offerta diretta a un collega o aperta a tutti, con accetta, rifiuta e annulla e una casella delle offerte ricevute. Lo stato dello scambio segue una macchina a stati che vive in un trigger del database.',
          en: 'A direct offer to a colleague or an open one, with accept, decline and cancel, and an inbox of received offers. The swap follows a state machine that lives in a database trigger.',
        },
      },
      {
        title: { it: 'Approvazioni del manager', en: 'Manager approvals' },
        text: {
          it: 'Il manager approva o rifiuta gli scambi accettati, ma non quelli di cui fa parte. Se un ruolo viene revocato mentre la pagina è aperta, il primo 403 ricarica il profilo e la pagina diventa di sola lettura, mostrando il motivo restituito dall’API.',
          en: 'The manager approves or rejects accepted swaps, but not ones they are part of. If a role is revoked while the page is open, the first 403 reloads the profile and the page turns read-only, showing the reason returned by the API.',
        },
      },
      {
        title: { it: 'API documentata', en: 'Documented API' },
        text: {
          it: 'OpenAPI su /docs generata dagli stessi schemi della validazione, paginazione keyset corretta anche con timestamp identici ed errori RFC 9457 con un codice stabile su ogni percorso, comprese route sconosciute e body troppo grandi (413 invece di 500).',
          en: 'OpenAPI at /docs generated from the same schemas used for validation, keyset pagination that stays correct with identical timestamps, and RFC 9457 errors with a stable code on every path, including unknown routes and oversized bodies (413 rather than 500).',
        },
      },
      {
        title: { it: 'Test sotto la policy reale', en: 'Tests under the real policy' },
        text: {
          it: 'Componenti testati con mock MSW validati dagli stessi schemi dell’API. In Playwright uno scambio completo fra tre utenti, dall’offerta alla riassegnazione, con controllo axe a ogni esecuzione e una Content Security Policy restrittiva attiva anche nei test, che falliscono a ogni violazione.',
          en: 'Components tested with MSW mocks validated by the API’s own schemas. In Playwright, a full swap between three users, from offer to reassignment, with an axe check on every run and a strict Content Security Policy active in tests too, which fail on any violation.',
        },
      },
    ],
    shotLayout: 'grid',
    screenshots: [
      {
        src: '/projects/covershift/schedule.png', width: 1280, height: 720,
        alt: { it: 'Calendario settimanale del manager per l’organizzazione Lakeside International Airport: Security, con turni come Queue host, Hold baggage screening e Gate screening, ciascuno con orario e persona assegnata.', en: 'The manager’s weekly schedule for the Lakeside International Airport: Security organisation, with shifts such as Queue host, Hold baggage screening and Gate screening, each with its time and assignee.' },
        caption: { it: 'La settimana vista dal manager', en: 'The week, as the manager sees it' },
      },
      {
        src: '/projects/covershift/swaps.png', width: 1280, height: 720,
        alt: { it: 'Offerte ricevute da un membro dello staff: Sam Carter propone il turno Gate screening di venerdì 16:00–00:00, con una nota e i pulsanti Accept e Decline.', en: 'Offers received by a staff member: Sam Carter offers the Friday 16:00–00:00 Gate screening shift, with a note and Accept and Decline buttons.' },
        caption: { it: 'Offerta di scambio, lato collega', en: 'Swap offer, as the colleague' },
      },
      {
        src: '/projects/covershift/approvals.png', width: 1280, height: 720,
        alt: { it: 'Pagina Approvals del manager: lo stesso scambio, accettato e in attesa di approvazione, con i pulsanti Approve e Reject.', en: 'The manager’s Approvals page: the same swap, accepted and waiting for approval, with Approve and Reject buttons.' },
        caption: { it: 'Approvazione del manager', en: 'Manager approval' },
      },
    ],
    screenshotNote: {
      it: 'Schermate reali della web app, ottobre 2026, generate da uno script Playwright sui dati demo del seed e sotto la stessa CSP dei test end-to-end. Nomi e organizzazione sono fittizi.',
      en: 'Real screenshots of the web app, October 2026, generated by a Playwright script from the seeded demo data and under the same CSP as the end-to-end tests. Names and organisation are fictitious.',
    },
    decisions: [
      {
        title: { it: 'Il database è l’ultima difesa', en: 'The database is the last line of defence' },
        text: {
          it: 'NestJS verifica il token di Supabase tramite JWKS, senza segreti condivisi, e apre una transazione con il ruolo e i claim dell’utente. L’API si connette con un ruolo senza privilegi propri: una query fuori da quella transazione fallisce invece di far trapelare dati. Disattivando RLS, i test corrispondenti diventano rossi.',
          en: 'NestJS verifies the Supabase token via JWKS, with no shared secret, and opens a transaction with the user’s role and claims. The API connects as a role with no privileges of its own: a query outside that transaction fails instead of leaking data. Turning RLS off makes the matching tests fail.',
        },
      },
      {
        title: { it: 'Regola spiegata, vincolo inaggirabile', en: 'An explained rule, an unskippable constraint' },
        text: {
          it: 'Il servizio restituisce errori comprensibili, come una certificazione scaduta o una sovrapposizione. Il database impone comunque le stesse regole: foreign key composite per isolare i tenant, un exclusion constraint contro i doppi turni e la macchina a stati degli scambi in un trigger.',
          en: 'The service returns readable errors, such as an expired certification or an overlap. The database enforces the same rules anyway: composite foreign keys to isolate tenants, an exclusion constraint against double-booking and the swap state machine in a trigger.',
        },
      },
      {
        title: { it: 'Un contratto, tre usi', en: 'One contract, three uses' },
        text: {
          it: 'Gli schemi Zod condivisi producono validazione, documentazione OpenAPI e tipi del frontend. Il file openapi.json è nel repository e un test fa fallire la CI se il codice cambia senza aggiornarlo.',
          en: 'The shared Zod schemas produce validation, OpenAPI documentation and frontend types. The openapi.json file is committed, and a test fails CI if the code changes without updating it.',
        },
      },
      {
        title: { it: 'Non rivelare nulla', en: 'Reveal nothing' },
        text: {
          it: 'Una risorsa di un’altra organizzazione risponde 404, come una che non esiste: dalla risposta non si capisce se c’è. Il parametro di ritorno dopo il login accetta solo percorsi interni, e una regola ESLint su misura blocca la build se una query SQL viene costruita concatenando stringhe.',
          en: 'A resource from another organisation returns 404, just like one that does not exist: the response does not reveal whether it is there. The post-login return parameter only accepts same-origin paths, and a custom ESLint rule fails the build if an SQL query is built by string concatenation.',
        },
      },
      {
        title: { it: 'Un solo cancello per la CI', en: 'A single CI gate' },
        text: {
          it: 'Un unico check obbligatorio dipende da tutti i job e fallisce anche se uno viene saltato o annullato. Intorno: CodeQL, gitleaks sull’intera storia, audit delle dipendenze, Trivy sull’immagine Docker, lint del PL/pgSQL e Actions fissate per SHA. Le scelte importanti sono registrate in ADR e report di fase.',
          en: 'A single required check depends on every job and fails even if one is skipped or cancelled. Around it: CodeQL, gitleaks over the full history, dependency audits, Trivy on the Docker image, PL/pgSQL linting and SHA-pinned Actions. Major choices are recorded in ADRs and phase reports.',
        },
      },
    ],
    limits: {
      it: 'Covershift è un progetto personale impostato come prodotto, non un servizio in uso: non ha clienti né dati reali, e gli account arrivano dal seed perché la registrazione pubblica è disattivata. Al 26 ottobre 2026 sono complete le fasi 1 (API) e 2 (web app); il deploy su AWS ECS Fargate è predisposto con Docker e Terraform ma non ancora attivo, quindi non c’è una demo online. L’interfaccia è in inglese.',
      en: 'Covershift is a personal project set up as a product, not a service in use: it has no customers or real data, and accounts come from the seed because public sign-up is disabled. As of 26 October 2026, phases 1 (API) and 2 (web app) are complete; deployment to AWS ECS Fargate is prepared with Docker and Terraform but not yet live, so there is no online demo. The interface is in English.',
    },
    links: {
      repo: 'https://github.com/Federico-Ordonselli/covershift',
    },
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find(item => item.slug === slug);
}

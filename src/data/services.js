// Pagine servizio orientate ai clienti (keyword commerciali). I progetti citati sono reali:
// i titoli in `projects` devono coincidere con quelli di content.js.
export const services = [
  {
    slug: 'realizzazione-siti-web-roma',
    jsonLdName: 'Realizzazione siti web',
    navLabel: { it: 'Siti web', en: 'Websites' },
    tags: ['Next.js', 'Astro', 'Sanity', 'WordPress'],
    eyebrow: { it: 'SERVIZIO / SITI WEB · ROMA', en: 'SERVICE / WEBSITES · ROME' },
    metaTitle: { it: 'Realizzazione siti web a Roma', en: 'Website development in Rome' },
    description: {
      it: 'Realizzazione di siti web a Roma per professionisti, piccole imprese e attività: siti vetrina veloci, bilingui e aggiornabili in autonomia. Preventivo su richiesta.',
      en: 'Websites built in Rome for professionals, small businesses and creatives: fast, bilingual showcase sites you can update yourself. Quote on request.',
    },
    title: { it: 'Realizzazione siti web a Roma.', en: 'Websites, built in Rome.' },
    intro: {
      it: 'Sono Federico Ordonselli, sviluppatore web freelance a Roma. Realizzo siti per professionisti, piccole imprese e attività che vogliono farsi trovare, spiegare bene cosa fanno e ricevere contatti. Siti veloci, curati su telefono e computer, che puoi aggiornare da solo.',
      en: 'I’m Federico Ordonselli, a freelance web developer in Rome. I build websites for professionals, small businesses and creatives who want to be found, explain what they do clearly and get enquiries. Fast sites, polished on phone and desktop, that you can update yourself.',
    },
    points: {
      it: [
        ['Su misura, non da modello', 'Parto dalla tua attività e dalle persone che vuoi raggiungere. Per Manabikai ho proposto tre design sullo stesso sito, poi abbiamo scelto insieme quello giusto.'],
        ['Lo aggiorni tu', 'Testi, foto e orari si modificano da un pannello semplice, senza chiamarmi ogni volta. La cliente di Vagabondando pubblica i suoi racconti di viaggio da sola, e il sito si aggiorna entro un minuto.'],
        ['Fatto per farsi trovare', 'Pagine veloci, testi leggibili dai motori di ricerca, sitemap e versioni in più lingue quando servono. Contatti protetti dallo spam e consegnati direttamente nella tua email.'],
      ],
      en: [
        ['Tailored, not templated', 'I start from your business and the people you want to reach. For Manabikai I proposed three designs on the same site, then we chose the right one together.'],
        ['You update it', 'Copy, photos and opening hours are edited from a simple dashboard, without calling me every time. Vagabondando’s owner publishes her travel stories herself, and the site updates within a minute.'],
        ['Built to be found', 'Fast pages, content search engines can read, sitemaps and multiple languages when needed. Contact forms protected from spam and delivered straight to your inbox.'],
      ],
    },
    steps: {
      it: [['Una prima chiacchierata', 'Mi racconti l’attività e cosa ti aspetti dal sito. Ti propongo struttura, tempi e un preventivo.'], ['Design e prima versione', 'Lavoro su pagine vere, online fin da subito, così vedi e commenti il sito mentre prende forma.'], ['Pubblicazione e autonomia', 'Collego il dominio, pubblico e ti mostro come aggiornare i contenuti da solo.']],
      en: [['A first conversation', 'You tell me about your business and what you expect from the site. I propose a structure, timeline and quote.'], ['Design and first version', 'I work on real pages, online from the start, so you can see and comment on the site as it takes shape.'], ['Launch and independence', 'I connect the domain, publish and show you how to update the content yourself.']],
    },
    projects: ['Vagabondando', 'Manpietro', 'Manabikai'],
    cta: { it: 'Richiedi un preventivo', en: 'Ask for a quote' },
    mailSubject: { it: 'Preventivo sito web', en: 'Website quote' },
  },
  {
    slug: 'sviluppo-web-app',
    jsonLdName: 'Sviluppo web app personalizzate',
    navLabel: { it: 'Web app su misura', en: 'Custom web apps' },
    tags: ['React', 'Next.js', 'TypeScript', 'PostgreSQL'],
    eyebrow: { it: 'SERVIZIO / WEB APP SU MISURA', en: 'SERVICE / CUSTOM WEB APPS' },
    metaTitle: { it: 'Sviluppo web app personalizzate a Roma', en: 'Custom web app development in Rome' },
    description: {
      it: 'Sviluppo di web app personalizzate: gestionali, prenotazioni, aree riservate e strumenti su misura per aziende e professionisti. Sviluppatore freelance a Roma. Preventivo su richiesta.',
      en: 'Custom web app development: management tools, bookings, private areas and bespoke tools for businesses and professionals. Freelance developer in Rome. Quote on request.',
    },
    title: { it: 'Web app su misura, per il tuo modo di lavorare.', en: 'Custom web apps, shaped around how you work.' },
    intro: {
      it: 'Quando un foglio Excel, un gruppo WhatsApp o un software generico non bastano più, serve uno strumento costruito sul tuo processo. Sviluppo web app con accessi, dati salvati in modo sicuro e interfacce chiare, utilizzabili dal browser su qualsiasi dispositivo.',
      en: 'When a spreadsheet, a group chat or generic software no longer cut it, you need a tool built around your process. I build web apps with sign-in, safely stored data and clear interfaces, usable from the browser on any device.',
    },
    points: {
      it: [
        ['Prenotazioni e turni', 'Aerides gestisce posti per ruolo, lista d’attesa e promozione automatica senza overbooking. Covershift pianifica i turni e li fa scambiare tra colleghi, con l’approvazione del responsabile.'],
        ['Accessi e dati al sicuro', 'Login, permessi per ruolo o per gruppo, dati separati tra clienti diversi e salvataggio in cloud. Ogni utente vede solo ciò che gli spetta.'],
        ['Funziona anche offline', 'Quando serve, l’app si installa sul telefono o sul computer e continua a funzionare senza connessione, come Runebog e Weirder.'],
      ],
      en: [
        ['Bookings and shifts', 'Aerides handles role-based slots, a waitlist and automatic promotion without overbooking. Covershift schedules shifts and lets colleagues swap them, with manager approval.'],
        ['Secure sign-in and data', 'Login, role or group permissions, data kept separate between different clients and cloud saves. Every user sees only what they should.'],
        ['Works offline too', 'When needed, the app installs on a phone or computer and keeps working without a connection, like Runebog and Weirder.'],
      ],
    },
    steps: {
      it: [['Capire il processo', 'Partiamo da come lavori oggi e da cosa ti fa perdere tempo. Definiamo insieme la prima versione utile.'], ['Prima versione funzionante', 'Ti consegno presto qualcosa da usare davvero, poi lo miglioriamo con il tuo riscontro.'], ['Messa online e crescita', 'Pubblico l’app, verifico i flussi più importanti con test automatici e la faccio crescere quando servono nuove funzioni.']],
      en: [['Understand the process', 'We start from how you work today and what wastes your time. Together we define the first useful version.'], ['A working first version', 'You soon get something you can actually use, then we improve it with your feedback.'], ['Launch and growth', 'I publish the app, check the key flows with automated tests and grow it when you need new features.']],
    },
    projects: ['Aerides', 'Covershift', 'Runebog GM', 'Weirder'],
    cta: { it: 'Parliamo del tuo progetto', en: 'Let’s talk about your project' },
    mailSubject: { it: 'Preventivo web app', en: 'Web app quote' },
  },
];

export const getService = slug => services.find(item => item.slug === slug);

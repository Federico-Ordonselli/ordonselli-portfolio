# Runebog GM — scheda di progetto per il sito CV

**Cos'è questo file.** La descrizione di riferimento di un mio progetto personale,
scritta per essere data in pasto a Claude Code nel repository del mio sito CV. Serve
a scriverne una pagina, una voce di portfolio o un paragrafo di curriculum **senza
inventare niente**.

**Regole per chi lo legge (agente incluso).**

- Questo file è la fonte: se un dato non c'è, **non dedurlo** — chiedimelo.
  In particolare non sono qui e non vanno inventati: numero di utenti, traffico,
  download dell'app Windows, premi, clienti, ore di lavoro, "usato da studi/associazioni".
- I numeri sono **misurati alla data indicata**. Riportali con l'ordine di grandezza
  («oltre 200 test», «circa 330 schede mostro») se il testo deve invecchiare bene.
- La licenza va detta come sta scritta nella sezione apposita. È un dato legale.
- Ultimo aggiornamento della scheda: **1° ottobre 2026**, sul repository alla versione
  **v0.2.9** (ultimo commit del 29 settembre 2026).

---

## 1. In breve, pronto da usare

### Una riga (IT)
Runebog GM — applicazione web per Game Master di giochi di ruolo: mappe gerarchiche
di campagna, bestiario e regole D&D 5e in italiano, tavolo condiviso con i giocatori e
app portable per Windows.

### Una riga (EN)
Runebog GM — a web app for tabletop RPG Game Masters: nested campaign maps, an Italian
D&D 5e bestiary and rules reference, a shared table for players and a portable Windows app.

### ~40 parole (IT)
Applicazione web per Game Master di giochi di ruolo da tavolo. Mappe gerarchiche dal
mondo alla stanza, piante con muri e pavimenti dipinti, schede mostro SRD 5.2.1 in
italiano, generatore di dungeon deterministico e tavolo in sola lettura per i giocatori.
Next.js 15 e Postgres per il sito, JavaScript vanilla per l'editor.

### ~40 parole (EN)
A web app for tabletop RPG Game Masters: nested maps from world to room, floor plans with
walls and painted floors, Italian D&D 5e SRD monster stat blocks, a deterministic dungeon
generator and a read-only table for players. Next.js 15 and Postgres for the site;
framework-free vanilla JavaScript for the editor.

### ~120 parole (IT)
Runebog GM è uno strumento per Game Master di giochi di ruolo, nato per una one-shot e
cresciuto in un'applicazione completa. Il cuore è una mappa di "bolle" annidabili senza
limite di profondità — un mondo contiene nazioni, una città contiene quartieri, un
edificio contiene stanze — con muri, porte, pavimenti dipinti, griglia quadrata o a
esagoni e modalità combattimento. Un link segreto apre ai giocatori un **tavolo in sola
lettura**, ricostruito sul server campo per campo. Include il bestiario e dieci capitoli
dell'SRD 5.2.1 in italiano, estratti dal PDF ufficiale da script propri, un calendario di
gioco e funziona offline come PWA. Lo stesso editor gira anche in un'**app portable per
Windows** con tavolo in rete locale. Il sito è Next.js 15 su Postgres; l'editor è
JavaScript vanilla, senza framework e senza build step.

---

## 2. Cosa fa, per un lettore non tecnico

- **Mappa gerarchica.** Ogni "bolla" è un luogo che può contenerne altre, senza limite di
  profondità. La scala va da *mondo* a *stanza* e si può allargare a posteriori (zoom
  indietro: la campagna nata come città diventa una regione). Le bolle si copiano,
  tagliano e incollano fra livelli.
- **Pianta giocabile.** Muri disegnati con una penna, porte e aperture tipizzate (aperta,
  chiusa, a chiave, segreta), griglia quadrata o a esagoni in scala (1 quadretto = 1,5 m),
  pavimenti dipinti con dodici materiali e riva fra acqua e terra, caselle di testo
  formattato, segnalini ridimensionabili, modalità combattimento con pedine e ordine
  d'iniziativa.
- **Tavolo per i giocatori.** Un link condivisibile mostra solo ciò che il GM ha
  rivelato: note separate, collegamenti segreti invisibili, porte segrete che escono come
  muro pieno.
- **App portable per Windows.** Un eseguibile senza installazione e senza Internet, con
  lo stesso editor del sito. Include un **tavolo locale**: i telefoni dei giocatori sulla
  stessa rete Wi-Fi inquadrano un QR e vedono la mappa rivelata, aggiornata ogni 5 secondi
  circa, senza account e senza cloud.
- **Contenuti D&D 5e in italiano.** 331 schede mostro e dieci capitoli di regole
  (SRD 5.2.1, edizione 2024), con ricerca trasversale sui titoli e rimandi navigabili.
- **Generatore di dungeon** deterministico da seed, anche dentro l'editor: crea la bolla
  con stanze, corridoi, muri, incontri bilanciati sul gruppo e PG come pedine all'ingresso.
- **Diario della campagna**: quest con stati e filtri, calendario di gioco con scadenze ed
  eventi ricorrenti legati alle bolle, PNG, checklist, scheda dei giocatori.
- **Strumenti da tavolo**: righello in metri, aree d'effetto (cerchio, cono, linea,
  quadrato), tiradadi, immagini di riferimento e sfondi della pianta.
- **Account e salvataggi.** Accesso con Google o con nome utente e password, campagne e
  immagini salvate nel cloud, esportazione e importazione JSON, cancellazione dell'account.
- **Offline e installabile.** L'editor funziona senza rete come PWA; le regole si
  scaricano su richiesta, dichiarando quanto pesano.
- **Undici temi** grafici, tutti verificati automaticamente per contrasto WCAG.

---

## 3. Stack tecnico

| Ambito | Scelta |
|---|---|
| Sito | Next.js 15 (App Router), React 19, TypeScript |
| Autenticazione | Auth.js v5 — Google OAuth + credenziali, sessioni JWT, scrypt della stdlib, token di reset monouso (nel DB solo lo SHA-256) |
| Database | Neon Postgres, Drizzle ORM, migrazioni SQL versionate; campagne in colonna JSONB, immagini con quote per account |
| Email | API REST di Resend via `fetch`, senza SDK (recupero password) |
| Editor | JavaScript vanilla in moduli ES — nessun framework, nessuna dipendenza a runtime, nessun build step |
| Rendering mappa | SVG scritto a mano, pan/zoom via `viewBox`, Pointer Events |
| Offline | Service worker **generato a build time** (lista file e versioni = hash del contenuto), manifest PWA |
| App desktop | Electron + electron-builder, eseguibile portable Windows 64 bit pubblicato come asset delle GitHub Release; server del tavolo locale e QR (`qrcode`) |
| Test | `node:test`, test puri senza DOM né dipendenze; verifiche nel browser per i flussi dell'editor |
| CI | GitHub Actions: typecheck + test + build a ogni push e PR; workflow per costruire l'EXE (anche firmato) |
| Deploy | Vercel, dominio `runebog.app` (tutto su piani gratuiti: Vercel Hobby + Neon free) |

---

## 4. Le scelte che vale la pena raccontare

Sono i punti "da colloquio": ognuno è una decisione con un motivo, non una feature.

1. **Un solo JSON per tutto.** Lo stato di una campagna è un unico oggetto serializzabile:
   stessa forma per l'esportazione, per la colonna JSONB del database, per l'iniezione
   nella pagina e per l'app Windows. L'esportazione diventa banale e l'importazione
   simmetrica; non esiste una seconda rappresentazione da tenere allineata.
2. **Due applicazioni, un formato.** Il sito (Next.js) e l'editor (vanilla) condividono
   solo il contratto del documento, definito in un modulo senza dipendenze usato da
   entrambi i lati. Regola dichiarata: *rigido in scrittura, tollerante in lettura* —
   l'API rifiuta con 422 un documento malformato, ma nessun percorso di lettura lancia,
   perché un errore lì chiuderebbe fuori i giocatori.
3. **Un editor senza build, quindi portabile.** Proprio perché l'editor non ha framework
   né build step, lo stesso codice gira nel sito, offline come PWA e dentro l'eseguibile
   Electron, che aggiunge solo il profilo accanto all'EXE e il server del tavolo locale.
4. **Concorrenza ottimistica fatta bene.** Ogni salvataggio dichiara la revisione da cui
   parte e la condizione sta **dentro** l'`UPDATE` (`WHERE id AND user_id AND revision =
   base`): zero righe aggiornate *è* il conflitto. Verificato con richieste concorrenti
   vere su un branch di database usa-e-getta — otto scritture dalla stessa base danno una
   sola vincitrice, mentre la stessa rotta scritta "leggi-poi-scrivi" ne fa passare sei.
5. **Nessun merge automatico, nessuna perdita silenziosa.** In caso di conflitto la copia
   locale viene scritta *prima* della richiesta e l'utente sceglie fra tre azioni
   esplicite, con i due titoli e le due date davanti.
6. **La sicurezza del tavolo è una proiezione, non un filtro lato client.** Ai giocatori
   arriva solo ciò che il server ricostruisce campo per campo: ID risolti in nomi, note
   del GM separate, passaggi segreti assenti. Il polling è condizionale (ETag = numero di
   revisione, confronto debole conforme a RFC 9110). Anche il tavolo locale dell'app
   Windows mostra ai giocatori solo le bolle rivelate.
7. **PDF → JSON: un estrattore su misura.** I capitoli delle regole e le 331 schede mostro
   sono estratti dal PDF ufficiale da script propri, perché in quel documento la semantica
   sta nei *font e nei colori*, non nel testo: titoli riconosciuti per relazione fra canali
   RGB, tabelle ricostruite dalla geometria delle colonne, legature e Private Use Area
   sciolte a mano. Ogni capitolo passa da un verificatore che lo confronta con
   `pdftotext` prima di essere pubblicato.
8. **Accessibilità misurata, non dichiarata.** Uno script confronta i rapporti di contrasto
   WCAG di tutte le coppie colore su tutti i temi e fallisce sotto soglia; le famiglie di
   accento si controllano in ΔE Lab, perché il rapporto WCAG dà per uguali due tinte
   diverse della stessa luminanza. Bersagli touch da 44px dichiarati per **ruolo**, non
   per classe CSS.
9. **Test sugli invarianti giusti.** Niente test di facciata: coprono la serializzazione
   di JSON dentro `<script>` (XSS), la proiezione per i giocatori come whitelist, la
   bonifica dell'input non fidato, il determinismo del generatore di dungeon, il recupero
   delle copie locali dopo un conflitto, il calendario e il disegno della pianta.
10. **Documentazione come parte del lavoro.** Il repository tiene un `CLAUDE.md` esteso che
    registra invarianti, trappole già pagate e il *verso in cui è accettabile sbagliare*
    per ogni scelta — pensato per riprendere il progetto a freddo.

---

## 5. Numeri verificati

Misurati il **1° ottobre 2026** sul repository alla versione v0.2.9, eseguendo i comandi
del repository.

| Dato | Valore |
|---|---|
| Primo commit | 13 luglio 2026 |
| Commit totali | 202 |
| Versione dell'app portable | v0.2.9 (29 settembre 2026) |
| Codice del sito (TypeScript/TSX) | ~6.500 righe, 64 file |
| Codice dell'editor (JS, escluso il dataset) | ~12.500 righe, 37 moduli ES |
| Test automatici (`npm test`) | 212, tutti verdi |
| Schede mostro SRD in italiano | 331 |
| Capitoli di regole pubblicati | 10 (più le informazioni legali) |
| Temi grafici | 11 |
| Materiali del pavimento | 12 texture |
| Dipendenze a runtime del sito | 7 (`next`, `react`, `react-dom`, `next-auth`, `@auth/drizzle-adapter`, `drizzle-orm`, `@neondatabase/serverless`) |
| Dipendenze dell'editor | 0 |
| Dipendenze a runtime dell'app desktop | 1 (`qrcode`) |

Progetto personale, non commissionato, di **Federico Ordonselli**. Sviluppato con Claude
Code come pair programmer: 168 commit su 202 sono co-firmati da Claude. Federico ha
guidato prodotto, scelte, revisione e rilascio.

---

## 6. Competenze dimostrabili (tag per il CV)

`Next.js 15` · `React 19` · `TypeScript` · `PostgreSQL` · `Drizzle ORM` · `Auth.js / OAuth`
· `JavaScript vanilla / moduli ES` · `SVG` · `Pointer Events` · `PWA / service worker`
· `Electron` · `concorrenza ottimistica` · `progettazione di API REST` · `sicurezza
applicativa (XSS, autorizzazione, hashing password, token monouso)` · `accessibilità WCAG`
· `parsing di PDF` · `algoritmi deterministici (generazione procedurale)` · `CI/CD (GitHub
Actions, Vercel, GitHub Releases)` · `documentazione tecnica` · `sviluppo AI-assisted
(Claude Code)`

---

## 7. Link, licenze, attribuzioni

- Sito: **https://runebog.app**
- Repository: **https://github.com/Federico-Ordonselli/runebog-gm**
- App Windows: pagina **Scarica** del sito o GitHub Release v0.2.9
- Contatto pubblicato dal progetto: `support@runebog.app`

**Attenzione, sono dati legali — vanno riportati così:**

- Il **codice** è rilasciato con licenza **PolyForm Noncommercial 1.0.0**: l'uso
  commerciale non è consentito. **Non scrivere "open source"** senza qualificarlo:
  PolyForm non è una licenza approvata OSI. Se serve una formula breve: *«sorgente
  pubblico, licenza non commerciale (PolyForm Noncommercial 1.0.0)»*. Le versioni
  distribuite prima del 29 luglio 2026 erano MIT e quella concessione resta valida.
- Le **texture dei pavimenti** sono **CC BY-NC 4.0** (attribuzione: «Texture di Runebog
  GM, Federico Ordonselli, CC BY-NC 4.0»). Sono state generate con uno strumento di
  intelligenza artificiale: se le mostri o le citi, non presentarle come disegnate a mano.
- I **contenuti SRD** (schede mostro, capitoli di regole) sono **CC-BY-4.0** e permettono
  l'uso commerciale. Se la pagina del CV cita o mostra quei contenuti, l'attribuzione va
  mantenuta: è una condizione della licenza.
- D&D e i marchi relativi non sono miei: il progetto usa l'SRD 5.2.1, materiale concesso
  in licenza. Non presentarlo come prodotto ufficiale né affiliato.

---

## 8. Cosa NON scrivere

- ❌ «open source» senza qualificare (vedi sopra) — ❌ «licenza MIT» (non più).
- ❌ Numeri di utenti, download, traffico, valutazioni: non ne ho di pubblici.
- ❌ «prodotto commerciale», «startup», «SaaS a pagamento»: è gratuito e non commerciale,
  con una pagina di donazioni.
- ❌ «app mobile nativa» o «app da store»: è una PWA installabile più un eseguibile
  portable per Windows.
- ❌ «app firmata» o «certificata»: il workflow per la firma esiste, ma serve un
  certificato di code signing; non dare per scontato che l'EXE pubblicato sia firmato.
- ❌ «basato su React» riferito all'editor: il sito è React, l'**editor è vanilla** — ed è
  una scelta deliberata, non una mancanza.
- ❌ «sviluppato da solo, senza AI»: è sviluppato con Claude Code (vedi sezione 5).
- ❌ «prodotto ufficiale D&D» o «Wizards of the Coast».
- ❌ Nomi di file, percorsi interni o dettagli del repository nel testo pubblico: qui
  servono a spiegare, non a essere pubblicati.

**Limiti noti dichiarati dal progetto** (utili per non esagerare): il freno ai tentativi di
login è in memoria e vale per singola istanza; le sessioni JWT non sono revocabili lato
server; nella versione standalone campagne e immagini occupano la quota di `localStorage`.

---

## 9. Come aggiornare questa scheda

Nel repository di Runebog, dopo cambiamenti significativi:

```bash
npm test                         # numero di test
git rev-list --count HEAD        # commit
find src -name '*.ts' -o -name '*.tsx' | xargs wc -l | tail -1
ls public/app/*.js | grep -v srd | xargs wc -l | tail -1   # editor
```

Il contesto architetturale completo sta nel `CLAUDE.md` del repository e il registro dei
lavori in `TODO.md`; questa scheda ne è il riassunto pubblicabile. Quando divergono, vale
il repository. Dopo l'aggiornamento, allinea anche `PROJECT-BRIEF-RUNEBOG.en.md` e la
pagina `/projects/runebog-gm` (dati in `src/data/caseStudies.js`).

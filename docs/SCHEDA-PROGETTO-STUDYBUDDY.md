> Scheda di riferimento per `/projects/studybuddy`, ricavata dal README di portfolio
> di ottobre 2026 (senza immagini). Le schermate usate dal sito sono in
> `public/projects/studybuddy/`.

# StudyBuddy v2 — un tutor di studio AI che gira tutto in locale

> Trasforma un corso online scaricato (video, trascrizioni, PDF, letture HTML) in un tutor personale: risponde con il metodo socratico citando il minuto esatto del video, genera quiz e flashcard con ripetizione spaziata, riassunti, slide e mappe concettuali esplorabili. Nessun dato esce dal computer.

**Ruolo:** progetto personale — design, architettura e sviluppo full-stack
**Stack:** Next.js 16 · React 19 · TypeScript 7 · SQLite (Drizzle + sqlite-vec + FTS5) · Ollama · Transformers.js / ONNX Runtime (CUDA) · faster-whisper
**Modelli locali:** `gemma4:12b` (chat, quiz, valutazione, riassunti) · `qwen3-embedding:0.6b` (embedding multilingue) · `bge-reranker-v2-m3` (cross-encoder)
**Hardware:** una singola GPU consumer (RTX 4080 Super, 16 GB)
**Codice:** https://github.com/Federico-Ordonselli/studybuddy-v2

---

## Il problema

I corsi online sono pieni di materiale ma poveri di interazione: ore di video, trascrizioni, slide e letture sparse in centinaia di file. Quando hai un dubbio, ritrovare *dove* se ne parlava è lento; e rivedere passivamente i video non è un buon modo per fissare i concetti.

Gli assistenti AI generalisti aiutano, ma rispondono "dal nulla": non sanno cosa dice il *tuo* corso, inventano dettagli, e richiedono di caricare il materiale su servizi esterni.

**Obiettivo:** un compagno di studio che conosca a fondo il materiale del corso, risponda *solo* in base a quello citando le fonti, ti costringa a ragionare invece di darti la soluzione, e programmi il ripasso al momento giusto. Il tutto **local-first**: gira sul mio PC, senza abbonamenti né API a consumo.

## In numeri

| | |
|---|---|
| **783** documenti indicizzati (344 trascrizioni, 434 letture HTML, 5 PDF) | da un percorso di 9 corsi |
| **2.321** chunk con embedding a 1024 dimensioni | ricerca ibrida dense + BM25 |
| **~3–6 s** per un turno del tutor | retrieval + rerank su GPU + generazione |
| **~0,6 s** per riordinare 20 passaggi col cross-encoder su GPU | 3,4 s su CPU (fallback automatico) |
| **0 €** di costi di inferenza | tutto su Ollama in locale |
| **~5.000** righe di TypeScript/JavaScript | senza librerie di componenti né di grafi |

---

## Cosa fa

### 1. Tutor socratico con citazioni al minuto del video

Fai una domanda (anche in italiano su materiale in inglese) e il tutor non ti dà la risposta: ti guida con domande e indizi progressivi, basandosi **esclusivamente** sui passaggi recuperati dal corso. Ogni risposta mostra le fonti numerate `[n]`: le letture riportano il percorso modulo › lezione, le trascrizioni anche il timestamp. Un clic apre il player integrato **esattamente al punto** in cui il docente ne parla.

La conversazione viene salvata e ripresa alla visita successiva.

### 2. Quiz generati dal materiale, valutati da un LLM

Dai un argomento: il sistema recupera i passaggi pertinenti e genera una domanda a scelta multipla con *structured output* (JSON schema imposto al modello). La risposta viene valutata da un secondo prompt "LLM-as-judge" che produce un voto 0–5 e una spiegazione ancorata al testo.

### 3. Ripasso con ripetizione spaziata (SM-2)

Le flashcard si generano da un argomento o da un concetto della mappa. Rispondi a parole tue, l'LLM valuta la risposta e l'algoritmo **SM-2** (lo stesso alla base di Anki/SuperMemo) decide quando ripropone la carta. La coda "in scadenza" è per corso o per l'intero percorso.

### 4. Studio: riassunti, slide e mappe concettuali

**Riassunti map-reduce.** I passaggi vengono riassunti a blocchi (map) e poi sintetizzati in un documento strutturato (reduce): così anche un intero modulo entra nel contesto del modello.

**Slide con illustrazioni generate.** Un mini-deck sull'argomento, con immagini SVG disegnate dall'LLM in locale (backend sostituibile con Stable Diffusion o un'API di immagini).

**Mappe concettuali esplorabili** — la funzione più interessante. Il modello propone un concetto centrale, i concetti collegati e le relazioni ("include", "vincolano", "gestisce effetti di"), ognuno con definizione, spiegazione, esempi e **fonti**. Selezionando una bolla si apre la scheda; da lì si può approfondire, creare flashcard o passare la domanda al tutor.

Con un doppio clic si **entra** nella bolla (zoom animato): la prima volta il sotto-livello viene generato dal materiale, riusando i titoli già presenti nella mappa. Così nascono collegamenti *tra livelli* (le "pillole" tratteggiate), e concetti come "Regole degli Hooks" restano un unico nodo anche se compaiono in più punti. Ogni proposta del modello si applica come un insieme di comandi atomici: **annulla/ripeti** funzionano anche sulle modifiche generate dall'AI.

---

## Come funziona

```
 Corso scaricato                         Ingestion (CLI)
 corso/modulo/lezione/                   ┌───────────────────────────────────────┐
  .srt/.vtt ──► parser sottotitoli ──┐   │ hash per file → re-ingest idempotente │
  .pdf      ──► unpdf (pdf.js)     ──┼──►│ chunk con breadcrumb + timestamp      │
  .html     ──► node-html-parser   ──┤   │ dedup (srt/txt gemelli, chunk uguali) │
  .mp4 senza sottotitoli ─► Whisper ─┘   └──────────────┬────────────────────────┘
                                                        ▼
                                  SQLite: documenti · chunk · sqlite-vec · FTS5
                                                        │
 Domanda ──► dense (sqlite-vec) ─┐                      │
         └─► BM25 (FTS5)       ──┴─► fusione RRF ─► cross-encoder (GPU) ─► top 6
                                                                            │
                         generate(task) ─► Ollama (o API opzionale) ◄───────┘
                                                        │
              Tutor socratico · Quiz · Valutazione · SM-2 · Riassunti · Slide · Mappe
```

### Ingestion di un corso reale
Il sorgente è una cartella `corso/modulo/lezione/` con file misti. Le **trascrizioni** sono la fonte primaria: vengono spezzate mantenendo i timestamp, così ogni chunk sa a che minuto del video corrisponde. Le letture HTML vengono ripulite (solo il contenuto, codice e tabelle compresi), i PDF estratti con pdf.js senza dipendenze native. I pochi video senza sottotitoli vengono trascritti da un sidecar **Whisper** (rileva automaticamente faster-whisper, whisper.cpp o openai-whisper; ripiega su CPU se la GPU non è disponibile).

Ogni file ha un hash: rilanciare l'ingest salta i file invariati e sostituisce quelli modificati. Una versione del parser forza il refresh quando miglioro l'estrazione.

### Retrieval ibrido + reranking
La ricerca solo semantica sbaglia sui termini esatti (`useEffect`, `git rebase`); quella solo lessicale non capisce una domanda in italiano su materiale inglese. Le uso entrambe:

- **dense**: embedding multilingue `qwen3-embedding` su **sqlite-vec**, dentro lo stesso file SQLite;
- **sparse**: **BM25** su FTS5 (tokenizer porter + unicode, per inglese e italiano);
- **Reciprocal Rank Fusion** per fonderle — unisce le liste per posizione, senza dover normalizzare punteggi incomparabili (coseno vs BM25);
- **cross-encoder** `bge-reranker-v2-m3` eseguito *in-process* con Transformers.js/ONNX Runtime su GPU, che riordina i 20 candidati e tiene i 6 migliori. Se CUDA non è disponibile ripiega su CPU (quantizzato), e se il modello non si carica ripiega su un rerank listwise via LLM.

### Un livello unico per i modelli
Ogni chiamata passa da `generate(task, opts)` / `embed(texts)`. Una tabella di configurazione assegna a ciascun task (chat, quiz, grade, summarize, embed, rerank) un provider e un modello: Ollama di default, Anthropic o un endpoint OpenAI-compatible come opt-in **per singolo task**. Cambiare modello è una riga, e nessuna funzionalità dipende da un servizio a pagamento.

---

## Sfide tecniche (e come le ho risolte)

- **Risposte vuote dai modelli "reasoning".** Con il *thinking* attivo, il budget di token si esauriva nel ragionamento prima della risposta. Il thinking è disattivato di default e riattivabile per singola chiamata.
- **Contesto troncato in silenzio.** Ollama usa 4.096 token di contesto di default e taglia *l'inizio* del prompt — cioè proprio i passaggi RAG. Ho portato il contesto a 16k in modo esplicito.
- **Reranker da 13 secondi e 13 GB di RAM.** Senza troncamento, il padding al documento più lungo faceva esplodere il batch. Con batch da 8 e massimo 512 token: 0,6 s su GPU. Altra scoperta: i pesi quantizzati int8 su GPU sono *più lenti*, perché molti operatori interi non hanno kernel CUDA e tornano sulla CPU — su GPU si usa fp16.
- **Mismatch CUDA 12 / CUDA 13.** ONNX Runtime per Node è compilato per CUDA 12, il sistema ha CUDA 13: le librerie CUDA 12 vengono dal virtualenv Python e uno script di avvio le inietta in `LD_LIBRARY_PATH`.
- **Pagine HTML da 270.000 caratteri in un solo chunk**, e immagini base64 da 15 MB che mandavano in *stack overflow* le regex di V8. Chunking a cascata (paragrafi → righe → frasi → taglio) e rimozione dei `data:` URI con una scansione lineare.
- **Voti sbagliati che azzerano le flashcard.** Se il giudice LLM produce un output non valido (anche dopo un retry), il sistema genera un errore invece di registrare "0": per SM-2 uno zero significherebbe ricominciare da capo una carta già imparata.
- **Sicurezza di un'app locale che legge il filesystem.** `localhost` non basta: un sito malevolo può puntare il proprio dominio a 127.0.0.1 (*DNS rebinding*) o inviare POST cross-site. Un proxy sulle API accetta solo host locali e scritture `application/json` (che forzano il preflight CORS); i percorsi passano da una sandbox sulla home; il server video serve solo file effettivamente indicizzati, con supporto ai Range.
- **SVG generati dall'LLM.** Vengono mostrati come `<img>` con data URL (nessuno script può eseguire), ma devono essere XML valido: un sanitizer aggiunge il namespace e ripara attributi duplicati e `&` non escapati.
- **Doppio clic che "non entrava" nelle bolle.** Con il *pointer capture* sullo SVG, gli eventi `dblclick` arrivavano al canvas e non alla bolla: il tap/doppio tap viene riconosciuto a mano su `pointerup`.

## Scelte di prodotto

- **Socratico, non oracolo.** Il tutor è istruito a non dare la soluzione: fa domande, conferma, aggiunge un pezzo e rilancia. Più lento di una risposta diretta, ma è il punto.
- **Ogni affermazione ha una fonte.** Citazioni numerate ovunque — chat, quiz, mappe — con deep link al video. Le aggiunte generate dall'AI sulla mappa sono marcate "da verificare" e annullabili.
- **Il modello giusto per ogni task, scelto con un bake-off.** Ho confrontato i candidati su conversazione socratica, generazione quiz e valutazione, e scelto un modello da 12B che sta comodamente in 16 GB di VRAM insieme a embedding e reranker.
- **Generico per costruzione.** Nessun prompt o regola è legato a un corso specifico: qualsiasi corso con la stessa struttura di cartelle funziona.

## Limiti e prossimi passi

- Le illustrazioni SVG generate da un modello da 12B sono semplici e a volte imprecise (testo che si sovrappone): sono pensate come supporto visivo, con backend sostituibile.
- Le opzioni dei quiz a volte riprendono le frasi originali in inglese del materiale.
- App single-user e solo locale (by design): nessuna autenticazione né sincronizzazione.
- Prossimi passi: difficoltà adattiva nei quiz, valutazione automatica della qualità del retrieval su un set di domande, export delle carte verso Anki.

---

*Le conversazioni, i quiz, i riassunti e le mappe negli screenshot sono output reali dell'app, generati in locale sul materiale di un percorso di corsi front-end. Video, nomi del corso e percorsi dei file sono sfocati per rispetto dei diritti sul materiale.*

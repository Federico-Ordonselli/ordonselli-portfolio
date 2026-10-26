> Scheda di riferimento per `/projects/covershift`, copiata dall’overview di progetto del
> 26 ottobre 2026 e verificata su README e `docs/phase-2-report.md` del repository. Le
> schermate usate dal sito sono in `public/projects/covershift/` (da `docs/screenshots/`).

# Covershift — overview del progetto

**Repo:** github.com/Federico-Ordonselli/covershift · **Tipo:** progetto personale full stack, impostato come prodotto B2B · **Stato:** fase 2 completata (API + web app con test end-to-end in CI); fase 4 (deploy su AWS) predisposta · **Periodo:** ottobre 2026, ~48 commit / 34 PR

## Cos'è

Una piattaforma **multi-tenant per la pianificazione dei turni e lo scambio turni** pensata per team operativi (sicurezza aeroportuale, retail, sanità). I manager creano i turni della settimana, il personale se li scambia (offerta diretta a un collega o offerta aperta), e un manager approva lo scambio. Regola di dominio centrale: **nessuno lavora una postazione senza una certificazione valida fino alla fine del turno**.

Il progetto è organizzato per fasi con report scritti (`docs/phase-1-report.md`, `docs/phase-2-report.md`) e **Architecture Decision Records** (ADR) per le scelte importanti.

## Stack

| Area | Tecnologie |
|---|---|
| Monorepo | **pnpm workspaces** (`apps/api`, `apps/web`, `packages/shared`), Node 24, TypeScript strict |
| Backend | **NestJS 12**, TypeORM 1.x (migrazioni SQL revisionate), nestjs-zod, OpenAPI/Swagger, jose (JWT/JWKS) |
| Database / Auth | **Supabase** (Postgres + Auth), **Row Level Security**, trigger PL/pgSQL, exclusion constraint |
| Frontend | **React 19**, Vite 8, React Router, **TanStack Query**, react-hook-form, date-fns + @date-fns/tz, CSS Modules |
| Contratti condivisi | **Zod 4** in `packages/shared`: unica fonte di verità per validazione, OpenAPI e tipi del frontend |
| Test | Vitest (+ unplugin-swc), Testing Library, **MSW**, Supertest, **Playwright**, axe-core (WCAG 2.1 AA) |
| CI / Sicurezza | GitHub Actions, CodeQL, gitleaks, pnpm audit, Trivy, Dependabot, simple-git-hooks |
| Infra | Docker (immagine distroless), Terraform per AWS ECS Fargate (fase 4) |

## Funzionalità principali

- **Login** con Supabase Auth (signup pubblico disabilitato, account da seed/inviti).
- **Switcher di organizzazione**: l'organizzazione vive nell'URL ed è validata contro `/me`.
- **Calendario settimanale** nel fuso orario dell'organizzazione (lunedì→lunedì, sicuro rispetto al cambio ora legale).
- **Editor dei turni** per i manager con controllo di idoneità: membership attiva, certificazione valida fino a fine turno, nessuna sovrapposizione. Override delle certificazioni solo con motivazione (5–500 caratteri) salvata sul turno.
- **Scambi turno**: offerta diretta o aperta, accetta/rifiuta/annulla, inbox delle offerte ricevute.
- **Approvazioni manager**: approva/rifiuta nascosti se il manager è parte dello scambio.
- **Profilo lavoratore** con certificazioni, scadenze e postazioni abilitate.
- **API REST documentata** (OpenAPI UI su `/docs`) con paginazione keyset e errori RFC 9457.

## Scelte tecniche rilevanti

### Sicurezza "defense in depth" a livello di database
- **Il database è l'ultima linea di difesa, anche contro il proprio backend.** NestJS verifica il JWT di Supabase tramite JWKS (ES256, niente segreto condiviso), poi esegue ogni richiesta in **una transazione che impersona l'utente** (`set local role authenticated` + claims JWT). Sono le **policy RLS di Postgres** a decidere quali righe esistono per quell'utente.
- Il backend si connette con un ruolo **senza privilegi propri**: una query fuori dalla transazione fallisce invece di far trapelare dati.
- Isolamento dei tenant con **foreign key composite**, **exclusion constraint** contro i doppi turni e **macchina a stati dello scambio implementata come trigger**.
- Le tabelle di dominio stanno in uno schema non esposto dalla Data API di Supabase: l'unico accesso è l'API NestJS.
- Una **regola ESLint custom** fa fallire la build se una query SQL viene costruita con interpolazione o concatenazione.

### API robusta e contrattualizzata
- **Contratti Zod condivisi** tra API e frontend: la stessa definizione genera validazione, documentazione OpenAPI e tipi.
- **`docs/openapi.json` committato con un test di drift**: se il codice cambia senza aggiornare il contratto, la CI fallisce.
- **Envelope di errore unico (RFC 9457 `problem+json`)** con `code` stabile su *ogni* percorso, compresi guard, parsing, route sconosciute e body troppo grandi (413 invece di 500).
- 404 deliberatamente indistinguibile tra "non esiste" e "non puoi vederlo", per non rivelare l'esistenza di risorse di altri tenant.
- **Paginazione keyset** con cursore basato sulla chiave UTC del database (microsecondi + id), corretta anche per timestamp identici.

### Frontend
- API servita **same-origin sotto `/api`** (proxy Vite), quindi nessuna policy CORS da mantenere.
- **Refresh del token single-flight**: più 401 concorrenti condividono una sola chiamata di refresh; se fallisce si torna al login spiegando il motivo.
- Guard contro **open redirect** sul parametro `returnTo` (solo path same-origin).
- **Revoca del ruolo in tempo reale**: un 403 rifà il fetch di `/me` e la pagina diventa read-only mostrando la motivazione dell'API.
- **Mappatura completa degli errori**: ogni codice d'errore condiviso ha un messaggio, garantito da un `Record` totale in TypeScript.
- **Content-Security-Policy restrittiva** (niente script/stili inline, niente `eval`, `connect-src` limitato) servita anche in `vite preview`: i test e2e girano sotto la policy reale e falliscono a ogni violazione.
- Mock MSW **validati con gli stessi schemi Zod**, così i mock non possono divergere dall'API.

### Qualità, test e CI
- Numeri a fine fase 2: **36 test shared, 59 unit API, 196 integration/e2e API, 84 test di componenti web, 14 test Playwright**.
- Test di **isolamento tra tenant e macchina a stati a livello SQL**, eseguiti con il vero ruolo dell'API; test di concorrenza sui claim degli scambi; test con token contraffatti, id di altri tenant e mass assignment.
- **Controlli negativi**: disattivando RLS, rimuovendo una regola o la verifica del token, i test corrispondenti diventano rossi (verificato).
- E2E Playwright di uno **scambio completo tra tre utenti** (offerta → accettazione → approvazione → riassegnazione), con **axe WCAG 2.1 AA** a ogni run.
- **Un unico check obbligatorio "CI gate"** che dipende da tutti i job e fallisce anche se un job è saltato o annullato.
- Pipeline di sicurezza: CodeQL, gitleaks sull'intera storia, audit delle dipendenze, Trivy sull'immagine Docker, `supabase db lint` (plpgsql_check), Actions pinnate per SHA, permessi minimi.
- Seed rieseguibile, con un test che verifica che i dati demo rispettino le regole di dominio usando lo stesso servizio di idoneità dell'API.

## Bullet pronti per il CV

- Ho progettato e sviluppato **Covershift**, una piattaforma **multi-tenant** per pianificazione e scambio turni, in un **monorepo TypeScript** con **NestJS 12, React 19, Supabase (Postgres) e Zod**.
- Ho implementato l'autorizzazione con **Row Level Security di Postgres attraverso NestJS**: ogni richiesta gira in una transazione che impersona l'utente, con vincoli, trigger ed exclusion constraint come ultima difesa dei dati.
- Ho definito **contratti Zod condivisi** tra backend e frontend da cui derivano validazione, documentazione **OpenAPI** e tipi, con un test che blocca la CI quando il contratto diverge dal codice.
- Ho sviluppato il frontend con **React, TanStack Query e React Router**: refresh del token single-flight, gestione completa degli errori RFC 9457, calendario multi-timezone e **CSP restrittiva** verificata nei test.
- Ho scritto oltre **380 test** (unit, integrazione su database reale, componenti con MSW, **end-to-end Playwright con axe/WCAG 2.1 AA**) e una **pipeline CI/CD** su GitHub Actions con CodeQL, gitleaks, Trivy e Dependabot.
- Ho documentato le decisioni architetturali con **ADR** e report di fase, lavorando per pull request con conventional commits.

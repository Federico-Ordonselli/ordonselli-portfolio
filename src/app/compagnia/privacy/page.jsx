import SectionHeader from '../../../components/SectionHeader';

// Informativa privacy dell'app Android «Compagnia» (link richiesto da Google Play).
// Fonte: store/privacy-policy.md nel repo privato dell'app. Se cambia lì, aggiornare anche qui.
const OWNER = 'Ogzorp';
const CONTACT = 'Ogzorp@gmail.com';
const UPDATED = '20 novembre 2026';

export const metadata = {
  title: 'Compagnia — Informativa sulla privacy',
  description: 'Informativa sulla privacy di Compagnia, l’app per la scheda del personaggio di D&D: nessun dato raccolto, nessun permesso.',
  alternates: { canonical: '/compagnia/privacy' },
};

export default function Page() {
  const mail = CONTACT && <a href={`mailto:${CONTACT}`}>{CONTACT}</a>;
  return <div className="inner-page wrap legal-page" lang="it">
    <SectionHeader title="Privacy di Compagnia" subtitle="App Android · informativa" number="—" />
    <dl className="legal-facts">
      <div><dt>Ultimo aggiornamento</dt><dd>{UPDATED}</dd></div>
      {OWNER && <div><dt>Titolare e sviluppatore</dt><dd>{OWNER}</dd></div>}
      {CONTACT && <div><dt>Contatto</dt><dd>{mail}</dd></div>}
    </dl>

    <h2>In breve</h2>
    <p>Compagnia non raccoglie dati. Non ha account, pubblicità, statistiche d’uso né servizi online, e non invia nulla allo sviluppatore o a terzi. L’app Android non chiede alcun permesso e non accede a Internet.</p>

    <h2>Dati che restano sul tuo dispositivo</h2>
    <ul>
      <li>I personaggi che crei: nome, valori di gioco, armi, incantesimi, inventario, storia e appunti.</li>
      <li>L’immagine del personaggio, se ne carichi una: viene ridotta e salvata insieme al personaggio. L’immagine originale non viene copiata né inviata. I ritratti già inclusi nell’app fanno parte dell’app stessa: del tuo personaggio si salva solo quale hai scelto.</li>
      <li>Il tema scelto (chiaro o scuro).</li>
    </ul>
    <p>Questi dati sono salvati solo nella memoria privata dell’app. Lo sviluppatore non può accedervi.</p>

    <h2>Quando i dati lasciano il dispositivo</h2>
    <p>Solo per azioni tue o per funzioni di sistema che controlli tu:</p>
    <ul>
      <li><strong>Backup che esporti.</strong> «Esporta backup» crea un file con tutti i personaggi, che salvi o condividi dove decidi tu.</li>
      <li><strong>Backup di Android.</strong> Se sul dispositivo è attivo il backup di Google, il sistema può includere una copia dei personaggi nel backup del tuo account Google, per ripristinarli su un nuovo dispositivo. Il backup è gestito da Google secondo le sue condizioni e si disattiva dalle impostazioni di Android. Lo sviluppatore non riceve questi dati.</li>
      <li><strong>Stampa.</strong> «Stampa scheda» passa la scheda al servizio di stampa del dispositivo.</li>
      <li><strong>Link esterni.</strong> I link a siti esterni (per esempio al testo dell’SRD e della licenza) si aprono nel browser: su quei siti valgono le loro informative.</li>
    </ul>

    <h2>Permessi</h2>
    <p>Nessuno. Immagini e file di backup si scelgono con il selettore di sistema, che consegna all’app solo il file indicato.</p>

    <h2>Conservazione e cancellazione</h2>
    <p>I dati restano finché non li elimini. «Elimina personaggio» cancella un personaggio. Disinstallare l’app o usare «Cancella dati» nelle impostazioni di Android cancella tutto ciò che l’app ha salvato sul dispositivo. I file di backup che hai esportato restano dove li hai messi.</p>

    <h2>Minori</h2>
    <p>L’app non raccoglie dati personali di nessuno, quindi nemmeno di minori.</p>

    <h2>Modifiche</h2>
    <p>Se il comportamento dell’app cambia, questa informativa viene aggiornata e la data in alto modificata.</p>

    {CONTACT && <><h2>Contatti</h2><p>Per domande su questa informativa: {mail}.</p></>}
  </div>;
}

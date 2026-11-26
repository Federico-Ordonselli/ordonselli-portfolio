// Notifica a IndexNow (Bing, Yandex, Seznam…) tutti gli URL della sitemap pubblicata.
// Uso, dopo un deploy: npm run indexnow
// La chiave è pubblica per design: deve essere servita su https://www.ordonselli.info/<chiave>.txt
const KEY = 'e8fe2b7c34a7c5107c96a94c8f34fa75';
const HOST = 'www.ordonselli.info';
const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URL inviati → HTTP ${res.status}`);
if (!res.ok) { console.error(await res.text()); process.exit(1); }

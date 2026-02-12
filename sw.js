const nombreCache = 'Metal-Paradox-v3'; 
const archivosCache = [
  './',
  './index.html',
    './album1.html',
    './album2.html',
    './album3.html',
    './album4.html',
    './album5.html',
    './album6.html',
    './album7.html',
    './album8.html',
    './album9.html',
    './album10.html',
    './album11.html',
    './album12.html',
    './album13.html',
    './album14.html',
    './album15.html',
    './album16.html',
    './album17.html',
    './album18.html',
    './creditos.html',
    './demo.html',
    './estilo.css',
    './manifest.json',
    './goty.png' 
];
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(nombreCache).then(cache => {
      return cache.addAll(archivosCache);
    }).then(() => self.skipWaiting()) 
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== nombreCache) return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

// What Should We Do? — service worker (v7)
// Strategy: stale-while-revalidate. Serve from cache instantly for a fast launch,
// fetch a fresh copy in the background, and use it on the next load. This avoids the
// v1 "trapped on an old version" problem without making every launch wait on the network.
const CACHE = 'arya-v8';
const SHELL = [
  './', './index.html', './activities.js', './manifest.webmanifest',
  './arya-hero.jpg', './icon-192.png', './icon-512.png',
  './icon-maskable-512.png', './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return; // let fonts etc. go straight to network

  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(req).then(cached => {
        const network = fetch(req).then(res => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        }).catch(() => cached);
        return cached || network;               // instant if cached, else wait for network
      })
    )
  );
});

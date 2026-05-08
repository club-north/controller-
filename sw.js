const CACHE = 'fpv-ctrl-v1';
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./','./index.html','./manifest.json','./icon.png']))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.map(kk => kk!==CACHE && caches.delete(kk))))));

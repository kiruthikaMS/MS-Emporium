self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('ms-v1').then(cache => {
      return cache.addAll(['index.html', 'css/style.css', 'js/script.js', 'manifest.json']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
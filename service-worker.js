// Aqui se hace la instalacion  del Service Worker
self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open('my-pwa-cache').then(function (cache) {
        return cache.addAll(['index.html', 'app.js', 'manifest.json']);
      })
    );
  });
  
  // Activación del Service Worker
  self.addEventListener('activate', function (event) {
    // Eliminar cachés antiguas si es necesario
  });
  
  // Interceptar las solicitudes y responder desde el caché si está disponible
  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  });
  
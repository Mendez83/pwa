//Service Worker

var CACHE_NAME = 'app-cache-01';

var urlsToCacheOnSWInstall = [
    'qrcode.js'
];


self.addEventListener('install', function (event) {
    // Perform install steps
    console.debug("SW: Install");
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCacheOnSWInstall);
            })
    );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
var CACHE_NAME = 'pwa-task-manager';
var urlsToCache = [
  '/'
];

self.addEventListener("install", (e) => {
    self.skipWaiting();
    e.waitUntil(
      caches.open(appVersion).then((cache) => {
        return cache
          .addAll(files)
          .then(() => console.log("App Version: " + appVersion))
          .catch((err) => console.error("Error adding files to cache", err));
      })
    );
  });
  self.addEventListener("activate", (e) => {
    e.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            if (cache !== appVersion) {
              console.info("Deleting Old Cache", cache);
              return caches.delete(cache);
            }
          })
        );
      })
    );
    return self.clients.claim();
  });
  self.addEventListener("fetch", (e) => {
    const req = e.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) return e.respondWith(cacheFirst(req));
    else return e.respondWith(networkFirst(req));
  });
  async function cacheFirst(req) {
    let cacheRes = await caches.match(req);
    return cacheRes || fetch(req);
  }
  async function networkFirst(req) {
    const dynamicCache = await caches.open("dynamic");
    try {
      const networkResponse = await fetch(req);
      if (req.method !== "POST") dynamicCache.put(req, networkResponse.clone());
      return networkResponse;
    } catch (err) {
      const cacheResponse = await caches.match(req);
      return cacheResponse;
    }
  }
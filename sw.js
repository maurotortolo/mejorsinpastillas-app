/* Mejor sin pastillas · service worker. Al publicar una versión nueva, cambiar VERSION. Nunca toca los datos guardados (localStorage). */
const VERSION = "msp-2026-11-18-1";
const FILES = ["./", "./index.html", "./fuerza/", "./fuerza/index.html", "./planilla/", "./planilla/index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* Red primero (para recibir siempre la última versión); si no hay conexión, la copia guardada. */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy)).catch(() => {});
      return r;
    }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match("./")))
  );
});

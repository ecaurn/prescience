const CACHE = "prescience-v1";
const SOCLE = ["./", "index.html", "assets/css/main.css", "assets/js/main.js", "assets/vendor/lenis.min.js", "assets/vendor/gsap.min.js", "assets/vendor/ScrollTrigger.min.js"];
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SOCLE); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(noms){
    return Promise.all(noms.filter(function(n){ return n !== CACHE; }).map(function(n){ return caches.delete(n); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener("fetch", function(e){
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(function(deja){
    var reseau = fetch(e.request).then(function(rep){
      if (rep && rep.ok && new URL(e.request.url).origin === location.origin) {
        var copie = rep.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, copie); });
      }
      return rep;
    }).catch(function(){ return deja; });
    return deja || reseau;
  }));
});

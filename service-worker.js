var cacheName = 'petstore-v1'
var cacheFiles = [
    'index.html',
    'data.js',
    'index.webmanifest',
    'images/art_class.jpeg',
    'images/coding_workshop.png',
    'images/language.jpeg',
    'images/math.jpeg',
    'images/science_club.png'
]

self.addEventListener('install',(e) => {
    console.log('[Service worker] Installing');
    e.waitUntil(
        caches.open(cacheName).then((cache)=>{
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles)
        })
    )
})

self.addEventListener('fetch',(e) => {
    e.respondWith(
        caches.match(e.request).then((r)=>{
            console.log(`[Service Worker] Fetching resources: ${e.request.url}`);
            return r
        })
    )
})
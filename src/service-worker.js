self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

// Network First
[
  '/$', // Index
  '/', // Anything in the same host
  '.+/' // Anything in any host
]
  .forEach(mask => {
    workbox.routing.registerRoute(
      new RegExp(mask),
      new workbox.strategies.NetworkFirst({ cacheName: 'dynamic' })
    )
  })

let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/favicon.ico',
                '/manifest.json',
                '/static/js/vendors~main.chunk.js',
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/static/css/main.chunk.css',
                '/bootstrap.min.css',
                '/index.html',
                '/'
            ])
        })
    )
})

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((result) => {
            if (result) 
            {
                return result
            }
           
        })
    )
})

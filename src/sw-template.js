importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');
workbox.loadModule('workbox-background-sync');
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
// const { PrecacheFallbackPlugin } = workbox.precaching;
const { NetworkFirst } = workbox.strategies;
// const { BackgroundSyncPlugin } = workbox.backgroundSync;


registerRoute(
    ({ event }) => event.request.mode === 'navigate',
    async () => {
        const defaultBase = '/index.html';
        return caches
            .match(workbox.precaching.getCacheKeyForURL(defaultBase))
            .then(response => {
                return response || fetch(defaultBase);
            })
            .catch(err => {
                return fetch(defaultBase);
            });
    }
);


const cacheNetworkFirst = [
    '/api/login/renew',
    '/api/users'
]

registerRoute(
    ({ request, url }) => {
        if (cacheNetworkFirst.includes(url.pathname)) return true
        return false;
    },
    new NetworkFirst()
)


// const cacheFirstNetwork = [
//     'http://localhost:3000/dashboard/app',
//     'http://localhost:3000/dashboard/user'
// ]

// registerRoute(
//     ({ request, url }) => {
//         if (cacheFirstNetwork.includes(url.href)) return true
//         return false;
//     },
//     new CacheFirst()
// )
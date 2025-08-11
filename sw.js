const workboxVersion = "5.1.3";

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
  prefix: "Jing",
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

// 注册成功后要立即缓存的资源列表
// 具体缓存列表在gulpfile.js中配置，见下文
workbox.precaching.precacheAndRoute([{"revision":"296f94a889df7f0ca651d007b30b25e7","url":"./404.html"},{"revision":"a331caee8cdba71364792b4a8f48ca2d","url":"./index.html"},{"revision":"5a6ecf34399a1729b115064d2f283227","url":"./js/main.js"},{"revision":"34ed9567ca3e095c655d6adbaef1348c","url":"./css/index.css"}], {
  directoryIndex: null,
});

// 清空过期缓存
workbox.precaching.cleanupOutdatedCaches();

// 图片资源（可选，不需要就注释掉）
// workbox.routing.registerRoute(
//   /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'images',
//     plugins: [
//       new workbox.expiration.ExpirationPlugin({
//         maxEntries: 1000,
//         maxAgeSeconds: 60 * 60 * 24 * 30,
//       }),
//       new workbox.cacheableResponse.CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//     ],
//   })
// )

// 字体文件（可选，不需要就注释掉）
workbox.routing.registerRoute(
  /\.(?:eot|ttf|woff|woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "fonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// 谷歌字体（可选，不需要就注释掉）
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets",
  })
);
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// jsdelivr的CDN资源（可选，不需要就注释掉）
// workbox.routing.registerRoute(
//   /^https:\/\/cdn\.jsdelivr\.net/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'static-libs',
//     plugins: [
//       new workbox.expiration.ExpirationPlugin({
//         maxEntries: 1000,
//         maxAgeSeconds: 60 * 60 * 24 * 30,
//       }),
//       new workbox.cacheableResponse.CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//     ],
//   })
// )

workbox.googleAnalytics.initialize();
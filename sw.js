/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/02/25/Time-Series Basic Knowledge/index.html","b923ea4e6b39c37dd9658d60cc0aebfd"],["/2023/02/25/计量经济学基础知识/index.html","94b9c6aa35a52781ee6b19795b3ccc07"],["/404.html","7657c1e68a1252bb7ce9a2da8437f392"],["/about/index.html","0f099ae27f17e4e17218df99f40cfdfd"],["/archives/2023/02/index.html","e3a35e31984308f9f7f252c5e3cd4253"],["/archives/2023/index.html","e57f35f74d65b6759ce9a0adf189c083"],["/archives/index.html","6dca6116cf2cd950fa54730d79e1733d"],["/categories/Econometric/index.html","92dc388f71e184d3142e4839e6644d82"],["/categories/index.html","0fbee69675545e78e383c35b8054ad80"],["/css/index.css","156d53c2cebeb418ebd35a35e737fe10"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","b85cb4915f9d05e8d23d846e0f5b292b"],["/gallery/photo/assets/2tu9JC8ewpBFagv.jpg","307a492adcbb43423e0011b55e0b66c6"],["/gallery/photo/assets/6nepIJ1xTgufatZ.jpg","f37d0f3af738990ef29875e147d860c5"],["/gallery/photo/assets/E7Jvr4eIPwUNmzq.jpg","bc72b5cfd20de2d8ffda04b09898bd67"],["/gallery/photo/assets/Fze9jchtnyJXMHN.jpg","e5deb7b0cdfb8bce365ad03a0fcfa14c"],["/gallery/photo/assets/IMG_20201218_224254_edit_176193695669468.jpg","f2dd87e852cc263e229044d1e6e6c359"],["/gallery/photo/assets/d6QHbytlSYO4FBG.jpg","5821bbafaa3f5ce6336e3684a8b0deb7"],["/gallery/photo/assets/gEy5Zc1Ai6VuO4N.jpg","ab1767e268086f820f00dfbc52a43309"],["/gallery/photo/assets/mh19anwBSWIkGlH.jpg","b0a14c0b3c6ead1b5b064fb954361f81"],["/gallery/photo/assets/ryLVePaqkYm4TEK.jpg","94fd2e6ff4b848c5f4c02305d3b6ba5c"],["/gallery/photo/index.html","fc9847e05dd90029ee05a8dead38f87e"],["/gallery/wallpaper/assets/2tu9JC8ewpBFagv.jpg","307a492adcbb43423e0011b55e0b66c6"],["/gallery/wallpaper/assets/E7Jvr4eIPwUNmzq.jpg","bc72b5cfd20de2d8ffda04b09898bd67"],["/gallery/wallpaper/assets/Fze9jchtnyJXMHN.jpg","e5deb7b0cdfb8bce365ad03a0fcfa14c"],["/gallery/wallpaper/assets/mh19anwBSWIkGlH.jpg","b0a14c0b3c6ead1b5b064fb954361f81"],["/gallery/wallpaper/assets/wallhaven-qd5z8l.jpg","5d0baceeb4c2dfbd40da5c8bb0cc9981"],["/gallery/wallpaper/assets/wallhaven-ym51o7.jpg","a16f760d69ccda7d30fa3cc52012f61a"],["/gallery/wallpaper/index.html","b8bb2c1360304349ddac9e7a0f99d3c3"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/bg.jpg","7aecfdeec6b40c74dde4727c94cb32a4"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/siteicon/android-chrome-192x192.png","c19881bc77f494832054a6a84f07c4d5"],["/img/siteicon/android-chrome-512x512.png","a54a5ecf882b3a348e2551ef063238d0"],["/img/siteicon/apple-touch-icon.png","46f7aba347e73ddaf11301637a333844"],["/img/siteicon/favicon-16x16.png","638ef42ffd84c2162cf776d37072f0dd"],["/img/siteicon/favicon-32x32.png","ffe080265d0b111f4257106a8a4695ed"],["/img/siteicon/mstile-150x150.png","93724533a35f173ac81dced03b78ccdb"],["/img/siteicon/safari-pinned-tab.svg","8f8dd6b5e6c8d4615c12b53aa9e6960c"],["/index.html","095ef19bc7bf37e773b5eec07006295c"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/sourcejsmodify.js","309a916e41b0599dd5d656055ad666fb"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","e52f80864cdb35e141d5305beac9a4fe"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","f23741e132ff47b58c4d1e77f4b51ca9"],["/poems/index.html","6ea1f314ecad7f6c8da95fd86d524c78"],["/service-worker.js","38ffd4cbf5827f306c19ecfacc0e8d28"],["/sw-register.js","e0b009cbbe8a4ad84e005887696f2626"],["/tags/Time-series/index.html","ebce7e8deb3439bf4bda9852350e0567"],["/tags/index.html","b75a38dcc63c689d7ef4e8ec386e0586"],["/tags/线性回归/index.html","ec58f18821463b5241ebafa9c0713c38"],["/talk/index.html","4b15ba71a3843e2a4d61fcce01805d9b"],["/workbox-d249b2c8.js","fd0fdefe51f0e5a4116773ed1c2a5fb0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

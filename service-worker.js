if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let d={};const f=e=>i(e,s),l={module:{uri:s},exports:d,require:f};a[s]=Promise.all(c.map((e=>l[e]||f(e)))).then((e=>(r(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/02/25/Time-Series Basic Knowledge/",revision:"29c786cdc5eb955ac1245b57ed439b7a"},{url:"2023/02/25/计量经济学基础知识/",revision:"c439b2a19a0227a2f9b4e43cc95b5a28"},{url:"404.html",revision:"81b60c462c606010c02e04eafff7e382"},{url:"about/",revision:"b8e60ecd5eabf0c4723a6cce6ebfda14"},{url:"archives/2023/02/",revision:"03ef6cb47b518a7aedb7b7cb836efe47"},{url:"archives/2023/",revision:"5391bb8b8b1a8cbb0a0f53baf612b0fe"},{url:"archives/",revision:"85d41982182f49079f03c0cbf8899cf6"},{url:"assets/douban-loading.gif",revision:"b86c6b435fc25c1366acaafc3fb5c252"},{url:"categories/Econometric/",revision:"71ac718b9d175eb33e3cecc0bc7bea92"},{url:"categories/",revision:"f752be113afdb9d31bb0ff386817fdea"},{url:"css/custom.css",revision:"33e322ac025484ad89354c8ff8f2d02f"},{url:"css/index.css",revision:"156d53c2cebeb418ebd35a35e737fe10"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/",revision:"449382381ac7ac8dfd4151b932cf2de2"},{url:"gallery/photo/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/photo/assets/6nepIJ1xTgufatZ.jpg",revision:"f37d0f3af738990ef29875e147d860c5"},{url:"gallery/photo/assets/d6QHbytlSYO4FBG.jpg",revision:"5821bbafaa3f5ce6336e3684a8b0deb7"},{url:"gallery/photo/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/photo/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/photo/assets/gEy5Zc1Ai6VuO4N.jpg",revision:"ab1767e268086f820f00dfbc52a43309"},{url:"gallery/photo/assets/IMG_20201218_224254_edit_176193695669468.jpg",revision:"f2dd87e852cc263e229044d1e6e6c359"},{url:"gallery/photo/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/photo/assets/ryLVePaqkYm4TEK.jpg",revision:"94fd2e6ff4b848c5f4c02305d3b6ba5c"},{url:"gallery/photo/",revision:"0daab1ea8d58b7625cbb29905457b3fd"},{url:"gallery/wallpaper/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/wallpaper/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/wallpaper/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/wallpaper/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/wallpaper/assets/wallhaven-qd5z8l.jpg",revision:"5d0baceeb4c2dfbd40da5c8bb0cc9981"},{url:"gallery/wallpaper/assets/wallhaven-ym51o7.jpg",revision:"a16f760d69ccda7d30fa3cc52012f61a"},{url:"gallery/wallpaper/",revision:"df040796937b441dd1371fa5cb3ef7c7"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"7aecfdeec6b40c74dde4727c94cb32a4"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/siteicon/android-chrome-192x192.png",revision:"c19881bc77f494832054a6a84f07c4d5"},{url:"img/siteicon/android-chrome-512x512.png",revision:"a54a5ecf882b3a348e2551ef063238d0"},{url:"img/siteicon/apple-touch-icon.png",revision:"46f7aba347e73ddaf11301637a333844"},{url:"img/siteicon/favicon-16x16.png",revision:"638ef42ffd84c2162cf776d37072f0dd"},{url:"img/siteicon/favicon-32x32.png",revision:"ffe080265d0b111f4257106a8a4695ed"},{url:"img/siteicon/mstile-150x150.png",revision:"93724533a35f173ac81dced03b78ccdb"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"8f8dd6b5e6c8d4615c12b53aa9e6960c"},{url:"/",revision:"9c7d2f75c055030f7396d78d9971a129"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/modify.js",revision:"309a916e41b0599dd5d656055ad666fb"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/",revision:"1a782c0c94599f47ce51e60a654d762f"},{url:"music/",revision:"8646c4bad4186667b9de0eefd911acf3"},{url:"poems/",revision:"7dd58e3979010eeff24108cd229de770"},{url:"tags/",revision:"0a557f306ecb818d17d2801247967f0d"},{url:"tags/Time-series/",revision:"a1becff6c567508bd3b6fa2024f12d26"},{url:"tags/线性回归/",revision:"ae64947465191bc48ba2dbff68545b34"},{url:"talk/",revision:"b364577b6477a1f8aff7082eee5ef4b6"}],{})}));
if(!self.define){let e,a={};const l=(l,r)=>(l=new URL(l+".js",r).href,a[l]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=a,document.head.appendChild(e)}else e=l,importScripts(l),a()})).then((()=>{let e=a[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(r,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let c={};const d=e=>l(e,i),f={module:{uri:i},exports:c,require:d};a[i]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/02/25/Time-Series Basic Knowledge/index.html",revision:"5f75e2cd73031912c1c86faed8bf11e5"},{url:"2023/02/25/计量经济学基础知识/index.html",revision:"48577bdb5450019a1dccf843012041ff"},{url:"404.html",revision:"e57ee8ae492162f3f2c6d92b98aaa700"},{url:"about/index.html",revision:"f3b4c136fabcef384a10e5aef7393769"},{url:"archives/2023/02/index.html",revision:"4ee8bc070cc87a378e92f58c548ca04a"},{url:"archives/2023/index.html",revision:"4bdd635f288a20e8f9174e85ba92dc60"},{url:"archives/index.html",revision:"aefb248c11bf09446541a90920e3869b"},{url:"categories/Econometric/index.html",revision:"56046e808993bb52b10efe382c782e18"},{url:"categories/index.html",revision:"24b7bcfcdb2b7dfb8e8035e3d835df7e"},{url:"css/index.css",revision:"9b942d1beaec1ad80b6e3bbe96e4d341"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"1496e8e3931727597aca1033d8f30600"},{url:"gallery/photo/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/photo/assets/6nepIJ1xTgufatZ.jpg",revision:"f37d0f3af738990ef29875e147d860c5"},{url:"gallery/photo/assets/d6QHbytlSYO4FBG.jpg",revision:"5821bbafaa3f5ce6336e3684a8b0deb7"},{url:"gallery/photo/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/photo/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/photo/assets/gEy5Zc1Ai6VuO4N.jpg",revision:"ab1767e268086f820f00dfbc52a43309"},{url:"gallery/photo/assets/IMG_20201218_194520.jpg",revision:"0dbe57a7cf918a96adefe22041889476"},{url:"gallery/photo/assets/IMG_20201218_210652.jpg",revision:"e32745fe90ca1b29fc19fa1f93a0ff7e"},{url:"gallery/photo/assets/IMG_20201218_224254_edit_176193695669468.jpg",revision:"f2dd87e852cc263e229044d1e6e6c359"},{url:"gallery/photo/assets/IMG_20201218_224408.jpg",revision:"b6458a2e30b6ab4e406d12b3d244218d"},{url:"gallery/photo/assets/IMG_20201218_224430.jpg",revision:"9f9176a58bcb5dc5a4735a62703359c0"},{url:"gallery/photo/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/photo/assets/ryLVePaqkYm4TEK.jpg",revision:"94fd2e6ff4b848c5f4c02305d3b6ba5c"},{url:"gallery/photo/index.html",revision:"6525779fb6d424ad5d91154a1bde733b"},{url:"gallery/wallpaper/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/wallpaper/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/wallpaper/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/wallpaper/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/wallpaper/assets/wallhaven-1kx8k9.jpg",revision:"0c53c583164a848b3e2059f54e823ea4"},{url:"gallery/wallpaper/assets/wallhaven-28vm5y.jpg",revision:"f642eae755916232a9d6f559e9ae1a6c"},{url:"gallery/wallpaper/assets/wallhaven-3lor96.jpg",revision:"fe6d59f21edb9f21f76d7be12c2594a7"},{url:"gallery/wallpaper/assets/wallhaven-od3775.jpg",revision:"dd79c686ed4703a41c9d57efe66944e8"},{url:"gallery/wallpaper/assets/wallhaven-qd5z8l.jpg",revision:"5d0baceeb4c2dfbd40da5c8bb0cc9981"},{url:"gallery/wallpaper/assets/wallhaven-ym51o7.jpg",revision:"a16f760d69ccda7d30fa3cc52012f61a"},{url:"gallery/wallpaper/index.html",revision:"be68a07e0a9f43cf4dccbc36ccee36d4"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"7aecfdeec6b40c74dde4727c94cb32a4"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"c0f303a6a0eb00b784c0c53970e987af"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/index.html",revision:"e08547da0f97ec6c39ee1d62dcf68615"},{url:"movies/index.html",revision:"a5167cc0ed2ab5748fd50ef91f2f393b"},{url:"music/index.html",revision:"866c31f40740bf222d7467db7f97d565"},{url:"poems/index.html",revision:"8fe880de73e224a862868c6416aac949"},{url:"tags/index.html",revision:"0b3c49fcbabad0e80c2d79a1b8a3ff73"},{url:"tags/Time-series/index.html",revision:"1a7a77e663458ffa63dd7f6068b965b2"},{url:"tags/线性回归/index.html",revision:"a1e72357a598de1f76786189662163d7"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

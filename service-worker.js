if(!self.define){let e,a={};const l=(l,r)=>(l=new URL(l+".js",r).href,a[l]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=a,document.head.appendChild(e)}else e=l,importScripts(l),a()})).then((()=>{let e=a[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(r,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let c={};const d=e=>l(e,i),f={module:{uri:i},exports:c,require:d};a[i]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/02/25/Time-Series Basic Knowledge/index.html",revision:"5f75e2cd73031912c1c86faed8bf11e5"},{url:"2023/02/25/计量经济学基础知识/index.html",revision:"48577bdb5450019a1dccf843012041ff"},{url:"404.html",revision:"f6d6e8c6eb1bbd78602518c24759a1dc"},{url:"about/index.html",revision:"16af8da7b29a874d791e67c4b165d073"},{url:"archives/2023/02/index.html",revision:"b67013382b4dd3fd6ea5c4db4a03eb5e"},{url:"archives/2023/index.html",revision:"29f93f5a49160fd4f0e2755ae1f5736e"},{url:"archives/index.html",revision:"3ec325fcf9fd98cb5e3b1f35ae5f24cf"},{url:"categories/Econometric/index.html",revision:"80f24db8987d1f623c8316abf214bfd8"},{url:"categories/index.html",revision:"e36e583586b109355cebf43a48b101f5"},{url:"css/index.css",revision:"9b942d1beaec1ad80b6e3bbe96e4d341"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"7e8a7bb8ccd0486a8c27ce30400db366"},{url:"gallery/photo/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/photo/assets/6nepIJ1xTgufatZ.jpg",revision:"f37d0f3af738990ef29875e147d860c5"},{url:"gallery/photo/assets/d6QHbytlSYO4FBG.jpg",revision:"5821bbafaa3f5ce6336e3684a8b0deb7"},{url:"gallery/photo/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/photo/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/photo/assets/gEy5Zc1Ai6VuO4N.jpg",revision:"ab1767e268086f820f00dfbc52a43309"},{url:"gallery/photo/assets/IMG_20201218_194520.jpg",revision:"0dbe57a7cf918a96adefe22041889476"},{url:"gallery/photo/assets/IMG_20201218_210652.jpg",revision:"e32745fe90ca1b29fc19fa1f93a0ff7e"},{url:"gallery/photo/assets/IMG_20201218_224254_edit_176193695669468.jpg",revision:"f2dd87e852cc263e229044d1e6e6c359"},{url:"gallery/photo/assets/IMG_20201218_224408.jpg",revision:"b6458a2e30b6ab4e406d12b3d244218d"},{url:"gallery/photo/assets/IMG_20201218_224430.jpg",revision:"9f9176a58bcb5dc5a4735a62703359c0"},{url:"gallery/photo/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/photo/assets/ryLVePaqkYm4TEK.jpg",revision:"94fd2e6ff4b848c5f4c02305d3b6ba5c"},{url:"gallery/photo/index.html",revision:"7d58f63a23cadc10af9f4309f0e8232d"},{url:"gallery/wallpaper/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/wallpaper/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/wallpaper/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/wallpaper/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/wallpaper/assets/wallhaven-1kx8k9.jpg",revision:"0c53c583164a848b3e2059f54e823ea4"},{url:"gallery/wallpaper/assets/wallhaven-28vm5y.jpg",revision:"f642eae755916232a9d6f559e9ae1a6c"},{url:"gallery/wallpaper/assets/wallhaven-3lor96.jpg",revision:"fe6d59f21edb9f21f76d7be12c2594a7"},{url:"gallery/wallpaper/assets/wallhaven-od3775.jpg",revision:"dd79c686ed4703a41c9d57efe66944e8"},{url:"gallery/wallpaper/assets/wallhaven-qd5z8l.jpg",revision:"5d0baceeb4c2dfbd40da5c8bb0cc9981"},{url:"gallery/wallpaper/assets/wallhaven-ym51o7.jpg",revision:"a16f760d69ccda7d30fa3cc52012f61a"},{url:"gallery/wallpaper/index.html",revision:"0802ab0bc3f30d5f317bda7145b3c058"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"7aecfdeec6b40c74dde4727c94cb32a4"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"b3449eb297ac5e55cb9faa4401ce695c"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/index.html",revision:"76d686accde24d06f6d6308b609f9276"},{url:"music/index.html",revision:"145ff67f1eb8eefeae6ff3821be79577"},{url:"poems/index.html",revision:"3818bfa040560cb9706d40dbbf77ab1d"},{url:"tags/index.html",revision:"6c178d3def3237da5823fa0023034ff7"},{url:"tags/Time-series/index.html",revision:"24175186ff732834997111aeba4d62e2"},{url:"tags/线性回归/index.html",revision:"630fe17ec1c28bdbf6754b352c87d6f1"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

if(!self.define){let e,a={};const i=(i,r)=>(i=new URL(i+".js",r).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let d={};const l=e=>i(e,c),f={module:{uri:c},exports:d,require:l};a[c]=Promise.all(r.map((e=>f[e]||l(e)))).then((e=>(s(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/02/25/Time-Series Basic Knowledge/",revision:"5085add5cd572b4a0f607f23977ce47f"},{url:"2023/02/25/计量经济学基础知识/",revision:"2ea3b11f6b6cdcd2b19b207cf6791976"},{url:"404.html",revision:"17df236ce0a86715b5c33901e00a0d07"},{url:"about/",revision:"bc3ac84f93da44ab5ab630d4b48152e4"},{url:"archives/2023/02/",revision:"6f3ab248bf0b22ab4da31402e28d494c"},{url:"archives/2023/",revision:"96ea7228bbaf5f363ec74bb2d9edaf63"},{url:"archives/",revision:"1bdfd42b0ddf1805bee4ad236a68065b"},{url:"categories/Econometric/",revision:"f14d6b43c11755ede3c9382a09a14942"},{url:"categories/",revision:"8b387e184999def712e10120ea7db791"},{url:"comments/index-1.html",revision:"901f4ea78923ebb7dc33df7b79f3d68a"},{url:"comments/",revision:"bc4f817466877d9b121857f978077ef6"},{url:"css/custom.css",revision:"33e322ac025484ad89354c8ff8f2d02f"},{url:"css/index.css",revision:"156d53c2cebeb418ebd35a35e737fe10"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/",revision:"9f6247847c9b3f00245507350a117157"},{url:"gallery/photo/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/photo/assets/6nepIJ1xTgufatZ.jpg",revision:"f37d0f3af738990ef29875e147d860c5"},{url:"gallery/photo/assets/8142915ff8325a0a359652c6fa89026.jpg",revision:"16ce37527468855914921cd8b1a4c38c"},{url:"gallery/photo/assets/d6QHbytlSYO4FBG.jpg",revision:"5821bbafaa3f5ce6336e3684a8b0deb7"},{url:"gallery/photo/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/photo/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/photo/assets/gEy5Zc1Ai6VuO4N.jpg",revision:"ab1767e268086f820f00dfbc52a43309"},{url:"gallery/photo/assets/IMG_20201218_224254_edit_176193695669468.jpg",revision:"f2dd87e852cc263e229044d1e6e6c359"},{url:"gallery/photo/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/photo/assets/ryLVePaqkYm4TEK.jpg",revision:"94fd2e6ff4b848c5f4c02305d3b6ba5c"},{url:"gallery/photo/",revision:"21cd3e6e49eddc064ce613667ff57c76"},{url:"gallery/wallpaper/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/wallpaper/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/wallpaper/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/wallpaper/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/wallpaper/assets/wallhaven-qd5z8l.jpg",revision:"5d0baceeb4c2dfbd40da5c8bb0cc9981"},{url:"gallery/wallpaper/assets/wallhaven-ym51o7.jpg",revision:"a16f760d69ccda7d30fa3cc52012f61a"},{url:"gallery/wallpaper/",revision:"7762e212c4f0a9a3eb24454fd7f68e6d"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"7aecfdeec6b40c74dde4727c94cb32a4"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/siteicon/android-chrome-192x192.png",revision:"c19881bc77f494832054a6a84f07c4d5"},{url:"img/siteicon/android-chrome-512x512.png",revision:"a54a5ecf882b3a348e2551ef063238d0"},{url:"img/siteicon/apple-touch-icon.png",revision:"46f7aba347e73ddaf11301637a333844"},{url:"img/siteicon/favicon-16x16.png",revision:"638ef42ffd84c2162cf776d37072f0dd"},{url:"img/siteicon/favicon-32x32.png",revision:"ffe080265d0b111f4257106a8a4695ed"},{url:"img/siteicon/mstile-150x150.png",revision:"93724533a35f173ac81dced03b78ccdb"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"8f8dd6b5e6c8d4615c12b53aa9e6960c"},{url:"/",revision:"07bde5a3023ae7df5fe7e36e7ce52169"},{url:"js/ali_font.js",revision:"6c5feb2cf0d3eea0176cee4fdd1f2f35"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/modify.js",revision:"309a916e41b0599dd5d656055ad666fb"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/",revision:"9f78b6584124d065a598b5dddd59055b"},{url:"music/",revision:"991f2f689b453f83dab5de4477bdc516"},{url:"poems/",revision:"badf39d65a8e2ee961429d6af761c42e"},{url:"sw-template.js",revision:"36129d4757e8470a17c163cfa6dc7a34"},{url:"sw.js",revision:"205cdbaa708941010b65607a759b6fd5"},{url:"tags/",revision:"20776a62667f78c343aa8d38e0730640"},{url:"tags/Time-series/",revision:"ed87a17672e3b5516c2bec382304d215"},{url:"tags/线性回归/",revision:"b40ee00e152d6ff19d37dc974b08f76e"},{url:"talk/",revision:"3a94c452f7dd17e74bd0faa8f4953447"}],{})}));
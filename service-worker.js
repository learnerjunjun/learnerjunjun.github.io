if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let d={};const f=e=>i(e,s),l={module:{uri:s},exports:d,require:f};a[s]=Promise.all(c.map((e=>l[e]||f(e)))).then((e=>(r(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/02/25/Time-Series Basic Knowledge/",revision:"edc547aa82bb6fb4880d83d1aaddbc4f"},{url:"2023/02/25/计量经济学基础知识/",revision:"27276059c9d24278f4188102016d66d3"},{url:"404.html",revision:"07a7d278335721f8458282198b3bcde2"},{url:"about/",revision:"0896b7fc44075547d15eb28508a4e041"},{url:"archives/2023/02/",revision:"4fce2d0d1a886d1e78ffd2ce1d66c8ad"},{url:"archives/2023/",revision:"15f2ceb28c8ae8965ee19e770e8c3c5d"},{url:"archives/",revision:"f25bc24d25e404a7a6155958c3f44590"},{url:"categories/Econometric/",revision:"ffa4a6e7a737ab2cfe63c6c3c53f47f1"},{url:"categories/",revision:"3706a80c4ae57768c3dafce1a98fdaf7"},{url:"css/index.css",revision:"da64a5fee849ec6cb4ed4055fdce0833"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/",revision:"74c15f96933c246faff435ca750405f3"},{url:"gallery/photo/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/photo/assets/6nepIJ1xTgufatZ.jpg",revision:"f37d0f3af738990ef29875e147d860c5"},{url:"gallery/photo/assets/d6QHbytlSYO4FBG.jpg",revision:"5821bbafaa3f5ce6336e3684a8b0deb7"},{url:"gallery/photo/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/photo/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/photo/assets/gEy5Zc1Ai6VuO4N.jpg",revision:"ab1767e268086f820f00dfbc52a43309"},{url:"gallery/photo/assets/IMG_20201218_224254_edit_176193695669468.jpg",revision:"f2dd87e852cc263e229044d1e6e6c359"},{url:"gallery/photo/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/photo/assets/ryLVePaqkYm4TEK.jpg",revision:"94fd2e6ff4b848c5f4c02305d3b6ba5c"},{url:"gallery/photo/",revision:"48976ff875b236c48211422eb7ce738a"},{url:"gallery/wallpaper/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/wallpaper/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/wallpaper/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/wallpaper/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/wallpaper/assets/wallhaven-qd5z8l.jpg",revision:"5d0baceeb4c2dfbd40da5c8bb0cc9981"},{url:"gallery/wallpaper/assets/wallhaven-ym51o7.jpg",revision:"a16f760d69ccda7d30fa3cc52012f61a"},{url:"gallery/wallpaper/",revision:"87158aee7f56cd8e3c7d722e1c340a2f"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"7aecfdeec6b40c74dde4727c94cb32a4"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/siteicon/android-chrome-192x192.png",revision:"c19881bc77f494832054a6a84f07c4d5"},{url:"img/siteicon/android-chrome-512x512.png",revision:"a54a5ecf882b3a348e2551ef063238d0"},{url:"img/siteicon/apple-touch-icon.png",revision:"46f7aba347e73ddaf11301637a333844"},{url:"img/siteicon/favicon-16x16.png",revision:"638ef42ffd84c2162cf776d37072f0dd"},{url:"img/siteicon/favicon-32x32.png",revision:"ffe080265d0b111f4257106a8a4695ed"},{url:"img/siteicon/mstile-150x150.png",revision:"93724533a35f173ac81dced03b78ccdb"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"8f8dd6b5e6c8d4615c12b53aa9e6960c"},{url:"/",revision:"5151c18e1324eec6b45a8fd5d0fd65f8"},{url:"js/main.js",revision:"abf2a53f800d7f0903a706a7c58f59c7"},{url:"js/modify.js",revision:"5acc626a86a41071e5ac2181a38e7cf8"},{url:"js/search/algolia.js",revision:"4ec96643b63f6d8e6045cc5bc052759f"},{url:"js/search/local-search.js",revision:"9f31c3c3a9c389b9d3fb828e53cfdfbd"},{url:"js/tw_cn.js",revision:"56373849722f576f4dba2efd9b96e6c7"},{url:"js/utils.js",revision:"39113574ad2419db5ff8552587ac3d9c"},{url:"link/",revision:"8e9326a875fa79e3de41aec16298620e"},{url:"music/",revision:"2a7ad65f7ccdb57138e852c941a78006"},{url:"poems/",revision:"0b97b05a2cfff6f83c7af34180fa7904"},{url:"sw.js",revision:"8cbc4416cd5adc4150bacdd837f2fdba"},{url:"tags/",revision:"576e7584c3c908307f363e7b48ca5705"},{url:"tags/Time-series/",revision:"94d7578a64171193e18fecdf2feb22d4"},{url:"tags/线性回归/",revision:"a497d78ba22ba2fe518f482e2fa059c1"},{url:"talk/",revision:"2bb6e66c2feab37d5bb0f9a57cc7184e"}],{})}));
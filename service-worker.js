if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const n=e=>c(e,s),l={module:{uri:s},exports:f,require:n};i[s]=Promise.all(r.map((e=>l[e]||n(e)))).then((e=>(d(...e),f)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/02/25/hello-world/index.html",revision:"075f255f7ead126cbdf4a69ba79b1f49"},{url:"404.html",revision:"39817bee194af955922db1227be7cfd5"},{url:"about/about.html",revision:"b4353ee4fc21391d504586e71890c22c"},{url:"about/index.html",revision:"1d201e3dde1d64d57b692c2f989ceebe"},{url:"archives/2023/02/index.html",revision:"5d24ca9f0229220b7785075e1e78fa87"},{url:"archives/2023/index.html",revision:"cf15263ca7ebd5f9352668b276f247ac"},{url:"archives/index.html",revision:"d502e6fdaf3fddf2f5859f8f7380986a"},{url:"categories/index.html",revision:"ca51f7396eaa702fceb421b0c8a9eee7"},{url:"css/index.css",revision:"9b942d1beaec1ad80b6e3bbe96e4d341"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"7aecfdeec6b40c74dde4727c94cb32a4"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"01bfe16d24cf78c13f96febec99af046"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/index.html",revision:"c156a34ffd61105ba982b48c868353d5"},{url:"movies/index.html",revision:"63042b4ffd08adcb50d6c37248de9c9b"},{url:"music/index.html",revision:"c860252135618b50c4b081c0fc259515"},{url:"tags/index.html",revision:"3156a5dc1d9e819949dac18394ee394f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let n={};const l=e=>c(e,s),b={module:{uri:s},exports:n,require:l};i[s]=Promise.all(r.map((e=>b[e]||l(e)))).then((e=>(d(...e),n)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/02/25/hello-world/index.html",revision:"075f255f7ead126cbdf4a69ba79b1f49"},{url:"404.html",revision:"bc716e9ee849ee845e64fe79e3e720c6"},{url:"about/index.html",revision:"b1fb926c8600d07f27797775135986f9"},{url:"archives/2023/02/index.html",revision:"a6042802b92339056d6d6df4fc780b3e"},{url:"archives/2023/index.html",revision:"5950861744d74b69ebc37fafccfd1bb0"},{url:"archives/index.html",revision:"33e9746b58ae8a759c165b02e32b6a47"},{url:"categories/index.html",revision:"501b0efb2ddf70007f8356308a7f95bd"},{url:"css/index.css",revision:"9b942d1beaec1ad80b6e3bbe96e4d341"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"7aecfdeec6b40c74dde4727c94cb32a4"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"92d99d285420682b88712dce71b68870"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/index.html",revision:"05ee4164493e41d2c3d297a36685cad9"},{url:"movies/index.html",revision:"63042b4ffd08adcb50d6c37248de9c9b"},{url:"music/index.html",revision:"a9f338312b46e535dd930a8031b1097d"},{url:"tags/index.html",revision:"d1b949a433c7e5c253bc0fb91da55992"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

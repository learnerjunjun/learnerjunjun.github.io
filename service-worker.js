if(!self.define){let e,a={};const l=(l,r)=>(l=new URL(l+".js",r).href,a[l]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=a,document.head.appendChild(e)}else e=l,importScripts(l),a()})).then((()=>{let e=a[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(r,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let d={};const c=e=>l(e,i),b={module:{uri:i},exports:d,require:c};a[i]=Promise.all(r.map((e=>b[e]||c(e)))).then((e=>(s(...e),d)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/02/25/hello-world/index.html",revision:"ac7265487787019ee4284bf6a819d13b"},{url:"404.html",revision:"86d7307d66766dd4d8623177c551a5b0"},{url:"about/about.html",revision:"d8810053a296f758d5a25fbcd4760a06"},{url:"about/index.html",revision:"bf65b56fb49387355f555300987718c6"},{url:"archives/2023/02/index.html",revision:"923e184b3b87bc815975eafadadffe99"},{url:"archives/2023/index.html",revision:"1a10892d27d4b0a2aaaf891a2c7894a9"},{url:"archives/index.html",revision:"40ce3fe7adf33031be98390f315c0478"},{url:"categories/index.html",revision:"5e5c629d599a0b8e12ce05a806452254"},{url:"css/index.css",revision:"9b942d1beaec1ad80b6e3bbe96e4d341"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"4cd3f2dbf6b6b63cda1530e1d7889d4a"},{url:"gallery/photo/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/photo/assets/6nepIJ1xTgufatZ.jpg",revision:"f37d0f3af738990ef29875e147d860c5"},{url:"gallery/photo/assets/d6QHbytlSYO4FBG.jpg",revision:"5821bbafaa3f5ce6336e3684a8b0deb7"},{url:"gallery/photo/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/photo/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/photo/assets/gEy5Zc1Ai6VuO4N.jpg",revision:"ab1767e268086f820f00dfbc52a43309"},{url:"gallery/photo/assets/IMG_20201218_194520.jpg",revision:"0dbe57a7cf918a96adefe22041889476"},{url:"gallery/photo/assets/IMG_20201218_210652.jpg",revision:"e32745fe90ca1b29fc19fa1f93a0ff7e"},{url:"gallery/photo/assets/IMG_20201218_224254_edit_176193695669468.jpg",revision:"f2dd87e852cc263e229044d1e6e6c359"},{url:"gallery/photo/assets/IMG_20201218_224408.jpg",revision:"b6458a2e30b6ab4e406d12b3d244218d"},{url:"gallery/photo/assets/IMG_20201218_224430.jpg",revision:"9f9176a58bcb5dc5a4735a62703359c0"},{url:"gallery/photo/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/photo/assets/ryLVePaqkYm4TEK.jpg",revision:"94fd2e6ff4b848c5f4c02305d3b6ba5c"},{url:"gallery/photo/index.html",revision:"6355bfadd0daef0a0b39ab1400c540d6"},{url:"gallery/wallpaper/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/wallpaper/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/wallpaper/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/wallpaper/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/wallpaper/assets/wallhaven-1kx8k9.jpg",revision:"0c53c583164a848b3e2059f54e823ea4"},{url:"gallery/wallpaper/assets/wallhaven-28vm5y.jpg",revision:"f642eae755916232a9d6f559e9ae1a6c"},{url:"gallery/wallpaper/assets/wallhaven-3lor96.jpg",revision:"fe6d59f21edb9f21f76d7be12c2594a7"},{url:"gallery/wallpaper/assets/wallhaven-od3775.jpg",revision:"dd79c686ed4703a41c9d57efe66944e8"},{url:"gallery/wallpaper/assets/wallhaven-qd5z8l.jpg",revision:"5d0baceeb4c2dfbd40da5c8bb0cc9981"},{url:"gallery/wallpaper/assets/wallhaven-ym51o7.jpg",revision:"a16f760d69ccda7d30fa3cc52012f61a"},{url:"gallery/wallpaper/index.html",revision:"5d187cba96ed1b23c1a206343348daf9"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"7aecfdeec6b40c74dde4727c94cb32a4"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"ace36799eb9c28b85af2585aa2fe0382"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/index.html",revision:"177d6b7f6887e090c8b58d5329335e5e"},{url:"movies/index.html",revision:"501e79f94d17dc3314aba9b9ad860f19"},{url:"music/index.html",revision:"f6954a26e4916425ccecaa77f547c900"},{url:"tags/index.html",revision:"4d1186a8ed037ce84a78122c75d551d0"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

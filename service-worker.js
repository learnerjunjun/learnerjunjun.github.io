if(!self.define){let e,a={};const l=(l,r)=>(l=new URL(l+".js",r).href,a[l]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=a,document.head.appendChild(e)}else e=l,importScripts(l),a()})).then((()=>{let e=a[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(r,s)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let c={};const d=e=>l(e,i),f={module:{uri:i},exports:c,require:d};a[i]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/02/25/Time-Series Basic Knowledge/index.html",revision:"b2c40426a42901375ec2149ba0569b11"},{url:"2023/02/25/计量经济学基础知识/index.html",revision:"5d289e0b9557208721df51361b5f7a4f"},{url:"404.html",revision:"ac913b06a74110c6087298312227693b"},{url:"about/index.html",revision:"e2412349a687c1bff93d9f9cc4639676"},{url:"archives/2023/02/index.html",revision:"fd245fba22752fe5d9ed4605d59fe8ea"},{url:"archives/2023/index.html",revision:"daa22fe4fbb41fe6d94fb22f5018208d"},{url:"archives/index.html",revision:"48111e541d707041a3761949a4200558"},{url:"categories/Econometric/index.html",revision:"9fd16b90500ca842ab7f83a6b73982e3"},{url:"categories/index.html",revision:"65c2f90e84c196df93d6841b6260ae4e"},{url:"css/index.css",revision:"9b942d1beaec1ad80b6e3bbe96e4d341"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"0055f858882f13f2985d486c861a4d80"},{url:"gallery/photo/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/photo/assets/6nepIJ1xTgufatZ.jpg",revision:"f37d0f3af738990ef29875e147d860c5"},{url:"gallery/photo/assets/d6QHbytlSYO4FBG.jpg",revision:"5821bbafaa3f5ce6336e3684a8b0deb7"},{url:"gallery/photo/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/photo/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/photo/assets/gEy5Zc1Ai6VuO4N.jpg",revision:"ab1767e268086f820f00dfbc52a43309"},{url:"gallery/photo/assets/IMG_20201218_194520.jpg",revision:"0dbe57a7cf918a96adefe22041889476"},{url:"gallery/photo/assets/IMG_20201218_210652.jpg",revision:"e32745fe90ca1b29fc19fa1f93a0ff7e"},{url:"gallery/photo/assets/IMG_20201218_224254_edit_176193695669468.jpg",revision:"f2dd87e852cc263e229044d1e6e6c359"},{url:"gallery/photo/assets/IMG_20201218_224408.jpg",revision:"b6458a2e30b6ab4e406d12b3d244218d"},{url:"gallery/photo/assets/IMG_20201218_224430.jpg",revision:"9f9176a58bcb5dc5a4735a62703359c0"},{url:"gallery/photo/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/photo/assets/ryLVePaqkYm4TEK.jpg",revision:"94fd2e6ff4b848c5f4c02305d3b6ba5c"},{url:"gallery/photo/index.html",revision:"b8ad4269cacef42897c7eba469332644"},{url:"gallery/wallpaper/assets/2tu9JC8ewpBFagv.jpg",revision:"307a492adcbb43423e0011b55e0b66c6"},{url:"gallery/wallpaper/assets/E7Jvr4eIPwUNmzq.jpg",revision:"bc72b5cfd20de2d8ffda04b09898bd67"},{url:"gallery/wallpaper/assets/Fze9jchtnyJXMHN.jpg",revision:"e5deb7b0cdfb8bce365ad03a0fcfa14c"},{url:"gallery/wallpaper/assets/mh19anwBSWIkGlH.jpg",revision:"b0a14c0b3c6ead1b5b064fb954361f81"},{url:"gallery/wallpaper/assets/wallhaven-1kx8k9.jpg",revision:"0c53c583164a848b3e2059f54e823ea4"},{url:"gallery/wallpaper/assets/wallhaven-28vm5y.jpg",revision:"f642eae755916232a9d6f559e9ae1a6c"},{url:"gallery/wallpaper/assets/wallhaven-3lor96.jpg",revision:"fe6d59f21edb9f21f76d7be12c2594a7"},{url:"gallery/wallpaper/assets/wallhaven-od3775.jpg",revision:"dd79c686ed4703a41c9d57efe66944e8"},{url:"gallery/wallpaper/assets/wallhaven-qd5z8l.jpg",revision:"5d0baceeb4c2dfbd40da5c8bb0cc9981"},{url:"gallery/wallpaper/assets/wallhaven-ym51o7.jpg",revision:"a16f760d69ccda7d30fa3cc52012f61a"},{url:"gallery/wallpaper/index.html",revision:"790c27c0bf573b8ed1e2dadf86e2455a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/bg.jpg",revision:"7aecfdeec6b40c74dde4727c94cb32a4"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"a23a9a5f689d1f4c9f55070399764d82"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"link/index.html",revision:"290c601bc2ef68c8c474ffac7ee0e72d"},{url:"movies/index.html",revision:"54df74036dc63322586c62308804a181"},{url:"music/index.html",revision:"3ac50975f3f5089c22d445aaf3e858be"},{url:"poems/index.html",revision:"9180f2d64dc9692d1c3571b657b0623c"},{url:"tags/index.html",revision:"d2f34cc8b18d4e037e2bee032851d191"},{url:"tags/Time-series/index.html",revision:"87bd41dab84379bc2c2b578314c07b42"},{url:"tags/线性回归/index.html",revision:"7649261fbc3c55cd8879fb5f114b65d8"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

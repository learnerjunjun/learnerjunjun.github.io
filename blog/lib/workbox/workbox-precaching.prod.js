this.workbox=this.workbox||{},this.workbox.precaching=function(e,t,s,r,a,c,n,i){"use strict"
function o(e){if(!e)throw new s.WorkboxError("add-to-cache-list-unexpected-type",{entry:e})
if("string"==typeof e){const t=new URL(e,location.href)
return{cacheKey:t.href,url:t.href}}const{revision:t,url:r}=e
if(!r)throw new s.WorkboxError("add-to-cache-list-unexpected-type",{entry:e})
if(!t){const e=new URL(r,location.href)
return{cacheKey:e.href,url:e.href}}const a=new URL(r,location.href),c=new URL(r,location.href)
return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:c.href}}function h(e){const t=y(),s=new w(t,e)
n.registerRoute(s)}function l(e){y().precache(e)}try{self["workbox:precaching:7.0.0"]&&_()}catch(e){}class u{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url
s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class d{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this.tt.getCacheKeyForURL(e.url)
return s?new Request(s,{headers:e.headers}):e},this.tt=e}}class f extends c.Strategy{constructor(e={}){e.cacheName=t.cacheNames.getPrecacheName(e.cacheName),super(e),this.et=!1!==e.fallbackToNetwork,this.plugins.push(f.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this.st(e,t):await this.nt(e,t))}async nt(e,t){let r
const a=t.params||{}
if(!this.et)throw new s.WorkboxError("missing-precache-entry",{cacheName:this.cacheName,url:e.url})
{const s=a.integrity,c=e.integrity,n=!c||c===s
r=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?c||s:void 0})),s&&n&&"no-cors"!==e.mode&&(this.it(),await t.cachePut(e,r.clone()))}return r}async st(e,t){this.it()
const r=await t.fetch(e)
if(!await t.cachePut(e,r.clone()))throw new s.WorkboxError("bad-precaching-response",{url:e.url,status:r.status})
return r}it(){let e=null,t=0
for(const[s,r]of this.plugins.entries())r!==f.copyRedirectedCacheableResponsesPlugin&&(r===f.defaultPrecacheCacheabilityPlugin&&(e=s),r.cacheWillUpdate&&t++)
0===t?this.plugins.push(f.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}f.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},f.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await a.copyResponse(e):e}
class p{constructor({cacheName:e,plugins:s=[],fallbackToNetwork:r=!0}={}){this.ct=new Map,this.rt=new Map,this.ot=new Map,this.ht=new f({cacheName:t.cacheNames.getPrecacheName(e),plugins:[...s,new d({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.ht}precache(e){this.addToCacheList(e),this.lt||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.lt=!0)}addToCacheList(e){const t=[]
for(const r of e){"string"==typeof r?t.push(r):r&&void 0===r.revision&&t.push(r.url)
const{cacheKey:e,url:a}=o(r),c="string"!=typeof r&&r.revision?"reload":"default"
if(this.ct.has(a)&&this.ct.get(a)!==e)throw new s.WorkboxError("add-to-cache-list-conflicting-entries",{firstEntry:this.ct.get(a),secondEntry:e})
if("string"!=typeof r&&r.integrity){if(this.ot.has(e)&&this.ot.get(e)!==r.integrity)throw new s.WorkboxError("add-to-cache-list-conflicting-integrities",{url:a})
this.ot.set(e,r.integrity)}this.ct.set(a,e),this.rt.set(a,c),t.length>0&&t.join(", ")}}install(e){return r.waitUntil(e,(async()=>{const t=new u
this.strategy.plugins.push(t)
for(const[t,s]of this.ct){const r=this.ot.get(s),a=this.rt.get(t),c=new Request(t,{integrity:r,cache:a,credentials:"same-origin"})
await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:c,event:e}))}const{updatedURLs:s,notUpdatedURLs:r}=t
return{updatedURLs:s,notUpdatedURLs:r}}))}activate(e){return r.waitUntil(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this.ct.values()),r=[]
for(const a of t)s.has(a.url)||(await e.delete(a),r.push(a.url))
return{deletedURLs:r}}))}getURLsToCacheKeys(){return this.ct}getCachedURLs(){return[...this.ct.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href)
return this.ct.get(t.href)}getIntegrityForCacheKey(e){return this.ot.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t)
if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e)
if(!t)throw new s.WorkboxError("non-precached-url",{url:e})
return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let g
const y=()=>(g||(g=new p),g)
class w extends i.Route{constructor(e,t){super((({request:s})=>{const r=e.getURLsToCacheKeys()
for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:r=!0,urlManipulation:a}={}){const c=new URL(e,location.href)
c.hash="",yield c.href
const n=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s)
return e}(c,t)
if(yield n.href,s&&n.pathname.endsWith("/")){const e=new URL(n.href)
e.pathname+=s,yield e.href}if(r){const e=new URL(n.href)
e.pathname+=".html",yield e.href}if(a){const e=a({url:c})
for(const t of e)yield t.href}}(s.url,t)){const t=r.get(a)
if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}return e.PrecacheController=p,e.PrecacheFallbackPlugin=class{constructor({fallbackURL:e,precacheController:t}){this.handlerDidError=()=>this.tt.matchPrecache(this.ut),this.ut=e,this.tt=t||y()}},e.PrecacheRoute=w,e.PrecacheStrategy=f,e.addPlugins=function(e){y().strategy.plugins.push(...e)},e.addRoute=h,e.cleanupOutdatedCaches=function(){self.addEventListener("activate",(e=>{const s=t.cacheNames.getPrecacheName()
e.waitUntil((async(e,t="-precache-")=>{const s=(await self.caches.keys()).filter((s=>s.includes(t)&&s.includes(self.registration.scope)&&s!==e))
return await Promise.all(s.map((e=>self.caches.delete(e)))),s})(s).then((()=>{})))}))},e.createHandlerBoundToURL=function(e){return y().createHandlerBoundToURL(e)},e.getCacheKeyForURL=function(e){return y().getCacheKeyForURL(e)},e.matchPrecache=function(e){return y().matchPrecache(e)},e.precache=l,e.precacheAndRoute=function(e,t){l(e),h(t)},e}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core,workbox.strategies,workbox.routing,workbox.routing)

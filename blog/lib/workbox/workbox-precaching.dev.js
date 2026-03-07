this.workbox=this.workbox||{},this.workbox.precaching=function(exports,e,t,r,a,s,c,o,n,i,l){"use strict"
function h(e){if(!e)throw new a.WorkboxError("add-to-cache-list-unexpected-type",{entry:e})
if("string"==typeof e){const t=new URL(e,location.href)
return{cacheKey:t.href,url:t.href}}const{revision:t,url:r}=e
if(!r)throw new a.WorkboxError("add-to-cache-list-unexpected-type",{entry:e})
if(!t){const e=new URL(r,location.href)
return{cacheKey:e.href,url:e.href}}const s=new URL(r,location.href),c=new URL(r,location.href)
return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:c.href}}function u(e,t){if(0!==t.length){r.logger.groupCollapsed(e)
for(const e of t)r.logger.log(e)
r.logger.groupEnd()}}function g(e){const t=C(),r=new U(t,e)
i.registerRoute(r)}function d(e){C().precache(e)}try{self["workbox:precaching:7.0.0"]&&_()}catch(e){}class p{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:r})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url
r?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return r}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const r=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url)
return r?new Request(r,{headers:e.headers}):e},this._precacheController=e}}class y extends n.Strategy{constructor(e={}){e.cacheName=t.cacheNames.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(y.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s
const c=t.params||{}
if(!this._fallbackToNetwork)throw new a.WorkboxError("missing-precache-entry",{cacheName:this.cacheName,url:e.url})
{r.logger.warn(`The precached response for ${o.getFriendlyURL(e.url)} in ${this.cacheName} was not found. Falling back to the network.`)
const a=c.integrity,n=e.integrity,i=!n||n===a
s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?n||a:void 0})),a&&i&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone())&&r.logger.log(`A response for ${o.getFriendlyURL(e.url)} was used to "repair" the precache.`))}{const a=c.cacheKey||await t.getCacheKey(e,"read")
r.logger.groupCollapsed("Precaching is responding to: "+o.getFriendlyURL(e.url)),r.logger.log(`Serving the precached url: ${o.getFriendlyURL(a instanceof Request?a.url:a)}`),r.logger.groupCollapsed("View request details here."),r.logger.log(e),r.logger.groupEnd(),r.logger.groupCollapsed("View response details here."),r.logger.log(s),r.logger.groupEnd(),r.logger.groupEnd()}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded()
const r=await t.fetch(e)
if(!await t.cachePut(e,r.clone()))throw new a.WorkboxError("bad-precaching-response",{url:e.url,status:r.status})
return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0
for(const[r,a]of this.plugins.entries())a!==y.copyRedirectedCacheableResponsesPlugin&&(a===y.defaultPrecacheCacheabilityPlugin&&(e=r),a.cacheWillUpdate&&t++)
0===t?this.plugins.push(y.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}y.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},y.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await c.copyResponse(e):e}
class w{constructor({cacheName:e,plugins:r=[],fallbackToNetwork:a=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new y({cacheName:t.cacheNames.getPrecacheName(e),plugins:[...r,new f({precacheController:this})],fallbackToNetwork:a}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){e.assert.isArray(t,{moduleName:"workbox-precaching",className:"PrecacheController",funcName:"addToCacheList",paramName:"entries"})
const s=[]
for(const e of t){"string"==typeof e?s.push(e):e&&void 0===e.revision&&s.push(e.url)
const{cacheKey:t,url:c}=h(e),o="string"!=typeof e&&e.revision?"reload":"default"
if(this._urlsToCacheKeys.has(c)&&this._urlsToCacheKeys.get(c)!==t)throw new a.WorkboxError("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(c),secondEntry:t})
if("string"!=typeof e&&e.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==e.integrity)throw new a.WorkboxError("add-to-cache-list-conflicting-integrities",{url:c})
this._cacheKeysToIntegrities.set(t,e.integrity)}if(this._urlsToCacheKeys.set(c,t),this._urlsToCacheModes.set(c,o),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`
r.logger.warn(e)}}}install(e){return s.waitUntil(e,(async()=>{const t=new p
this.strategy.plugins.push(t)
for(const[t,r]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(t),c=new Request(t,{integrity:a,cache:s,credentials:"same-origin"})
await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:c,event:e}))}const{updatedURLs:a,notUpdatedURLs:s}=t
return function(e,t){const a=e.length,s=t.length
if(a||s){let c=`Precaching ${a} file${1===a?"":"s"}.`
s>0&&(c+=` ${s} file${1===s?" is":"s are"} already cached.`),r.logger.groupCollapsed(c),u("View newly precached URLs.",e),u("View previously precached URLs.",t),r.logger.groupEnd()}}(a,s),{updatedURLs:a,notUpdatedURLs:s}}))}activate(e){return s.waitUntil(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),a=new Set(this._urlsToCacheKeys.values()),s=[]
for(const r of t)a.has(r.url)||(await e.delete(r),s.push(r.url))
return function(e){const t=e.length
t>0&&(r.logger.groupCollapsed(`During precaching cleanup, ${t} cached request${1===t?" was":"s were"} deleted.`),((e,t)=>{r.logger.groupCollapsed("Deleted Cache Requests")
for(const e of t)r.logger.log(e)
r.logger.groupEnd()})(0,e),r.logger.groupEnd())}(s),{deletedURLs:s}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href)
return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t)
if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e)
if(!t)throw new a.WorkboxError("non-precached-url",{url:e})
return r=>(r.request=new Request(e),r.params=Object.assign({cacheKey:t},r.params),this.strategy.handle(r))}}let R
const C=()=>(R||(R=new w),R)
class U extends l.Route{constructor(e,t){super((({request:a})=>{const s=e.getURLsToCacheKeys()
for(const r of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:r="index.html",cleanURLs:a=!0,urlManipulation:s}={}){const c=new URL(e,location.href)
c.hash="",yield c.href
const o=function(e,t=[]){for(const r of[...e.searchParams.keys()])t.some((e=>e.test(r)))&&e.searchParams.delete(r)
return e}(c,t)
if(yield o.href,r&&o.pathname.endsWith("/")){const e=new URL(o.href)
e.pathname+=r,yield e.href}if(a){const e=new URL(o.href)
e.pathname+=".html",yield e.href}if(s){const e=s({url:c})
for(const t of e)yield t.href}}(a.url,t)){const t=s.get(r)
if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}r.logger.debug("Precaching did not find a match for "+o.getFriendlyURL(a.url))}),e.strategy)}}return exports.PrecacheController=w,exports.PrecacheFallbackPlugin=class{constructor({fallbackURL:e,precacheController:t}){this.handlerDidError=()=>this._precacheController.matchPrecache(this._fallbackURL),this._fallbackURL=e,this._precacheController=t||C()}},exports.PrecacheRoute=U,exports.PrecacheStrategy=y,exports.addPlugins=function(e){C().strategy.plugins.push(...e)},exports.addRoute=g,exports.cleanupOutdatedCaches=function(){self.addEventListener("activate",(e=>{const a=t.cacheNames.getPrecacheName()
e.waitUntil((async(e,t="-precache-")=>{const r=(await self.caches.keys()).filter((r=>r.includes(t)&&r.includes(self.registration.scope)&&r!==e))
return await Promise.all(r.map((e=>self.caches.delete(e)))),r})(a).then((e=>{e.length>0&&r.logger.log("The following out-of-date precaches were cleaned up automatically:",e)})))}))},exports.createHandlerBoundToURL=function(e){return C().createHandlerBoundToURL(e)},exports.getCacheKeyForURL=function(e){return C().getCacheKeyForURL(e)},exports.matchPrecache=function(e){return C().matchPrecache(e)},exports.precache=d,exports.precacheAndRoute=function(e,t){d(e),g(t)},exports}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core,workbox.core._private,workbox.strategies,workbox.routing,workbox.routing)

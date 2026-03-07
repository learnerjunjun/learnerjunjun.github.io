this.workbox=this.workbox||{},this.workbox.expiration=function(exports,e,t,a,r,n,s,i){"use strict"
function o(){return o=Object.assign||function(e){var t,a,r
for(t=1;t<arguments.length;t++)for(r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])
return e},o.apply(this,arguments)}function c(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,a)=>{const r=()=>{e.removeEventListener("success",n),e.removeEventListener("error",s)},n=()=>{t(c(e.result)),r()},s=()=>{a(e.error),r()}
e.addEventListener("success",n),e.addEventListener("error",s)}))
return t.then((t=>{t instanceof IDBCursor&&p.set(t,e)})).catch((()=>{})),w.set(t,e),t}(e)
if(x.has(e))return x.get(e)
const t=function(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(h||(h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(b(this),e),c(p.get(this))}:function(...e){return c(t.apply(b(this),e))}:function(e,...a){const r=t.call(b(this),e,...a)
return g.set(r,e.sort?e.sort():[e]),c(r)}:(e instanceof IDBTransaction&&function(e){if(l.has(e))return
const t=new Promise(((t,a)=>{const r=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",s),e.removeEventListener("abort",s)},n=()=>{t(),r()},s=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()}
e.addEventListener("complete",n),e.addEventListener("error",s),e.addEventListener("abort",s)}))
l.set(e,t)}(e),u(e,d||(d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,f):e)
var t}(e)
return t!==e&&(x.set(e,t),w.set(t,e)),t}function m(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return
if(D.get(t))return D.get(t)
const a=t.replace(/FromIndex$/,""),r=t!==a,n=E.includes(a)
if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!n&&!N.includes(a))return
const s=async function(e,...t){const s=this.transaction(e,n?"readwrite":"readonly")
let i=s.store
return r&&(i=i.index(t.shift())),(await Promise.all([i[a](...t),n&&s.done]))[0]}
return D.set(t,s),s}const u=(e,t)=>t.some((t=>e instanceof t))
let d,h
const p=new WeakMap,l=new WeakMap,g=new WeakMap,x=new WeakMap,w=new WeakMap
let f={get(e,t,a){if(e instanceof IDBTransaction){if("done"===t)return l.get(e)
if("objectStoreNames"===t)return e.objectStoreNames||g.get(e)
if("store"===t)return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return c(e[t])},set:(e,t,a)=>(e[t]=a,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}
const b=e=>w.get(e),N=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],D=new Map
var y
f=o({},y=f,{get:(e,t,a)=>m(e,t)||y.get(e,t,a),has:(e,t)=>!!m(e,t)||y.has(e,t)})
try{self["workbox:expiration:7.0.0"]&&_()}catch(e){}const v="cache-entries",k=e=>{const t=new URL(e,location.href)
return t.hash="",t.href}
class S{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(v,{keyPath:"id"})
t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const a=indexedDB.deleteDatabase(e)
t&&a.addEventListener("blocked",(()=>t())),c(a).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const a={url:e=k(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},r=(await this.getDb()).transaction(v,"readwrite",{durability:"relaxed"})
await r.store.put(a),await r.done}async getTimestamp(e){const t=await this.getDb(),a=await t.get(v,this._getId(e))
return null==a?void 0:a.timestamp}async expireEntries(e,t){const a=await this.getDb()
let r=await a.transaction(v).store.index("timestamp").openCursor(null,"prev")
const n=[]
let s=0
for(;r;){const a=r.value
a.cacheName===this._cacheName&&(e&&a.timestamp<e||t&&s>=t?n.push(r.value):s++),r=await r.continue()}const i=[]
for(const e of n)await a.delete(v,e.id),i.push(e.url)
return i}_getId(e){return this._cacheName+"|"+k(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:a,upgrade:r,blocking:n,terminated:s}={}){const i=indexedDB.open(e,t),o=c(i)
return r&&i.addEventListener("upgradeneeded",(e=>{r(c(i.result),e.oldVersion,e.newVersion,c(i.transaction))})),a&&i.addEventListener("blocked",(()=>a())),o.then((e=>{s&&e.addEventListener("close",(()=>s())),n&&e.addEventListener("versionchange",(()=>n()))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class A{constructor(t,a={}){if(this._isRunning=!1,this._rerunRequested=!1,e.assert.isType(t,"string",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"constructor",paramName:"cacheName"}),!a.maxEntries&&!a.maxAgeSeconds)throw new r.WorkboxError("max-entries-or-age-required",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"constructor"})
a.maxEntries&&e.assert.isType(a.maxEntries,"number",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"constructor",paramName:"config.maxEntries"}),a.maxAgeSeconds&&e.assert.isType(a.maxAgeSeconds,"number",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"constructor",paramName:"config.maxAgeSeconds"}),this._maxEntries=a.maxEntries,this._maxAgeSeconds=a.maxAgeSeconds,this._matchOptions=a.matchOptions,this._cacheName=t,this._timestampModel=new S(t)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0)
this._isRunning=!0
const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,r=await this._timestampModel.expireEntries(e,this._maxEntries),n=await self.caches.open(this._cacheName)
for(const e of r)await n.delete(e,this._matchOptions)
r.length>0?(a.logger.groupCollapsed(`Expired ${r.length} `+(1===r.length?"entry":"entries")+" and removed "+(1===r.length?"it":"them")+" from the "+`'${this._cacheName}' cache.`),a.logger.log(`Expired the following ${1===r.length?"URL":"URLs"}:`),r.forEach((e=>a.logger.log(`    ${e}`))),a.logger.groupEnd()):a.logger.debug("Cache expiration ran and found no entries to remove."),this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,t.dontWaitFor(this.expireEntries()))}async updateTimestamp(t){e.assert.isType(t,"string",{moduleName:"workbox-expiration",className:"CacheExpiration",funcName:"updateTimestamp",paramName:"url"}),await this._timestampModel.setTimestamp(t,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),a=Date.now()-1e3*this._maxAgeSeconds
return void 0===t||t<a}throw new r.WorkboxError("expired-test-without-max-age",{methodName:"isURLExpired",paramName:"maxAgeSeconds"})}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}return exports.CacheExpiration=A,exports.ExpirationPlugin=class{constructor(n={}){if(this.cachedResponseWillBeUsed=async({event:e,request:r,cacheName:n,cachedResponse:i})=>{if(!i)return null
const o=this._isResponseDateFresh(i),c=this._getCacheExpiration(n)
t.dontWaitFor(c.expireEntries())
const m=c.updateTimestamp(r.url)
if(e)try{e.waitUntil(m)}catch(t){"request"in e&&a.logger.warn(`Unable to ensure service worker stays alive when updating cache entry for '${s.getFriendlyURL(e.request.url)}'.`)}return o?i:null},this.cacheDidUpdate=async({cacheName:t,request:a})=>{e.assert.isType(t,"string",{moduleName:"workbox-expiration",className:"Plugin",funcName:"cacheDidUpdate",paramName:"cacheName"}),e.assert.isInstance(a,Request,{moduleName:"workbox-expiration",className:"Plugin",funcName:"cacheDidUpdate",paramName:"request"})
const r=this._getCacheExpiration(t)
await r.updateTimestamp(a.url),await r.expireEntries()},!n.maxEntries&&!n.maxAgeSeconds)throw new r.WorkboxError("max-entries-or-age-required",{moduleName:"workbox-expiration",className:"Plugin",funcName:"constructor"})
n.maxEntries&&e.assert.isType(n.maxEntries,"number",{moduleName:"workbox-expiration",className:"Plugin",funcName:"constructor",paramName:"config.maxEntries"}),n.maxAgeSeconds&&e.assert.isType(n.maxAgeSeconds,"number",{moduleName:"workbox-expiration",className:"Plugin",funcName:"constructor",paramName:"config.maxAgeSeconds"}),this._config=n,this._maxAgeSeconds=n.maxAgeSeconds,this._cacheExpirations=new Map,n.purgeOnQuotaError&&i.registerQuotaErrorCallback((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===n.cacheNames.getRuntimeName())throw new r.WorkboxError("expire-custom-caches-only")
let t=this._cacheExpirations.get(e)
return t||(t=new A(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0
const t=this._getDateHeaderTimestamp(e)
return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null
const t=e.headers.get("date"),a=new Date(t).getTime()
return isNaN(a)?null:a}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete()
this._cacheExpirations=new Map}},exports}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core)

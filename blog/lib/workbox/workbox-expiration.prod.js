this.workbox=this.workbox||{},this.workbox.expiration=function(t,e,n,r,s){"use strict"
function i(){return i=Object.assign?Object.assign.bind():function(t){var e,n,r
for(e=1;e<arguments.length;e++)for(r in n=arguments[e])({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])
return t},i.apply(null,arguments)}function a(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(a(t.result)),r()},i=()=>{n(t.error),r()}
t.addEventListener("success",s),t.addEventListener("error",i)}))
return e.then((e=>{e instanceof IDBCursor&&d.set(e,t)})).catch((()=>{})),f.set(e,t),e}(t)
if(m.has(t))return m.get(t)
const e=function(t){return"function"==typeof t?function(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(h||(h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(b(this),e),a(d.get(this))}:function(...e){return a(t.apply(b(this),e))}:function(e,...n){const r=t.call(b(this),e,...n)
return p.set(r,e.sort?e.sort():[e]),a(r)}}(t):(t instanceof IDBTransaction&&function(t){if(l.has(t))return
const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()}
t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}))
l.set(t,e)}(t),c(t,u||(u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,w):t)}(t)
return e!==t&&(m.set(t,e),f.set(e,t)),e}function o(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return
if(y.get(e))return y.get(e)
const n=e.replace(/FromIndex$/,""),r=e!==n,s=x.includes(n)
if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!g.includes(n))return
const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly")
let a=i.store
return r&&(a=a.index(e.shift())),(await Promise.all([a[n](...e),s&&i.done]))[0]}
return y.set(e,i),i}const c=(t,e)=>e.some((e=>t instanceof e))
let u,h
const d=new WeakMap,l=new WeakMap,p=new WeakMap,m=new WeakMap,f=new WeakMap
let w={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return l.get(t)
if("objectStoreNames"===e)return t.objectStoreNames||p.get(t)
if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return a(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}
const b=t=>f.get(t),g=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],y=new Map
w=(t=>i({},t,{get:(e,n,r)=>o(e,n)||t.get(e,n,r),has:(e,n)=>!!o(e,n)||t.has(e,n)}))(w)
try{self["workbox:expiration:7.4.0"]&&_()}catch(t){}const D="cache-entries",v=t=>{const e=new URL(t,location.href)
return e.hash="",e.href}
class E{constructor(t){this.A=null,this.G=t}J(t){const e=t.createObjectStore(D,{keyPath:"id"})
e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1})}V(t){this.J(t),this.G&&function(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t)
e&&n.addEventListener("blocked",(()=>e())),a(n).then((()=>{}))}(this.G)}async setTimestamp(t,e){const n={url:t=v(t),timestamp:e,cacheName:this.G,id:this.X(t)},r=(await this.getDb()).transaction(D,"readwrite",{durability:"relaxed"})
await r.store.put(n),await r.done}async getTimestamp(t){const e=await this.getDb(),n=await e.get(D,this.X(t))
return null==n?void 0:n.timestamp}async expireEntries(t,e){const n=await this.getDb()
let r=await n.transaction(D).store.index("timestamp").openCursor(null,"prev")
const s=[]
let i=0
for(;r;){const n=r.value
n.cacheName===this.G&&(t&&n.timestamp<t||e&&i>=e?s.push(r.value):i++),r=await r.continue()}const a=[]
for(const t of s)await n.delete(D,t.id),a.push(t.url)
return a}X(t){return this.G+"|"+v(t)}async getDb(){return this.A||(this.A=await function(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=a(o)
return r&&o.addEventListener("upgradeneeded",(t=>{r(a(o.result),t.oldVersion,t.newVersion,a(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),c.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),c}("workbox-expiration",1,{upgrade:this.V.bind(this)})),this.A}}class I{constructor(t,e={}){this.Y=!1,this.Z=!1,this.tt=e.maxEntries,this.et=e.maxAgeSeconds,this.nt=e.matchOptions,this.G=t,this.st=new E(t)}async expireEntries(){if(this.Y)return void(this.Z=!0)
this.Y=!0
const t=this.et?Date.now()-1e3*this.et:0,n=await this.st.expireEntries(t,this.tt),r=await self.caches.open(this.G)
for(const t of n)await r.delete(t,this.nt)
this.Y=!1,this.Z&&(this.Z=!1,e.dontWaitFor(this.expireEntries()))}async updateTimestamp(t){await this.st.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.et){const e=await this.st.getTimestamp(t),n=Date.now()-1e3*this.et
return void 0===e||e<n}return!1}async delete(){this.Z=!1,await this.st.expireEntries(1/0)}}return t.CacheExpiration=I,t.ExpirationPlugin=class{constructor(t={}){this.cachedResponseWillBeUsed=async({event:t,request:n,cacheName:r,cachedResponse:s})=>{if(!s)return null
const i=this.it(s),a=this.rt(r)
e.dontWaitFor(a.expireEntries())
const o=a.updateTimestamp(n.url)
if(t)try{t.waitUntil(o)}catch(t){}return i?s:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const n=this.rt(t)
await n.updateTimestamp(e.url),await n.expireEntries()},this.ot=t,this.et=t.maxAgeSeconds,this.ct=new Map,t.purgeOnQuotaError&&r.registerQuotaErrorCallback((()=>this.deleteCacheAndMetadata()))}rt(t){if(t===n.cacheNames.getRuntimeName())throw new s.WorkboxError("expire-custom-caches-only")
let e=this.ct.get(t)
return e||(e=new I(t,this.ot),this.ct.set(t,e)),e}it(t){if(!this.et)return!0
const e=this.ut(t)
return null===e||e>=Date.now()-1e3*this.et}ut(t){if(!t.headers.has("date"))return null
const e=t.headers.get("date"),n=new Date(e).getTime()
return isNaN(n)?null:n}async deleteCacheAndMetadata(){for(const[t,e]of this.ct)await self.caches.delete(t),await e.delete()
this.ct=new Map}},t}({},workbox.core._private,workbox.core._private,workbox.core,workbox.core._private)

this.workbox=this.workbox||{},this.workbox.strategies=function(e,t,r,s,a,n,o,i,c){"use strict"
function h(e){return"string"==typeof e?new Request(e):e}try{self["workbox:strategies:7.4.0"]&&_()}catch(e){}class l{constructor(e,t){this.l={},Object.assign(this,t),this.event=t.event,this.u=e,this.p=new a.Deferred,this.m=[],this.v=[...e.plugins],this.q=new Map
for(const e of this.v)this.q.set(e,{})
this.event.waitUntil(this.p.promise)}async fetch(e){const{event:r}=this
let s=h(e)
if("navigate"===s.mode&&r instanceof FetchEvent&&r.preloadResponse){const e=await r.preloadResponse
if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null
try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:r})}catch(e){if(e instanceof Error)throw new t.WorkboxError("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const n=s.clone()
try{let e
e=await fetch(s,"navigate"===s.mode?void 0:this.u.fetchOptions)
for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:r,request:n,response:e})
return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:r,originalRequest:a.clone(),request:n.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),r=t.clone()
return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){const t=h(e)
let r
const{cacheName:s,matchOptions:a}=this.u,n=await this.getCacheKey(t,"read"),o=Object.assign(Object.assign({},a),{cacheName:s})
r=await caches.match(n,o)
for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await e({cacheName:s,matchOptions:a,cachedResponse:r,request:n,event:this.event})||void 0
return r}async cachePut(e,r){const a=h(e)
await c.timeout(0)
const i=await this.getCacheKey(a,"write")
if(!r)throw new t.WorkboxError("cache-put-with-no-response",{url:o.getFriendlyURL(i.url)})
const l=await this.g(r)
if(!l)return!1
const{cacheName:u,matchOptions:w}=this.u,f=await self.caches.open(u),p=this.hasCallback("cacheDidUpdate"),d=p?await s.cacheMatchIgnoreParams(f,i.clone(),["__WB_REVISION__"],w):null
try{await f.put(i,p?l.clone():l)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await n.executeQuotaErrorCallbacks(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:u,oldResponse:d,newResponse:l.clone(),request:i,event:this.event})
return!0}async getCacheKey(e,t){const r=`${e.url} | ${t}`
if(!this.l[r]){let s=e
for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=h(await e({mode:t,request:s,event:this.event,params:this.params}))
this.l[r]=s}return this.l[r]}hasCallback(e){for(const t of this.u.plugins)if(e in t)return!0
return!1}async runCallbacks(e,t){for(const r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(const t of this.u.plugins)if("function"==typeof t[e]){const r=this.q.get(t),s=s=>{const a=Object.assign(Object.assign({},s),{state:r})
return t[e](a)}
yield s}}waitUntil(e){return this.m.push(e),e}async doneWaiting(){for(;this.m.length;){const e=this.m.splice(0),t=(await Promise.allSettled(e)).find((e=>"rejected"===e.status))
if(t)throw t.reason}}destroy(){this.p.resolve(null)}async g(e){let t=e,r=!1
for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break
return r||t&&200!==t.status&&(t=void 0),t}}class u{constructor(e={}){this.cacheName=r.cacheNames.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e)
return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request})
const t=e.event,r="string"==typeof e.request?new Request(e.request):e.request,s="params"in e?e.params:void 0,a=new l(this,{event:t,request:r,params:s}),n=this._(a,r,t)
return[n,this.k(n,a,r,t)]}async _(e,r,s){let a
await e.runCallbacks("handlerWillStart",{event:s,request:r})
try{if(a=await this._handle(r,e),!a||"error"===a.type)throw new t.WorkboxError("no-response",{url:r.url})}catch(t){if(t instanceof Error)for(const n of e.iterateCallbacks("handlerDidError"))if(a=await n({error:t,event:s,request:r}),a)break
if(!a)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))a=await t({event:s,request:r,response:a})
return a}async k(e,t,r,s){let a,n
try{a=await e}catch(n){}try{await t.runCallbacks("handlerDidRespond",{event:s,request:r,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(n=e)}if(await t.runCallbacks("handlerDidComplete",{event:s,request:r,response:a,error:n}),t.destroy(),n)throw n}}const w={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null}
return e.CacheFirst=class extends u{async _handle(e,r){let s,a=await r.cacheMatch(e)
if(!a)try{a=await r.fetchAndCachePut(e)}catch(e){e instanceof Error&&(s=e)}if(!a)throw new t.WorkboxError("no-response",{url:e.url,error:s})
return a}},e.CacheOnly=class extends u{async _handle(e,r){const s=await r.cacheMatch(e)
if(!s)throw new t.WorkboxError("no-response",{url:e.url})
return s}},e.NetworkFirst=class extends u{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(w),this.R=e.networkTimeoutSeconds||0}async _handle(e,r){const s=[],a=[]
let n
if(this.R){const{id:t,promise:o}=this.W({request:e,logs:s,handler:r})
n=t,a.push(o)}const o=this.O({timeoutId:n,request:e,logs:s,handler:r})
a.push(o)
const i=await r.waitUntil((async()=>await r.waitUntil(Promise.race(a))||await o)())
if(!i)throw new t.WorkboxError("no-response",{url:e.url})
return i}W({request:e,logs:t,handler:r}){let s
return{promise:new Promise((t=>{s=setTimeout((async()=>{t(await r.cacheMatch(e))}),1e3*this.R)})),id:s}}async O({timeoutId:e,request:t,logs:r,handler:s}){let a,n
try{n=await s.fetchAndCachePut(t)}catch(e){e instanceof Error&&(a=e)}return e&&clearTimeout(e),!a&&n||(n=await s.cacheMatch(t)),n}},e.NetworkOnly=class extends u{constructor(e={}){super(e),this.R=e.networkTimeoutSeconds||0}async _handle(e,r){let s,a
try{const t=[r.fetch(e)]
if(this.R){const e=c.timeout(1e3*this.R)
t.push(e)}if(a=await Promise.race(t),!a)throw new Error(`Timed out the network response after ${this.R} seconds.`)}catch(e){e instanceof Error&&(s=e)}if(!a)throw new t.WorkboxError("no-response",{url:e.url,error:s})
return a}},e.StaleWhileRevalidate=class extends u{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(w)}async _handle(e,r){const s=r.fetchAndCachePut(e).catch((()=>{}))
r.waitUntil(s)
let a,n=await r.cacheMatch(e)
if(n);else try{n=await s}catch(e){e instanceof Error&&(a=e)}if(!n)throw new t.WorkboxError("no-response",{url:e.url,error:a})
return n}},e.Strategy=u,e.StrategyHandler=l,e}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private)

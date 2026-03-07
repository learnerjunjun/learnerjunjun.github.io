this.workbox=this.workbox||{},this.workbox.strategies=function(exports,e,t,r,s,o,a,n,i,c){"use strict"
function h(e){return"string"==typeof e?new Request(e):e}try{self["workbox:strategies:7.0.0"]&&_()}catch(e){}class l{constructor(t,r){this._cacheKeys={},e.assert.isInstance(r.event,ExtendableEvent,{moduleName:"workbox-strategies",className:"StrategyHandler",funcName:"constructor",paramName:"options.event"}),Object.assign(this,r),this.event=r.event,this._strategy=t,this._handlerDeferred=new n.Deferred,this._extendLifetimePromises=[],this._plugins=[...t.plugins],this._pluginStateMap=new Map
for(const e of this._plugins)this._pluginStateMap.set(e,{})
this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this
let a=h(e)
if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse
if(e)return t.logger.log(`Using a preloaded navigation response for '${o.getFriendlyURL(a.url)}'`),e}const n=this.hasCallback("fetchDidFail")?a.clone():null
try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new r.WorkboxError("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone()
try{let e
e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions),t.logger.debug(`Network request for '${o.getFriendlyURL(a.url)}' returned a response with status '${e.status}'.`)
for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e})
return e}catch(e){throw t.logger.log(`Network request for '${o.getFriendlyURL(a.url)}' threw an error.`,e),n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),r=t.clone()
return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){const r=h(e)
let s
const{cacheName:o,matchOptions:a}=this._strategy,n=await this.getCacheKey(r,"read"),i=Object.assign(Object.assign({},a),{cacheName:o})
s=await caches.match(n,i),s?t.logger.debug(`Found a cached response in '${o}'.`):t.logger.debug(`No cached response found in '${o}'.`)
for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:o,matchOptions:a,cachedResponse:s,request:n,event:this.event})||void 0
return s}async cachePut(e,s){const n=h(e)
await c.timeout(0)
const l=await this.getCacheKey(n,"write")
{if(l.method&&"GET"!==l.method)throw new r.WorkboxError("attempt-to-cache-non-get-request",{url:o.getFriendlyURL(l.url),method:l.method})
const e=s.headers.get("Vary")
e&&t.logger.debug(`The response for ${o.getFriendlyURL(l.url)} has a 'Vary: ${e}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`)}if(!s)throw t.logger.error(`Cannot cache non-existent response for '${o.getFriendlyURL(l.url)}'.`),new r.WorkboxError("cache-put-with-no-response",{url:o.getFriendlyURL(l.url)})
const u=await this._ensureResponseSafeToCache(s)
if(!u)return t.logger.debug(`Response '${o.getFriendlyURL(l.url)}' will not be cached.`,u),!1
const{cacheName:d,matchOptions:g}=this._strategy,p=await self.caches.open(d),m=this.hasCallback("cacheDidUpdate"),w=m?await a.cacheMatchIgnoreParams(p,l.clone(),["__WB_REVISION__"],g):null
t.logger.debug(`Updating the '${d}' cache with a new Response for ${o.getFriendlyURL(l.url)}.`)
try{await p.put(l,m?u.clone():u)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await i.executeQuotaErrorCallbacks(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:d,oldResponse:w,newResponse:u.clone(),request:l,event:this.event})
return!0}async getCacheKey(e,t){const r=`${e.url} | ${t}`
if(!this._cacheKeys[r]){let s=e
for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=h(await e({mode:t,request:s,event:this.event,params:this.params}))
this._cacheKeys[r]=s}return this._cacheKeys[r]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0
return!1}async runCallbacks(e,t){for(const r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const r=this._pluginStateMap.get(t),s=s=>{const o=Object.assign(Object.assign({},s),{state:r})
return t[e](o)}
yield s}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e
for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let r=e,s=!1
for(const e of this.iterateCallbacks("cacheWillUpdate"))if(r=await e({request:this.request,response:r,event:this.event})||void 0,s=!0,!r)break
return s||(r&&200!==r.status&&(r=void 0),r&&200!==r.status&&(0===r.status?t.logger.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`):t.logger.debug(`The response for '${this.request.url}' returned a status code of '${e.status}' and won't be cached as a result.`))),r}}class u{constructor(e={}){this.cacheName=s.cacheNames.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e)
return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request})
const t=e.event,r="string"==typeof e.request?new Request(e.request):e.request,s="params"in e?e.params:void 0,o=new l(this,{event:t,request:r,params:s}),a=this._getResponse(o,r,t)
return[a,this._awaitComplete(a,o,r,t)]}async _getResponse(e,s,a){let n
await e.runCallbacks("handlerWillStart",{event:a,request:s})
try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new r.WorkboxError("no-response",{url:s.url})}catch(r){if(r instanceof Error)for(const t of e.iterateCallbacks("handlerDidError"))if(n=await t({error:r,event:a,request:s}),n)break
if(!n)throw r
t.logger.log(`While responding to '${o.getFriendlyURL(s.url)}', an ${r instanceof Error?r.toString():""} error occurred. Using a fallback response provided by a handlerDidError plugin.`)}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n})
return n}async _awaitComplete(e,t,r,s){let o,a
try{o=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:s,request:r,response:o}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:s,request:r,response:o,error:a}),t.destroy(),a)throw a}}const d=(e,t)=>`Using ${e} to respond to '${o.getFriendlyURL(t.url)}'`,g=e=>{e&&(t.logger.groupCollapsed("View the final response here."),t.logger.log(e||"[No response returned]"),t.logger.groupEnd())},p={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null}
return exports.CacheFirst=class extends u{async _handle(s,o){const a=[]
e.assert.isInstance(s,Request,{moduleName:"workbox-strategies",className:this.constructor.name,funcName:"makeRequest",paramName:"request"})
let n,i=await o.cacheMatch(s)
if(i)a.push(`Found a cached response in the '${this.cacheName}' cache.`)
else{a.push(`No response found in the '${this.cacheName}' cache. Will respond with a network request.`)
try{i=await o.fetchAndCachePut(s)}catch(e){e instanceof Error&&(n=e)}i?a.push("Got response from network."):a.push("Unable to get a response from the network.")}t.logger.groupCollapsed(d(this.constructor.name,s))
for(const e of a)t.logger.log(e)
if(g(i),t.logger.groupEnd(),!i)throw new r.WorkboxError("no-response",{url:s.url,error:n})
return i}},exports.CacheOnly=class extends u{async _handle(s,o){e.assert.isInstance(s,Request,{moduleName:"workbox-strategies",className:this.constructor.name,funcName:"makeRequest",paramName:"request"})
const a=await o.cacheMatch(s)
if(t.logger.groupCollapsed(d(this.constructor.name,s)),a?(t.logger.log(`Found a cached response in the '${this.cacheName}' cache.`),g(a)):t.logger.log(`No response found in the '${this.cacheName}' cache.`),t.logger.groupEnd(),!a)throw new r.WorkboxError("no-response",{url:s.url})
return a}},exports.NetworkFirst=class extends u{constructor(t={}){super(t),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(p),this._networkTimeoutSeconds=t.networkTimeoutSeconds||0,this._networkTimeoutSeconds&&e.assert.isType(this._networkTimeoutSeconds,"number",{moduleName:"workbox-strategies",className:this.constructor.name,funcName:"constructor",paramName:"networkTimeoutSeconds"})}async _handle(s,o){const a=[]
e.assert.isInstance(s,Request,{moduleName:"workbox-strategies",className:this.constructor.name,funcName:"handle",paramName:"makeRequest"})
const n=[]
let i
if(this._networkTimeoutSeconds){const{id:e,promise:t}=this._getTimeoutPromise({request:s,logs:a,handler:o})
i=e,n.push(t)}const c=this._getNetworkPromise({timeoutId:i,request:s,logs:a,handler:o})
n.push(c)
const h=await o.waitUntil((async()=>await o.waitUntil(Promise.race(n))||await c)())
t.logger.groupCollapsed(d(this.constructor.name,s))
for(const e of a)t.logger.log(e)
if(g(h),t.logger.groupEnd(),!h)throw new r.WorkboxError("no-response",{url:s.url})
return h}_getTimeoutPromise({request:e,logs:t,handler:r}){let s
return{promise:new Promise((o=>{s=setTimeout((async()=>{t.push(`Timing out the network response at ${this._networkTimeoutSeconds} seconds.`),o(await r.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:s}}async _getNetworkPromise({timeoutId:e,request:t,logs:r,handler:s}){let o,a
try{a=await s.fetchAndCachePut(t)}catch(e){e instanceof Error&&(o=e)}return e&&clearTimeout(e),a?r.push("Got response from network."):r.push("Unable to get a response from the network. Will respond with a cached response."),!o&&a||(a=await s.cacheMatch(t),a?r.push(`Found a cached response in the '${this.cacheName}' cache.`):r.push(`No response found in the '${this.cacheName}' cache.`)),a}},exports.NetworkOnly=class extends u{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(s,o){let a,n
e.assert.isInstance(s,Request,{moduleName:"workbox-strategies",className:this.constructor.name,funcName:"_handle",paramName:"request"})
try{const e=[o.fetch(s)]
if(this._networkTimeoutSeconds){const t=c.timeout(1e3*this._networkTimeoutSeconds)
e.push(t)}if(n=await Promise.race(e),!n)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){e instanceof Error&&(a=e)}if(t.logger.groupCollapsed(d(this.constructor.name,s)),n?t.logger.log("Got response from network."):t.logger.log("Unable to get a response from the network."),g(n),t.logger.groupEnd(),!n)throw new r.WorkboxError("no-response",{url:s.url,error:a})
return n}},exports.StaleWhileRevalidate=class extends u{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(p)}async _handle(s,o){const a=[]
e.assert.isInstance(s,Request,{moduleName:"workbox-strategies",className:this.constructor.name,funcName:"handle",paramName:"request"})
const n=o.fetchAndCachePut(s).catch((()=>{}))
o.waitUntil(n)
let i,c=await o.cacheMatch(s)
if(c)a.push(`Found a cached response in the '${this.cacheName}' cache. Will update with the network response in the background.`)
else{a.push(`No response found in the '${this.cacheName}' cache. Will wait for the network response.`)
try{c=await n}catch(e){e instanceof Error&&(i=e)}}t.logger.groupCollapsed(d(this.constructor.name,s))
for(const e of a)t.logger.log(e)
if(g(c),t.logger.groupEnd(),!c)throw new r.WorkboxError("no-response",{url:s.url,error:i})
return c}},exports.Strategy=u,exports.StrategyHandler=l,exports}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private)

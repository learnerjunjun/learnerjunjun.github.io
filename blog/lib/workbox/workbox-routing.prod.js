this.workbox=this.workbox||{},this.workbox.routing=function(e,t){"use strict"
try{self["workbox:routing:7.4.0"]&&_()}catch(e){}const r=e=>e&&"object"==typeof e?e:{handle:e}
class s{constructor(e,t,s="GET"){this.handler=r(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=r(e)}}class n extends s{constructor(e,t,r){super((({url:t})=>{const r=e.exec(t.href)
if(r&&(t.origin===location.origin||0===r.index))return r.slice(1)}),t,r)}}class o{constructor(){this.C=new Map,this.L=new Map}get routes(){return this.C}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e})
r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,r=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t])
const r=new Request(...t)
return this.handleRequest({request:r,event:e})})))
e.waitUntil(r),e.ports&&e.ports[0]&&r.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const r=new URL(e.url,location.href)
if(!r.protocol.startsWith("http"))return
const s=r.origin===location.origin,{params:n,route:o}=this.findMatchingRoute({event:t,request:e,sameOrigin:s,url:r})
let i=o&&o.handler
const a=e.method
if(!i&&this.L.has(a)&&(i=this.L.get(a)),!i)return
let h
try{h=i.handle({url:r,request:e,event:t,params:n})}catch(e){h=Promise.reject(e)}const u=o&&o.catchHandler
return h instanceof Promise&&(this.H||u)&&(h=h.catch((async s=>{if(u)try{return await u.handle({url:r,request:e,event:t,params:n})}catch(e){e instanceof Error&&(s=e)}if(this.H)return this.H.handle({url:r,request:e,event:t})
throw s}))),h}findMatchingRoute({url:e,sameOrigin:t,request:r,event:s}){const n=this.C.get(r.method)||[]
for(const o of n){let n
const i=o.match({url:e,sameOrigin:t,request:r,event:s})
if(i)return n=i,(Array.isArray(n)&&0===n.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:o,params:n}}return{}}setDefaultHandler(e,t="GET"){this.L.set(t,r(e))}setCatchHandler(e){this.H=r(e)}registerRoute(e){this.C.has(e.method)||this.C.set(e.method,[]),this.C.get(e.method).push(e)}unregisterRoute(e){if(!this.C.has(e.method))throw new t.WorkboxError("unregister-route-but-not-found-with-method",{method:e.method})
const r=this.C.get(e.method).indexOf(e)
if(!(r>-1))throw new t.WorkboxError("unregister-route-route-not-registered")
this.C.get(e.method).splice(r,1)}}let i
const a=()=>(i||(i=new o,i.addFetchListener(),i.addCacheListener()),i)
return e.NavigationRoute=class extends s{constructor(e,{allowlist:t=[/./],denylist:r=[]}={}){super((e=>this.j(e)),e),this.M=t,this.N=r}j({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1
const r=e.pathname+e.search
for(const e of this.N)if(e.test(r))return!1
return!!this.M.some((e=>e.test(r)))}},e.RegExpRoute=n,e.Route=s,e.Router=o,e.registerRoute=function(e,r,o){let i
if("string"==typeof e){const t=new URL(e,location.href)
i=new s((({url:e})=>e.href===t.href),r,o)}else if(e instanceof RegExp)i=new n(e,r,o)
else if("function"==typeof e)i=new s(e,r,o)
else{if(!(e instanceof s))throw new t.WorkboxError("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"})
i=e}return a().registerRoute(i),i},e.setCatchHandler=function(e){a().setCatchHandler(e)},e.setDefaultHandler=function(e){a().setDefaultHandler(e)},e}({},workbox.core._private)

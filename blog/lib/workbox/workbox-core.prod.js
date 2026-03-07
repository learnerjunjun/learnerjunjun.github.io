this.workbox=this.workbox||{},this.workbox.core=function(e){"use strict"
function t(e,t){const n=new URL(e)
for(const e of t)n.searchParams.delete(e)
return n.href}function n(){if(void 0===u){const e=new Response("")
if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}function r(e){return new Promise((t=>setTimeout(t,e)))}try{self["workbox:core:7.0.0"]&&_()}catch(e){}class i extends Error{constructor(e,t){super(((e,...t)=>{let n=e
return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n})(e,t)),this.name=e,this.details=t}}const o=new Set,s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),c={updateDetails:e=>{(e=>{for(const t of Object.keys(s))e(t)})((t=>{"string"==typeof e[t]&&(s[t]=e[t])}))},getGoogleAnalyticsName:e=>e||a(s.googleAnalytics),getPrecacheName:e=>e||a(s.precache),getPrefix:()=>s.prefix,getRuntimeName:e=>e||a(s.runtime),getSuffix:()=>s.suffix}
let l,u
var f=Object.freeze({__proto__:null,assert:null,cacheMatchIgnoreParams:async function(e,n,r,i){const o=t(n.url,r)
if(n.url===o)return e.match(n,i)
const s=Object.assign(Object.assign({},i),{ignoreSearch:!0}),a=await e.keys(n,s)
for(const n of a)if(o===t(n.url,r))return e.match(n,i)},cacheNames:c,canConstructReadableStream:function(){if(void 0===l)try{new ReadableStream({start(){}}),l=!0}catch(e){l=!1}return l},canConstructResponseFromBodyStream:n,dontWaitFor:function(e){e.then((()=>{}))},Deferred:class{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}},executeQuotaErrorCallbacks:async function(){for(const e of o)await e()},getFriendlyURL:e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),""),logger:null,resultingClientExists:async function(e){if(!e)return
let t=await self.clients.matchAll({type:"window"})
const n=new Set(t.map((e=>e.id)))
let i
const o=performance.now()
for(;performance.now()-o<2e3&&(t=await self.clients.matchAll({type:"window"}),i=t.find((t=>e?t.id===e:!n.has(t.id))),!i);)await r(100)
return i},timeout:r,waitUntil:function(e,t){const n=t()
return e.waitUntil(n),n},WorkboxError:i})
const g={get googleAnalytics(){return c.getGoogleAnalyticsName()},get precache(){return c.getPrecacheName()},get prefix(){return c.getPrefix()},get runtime(){return c.getRuntimeName()},get suffix(){return c.getSuffix()}}
return e._private=f,e.cacheNames=g,e.clientsClaim=function(){self.addEventListener("activate",(()=>self.clients.claim()))},e.copyResponse=async function(e,t){let r=null
if(e.url&&(r=new URL(e.url).origin),r!==self.location.origin)throw new i("cross-origin-copy-response",{origin:r})
const o=e.clone(),s={headers:new Headers(o.headers),status:o.status,statusText:o.statusText},a=t?t(s):s,c=n()?o.body:await o.blob()
return new Response(c,a)},e.registerQuotaErrorCallback=function(e){o.add(e)},e.setCacheNameDetails=function(e){c.updateDetails(e)},e.skipWaiting=function(){self.skipWaiting()},e}({})

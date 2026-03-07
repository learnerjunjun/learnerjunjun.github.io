this.workbox=this.workbox||{},this.workbox.googleAnalytics=function(exports,e,t,o,r,a,n,s,i){"use strict"
try{self["workbox:google-analytics:7.0.0"]&&_()}catch(e){}const c="www.google-analytics.com",l="www.googletagmanager.com",u=/^\/(\w+\/)?collect/,w=e=>{const t=({url:e})=>e.hostname===c&&u.test(e.pathname),o=new i.NetworkOnly({plugins:[e]})
return[new a.Route(t,o,"GET"),new a.Route(t,o,"POST")]},g=e=>{const t=new s.NetworkFirst({cacheName:e})
return new a.Route((({url:e})=>e.hostname===c&&"/analytics.js"===e.pathname),t,"GET")},h=e=>{const t=new s.NetworkFirst({cacheName:e})
return new a.Route((({url:e})=>e.hostname===l&&"/gtag/js"===e.pathname),t,"GET")},m=e=>{const t=new s.NetworkFirst({cacheName:e})
return new a.Route((({url:e})=>e.hostname===l&&"/gtm.js"===e.pathname),t,"GET")}
return exports.initialize=(a={})=>{const s=t.cacheNames.getGoogleAnalyticsName(a.cacheName),i=new e.BackgroundSyncPlugin("workbox-google-analytics",{maxRetentionTime:2880,onSync:(c=a,async({queue:e})=>{let t
for(;t=await e.shiftRequest();){const{request:a,timestamp:n}=t,s=new URL(a.url)
try{const e="POST"===a.method?new URLSearchParams(await a.clone().text()):s.searchParams,t=n-(Number(e.get("qt"))||0),i=Date.now()-t
if(e.set("qt",String(i)),c.parameterOverrides)for(const t of Object.keys(c.parameterOverrides)){const o=c.parameterOverrides[t]
e.set(t,o)}"function"==typeof c.hitFilter&&c.hitFilter.call(null,e),await fetch(new Request(s.origin+s.pathname,{body:e.toString(),method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"text/plain"}})),r.logger.log(`Request for '${o.getFriendlyURL(s.href)}' has been replayed`)}catch(a){throw await e.unshiftRequest(t),r.logger.log(`Request for '${o.getFriendlyURL(s.href)}' failed to replay, putting it back in the queue.`),a}}r.logger.log("All Google Analytics request successfully replayed; the queue is now empty!")})})
var c
const l=[m(s),g(s),h(s),...w(i)],u=new n.Router
for(const e of l)u.registerRoute(e)
u.addFetchListener()},exports}({},workbox.backgroundSync,workbox.core._private,workbox.core._private,workbox.core._private,workbox.routing,workbox.routing,workbox.strategies,workbox.strategies)

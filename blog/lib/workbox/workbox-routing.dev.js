this.workbox=this.workbox||{},this.workbox.routing=function(exports,e,t,r,o){"use strict"
try{self["workbox:routing:7.0.0"]&&_()}catch(e){}const a=["DELETE","GET","HEAD","PATCH","POST","PUT"],s=t=>t&&"object"==typeof t?(e.assert.hasMethod(t,"handle",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"handler"}),t):(e.assert.isType(t,"function",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"handler"}),{handle:t})
class n{constructor(t,r,o="GET"){e.assert.isType(t,"function",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"match"}),o&&e.assert.isOneOf(o,a,{paramName:"method"}),this.handler=s(r),this.match=t,this.method=o}setCatchHandler(e){this.catchHandler=s(e)}}class i extends n{constructor(r,o,a){e.assert.isInstance(r,RegExp,{moduleName:"workbox-routing",className:"RegExpRoute",funcName:"constructor",paramName:"pattern"}),super((({url:e})=>{const o=r.exec(e.href)
if(o){if(e.origin===location.origin||0===o.index)return o.slice(1)
t.logger.debug(`The regular expression '${r.toString()}' only partially matched against the cross-origin URL '${e.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`)}}),o,a)}}class u{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e})
r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:r}=e.data
t.logger.debug("Caching URLs from the window",r.urlsToCache)
const o=Promise.all(r.urlsToCache.map((t=>{"string"==typeof t&&(t=[t])
const r=new Request(...t)
return this.handleRequest({request:r,event:e})})))
e.waitUntil(o),e.ports&&e.ports[0]&&o.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:r,event:a}){e.assert.isInstance(r,Request,{moduleName:"workbox-routing",className:"Router",funcName:"handleRequest",paramName:"options.request"})
const s=new URL(r.url,location.href)
if(!s.protocol.startsWith("http"))return void t.logger.debug("Workbox Router only supports URLs that start with 'http'.")
const n=s.origin===location.origin,{params:i,route:u}=this.findMatchingRoute({event:a,request:r,sameOrigin:n,url:s})
let l=u&&u.handler
const c=[]
l&&(c.push(["Found a route to handle this request:",u]),i&&c.push(["Passing the following params to the route's handler:",i]))
const h=r.method
if(!l&&this._defaultHandlerMap.has(h)&&(c.push(`Failed to find a matching route. Falling back to the default handler for ${h}.`),l=this._defaultHandlerMap.get(h)),!l)return void t.logger.debug(`No route found for: ${o.getFriendlyURL(s)}`)
let g
t.logger.groupCollapsed(`Router is responding to: ${o.getFriendlyURL(s)}`),c.forEach((e=>{Array.isArray(e)?t.logger.log(...e):t.logger.log(e)})),t.logger.groupEnd()
try{g=l.handle({url:s,request:r,event:a,params:i})}catch(e){g=Promise.reject(e)}const d=u&&u.catchHandler
return g instanceof Promise&&(this._catchHandler||d)&&(g=g.catch((async e=>{if(d){t.logger.groupCollapsed(`Error thrown when responding to:  ${o.getFriendlyURL(s)}. Falling back to route's Catch Handler.`),t.logger.error("Error thrown by:",u),t.logger.error(e),t.logger.groupEnd()
try{return await d.handle({url:s,request:r,event:a,params:i})}catch(t){t instanceof Error&&(e=t)}}if(this._catchHandler)return t.logger.groupCollapsed(`Error thrown when responding to:  ${o.getFriendlyURL(s)}. Falling back to global Catch Handler.`),t.logger.error("Error thrown by:",u),t.logger.error(e),t.logger.groupEnd(),this._catchHandler.handle({url:s,request:r,event:a})
throw e}))),g}findMatchingRoute({url:e,sameOrigin:r,request:a,event:s}){const n=this._routes.get(a.method)||[]
for(const i of n){let n
const u=i.match({url:e,sameOrigin:r,request:a,event:s})
if(u)return u instanceof Promise&&t.logger.warn(`While routing ${o.getFriendlyURL(e)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`,i),n=u,(Array.isArray(n)&&0===n.length||u.constructor===Object&&0===Object.keys(u).length||"boolean"==typeof u)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,s(e))}setCatchHandler(e){this._catchHandler=s(e)}registerRoute(t){e.assert.isType(t,"object",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),e.assert.hasMethod(t,"match",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),e.assert.isType(t.handler,"object",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),e.assert.hasMethod(t.handler,"handle",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route.handler"}),e.assert.isType(t.method,"string",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route.method"}),this._routes.has(t.method)||this._routes.set(t.method,[]),this._routes.get(t.method).push(t)}unregisterRoute(e){if(!this._routes.has(e.method))throw new r.WorkboxError("unregister-route-but-not-found-with-method",{method:e.method})
const t=this._routes.get(e.method).indexOf(e)
if(!(t>-1))throw new r.WorkboxError("unregister-route-route-not-registered")
this._routes.get(e.method).splice(t,1)}}let l
const c=()=>(l||(l=new u,l.addFetchListener(),l.addCacheListener()),l)
return exports.NavigationRoute=class extends n{constructor(t,{allowlist:r=[/./],denylist:o=[]}={}){e.assert.isArrayOfClass(r,RegExp,{moduleName:"workbox-routing",className:"NavigationRoute",funcName:"constructor",paramName:"options.allowlist"}),e.assert.isArrayOfClass(o,RegExp,{moduleName:"workbox-routing",className:"NavigationRoute",funcName:"constructor",paramName:"options.denylist"}),super((e=>this._match(e)),t),this._allowlist=r,this._denylist=o}_match({url:e,request:r}){if(r&&"navigate"!==r.mode)return!1
const o=e.pathname+e.search
for(const e of this._denylist)if(e.test(o))return t.logger.log(`The navigation route ${o} is not being used, since the URL matches this denylist pattern: ${e.toString()}`),!1
return this._allowlist.some((e=>e.test(o)))?(t.logger.debug(`The navigation route ${o} is being used.`),!0):(t.logger.log(`The navigation route ${o} is not being used, since the URL being navigated to doesn't match the allowlist.`),!1)}},exports.RegExpRoute=i,exports.Route=n,exports.Router=u,exports.registerRoute=function(e,o,a){let s
if("string"==typeof e){const i=new URL(e,location.href)
{if(!e.startsWith("/")&&!e.startsWith("http"))throw new r.WorkboxError("invalid-string",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"})
const o=e.startsWith("http")?i.pathname:e,a="[*:?+]"
new RegExp(`${a}`).exec(o)&&t.logger.debug(`The '$capture' parameter contains an Express-style wildcard character (${a}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`)}s=new n((({url:r})=>(r.pathname===i.pathname&&r.origin!==i.origin&&t.logger.debug(`${e} only partially matches the cross-origin URL ${r.toString()}. This route will only handle cross-origin requests if they match the entire URL.`),r.href===i.href)),o,a)}else if(e instanceof RegExp)s=new i(e,o,a)
else if("function"==typeof e)s=new n(e,o,a)
else{if(!(e instanceof n))throw new r.WorkboxError("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"})
s=e}return c().registerRoute(s),s},exports.setCatchHandler=function(e){c().setCatchHandler(e)},exports.setDefaultHandler=function(e){c().setDefaultHandler(e)},exports}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private)

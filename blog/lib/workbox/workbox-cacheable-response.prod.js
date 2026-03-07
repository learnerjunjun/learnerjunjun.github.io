this.workbox=this.workbox||{},this.workbox.cacheableResponse=function(s){"use strict"
try{self["workbox:cacheable-response:7.0.0"]&&_()}catch(s){}class e{constructor(s={}){this.O=s.statuses,this._=s.headers}isResponseCacheable(s){let e=!0
return this.O&&(e=this.O.includes(s.status)),this._&&e&&(e=Object.keys(this._).some((e=>s.headers.get(e)===this._[e]))),e}}return s.CacheableResponse=e,s.CacheableResponsePlugin=class{constructor(s){this.cacheWillUpdate=async({response:s})=>this.G.isResponseCacheable(s)?s:null,this.G=new e(s)}},s}({})

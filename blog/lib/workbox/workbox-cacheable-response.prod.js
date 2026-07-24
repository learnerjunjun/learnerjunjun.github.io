this.workbox=this.workbox||{},this.workbox.cacheableResponse=function(s){"use strict"
try{self["workbox:cacheable-response:7.4.0"]&&_()}catch(s){}class e{constructor(s={}){this.ss=s.statuses,this.ts=s.headers}isResponseCacheable(s){let e=!0
return this.ss&&(e=this.ss.includes(s.status)),this.ts&&e&&(e=Object.keys(this.ts).some((e=>s.headers.get(e)===this.ts[e]))),e}}return s.CacheableResponse=e,s.CacheableResponsePlugin=class{constructor(s){this.cacheWillUpdate=async({response:s})=>this.hs.isResponseCacheable(s)?s:null,this.hs=new e(s)}},s}({})

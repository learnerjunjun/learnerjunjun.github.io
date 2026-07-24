window.addEventListener("load",(()=>{const e=document.getElementById("search-mask"),t=document.querySelector("#local-search .search-dialog"),n=document.querySelector("#local-search-input input"),r=document.getElementById("local-search-results"),s=document.getElementById("loading-status")
let a=null,o=0
const c=e=>e.replace(/[&<>"']/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[e]))),l=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),i=(e,t)=>{const n=new RegExp(`(${t.map(l).join("|")})`,"gi")
return e.split(n).map((e=>t.includes(e.toLowerCase())?`<span class="search-keyword">${c(e)}</span>`:c(e))).join("")},d=()=>(a||(a=(async e=>{const t=await fetch(e)
if(!t.ok)throw new Error(`Search index request failed: ${t.status}`)
let n
if(/\.json(?:$|\?)/.test(e))n=await t.json()
else{const e=await t.text(),r=(new window.DOMParser).parseFromString(e,"text/xml")
if(r.querySelector("parsererror"))throw new Error("Search index XML is invalid")
n=[...r.querySelectorAll("entry")].map((e=>({title:e.querySelector("title")?.textContent||"",content:e.querySelector("content")?.textContent||"",url:e.querySelector("url")?.textContent||""})))}return(()=>{const e=document.getElementById("loading-database")
e&&(e.nextElementSibling&&(e.nextElementSibling.style.display="block"),e.remove())})(),n})(GLOBAL_CONFIG.localSearch.path)),a),u=()=>{const n=document.body.style
n.width="",n.overflow="",btf.animateOut(t,"search_close .5s"),btf.animateOut(e,"to_hide 0.5s")},h=()=>{const r=document.body.style
r.width="100%",r.overflow="hidden",btf.animateIn(e,"to_show 0.5s"),btf.animateIn(t,"titleScale 0.5s"),setTimeout((()=>{n.focus()}),100),d().catch((()=>{})),document.addEventListener("keydown",(function e(t){"Escape"===t.code&&(u(),document.removeEventListener("keydown",e))}))},m=()=>{document.querySelector("#search-button > .search")?.addEventListener("click",h)}
n.addEventListener("input",(async function(){const e=this.value.trim(),t=e.toLowerCase().split(/\s+/).filter(Boolean),n=++o
if(0===t.length)return r.innerHTML="",void(s.innerHTML="")
s.innerHTML='<i class="fas fa-spinner fa-pulse"></i>'
try{const s=await d()
if(n!==o)return
const a=[]
for(const e of s){const n=e.title.trim(),r=e.content.replace(/<[^>]+>/g,"").trim(),s=n.toLowerCase(),o=r.toLowerCase()
if(!t.every((e=>s.includes(e)||o.includes(e))))continue
const l=t.map((e=>o.indexOf(e))).filter((e=>e>=0)).sort(((e,t)=>e-t))[0]??0,d=Math.max(0,l-30),u=Math.min(r.length,0===d?100:l+100),h=d>0?"...":"",m=u<r.length?"...":"",p=e.url.startsWith("/")||/^https?:\/\//.test(e.url)?e.url:GLOBAL_CONFIG.root+e.url
a.push(`<div class="local-search__hit-item"><a href="${c(p)}"><span class="search-result-title">${i(n,t)}</span>`+(r?`<p class="search-result">${h}${i(r.substring(d,u),t)}${m}</p>`:"")+"</a></div>")}const l=`<div id="local-search__hits-empty">${GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,c(e))}</div>`
r.innerHTML=`<div class="search-result-list">${a.length>0?a.join(""):l}</div>`,window.pjax&&window.pjax.refresh(r)}catch(e){if(n!==o)return
console.error(e),r.innerHTML='<div id="local-search__hits-empty">搜索索引加载失败，请稍后重试。</div>'}finally{n===o&&(s.innerHTML="")}})),document.querySelector("#local-search .search-close-button")?.addEventListener("click",u),e.addEventListener("click",u),GLOBAL_CONFIG.localSearch.preload&&d().catch((()=>{})),m(),window.addEventListener("pjax:complete",(()=>{!btf.isHidden(e)&&u(),m()}))}))

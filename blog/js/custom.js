function e(e,t){if("function"==typeof window[t])return Promise.resolve()
const n=document.querySelector(`script[data-dynamic-src="${e}"]`)
return new Promise(n?(e,t)=>{n.addEventListener("load",e,{once:!0}),n.addEventListener("error",t,{once:!0})}:(t,n)=>{const a=document.createElement("script")
a.src=e,a.dataset.dynamicSrc=e,a.onload=t,a.onerror=()=>n(new Error(`Failed to load ${e}`)),document.head.appendChild(a)})}window.jingvc={diffDate(e,t=!1){const n=new Date,a=new Date(e),r=n.getTime()-a.getTime(),i=36e5,o=24*i
if(!t)return parseInt(r/o)
const s=r/o,d=r/i,c=r/6e4
return r/2592e6>=1?a.toLocaleDateString().replace(/\//g,"-"):s>=1?`${parseInt(s)} ${GLOBAL_CONFIG.date_suffix.day}`:d>=1?`${parseInt(d)} ${GLOBAL_CONFIG.date_suffix.hour}`:c>=1?`${parseInt(c)} ${GLOBAL_CONFIG.date_suffix.min}`:GLOBAL_CONFIG.date_suffix.just},changeTimeInEssay(){document.querySelectorAll("#bber time").forEach((e=>{e.innerText=window.jingvc.diffDate(e.getAttribute("datetime"),!0),e.style.display="inline"}))},async reflashEssayWaterFall(){const t=document.querySelector("#waterfall")
if(t)try{await e("/blog/js/waterfall/waterfall.js","waterfall"),window.waterfall("#waterfall")}catch(e){console.error(e)}finally{t.classList.add("show")
const e=document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
e?.matches("#waterfall .bber-item")&&(e.setAttribute("aria-current","location"),window.requestAnimationFrame((()=>{e.scrollIntoView({block:"start"})})))}},commentText(e){const t=document.querySelector("#post-comment")
if(!t)return
window.scrollTo(0,t.offsetTop-80)
const n="undefined"===e||"null"===e?"好棒！":e
let a=0
const r=()=>{const e=document.querySelector(".el-textarea__inner")
if(!e)return a+=1,void(a<50&&window.setTimeout(r,100))
const t=document.createEvent("HTMLEvents")
t.initEvent("input",!0,!0),e.value=`> ${n.split("\n").join("\n> ")}\n\n`,e.dispatchEvent(t),e.focus(),e.setSelectionRange(-1,-1),document.getElementById("comment-tips")?.classList.add("show")}
r()},hideConsole(){document.getElementById("card-newest-comments")?.classList.remove("show")},async initIndexEssay(){const t=document.querySelector(".essay_bar_swiper_container")
if(!t||t.dataset.swiperState)return
t.dataset.swiperState="observing"
const n=async()=>{if("ready"!==t.dataset.swiperState){t.dataset.swiperState="loading"
try{await e("/blog/js/swiper.min.js","Swiper")
const n=new window.Swiper(t,{passiveListeners:!0,direction:"vertical",loop:!0,autoplay:{disableOnInteraction:!0,delay:3e3},mousewheel:!0}),a=document.getElementById("bbtalk")
a&&(a.onmouseenter=()=>n.autoplay.stop(),a.onmouseleave=()=>n.autoplay.start()),t.dataset.swiperState="ready"}catch(e){t.dataset.swiperState="error",console.error(e)}}}
if(!("IntersectionObserver"in window))return void n()
const a=new IntersectionObserver((e=>{e.some((e=>e.isIntersecting))&&(a.disconnect(),n())}),{threshold:.01})
a.observe(t)},initIndexVideo(){const e=document.getElementById("index-video"),t=e?.querySelector("source[data-src]")
if(!e||!t||"true"===e.dataset.initialized)return
e.dataset.initialized="true"
const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches
if(window.matchMedia("(max-width: 768px)").matches||navigator.connection?.saveData||n)return
e.addEventListener("canplay",(()=>{e.classList.add("is-ready"),e.play().catch((()=>{}))}),{once:!0})
const a=()=>{t.src=t.dataset.src,t.removeAttribute("data-src"),e.load()},r=()=>{window.setTimeout((()=>{"requestIdleCallback"in window?window.requestIdleCallback(a,{timeout:1500}):a()}),1200)}
"complete"===document.readyState?r():window.addEventListener("load",r,{once:!0})},initDeferredFoldMedia(){document.querySelectorAll("details.folding-tag").forEach((e=>{if("true"===e.dataset.deferredMediaInitialized)return
e.dataset.deferredMediaInitialized="true"
const t=()=>{e.open&&(e.querySelectorAll("iframe[data-src], video source[data-src]").forEach((e=>{e.src=e.dataset.src,e.removeAttribute("data-src"),"SOURCE"===e.tagName&&e.parentElement?.load()})),e.querySelectorAll("template[data-deferred-meting]").forEach((e=>e.replaceWith(e.content.cloneNode(!0)))))}
e.addEventListener("toggle",t),t()}))}},window.jingvc.initIndexEssay(),window.jingvc.initIndexVideo(),window.jingvc.initDeferredFoldMedia(),window.jingvc.changeTimeInEssay(),window.jingvc.reflashEssayWaterFall()

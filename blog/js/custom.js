function e(e,t){if("function"==typeof window[t])return Promise.resolve()
const n=document.querySelector(`script[data-dynamic-src="${e}"]`)
return new Promise(n?(e,t)=>{n.addEventListener("load",e,{once:!0}),n.addEventListener("error",t,{once:!0})}:(t,n)=>{const o=document.createElement("script")
o.src=e,o.dataset.dynamicSrc=e,o.onload=t,o.onerror=()=>n(new Error(`Failed to load ${e}`)),document.head.appendChild(o)})}window.jingvc={diffDate(e,t=!1){const n=new Date,o=new Date(e),a=n.getTime()-o.getTime(),r=36e5,s=24*r
if(!t)return parseInt(a/s)
const i=a/s,c=a/r,l=a/6e4
return a/2592e6>=1?o.toLocaleDateString().replace(/\//g,"-"):i>=1?`${parseInt(i)} ${GLOBAL_CONFIG.date_suffix.day}`:c>=1?`${parseInt(c)} ${GLOBAL_CONFIG.date_suffix.hour}`:l>=1?`${parseInt(l)} ${GLOBAL_CONFIG.date_suffix.min}`:GLOBAL_CONFIG.date_suffix.just},changeTimeInEssay(){document.querySelectorAll("#bber time").forEach((e=>{e.innerText=window.jingvc.diffDate(e.getAttribute("datetime"),!0),e.style.display="inline"}))},async reflashEssayWaterFall(){const t=document.querySelector("#waterfall")
if(t)try{await e("/blog/js/waterfall/waterfall.js","waterfall"),window.waterfall("#waterfall")}catch(e){console.error(e)}finally{t.classList.add("show")
const e=document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
e?.matches("#waterfall .bber-item")&&(e.setAttribute("aria-current","location"),window.requestAnimationFrame((()=>{e.scrollIntoView({block:"start"})})))}},commentText(e){const t=document.querySelector("#post-comment")
if(!t)return
window.scrollTo(0,t.offsetTop-80)
const n="undefined"===e||"null"===e?"好棒！":e
let o=0
const a=()=>{const e=document.querySelector(".el-textarea__inner")
if(!e)return o+=1,void(o<50&&window.setTimeout(a,100))
const t=document.createEvent("HTMLEvents")
t.initEvent("input",!0,!0),e.value=`> ${n.split("\n").join("\n> ")}\n\n`,e.dispatchEvent(t),e.focus(),e.setSelectionRange(-1,-1),document.getElementById("comment-tips")?.classList.add("show")}
a()},hideConsole(){document.getElementById("card-newest-comments")?.classList.remove("show")},async initIndexEssay(){if(document.querySelector(".essay_bar_swiper_container"))try{await e("/blog/js/swiper.min.js","Swiper")
const t=new window.Swiper(".essay_bar_swiper_container",{passiveListeners:!0,direction:"vertical",loop:!0,autoplay:{disableOnInteraction:!0,delay:3e3},mousewheel:!0}),n=document.getElementById("bbtalk")
n&&(n.onmouseenter=()=>t.autoplay.stop(),n.onmouseleave=()=>t.autoplay.start())}catch(e){console.error(e)}}},window.jingvc.initIndexEssay(),window.jingvc.changeTimeInEssay(),window.jingvc.reflashEssayWaterFall()

document.addEventListener("DOMContentLoaded",(function(){let e,t,n=!1
const o=n=>{const o=e=>{let t=0
return e.length&&Array.from(e).forEach((e=>{t+=e.offsetWidth})),t}
if(n){const n=o(document.querySelector("#blog-info > a").children),i=o(document.getElementById("menus").children)
e=n+i,t=document.getElementById("nav")}let i=""
i=window.innerWidth<=768||e>t.offsetWidth-120,i?t.classList.add("hide-menu"):t.classList.remove("hide-menu")},i=()=>{const e=document.body
e.style.overflow="",e.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),n=!1}
document.getElementById("rightside").addEventListener("click",(function(e){const t=e.target.id?e.target:e.target.parentNode
switch(t.id){case"go-up":btf.scrollToDest(0,500)
break
case"rightside_config":(e=>{const t=document.getElementById("rightside-config-hide").classList
t.toggle("show"),e.classList.contains("show")&&(t.add("status"),setTimeout((()=>{t.remove("status")}),300)),e.classList.toggle("show")})(t)
break
case"mobile-toc-button":document.getElementById("card-toc").classList.contains("open")?window.mobileToc.close():window.mobileToc.open()
break
case"readmode":(()=>{const e=document.body
e.classList.add("read-mode")
const t=document.createElement("button")
t.type="button",t.className="fas fa-sign-out-alt exit-readmode",e.appendChild(t),t.addEventListener("click",(function n(){e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",n)}))})()
break
case"darkmode":"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"function"==typeof changeGiscusTheme&&changeGiscusTheme(),"object"==typeof FB&&window.loadFBComment&&window.loadFBComment(),"function"==typeof runMermaid&&window.runMermaid()
break
case"hide-aside-btn":(()=>{const e=document.documentElement.classList
e.contains("hide-aside")?saveToLocal.set("aside-status","show",2):saveToLocal.set("aside-status","hide",2),e.toggle("hide-aside")})()}}))
const c=()=>{document.querySelectorAll("#article-container .tabs .tab-to-top").forEach((function(e){e.addEventListener("click",(function(){btf.scrollToDest(btf.getEleTop(btf.getParents(this,".tabs")),300)}))}))},s=function(e){e.forEach((e=>{const t=e,n=t.getAttribute("datetime")
t.innerText=btf.diffDate(n,!0),t.style.display="inline"}))}
window.refreshFn=function(){o(!0),t.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&function(){const e=GLOBAL_CONFIG.noticeOutdate,t=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate)
if(t>=e.limitDay){const n=document.createElement("div")
n.className="post-outdate-notice",n.textContent=e.messagePrev+" "+t+" "+e.messageNext
const o=document.getElementById("article-container")
"top"===e.position?o.insertBefore(n,o.firstChild):o.appendChild(n)}}(),GLOBAL_CONFIG.relativeDate.post&&s(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&s(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(()=>{const e=document.getElementById("runtimeshow")
if(e){const t=e.getAttribute("data-publishDate")
e.innerText=btf.diffDate(t)+" "+GLOBAL_CONFIG.runtime}})(),(()=>{const e=document.getElementById("last-push-date")
if(e){const t=e.getAttribute("data-lastPushDate")
e.innerText=btf.diffDate(t,!0)}})(),function(){const e=document.querySelectorAll("#aside-cat-list .card-category-list-item.parent i")
e.length&&e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),this.classList.toggle("expand")
const t=this.parentNode.nextElementSibling
btf.isHidden(t)?t.style.display="block":t.style.display="none"}))}))}()),function(){const e=GLOBAL_CONFIG_SITE.isToc,t=GLOBAL_CONFIG.isAnchor,n=document.getElementById("article-container")
if(!n||!e&&!t)return
let o,i,c,s,l
if(e){const e=document.getElementById("card-toc")
i=e.getElementsByClassName("toc-content")[0],o=i.querySelectorAll(".toc-link"),s=e.querySelector(".toc-percentage"),l=i.classList.contains("is-expand"),window.mobileToc={open:()=>{e.classList.add("open"),e.style.visibility="visible",e.style.animation="toc-open .3s"},close:()=>{e.style.animation="toc-close .2s",setTimeout((()=>{e.classList.remove("open"),e.style.animation="",e.style.visibility=""}),100)}},i.addEventListener("click",(e=>{e.preventDefault()
const t=e.target.classList
if(t.contains("toc-content"))return
const n=t.contains("toc-link")?e.target:e.target.parentElement
btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(n.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&window.mobileToc.close()})),c=e=>{const t=e.getBoundingClientRect().top,n=i.scrollTop
t>document.documentElement.clientHeight-100&&(i.scrollTop=n+150),t<100&&(i.scrollTop=n-150)}}const a=n.querySelectorAll("h1,h2,h3,h4,h5,h6")
let r=""
window.tocScrollFn=btf.throttle((()=>{const d=window.scrollY||document.documentElement.scrollTop
e&&GLOBAL_CONFIG.percent.toc&&(s.textContent=btf.getScrollPercent(d,n)),function(n){if(0===n)return!1
let s="",d=""
if(a.forEach((function(e,t){if(n>btf.getEleTop(e)-80){const n=e.id
s=n?"#"+encodeURI(n):"",d=t}})),r!==d&&(t&&btf.updateAnchor(s),r=d,e)){if(i.querySelectorAll(".active").forEach((e=>{e.classList.remove("active")})),""===s)return
const e=o[d]
if(e.classList.add("active"),setTimeout((()=>{c(e)}),0),l)return
let t=e.parentNode
for(;!t.matches(".toc");t=t.parentNode)t.matches("li")&&t.classList.add("active")}}(d)}),100),window.addEventListener("scroll",tocScrollFn)}(),GLOBAL_CONFIG_SITE.isHome&&(()=>{const e=document.getElementById("scroll-down")
e&&e.addEventListener("click",(function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}))})(),function(){function e(e,t,n){const o=document.createDocumentFragment()
if(s){const t=document.createElement("div")
t.className=`highlight-tools ${u}`,t.innerHTML=r+e+d,t.addEventListener("click",m),o.appendChild(t)}if(c&&t.offsetHeight>c+30){const e=document.createElement("div")
e.className="code-expand-btn",e.innerHTML='<i class="fas fa-angle-double-down"></i>',e.addEventListener("click",g),o.appendChild(e)}"hl"===n?t.insertBefore(o,t.firstChild):t.parentNode.insertBefore(o,t)}const t=GLOBAL_CONFIG.highlight
if(!t)return
const n=t.highlightCopy,o=t.highlightLang,i=GLOBAL_CONFIG_SITE.isHighlightShrink,c=t.highlightHeightLimit,s=n||o||void 0!==i,l="highlighjs"===t.plugin?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]')
if(!s&&!c||!l.length)return
const a="prismjs"===t.plugin
let r="",d=""
const u=!0===i?"closed":""
void 0!==i&&(r=`<i class="fas fa-angle-down expand ${u}"></i>`),n&&(d='<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>')
const m=function(e){const t=e.target.classList
t.contains("expand")?(e=>{const t=[...e.parentNode.children].slice(1)
e.firstChild.classList.toggle("closed"),btf.isHidden(t[t.length-1])?t.forEach((e=>{e.style.display="block"})):t.forEach((e=>{e.style.display="none"}))})(this):t.contains("copy-button")&&(e=>{const t=e.parentNode
t.classList.add("copy-true")
const n=window.getSelection(),o=document.createRange()
a?o.selectNodeContents(t.querySelectorAll("pre code")[0]):o.selectNodeContents(t.querySelectorAll("table .code pre")[0]),n.removeAllRanges(),n.addRange(o),n.toString(),((e,t)=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy"))if(document.execCommand("copy"),void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(GLOBAL_CONFIG.copy.success)
else{const e=t.previousElementSibling
e.innerText=GLOBAL_CONFIG.copy.success,e.style.opacity=1,setTimeout((()=>{e.style.opacity=0}),700)}else void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(GLOBAL_CONFIG.copy.noSupport):t.previousElementSibling.innerText=GLOBAL_CONFIG.copy.noSupport})(0,e.lastChild),n.removeAllRanges(),t.classList.remove("copy-true")})(this)},g=function(){this.classList.toggle("expand-done")}
o?a?l.forEach((function(t){const n=`<div class="code-lang">${t.getAttribute("data-language")?t.getAttribute("data-language"):"Code"}</div>`
btf.wrap(t,"figure",{class:"highlight"}),e(n,t)})):l.forEach((function(t){let n=t.getAttribute("class").split(" ")[1]
"plain"!==n&&void 0!==n||(n="Code"),e(`<div class="code-lang">${n}</div>`,t,"hl")})):a?l.forEach((function(t){btf.wrap(t,"figure",{class:"highlight"}),e("",t)})):l.forEach((function(t){e("",t,"hl")}))}(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach((function(e){const t=e.parentNode,n=e.title||e.alt
if(n&&!t.parentNode.classList.contains("justified-gallery")){const o=document.createElement("div")
o.className="img-alt is-center",o.textContent=n,t.insertBefore(o,e.nextSibling)}})),function(){const e=document.getElementById("rightside"),t=window.innerHeight+56
if(document.body.scrollHeight<=t)return void(e.style.cssText="opacity: 1; transform: translateX(-58px)")
let n=0,o=!0
const i=document.getElementById("page-header"),c="function"==typeof chatBtnHide,s="function"==typeof chatBtnShow,l=GLOBAL_CONFIG.percent.rightside,a=btf.throttle((()=>{const a=window.scrollY||document.documentElement.scrollTop,r=function(e){const t=e>n
return n=e,t}(a)
a>56?(r?(i.classList.contains("nav-visible")&&i.classList.remove("nav-visible"),s&&!0===o&&(chatBtnHide(),o=!1)):(i.classList.contains("nav-visible")||i.classList.add("nav-visible"),c&&!1===o&&(chatBtnShow(),o=!0)),i.classList.add("nav-fixed"),"0"===window.getComputedStyle(e).getPropertyValue("opacity")&&(e.style.cssText="opacity: 0.8; transform: translateX(-58px)")):(0===a&&i.classList.remove("nav-fixed","nav-visible"),e.style.cssText="opacity: ''; transform: ''"),l&&(e=>{const t=btf.getScrollPercent(e,document.body),n=document.getElementById("go-up")
t<95?(n.classList.add("show-percent"),n.querySelector(".scroll-percent").textContent=t):n.classList.remove("show-percent")})(a),document.body.scrollHeight<=t&&(e.style.cssText="opacity: 0.8; transform: translateX(-58px)")}),200)
window.scrollCollect=a,window.addEventListener("scroll",scrollCollect)}()
const e=document.querySelectorAll("#article-container .fj-gallery")
e.length&&function(e){const t=e=>{let t=""
const n=e=>e.replace(/"/g,"&quot;")
return e.forEach((e=>{const o=e.alt?`alt="${n(e.alt)}"`:"",i=e.title?`title="${n(e.title)}"`:""
t+=`<div class="fj-gallery-item"><img src="${e.url}" ${o+i}"></div>`})),t},n=(e,n,o)=>{const i=o,c=n.length
return c>i?e.insertAdjacentHTML("beforeend",t(n.splice(0,i))):(e.insertAdjacentHTML("beforeend",t(n)),e.classList.remove("lazyload")),c>i?i:c},o=(e,o)=>{if(e.classList.contains("lazyload")){const t=e.getAttribute("data-limit")
n(e,o,t)
const i=()=>{const c=n(e,o,t)
fjGallery(e,"appendImages",e.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${c})`)),btf.loadLightbox(e.querySelectorAll("img")),c<t&&e.nextElementSibling.removeEventListener("click",i)}
e.nextElementSibling.addEventListener("click",i)}else e.innerHTML=t(o)
btf.initJustifiedGallery(e),btf.loadLightbox(e.querySelectorAll("img"))},i=()=>{e.forEach((e=>{e.classList.contains("url")?(async e=>{const t=await fetch(e)
return await t.json()})(e.textContent).then((t=>{o(e,t)})):o(e,JSON.parse(e.textContent))}))}
window.fjGallery?i():(getCSS(`${GLOBAL_CONFIG.source.justifiedGallery.css}`),getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`).then(i))}(e),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(()=>{const e=document.querySelectorAll("#article-container :not(.highlight) > table, #article-container > table")
e.length&&e.forEach((e=>{btf.wrap(e,"div",{class:"table-wrap"})}))})(),function(){const e=document.querySelectorAll("#article-container .hide-button")
e.length&&e.forEach((function(e){e.addEventListener("click",(function(){this.classList.add("open")
const e=this.nextElementSibling.querySelectorAll(".fj-gallery")
e.length&&btf.initJustifiedGallery(e)}))}))}(),document.querySelectorAll("#article-container .tab > button").forEach((function(e){e.addEventListener("click",(function(){const e=this,t=e.parentNode
if(!t.classList.contains("active")){const n=t.parentNode.nextElementSibling,o=btf.siblings(t,".active")[0]
o&&o.classList.remove("active"),t.classList.add("active")
const i=e.getAttribute("data-href").replace("#","");[...n.children].forEach((e=>{e.id===i?e.classList.add("active"):e.classList.remove("active")}))
const c=n.querySelectorAll(`#${i} .fj-gallery`)
c.length>0&&btf.initJustifiedGallery(c)}}))})),c(),function(){let e=!1
const t=document.querySelector("#comment-switch > .switch-btn")
t&&t.addEventListener("click",(function(){this.classList.toggle("move"),document.querySelectorAll("#post-comment > .comment-wrap > div").forEach((function(e){btf.isHidden(e)?e.style.cssText="display: block;animation: tabshow .5s":e.style.cssText="display: none;animation: ''"})),e||"function"!=typeof loadOtherComment||(e=!0,loadOtherComment())}))}(),document.getElementById("toggle-menu").addEventListener("click",(()=>{btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),n=!0}))},refreshFn(),window.addEventListener("resize",(()=>{o(!1),btf.isHidden(document.getElementById("toggle-menu"))&&n&&i()})),document.getElementById("menu-mask").addEventListener("click",(()=>{i()})),document.querySelectorAll("#sidebar-menus .site-page.group").forEach((function(e){e.addEventListener("click",(function(){this.classList.toggle("hide")}))})),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:300,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(()=>{const e=GLOBAL_CONFIG.copyright
document.body.oncopy=t=>{let n
t.preventDefault()
const o=window.getSelection(0).toString()
return n=o.length>e.limitCount?o+"\n\n\n"+e.languages.author+"\n"+e.languages.link+window.location.href+"\n"+e.languages.source+"\n"+e.languages.info:o,t.clipboardData?t.clipboardData.setData("text",n):window.clipboardData.setData("text",n)}})()}))

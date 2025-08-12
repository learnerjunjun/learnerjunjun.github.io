(()=>{"use strict"
function e(e){return new Uint8Array(e.match(/[\da-f]{2}/gi).map((e=>parseInt(e,16))))}function t(e){var t,n,o=e.length,r=0,a=new Array
for(t=0;t<o;)(n=e.codePointAt(t))<128?(a[r++]=n,t++):n>127&&n<2048?(a[r++]=n>>6|192,a[r++]=63&n|128,t++):n>2047&&n<65536?(a[r++]=n>>12|224,a[r++]=n>>6&63|128,a[r++]=63&n|128,t++):(a[r++]=n>>18|240,a[r++]=n>>12&63|128,a[r++]=n>>6&63|128,a[r++]=63&n|128,t+=2)
return new Uint8Array(a)}function n(e){var t,n,o,r
if("object"!=typeof e||null===e||"number"!=typeof e.byteLength)throw new TypeError("Expected input to be an ArrayBuffer")
for(t=new Uint8Array(e),n="",r=0;r<t.length;r++)n+=1===(o=t[r].toString(16)).length?"0"+o:o
return n}async function o(t,n,o){let a=e(m)
return await r.subtle.decrypt({name:"AES-CBC",iv:n},t,a.buffer).then((async t=>{var n,a,c,s
const d=(new TextDecoder).decode(t)
if(!d.startsWith(l))throw"Decode successfully but not start with KnownPrefix."
const u=document.createElement("button")
if(u.textContent="Encrypt again",u.type="button",u.classList.add("hbe-button"),u.addEventListener("click",(()=>{window.localStorage.removeItem(i),window.location.reload()})),document.getElementById("hexo-blog-encrypt").style.display="inline",document.getElementById("hexo-blog-encrypt").innerHTML="",document.getElementById("hexo-blog-encrypt").appendChild(await async function(e){let t=document.createElement("div")
return t.innerHTML=e,t.querySelectorAll("script").forEach((async e=>{e.replaceWith(await async function(e){let t=document.createElement("script")
return["type","text","src","crossorigin","defer","referrerpolicy"].forEach((n=>{e[n]&&(t[n]=e[n])})),t}(e))})),t}(d)),document.getElementById("hexo-blog-encrypt").appendChild(u),document.querySelectorAll("img").forEach((e=>{e.getAttribute("data-src")&&!e.src&&(e.src=e.getAttribute("data-src"))})),window.NexT&&NexT.boot&&"function"==typeof NexT.boot.refresh&&NexT.boot.refresh(),(n=document.getElementById("toc-div"))&&(n.style.display="inline"),(a=document.getElementsByClassName("toc-div-class"))&&a.length>0)for(c=0;c<a.length;c++)a[c].style.display="inline"
return s=new Event("hexo-blog-decrypt"),window.dispatchEvent(s),await async function(t,n){const o=(new TextEncoder).encode(n)
let a=e(f)
const i=await r.subtle.verify({name:"HMAC",hash:"SHA-256"},t,a,o)
return console.log(`Verification result: ${i}`),i||(alert(y),console.log(`${y}, got `,a," but proved wrong.")),i}(o,d)})).catch((e=>(alert(u),console.log(e),!1)))}const r=window.crypto||window.msCrypto,a=window.localStorage,i="hexo-blog-encrypt:#"+window.location.pathname,c=t("hexo-blog-encrypt\u7684\u4f5c\u8005\u4eec\u90fd\u662f\u5927\u5e05\u6bd4!"),s=t("hexo-blog-encrypt\u662f\u5730\u8868\u6700\u5f3aHexo\u52a0\u5bc6\u63d2\u4ef6!"),l="<hbe-prefix></hbe-prefix>",d=document.getElementById("hexo-blog-encrypt"),u=d.dataset.wpm,y=d.dataset.whm,h=d.getElementsByTagName("script").hbeData,m=h.innerText,f=h.dataset.hmacdigest
!function(){const t=JSON.parse(a.getItem(i))
if(t){console.log(`Password got from localStorage(${i}): `,t)
const n=e(t.iv).buffer,c=t.dk,s=t.hmk
r.subtle.importKey("jwk",c,{name:"AES-CBC",length:256},!0,["decrypt"]).then((e=>{r.subtle.importKey("jwk",s,{name:"HMAC",hash:"SHA-256",length:256},!0,["verify"]).then((t=>{o(e,n,t).then((e=>{e||a.removeItem(i)}))}))}))}d.addEventListener("keydown",(async e=>{if(e.isComposing||13===e.keyCode){const e=document.getElementById("hbePass").value,t=await function(e){let t=new TextEncoder
return r.subtle.importKey("raw",t.encode(e),{name:"PBKDF2"},!1,["deriveKey","deriveBits"])}(e),l=await function(e){return r.subtle.deriveKey({name:"PBKDF2",hash:"SHA-256",salt:c.buffer,iterations:1024},e,{name:"HMAC",hash:"SHA-256",length:256},!0,["verify"])}(t),d=await function(e){return r.subtle.deriveKey({name:"PBKDF2",hash:"SHA-256",salt:c.buffer,iterations:1024},e,{name:"AES-CBC",length:256},!0,["decrypt"])}(t),u=await function(e){return r.subtle.deriveBits({name:"PBKDF2",hash:"SHA-256",salt:s.buffer,iterations:512},e,128)}(t)
o(d,u,l).then((e=>{console.log(`Decrypt result: ${e}`),e&&r.subtle.exportKey("jwk",d).then((e=>{r.subtle.exportKey("jwk",l).then((t=>{const o={dk:e,iv:n(u),hmk:t}
a.setItem(i,JSON.stringify(o))}))}))}))}}))}()})()

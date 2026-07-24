"use strict";(()=>{function e(){return location.pathname+location.search}async function t(){let t=document.getElementById("hexo-blog-encrypt")
if(!t)return
let r=function(e){let t=e.dataset,r=e.querySelector("script#hbeData")
return{format:t.hbeFormat,wpm:t.wpm||"Wrong password.",whm:t.whm||t.wpm||"Wrong password.",saltHex:t.salt,nonceHex:t.nonce,iterations:parseInt(t.kdfIterations,10)||25e4,autoSave:"true"===t.autoSave,ciphertextHex:r?r.textContent.trim():""}}(t)
if(r.format!==y)return void i.showError(t,"hexo-blog-encrypt: this page was built with an incompatible plugin version. Rebuild the site after upgrading the plugin.")
let n=!1,a=async(e,r)=>{n||(n=!0,await async function(e,t,r){s.swapInDecryptedDOM(e,t),function(e){try{window.dispatchEvent(new CustomEvent("hexo-blog-decrypt",{detail:{mode:e}}))}catch(e){try{window.dispatchEvent(new Event("hexo-blog-decrypt"))}catch(e){}}}(r)}(t,e,r))},o=t.querySelector("#hbeForm")
if(i.attachSubmit(o,(()=>async function(t,r,n,a){i.clearError(t),i.setBusy(n,!0)
let o,c=i.readPassword(n)
if(!c)return i.setBusy(n,!1),void i.showError(t,r.wpm)
try{o=await l.tryDecryptWithPassword({password:c,saltHex:r.saltHex,nonceHex:r.nonceHex,ciphertextHex:r.ciphertextHex,iterations:r.iterations})}finally{i.setBusy(n,!1)}o.ok?(r.autoSave&&await u.save({pageKey:e(),key:o.key,saltHex:r.saltHex,nonceHex:r.nonceHex,autoSave:!0}),await a(o.plaintext,"manual")):i.showError(t,r.wpm)}(t,r,o,a))),!await async function(t,r,n){if(!r.autoSave)return!1
let a=await u.load({pageKey:e(),expectedSaltHex:r.saltHex})
if(!a)return!1
let o=await l.tryDecryptWithKey({key:a,nonceHex:r.nonceHex,ciphertextHex:r.ciphertextHex})
return o.ok?(await n(o.plaintext,"cached"),!0):(u.clear(e()),!1)}(0,r,a)&&!n){let e=t.querySelector("#hbePass")
e&&e.focus()}}var r=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),n=r(((e,t)=>{t.exports={setBusy:function(e,t){if(!e)return
e.setAttribute("aria-busy",t?"true":"false")
let r=e.querySelector(".hbe-button")
r&&(r.disabled=!!t)
let n=e.querySelector("#hbePass")
n&&(n.disabled=!!t)},showError:function(e,t){let r=e.querySelector('[role="alert"]')
if(!r){r=document.createElement("div"),r.setAttribute("role","alert"),r.className="hbe hbe-error"
let t=e.querySelector("#hbeForm")
t?t.parentNode.insertBefore(r,t.nextSibling):e.appendChild(r)}r.textContent=t},clearError:function(e){let t=e.querySelector('[role="alert"]')
t&&(t.textContent="")},readPassword:function(e){let t=e.querySelector("#hbePass")
return t?t.value:""},attachSubmit:function(e,t){e&&e.addEventListener("submit",(e=>{e.preventDefault(),t()}))}}})),a=r(((e,t)=>{function r(e){let t=e.length
if(t%2!=0)throw new Error("hexo-blog-encrypt: hex string has odd length")
let r=new Uint8Array(t/2)
for(let t=0;t<r.length;t++)r[t]=parseInt(e.substr(2*t,2),16)
return r}async function n(e,t,r){let n=await crypto.subtle.importKey("raw",c.encode(e),{name:"PBKDF2"},!1,["deriveKey"])
return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:r,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!0,["decrypt"])}async function a(e,t,r){let n=await crypto.subtle.decrypt({name:"AES-GCM",iv:t,tagLength:128},e,r)
return o.decode(n)}var o=new TextDecoder("utf-8",{fatal:!0}),c=new TextEncoder
t.exports={tryDecryptWithPassword:async function({password:e,saltHex:t,nonceHex:o,ciphertextHex:c,iterations:i}){try{let l=r(t),s=r(o),u=r(c)
if(u.length<16)return{ok:!1}
let y=await n(e,l,i)
return{ok:!0,plaintext:await a(y,s,u),key:y}}catch(e){return{ok:!1}}},tryDecryptWithKey:async function({key:e,nonceHex:t,ciphertextHex:n}){try{let o=r(t),c=r(n)
return c.length<16?{ok:!1}:{ok:!0,plaintext:await a(e,o,c)}}catch(e){return{ok:!1}}},deriveKey:n,decryptWithKey:a,hexToBytes:r}})),o=r(((e,t)=>{function r(e){let t=document.createElement("script")
for(let r of e.attributes)t.setAttribute(r.name,r.value)
return t.text=e.text,t}function n(e){let t=document.createElement("div")
t.innerHTML=e
for(let e of t.querySelectorAll("script"))e.parentNode.replaceChild(r(e),e)
return t}t.exports={getExecutableScript:r,convertHTMLToElement:n,swapInDecryptedDOM:function(e,t){let r=n(t)
return r.id="hexo-blog-encrypt",r.classList.add("hbe","hbe-decrypted-content"),e.parentNode.replaceChild(r,e),r}}})),c=r(((e,t)=>{function r(e){return a+e}function n(e){let t=""
for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r])
return btoa(t)}var a="hbe.v4."
t.exports={save:async function({pageKey:e,key:t,saltHex:a,nonceHex:o,autoSave:c}){if(c)try{let c=await crypto.subtle.exportKey("raw",t),i={version:4,dk:n(new Uint8Array(c)),salt:a,nonce:o}
localStorage.setItem(r(e),JSON.stringify(i))}catch(e){}},load:async function({pageKey:e,expectedSaltHex:t}){let n
try{let t=localStorage.getItem(r(e))
if(!t)return null
n=JSON.parse(t)}catch(e){return null}if(!n||4!==n.version||"string"!=typeof n.dk||"string"!=typeof n.salt||"string"!=typeof n.nonce||"hmk"in n||"hmacDigest"in n){try{localStorage.removeItem(r(e))}catch(e){}return null}if(n.salt!==t){try{localStorage.removeItem(r(e))}catch(e){}return null}try{let e=function(e){let t=atob(e),r=new Uint8Array(t.length)
for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e)
return r}(n.dk)
return await crypto.subtle.importKey("raw",e,{name:"AES-GCM"},!0,["decrypt"])}catch(t){try{localStorage.removeItem(r(e))}catch(e){}return null}},clear:function(e){try{localStorage.removeItem(r(e))}catch(e){}},STORAGE_KEY_PREFIX:a,SCHEMA_VERSION:4}})),i=n(),l=a(),s=o(),u=c(),y="4"
"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()})()

!function(){"use strict"
function t(){return document.getElementById(d)}function e(e){var d,r=t(),c=document.getElementById("to_comment")
return!!r&&(d=e?function(t){var e=document.getElementById(o)
return e||((e=document.createElement("div")).id=o,e.setAttribute("aria-hidden","true"),e.addEventListener("click",n),t.parentNode.insertBefore(e,t),e)}(r):document.getElementById(o),r.classList.toggle(i,e),d&&(d.classList.toggle(i,e),d.setAttribute("aria-hidden",String(!e))),c&&c.setAttribute("aria-expanded",String(e)),!0)}function n(){e(!1)}var i="fixedcomment",d="post-comment",o="quit-board"
window.FixedCommentBtn=function(){var n=t()
n&&e(!n.classList.contains(i))},document.addEventListener("keydown",(function(t){"Escape"===t.key&&n()})),document.addEventListener("pjax:send",n),n()}()

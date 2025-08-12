if(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));else{const e=document.createElement("canvas")
e.id="snow",e.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;z-index:100;pointer-events:none",document.body.appendChild(e),window&&(()=>{const e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}
window.requestAnimationFrame=e
const t=document.getElementById("snow"),n=t.getContext("2d")
let i=-100,o=-100,d=[]
t.width=window.innerWidth,t.height=window.innerHeight
const a=()=>{n.clearRect(0,0,t.width,t.height)
for(let e=0;e<50;e++){let a=d[e]
const h=i,r=o,l=a.x,w=a.y,m=Math.sqrt((h-l)*(h-l)+(r-w)*(r-w))
if(m<150){const e=(h-l)/m,t=(r-w)/m,n=150/(m*m)/2
a.velX-=n*e,a.velY-=n*t}else a.velX*=.98,a.velY<a.speed&&a.speed-a.velY>.01&&(a.velY+=.01*(a.speed-a.velY)),a.velX+=Math.cos(a.step+=.05)*a.stepSize
n.fillStyle="rgba(255, 255, 255, "+a.opacity+")",a.y+=a.velY,a.x+=a.velX,(a.y>=t.height||a.y<=0)&&s(a),(a.x>=t.width||a.x<=0)&&s(a),n.beginPath(),n.arc(a.x,a.y,a.size,0,2*Math.PI),n.fill()}e(a)},s=e=>{e.x=Math.floor(Math.random()*t.width),e.y=0,e.size=3*Math.random()+2,e.speed=1*Math.random()+.5,e.velY=e.speed,e.velX=0,e.opacity=.5*Math.random()+.3}
document.addEventListener("mousemove",(e=>{i=e.clientX,o=e.clientY})),window.addEventListener("resize",(()=>{t.width=window.innerWidth,t.height=window.innerHeight})),(()=>{for(let e=0;e<50;e++){const e=Math.floor(Math.random()*t.width),n=Math.floor(Math.random()*t.height),i=3*Math.random()+2,o=1*Math.random()+.5,a=.5*Math.random()+.2
d.push({speed:o,velX:0,velY:o,x:e,y:n,size:i,stepSize:Math.random()/30*.5,step:0,angle:180,opacity:a})}a()})()})()}
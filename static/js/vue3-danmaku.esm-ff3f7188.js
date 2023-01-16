import{f as F}from"./runtime-dom.esm-bundler-7421a035.js";import{h as K,r as m,J as z,a as u,o as O,G as Q,I as Y,a2 as Z,j as ee,k as te,l as ne,n as ae,m as le}from"./runtime-core.esm-bundler-1f6332ae.js";function se(l,r,v="modelValue",i){return u({get:()=>l[v],set:a=>{r(`update:${v}`,i?i(a):a)}})}var W=K({components:{},props:{danmus:{type:Array,required:!0,default:()=>[]},channels:{type:Number,default:0},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},useSlot:{type:Boolean,default:!1},debounce:{type:Number,default:100},speeds:{type:Number,default:200},randomChannel:{type:Boolean,default:!1},fontSize:{type:Number,default:18},top:{type:Number,default:4},right:{type:Number,default:0},isSuspend:{type:Boolean,default:!1},extraStyle:{type:String,default:""}},emits:["list-end","play-end","update:danmus"],setup(l,{emit:r,slots:v}){let i=m(document.createElement("div")),a=m(document.createElement("div"));const h=m(0),w=m(0);let x=0;const L=m(0),S=m(0),f=m(0),k=m(!1),y=m(!1),g=m({}),o=se(l,r,"danmus"),d=z({channels:u(()=>l.channels||L.value),autoplay:u(()=>l.autoplay),loop:u(()=>l.loop),useSlot:u(()=>l.useSlot),debounce:u(()=>l.debounce),randomChannel:u(()=>l.randomChannel)}),c=z({height:u(()=>S.value),fontSize:u(()=>l.fontSize),speeds:u(()=>l.speeds),top:u(()=>l.top),right:u(()=>l.right)});O(()=>{$()}),Q(()=>{N()});function $(){B(),l.isSuspend&&A(),d.autoplay&&E()}function B(){h.value=i.value.offsetWidth,w.value=i.value.offsetHeight}function E(){y.value=!1,x||(x=setInterval(()=>D(),d.debounce))}function D(){if(!y.value&&o.value.length)if(f.value>o.value.length-1){const n=a.value.children.length;d.loop&&n<f.value&&(r("list-end"),f.value=0,b())}else b()}function b(n){const s=d.loop?f.value%o.value.length:f.value,t=n||o.value[s];let e=document.createElement("div");d.useSlot?e=_(t,s).$el:(e.innerHTML=t,e.setAttribute("style",l.extraStyle),e.style.fontSize=`${c.fontSize}px`,e.style.lineHeight=`${c.fontSize}px`),e.classList.add("dm"),a.value.appendChild(e),e.style.opacity="0",Y(()=>{c.height||(S.value=e.offsetHeight),d.channels||(L.value=Math.floor(w.value/(c.height+c.top)));let p=H(e);if(p>=0){const C=e.offsetWidth,U=c.height;e.classList.add("move"),e.dataset.index=`${s}`,e.style.opacity="1",e.style.top=p*(U+c.top)+"px",e.style.width=C+c.right+"px",e.style.setProperty("--dm-scroll-width",`-${h.value+C}px`),e.style.left=`${h.value}px`,e.style.animationDuration=`${h.value/c.speeds}s`,e.addEventListener("animationend",()=>{Number(e.dataset.index)===o.value.length-1&&!d.loop&&r("play-end",e.dataset.index),a.value&&a.value.removeChild(e)}),f.value++}else a.value.removeChild(e)})}function _(n,s){return F({render(){return Z("div",{},[v.dm&&v.dm({danmu:n,index:s})])}}).mount(document.createElement("div"))}function H(n){let s=[...Array(d.channels).keys()];d.randomChannel&&(s=s.sort(()=>.5-Math.random()));for(let t of s){const e=g.value[t];if(e&&e.length)for(let p=0;p<e.length;p++){const C=I(e[p])-10;if(C<=(n.offsetWidth-e[p].offsetWidth)*.88||C<=0)break;if(p===e.length-1)return g.value[t].push(n),n.addEventListener("animationend",()=>g.value[t].splice(0,1)),t%d.channels}else return g.value[t]=[n],n.addEventListener("animationend",()=>g.value[t].splice(0,1)),t%d.channels}return-1}function I(n){const s=n.offsetWidth||parseInt(n.style.width),t=n.getBoundingClientRect().right||a.value.getBoundingClientRect().right+s;return a.value.getBoundingClientRect().right-t}function T(){clearInterval(x),x=0}function A(){let n=[];a.value.addEventListener("mousemove",s=>{let t=s.target;t.className.includes("dm")||(t=t.closest(".dm")||t),t.className.includes("dm")&&(t.classList.add("pause"),n.push(t))}),a.value.addEventListener("mouseout",s=>{let t=s.target;t.className.includes("dm")||(t=t.closest(".dm")||t),t.className.includes("dm")&&(t.classList.remove("pause"),n.forEach(e=>{e.classList.remove("pause")}),n=[])})}function N(){T(),f.value=0}function M(){S.value=0,$()}function R(){g.value={},a.value.innerHTML="",y.value=!0,k.value=!1,N()}function X(){y.value=!0}function j(n){if(f.value===o.value.length)return o.value.push(n),o.value.length-1;{const s=f.value%o.value.length;return o.value.splice(s,0,n),s+1}}function P(n){return o.value.push(n),o.value.length-1}function V(){return!y.value}function q(){k.value=!1}function G(){k.value=!0}function J(){B();const n=a.value.getElementsByClassName("dm");for(let s=0;s<n.length;s++){const t=n[s];t.style.setProperty("--dm-scroll-width",`-${h.value+t.offsetWidth}px`),t.style.left=`${h.value}px`,t.style.animationDuration=`${h.value/c.speeds}s`}}return{container:i,dmContainer:a,hidden:k,paused:y,danmuList:o,getPlayState:V,resize:J,play:E,pause:X,stop:R,show:q,hide:G,reset:M,add:j,push:P,insert:b}}});const ie={ref:"container",class:"vue-danmaku"};function oe(l,r,v,i,a,h){return ee(),te("div",ie,[ne("div",{ref:"dmContainer",class:ae(["danmus",{show:!l.hidden},{paused:l.paused}])},null,2),le(l.$slots,"default")],512)}function ue(l,r){r===void 0&&(r={});var v=r.insertAt;if(!(!l||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",v==="top"&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=l:a.appendChild(document.createTextNode(l))}}var de=`.vue-danmaku {
  position: relative;
  overflow: hidden;
}
.vue-danmaku .danmus {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.vue-danmaku .danmus.show {
  opacity: 1;
}
.vue-danmaku .danmus.paused .dm.move {
  animation-play-state: paused;
}
.vue-danmaku .danmus .dm {
  position: absolute;
  font-size: 20px;
  color: #ddd;
  white-space: pre;
  transform: translateX(0);
  transform-style: preserve-3d;
}
.vue-danmaku .danmus .dm.move {
  will-change: transform;
  animation-name: moveLeft;
  animation-timing-function: linear;
  animation-play-state: running;
}
.vue-danmaku .danmus .dm.pause {
  animation-play-state: paused;
  z-index: 10;
}
@keyframes moveLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--dm-scroll-width));
  }
}
@-webkit-keyframes moveLeft {
  from {
    -webkit-transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(var(--dm-scroll-width));
  }
}`;ue(de);W.render=oe;W.__file="src/lib/Danmaku.vue";export{W as s};

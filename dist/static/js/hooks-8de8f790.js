import{F as s,I as f,a as i}from"./index-02c38b19.js";function I(e,t){const o=/^IF-/;if(o.test(e)){const n=e.split(o)[1],r=n.slice(0,n.indexOf(" ")==-1?n.length:n.indexOf(" ")),u=n.slice(n.indexOf(" ")+1,n.length);return Vue.defineComponent({name:"FontIcon",render(){return Vue.h(s,{icon:r,iconType:u,...t})}})}else return typeof e=="function"||typeof(e==null?void 0:e.render)=="function"?e:typeof e=="object"?Vue.defineComponent({name:"OfflineIcon",render(){return Vue.h(f,{icon:e,...t})}}):Vue.defineComponent({name:"Icon",render(){const n=e&&e.includes(":")?i:f;return Vue.h(n,{icon:e,...t})}})}export{I as u};

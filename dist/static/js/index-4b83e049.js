let o={};const{VITE_PUBLIC_PATH:i}={VITE_PORT:"8848",VITE_PUBLIC_PATH:"/vue-pure-admin/",VITE_ROUTER_HISTORY:"hash",VITE_CDN:"true",VITE_COMPRESSION:"none",BASE_URL:"/vue-pure-admin/",MODE:"production",DEV:!1,PROD:!0},s=t=>{o=Object.assign(o,t)},g=t=>{if(typeof t=="string"){const n=t.split(".");if(n&&n.length){let e=o;return n.forEach(r=>{e&&typeof e[r]<"u"?e=e[r]:e=null}),e}}return o},f=async t=>(t.config.globalProperties.$config=g(),axios({method:"get",url:`${i}serverConfig.json`}).then(({data:n})=>{let e=t.config.globalProperties.$config;return t&&e&&typeof n=="object"&&(e=Object.assign(e,n),t.config.globalProperties.$config=e,s(e)),e}).catch(()=>{throw"请在public文件夹下添加serverConfig.json配置文件"}));export{g as a,f as g};

import{e as X}from"./index-27e55737.js";import{a as w}from"./index-162fdfcd.js";import{d as Y,u as Z}from"./vue-router-82e8a5de.js";import{e as z}from"./mitt-7f99bbc0.js";import{r as H}from"./index-e24b4c59.js";import{a as ee,c as E,o as N,r as te,q as ne}from"./index-03a9ee46.js";import{u as oe}from"./app-d27780c0.js";import{u as b}from"./epTheme-93edc034.js";import{a as d,w as ae,j as L,k as A,l as T,r as I}from"./runtime-core.esm-bundler-1f6332ae.js";import{u as O}from"./vue-i18n.runtime.esm-bundler-789c3ea9.js";import{a as ue,r as le}from"./multiTags-9a5f9fae.js";function re(){const{$storage:t,$config:e}=H(),o=()=>{ue().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=le),t.locale||(t.locale={locale:(e==null?void 0:e.Locale)??"zh"},O().locale.value=(e==null?void 0:e.Locale)??"zh"),t.layout||(t.layout={layout:(e==null?void 0:e.Layout)??"vertical",theme:(e==null?void 0:e.Theme)??"default",darkMode:(e==null?void 0:e.DarkMode)??!1,sidebarStatus:(e==null?void 0:e.SidebarStatus)??!0,epThemeColor:(e==null?void 0:e.EpThemeColor)??"#409EFF"}),t.configure||(t.configure={grey:(e==null?void 0:e.Grey)??!1,weak:(e==null?void 0:e.Weak)??!1,hideTabs:(e==null?void 0:e.HideTabs)??!1,showLogo:(e==null?void 0:e.ShowLogo)??!0,showModel:(e==null?void 0:e.ShowModel)??"smart",multiTagsCache:(e==null?void 0:e.MultiTagsCache)??!1})},n=d(()=>t==null?void 0:t.layout.layout),u=d(()=>t.layout);return{layout:n,layoutTheme:u,initStorage:o}}const P="当前路由配置不正确，请检查配置";function se(){var _;const t=oe(),e=Y().options.routes,{wholeMenus:o}=X(ee()),n=((_=w())==null?void 0:_.TooltipEffect)??"light",u=d(()=>{var a;return(a=N())==null?void 0:a.username}),s=d(()=>(a,f)=>({background:a===f?b().epThemeColor:"",color:a===f?"#f4f4f5":"#000"})),c=d(()=>(a,f)=>a===f?"":"dark:hover:!text-primary"),g=d(()=>u.value?{marginRight:"10px"}:""),i=d(()=>!t.getSidebarStatus),y=d(()=>t.getDevice),{$storage:m,$config:r}=H(),l=d(()=>{var a;return(a=m==null?void 0:m.layout)==null?void 0:a.layout}),h=d(()=>r.Title);function C(a){const f=w().Title;f?document.title=`${E(a.title)} | ${f}`:document.title=E(a.title)}function M(){N().logOut()}function G(){te.push("/welcome")}function Q(){z.emit("openPanel")}function W(){t.toggleSideBar()}function q(a){a==null||a.handleResize()}function U(a){var $;if(!a.children)return console.error(P);const f=/^http(s?):\/\//,p=($=a.children[0])==null?void 0:$.path;return f.test(p)?a.path+"/"+p:p}function J(a,f){if(o.value.length===0||K(a))return;let p="";const $=a.lastIndexOf("/");$>0&&(p=a.slice(0,$));function B(k,S){return S?S.map(v=>{v.path===k?v.redirect?B(v.redirect,v.children):z.emit("changLayoutRoute",{indexPath:k,parentPath:p}):v.children&&B(k,v.children)}):console.error(P)}B(a,f)}function K(a){return ne.includes(a)}return{title:h,device:y,layout:l,logout:M,routers:e,$storage:m,backHome:G,onPanel:Q,changeTitle:C,toggleSideBar:W,menuSelect:J,handleResize:q,resolvePath:U,isCollapse:i,pureApp:t,username:u,avatarsStyle:g,tooltipEffect:n,getDropdownItemStyle:s,getDropdownItemClass:c}}function De(t){const{$storage:e,changeTitle:o,handleResize:n}=se(),{locale:u,t:s}=O(),c=Z();function g(){e.locale={locale:"zh"},u.value="zh",t&&n(t.value)}function i(){e.locale={locale:"en"},u.value="en",t&&n(t.value)}return ae(()=>u.value,()=>{o(c.meta)}),{t:s,route:c,locale:u,translationCh:g,translationEn:i}}const fe={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},de=T("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),ce=[de];function ie(t,e){return L(),A("svg",fe,ce)}const je={render:ie},x={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/home/runner/work/vue-pure-admin/vue-pure-admin/node_modules/.pnpm/@pureadmin+theme@3.0.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},me="/vue-pure-admin/",he="assets";function V(t){let e=t.replace("#","").match(/../g);for(let o=0;o<3;o++)e[o]=parseInt(e[o],16);return e}function F(t,e,o){let n=[t.toString(16),e.toString(16),o.toString(16)];for(let u=0;u<3;u++)n[u].length==1&&(n[u]=`0${n[u]}`);return`#${n.join("")}`}function ge(t,e){let o=V(t);for(let n=0;n<3;n++)o[n]=Math.floor(o[n]*(1-e));return F(o[0],o[1],o[2])}function pe(t,e){let o=V(t);for(let n=0;n<3;n++)o[n]=Math.floor((255-o[n])*e+o[n]);return F(o[0],o[1],o[2])}function R(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function D({scopeName:t,multipleScopeVars:e}){const o=Array.isArray(e)&&e.length?e:x.multipleScopeVars;let n=document.documentElement.className;new RegExp(R(t)).test(n)||(o.forEach(u=>{n=n.replace(new RegExp(R(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function j({id:t,href:e}){const o=document.createElement("link");return o.rel="stylesheet",o.href=e,o.id=t,o}function ve(t){const e={scopeName:"theme-default",customLinkHref:s=>s,...t},o=e.themeLinkTagId||x.themeLinkTagId;let n=document.getElementById(o);const u=e.customLinkHref(`${me.replace(/\/$/,"")}${`/${he}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(n){n.id=`${o}_old`;const s=j({id:o,href:u});n.nextSibling?n.parentNode.insertBefore(s,n.nextSibling):n.parentNode.appendChild(s),s.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),D(e)};return}n=j({id:o,href:u}),D(e),document[(e.themeLinkTagInjectTo||x.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function Oe(){var m;const{layoutTheme:t,layout:e}=re(),o=I([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=H(),u=I((m=n==null?void 0:n.layout)==null?void 0:m.darkMode),s=document.documentElement;function c(r="default"){var l,h;if(t.value.theme=r,ve({scopeName:`layout-theme-${r}`}),n.layout={layout:e.value,theme:r,darkMode:u.value,sidebarStatus:(l=n.layout)==null?void 0:l.sidebarStatus,epThemeColor:(h=n.layout)==null?void 0:h.epThemeColor},r==="default"||r==="light")i(w().EpThemeColor);else{const C=o.value.find(M=>M.themeColor===r);i(C.color)}}function g(r,l,h){document.documentElement.style.setProperty(`--el-color-primary-${r}-${l}`,u.value?ge(h,l/10):pe(h,l/10))}const i=r=>{b().setEpThemeColor(r),document.documentElement.style.setProperty("--el-color-primary",r);for(let l=1;l<=2;l++)g("dark",l,r);for(let l=1;l<=9;l++)g("light",l,r)};function y(){b().epTheme==="light"&&u.value?c("default"):c(b().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:s,dataTheme:u,layoutTheme:t,themeColors:o,dataThemeChange:y,setEpThemeColor:i,setLayoutThemeColor:c}}const $e={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Te=T("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),be=T("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),ye=[Te,be];function Ce(t,e){return L(),A("svg",$e,ye)}const Ve={render:Ce},Me={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Be=T("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),ke=T("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),we=[Be,ke];function xe(t,e){return L(),A("svg",Me,we)}const Fe={render:xe};export{De as a,Oe as b,Fe as c,Ve as d,re as e,je as g,ve as t,se as u};

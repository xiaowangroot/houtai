import{d as W}from"./dayjs.min-e0adaab4.js";import{m as w}from"./message-ceee817c.js";import{b as z}from"./system-2540e911.js";import{A as M}from"./index-9d8f4bd6.js";import{J as s,r,a as T,o as S,D as m,a3 as u}from"./runtime-core.esm-bundler-1f6332ae.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-e24b4c59.js";import"./vue.runtime.esm-bundler-7c6ab200.js";import"./runtime-dom.esm-bundler-7421a035.js";import"./index-3b260c80.js";import"./style-8cd62612.js";import"./index-70a76fbd.js";import"./index-17991776.js";import"./index-03a9ee46.js";import"./vue-i18n.runtime.esm-bundler-789c3ea9.js";import"./hot-18a7c2fd.js";import"./index-27e55737.js";import"./multiTags-9a5f9fae.js";import"./index-162fdfcd.js";import"./axios-a900fd7e.js";import"./vue-router-82e8a5de.js";import"./scroll-fff7de09.js";function Q(){const p=s({username:"",mobile:"",status:""}),n=r([]),i=r(!0),a=r({}),l=s({total:0,pageSize:10,currentPage:1,background:!0}),d=[{type:"selection",width:55,align:"left",hide:({checkList:t})=>!t.includes("勾选列")},{label:"序号",type:"index",width:70,hide:({checkList:t})=>!t.includes("序号列")},{label:"用户编号",prop:"id",minWidth:130},{label:"用户名称",prop:"username",minWidth:130},{label:"用户昵称",prop:"nickname",minWidth:130},{label:"性别",prop:"sex",minWidth:90,cellRenderer:({row:t,props:e})=>m(u("el-tag"),{size:e.size,type:t.sex===1?"danger":"",effect:"plain"},{default:()=>[t.sex===1?"女":"男"]})},{label:"部门",prop:"dept",minWidth:90,formatter:({dept:t})=>t.name},{label:"手机号码",prop:"mobile",minWidth:90},{label:"状态",prop:"status",minWidth:90,cellRenderer:t=>{var e;return m(u("el-switch"),{size:t.props.size==="small"?"small":"default",loading:(e=a.value[t.index])==null?void 0:e.loading,modelValue:t.row.status,"onUpdate:modelValue":C=>t.row.status=C,"active-value":1,"inactive-value":0,"active-text":"已开启","inactive-text":"已关闭","inline-prompt":!0,onChange:()=>g(t)},null)}},{label:"创建时间",minWidth:90,prop:"createTime",formatter:({createTime:t})=>W(t).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:180,slot:"operation"}],c=T(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]);function g({row:t,index:e}){M.confirm(`确认要<strong>${t.status===0?"停用":"启用"}</strong><strong style='color:var(--el-color-primary)'>${t.username}</strong>用户吗?`,"系统提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{a.value[e]=Object.assign({},a.value[e],{loading:!0}),setTimeout(()=>{a.value[e]=Object.assign({},a.value[e],{loading:!1}),w("已成功修改用户状态",{type:"success"})},300)}).catch(()=>{t.status===0?t.status=1:t.status=0})}function h(t){}function f(t){}function v(t){}function b(t){}function x(t){}async function o(){i.value=!0;const{data:t}=await z();n.value=t.list,l.total=t.total,setTimeout(()=>{i.value=!1},500)}const y=t=>{t&&(t.resetFields(),o())};return S(()=>{o()}),{form:p,loading:i,columns:d,dataList:n,pagination:l,buttonClass:c,onSearch:o,resetForm:y,handleUpdate:h,handleDelete:f,handleSizeChange:v,handleCurrentChange:b,handleSelectionChange:x}}export{Q as useUser};

import{h as e,D as s,j as t,r as a,R as r,C as n,V as o,ad as l,ae as i,P as d,x as m}from"./vendor.ef86dff2.js";import{c,a as u}from"./index.7181d7ca.js";import"./index.fdd7bd55.js";import"./index.99a55e28.js";import"./index.esm.66e84b7e.js";import"./useTitle.391ac300.js";const p=()=>{const{t:p}=e(),f=s(),g=t(),[j,x]=a.exports.useState(""),E=()=>{c(j),u.get("login").then((e=>{const s=e.data;200===s.code?(g({title:p(s.message),status:"success",duration:3e3,isClosable:!0}),f.push("settings")):g({title:p(s.message),status:"error",duration:3e3,isClosable:!0})}))};return r.createElement(n,{p:"4",h:"full"},r.createElement(o,{w:{base:"full",md:"50%"}},r.createElement(l,{isRequired:!0},r.createElement(i,null,p("password")),r.createElement(d,{type:"password",value:j,onChange:e=>x(e.target.value),onKeyUp:e=>{"Enter"===e.key&&E()}})),r.createElement(m,{onClick:E},p("login"))))};export{p as default};
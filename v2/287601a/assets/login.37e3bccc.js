import{h as e,D as s,j as t,r as a,R as r,C as o,V as l,ad as n,ae as i,P as c,x as m}from"./vendor.ef86dff2.js";import{c as d,a as u}from"./index.c511474b.js";import"./index.53447b33.js";import"./index.3ab60f13.js";import"./index.esm.bc9cf174.js";import"./useTitle.391ac300.js";const p=()=>{const{t:p}=e(),f=s(),g=t(),[b,j]=a.exports.useState("");return r.createElement(o,{p:"4",h:"full"},r.createElement(l,{w:{base:"full",md:"50%"}},r.createElement(n,{isRequired:!0},r.createElement(i,null,p("password")),r.createElement(c,{type:"password",value:b,onChange:e=>j(e.target.value)})),r.createElement(m,{onClick:()=>{d(b),u.get("login").then((e=>{const s=e.data;200===s.code?(g({title:p(s.message),status:"success",duration:3e3,isClosable:!0}),f.push("settings")):g({title:p(s.message),status:"error",duration:3e3,isClosable:!0})}))}},p("login"))))};export{p as default};
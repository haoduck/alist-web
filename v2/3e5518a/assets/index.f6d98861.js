var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,s=(e,s)=>{for(var o in s||(s={}))r.call(s,o)&&n(e,o,s[o]);if(t)for(var o of t(s))a.call(s,o)&&n(e,o,s[o]);return e};import{_ as o}from"./index.b40903f7.js";import{G as i,a as l,O as c,F as h,M as m,B as f,b as u}from"./index.c208b2a1.js";import{D as d}from"./index.esm.53a17f20.js";import{E as p,h as b,U as g,D as _,u as y,j as E,r as z,R as v,s as x,x as S,W as w,G as A,X as L,F as C,y as j,n as O,l as I,T as M,C as P,S as k,b as W,L as $,t as R}from"./vendor.cc756816.js";import{u as T}from"./useTitle.ba04131e.js";function B(e){return i({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"}},{tag:"path",attr:{d:"m11 16 5-4-5-4v3.001H3v2h8z"}}]})(e)}var D={};Object.defineProperty(D,"__esModule",{value:!0});var F=function(){function e(){this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}return e.hashStr=function(e,t){return void 0===t&&(t=!1),this.onePassHasher.start().appendStr(e).end(t)},e.hashAsciiStr=function(e,t){return void 0===t&&(t=!1),this.onePassHasher.start().appendAsciiStr(e).end(t)},e._hex=function(t){var r,a,n,s,o=e.hexChars,i=e.hexOut;for(s=0;s<4;s+=1)for(a=8*s,r=t[s],n=0;n<8;n+=2)i[a+1+n]=o.charAt(15&r),r>>>=4,i[a+0+n]=o.charAt(15&r),r>>>=4;return i.join("")},e._md5cycle=function(e,t){var r=e[0],a=e[1],n=e[2],s=e[3];a=((a+=((n=((n+=((s=((s+=((r=((r+=(a&n|~a&s)+t[0]-680876936|0)<<7|r>>>25)+a|0)&a|~r&n)+t[1]-389564586|0)<<12|s>>>20)+r|0)&r|~s&a)+t[2]+606105819|0)<<17|n>>>15)+s|0)&s|~n&r)+t[3]-1044525330|0)<<22|a>>>10)+n|0,a=((a+=((n=((n+=((s=((s+=((r=((r+=(a&n|~a&s)+t[4]-176418897|0)<<7|r>>>25)+a|0)&a|~r&n)+t[5]+1200080426|0)<<12|s>>>20)+r|0)&r|~s&a)+t[6]-1473231341|0)<<17|n>>>15)+s|0)&s|~n&r)+t[7]-45705983|0)<<22|a>>>10)+n|0,a=((a+=((n=((n+=((s=((s+=((r=((r+=(a&n|~a&s)+t[8]+1770035416|0)<<7|r>>>25)+a|0)&a|~r&n)+t[9]-1958414417|0)<<12|s>>>20)+r|0)&r|~s&a)+t[10]-42063|0)<<17|n>>>15)+s|0)&s|~n&r)+t[11]-1990404162|0)<<22|a>>>10)+n|0,a=((a+=((n=((n+=((s=((s+=((r=((r+=(a&n|~a&s)+t[12]+1804603682|0)<<7|r>>>25)+a|0)&a|~r&n)+t[13]-40341101|0)<<12|s>>>20)+r|0)&r|~s&a)+t[14]-1502002290|0)<<17|n>>>15)+s|0)&s|~n&r)+t[15]+1236535329|0)<<22|a>>>10)+n|0,a=((a+=((n=((n+=((s=((s+=((r=((r+=(a&s|n&~s)+t[1]-165796510|0)<<5|r>>>27)+a|0)&n|a&~n)+t[6]-1069501632|0)<<9|s>>>23)+r|0)&a|r&~a)+t[11]+643717713|0)<<14|n>>>18)+s|0)&r|s&~r)+t[0]-373897302|0)<<20|a>>>12)+n|0,a=((a+=((n=((n+=((s=((s+=((r=((r+=(a&s|n&~s)+t[5]-701558691|0)<<5|r>>>27)+a|0)&n|a&~n)+t[10]+38016083|0)<<9|s>>>23)+r|0)&a|r&~a)+t[15]-660478335|0)<<14|n>>>18)+s|0)&r|s&~r)+t[4]-405537848|0)<<20|a>>>12)+n|0,a=((a+=((n=((n+=((s=((s+=((r=((r+=(a&s|n&~s)+t[9]+568446438|0)<<5|r>>>27)+a|0)&n|a&~n)+t[14]-1019803690|0)<<9|s>>>23)+r|0)&a|r&~a)+t[3]-187363961|0)<<14|n>>>18)+s|0)&r|s&~r)+t[8]+1163531501|0)<<20|a>>>12)+n|0,a=((a+=((n=((n+=((s=((s+=((r=((r+=(a&s|n&~s)+t[13]-1444681467|0)<<5|r>>>27)+a|0)&n|a&~n)+t[2]-51403784|0)<<9|s>>>23)+r|0)&a|r&~a)+t[7]+1735328473|0)<<14|n>>>18)+s|0)&r|s&~r)+t[12]-1926607734|0)<<20|a>>>12)+n|0,a=((a+=((n=((n+=((s=((s+=((r=((r+=(a^n^s)+t[5]-378558|0)<<4|r>>>28)+a|0)^a^n)+t[8]-2022574463|0)<<11|s>>>21)+r|0)^r^a)+t[11]+1839030562|0)<<16|n>>>16)+s|0)^s^r)+t[14]-35309556|0)<<23|a>>>9)+n|0,a=((a+=((n=((n+=((s=((s+=((r=((r+=(a^n^s)+t[1]-1530992060|0)<<4|r>>>28)+a|0)^a^n)+t[4]+1272893353|0)<<11|s>>>21)+r|0)^r^a)+t[7]-155497632|0)<<16|n>>>16)+s|0)^s^r)+t[10]-1094730640|0)<<23|a>>>9)+n|0,a=((a+=((n=((n+=((s=((s+=((r=((r+=(a^n^s)+t[13]+681279174|0)<<4|r>>>28)+a|0)^a^n)+t[0]-358537222|0)<<11|s>>>21)+r|0)^r^a)+t[3]-722521979|0)<<16|n>>>16)+s|0)^s^r)+t[6]+76029189|0)<<23|a>>>9)+n|0,a=((a+=((n=((n+=((s=((s+=((r=((r+=(a^n^s)+t[9]-640364487|0)<<4|r>>>28)+a|0)^a^n)+t[12]-421815835|0)<<11|s>>>21)+r|0)^r^a)+t[15]+530742520|0)<<16|n>>>16)+s|0)^s^r)+t[2]-995338651|0)<<23|a>>>9)+n|0,a=((a+=((s=((s+=(a^((r=((r+=(n^(a|~s))+t[0]-198630844|0)<<6|r>>>26)+a|0)|~n))+t[7]+1126891415|0)<<10|s>>>22)+r|0)^((n=((n+=(r^(s|~a))+t[14]-1416354905|0)<<15|n>>>17)+s|0)|~r))+t[5]-57434055|0)<<21|a>>>11)+n|0,a=((a+=((s=((s+=(a^((r=((r+=(n^(a|~s))+t[12]+1700485571|0)<<6|r>>>26)+a|0)|~n))+t[3]-1894986606|0)<<10|s>>>22)+r|0)^((n=((n+=(r^(s|~a))+t[10]-1051523|0)<<15|n>>>17)+s|0)|~r))+t[1]-2054922799|0)<<21|a>>>11)+n|0,a=((a+=((s=((s+=(a^((r=((r+=(n^(a|~s))+t[8]+1873313359|0)<<6|r>>>26)+a|0)|~n))+t[15]-30611744|0)<<10|s>>>22)+r|0)^((n=((n+=(r^(s|~a))+t[6]-1560198380|0)<<15|n>>>17)+s|0)|~r))+t[13]+1309151649|0)<<21|a>>>11)+n|0,a=((a+=((s=((s+=(a^((r=((r+=(n^(a|~s))+t[4]-145523070|0)<<6|r>>>26)+a|0)|~n))+t[11]-1120210379|0)<<10|s>>>22)+r|0)^((n=((n+=(r^(s|~a))+t[2]+718787259|0)<<15|n>>>17)+s|0)|~r))+t[9]-343485551|0)<<21|a>>>11)+n|0,e[0]=r+e[0]|0,e[1]=a+e[1]|0,e[2]=n+e[2]|0,e[3]=s+e[3]|0},e.prototype.start=function(){return this._dataLength=0,this._bufferLength=0,this._state.set(e.stateIdentity),this},e.prototype.appendStr=function(t){var r,a,n=this._buffer8,s=this._buffer32,o=this._bufferLength;for(a=0;a<t.length;a+=1){if((r=t.charCodeAt(a))<128)n[o++]=r;else if(r<2048)n[o++]=192+(r>>>6),n[o++]=63&r|128;else if(r<55296||r>56319)n[o++]=224+(r>>>12),n[o++]=r>>>6&63|128,n[o++]=63&r|128;else{if((r=1024*(r-55296)+(t.charCodeAt(++a)-56320)+65536)>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");n[o++]=240+(r>>>18),n[o++]=r>>>12&63|128,n[o++]=r>>>6&63|128,n[o++]=63&r|128}o>=64&&(this._dataLength+=64,e._md5cycle(this._state,s),o-=64,s[0]=s[16])}return this._bufferLength=o,this},e.prototype.appendAsciiStr=function(t){for(var r,a=this._buffer8,n=this._buffer32,s=this._bufferLength,o=0;;){for(r=Math.min(t.length-o,64-s);r--;)a[s++]=t.charCodeAt(o++);if(s<64)break;this._dataLength+=64,e._md5cycle(this._state,n),s=0}return this._bufferLength=s,this},e.prototype.appendByteArray=function(t){for(var r,a=this._buffer8,n=this._buffer32,s=this._bufferLength,o=0;;){for(r=Math.min(t.length-o,64-s);r--;)a[s++]=t[o++];if(s<64)break;this._dataLength+=64,e._md5cycle(this._state,n),s=0}return this._bufferLength=s,this},e.prototype.getState=function(){var e=this,t=e._state;return{buffer:String.fromCharCode.apply(null,e._buffer8),buflen:e._bufferLength,length:e._dataLength,state:[t[0],t[1],t[2],t[3]]}},e.prototype.setState=function(e){var t,r=e.buffer,a=e.state,n=this._state;for(this._dataLength=e.length,this._bufferLength=e.buflen,n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],t=0;t<r.length;t+=1)this._buffer8[t]=r.charCodeAt(t)},e.prototype.end=function(t){void 0===t&&(t=!1);var r,a=this._bufferLength,n=this._buffer8,s=this._buffer32,o=1+(a>>2);if(this._dataLength+=a,n[a]=128,n[a+1]=n[a+2]=n[a+3]=0,s.set(e.buffer32Identity.subarray(o),o),a>55&&(e._md5cycle(this._state,s),s.set(e.buffer32Identity)),(r=8*this._dataLength)<=4294967295)s[14]=r;else{var i=r.toString(16).match(/(.*?)(.{0,8})$/);if(null===i)return;var l=parseInt(i[2],16),c=parseInt(i[1],16)||0;s[14]=l,s[15]=c}return e._md5cycle(this._state,s),t?this._state:e._hex(this._state)},e.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]),e.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),e.hexChars="0123456789abcdef",e.hexOut=[],e.onePassHasher=new e,e}(),H=D.Md5=F;"5d41402abc4b2a76b9719d911017c592"!==F.hashStr("hello")&&console.error("Md5 self test failed.");const U=l.create({baseURL:"/api/admin/",headers:{"Content-Type":"application/json;charset=utf-8"},withCredentials:!1});U.interceptors.request.use((e=>e),(e=>(console.log("Error: "+e.message),Promise.reject(e)))),U.interceptors.response.use((e=>e),(e=>(console.log(e),e.response&&null!=e.response.data.meta?e.response.data:Promise.reject(e)))),U.defaults.headers.common.Authorization=localStorage.getItem("admin-token")||"";const V=e=>{const t=H.hashStr(e);U.defaults.headers.common.Authorization=t,localStorage.setItem("admin-token",t)};var X=U;const G=z.exports.lazy((()=>o((()=>import("./login.14bc7a0f.js")),["assets/login.14bc7a0f.js","assets/vendor.cc756816.js","assets/index.b40903f7.js","assets/index.c208b2a1.js","assets/index.af7786d1.css","assets/index.esm.53a17f20.js","assets/useTitle.ba04131e.js"]))),Y=[{name:"Settings",to:"settings",icon:f,component:z.exports.lazy((()=>o((()=>import("./settings.e9a69f87.js")),["assets/settings.e9a69f87.js","assets/vendor.cc756816.js","assets/form-item.daa0d2e2.js","assets/index.b40903f7.js","assets/index.c208b2a1.js","assets/index.af7786d1.css","assets/index.esm.53a17f20.js","assets/useTitle.ba04131e.js"])))},{name:"Accounts",to:"accounts",icon:u,component:z.exports.lazy((()=>o((()=>import("./accounts.057345f7.js")),["assets/accounts.057345f7.js","assets/vendor.cc756816.js","assets/form-item.daa0d2e2.js","assets/index.b40903f7.js","assets/index.c208b2a1.js","assets/index.af7786d1.css","assets/index.esm.53a17f20.js","assets/useTitle.ba04131e.js"])))},{name:"Meta",to:"meta",icon:function(e){return i({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 0 0-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 0 0-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"}}]})(e)},component:z.exports.lazy((()=>o((()=>import("./metas.6ab3ed71.js")),["assets/metas.6ab3ed71.js","assets/vendor.cc756816.js","assets/form-item.daa0d2e2.js","assets/index.b40903f7.js","assets/index.c208b2a1.js","assets/index.af7786d1.css","assets/index.esm.53a17f20.js","assets/useTitle.ba04131e.js"])))}];var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:function(){const e=p(),{t:n}=b(),o=g(),i=_(),l=y(),f=E();T(n("Alist Manage")),z.exports.useEffect((()=>{X.get("login").then((e=>{const t=e.data;let r=o.url;r.endsWith("/")||(r+="/"),401===t.code?i.push(`${r}login`):o.url===l.pathname&&i.push(`${r}settings`)}))}),[l.pathname]);const u=e=>{const n=e,{icon:i,children:l}=n,c=((e,n)=>{var s={};for(var o in e)r.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&t)for(var o of t(e))n.indexOf(o)<0&&a.call(e,o)&&(s[o]=e[o]);return s})(n,["icon","children"]);return v.createElement($,{to:`${o.url}/${e.to}`},v.createElement(C,s({align:"center",px:"4",pl:"8",py:"3",cursor:"pointer",color:S("inherit","gray.400"),_hover:{bg:S("gray.100","gray.900"),color:S("gray.900","gray.200")},role:"group",fontWeight:"semibold",transition:".15s ease"},c),i&&v.createElement(I,{mr:"2",boxSize:"4",_groupHover:{color:S("gray.600","gray.300")},as:i}),l))},D=e=>v.createElement(x,s({as:"nav",pos:"fixed",top:"0",left:"0",zIndex:"sticky",h:"full",pb:"10",overflowX:"hidden",overflowY:"auto",bg:S("white","gray.800"),borderColor:S("inherit","gray.700"),borderRightWidth:"1px",w:"48",shadow:"md"},e),v.createElement($,{to:"/@manage"},v.createElement(C,{px:"4",py:"5",align:"center"},v.createElement(R,{fontSize:"2xl",ml:"2",color:S("brand.500","white"),fontWeight:"semibold"},"Alist ",n("Manage")))),v.createElement(C,{direction:"column",as:"nav",fontSize:"sm",color:"gray.600","aria-label":"Main Navigation"},Y.map((e=>v.createElement(u,{to:e.to,icon:e.icon,key:e.name},n(e.name))))));return v.createElement(x,{as:"section",bg:S("gray.50","gray.700"),minH:"100vh"},v.createElement(c,null),v.createElement(D,{display:{base:"none",md:"unset"}}),v.createElement(w,{isOpen:e.isOpen,onClose:e.onClose,placement:"left"},v.createElement(A,null),v.createElement(L,null,v.createElement(D,{w:"full",borderRight:"none"}))),v.createElement(x,{ml:{base:0,md:48},transition:".3s ease"},v.createElement(C,{as:"header",align:"center",justify:"space-between",w:"full",px:"4",bg:S("white","gray.800"),borderBottomWidth:"1px",borderColor:S("inherit","gray.700"),h:"14",shadow:"md"},v.createElement(j,{"aria-label":"Menu",display:{base:"inline-flex",md:"none"},onClick:e.onOpen,icon:v.createElement(h,null),size:"sm"}),v.createElement(x,{w:"96",display:{base:"none",md:"flex"}}),v.createElement(C,{align:"center"},v.createElement(O,{href:"https://github.com/Xhofe/alist",isExternal:!0},v.createElement(I,{boxSize:6,color:"gray.500",as:d,cursor:"pointer"})),v.createElement(M,{shouldWrapChildren:!0,hasArrow:!0,placement:"bottom",label:n("clear buffer")},v.createElement(j,{colorScheme:"whiteAlpha","aria-label":n("clear buffer"),icon:v.createElement(I,{boxSize:6,color:"gray.500",as:m}),onClick:()=>{X.get("clear_cache").then((e=>{const t=e.data;200===t.code&&(200===t.code?f({title:n(t.message),status:"success",duration:3e3,isClosable:!0}):f({title:n(t.message),status:"error",duration:3e3,isClosable:!0}))}))}})),v.createElement(M,{shouldWrapChildren:!0,hasArrow:!0,placement:"bottom",label:n("logout")},v.createElement(j,{onClick:()=>{V(""),i.push(`${o.url}/login`)},colorScheme:"blank","aria-label":n("logout"),icon:v.createElement(I,{boxSize:6,color:"gray.500",as:B})})))),v.createElement(x,{as:"main",p:"2"},v.createElement(x,{borderWidth:"1px",borderStyle:"dashed",rounded:"md",h:"calc( 100vh - 80px)",overflowY:"auto",p:"2"},v.createElement(z.exports.Suspense,{fallback:v.createElement(P,{h:"full"},v.createElement(k,null))},Y.map((e=>v.createElement(W,{path:`${o.url}/${e.to}`,key:e.name},v.createElement(e.component,null)))),v.createElement(W,{path:`${o.url}/login`},v.createElement(G,null)))))))}});export{X as a,V as c,q as i};

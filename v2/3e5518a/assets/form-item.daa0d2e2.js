import{h as e,R as a,ad as n,ae as l,P as t,ag as r,ah as s,ai as o,aj as u,ak as c,al as d,am as m,an as i}from"./vendor.cc756816.js";const g=g=>{var h;const{t:v}=e();return a.createElement(n,{shadow:"md",p:"2",rounded:"lg",isRequired:g.required},a.createElement(l,null,v(g.label)),"string"===g.type?a.createElement(t,{isReadOnly:g.readOnly,value:g.value,onChange:e=>{g.onChange&&g.onChange(e.target.value)}}):"bool"===g.type?a.createElement(r,{isReadOnly:g.readOnly,isChecked:g.value,onChange:()=>{g.onChange&&g.onChange()}}):"select"===g.type?a.createElement(s,{isDisabled:g.readOnly,value:g.value,onChange:e=>{g.onChange&&g.onChange(e.target.value)}},a.createElement("option",{value:""},v("select")),null==(h=g.values)?void 0:h.map((e=>a.createElement("option",{key:e,value:e},v(e))))):"number"===g.type?a.createElement(o,{defaultValue:g.value,onChange:(e,a)=>{g.onChange&&g.onChange(a)}},a.createElement(u,null),a.createElement(c,null,a.createElement(d,null),a.createElement(m,null))):null,g.description&&a.createElement(i,null,v(g.description)))};export{g as F};

"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[90],{674:(e,r,n)=>{function t(...e){for(var r,n=0,t="",o=arguments.length;n<o;n++)(r=arguments[n])&&"string"==typeof r&&(t+=(t&&" ")+r);return t}n.d(r,{cn:()=>t})},8447:(e,r,n)=>{n.r(r),n.d(r,{default:()=>y});var t=n(4848),o="lCUIq",s=n(6540),c="N5nnb",l="AvTd4",a=n(674),u=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]])}return n};const i=(0,s.createContext)({ref:{current:null},setMouseDraggable:()=>{}});function d(e){var{children:r,className:n}=e,o=u(e,["children","className"]);const d=(0,s.useRef)(null),[f,v]=(0,s.useState)(!1),m={setMouseDraggable:v,ref:d};return(0,t.jsx)("div",Object.assign({className:(0,a.cn)(c,n)},o,{children:(0,t.jsx)("div",{ref:d,className:(0,a.cn)(f&&l),children:(0,t.jsx)(i.Provider,{value:m,children:r})})}))}var f="R5x4F",v="_04vjH",m="+Sfcg",p="-ug2K",h="xGHlN";var j=function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]])}return n};function g(e){var{onMouseDown:r}=e,n=j(e,["onMouseDown"]);const{ref:o,setMouseDraggable:c}=(0,s.useContext)(i);return(0,t.jsx)("div",Object.assign({},n,{onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),null==r||r(e),c(!0);const n=e.clientY,t=e=>{const r=o.current.scrollTop-e.movementY;r>=0&&o.current.scrollTo({top:r})},s=e=>{o.current.removeEventListener("mousemove",t),document.removeEventListener("mouseup",s),setTimeout((()=>{c(!1)}),500),n!==e.pageY?function(e){const{scrollTop:r,offsetHeight:n}=e;e.scrollTo({top:r<n/2?0:n,behavior:"smooth"})}(o.current):o.current.scrollTo({top:o.current.scrollTop>0?0:o.current.offsetHeight,behavior:"smooth"})};o.current.addEventListener("mousemove",t),document.addEventListener("mouseup",s)}}))}var x=n(2071);function b(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:v,children:[(0,t.jsx)(g,{className:h,children:"HEADER"}),(0,t.jsxs)("div",{className:f,children:[(0,t.jsx)("div",{className:m,children:(0,t.jsx)(x.r,{l:60})}),(0,t.jsx)("div",{className:p,children:"FOOTER"})]})]})})}function O(){return(0,t.jsx)("div",{className:o,children:(0,t.jsx)(x.r,{l:60})})}const y=function(){return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Bottom Section"}),(0,t.jsxs)(d,{className:"gXULf",children:[(0,t.jsx)(O,{}),(0,t.jsx)(b,{})]})]})}},1509:(e,r,n)=>{function t(){return`rgb(${~~(255*Math.random())}, ${~~(255*Math.random())}, ${~~(255*Math.random())})`}n.d(r,{q:()=>t})},2071:(e,r,n)=>{n.d(r,{r:()=>c});var t=n(4848),o=n(1509);function s(e,r){var n;const s=[];for(let c=0;c<e;c++){const e=null==r?void 0:r(c),l={backgroundColor:(0,o.q)()},a=(0,t.jsx)("div",Object.assign({},e,{style:null!==(n=null==e?void 0:e.style)&&void 0!==n?n:l,children:c}),c);s.push(a)}return s}function c({l:e,renderer:r}){return(0,t.jsx)(t.Fragment,{children:s(e,r)})}}}]);
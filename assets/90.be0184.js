"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[90],{674:(e,t,n)=>{function r(...e){for(var t,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&"string"==typeof t&&(r+=(r&&" ")+t);return r}n.d(t,{cn:()=>r})},443:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(4848),o="Q4TML",s=n(6540),i="ouHXb",l="wXeGw",c=n(674),a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const u=(0,s.createContext)({ref:{current:null},setMouseDraggable:()=>{}});function d(e){var{children:t,className:n}=e,o=a(e,["children","className"]);const d=(0,s.useRef)(null),[p,f]=(0,s.useState)(!1),h={setMouseDraggable:f,ref:d};return(0,r.jsx)("div",Object.assign({className:(0,c.cn)(i,n)},o,{children:(0,r.jsx)("div",{ref:d,className:(0,c.cn)(p&&l),children:(0,r.jsx)(u.Provider,{value:h,children:t})})}))}var p="Q4dJ5",f="FfoDX",h="WwU-h",v="+jpj3",g="GmAO5";var j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function m(e){var{onPointerDown:t}=e,n=j(e,["onPointerDown"]);const{ref:o,setMouseDraggable:i}=(0,s.useContext)(u);return(0,r.jsx)("div",Object.assign({},n,{onPointerDown:e=>{if(null==t||t(e),"undefined"!=typeof window&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(window.navigator.userAgent))return;e.preventDefault(),e.stopPropagation(),i(!0);const n=e.clientY,r=e.currentTarget;r.setPointerCapture(e.nativeEvent.pointerId);const s=o.current.getBoundingClientRect(),l=r.getBoundingClientRect(),c=n-l.top,a=s.top+c,u=s.top+s.height-(l.height-c),d=e=>{if(e.clientY<a||e.clientY>u)return;const t=e.clientY-s.top,n=s.height-t-l.height+c;console.log(n);const r=n;r>=0&&o.current.scrollTo({top:r})},p=e=>{r.removeEventListener("pointermove",d),r.removeEventListener("pointerup",p),r.releasePointerCapture(e.pointerId),setTimeout((()=>{i(!1)}),500),n!==e.pageY?function(e){const{scrollTop:t,offsetHeight:n}=e;e.scrollTo({top:t<n/2?0:n,behavior:"smooth"})}(o.current):o.current.scrollTo({top:o.current.scrollTop>0?0:o.current.offsetHeight,behavior:"smooth"})};r.addEventListener("pointermove",d),r.addEventListener("pointerup",p)}}))}var b=n(2071);function x(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:f,children:[(0,r.jsx)(m,{className:g,children:"HEADER"}),(0,r.jsxs)("div",{className:p,children:[(0,r.jsx)("div",{className:h,children:(0,r.jsx)(b.r,{l:60})}),(0,r.jsx)("div",{className:v,children:"FOOTER"})]})]})})}var O="j58QD";function y(){return(0,r.jsx)("div",{className:O})}function w(){return(0,r.jsx)("div",{className:o,children:(0,r.jsx)(b.r,{l:60})})}const P=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Bottom Section"}),(0,r.jsxs)(d,{className:"uts3a",children:[(0,r.jsx)(y,{}),(0,r.jsx)(w,{}),(0,r.jsx)(y,{}),(0,r.jsx)(x,{})]})]})}},1509:(e,t,n)=>{function r(){return`rgb(${~~(255*Math.random())}, ${~~(255*Math.random())}, ${~~(255*Math.random())})`}n.d(t,{q:()=>r})},2071:(e,t,n)=>{n.d(t,{r:()=>i});var r=n(4848),o=n(1509);function s(e,t){var n;const s=[];for(let i=0;i<e;i++){const e=null==t?void 0:t(i),l={backgroundColor:(0,o.q)()},c=(0,r.jsx)("div",Object.assign({},e,{style:null!==(n=null==e?void 0:e.style)&&void 0!==n?n:l,children:i}),i);s.push(c)}return s}function i({l:e,renderer:t}){return(0,r.jsx)(r.Fragment,{children:s(e,t)})}}}]);
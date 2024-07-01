"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[560],{674:(e,n,r)=>{function t(...e){for(var n,r=0,t="",o=arguments.length;r<o;r++)(n=arguments[r])&&"string"==typeof n&&(t+=(t&&" ")+n);return t}r.d(n,{cn:()=>t})},8878:(e,n,r)=>{r.r(n),r.d(n,{default:()=>b});var t=r(4848),o=r(6540),c=r(9576),s=function(e,n,r,t){return new(r||(r=Promise))((function(o,c){function s(e){try{l(t.next(e))}catch(e){c(e)}}function a(e){try{l(t.throw(e))}catch(e){c(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,a)}l((t=t.apply(e,n||[])).next())}))};var a=r(5487);const l=(0,o.memo)((({records:e,Renderer:n,reversed:r,remove:o})=>{const c=e.map((e=>(0,t.jsx)(n,Object.assign({},e,{remove:o}),e.id)));return(0,t.jsx)("div",{children:r?c.reverse():c})}));var i;!function(e){e[e.Log=0]="Log",e[e.Error=1]="Error"}(i||(i={}));var u=r(2333),f=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r};function p(){const e=(0,u.CH)();return(0,o.useMemo)((()=>{const n=function(){let e=[],n=0;return{log:r=>{const t=r instanceof Error?r.message:r,o=r instanceof Error?i.Error:i.Log,c={id:n++,type:o,message:t};return e=[...e,c],t},remove:n=>{const r=e.findIndex((e=>e.id===n));e.splice(r,1),e=[...e]},records:()=>e}}(),{log:r,remove:t}=n,o=f(n,["log","remove"]);return Object.assign({log:(...n)=>{r(...n),e()},remove:(...n)=>{t(...n),e()}},o)}),[])}var v=r(674),d=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r};function y(e){var{className:n}=e,r=d(e,["className"]);return(0,t.jsx)("div",Object.assign({className:(0,v.cn)("B-ZVK",n)},r))}var O=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r};function j(e){var{className:n}=e,r=O(e,["className"]);return(0,t.jsx)("div",Object.assign({className:(0,v.cn)("-QoZq",n)},r))}var g=r(2153);const m=({type:e,message:n,id:r,remove:o})=>e===i.Error?(0,t.jsxs)(y,{children:[n,(0,t.jsx)(g.J,{onClick:()=>o(r)})]}):(0,t.jsxs)(j,{children:[n,(0,t.jsx)(g.J,{onClick:()=>o(r)})]});const b=function(){const[e,n]=(0,o.useState)("1h2j3m5l6;7,"),[r,i]=(0,o.useState)("\\d"),[u,f]=(0,o.useState)("gui"),[v,d]=function(e,n=!1){const{log:r,records:o,remove:c}=p();return[(0,t.jsx)(l,{reversed:n,records:o(),remove:c,Renderer:e}),r]}(m,!0),y=(O=d,j=1500,(0,o.useMemo)((()=>(0,a.v)(O,j)),[O,j]));var O,j;return(0,o.useEffect)((()=>{(function(e,n,r){return s(this,void 0,void 0,(function*(){const t=new RegExp(n,r),o=e.match(t);return null===o?"null":JSON.stringify([...o])}))})(e,r,u).then(y).catch(y)}),[e,r,u]),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Текст"}),(0,t.jsx)(c.p,{value:e,onChange:n}),(0,t.jsx)("p",{children:"Регулярное выражение"}),(0,t.jsx)(c.p,{value:r,onChange:i}),(0,t.jsx)("p",{children:"Флаги"}),(0,t.jsx)(c.p,{value:u,onChange:f}),(0,t.jsx)("p",{children:"Результат:"}),v]})}},2153:(e,n,r)=>{r.d(n,{J:()=>a});var t=r(4848),o="BRyRJ",c=r(674),s=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r};function a(e){var{className:n,children:r}=e,a=s(e,["className","children"]);return(0,t.jsxs)("button",Object.assign({className:(0,c.cn)("ic",o,n)},a,{children:[r,"close"]}))}},9576:(e,n,r)=>{r.d(n,{p:()=>l});var t=r(4848),o="jE3C8",c="zaFT3",s=r(2153),a=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]])}return r};function l(e){var{onChange:n,value:r,onEnter:l,container:i}=e,u=a(e,["onChange","value","onEnter","container"]);return(0,t.jsxs)("div",Object.assign({className:o},i,{children:[(0,t.jsx)("input",Object.assign({type:"text"},u,{className:c,value:r,onChange:e=>null==n?void 0:n(e.target.value),onKeyDown:e=>("Enter"===e.key||"NumpadEnter"===e.key)&&(null==l?void 0:l(r))})),0!==r.length&&(0,t.jsx)(s.J,{onClick:e=>{var r,t;n(""),null===(t=null===(r=e.currentTarget)||void 0===r?void 0:r.previousElementSibling)||void 0===t||t.focus()}})]}))}},2333:(e,n,r)=>{r.d(n,{CH:()=>c});var t=r(6540);function o(e){return e+1}function c(){const[e,n]=function(e=0){return(0,t.useReducer)(o,e)}();return n}}}]);
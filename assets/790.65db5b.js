"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[790],{7064:(n,t,e)=>{e.r(t),e.d(t,{default:()=>s});var r=e(4848),o=e(6540),i=e(9576),l=function(n,t,e,r){return new(e||(e=Promise))((function(o,i){function l(n){try{c(r.next(n))}catch(n){i(n)}}function u(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(l,u)}c((r=r.apply(n,t||[])).next())}))};function u(n){let t=0;for(let e=0;e<n.length;e++)"string"==typeof n[e]&&n[e].length>t&&(t=n[e].length);const e=[];let r=!1;for(let o=0;o<n.length;o++)if("string"==typeof n[o])r=!(!n[o+2]||"string"!=typeof n[o+2]),n[o+1]instanceof Array?e.push(n[o]+Array(t-n[o].length+3).fill("-",0,t-n[o].length+3).join("")+"+"):e.push(n[o]);else{const i=(r?"|":" ")+Array(3+t).fill(" ",0,2+t).join("");for(let t of u(n[o]))e.push(i+t)}return e}var c=function(n,t,e,r){return new(e||(e=Promise))((function(o,i){function l(n){try{c(r.next(n))}catch(n){i(n)}}function u(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(l,u)}c((r=r.apply(n,t||[])).next())}))};const s=()=>{const[n,t]=(0,o.useState)("(1 (2 (4 5 6 (7) 108 (9)) 3))"),[e,s]=(0,o.useState)(""),[a,f]=(0,o.useState)("");return(0,o.useEffect)((()=>{(function(n){return c(this,void 0,void 0,(function*(){const t=yield function(n){return l(this,void 0,void 0,(function*(){const t=n,e=[];let r=0,o="",i=e;for(let n=0;n<t.length;n++){const l=t[n];if(l.match(/\d/))o+=l;else if(o.length&&(i.push(o),o=""),"("===l&&r++,")"===l&&r--,"("===l||")"===l){i=e;for(let n=0;n<r;n++)i.length&&i[i.length-1]instanceof Array||i.push([]),i=i[i.length-1]}}return e}))}(n);return[t,u(t).join("\n")]}))})(n).then((([n,t])=>{s(JSON.stringify(n)),f(t)}))}),[n]),(0,r.jsxs)("div",{children:[(0,r.jsx)(i.p,{value:n,onChange:t}),(0,r.jsx)("p",{children:e}),(0,r.jsx)("pre",{children:a})]})}},9576:(n,t,e)=>{e.d(t,{p:()=>c});var r=e(4848),o="AWXFg",i="MH445",l=e(2153),u=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(e[r[o]]=n[r[o]])}return e};function c(n){var{onChange:t,value:e,onEnter:c,container:s}=n,a=u(n,["onChange","value","onEnter","container"]);return(0,r.jsxs)("div",Object.assign({className:o},s,{children:[(0,r.jsx)("input",Object.assign({type:"text"},a,{className:i,value:e,onChange:n=>null==t?void 0:t(n.target.value),onKeyDown:n=>("Enter"===n.key||"NumpadEnter"===n.key)&&(null==c?void 0:c(e))})),0!==e.length&&(0,r.jsx)(l.J,{onClick:n=>{var e,r;t(""),null===(r=null===(e=n.currentTarget)||void 0===e?void 0:e.previousElementSibling)||void 0===r||r.focus()}})]}))}}}]);
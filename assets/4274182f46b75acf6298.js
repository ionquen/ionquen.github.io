"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[790],{866:(n,e,t)=>{t.r(e),t.d(e,{default:()=>s});var r=t(4848),o=t(6540),l=t(9576),i=function(n,e,t,r){return new(t||(t=Promise))((function(o,l){function i(n){try{a(r.next(n))}catch(n){l(n)}}function s(n){try{a(r.throw(n))}catch(n){l(n)}}function a(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,s)}a((r=r.apply(n,e||[])).next())}))};const s=()=>{const[n,e]=(0,o.useState)("(1 (2 (4 5 6 (7) 108 (9)) 3))"),[t,s]=(0,o.useState)(""),[u,c]=(0,o.useState)("");return(0,o.useEffect)((()=>{(function(n){return i(this,void 0,void 0,(function*(){const e=n,t=[];let r=0,o="",l=t;for(let n=0;n<e.length;n++){const i=e[n];if(i.match(/\d/))o+=i;else if(o.length&&(l.push(o),o=""),"("===i&&r++,")"===i&&r--,"("===i||")"===i){l=t;for(let n=0;n<r;n++)l.length&&l[l.length-1]instanceof Array||l.push([]),l=l[l.length-1]}}return[JSON.stringify(t),a(t).join("\n")]}))})(n).then((([n,e])=>{s(n),c(e)}))}),[n]),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.p,{value:n,onChange:e}),(0,r.jsx)("p",{children:t}),(0,r.jsx)("pre",{children:u})]})};function a(n){let e=0;for(let t=0;t<n.length;t++)"string"==typeof n[t]&&n[t].length>e&&(e=n[t].length);const t=[];let r=!1;for(let o=0;o<n.length;o++)if("string"==typeof n[o])r=!(!n[o+2]||"string"!=typeof n[o+2]),n[o+1]instanceof Array?t.push(n[o]+Array(e-n[o].length+3).fill("-",0,e-n[o].length+3).join("")+"+"):t.push(n[o]);else{const l=(r?"|":" ")+Array(3+e).fill(" ",0,2+e).join("");for(let e of a(n[o]))t.push(l+e)}return t}},9576:(n,e,t)=>{t.d(e,{p:()=>i});var r=t(4848);const o={input:"CUAB2",inputBase:"QG9Mq"};var l=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t};function i(n){var{onChange:e,value:t,onEnter:i,container:s}=n,a=l(n,["onChange","value","onEnter","container"]);return(0,r.jsxs)("div",Object.assign({className:o.input},s,{children:[(0,r.jsx)("input",Object.assign({type:"text"},a,{className:o.inputBase,value:t,onChange:n=>null==e?void 0:e(n.target.value),onKeyDown:n=>("Enter"===n.key||"NumpadEnter"===n.key)&&(null==i?void 0:i(t))})),0!==t.length&&(0,r.jsx)("div",{className:"ic",onClick:n=>{var t,r;e(""),null===(r=null===(t=n.currentTarget)||void 0===t?void 0:t.previousElementSibling)||void 0===r||r.focus()},children:"close"})]}))}}}]);
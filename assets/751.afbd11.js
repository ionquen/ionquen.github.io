"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[751],{3925:(n,e,t)=>{t.r(e),t.d(e,{default:()=>s});var r=t(4848),o=t(6540),c=t(9576),a=function(n,e,t,r){return new(t||(t=Promise))((function(o,c){function a(n){try{i(r.next(n))}catch(n){c(n)}}function s(n){try{i(r.throw(n))}catch(n){c(n)}}function i(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}i((r=r.apply(n,e||[])).next())}))};const s=function(){const[n,e]=(0,o.useState)("[123456789]"),[t,s]=(0,o.useState)("");return(0,o.useEffect)((()=>{(function(n){return a(this,void 0,void 0,(function*(){const e=["Результат по умолчанию",...JSON.parse(n)];return JSON.stringify(e)}))})(n).then(s).catch(console.log)}),[n]),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.p,{value:n,onChange:e}),(0,r.jsx)("p",{children:t})]})}},9576:(n,e,t)=>{t.d(e,{p:()=>s});var r=t(4848),o="JKx13",c="sBRVr",a=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t};function s(n){var{onChange:e,value:t,onEnter:s,container:i}=n,u=a(n,["onChange","value","onEnter","container"]);return(0,r.jsxs)("div",Object.assign({className:o},i,{children:[(0,r.jsx)("input",Object.assign({type:"text"},u,{className:c,value:t,onChange:n=>null==e?void 0:e(n.target.value),onKeyDown:n=>("Enter"===n.key||"NumpadEnter"===n.key)&&(null==s?void 0:s(t))})),0!==t.length&&(0,r.jsx)("div",{className:"ic",onClick:n=>{var t,r;e(""),null===(r=null===(t=n.currentTarget)||void 0===t?void 0:t.previousElementSibling)||void 0===r||r.focus()},children:"close"})]}))}}}]);
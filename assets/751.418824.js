"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[751],{4380:(n,e,t)=>{t.r(e),t.d(e,{default:()=>u});var o=t(4848),r=t(6540),c=t(9576),a=function(n,e,t,o){return new(t||(t=Promise))((function(r,c){function a(n){try{i(o.next(n))}catch(n){c(n)}}function u(n){try{i(o.throw(n))}catch(n){c(n)}}function i(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,u)}i((o=o.apply(n,e||[])).next())}))};const u=function(){const[n,e]=(0,r.useState)("[123456789]"),[t,u]=(0,r.useState)("");return(0,r.useEffect)((()=>{(function(n){return a(this,void 0,void 0,(function*(){const e=["Результат по умолчанию",...JSON.parse(n)];return JSON.stringify(e)}))})(n).then(u).catch(console.log)}),[n]),(0,o.jsxs)("div",{children:[(0,o.jsx)(c.p,{value:n,onChange:e}),(0,o.jsx)("p",{children:t})]})}},9576:(n,e,t)=>{t.d(e,{p:()=>i});var o=t(4848),r="_8540C",c="hmcSV",a=t(2153),u=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(n);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(t[o[r]]=n[o[r]])}return t};function i(n){var{onChange:e,value:t,onEnter:i,container:s}=n,l=u(n,["onChange","value","onEnter","container"]);return(0,o.jsxs)("div",Object.assign({className:r},s,{children:[(0,o.jsx)("input",Object.assign({type:"text"},l,{className:c,value:t,onChange:n=>null==e?void 0:e(n.target.value),onKeyDown:n=>("Enter"===n.key||"NumpadEnter"===n.key)&&(null==i?void 0:i(t))})),0!==t.length&&(0,o.jsx)(a.J,{onClick:n=>{var t,o;e(""),null===(o=null===(t=n.currentTarget)||void 0===t?void 0:t.previousElementSibling)||void 0===o||o.focus()}})]}))}}}]);
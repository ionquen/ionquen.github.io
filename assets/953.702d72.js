"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[953],{7101:(n,e,t)=>{function r(...[n,e]){return JSON.stringify(n,e,2)}t.d(e,{d:()=>r})},2067:(n,e,t)=>{t.r(e),t.d(e,{default:()=>i});var r=t(4848),o=t(6540),c=t(9576),s=function(n,e,t,r){return new(t||(t=Promise))((function(o,c){function s(n){try{a(r.next(n))}catch(n){c(n)}}function u(n){try{a(r.throw(n))}catch(n){c(n)}}function a(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(s,u)}a((r=r.apply(n,e||[])).next())}))};var u=t(1794),a=t(7101);const i=function(){const[n,e]=(0,o.useState)("[[1, 3], [4, 6], [5, 8], [12, 17], [20, 23], [6, 9], [22, 25], [13, 15]]"),[t,i]=(0,o.useState)(""),l=(0,u.x)();return(0,o.useEffect)((()=>{(function(n){return s(this,void 0,void 0,(function*(){const e=JSON.parse(n);e.sort((([n],[e])=>n-e));const t=[];e.length&&t.push(e[0]);for(let n=1;n<e.length;n++){const[r,o]=e[n],[,c]=t[t.length-1];c+1>=r?o>c&&(t[t.length-1][1]=o):t.push([r,o])}return t}))})(n).then(a.d).then(i).catch(l)}),[n]),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.p,{value:n,onChange:e}),(0,r.jsx)("h3",{children:"Result"}),(0,r.jsx)("pre",{children:t})]})}},9576:(n,e,t)=>{t.d(e,{p:()=>a});var r=t(4848),o="_8540C",c="hmcSV",s=t(2153),u=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t};function a(n){var{onChange:e,value:t,onEnter:a,container:i}=n,l=u(n,["onChange","value","onEnter","container"]);return(0,r.jsxs)("div",Object.assign({className:o},i,{children:[(0,r.jsx)("input",Object.assign({type:"text"},l,{className:c,value:t,onChange:n=>null==e?void 0:e(n.target.value),onKeyDown:n=>("Enter"===n.key||"NumpadEnter"===n.key)&&(null==a?void 0:a(t))})),0!==t.length&&(0,r.jsx)(s.J,{onClick:n=>{var t,r;e(""),null===(r=null===(t=n.currentTarget)||void 0===t?void 0:t.previousElementSibling)||void 0===r||r.focus()}})]}))}}}]);
"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[575],{674:(e,n,t)=>{function r(...e){let n="";for(let t=0;t<e.length;t++){const r=e[t];"string"==typeof r&&(n+=" "+r)}return n}t.d(n,{cn:()=>r})},3874:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var r=t(4848),s="+ejF1",l=t(9e3),c="XIlYG",o="G06GB",i=t(674);function d({children:e,dirRtl:n}){return(0,r.jsx)("div",{className:(0,i.cn)(c,n&&o),children:(0,r.jsx)("div",{children:e})})}var a=t(2071);const u=(0,l.C)(["ltr","rtl"]);const h=function(){const[e,n]=u();return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Sidebar with using overflow"}),(0,r.jsx)("p",{children:"Направление (css direction)"}),n,(0,r.jsx)("div",{className:"w7fTx",children:(0,r.jsxs)(d,{dirRtl:"rtl"===e,children:[(0,r.jsx)("div",{className:"BC7Xz",children:(0,r.jsx)(a.r,{l:30})}),(0,r.jsx)("div",{className:s,children:(0,r.jsx)(a.r,{l:30})}),(0,r.jsx)("div",{className:s,children:(0,r.jsx)(a.r,{l:30})}),(0,r.jsx)("div",{className:s,children:(0,r.jsx)(a.r,{l:30})})]})})]})}},9644:(e,n,t)=>{t.d(n,{w:()=>o});var r=t(4848),s=t(6540),l=t(674),c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]])}return t};const o=s.forwardRef(((e,n)=>{var{height:t,total:o,renderer:i,onScroll:d,notScrollUp:a=!1,className:u}=e,h=c(e,["height","total","renderer","onScroll","notScrollUp","className"]);const[f,j]=(0,s.useState)(0),[v,x]=(0,s.useState)(0),g=(0,s.useRef)(null);(0,s.useLayoutEffect)((()=>{const e=new ResizeObserver((()=>x(Math.ceil(g.current.offsetHeight/t)+1)));return e.observe(g.current),()=>e.disconnect()}),[]),a||(0,s.useLayoutEffect)((()=>{g.current.scrollTop=0}),[o]);const p=[],b=Math.min(v,o);for(let e=0;e<b;e++)f+e<o&&p.push(i(f+e));const m=(o||1)*t;return(0,r.jsx)("div",Object.assign({},h,{className:(0,l.cn)("_9d+2H",u),ref:e=>{g.current=e,"function"==typeof n?n(e):n&&(n.current=e)},onScroll:e=>{null==d||d(e);const n=Math.floor(e.currentTarget.scrollTop/t);n<o&&j(n)},style:Object.assign({"--inner-height":m+"px"},h.style),children:(0,r.jsx)("div",{style:{top:f*t},children:p})}))}))},1509:(e,n,t)=>{function r(){return`rgb(${~~(255*Math.random())}, ${~~(255*Math.random())}, ${~~(255*Math.random())})`}t.d(n,{q:()=>r})},2071:(e,n,t)=>{t.d(n,{r:()=>c});var r=t(4848),s=t(1509);function l(e,n){var t;const l=[];for(let c=0;c<e;c++){const e=null==n?void 0:n(c),o={backgroundColor:(0,s.q)()},i=(0,r.jsx)("div",Object.assign({},e,{style:null!==(t=null==e?void 0:e.style)&&void 0!==t?t:o,children:c}),c);l.push(i)}return l}function c({l:e,renderer:n}){return(0,r.jsx)(r.Fragment,{children:l(e,n)})}},8756:(e,n,t)=>{t.d(n,{l:()=>j});var r=t(4848),s=t(6540),l="FHeup",c="_4cAiV",o="eKQV2",i=t(9644);function d(e){return e+1}function a(){const[e,n]=function(e=0){return(0,s.useReducer)(d,e)}();return n}var u=t(961);function h({onClose:e,children:n}){return u.createPortal((0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{position:"absolute",inset:0},onClick:e}),n]}),document.body)}function f({target:e,onClose:n,children:t}){const l=a();(0,s.useEffect)((()=>{const e=new ResizeObserver(l);return e.observe(document.body),()=>e.disconnect()}),[]);const c=e.getBoundingClientRect();return(0,r.jsx)(h,{onClose:n,children:(0,r.jsx)("div",{className:o,style:{left:c.left,top:c.top+c.height,width:c.width},onClick:n,children:t})})}function j({length:e,renderer:n,children:t,onSelect:o}){const[d,a]=(0,s.useState)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{className:l,onClick:e=>a(e.currentTarget),children:[t,(0,r.jsx)("div",{className:"ic",children:"keyboard_arrow_down"})]}),d&&(0,r.jsx)(f,{target:d,onClose:()=>a(null),children:(0,r.jsx)(i.w,{height:35,total:e,renderer:e=>(0,r.jsx)("button",{className:c,onClick:()=>o(e),children:n(e)},e)})})]})}},9e3:(e,n,t)=>{t.d(n,{C:()=>c});var r=t(4848),s=t(6540),l=t(8756);function c(e){const n=n=>String(e[n]);return(t=e[0])=>{const[c,o]=(0,s.useState)(t);return[c,(0,r.jsx)(l.l,{length:e.length,renderer:n,onSelect:n=>o(e[n]),children:String(c)})]}}}}]);
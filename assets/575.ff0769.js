"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[575],{9075:(e,r,t)=>{t.r(r),t.d(r,{default:()=>j});var n=t(4848),s="ghube",l=t(9e3),c=t(674),o=t(6540),i=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]])}return t};const a=(0,o.forwardRef)(((e,r)=>{var{children:t,className:s}=e,l=i(e,["children","className"]);return(0,n.jsx)("div",Object.assign({ref:r,className:(0,c.cn)("jtRSd",s)},l,{children:(0,n.jsx)("div",{children:t})}))}));var d=t(2071),u=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]])}return t};const h=(0,o.forwardRef)(((e,r)=>{var{className:t}=e,s=u(e,["className"]);return(0,n.jsx)("div",Object.assign({ref:r,className:(0,c.cn)("_048xk",t),"data-is-splitter":!0},s))})),f=(0,l.C)(["ltr","rtl"]);const j=function(){const[e,r]=f(),t=(0,c.cn)("dDs8F","rtl"===e&&s);return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Sidebar with using overflow"}),(0,n.jsx)("p",{children:"Направление (css direction)"}),r,(0,n.jsx)("div",{className:"_654w9",children:(0,n.jsxs)(a,{style:{direction:e},className:s,children:[(0,n.jsx)("div",{className:(0,c.cn)("e7SxM","rtl"===e&&s),children:(0,n.jsx)(d.r,{l:30})}),(0,n.jsx)(h,{}),(0,n.jsx)("div",{className:t,children:(0,n.jsx)(d.r,{l:30})}),(0,n.jsx)(h,{}),(0,n.jsx)("div",{className:t,children:(0,n.jsx)(d.r,{l:30})}),(0,n.jsx)(h,{}),(0,n.jsx)("div",{className:t,children:(0,n.jsx)(d.r,{l:30})}),(0,n.jsx)(h,{})]})})]})}},9644:(e,r,t)=>{t.d(r,{w:()=>o});var n=t(4848),s=t(6540),l=t(674),c=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)r.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]])}return t};const o=s.forwardRef(((e,r)=>{var{height:t,total:o,renderer:i,onScroll:a,notScrollUp:d=!1,className:u}=e,h=c(e,["height","total","renderer","onScroll","notScrollUp","className"]);const[f,j]=(0,s.useState)(0),[p,x]=(0,s.useState)(0),v=(0,s.useRef)(null);(0,s.useLayoutEffect)((()=>{const e=new ResizeObserver((()=>x(Math.ceil(v.current.offsetHeight/t)+1)));return e.observe(v.current),()=>e.disconnect()}),[]),d||(0,s.useLayoutEffect)((()=>{v.current.scrollTop=0}),[o]);const b=[],y=Math.min(p,o);for(let e=0;e<y;e++)f+e<o&&b.push(i(f+e));const g=(o||1)*t;return(0,n.jsx)("div",Object.assign({},h,{className:(0,l.cn)("cqvUz",u),ref:e=>{v.current=e,"function"==typeof r?r(e):r&&(r.current=e)},onScroll:e=>{null==a||a(e);const r=Math.floor(e.currentTarget.scrollTop/t);r<o&&j(r)},style:Object.assign({"--inner-height":g+"px"},h.style),children:(0,n.jsx)("div",{style:{top:f*t},children:b})}))}))},1509:(e,r,t)=>{function n(){return`rgb(${~~(255*Math.random())}, ${~~(255*Math.random())}, ${~~(255*Math.random())})`}t.d(r,{q:()=>n})},2071:(e,r,t)=>{t.d(r,{r:()=>c});var n=t(4848),s=t(1509);function l(e,r){var t;const l=[];for(let c=0;c<e;c++){const e=null==r?void 0:r(c),o={backgroundColor:(0,s.q)()},i=(0,n.jsx)("div",Object.assign({},e,{style:null!==(t=null==e?void 0:e.style)&&void 0!==t?t:o,children:c}),c);l.push(i)}return l}function c({l:e,renderer:r}){return(0,n.jsx)(n.Fragment,{children:l(e,r)})}},8679:(e,r,t)=>{t.d(r,{l:()=>f});var n=t(4848),s=t(6540),l="E1BwK",c="_4gtQV",o="ZJNrn",i=t(9644),a=t(2333),d=t(961);function u({onClose:e,children:r}){return d.createPortal((0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{position:"absolute",inset:0},onClick:e}),r]}),document.body)}function h({target:e,onClose:r,children:t}){const l=(0,a.CH)();(0,s.useEffect)((()=>{const e=new ResizeObserver(l);return e.observe(document.body),()=>e.disconnect()}),[]);const c=e.getBoundingClientRect();return(0,n.jsx)(u,{onClose:r,children:(0,n.jsx)("div",{className:o,style:{left:c.left,top:c.top+c.height,width:c.width},onClick:r,children:t})})}function f({length:e,renderer:r,children:t,onSelect:o}){const[a,d]=(0,s.useState)(null);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{className:l,onClick:e=>d(e.currentTarget),children:[t,(0,n.jsx)("div",{className:"ic",children:"keyboard_arrow_down"})]}),a&&(0,n.jsx)(h,{target:a,onClose:()=>d(null),children:(0,n.jsx)(i.w,{height:35,total:e,renderer:e=>(0,n.jsx)("button",{className:c,onClick:()=>o(e),children:r(e)},e)})})]})}},9e3:(e,r,t)=>{t.d(r,{C:()=>c});var n=t(4848),s=t(6540),l=t(8679);function c(e){const r=r=>String(e[r]);return(t=e[0])=>{const[c,o]=(0,s.useState)(t);return[c,(0,n.jsx)(l.l,{length:e.length,renderer:r,onSelect:r=>o(e[r]),children:String(c)})]}}}}]);
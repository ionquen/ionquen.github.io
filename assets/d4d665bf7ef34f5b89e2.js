"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[8780,413],{9978:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={item:"_5XLqR",sidebar:"jdRDr",main:"EDWdY",component:"s7cdr"}},674:(e,t,n)=>{function r(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];"string"==typeof r&&(t+=" "+r)}return t}n.d(t,{cn:()=>r})},5083:(e,t,n)=>{n.r(t),n.d(t,{Sidebar:()=>u});var r=n(4848),s=n(9978),l=n(9e3);const c={container:"_0GMEK",dirRtl:"teW4j"};var o=n(674);function i({children:e,dirRtl:t}){return(0,r.jsx)("div",{className:(0,o.cn)(c.container,t&&c.dirRtl),children:(0,r.jsx)("div",{children:e})})}var d=n(2071);const a=(0,l.C)(["ltr","rtl"]);function u(){const[e,t]=a();return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Sidebar with using overflow"}),(0,r.jsx)("p",{children:"Направление (css direction)"}),t,(0,r.jsx)("div",{className:s.default.component,children:(0,r.jsxs)(i,{dirRtl:"rtl"===e,children:[(0,r.jsx)("div",{className:s.default.main,children:(0,r.jsx)(d.r,{l:30})}),(0,r.jsx)("div",{className:s.default.sidebar,children:(0,r.jsx)(d.r,{l:30})}),(0,r.jsx)("div",{className:s.default.sidebar,children:(0,r.jsx)(d.r,{l:30})}),(0,r.jsx)("div",{className:s.default.sidebar,children:(0,r.jsx)(d.r,{l:30})})]})})]})}},9644:(e,t,n)=>{n.d(t,{w:()=>i});var r=n(4848),s=n(6540),l=n(674);const c="JQxcC";var o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};const i=s.forwardRef(((e,t)=>{var{height:n,total:i,renderer:d,onScroll:a,notScrollUp:u=!1,className:h}=e,f=o(e,["height","total","renderer","onScroll","notScrollUp","className"]);const[j,v]=(0,s.useState)(0),[x,b]=(0,s.useState)(0),m=(0,s.useRef)(null);(0,s.useLayoutEffect)((()=>{const e=new ResizeObserver((()=>b(Math.ceil(m.current.offsetHeight/n)+1)));return e.observe(m.current),()=>e.disconnect()}),[]),u||(0,s.useLayoutEffect)((()=>{m.current.scrollTop=0}),[i]);const g=[],p=Math.min(x,i);for(let e=0;e<p;e++)j+e<i&&g.push(d(j+e));const y=(i||1)*n;return(0,r.jsx)("div",Object.assign({},f,{className:(0,l.cn)(c,h),ref:e=>{m.current=e,"function"==typeof t?t(e):t&&(t.current=e)},onScroll:e=>{null==a||a(e);const t=Math.floor(e.currentTarget.scrollTop/n);t<i&&v(t)},style:Object.assign({"--inner-height":y+"px"},f.style),children:(0,r.jsx)("div",{style:{top:j*n},children:g})}))}))},1509:(e,t,n)=>{function r(){return`rgb(${~~(255*Math.random())}, ${~~(255*Math.random())}, ${~~(255*Math.random())})`}n.d(t,{q:()=>r})},2071:(e,t,n)=>{n.d(t,{r:()=>c});var r=n(4848),s=n(1509);function l(e,t){var n;const l=[];for(let c=0;c<e;c++){const e=null==t?void 0:t(c),o={backgroundColor:(0,s.q)()},i=(0,r.jsx)("div",Object.assign({},e,{style:null!==(n=null==e?void 0:e.style)&&void 0!==n?n:o,children:c}),c);l.push(i)}return l}function c({l:e,renderer:t}){return(0,r.jsx)(r.Fragment,{children:l(e,t)})}},8756:(e,t,n)=>{n.d(t,{l:()=>h});var r=n(4848),s=n(6540);const l={select__item:"EkR1D",select__button:"_2k3sh",select__list:"dbcIm"};var c=n(9644);function o(e){return e+1}function i(){const[e,t]=function(e=0){return(0,s.useReducer)(o,e)}();return t}var d=n(961);function a({onClose:e,children:t}){return d.createPortal((0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{position:"absolute",inset:0},onClick:e}),t]}),document.body)}function u({target:e,onClose:t,children:n}){const c=i();(0,s.useEffect)((()=>{const e=new ResizeObserver(c);return e.observe(document.body),()=>e.disconnect()}),[]);const o=e.getBoundingClientRect();return(0,r.jsx)(a,{onClose:t,children:(0,r.jsx)("div",{className:l.select__list,style:{left:o.left,top:o.top+o.height,width:o.width},onClick:t,children:n})})}function h({length:e,renderer:t,children:n,onSelect:o}){const[i,d]=(0,s.useState)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{className:l.select__button,onClick:e=>d(e.currentTarget),children:[n,(0,r.jsx)("div",{className:"ic",children:"keyboard_arrow_down"})]}),i&&(0,r.jsx)(u,{target:i,onClose:()=>d(null),children:(0,r.jsx)(c.w,{height:35,total:e,renderer:e=>(0,r.jsx)("button",{className:l.select__item,onClick:()=>o(e),children:t(e)},e)})})]})}},9e3:(e,t,n)=>{n.d(t,{C:()=>c});var r=n(4848),s=n(6540),l=n(8756);function c(e){const t=t=>String(e[t]);return(n=e[0])=>{const[c,o]=(0,s.useState)(n);return[c,(0,r.jsx)(l.l,{length:e.length,renderer:t,onSelect:t=>o(e[t]),children:String(c)})]}}}}]);
"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[2250,7527],{7148:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={item:"_0oWlk",scrollBlock:"Y8kVU"}},674:(e,t,n)=>{function r(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];"string"==typeof r&&(t+=" "+r)}return t}n.d(t,{cn:()=>r})},2804:(e,t,n)=>{n.r(t),n.d(t,{ScrollSnap:()=>p});var r=n(4848),l=n(7148),o=n(9e3),s=n(2071);const c=(0,o.C)(["mandatory","proximity"]),i=(0,o.C)(["center","start","end"]),a=(0,o.C)(["normal","always"]),u=["unset",0,"0 20px 0 0","0 20px","0 40px"],d=(0,o.C)(u),h=(0,o.C)(u);function p(){const[e,t]=c(),[n,o]=i(),[u,p]=a(),[f,g]=d(),[x,j]=h();return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Scroll snap type"}),t,(0,r.jsx)("p",{children:"Scroll snap align"}),o,(0,r.jsx)("p",{children:"Scroll snap stop"}),p,(0,r.jsx)("p",{children:"Scroll margin"}),g,(0,r.jsx)("p",{children:"Scroll padding"}),j,(0,r.jsx)("p",{children:"Scroll X Container"}),(0,r.jsx)("div",{className:l.default.scrollBlock,style:{scrollSnapType:"x "+e,scrollSnapAlign:n,scrollSnapStop:u,scrollPadding:x,scrollMargin:f},children:(0,r.jsx)(s.r,{l:10})})]})}},9644:(e,t,n)=>{n.d(t,{w:()=>i});var r=n(4848),l=n(6540),o=n(674);const s="LfcZf";var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};const i=l.forwardRef(((e,t)=>{var{height:n,total:i,renderer:a,onScroll:u,notScrollUp:d=!1,className:h}=e,p=c(e,["height","total","renderer","onScroll","notScrollUp","className"]);const[f,g]=(0,l.useState)(0),[x,j]=(0,l.useState)(0),v=(0,l.useRef)(null);(0,l.useLayoutEffect)((()=>{const e=new ResizeObserver((()=>j(Math.ceil(v.current.offsetHeight/n)+1)));return e.observe(v.current),()=>e.disconnect()}),[]),d||(0,l.useLayoutEffect)((()=>{v.current.scrollTop=0}),[i]);const y=[],m=Math.min(x,i);for(let e=0;e<m;e++)f+e<i&&y.push(a(f+e));const S=(i||1)*n;return(0,r.jsx)("div",Object.assign({},p,{className:(0,o.cn)(s,h),ref:e=>{v.current=e,"function"==typeof t?t(e):t&&(t.current=e)},onScroll:e=>{null==u||u(e);const t=Math.floor(e.currentTarget.scrollTop/n);t<i&&g(t)},style:Object.assign({"--inner-height":S+"px"},p.style),children:(0,r.jsx)("div",{style:{top:f*n},children:y})}))}))},1509:(e,t,n)=>{function r(){return`rgb(${~~(255*Math.random())}, ${~~(255*Math.random())}, ${~~(255*Math.random())})`}n.d(t,{q:()=>r})},2071:(e,t,n)=>{n.d(t,{r:()=>s});var r=n(4848),l=n(1509);function o(e,t){var n;const o=[];for(let s=0;s<e;s++){const e=null==t?void 0:t(s),c={backgroundColor:(0,l.q)()},i=(0,r.jsx)("div",Object.assign({},e,{style:null!==(n=null==e?void 0:e.style)&&void 0!==n?n:c,children:s}),s);o.push(i)}return o}function s({l:e,renderer:t}){return(0,r.jsx)(r.Fragment,{children:o(e,t)})}},8756:(e,t,n)=>{n.d(t,{l:()=>h});var r=n(4848),l=n(6540);const o={select__item:"vOU5e",select__button:"g3u3o",select__list:"l5XJN"};var s=n(9644);function c(e){return e+1}function i(){const[e,t]=function(e=0){return(0,l.useReducer)(c,e)}();return t}var a=n(961);function u({onClose:e,children:t}){return a.createPortal((0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{position:"absolute",inset:0},onClick:e}),t]}),document.body)}function d({target:e,onClose:t,children:n}){const s=i();(0,l.useEffect)((()=>{const e=new ResizeObserver(s);return e.observe(document.body),()=>e.disconnect()}),[]);const c=e.getBoundingClientRect();return(0,r.jsx)(u,{onClose:t,children:(0,r.jsx)("div",{className:o.select__list,style:{left:c.left,top:c.top+c.height,width:c.width},onClick:t,children:n})})}function h({length:e,renderer:t,children:n,onSelect:c}){const[i,a]=(0,l.useState)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{className:o.select__button,onClick:e=>a(e.currentTarget),children:[n,(0,r.jsx)("div",{className:"ic",children:"keyboard_arrow_down"})]}),i&&(0,r.jsx)(d,{target:i,onClose:()=>a(null),children:(0,r.jsx)(s.w,{height:35,total:e,renderer:e=>(0,r.jsx)("button",{className:o.select__item,onClick:()=>c(e),children:t(e)},e)})})]})}},9e3:(e,t,n)=>{n.d(t,{C:()=>s});var r=n(4848),l=n(6540),o=n(8756);function s(e){const t=t=>String(e[t]);return(n=e[0])=>{const[s,c]=(0,l.useState)(n);return[s,(0,r.jsx)(o.l,{length:e.length,renderer:t,onSelect:t=>c(e[t]),children:String(s)})]}}}}]);
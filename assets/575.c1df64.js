"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[575],{674:(e,n,r)=>{function t(...e){for(var n,r=0,t="",s=arguments.length;r<s;r++)(n=arguments[r])&&"string"==typeof n&&(t+=(t&&" ")+n);return t}r.d(n,{cn:()=>t})},3874:(e,n,r)=>{r.r(n),r.d(n,{default:()=>h});var t=r(4848),s="Db+cG",l=r(9e3),c="wipJt",o="bfV6y",i=r(674);function a({children:e,dirRtl:n}){return(0,t.jsx)("div",{className:(0,i.cn)(c,n&&o),children:(0,t.jsx)("div",{children:e})})}var d=r(2071);const u=(0,l.C)(["ltr","rtl"]);const h=function(){const[e,n]=u();return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Sidebar with using overflow"}),(0,t.jsx)("p",{children:"Направление (css direction)"}),n,(0,t.jsx)("div",{className:"WY0zm",children:(0,t.jsxs)(a,{dirRtl:"rtl"===e,children:[(0,t.jsx)("div",{className:"_4kzwy",children:(0,t.jsx)(d.r,{l:30})}),(0,t.jsx)("div",{className:s,children:(0,t.jsx)(d.r,{l:30})}),(0,t.jsx)("div",{className:s,children:(0,t.jsx)(d.r,{l:30})}),(0,t.jsx)("div",{className:s,children:(0,t.jsx)(d.r,{l:30})})]})})]})}},9644:(e,n,r)=>{r.d(n,{w:()=>o});var t=r(4848),s=r(6540),l=r(674),c=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(t=Object.getOwnPropertySymbols(e);s<t.length;s++)n.indexOf(t[s])<0&&Object.prototype.propertyIsEnumerable.call(e,t[s])&&(r[t[s]]=e[t[s]])}return r};const o=s.forwardRef(((e,n)=>{var{height:r,total:o,renderer:i,onScroll:a,notScrollUp:d=!1,className:u}=e,h=c(e,["height","total","renderer","onScroll","notScrollUp","className"]);const[f,j]=(0,s.useState)(0),[v,x]=(0,s.useState)(0),g=(0,s.useRef)(null);(0,s.useLayoutEffect)((()=>{const e=new ResizeObserver((()=>x(Math.ceil(g.current.offsetHeight/r)+1)));return e.observe(g.current),()=>e.disconnect()}),[]),d||(0,s.useLayoutEffect)((()=>{g.current.scrollTop=0}),[o]);const p=[],b=Math.min(v,o);for(let e=0;e<b;e++)f+e<o&&p.push(i(f+e));const m=(o||1)*r;return(0,t.jsx)("div",Object.assign({},h,{className:(0,l.cn)("BbN8O",u),ref:e=>{g.current=e,"function"==typeof n?n(e):n&&(n.current=e)},onScroll:e=>{null==a||a(e);const n=Math.floor(e.currentTarget.scrollTop/r);n<o&&j(n)},style:Object.assign({"--inner-height":m+"px"},h.style),children:(0,t.jsx)("div",{style:{top:f*r},children:p})}))}))},1509:(e,n,r)=>{function t(){return`rgb(${~~(255*Math.random())}, ${~~(255*Math.random())}, ${~~(255*Math.random())})`}r.d(n,{q:()=>t})},2071:(e,n,r)=>{r.d(n,{r:()=>c});var t=r(4848),s=r(1509);function l(e,n){var r;const l=[];for(let c=0;c<e;c++){const e=null==n?void 0:n(c),o={backgroundColor:(0,s.q)()},i=(0,t.jsx)("div",Object.assign({},e,{style:null!==(r=null==e?void 0:e.style)&&void 0!==r?r:o,children:c}),c);l.push(i)}return l}function c({l:e,renderer:n}){return(0,t.jsx)(t.Fragment,{children:l(e,n)})}},8756:(e,n,r)=>{r.d(n,{l:()=>j});var t=r(4848),s=r(6540),l="CgvX0",c="IIC6m",o="zQFO8",i=r(9644);function a(e){return e+1}function d(){const[e,n]=function(e=0){return(0,s.useReducer)(a,e)}();return n}var u=r(961);function h({onClose:e,children:n}){return u.createPortal((0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0},onClick:e}),n]}),document.body)}function f({target:e,onClose:n,children:r}){const l=d();(0,s.useEffect)((()=>{const e=new ResizeObserver(l);return e.observe(document.body),()=>e.disconnect()}),[]);const c=e.getBoundingClientRect();return(0,t.jsx)(h,{onClose:n,children:(0,t.jsx)("div",{className:o,style:{left:c.left,top:c.top+c.height,width:c.width},onClick:n,children:r})})}function j({length:e,renderer:n,children:r,onSelect:o}){const[a,d]=(0,s.useState)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("button",{className:l,onClick:e=>d(e.currentTarget),children:[r,(0,t.jsx)("div",{className:"ic",children:"keyboard_arrow_down"})]}),a&&(0,t.jsx)(f,{target:a,onClose:()=>d(null),children:(0,t.jsx)(i.w,{height:35,total:e,renderer:e=>(0,t.jsx)("button",{className:c,onClick:()=>o(e),children:n(e)},e)})})]})}},9e3:(e,n,r)=>{r.d(n,{C:()=>c});var t=r(4848),s=r(6540),l=r(8756);function c(e){const n=n=>String(e[n]);return(r=e[0])=>{const[c,o]=(0,s.useState)(r);return[c,(0,t.jsx)(l.l,{length:e.length,renderer:n,onSelect:n=>o(e[n]),children:String(c)})]}}}}]);
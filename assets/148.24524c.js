"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[148],{8124:(e,n,r)=>{r.r(n),r.d(n,{default:()=>h});var t=r(4848),l=r(9e3),o=r(2071);const s=(0,l.C)(["mandatory","proximity"]),c=(0,l.C)(["center","start","end"]),i=(0,l.C)(["normal","always"]),a=["unset",0,"0 20px 0 0","0 20px","0 40px"],d=(0,l.C)(a),u=(0,l.C)(a);const h=function(){const[e,n]=s(),[r,l]=c(),[a,h]=i(),[p,f]=d(),[g,x]=u();return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Scroll snap type"}),n,(0,t.jsx)("p",{children:"Scroll snap align"}),l,(0,t.jsx)("p",{children:"Scroll snap stop"}),h,(0,t.jsx)("p",{children:"Scroll margin"}),f,(0,t.jsx)("p",{children:"Scroll padding"}),x,(0,t.jsx)("p",{children:"Scroll X Container"}),(0,t.jsx)("div",{className:"Z30Bd",style:{scrollSnapType:"x "+e,scrollSnapAlign:r,scrollSnapStop:a,scrollPadding:g,scrollMargin:p},children:(0,t.jsx)(o.r,{l:10})})]})}},9644:(e,n,r)=>{r.d(n,{w:()=>c});var t=r(4848),l=r(6540),o=r(674),s=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]])}return r};const c=l.forwardRef(((e,n)=>{var{height:r,total:c,renderer:i,onScroll:a,notScrollUp:d=!1,className:u}=e,h=s(e,["height","total","renderer","onScroll","notScrollUp","className"]);const[p,f]=(0,l.useState)(0),[g,x]=(0,l.useState)(0),j=(0,l.useRef)(null);(0,l.useLayoutEffect)((()=>{const e=new ResizeObserver((()=>x(Math.ceil(j.current.offsetHeight/r)+1)));return e.observe(j.current),()=>e.disconnect()}),[]),d||(0,l.useLayoutEffect)((()=>{j.current.scrollTop=0}),[c]);const y=[],v=Math.min(g,c);for(let e=0;e<v;e++)p+e<c&&y.push(i(p+e));const S=(c||1)*r;return(0,t.jsx)("div",Object.assign({},h,{className:(0,o.cn)("_8HH4a",u),ref:e=>{j.current=e,"function"==typeof n?n(e):n&&(n.current=e)},onScroll:e=>{null==a||a(e);const n=Math.floor(e.currentTarget.scrollTop/r);n<c&&f(n)},style:Object.assign({"--inner-height":S+"px"},h.style),children:(0,t.jsx)("div",{style:{top:p*r},children:y})}))}))},1509:(e,n,r)=>{function t(){return`rgb(${~~(255*Math.random())}, ${~~(255*Math.random())}, ${~~(255*Math.random())})`}r.d(n,{q:()=>t})},2071:(e,n,r)=>{r.d(n,{r:()=>s});var t=r(4848),l=r(1509);function o(e,n){var r;const o=[];for(let s=0;s<e;s++){const e=null==n?void 0:n(s),c={backgroundColor:(0,l.q)()},i=(0,t.jsx)("div",Object.assign({},e,{style:null!==(r=null==e?void 0:e.style)&&void 0!==r?r:c,children:s}),s);o.push(i)}return o}function s({l:e,renderer:n}){return(0,t.jsx)(t.Fragment,{children:o(e,n)})}},8679:(e,n,r)=>{r.d(n,{l:()=>p});var t=r(4848),l=r(6540),o="ZliFF",s="xzINU",c="M0Jhf",i=r(9644),a=r(2333),d=r(961);function u({onClose:e,children:n}){return d.createPortal((0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0},onClick:e}),n]}),document.body)}function h({target:e,onClose:n,children:r}){const o=(0,a.CH)();(0,l.useEffect)((()=>{const e=new ResizeObserver(o);return e.observe(document.body),()=>e.disconnect()}),[]);const s=e.getBoundingClientRect();return(0,t.jsx)(u,{onClose:n,children:(0,t.jsx)("div",{className:c,style:{left:s.left,top:s.top+s.height,width:s.width},onClick:n,children:r})})}function p({length:e,renderer:n,children:r,onSelect:c}){const[a,d]=(0,l.useState)(null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("button",{className:o,onClick:e=>d(e.currentTarget),children:[r,(0,t.jsx)("div",{className:"ic",children:"keyboard_arrow_down"})]}),a&&(0,t.jsx)(h,{target:a,onClose:()=>d(null),children:(0,t.jsx)(i.w,{height:35,total:e,renderer:e=>(0,t.jsx)("button",{className:s,onClick:()=>c(e),children:n(e)},e)})})]})}},9e3:(e,n,r)=>{r.d(n,{C:()=>s});var t=r(4848),l=r(6540),o=r(8679);function s(e){const n=n=>String(e[n]);return(r=e[0])=>{const[s,c]=(0,l.useState)(r);return[s,(0,t.jsx)(o.l,{length:e.length,renderer:n,onSelect:n=>c(e[n]),children:String(s)})]}}}}]);
"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[148],{8124:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var r=t(4848),l=t(9e3),o=t(2071);const s=(0,l.C)(["mandatory","proximity"]),c=(0,l.C)(["center","start","end"]),i=(0,l.C)(["normal","always"]),a=["unset",0,"0 20px 0 0","0 20px","0 40px"],d=(0,l.C)(a),u=(0,l.C)(a);const h=function(){const[e,n]=s(),[t,l]=c(),[a,h]=i(),[p,f]=d(),[g,x]=u();return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Scroll snap type"}),n,(0,r.jsx)("p",{children:"Scroll snap align"}),l,(0,r.jsx)("p",{children:"Scroll snap stop"}),h,(0,r.jsx)("p",{children:"Scroll margin"}),f,(0,r.jsx)("p",{children:"Scroll padding"}),x,(0,r.jsx)("p",{children:"Scroll X Container"}),(0,r.jsx)("div",{className:"tbVHf",style:{scrollSnapType:"x "+e,scrollSnapAlign:t,scrollSnapStop:a,scrollPadding:g,scrollMargin:p},children:(0,r.jsx)(o.r,{l:10})})]})}},9644:(e,n,t)=>{t.d(n,{w:()=>c});var r=t(4848),l=t(6540),o=t(674),s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)n.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(t[r[l]]=e[r[l]])}return t};const c=l.forwardRef(((e,n)=>{var{height:t,total:c,renderer:i,onScroll:a,notScrollUp:d=!1,className:u}=e,h=s(e,["height","total","renderer","onScroll","notScrollUp","className"]);const[p,f]=(0,l.useState)(0),[g,x]=(0,l.useState)(0),j=(0,l.useRef)(null);(0,l.useLayoutEffect)((()=>{const e=new ResizeObserver((()=>x(Math.ceil(j.current.offsetHeight/t)+1)));return e.observe(j.current),()=>e.disconnect()}),[]),d||(0,l.useLayoutEffect)((()=>{j.current.scrollTop=0}),[c]);const y=[],b=Math.min(g,c);for(let e=0;e<b;e++)p+e<c&&y.push(i(p+e));const v=(c||1)*t;return(0,r.jsx)("div",Object.assign({},h,{className:(0,o.cn)("FaAe7",u),ref:e=>{j.current=e,"function"==typeof n?n(e):n&&(n.current=e)},onScroll:e=>{null==a||a(e);const n=Math.floor(e.currentTarget.scrollTop/t);n<c&&f(n)},style:Object.assign({"--inner-height":v+"px"},h.style),children:(0,r.jsx)("div",{style:{top:p*t},children:y})}))}))},1509:(e,n,t)=>{function r(){return`rgb(${~~(255*Math.random())}, ${~~(255*Math.random())}, ${~~(255*Math.random())})`}t.d(n,{q:()=>r})},2071:(e,n,t)=>{t.d(n,{r:()=>s});var r=t(4848),l=t(1509);function o(e,n){var t;const o=[];for(let s=0;s<e;s++){const e=null==n?void 0:n(s),c={backgroundColor:(0,l.q)()},i=(0,r.jsx)("div",Object.assign({},e,{style:null!==(t=null==e?void 0:e.style)&&void 0!==t?t:c,children:s}),s);o.push(i)}return o}function s({l:e,renderer:n}){return(0,r.jsx)(r.Fragment,{children:o(e,n)})}},8679:(e,n,t)=>{t.d(n,{l:()=>p});var r=t(4848),l=t(6540),o="_3XONK",s="aoHNY",c="APDMX",i=t(9644),a=t(2333),d=t(961);function u({onClose:e,children:n}){return d.createPortal((0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{position:"absolute",inset:0},onClick:e}),n]}),document.body)}function h({target:e,onClose:n,children:t}){const o=(0,a.CH)();(0,l.useEffect)((()=>{const e=new ResizeObserver(o);return e.observe(document.body),()=>e.disconnect()}),[]);const s=e.getBoundingClientRect();return(0,r.jsx)(u,{onClose:n,children:(0,r.jsx)("div",{className:c,style:{left:s.left,top:s.top+s.height,width:s.width},onClick:n,children:t})})}function p({length:e,renderer:n,children:t,onSelect:c}){const[a,d]=(0,l.useState)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{className:o,onClick:e=>d(e.currentTarget),children:[t,(0,r.jsx)("div",{className:"ic",children:"keyboard_arrow_down"})]}),a&&(0,r.jsx)(h,{target:a,onClose:()=>d(null),children:(0,r.jsx)(i.w,{height:35,total:e,renderer:e=>(0,r.jsx)("button",{className:s,onClick:()=>c(e),children:n(e)},e)})})]})}},9e3:(e,n,t)=>{t.d(n,{C:()=>s});var r=t(4848),l=t(6540),o=t(8679);function s(e){const n=n=>String(e[n]);return(t=e[0])=>{const[s,c]=(0,l.useState)(t);return[s,(0,r.jsx)(o.l,{length:e.length,renderer:n,onSelect:n=>c(e[n]),children:String(s)})]}}}}]);
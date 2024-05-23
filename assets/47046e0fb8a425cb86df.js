"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[148,64,867,842,431,575,612,692],{7088:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t={item:"ydkdS",animBase:"+932h",viewAnimation:"InXX-",scrollAnimation:"Kp8TX",KScrollAnimation:"QaE8R"}},5580:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t={item:"OjiS8",scrollBlock:"guNW3"}},6767:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t={item:"lX9jg",sidebar:"P2J5N",main:"t63Tk",container:"R3u+T",body:"tarix"}},6332:(e,n,r)=>{r.r(n)},674:(e,n,r)=>{function t(...e){return e.filter((e=>"string"==typeof e)).join(" ")}r.d(n,{cn:()=>t})},8638:(e,n,r)=>{r.r(n),r.d(n,{default:()=>i});var t=r(4848),l=r(7088),s=r(836),c=r(5075),o=r(2008);function i(){return(0,t.jsxs)("div",{children:[(0,t.jsx)(s.ScrollSnap,{}),(0,t.jsx)("p",{children:"Scroll Timeline Animation"}),(0,t.jsx)("div",Object.assign({className:l.default.scrollAnimation},{children:(0,t.jsx)("div",{style:{backgroundColor:(0,o.randomColor)()}})})),(0,t.jsx)("p",{children:"View Timeline Animation"}),(0,t.jsx)("div",Object.assign({className:l.default.viewAnimation},{children:(0,o.fullArr)(40).map(((e,n)=>(0,t.jsx)("div",Object.assign({style:{backgroundColor:(0,o.randomColor)(),animationName:"KOpacityScrollAnimation"}},{children:n}),n)))})),(0,t.jsx)(c.ScrollSidebar,{})]})}r(6332)},836:(e,n,r)=>{r.r(n),r.d(n,{ScrollSnap:()=>p});var t=r(4848),l=r(6540),s=r(4345),c=r(5580),o=r(2008);function i(e){const n=n=>e[n];return(r=e[0])=>{const[c,o]=(0,l.useState)(r);return[c,(0,t.jsx)(s.l,Object.assign({length:e.length,renderer:n,onSelect:n=>o(e[n])},{children:c}))]}}const a=i(["mandatory","proximity"]),d=i(["center","start","end"]),u=i(["normal","always"]),h=["unset",0,"0 20px 0 0","0 20px","0 40px"],f=i(h),j=i(h);function p(){const[e,n]=a(),[r,l]=d(),[s,i]=u(),[h,p]=f(),[m,g]=j();return(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"Scroll snap type"}),n,(0,t.jsx)("p",{children:"Scroll snap align"}),l,(0,t.jsx)("p",{children:"Scroll snap stop"}),i,(0,t.jsx)("p",{children:"Scroll margin"}),p,(0,t.jsx)("p",{children:"Scroll padding"}),g,(0,t.jsx)("p",{children:"Scroll X Container"}),(0,t.jsx)("div",Object.assign({className:c.default.scrollBlock,style:{scrollSnapType:"x "+e,scrollSnapAlign:r,scrollSnapStop:s,scrollPadding:m,scrollMargin:h}},{children:(0,o.fullArrDivs)(10)}))]})}},5075:(e,n,r)=>{r.r(n),r.d(n,{ScrollSidebar:()=>c});var t=r(4848),l=r(6767),s=r(2008);function c(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:"Sidebar with using overflow"}),(0,t.jsx)("div",Object.assign({className:l.default.container},{children:(0,t.jsxs)("div",Object.assign({className:l.default.body},{children:[(0,t.jsx)("div",Object.assign({className:l.default.main},{children:(0,s.fullArrDivs)(30)})),(0,t.jsx)("div",Object.assign({className:l.default.sidebar},{children:(0,s.fullArrDivs)(30)}))]}))}))]})}},2008:(e,n,r)=>{r.r(n),r.d(n,{fullArr:()=>l,fullArrDivs:()=>c,randomColor:()=>s});var t=r(4848);function l(e){return Array(e).fill(null,0,e)}function s(){return`rgb(${~~(255*Math.random())}, ${~~(255*Math.random())}, ${~~(255*Math.random())})`}function c(e){return l(e).map(((e,n)=>(0,t.jsx)("div",Object.assign({style:{backgroundColor:s()}},{children:n}),n)))}},4345:(e,n,r)=>{r.d(n,{l:()=>h});var t=r(4848),l=r(6540);function s(e){return e+1}function c(){const[e,n]=function(e=0){return(0,l.useReducer)(s,e)}();return n}var o=r(961);function i({onClose:e,children:n}){return o.createPortal((0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{position:"absolute",inset:0},onClick:e}),n]}),document.body)}const a={select__item:"_8S6oh",select__button:"QI8pu",select__list:"rSNOJ"};var d=r(9644);const u=(e,n)=>{var r;return null!==(r=null==n?void 0:n.target)&&void 0!==r?r:null};function h({length:e,renderer:n,children:r,onSelect:s}){const[c,o]=(0,l.useReducer)(u,null);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("button",Object.assign({className:a.select__button,onClick:o},{children:[r,(0,t.jsx)("div",Object.assign({className:"ic"},{children:"keyboard_arrow_down"}))]})),c&&(0,t.jsx)(f,Object.assign({target:c,onClose:()=>o(null)},{children:(0,t.jsx)(d.w,{height:35,total:e,renderer:e=>(0,t.jsx)("button",Object.assign({className:a.select__item,onClick:()=>s(e)},{children:n(e)}),e)})}))]})}function f({target:e,onClose:n,children:r}){const s=c();(0,l.useEffect)((()=>{const e=new ResizeObserver(s);return e.observe(document.body),()=>e.disconnect()}),[]);const o=e.getBoundingClientRect();return(0,t.jsx)(i,Object.assign({onClose:n},{children:(0,t.jsx)("div",Object.assign({className:a.select__list,style:{left:o.left,top:o.top+o.height,width:o.width},onClick:n},{children:r}))}))}},9644:(e,n,r)=>{r.d(n,{w:()=>i});var t=r(4848),l=r(6540),s=r(674);const c="ajlyt";var o=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)n.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(r[t[l]]=e[t[l]])}return r};const i=l.forwardRef(((e,n)=>{var{height:r,total:i,renderer:a,onScroll:d,notScrollUp:u=!1,className:h}=e,f=o(e,["height","total","renderer","onScroll","notScrollUp","className"]);const[j,p]=(0,l.useState)(0),[m,g]=(0,l.useState)(0),b=(0,l.useRef)(null);(0,l.useLayoutEffect)((()=>{const e=new ResizeObserver((()=>g(Math.ceil(b.current.offsetHeight/r)+1)));return e.observe(b.current),()=>e.disconnect()}),[]),u||(0,l.useLayoutEffect)((()=>{b.current.scrollTop=0}),[i]);const x=[],v=Math.min(m,i);for(let e=0;e<v;e++)j+e<i&&x.push(a(j+e));const S=(i||1)*r;return(0,t.jsx)("div",Object.assign({},f,{className:(0,s.cn)(c,h),ref:e=>{b.current=e,"function"==typeof n?n(e):n&&(n.current=e)},onScroll:e=>{null==d||d(e);const n=Math.floor(e.currentTarget.scrollTop/r);n<i&&p(n)},style:{"--inner-height":S+"px"}},{children:(0,t.jsx)("div",Object.assign({style:{top:j*r}},{children:x}))}))}))}}]);
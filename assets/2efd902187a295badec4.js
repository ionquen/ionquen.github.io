"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[6148,7262,1643,9277,6838,5646,3035,1588,2773,6606,8860,9789,9161,4066,3132,6653,2884,6106,4629],{7138:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={section__container:"Z8cu0"}},5695:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={item:"TcXJs",bottomSection__content:"avf5U",delimiter:"SJ+Zh",bottomSection__container:"_6suEj",bottomSection__body:"_6Oz-M",bottomSection__header:"_21akq",bottomSection__footer:"lszp-"}},2670:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={item:"MAxbl",backgroundSection:"FXR9u",pageSection:"MCWg8"}},7127:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={container:"_4PZB5",dirRtl:"sLlPG"}},7664:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={item:"fAckP",sidebar:"OHrF3",main:"Zz5nu",component:"_96O7-"}},7863:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={item:"wyixb",scrollBlock:"ALO1W"}},9908:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={item:"trA1D",animBase:"qOSrG",scrollAnimation:"Vxp+d",KScrollAnimation:"_5Htab"}},4204:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r={item:"ABpVA",animBase:"r0DCD",viewAnimation:"bLBGr",scrollAnimation:"tqXqV",KScrollAnimation:"lPTXY"}},890:(e,n,t)=>{t.r(n)},674:(e,n,t)=>{function r(...e){let n="";for(let t=0;t<e.length;t++){const r=e[t];"string"==typeof r&&(n+=" "+r)}return n}t.d(n,{cn:()=>r})},8638:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});var r=t(4848),o=t(5971),l=t(6210),c=t(6902),i=t(1466),s=t(9858);function a(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(o.ScrollSnap,{}),(0,r.jsx)(c.TimelineAnimation,{}),(0,r.jsx)(i.ViewAnimation,{}),(0,r.jsx)(l.Sidebar,{}),(0,r.jsx)(s.BottomSection,{})]})}},3874:(e,n,t)=>{t.r(n),t.d(n,{SectionContainer:()=>a,SectionContainerContext:()=>s});var r=t(4848),o=t(6540),l=t(7138),c=t(674),i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};const s=(0,o.createContext)({scrollTo:()=>{}});function a(e){var{children:n,className:t}=e,a=i(e,["children","className"]);const d=(0,o.useRef)(null),u={scrollTo:()=>{d.current.scrollTop>0?d.current.scrollTo({top:0,behavior:"smooth"}):d.current.scrollTo({top:999,behavior:"smooth"})}};return(0,r.jsx)("div",Object.assign({className:(0,c.cn)(l.default.section__container,t)},a,{children:(0,r.jsx)("div",{ref:d,children:(0,r.jsx)(s.Provider,{value:u,children:n})})}))}},7721:(e,n,t)=>{t.r(n),t.d(n,{PopupBody:()=>s});var r=t(4848),o=t(6540),l=t(9596),c=t(5695),i=t(3874);function s(){const{scrollTo:e}=(0,o.useContext)(i.SectionContainerContext);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:c.default.bottomSection__container,children:[(0,r.jsx)("div",{className:c.default.bottomSection__header,onClick:e,children:"HEADER"}),(0,r.jsxs)("div",{className:c.default.bottomSection__body,children:[(0,r.jsx)("div",{className:c.default.bottomSection__content,children:(0,l.fullArrDivs)(60)}),(0,r.jsx)("div",{className:c.default.bottomSection__footer,children:"FOOTER"})]})]})})}},9858:(e,n,t)=>{t.r(n),t.d(n,{BottomSection:()=>s});var r=t(4848),o=t(2670),l=t(9596),c=t(3874),i=t(7721);function s(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Bottom Section"}),(0,r.jsxs)(c.SectionContainer,{className:o.default.pageSection,children:[(0,r.jsx)(a,{}),(0,r.jsx)(i.PopupBody,{})]})]})}function a(){return(0,r.jsx)("div",{className:o.default.backgroundSection,children:(0,l.fullArrDivs)(60)})}},9596:(e,n,t)=>{t.r(n),t.d(n,{fullArr:()=>o,fullArrDivs:()=>c,randomColor:()=>l});var r=t(4848);function o(e){return Array(e).fill(null,0,e)}function l(){return`rgb(${~~(255*Math.random())}, ${~~(255*Math.random())}, ${~~(255*Math.random())})`}function c(e){return o(e).map(((e,n)=>(0,r.jsx)("div",{style:{backgroundColor:l()},children:n},n)))}},2723:(e,n,t)=>{t.r(n),t.d(n,{ScrollContainer:()=>c});var r=t(4848),o=t(7127),l=t(674);function c({children:e,dirRtl:n}){return(0,r.jsx)("div",{className:(0,l.cn)(o.default.container,n&&o.default.dirRtl),children:(0,r.jsx)("div",{children:e})})}},6210:(e,n,t)=>{t.r(n),t.d(n,{Sidebar:()=>a});var r=t(4848),o=t(7664),l=t(9596),c=t(9e3),i=t(2723);const s=(0,c.C)(["ltr","rtl"]);function a(){const[e,n]=s();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Sidebar with using overflow"}),(0,r.jsx)("p",{children:"Направление (css direction)"}),n,(0,r.jsx)("div",{className:o.default.component,children:(0,r.jsxs)(i.ScrollContainer,{dirRtl:"rtl"===e,children:[(0,r.jsx)("div",{className:o.default.main,children:(0,l.fullArrDivs)(30)}),(0,r.jsx)("div",{className:o.default.sidebar,children:(0,l.fullArrDivs)(30)}),(0,r.jsx)("div",{className:o.default.sidebar,children:(0,l.fullArrDivs)(30)}),(0,r.jsx)("div",{className:o.default.sidebar,children:(0,l.fullArrDivs)(30)})]})})]})}},5971:(e,n,t)=>{t.r(n),t.d(n,{ScrollSnap:()=>m});var r=t(4848),o=t(7863),l=t(9596),c=t(9e3);const i=(0,c.C)(["mandatory","proximity"]),s=(0,c.C)(["center","start","end"]),a=(0,c.C)(["normal","always"]),d=["unset",0,"0 20px 0 0","0 20px","0 40px"],u=(0,c.C)(d),f=(0,c.C)(d);function m(){const[e,n]=i(),[t,c]=s(),[d,m]=a(),[h,p]=u(),[x,j]=f();return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Scroll snap type"}),n,(0,r.jsx)("p",{children:"Scroll snap align"}),c,(0,r.jsx)("p",{children:"Scroll snap stop"}),m,(0,r.jsx)("p",{children:"Scroll margin"}),p,(0,r.jsx)("p",{children:"Scroll padding"}),j,(0,r.jsx)("p",{children:"Scroll X Container"}),(0,r.jsx)("div",{className:o.default.scrollBlock,style:{scrollSnapType:"x "+e,scrollSnapAlign:t,scrollSnapStop:d,scrollPadding:x,scrollMargin:h},children:(0,l.fullArrDivs)(10)})]})}},6902:(e,n,t)=>{t.r(n),t.d(n,{TimelineAnimation:()=>c});var r=t(4848),o=t(9596),l=t(9908);function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Scroll Timeline Animation"}),(0,r.jsx)("div",{className:l.default.scrollAnimation,children:(0,r.jsx)("div",{style:{backgroundColor:(0,o.randomColor)()}})})]})}},1466:(e,n,t)=>{t.r(n),t.d(n,{ViewAnimation:()=>c});var r=t(4848),o=t(9596),l=t(4204);function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"View Timeline Animation"}),(0,r.jsx)("div",{className:l.default.viewAnimation,children:(0,o.fullArr)(40).map(((e,n)=>(0,r.jsx)("div",{style:{backgroundColor:(0,o.randomColor)(),animationName:"KOpacityScrollAnimation"},children:n},n)))})]})}t(890)},9644:(e,n,t)=>{t.d(n,{w:()=>s});var r=t(4848),o=t(6540),l=t(674);const c="WsrlZ";var i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};const s=o.forwardRef(((e,n)=>{var{height:t,total:s,renderer:a,onScroll:d,notScrollUp:u=!1,className:f}=e,m=i(e,["height","total","renderer","onScroll","notScrollUp","className"]);const[h,p]=(0,o.useState)(0),[x,j]=(0,o.useState)(0),v=(0,o.useRef)(null);(0,o.useLayoutEffect)((()=>{const e=new ResizeObserver((()=>j(Math.ceil(v.current.offsetHeight/t)+1)));return e.observe(v.current),()=>e.disconnect()}),[]),u||(0,o.useLayoutEffect)((()=>{v.current.scrollTop=0}),[s]);const S=[],b=Math.min(x,s);for(let e=0;e<b;e++)h+e<s&&S.push(a(h+e));const g=(s||1)*t;return(0,r.jsx)("div",Object.assign({},m,{className:(0,l.cn)(c,f),ref:e=>{v.current=e,"function"==typeof n?n(e):n&&(n.current=e)},onScroll:e=>{null==d||d(e);const n=Math.floor(e.currentTarget.scrollTop/t);n<s&&p(n)},style:{"--inner-height":g+"px"},children:(0,r.jsx)("div",{style:{top:h*t},children:S})}))}))},8756:(e,n,t)=>{t.d(n,{l:()=>f});var r=t(4848),o=t(6540);const l={select__item:"_81vzs",select__button:"_9KKpb",select__list:"A3o93"};var c=t(9644);function i(e){return e+1}function s(){const[e,n]=function(e=0){return(0,o.useReducer)(i,e)}();return n}var a=t(961);function d({onClose:e,children:n}){return a.createPortal((0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{position:"absolute",inset:0},onClick:e}),n]}),document.body)}function u({target:e,onClose:n,children:t}){const c=s();(0,o.useEffect)((()=>{const e=new ResizeObserver(c);return e.observe(document.body),()=>e.disconnect()}),[]);const i=e.getBoundingClientRect();return(0,r.jsx)(d,{onClose:n,children:(0,r.jsx)("div",{className:l.select__list,style:{left:i.left,top:i.top+i.height,width:i.width},onClick:n,children:t})})}function f({length:e,renderer:n,children:t,onSelect:i}){const[s,a]=(0,o.useState)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{className:l.select__button,onClick:e=>a(e.currentTarget),children:[t,(0,r.jsx)("div",{className:"ic",children:"keyboard_arrow_down"})]}),s&&(0,r.jsx)(u,{target:s,onClose:()=>a(null),children:(0,r.jsx)(c.w,{height:35,total:e,renderer:e=>(0,r.jsx)("button",{className:l.select__item,onClick:()=>i(e),children:n(e)},e)})})]})}},9e3:(e,n,t)=>{t.d(n,{C:()=>c});var r=t(4848),o=t(6540),l=t(8756);function c(e){const n=n=>String(e[n]);return(t=e[0])=>{const[c,i]=(0,o.useState)(t);return[c,(0,r.jsx)(l.l,{length:e.length,renderer:n,onSelect:n=>i(e[n]),children:String(c)})]}}}}]);
"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[390],{674:(e,t,n)=>{function s(...e){let t="";for(let n=0;n<e.length;n++){const s=e[n];"string"==typeof s&&(t+=" "+s)}return t}n.d(t,{cn:()=>s})},390:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var s=n(4848),r=n(7767);const l={comp__container:"a0NcC",comp__body:"e-fxK"};var c=n(6540),o=n(9605);const i={titles:[{id:"0template",title:"Шаблон",tags:["шаблон"]},{id:"animations",title:"Css анимации и иллюстрации",tags:["анимация","css"]},{id:"games_of_the_future_1",title:'Задача "Убираем со стола"',tags:["задача"]},{id:"games_of_the_future_2",title:"Задача массив интервалов",tags:["задача"]},{id:"regexp",title:"Регулярные выражения",tags:["js"]},{id:"scroll",title:"Css scroll",tags:["css"]},{id:"tree_render",title:"Программа TreeRender",tags:["задача"]}],tags:[["задача",3],["css",2],["шаблон",1],["анимация",1],["js",1]]};var a=n(9644),d=n(4976),u=n(8756);const h={nav__item:"wlO80",nav__button:"ozpQQ",nav:"KPQLN",nav_displayed:"ff7Tw",nav__title:"Cqv8J"};var f=n(674);const _=[[null],...i.tags];function v(){const[e,t]=(0,c.useState)(null),[n,r]=(0,c.useState)(!1),l=(0,c.useMemo)((()=>null===e?i.titles:i.titles.filter((({tags:t})=>t.includes(e)))),[e]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:(0,f.cn)(h.nav,n&&h.nav_displayed),children:[(0,s.jsx)("div",{className:h.nav__title,children:"Компоненты"}),(0,s.jsx)("div",{children:(0,s.jsx)(u.l,{length:_.length,renderer:g,onSelect:e=>t(_[e][0]),children:null!=e?e:"Тег"})}),(0,s.jsx)(a.w,{height:65,total:l.length,renderer:e=>{const{title:t,tags:n,id:c}=l[e];return(0,s.jsxs)(d.N_,{className:h.nav__item,to:c,onClick:()=>r(!1),children:[(0,s.jsx)("div",{title:t,children:t}),n&&(0,s.jsx)("div",{children:n.map((e=>(0,s.jsx)("span",{children:e},e)))})]},c)}})]}),(0,s.jsx)("button",{className:(0,f.cn)("ic",h.nav__button),onClick:()=>r((e=>!e)),children:"menu_open"})]})}const g=e=>{const[t,n]=_[e];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:null!=t?t:"Очистить"}),n&&(0,s.jsx)("div",{children:n})]})};function j(){return(0,s.jsxs)("div",{className:l.comp__container,children:[(0,s.jsx)("div",{className:l.comp__body,children:(0,s.jsx)(c.Suspense,{fallback:(0,s.jsx)(o.a,{}),children:(0,s.jsx)(r.sv,{})})}),(0,s.jsx)(v,{})]})}},9644:(e,t,n)=>{n.d(t,{w:()=>i});var s=n(4848),r=n(6540),l=n(674);const c="WsrlZ";var o=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n};const i=r.forwardRef(((e,t)=>{var{height:n,total:i,renderer:a,onScroll:d,notScrollUp:u=!1,className:h}=e,f=o(e,["height","total","renderer","onScroll","notScrollUp","className"]);const[_,v]=(0,r.useState)(0),[g,j]=(0,r.useState)(0),p=(0,r.useRef)(null);(0,r.useLayoutEffect)((()=>{const e=new ResizeObserver((()=>j(Math.ceil(p.current.offsetHeight/n)+1)));return e.observe(p.current),()=>e.disconnect()}),[]),u||(0,r.useLayoutEffect)((()=>{p.current.scrollTop=0}),[i]);const m=[],x=Math.min(g,i);for(let e=0;e<x;e++)_+e<i&&m.push(a(_+e));const b=(i||1)*n;return(0,s.jsx)("div",Object.assign({},f,{className:(0,l.cn)(c,h),ref:e=>{p.current=e,"function"==typeof t?t(e):t&&(t.current=e)},onScroll:e=>{null==d||d(e);const t=Math.floor(e.currentTarget.scrollTop/n);t<i&&v(t)},style:{"--inner-height":b+"px"},children:(0,s.jsx)("div",{style:{top:_*n},children:m})}))}))},8756:(e,t,n)=>{n.d(t,{l:()=>h});var s=n(4848),r=n(6540);const l={select__item:"_81vzs",select__button:"_9KKpb",select__list:"A3o93"};var c=n(9644);function o(e){return e+1}function i(){const[e,t]=function(e=0){return(0,r.useReducer)(o,e)}();return t}var a=n(961);function d({onClose:e,children:t}){return a.createPortal((0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"absolute",inset:0},onClick:e}),t]}),document.body)}function u({target:e,onClose:t,children:n}){const c=i();(0,r.useEffect)((()=>{const e=new ResizeObserver(c);return e.observe(document.body),()=>e.disconnect()}),[]);const o=e.getBoundingClientRect();return(0,s.jsx)(d,{onClose:t,children:(0,s.jsx)("div",{className:l.select__list,style:{left:o.left,top:o.top+o.height,width:o.width},onClick:t,children:n})})}function h({length:e,renderer:t,children:n,onSelect:o}){const[i,a]=(0,r.useState)(null);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("button",{className:l.select__button,onClick:e=>a(e.currentTarget),children:[n,(0,s.jsx)("div",{className:"ic",children:"keyboard_arrow_down"})]}),i&&(0,s.jsx)(u,{target:i,onClose:()=>a(null),children:(0,s.jsx)(c.w,{height:35,total:e,renderer:e=>(0,s.jsx)("button",{className:l.select__item,onClick:()=>o(e),children:t(e)},e)})})]})}}}]);
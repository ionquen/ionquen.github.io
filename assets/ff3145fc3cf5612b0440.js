"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[2931],{674:(e,t,n)=>{function s(...e){let t="";for(let n=0;n<e.length;n++){const s=e[n];"string"==typeof s&&(t+=" "+s)}return t}n.d(t,{cn:()=>s})},2931:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var s=n(4848),l=n(7767);const r={comp__container:"kULzC"};var c=n(6540),i=n(9605);const o={titles:[{id:"0template",title:"Шаблон",tags:["шаблон"]},{id:"animations",title:"Css анимации и иллюстрации",tags:["анимация","css"]},{id:"games_of_the_future_1",title:'Задача "Убираем со стола"',tags:["задача"]},{id:"games_of_the_future_2",title:"Задача массив интервалов",tags:["задача"]},{id:"regexp",title:"Регулярные выражения",tags:["js"]},{id:"scroll-animation",title:"Scroll timeline animation",tags:["css","scroll"]},{id:"scroll-section",title:"Scrolled section",tags:["css","scroll"]},{id:"scroll-sidebar",title:"Scrolled sidebar",tags:["css","scroll"]},{id:"scroll",title:"Css scroll",tags:["css","scroll"]},{id:"tree_render",title:"Программа TreeRender",tags:["задача"]},{id:"view-animation",title:"View timeline animation",tags:["css","scroll"]}],tags:[["css",6],["scroll",5],["задача",3],["шаблон",1],["анимация",1],["js",1]]};var a=n(9644),d=n(4976),u=n(8756);const h={nav__item:"y0mUK",nav__button:"QEb+J",nav:"_8ncny",nav_displayed:"o4Ev3",nav__title:"_68Yzu"};var f=n(674);const g=[[null],...o.tags];function v(){const[e,t]=(0,c.useState)(null),[n,l]=(0,c.useState)(!1),r=(0,c.useMemo)((()=>null===e?o.titles:o.titles.filter((({tags:t})=>t.includes(e)))),[e]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:(0,f.cn)(h.nav,n&&h.nav_displayed),children:[(0,s.jsx)("div",{className:h.nav__title,children:"Компоненты"}),(0,s.jsx)("div",{children:(0,s.jsx)(u.l,{length:g.length,renderer:_,onSelect:e=>t(g[e][0]),children:null!=e?e:"Тег"})}),(0,s.jsx)(a.w,{height:65,total:r.length,renderer:e=>{const{title:t,tags:n,id:c}=r[e];return(0,s.jsxs)(d.N_,{className:h.nav__item,to:c,onClick:()=>l(!1),children:[(0,s.jsx)("div",{title:t,children:t}),n&&(0,s.jsx)("div",{children:n.map((e=>(0,s.jsx)("span",{children:e},e)))})]},c)}})]}),(0,s.jsx)("button",{className:(0,f.cn)("ic",h.nav__button),onClick:()=>l((e=>!e)),children:"menu_open"})]})}const _=e=>{const[t,n]=g[e];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:null!=t?t:"Очистить"}),n&&(0,s.jsx)("div",{children:n})]})};function m(){return(0,s.jsxs)("div",{className:r.comp__container,children:[(0,s.jsx)("div",{className:"flex-auto",children:(0,s.jsx)(c.Suspense,{fallback:(0,s.jsx)(i.a,{}),children:(0,s.jsx)(l.sv,{})})}),(0,s.jsx)(v,{})]})}},9644:(e,t,n)=>{n.d(t,{w:()=>o});var s=n(4848),l=n(6540),r=n(674);const c="LfcZf";var i=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(s=Object.getOwnPropertySymbols(e);l<s.length;l++)t.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(n[s[l]]=e[s[l]])}return n};const o=l.forwardRef(((e,t)=>{var{height:n,total:o,renderer:a,onScroll:d,notScrollUp:u=!1,className:h}=e,f=i(e,["height","total","renderer","onScroll","notScrollUp","className"]);const[g,v]=(0,l.useState)(0),[_,m]=(0,l.useState)(0),j=(0,l.useRef)(null);(0,l.useLayoutEffect)((()=>{const e=new ResizeObserver((()=>m(Math.ceil(j.current.offsetHeight/n)+1)));return e.observe(j.current),()=>e.disconnect()}),[]),u||(0,l.useLayoutEffect)((()=>{j.current.scrollTop=0}),[o]);const x=[],p=Math.min(_,o);for(let e=0;e<p;e++)g+e<o&&x.push(a(g+e));const b=(o||1)*n;return(0,s.jsx)("div",Object.assign({},f,{className:(0,r.cn)(c,h),ref:e=>{j.current=e,"function"==typeof t?t(e):t&&(t.current=e)},onScroll:e=>{null==d||d(e);const t=Math.floor(e.currentTarget.scrollTop/n);t<o&&v(t)},style:Object.assign({"--inner-height":b+"px"},f.style),children:(0,s.jsx)("div",{style:{top:g*n},children:x})}))}))},8756:(e,t,n)=>{n.d(t,{l:()=>h});var s=n(4848),l=n(6540);const r={select__item:"vOU5e",select__button:"g3u3o",select__list:"l5XJN"};var c=n(9644);function i(e){return e+1}function o(){const[e,t]=function(e=0){return(0,l.useReducer)(i,e)}();return t}var a=n(961);function d({onClose:e,children:t}){return a.createPortal((0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"absolute",inset:0},onClick:e}),t]}),document.body)}function u({target:e,onClose:t,children:n}){const c=o();(0,l.useEffect)((()=>{const e=new ResizeObserver(c);return e.observe(document.body),()=>e.disconnect()}),[]);const i=e.getBoundingClientRect();return(0,s.jsx)(d,{onClose:t,children:(0,s.jsx)("div",{className:r.select__list,style:{left:i.left,top:i.top+i.height,width:i.width},onClick:t,children:n})})}function h({length:e,renderer:t,children:n,onSelect:i}){const[o,a]=(0,l.useState)(null);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("button",{className:r.select__button,onClick:e=>a(e.currentTarget),children:[n,(0,s.jsx)("div",{className:"ic",children:"keyboard_arrow_down"})]}),o&&(0,s.jsx)(u,{target:o,onClose:()=>a(null),children:(0,s.jsx)(c.w,{height:35,total:e,renderer:e=>(0,s.jsx)("button",{className:r.select__item,onClick:()=>i(e),children:t(e)},e)})})]})}}}]);
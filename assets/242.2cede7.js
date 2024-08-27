"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[242],{242:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var s=n(4848),r=n(7767),l=n(6540),i=n(9605);const c={titles:[{id:"animations",title:"Css анимации и иллюстрации",tags:["анимация","css"]},{id:"browser_info",title:"Информация о браузере",tags:["api"]},{id:"games_of_the_future_1",title:'Задача "Убираем со стола"',tags:["задача"]},{id:"games_of_the_future_2",title:"Задача массив интервалов",tags:["задача"]},{id:"json-formatter",title:"JSON formatter",tags:["инструмент"]},{id:"path-builder",title:"Калькулятор пути",tags:["задача"]},{id:"polygon",title:"Многоугольник",tags:["задача"]},{id:"regexp",title:"Регулярные выражения",tags:["js"]},{id:"scroll-animation",title:"Scroll timeline animation",tags:["css","scroll"]},{id:"scroll-section",title:"Scrolled section",tags:["css","scroll"]},{id:"scroll-sidebar",title:"Scrolled sidebar",tags:["css","scroll"]},{id:"scroll",title:"Css scroll",tags:["css","scroll"]},{id:"tree_render",title:"Программа TreeRender",tags:["задача"]},{id:"video_apies",title:"Вывод видео",tags:["api"]},{id:"view-animation",title:"View timeline animation",tags:["css","scroll"]}],tags:[["css",6],["задача",5],["scroll",5],["api",2],["анимация",1],["инструмент",1],["js",1]]};var o=n(9644),a=n(4976),d=n(8679),u=n(4483),h="nsU+R",f="gZbPv",g="RFJai",j="y+M-N",x=n(674),m="_97OfG";var v=n(1590),p=function(e,t,n,s){return new(n||(n=Promise))((function(r,l){function i(e){try{o(s.next(e))}catch(e){l(e)}}function c(e){try{o(s.throw(e))}catch(e){l(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}o((s=s.apply(e,t||[])).next())}))};const b=(0,v.P)();function y(e,t){const[n,s]=(0,l.useState)([]);return[n,function(n,r){return p(this,arguments,void 0,(function*(n,r,l=t){const i=b(),c={data:n,id:i};var o;l&&(yield(o=l,new Promise(((e,t)=>{setTimeout(e,o)})))),s((e=>[...e,c])),setTimeout((()=>{s((e=>e.filter((e=>e.id!==i))))}),null!=r?r:e)}))}]}var w="oV0vo",S="2";var C=n(2717);function N({onClick:e}){const[t,n]=function(){const[e,t]=y(1e3*Number(S)),n=()=>t();if(!e.length)return[(0,s.jsx)(s.Fragment,{}),n];const r=Array(e.length);for(let t=0;t<e.length;t++){const n=e[t];r[t]=(0,s.jsx)("div",{},n.id)}return[(0,s.jsx)("div",{className:w,children:r}),n]}();return(0,s.jsxs)("button",{className:(0,x.cn)("ic",m),onClick:t=>{e(t),n()},children:[t,(0,s.jsx)("div",{className:"relative",children:C.ic.menu_open})]})}const O=[[null],...c.tags];function _(){const[e,t]=(0,l.useState)(null),[n,r]=(0,l.useState)(!1),i=(0,l.useMemo)((()=>null===e?c.titles:c.titles.filter((({tags:t})=>t.includes(e)))),[e]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:(0,x.cn)(h,n&&f),children:[(0,s.jsx)("div",{className:j,children:"Компоненты"}),(0,s.jsx)("div",{children:(0,s.jsx)(d.l,{length:O.length,renderer:k,onSelect:e=>t(O[e][0]),children:null!=e?e:"Тег"})}),(0,s.jsx)(o.w,{height:65,total:i.length,renderer:e=>{const{title:t,tags:n,id:l}=i[e];return(0,s.jsxs)(a.N_,{className:(0,x.cn)(u.x6,g),to:l,onClick:()=>r(!1),children:[(0,s.jsx)("div",{title:t,children:t}),n&&(0,s.jsx)("div",{children:n.map((e=>(0,s.jsx)("span",{children:e},e)))})]},l)}})]}),(0,s.jsx)(N,{onClick:()=>r((e=>!e))})]})}const k=e=>{const[t,n]=O[e];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:null!=t?t:"Очистить"}),n&&(0,s.jsx)("div",{children:n})]})};function P(){return(0,s.jsxs)("div",{className:"flex flex-row-reverse h-full relative",children:[(0,s.jsx)("div",{className:"flex-auto",children:(0,s.jsx)(l.Suspense,{fallback:(0,s.jsx)(i.a,{}),children:(0,s.jsx)(r.sv,{})})}),(0,s.jsx)(_,{})]})}},9644:(e,t,n)=>{n.d(t,{w:()=>c});var s=n(4848),r=n(6540),l=n(674),i=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n};const c=r.forwardRef(((e,t)=>{var{height:n,total:c,renderer:o,onScroll:a,notScrollUp:d=!1,className:u}=e,h=i(e,["height","total","renderer","onScroll","notScrollUp","className"]);const[f,g]=(0,r.useState)(0),[j,x]=(0,r.useState)(0),m=(0,r.useRef)(null);(0,r.useLayoutEffect)((()=>{const e=new ResizeObserver((()=>x(Math.ceil(m.current.offsetHeight/n)+1)));return e.observe(m.current),()=>e.disconnect()}),[]),d||(0,r.useLayoutEffect)((()=>{m.current.scrollTop=0}),[c]);const v=[],p=Math.min(j,c);for(let e=0;e<p;e++)f+e<c&&v.push(o(f+e));const b=(c||1)*n;return(0,s.jsx)("div",Object.assign({},h,{className:(0,l.cn)("FCEOI",u),ref:e=>{m.current=e,"function"==typeof t?t(e):t&&(t.current=e)},onScroll:e=>{null==a||a(e);const t=Math.floor(e.currentTarget.scrollTop/n);t<c&&g(t)},style:Object.assign({"--inner-height":b+"px"},h.style),children:(0,s.jsx)("div",{style:{top:f*n},children:v})}))}))},8679:(e,t,n)=>{n.d(t,{l:()=>f});var s=n(4848),r=n(6540),l="Ajngd",i="EiPGO",c="_7bbW6",o=n(9644),a=n(2333),d=n(961);function u({onClose:e,children:t}){return d.createPortal((0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:{position:"absolute",inset:0},onClick:e}),t]}),document.body)}function h({target:e,onClose:t,children:n}){const l=(0,a.CH)();(0,r.useEffect)((()=>{const e=new ResizeObserver(l);return e.observe(document.body),()=>e.disconnect()}),[]);const i=e.getBoundingClientRect();return(0,s.jsx)(u,{onClose:t,children:(0,s.jsx)("div",{className:c,style:{left:i.left,top:i.top+i.height,width:i.width},onClick:t,children:n})})}function f({length:e,renderer:t,children:n,onSelect:c}){const[a,d]=(0,r.useState)(null);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("button",{className:l,onClick:e=>d(e.currentTarget),children:[n,(0,s.jsx)("div",{className:"ic",children:"keyboard_arrow_down"})]}),a&&(0,s.jsx)(h,{target:a,onClose:()=>d(null),children:(0,s.jsx)(o.w,{height:35,total:e,renderer:e=>(0,s.jsx)("button",{className:i,onClick:()=>c(e),children:t(e)},e)})})]})}}}]);
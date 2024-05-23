"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[635,80,51,890],{7024:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i={cellWidth:"25",plateHeight:"8",room:"ghY7q",room__table:"_2h9f+",room__plates:"-d1uY",room__actor:"Cw0SA"}},674:(e,t,n)=>{function i(...e){return e.filter((e=>"string"==typeof e)).join(" ")}n.d(t,{cn:()=>i})},2376:(e,t,n)=>{n.r(t),n.d(t,{TableAnimation:()=>g});var i=n(4848),s=n(4015),a=n(6540),r=n(5744),l=n(5628),c=n(674),o=n(7024),u=n(7813),h=n(1796);const b="Efuo5";function d({children:e}){return(0,i.jsx)("span",Object.assign({className:b},{children:e}))}const f="Izrz8";function p({children:e}){return(0,i.jsx)("span",Object.assign({className:f},{children:e}))}const v="LFxN-",j="ME4eG";class m{constructor(e,t){Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"initPlates",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"running",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"interval",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"stopAnimation",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.pauseAnimation()&&(this.current=0,this.plates=this.initPlates,this.x=0)}}),Object.defineProperty(this,"pauseAnimation",{enumerable:!0,configurable:!0,writable:!0,value:()=>!!this.interval&&(clearInterval(this.interval),this.running=!1,!0)}),Object.defineProperty(this,"startAnimation",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.running||(this.interval=setInterval((0,u.XI)((()=>{if(this.current===this.actions.length-1)return this.stopAnimation();this.updateData(),this.current++})),1e3),this.running=!0)}}),Object.defineProperty(this,"updateData",{enumerable:!0,configurable:!0,writable:!0,value:(0,u.XI)((()=>{const[e,t]=this.actions[this.current];let{x:n}=this;const i=[...this.plates];if(e===l.EAction.MovePlates&&i[i.length-1]===n){const e=i.indexOf(t+1);i.fill(t,e),this.x=n-1}if(e===l.EAction.MoveToSink){const e=i.indexOf(n);i[e]===n&&(i[e]=0,this.x=0)}e===l.EAction.MoveX&&(this.x=t),this.plates=[...i]}))}),(0,u.Gn)(this,{running:u.sH,current:u.sH,plates:u.sH,x:u.sH,startAnimation:u.XI,pauseAnimation:u.XI,stopAnimation:u.XI}),this.plates=t}}const g=(0,s.PA)((function({actions:e,plates:t}){const n=(0,a.useMemo)((()=>new m(e,t)),[]),s=n.plates,[l,u]=n.actions[n.current];(0,a.useEffect)((()=>()=>n.stopAnimation()),[]);const b=[];for(let e=1;e<=t[t.length-1];e++)b.push((0,i.jsx)("div",{children:e},e));const f=[];let g=-1;for(let e=0;e<s.length;e++){const t=s[e];s[(null!=e?e:1)-1]===t?g++:g=0,f.push((0,i.jsx)("div",{style:{left:t*+o.default.cellWidth+2,top:g*+o.default.plateHeight+36}},e))}return(0,i.jsxs)("div",Object.assign({className:o.default.tableAnimation},{children:[(0,i.jsxs)("p",{children:["Следующее действие:",(0,i.jsxs)(p,{children:[(0,h.getActionTitle)(l),(0,i.jsx)("span",{children:u})]})]}),(0,i.jsxs)("div",Object.assign({className:o.default.room},{children:[(0,i.jsxs)("div",Object.assign({className:o.default.room__table},{children:[(0,i.jsx)("div",{children:"0"}),b]})),(0,i.jsx)("div",Object.assign({className:o.default.room__plates},{children:f})),(0,i.jsx)("div",Object.assign({className:(0,c.cn)(o.default.room__actor,"ic"),style:{left:n.x*+o.default.cellWidth}},{children:"person"}))]})),(0,i.jsxs)("div",Object.assign({className:v},{children:[n.running?(0,i.jsx)(r.$,Object.assign({onClick:n.pauseAnimation},{children:"Пауза"})):(0,i.jsx)(r.$,Object.assign({onClick:n.startAnimation},{children:"Анимировать"})),(0,i.jsx)(r.$,Object.assign({onClick:n.stopAnimation},{children:"Сбросить"}))]})),(0,i.jsx)("div",Object.assign({className:j},{children:!n.running&&0!==n.current&&(0,i.jsx)(d,{children:"Приостановлено"})}))]}))}))},1796:(e,t,n)=>{n.r(t),n.d(t,{getActionTitle:()=>s});var i=n(5628);function s(e){switch(e){case i.EAction.MovePlates:return"Сдвинуть тарелки на ячейку: ";case i.EAction.MoveToSink:return"Унести тарелку в умывальник";case i.EAction.MoveX:return"Переместиться на ячейку: "}}},5628:(e,t,n)=>{var i;n.r(t),n.d(t,{EAction:()=>i}),function(e){e[e.MoveX=0]="MoveX",e[e.MoveToSink=1]="MoveToSink",e[e.MovePlates=2]="MovePlates"}(i||(i={}))},5744:(e,t,n)=>{n.d(t,{$:()=>l});var i=n(4848);const s={button:"Kqpyc"};var a=n(674),r=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n};function l(e){var{className:t}=e,n=r(e,["className"]);return(0,i.jsx)("button",Object.assign({className:(0,a.cn)(t,s.button)},n))}}}]);
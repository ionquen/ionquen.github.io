"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[8010,7749,5943,168,7845,5229,9890],{1442:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r={cellWidth:"25",plateHeight:"8",room:"sdXaU",room__table:"Ql4rK",room__plates:"vHuYf",room__actor:"csL8B"}},674:(e,t,n)=>{function r(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];"string"==typeof r&&(t+=" "+r)}return t}n.d(t,{cn:()=>r})},5289:(e,t,n)=>{n.r(t),n.d(t,{getActionTitle:()=>i});var r=n(5628);function i(e){switch(e){case r.EAction.MovePlates:return"Сдвинуть тарелки на ячейку: ";case r.EAction.MoveToSink:return"Унести тарелку в умывальник";case r.EAction.MoveX:return"Переместиться на ячейку: "}}},8042:(e,t,n)=>{n.r(t),n.d(t,{TableAnimation:()=>p});var r=n(4848),i=n(4015),s=n(6540),l=n(6715),a=n(674),c=n(1442);const o="UioBQ";function u({children:e}){return(0,r.jsx)("span",{className:o,children:e})}const h="e7NAP",d="rwdHl";var f=n(8727),b=n(5055);const p=(0,i.PA)((function({actions:e,plates:t}){const n=(0,s.useMemo)((()=>new f.TableAnimationImpl(e,t)),[]);return(0,s.useEffect)((()=>()=>n.stop()),[]),(0,r.jsxs)("div",{className:c.default.tableAnimation,children:[(0,r.jsxs)("div",{className:c.default.room,children:[(0,r.jsxs)("div",{className:c.default.room__table,children:[(0,r.jsx)("div",{children:"0"}),(0,b.getCells)(t[t.length-1])]}),(0,r.jsx)("div",{className:c.default.room__plates,children:(0,b.getPlates)(n.plates,+c.default.cellWidth,+c.default.plateHeight)}),(0,r.jsx)("div",{className:(0,a.cn)(c.default.room__actor,"ic"),style:{left:n.x*+c.default.cellWidth},children:"person"})]}),(0,r.jsxs)("div",{className:h,children:[n.running?(0,r.jsx)(l.$,{onClick:n.pause,children:"Пауза"}):(0,r.jsx)(l.$,{onClick:n.start,children:"Анимировать"}),(0,r.jsx)(l.$,{onClick:n.stop,children:"Сбросить"})]}),(0,r.jsx)("div",{className:d,children:!n.running&&-1!==n.current&&(0,r.jsx)(u,{children:"Приостановлено"})}),-1!==n.current&&(0,b.getCurrentActionLabel)(n.actions[n.current])]})}))},8727:(e,t,n)=>{n.r(t),n.d(t,{TableAnimationImpl:()=>l});var r=n(7813);class i{constructor(e,t){Object.defineProperty(this,"count",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"delay",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"running",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:-1}),Object.defineProperty(this,"interval",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"start",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(this.running)return;const e=(0,r.XI)(this._run.bind(this));-1===this.current&&e(),this.interval=setInterval(e,this.delay),this.running=!0}}),Object.defineProperty(this,"stop",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.pause()&&(this.current=-1,this._stop())}}),Object.defineProperty(this,"pause",{enumerable:!0,configurable:!0,writable:!0,value:()=>!!this.interval&&(clearInterval(this.interval),this.running=!1,!0)}),(0,r.Gn)(this,{running:r.sH,current:r.sH,start:r.XI,pause:r.XI,stop:r.XI})}_start(){}_stop(){}_run(){return this.current++,this.current!==this.count||(this.stop(),!1)}}var s=n(5847);class l extends i{constructor(e,t){super(e.length,1e3),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"initPlates",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),(0,r.Gn)(this,{plates:r.sH,x:r.sH}),this.plates=t}_stop(){this.x=0,this.plates=this.initPlates}_run(){if(!super._run())return!1;const[e,t]=this.actions[this.current],[n,r]=(0,s.calcState)(e,t,this.x,this.plates);return this.x=n,this.plates=r,!0}}},5055:(e,t,n)=>{n.r(t),n.d(t,{getCells:()=>c,getCurrentActionLabel:()=>a,getPlates:()=>o});var r=n(4848);const i={accent__text:"jDwYw"};function s({children:e}){return(0,r.jsx)("span",{className:i.accent__text,children:e})}var l=n(5289);function a([e,t]){return(0,r.jsxs)("p",{children:["Выполненное действие:",(0,r.jsxs)(s,{children:[(0,l.getActionTitle)(e),(0,r.jsx)("span",{children:t})]})]})}function c(e){const t=[];for(let n=1;n<=e;n++)t.push((0,r.jsx)("div",{children:n},n));return t}function o(e,t,n){const i=[];let s=-1;for(let l=0;l<e.length;l++){const a=e[l];e[(null!=l?l:1)-1]===a?s++:s=0,i.push((0,r.jsx)("div",{style:{left:a*t+2,top:s*n+36}},l))}return i}},5847:(e,t,n)=>{n.r(t),n.d(t,{calcState:()=>i});var r=n(5628);function i(e,t,n,i){if(e===r.EAction.MoveX)return[t,i];const s=[...i];if(e===r.EAction.MovePlates&&s[s.length-1]===n){const e=s.indexOf(t+1);return s.fill(t,e),[n-1,s]}if(e===r.EAction.MoveToSink){const e=s.indexOf(n);if(s[e]===n)return s[e]=0,[0,s]}return[t,s]}},5628:(e,t,n)=>{var r;n.r(t),n.d(t,{EAction:()=>r}),function(e){e[e.MoveX=0]="MoveX",e[e.MoveToSink=1]="MoveToSink",e[e.MovePlates=2]="MovePlates"}(r||(r={}))},6715:(e,t,n)=>{n.d(t,{$:()=>a});var r=n(4848);const i={button:"fVOlO"};var s=n(674),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function a(e){var{className:t}=e,n=l(e,["className"]);return(0,r.jsx)("button",Object.assign({className:(0,s.cn)(t,i.button)},n))}}}]);
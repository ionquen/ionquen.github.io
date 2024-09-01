"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[762],{7945:(e,t,n)=>{n.r(t),n.d(t,{buttons:()=>i,margin:()=>r});var i="S3aKg",r="_0u1Xr"},4084:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var i,r=n(4848),s=n(4449),l=n(9576),a=n(4015),u=n(7813),o=n(1590);!function(e){e[e.MoveX=0]="MoveX",e[e.MoveToSink=1]="MoveToSink",e[e.MovePlates=2]="MovePlates"}(i||(i={}));class c{constructor(){Object.defineProperty(this,"tableLength",{enumerable:!0,configurable:!0,writable:!0,value:30}),Object.defineProperty(this,"tableProbability",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"input",{enumerable:!0,configurable:!0,writable:!0,value:"[2,4,7,8,10,11,12,13,18,21,22,24,25,27,28,29,30]"}),Object.defineProperty(this,"length",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"setInput",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.input=e;const t=[];try{const n=JSON.parse(e);for(let e=0;e<n.length;e++){const i=n[e];"number"==typeof i&&t.push(i)}}catch(e){console.log(e)}this.plates=t,this.updatePlates()}}),Object.defineProperty(this,"updateTable",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.plates=function(e,t){const n=[];for(let i=1;i<=e;i++)Math.random()<t&&n.push(i);return n}(this.tableLength,this.tableProbability),this.input=JSON.stringify(this.plates),this.updatePlates()}}),(0,u.Gn)(this,{input:u.sH,length:u.sH,actions:u.sH,time:u.sH,uid:u.sH,updateTable:u.XI,setInput:u.XI}),this.updateTable()}updatePlates(){this.length=this.plates.length,this.actions=function(e){const t=[],n=JSON.parse(e).sort(((e,t)=>e-t));1===n[0]&&(n.shift(),t.push([i.MoveX,1],[i.MoveToSink]));let r=1;if(n.length){let e=n[n.length-1];for(t.push([i.MoveX,e]);;){const s=e-r;if(n.includes(1)){if(t.push([i.MoveToSink]),n.pop(),!n.length)break;t.push([i.MoveX,1])}else{if(!n.length)break;if(n.includes(s))r++;else{t.push([i.MovePlates,s]);const l=n.indexOf(s+1);n.fill(s,l,l+r),r>1?(t.push([i.MoveX,s]),e=s):e-=1,r=1}}}}return t}(this.input),this.time=function(e){let t=0,n=0;for(let r=0;r<e.length;r++){const[s,l]=e[r];s===i.MovePlates&&(t+=1,n-=1),s===i.MoveToSink?(t+=n,n=0):(t+=Math.abs(l-n),n=l)}return t}(this.actions),this.uid=(0,o.B)()}}var h=n(6540),b=n(674);function p({children:e}){return(0,r.jsx)("span",{className:"_2J7Wj",children:e})}var d=n(7945);class f{constructor(e,t){Object.defineProperty(this,"count",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"delay",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"running",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:-1}),Object.defineProperty(this,"interval",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"start",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(this.running)return;const e=(0,u.XI)(this._run.bind(this));-1===this.current&&e(),this.interval=setInterval(e,this.delay),this.running=!0}}),Object.defineProperty(this,"stop",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.pause()&&(this.current=-1,this._stop())}}),Object.defineProperty(this,"pause",{enumerable:!0,configurable:!0,writable:!0,value:()=>!!this.interval&&(clearInterval(this.interval),this.running=!1,!0)}),(0,u.Gn)(this,{running:u.sH,current:u.sH,start:u.XI,pause:u.XI,stop:u.XI})}_start(){}_stop(){}_run(){return this.current++,this.current!==this.count||(this.stop(),!1)}}class v extends f{constructor(e,t){super(e.length,1e3),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"initPlates",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),(0,u.Gn)(this,{plates:u.sH,x:u.sH}),this.plates=t}_stop(){this.x=0,this.plates=this.initPlates}_run(){if(!super._run())return!1;const[e,t]=this.actions[this.current],[n,r]=function(e,t,n,r){if(e===i.MoveX)return[t,r];const s=[...r];if(e===i.MovePlates&&s[s.length-1]===n){const e=s.indexOf(t+1);return s.fill(t,e),[n-1,s]}if(e===i.MoveToSink){const e=s.indexOf(n);if(s[e]===n)return s[e]=0,[0,s]}return[t,s]}(e,t,this.x,this.plates);return this.x=n,this.plates=r,!0}}var j="l60u-";function g({children:e}){return(0,r.jsx)("span",{className:j,children:e})}function x(e){switch(e){case i.MovePlates:return"Сдвинуть тарелки на ячейку: ";case i.MoveToSink:return"Унести тарелку в умывальник";case i.MoveX:return"Переместиться на ячейку: "}}function m([e,t]){return(0,r.jsxs)("p",{children:["Выполненное действие:",(0,r.jsxs)(g,{children:[x(e),(0,r.jsx)("span",{children:t})]})]})}function y(e,t,n){const i=[];let s=-1;for(let l=0;l<e.length;l++){const a=e[l];e[(null!=l?l:1)-1]===a?s++:s=0,i.push((0,r.jsx)("div",{style:{left:a*t+2,top:s*n+36}},l))}return i}function P({count:e}){const t=[];for(let n=1;n<=e;n++)t.push((0,r.jsx)("div",{children:n},n));return(0,r.jsxs)("div",{className:"iRzas",children:[(0,r.jsx)("div",{children:"0"}),t]})}var O=n(2717);const w=(0,a.PA)((function({actions:e,plates:t}){const n=(0,h.useMemo)((()=>new v(e,t)),[]);return(0,h.useEffect)((()=>()=>n.stop()),[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"MzWE2",children:[(0,r.jsx)(P,{count:t[t.length-1]}),(0,r.jsx)("div",{className:"GPGKx",children:y(n.plates,25,8)}),(0,r.jsx)("div",{className:(0,b.cn)("ooNMr","ic"),style:{left:25*n.x},children:O.ic.person})]}),(0,r.jsxs)("div",{className:d.buttons,children:[n.running?(0,r.jsx)(s.$,{onClick:n.pause,children:"Пауза"}):(0,r.jsx)(s.$,{onClick:n.start,children:"Анимировать"}),(0,r.jsx)(s.$,{onClick:n.stop,children:"Сбросить"})]}),(0,r.jsx)("div",{className:d.margin,children:!n.running&&-1!==n.current&&(0,r.jsx)(p,{children:"Приостановлено"})}),-1!==n.current&&m(n.actions[n.current])]})}));function M({actions:e}){const[t,n]=(0,h.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[t?(0,r.jsx)(s.$,{onClick:()=>n(!1),children:"Скрыть последовательность действий"}):(0,r.jsx)(s.$,{onClick:()=>n(!0),children:"Отобразить последовательность действий"}),t&&e.map((([e,t],n)=>(0,r.jsxs)("p",{children:[x(e)," ",t]},n)))]})}const k=(0,a.PA)((function(){const[e]=(0,h.useState)((()=>new c));return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Массив позиций тарелок на столе: "}),(0,r.jsx)(l.p,{value:e.input,onChange:e.setInput}),(0,r.jsxs)("p",{children:["Число тарелок на столе: ",(0,r.jsx)("b",{children:e.length})]}),(0,r.jsxs)("p",{children:["Время сбора тарелок: ",(0,r.jsxs)("b",{children:[e.time," сек."]})]}),(0,r.jsx)(s.$,{onClick:e.updateTable,children:"Обновить стол"}),(0,r.jsx)(w,{actions:e.actions,plates:e.plates},e.uid+"anim"),(0,r.jsx)(M,{actions:e.actions},e.uid+"list")]})}))},9576:(e,t,n)=>{n.d(t,{p:()=>u});var i=n(4848),r="WxmUY",s="_2+ZbU",l=n(2153),a=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function u(e){var{onChange:t,value:n,onEnter:u,container:o}=e,c=a(e,["onChange","value","onEnter","container"]);return(0,i.jsxs)("div",Object.assign({className:r},o,{children:[(0,i.jsx)("input",Object.assign({type:"text"},c,{className:s,value:n,onChange:e=>null==t?void 0:t(e.target.value),onKeyDown:e=>("Enter"===e.key||"NumpadEnter"===e.key)&&(null==u?void 0:u(n))})),0!==n.length&&(0,i.jsx)(l.J,{onClick:e=>{var n,i;t(""),null===(i=null===(n=e.currentTarget)||void 0===n?void 0:n.previousElementSibling)||void 0===i||i.focus()}})]}))}}}]);
"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[762],{5118:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var i,s=n(4848),r=n(4449),l=n(9576),a=n(4015),u=n(7813),o=n(1590);!function(e){e[e.MoveX=0]="MoveX",e[e.MoveToSink=1]="MoveToSink",e[e.MovePlates=2]="MovePlates"}(i||(i={}));class c{constructor(){Object.defineProperty(this,"tableLength",{enumerable:!0,configurable:!0,writable:!0,value:30}),Object.defineProperty(this,"tableProbability",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"input",{enumerable:!0,configurable:!0,writable:!0,value:"[2,4,7,8,10,11,12,13,18,21,22,24,25,27,28,29,30]"}),Object.defineProperty(this,"length",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"setInput",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.input=e;const t=[];try{const n=JSON.parse(e);for(let e=0;e<n.length;e++){const i=n[e];"number"==typeof i&&t.push(i)}}catch(e){console.log(e)}this.plates=t,this.updatePlates()}}),Object.defineProperty(this,"updateTable",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.plates=function(e,t){const n=[];for(let i=1;i<=e;i++)Math.random()<t&&n.push(i);return n}(this.tableLength,this.tableProbability),this.input=JSON.stringify(this.plates),this.updatePlates()}}),(0,u.Gn)(this,{input:u.sH,length:u.sH,actions:u.sH,time:u.sH,uid:u.sH,updateTable:u.XI,setInput:u.XI}),this.updateTable()}updatePlates(){this.length=this.plates.length,this.actions=function(e){const t=[],n=JSON.parse(e).sort(((e,t)=>e-t));1===n[0]&&(n.shift(),t.push([i.MoveX,1],[i.MoveToSink]));let s=1;if(n.length){let e=n[n.length-1];for(t.push([i.MoveX,e]);;){const r=e-s;if(n.includes(1)){if(t.push([i.MoveToSink]),n.pop(),!n.length)break;t.push([i.MoveX,1])}else{if(!n.length)break;if(n.includes(r))s++;else{t.push([i.MovePlates,r]);const l=n.indexOf(r+1);n.fill(r,l,l+s),s>1?(t.push([i.MoveX,r]),e=r):e-=1,s=1}}}}return t}(this.input),this.time=function(e){let t=0,n=0;for(let s=0;s<e.length;s++){const[r,l]=e[s];r===i.MovePlates&&(t+=1,n-=1),r===i.MoveToSink?(t+=n,n=0):(t+=Math.abs(l-n),n=l)}return t}(this.actions),this.uid=(0,o.B)()}}var h=n(6540),b=n(674);function p({children:e}){return(0,s.jsx)("span",{className:"_6u3Kg",children:e})}class d{constructor(e,t){Object.defineProperty(this,"count",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"delay",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"running",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:-1}),Object.defineProperty(this,"interval",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"start",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(this.running)return;const e=(0,u.XI)(this._run.bind(this));-1===this.current&&e(),this.interval=setInterval(e,this.delay),this.running=!0}}),Object.defineProperty(this,"stop",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.pause()&&(this.current=-1,this._stop())}}),Object.defineProperty(this,"pause",{enumerable:!0,configurable:!0,writable:!0,value:()=>!!this.interval&&(clearInterval(this.interval),this.running=!1,!0)}),(0,u.Gn)(this,{running:u.sH,current:u.sH,start:u.XI,pause:u.XI,stop:u.XI})}_start(){}_stop(){}_run(){return this.current++,this.current!==this.count||(this.stop(),!1)}}class f extends d{constructor(e,t){super(e.length,1e3),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"initPlates",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),(0,u.Gn)(this,{plates:u.sH,x:u.sH}),this.plates=t}_stop(){this.x=0,this.plates=this.initPlates}_run(){if(!super._run())return!1;const[e,t]=this.actions[this.current],[n,s]=function(e,t,n,s){if(e===i.MoveX)return[t,s];const r=[...s];if(e===i.MovePlates&&r[r.length-1]===n){const e=r.indexOf(t+1);return r.fill(t,e),[n-1,r]}if(e===i.MoveToSink){const e=r.indexOf(n);if(r[e]===n)return r[e]=0,[0,r]}return[t,r]}(e,t,this.x,this.plates);return this.x=n,this.plates=s,!0}}var v="jKCs5";function j({children:e}){return(0,s.jsx)("span",{className:v,children:e})}function g(e){switch(e){case i.MovePlates:return"Сдвинуть тарелки на ячейку: ";case i.MoveToSink:return"Унести тарелку в умывальник";case i.MoveX:return"Переместиться на ячейку: "}}function x([e,t]){return(0,s.jsxs)("p",{children:["Выполненное действие:",(0,s.jsxs)(j,{children:[g(e),(0,s.jsx)("span",{children:t})]})]})}function m(e,t,n){const i=[];let r=-1;for(let l=0;l<e.length;l++){const a=e[l];e[(null!=l?l:1)-1]===a?r++:r=0,i.push((0,s.jsx)("div",{style:{left:a*t+2,top:r*n+36}},l))}return i}function y({count:e}){const t=[];for(let n=1;n<=e;n++)t.push((0,s.jsx)("div",{children:n},n));return(0,s.jsxs)("div",{className:"TRLiQ",children:[(0,s.jsx)("div",{children:"0"}),t]})}const O=(0,a.PA)((function({actions:e,plates:t}){const n=(0,h.useMemo)((()=>new f(e,t)),[]);return(0,h.useEffect)((()=>()=>n.stop()),[]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"_16AF+",children:[(0,s.jsx)(y,{count:t[t.length-1]}),(0,s.jsx)("div",{className:"B-8Yn",children:m(n.plates,25,8)}),(0,s.jsx)("div",{className:(0,b.cn)("_9vON8","ic"),style:{left:25*n.x},children:"person"})]}),(0,s.jsxs)("div",{className:"_4f3au",children:[n.running?(0,s.jsx)(r.$,{onClick:n.pause,children:"Пауза"}):(0,s.jsx)(r.$,{onClick:n.start,children:"Анимировать"}),(0,s.jsx)(r.$,{onClick:n.stop,children:"Сбросить"})]}),(0,s.jsx)("div",{className:"Tk1i2",children:!n.running&&-1!==n.current&&(0,s.jsx)(p,{children:"Приостановлено"})}),-1!==n.current&&x(n.actions[n.current])]})}));function P({actions:e}){const[t,n]=(0,h.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[t?(0,s.jsx)(r.$,{onClick:()=>n(!1),children:"Скрыть последовательность действий"}):(0,s.jsx)(r.$,{onClick:()=>n(!0),children:"Отобразить последовательность действий"}),t&&e.map((([e,t],n)=>(0,s.jsxs)("p",{children:[g(e)," ",t]},n)))]})}const w=(0,a.PA)((function(){const[e]=(0,h.useState)((()=>new c));return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"Массив позиций тарелок на столе: "}),(0,s.jsx)(l.p,{value:e.input,onChange:e.setInput}),(0,s.jsxs)("p",{children:["Число тарелок на столе: ",(0,s.jsx)("b",{children:e.length})]}),(0,s.jsxs)("p",{children:["Время сбора тарелок: ",(0,s.jsxs)("b",{children:[e.time," сек."]})]}),(0,s.jsx)(r.$,{onClick:e.updateTable,children:"Обновить стол"}),(0,s.jsx)(O,{actions:e.actions,plates:e.plates},e.uid+"anim"),(0,s.jsx)(P,{actions:e.actions},e.uid+"list")]})}))},9576:(e,t,n)=>{n.d(t,{p:()=>u});var i=n(4848),s="xIybk",r="_01UHB",l=n(2153),a=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n};function u(e){var{onChange:t,value:n,onEnter:u,container:o}=e,c=a(e,["onChange","value","onEnter","container"]);return(0,i.jsxs)("div",Object.assign({className:s},o,{children:[(0,i.jsx)("input",Object.assign({type:"text"},c,{className:r,value:n,onChange:e=>null==t?void 0:t(e.target.value),onKeyDown:e=>("Enter"===e.key||"NumpadEnter"===e.key)&&(null==u?void 0:u(n))})),0!==n.length&&(0,i.jsx)(l.J,{onClick:e=>{var n,i;t(""),null===(i=null===(n=e.currentTarget)||void 0===n?void 0:n.previousElementSibling)||void 0===i||i.focus()}})]}))}}}]);
"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[2762,9792,7749,4656,8010,5943,168,7845,5229,9890],{1442:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i={cellWidth:"25",plateHeight:"8",room:"y9-72",room__table:"grAM6",room__plates:"ep6u6",room__actor:"XnlXG"}},674:(e,t,n)=>{function i(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];"string"==typeof i&&(t+=" "+i)}return t}n.d(t,{cn:()=>i})},1022:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var i=n(4848),r=n(6715),s=n(9576),l=n(4015),a=n(3736),o=n(8042),c=n(4736);const u=new a.TaskImpl,h=(0,l.PA)((function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Массив позиций тарелок на столе: "}),(0,i.jsx)(s.p,{value:u.input,onChange:u.setInput}),(0,i.jsxs)("p",{children:["Число тарелок на столе: ",(0,i.jsx)("b",{children:u.length})]}),(0,i.jsxs)("p",{children:["Время сбора тарелок: ",(0,i.jsxs)("b",{children:[u.time," сек."]})]}),(0,i.jsx)(r.$,{onClick:u.updateTable,children:"Обновить стол"}),(0,i.jsx)(o.TableAnimation,{actions:u.actions,plates:u.plates},u.uid+"anim"),(0,i.jsx)(c.ActionList,{actions:u.actions},u.uid+"list")]})}))},4736:(e,t,n)=>{n.r(t),n.d(t,{ActionList:()=>a});var i=n(4848),r=n(6715),s=n(5289),l=n(6540);function a({actions:e}){const[t,n]=(0,l.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[t?(0,i.jsx)(r.$,{onClick:()=>n(!1),children:"Скрыть последовательность действий"}):(0,i.jsx)(r.$,{onClick:()=>n(!0),children:"Отобразить последовательность действий"}),t&&e.map((([e,t],n)=>(0,i.jsxs)("p",{children:[(0,s.getActionTitle)(e)," ",t]},n)))]})}},5289:(e,t,n)=>{n.r(t),n.d(t,{getActionTitle:()=>r});var i=n(5628);function r(e){switch(e){case i.EAction.MovePlates:return"Сдвинуть тарелки на ячейку: ";case i.EAction.MoveToSink:return"Унести тарелку в умывальник";case i.EAction.MoveX:return"Переместиться на ячейку: "}}},3736:(e,t,n)=>{n.r(t),n.d(t,{TaskImpl:()=>l});var i=n(7813),r=n(1590),s=n(5628);class l{constructor(){Object.defineProperty(this,"tableLength",{enumerable:!0,configurable:!0,writable:!0,value:30}),Object.defineProperty(this,"tableProbability",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"input",{enumerable:!0,configurable:!0,writable:!0,value:"[2,4,7,8,10,11,12,13,18,21,22,24,25,27,28,29,30]"}),Object.defineProperty(this,"length",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"setInput",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.input=e;const t=[];try{const n=JSON.parse(e);for(let e=0;e<n.length;e++){const i=n[e];"number"==typeof i&&t.push(i)}}catch(e){console.log(e)}this.plates=t,this.updatePlates()}}),Object.defineProperty(this,"updateTable",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.plates=function(e,t){const n=[];for(let i=1;i<=e;i++)Math.random()<t&&n.push(i);return n}(this.tableLength,this.tableProbability),this.input=JSON.stringify(this.plates),this.updatePlates()}}),(0,i.Gn)(this,{input:i.sH,length:i.sH,actions:i.sH,time:i.sH,uid:i.sH,updateTable:i.XI,setInput:i.XI}),this.updateTable()}updatePlates(){this.length=this.plates.length,this.actions=function(e){const t=[],n=JSON.parse(e).sort(((e,t)=>e-t));1===n[0]&&(n.shift(),t.push([s.EAction.MoveX,1],[s.EAction.MoveToSink]));let i=1;if(n.length){let e=n[n.length-1];for(t.push([s.EAction.MoveX,e]);;){const r=e-i;if(n.includes(1)){if(t.push([s.EAction.MoveToSink]),n.pop(),!n.length)break;t.push([s.EAction.MoveX,1])}else{if(!n.length)break;if(n.includes(r))i++;else{t.push([s.EAction.MovePlates,r]);const l=n.indexOf(r+1);n.fill(r,l,l+i),i>1?(t.push([s.EAction.MoveX,r]),e=r):e-=1,i=1}}}}return t}(this.input),this.time=function(e){let t=0,n=0;for(let i=0;i<e.length;i++){const[r,l]=e[i];r===s.EAction.MovePlates&&(t+=1,n-=1),r===s.EAction.MoveToSink?(t+=n,n=0):(t+=Math.abs(l-n),n=l)}return t}(this.actions),this.uid=(0,r.B)()}}},8042:(e,t,n)=>{n.r(t),n.d(t,{TableAnimation:()=>f});var i=n(4848),r=n(4015),s=n(6540),l=n(6715),a=n(674),o=n(1442);const c="sHnPg";function u({children:e}){return(0,i.jsx)("span",{className:c,children:e})}const h="LcWdi",b="imH-4";var p=n(8727),d=n(5055);const f=(0,r.PA)((function({actions:e,plates:t}){const n=(0,s.useMemo)((()=>new p.TableAnimationImpl(e,t)),[]);return(0,s.useEffect)((()=>()=>n.stop()),[]),(0,i.jsxs)("div",{className:o.default.tableAnimation,children:[(0,i.jsxs)("div",{className:o.default.room,children:[(0,i.jsxs)("div",{className:o.default.room__table,children:[(0,i.jsx)("div",{children:"0"}),(0,d.getCells)(t[t.length-1])]}),(0,i.jsx)("div",{className:o.default.room__plates,children:(0,d.getPlates)(n.plates,+o.default.cellWidth,+o.default.plateHeight)}),(0,i.jsx)("div",{className:(0,a.cn)(o.default.room__actor,"ic"),style:{left:n.x*+o.default.cellWidth},children:"person"})]}),(0,i.jsxs)("div",{className:h,children:[n.running?(0,i.jsx)(l.$,{onClick:n.pause,children:"Пауза"}):(0,i.jsx)(l.$,{onClick:n.start,children:"Анимировать"}),(0,i.jsx)(l.$,{onClick:n.stop,children:"Сбросить"})]}),(0,i.jsx)("div",{className:b,children:!n.running&&-1!==n.current&&(0,i.jsx)(u,{children:"Приостановлено"})}),-1!==n.current&&(0,d.getCurrentActionLabel)(n.actions[n.current])]})}))},8727:(e,t,n)=>{n.r(t),n.d(t,{TableAnimationImpl:()=>l});var i=n(7813);class r{constructor(e,t){Object.defineProperty(this,"count",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"delay",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"running",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:-1}),Object.defineProperty(this,"interval",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"start",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(this.running)return;const e=(0,i.XI)(this._run.bind(this));-1===this.current&&e(),this.interval=setInterval(e,this.delay),this.running=!0}}),Object.defineProperty(this,"stop",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.pause()&&(this.current=-1,this._stop())}}),Object.defineProperty(this,"pause",{enumerable:!0,configurable:!0,writable:!0,value:()=>!!this.interval&&(clearInterval(this.interval),this.running=!1,!0)}),(0,i.Gn)(this,{running:i.sH,current:i.sH,start:i.XI,pause:i.XI,stop:i.XI})}_start(){}_stop(){}_run(){return this.current++,this.current!==this.count||(this.stop(),!1)}}var s=n(5847);class l extends r{constructor(e,t){super(e.length,1e3),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"initPlates",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),(0,i.Gn)(this,{plates:i.sH,x:i.sH}),this.plates=t}_stop(){this.x=0,this.plates=this.initPlates}_run(){if(!super._run())return!1;const[e,t]=this.actions[this.current],[n,i]=(0,s.calcState)(e,t,this.x,this.plates);return this.x=n,this.plates=i,!0}}},5055:(e,t,n)=>{n.r(t),n.d(t,{getCells:()=>o,getCurrentActionLabel:()=>a,getPlates:()=>c});var i=n(4848);const r={accent__text:"i0Vn+"};function s({children:e}){return(0,i.jsx)("span",{className:r.accent__text,children:e})}var l=n(5289);function a([e,t]){return(0,i.jsxs)("p",{children:["Выполненное действие:",(0,i.jsxs)(s,{children:[(0,l.getActionTitle)(e),(0,i.jsx)("span",{children:t})]})]})}function o(e){const t=[];for(let n=1;n<=e;n++)t.push((0,i.jsx)("div",{children:n},n));return t}function c(e,t,n){const r=[];let s=-1;for(let l=0;l<e.length;l++){const a=e[l];e[(null!=l?l:1)-1]===a?s++:s=0,r.push((0,i.jsx)("div",{style:{left:a*t+2,top:s*n+36}},l))}return r}},5847:(e,t,n)=>{n.r(t),n.d(t,{calcState:()=>r});var i=n(5628);function r(e,t,n,r){if(e===i.EAction.MoveX)return[t,r];const s=[...r];if(e===i.EAction.MovePlates&&s[s.length-1]===n){const e=s.indexOf(t+1);return s.fill(t,e),[n-1,s]}if(e===i.EAction.MoveToSink){const e=s.indexOf(n);if(s[e]===n)return s[e]=0,[0,s]}return[t,s]}},5628:(e,t,n)=>{var i;n.r(t),n.d(t,{EAction:()=>i}),function(e){e[e.MoveX=0]="MoveX",e[e.MoveToSink=1]="MoveToSink",e[e.MovePlates=2]="MovePlates"}(i||(i={}))},6715:(e,t,n)=>{n.d(t,{$:()=>a});var i=n(4848);const r={button:"cp8c0"};var s=n(674),l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function a(e){var{className:t}=e,n=l(e,["className"]);return(0,i.jsx)("button",Object.assign({className:(0,s.cn)(t,r.button)},n))}},9576:(e,t,n)=>{n.d(t,{p:()=>l});var i=n(4848);const r={input:"B5Yss",inputBase:"bul-N"};var s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function l(e){var{onChange:t,value:n,onEnter:l,container:a}=e,o=s(e,["onChange","value","onEnter","container"]);return(0,i.jsxs)("div",Object.assign({className:r.input},a,{children:[(0,i.jsx)("input",Object.assign({type:"text"},o,{className:r.inputBase,value:n,onChange:e=>null==t?void 0:t(e.target.value),onKeyDown:e=>("Enter"===e.key||"NumpadEnter"===e.key)&&(null==l?void 0:l(n))})),0!==n.length&&(0,i.jsx)("div",{className:"ic",onClick:e=>{var n,i;t(""),null===(i=null===(n=e.currentTarget)||void 0===n?void 0:n.previousElementSibling)||void 0===i||i.focus()},children:"close"})]}))}}}]);
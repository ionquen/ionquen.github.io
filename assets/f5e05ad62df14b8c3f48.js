"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[2762,5635,4656,6080,5051,5673,9890],{7024:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i={cellWidth:"25",plateHeight:"8",room:"+FAeE",room__table:"_7DWII",room__plates:"lA0bm",room__actor:"_0Vif5"}},674:(e,t,n)=>{function i(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];"string"==typeof i&&(t+=" "+i)}return t}n.d(t,{cn:()=>i})},1022:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var i=n(4848),r=n(6715),s=n(9576),l=n(4015),a=n(6898),o=n(8200),c=n(1796),u=n(6540);const h=new a.TaskImpl,b=(0,l.PA)((function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Массив позиций тарелок на столе: "}),(0,i.jsx)(s.p,{value:h.input,onChange:h.setInput}),(0,i.jsxs)("p",{children:["Число тарелок на столе: ",(0,i.jsx)("b",{children:h.length})]}),(0,i.jsxs)("p",{children:["Время сбора тарелок: ",(0,i.jsxs)("b",{children:[h.time," сек."]})]}),(0,i.jsx)(r.$,{onClick:h.updateTable,children:"Обновить стол"}),(0,i.jsx)(o.TableAnimation,{actions:h.actions,plates:h.plates},h.uid+"anim"),(0,i.jsx)(p,{actions:h.actions},h.uid+"list")]})}));function p({actions:e}){const[t,n]=(0,u.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[t?(0,i.jsx)(r.$,{onClick:()=>n(!1),children:"Скрыть последовательность действий"}):(0,i.jsx)(r.$,{onClick:()=>n(!0),children:"Отобразить последовательность действий"}),t&&e.map((([e,t],n)=>(0,i.jsxs)("p",{children:[(0,c.getActionTitle)(e)," ",t]},n)))]})}},8030:(e,t,n)=>{n.r(t),n.d(t,{TableAnimationImpl:()=>l});var i=n(5628),r=n(7813);class s{constructor(e,t){Object.defineProperty(this,"count",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"delay",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"running",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:-1}),Object.defineProperty(this,"interval",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"start",{enumerable:!0,configurable:!0,writable:!0,value:()=>{if(this.running)return;const e=(0,r.XI)(this._run.bind(this));-1===this.current&&e(),this.interval=setInterval(e,this.delay),this.running=!0}}),Object.defineProperty(this,"stop",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.pause()&&(this.current=-1,this._stop())}}),Object.defineProperty(this,"pause",{enumerable:!0,configurable:!0,writable:!0,value:()=>!!this.interval&&(clearInterval(this.interval),this.running=!1,!0)}),(0,r.Gn)(this,{running:r.sH,current:r.sH,start:r.XI,pause:r.XI,stop:r.XI})}_start(){}_stop(){}_run(){return this.current++,this.current!==this.count||(this.stop(),!1)}}class l extends s{constructor(e,t){super(e.length,1e3),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"initPlates",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),(0,r.Gn)(this,{plates:r.sH,x:r.sH}),this.plates=t}_stop(){this.x=0,this.plates=this.initPlates}_run(){if(!super._run())return!1;const[e,t]=this.actions[this.current],[n,r]=function(e,t,n,r){if(e===i.EAction.MoveX)return[t,r];const s=[...r];if(e===i.EAction.MovePlates&&s[s.length-1]===n){const e=s.indexOf(t+1);return s.fill(t,e),[n-1,s]}if(e===i.EAction.MoveToSink){const e=s.indexOf(n);if(s[e]===n)return s[e]=0,[0,s]}return[t,s]}(e,t,this.x,this.plates);return this.x=n,this.plates=r,!0}}},6898:(e,t,n)=>{n.r(t),n.d(t,{TaskImpl:()=>s});var i=n(7813);var r=n(5628);class s{constructor(){Object.defineProperty(this,"tableLength",{enumerable:!0,configurable:!0,writable:!0,value:30}),Object.defineProperty(this,"tableProbability",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"input",{enumerable:!0,configurable:!0,writable:!0,value:"[2,4,7,8,10,11,12,13,18,21,22,24,25,27,28,29,30]"}),Object.defineProperty(this,"length",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"setInput",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.input=e;const t=[];try{const n=JSON.parse(e);for(let e=0;e<n.length;e++){const i=n[e];"number"==typeof i&&t.push(i)}}catch(e){console.log(e)}this.plates=t,this.updatePlates()}}),Object.defineProperty(this,"updateTable",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.plates=function(e,t){const n=[];for(let i=1;i<=e;i++)Math.random()<t&&n.push(i);return n}(this.tableLength,this.tableProbability),this.input=JSON.stringify(this.plates),this.updatePlates()}}),(0,i.Gn)(this,{input:i.sH,length:i.sH,actions:i.sH,time:i.sH,uid:i.sH,updateTable:i.XI,setInput:i.XI}),this.updateTable()}updatePlates(){this.length=this.plates.length,this.actions=function(e){const t=[],n=JSON.parse(e).sort(((e,t)=>e-t));1===n[0]&&(n.shift(),t.push([r.EAction.MoveX,1],[r.EAction.MoveToSink]));let i=1;if(n.length){let e=n[n.length-1];for(t.push([r.EAction.MoveX,e]);;){const s=e-i;if(n.includes(1)){if(t.push([r.EAction.MoveToSink]),n.pop(),!n.length)break;t.push([r.EAction.MoveX,1])}else{if(!n.length)break;if(n.includes(s))i++;else{t.push([r.EAction.MovePlates,s]);const l=n.indexOf(s+1);n.fill(s,l,l+i),i>1?(t.push([r.EAction.MoveX,s]),e=s):e-=1,i=1}}}}return t}(this.input),this.time=function(e){let t=0,n=0;for(let i=0;i<e.length;i++){const[s,l]=e[i];s===r.EAction.MovePlates&&(t+=1,n-=1),s===r.EAction.MoveToSink?(t+=n,n=0):(t+=Math.abs(l-n),n=l)}return t}(this.actions),this.uid=Math.random().toString(36).substr(2)}}},1796:(e,t,n)=>{n.r(t),n.d(t,{getActionTitle:()=>r});var i=n(5628);function r(e){switch(e){case i.EAction.MovePlates:return"Сдвинуть тарелки на ячейку: ";case i.EAction.MoveToSink:return"Унести тарелку в умывальник";case i.EAction.MoveX:return"Переместиться на ячейку: "}}},8200:(e,t,n)=>{n.r(t),n.d(t,{TableAnimation:()=>g});var i=n(4848),r=n(4015),s=n(6540),l=n(6715),a=n(674),o=n(7024),c=n(1796);const u="Cm4LF";function h({children:e}){return(0,i.jsx)("span",{className:u,children:e})}const b={accent__text:"jZw5q"};function p({children:e}){return(0,i.jsx)("span",{className:b.accent__text,children:e})}const d="rhPFL",f="_3h95a";var v=n(8030);const g=(0,r.PA)((function({actions:e,plates:t}){const n=(0,s.useMemo)((()=>new v.TableAnimationImpl(e,t)),[]);return(0,s.useEffect)((()=>()=>n.stop()),[]),(0,i.jsxs)("div",{className:o.default.tableAnimation,children:[(0,i.jsxs)("div",{className:o.default.room,children:[(0,i.jsxs)("div",{className:o.default.room__table,children:[(0,i.jsx)("div",{children:"0"}),j(t[t.length-1])]}),(0,i.jsx)("div",{className:o.default.room__plates,children:x(n.plates)}),(0,i.jsx)("div",{className:(0,a.cn)(o.default.room__actor,"ic"),style:{left:n.x*+o.default.cellWidth},children:"person"})]}),(0,i.jsxs)("div",{className:d,children:[n.running?(0,i.jsx)(l.$,{onClick:n.pause,children:"Пауза"}):(0,i.jsx)(l.$,{onClick:n.start,children:"Анимировать"}),(0,i.jsx)(l.$,{onClick:n.stop,children:"Сбросить"})]}),(0,i.jsx)("div",{className:f,children:!n.running&&-1!==n.current&&(0,i.jsx)(h,{children:"Приостановлено"})}),-1!==n.current&&m(n.actions[n.current])]})}));function m([e,t]){return(0,i.jsxs)("p",{children:["Выполненное действие:",(0,i.jsxs)(p,{children:[(0,c.getActionTitle)(e),(0,i.jsx)("span",{children:t})]})]})}function j(e){const t=[];for(let n=1;n<=e;n++)t.push((0,i.jsx)("div",{children:n},n));return t}function x(e){const t=[];let n=-1;for(let r=0;r<e.length;r++){const s=e[r];e[(null!=r?r:1)-1]===s?n++:n=0,t.push((0,i.jsx)("div",{style:{left:s*+o.default.cellWidth+2,top:n*+o.default.plateHeight+36}},r))}return t}},5628:(e,t,n)=>{var i;n.r(t),n.d(t,{EAction:()=>i}),function(e){e[e.MoveX=0]="MoveX",e[e.MoveToSink=1]="MoveToSink",e[e.MovePlates=2]="MovePlates"}(i||(i={}))},6715:(e,t,n)=>{n.d(t,{$:()=>a});var i=n(4848);const r={button:"_2AvAH"};var s=n(674),l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function a(e){var{className:t}=e,n=l(e,["className"]);return(0,i.jsx)("button",Object.assign({className:(0,s.cn)(t,r.button)},n))}},9576:(e,t,n)=>{n.d(t,{p:()=>l});var i=n(4848);const r={input:"Q6Qg9",inputBase:"iAxvu"};var s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};function l(e){var{onChange:t,value:n,onEnter:l,container:a}=e,o=s(e,["onChange","value","onEnter","container"]);return(0,i.jsxs)("div",Object.assign({className:r.input},a,{children:[(0,i.jsx)("input",Object.assign({type:"text"},o,{className:r.inputBase,value:n,onChange:e=>null==t?void 0:t(e.target.value),onKeyDown:e=>("Enter"===e.key||"NumpadEnter"===e.key)&&(null==l?void 0:l(n))})),0!==n.length&&(0,i.jsx)("div",{className:"ic",onClick:e=>{var n,i;t(""),null===(i=null===(n=e.currentTarget)||void 0===n?void 0:n.previousElementSibling)||void 0===i||i.focus()},children:"close"})]}))}}}]);
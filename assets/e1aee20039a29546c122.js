"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[762,635,656,80,51,890],{7024:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i={cellWidth:"25",plateHeight:"8",room:"pgm0t",room__table:"kvM84",room__plates:"_51ulv",room__actor:"WBmcD"}},674:(e,t,n)=>{function i(...e){return e.filter((e=>"string"==typeof e)).join(" ")}n.d(t,{cn:()=>i})},1022:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var i=n(4848),s=n(5744),a=n(4937),r=n(4015),l=n(6898),o=n(2376),c=n(1796),u=n(6540);const b=new l.TaskImpl,h=(0,r.PA)((function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Массив позиций тарелок на столе: "}),(0,i.jsx)(a.p,{value:b.input,onChange:b.setInput}),(0,i.jsxs)("p",{children:["Число тарелок на столе: ",(0,i.jsx)("b",{children:b.length})]}),(0,i.jsxs)("p",{children:["Время сбора тарелок: ",(0,i.jsxs)("b",{children:[b.time," сек."]})]}),(0,i.jsx)(s.$,Object.assign({onClick:b.updateTable},{children:"Обновить стол"})),(0,i.jsx)(o.TableAnimation,{actions:b.actions,plates:b.plates},b.uid+"anim"),(0,i.jsx)(p,{actions:b.actions},b.uid+"list")]})}));function p({actions:e}){const[t,n]=(0,u.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[t?(0,i.jsx)(s.$,Object.assign({onClick:()=>n(!1)},{children:"Скрыть последовательность действий"})):(0,i.jsx)(s.$,Object.assign({onClick:()=>n(!0)},{children:"Отобразить последовательность действий"})),t&&e.map((([e,t],n)=>(0,i.jsxs)("p",{children:[(0,c.getActionTitle)(e)," ",t]},n)))]})}},2376:(e,t,n)=>{n.r(t),n.d(t,{TableAnimation:()=>m});var i=n(4848),s=n(4015),a=n(6540),r=n(5744),l=n(5628),o=n(674),c=n(7024),u=n(7813),b=n(1796);const h="_4CM1R";function p({children:e}){return(0,i.jsx)("span",Object.assign({className:h},{children:e}))}const d="BGj4b";function f({children:e}){return(0,i.jsx)("span",Object.assign({className:d},{children:e}))}const v="iE4jZ",g="Dqw7K";class j{constructor(e,t){Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"initPlates",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"running",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"current",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"interval",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"stopAnimation",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.pauseAnimation()&&(this.current=0,this.plates=this.initPlates,this.x=0)}}),Object.defineProperty(this,"pauseAnimation",{enumerable:!0,configurable:!0,writable:!0,value:()=>!!this.interval&&(clearInterval(this.interval),this.running=!1,!0)}),Object.defineProperty(this,"startAnimation",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.running||(this.interval=setInterval((0,u.XI)((()=>{if(this.current===this.actions.length-1)return this.stopAnimation();this.updateData(),this.current++})),1e3),this.running=!0)}}),Object.defineProperty(this,"updateData",{enumerable:!0,configurable:!0,writable:!0,value:(0,u.XI)((()=>{const[e,t]=this.actions[this.current];let{x:n}=this;const i=[...this.plates];if(e===l.EAction.MovePlates&&i[i.length-1]===n){const e=i.indexOf(t+1);i.fill(t,e),this.x=n-1}if(e===l.EAction.MoveToSink){const e=i.indexOf(n);i[e]===n&&(i[e]=0,this.x=0)}e===l.EAction.MoveX&&(this.x=t),this.plates=[...i]}))}),(0,u.Gn)(this,{running:u.sH,current:u.sH,plates:u.sH,x:u.sH,startAnimation:u.XI,pauseAnimation:u.XI,stopAnimation:u.XI}),this.plates=t}}const m=(0,s.PA)((function({actions:e,plates:t}){const n=(0,a.useMemo)((()=>new j(e,t)),[]),s=n.plates,[l,u]=n.actions[n.current];(0,a.useEffect)((()=>()=>n.stopAnimation()),[]);const h=[];for(let e=1;e<=t[t.length-1];e++)h.push((0,i.jsx)("div",{children:e},e));const d=[];let m=-1;for(let e=0;e<s.length;e++){const t=s[e];s[(null!=e?e:1)-1]===t?m++:m=0,d.push((0,i.jsx)("div",{style:{left:t*+c.default.cellWidth+2,top:m*+c.default.plateHeight+36}},e))}return(0,i.jsxs)("div",Object.assign({className:c.default.tableAnimation},{children:[(0,i.jsxs)("p",{children:["Следующее действие:",(0,i.jsxs)(f,{children:[(0,b.getActionTitle)(l),(0,i.jsx)("span",{children:u})]})]}),(0,i.jsxs)("div",Object.assign({className:c.default.room},{children:[(0,i.jsxs)("div",Object.assign({className:c.default.room__table},{children:[(0,i.jsx)("div",{children:"0"}),h]})),(0,i.jsx)("div",Object.assign({className:c.default.room__plates},{children:d})),(0,i.jsx)("div",Object.assign({className:(0,o.cn)(c.default.room__actor,"ic"),style:{left:n.x*+c.default.cellWidth}},{children:"person"}))]})),(0,i.jsxs)("div",Object.assign({className:v},{children:[n.running?(0,i.jsx)(r.$,Object.assign({onClick:n.pauseAnimation},{children:"Пауза"})):(0,i.jsx)(r.$,Object.assign({onClick:n.startAnimation},{children:"Анимировать"})),(0,i.jsx)(r.$,Object.assign({onClick:n.stopAnimation},{children:"Сбросить"}))]})),(0,i.jsx)("div",Object.assign({className:g},{children:!n.running&&0!==n.current&&(0,i.jsx)(p,{children:"Приостановлено"})}))]}))}))},6898:(e,t,n)=>{n.r(t),n.d(t,{TaskImpl:()=>a});var i=n(7813);var s=n(5628);class a{constructor(){Object.defineProperty(this,"tableLength",{enumerable:!0,configurable:!0,writable:!0,value:30}),Object.defineProperty(this,"tableProbability",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"input",{enumerable:!0,configurable:!0,writable:!0,value:"[2,4,7,8,10,11,12,13,18,21,22,24,25,27,28,29,30]"}),Object.defineProperty(this,"length",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"setInput",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.input=e,this.plates=this.updatePlates(e)}}),Object.defineProperty(this,"updateTable",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.plates=this.updatePlates(),this.input=JSON.stringify(this.plates)}}),(0,i.Gn)(this,{input:i.sH,length:i.sH,actions:i.sH,time:i.sH,uid:i.sH,updateTable:i.XI,setInput:i.XI}),this.updateTable()}updatePlates(e){let t=[];if(e)try{const n=JSON.parse(e);for(let e=0;e<n.length;e++){const i=n[e];"number"==typeof i&&t.push(i)}}catch(e){return t}else for(let e=1;e<=this.tableLength;e++)Math.random()<this.tableProbability&&t.push(e);return this.length=t.length,this.actions=function(e){const t=[],n=JSON.parse(e).sort(((e,t)=>e-t));1===n[0]&&(n.shift(),t.push([s.EAction.MoveX,1],[s.EAction.MoveToSink]));let i=1;if(n.length){let e=n[n.length-1];for(t.push([s.EAction.MoveX,e]);;){const a=e-i;if(n.includes(1)){if(t.push([s.EAction.MoveToSink]),n.pop(),!n.length)break;t.push([s.EAction.MoveX,1])}else{if(!n.length)break;if(n.includes(a))i++;else{t.push([s.EAction.MovePlates,a]);const r=n.indexOf(a+1);n.fill(a,r,r+i),i>1?(t.push([s.EAction.MoveX,a]),e=a):e-=1,i=1}}}}return t}(this.input),this.time=function(e){let t=0,n=0;for(let i=0;i<e.length;i++){const[a,r]=e[i];a===s.EAction.MovePlates&&(t+=1,n-=1),a===s.EAction.MoveToSink?(t+=n,n=0):(t+=Math.abs(r-n),n=r)}return t}(this.actions),this.uid=Math.random().toString(36).substr(2),t}}},1796:(e,t,n)=>{n.r(t),n.d(t,{getActionTitle:()=>s});var i=n(5628);function s(e){switch(e){case i.EAction.MovePlates:return"Сдвинуть тарелки на ячейку: ";case i.EAction.MoveToSink:return"Унести тарелку в умывальник";case i.EAction.MoveX:return"Переместиться на ячейку: "}}},5628:(e,t,n)=>{var i;n.r(t),n.d(t,{EAction:()=>i}),function(e){e[e.MoveX=0]="MoveX",e[e.MoveToSink=1]="MoveToSink",e[e.MovePlates=2]="MovePlates"}(i||(i={}))},5744:(e,t,n)=>{n.d(t,{$:()=>l});var i=n(4848);const s={button:"oNCa-"};var a=n(674),r=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n};function l(e){var{className:t}=e,n=r(e,["className"]);return(0,i.jsx)("button",Object.assign({className:(0,a.cn)(t,s.button)},n))}},4937:(e,t,n)=>{n.d(t,{p:()=>r});var i=n(4848);const s={input:"NKShu",inputBase:"O9oM0"};var a=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n};function r(e){var{onChange:t,value:n,onEnter:r,container:l}=e,o=a(e,["onChange","value","onEnter","container"]);return(0,i.jsxs)("div",Object.assign({className:s.input},l,{children:[(0,i.jsx)("input",Object.assign({type:"text"},o,{className:s.inputBase,value:n,onChange:e=>null==t?void 0:t(e.target.value),onKeyDown:e=>("Enter"===e.key||"NumpadEnter"===e.key)&&(null==r?void 0:r(n))})),0!==n.length&&(0,i.jsx)("div",Object.assign({className:"ic",onClick:e=>{var n,i;t(""),null===(i=null===(n=e.currentTarget)||void 0===n?void 0:n.previousElementSibling)||void 0===i||i.focus()}},{children:"close"}))]}))}}}]);
"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[656,890],{6898:(e,t,i)=>{i.r(t),i.d(t,{TaskImpl:()=>a});var n=i(7813);var s=i(5628);class a{constructor(){Object.defineProperty(this,"tableLength",{enumerable:!0,configurable:!0,writable:!0,value:30}),Object.defineProperty(this,"tableProbability",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"input",{enumerable:!0,configurable:!0,writable:!0,value:"[2,4,7,8,10,11,12,13,18,21,22,24,25,27,28,29,30]"}),Object.defineProperty(this,"length",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"setInput",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.input=e,this.plates=this.updatePlates(e)}}),Object.defineProperty(this,"updateTable",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.plates=this.updatePlates(),this.input=JSON.stringify(this.plates)}}),(0,n.Gn)(this,{input:n.sH,length:n.sH,actions:n.sH,time:n.sH,uid:n.sH,updateTable:n.XI,setInput:n.XI}),this.updateTable()}updatePlates(e){let t=[];if(e)try{const i=JSON.parse(e);for(let e=0;e<i.length;e++){const n=i[e];"number"==typeof n&&t.push(n)}}catch(e){return t}else for(let e=1;e<=this.tableLength;e++)Math.random()<this.tableProbability&&t.push(e);return this.length=t.length,this.actions=function(e){const t=[],i=JSON.parse(e).sort(((e,t)=>e-t));1===i[0]&&(i.shift(),t.push([s.EAction.MoveX,1],[s.EAction.MoveToSink]));let n=1;if(i.length){let e=i[i.length-1];for(t.push([s.EAction.MoveX,e]);;){const a=e-n;if(i.includes(1)){if(t.push([s.EAction.MoveToSink]),i.pop(),!i.length)break;t.push([s.EAction.MoveX,1])}else{if(!i.length)break;if(i.includes(a))n++;else{t.push([s.EAction.MovePlates,a]);const l=i.indexOf(a+1);i.fill(a,l,l+n),n>1?(t.push([s.EAction.MoveX,a]),e=a):e-=1,n=1}}}}return t}(this.input),this.time=function(e){let t=0,i=0;for(let n=0;n<e.length;n++){const[a,l]=e[n];a===s.EAction.MovePlates&&(t+=1,i-=1),a===s.EAction.MoveToSink?(t+=i,i=0):(t+=Math.abs(l-i),i=l)}return t}(this.actions),this.uid=Math.random().toString(36).substr(2),t}}},5628:(e,t,i)=>{var n;i.r(t),i.d(t,{EAction:()=>n}),function(e){e[e.MoveX=0]="MoveX",e[e.MoveToSink=1]="MoveToSink",e[e.MovePlates=2]="MovePlates"}(n||(n={}))}}]);
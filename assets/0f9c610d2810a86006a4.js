"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[656,890],{6898:(e,t,i)=>{i.r(t),i.d(t,{TaskImpl:()=>r});var n=i(7813);var l=i(5628);class r{constructor(){Object.defineProperty(this,"tableLength",{enumerable:!0,configurable:!0,writable:!0,value:30}),Object.defineProperty(this,"tableProbability",{enumerable:!0,configurable:!0,writable:!0,value:.5}),Object.defineProperty(this,"plates",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"input",{enumerable:!0,configurable:!0,writable:!0,value:"[2,4,7,8,10,11,12,13,18,21,22,24,25,27,28,29,30]"}),Object.defineProperty(this,"length",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"setInput",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.input=e}}),Object.defineProperty(this,"updateInput",{enumerable:!0,configurable:!0,writable:!0,value:()=>{const e=[];for(let t=1;t<=this.tableLength;t++)Math.random()<this.tableProbability&&e.push(t);this.plates=e,this.input=JSON.stringify(e),this.length=e.length,this.actions=function(e){const t=[],i=JSON.parse(e).sort(((e,t)=>e-t));1===i[0]&&(i.shift(),t.push([l.EAction.MoveX,1],[l.EAction.MoveToSink]));let n=1;if(i.length){let e=i[i.length-1];for(t.push([l.EAction.MoveX,e]);;){const r=e-n;if(i.includes(1)){if(t.push([l.EAction.MoveToSink]),i.pop(),!i.length)break;t.push([l.EAction.MoveX,1])}else{if(!i.length)break;if(i.includes(r))n++;else{t.push([l.EAction.MovePlates,r]);const s=i.indexOf(r+1);i.fill(r,s,s+n),n>1?(t.push([l.EAction.MoveX,r]),e=r):e-=1,n=1}}}}return t}(this.input),this.time=function(e){let t=0,i=0;for(let n=0;n<e.length;n++){const[r,s]=e[n];r===l.EAction.MovePlates&&(t+=1,i-=1),r===l.EAction.MoveToSink?(t+=i,i=0):(t+=Math.abs(s-i),i=s)}return t}(this.actions),this.uid=Math.random().toString(36).substr(2)}}),(0,n.Gn)(this,{input:n.sH,length:n.sH,actions:n.sH,time:n.sH,uid:n.sH,updateInput:n.XI,setInput:n.XI}),this.updateInput()}}},5628:(e,t,i)=>{var n;i.r(t),i.d(t,{EAction:()=>n}),function(e){e[e.MoveX=0]="MoveX",e[e.MoveToSink=1]="MoveToSink",e[e.MovePlates=2]="MovePlates"}(n||(n={}))}}]);
"use strict";(self.webpackChunktests=self.webpackChunktests||[]).push([[875],{4718:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var n=s(4848),i=s(6540),o=s(4449);const l={selection:!1},r={fill:"green",width:10,height:10,stroke:"black",strokeWidth:1,selectable:!1,objectCaching:!1},a={fill:"transparent",stroke:"black",strokeWidth:2,selectable:!1,objectCaching:!1},c={fill:"gray",stroke:"black",strokeWidth:2,selectable:!1},u={backgroundColor:"white",fontSize:26,selectable:!1};var h=s(8663);function d(e,t){const{x:s,y:n}=e;let i=null,o=null;for(let e=0;e<t.length-1;e++){const l=t[e];null===i&&l.x-8<s&&l.x+8>s&&(i=l.x),null===o&&l.y-8<n&&l.y+8>n&&(o=l.y)}return{x:null!=i?i:s,y:null!=o?o:n}}class b{constructor(e){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"cursorRect",{enumerable:!0,configurable:!0,writable:!0,value:new h.rw(Object.assign({},r))}),Object.defineProperty(this,"polyline",{enumerable:!0,configurable:!0,writable:!0,value:new h.Ro([],a)}),Object.defineProperty(this,"points",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"init",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.canvas.clear(),this.clearPolylineAndPoints(),this.canvas.add(this.cursorRect),this.polyline=new h.Ro([],a),this.canvas.add(this.polyline),this.cursorRect.set("visible",!1),this.canvas.on("mouse:over",this.mouseOverHandler),this.canvas.on("mouse:out",this.mouseOutHandler),this.canvas.on("mouse:move",this.mouseMoveHandler),this.canvas.on("mouse:down",this.mouseDownHandler)}}),Object.defineProperty(this,"mouseOverHandler",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.target||(this.cursorRect.set("visible",!0),this.canvas.renderAll())}}),Object.defineProperty(this,"mouseOutHandler",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.target||(this.cursorRect.set("visible",!1),this.canvas.renderAll())}}),Object.defineProperty(this,"mouseMoveHandler",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const{x:t,y:s}=d(e.viewportPoint,this.polyline.points);if(this.cursorRect.set({left:t-this.cursorRect.width/2,top:s-this.cursorRect.height/2}),this.polyline.points.length){const e=new h.bR({x:t,y:s});this.polyline.points[this.polyline.points.length-1]=e}this.canvas.renderAll()}}),Object.defineProperty(this,"mouseDownHandler",{enumerable:!0,configurable:!0,writable:!0,value:e=>{const{polyline:t,canvas:s}=this,{x:n,y:i}=d(e.viewportPoint,t.points);if(t.points.length&&n===t.points[0].x&&i===t.points[0].y){this.clearPolylineAndPoints();const e=new h.tS([...t.points],c);s.add(e),this.addAreaText(e)}else this.addPolylinePoint(n,i);s.renderAll()}})}clearPolylineAndPoints(){const{canvas:e,polyline:t,cursorRect:s}=this;e.off("mouse:over",this.mouseMoveHandler),e.off("mouse:out",this.mouseMoveHandler),e.off("mouse:move",this.mouseMoveHandler),e.off("mouse:down",this.mouseDownHandler),e.remove(t),e.remove(s),this.points.forEach((t=>e.remove(t))),this.points=[]}addAreaText(e){const t=e.getXY(),s=e.width/1.5+t.x,n=e.height/1.5+t.y,i="Площадь: "+function(e){let t=0,s=0;for(let n=0;n<e.length-1;++n)t+=e[n].x*e[n+1].y,s+=e[n].y*e[n+1].x;return Math.abs(t-s)/2}(e.points),o=new h.DA(i,Object.assign(Object.assign({},u),{left:s,top:n}));this.canvas.add(o)}addPolylinePoint(e,t){var s,n;const{polyline:i}=this;i.points.pop();const o=new h.rw(Object.assign(Object.assign({},r),{left:e-(null!==(s=null==r?void 0:r.width)&&void 0!==s?s:10)/2,top:t-(null!==(n=null==r?void 0:r.height)&&void 0!==n?n:10)/2}));this.points.push(o),this.canvas.add(o),this.canvas.bringObjectToFront(this.cursorRect),i.points.push(new h.bR({x:e,y:t}),new h.bR({x:e,y:t}))}}const v=function(){const e=(0,i.useRef)(null),[t,s]=(0,i.useState)(null);return(0,i.useLayoutEffect)((()=>{const t=new h.Hl(e.current,l),n=new b(t);return s(n),()=>{t.dispose()}}),[]),(0,n.jsxs)("div",{children:[t&&(0,n.jsx)(o.$,{onClick:t.init,children:"Начать"}),(0,n.jsx)("div",{className:"border-solid border border-gray-100 bg-white w-max",children:(0,n.jsx)("canvas",{width:"600",height:"600",ref:e})})]})}}}]);
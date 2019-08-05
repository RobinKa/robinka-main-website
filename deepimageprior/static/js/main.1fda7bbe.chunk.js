(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){e.exports=n(194)},110:function(e,t,n){},111:function(e,t,n){},118:function(e,t){},119:function(e,t){},120:function(e,t){},121:function(e,t){},122:function(e,t){},123:function(e,t){},194:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),r=n(10),o=n.n(r),l=(n(110),n(31)),s=n(30),c=(n(111),n(73)),g=n.n(c),u=n(94),m=n(14);function h(e,t){for(var n=[e.canvas.width,e.canvas.height],a=n[0],i=n[1],r=e.createImageData(a,i),o=0;o<a;o++)for(var l=0;l<i;l++){var s=o+l*a;r.data[4*s+0]=Math.min(255,Math.max(0,127.5*(1+t[0][o][l][0]))),r.data[4*s+1]=Math.min(255,Math.max(0,127.5*(1+t[0][o][l][1]))),r.data[4*s+2]=Math.min(255,Math.max(0,127.5*(1+t[0][o][l][2]))),r.data[4*s+3]=255}e.putImageData(r,0,0)}function d(e){var t=e.state,n=e.dispatchState,r=Object(a.useState)(null),o=Object(s.a)(r,2),l=o[0],c=o[1],d=Object(a.useState)(null),p=Object(s.a)(d,2),f=p[0],v=p[1],b=Object(a.useState)(null),w=Object(s.a)(b,2),S=w[0],y=w[1],E=Object(a.useMemo)(function(){return function(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,n}(t.algorithmSettings.width,t.algorithmSettings.height)},[t.algorithmSettings.width,t.algorithmSettings.height]);return Object(a.useEffect)(function(){if(t.requestRun){var e=l,a=f,i=S;if(null===e||null===a||null===i){var r=[t.algorithmSettings.width,t.algorithmSettings.height,1];(e=function(e,t,n,a){for(var i=m.c({shape:e}),r=[i],o=0;o<n;o++)r.push(m.d.conv2d({filters:Math.min(256,Math.pow(2,o)*a),kernelSize:[4,4],padding:"same",strides:2,activation:"elu"}).apply(r[r.length-1]));for(var l=[r[r.length-1]],s=0;s<n;s++){var c=s===n-1,g=m.d.conv2dTranspose({filters:Math.min(256,Math.pow(2,n-s-1)*a),kernelSize:[4,4],padding:"same",strides:2,activation:"elu"}).apply(l[l.length-1]),u=m.d.concatenate({axis:-1}).apply([g,r[n-s-1]]),h=m.d.conv2d({filters:c?t:Math.min(256,Math.pow(2,n-s-1)*a),kernelSize:[4,4],padding:"same",strides:1,activation:c?"tanh":"elu"}).apply(u);l.push(h)}return m.e({inputs:i,outputs:l[l.length-1]})}(r,3,t.algorithmSettings.layers,t.algorithmSettings.filters)).compile({optimizer:"adam",loss:"meanAbsoluteError"}),a=m.f([1].concat(r)),o=t.sourceImage,s=t.algorithmSettings.width,d=t.algorithmSettings.height,i=m.i(m.g(m.a(m.h(o).reshape([1,d,s,4]).slice([0,0,0,0],[1,d,s,3]),127.5),1),[0,2,1,3]),c(e),v(a),y(i)}Object(u.a)(g.a.mark(function r(){var o;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:"setRunning",running:!0}),r.next=4,e.fit(a,i,{batchSize:1,epochs:20});case 4:return r.next=6,e.predict(a).array();case 6:o=r.sent,h(E.getContext("2d"),o),n({type:"addImageData",imageData:{iteration:t.iteration,uri:E.toDataURL("image/png")}}),r.next=13;break;case 11:r.prev=11,r.t0=r.catch(0);case 13:n({type:"setRunning",running:!1}),n({type:"setRequestRun",requestRun:!1});case 15:case"end":return r.stop()}},r,null,[[0,11]])}))()}var o,s,d},[t.requestRun]),Object(a.useEffect)(function(){t.generating||(null!==l&&l.dispose(),null!==S&&S.dispose(),null!==f&&f.dispose(),c(null),y(null),v(null))},[t.generating]),i.a.createElement("div",null)}m.b();var p=n(41),f=n(197),v=n(201),b=n(202),w=n(198),S=n(199),y=n(200);n(179),n(180);function E(e,t){var n=Object(l.a)({},e);switch(t.type){case"reset":n.images=[],n.generating=!1,n.iteration=0,n.requestRun=!1,n.algorithmSettings={filters:8,layers:5,width:256,height:256};break;case"start":n.generating=!0;break;case"pause":n.generating=!1;break;case"addImageData":n.images.push(t.imageData);break;case"algorithmSettings":n.algorithmSettings=t.newSettings;break;case"setSourceImage":n.sourceImage=t.image,n.images=[],n.iteration=0;break;case"incrementIteration":n.iteration+=1;break;case"setRunning":n.running=t.running;break;case"setRequestRun":n.requestRun=t.requestRun;break;default:throw new Error("Unhandled action in state update: "+JSON.stringify(t))}return n}var k=n(104),R=n(99),x=n(100),O=n.n(x),j=(n(185),function(){var e=Object(a.useReducer)(E,{generating:!1,running:!1,iteration:0,images:[],algorithmSettings:{filters:8,layers:5,width:256,height:256},sourceImage:null,requestRun:!1}),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)(function(){n.generating&&!n.requestRun&&(r({type:"incrementIteration"}),r({type:"setRequestRun",requestRun:!0}))},[n.requestRun,n.generating,r]);var o=Object(a.useRef)(null),c=Object(a.useState)(null),g=Object(s.a)(c,2),u=g[0],m=g[1];Object(a.useEffect)(function(){if(null!==u){var e=o.current.getContext("2d");e.drawImage(u,0,0,n.algorithmSettings.width,n.algorithmSettings.height);var t=e.getImageData(0,0,n.algorithmSettings.width,n.algorithmSettings.height).data;r({type:"setSourceImage",image:Array.from(t)})}},[u,n.algorithmSettings.width,n.algorithmSettings.height,r]);var h=Object(k.a)({accept:"image/*",onDrop:function(e){m(null);var t=new Image;t.onload=function(e){m(t)};var n=e[0],a=new FileReader;a.onload=function(e){e.target.readyState===FileReader.DONE&&(t.src=e.target.result)},a.readAsDataURL(n)},disabled:n.generating||n.running}),x=h.getRootProps,j=h.getInputProps,I=Object(a.useMemo)(function(){return n.generating&&n.running?"Running, iteration: ".concat(n.iteration,". Click an image to save it."):n.generating&&!n.running?"Starting, your browser might freeze for a while...":!n.generating&&n.running?"Stopping...":n.generating||n.running||n.sourceImage?n.generating||n.running?void 0:"Click start":"Click on the empty canvas to select an image or drop an image on it. None of your data is uploaded as everything is running client-side."},[n.generating,n.running,n.sourceImage,n.iteration]);return i.a.createElement("div",null,i.a.createElement(f.a,null,i.a.createElement(v.a,{bg:"dark",variant:"dark"},i.a.createElement(v.a.Brand,null,"Deep Image Prior"),i.a.createElement(b.a.Link,{href:"https://github.com/RobinKa/web-deep-image-prior"},"Source code"),i.a.createElement(b.a.Link,{href:"https://arxiv.org/abs/1711.10925"},"Paper"))),i.a.createElement(f.a,{style:{marginTop:"20px"}},i.a.createElement(w.a,null,i.a.createElement(S.a,null,i.a.createElement(w.a,null,i.a.createElement("div",Object.assign({style:{textAlign:"center"}},x()),i.a.createElement("input",j()),i.a.createElement("canvas",{style:{boxShadow:"0px 0px 5px gray"},ref:o,width:n.algorithmSettings.width,height:n.algorithmSettings.height}))),i.a.createElement(w.a,null,i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(p.a,{disabled:n.generating||n.running,defaultValue:256,min:0,max:1024,step:32,onChange:function(e){return function(e){r({type:"algorithmSettings",newSettings:Object(l.a)({},n.algorithmSettings,{width:e})})}(e)}}),i.a.createElement("label",null,"Width: ",n.algorithmSettings.width)),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(p.a,{disabled:n.generating||n.running,defaultValue:256,min:0,max:1024,step:32,onChange:function(e){return function(e){r({type:"algorithmSettings",newSettings:Object(l.a)({},n.algorithmSettings,{height:e})})}(e)}}),i.a.createElement("label",null,"Height: ",n.algorithmSettings.height)),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(p.a,{disabled:n.generating||n.running,defaultValue:5,min:1,max:20,step:1,onChange:function(e){return function(e){r({type:"algorithmSettings",newSettings:Object(l.a)({},n.algorithmSettings,{layers:e})})}(e)}}),i.a.createElement("label",null,"Layers: ",n.algorithmSettings.layers)),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(p.a,{disabled:n.generating||n.running,defaultValue:8,min:1,max:256,step:1,onChange:function(e){return function(e){r({type:"algorithmSettings",newSettings:Object(l.a)({},n.algorithmSettings,{filters:e})})}(e)}}),i.a.createElement("label",null,"Filters: ",n.algorithmSettings.filters)),i.a.createElement("p",{style:{fontSize:"20px"}},I),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(d,{state:n,dispatchState:r}),i.a.createElement(y.a,{style:{visibility:n.running||n.generating||!n.sourceImage?"hidden":"visible"},onClick:function(){return r({type:"start"})}},"Start"),i.a.createElement(y.a,{style:{visibility:n.running&&n.generating?"visible":"hidden"},onClick:function(){return r({type:"pause"})}},"Stop"),i.a.createElement(y.a,{onClick:function(){return r({type:"reset"})}},"Reset"))))),i.a.createElement(w.a,null,i.a.createElement(R.Carousel,{onClickItem:function(e,t){return O.a.saveAs(n.images[e].uri,"image_iter".concat(n.images[e].iteration,".png"))},selectedItem:n.images.length>0?n.images.length-1:0,showArrows:!0,autoPlay:!1},n.images.map(function(e){return i.a.createElement("div",{key:e.uri},i.a.createElement("img",{src:e.uri,alt:e.uri}),i.a.createElement("p",{className:"legend"},"Iteration ",e.iteration))})))))}),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/deepimageprior",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/deepimageprior","/service-worker.js");I?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):C(t,e)})}}()}},[[105,1,2]]]);
//# sourceMappingURL=main.1fda7bbe.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,a){e.exports=a.p+"static/media/car_inpaint.82954de1.png"},177:function(e,t,a){e.exports=a.p+"static/media/lenna_noisy.7637940c.png"},178:function(e,t,a){e.exports=a.p+"static/media/cat_text.f7cb4fcc.png"},270:function(e,t,a){e.exports=a(593)},514:function(e,t,a){},515:function(e,t,a){},522:function(e,t){},523:function(e,t){},524:function(e,t){},525:function(e,t){},526:function(e,t){},527:function(e,t){},593:function(e,t,a){"use strict";a.r(t);a(271),a(321),a(509);var n=a(1),i=a.n(n),r=a(22),l=a.n(r),s=(a(514),a(67)),o=a(53),c=(a(515),a(175)),u=a.n(c),g=a(259),h=a(33);function m(e,t,a){return h.j(h.i(e).reshape([1,a,t,4]).slice([0,0,0,0],[1,a,t,3]),[0,2,1,3])}function d(e,t){for(var a=[e.canvas.width,e.canvas.height],n=a[0],i=a[1],r=e.createImageData(n,i),l=0;l<n;l++)for(var s=0;s<i;s++){var o=l+s*n;r.data[4*o+0]=Math.min(255,Math.max(0,127.5*(1+t[0][l][s][0]))),r.data[4*o+1]=Math.min(255,Math.max(0,127.5*(1+t[0][l][s][1]))),r.data[4*o+2]=Math.min(255,Math.max(0,127.5*(1+t[0][l][s][2]))),r.data[4*o+3]=255}e.putImageData(r,0,0)}function p(e){var t=e.state,a=e.dispatchState,r=Object(n.useState)(null),l=Object(o.a)(r,2),s=l[0],c=l[1],p=Object(n.useState)(null),f=Object(o.a)(p,2),v=f[0],b=f[1],S=Object(n.useState)(null),w=Object(o.a)(S,2),E=w[0],y=w[1],k=Object(n.useMemo)(function(){return function(e,t){var a=document.createElement("canvas");return a.width=e,a.height=t,a}(t.algorithmSettings.width,t.algorithmSettings.height)},[t.algorithmSettings.width,t.algorithmSettings.height]);return Object(n.useEffect)(function(){if("runIter"===t.step){var e=s,n=v,i=E;if(null===e||null===n||null===i){var r=[t.algorithmSettings.width,t.algorithmSettings.height,1];e=function(e,t,a,n,i){for(var r=h.c({shape:e}),l=[r],s=0;s<a;s++)l.push(h.d.conv2d({filters:Math.min(256,Math.pow(2,s)*n),kernelSize:[4,4],padding:"same",strides:2,activation:"elu"}).apply(l[l.length-1]));for(var o=[l[l.length-1]],c=0;c<a;c++){var u=c===a-1,g=h.d.conv2dTranspose({filters:Math.min(256,Math.pow(2,a-c-1)*n),kernelSize:[4,4],padding:"same",strides:2,activation:"elu"}).apply(o[o.length-1]),m=i?h.d.concatenate({axis:-1}).apply([g,l[a-c-1]]):g,d=h.d.conv2d({filters:u?t:Math.min(256,Math.pow(2,a-c-1)*n),kernelSize:[4,4],padding:"same",strides:1,activation:u?"tanh":"elu"}).apply(m);o.push(d)}return h.f({inputs:r,outputs:o[o.length-1]})}(r,3,t.algorithmSettings.layers,t.algorithmSettings.filters,!t.algorithmSettings.inpaint),n=h.g([1].concat(r)),f=m(t.sourceImage,t.algorithmSettings.width,t.algorithmSettings.height),i=h.h(h.a(f,127.5),1),c(e),b(n),y(i);var l="meanAbsoluteError";if(t.algorithmSettings.inpaint){var o=Array.from(t.maskCanvas.getContext("2d").getImageData(0,0,t.algorithmSettings.width,t.algorithmSettings.height).data),p=h.a(m(o,t.algorithmSettings.width,t.algorithmSettings.height),255);l=function(e,t){return h.e.absoluteDifference(e,t,p)}}e.compile({optimizer:"adam",loss:l})}Object(g.a)(u.a.mark(function r(){var l;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.fit(n,i,{batchSize:1,epochs:20});case 3:return r.next=5,e.predict(n).array();case 5:l=r.sent,d(k.getContext("2d"),l),a({type:"finishIter",imageData:{iteration:t.iteration,uri:k.toDataURL("image/png")}}),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),console.log("Exception when running model: ".concat(r.t0)),a({type:"finishIter",imageData:void 0});case 14:case"end":return r.stop()}},r,null,[[0,10]])}))()}var f},[t.step]),Object(n.useEffect)(function(){"finishedIter"!==t.step||t.shouldRun||(null!==s&&s.dispose(),null!==E&&E.dispose(),null!==v&&v.dispose(),c(null),y(null),b(null),a({type:"stopped"}))},[t.shouldRun,t.step]),i.a.createElement("div",null)}h.b();var f=a(596),v=a(601),b=a(602),S=a(597),w=a(598),E=a(599),y=a(600);a(528),a(529);function k(e,t){var a=Object(s.a)({},e);switch(t.type){case"reset":a.images=[],a.shouldRun=!1,a.iteration=0,a.algorithmSettings={filters:8,layers:5,width:256,height:256,inpaint:!1};break;case"start":a.shouldRun=!0;break;case"pause":a.shouldRun=!1;break;case"algorithmSettings":a.algorithmSettings=t.newSettings,a.images=[],a.iteration=0;break;case"setSourceImage":a.sourceImage=t.image,a.images=[],a.iteration=0;break;case"finishIter":a.shouldRun&&(a.iteration+=1,t.imageData&&a.images.push(t.imageData)),a.step="finishedIter";break;case"stopped":a.step="idle",a.iteration=0;break;case"startIter":a.step="runIter";break;case"setMaskCanvas":a.maskCanvas=t.maskCanvas;break;default:throw new Error("Unhandled action in state update: "+JSON.stringify(t))}return a}var x=a(269),j=a(261),O=a.n(j);function R(e){var t=[e.state.algorithmSettings.width,e.state.algorithmSettings.height],a=t[0],r=t[1],l=e.state.maskCanvas,s=e.dispatchState,c=Object(n.useState)(!1),u=Object(o.a)(c,2),g=u[0],h=u[1],m=Object(n.useRef)(null);return Object(n.useEffect)(function(){var e=m.current.getContext("2d");e.fillStyle="white",e.fillRect(0,0,a,r)},[m,a,r]),Object(n.useEffect)(function(){m.current!==l&&s({type:"setMaskCanvas",maskCanvas:m.current})},[m,l,s]),i.a.createElement("canvas",{width:a,height:r,ref:m,onMouseDown:function(t){"idle"!==e.state.step||e.state.shouldRun||h(!0)},onMouseUp:function(e){if(h(!1),2===e.button){var t=m.current.getContext("2d");t.fillStyle="white",t.fillRect(0,0,a,r)}},onMouseMove:function(e){if(g){var t=m.current,a=t.getContext("2d"),n=t.getBoundingClientRect(),i=[e.clientX-n.left,e.clientY-n.top];a.beginPath(),a.arc(i[0],i[1],5,0,2*Math.PI),a.fillStyle="black",a.fill()}},style:{width:a,height:r,opacity:.6}})}var I=a(268);function C(e){return i.a.createElement("div",{style:e.style},i.a.createElement(I.a,{disabled:e.disabled,value:e.value,min:e.min,max:e.max,step:e.step,onChange:function(t){return e.setValue(t)}}),i.a.createElement("label",null,e.label,": ",e.value))}function M(e){return i.a.createElement("div",{style:e.style},i.a.createElement("input",{type:"checkbox",disabled:e.disabled,checked:e.value,onChange:function(t){return e.setValue(t.target.checked)}}),i.a.createElement("label",null,e.label))}var D=a(176),A=a.n(D),W=a(177),z=a.n(W),L=a(178),P=a.n(L),U=function(){var e=Object(n.useReducer)(k,{step:"idle",shouldRun:!1,iteration:0,images:[],algorithmSettings:{filters:8,layers:5,width:256,height:256,inpaint:!1},sourceImage:null,maskCanvas:null}),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){a.shouldRun&&"runIter"!==a.step&&r({type:"startIter"})},[a.step,a.shouldRun,r]);var l=Object(n.useMemo)(function(){var e=document.createElement("canvas");return e.width=a.algorithmSettings.width,e.height=a.algorithmSettings.height,e},[a.algorithmSettings.width,a.algorithmSettings.height]),c=Object(n.useState)(null),u=Object(o.a)(c,2),g=u[0],h=u[1];Object(n.useEffect)(function(){if(null!==g){var e=l.getContext("2d");e.drawImage(g,0,0,a.algorithmSettings.width,a.algorithmSettings.height);var t=e.getImageData(0,0,a.algorithmSettings.width,a.algorithmSettings.height).data;r({type:"setSourceImage",image:Array.from(t)})}},[g,a.algorithmSettings.width,a.algorithmSettings.height,r,l]);var m=Object(n.useMemo)(function(){return"idle"!==a.step&&a.shouldRun?"Running, iteration: ".concat(a.iteration,"."):"idle"===a.step&&a.shouldRun?"Starting, your browser might freeze for a while...":"idle"===a.step||a.shouldRun?"idle"!==a.step||a.shouldRun||a.sourceImage?"idle"!==a.step||a.shouldRun?void 0:"Click start":"Choose an image.":"Stopping..."},[a.step,a.shouldRun,a.sourceImage,a.iteration]),d=g?g.src:"",j={style:{textAlign:"center"},disabled:a.shouldRun||"idle"!==a.step},I=Object(n.useState)(""),D=Object(o.a)(I,2),W=D[0],L=D[1],U=function(e){j.disabled||h(e.target)},V=Object(x.a)({accept:"image/*",onDrop:function(e){h(null);var t=new Image;t.onload=function(e){h(t)};var a=e[0],n=new FileReader;n.onload=function(e){e.target.readyState===FileReader.DONE&&(t.src=e.target.result)},n.readAsDataURL(a)},disabled:j.disabled}),_=V.getRootProps,B=V.getInputProps;return i.a.createElement("div",null,i.a.createElement(p,{state:a,dispatchState:r}),i.a.createElement(f.a,null,i.a.createElement(v.a,{bg:"dark",variant:"dark"},i.a.createElement(v.a.Brand,null,i.a.createElement("div",null,"Deep Image Prior"),i.a.createElement("div",{style:{fontSize:"12px"}},"Implementation by ",i.a.createElement("a",{href:"https://github.com/RobinKa"},"Tora"))),i.a.createElement(b.a.Link,{href:"https://github.com/RobinKa/web-deep-image-prior"},"Source code"),i.a.createElement(b.a.Link,{href:"https://dmitryulyanov.github.io/deep_image_prior"},"Original project page"),i.a.createElement(b.a.Link,{href:"https://arxiv.org/abs/1711.10925"},"Paper"))),i.a.createElement(f.a,null,i.a.createElement(S.a,null,i.a.createElement(w.a,{style:{padding:"10px"}},i.a.createElement(S.a,null,i.a.createElement("p",{style:{fontSize:"20px"}},m)),i.a.createElement(S.a,{style:{textAlign:"center"}},i.a.createElement(w.a,null,i.a.createElement(E.a,{style:{visibility:!a.shouldRun&&"idle"===a.step&&a.maskCanvas&&a.sourceImage?"visible":"hidden"},onClick:function(){return r({type:"start"})}},"Start")),i.a.createElement(w.a,null,i.a.createElement(E.a,{style:{visibility:a.shouldRun&&"idle"!==a.step?"visible":"hidden"},onClick:function(){return r({type:"pause"})}},"Stop")),i.a.createElement(w.a,null,i.a.createElement(E.a,{onClick:function(){return r({type:"reset"})}},"Reset")))),i.a.createElement(w.a,{style:{padding:"10px"}},i.a.createElement(S.a,null,i.a.createElement(w.a,null,i.a.createElement(y.a,{fluid:!0,style:{minWidth:"32px"},src:A.a,alt:A.a,onClick:U})),i.a.createElement(w.a,null,i.a.createElement(y.a,{fluid:!0,style:{minWidth:"32px"},src:z.a,alt:z.a,onClick:U})),i.a.createElement(w.a,null,i.a.createElement(y.a,{fluid:!0,style:{minWidth:"32px"},src:P.a,alt:P.a,onClick:U}))),i.a.createElement(S.a,null,i.a.createElement(w.a,null,i.a.createElement("div",Object.assign({style:{textAlign:"center"}},_()),i.a.createElement("input",B()),i.a.createElement("p",{style:{fontSize:"20px"}},"Click to select an image"))))),i.a.createElement(w.a,{style:{padding:"10px"}},i.a.createElement("div",{style:{width:a.algorithmSettings.width,height:a.algorithmSettings.height,boxShadow:"0px 0px 5px gray"}},i.a.createElement("img",{src:d,alt:"",style:{width:a.algorithmSettings.width,height:a.algorithmSettings.height,position:"absolute"}}),i.a.createElement("div",{style:{display:a.algorithmSettings.inpaint?"block":"none"}},i.a.createElement(R,{state:a,dispatchState:r,backgroundImage:d})))),i.a.createElement(w.a,{style:{padding:"10px"}},i.a.createElement("p",{style:{textAlign:"center",fontSize:"20px"}},"Settings"),i.a.createElement(C,Object.assign({},j,{min:32,max:1024,step:32,value:a.algorithmSettings.width,setValue:function(e){r({type:"algorithmSettings",newSettings:Object(s.a)({},a.algorithmSettings,{width:e})})},label:"Width"})),i.a.createElement(C,Object.assign({},j,{min:32,max:1024,step:32,value:a.algorithmSettings.height,setValue:function(e){r({type:"algorithmSettings",newSettings:Object(s.a)({},a.algorithmSettings,{height:e})})},label:"Height"})),i.a.createElement(C,Object.assign({},j,{min:1,max:20,step:1,value:a.algorithmSettings.layers,setValue:function(e){r({type:"algorithmSettings",newSettings:Object(s.a)({},a.algorithmSettings,{layers:e})})},label:"Layers"})),i.a.createElement(C,Object.assign({},j,{min:4,max:128,step:4,value:a.algorithmSettings.filters,setValue:function(e){r({type:"algorithmSettings",newSettings:Object(s.a)({},a.algorithmSettings,{filters:e})})},label:"Filters"})),i.a.createElement(M,Object.assign({},j,{value:a.algorithmSettings.inpaint,setValue:function(e){r({type:"algorithmSettings",newSettings:Object(s.a)({},a.algorithmSettings,{inpaint:e})})},label:"Inpaint"})))),i.a.createElement(S.a,null,i.a.createElement(w.a,null),i.a.createElement(w.a,{style:{maxWidth:a.algorithmSettings.width}},i.a.createElement(O.a,{leftImage:d,rightImage:W})),i.a.createElement(w.a,null)),i.a.createElement(S.a,null,a.images.map(function(e){return i.a.createElement("img",{width:"64px",key:e.uri,src:e.uri,alt:e.uri,onClick:function(t){return L(e.uri)}})}))))},V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(i.a.createElement(U,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/deepimageprior",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/deepimageprior","/service-worker.js");V?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):_(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):_(t,e)})}}()}},[[270,1,2]]]);
//# sourceMappingURL=main.f31f0c6b.chunk.js.map
(this.webpackJsonpmaxwell=this.webpackJsonpmaxwell||[]).push([[0],{202:function(e,t,i){},203:function(e,t,i){"use strict";i.r(t);var r=i(0),a=i.n(r),n=i(84),l=i.n(n),u=(i(91),i(7)),o=i(15),c=i(23),s=i(24);function d(e,t,i,r,a){return r<0||r>=t||a<0||a>=i?0:e[a][r]}function p(e){return e}function h(e){return e[this.thread.y][this.thread.x]}function m(e,t,i){var r=this.thread.x,a=this.thread.y;return r<0||a<0||r>=t[0]||a>=t[1]?i:e[a][r]}function f(e,t,i,r,a){var n=this.thread.x,l=this.thread.y,u=d(a,this.output.x,this.output.y,n,l);return Math.max(Math.abs(e[0]-n),Math.abs(e[1]-l))<t?i+r*u:u}function b(e,t,i,r,a){var n=this.thread.x,l=this.thread.y,u=d(a,this.output.x,this.output.y,n,l),o=e[0]-n,c=e[1]-l;return o*o+c*c<t*t?i+r*u:u}function v(e,t,i){var r=this.thread.x,a=this.thread.y,n=this.output.x,l=this.output.y;return d(t,n,l,r,a)+d(e,n,l,r,a)*i}function g(e,t){var i=this.thread.x,r=this.thread.y;return d(e,this.output.x,this.output.y,i,r)*Math.pow(.1,t)}function y(e,t,i,r,a,n,l){var u=this.thread.x,o=this.thread.y,c=this.output.x,s=this.output.y;if(!l){var p=u<2?1:0,h=u+2>=c?-1:0,m=o<2?1:0,f=o+2>=s?-1:0;if(0!==p||0!==h||0!==m||0!==f)return r[o+m+f][u+p+h]}return d(r,c,s,u,o)-a/(d(i,c,s,u,o)*n)*(d(t,c,s,u,o+1)-d(t,c,s,u,o))}function S(e,t,i,r,a,n,l){var u=this.thread.x,o=this.thread.y,c=this.output.x,s=this.output.y;if(!l){var p=u<2?1:0,h=u+2>=c?-1:0,m=o<2?1:0,f=o+2>=s?-1:0;if(0!==p||0!==h||0!==m||0!==f)return r[o+m+f][u+p+h]}return d(r,c,s,u,o)-a/(d(i,c,s,u,o)*n)*-(d(t,c,s,u+1,o)-d(t,c,s,u,o))}function O(e,t,i,r,a,n,l){var u=this.thread.x,o=this.thread.y,c=this.output.x,s=this.output.y;if(!l){var p=u<2?1:0,h=u+2>=c?-1:0,m=o<2?1:0,f=o+2>=s?-1:0;if(0!==p||0!==h||0!==m||0!==f)return r[o+m+f][u+p+h]}return d(r,c,s,u,o)-a/(d(i,c,s,u,o)*n)*(d(t,c,s,u+1,o)-d(t,c,s,u,o)-(d(e,c,s,u,o+1)-d(e,c,s,u,o)))}function x(e,t,i,r,a,n,l){var u=this.thread.x,o=this.thread.y,c=this.output.x,s=this.output.y;if(!l){var p=u<2?1:0,h=u+2>=c?-1:0,m=o<2?1:0,f=o+2>=s?-1:0;if(0!==p||0!==h||0!==m||0!==f)return r[o+m+f][u+p+h]}return d(r,c,s,u,o)+a/(d(i,c,s,u,o)*n)*(d(t,c,s,u,o)-d(t,c,s,u,o-1))}function w(e,t,i,r,a,n,l){var u=this.thread.x,o=this.thread.y,c=this.output.x,s=this.output.y;if(!l){var p=u<2?1:0,h=u+2>=c?-1:0,m=o<2?1:0,f=o+2>=s?-1:0;if(0!==p||0!==h||0!==m||0!==f)return r[o+m+f][u+p+h]}return d(r,c,s,u,o)+a/(d(i,c,s,u,o)*n)*-(d(t,c,s,u,o)-d(t,c,s,u-1,o))}function j(e,t,i,r,a,n,l){var u=this.thread.x,o=this.thread.y,c=this.output.x,s=this.output.y;if(!l){var p=u<2?1:0,h=u+2>=c?-1:0,m=o<2?1:0,f=o+2>=s?-1:0;if(0!==p||0!==h||0!==m||0!==f)return r[o+m+f][u+p+h]}return d(r,c,s,u,o)+a/(d(i,c,s,u,o)*n)*(d(t,c,s,u,o)-d(t,c,s,u-1,o)-(d(e,c,s,u,o)-d(e,c,s,u,o-1)))}function E(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function M(e,t,i){return{drawShape:"square",center:e,halfSize:t,value:i}}function z(e,t,i){return{drawShape:"circle",center:e,radius:t,value:i}}function k(e){var t={};return function(i){return t[i]||(t[i]=e()),t[i]}}var C=function e(t,i,r,a){var n=this;Object(s.a)(this,e),this.gpu=t,this.gridSize=i,this.cellSize=r,this.reflectiveBoundary=a,this.data=void 0,this.updateMagnetic=void 0,this.updateElectric=void 0,this.injectSource=void 0,this.decaySource=void 0,this.makeFieldTexture=void 0,this.copyTexture=void 0,this.copyTextureWithBounds=void 0,this.drawOnTexture=void 0,this.kernels=[],this.setGridSize=function(e){n.gridSize=e,n.kernels.forEach((function(t){return t.setOutput(e)}));for(var t=0;t<3;t++)n.data.electricField[t].shape=e,n.data.magneticField[t].shape=e;var i=n.data.permittivity.shape;n.data.permittivity.shape=e,n.data.permeability.shape=e,n.data.permittivity.values=n.copyTextureWithBounds("permittivity")(n.data.permittivity.values,i,1),n.data.permeability.values=n.copyTextureWithBounds("permeability")(n.data.permeability.values,i,1),n.resetFields()},this.setCellSize=function(e){n.cellSize=e,n.resetFields()},this.stepElectric=function(e){var t=n.data.electricField.map((function(e){return e.values})),i=n.data.magneticField.map((function(e){return e.values})),r=n.data.permittivity.values,a=n.injectSource(n.data.electricSourceFieldZ.values,t[2],e);n.data.electricSourceFieldZ.values=n.decaySource(n.copyTexture("es2")(n.data.electricSourceFieldZ.values),e),n.data.electricField[0].values=n.updateElectric[0](i[1],i[2],r,n.copyTexture("e0")(t[0]),e,n.cellSize,n.reflectiveBoundary),n.data.electricField[1].values=n.updateElectric[1](i[0],i[2],r,n.copyTexture("e1")(t[1]),e,n.cellSize,n.reflectiveBoundary),n.data.electricField[2].values=n.updateElectric[2](i[0],i[1],r,a,e,n.cellSize,n.reflectiveBoundary),n.data.time+=e/2},this.stepMagnetic=function(e){var t=n.data.electricField.map((function(e){return e.values})),i=n.data.magneticField.map((function(e){return e.values})),r=n.data.permeability.values;n.data.magneticField[0].values=n.updateMagnetic[0](t[1],t[2],r,n.copyTexture("m0")(i[0]),e,n.cellSize,n.reflectiveBoundary),n.data.magneticField[1].values=n.updateMagnetic[1](t[0],t[2],r,n.copyTexture("m1")(i[1]),e,n.cellSize,n.reflectiveBoundary),n.data.magneticField[2].values=n.updateMagnetic[2](t[0],t[1],r,n.copyTexture("m2")(i[2]),e,n.cellSize,n.reflectiveBoundary),n.data.time+=e/2},this.resetFields=function(){n.data.time=0;for(var e=0;e<3;e++)n.data.electricField[e].values=n.makeFieldTexture("e".concat(e))(0),n.data.magneticField[e].values=n.makeFieldTexture("m".concat(e))(0);n.data.electricSourceFieldZ.values=n.makeFieldTexture("es2")(0)},this.resetMaterials=function(){n.data.permeability.values=n.makeFieldTexture("permeability")(1),n.data.permittivity.values=n.makeFieldTexture("permittivity")(1)},this.drawShape=function(e,t,i,r){var a=n.drawOnTexture[i.drawShape](t),l=n.copyTexture(t)(e.values);switch(i.drawShape){case"square":e.values=a(i.center,i.halfSize,i.value,r,l);break;case"circle":e.values=a(i.center,i.radius,i.value,r,l);break;default:throw Error("Invalid draw shape: ".concat(JSON.stringify(i)))}},this.drawMaterial=function(e,t){var i="permeability"===e?n.data.permeability:n.data.permittivity;n.drawShape(i,e,t,0)},this.injectSignal=function(e,t){n.drawShape(n.data.electricSourceFieldZ,"es2",function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?E(i,!0).forEach((function(t){Object(c.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):E(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},e,{value:e.value*t}),1)},this.loadPermittivity=function(e){n.data.permittivity.values=n.copyTextureWithBounds("loadPermittivity")(e,[e[0].length,e.length],1)},this.loadPermeability=function(e){n.data.permeability.values=n.copyTextureWithBounds("loadPermeability")(e,[e[0].length,e.length],1)},this.getData=function(){return n.data};var l=function(e){var t=n.gpu.createKernel(e).setOutput(n.gridSize).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0).setPrecision("single");return n.kernels.push(t),t},u=function(e){return l(e).setFunctions([d])},o=function(e){return u(e).setConstants({cellSize:r})};this.makeFieldTexture=k((function(){return l(p)})),this.copyTexture=k((function(){return l(h)})),this.copyTextureWithBounds=k((function(){return l(m)}));var M=function(e,t){return{values:n.makeFieldTexture(e)(t),shape:n.gridSize}};this.data={time:0,electricField:[0,1,2].map((function(e){return M("e".concat(e),0)})),magneticField:[0,1,2].map((function(e){return M("m".concat(e),0)})),electricSourceFieldZ:M("es2",0),permittivity:M("permittivity",1),permeability:M("permeability",1)},this.drawOnTexture={square:k((function(){return o(f)})),circle:k((function(){return o(b)}))},this.injectSource=u(v),this.decaySource=u(g),this.updateMagnetic=[o(y),o(S),o(O)],this.updateElectric=[o(x),o(w),o(j)]},A=i(40);function F(e){return{simulationSettings:e.simulationSettings,sourceDescriptors:e.sourceDescriptors,encodedMaterialMap:B(e.materialMap)}}function T(e){var t=D(e.encodedMaterialMap);return{simulationSettings:e.simulationSettings,sourceDescriptors:e.sourceDescriptors,materialMap:t}}function B(e){var t=new Float32Array(2+2*e.shape[0]*e.shape[1]);t[0]=e.shape[0],t[1]=e.shape[1];for(var i=0;i<e.shape[1];i++)for(var r=0;r<e.shape[0];r++){var a=i*e.shape[0]*2+2*r;t[2+a]=e.permittivity[i][r],t[2+a+1]=e.permeability[i][r]}return A.deflate(new Uint8Array(t.buffer),{to:"string"})}function D(e){for(var t=new Float32Array(A.inflate(e).buffer),i=[t[0],t[1]],r=[],a=[],n=0;n<i[1];n++){r.push([]),a.push([]);for(var l=0;l<i[0];l++){var u=n*i[0]*2+2*l;r[n].push(t[2+u]),a[n].push(t[2+u+1])}}return{shape:i,permittivity:r,permeability:a}}var P=function e(t,i,r,a){var n=this;Object(s.a)(this,e),this.amplitude=t,this.frequency=i,this.position=r,this.turnOffTime=a,this.inject=function(e,t){var i=e.getData().time;if(i>=0&&(void 0===n.turnOffTime||i<=n.turnOffTime)){var r=-n.amplitude*Math.cos(2*Math.PI*n.frequency*i),a=M(n.position,1,r);e.injectSignal(a,t)}}};var q=i(16),V=i.n(q),I=i(41),L="https://6xuthl3lv4.execute-api.us-east-1.amazonaws.com/live/share";function R(){return(R=Object(I.a)(V.a.mark((function e(t){var i,r,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(L,"?shareId=").concat(t));case 2:if(!(i=e.sent).ok){e.next=10;break}return e.next=6,i.text();case 6:if(!(r=e.sent)){e.next=10;break}return a=JSON.parse(r),e.abrupt("return",T(a));case 10:throw new Error("Invalid share");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return(G=Object(I.a)(V.a.mark((function e(t){var i,r,a,n,l;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=F(t),e.next=3,fetch(L,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({encodedSimulatorMap:JSON.stringify(i)})});case 3:if(!(r=e.sent).ok){e.next=12;break}return e.next=7,r.json();case 7:if(!(a=e.sent)||!a.body){e.next=12;break}if(n=JSON.parse(a.body),!(l=n.shareId)){e.next=12;break}return e.abrupt("return",l);case 12:throw new Error("Failed share upload");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function W(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?U(i,!0).forEach((function(t){Object(c.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):U(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function N(e){var t=Object(r.useState)(void 0!==e.initiallyCollapsed&&e.initiallyCollapsed),i=Object(u.a)(t,2),n=i[0],l=i[1];return a.a.createElement("div",{id:e.id,className:e.className,style:W({textAlign:"center",background:"rgb(33, 33, 33)",fontWeight:"lighter",color:"white"},e.style)},a.a.createElement("button",{onClick:function(e){return l(!n)},style:W({width:"100%",height:"24px",background:"rgb(50, 50, 50)",border:"0px",color:"white",fontWeight:"bold",cursor:"pointer"},e.buttonStyle)},e.title?"".concat(e.title," "):"","[",n?"+":"-","]"),!n&&e.children)}function J(e){var t=e.value,i=e.setValue,n=e.allowNegative,l=e.logarithmic,o=e.displayDigits,c=l?Math.log2(Math.abs(t)):Math.abs(t),s=Object(r.useState)(t<0),d=Object(u.a)(s,2),p=d[0],h=d[1],m=Object(r.useRef)(null),f=Object(r.useCallback)((function(){if(m.current){var e=parseFloat(m.current.value);l&&(e=Math.pow(2,e)),i((p?-1:1)*e)}}),[i,p,l,m]);Object(r.useEffect)((function(){return f()}),[p,f]);var b=void 0!==o?t.toFixed(o):t;return a.a.createElement("div",null,a.a.createElement("label",null,e.label),n&&a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{style:{marginLeft:"10px"},type:"checkbox",checked:p,onChange:function(e){return h(e.target.checked)}}),a.a.createElement("label",null,"Negative")),a.a.createElement("div",null,a.a.createElement("input",{type:"range",ref:m,min:e.min,max:e.max,value:c,step:e.step,onChange:f,style:{height:10,width:"100%"}}),a.a.createElement("div",{style:{textAlign:"center",lineHeight:.2,marginBottom:"7px"}},b)))}function Y(e){return a.a.createElement("div",{style:e.style},e.options.map((function(t,i){return a.a.createElement("button",{key:t,style:W({backgroundColor:"rgb(50, 50, 50)",color:"white",border:i===e.selectedOption?"3px solid rgb(0, 150, 255)":"0",height:"30px",width:"70px",overflow:"hidden",textOverflow:"hidden"},e.buttonStyle),onClick:function(t){return e.setSelectedOption(i)}},t)})))}function X(e){var t=e.shareId,i=e.setShareId,n=e.simulator,l=e.dt,o=e.cellSize,c=e.gridSize,s=Object(r.useState)(""),d=Object(u.a)(s,2),p=d[0],h=d[1],m=Object(r.useMemo)((function(){return function(){if(n){var e=n.getData();return{permittivity:e.permittivity.values.toArray(),permeability:e.permeability.values.toArray(),shape:[e.permeability.shape[0],e.permeability.shape[1]]}}return null}}),[n]),f=Object(r.useCallback)((function(){var e=m();e&&window.open(B(e))}),[m]),b=Object(r.useCallback)((function(){if(n){var e=D(p);n&&(n.loadPermeability(e.permeability),n.loadPermittivity(e.permittivity))}}),[n,p]),v=Object(r.useCallback)((function(){var e=m();e&&function(e){return G.apply(this,arguments)}({materialMap:e,simulationSettings:{cellSize:o,dt:l,gridSize:c,simulationSpeed:1},sourceDescriptors:[]}).then((function(e){return i(e)})).catch((function(e){return console.log("Error uploading share: "+JSON.stringify(e))}))}),[m,i,l,o,c]),g=Object(r.useMemo)((function(){return t?"".concat(window.location.origin).concat(window.location.pathname,"#").concat(t):null}),[t]),y=Object(r.useRef)(null),S=Object(r.useCallback)((function(){y.current&&(y.current.select(),document.execCommand("copy"))}),[y]),O=Object(r.useCallback)((function(){var e=window.navigator;e.share&&e.share({title:"EM Simulator",text:"Check out what I made in this interactive web-based simulator for electromagnetic waves!",url:g}).then((function(){return console.log("Shared")})).catch((function(e){return console.error("Share failed: ".concat(e))}))}),[g]);return a.a.createElement("div",{style:{padding:"10px",paddingTop:"0px"}},a.a.createElement("div",null,a.a.createElement("div",{style:{fontSize:"20px"}},"Share"),a.a.createElement("div",null,a.a.createElement("button",{onClick:v,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Generate share url")),a.a.createElement("div",null,g&&a.a.createElement("div",null,a.a.createElement("input",{ref:y,readOnly:!0,type:"text",value:g,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px",width:"70%"}}),a.a.createElement("button",{onClick:S,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Copy"),void 0!==window.navigator.share&&a.a.createElement("button",{onClick:O,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Share")))),a.a.createElement("div",{style:{marginTop:"5px"}},a.a.createElement("div",{style:{fontSize:"20px"}},"Material image"),a.a.createElement("div",null,a.a.createElement("button",{onClick:f,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Save")),a.a.createElement("div",null,a.a.createElement("input",{type:"text",onChange:function(e){return h(e.target.value)},style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}}),a.a.createElement("button",{onClick:b,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Load"))))}function K(e){var t=e.simulator,i=e.setGridSizeLongest,n=e.setDt,l=e.setCellSize,u=e.setSimulationSpeed,o=e.setSources,c=Object(r.useCallback)((function(e){t&&(t.resetFields(),t.loadPermeability(e.materialMap.permeability),t.loadPermittivity(e.materialMap.permittivity));var r=e.sourceDescriptors.map((function(e){if("point"===e.type)return new P(e.amplitude,e.frequency,e.position,e.turnOffTime);throw new Error("Unsupported source type: ".concat(e.type))}));l(e.simulationSettings.cellSize),n(e.simulationSettings.dt),u(e.simulationSettings.simulationSpeed),i(Math.max(e.simulationSettings.gridSize[0],e.simulationSettings.gridSize[1])),o(r)}),[t,l,n,u,i,o]),s=Object(r.useMemo)((function(){return{dt:e.dt,cellSize:e.cellSize,gridSize:e.gridSize,simulationSpeed:e.simulationSpeed}}),[e.dt,e.cellSize,e.gridSize,e.simulationSpeed]);return a.a.createElement("div",{style:{padding:"10px"}},a.a.createElement("button",{onClick:function(e){return c(function(e){for(var t={permittivity:[],permeability:[],shape:e.gridSize},i=0;i<e.gridSize[1];i++)t.permittivity.push(new Array(e.gridSize[0]).fill(1)),t.permeability.push(new Array(e.gridSize[0]).fill(1));return{sourceDescriptors:[],simulationSettings:e,materialMap:t}}(s))},style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px"}},"Empty"),a.a.createElement("button",{onClick:function(e){return c(function(e){for(var t={permittivity:[],permeability:[],shape:e.gridSize},i=Math.round(.75*e.gridSize[0]),r=.2/e.cellSize,a=0;a<e.gridSize[1];a++){var n=Math.abs(a-e.gridSize[1]/5)<2,l=new Array(e.gridSize[0]).fill(n?100:1);if(n){for(var u=i-2*r;u<i-r;u++)l[u]=1;for(var o=i+2*r;o>i+r;o--)l[o]=1}t.permittivity.push(l),t.permeability.push(new Array(e.gridSize[0]).fill(1))}return{sourceDescriptors:[{type:"point",amplitude:3e4,frequency:3,position:[Math.round(i),Math.round(e.gridSize[1]/15)]}],simulationSettings:e,materialMap:t}}(s))},style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px"}},"Double slit"),a.a.createElement("button",{onClick:function(e){return c(function(e){for(var t={permittivity:[],permeability:[],shape:e.gridSize},i=0;i<e.gridSize[1];i++)t.permittivity.push(new Array(e.gridSize[0]).fill(1)),t.permeability.push(new Array(e.gridSize[0]).fill(1));function r(t){return[Math.round(3*e.gridSize[0]/4+e.gridSize[0]/5*.5/(2*t+1)*-Math.sin(2*Math.PI*t)),Math.round(e.gridSize[1]*(.1+.8*t))]}for(var a=.04/e.cellSize,n=0;n<100;n++)for(var l=r(n/100),u=-a+l[0];u<a+l[0];u++)for(var o=-a+l[1];o<a+l[1];o++)u>=0&&o>=0&&u<e.gridSize[0]&&o<e.gridSize[1]&&(t.permittivity[o][u]=2);var c=r(1);return{sourceDescriptors:[{type:"point",amplitude:8e3,frequency:5,position:[c[0]-1,c[1]],turnOffTime:.5},{type:"point",amplitude:8e3,frequency:5,position:[c[0]+2,c[1]],turnOffTime:.5}],simulationSettings:e,materialMap:t}}(s))},style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px"}},"Fiber optics"),a.a.createElement("button",{onClick:function(e){return c(function(e){var t={permittivity:[],permeability:[],shape:e.gridSize},i=[.6*e.gridSize[0],e.gridSize[1]/2];function r(t){var r=t[0]-i[0],a=t[1]-i[1];return 4*r*r+a*a<e.gridSize[0]*e.gridSize[0]/100}for(var a=0;a<e.gridSize[1];a++){t.permittivity.push([]),t.permeability.push(new Array(e.gridSize[0]).fill(1));for(var n=0;n<e.gridSize[0];n++)t.permittivity[a].push(r([n,a])?3:1)}return{sourceDescriptors:[{type:"point",amplitude:2e4,frequency:2,position:[Math.round(e.gridSize[0]/10),Math.round(e.gridSize[1]/2)],turnOffTime:.5}],simulationSettings:e,materialMap:t}}(s))},style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px"}},"Lens"))}function Q(e){var t=e.qualityPresets,i=e.setCellSize,n=e.setGridSizeLongest,l=e.setResolutionScale,u=e.setDt,o=Object(r.useCallback)((function(e){i(e.cellSize),n(e.gridSizeLongest),l(e.resolutionScale),u(e.dt)}),[i,n,l,u]);return a.a.createElement("div",{style:{padding:"10px"}},a.a.createElement("div",null,"Quality presets"),a.a.createElement("div",null,Object.keys(t).map((function(e){return a.a.createElement("button",{key:e,onClick:function(i){return o(t[e])},style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px"}},e)}))),a.a.createElement(J,{label:"Grid length",value:e.gridSizeLongest,setValue:e.setGridSizeLongest,min:100,max:2e3,step:100}),a.a.createElement(J,{label:"Time step size",value:e.dt,setValue:e.setDt,min:.001,max:.1,step:.001,allowNegative:!0}),a.a.createElement(J,{label:"Cell size",value:e.cellSize,setValue:e.setCellSize,min:.002,max:.2,step:.001}),a.a.createElement(J,{label:"Resolution scale",value:e.resolutionScale,setValue:e.setResolutionScale,min:.1,max:2,step:.1}),a.a.createElement(J,{label:"Simulation speed",value:e.simulationSpeed,setValue:e.setSimulationSpeed,min:0,max:10,step:.1}),a.a.createElement("input",{type:"checkbox",checked:e.reflectiveBoundary,onChange:function(t){return e.setReflectiveBoundary(t.target.checked)}}),"Reflective boundary")}function Z(e){var t=1===e.clickOption,i=e.drawShapeType,n=e.setDrawShapeType,l=Object(r.useMemo)((function(){return"square"===i?0:1}),[i]),u=Object(r.useCallback)((function(e){return n(0===e?"square":"circle")}),[n]),o=Object(r.useMemo)((function(){return"square"===i?"Brush size":"Brush radius"}),[i]);return a.a.createElement("div",{style:{padding:"10px"}},a.a.createElement("input",{type:"checkbox",checked:e.snapInput,onChange:function(t){return e.setSnapInput(t.target.checked)}}),a.a.createElement("label",null,"Snap to 45\xb0 line"),a.a.createElement(Y,{buttonStyle:{height:"24px"},options:["Square","Circle"],selectedOption:l,setSelectedOption:u}),a.a.createElement("div",{style:{display:t?void 0:"none"}},a.a.createElement(J,{label:o,value:e.signalBrushSize,setValue:e.setSignalBrushSize,min:1,max:100,step:1}),a.a.createElement(J,{label:"Signal amplitude",value:e.signalBrushValue,setValue:e.setSignalBrushValue,min:1,max:100,step:1}),a.a.createElement(J,{label:"Signal frequency",value:e.signalFrequency,setValue:e.setSignalFrequency,min:0,max:25,step:.25})),a.a.createElement("div",{style:{display:t?"none":void 0}},a.a.createElement(J,{label:o,value:e.materialBrushSize,setValue:e.setMaterialBrushSize,min:1,max:100,step:1}),a.a.createElement(J,{label:"\u03b5 value",value:e.permittivityBrushValue,setValue:e.setPermittivityBrushValue,min:-1,max:10,step:.1,allowNegative:!0,logarithmic:!0,displayDigits:1}),a.a.createElement(J,{label:"\xb5 value",value:e.permeabilityBrushValue,setValue:e.setPermeabilityBrushValue,min:-1,max:10,step:.1,allowNegative:!0,logarithmic:!0,displayDigits:1})),a.a.createElement(Y,{style:{margin:"10px"},options:["Material","Signal"],selectedOption:e.clickOption,setSelectedOption:e.setClickOption}),a.a.createElement("div",null,a.a.createElement("button",{onClick:e.resetFields,style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px",width:"130px"}},"Reset fields"),a.a.createElement("button",{onClick:e.resetMaterials,style:{backgroundColor:"rgb(50, 50, 50)",border:"0px",color:"white",margin:"2px",width:"130px"}},"Reset materials")))}function H(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}function _(e,t,i){return Math.max(e,Math.min(t,i))}var $=i(85),ee=i.n($);i(202);function te(e,t,i,r,a){return r<0||r>=t||a<0||a>=i?0:e[a][r]}function ie(e,t,i,r,a,n,l,u,o,c){var s=o[0],d=o[1],p=s*this.thread.x/this.output.x,h=d*(1-this.thread.y/this.output.y),m=4e-4/(c*c),f=te(e,s,d,p,h),b=te(t,s,d,p,h),v=te(i,s,d,p,h),g=m*m*(f*f+b*b+v*v),y=te(r,s,d,p-.5,h-.5),S=te(a,s,d,p-.5,h-.5),O=te(n,s,d,p-.5,h-.5),x=m*m*(y*y+S*S+O*O),w=2/(1+Math.exp(-.4*te(l,s,d,p,h)))-1,j=2/(1+Math.exp(-.4*te(u,s,d,p,h)))-1,E=Math.max(1,o[0]/this.output.x),M=Math.max(1,o[1]/this.output.y),z=(Math.abs(E*p%1-.5)<.25?1:0)*(Math.abs(M*h%1-.5)<.25?1:0),k=1-z;this.color(Math.min(1,g+.8*z*w),Math.min(1,g+x),Math.min(1,x+.8*k*j))}function re(e,t,i,r,a,n,l,u,o,c){var s=o[0],d=o[1],p=s*this.thread.x/this.output.x,h=d*(1-this.thread.y/this.output.y),m=Math.round(p),f=Math.round(h),b=4e-4/(c*c),v=te(e,s,d,m,f),g=te(t,s,d,m,f),y=te(i,s,d,m,f),S=b*b*(v*v+g*g+y*y),O=te(r,s,d,m,f),x=te(a,s,d,m,f),w=te(n,s,d,m,f),j=b*b*(O*O+x*x+w*w),E=2/(1+Math.exp(-.4*te(l,s,d,m,f)))-1,M=2/(1+Math.exp(-.4*te(u,s,d,m,f)))-1,z=Math.max(1,o[0]/this.output.x),k=Math.max(1,o[1]/this.output.y),C=(Math.abs(z*p%1-.5)<.25?1:0)*(Math.abs(k*h%1-.5)<.25?1:0),A=1-C;this.color(Math.min(1,S+.8*C*E),Math.min(1,S+j),Math.min(1,j+.8*A*M))}var ae={Low:{dt:.026,cellSize:.04,resolutionScale:.3,gridSizeLongest:200},Medium:{dt:.013,cellSize:.02,resolutionScale:1,gridSizeLongest:400},High:{dt:.0065,cellSize:.01,resolutionScale:1,gridSizeLongest:800},Ultra:{dt:.00325,cellSize:.005,resolutionScale:1,gridSizeLongest:1600}},ne=function(){if(o.GPU.isSinglePrecisionSupported){if(o.GPU.isWebGL2Supported)return"webgl2";if(o.GPU.isWebGLSupported)return"webgl"}return"cpu"}();console.log("Using GPU mode ".concat(ne));var le="cpu"===ne?ae.Low:ae.Medium,ue="cpu"===ne?1:3,oe=le.dt,ce=le.cellSize,se=le.gridSizeLongest,de=le.resolutionScale,pe=[window.innerWidth,window.innerHeight],he=fe(pe,de),me=be(se,he);function fe(e,t){return[Math.round(e[0]*t),Math.round(e[1]*t)]}function be(e,t){var i=t[0]/t[1];return t[0]>=t[1]?[e,Math.ceil(e/i)]:[Math.ceil(e*i),e]}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement((function(){var e=window.location.hash?window.location.hash.substr(1):null,t=Object(r.useState)(e),i=Object(u.a)(t,2),n=i[0],l=i[1],c=Object(r.useRef)(null),s=Object(r.useState)(he),d=Object(u.a)(s,2),p=d[0],h=d[1],m=Object(r.useState)(pe),f=Object(u.a)(m,2),b=f[0],v=f[1],g=Object(r.useState)(se),y=Object(u.a)(g,2),S=y[0],O=y[1],x=Object(r.useState)(oe),w=Object(u.a)(x,2),j=w[0],E=w[1],k=Object(r.useState)(ce),A=Object(u.a)(k,2),F=A[0],T=A[1],B=Object(r.useState)(de),D=Object(u.a)(B,2),P=D[0],q=D[1],V=Object(r.useState)(1),I=Object(u.a)(V,2),L=I[0],G=I[1],U=Object(r.useState)(!1),W=Object(u.a)(U,2),J=W[0],Y=W[1],$=Object(r.useState)([]),le=Object(u.a)($,2),ve=le[0],ge=le[1];Object(r.useEffect)((function(){var e=function(){var e=[window.innerWidth,window.innerHeight];h(fe(e,P)),v(e)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[P]);var ye=Object(r.useMemo)((function(){return be(S,p)}),[p,S]),Se=Object(r.useState)(null),Oe=Object(u.a)(Se,2),xe=Oe[0],we=Oe[1];Object(r.useEffect)((function(){c.current&&we(new o.GPU({mode:ne,canvas:c.current}))}),[c]);var je=Object(r.useMemo)((function(){return xe?new C(xe,me,ce,!1):null}),[xe]),Ee=Object(r.useMemo)((function(){return xe?function(e,t){return("cpu"!==ne?e.createKernel(ie):e.createKernel(re)).setOutput(t).setGraphical(!0).setFunctions([te]).setWarnVarUsage(!1).setTactic("performance").setPrecision("unsigned").setDynamicOutput(!0).setDynamicArguments(!0)}(xe,me):null}),[xe]);Object(r.useEffect)((function(){je&&e&&(console.log("Loading ".concat(e)),function(e){return R.apply(this,arguments)}(e).then((function(t){je.loadPermittivity(t.materialMap.permittivity),je.loadPermeability(t.materialMap.permeability),E(t.simulationSettings.dt),O(Math.max(t.simulationSettings.gridSize[0],t.simulationSettings.gridSize[1])),T(t.simulationSettings.cellSize),console.log("Loaded ".concat(e))})).catch((function(t){return console.error("Error getting share ".concat(e,": ").concat(JSON.stringify(t)))})))}),[je,e]),Object(r.useEffect)((function(){Ee&&Ee.setOutput(p)}),[Ee,p]),Object(r.useEffect)((function(){je&&je.setGridSize(ye)}),[je,ye]),Object(r.useEffect)((function(){je&&je.setCellSize(F)}),[je,F]),Object(r.useEffect)((function(){je&&(je.reflectiveBoundary=J)}),[je,J]);var Me=Object(r.useState)(1),ze=Object(u.a)(Me,2),ke=ze[0],Ce=ze[1],Ae=Object(r.useState)(10),Fe=Object(u.a)(Ae,2),Te=Fe[0],Be=Fe[1],De=Object(r.useState)("square"),Pe=Object(u.a)(De,2),qe=Pe[0],Ve=Pe[1],Ie=Object(r.useState)(5),Le=Object(u.a)(Ie,2),Re=Le[0],Ge=Le[1],Ue=Object(r.useState)(5),We=Object(u.a)(Ue,2),Ne=We[0],Je=We[1],Ye=Object(r.useState)(1),Xe=Object(u.a)(Ye,2),Ke=Xe[0],Qe=Xe[1],Ze=Object(r.useState)(ue),He=Object(u.a)(Ze,2),_e=He[0],$e=He[1],et=Object(r.useState)(!1),tt=Object(u.a)(et,2),it=tt[0],rt=tt[1],at=Object(r.useState)(1),nt=Object(u.a)(at,2),lt=nt[0],ut=nt[1],ot=Object(r.useState)(null),ct=Object(u.a)(ot,2),st=ct[0],dt=ct[1],pt=Object(r.useRef)(0),ht=Object(r.useRef)(null),mt=Object(r.useState)(!1),ft=Object(u.a)(mt,2),bt=ft[0],vt=ft[1],gt=Object(r.useState)(null),yt=Object(u.a)(gt,2),St=yt[0],Ot=yt[1],xt=Object(r.useState)(null),wt=Object(u.a)(xt,2),jt=wt[0],Et=wt[1],Mt=Object(r.useMemo)((function(){return function(e){return[_(0,ye[0]-1,Math.floor(ye[0]*e[0]/b[0])),_(0,ye[1]-1,Math.floor(ye[1]*e[1]/b[1]))]}}),[b,ye]),zt=Object(r.useCallback)((function(){if(je){var e=je.getData();if(null!==ht.current){var t=Mt(ht.current),i=Math.round(ke/2),r=2e3*-Te*Math.cos(2*Math.PI*_e*e.time),a="square"===qe?M(t,i,r):z(t,i,r);je.injectSignal(a,j)}var n=!0,l=!1,u=void 0;try{for(var o,c=ve[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){o.value.inject(je,j)}}catch(s){l=!0,u=s}finally{try{n||null==c.return||c.return()}finally{if(l)throw u}}je.stepMagnetic(j),je.stepElectric(j)}}),[je,j,_e,Te,ke,ve,Mt,qe]);Object(r.useEffect)((function(){if(L>0){var e=setInterval(zt,1e3/L*j);return function(){return clearInterval(e)}}}),[zt,j,L]);var kt=Object(r.useCallback)((function(){if(je&&Ee){if(c.current){var e=fe([window.innerWidth,window.innerHeight],P);c.current.width=e[0],c.current.height=e[1]}var t=je.getData();Ee(t.electricField[0].values,t.electricField[1].values,t.electricField[2].values,t.magneticField[0].values,t.magneticField[1].values,t.magneticField[2].values,t.permittivity.values,t.permeability.values,ye,F)}}),[je,Ee,ye,F,P,c]);Object(r.useEffect)((function(){var e=!1;return requestAnimationFrame((function t(){e||(kt(),requestAnimationFrame(t))})),function(){e=!0}}),[kt]);var Ct=Object(r.useCallback)((function(e){if(je){var t=[Math.round(ye[0]*(e[0]/b[0])),Math.round(ye[1]*(e[1]/b[1]))],i=Math.round(Re/2);je.drawMaterial("permittivity","square"===qe?M(t,i,Ne):z(t,i,Ne)),je.drawMaterial("permeability","square"===qe?M(t,i,Ke):z(t,i,Ke))}}),[je,ye,b,Re,Ne,Ke,qe]),At=Object(r.useCallback)((function(){je&&je.resetMaterials()}),[je]),Ft=Object(r.useCallback)((function(){je&&(je.resetFields(),pt.current=0)}),[je]),Tt=Object(r.useCallback)((function(e){je&&(Ot(e),1===lt?ht.current=e:0===lt&&(Ct(e),rt(!0)))}),[je,Ct,lt]),Bt=Object(r.useCallback)((function(e,t){if(je){var i=e;if((bt||t)&&St){var r=[i[0]-St[0],i[1]-St[1]];if(jt){var a=r[0]*jt[0]+r[1]*jt[1];i=[St[0]+a*jt[0],St[1]+a*jt[1]]}else{if(r[0]*r[0]+r[1]*r[1]>1e-4*(b[0]*b[0]+b[1]*b[1])){var n=Math.PI/4,l=Math.round(Math.atan2(r[1],r[0])/n)*n,u=[Math.cos(l),Math.sin(l)];Et(u)}}}1===lt&&null!==ht.current&&(ht.current=i),it&&Ct(i)}}),[je,Ct,lt,it,jt,St,b,bt]),Dt=Object(r.useCallback)((function(){1===lt?ht.current=null:0===lt&&rt(!1),Et(null),Ot(null)}),[lt]),Pt=Object(r.useMemo)((function(){return(1===lt?ke:Re)*(p[0]/ye[0])}),[lt,ke,Re,p,ye]);return a.a.createElement("div",{style:{touchAction:"none",userSelect:"none"}},a.a.createElement("canvas",{width:p[0],height:p[1],ref:c,style:{position:"absolute",width:b[0],height:b[1]},onMouseDown:function(e){return Tt([e.clientX,e.clientY])},onMouseMove:function(e){dt([e.clientX,e.clientY]),Bt([e.clientX,e.clientY],e.shiftKey)},onMouseUp:function(e){return Dt()},onMouseLeave:function(e){return Dt()},onTouchStart:function(e){dt([e.touches[0].clientX,e.touches[0].clientY]),Tt([e.touches[0].clientX,e.touches[0].clientY])},onTouchMove:function(e){dt([e.touches[0].clientX,e.touches[0].clientY]),Bt([e.touches[0].clientX,e.touches[0].clientY])},onTouchEnd:function(e){dt(null),Dt()},onTouchCancel:function(e){dt(null),Dt()},onContextMenu:function(e){return e.preventDefault()}}),a.a.createElement("div",{style:{position:"absolute",bottom:10,right:10}},a.a.createElement("a",{href:"mailto:tora@warlock.ai?subject=EM simulation feedback",rel:"noopener noreferrer",target:"_blank",style:{fontWeight:"lighter",color:"rgba(255, 255, 255, 100)",textDecoration:"none",marginRight:"8px"}},"Feedback"),a.a.createElement("a",{href:"https://github.com/RobinKa/maxwell-simulation",rel:"noopener noreferrer",target:"_blank",style:{fontWeight:"lighter",color:"rgba(255, 255, 255, 100)",textDecoration:"none"}},"Source code")),st&&("square"===qe?a.a.createElement("div",{style:{position:"absolute",pointerEvents:"none",left:st[0]-Pt/2,top:st[1]-Pt/2,width:Pt,height:Pt,border:"2px solid yellow"}}):a.a.createElement("div",{style:{position:"absolute",pointerEvents:"none",left:st[0]-Pt/2,top:st[1]-Pt/2,width:Pt,height:Pt,border:"2px solid yellow",borderRadius:"50%"}})),"cpu"===ne&&a.a.createElement("div",{style:{position:"absolute",pointerEvents:"none",left:10,bottom:10,color:"red",fontWeight:"lighter"}},"Using CPU (WebGL with float textures unsupported by your device)"),a.a.createElement("img",{onClick:H,src:ee.a,alt:"Fullscreen",style:{position:"absolute",right:10,top:10,cursor:"pointer"}}),a.a.createElement(N,{id:"Menu",title:"Menu",buttonStyle:{background:"rgb(60, 60, 60)"}},a.a.createElement(N,{title:"Examples"},a.a.createElement(K,{simulator:je,setCellSize:T,setDt:E,setGridSizeLongest:O,setSimulationSpeed:G,setSources:ge,gridSize:ye,dt:j,cellSize:F,simulationSpeed:L})),a.a.createElement(N,{title:"Controls"},a.a.createElement(Z,{signalBrushSize:ke,setSignalBrushSize:Ce,materialBrushSize:Re,setMaterialBrushSize:Ge,signalBrushValue:Te,setSignalBrushValue:Be,permittivityBrushValue:Ne,setPermittivityBrushValue:Je,permeabilityBrushValue:Ke,setPermeabilityBrushValue:Qe,signalFrequency:_e,setSignalFrequency:$e,clickOption:lt,setClickOption:ut,drawShapeType:qe,setDrawShapeType:Ve,snapInput:bt,setSnapInput:vt,resetFields:Ft,resetMaterials:At})),a.a.createElement(N,{title:"Share",initiallyCollapsed:!0},a.a.createElement(X,{simulator:je,gridSize:ye,shareId:n,setShareId:l,cellSize:F,dt:j})),a.a.createElement(N,{title:"Settings",initiallyCollapsed:!0},a.a.createElement(Q,{gridSizeLongest:S,setGridSizeLongest:O,simulationSpeed:L,setSimulationSpeed:G,resolutionScale:P,setResolutionScale:q,cellSize:F,setCellSize:T,reflectiveBoundary:J,setReflectiveBoundary:Y,dt:j,setDt:E,qualityPresets:ae}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABISURBVFhH7dchDgAhDETRKfe/M1TUlgyqgv8Mq+AnQMjGTjJFqs+rlzlXjWMIIKC9Be6Jd3XrsAUEAAB4jgkYD+DPiIDfA6QD/j8gGcpVf+MAAAAASUVORK5CYII="},86:function(e,t,i){e.exports=i(203)},91:function(e,t,i){}},[[86,1,2]]]);
//# sourceMappingURL=main.72a29ac4.chunk.js.map
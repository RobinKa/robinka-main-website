(this.webpackJsonpmaxwell=this.webpackJsonpmaxwell||[]).push([[0],{183:function(e,t,i){"use strict";i.r(t);var a=i(5),r=i.n(a),n=i(71),c=i.n(n),u=(i(81),i(7)),l=i(72),s=i(73);function o(e){var t={};return function(i){return t[i]||(t[i]=e()),t[i]}}var d=function e(t,i,a){var r=this;function n(e,t,i,a,r){return a<0||a>=t||r<0||r>=i?0:e[r][a]}Object(s.a)(this,e),this.gpu=t,this.gridSize=i,this.cellSize=a,this.data=void 0,this.updateMagneticX=void 0,this.updateMagneticY=void 0,this.updateMagneticZ=void 0,this.updateElectricX=void 0,this.updateElectricY=void 0,this.updateElectricZ=void 0,this.injectSource=void 0,this.decaySource=void 0,this.makeFieldTexture=void 0,this.copyTexture=void 0,this.drawOnTexture=void 0,this.setGridSize=function(e){r.gridSize=e,[r.updateElectricX,r.updateElectricY,r.updateElectricZ,r.updateMagneticX,r.updateMagneticY,r.updateMagneticZ,r.injectSource,r.decaySource,r.makeFieldTexture("ex"),r.makeFieldTexture("ey"),r.makeFieldTexture("ez"),r.makeFieldTexture("mx"),r.makeFieldTexture("my"),r.makeFieldTexture("mz"),r.makeFieldTexture("esz"),r.makeFieldTexture("permeability"),r.makeFieldTexture("permittivity"),r.copyTexture("loadPermittivity"),r.copyTexture("loadPermittivity"),r.copyTexture("permeability"),r.copyTexture("permittivity"),r.copyTexture("ex"),r.copyTexture("ey"),r.copyTexture("esz"),r.copyTexture("mx"),r.copyTexture("my"),r.copyTexture("mz"),r.drawOnTexture("esz"),r.drawOnTexture("permeability"),r.drawOnTexture("permittivity")].forEach((function(t){return t.setOutput(e)})),r.data.electricFieldX.shape=e,r.data.electricFieldY.shape=e,r.data.electricFieldZ.shape=e,r.data.magneticFieldX.shape=e,r.data.magneticFieldY.shape=e,r.data.magneticFieldZ.shape=e,r.data.permittivity.shape=e,r.data.permeability.shape=e,r.data.permittivity.values=r.copyTexture("permittivity")(r.data.permittivity.values),r.data.permeability.values=r.copyTexture("permeability")(r.data.permeability.values),r.resetFields()},this.setCellSize=function(e){r.cellSize=e,r.resetFields()},this.stepElectric=function(e){var t=r.data.electricFieldX.values,i=r.data.electricFieldY.values,a=r.data.electricFieldZ.values,n=r.data.magneticFieldX.values,c=r.data.magneticFieldY.values,u=r.data.magneticFieldZ.values,l=r.data.permittivity.values,s=r.injectSource(r.data.electricSourceFieldZ.values,a,e);r.data.electricSourceFieldZ.values=r.decaySource(r.copyTexture("esz")(r.data.electricSourceFieldZ.values),e),r.data.electricFieldX.values=r.updateElectricX(c,u,l,r.copyTexture("ex")(t),e,r.cellSize),r.data.electricFieldY.values=r.updateElectricY(n,u,l,r.copyTexture("ey")(i),e,r.cellSize),r.data.electricFieldZ.values=r.updateElectricZ(n,c,l,s,e,r.cellSize),r.data.time+=e/2},this.stepMagnetic=function(e){var t=r.data.electricFieldX.values,i=r.data.electricFieldY.values,a=r.data.electricFieldZ.values,n=r.data.magneticFieldX.values,c=r.data.magneticFieldY.values,u=r.data.magneticFieldZ.values,l=r.data.permeability.values;r.data.magneticFieldX.values=r.updateMagneticX(i,a,l,r.copyTexture("mx")(n),e,r.cellSize),r.data.magneticFieldY.values=r.updateMagneticY(t,a,l,r.copyTexture("my")(c),e,r.cellSize),r.data.magneticFieldZ.values=r.updateMagneticZ(t,i,l,r.copyTexture("mz")(u),e,r.cellSize),r.data.time+=e/2},this.resetFields=function(){r.data.time=0,r.data.electricFieldX.values=r.makeFieldTexture("ex")(0),r.data.electricFieldY.values=r.makeFieldTexture("ey")(0),r.data.electricFieldZ.values=r.makeFieldTexture("ez")(0),r.data.magneticFieldX.values=r.makeFieldTexture("mx")(0),r.data.magneticFieldY.values=r.makeFieldTexture("my")(0),r.data.magneticFieldZ.values=r.makeFieldTexture("mz")(0),r.data.electricSourceFieldZ.values=r.makeFieldTexture("esz")(0)},this.resetMaterials=function(){r.data.permeability.values=r.makeFieldTexture("permeability")(1),r.data.permittivity.values=r.makeFieldTexture("permittivity")(1)},this.drawPermeability=function(e,t,i){r.data.permeability.values=r.drawOnTexture("permeability")(e,t,i,0,r.copyTexture("permability")(r.data.permeability.values))},this.drawPermittivity=function(e,t,i){r.data.permittivity.values=r.drawOnTexture("permittivity")(e,t,i,0,r.copyTexture("permittivity")(r.data.permittivity.values))},this.injectSignal=function(e,t,i,a){r.data.electricSourceFieldZ.values=r.drawOnTexture("esz")(e,t,i*a,1,r.copyTexture("esz")(r.data.electricSourceFieldZ.values))},this.loadPermittivity=function(e){r.data.permittivity.values=r.copyTexture("loadPermittivity")(e)},this.loadPermeability=function(e){r.data.permeability.values=r.copyTexture("loadPermeability")(e)},this.getData=function(){return r.data},this.makeFieldTexture=o((function(){return r.gpu.createKernel((function(e){return e})).setOutput(r.gridSize).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0)})),this.copyTexture=o((function(){return r.gpu.createKernel((function(e){return e[this.thread.y][this.thread.x]})).setOutput(r.gridSize).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0)})),this.data={time:0,electricFieldX:{values:this.makeFieldTexture("ex")(0),shape:this.gridSize},electricFieldY:{values:this.makeFieldTexture("ey")(0),shape:this.gridSize},electricFieldZ:{values:this.makeFieldTexture("ez")(0),shape:this.gridSize},magneticFieldX:{values:this.makeFieldTexture("mx")(0),shape:this.gridSize},magneticFieldY:{values:this.makeFieldTexture("my")(0),shape:this.gridSize},magneticFieldZ:{values:this.makeFieldTexture("mz")(0),shape:this.gridSize},electricSourceFieldZ:{values:this.makeFieldTexture("esz")(0),shape:this.gridSize},permittivity:{values:this.makeFieldTexture("permittivity")(1),shape:this.gridSize},permeability:{values:this.makeFieldTexture("permeability")(1),shape:this.gridSize}},this.drawOnTexture=o((function(){return r.gpu.createKernel((function(e,t,i,a,r){var c=this.thread.x,u=this.thread.y,l=n(r,this.output.x,this.output.y,c,u);return Math.max(Math.abs(e[0]-c),Math.abs(e[1]-u))<t?i+a*l:l}),{constants:{cellSize:a}}).setOutput(r.gridSize).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0)})),this.injectSource=this.gpu.createKernel((function(e,t,i){var a=this.thread.x,r=this.thread.y,c=this.output.x,u=this.output.y;return n(t,c,u,a,r)+n(e,c,u,a,r)*i})).setOutput(this.gridSize).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0),this.decaySource=this.gpu.createKernel((function(e,t){var i=this.thread.x,a=this.thread.y;return n(e,this.output.x,this.output.y,i,a)*Math.pow(.1,t)})).setOutput(this.gridSize).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0),this.updateMagneticX=this.gpu.createKernel((function(e,t,i,a,r,c){var u=this.thread.x,l=this.thread.y,s=this.output.x,o=this.output.y;return n(a,s,o,u,l)-r/(n(i,s,o,u,l)*c)*(n(t,s,o,u,l+1)-n(t,s,o,u,l))}),{constants:{cellSize:a}}).setOutput(this.gridSize).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0),this.updateMagneticY=this.gpu.createKernel((function(e,t,i,a,r,c){var u=this.thread.x,l=this.thread.y,s=this.output.x,o=this.output.y;return n(a,s,o,u,l)-r/(n(i,s,o,u,l)*c)*-(n(t,s,o,u+1,l)-n(t,s,o,u,l))}),{constants:{cellSize:a}}).setOutput(this.gridSize).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0),this.updateMagneticZ=this.gpu.createKernel((function(e,t,i,a,r,c){var u=this.thread.x,l=this.thread.y,s=this.output.x,o=this.output.y;return n(a,s,o,u,l)-r/(n(i,s,o,u,l)*c)*(n(t,s,o,u+1,l)-n(t,s,o,u,l)-(n(e,s,o,u,l+1)-n(e,s,o,u,l)))}),{constants:{cellSize:a}}).setOutput(this.gridSize).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0),this.updateElectricX=this.gpu.createKernel((function(e,t,i,a,r,c){var u=this.thread.x,l=this.thread.y,s=this.output.x,o=this.output.y;return n(a,s,o,u,l)+r/(n(i,s,o,u,l)*c)*(n(t,s,o,u,l)-n(t,s,o,u,l-1))}),{constants:{cellSize:a}}).setOutput(this.gridSize).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0),this.updateElectricY=this.gpu.createKernel((function(e,t,i,a,r,c){var u=this.thread.x,l=this.thread.y,s=this.output.x,o=this.output.y;return n(a,s,o,u,l)+r/(n(i,s,o,u,l)*c)*-(n(t,s,o,u,l)-n(t,s,o,u-1,l))}),{constants:{cellSize:a}}).setOutput(this.gridSize).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0),this.updateElectricZ=this.gpu.createKernel((function(e,t,i,a,r,c){var u=this.thread.x,l=this.thread.y,s=this.output.x,o=this.output.y;return n(a,s,o,u,l)+r/(n(i,s,o,u,l)*c)*(n(t,s,o,u,l)-n(t,s,o,u-1,l)-(n(e,s,o,u,l)-n(e,s,o,u,l-1)))}),{constants:{cellSize:a}}).setOutput(this.gridSize).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance").setDynamicOutput(!0).setDynamicArguments(!0)},h=i(74);function m(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function g(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(i,!0).forEach((function(t){Object(h.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function v(e){var t=Object(a.useState)(!1),i=Object(u.a)(t,2),n=i[0],c=i[1];return r.a.createElement("div",{style:g({textAlign:"center",background:"rgb(33, 33, 33)",fontWeight:"lighter",color:"white"},e.style)},r.a.createElement("button",{onClick:function(e){return c(!n)},style:g({width:"100%",height:"24px",background:"rgb(50, 50, 50)",border:"0px",color:"white",fontWeight:"bold",cursor:"pointer"},e.buttonStyle)},e.title?"".concat(e.title," "):"","[",n?"+":"-","]"),!n&&e.children)}function y(e){return r.a.createElement("div",null,r.a.createElement("label",null,e.label),r.a.createElement("div",null,r.a.createElement("input",{type:"range",min:e.min,max:e.max,value:e.value,step:e.step,onChange:function(t){return e.setValue(parseFloat(t.target.value))},style:{height:10,width:"100%"}}),r.a.createElement("div",{style:{textAlign:"center",lineHeight:.1,marginBottom:"7px"}},e.value)))}function b(e){return r.a.createElement("div",null,e.options.map((function(t,i){return r.a.createElement("button",{key:t,style:{boxSizing:"border-box",border:i===e.selectedOption?"4px solid rgb(0, 150, 255)":"0",height:"30px",margin:"5px",width:"".concat(100/e.options.length,"%"),background:"rgb(100, 100, 100)",color:"white"},onClick:function(t){return e.setSelectedOption(i)}},t)})))}function f(e){var t=e.simulator,i=e.gridSize,n=Object(a.useState)(""),c=Object(u.a)(n,2),l=c[0],s=c[1],o=Object(a.useCallback)((function(){if(t){var e=t.getData();window.open(function(e){var t=document.createElement("canvas");t.width=e.shape[0],t.height=e.shape[1];var i=e.permeability,a=e.permittivity,r=t.getContext("2d");r.fillStyle="rgb(1, 0, 1)",r.fillRect(0,0,t.width,t.height),r.fillStyle="rgb(0, 255, 0)",r.textAlign="center",r.textBaseline="middle",r.fillText("warlock.ai/maxwell",t.width/2,t.height/2);for(var n=r.getImageData(0,0,t.width,t.height),c=0;c<t.width;c++)for(var u=0;u<t.height;u++)n.data[4*c+u*t.width*4+0]=Math.round(a[u][c]),n.data[4*c+u*t.width*4+2]=Math.round(i[u][c]),n.data[4*c+u*t.width*4+3]=255;return r.putImageData(n,0,0),t.toDataURL("image/png")}({permittivity:e.permittivity.values.toArray(),permeability:e.permeability.values.toArray(),shape:[e.permeability.shape[0],e.permeability.shape[1]]}))}}),[t]),d=Object(a.useCallback)((function(){t&&function(e,t,i){var a=document.createElement("canvas");a.width=t[0],a.height=t[1];var r=new Image;r.crossOrigin="anonymous",r.onload=function(e){var n=a.getContext("2d");n.fillStyle="rgb(1, 0, 1)",n.fillRect(0,0,a.width,a.height),n.drawImage(r,0,0,r.width,r.height);for(var c={permeability:[],permittivity:[],shape:t},u=n.getImageData(0,0,a.width,a.height).data,l=0;l<t[1];l++){c.permittivity.push([]),c.permeability.push([]);for(var s=0;s<t[0];s++)c.permittivity[l].push(Math.max(1,u[4*s+l*t[0]*4+0])),c.permeability[l].push(Math.max(1,u[4*s+l*t[0]*4+2]))}i(c)},r.src=e}(l,[i[0],i[1]],(function(e){t&&(t.loadPermeability(e.permeability),t.loadPermittivity(e.permittivity))}))}),[t,i,l]);return r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("div",null,r.a.createElement("button",{onClick:o,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Save map")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(e){return s(e.target.value)},style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}}),r.a.createElement("button",{onClick:d,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Load map url")))}function x(e){return r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement(y,{label:"Grid length",value:e.gridSizeLongest,setValue:e.setGridSizeLongest,min:100,max:2e3,step:100}),r.a.createElement(y,{label:"Time step size",value:e.dt,setValue:e.setDt,min:.001,max:.1,step:.001}),r.a.createElement(y,{label:"Cell size",value:e.cellSize,setValue:e.setCellSize,min:.001,max:1,step:.001}),r.a.createElement(y,{label:"Simulation speed",value:e.simulationSpeed,setValue:e.setSimulationSpeed,min:.1,max:10,step:.1}))}function O(e){return r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement(y,{label:"Brush size",value:e.brushSize,setValue:e.setBrushSize,min:1,max:100,step:1}),r.a.createElement(y,{label:"Brush value",value:e.brushValue,setValue:e.setBrushValue,min:1,max:100,step:1}),r.a.createElement(y,{label:"Signal frequency",value:e.signalFrequency,setValue:e.setSignalFrequency,min:0,max:25,step:.25}),r.a.createElement(b,{options:["\u03b5 brush","\xb5 brush","Signal"],selectedOption:e.clickOption,setSelectedOption:e.setClickOption}),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.resetFields,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Reset fields"),r.a.createElement("button",{onClick:e.resetMaterials,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Reset materials")))}var S=i(75),F=i.n(S),j=[window.innerWidth,window.innerHeight],w=T(500,j);function T(e,t){var i=t[0]/t[1];return t[0]>=t[1]?[e,Math.ceil(e/i)]:[Math.ceil(e*i),e]}function E(e,t,i){return Math.max(e,Math.min(t,i))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){var e=Object(a.useRef)(null),t=Object(a.useState)(j),i=Object(u.a)(t,2),n=i[0],c=i[1],s=Object(a.useState)(500),o=Object(u.a)(s,2),h=o[0],p=o[1],g=Object(a.useState)(.02),y=Object(u.a)(g,2),b=y[0],S=y[1],z=Object(a.useState)(.03),A=Object(u.a)(z,2),M=A[0],k=A[1],D=Object(a.useState)(1),C=Object(u.a)(D,2),P=C[0],Y=C[1];Object(a.useEffect)((function(){var e=function(){return c([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var X=Object(a.useMemo)((function(){return T(h,n)}),[n,h]),Z=Object(a.useState)(null),V=Object(u.a)(Z,2),U=V[0],W=V[1];Object(a.useEffect)((function(){e.current&&W(new l.GPU({mode:"webgl",canvas:e.current}))}),[e]);var B=Object(a.useMemo)((function(){return U?new d(U,w,.03):null}),[U]),K=Object(a.useMemo)((function(){return U?function(e,t){function i(e,t,i,a,r){return a<0||a>=t||r<0||r>=i?0:e[r][a]}return e.createKernel((function(e,t,a,r,n,c,u,l,s){var o=s[0],d=s[1],h=o*this.thread.x/this.output.x,m=d*(1-this.thread.y/this.output.y),p=i(e,o,d,h,m)*i(e,o,d,h,m)+i(t,o,d,h,m)*i(t,o,d,h,m)+i(a,o,d,h,m)*i(a,o,d,h,m),g=i(r,o,d,h-.5,m-.5),v=i(n,o,d,h-.5,m-.5),y=i(c,o,d,h-.5,m-.5),b=g*g+v*v+y*y,f=.1+.9*Math.max(0,Math.min(1,.4342944819*Math.log(i(u,o,d,h,m))/2)),x=.1+.9*Math.max(0,Math.min(1,.4342944819*Math.log(i(l,o,d,h,m))/2)),O=(Math.abs(h%1-.5)<.25?1:0)*(Math.abs(m%1-.5)<.25?1:0),S=1-O;this.color(Math.min(1,p/15+.7*O*f),Math.min(1,p/15+b/15),Math.min(1,b/15+.7*S*x))})).setOutput(t).setGraphical(!0).setFunctions([i]).setWarnVarUsage(!1).setTactic("performance").setPrecision("unsigned").setDynamicOutput(!0).setDynamicArguments(!0)}(U,w):null}),[U]);Object(a.useEffect)((function(){K&&K.setOutput(n)}),[K,n]),Object(a.useEffect)((function(){B&&B.setGridSize(X)}),[B,X]),Object(a.useEffect)((function(){B&&B.setCellSize(M)}),[B,M]);var I=Object(a.useState)(1),R=Object(u.a)(I,2),q=R[0],G=R[1],L=Object(a.useState)(20),H=Object(u.a)(L,2),Q=H[0],J=H[1],N=Object(a.useState)(3),$=Object(u.a)(N,2),_=$[0],ee=$[1],te=Object(a.useState)(!1),ie=Object(u.a)(te,2),ae=ie[0],re=ie[1],ne=Object(a.useState)(!1),ce=Object(u.a)(ne,2),ue=ce[0],le=ce[1],se=Object(a.useState)(2),oe=Object(u.a)(se,2),de=oe[0],he=oe[1],me=Object(a.useState)(null),pe=Object(u.a)(me,2),ge=pe[0],ve=pe[1],ye=Object(a.useRef)(0),be=Object(a.useRef)(null),fe=Object(a.useCallback)((function(){if(B){var e=B.getData();if(null!==be.current){var t=E(0,X[0]-1,Math.floor(X[0]*be.current[0]/n[0])),i=E(0,X[1]-1,Math.floor(X[1]*be.current[1]/n[1])),a=Math.round(q/2);B.injectSignal([t,i],a,2e3*-Q*Math.cos(2*Math.PI*_*e.time),b)}B.stepMagnetic(b),B.stepElectric(b)}}),[B,n,X,b,_,Q,q]);Object(a.useEffect)((function(){var e=setInterval(fe,1e3/P*b);return function(){return clearInterval(e)}}),[fe,b,P]);var xe=Object(a.useCallback)((function(){if(B&&K){e.current&&(e.current.width=window.innerWidth,e.current.height=window.innerHeight);var t=B.getData();t.time>0&&K(t.electricFieldX.values,t.electricFieldY.values,t.electricFieldZ.values,t.magneticFieldX.values,t.magneticFieldY.values,t.magneticFieldZ.values,t.permittivity.values,t.permeability.values,X)}}),[B,K,X,e]);Object(a.useEffect)((function(){var e=!1;return requestAnimationFrame((function t(){e||(xe(),requestAnimationFrame(t))})),function(){e=!0}}),[xe]);var Oe=Object(a.useCallback)((function(e){if(B){var t=Math.round(X[0]*(e[0]/n[0])),i=Math.round(X[1]*(e[1]/n[1])),a=Math.round(q/2);B.drawPermittivity([t,i,0],a,Q)}}),[B,X,n,q,Q]),Se=Object(a.useCallback)((function(e){if(B){var t=Math.round(X[0]*(e[0]/n[0])),i=Math.round(X[1]*(e[1]/n[1])),a=Math.round(q/2);B.drawPermeability([t,i,0],a,Q)}}),[B,X,n,q,Q]),Fe=Object(a.useCallback)((function(){B&&B.resetMaterials()}),[B]),je=Object(a.useCallback)((function(){B&&(B.resetFields(),ye.current=0)}),[B]),we=Object(a.useCallback)((function(e){var t=Object(u.a)(e,2),i=t[0],a=t[1];B&&(2===de?be.current=[i,a]:0===de?(Oe([i,a]),le(!0)):1===de&&(Se([i,a]),re(!0)))}),[B,Oe,Se,de]),Te=Object(a.useCallback)((function(e){var t=Object(u.a)(e,2),i=t[0],a=t[1];B&&(2===de&&null!==be.current&&(be.current=[i,a]),ue&&Oe([i,a]),ae&&Se([i,a]))}),[B,Oe,Se,de,ae,ue]),Ee=Object(a.useCallback)((function(){2===de?be.current=null:1===de?re(!1):0===de&&le(!1)}),[de]),ze=Object(a.useState)(2),Ae=Object(u.a)(ze,2),Me=Ae[0],ke=Ae[1],De=Object(a.useState)(1),Ce=Object(u.a)(De,2),Pe=Ce[0],Ye=Ce[1],Xe=Object(a.useState)(20),Ze=Object(u.a)(Xe,2),Ve=Ze[0],Ue=Ze[1],We=Object(a.useState)(5),Be=Object(u.a)(We,2),Ke=Be[0],Ie=Be[1],Re=Object(a.useState)(5),qe=Object(u.a)(Re,2),Ge=qe[0],Le=qe[1];return Object(a.useEffect)((function(){2===de&&2!==Me?(Ie(q),Le(Q),G(Pe),J(Ve)):2!==de&&2===Me&&(Ye(q),Ue(Q),G(Ke),J(Ge)),ke(de)}),[de,Me,Pe,Ve,Ke,Ge,q,Q]),r.a.createElement("div",{style:{touchAction:"none",userSelect:"none"}},r.a.createElement("canvas",{width:n[0],height:n[1],ref:e,style:{position:"absolute",width:n[0],height:n[1]},onMouseDown:function(e){return we([e.clientX,e.clientY])},onMouseMove:function(e){ve([e.clientX,e.clientY]),Te([e.clientX,e.clientY])},onMouseUp:function(e){return Ee()},onMouseLeave:function(e){return Ee()},onTouchStart:function(e){ve([e.touches[0].clientX,e.touches[0].clientY]),we([e.touches[0].clientX,e.touches[0].clientY])},onTouchMove:function(e){ve([e.touches[0].clientX,e.touches[0].clientY]),Te([e.touches[0].clientX,e.touches[0].clientY])},onTouchEnd:function(e){ve(null),Ee()},onTouchCancel:function(e){ve(null),Ee()},onContextMenu:function(e){return e.preventDefault()}}),r.a.createElement("div",{style:{position:"absolute",bottom:10,right:10}},r.a.createElement("a",{href:"https://github.com/RobinKa/maxwell-simulation",rel:"noopener noreferrer",target:"_blank",style:{fontWeight:"lighter",color:"rgba(255, 255, 255, 100)",textDecoration:"none"}},"Source code")),ge&&r.a.createElement("div",{style:{position:"absolute",pointerEvents:"none",left:ge[0]-2*(q+1),top:ge[1]-2*(q+1),width:4*(q+1),height:4*(q+1),border:"2px solid yellow"}}),r.a.createElement("img",{onClick:m,src:F.a,alt:"Fullscreen",style:{position:"absolute",right:10,top:10,cursor:"pointer"}}),r.a.createElement(v,{title:"Menu",style:{position:"absolute",opacity:.8,maxHeight:Math.round(.7*n[1]),overflowY:"auto"},buttonStyle:{background:"rgb(60, 60, 60)"}},r.a.createElement(v,{title:"Save / Load"},r.a.createElement(f,{simulator:B,gridSize:X})),r.a.createElement(v,{title:"Settings"},r.a.createElement(x,{gridSizeLongest:h,setGridSizeLongest:p,simulationSpeed:P,setSimulationSpeed:Y,cellSize:M,setCellSize:k,dt:b,setDt:S})),r.a.createElement(v,{title:"Controls"},r.a.createElement(O,{brushSize:q,setBrushSize:G,brushValue:Q,setBrushValue:J,signalFrequency:_,setSignalFrequency:ee,clickOption:de,setClickOption:he,resetFields:je,resetMaterials:Fe}))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABISURBVFhH7dchDgAhDETRKfe/M1TUlgyqgv8Mq+AnQMjGTjJFqs+rlzlXjWMIIKC9Be6Jd3XrsAUEAAB4jgkYD+DPiIDfA6QD/j8gGcpVf+MAAAAASUVORK5CYII="},76:function(e,t,i){e.exports=i(183)},81:function(e,t,i){}},[[76,1,2]]]);
//# sourceMappingURL=main.e10939e2.chunk.js.map
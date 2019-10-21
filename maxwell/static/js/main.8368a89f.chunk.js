(this.webpackJsonpmaxwell=this.webpackJsonpmaxwell||[]).push([[0],{184:function(e,t,a){"use strict";a.r(t);var i=a(6),r=a.n(i),n=a(72),c=a.n(n),l=(a(81),a(34)),u=a.n(l),s=a(73),o=a(9),h=a(74),d=a(75);function p(e){var t={};return function(a){return t[a]||(t[a]=e()),t[a]}}var m=function e(t,a,i){var r=this;function n(e,t,a,i,r){return i<0||i>=t||r<0||r>=a?0:e[r][i]}Object(d.a)(this,e),this.gpu=t,this.gridSize=a,this.cellSize=i,this.data=void 0,this.updateMagneticX=void 0,this.updateMagneticY=void 0,this.updateMagneticZ=void 0,this.updateElectricX=void 0,this.updateElectricY=void 0,this.updateElectricZ=void 0,this.injectSource=void 0,this.decaySource=void 0,this.makeFieldTexture=void 0,this.copyTexture=void 0,this.drawOnTexture=void 0,this.stepElectric=function(e){var t=r.data.electricFieldX.values,a=r.data.electricFieldY.values,i=r.data.electricFieldZ.values,n=r.data.magneticFieldX.values,c=r.data.magneticFieldY.values,l=r.data.magneticFieldZ.values,u=r.data.permittivity.values,s=r.injectSource(r.data.electricSourceFieldZ.values,i,e);r.data.electricSourceFieldZ.values=r.decaySource(r.copyTexture("esz")(r.data.electricSourceFieldZ.values),e),r.data.electricFieldX.values=r.updateElectricX(c,l,u,r.copyTexture("ex")(t),e),r.data.electricFieldY.values=r.updateElectricY(n,l,u,r.copyTexture("ey")(a),e),r.data.electricFieldZ.values=r.updateElectricZ(n,c,u,s,e),r.data.time+=e/2},this.stepMagnetic=function(e){var t=r.data.electricFieldX.values,a=r.data.electricFieldY.values,i=r.data.electricFieldZ.values,n=r.data.magneticFieldX.values,c=r.data.magneticFieldY.values,l=r.data.magneticFieldZ.values,u=r.data.permeability.values;r.data.magneticFieldX.values=r.updateMagneticX(a,i,u,r.copyTexture("mx")(n),e),r.data.magneticFieldY.values=r.updateMagneticY(t,i,u,r.copyTexture("my")(c),e),r.data.magneticFieldZ.values=r.updateMagneticZ(t,a,u,r.copyTexture("mz")(l),e),r.data.time+=e/2},this.resetFields=function(){r.data.time=0,r.data.electricFieldX.values=r.makeFieldTexture("ex")(0),r.data.electricFieldY.values=r.makeFieldTexture("ey")(0),r.data.electricFieldZ.values=r.makeFieldTexture("ez")(0),r.data.magneticFieldX.values=r.makeFieldTexture("mx")(0),r.data.magneticFieldY.values=r.makeFieldTexture("my")(0),r.data.magneticFieldZ.values=r.makeFieldTexture("mz")(0),r.data.electricSourceFieldZ.values=r.makeFieldTexture("esz")(0)},this.resetMaterials=function(){r.data.permeability.values=r.makeFieldTexture("permeability")(1),r.data.permittivity.values=r.makeFieldTexture("permittivity")(1)},this.drawPermeability=function(e,t,a){r.data.permeability.values=r.drawOnTexture("permeability")(e,t,a,0,r.copyTexture("permability")(r.data.permeability.values))},this.drawPermittivity=function(e,t,a){r.data.permittivity.values=r.drawOnTexture("permittivity")(e,t,a,0,r.copyTexture("permittivity")(r.data.permittivity.values))},this.injectSignal=function(e,t,a,i){r.data.electricSourceFieldZ.values=r.drawOnTexture("esz")(e,t,a*i,1,r.copyTexture("esz")(r.data.electricSourceFieldZ.values))},this.loadPermittivity=function(e){r.data.permittivity.values=r.copyTexture("loadPermittivity")(e)},this.loadPermeability=function(e){r.data.permeability.values=r.copyTexture("loadPermeability")(e)},this.getData=function(){return r.data},this.makeFieldTexture=p((function(){return r.gpu.createKernel((function(e){return e})).setOutput([a[0],a[1]]).setPipeline(!0).setTactic("performance")})),this.copyTexture=p((function(){return r.gpu.createKernel((function(e){return e[this.thread.y][this.thread.x]})).setOutput([a[0],a[1]]).setPipeline(!0).setTactic("performance")})),this.data={time:0,electricFieldX:{values:this.makeFieldTexture("ex")(0),shape:a},electricFieldY:{values:this.makeFieldTexture("ey")(0),shape:a},electricFieldZ:{values:this.makeFieldTexture("ez")(0),shape:a},magneticFieldX:{values:this.makeFieldTexture("mx")(0),shape:a},magneticFieldY:{values:this.makeFieldTexture("my")(0),shape:a},magneticFieldZ:{values:this.makeFieldTexture("mz")(0),shape:a},electricSourceFieldZ:{values:this.makeFieldTexture("esz")(0),shape:a},permittivity:{values:this.makeFieldTexture("permittivity")(1),shape:a},permeability:{values:this.makeFieldTexture("permeability")(1),shape:a}},this.drawOnTexture=p((function(){return r.gpu.createKernel((function(e,t,a,i,r){var c=this.thread.x,l=this.thread.y,u=n(r,this.output.x,this.output.y,c,l);return Math.max(Math.abs(e[0]-c),Math.abs(e[1]-l))<t?a+i*u:u}),{output:[a[0],a[1]],constants:{cellSize:i}}).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance")})),this.injectSource=this.gpu.createKernel((function(e,t,a){var i=this.thread.x,r=this.thread.y,c=this.output.x,l=this.output.y;return n(t,c,l,i,r)+n(e,c,l,i,r)*a}),{output:[a[0],a[1]]}).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance"),this.decaySource=this.gpu.createKernel((function(e,t){var a=this.thread.x,i=this.thread.y;return n(e,this.output.x,this.output.y,a,i)*Math.pow(.1,t)}),{output:[a[0],a[1]]}).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance"),this.updateMagneticX=this.gpu.createKernel((function(e,t,a,i,r){var c=this.thread.x,l=this.thread.y,u=this.output.x,s=this.output.y,o=this.constants.cellSize;return n(i,u,s,c,l)-r/(n(a,u,s,c,l)*o)*(n(t,u,s,c,l+1)-n(t,u,s,c,l))}),{output:[a[0],a[1]],constants:{cellSize:i}}).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance"),this.updateMagneticY=this.gpu.createKernel((function(e,t,a,i,r){var c=this.thread.x,l=this.thread.y,u=this.output.x,s=this.output.y,o=this.constants.cellSize;return n(i,u,s,c,l)-r/(n(a,u,s,c,l)*o)*-(n(t,u,s,c+1,l)-n(t,u,s,c,l))}),{output:[a[0],a[1]],constants:{cellSize:i}}).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance"),this.updateMagneticZ=this.gpu.createKernel((function(e,t,a,i,r){var c=this.thread.x,l=this.thread.y,u=this.output.x,s=this.output.y,o=this.constants.cellSize;return n(i,u,s,c,l)-r/(n(a,u,s,c,l)*o)*(n(t,u,s,c+1,l)-n(t,u,s,c,l)-(n(e,u,s,c,l+1)-n(e,u,s,c,l)))}),{output:[a[0],a[1]],constants:{cellSize:i}}).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance"),this.updateElectricX=this.gpu.createKernel((function(e,t,a,i,r){var c=this.thread.x,l=this.thread.y,u=this.output.x,s=this.output.y,o=this.constants.cellSize;return n(i,u,s,c,l)+r/(n(a,u,s,c,l)*o)*(n(t,u,s,c,l)-n(t,u,s,c,l-1))}),{output:[a[0],a[1]],constants:{cellSize:i}}).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance"),this.updateElectricY=this.gpu.createKernel((function(e,t,a,i,r){var c=this.thread.x,l=this.thread.y,u=this.output.x,s=this.output.y,o=this.constants.cellSize;return n(i,u,s,c,l)+r/(n(a,u,s,c,l)*o)*-(n(t,u,s,c,l)-n(t,u,s,c-1,l))}),{output:[a[0],a[1]],constants:{cellSize:i}}).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance"),this.updateElectricZ=this.gpu.createKernel((function(e,t,a,i,r){var c=this.thread.x,l=this.thread.y,u=this.output.x,s=this.output.y,o=this.constants.cellSize;return n(i,u,s,c,l)+r/(n(a,u,s,c,l)*o)*(n(t,u,s,c,l)-n(t,u,s,c-1,l)-(n(e,u,s,c,l)-n(e,u,s,c,l-1)))}),{output:[a[0],a[1]],constants:{cellSize:i}}).setFunctions([n]).setWarnVarUsage(!1).setPipeline(!0).setTactic("performance")};var v=[window.innerWidth,window.innerHeight],b=v[0]/v[1],g=v[0]>=v[1]?[600,Math.ceil(600/b)]:[Math.ceil(600*b),600],f=null;function y(e,t,a){return Math.max(e,Math.min(t,a))}function x(e){return r.a.createElement("div",null,r.a.createElement("label",null,e.label),r.a.createElement("div",null,r.a.createElement("input",{type:"range",min:e.min,max:e.max,value:e.value,step:e.step,onChange:function(t){return e.setValue(parseFloat(t.target.value))},style:{height:10,width:"100%"}}),r.a.createElement("div",{style:{textAlign:"center",lineHeight:.1,marginBottom:"7px"}},e.value)))}function F(e){return r.a.createElement("div",null,e.options.map((function(t,a){return r.a.createElement("button",{key:t,style:{boxSizing:"border-box",border:a===e.selectedOption?"4px solid rgb(0, 150, 255)":"0",height:"30px",margin:"5px",width:"".concat(100/e.options.length,"%"),background:"rgb(100, 100, 100)",color:"white"},onClick:function(t){return e.setSelectedOption(a)}},t)})))}function S(e){var t=Object(i.useState)(!1),a=Object(o.a)(t,2),n=a[0],c=a[1],l=Object(i.useState)(""),u=Object(o.a)(l,2),s=u[0],h=u[1],d=Object(i.useCallback)((function(){if(f){var e=f.getData();window.open(function(e){var t=document.createElement("canvas");t.width=e.shape[0],t.height=e.shape[1];var a=e.permeability,i=e.permittivity,r=t.getContext("2d");r.fillStyle="rgb(1, 0, 1)",r.fillRect(0,0,t.width,t.height),r.fillStyle="rgb(0, 255, 0)",r.textAlign="center",r.textBaseline="middle",r.fillText("warlock.ai/maxwell",t.width/2,t.height/2);for(var n=r.getImageData(0,0,t.width,t.height),c=0;c<t.width;c++)for(var l=0;l<t.height;l++)n.data[4*c+l*t.width*4+0]=Math.round(i[l][c]),n.data[4*c+l*t.width*4+2]=Math.round(a[l][c]),n.data[4*c+l*t.width*4+3]=255;return r.putImageData(n,0,0),t.toDataURL("image/png")}({permittivity:e.permittivity.values.toArray(),permeability:e.permeability.values.toArray(),shape:[e.permeability.shape[0],e.permeability.shape[1]]}))}}),[]),p=Object(i.useCallback)((function(){f&&function(e,t,a){var i=document.createElement("canvas");i.width=t[0],i.height=t[1];var r=new Image;r.crossOrigin="anonymous",r.onload=function(e){var n=i.getContext("2d");n.fillStyle="rgb(1, 0, 1)",n.fillRect(0,0,i.width,i.height),n.drawImage(r,0,0,r.width,r.height);for(var c={permeability:[],permittivity:[],shape:t},l=n.getImageData(0,0,i.width,i.height).data,u=0;u<t[1];u++){c.permittivity.push([]),c.permeability.push([]);for(var s=0;s<t[0];s++)c.permittivity[u].push(Math.max(1,l[4*s+u*t[0]*4+0])),c.permeability[u].push(Math.max(1,l[4*s+u*t[0]*4+2]))}a(c)},r.src=e}(s,[g[0],g[1]],(function(e){f&&(f.loadPermeability(e.permeability),f.loadPermittivity(e.permittivity))}))}),[s]);return r.a.createElement("div",{style:{userSelect:"none"}},r.a.createElement("div",{style:{textAlign:"center",position:"absolute",opacity:.8,background:"rgba(33, 33, 33, 100)",fontWeight:"lighter",color:"white"}},r.a.createElement("button",{onClick:function(e){return c(!n)},style:{width:"100%",height:"30px",background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",fontWeight:"bold",cursor:"pointer"}},"Controls [",n?"+":"-","]"),!n&&r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("div",null,r.a.createElement("button",{onClick:d,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Save map")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(e){return h(e.target.value)},style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}}),r.a.createElement("button",{onClick:p,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Load map url")),r.a.createElement(x,{label:"Brush size",value:e.brushSize,setValue:e.setBrushSize,min:1,max:100,step:1}),r.a.createElement(x,{label:"Brush value",value:e.brushValue,setValue:e.setBrushValue,min:1,max:100,step:1}),r.a.createElement(x,{label:"Signal frequency",value:e.signalFrequency,setValue:e.setSignalFrequency,min:0,max:5,step:.5}),r.a.createElement(F,{options:["\u03b5 brush","\xb5 brush","Signal"],selectedOption:e.clickOption,setSelectedOption:e.setClickOption}),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.resetFields,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Reset fields"),r.a.createElement("button",{onClick:e.resetMaterials,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Reset materials")))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){var e=Object(i.useState)(1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(10),l=Object(o.a)(c,2),d=l[0],p=l[1],b=Object(i.useState)(1),x=Object(o.a)(b,2),F=x[0],w=x[1],O=Object(i.useState)(!1),k=Object(o.a)(O,2),M=k[0],j=k[1],T=Object(i.useState)(!1),E=Object(o.a)(T,2),z=E[0],Z=E[1],C=Object(i.useState)(2),P=Object(o.a)(C,2),X=P[0],Y=P[1],V=Object(i.useState)(null),W=Object(o.a)(V,2),K=W[0],U=W[1],D=Object(i.useRef)(0),B=Object(i.useRef)(null),R=Object(i.useRef)(null),I=Object(i.useRef)(null),q=Object(i.useCallback)((function(){if(f){var e=f.getData();if(null!==B.current&&I.current){var t=y(0,e.electricSourceFieldZ.shape[0]-1,Math.floor(e.electricSourceFieldZ.shape[0]*B.current[0]/I.current.width)),i=y(0,e.electricSourceFieldZ.shape[1]-1,Math.floor(e.electricSourceFieldZ.shape[1]*B.current[1]/I.current.height)),r=Math.round(a/2);f.injectSignal([t,i,0],r,1e3*-d*Math.cos(2*Math.PI*F*e.time),.02)}f.stepMagnetic(.02),f.stepElectric(.02)}}),[F,d,a]);Object(i.useEffect)((function(){var e=setInterval(q,20);return function(){return clearInterval(e)}}),[q]);var A=Object(i.useCallback)((function(){var e=!1;return function(){var t=Object(s.a)(u.a.mark((function t(){var a,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=function(e){return requestAnimationFrame(e)};case 1:if(e){t.next=7;break}return f&&(i=f.getData()).time>0&&null!==R.current&&R.current(i.electricFieldX.values,i.electricFieldY.values,i.electricFieldZ.values,i.magneticFieldX.values,i.magneticFieldY.values,i.magneticFieldZ.values,i.permittivity.values,i.permeability.values),t.next=5,new Promise(a);case 5:t.next=1;break;case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){e=!0}}),[]);Object(i.useEffect)((function(){if(!I.current)throw new Error("Canvas ref was null");var e=new h.GPU({mode:"webgl",canvas:I.current});R.current=function(e){function t(e,t,a,i,r){return i<0||i>=t||r<0||r>=a?0:e[r][i]}return e.createKernel((function(e,a,i,r,n,c,l,u){var s=this.constants.gridSizeX,o=this.constants.gridSizeY,h=s*this.thread.x/this.output.x,d=o*(1-this.thread.y/this.output.y),p=Math.floor(h),m=Math.floor(d),v=t(e,s,o,p,m)*t(e,s,o,p,m)+t(a,s,o,p,m)*t(a,s,o,p,m)+t(i,s,o,p,m)*t(i,s,o,p,m),b=(t(r,s,o,p,m)+t(r,s,o,p-1,m-1))/2,g=(t(n,s,o,p,m)+t(n,s,o,p-1,m-1))/2,f=(t(c,s,o,p,m)+t(c,s,o,p-1,m-1))/2,y=b*b+g*g+f*f,x=.3+.7*Math.max(0,Math.min(1,.4342944819*Math.log(t(l,s,o,p,m))/2)),F=.3+.7*Math.max(0,Math.min(1,.4342944819*Math.log(t(u,s,o,p,m))/2)),S=(Math.abs(h%1-.5)<.25?1:0)*(Math.abs(d%1-.5)<.25?1:0),w=1-S;this.color(Math.min(1,v/15+.5*S*x),Math.min(1,v/15+y/15),Math.min(1,y/15+.5*w*F))}),{output:[v[0],v[1]],constants:{gridSizeX:g[0],gridSizeY:g[1]},graphical:!0}).setFunctions([t]).setWarnVarUsage(!1).setTactic("performance").setPrecision("unsigned")}(e),f=new m(e,g,.04),A()}),[A]);var H=Object(i.useCallback)((function(e){if(f){var t=Math.round(g[0]*(e[0]/v[0])),i=Math.round(g[1]*(e[1]/v[1])),r=Math.round(a/2);f.drawPermittivity([t,i,0],r,d)}}),[a,d]),J=Object(i.useCallback)((function(e){if(f){var t=Math.round(g[0]*(e[0]/v[0])),i=Math.round(g[1]*(e[1]/v[1])),r=Math.round(a/2);f.drawPermeability([t,i,0],r,d)}}),[a,d]),L=Object(i.useCallback)((function(){f&&f.resetMaterials()}),[]),G=Object(i.useCallback)((function(){f&&(f.resetFields(),D.current=0)}),[]),$=Object(i.useCallback)((function(e){var t=Object(o.a)(e,2),a=t[0],i=t[1];f&&(2===X?B.current=[a,i]:0===X?(H([a,i]),Z(!0)):1===X&&(J([a,i]),j(!0)))}),[H,J,X]),_=Object(i.useCallback)((function(e){var t=Object(o.a)(e,2),a=t[0],i=t[1];f&&(2===X&&null!==B.current&&(B.current=[a,i]),z&&H([a,i]),M&&J([a,i]))}),[H,J,X,M,z]),N=Object(i.useCallback)((function(){2===X?B.current=null:1===X?j(!1):0===X&&Z(!1)}),[X]),Q=Object(i.useState)(2),ee=Object(o.a)(Q,2),te=ee[0],ae=ee[1],ie=Object(i.useState)(1),re=Object(o.a)(ie,2),ne=re[0],ce=re[1],le=Object(i.useState)(10),ue=Object(o.a)(le,2),se=ue[0],oe=ue[1],he=Object(i.useState)(5),de=Object(o.a)(he,2),pe=de[0],me=de[1],ve=Object(i.useState)(5),be=Object(o.a)(ve,2),ge=be[0],fe=be[1];return Object(i.useEffect)((function(){2===X&&2!==te?(me(a),fe(d),n(ne),p(se)):2!==X&&2===te&&(ce(a),oe(d),n(pe),p(ge)),ae(X)}),[X,te,ne,se,pe,ge,a,d]),r.a.createElement("div",null,r.a.createElement("canvas",{width:v[0],height:v[1],ref:I,style:{position:"absolute",userSelect:"none"},onMouseDown:function(e){return $([e.clientX,e.clientY])},onMouseMove:function(e){U([e.clientX,e.clientY]),_([e.clientX,e.clientY])},onMouseUp:function(e){return N()},onTouchStart:function(e){return $([e.touches[0].clientX,e.touches[0].clientY])},onTouchMove:function(e){return _([e.touches[0].clientX,e.touches[0].clientY])},onTouchEnd:function(e){return N()},onContextMenu:function(e){return e.preventDefault()}}),r.a.createElement("div",{style:{position:"absolute",bottom:10,right:10,userSelect:"none"}},r.a.createElement("a",{href:"https://github.com/RobinKa/maxwell-simulation",rel:"noopener noreferrer",target:"_blank",style:{fontWeight:"lighter",color:"rgba(255, 255, 255, 100)",textDecoration:"none"}},"Source code")),K&&r.a.createElement("div",{style:{position:"absolute",pointerEvents:"none",left:K[0]-2*(a+1),top:K[1]-2*(a+1),width:4*(a+1),height:4*(a+1),border:"2px solid yellow"}}),r.a.createElement(S,{brushSize:a,setBrushSize:n,brushValue:d,setBrushValue:p,signalFrequency:F,setSignalFrequency:w,clickOption:X,setClickOption:Y,resetFields:G,resetMaterials:L}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,a){e.exports=a(184)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.8368a89f.chunk.js.map
(this.webpackJsonpmaxwell=this.webpackJsonpmaxwell||[]).push([[0],{184:function(e,t,i){"use strict";i.r(t);var a=i(6),n=i.n(a),r=i(73),c=i.n(r),s=(i(81),i(35)),l=i.n(s),u=i(74),o=i(12),d=i(20),h=i(75);function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{values:Array(e[0]*e[1]*e[2]).fill(t),shape:e}}function p(e,t,i,a,n){e.values[t+i*e.shape[0]+a*e.shape[0]*e.shape[1]]=n}function v(e,t,i,a,n){e.values[t+i*e.shape[0]+a*e.shape[0]*e.shape[1]]+=n}var f=[window.innerWidth,window.innerHeight],S=f[0]/f[1],m=f[0]>=f[1]?[600,Math.ceil(600/S),1]:[Math.ceil(600*S),600,1],b=new function e(t,i){var a=this;Object(h.a)(this,e),this.data=void 0,this.gpu=void 0,this.updateMagneticX=void 0,this.updateMagneticY=void 0,this.updateMagneticZ=void 0,this.updateElectricX=void 0,this.updateElectricY=void 0,this.updateElectricZ=void 0,this.injectSource=void 0,this.decaySource=void 0,this.stepElectric=function(e){var t=a.data.electricFieldX.values,i=a.data.electricFieldY.values,n=a.data.electricFieldZ.values,r=a.data.magneticFieldX.values,c=a.data.magneticFieldY.values,s=a.data.magneticFieldZ.values,l=a.data.permittivity.values;n=a.injectSource(a.data.electricSourceFieldZ.values,n,e),a.data.electricSourceFieldZ.values=a.decaySource(a.data.electricSourceFieldZ.values,e),a.data.electricFieldX.values=a.updateElectricX(c,s,l,t,e),a.data.electricFieldY.values=a.updateElectricY(r,s,l,i,e),a.data.electricFieldZ.values=a.updateElectricZ(r,c,l,n,e),a.data.time+=e/2},this.stepMagnetic=function(e){var t=a.data.electricFieldX.values,i=a.data.electricFieldY.values,n=a.data.electricFieldZ.values,r=a.data.magneticFieldX.values,c=a.data.magneticFieldY.values,s=a.data.magneticFieldZ.values,l=a.data.permeability.values;a.data.magneticFieldX.values=a.updateMagneticX(i,n,l,r,e),a.data.magneticFieldY.values=a.updateMagneticY(t,n,l,c,e),a.data.magneticFieldZ.values=a.updateMagneticZ(t,i,l,s,e),a.data.time+=e/2},this.resetFields=function(){a.data.time=0,a.data.electricFieldX.values.fill(0),a.data.electricFieldY.values.fill(0),a.data.electricFieldZ.values.fill(0),a.data.magneticFieldX.values.fill(0),a.data.magneticFieldY.values.fill(0),a.data.magneticFieldZ.values.fill(0),a.data.electricSourceFieldZ.values.fill(0)},this.resetMaterials=function(){a.data.permeability.values.fill(1),a.data.permittivity.values.fill(1)},this.getData=function(){return a.data},this.data={time:0,electricFieldX:g(t),electricFieldY:g(t),electricFieldZ:g(t),magneticFieldX:g(t),magneticFieldY:g(t),magneticFieldZ:g(t),electricSourceFieldZ:g(t,0),permittivity:g(t,1),permeability:g(t,1)};var n=t[0]*t[1]*t[2];function r(e,t,i,a,n,r,c){return n<0||n>=t||r<0||r>=i||c<0||c>=a?0:e[n+r*t+c*t*i]}function c(e,t){return e%t}function s(e,t,i){return Math.floor(e/t)%i}function l(e,t,i,a){return Math.floor(e/(t*i))%a}this.gpu=new d.GPU,this.injectSource=this.gpu.createKernel((function(e,t,i){var a=Math.floor(this.thread.x),n=this.constants.gridSizeX,u=this.constants.gridSizeY,o=this.constants.gridSizeZ,d=c(a,n),h=s(a,n,u),g=l(a,n,u,o);return r(t,n,u,o,d,h,g)+r(e,n,u,o,d,h,g)*i}),{output:[n],constants:{cellSize:i,gridSizeX:t[0],gridSizeY:t[1],gridSizeZ:t[2]}}).setFunctions([c,s,l,r]).setWarnVarUsage(!1),this.decaySource=this.gpu.createKernel((function(e,t){var i=Math.floor(this.thread.x),a=this.constants.gridSizeX,n=this.constants.gridSizeY,u=this.constants.gridSizeZ;return r(e,a,n,u,c(i,a),s(i,a,n),l(i,a,n,u))*Math.pow(.1,t)}),{output:[n],constants:{cellSize:i,gridSizeX:t[0],gridSizeY:t[1],gridSizeZ:t[2]}}).setFunctions([c,s,l,r]).setWarnVarUsage(!1),this.updateMagneticX=this.gpu.createKernel((function(e,t,i,a,n){var u=Math.floor(this.thread.x),o=this.constants.gridSizeX,d=this.constants.gridSizeY,h=this.constants.gridSizeZ,g=this.constants.cellSize,p=c(u,o),v=s(u,o,d),f=l(u,o,d,h);return r(a,o,d,h,p,v,f)-n/(r(i,o,d,h,p,v,f)*g)*(r(t,o,d,h,p,v+1,f)-r(t,o,d,h,p,v,f))}),{output:[n],constants:{cellSize:i,gridSizeX:t[0],gridSizeY:t[1],gridSizeZ:t[2]}}).setFunctions([c,s,l,r]).setWarnVarUsage(!1),this.updateMagneticY=this.gpu.createKernel((function(e,t,i,a,n){var u=Math.floor(this.thread.x),o=this.constants.gridSizeX,d=this.constants.gridSizeY,h=this.constants.gridSizeZ,g=this.constants.cellSize,p=c(u,o),v=s(u,o,d),f=l(u,o,d,h);return r(a,o,d,h,p,v,f)-n/(r(i,o,d,h,p,v,f)*g)*-(r(t,o,d,h,p+1,v,f)-r(t,o,d,h,p,v,f))}),{output:[n],constants:{cellSize:i,gridSizeX:t[0],gridSizeY:t[1],gridSizeZ:t[2]}}).setFunctions([c,s,l,r]).setWarnVarUsage(!1),this.updateMagneticZ=this.gpu.createKernel((function(e,t,i,a,n){var u=Math.floor(this.thread.x),o=this.constants.gridSizeX,d=this.constants.gridSizeY,h=this.constants.gridSizeZ,g=this.constants.cellSize,p=c(u,o),v=s(u,o,d),f=l(u,o,d,h);return r(a,o,d,h,p,v,f)-n/(r(i,o,d,h,p,v,f)*g)*(r(t,o,d,h,p+1,v,f)-r(t,o,d,h,p,v,f)-(r(e,o,d,h,p,v+1,f)-r(e,o,d,h,p,v,f)))}),{output:[n],constants:{cellSize:i,gridSizeX:t[0],gridSizeY:t[1],gridSizeZ:t[2]}}).setFunctions([c,s,l,r]).setWarnVarUsage(!1),this.updateElectricX=this.gpu.createKernel((function(e,t,i,a,n){var u=Math.floor(this.thread.x),o=this.constants.gridSizeX,d=this.constants.gridSizeY,h=this.constants.gridSizeZ,g=this.constants.cellSize,p=c(u,o),v=s(u,o,d),f=l(u,o,d,h);return r(a,o,d,h,p,v,f)+n/(r(i,o,d,h,p,v,f)*g)*(r(t,o,d,h,p,v,f)-r(t,o,d,h,p,v-1,f))}),{output:[n],constants:{cellSize:i,gridSizeX:t[0],gridSizeY:t[1],gridSizeZ:t[2]}}).setFunctions([c,s,l,r]).setWarnVarUsage(!1),this.updateElectricY=this.gpu.createKernel((function(e,t,i,a,n){var u=Math.floor(this.thread.x),o=this.constants.gridSizeX,d=this.constants.gridSizeY,h=this.constants.gridSizeZ,g=this.constants.cellSize,p=c(u,o),v=s(u,o,d),f=l(u,o,d,h);return r(a,o,d,h,p,v,f)+n/(r(i,o,d,h,p,v,f)*g)*-(r(t,o,d,h,p,v,f)-r(t,o,d,h,p-1,v,f))}),{output:[n],constants:{cellSize:i,gridSizeX:t[0],gridSizeY:t[1],gridSizeZ:t[2]}}).setFunctions([c,s,l,r]).setWarnVarUsage(!1),this.updateElectricZ=this.gpu.createKernel((function(e,t,i,a,n){var u=Math.floor(this.thread.x),o=this.constants.gridSizeX,d=this.constants.gridSizeY,h=this.constants.gridSizeZ,g=this.constants.cellSize,p=c(u,o),v=s(u,o,d),f=l(u,o,d,h);return r(a,o,d,h,p,v,f)+n/(r(i,o,d,h,p,v,f)*g)*(r(t,o,d,h,p,v,f)-r(t,o,d,h,p-1,v,f)-(r(e,o,d,h,p,v,f)-r(e,o,d,h,p,v-1,f)))}),{output:[n],constants:{cellSize:i,gridSizeX:t[0],gridSizeY:t[1],gridSizeZ:t[2]}}).setFunctions([c,s,l,r]).setWarnVarUsage(!1)}(m,.04);function z(e,t,i){return Math.max(e,Math.min(t,i))}function F(e){return n.a.createElement("div",null,n.a.createElement("label",null,e.label),n.a.createElement("div",null,n.a.createElement("input",{type:"range",min:e.min,max:e.max,value:e.value,step:e.step,onChange:function(t){return e.setValue(parseFloat(t.target.value))},style:{height:10,width:"100%"}}),n.a.createElement("div",{style:{textAlign:"center",lineHeight:.1,marginBottom:"7px"}},e.value)))}function M(e){return n.a.createElement("div",null,e.options.map((function(t,i){return n.a.createElement("button",{key:t,style:{boxSizing:"border-box",border:i===e.selectedOption?"4px solid rgb(0, 150, 255)":"0",height:"30px",margin:"5px",width:"".concat(100/e.options.length,"%"),background:"rgb(100, 100, 100)",color:"white"},onClick:function(t){return e.setSelectedOption(i)}},t)})))}function Z(e){var t=Object(a.useState)(!1),i=Object(o.a)(t,2),r=i[0],c=i[1];return n.a.createElement("div",{style:{userSelect:"none"}},n.a.createElement("div",{style:{textAlign:"center",position:"absolute",opacity:.8,background:"rgba(33, 33, 33, 100)",fontWeight:"lighter",color:"white"}},n.a.createElement("button",{onClick:function(e){return c(!r)},style:{width:"100%",height:"30px",background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",fontWeight:"bold",cursor:"pointer"}},"Controls [",r?"+":"-","]"),!r&&n.a.createElement("div",{style:{padding:"10px"}},n.a.createElement(F,{label:"Brush size",value:e.brushSize,setValue:e.setBrushSize,min:0,max:100,step:1}),n.a.createElement(F,{label:"Brush value",value:e.brushValue,setValue:e.setBrushValue,min:1,max:100,step:1}),n.a.createElement(F,{label:"Signal frequency",value:e.signalFrequency,setValue:e.setSignalFrequency,min:0,max:5,step:.5}),n.a.createElement(M,{options:["\u03b5 brush","\xb5 brush","Signal"],selectedOption:e.clickOption,setSelectedOption:e.setClickOption}),n.a.createElement("button",{onClick:e.resetFields,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Reset fields"),n.a.createElement("button",{onClick:e.resetMaterials,style:{background:"rgba(50, 50, 50, 100)",border:"0px",color:"white",margin:"2px"}},"Reset materials"))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement((function(){var e=Object(a.useState)(5),t=Object(o.a)(e,2),i=t[0],r=t[1],c=Object(a.useState)(5),s=Object(o.a)(c,2),h=s[0],g=s[1],S=Object(a.useState)(1),F=Object(o.a)(S,2),M=F[0],x=F[1],y=Object(a.useState)(!1),O=Object(o.a)(y,2),E=O[0],X=O[1],Y=Object(a.useState)(!1),w=Object(o.a)(Y,2),j=w[0],k=w[1],C=Object(a.useState)(2),V=Object(o.a)(C,2),W=V[0],U=V[1],D=Object(a.useState)(null),K=Object(o.a)(D,2),B=K[0],R=K[1],q=Object(a.useRef)(0),A=Object(a.useRef)(null),I=Object(a.useRef)(null),P=Object(a.useRef)(null),T=Object(a.useCallback)((function(){var e=b.getData();if(null!==A.current&&P.current)for(var t=z(0,e.electricSourceFieldZ.shape[0]-1,Math.floor(e.electricSourceFieldZ.shape[0]*A.current[0]/P.current.width)),i=z(0,e.electricSourceFieldZ.shape[1]-1,Math.floor(e.electricSourceFieldZ.shape[1]*A.current[1]/P.current.height)),a=0;a<e.electricSourceFieldZ.shape[2];a++)v(e.electricSourceFieldZ,t,i,a,1e3*-h*Math.cos(2*Math.PI*M*e.time)*.02);b.stepMagnetic(.02),b.stepElectric(.02)}),[M,h]);Object(a.useEffect)((function(){var e=setInterval(T,20);return function(){return clearInterval(e)}}),[T]);var G=Object(a.useCallback)((function(){var e=!1;return function(){var t=Object(u.a)(l.a.mark((function t(){var i,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=function(e){return requestAnimationFrame(e)};case 1:if(e){t.next=8;break}return(a=b.getData()).time>0&&null!==I.current&&I.current(a.electricFieldX.values,a.electricFieldY.values,a.electricFieldZ.values,a.magneticFieldX.values,a.magneticFieldY.values,a.magneticFieldZ.values,a.permittivity.values,a.permeability.values),t.next=6,new Promise(i);case 6:t.next=1;break;case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){e=!0}}),[]);Object(a.useEffect)((function(){if(!P.current)throw new Error("Canvas ref was null");I.current=function(e){function t(e,t,i,a,n,r,c){return n<0||n>=t||r<0||r>=i||c<0||c>=a?0:e[n+r*t+c*t*i]}return e.createKernel((function(e,i,a,n,r,c,s,l){var u=this.constants.gridSizeX,o=this.constants.gridSizeY,d=this.constants.gridSizeZ,h=u*this.thread.x/this.output.x,g=o*(1-this.thread.y/this.output.y),p=Math.floor(h),v=Math.floor(g),f=Math.floor(d/2),S=t(e,u,o,d,p,v,f)*t(e,u,o,d,p,v,f)+t(i,u,o,d,p,v,f)*t(i,u,o,d,p,v,f)+t(a,u,o,d,p,v,f)*t(a,u,o,d,p,v,f),m=(t(n,u,o,d,p,v,f)+t(n,u,o,d,p-1,v-1,f))/2,b=(t(r,u,o,d,p,v,f)+t(r,u,o,d,p-1,v-1,f))/2,z=(t(c,u,o,d,p,v,f)+t(c,u,o,d,p-1,v-1,f))/2,F=m*m+b*b+z*z,M=Math.max(0,Math.min(1,(1+.4342944819*Math.log(t(s,u,o,d,p,v,f)))/4)),Z=Math.max(0,Math.min(1,(1+.4342944819*Math.log(t(l,u,o,d,p,v,f)))/4)),x=(Math.abs(h%1-.5)<.25?1:0)*(Math.abs(g%1-.5)<.25?1:0),y=1-x;this.color(S/15+.5*x*M,S/15+F/15,F/15+.5*y*Z)}),{output:[f[0],f[1]],constants:{gridSizeX:m[0],gridSizeY:m[1],gridSizeZ:m[2]},graphical:!0}).setFunctions([t]).setWarnVarUsage(!1)}(new d.GPU({mode:"webgl",canvas:P.current})),G()}),[G]);var H=Object(a.useCallback)((function(e,t){for(var a=Math.round(m[0]*(t[0]/f[0])),n=Math.round(m[1]*(t[1]/f[1])),r=Math.round(i/2),c=Math.max(0,a-r);c<=Math.min(m[0]-1,a+r);c++)for(var s=Math.max(0,n-r);s<=Math.min(m[1]-1,n+r);s++)p(e,c,s,0,h)}),[i,h]),J=Object(a.useCallback)((function(){b.resetMaterials()}),[]),$=Object(a.useCallback)((function(){b.resetFields(),q.current=0}),[]),_=Object(a.useCallback)((function(e){var t=Object(o.a)(e,2),i=t[0],a=t[1];2===W?A.current=[i,a]:0===W?(H(b.getData().permittivity,[i,a]),k(!0)):1===W&&(H(b.getData().permeability,[i,a]),X(!0))}),[H,W]),L=Object(a.useCallback)((function(e){var t=Object(o.a)(e,2),i=t[0],a=t[1];2===W&&null!==A.current&&(A.current=[i,a]),j&&H(b.getData().permittivity,[i,a]),E&&H(b.getData().permeability,[i,a])}),[H,W,E,j]),N=Object(a.useCallback)((function(){2===W?A.current=null:1===W?X(!1):0===W&&k(!1)}),[W]);return n.a.createElement("div",null,n.a.createElement("canvas",{width:f[0],height:f[1],ref:P,style:{position:"absolute",userSelect:"none"},onMouseDown:function(e){return _([e.clientX,e.clientY])},onMouseMove:function(e){R([e.clientX,e.clientY]),L([e.clientX,e.clientY])},onMouseUp:function(e){return N()},onTouchStart:function(e){return _([e.touches[0].clientX,e.touches[0].clientY])},onTouchMove:function(e){return L([e.touches[0].clientX,e.touches[0].clientY])},onTouchEnd:function(e){return N()},onContextMenu:function(e){return e.preventDefault()}}),n.a.createElement("div",{style:{position:"absolute",bottom:10,right:10,userSelect:"none"}},n.a.createElement("a",{href:"https://github.com/RobinKa/maxwell-simulation",rel:"noopener noreferrer",target:"_blank",style:{fontWeight:"lighter",color:"rgba(255, 255, 255, 100)",textDecoration:"none"}},"Source code")),2!==W&&B&&n.a.createElement("div",{style:{position:"absolute",pointerEvents:"none",left:B[0]-2*(i+1),top:B[1]-2*(i+1),width:4*(i+1),height:4*(i+1),border:"2px solid yellow"}}),n.a.createElement(Z,{brushSize:i,setBrushSize:r,brushValue:h,setBrushValue:g,signalFrequency:M,setSignalFrequency:x,clickOption:W,setClickOption:U,resetFields:$,resetMaterials:J}))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,i){e.exports=i(184)},81:function(e,t,i){}},[[76,1,2]]]);
//# sourceMappingURL=main.45cdf05f.chunk.js.map
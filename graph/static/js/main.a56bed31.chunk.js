(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{259:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(8),i=n.n(a),c=(n(62),n(13)),u=n(293),l=(n(63),n(34));function s(){var t=window;return{width:t.innerWidth,height:t.innerHeight,relativeDpi:t.devicePixelRatio}}function d(t){var e=t.gridCellSize,n=t.conn.fromNode.position.x+8*e,r=t.conn.fromNode.position.y+t.conn.fromPinIndex*e+1.5*e,a=t.conn.toNode.position.x,i=t.conn.toNode.position.y+t.conn.toPinIndex*e+1.5*e,c=2*e;return o.a.createElement("path",{d:"M ".concat(n," ").concat(r," C ").concat(n+c," ").concat(r," ").concat(a-c," ").concat(i," ").concat(a," ").concat(i),fill:"none",strokeWidth:.11*e,stroke:t.conn.toNode.getInputPins().get(t.conn.toPinIndex).color})}var f=n(290);function h(t){var e=t.node,n=t.gridCellSize,r=Math.max(e.getInputPins().count(),e.getOutputPins().count())*n;return o.a.createElement("g",{width:8*n,height:r,transform:"translate(".concat(e.position.x,", ").concat(e.position.y,")")},o.a.createElement("rect",{width:8*n,height:n+r,strokeWidth:"0",style:{fill:"gray"},filter:"url(#nodeShadow)"}),o.a.createElement("rect",{width:8*n,height:n,style:{fill:"rgb(63, 81, 181)",cursor:"move"},onMouseDown:function(n){t.startDrag(e,n)}}),o.a.createElement("rect",{y:n,width:8*n,height:r,style:{fill:"white"}}),o.a.createElement("text",{textAnchor:"middle",x:4*n,y:.75*n,style:{fontSize:.65*n,fill:"white",pointerEvents:"none",userSelect:"none",MozUserSelect:"none"}},e.displayName),o.a.createElement("g",{transform:"translate(10, ".concat(n,")")},e.getInputPins().map(function(t,e){return o.a.createElement("g",{key:e,transform:"translate(0, ".concat(e*n,")")},o.a.createElement("foreignObject",{width:3*n,height:"100",x:.3*n,y:n/2-23},o.a.createElement(f.a,{label:"Input"})),o.a.createElement("circle",{r:.2*n,cx:.1*-n,cy:n/2,style:{fill:t.color,cursor:"grab"},filter:"url(#nodeShadow)"}))})),o.a.createElement("g",{transform:"translate(".concat(8*n,", ").concat(n,")")},e.getOutputPins().map(function(t,e){return o.a.createElement("g",{key:e,transform:"translate(0, ".concat(e*n,")")},o.a.createElement("rect",{width:3*n,height:.15*n,x:-3.3*n,y:n/2-.075*n+20,style:{fill:"rgb(222, 222, 222)"}}),o.a.createElement("circle",{r:.2*n,cx:0,cy:n/2,style:{fill:t.color,cursor:"grab"},filter:"url(#nodeShadow)"}))})))}function p(t){var e=t.gridCellSize,n=t.graph,a=t.dispatchGraph,i=function(){var t=Object(r.useState)(s()),e=Object(c.a)(t,2),n=e[0],o=e[1];return Object(r.useEffect)(function(){function t(){o(s())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},[]),n}(),u=Object(r.useState)(!1),f=Object(c.a)(u,2),p=f[0],g=f[1],m=Object(r.useState)(null),v=Object(c.a)(m,2),y=v[0],b=v[1],w=Object(r.useState)({x:0,y:0}),x=Object(c.a)(w,2),O=x[0],E=x[1],N=Object(r.useState)({x:0,y:0}),j=Object(c.a)(N,2),S=j[0],I=j[1],P=Object(r.useRef)(null),k=function(t){var e=P.current;if(null!=e){var n=e.getScreenCTM();if(null!=n){var r=e.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,r.matrixTransform(n.inverse())}}return null};function C(t,e){var n=k(e);null!=n&&(b(t),E(n),I(t.position),g(!0))}return o.a.createElement("svg",{onMouseMove:function(t){if(p){var n=k(t);if(null!=n){var r={x:S.x+(n.x-O.x),y:S.y+(n.y-O.y)};r.x-=r.x%e,r.y-=r.y%e,a({type:"setNodePosition",node:y,position:r})}}},onMouseUp:function(t){g(!1)},ref:P,viewBox:"0 0 ".concat(1800/i.relativeDpi*.8*i.width/i.height," ").concat(1800/i.relativeDpi),style:{position:"fixed",top:0,left:"20%",height:"100%",width:"80%",backgroundColor:"rgb(240, 240, 240)"}},o.a.createElement("defs",null,o.a.createElement("pattern",{id:"smallGrid",width:e,height:e,patternUnits:"userSpaceOnUse"},o.a.createElement("path",{d:"M ".concat(e," 0 L 0 0 0 ").concat(e),fill:"none",stroke:"rgb(180, 180, 180)",strokeWidth:"1"})),o.a.createElement("pattern",{id:"grid",width:5*e,height:5*e,patternUnits:"userSpaceOnUse"},o.a.createElement("rect",{width:5*e,height:5*e,fill:"url(#smallGrid)"}),o.a.createElement("path",{d:"M ".concat(5*e," 0 L 0 0 0 ").concat(5*e),fill:"none",stroke:"rgb(180, 180, 180)",strokeWidth:"2"}))),o.a.createElement("rect",{width:"100%",height:"100%",fill:"url(#grid)"}),o.a.createElement("defs",null,o.a.createElement("filter",{id:"nodeShadow"},o.a.createElement("feDropShadow",{dx:"0",dy:"0",stdDeviation:"2"}))),n.nodes.map(function(t){return o.a.createElement(h,{key:t.uniqueId,gridCellSize:e,node:t,startDrag:C})}),n.dataConnections.map(function(t){return Object(l.a)({},t,{fromPinIndex:t.fromPinIndex+t.fromNode.getExecOutputs().count(),toPinIndex:t.toPinIndex+t.toNode.getExecInputs().count()})}).concat(n.execConnections).map(function(t){return o.a.createElement(d,{key:t.fromNode.uniqueId+t.toNode.uniqueId,gridCellSize:e,conn:t})}))}var g=n(48),m=n.n(g),v=(n(256),n(287)),y=n(288),b=n(17),w=n(14),x=function t(e){Object(b.a)(this,t),this.fullName=e};function O(t){var e="",n=!0,r=!1,o=void 0;try{for(var a,i=t.nodes[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var c=a.value;e+=c.translateVariables()}}catch(x){r=!0,o=x}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}var u=!0,l=!1,s=void 0;try{for(var d,f=t.nodes.filter(function(t){return t.getIsPure()})[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var h=d.value;e+="void ".concat(h.getPureFunctionName(),"()\n"),e+="{\n",e+=h.translatePureFunctions(),e+="}\n"}}catch(x){l=!0,s=x}finally{try{u||null==f.return||f.return()}finally{if(l)throw s}}var p=!0,g=!1,m=void 0;try{for(var v,y=function(){var n=v.value,r=n.getExecOutputs().map(function(t){return{label:null}}),o=function t(e,n){for(var r=w.a(),o=function(o){var a=n.filter(function(t){return t.toNode===e&&t.toPinIndex===o});if(a.count()>1)throw new Error;if(1===a.count()){var i=a.get(0);i.fromNode.getIsPure()&&(r=r.concat(t(i.fromNode,n))),r=r.push("".concat(i.fromNode.getPureFunctionName(),"();\n"))}},a=0;a<e.getInputs().count();a++)o(a);return r}(n,t.dataConnections),a=t.execConnections.filter(function(t){return t.fromNode===n}),i=!0,c=!1,u=void 0;try{for(var l,s=a[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var d=l.value;r=r.set(d.fromPinIndex,d.toNode.getExecInputs().get(d.toPinIndex))}}catch(x){c=!0,u=x}finally{try{i||null==s.return||s.return()}finally{if(c)throw u}}e+=n.translateStates(r,o.toSet().join(""))},b=t.nodes.filter(function(t){return!t.getIsPure()})[Symbol.iterator]();!(p=(v=b.next()).done);p=!0)y()}catch(x){g=!0,m=x}finally{try{p||null==b.return||b.return()}finally{if(g)throw m}}return e}function E(t){var e=t.graph,n=Object(r.useState)(),a=Object(c.a)(n,2),i=a[0],u=a[1],l=Boolean(i),s=O(e);return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{variant:"contained",onClick:function(t){return u(i?null:t.target)}},"Code"),o.a.createElement(y.a,{open:l,anchorEl:i,placement:"top",style:{width:"30%"}},o.a.createElement(m.a,{className:"cs transparent"},s)))}var N=n(28),j=n(26),S=n(27),I=n(18);function P(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e="abcdefghijklmnopqrstuvwxyz".length,n="",r=0;r<t;r++)n+="abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*e));return n}var k=function(){function t(){var e=this;Object(b.a)(this,t),this.getInputPins=function(){return e.getExecInputs().map(function(t){return{color:"rgb(255, 64, 129)"}}).concat(e.getInputs().map(function(t){return{color:"rgb(0, 150, 136)"}}))},this.getOutputPins=function(){return e.getExecOutputs().map(function(t){return{color:"rgb(255, 64, 129)"}}).concat(e.getOutputs().map(function(t){return{color:"rgb(0, 150, 136)"}}))},this.displayName=void 0,this.uniqueId=P(32),this.position={x:0,y:0},this.getInputs=function(){return e.inputs},this.getOutputs=function(){return e.outputs},this.getExecInputs=function(){return e.execInputs},this.getExecOutputs=function(){return e.execOutputs},this.inputs=w.a(),this.outputs=w.a(),this.execInputs=w.a(),this.execOutputs=w.a(),this.addInput=function(t){return e.inputs=e.inputs.push({type:t,variableName:P()})},this.addOutput=function(t){return e.outputs=e.outputs.push({type:t,variableName:P()})},this.addExecInput=function(){return e.execInputs=e.execInputs.push({label:P()})},this.addExecOutput=function(){return e.execOutputs=e.execOutputs.push({})}}return Object(I.a)(t,[{key:"translateVariables",value:function(){return this.inputs.concat(this.outputs).map(function(t){return"".concat(t.type.fullName," ").concat(t.variableName," = default(").concat(t.type.fullName,");\n")}).join("")}},{key:"translatePureFunctions",value:function(){return""}},{key:"translateStates",value:function(t,e){return""}}]),t}(),C=function(t){function e(){var t,n;Object(b.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(N.a)(this,(t=Object(j.a)(e)).call.apply(t,[this].concat(o)))).getIsPure=function(){return!0},n.pureFunctionName="Node".concat(e.nodeCounter++),n.getPureFunctionName=function(){return n.pureFunctionName},n}return Object(S.a)(e,t),e}(k);C.nodeCounter=0;var z=function(t){function e(){var t,n;Object(b.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(N.a)(this,(t=Object(j.a)(e)).call.apply(t,[this].concat(o)))).getIsPure=function(){return!1},n.getPureFunctionName=function(){return null},n}return Object(S.a)(e,t),e}(k),F=function(t){function e(t,n){var r;return Object(b.a)(this,e),(r=Object(N.a)(this,Object(j.a)(e).call(this))).type=t,r.value=n,r.displayName="Literal",r.addOutput(new x("System.String")),r}return Object(S.a)(e,t),Object(I.a)(e,[{key:"translateVariables",value:function(){return"const ".concat(this.type.fullName," = ").concat(this.value,";\n")}}]),e}(C),M=function(t){function e(){var t;return Object(b.a)(this,e),(t=Object(N.a)(this,Object(j.a)(e).call(this))).displayName="Reverse String",t.addInput(new x("System.String")),t.addOutput(new x("System.String")),t}return Object(S.a)(e,t),Object(I.a)(e,[{key:"translatePureFunctions",value:function(){var t=this.getInputs().get(0),e=this.getOutputs().get(0);if(void 0===t||void 0===e)throw new Error("One or more pins were undefined");return"".concat(e.variableName," = string.Concat(").concat(t.variableName,".Reverse());\n")}}]),e}(C),W=function(t){function e(){var t;return Object(b.a)(this,e),(t=Object(N.a)(this,Object(j.a)(e).call(this))).displayName="Concatenate",t.addInput(new x("System.String")),t.addInput(new x("System.String")),t.addOutput(new x("System.String")),t.addExecInput(),t.addExecOutput(),t}return Object(S.a)(e,t),Object(I.a)(e,[{key:"translateStates",value:function(t,e){var n=this.getExecInputs().get(0),r=this.getInputs().get(0),o=this.getInputs().get(1),a=this.getOutputs().get(0),i=t.get(0);if(void 0===n||void 0===r||void 0===o||void 0===a||void 0===i)throw new Error("One or more pins were undefined");var c="".concat(n.label,":\n");return c+=e,c+="".concat(a.variableName," = ").concat(r.variableName,' + " " + ').concat(o.variableName,";\n"),null!==i.label?c+="goto ".concat(i.label,";\n"):c+="return;\n",c}}]),e}(z);function L(t){var e=t.typeFromString("System.String"),n=t.createLiteralNode(e,'"Hello"'),r=t.createReverseStringNode(),o=t.createConcatenateNode(),a={fromNode:n,fromPinIndex:0,toNode:r,toPinIndex:0},i={fromNode:n,fromPinIndex:0,toNode:o,toPinIndex:0},c={fromNode:r,fromPinIndex:0,toNode:o,toPinIndex:1};return{nodes:Object(w.a)([n,r,o]),dataConnections:Object(w.a)([a,i,c]),execConnections:Object(w.a)()}}var R=new function t(){Object(b.a)(this,t),this.createConcatenateNode=function(){return new W},this.createLiteralNode=function(t,e){return new F(t,e)},this.createReverseStringNode=function(){return new M},this.typeFromString=function(t){return new x(t)}};function A(t,e){return t.nodes.get(0).position.x=3*e,t.nodes.get(0).position.y=3*e,t.nodes.get(1).position.x=3*e,t.nodes.get(1).position.y=9*e,t.nodes.get(2).position.x=15*e,t.nodes.get(2).position.y=4*e,t}function U(t,e){var n=Object(l.a)({},t);switch(e.type){case"setNodePosition":e.node.position=e.position;break;case"addNode":n.nodes=n.nodes.push(R.createConcatenateNode());break;default:throw new Error}return n}for(var D=n(286),G=n(289),q=n(292),B=n(50),T=n.n(B),V=[],H=0;H<10;H++)V.push(H);function J(t){var e=t.dispatchGraph;return o.a.createElement(D.a,null,V.map(function(t){return o.a.createElement(G.a,{button:!0,key:t,onClick:function(t){return e({type:"addNode"})}},o.a.createElement(T.a,null),o.a.createElement(q.a,{primary:"Literal"}))}))}var X=function(){var t,e=(t=60,{graph:A(L(R),t),reducer:U}),n=Object(r.useReducer)(e.reducer,e.graph),a=Object(c.a)(n,2),i=a[0],l=a[1];return o.a.createElement("div",null,o.a.createElement(u.a,null),o.a.createElement("div",{style:{width:"20%"}},o.a.createElement(J,{dispatchGraph:l})),o.a.createElement(p,{gridCellSize:60,graph:i,dispatchGraph:l}),o.a.createElement("div",{style:{position:"absolute",bottom:20,right:20}},o.a.createElement(E,{graph:i})))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}i.a.render(o.a.createElement(X,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/graph",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/graph","/service-worker.js");Y?(function(t,e){fetch(t).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):$(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):$(e,t)})}}()},57:function(t,e,n){t.exports=n(259)},62:function(t,e,n){},63:function(t,e,n){}},[[57,1,2]]]);
//# sourceMappingURL=main.a56bed31.chunk.js.map
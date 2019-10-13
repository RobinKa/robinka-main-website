(window.webpackJsonpsymplectic=window.webpackJsonpsymplectic||[]).push([[0],{26:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(21),c=n.n(o),i=n(4),s=n(13),l=n(22),u=n.n(l);function m(e,t,n){for(var r=0;r<e.length;r++)e[r]+=n*t[r]}function p(e,t,n,r){for(var a=0;a<t.length;a++)e[a]=t[a]+r*n[a]}var b=function e(t,n){var r=this;Object(s.a)(this,e),this.constants=t,this.getEnergyGradients=n,this.iterate=function(e,t){var n=u()(e);n.time+=t,t/=2;for(var a=[],o=[],c=0;c<n.objects.length;c++){var i=n.objects[c],s=r.constants[0],l=s.c,b=s.d,f=[],d=[];f.length=i.position.length,d.length=i.momentum.length;var j=r.getEnergyGradients(c,i.position,i.momentum,e);p(f,i.position,j.gradMomentum,t*b),p(d,i.momentum,j.gradPosition,t*-b),j=r.getEnergyGradients(c,f,d,e),m(i.position,j.gradMomentum,t*l),m(i.momentum,j.gradPosition,t*-l),a.push(f),o.push(d)}var v=!0,y=!1,g=void 0;try{for(var O,h=r.constants.slice(1,r.constants.length-1)[Symbol.iterator]();!(v=(O=h.next()).done);v=!0)for(var E=O.value,P=(l=E.c,E.d),x=0;x<n.objects.length;x++){var S=n.objects[x],w=a[x],k=o[x],C=r.getEnergyGradients(x,S.position,S.momentum,e);m(w,C.gradMomentum,t*P),m(k,C.gradPosition,t*-P),C=r.getEnergyGradients(x,w,k,e),m(S.position,C.gradMomentum,t*l),m(S.momentum,C.gradPosition,t*-l)}}catch(ae){y=!0,g=ae}finally{try{v||null==h.return||h.return()}finally{if(y)throw g}}for(var T=0;T<n.objects.length;T++){b=r.constants[r.constants.length-1].d;var q=n.objects[T],V=a[T],M=r.getEnergyGradients(T,q.position,q.momentum,e);p(q.position,V,M.gradMomentum,t*b)}for(var F=0;F<n.objects.length;F++){var D=n.objects[F],_=r.constants[0],G=(l=_.c,_.d),A=a[F],N=o[F],I=r.getEnergyGradients(F,D.position,D.momentum,e);p(A,D.position,I.gradMomentum,t*G),p(N,D.momentum,I.gradPosition,t*-G),I=r.getEnergyGradients(F,A,N,e),m(D.position,I.gradMomentum,t*l),m(D.momentum,I.gradPosition,t*-l)}var R=!0,Q=!1,Y=void 0;try{for(var U,W=r.constants.slice(1,r.constants.length-1)[Symbol.iterator]();!(R=(U=W.next()).done);R=!0)for(var X=U.value,B=X.c,J=X.d,$=0;$<n.objects.length;$++){var z=n.objects[$],H=a[$],K=o[$],L=r.getEnergyGradients($,z.position,z.momentum,e);m(H,L.gradMomentum,t*J),m(K,L.gradPosition,t*-J),L=r.getEnergyGradients($,H,K,e),m(z.position,L.gradMomentum,t*B),m(z.momentum,L.gradPosition,t*-B)}}catch(ae){Q=!0,Y=ae}finally{try{R||null==W.return||W.return()}finally{if(Q)throw Y}}for(var Z=0;Z<n.objects.length;Z++){var ee=r.constants[r.constants.length-1].d,te=n.objects[Z],ne=o[Z],re=r.getEnergyGradients(Z,te.position,te.momentum,e);p(te.momentum,ne,re.gradPosition,t*-ee)}return n}},f=n(2),d=n(11),j=n(6),v=n(7);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(){for(var e="0.5 * (q0^2 + q1^2) + q0 * (q0^2 - q1^2 / 3.0) + 0.5 * (p1^2 + p0^2)",t={energyTerms:[{expression:Object(f.parseExpression)(e),expressionFormula:e,affectedObjects:{},affectedObjectPairs:{}}],objects:[],dimensions:2,initialPositionScale:.3,initialMomentumScale:.3,objectProperties:[]},n=0;n<10;n++)t.objects.push({propertyValues:{}});return t.objects.forEach((function(e,n){t.energyTerms[0].affectedObjects[n]=!0})),t}function h(e,t){switch(t.type){case"addEnergyTerm":return g({},e,{energyTerms:[].concat(Object(j.a)(e.energyTerms),[t.term])});case"updateEnergyTerm":var n=Object(j.a)(e.energyTerms);return n[t.index]=t.term,g({},e,{energyTerms:n});case"removeEnergyTerm":var r=Object(j.a)(e.energyTerms);return r.pop(),g({},e,{energyTerms:r});case"addObject":return g({},e,{objects:[].concat(Object(j.a)(e.objects),[{propertyValues:{}}])});case"updateObject":var a=Object(j.a)(e.objects);return a[t.index]=t.object,g({},e,{objects:a});case"removeObject":var o=Object(j.a)(e.objects);return o.pop(),g({},e,{objects:o});case"setInitialScales":return g({},e,{initialPositionScale:t.positionScale,initialMomentumScale:t.momentumScale});case"loadState":return t.state;case"addObjectProperty":var c=[].concat(Object(j.a)(e.objectProperties),[{name:"x"+e.objectProperties.length.toString(),defaultValue:0}]);return g({},e,{objectProperties:c});case"removeObjectProperty":var i=Object(j.a)(e.objectProperties);return i.pop(),g({},e,{objectProperties:i});case"updateObjectProperty":var s=Object(j.a)(e.objectProperties);return s.forEach((function(e,n){e.name===t.name&&(s[n]={name:t.name,defaultValue:t.defaultValue})})),g({},e,{objectProperties:s});case"loadPreset":switch(t.preset){case"coulomb":return function(){for(var e="10000 * Q * Q_b / sqrt((q0 - q0_b)^2 + (q1 - q1_b)^2)",t={energyTerms:[{expression:Object(f.parseExpression)("0.5 * (p0^2 + p1^2) / m"),expressionFormula:"0.5 * (p0^2 + p1^2) / m",affectedObjects:{},affectedObjectPairs:{}},{expression:Object(f.parseExpression)(e),expressionFormula:e,affectedObjects:{},affectedObjectPairs:{}}],objects:[],dimensions:2,initialPositionScale:50,initialMomentumScale:0,objectProperties:[{name:"Q",defaultValue:1},{name:"m",defaultValue:1}]},n=0;n<10;n++)t.objects.push({propertyValues:{Q:n%2===0?1:-1}});return t.objects.forEach((function(e,n){t.energyTerms[0].affectedObjects[n]=!0})),t.objects.forEach((function(e,n){t.objects.forEach((function(e,r){n!==r&&(t.energyTerms[1].affectedObjectPairs[[n,r].toString()]=!0)}))})),t}();case"gravity":return function(){for(var e="-0.01 * m * m_b / sqrt((q0 - q0_b)^2 + (q1 - q1_b)^2)",t={energyTerms:[{expression:Object(f.parseExpression)("0.5 * (p0^2 + p1^2) / m"),expressionFormula:"0.5 * (p0^2 + p1^2) / m",affectedObjects:{},affectedObjectPairs:{}},{expression:Object(f.parseExpression)(e),expressionFormula:e,affectedObjects:{},affectedObjectPairs:{}}],objects:[],dimensions:2,initialPositionScale:50,initialMomentumScale:5,objectProperties:[{name:"m",defaultValue:1}]},n=0;n<10;n++)t.objects.push({propertyValues:{m:0===n?1e4:n}});return t.objects.forEach((function(e,n){t.energyTerms[0].affectedObjects[n]=!0})),t.objects.forEach((function(e,n){t.objects.forEach((function(e,r){n!==r&&(t.energyTerms[1].affectedObjectPairs[[n,r].toString()]=!0)}))})),t}();case"attractor":return O();case"nuclear":return function(){for(var e="3 * exp(-3 * sqrt((q0 - q0_b)^2 + (q1 - q1_b)^2)) / sqrt((q0 - q0_b)^2 + (q1 - q1_b)^2)",t={energyTerms:[{expression:Object(f.parseExpression)("0.5 * (p0^2 + p1^2) / m"),expressionFormula:"0.5 * (p0^2 + p1^2) / m",affectedObjects:{},affectedObjectPairs:{}},{expression:Object(f.parseExpression)("-1 / sqrt((q0 - q0_b)^2 + (q1 - q1_b)^2)"),expressionFormula:"-1 / sqrt((q0 - q0_b)^2 + (q1 - q1_b)^2)",affectedObjects:{},affectedObjectPairs:{}},{expression:Object(f.parseExpression)(e),expressionFormula:e,affectedObjects:{},affectedObjectPairs:{}}],objects:[],dimensions:2,initialPositionScale:10,initialMomentumScale:0,objectProperties:[{name:"m",defaultValue:1}]},n=0;n<10;n++)t.objects.push({propertyValues:{}});return t.objects.forEach((function(e,n){t.energyTerms[0].affectedObjects[n]=!0})),t.objects.forEach((function(e,n){t.objects.forEach((function(e,r){n!==r&&(t.energyTerms[1].affectedObjectPairs[[n,r].toString()]=!0,t.energyTerms[2].affectedObjectPairs[[n,r].toString()]=!0)}))})),t}();default:throw new Error("Unknown preset "+t.preset)}}throw new Error("Unhandled action in reducer")}var E=Object(r.createContext)(void 0);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t=Object(r.useContext)(E),n=t.state,o=t.dispatch,c=e.index,i=n.energyTerms[c];return a.a.createElement("div",null,n.objects.map((function(e,t){var n=!!i.affectedObjects[t];return a.a.createElement("input",{type:"checkbox",key:t,checked:n,onChange:function(){return o({type:"updateEnergyTerm",index:c,term:x({},i,{affectedObjects:x({},i.affectedObjects,Object(v.a)({},t,!n))})})}})})))}function w(e){var t=Object(r.useContext)(E),n=t.state,o=t.dispatch,c=e.index,i=n.energyTerms[c];return a.a.createElement("div",null,n.objects.map((function(e,t){return a.a.createElement("div",{key:t},n.objects.map((function(e,n){var r=[t,n].toString(),s=!!i.affectedObjectPairs[r];return a.a.createElement("input",{type:"checkbox",key:n,checked:s,onChange:function(){return o({type:"updateEnergyTerm",index:c,term:x({},i,{affectedObjectPairs:x({},i.affectedObjectPairs,Object(v.a)({},r,!s))})})}})})))})))}function k(e){var t=Object(r.useContext)(E),n=t.state,o=t.dispatch,c=Object(r.useState)(""),s=Object(i.a)(c,2),l=s[0],u=s[1],m=Object(r.useState)(!0),p=Object(i.a)(m,2),b=p[0],d=p[1],j=e.index,v=n.energyTerms[j];Object(r.useEffect)((function(){""===l&&u(v.expressionFormula)}),[v,l]);var y=Object(r.useCallback)((function(){var e=Object(f.parseExpression)(l);d(!0),o({type:"updateEnergyTerm",index:j,term:x({},v,{expression:e,expressionFormula:l})})}),[l,j,o,v]),g=Object(r.useCallback)((function(e){u(e.target.value),d(!1)}),[]);return a.a.createElement("div",{style:{border:"2px solid black",padding:"4px",margin:"4px"}},a.a.createElement("h2",null,"Energy ",j),a.a.createElement("input",{type:"text",style:{width:800,color:b?"black":"red"},onChange:g,value:l}),a.a.createElement("input",{type:"button",value:"Parse",onClick:y}),a.a.createElement("h3",null,"Affected objects"),a.a.createElement(S,{index:j}),a.a.createElement("h3",null,"Affected object pairs"),a.a.createElement(w,{index:j}))}function C(){var e=Object(r.useContext)(E),t=e.state,n=e.dispatch,o=t.energyTerms;return a.a.createElement("div",{style:{}},a.a.createElement("h1",null,"Energy terms"),a.a.createElement("div",null,o.map((function(e,t){return a.a.createElement(k,{key:t,index:t})}))),a.a.createElement("input",{type:"button",value:"Add",onClick:function(){return n({type:"addEnergyTerm",term:(e=new f.Constant(0),t="0",{expression:e,expressionFormula:t,affectedObjects:{},affectedObjectPairs:{}})});var e,t}}),a.a.createElement("input",{type:"button",value:"Remove",onClick:function(){return n({type:"removeEnergyTerm"})}}))}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(){var e=Object(r.useContext)(E),t=e.state,n=e.dispatch;return a.a.createElement("div",null,a.a.createElement("h1",null,"Objects Count: ",t.objects.length),a.a.createElement("input",{type:"button",value:"Add",onClick:function(){return n({type:"addObject"})}}),a.a.createElement("input",{type:"button",value:"Remove",onClick:function(){return n({type:"removeObject"})}}),a.a.createElement("div",null,t.objects.map((function(e,r){return a.a.createElement("div",{key:r,style:{border:"2px solid black",padding:"4px",margin:"4px"}},a.a.createElement("div",null,"Object ",r),t.objectProperties.map((function(t){return a.a.createElement("div",null,a.a.createElement("label",null,t.name,": "),a.a.createElement("input",{type:"text",value:e.propertyValues[t.name],onChange:function(a){if(""===a.target.value){var o=q({},e.propertyValues);delete o[t.name],n({type:"updateObject",index:r,object:q({},e,{propertyValues:o})})}else{var c=parseFloat(a.target.value);isNaN(c)||n({type:"updateObject",index:r,object:q({},e,{propertyValues:q({},e.propertyValues,Object(v.a)({},t.name,c))})})}}}))})))}))))}var M=n(5);n(51);function F(){var e=Object(r.useContext)(E),t=e.state,n=e.dispatch;return a.a.createElement("div",null,a.a.createElement("h1",null,"Object Properties"),a.a.createElement("div",null,t.objectProperties.map((function(e,t){return a.a.createElement("div",{key:e.name,style:{border:"2px solid black",padding:"4px",margin:"4px"}},a.a.createElement("h2",null,"Property ",e.name),a.a.createElement("label",null,"Default:"),a.a.createElement("input",{type:"text",value:e.defaultValue,onChange:function(t){var r=parseFloat(t.target.value);isNaN(r)||n({type:"updateObjectProperty",name:e.name,defaultValue:r})}}))}))),a.a.createElement("input",{type:"button",value:"Add",onClick:function(){return n({type:"addObjectProperty"})}}),a.a.createElement("input",{type:"button",value:"Remove",onClick:function(){return n({type:"removeObjectProperty"})}}))}var D=function(e){var t=Object(r.useContext)(E).state,n=Object(r.useRef)(null),o=Object(r.useState)(200/t.initialPositionScale),c=Object(i.a)(o,2),s=c[0],l=c[1],u=Object(r.useState)([0,0]),m=Object(i.a)(u,2),p=m[0],b=m[1];Object(r.useEffect)((function(){if(n.current){var t=n.current,r=t.getContext("2d");if(r){r.fillStyle="rgb(20, 20, 20)",r.fillRect(0,0,t.width,t.height),r.fillStyle="red";var a=!0,o=!1,c=void 0;try{for(var i,l=e.integratorState.objects[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var u=i.value,m=[u.position[0],u.position[1]],b=m[0],f=m[1],d=u.position[0]+u.momentum[0],j=u.position[1]+u.momentum[1];r.strokeStyle="blue",r.beginPath(),r.moveTo(s*b+t.width/2+p[0],s*f+t.height/2+p[1]),r.lineTo(s*d+t.width/2+p[0],s*j+t.height/2+p[1]),r.stroke(),r.fillRect(s*b-2+t.width/2+p[0],s*f-2+t.height/2+p[1],4,4)}}catch(v){o=!0,c=v}finally{try{a||null==l.return||l.return()}finally{if(o)throw c}}r.strokeStyle="lime",r.beginPath(),r.moveTo(10,10),r.lineTo(110,10),r.stroke(),r.fillStyle="lime",r.fillText((100/s).toFixed(2),50,20),r.fillText("t: ".concat(e.integratorState.time.toFixed(2)),t.width-50,20)}}}),[e.integratorState,n,s,p]);var f=Object(r.useCallback)((function(e){console.log(s),l(s*(1-.1*Math.sign(e.deltaY)))}),[s,l]),d=Object(r.useState)(!1),j=Object(i.a)(d,2),v=j[0],y=j[1],g=Object(r.useState)([0,0]),O=Object(i.a)(g,2),h=O[0],P=O[1],x=Object(r.useCallback)((function(e){0===e.button&&(y(!0),P([e.clientX,e.clientY]))}),[y,P]),S=Object(r.useCallback)((function(e){0===e.button&&y(!1)}),[y]),w=Object(r.useCallback)((function(e){if(v){var t=[e.clientX-h[0],e.clientY-h[1]];b([p[0]+t[0],p[1]+t[1]]),P([e.clientX,e.clientY])}}),[v,h,P,p]);return a.a.createElement("canvas",{width:"1000",height:"1000",ref:n,onWheel:f,onMouseDown:x,onMouseMove:w,onMouseUp:S})},_=[{c:.24658818727861384,d:.08333333333333333},{c:.6047073875057809,d:.397767585954844},{c:-.40098690397880077,d:-.03933369314462574},{c:.09938265838881204,d:.05823277385644839},{c:-.40098690397880077,d:.05823277385644839},{c:.6047073875057809,d:-.03933369314462574},{c:.24658818727861384,d:.397767585954844},{c:0,d:.08333333333333333}];var G=function(){var e=Object(r.useContext)(E),t=e.state,n=e.dispatch,o=t.initialPositionScale,c=t.initialMomentumScale,s=Object(r.useState)(null),l=Object(i.a)(s,2),u=l[0],m=l[1],p=Object(r.useState)(null),j=Object(i.a)(p,2),v=j[0],y=j[1],g=Object(r.useCallback)((function(){if(v&&u){var e=v.iterate(u,.02);m(e)}}),[u,m,v]);Object(r.useEffect)((function(){var e=setInterval(g,20);return function(){return clearInterval(e)}}),[g]);var O=Object(r.useCallback)((function(){var e=t.energyTerms,n=[],r=[],a=!0,i=!1,s=void 0;try{for(var l,u=e[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){for(var p=l.value,j=Object(f.getAllVariables)(p.expression),v=[],g=[],O=0;O<t.dimensions;O++){var h=Object(f.getDerivativeForExpression)(j["q"+O.toString()],Object(f.getAllDerivatives)(p.expression,new d.Constant(1))),E=Object(f.getDerivativeForExpression)(j["p"+O.toString()],Object(f.getAllDerivatives)(p.expression,new d.Constant(1)));v.push(h),g.push(E)}n.push(v),r.push(g)}}catch(x){i=!0,s=x}finally{try{a||null==u.return||u.return()}finally{if(i)throw s}}var P={time:0,objects:[]};t.objects.forEach((function(e,t){P.objects.push({position:[Math.random()*o-o/2,Math.random()*o-o/2],momentum:[Math.random()*c-c/2,Math.random()*c-c/2]})})),m(P),y(new b(_,(function(e,a,o,c){for(var i={variableValues:{}},s=[],l=[],u=0;u<t.dimensions;u++)s.push(0),l.push(0);return t.energyTerms.forEach((function(u,m){if(function(e,t,n,r,a,o){var c=o.objects[a],i=!0,s=!1,l=void 0;try{for(var u,m=o.objectProperties[Symbol.iterator]();!(i=(u=m.next()).done);i=!0){var p=u.value;void 0!==c.propertyValues[p.name]?e.variableValues[p.name]=c.propertyValues[p.name]:e.variableValues[p.name]=p.defaultValue}}catch(x){s=!0,l=x}finally{try{i||null==m.return||m.return()}finally{if(s)throw l}}for(var b=0;b<r;b++)e.variableValues["p".concat(b)]=n[b],e.variableValues["q".concat(b)]=t[b]}(i,a,o,t.dimensions,e,t),u.affectedObjects[e])for(var p=0;p<t.dimensions;p++)s[p]+=n[m][p].evaluate(i),l[p]+=r[m][p].evaluate(i);c.objects.forEach((function(a,o){if(u.affectedObjectPairs[[e,o].toString()]){var p=c.objects[o];!function(e,t,n,r,a,o,c,i,s){var l=s.objects[i],u=!0,m=!1,p=void 0;try{for(var b,f=s.objectProperties[Symbol.iterator]();!(u=(b=f.next()).done);u=!0){var d=b.value;void 0!==l.propertyValues[d.name]?e.variableValues["".concat(d.name,"_b")]=l.propertyValues[d.name]:e.variableValues["".concat(d.name,"_b")]=d.defaultValue}}catch(x){m=!0,p=x}finally{try{u||null==f.return||f.return()}finally{if(m)throw p}}for(var j=0;j<o;j++)e.variableValues["p".concat(j,"_b")]=a[j],e.variableValues["q".concat(j,"_b")]=r[j]}(i,0,0,p.position,p.momentum,t.dimensions,0,o,t);for(var b=0;b<t.dimensions;b++)s[b]+=n[m][b].evaluate(i),l[b]+=r[m][b].evaluate(i)}}))})),{gradPosition:s,gradMomentum:l}})))}),[t,o,c]);return Object(r.useEffect)(O,[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"button",value:"Simulate",onClick:O}),a.a.createElement("div",null,a.a.createElement("label",null,"Initial position scale: "),a.a.createElement("input",{type:"text",onChange:function(e){var t=parseFloat(e.target.value);isNaN(t)||n({type:"setInitialScales",positionScale:t,momentumScale:c})},defaultValue:o.toString()})),a.a.createElement("div",null,a.a.createElement("label",null,"Initial momentum scale: "),a.a.createElement("input",{type:"text",onChange:function(e){var t=parseFloat(e.target.value);isNaN(t)||n({type:"setInitialScales",positionScale:o,momentumScale:t})},defaultValue:c.toString()})),u&&a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{integratorState:u})))};function A(){var e=Object(r.useContext)(E).dispatch;return a.a.createElement("div",null,a.a.createElement("input",{type:"button",value:"Gravity",onClick:function(t){return e({type:"loadPreset",preset:"gravity"})}}),a.a.createElement("input",{type:"button",value:"Coulomb",onClick:function(t){return e({type:"loadPreset",preset:"coulomb"})}}),a.a.createElement("input",{type:"button",value:"Attractor",onClick:function(t){return e({type:"loadPreset",preset:"attractor"})}}),a.a.createElement("input",{type:"button",value:"Nuclear",onClick:function(t){return e({type:"loadPreset",preset:"nuclear"})}}))}var N=function(){var e=Object(r.useReducer)(h,O()),t=Object(i.a)(e,2),n=t[0],o=t[1];return a.a.createElement(E.Provider,{value:{state:n,dispatch:o}},a.a.createElement(M.d,null,a.a.createElement(M.b,null,a.a.createElement(M.a,null,"Simulation"),a.a.createElement(M.a,null,"Objects"),a.a.createElement(M.a,null,"Energy Terms"),a.a.createElement(M.a,null,"Presets")),a.a.createElement(M.c,null,a.a.createElement(G,null)),a.a.createElement(M.c,null,a.a.createElement(F,null),a.a.createElement(V,null)),a.a.createElement(M.c,null,a.a.createElement(C,null)),a.a.createElement(M.c,null,a.a.createElement(A,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.f5a43398.chunk.js.map
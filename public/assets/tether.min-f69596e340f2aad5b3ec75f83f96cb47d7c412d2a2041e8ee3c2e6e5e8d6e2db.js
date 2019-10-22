!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t){var e=(getComputedStyle(t)||{}).position,o=[];if("fixed"===e)return[t];for(var i=t;i=i.parentNode;){var n=void 0;try{n=getComputedStyle(i)}catch(w){}if(null==n)return o.push(i),o;var r=n,s=r.overflow,a=r.overflowX,f=r.overflowY;/(auto|scroll)/.test(s+f+a)&&("absolute"!==e||0<=["relative","absolute","fixed"].indexOf(n.position))&&o.push(i)}return o.push(document.body),o}function x(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,i={},n=t.getBoundingClientRect();for(var r in n)i[r]=n[r];var s=p(e);return i.top-=s.top,i.left-=s.left,"undefined"==typeof i.width&&(i.width=document.body.scrollWidth-i.left-i.right),"undefined"==typeof i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-o.clientTop,i.left=i.left-o.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}function w(t){return t.offsetParent||document.documentElement}function C(){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");A(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;o===i&&(i=e.clientWidth),document.body.removeChild(e);var n=o-i;return{width:n,height:n}}function A(t){var o=arguments.length<=0||void 0===t?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(t){if(t)for(var e in t)({}).hasOwnProperty.call(t,e)&&(o[e]=t[e])}),o}function n(e,t){if("undefined"!=typeof e.classList)t.split(" ").forEach(function(t){t.trim()&&e.classList.remove(t)});else{var o=new RegExp("(^| )"+t.split(" ").join("|")+"( |$)","gi"),i=s(e).replace(o," ");a(e,i)}}function l(e,t){if("undefined"!=typeof e.classList)t.split(" ").forEach(function(t){t.trim()&&e.classList.add(t)});else{n(e,t);var o=s(e)+" "+t;a(e,o)}}function r(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=s(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function s(t){return t.className instanceof SVGAnimatedString?t.className.baseVal:t.className}function a(t,e){t.setAttribute("class",e)}function T(e,o,t){t.forEach(function(t){-1===o.indexOf(t)&&r(e,t)&&n(e,t)}),o.forEach(function(t){r(e,t)||l(e,t)})}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e,o){var i=arguments.length<=2||void 0===o?1:arguments[2];return e<=t+i&&t-i<=e}function t(){return"undefined"!=typeof performance&&"undefined"!=typeof performance.now?performance.now():+new Date}function O(){for(var i={top:0,left:0},t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return e.forEach(function(t){var e=t.top,o=t.left;"string"==typeof e&&(e=parseFloat(e,10)),"string"==typeof o&&(o=parseFloat(o,10)),i.top+=e,i.left+=o}),i}function E(t,e){return"string"==typeof t.left&&-1!==t.left.indexOf("%")&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&-1!==t.top.indexOf("%")&&(t.top=parseFloat(t.top,10)/100*e.height),t}function S(t,o){return"scrollParent"===o?o=t.scrollParents[0]:"window"===o&&(o=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),o===document&&(o=o.documentElement),"undefined"!=typeof o.nodeType&&(e=x(o),i=e,n=getComputedStyle(o),o=[i.left,i.top,e.width+i.left,e.height+i.top],q.forEach(function(t,e){"Top"===(t=t[0].toUpperCase()+t.substr(1))||"Left"===t?o[e]+=parseFloat(n["border"+t+"Width"]):o[e]-=parseFloat(n["border"+t+"Width"])})),o;var e,i,n}var e=function(){function i(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,o){return e&&i(t.prototype,e),o&&i(t,o),t}}(),W=void 0;void 0===W&&(W={modules:[]});var o,f=(o=0,function(){return++o}),d={},p=function(t){var e=t._tetherZeroElement;void 0===e&&((e=t.createElement("div")).setAttribute("data-tether-id",f()),A(e.style,{top:0,left:0,position:"absolute"}),t.body.appendChild(e),t._tetherZeroElement=e);var o=e.getAttribute("data-tether-id");if("undefined"==typeof d[o]){d[o]={};var i=e.getBoundingClientRect();for(var n in i)d[o][n]=i[n];M(function(){delete d[o]})}return d[o]},u=[],M=function(t){u.push(t)},P=function(){for(var t=void 0;t=u.pop();)t()},c=function(){function t(){i(this,t)}return e(t,[{key:"on",value:function(t,e,o,i){var n=!(arguments.length<=3||void 0===i)&&arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:n})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"==typeof this.bindings||"undefined"==typeof this.bindings[t])if(void 0===e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,i=Array(1<o?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,f=r.once,h=a;void 0===h&&(h=this),s.apply(h,i),f?this.bindings[t].splice(e,1):++e}}}}]),t}();W.Utils={getScrollParents:h,getBounds:x,getOffsetParent:w,extend:A,addClass:l,removeClass:n,hasClass:r,updateClasses:T,defer:M,flush:P,uniqueId:f,Evented:c,getScrollBarSize:C};var k=function(){function o(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(A){n=!0,r=A}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return o(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e=function(){function i(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,o){return e&&i(t.prototype,e),o&&i(t,o),t}}();if(void 0===W)throw new Error("You must include the utils.js file before tether.js");var g,v,b,y,h=(I=W.Utils).getScrollParents,w=(x=I.getBounds,I.getOffsetParent),l=(A=I.extend,I.addClass),n=I.removeClass,C=(T=I.updateClasses,M=I.defer,P=I.flush,I.getScrollBarSize),B=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","webkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),_=[],z=function(){_.forEach(function(t){t.position(!1)}),P()};b=v=g=null,y=function D(){return void 0!==v&&16<v?(v=Math.min(v-16,250),void(b=setTimeout(D,250))):void(void 0!==g&&t()-g<10||(void 0!==b&&(clearTimeout(b),b=null),g=t(),z(),v=t()-g))},"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,y)});var L={center:"center",left:"right",right:"left"},Y={middle:"middle",top:"bottom",bottom:"top"},H={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},F=function(t,e){var o=t.left,i=t.top;return"auto"===o&&(o=L[e.left]),"auto"===i&&(i=Y[e.top]),{left:o,top:i}},X=function(t){var e=t.left,o=t.top;return"undefined"!=typeof H[t.left]&&(e=H[t.left]),"undefined"!=typeof H[t.top]&&(o=H[t.top]),{left:e,top:o}},j=function(t){var e=t.split(" "),o=k(e,2);return{top:o[0],left:o[1]}},N=j,R=function(){function o(t){var e=this;i(this,o),this.position=this.position.bind(this),_.push(this),this.history=[],this.setOptions(t,!1),W.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(e)}),this.position()}return e(o,[{key:"getClass",value:function(t){var e=arguments.length<=0||void 0===t?"":arguments[0],o=this.options.classes;return void 0!==o&&o[e]?this.options.classes[e]:this.options.classPrefix?this.options.classPrefix+"-"+e:e}},{key:"setOptions",value:function(t,e){var o=this,i=arguments.length<=1||void 0===e||arguments[1],n={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=A(n,t);var r=this.options,s=r.element,a=r.target,f=r.targetModifier;if(this.element=s,this.target=a,this.targetModifier=f,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof o[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof o[t].jquery?o[t]=o[t][0]:"string"==typeof o[t]&&(o[t]=document.querySelector(o[t]))}),l(this.element,this.getClass("element")),!1!==this.options.addTargetClasses&&l(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=N(this.options.targetAttachment),this.attachment=N(this.options.attachment),this.offset=j(this.options.offset),this.targetOffset=j(this.options.targetOffset),"undefined"!=typeof this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=h(this.target),!1!==this.options.enabled&&this.enable(i)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return x(this.target);if("visible"===this.targetModifier)return this.target===document.body?{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}:((r={height:(t=x(this.target)).height,width:t.width,top:t.top,left:t.left}).height=Math.min(r.height,t.height-(pageYOffset-t.top)),r.height=Math.min(r.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),r.height=Math.min(innerHeight,r.height),r.height-=2,r.width=Math.min(r.width,t.width-(pageXOffset-t.left)),r.width=Math.min(r.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),r.width=Math.min(innerWidth,r.width),r.width-=2,r.top<pageYOffset&&(r.top=pageYOffset),r.left<pageXOffset&&(r.left=pageXOffset),r);if("scroll-handle"===this.targetModifier){var t=void 0,e=this.target;e===document.body?(e=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=x(e);var o=getComputedStyle(e),i=0;(e.scrollWidth>e.clientWidth||0<=[o.overflow,o.overflowX].indexOf("scroll")||this.target!==document.body)&&(i=15);var n=t.height-parseFloat(o.borderTopWidth)-parseFloat(o.borderBottomWidth)-i,r={width:15,height:.975*n*(n/e.scrollHeight),left:t.left+t.width-parseFloat(o.borderLeftWidth)-15},s=0;n<408&&this.target===document.body&&(s=-11e-5*Math.pow(n,2)-.00727*n+22.58),this.target!==document.body&&(r.height=Math.max(r.height,24));var a=this.target.scrollTop/(e.scrollHeight-n);return r.top=a*(n-r.height-s)+t.top+parseFloat(o.borderTopWidth),this.target===document.body&&(r.height=Math.max(r.height,24)),r}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(t){var e=this,o=arguments.length<=0||void 0===t||arguments[0];!1!==this.options.addTargetClasses&&l(this.target,this.getClass("enabled")),l(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(t){t!==document&&t.addEventListener("scroll",e.position)}),o&&this.position()}},{key:"disable",value:function(){var e=this;n(this.target,this.getClass("enabled")),n(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParents&&this.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.position)})}},{key:"destroy",value:function(){var o=this;this.disable(),_.forEach(function(t,e){return t===o?void _.splice(e,1):void 0})}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var i=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var n=this._addAttachClasses;t.top&&n.push(this.getClass("element-attached")+"-"+t.top),t.left&&n.push(this.getClass("element-attached")+"-"+t.left),e.top&&n.push(this.getClass("target-attached")+"-"+e.top),e.left&&n.push(this.getClass("target-attached")+"-"+e.left);var r=[];i.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),M(function(){"undefined"!=typeof o._addAttachClasses&&(T(o.element,o._addAttachClasses,r),!1!==o.options.addTargetClasses&&T(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(t){var a=this,e=arguments.length<=0||void 0===t||arguments[0];if(this.enabled){this.clearCache();var o=F(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var i=this.cache("element-bounds",function(){return x(a.element)}),n=i.width,r=i.height;if(0===n&&0===r&&"undefined"!=typeof this.lastSize){var s=this.lastSize;n=s.width,r=s.height}else this.lastSize={width:n,height:r};var f=this.cache("target-bounds",function(){return a.getTargetBounds()}),h=f,l=E(X(this.attachment),{width:n,height:r}),d=E(X(o),h),p=E(this.offset,{width:n,height:r}),u=E(this.targetOffset,h);l=O(l,p),d=O(d,u);for(var c=f.left+d.left-l.left,g=f.top+d.top-l.top,m=0;m<W.modules.length;++m){var v=W.modules[m].position.call(this,{left:c,top:g,targetAttachment:o,targetPos:f,elementPos:i,offset:l,targetOffset:d,manualOffset:p,manualTargetOffset:u,scrollbarSize:y,attachment:this.attachment});if(!1===v)return!1;void 0!==v&&"object"==typeof v&&(g=v.top,c=v.left)}var b={page:{top:g,left:c},viewport:{top:g-pageYOffset,bottom:pageYOffset-g-r+innerHeight,left:c-pageXOffset,right:pageXOffset-c-n+innerWidth}},y=void 0;return document.body.scrollWidth>window.innerWidth&&(y=this.cache("scrollbar-size",C),b.viewport.bottom-=y.height),document.body.scrollHeight>window.innerHeight&&(y=this.cache("scrollbar-size",C),b.viewport.right-=y.width),(-1===["","static"].indexOf(document.body.style.position)||-1===["","static"].indexOf(document.body.parentElement.style.position))&&(b.page.bottom=document.body.scrollHeight-g-r,b.page.right=document.body.scrollWidth-c-n),"undefined"!=typeof this.options.optimizations&&!1!==this.options.optimizations.moveElement&&"undefined"==typeof this.targetModifier&&function(){var t=a.cache("target-offsetparent",function(){return w(a.target)}),e=a.cache("target-offsetparent-bounds",function(){return x(t)}),o=getComputedStyle(t),i=e,n={};if(["Top","Left","Bottom","Right"].forEach(function(t){n[t.toLowerCase()]=parseFloat(o["border"+t+"Width"])}),e.right=document.body.scrollWidth-e.left-i.width+n.right,e.bottom=document.body.scrollHeight-e.top-i.height+n.bottom,b.page.top>=e.top+n.top&&b.page.bottom>=e.bottom&&b.page.left>=e.left+n.left&&b.page.right>=e.right){var r=t.scrollTop,s=t.scrollLeft;b.offset={top:b.page.top-e.top+r-n.top,left:b.page.left-e.left+s-n.left}}}(),this.move(b),this.history.unshift(b),3<this.history.length&&this.history.pop(),e&&P(),!0}}},{key:"move",value:function(e){var n=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var t in e)for(var i in o[t]={},e[t]){for(var r=!1,s=0;s<this.history.length;++s){var a=this.history[s];if("undefined"!=typeof a[t]&&!m(a[t][i],e[t][i])){r=!0;break}}r||(o[t][i]=!0)}var f={top:"",left:"",right:"",bottom:""},h=function(t,e){if(!1!==("undefined"!=typeof n.options.optimizations?n.options.optimizations.gpu:null)){var o=void 0,i=void 0;t.top?(f.top=0,o=e.top):(f.bottom=0,o=-e.bottom),t.left?(f.left=0,i=e.left):(f.right=0,i=-e.right),f[B]="translateX("+Math.round(i)+"px) translateY("+Math.round(o)+"px)","msTransform"!==B&&(f[B]+=" translateZ(0)")}else t.top?f.top=e.top+"px":f.bottom=e.bottom+"px",t.left?f.left=e.left+"px":f.right=e.right+"px"},l=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(f.position="absolute",h(o.page,e.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(f.position="fixed",h(o.viewport,e.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?function(){f.position="absolute";var t=n.cache("target-offsetparent",function(){return w(n.target)});w(n.element)!==t&&M(function(){n.element.parentNode.removeChild(n.element),t.appendChild(n.element)}),h(o.offset,e.offset),l=!0}():(f.position="absolute",h({top:!0,left:!0},e.page)),!l){for(var d=!0,p=this.element.parentNode;p&&"BODY"!==p.tagName;){if("static"!==getComputedStyle(p).position){d=!1;break}p=p.parentNode}d||(this.element.parentNode.removeChild(this.element),document.body.appendChild(this.element))}var u={},c=!1;for(var i in f){var g=f[i];this.element.style[i]!==g&&(c=!0,u[i]=g)}c&&M(function(){A(n.element.style,u)})}}}]),o}();R.modules=[],W.position=z;var U=A(R,W),A=(k=function(){function o(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(A){n=!0,r=A}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return o(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),x=(I=W.Utils).getBounds,I.extend),q=(T=I.updateClasses,M=I.defer,["left","top","right","bottom"]);W.modules.push({position:function(t){var u=this,c=t.top,g=t.left,m=t.targetAttachment;if(!this.options.constraints)return!0;var e=this.cache("element-bounds",function(){return x(u.element)}),v=e.height,b=e.width;if(0===b&&0===v&&"undefined"!=typeof this.lastSize){var o=this.lastSize;b=o.width,v=o.height}var i=this.cache("target-bounds",function(){return u.getTargetBounds()}),y=i.height,w=i.width,n=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&n.push(e),o&&n.push(o)}),n.forEach(function(e){["left","top","right","bottom"].forEach(function(t){n.push(e+"-"+t)})});var C=[],O=A({},m),E=A({},this.attachment);return this.options.constraints.forEach(function(t){var e=t.to,o=t.attachment,i=t.pin;void 0===o&&(o="");var n=void 0,r=void 0;if(0<=o.indexOf(" ")){var s=o.split(" "),a=k(s,2);r=a[0],n=a[1]}else n=r=o;var f=S(u,e);("target"===r||"both"===r)&&(c<f[1]&&"top"===O.top&&(c+=y,O.top="bottom"),c+v>f[3]&&"bottom"===O.top&&(c-=y,O.top="top")),"together"===r&&("top"===O.top&&("bottom"===E.top&&c<f[1]?(c+=y,O.top="bottom",c+=v,E.top="top"):"top"===E.top&&c+v>f[3]&&c-(v-y)>=f[1]&&(c-=v-y,O.top="bottom",E.top="bottom")),"bottom"===O.top&&("top"===E.top&&c+v>f[3]?(c-=y,O.top="top",c-=v,E.top="bottom"):"bottom"===E.top&&c<f[1]&&c+(2*v-y)<=f[3]&&(c+=v-y,O.top="top",E.top="top")),"middle"===O.top&&(c+v>f[3]&&"top"===E.top?(c-=v,E.top="bottom"):c<f[1]&&"bottom"===E.top&&(c+=v,E.top="top"))),("target"===n||"both"===n)&&(g<f[0]&&"left"===O.left&&(g+=w,O.left="right"),g+b>f[2]&&"right"===O.left&&(g-=w,O.left="left")),"together"===n&&(g<f[0]&&"left"===O.left?"right"===E.left?(g+=w,O.left="right",g+=b,E.left="left"):"left"===E.left&&(g+=w,O.left="right",g-=b,E.left="right"):g+b>f[2]&&"right"===O.left?"left"===E.left?(g-=w,O.left="left",g-=b,E.left="right"):"right"===E.left&&(g-=w,O.left="left",g+=b,E.left="left"):"center"===O.left&&(g+b>f[2]&&"left"===E.left?(g-=b,E.left="right"):g<f[0]&&"right"===E.left&&(g+=b,E.left="left"))),("element"===r||"both"===r)&&(c<f[1]&&"bottom"===E.top&&(c+=v,E.top="top"),c+v>f[3]&&"top"===E.top&&(c-=v,E.top="bottom")),("element"===n||"both"===n)&&(g<f[0]&&("right"===E.left?(g+=b,E.left="left"):"center"===E.left&&(g+=b/2,E.left="left")),g+b>f[2]&&("left"===E.left?(g-=b,E.left="right"):"center"===E.left&&(g-=b/2,E.left="right"))),"string"==typeof i?i=i.split(",").map(function(t){return t.trim()}):!0===i&&(i=["top","left","right","bottom"]),i=i||[];var h,l,d=[],p=[];c<f[1]&&(0<=i.indexOf("top")?(c=f[1],d.push("top")):p.push("top")),c+v>f[3]&&(0<=i.indexOf("bottom")?(c=f[3]-v,d.push("bottom")):p.push("bottom")),g<f[0]&&(0<=i.indexOf("left")?(g=f[0],d.push("left")):p.push("left")),g+b>f[2]&&(0<=i.indexOf("right")?(g=f[2]-b,d.push("right")):p.push("right")),d.length&&(l=void 0,l="undefined"!=typeof u.options.pinnedClass?u.options.pinnedClass:u.getClass("pinned"),C.push(l),d.forEach(function(t){C.push(l+"-"+t)})),p.length&&(h=void 0,h="undefined"!=typeof u.options.outOfBoundsClass?u.options.outOfBoundsClass:u.getClass("out-of-bounds"),C.push(h),p.forEach(function(t){C.push(h+"-"+t)})),(0<=d.indexOf("left")||0<=d.indexOf("right"))&&(E.left=O.left=!1),(0<=d.indexOf("top")||0<=d.indexOf("bottom"))&&(E.top=O.top=!1),(O.top!==m.top||O.left!==m.left||E.top!==u.attachment.top||E.left!==u.attachment.left)&&u.updateAttachClasses(E,O)}),M(function(){!1!==u.options.addTargetClasses&&T(u.target,C,n),T(u.element,C,n)}),{top:c,left:g}}});var I,x=(I=W.Utils).getBounds,T=I.updateClasses;M=I.defer;W.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=this.cache("element-bounds",function(){return x(e.element)}),r=n.height,s=n.width,a=this.getTargetBounds(),f=o+r,h=i+s,l=[];o<=a.bottom&&f>=a.top&&["left","right"].forEach(function(t){var e=a[t];(e===i||e===h)&&l.push(t)}),i<=a.right&&h>=a.left&&["top","bottom"].forEach(function(t){var e=a[t];(e===o||e===f)&&l.push(t)});var d=[],p=[],u=["left","top","right","bottom"];return d.push(this.getClass("abutted")),u.forEach(function(t){d.push(e.getClass("abutted")+"-"+t)}),l.length&&p.push(this.getClass("abutted")),l.forEach(function(t){p.push(e.getClass("abutted")+"-"+t)}),M(function(){!1!==e.options.addTargetClasses&&T(e.target,p,d),T(e.element,p,d)}),!0}});k=function(){function o(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(A){n=!0,r=A}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return o(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return W.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:o}));var n=void 0,r=void 0;if("string"==typeof i){(i=i.split(" "))[1]=i[1]||i[0];var s=k(i,2);n=s[0],r=s[1],n=parseFloat(n,10),r=parseFloat(r,10)}else n=i.top,r=i.left;return{top:e+=n,left:o+=r}}}}),U});
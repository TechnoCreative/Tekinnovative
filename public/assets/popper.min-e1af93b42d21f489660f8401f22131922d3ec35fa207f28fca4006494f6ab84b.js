!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict";function s(e){return e&&"[object Function]"==={}.toString.call(e)}function v(e,t){if(1!==e.nodeType)return[];var n=window.getComputedStyle(e,null);return t?n[t]:n}function u(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function c(e){if(!e||-1!==["HTML","BODY","#document"].indexOf(e.nodeName))return window.document.body;var t=v(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/(auto|scroll)/.test(n+o+r)?e:c(u(e))}function b(e){var t=e&&e.offsetParent,n=t&&t.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(t.nodeName)&&"static"===v(t,"position")?b(t):t:window.document.documentElement}function a(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||b(e.firstElementChild)===e)}function p(e){return null===e.parentNode?e:p(e.parentNode)}function d(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return window.document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,o=n?t:e,i=document.createRange();i.setStart(r,0),i.setEnd(o,0);var f=i.commonAncestorContainer;if(e!==f&&t!==f||r.contains(o))return a(f)?f:b(f);var s=p(e);return s.host?d(s.host,t):d(e,p(t).host)}function h(e,t){var n="top"===(1<arguments.length&&void 0!==t?arguments[1]:"top")?"scrollTop":"scrollLeft",r=e.nodeName;if("BODY"!==r&&"HTML"!==r)return e[n];var o=window.document.documentElement;return(window.document.scrollingElement||o)[n]}function m(e,t,n){var r=2<arguments.length&&void 0!==n&&arguments[2],o=h(t,"top"),i=h(t,"left"),f=r?-1:1;return e.top+=o*f,e.bottom+=o*f,e.left+=i*f,e.right+=i*f,e}function g(e,t){var n="x"===t?"Left":"Top",r="Left"==n?"Right":"Bottom";return+e["border"+n+"Width"].split("px")[0]+ +e["border"+r+"Width"].split("px")[0]}function r(e,t,n,r){return _(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],re()?n["offset"+e]+r["margin"+("Height"===e?"Top":"Left")]+r["margin"+("Height"===e?"Bottom":"Right")]:0)}function w(){var e=window.document.body,t=window.document.documentElement,n=re()&&window.getComputedStyle(t);return{height:r("Height",e,t,n),width:r("Width",e,t,n)}}function y(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function O(e){var t={};if(re())try{t=e.getBoundingClientRect();var n=h(e,"top"),r=h(e,"left");t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}catch(e){}else t=e.getBoundingClientRect();var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?w():{},f=i.width||e.clientWidth||o.right-o.left,s=i.height||e.clientHeight||o.bottom-o.top,a=e.offsetWidth-f,p=e.offsetHeight-s;if(a||p){var l=v(e);a-=g(l,"x"),p-=g(l,"y"),o.width-=a,o.height-=p}return y(o)}function E(e,t){var n=re(),r="HTML"===t.nodeName,o=O(e),i=O(t),f=c(e),s=v(t),a=+s.borderTopWidth.split("px")[0],p=+s.borderLeftWidth.split("px")[0],l=y({top:o.top-i.top-a,left:o.left-i.left-p,width:o.width,height:o.height});if(l.marginTop=0,l.marginLeft=0,!n&&r){var u=+s.marginTop.split("px")[0],d=+s.marginLeft.split("px")[0];l.top-=a-u,l.bottom-=a-u,l.left-=p-d,l.right-=p-d,l.marginTop=u,l.marginLeft=d}return(n?t.contains(f):t===f&&"BODY"!==f.nodeName)&&(l=m(l,t)),l}function x(e){var t=window.document.documentElement,n=E(e,t),r=_(t.clientWidth,window.innerWidth||0),o=_(t.clientHeight,window.innerHeight||0),i=h(t),f=h(t,"left");return y({top:i-n.top+n.marginTop,left:f-n.left+n.marginLeft,width:r,height:o})}function L(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===v(e,"position")||L(u(e)))}function T(e,t,n,r){var o={top:0,left:0},i=d(e,t);if("viewport"===r)o=x(i);else{var f;"scrollParent"===r?"BODY"===(f=c(u(e))).nodeName&&(f=window.document.documentElement):f="window"===r?window.document.documentElement:r;var s=E(f,i);if("HTML"!==f.nodeName||L(i))o=s;else{var a=w(),p=a.height,l=a.width;o.top+=s.top-s.marginTop,o.bottom=p+s.top,o.left+=s.left-s.marginLeft,o.right=l+s.left}}return o.left+=n,o.top+=n,o.right-=n,o.bottom-=n,o}function C(e){return e.width*e.height}function l(e,t,r,n,o,i){var f=5<arguments.length&&void 0!==i?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=T(r,n,f,o),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},p=Object.keys(a).map(function(e){return se({key:e},a[e],{area:C(a[e])})}).sort(function(e,t){return t.area-e.area}),l=p.filter(function(e){var t=e.width,n=e.height;return t>=r.clientWidth&&n>=r.clientHeight}),u=0<l.length?l[0].key:p[0].key,d=e.split("-")[1];return u+(d?"-"+d:"")}function N(e,t,n){return E(n,d(t,n))}function k(e){var t=window.getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),r=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function S(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function W(e,t,n){n=n.split("-")[0];var r=k(e),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),f=i?"top":"left",s=i?"left":"top",a=i?"height":"width",p=i?"width":"height";return o[f]=t[f]+t[a]/2-r[a]/2,o[s]=n===s?t[s]-r[p]:t[S(s)],o}function A(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function o(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var r=A(e,function(e){return e[t]===n});return e.indexOf(r)}function B(e,n,t){return(void 0===t?e:e.slice(0,o(e,"name",t))).forEach(function(e){e["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t=e["function"]||e.fn;e.enabled&&s(t)&&(n.offsets.popper=y(n.offsets.popper),n.offsets.reference=y(n.offsets.reference),n=t(n,e))}),n}function e(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=N(this.state,this.popper,this.reference),e.placement=l(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=W(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=B(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function t(e,n){return e.some(function(e){var t=e.name;return e.enabled&&t===n})}function D(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length-1;r++){var o=t[r],i=o?""+o+n:e;if("undefined"!=typeof window.document.body.style[i])return i}return null}function n(){return this.state.isDestroyed=!0,t(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[D("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function f(e,t,n,r){var o="BODY"===e.nodeName,i=o?window:e;i.addEventListener(t,n,{passive:!0}),o||f(c(i.parentNode),t,n,r),r.push(i)}function i(e,t,n,r){n.updateBound=r,window.addEventListener("resize",n.updateBound,{passive:!0});var o=c(e);return f(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function H(){this.state.eventsEnabled||(this.state=i(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function P(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function j(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function I(n,r){Object.keys(r).forEach(function(e){var t="";-1!==["width","height","top","right","bottom","left"].indexOf(e)&&j(r[e])&&(t="px"),n.style[e]=r[e]+t})}function F(t,n){Object.keys(n).forEach(function(e){!1===n[e]?t.removeAttribute(e):t.setAttribute(e,n[e])})}function R(e,t,n){var r=A(e,function(e){return e.name===t}),o=!!r&&e.some(function(e){return e.name===n&&e.enabled&&e.order<r.order});if(!o){var i="`"+t+"`";console.warn("`"+n+"` modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}function U(e){return"end"===e?"start":"start"===e?"end":e}function Y(e,t){var n=1<arguments.length&&void 0!==t&&arguments[1],r=pe.indexOf(e),o=pe.slice(r+1).concat(pe.slice(0,r));return n?o.reverse():o}function q(e,t,n,r){var o,i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),f=+i[1],s=i[2];if(!f)return e;if(0!==s.indexOf("%"))return"vh"!==s&&"vw"!==s?f:("vh"===s?_(document.documentElement.clientHeight,window.innerHeight||0):_(document.documentElement.clientWidth,window.innerWidth||0))/100*f;switch(s){case"%p":o=n;break;case"%":case"%r":default:o=r}return y(o)[t]/100*f}function K(e,o,i,t){var f=[0,0],s=-1!==["right","left"].indexOf(t),n=e.split(/(\+|\-)/).map(function(e){return e.trim()}),r=n.indexOf(A(n,function(e){return-1!==e.search(/,|\s/)}));n[r]&&-1===n[r].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var a=/\s*,\s*|\s+/,p=-1===r?[n]:[n.slice(0,r).concat([n[r].split(a)[0]]),[n[r].split(a)[1]].concat(n.slice(r+1))];return(p=p.map(function(e,t){var n=(1===t?!s:s)?"height":"width",r=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,r=!0,e):r?(e[e.length-1]+=t,r=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,o,i)})})).forEach(function(n,r){n.forEach(function(e,t){j(e)&&(f[r]+=e*("-"===n[t-1]?-1:1))})}),f}function z(e,t){var n,r=t.offset,o=e.placement,i=e.offsets,f=i.popper,s=i.reference,a=o.split("-")[0];return n=j(+r)?[+r,0]:K(r,f,s,a),"left"===a?(f.top+=n[0],f.left-=n[1]):"right"===a?(f.top+=n[0],f.left+=n[1]):"top"===a?(f.left+=n[0],f.top-=n[1]):"bottom"===a&&(f.left+=n[0],f.top+=n[1]),e.popper=f,e}for(var G=Math.min,V=Math.floor,_=Math.max,X=["native code","[object MutationObserverConstructor]"],J=function(t){return X.some(function(e){return-1<(t||"").toString().indexOf(e)})},Q="undefined"!=typeof window,Z=["Edge","Trident","Firefox"],$=0,ee=0;ee<Z.length;ee+=1)if(Q&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var te,ne=Q&&J(window.MutationObserver)?function(e){var t=!1,n=0,r=document.createElement("span");return new MutationObserver(function(){e(),t=!1}).observe(r,{attributes:!0}),function(){t||(t=!0,r.setAttribute("x-index",n),++n)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},re=function(){return null==te&&(te=-1!==navigator.appVersion.indexOf("MSIE 10")),te},oe=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ie=function(){function r(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),fe=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},se=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},ae=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],pe=ae.slice(3),le={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},ue=function(){function f(e,t,n){var r=this,o=2<arguments.length&&void 0!==n?arguments[2]:{};oe(this,f),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=ne(this.update.bind(this)),this.options=se({},f.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e.jquery?e[0]:e,this.popper=t.jquery?t[0]:t,this.options.modifiers={},Object.keys(se({},f.Defaults.modifiers,o.modifiers)).forEach(function(e){r.options.modifiers[e]=se({},f.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&s(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)}),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return ie(f,[{key:"update",value:function(){return e.call(this)}},{key:"destroy",value:function(){return n.call(this)}},{key:"enableEventListeners",value:function(){return H.call(this)}},{key:"disableEventListeners",value:function(){return P.call(this)}}]),f}();return ue.Utils=("undefined"==typeof window?global:window).PopperUtils,ue.placements=ae,ue.Defaults={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var o=e.offsets,i=o.reference,f=o.popper,s=-1!==["bottom","top"].indexOf(n),a=s?"left":"top",p=s?"width":"height",l={start:fe({},a,i[a]),end:fe({},a,i[a]+i[p]-f[p])};e.offsets.popper=se({},f,l[r])}return e}},offset:{order:200,enabled:!0,fn:z,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,r){var t=r.boundariesElement||b(e.instance.popper);e.instance.reference===t&&(t=b(t));var o=T(e.instance.popper,e.instance.reference,r.padding,t);r.boundaries=o;var n=r.priority,i=e.offsets.popper,f={primary:function(e){var t=i[e];return i[e]<o[e]&&!r.escapeWithReference&&(t=_(i[e],o[e])),fe({},e,t)},secondary:function(e){var t="right"===e?"left":"top",n=i[t];return i[e]>o[e]&&!r.escapeWithReference&&(n=G(i[t],o[e]-("right"===e?i.width:i.height))),fe({},t,n)}};return n.forEach(function(e){var t=-1===["left","top"].indexOf(e)?"secondary":"primary";i=se({},i,f[t](e))}),e.offsets.popper=i,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,o=e.placement.split("-")[0],i=V,f=-1!==["top","bottom"].indexOf(o),s=f?"right":"bottom",a=f?"left":"top",p=f?"width":"height";return n[s]<i(r[a])&&(e.offsets.popper[a]=i(r[a])-n[p]),n[a]>i(r[s])&&(e.offsets.popper[a]=i(r[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!R(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],o=e.offsets,i=o.popper,f=o.reference,s=-1!==["left","right"].indexOf(r),a=s?"height":"width",p=s?"Top":"Left",l=p.toLowerCase(),u=s?"left":"top",d=s?"bottom":"right",c=k(n)[a];f[d]-c<i[l]&&(e.offsets.popper[l]-=i[l]-(f[d]-c)),f[l]+c>i[d]&&(e.offsets.popper[l]+=f[l]+c-i[d]);var h=f[l]+f[a]/2-c/2,m=v(e.instance.popper,"margin"+p).replace("px",""),g=h-y(e.offsets.popper)[l]-m;return g=_(G(i[a]-c,g),0),e.arrowElement=n,e.offsets.arrow={},e.offsets.arrow[l]=Math.round(g),e.offsets.arrow[u]="",e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(c,h){if(t(c.instance.modifiers,"inner"))return c;if(c.flipped&&c.placement===c.originalPlacement)return c;var m=T(c.instance.popper,c.instance.reference,h.padding,h.boundariesElement),g=c.placement.split("-")[0],v=S(g),b=c.placement.split("-")[1]||"",w=[];switch(h.behavior){case le.FLIP:w=[g,v];break;case le.CLOCKWISE:w=Y(g);break;case le.COUNTERCLOCKWISE:w=Y(g,!0);break;default:w=h.behavior}return w.forEach(function(e,t){if(g!==e||w.length===t+1)return c;g=c.placement.split("-")[0],v=S(g);var n=c.offsets.popper,r=c.offsets.reference,o=V,i="left"===g&&o(n.right)>o(r.left)||"right"===g&&o(n.left)<o(r.right)||"top"===g&&o(n.bottom)>o(r.top)||"bottom"===g&&o(n.top)<o(r.bottom),f=o(n.left)<o(m.left),s=o(n.right)>o(m.right),a=o(n.top)<o(m.top),p=o(n.bottom)>o(m.bottom),l="left"===g&&f||"right"===g&&s||"top"===g&&a||"bottom"===g&&p,u=-1!==["top","bottom"].indexOf(g),d=!!h.flipVariations&&(u&&"start"===b&&f||u&&"end"===b&&s||!u&&"start"===b&&a||!u&&"end"===b&&p);(i||l||d)&&(c.flipped=!0,(i||l)&&(g=w[t+1]),d&&(b=U(b)),c.placement=g+(b?"-"+b:""),c.offsets.popper=se({},c.offsets.popper,W(c.instance.popper,c.offsets.reference,c.placement)),c=B(c.instance.modifiers,c,"flip"))}),c},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,o=r.popper,i=r.reference,f=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[f?"left":"top"]=i[n]-(s?o[f?"width":"height"]:0),e.placement=S(t),e.offsets.popper=y(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!R(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=A(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,o=e.offsets.popper,i=A(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var f,s,a=void 0===i?t.gpuAcceleration:i,p=O(b(e.instance.popper)),l={position:o.position},u={left:V(o.left),top:V(o.top),bottom:V(o.bottom),right:V(o.right)},d="bottom"===n?"top":"bottom",c="right"===r?"left":"right",h=D("transform");if(s="bottom"==d?-p.height+u.bottom:u.top,f="right"==c?-p.width+u.right:u.left,a&&h)l[h]="translate3d("+f+"px, "+s+"px, 0)",l[d]=0,l[c]=0,l.willChange="transform";else{var m="bottom"==d?-1:1,g="right"==c?-1:1;l[d]=s*m,l[c]=f*g,l.willChange=d+", "+c}var v={"x-placement":e.placement};return e.attributes=se({},v,e.attributes),e.styles=se({},l,e.styles),e.arrowStyles=se({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return I(e.instance.popper,e.styles),F(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&I(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,o){var i=N(o,t,e),f=l(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",f),I(t,{position:"absolute"}),n},gpuAcceleration:void 0}}},ue});
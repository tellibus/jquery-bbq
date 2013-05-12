/* Zepto BBQ based on jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010 - http://benalman.com/projects/jquery-bbq-plugin/ - Forked tellibus.com for Zepto support */
(function(e,t){"$:nomunge";function N(e){return typeof e==="string"}function C(e){var t=r.call(arguments,1);return function(){return e.apply(this,t.concat(r.call(arguments)))}}function k(e){return e.replace(/^[^#]*#?(.*)$/,"$1")}function L(e){return e.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function A(r,o,a,f,l){var c,h,p,d,g;if(f!==n){p=a.match(r?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);g=p[3]||"";if(l===2&&N(f)){h=f.replace(r?S:E,"")}else{d=u(p[2]);f=N(f)?u[r?m:v](f):f;h=l===2?f:l===1?e.extend({},f,d):e.extend({},d,f);h=s(h);if(r){h=h.replace(x,i)}}c=p[1]+(r?"#":h||!p[1]?"?":"")+h+g}else{c=o(a!==n?a:t[y][b])}return c}function O(e,t,r){if(t===n||typeof t==="boolean"){r=t;t=s[e?m:v]()}else{t=N(t)?t.replace(e?S:E,""):t}return u(t,r)}function M(t,r,i,o){if(!N(i)&&typeof i!=="object"){o=i;i=r;r=n}return this.each(function(){var n=e(this),u=r||h()[(this.nodeName||"").toLowerCase()]||"",a=u&&n.attr(u)||"";n.attr(u,s[t](a,i,o))})}var n,r=Array.prototype.slice,i=decodeURIComponent,s=e.param,o,u,a,f=e.bbq=e.bbq||{},l,c,h,p=e.event.special,d="hashchange",v="querystring",m="fragment",g="elemUrlAttr",y="location",b="href",w="src",E=/^.*\?|#.*$/g,S=/^.*\#/,x,T={};s[v]=C(A,0,L);s[m]=o=C(A,1,k);o.noEscape=function(t){t=t||"";var n=e.map(t.split(""),encodeURIComponent);x=new RegExp(n.join("|"),"g")};o.noEscape(",/");e.deparam=u=function(t,r){var s={},o={"true":!0,"false":!1,"null":null};e.each(t.replace(/\+/g," ").split("&"),function(t,u){var a=u.split("="),f=i(a[0]),l,c=s,h=0,p=f.split("]["),d=p.length-1;if(/\[/.test(p[0])&&/\]$/.test(p[d])){p[d]=p[d].replace(/\]$/,"");p=p.shift().split("[").concat(p);d=p.length-1}else{d=0}if(a.length===2){l=i(a[1]);if(r){l=l&&!isNaN(l)?+l:l==="undefined"?n:o[l]!==n?o[l]:l}if(d){for(;h<=d;h++){f=p[h]===""?c.length:p[h];c=c[f]=h<d?c[f]||(p[h+1]&&isNaN(p[h+1])?{}:[]):l}}else{if(e.isArray(s[f])){s[f].push(l)}else if(s[f]!==n){s[f]=[s[f],l]}else{s[f]=l}}}else if(f){s[f]=r?n:""}});return s};u[v]=C(O,0);u[m]=a=C(O,1);e[g]||(e[g]=function(t){return e.extend(T,t)})({a:b,base:b,iframe:w,img:w,input:w,form:"action",link:b,script:w});h=e[g];e.fn[v]=C(M,v);e.fn[m]=C(M,m);f.pushState=l=function(e,r){if(N(e)&&/^#/.test(e)&&r===n){r=2}var i=e!==n,s=o(t[y][b],i?e:{},i?r:2);t[y][b]=s+(/#/.test(s)?"":"#")};f.getState=c=function(e,t){return e===n||typeof e==="boolean"?a(e):a(t)[e]};f.removeState=function(t){var r={};if(t!==n){r=c();e.each(e.isArray(t)?t:arguments,function(e,t){delete r[t]})}l(r,2)};p[d]=e.extend(p,d,{add:function(t){function i(e){var t=e[m]=o();e.getState=function(e,r){return e===n||typeof e==="boolean"?u(t,e):u(t,r)[e]};r.apply(this,arguments)}var r;if(e.isFunction(t)){r=t;return i}else{r=t.handler;t.handler=i}}})})(Zepto,this);(function(e,t,n){"$:nomunge";function h(e){e=e||t[s][u];return e.replace(/^[^#]*#?(.*)$/,"$1")}var r,i=e.event.special,s="location",o="hashchange",u="href",a=e.browser,f=document.documentMode,l=a.msie&&(f===n||f<8),c="on"+o in t&&!l;e[o+"Delay"]=100;i[o]=e.extend(i,o,{setup:function(){if(c){return false}e(r.start)},teardown:function(){if(c){return false}e(r.stop)}});r=function(){function c(){a=f=function(e){return e};if(l){i=e('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;f=function(){return h(i.document[s][u])};a=function(e,t){if(e!==t){var n=i.document;n.open().close();n[s].hash="#"+e}};a(h())}}var n={},r,i,a,f;n.start=function(){if(r){return}var n=h();a||c();(function i(){var l=h(),c=f(n);if(l!==n){a(n=l,c);e(t).trigger(o)}else if(c!==n){t[s][u]=t[s][u].replace(/#.*/,"")+"#"+c}r=setTimeout(i,e[o+"Delay"])})()};n.stop=function(){if(!i){r&&clearTimeout(r);r=0}};return n}()})(Zepto,this)
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t,r){"use strict";t.a={isWorkerRuntime:function(){return!("undefined"==typeof self||!self.postMessage)},postMessageToMaster:function(e,t){self.postMessage(e,t)},subscribeToMasterMessages:function(e){const t=t=>{e(t.data)};return self.addEventListener("message",t),()=>{self.removeEventListener("message",t)}}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return a}));const n={deserialize:e=>Object.assign(Error(e.message),{name:e.name,stack:e.stack}),serialize:e=>({__error_marker:"$$error",message:e.message,name:e.name,stack:e.stack})};let o={deserialize(e){return(t=e)&&"object"==typeof t&&"__error_marker"in t&&"$$error"===t.__error_marker?n.deserialize(e):e;var t},serialize:e=>e instanceof Error?n.serialize(e):e};function i(e){return o.deserialize(e)}function a(e){return o.serialize(e)}},function(e,t,r){"use strict";var n,o;r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),function(e){e.run="run"}(n||(n={})),function(e){e.error="error",e.init="init",e.result="result",e.running="running",e.uncaughtError="uncaughtError"}(o||(o={}))},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));Symbol("thread.errors"),Symbol("thread.events"),Symbol("thread.terminate");const n=Symbol("thread.transferable");Symbol("thread.worker");function o(e){return e&&"object"==typeof e&&e[n]}},function(e,t,r){var n;!function(){"use strict";var o=.5*(Math.sqrt(3)-1),i=(3-Math.sqrt(3))/6,a=1/6,s=(Math.sqrt(5)-1)/4,u=(5-Math.sqrt(5))/20;function c(e){var t;t="function"==typeof e?e:e?function(){var e=0,t=0,r=0,n=1,o=l();e=o(" "),t=o(" "),r=o(" ");for(var i=0;i<arguments.length;i++)(e-=o(arguments[i]))<0&&(e+=1),(t-=o(arguments[i]))<0&&(t+=1),(r-=o(arguments[i]))<0&&(r+=1);return o=null,function(){var o=2091639*e+2.3283064365386963e-10*n;return e=t,t=r,r=o-(n=0|o)}}(e):Math.random,this.p=f(t),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var r=0;r<512;r++)this.perm[r]=this.p[255&r],this.permMod12[r]=this.perm[r]%12}function f(e){var t,r=new Uint8Array(256);for(t=0;t<256;t++)r[t]=t;for(t=0;t<255;t++){var n=t+~~(e()*(256-t)),o=r[t];r[t]=r[n],r[n]=o}return r}function l(){var e=4022871197;return function(t){t=t.toString();for(var r=0;r<t.length;r++){var n=.02519603282416938*(e+=t.charCodeAt(r));n-=e=n>>>0,e=(n*=e)>>>0,e+=4294967296*(n-=e)}return 2.3283064365386963e-10*(e>>>0)}}c.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(e,t){var r,n,a=this.permMod12,s=this.perm,u=this.grad3,c=0,f=0,l=0,d=(e+t)*o,p=Math.floor(e+d),h=Math.floor(t+d),b=(p+h)*i,m=e-(p-b),v=t-(h-b);m>v?(r=1,n=0):(r=0,n=1);var y=m-r+i,g=v-n+i,M=m-1+2*i,w=v-1+2*i,T=255&p,j=255&h,x=.5-m*m-v*v;if(x>=0){var O=3*a[T+s[j]];c=(x*=x)*x*(u[O]*m+u[O+1]*v)}var E=.5-y*y-g*g;if(E>=0){var k=3*a[T+r+s[j+n]];f=(E*=E)*E*(u[k]*y+u[k+1]*g)}var _=.5-M*M-w*w;if(_>=0){var P=3*a[T+1+s[j+1]];l=(_*=_)*_*(u[P]*M+u[P+1]*w)}return 70*(c+f+l)},noise3D:function(e,t,r){var n,o,i,s,u,c,f,l,d,p,h=this.permMod12,b=this.perm,m=this.grad3,v=(e+t+r)*(1/3),y=Math.floor(e+v),g=Math.floor(t+v),M=Math.floor(r+v),w=(y+g+M)*a,T=e-(y-w),j=t-(g-w),x=r-(M-w);T>=j?j>=x?(u=1,c=0,f=0,l=1,d=1,p=0):T>=x?(u=1,c=0,f=0,l=1,d=0,p=1):(u=0,c=0,f=1,l=1,d=0,p=1):j<x?(u=0,c=0,f=1,l=0,d=1,p=1):T<x?(u=0,c=1,f=0,l=0,d=1,p=1):(u=0,c=1,f=0,l=1,d=1,p=0);var O=T-u+a,E=j-c+a,k=x-f+a,_=T-l+2*a,P=j-d+2*a,S=x-p+2*a,L=T-1+.5,A=j-1+.5,z=x-1+.5,C=255&y,R=255&g,q=255&M,D=.6-T*T-j*j-x*x;if(D<0)n=0;else{var W=3*h[C+b[R+b[q]]];n=(D*=D)*D*(m[W]*T+m[W+1]*j+m[W+2]*x)}var $=.6-O*O-E*E-k*k;if($<0)o=0;else{var F=3*h[C+u+b[R+c+b[q+f]]];o=($*=$)*$*(m[F]*O+m[F+1]*E+m[F+2]*k)}var U=.6-_*_-P*P-S*S;if(U<0)i=0;else{var N=3*h[C+l+b[R+d+b[q+p]]];i=(U*=U)*U*(m[N]*_+m[N+1]*P+m[N+2]*S)}var B=.6-L*L-A*A-z*z;if(B<0)s=0;else{var I=3*h[C+1+b[R+1+b[q+1]]];s=(B*=B)*B*(m[I]*L+m[I+1]*A+m[I+2]*z)}return 32*(n+o+i+s)},noise4D:function(e,t,r,n){var o,i,a,c,f,l,d,p,h,b,m,v,y,g,M,w,T,j=this.perm,x=this.grad4,O=(e+t+r+n)*s,E=Math.floor(e+O),k=Math.floor(t+O),_=Math.floor(r+O),P=Math.floor(n+O),S=(E+k+_+P)*u,L=e-(E-S),A=t-(k-S),z=r-(_-S),C=n-(P-S),R=0,q=0,D=0,W=0;L>A?R++:q++,L>z?R++:D++,L>C?R++:W++,A>z?q++:D++,A>C?q++:W++,z>C?D++:W++;var $=L-(l=R>=3?1:0)+u,F=A-(d=q>=3?1:0)+u,U=z-(p=D>=3?1:0)+u,N=C-(h=W>=3?1:0)+u,B=L-(b=R>=2?1:0)+2*u,I=A-(m=q>=2?1:0)+2*u,G=z-(v=D>=2?1:0)+2*u,H=C-(y=W>=2?1:0)+2*u,J=L-(g=R>=1?1:0)+3*u,K=A-(M=q>=1?1:0)+3*u,Q=z-(w=D>=1?1:0)+3*u,V=C-(T=W>=1?1:0)+3*u,X=L-1+4*u,Y=A-1+4*u,Z=z-1+4*u,ee=C-1+4*u,te=255&E,re=255&k,ne=255&_,oe=255&P,ie=.6-L*L-A*A-z*z-C*C;if(ie<0)o=0;else{var ae=j[te+j[re+j[ne+j[oe]]]]%32*4;o=(ie*=ie)*ie*(x[ae]*L+x[ae+1]*A+x[ae+2]*z+x[ae+3]*C)}var se=.6-$*$-F*F-U*U-N*N;if(se<0)i=0;else{var ue=j[te+l+j[re+d+j[ne+p+j[oe+h]]]]%32*4;i=(se*=se)*se*(x[ue]*$+x[ue+1]*F+x[ue+2]*U+x[ue+3]*N)}var ce=.6-B*B-I*I-G*G-H*H;if(ce<0)a=0;else{var fe=j[te+b+j[re+m+j[ne+v+j[oe+y]]]]%32*4;a=(ce*=ce)*ce*(x[fe]*B+x[fe+1]*I+x[fe+2]*G+x[fe+3]*H)}var le=.6-J*J-K*K-Q*Q-V*V;if(le<0)c=0;else{var de=j[te+g+j[re+M+j[ne+w+j[oe+T]]]]%32*4;c=(le*=le)*le*(x[de]*J+x[de+1]*K+x[de+2]*Q+x[de+3]*V)}var pe=.6-X*X-Y*Y-Z*Z-ee*ee;if(pe<0)f=0;else{var he=j[te+1+j[re+1+j[ne+1+j[oe+1]]]]%32*4;f=(pe*=pe)*pe*(x[he]*X+x[he+1]*Y+x[he+2]*Z+x[he+3]*ee)}return 27*(o+i+a+c+f)}},c._buildPermutationTable=f,void 0===(n=function(){return c}.call(t,r,t,e))||(e.exports=n),t.SimplexNoise=c,e.exports=c}()},function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return y}));var n=r(6),o=r.n(n),i=r(1),a=r(3),s=r(2),u=r(0),c=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))};let f=!1;const l=e=>e&&e.type===s.a.run,d=e=>o()(e)||function(e){return e&&"object"==typeof e&&"function"==typeof e.subscribe}(e);function p(e){return Object(a.a)(e)?{payload:e.send,transferables:e.transferables}:{payload:e,transferables:void 0}}function h(e,t){const{payload:r,transferables:n}=p(t),o={type:s.b.error,uid:e,error:Object(i.b)(r)};u.a.postMessageToMaster(o,n)}function b(e,t,r){const{payload:n,transferables:o}=p(r),i={type:s.b.result,uid:e,complete:!!t||void 0,payload:n};u.a.postMessageToMaster(i,o)}function m(e){try{const t={type:s.b.uncaughtError,error:Object(i.b)(e)};u.a.postMessageToMaster(t)}catch(t){console.error("Not reporting uncaught error back to master thread as it occured while reporting an uncaught error already.\nLatest error:",t,"\nOriginal error:",e)}}function v(e,t,r){return c(this,void 0,void 0,(function*(){let n;try{n=t(...r)}catch(t){return h(e,t)}const o=d(n)?"observable":"promise";if(function(e,t){const r={type:s.b.running,uid:e,resultType:t};u.a.postMessageToMaster(r)}(e,o),d(n))n.subscribe(t=>b(e,!1,Object(i.b)(t)),t=>h(e,Object(i.b)(t)),()=>b(e,!0));else try{const t=yield n;b(e,!0,Object(i.b)(t))}catch(t){h(e,Object(i.b)(t))}}))}function y(e){if(!u.a.isWorkerRuntime())throw Error("expose() called in the master thread.");if(f)throw Error("expose() called more than once. This is not possible. Pass an object to expose() if you want to expose multiple functions.");if(f=!0,"function"==typeof e)u.a.subscribeToMasterMessages(t=>{l(t)&&!t.method&&v(t.uid,e,t.args.map(i.a))}),function(){const e={type:s.b.init,exposed:{type:"function"}};u.a.postMessageToMaster(e)}();else{if("object"!=typeof e||!e)throw Error("Invalid argument passed to expose(). Expected a function or an object, got: "+e);u.a.subscribeToMasterMessages(t=>{l(t)&&t.method&&v(t.uid,e[t.method],t.args.map(i.a))}),function(e){const t={type:s.b.init,exposed:{type:"module",methods:e}};u.a.postMessageToMaster(t)}(Object.keys(e).filter(t=>"function"==typeof e[t]))}}"undefined"!=typeof self&&"function"==typeof self.addEventListener&&u.a.isWorkerRuntime()&&(self.addEventListener("error",e=>{setTimeout(()=>m(e.error||e),250)}),self.addEventListener("unhandledrejection",e=>{const t=e.reason;t&&"string"==typeof t.message&&setTimeout(()=>m(t),250)})),void 0!==e&&"function"==typeof e.on&&u.a.isWorkerRuntime()&&(e.on("uncaughtException",e=>{setTimeout(()=>m(e),250)}),e.on("unhandledRejection",e=>{e&&"string"==typeof e.message&&setTimeout(()=>m(e),250)}))}).call(this,r(8))},function(e,t,r){"use strict";const n=r(9).default;e.exports=e=>Boolean(e&&e[n]&&e===e[n]())},function(e,t,r){"use strict";function n(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}r.d(t,"a",(function(){return n}))},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u,c=[],f=!1,l=-1;function d(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&p())}function p(){if(!f){var e=s(d);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function b(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||f||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){"use strict";r.r(t),function(e,n){var o,i=r(7);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var a=Object(i.a)(o);t.default=a}.call(this,r(10),r(11)(e))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,r){"use strict";r.r(t);var n=r(4);var o=class{constructor(e=null){this.simplex=new n(e||Math.random())}seed(e=null){this.simplex=new n(e||Math.random())}generate(e,t,r,n,o,i=1){const a=(e,t)=>Array(t).fill(null).map(e);return a((r,s)=>a((r,n)=>this.simplex.noise2D((e+s)/o,(t+n)/o)*i,n),r)}};var i={terrainColors:[15063490,11909729,8162636,9806192,13555382,16775930],waterColor:11981027},a=r(5);Object(a.a)((function(e,t,r){const n=new o(t),a=t=>{const r=1024/Math.pow(4,t),o=1/Math.pow(4,t);return n.generate(0,0,e.width,e.height,r,o)};let s=null;for(let e=0;e<r;e++){let t=a(e);s?t.forEach((e,t)=>e.forEach((e,r)=>{s[t][r]+=e})):s=t}return s.forEach((t,r)=>t.forEach((t,n)=>{const o=t<.1?i.waterColor:i.terrainColors[Math.min(Math.floor(t*i.terrainColors.length),i.terrainColors.length-1)];((t,r,n)=>{const o=4*(r*e.width+t),i=(16711680&n)>>16,a=(65280&n)>>8,s=255&n;e.data[o]=i,e.data[o+1]=a,e.data[o+2]=s,e.data[o+3]=255})(r,n,o)})),e}))}]);
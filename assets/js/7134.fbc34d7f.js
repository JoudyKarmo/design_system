/*! For license information please see 7134.fbc34d7f.js.LICENSE.txt */
"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7134],{3905:function(e,t,n){n.d(t,{Zo:function(){return $},kt:function(){return d}});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),i=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},$=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,$=a(e,["components","mdxType","originalType","parentName"]),f=i(n),d=s,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||r;return n?o.createElement(m,c(c({ref:t},$),{},{components:n})):o.createElement(m,c({ref:t},$))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,c=new Array(r);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,c[1]=a;for(var i=2;i<r;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65:function(e,t,n){n.d(t,{mv:function(){return Le},AA:function(){return nt},yM:function(){return Ct},h:function(){return et},GH:function(){return Yt}});const o=!1,s=!0,r=!1,c=!0,a=!0,l=!0,i=!0,$=!0,u=!0,f=!0,d=!0,m=!0,h=!0,p=!0,b=!0,g=!1,y=!0,v=!0,w=!0,x=!0,N=!0,k=!0,S=!0,R=!0,O=!0,C=!0,T=!0,z=!0,E=!0,L=!0,j=!0,P=!0,A=!0,M=!0,I=!0,H=!0,D=!0,B=!0,_=!0,U=!0,W=!0,q=!0,V=!0,F=!0,X=!1,J=!1,Z=!1,G=!1,Y=!1,K=!1,Q=!1,ee=!1,te=!1,ne=!0,oe=!1,se=!0,re=!1,ce=!0,ae=!0,le=!0,ie=!1,$e=!0,ue=!0,fe=!0,de=!1,me=!1,he=!1,pe=!0,be="app";let ge,ye,ve,we,xe=0,Ne=!1,ke=!1,Se=!1,Re=!1,Oe=null,Ce=0,Te=!1;const ze="undefined"!=typeof window?window:{},Ee=(ie&&ze.CSS,ze.document||{head:{}}),Le=ze.HTMLElement||class{},je={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o),ce:(e,t)=>new CustomEvent(e,t)},Pe=!re||!O||(()=>(Ee.head.attachShadow+"").indexOf("[native")>-1)(),Ae=(()=>{let e=!1;try{Ee.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(t){}return e})(),Me=!!$e&&(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),Ie=(e,t,n,o)=>{m&&n&&(g&&(n=o?n.filter((([e])=>32&e)):n.filter((([e])=>!(32&e)))),n.map((([n,o,s])=>{const r=y?De(e,n):e,c=He(t,s),a=Be(n);je.ael(r,o,c,a),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>je.rel(r,o,c,a)))})))},He=(e,t)=>n=>{try{ee?256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n]):e.$hostElement$[t](n)}catch(o){nn(o)}},De=(e,t)=>p&&4&t?Ee:h&&8&t?ze:b&&16&t?Ee.body:g&&32&t?e.parentElement:e,Be=e=>Ae?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),_e="s-id",Ue="sty-id",We="c-id",qe="http://www.w3.org/1999/xlink",Ve=(e,t="")=>{if(te&&performance.mark){const n=`st:${e}:${t}:${xe++}`;return performance.mark(n),()=>performance.measure(`[Stencil] ${e}() <${t}>`,n)}return()=>{}},Fe=new WeakMap,Xe=(e,t,n)=>{let o=ln.get(e);Me&&n?(o=o||new CSSStyleSheet,o.replace(t)):o=t,ln.set(e,o)},Je=(e,t,n,o)=>{let s=Ge(t,n);const r=ln.get(s);if(!pe)return s;if(e=11===e.nodeType?e:Ee,r)if("string"==typeof r){e=e.head||e;let n,c=Fe.get(e);if(c||Fe.set(e,c=new Set),!c.has(s)){if(K&&e.host&&(n=e.querySelector(`[sty-id="${s}"]`)))n.innerHTML=r;else{if(ie&&je.$cssShim$){n=je.$cssShim$.createHostStyle(o,s,r,!!(10&t.$flags$));const e=n["s-sc"];e&&(s=e,c=null)}else n=Ee.createElement("style"),n.innerHTML=r;(Y||X)&&n.setAttribute(Ue,s),e.insertBefore(n,e.querySelector("link"))}c&&c.add(s)}}else $e&&!e.adoptedStyleSheets.includes(r)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return s},Ze=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,o=t.$flags$,s=Ve("attachStyles",t.$tagName$),r=Je(O&&Pe&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$,n);(O||R)&&T&&10&o&&(n["s-sc"]=r,n.classList.add(r+"-h"),R&&2&o&&n.classList.add(r+"-s")),s()},Ge=(e,t)=>"sc-"+(x&&t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),Ye=e=>$n.map((t=>t(e))).find((e=>!!e)),Ke={},Qe=e=>"object"===(e=typeof e)||"function"===e,et=(e,t,...n)=>{let o=null,s=null,r=null,c=!1,a=!1;const l=[],i=t=>{for(let n=0;n<t.length;n++)o=t[n],Array.isArray(o)?i(o):null!=o&&"boolean"!=typeof o&&((c="function"!=typeof e&&!Qe(o))?o=String(o):Z&&"function"!=typeof e&&void 0===o.$flags$&&sn("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects."),c&&a?l[l.length-1].$text$+=o:l.push(c?tt(null,o):o),a=c)};if(i(n),t&&(Z&&"input"===e&&at(t),H&&t.key&&(s=t.key),ne&&t.name&&(r=t.name),M)){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if(Z&&l.some(ot)&&sn("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function."),I&&"function"==typeof e)return e(null===t?{}:t,l,st);const $=tt(e,null);return $.$attrs$=t,l.length>0&&($.$children$=l),H&&($.$key$=s),ne&&($.$name$=r),$},tt=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return P&&(n.$attrs$=null),H&&(n.$key$=null),ne&&(n.$name$=null),n},nt={},ot=e=>e&&e.$tag$===nt,st={forEach:(e,t)=>e.map(rt).forEach(t),map:(e,t)=>e.map(rt).map(t).map(ct)},rt=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),ct=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),et(e.vtag,t,...e.vchildren||[])}const t=tt(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},at=e=>{const t=Object.keys(e),n=t.indexOf("value");if(-1===n)return;const o=t.indexOf("type"),s=t.indexOf("min"),r=t.indexOf("max"),c=t.indexOf("step");(n<o||n<s||n<r||n<c)&&rn('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},lt=(e,t,n,o,s,r)=>{if(n!==o){let a=tn(e,t),l=t.toLowerCase();if(M&&"class"===t){const t=e.classList,s=$t(n),r=$t(o);t.remove(...s.filter((e=>e&&!r.includes(e)))),t.add(...r.filter((e=>e&&!s.includes(e))))}else if(W&&"style"===t){if(j)for(const t in n)o&&null!=o[t]||(!Y&&t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)n&&o[t]===n[t]||(!Y&&t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if(H&&"key"===t);else if(B&&"ref"===t)o&&o(e);else if(!D||(ee?a:e.__lookupSetter__(t))||"o"!==t[0]||"n"!==t[1]){if(_){const i=Qe(o);if((a||i&&null!==o)&&!s)try{if(e.tagName.includes("-"))e[t]=o;else{const s=null==o?"":o;"list"===t?a=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(c){}let $=!1;A&&l!==(l=l.replace(/^xlink\:?/,""))&&(t=l,$=!0),null==o||!1===o?!1===o&&""!==e.getAttribute(t)||(A&&$?e.removeAttributeNS(qe,t):e.removeAttribute(t)):(!a||4&r||s)&&!i&&(o=!0===o?"":o,A&&$?e.setAttributeNS(qe,t,o):e.setAttribute(t,o))}}else t="-"===t[2]?t.slice(3):tn(ze,l)?l.slice(2):l[2]+t.slice(3),n&&je.rel(e,t,n,!1),o&&je.ael(e,t,o,!1)}},it=/\s/,$t=e=>e?e.split(it):[],ut=(e,t,n,o)=>{const s=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,r=e&&e.$attrs$||Ke,c=t.$attrs$||Ke;if(j)for(o in r)o in c||lt(s,o,r[o],void 0,n,t.$flags$);for(o in c)lt(s,o,r[o],c[o],n,t.$flags$)},ft=(e,t,n,o)=>{const s=t.$children$[n];let r,c,a,l=0;if(ne&&!Ne&&(Se=!0,"slot"===s.$tag$&&(ge&&o.classList.add(ge+"-s"),s.$flags$|=s.$children$?2:1)),Z&&s.$elm$&&sn(`The JSX ${null!==s.$text$?`"${s.$text$}" text`:`"${s.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`),q&&null!==s.$text$)r=s.$elm$=Ee.createTextNode(s.$text$);else if(ne&&1&s.$flags$)r=s.$elm$=J||Y?Rt(s):Ee.createTextNode("");else{if(L&&!Re&&(Re="svg"===s.$tag$),r=s.$elm$=L?Ee.createElementNS(Re?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",ne&&2&s.$flags$?"slot-fb":s.$tag$):Ee.createElement(ne&&2&s.$flags$?"slot-fb":s.$tag$),L&&Re&&"foreignObject"===s.$tag$&&(Re=!1),P&&ut(null,s,Re),(O||R)&&null!=ge&&r["s-si"]!==ge&&r.classList.add(r["s-si"]=ge),s.$children$)for(l=0;l<s.$children$.length;++l)c=ft(e,s,l,r),c&&r.appendChild(c);L&&("svg"===s.$tag$?Re=!1:"foreignObject"===r.tagName&&(Re=!0))}return ne&&(r["s-hn"]=ve,3&s.$flags$&&(r["s-sr"]=!0,r["s-cr"]=ye,r["s-sn"]=s.$name$||"",a=e&&e.$children$&&e.$children$[n],a&&a.$tag$===s.$tag$&&e.$elm$&&dt(e.$elm$,!1))),r},dt=(e,t)=>{je.$flags$|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==ve&&e["s-ol"]&&(gt(e).insertBefore(e,bt(e)),e["s-ol"].remove(),e["s-ol"]=void 0,Se=!0),t&&dt(e,t)}je.$flags$&=-2},mt=(e,t,n,o,s,r)=>{let c,a=ne&&e["s-cr"]&&e["s-cr"].parentNode||e;for(O&&a.shadowRoot&&a.tagName===ve&&(a=a.shadowRoot);s<=r;++s)o[s]&&(c=ft(null,n,s,e),c&&(o[s].$elm$=c,a.insertBefore(c,ne?bt(t):t)))},ht=(e,t,n,o,s)=>{for(;t<=n;++t)(o=e[t])&&(s=o.$elm$,kt(o),ne&&(ke=!0,s["s-ol"]?s["s-ol"].remove():dt(s,!0)),s.remove())},pt=(e,t)=>e.$tag$===t.$tag$&&(ne&&"slot"===e.$tag$?e.$name$===t.$name$:!H||e.$key$===t.$key$),bt=e=>e&&e["s-ol"]||e,gt=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,yt=(e,t)=>{const n=t.$elm$=e.$elm$,o=e.$children$,s=t.$children$,r=t.$tag$,c=t.$text$;let a;q&&null!==c?q&&ne&&(a=n["s-cr"])?a.parentNode.textContent=c:q&&e.$text$!==c&&(n.data=c):(L&&(Re="svg"===r||"foreignObject"!==r&&Re),(P||S)&&(C&&"slot"===r||ut(e,t,Re)),j&&null!==o&&null!==s?((e,t,n,o)=>{let s,r,c=0,a=0,l=0,i=0,$=t.length-1,u=t[0],f=t[$],d=o.length-1,m=o[0],h=o[d];for(;c<=$&&a<=d;)if(null==u)u=t[++c];else if(null==f)f=t[--$];else if(null==m)m=o[++a];else if(null==h)h=o[--d];else if(pt(u,m))yt(u,m),u=t[++c],m=o[++a];else if(pt(f,h))yt(f,h),f=t[--$],h=o[--d];else if(pt(u,h))!ne||"slot"!==u.$tag$&&"slot"!==h.$tag$||dt(u.$elm$.parentNode,!1),yt(u,h),e.insertBefore(u.$elm$,f.$elm$.nextSibling),u=t[++c],h=o[--d];else if(pt(f,m))!ne||"slot"!==u.$tag$&&"slot"!==h.$tag$||dt(f.$elm$.parentNode,!1),yt(f,m),e.insertBefore(f.$elm$,u.$elm$),f=t[--$],m=o[++a];else{if(l=-1,H)for(i=c;i<=$;++i)if(t[i]&&null!==t[i].$key$&&t[i].$key$===m.$key$){l=i;break}H&&l>=0?(r=t[l],r.$tag$!==m.$tag$?s=ft(t&&t[a],n,l,e):(yt(r,m),t[l]=void 0,s=r.$elm$),m=o[++a]):(s=ft(t&&t[a],n,a,e),m=o[++a]),s&&(ne?gt(u.$elm$).insertBefore(s,bt(u.$elm$)):u.$elm$.parentNode.insertBefore(s,u.$elm$))}c>$?mt(e,null==o[d+1]?null:o[d+1].$elm$,n,o,a,d):j&&a>d&&ht(t,c,$)})(n,o,t,s):null!==s?(j&&q&&null!==e.$text$&&(n.textContent=""),mt(n,null,t,s,0,s.length-1)):j&&null!==o&&ht(o,0,o.length-1),L&&Re&&"svg"===r&&(Re=!1))},vt=e=>{const t=e.childNodes;let n,o,s,r,c,a;for(o=0,s=t.length;o<s;o++)if(n=t[o],1===n.nodeType){if(n["s-sr"])for(c=n["s-sn"],n.hidden=!1,r=0;r<s;r++)if(a=t[r].nodeType,t[r]["s-hn"]!==n["s-hn"]||""!==c){if(1===a&&c===t[r].getAttribute("slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t[r].textContent.trim()){n.hidden=!0;break}vt(n)}},wt=[],xt=e=>{let t,n,o,s,r,c,a=0;const l=e.childNodes,i=l.length;for(;a<i;a++){if(t=l[a],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(o=n.parentNode.childNodes,s=t["s-sn"],c=o.length-1;c>=0;c--)n=o[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(Nt(n,s)?(r=wt.find((e=>e.$nodeToRelocate$===n)),ke=!0,n["s-sn"]=n["s-sn"]||s,r?r.$slotRefNode$=t:wt.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&wt.map((e=>{Nt(e.$nodeToRelocate$,n["s-sn"])&&(r=wt.find((e=>e.$nodeToRelocate$===n)),r&&!e.$slotRefNode$&&(e.$slotRefNode$=r.$slotRefNode$))}))):wt.some((e=>e.$nodeToRelocate$===n))||wt.push({$nodeToRelocate$:n}));1===t.nodeType&&xt(t)}},Nt=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,kt=e=>{B&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(kt))},St=(e,t)=>{const n=e.$hostElement$,o=e.$cmpMeta$,s=e.$vnode$||tt(null,null),r=ot(t)?t:et(null,null,t);if(ve=n.tagName,Z&&Array.isArray(t)&&t.some(ot))throw new Error(`The <Host> must be the single root component.\nLooks like the render() function of "${ve.toLowerCase()}" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  `);if(S&&o.$attrsToReflect$&&(r.$attrs$=r.$attrs$||{},o.$attrsToReflect$.map((([e,t])=>r.$attrs$[t]=n[e]))),r.$tag$=null,r.$flags$|=4,e.$vnode$=r,r.$elm$=s.$elm$=O&&n.shadowRoot||n,(R||O)&&(ge=n["s-sc"]),ne&&(ye=n["s-cr"],Ne=Pe&&0!=(1&o.$flags$),ke=!1),yt(s,r),ne){if(je.$flags$|=1,Se){let e,t,n,o,s,c;xt(r.$elm$);let a=0;for(;a<wt.length;a++)e=wt[a],t=e.$nodeToRelocate$,t["s-ol"]||(n=J||Y?Ot(t):Ee.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(a=0;a<wt.length;a++)if(e=wt[a],t=e.$nodeToRelocate$,e.$slotRefNode$){for(o=e.$slotRefNode$.parentNode,s=e.$slotRefNode$.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(c=n["s-nr"],c&&c["s-sn"]===t["s-sn"]&&o===c.parentNode&&(c=c.nextSibling,!c||!c["s-nr"])){s=c;break}(!s&&o!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),o.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}ke&&vt(r.$elm$),je.$flags$&=-2,wt.length=0}},Rt=e=>Ee.createComment(`<slot${e.$name$?' name="'+e.$name$+'"':""}> (host=${ve.toLowerCase()})`),Ot=e=>Ee.createComment("org-location for "+(e.localName?`<${e.localName}> (host=${e["s-hn"]})`:`[${e.textContent}]`)),Ct=(e,t,n)=>{const o=(e=>ee?Qt(e).$hostElement$:e)(e);return{emit:e=>(Z&&!o.isConnected&&rn(`The "${t}" event was emitted, but the dispatcher node is no longer connected to the dom.`),Tt(o,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},Tt=(e,t,n)=>{const o=je.ce(t,n);return e.dispatchEvent(o),o},zt=(e,t)=>{me&&t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.$onRenderResolve$=t)))},Et=(e,t)=>{if(F&&j&&(e.$flags$|=16),me&&4&e.$flags$)return void(e.$flags$|=512);zt(e,e.$ancestorComponent$);const n=()=>Lt(e,t);return F?yn(n):n()},Lt=(e,t)=>{const n=e.$hostElement$,o=Ve("scheduleUpdate",e.$cmpMeta$.$tagName$),s=ee?e.$lazyInstance$:n;let r;return t?(ee&&m&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((([e,t])=>It(s,e,t))),e.$queuedListeners$=null)),Dt(n,"componentWillLoad"),l&&(r=It(s,"componentWillLoad"))):(Dt(n,"componentWillUpdate"),i&&(r=It(s,"componentWillUpdate"))),Dt(n,"componentWillRender"),$&&(r=Ht(r,(()=>It(s,"componentWillRender")))),o(),Ht(r,(()=>jt(e,s,t)))},jt=async(e,t,n)=>{const o=e.$hostElement$,s=Ve("update",e.$cmpMeta$.$tagName$),r=o["s-rc"];E&&n&&Ze(e);const c=Ve("render",e.$cmpMeta$.$tagName$);if(Z&&(e.$flags$|=1024),Y?await Pt(e,t,o):Pt(e,t,o),ie&&je.$cssShim$&&je.$cssShim$.updateHost(o),Z&&(e.$renderCount$++,e.$flags$&=-1025),Y)try{_t(o),n&&(1&e.$cmpMeta$.$flags$?o["s-en"]="":2&e.$cmpMeta$.$flags$&&(o["s-en"]="c"))}catch(a){nn(a,o)}if(me&&r&&(r.map((e=>e())),o["s-rc"]=void 0),c(),s(),me){const t=o["s-p"],n=()=>At(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}else At(e)},Pt=(e,t,n)=>{const s=!!o,r=!!ee,c=!!F,a=!!j;try{if(Oe=t,t=(s||t.render)&&t.render(),a&&c&&(e.$flags$&=-17),(a||r)&&(e.$flags$|=2),d||S)if(U||S){if(Y)return Promise.resolve(t).then((t=>St(e,t)));St(e,t)}else n.textContent=t}catch(l){nn(l,e.$hostElement$)}return Oe=null,null},At=e=>{const t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,o=Ve("postUpdate",t),r=ee?e.$lazyInstance$:n,l=e.$ancestorComponent$;a&&(Z&&(e.$flags$|=1024),It(r,"componentDidRender"),Z&&(e.$flags$&=-1025)),Dt(n,"componentDidRender"),64&e.$flags$?(c&&(Z&&(e.$flags$|=1024),It(r,"componentDidUpdate"),Z&&(e.$flags$&=-1025)),Dt(n,"componentDidUpdate"),o()):(e.$flags$|=64,me&&T&&Bt(n),s&&(Z&&(e.$flags$|=2048),It(r,"componentDidLoad"),Z&&(e.$flags$&=-2049)),Dt(n,"componentDidLoad"),o(),me&&(e.$onReadyResolve$(n),l||Mt(t))),X&&n["s-hmr-load"]&&n["s-hmr-load"](),w&&ee&&e.$onInstanceResolve$(n),me&&(e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&gn((()=>Et(e,!1))),e.$flags$&=-517)},Mt=e=>{T&&Bt(Ee.documentElement),he&&(je.$flags$|=2),gn((()=>Tt(ze,"appload",{detail:{namespace:be}}))),te&&performance.measure&&performance.measure(`[Stencil] app initial load (by ${e})`,"st:app:start")},It=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(o){nn(o)}},Ht=(e,t)=>e&&e.then?e.then(t):t(),Dt=(e,t)=>{Q&&Tt(e,"stencil_"+t,{bubbles:!0,composed:!0,detail:{namespace:be}})},Bt=e=>se?e.classList.add("hydrated"):oe?e.setAttribute("hydrated",""):void 0,_t=e=>{const t=e.children;if(null!=t)for(let n=0,o=t.length;n<o;n++){const e=t[n];"function"==typeof e.connectedCallback&&e.connectedCallback(),_t(e)}},Ut=(e,t,n,o,s,r,c)=>{let a,l,i,$;if(1===r.nodeType){for(a=r.getAttribute(We),a&&(l=a.split("."),l[0]!==c&&"0"!==l[0]||(i={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:r.tagName.toLowerCase(),$elm$:r,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null},t.push(i),r.removeAttribute(We),e.$children$||(e.$children$=[]),e.$children$[i.$index$]=i,e=i,o&&"0"===i.$depth$&&(o[i.$index$]=i.$elm$))),$=r.childNodes.length-1;$>=0;$--)Ut(e,t,n,o,s,r.childNodes[$],c);if(r.shadowRoot)for($=r.shadowRoot.childNodes.length-1;$>=0;$--)Ut(e,t,n,o,s,r.shadowRoot.childNodes[$],c)}else if(8===r.nodeType)l=r.nodeValue.split("."),l[1]!==c&&"0"!==l[1]||(a=l[0],i={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:r,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},"t"===a?(i.$elm$=r.nextSibling,i.$elm$&&3===i.$elm$.nodeType&&(i.$text$=i.$elm$.textContent,t.push(i),r.remove(),e.$children$||(e.$children$=[]),e.$children$[i.$index$]=i,o&&"0"===i.$depth$&&(o[i.$index$]=i.$elm$))):i.$hostId$===c&&("s"===a?(i.$tag$="slot",l[5]?r["s-sn"]=i.$name$=l[5]:r["s-sn"]="",r["s-sr"]=!0,O&&o&&(i.$elm$=Ee.createElement(i.$tag$),i.$name$&&i.$elm$.setAttribute("name",i.$name$),r.parentNode.insertBefore(i.$elm$,r),r.remove(),"0"===i.$depth$&&(o[i.$index$]=i.$elm$)),n.push(i),e.$children$||(e.$children$=[]),e.$children$[i.$index$]=i):"r"===a&&(O&&o?r.remove():ne&&(s["s-cr"]=r,r["s-cn"]=!0))));else if(e&&"style"===e.$tag$){const t=tt(null,r.textContent);t.$elm$=r,t.$index$="0",e.$children$=[t]}},Wt=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)Wt(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)Wt(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},qt=(e,t,n,o)=>{const s=Qt(e),r=ee?s.$hostElement$:e,c=s.$instanceValues$.get(t),a=s.$flags$,l=ee?s.$lazyInstance$:r;var i,$;i=n,$=o.$members$[t][0],n=null==i||Qe(i)?i:ce&&4&$?"false"!==i&&(""===i||!!i):ae&&2&$?parseFloat(i):le&&1&$?String(i):i;const u=Number.isNaN(c)&&Number.isNaN(n);if((!ee||!(8&a)||void 0===c)&&(n!==c&&!u)&&(s.$instanceValues$.set(t,n),Z&&(1024&s.$flags$?rn(`The state/prop "${t}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,"\nElement",r,"\nNew value",n,"\nOld value",c):2048&s.$flags$&&rn(`The state/prop "${t}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,"\nElement",r,"\nNew value",n,"\nOld value",c)),!ee||l)){if(V&&o.$watchers$&&128&a){const e=o.$watchers$[t];e&&e.map((e=>{try{l[e](n,c,t)}catch(o){nn(o,r)}}))}if(j&&2==(18&a)){if(ue&&l.componentShouldUpdate&&!1===l.componentShouldUpdate(n,c,t))return;Et(s,!1)}}},Vt=(e,t,n)=>{if(v&&t.$members$){V&&e.watchers&&(t.$watchers$=e.watchers);const o=Object.entries(t.$members$),s=e.prototype;if(o.map((([e,[o]])=>{(k||z)&&(31&o||(!ee||2&n)&&32&o)?Object.defineProperty(s,e,{get(){return t=e,Qt(this).$instanceValues$.get(t);var t},set(s){if(Z){const s=Qt(this);0==(1&n)&&0==(8&s.$flags$)&&0!=(31&o)&&0==(1024&o)&&rn(`@Prop() "${e}" on <${t.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`)}qt(this,e,s,t)},configurable:!0,enumerable:!0}):ee&&w&&1&n&&64&o&&Object.defineProperty(s,e,{value(...t){const n=Qt(this);return n.$onInstancePromise$.then((()=>n.$lazyInstance$[e](...t)))}})})),N&&(!ee||1&n)){const n=new Map;s.attributeChangedCallback=function(e,t,o){je.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))o=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==o)return;this[t]=(null!==o||"boolean"!=typeof this[t])&&o}))},e.observedAttributes=o.filter((([e,t])=>15&t[0])).map((([e,o])=>{const s=o[1]||e;return n.set(s,e),S&&512&o[0]&&t.$attrsToReflect$.push([e,s]),s}))}}return e},Ft=async(e,t,o,s,r)=>{if((ee||Y||E)&&0==(32&t.$flags$)){if(ee||K){if(t.$flags$|=32,(r=an(o,t,s)).then){const e=(c=`st:load:${o.$tagName$}:${t.$modeName$}`,a=`[Stencil] Load module for <${o.$tagName$}>`,te&&performance.mark?(0===performance.getEntriesByName(c).length&&performance.mark(c),()=>{0===performance.getEntriesByName(a).length&&performance.measure(a,c)}):()=>{});r=await r,e()}if((Z||J)&&!r)throw new Error(`Constructor for "${o.$tagName$}#${t.$modeName$}" was not found`);v&&!r.isProxied&&(V&&(o.$watchers$=r.watchers),Vt(r,o,2),r.isProxied=!0);const e=Ve("createInstance",o.$tagName$);v&&(t.$flags$|=8);try{new r(t)}catch($){nn($)}v&&(t.$flags$&=-9),V&&(t.$flags$|=128),e(),Xt(t.$lazyInstance$)}else r=e.constructor,t.$flags$|=32,customElements.whenDefined(o.$tagName$).then((()=>t.$flags$|=128));if(E&&r.style){let s=r.style;x&&"string"!=typeof s&&(s=s[t.$modeName$=Ye(e)],Y&&t.$modeName$&&e.setAttribute("s-mode",t.$modeName$));const c=Ge(o,t.$modeName$);if(!ln.has(c)){const e=Ve("registerStyles",o.$tagName$);!Y&&O&&re&&8&o.$flags$&&(s=await n.e(576).then(n.bind(n,576)).then((e=>e.scopeCss(s,c,!1)))),Xe(c,s,!!(1&o.$flags$)),e()}}}var c,a;const l=t.$ancestorComponent$,i=()=>Et(t,!0);me&&l&&l["s-rc"]?l["s-rc"].push(i):i()},Xt=e=>{ee&&u&&It(e,"connectedCallback")},Jt=e=>{if(0==(1&je.$flags$)){const t=Qt(e),n=t.$cmpMeta$,o=Ve("connectedCallback",n.$tagName$);if(g&&Ie(e,t,n.$listeners$,!0),1&t.$flags$)Ie(e,t,n.$listeners$,!1),Xt(t.$lazyInstance$);else{let o;if(t.$flags$|=1,K&&(o=e.getAttribute(_e),o)){if(O&&Pe&&1&n.$flags$){const t=x?Je(e.shadowRoot,n,e.getAttribute("s-mode")):Je(e.shadowRoot,n);e.classList.remove(t+"-h",t+"-s")}((e,t,n,o)=>{const s=Ve("hydrateClient",t),r=e.shadowRoot,c=[],a=O&&r?[]:null,l=o.$vnode$=tt(t,null);je.$orgLocNodes$||Wt(Ee.body,je.$orgLocNodes$=new Map),e["s-id"]=n,e.removeAttribute(_e),Ut(l,c,[],a,e,e,n),c.map((e=>{const n=e.$hostId$+"."+e.$nodeId$,o=je.$orgLocNodes$.get(n),s=e.$elm$;o&&Pe&&""===o["s-en"]&&o.parentNode.insertBefore(s,o.nextSibling),r||(s["s-hn"]=t,o&&(s["s-ol"]=o,s["s-ol"]["s-nr"]=s)),je.$orgLocNodes$.delete(n)})),O&&r&&a.map((e=>{e&&r.appendChild(e)})),s()})(e,n.$tagName$,o,t)}if(ne&&!o&&(Y||(C||O)&&12&n.$flags$)&&Zt(e),me){let n=e;for(;n=n.parentNode||n.host;)if(K&&1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){zt(t,t.$ancestorComponent$=n);break}}k&&!Y&&n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),de?gn((()=>Ft(e,t,n))):Ft(e,t,n)}o()}},Zt=e=>{const t=e["s-cr"]=Ee.createComment(J?`content-ref (host=${e.localName})`:"");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},Gt=e=>{if(0==(1&je.$flags$)){const t=Qt(e),n=ee?t.$lazyInstance$:e;m&&t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0),ie&&je.$cssShim$&&je.$cssShim$.removeHost(e),ee&&f&&It(n,"disconnectedCallback"),r&&It(n,"componentDidUnload")}},Yt=(e,t)=>{const n={$flags$:t[0],$tagName$:t[1]};v&&(n.$members$=t[2]),m&&(n.$listeners$=t[3]),V&&(n.$watchers$=e.$watchers$),S&&(n.$attrsToReflect$=[]),O&&!Pe&&1&n.$flags$&&(n.$flags$|=8);const o=e.prototype.connectedCallback,s=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){en(this,n)},connectedCallback(){Jt(this),u&&o&&o.call(this)},disconnectedCallback(){Gt(this),f&&s&&s.call(this)},__attachShadow(){Pe?fe?this.attachShadow({mode:"open",delegatesFocus:!!(16&n.$flags$)}):this.attachShadow({mode:"open"}):this.shadowRoot=this}}),e.is=n.$tagName$,Vt(e,n,3)},Kt=new WeakMap,Qt=e=>Kt.get(e),en=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return Z&&(n.$renderCount$=0),w&&ee&&(n.$onInstancePromise$=new Promise((e=>n.$onInstanceResolve$=e))),me&&(n.$onReadyPromise$=new Promise((e=>n.$onReadyResolve$=e)),e["s-p"]=[],e["s-rc"]=[]),Ie(e,n,t.$listeners$,!1),Kt.set(e,n)},tn=(e,t)=>t in e,nn=(e,t)=>(we||console.error)(e,t),on=G?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],sn=(...e)=>console.error(...on,...e),rn=(...e)=>console.warn(...on,...e),cn=new Map,an=(e,t,o)=>{const s=e.$tagName$.replace(/-/g,"_"),r=e.$lazyBundleId$;if(Z&&"string"!=typeof r)return void sn(`Trying to lazily load component <${e.$tagName$}> with style mode "${t.$modeName$}", but it does not exist.`);const c=!X&&cn.get(r);return c?c[s]:n(1993)(`./${r}.entry.js${X&&o?"?s-hmr="+o:""}`).then((e=>(X||cn.set(r,e),e[s])),nn)},ln=new Map,$n=[],un=[],fn=[],dn=[],mn=(e,t)=>n=>{e.push(n),Te||(Te=!0,t&&4&je.$flags$?gn(bn):je.raf(bn))},hn=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){nn(t)}e.length=0},pn=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(s){nn(s)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},bn=()=>{if(he&&Ce++,hn(un),he){const e=2==(6&je.$flags$)?performance.now()+14*Math.ceil(.1*Ce):1/0;pn(fn,e),pn(dn,e),fn.length>0&&(dn.push(...fn),fn.length=0),(Te=un.length+fn.length+dn.length>0)?je.raf(bn):Ce=0}else hn(fn),(Te=un.length>0)&&je.raf(bn)},gn=e=>{return Promise.resolve(t).then(e);var t},yn=mn(fn,!0)},6744:function(e,t,n){function o(e,t){const n=new MutationObserver((()=>setTimeout(t,200)));return n.observe(e,{childList:!0}),n}function s(e,t,n){const o=new MutationObserver((e=>{t(e.map((e=>e.attributeName)))}));return o.observe(e,{attributeFilter:n,attributeOldValue:!1,attributes:!0,characterData:!1,subtree:!1,childList:!1}),o}n.d(t,{a:function(){return s},w:function(){return o}})},1888:function(e,t,n){n.d(t,{d:function(){return c}});var o=n(65),s=n(6744);const r=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.size="regular",this.custom="false",this.getClassName=()=>"usu-icon-"+this.type}componentWillLoad(){var e;this.custom=(null===(e=this.el)||void 0===e?void 0:e.children.length)>0?"true":"false",(0,s.w)(this.el,(()=>{var e;this.custom=(null===(e=this.el)||void 0===e?void 0:e.children.length)>0?"true":"false"}))}render(){return(0,o.h)(o.AA,null,"false"===this.custom&&(0,o.h)("i",{class:this.getClassName()}),(0,o.h)("slot",null))}get el(){return this}static get style(){return'@font-face{font-family:"usu-icons";src:url("./usu-icons.ttf?0f3061ad0e2e378eaa6dd3fb58cf26e6") format("truetype"),\nurl("./usu-icons.woff?0f3061ad0e2e378eaa6dd3fb58cf26e6") format("woff"),\nurl("./usu-icons.woff2?0f3061ad0e2e378eaa6dd3fb58cf26e6") format("woff2")}i[class^="usu-icon-"]:before,i[class*=" usu-icon-"]:before{font-family:usu-icons !important;font-style:normal;font-weight:normal !important;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.usu-icon-add-dashlet:before{content:"\\f101"}.usu-icon-add:before{content:"\\f102"}.usu-icon-administration:before{content:"\\f103"}.usu-icon-analytics:before{content:"\\f104"}.usu-icon-angle-angle-down:before{content:"\\f105"}.usu-icon-angle-angle-left:before{content:"\\f106"}.usu-icon-angle-angle-right:before{content:"\\f107"}.usu-icon-angle-angle-up:before{content:"\\f108"}.usu-icon-app:before{content:"\\f109"}.usu-icon-archive:before{content:"\\f10a"}.usu-icon-arrows-arrow-down-left:before{content:"\\f10b"}.usu-icon-arrows-arrow-down-right:before{content:"\\f10c"}.usu-icon-arrows-arrow-down:before{content:"\\f10d"}.usu-icon-arrows-arrow-left:before{content:"\\f10e"}.usu-icon-arrows-arrow-right:before{content:"\\f10f"}.usu-icon-arrows-arrow-top-right:before{content:"\\f110"}.usu-icon-arrows-arrow-up-left:before{content:"\\f111"}.usu-icon-arrows-arrow-up:before{content:"\\f112"}.usu-icon-attachment:before{content:"\\f113"}.usu-icon-bookmark-selected:before{content:"\\f114"}.usu-icon-bookmark-unselected:before{content:"\\f115"}.usu-icon-bookmark:before{content:"\\f116"}.usu-icon-calendar:before{content:"\\f117"}.usu-icon-camera:before{content:"\\f118"}.usu-icon-catalog:before{content:"\\f119"}.usu-icon-checkmark:before{content:"\\f11a"}.usu-icon-close:before{content:"\\f11b"}.usu-icon-cloud-upload:before{content:"\\f11c"}.usu-icon-cloud:before{content:"\\f11d"}.usu-icon-collapse-all:before{content:"\\f11e"}.usu-icon-color-picker:before{content:"\\f11f"}.usu-icon-compare:before{content:"\\f120"}.usu-icon-compliance:before{content:"\\f121"}.usu-icon-component:before{content:"\\f122"}.usu-icon-contract:before{content:"\\f123"}.usu-icon-create-ticket:before{content:"\\f124"}.usu-icon-csv-document:before{content:"\\f125"}.usu-icon-customize:before{content:"\\f126"}.usu-icon-dashboard-customization:before{content:"\\f127"}.usu-icon-dashboard-personalization:before{content:"\\f128"}.usu-icon-dashboard:before{content:"\\f129"}.usu-icon-dashlet-drop:before{content:"\\f12a"}.usu-icon-data-collection:before{content:"\\f12b"}.usu-icon-data-exchange:before{content:"\\f12c"}.usu-icon-data-search:before{content:"\\f12d"}.usu-icon-data-settings:before{content:"\\f12e"}.usu-icon-delete-circle:before{content:"\\f12f"}.usu-icon-delete:before{content:"\\f130"}.usu-icon-density-display:before{content:"\\f131"}.usu-icon-double-angle-angle-down:before{content:"\\f132"}.usu-icon-double-angle-angle-left:before{content:"\\f133"}.usu-icon-double-angle-angle-right:before{content:"\\f134"}.usu-icon-double-angle-angle-up:before{content:"\\f135"}.usu-icon-download:before{content:"\\f136"}.usu-icon-duplicate:before{content:"\\f137"}.usu-icon-edit:before{content:"\\f138"}.usu-icon-expand-all:before{content:"\\f139"}.usu-icon-expand-diagonal-bottom-left:before{content:"\\f13a"}.usu-icon-expand-diagonal-bottom-right:before{content:"\\f13b"}.usu-icon-expand-horizontal:before{content:"\\f13c"}.usu-icon-expand-vertical:before{content:"\\f13d"}.usu-icon-export:before{content:"\\f13e"}.usu-icon-favorite:before{content:"\\f13f"}.usu-icon-file-drop:before{content:"\\f140"}.usu-icon-file-upload:before{content:"\\f141"}.usu-icon-filter-selected:before{content:"\\f142"}.usu-icon-filter-unselected:before{content:"\\f143"}.usu-icon-financials:before{content:"\\f144"}.usu-icon-grid-layout:before{content:"\\f145"}.usu-icon-group-by:before{content:"\\f146"}.usu-icon-help:before{content:"\\f147"}.usu-icon-home:before{content:"\\f148"}.usu-icon-import:before{content:"\\f149"}.usu-icon-info-help:before{content:"\\f14a"}.usu-icon-information:before{content:"\\f14b"}.usu-icon-informational-error:before{content:"\\f14c"}.usu-icon-informational-information:before{content:"\\f14d"}.usu-icon-informational-success:before{content:"\\f14e"}.usu-icon-informational-warning:before{content:"\\f14f"}.usu-icon-invisible:before{content:"\\f150"}.usu-icon-it-infrastructure:before{content:"\\f151"}.usu-icon-language:before{content:"\\f152"}.usu-icon-last-activity:before{content:"\\f153"}.usu-icon-licenses:before{content:"\\f154"}.usu-icon-line-line-top-right:before{content:"\\f155"}.usu-icon-link:before{content:"\\f156"}.usu-icon-lock-locked:before{content:"\\f157"}.usu-icon-lock-unlocked:before{content:"\\f158"}.usu-icon-logout:before{content:"\\f159"}.usu-icon-mail:before{content:"\\f15a"}.usu-icon-media-content:before{content:"\\f15b"}.usu-icon-minus:before{content:"\\f15c"}.usu-icon-more:before{content:"\\f15d"}.usu-icon-move-to-bottom:before{content:"\\f15e"}.usu-icon-move-to-top:before{content:"\\f15f"}.usu-icon-move-to:before{content:"\\f160"}.usu-icon-new-tab:before{content:"\\f161"}.usu-icon-news:before{content:"\\f162"}.usu-icon-optimization:before{content:"\\f163"}.usu-icon-organization:before{content:"\\f164"}.usu-icon-paste:before{content:"\\f165"}.usu-icon-pause:before{content:"\\f166"}.usu-icon-phone:before{content:"\\f167"}.usu-icon-play:before{content:"\\f168"}.usu-icon-presets:before{content:"\\f169"}.usu-icon-print:before{content:"\\f16a"}.usu-icon-rearrange:before{content:"\\f16b"}.usu-icon-recommended:before{content:"\\f16c"}.usu-icon-recuringcost:before{content:"\\f16d"}.usu-icon-redo:before{content:"\\f16e"}.usu-icon-refresh:before{content:"\\f16f"}.usu-icon-release:before{content:"\\f170"}.usu-icon-reporting:before{content:"\\f171"}.usu-icon-request:before{content:"\\f172"}.usu-icon-reset:before{content:"\\f173"}.usu-icon-resize-horizontal:before{content:"\\f174"}.usu-icon-resizing:before{content:"\\f175"}.usu-icon-running-process:before{content:"\\f176"}.usu-icon-save:before{content:"\\f177"}.usu-icon-search:before{content:"\\f178"}.usu-icon-secure:before{content:"\\f179"}.usu-icon-settings:before{content:"\\f17a"}.usu-icon-shop:before{content:"\\f17b"}.usu-icon-shopping-cart:before{content:"\\f17c"}.usu-icon-shopping-orders:before{content:"\\f17d"}.usu-icon-shrink:before{content:"\\f17e"}.usu-icon-simulation:before{content:"\\f17f"}.usu-icon-software-classic:before{content:"\\f180"}.usu-icon-software-cloud:before{content:"\\f181"}.usu-icon-sort-by-ascendent:before{content:"\\f182"}.usu-icon-sort-by-default:before{content:"\\f183"}.usu-icon-sort-by-descendent:before{content:"\\f184"}.usu-icon-sort-by:before{content:"\\f185"}.usu-icon-stop:before{content:"\\f186"}.usu-icon-store:before{content:"\\f187"}.usu-icon-switch-to:before{content:"\\f188"}.usu-icon-system:before{content:"\\f189"}.usu-icon-text-bold:before{content:"\\f18a"}.usu-icon-text-bullet-list:before{content:"\\f18b"}.usu-icon-text-color-text:before{content:"\\f18c"}.usu-icon-text-emoticon:before{content:"\\f18d"}.usu-icon-text-italic:before{content:"\\f18e"}.usu-icon-text-numeric-list:before{content:"\\f18f"}.usu-icon-text-underline:before{content:"\\f190"}.usu-icon-ticket:before{content:"\\f191"}.usu-icon-time:before{content:"\\f192"}.usu-icon-tree:before{content:"\\f193"}.usu-icon-undo:before{content:"\\f194"}.usu-icon-unlink:before{content:"\\f195"}.usu-icon-upload:before{content:"\\f196"}.usu-icon-users-add-user:before{content:"\\f197"}.usu-icon-users-user-group:before{content:"\\f198"}.usu-icon-users-user:before{content:"\\f199"}.usu-icon-visible:before{content:"\\f19a"}.usu-icon-xlsx-document:before{content:"\\f19b"}.usu-icon-xml-document:before{content:"\\f19c"}.usu-icon-zip-file:before{content:"\\f19d"}:host(:not([custom=true])){display:inline-block}:host(:not([custom=true])) i{display:flex}:host([custom=true]){display:flex;justify-content:center;align-items:center}:host([size=small]){max-height:var(--usu-icon-size-small, 16px);width:var(--usu-icon-size-small, 16px)}:host([size=small]) i,:host([size=small]) ::slotted(*){font-size:var(--usu-icon-size-small, 16px);line-height:var(--usu-icon-size-small, 16px)}:host([size=regular]){max-height:var(--usu-icon-size-medium, 24px);width:var(--usu-icon-size-medium, 24px)}:host([size=regular]) i,:host([size=regular]) ::slotted(*){font-size:var(--usu-icon-size-medium, 24px);line-height:var(--usu-icon-size-medium, 24px)}:host([size=large]){max-height:var(--usu-icon-size-large, 32px);width:var(--usu-icon-size-large, 32px)}:host([size=large]) i,:host([size=large]) ::slotted(*){font-size:var(--usu-icon-size-large, 32px);line-height:var(--usu-icon-size-large, 32px)}'}},[1,"usu-icon",{type:[513],size:[513],custom:[1537]}]);function c(){if("undefined"==typeof customElements)return;["usu-icon"].forEach((e=>{if("usu-icon"===e)customElements.get(e)||customElements.define(e,r)}))}},1262:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(7294),s=n(2389);function r(e){var t=e.children,n=e.fallback;return(0,s.Z)()?o.createElement(o.Fragment,null,null==t?void 0:t()):null!=n?n:null}}}]);
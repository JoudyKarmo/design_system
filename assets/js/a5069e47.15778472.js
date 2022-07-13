"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[6369],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||c;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1497:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return O},frontMatter:function(){return y},metadata:function(){return b},toc:function(){return E}});var n=r(7462),a=r(3366),c=r(7294),o=r(3905),s=r(4996),i=JSON.parse('[{"icon":"add","name":"Add","tags":["add","plus","up"]},{"icon":"close","name":"Close","tags":["close","cancel","down"]}]');function l(e){var t=e.name,r=e.icon;return c.createElement("div",{className:"svg-icon"},c.createElement("header",{className:"tile-title"},t),c.createElement("div",{className:"tile-svg"},c.createElement("img",{className:"icon",src:(0,s.Z)("/img/icon/"+r+".svg")}),c.createElement("a",{href:(0,s.Z)("/img/icon/"+r+".svg"),download:r+".svg"},c.createElement("p",{className:"download"}))))}function u(e){var t=i.map((function(e){return c.createElement(l,{name:e.name,icon:e.icon,key:e.icon})}));return c.createElement("div",{className:"icon-list"},t)}var m=[{name:"Add",url:"add",tags:["add","plus"]},{name:"Close",url:"close",tags:["close","cancel"]}];function p(e){var t=e.name,r=e.icon,n=e.tags.map((function(e){return c.createElement("li",{key:e},e)}));return c.createElement("li",{className:"svg-icon",key:r},c.createElement("header",{className:"tile-title"},t),c.createElement("div",{className:"tile-svg"},c.createElement("img",{className:"icon",src:(0,s.Z)("/img/icon/"+r+".svg")})),c.createElement("div",{className:"tags"},c.createElement("h5",null,"Tags:"),c.createElement("ul",{className:"tags"},n)))}function d(){var e=r(7294),t=e.useState,n=t(""),a=n[0],c=n[1],o=t(""),s=o[0],i=o[1];return e.createElement("div",{className:"search-component"},e.createElement("h3",null,"Icon explorer"),e.createElement("input",{type:"text",id:"message",name:"message",onChange:function(e){c(e.target.value)},value:a,autoComplete:"off"}),e.createElement("button",{onClick:function(t){t.preventDefault();var r=m.filter((function(e){return e.tags.some((function(e){return e.includes(a.toLowerCase())}))}));i(r.map((function(t){return e.createElement(p,{name:t.name,icon:t.url,tags:t.tags})})))}},"Search"),e.createElement("h1",null),e.createElement("h4",null,"Search results will appear below"),e.createElement("ul",{className:"icons-result"},s))}var f=["components"],y={id:"icon-library",title:"Icon library",sidebar_label:"Icon library",sidebar_position:1},g=void 0,b={unversionedId:"resources/icon-library",id:"resources/icon-library",title:"Icon library",description:'[//]: # (import useBaseUrl from "@docusaurus/useBaseUrl";)',source:"@site/docs/resources/icons.mdx",sourceDirName:"resources",slug:"/resources/icon-library",permalink:"/design_system/docs/resources/icon-library",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources/icons.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"icon-library",title:"Icon library",sidebar_label:"Icon library",sidebar_position:1},sidebar:"resources",next:{title:"Resources",permalink:"/design_system/docs/resources/resources"}},v={},E=[],h={toc:E};function O(e){var t=e.components,r=(0,a.Z)(e,f);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{mdxType:"ShowIconList"}),(0,o.kt)(d,{mdxType:"SearchComponent"}))}O.isMDXComponent=!0}}]);
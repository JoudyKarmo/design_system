"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7920],{2100:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(4165),r=n(5861),c=n(7294),u=n(2263),l=n(5974),s=n(5742),o=n(9960),m=n(6775),i=n(412);var h=function(){var e=(0,m.k6)(),t=(0,m.TH)(),n=(0,u.Z)().siteConfig.baseUrl;return{searchValue:i.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},f=n(180),p=n(7536),d=n(7235),E=n(1232),_=n(1190),g=n(4601),v=n(2854);function y(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var S="searchQueryInput_paj0",w="searchResultItem_W7fb",I="searchResultItemPath_xjYG",b="searchResultItemSummary_Kjdp",k=n(9784);function Z(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,u=t.tokens,l=t.metadata,s=0===a,m=2===a,i=(s?n.b:r.b).slice(),h=m?n.s:n.t;return s||i.push(r.t),c.createElement("article",{className:w},c.createElement("h2",null,c.createElement(o.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:m?(0,d.C)(h,u):(0,E.o)(h,(0,_.m)(l,"t"),u,100)}})),i.length>0&&c.createElement("p",{className:I},(0,k.e)(i)),m&&c.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,E.o)(n.t,(0,_.m)(l,"t"),u,100)}}))}var C=function(){var e=(0,u.Z)().siteConfig.baseUrl,t=h(),n=t.searchValue,o=t.updateSearchPath,m=(0,c.useState)(n),i=m[0],d=m[1],E=(0,c.useState)(),_=E[0],w=E[1],I=(0,c.useState)(),b=I[0],k=I[1],C=(0,c.useMemo)((function(){return i?y(v.Iz.search_results_for,{keyword:i}):v.Iz.search_the_documentation}),[i]);(0,c.useEffect)((function(){o(i),_&&(i?_(i,(function(e){k(e)})):k(void 0))}),[i,_]);var R=(0,c.useCallback)((function(e){d(e.target.value)}),[]);return(0,c.useEffect)((function(){n&&n!==i&&d(n)}),[n]),(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)((0,a.Z)().mark((function t(){var n,r,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.w)(e);case 2:n=t.sent,r=n.wrappedIndexes,c=n.zhDictionary,w((function(){return(0,p.v)(r,c,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c.createElement(l.Z,null,c.createElement(s.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"}),c.createElement("title",null,C)),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,C),c.createElement("input",{type:"search",name:"q",className:S,"aria-label":"Search",onChange:R,value:i,autoComplete:"off",autoFocus:!0}),!_&&i&&c.createElement("div",null,c.createElement(g.Z,null)),b&&(b.length>0?c.createElement("p",null,y(1===b.length?v.Iz.count_documents_found:v.Iz.count_documents_found_plural,{count:b.length})):c.createElement("p",null,v.Iz.no_documents_were_found)),c.createElement("section",null,b&&b.map((function(e){return c.createElement(Z,{key:e.document.i,searchResult:e})})))))}}}]);
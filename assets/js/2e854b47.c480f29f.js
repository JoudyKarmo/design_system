"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7287],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2360:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),s="tabItem_OmH5";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(7294),s=a(2389),o=a(7392),i=a(7094),l=a(2466),u=a(6010),c="tabList_uSqn",d="tabItem_LplD";function p(e){var t,a,s,p=e.lazy,m=e.block,g=e.defaultValue,h=e.values,k=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(t=null!=g?g:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(s=b[0])?void 0:s.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,i.U)(),w=T.tabGroupChoices,x=T.setTabGroupChoices,C=(0,r.useState)(y),E=C[0],M=C[1],D=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var S=w[k];null!=S&&S!==E&&v.some((function(e){return e.value===S}))&&M(S)}var I=function(e){var t=e.currentTarget,a=D.indexOf(t),n=v[a].value;n!==E&&(O(t),M(n),null!=k&&x(k,n))},A=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=D.indexOf(e.currentTarget)+1;a=D[n]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;a=D[r]||D[D.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},f)},v.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return D.push(e)},onKeyDown:A,onFocus:I,onClick:I},s,{className:(0,u.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},2634:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=a(9877),i=a(2360),l=["components"],u={sidebar_position:1,id:"all-about-one-usu",title:"All-about-one-usu",sidebar_label:"All-about-one-usu"},c="Toast Messages",d={unversionedId:"tutorial/all-about-one-usu",id:"tutorial/all-about-one-usu",title:"All-about-one-usu",description:"This is a description about the Toast Message Component",source:"@site/docs/tutorial/intro.md",sourceDirName:"tutorial",slug:"/tutorial/all-about-one-usu",permalink:"/design_system/tutorial/all-about-one-usu",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"all-about-one-usu",title:"All-about-one-usu",sidebar_label:"All-about-one-usu"},sidebar:"tutorial",next:{title:"Create a Page",permalink:"/design_system/tutorial/tutorial-basics/create-a-page"}},p={},m=[{value:"Anatomy",id:"anatomy",level:2},{value:"Rules / Best practice",id:"rules--best-practice",level:2},{value:"Content guidelines",id:"content-guidelines",level:2},{value:"Information",id:"information",level:3},{value:"Success",id:"success",level:3},{value:"Warning",id:"warning",level:3},{value:"Error",id:"error",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Related",id:"related",level:2},{value:"Installation",id:"installation",level:3},{value:"Javascript",id:"javascript",level:4},{value:"Angular",id:"angular",level:4},{value:"React",id:"react",level:4},{value:"Properties",id:"properties",level:3},{value:"Events",id:"events",level:3},{value:"Shadow Parts",id:"shadow-parts",level:3},{value:"CSS Custom Properties",id:"css-custom-properties",level:3},{value:"Dependencies",id:"dependencies",level:3}],g={toc:m};function h(e){var t=e.components,u=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"toast-messages"},"Toast Messages"),(0,s.kt)("p",null,"This is a description about the Toast Message Component"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"usage",label:"Usage",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"This is a description about the Toast Message Component"),(0,s.kt)("h2",{id:"anatomy"},"Anatomy"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Icon and title: Toast messages should always contain a concise title and an appropriate icon, color (or user avatar)."),(0,s.kt)("li",{parentName:"ol"},"Message (optional): Toast messages descriptions are restricted to five lines in length. If the text overflows, it\ntruncates using an ellipsis."),(0,s.kt)("li",{parentName:"ol"},"Actions (optional): A maximum of two links that enable users to act on the Toast Message content."),(0,s.kt)("li",{parentName:"ol"},"Dismiss: Use to close the Toast message. This is for default Toast messages only.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Anatomy",src:a(2231).Z,width:"582",height:"226"})),(0,s.kt)("h2",{id:"rules--best-practice"},"Rules / Best practice"),(0,s.kt)("p",null,"In general, there are four possible types of messages: info, success, warning and error.\nBut - toast messages should be used for general, ",(0,s.kt)("strong",{parentName:"p"},"event-driven messages that are dismissible.")," One common use case for\na toast message is as a notification about recent activity or as informing the user about a successful action. This\nallows people to easily jump into a conversation or activity feed to get a quick update."),(0,s.kt)("p",null,"It should not be used to inform the user about an error or a warning, as the user might not see the message in time.\nAlso, if an interaction with the user is necessary or an action should be suggested, the toast message is not the\nappropriate messaging format. For these cases ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"section messages")," Read the\nor ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"modals")," should be used."),(0,s.kt)("h2",{id:"content-guidelines"},"Content guidelines"),(0,s.kt)("p",null,"Toast messages appear at the bottom left of the screen and overlay any content.\nThere are four types of Toast Messages: info, success, warning and error.\nDefault Toast Messages are for general, event-driven messages that are dismissible. For example, as notifications for\nrecent activity. One common use case for default Toast Messages is as a notification about recent activity. This allows\npeople to easily jump into a conversation or activity feed to get a quick update. In these cases, an avatar is used\ninstead of the icon."),(0,s.kt)("h3",{id:"information"},"Information"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Anatomy",src:a(4502).Z,width:"605",height:"127"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Say why it's important."),(0,s.kt)("li",{parentName:"ul"},"Get right to the point."),(0,s.kt)("li",{parentName:"ul"},'Based on the situation, you can add more "wink" to your message, but keep it clear and concise.')),(0,s.kt)("h3",{id:"success"},"Success"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Anatomy",src:a(687).Z,width:"605",height:"127"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Messages that appear more frequently should have less wink and be more concise."),(0,s.kt)("li",{parentName:"ul"},"Messages that appear after a bigger or more infrequent action can be more playful.")),(0,s.kt)("h3",{id:"warning"},"Warning"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Anatomy",src:a(3870).Z,width:"605",height:"131"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Put yourself in the user's shoes."),(0,s.kt)("li",{parentName:"ul"},"Make sure you're not talking about something that has already occurred (this should be an error message instead).")),(0,s.kt)("h3",{id:"error"},"Error"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Anatomy",src:a(4661).Z,width:"605",height:"127"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Avoid blame and accept if something is our fault - "we\'re having trouble connecting" rather than "you\'re having\nconnection issues."'),(0,s.kt)("li",{parentName:"ul"},"Let the user know what's causing the error, rather than writing a general error message that works for a number of\nthings."),(0,s.kt)("li",{parentName:"ul"},"Be clear and conversational by thinking about how you might explain a technical error to your non-technical friends.")),(0,s.kt)("h2",{id:"accessibility"},"Accessibility"),(0,s.kt)("p",null,"Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum.\nNullam id dolor id nibh ultricies vehicula ut id elit."),(0,s.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\nVestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi\nporta gravida at eget metus."),(0,s.kt)("p",null,"Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,\neget lacinia odio sem nec elit. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis\nparturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna\nmollis euismod. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl\nconsectetur et.\nCras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla. Morbi\nleo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Cras justo odio,\ndapibus ac facilisis in, egestas eget quam."),(0,s.kt)("h2",{id:"related"},"Related"),(0,s.kt)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Donec sed odio dui.\nSee ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"here")," or ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"there"))),(0,s.kt)(i.Z,{value:"examples",label:"Examples",mdxType:"TabItem"}),(0,s.kt)(i.Z,{value:"code",label:"Code",mdxType:"TabItem"},(0,s.kt)("h3",{id:"installation"},"Installation"),(0,s.kt)("h4",{id:"javascript"},"Javascript"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\x3c!-- Info (Default) Toast --\x3e\n<usu-toast \n    header="Info Message Title" \n    message="Descriptive Message Text for this Info"\n></usu-toast>\n\n\x3c!-- Error Toast --\x3e\n<usu-toast \n    status="error"\n    header="Error Message Title"\n    message="Descriptive Message Text for this Error"\n></usu-toast>\n\n\x3c!-- Success Toast --\x3e\n<usu-toast \n    status="success"\n    header="Success Message Title"\n    message="Descriptive Message Text for this Success"\n></usu-toast>\n\n\x3c!-- Warning Toast --\x3e\n<usu-toast \n    status="warning"\n    header="Warning Message Title"\n    message="Descriptive Message Text for this Warning"\n></usu-toast>\n')),(0,s.kt)("h4",{id:"angular"},"Angular"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\x3c!-- The UsuToastService usage of the usu-toast-container should be prefered to the direct component usage --\x3e\n\n\x3c!-- Success toast --\x3e\n<usu-toast\n status="success"\n  header="Success Message Title"\n  message="Descriptive Message Text for this success"\n></usu-toast>\n\n\x3c!-- Info toast --\x3e\n<usu-toast\n  status="info"\n  header="Info Message Title"\n  message="Descriptive Message Text for this information"\n></usu-toast>\n\n\x3c!-- Warning toast --\x3e\n<usu-toast\n  status="warning"\n  header="Warning Message Title"\n  message="Descriptive Message Text for this warning"\n></usu-toast>\n\n\x3c!-- Error toast --\x3e\n<usu-toast\n  status="error"\n  header="Error Message Title"\n  message="Descriptive Message Text for this error"\n></usu-toast>\n')),(0,s.kt)("h4",{id:"react"},"React"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<UsuToast\n status='error'\n  header='Error Message Title'\n  message='Descriptive Message Text for this Error'\n/>\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Changelog")),(0,s.kt)("p",null,"1.1.7 ",(0,s.kt)("a",{parentName:"p",href:"http://www.google.com"},"View Changelog")),(0,s.kt)("p",null,"Patch Changes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Updated dependencies")),(0,s.kt)("h3",{id:"properties"},"Properties"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"duration")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"duration")),(0,s.kt)("td",{parentName:"tr",align:"center"},"How many milliseconds to wait before hiding the toast. By default, it is set to"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"number")),(0,s.kt)("td",{parentName:"tr",align:"center"},"8000")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"header")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"header")),(0,s.kt)("td",{parentName:"tr",align:"center"},"The header of the toast"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"center"},"undefined")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"message")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"message")),(0,s.kt)("td",{parentName:"tr",align:"center"},"The message of the toast"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"string")),(0,s.kt)("td",{parentName:"tr",align:"center"},"undefined")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"status")),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"status")),(0,s.kt)("td",{parentName:"tr",align:"center"},"The status of the toast"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"ToastStatus")),(0,s.kt)("td",{parentName:"tr",align:"center"},"'info', 'error', 'warning', 'success'")))),(0,s.kt)("h3",{id:"events"},"Events"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Event"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Typ"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"usuCloseToast")),(0,s.kt)("td",{parentName:"tr",align:"center"},"Closes the toast"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"CustomEvent<void>"))))),(0,s.kt)("h3",{id:"shadow-parts"},"Shadow Parts"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Slot"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"header"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The header text of the toast.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"message"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The body text of the toast.")))),(0,s.kt)("h3",{id:"css-custom-properties"},"CSS Custom Properties"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"--usu-toast-background"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The background of the toast")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"--usu-toast-border-radius"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The border radius of the toast")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"--usu-toast-box-shadow"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The box shadow of the toast")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"--usu-toast-color-error"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The error color of the toast")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"--usu-toast-color-info"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The info color of the toast")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"--usu-toast-color-message"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The message color of the toast")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"--usu-toast-color-success"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The success color of the toast")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"--usu-toast-color-warning"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The warning color of the toast")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"--usu-toast-message-font-size"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The message font size of the toast")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"--usu-toast-text-color"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The text color of the toast")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"--usu-toast-title-font-size"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The title font size of the toast")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"--usu-toast-title-font-weight"),(0,s.kt)("td",{parentName:"tr",align:"center"},"The title font weight of the toast")))),(0,s.kt)("h3",{id:"dependencies"},"Dependencies"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Button")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Icons"))))))}h.isMDXComponent=!0},4661:function(e,t,a){t.Z=a.p+"assets/images/Error-bc5a25e9af6201c08ad5eb1ca98a5462.png"},4502:function(e,t,a){t.Z=a.p+"assets/images/Info-d7ffedef7acc66cbd9d76d86bd0a24b8.png"},687:function(e,t,a){t.Z=a.p+"assets/images/Success-d4338b1b725a7ad8451edc930f3760b1.png"},2231:function(e,t,a){t.Z=a.p+"assets/images/Toast-728244a2969ce00534cc0d8213a545d1.png"},3870:function(e,t,a){t.Z=a.p+"assets/images/Warning-fc05532e5072a6150eab997a1433d373.png"}}]);
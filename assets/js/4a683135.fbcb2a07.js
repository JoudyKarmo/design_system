(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5044],{1993:function(e){function s(e){return Promise.resolve().then((function(){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}))}s.keys=function(){return[]},s.resolve=s,s.id=1993,e.exports=s},4982:function(e,s,t){"use strict";t.d(s,{M:function(){return o}});var a=t(65);const n=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.color="default"}render(){return(0,a.h)(a.AA,{role:"mark"},(0,a.h)("slot",null))}static get style(){return":host{display:inline-block;font-size:14px;line-height:1.4;font-weight:var(--usu-text-font-weight-medium, 500);padding:var(--usu-badge-padding, 2px 8px 2px 8px);border-radius:var(--usu-badge-border-radius, 12px)}:host([color=default]){background-color:var(--usu-badge-background-default, #f0f0f0);color:var(--usu-badge-text-color-default, #4b4b4a)}:host([color=primary]){background-color:var(--usu-badge-background-primary, #004f9f);color:var(--usu-badge-text-color-primary, #ffffff)}:host([color=important]){background-color:var(--usu-badge-background-important, #d71a4b);color:var(--usu-badge-text-color-important, #ffffff)}:host([color=add]){background-color:var(--usu-badge-background-added, #16a10d);color:var(--usu-badge-text-color-added, #ffffff)}:host([color=remove]){background-color:var(--usu-badge-background-removed, #f9dde4);color:var(--usu-badge-text-color-removed, #d71a4b)}:host([color=primary-inverted]){background-color:var(--usu-badge-background-primary-inverted, #ffffff);color:var(--usu-badge-text-color-primary-inverted, #004f9f)}"}},[1,"usu-badge",{color:[513]}]);const o=function(){if("undefined"==typeof customElements)return;["usu-badge"].forEach((e=>{if("usu-badge"===e)customElements.get(e)||customElements.define(e,n)}))}},7898:function(e,s,t){"use strict";t.d(s,{M:function(){return r}});var a=t(65),n=t(1888);const o=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.status="info",this.getAriaRole=()=>{switch(this.status){case"warning":case"error":return"alert";default:return"status"}},this.getAriaLive=()=>{switch(this.status){case"warning":case"error":return"assertive";default:return"polite"}}}get iconType(){switch(this.status){case"success":return"informational-success";case"info":default:return"informational-information";case"warning":return"informational-warning";case"error":return"informational-error"}}render(){return(0,a.h)(a.AA,{role:this.getAriaRole(),"aria-live":this.getAriaLive()},(0,a.h)("usu-icon",{size:"small",type:this.iconType}),(0,a.h)("slot",null))}static get style(){return":host{display:flex;align-items:center;justify-content:center;font-weight:var(--usu-text-font-weight-medium, 500);padding:var(--usu-banner-message-padding, 10px 0)}:host usu-icon{margin-right:var(--usu-banner-message-icon-text-distance, 8px)}:host([status=success]){background:var(--usu-banner-message-success-background, #dcf1db);color:var(--usu-banner-message-success-color, #4b4b4a)}:host([status=success]) usu-icon{color:var(--usu-banner-message-success-icon-color, #16a10d)}:host([status=info]){background:var(--usu-banner-message-info-background, #d9e4ea);color:var(--usu-banner-message-info-color, #4b4b4a)}:host([status=info]) usu-icon{color:var(--usu-banner-message-info-icon-color, #004a72)}:host([status=warning]){background:var(--usu-banner-message-warning-background, #fff3d9);color:var(--usu-banner-message-warning-color, #4b4b4a)}:host([status=warning]) usu-icon{color:var(--usu-banner-message-warning-icon-color, #ffaa00)}:host([status=error]){background:var(--usu-banner-message-error-background, #f9dde4);color:var(--usu-banner-message-error-color, #4b4b4a)}:host([status=error]) usu-icon{color:var(--usu-banner-message-error-icon-color, #d71a4b)}"}},[1,"usu-banner-message",{status:[513]}]);const r=function(){if("undefined"==typeof customElements)return;["usu-banner-message","usu-icon"].forEach((e=>{switch(e){case"usu-banner-message":customElements.get(e)||customElements.define(e,o);break;case"usu-icon":customElements.get(e)||(0,n.d)()}}))}},6626:function(e,s,t){"use strict";t.d(s,{M:function(){return r}});var a=t(65),n=t(1888);const o=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.status="info"}get iconType(){if(this.icon)return this.icon;switch(this.status){case"success":return"informational-success";case"info":default:return"informational-information";case"warning":return"informational-warning";case"error":return"informational-error"}}render(){return(0,a.h)(a.AA,null,(0,a.h)("div",{class:"title"},(0,a.h)("usu-icon",{size:"small",type:this.iconType}),(0,a.h)("slot",{name:"title"})),(0,a.h)("div",{class:"content"},(0,a.h)("div",{class:"message"},(0,a.h)("slot",null)),(0,a.h)("slot",{name:"action"})))}static get style(){return":host{display:block;padding:var(--usu-section-message-padding, 13px 16px 16px 16px)}:host .title{display:flex;align-items:center;margin-bottom:8px;font-weight:var(--usu-text-font-weight-medium, 500)}:host .title usu-icon{margin-right:var(--usu-section-message-icon-text-distance, 8px)}:host .content{padding-left:var(--usu-section-message-content-padding-left, 24px)}:host .content .message{color:var(--usu-section-message-content-color, #565656)}:host .content ::slotted([slot=action]){display:block;margin-top:6px}:host([status=success]){background:var(--usu-section-message-success-background, #dcf1db)}:host([status=success]) .title{color:var(--usu-section-message-success-color, #4b4b4a)}:host([status=success]) usu-icon{color:var(--usu-section-message-success-icon-color, #16a10d)}:host([status=info]){background:var(--usu-section-message-info-background, #d9e4ea)}:host([status=info]) .title{color:var(--usu-section-message-info-color, #4b4b4a)}:host([status=info]) usu-icon{color:var(--usu-section-message-info-icon-color, #004a72)}:host([status=warning]){background:var(--usu-section-message-warning-background, #fff3d9)}:host([status=warning]) .title{color:var(--usu-section-message-warning-color, #4b4b4a)}:host([status=warning]) usu-icon{color:var(--usu-section-message-warning-icon-color, #ffaa00)}:host([status=error]){background:var(--usu-section-message-error-background, #f9dde4)}:host([status=error]) .title{color:var(--usu-section-message-error-color, #4b4b4a)}:host([status=error]) usu-icon{color:var(--usu-section-message-error-icon-color, #d71a4b)}"}},[1,"usu-section-message",{status:[513],icon:[1]}]);const r=function(){if("undefined"==typeof customElements)return;["usu-section-message","usu-icon"].forEach((e=>{switch(e){case"usu-section-message":customElements.get(e)||customElements.define(e,o);break;case"usu-icon":customElements.get(e)||(0,n.d)()}}))}},4644:function(e,s,t){"use strict";t.r(s),t.d(s,{assets:function(){return g},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var a=t(7462),n=t(3366),o=(t(7294),t(3905)),r=t(1262),i=(t(5488),t(5162),["components"]),u={id:"messaging",title:"Messaging",sidebar_label:"Messaging"},c=void 0,l={unversionedId:"patterns/messaging",id:"patterns/messaging",title:"Messaging",description:"",source:"@site/docs/patterns/messaging.md",sourceDirName:"patterns",slug:"/patterns/messaging",permalink:"/design_system/docs/patterns/messaging",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/patterns/messaging.md",tags:[],version:"current",frontMatter:{id:"messaging",title:"Messaging",sidebar_label:"Messaging"},sidebar:"patterns"},g={},d=[{value:"Message types",id:"message-types",level:2},{value:"Badges",id:"badges",level:3},{value:"Banners",id:"banners",level:3},{value:"Section Messages",id:"section-messages",level:3},{value:"Toast Messages",id:"toast-messages",level:3},{value:"Colors",id:"colors",level:2},{value:"Content",id:"content",level:2},{value:"Success messages",id:"success-messages",level:3},{value:"Information messages",id:"information-messages",level:3},{value:"Warning messages",id:"warning-messages",level:3},{value:"Error messages",id:"error-messages",level:3},{value:"Icons",id:"icons",level:2}],h={toc:d};function m(e){var s=e.components,u=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,u,{components:s,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{mdxType:"BrowserOnly"},(function(){var e=t(4982).M,s=t(7898).M,a=t(6626).M,n=t(2727).M;return e(),s(),a(),n(),null})),(0,o.kt)("p",null,"Messages should be used to communicate conditions, indicate an event, or show responses to user actions."),(0,o.kt)("h2",{id:"message-types"},"Message types"),(0,o.kt)("h3",{id:"badges"},"Badges"),(0,o.kt)("p",null,"A badge contains a numeric value, to indicate a running tally or quantity-based summary. Badges are usually placed\nbefore or after the label of the thing they're quantifying, such as the number of votes for an issue. They should only\nbe used to represent a number, however, in some cases, letters or characters can be used as well. See ",(0,o.kt)("a",{parentName:"p",href:"https:/"},(0,o.kt)("strong",{parentName:"a"},"badges\ncomponent."))),(0,o.kt)("p",null,(0,o.kt)("usu-badge",{color:"primary"}," 12 ")," ",(0,o.kt)("usu-badge",{color:"inverted"}," 12 ")," ",(0,o.kt)("usu-badge",{color:"default"}," 12 ")," ",(0,o.kt)("usu-badge",{color:"important"}," 12 ")," ",(0,o.kt)("usu-badge",{color:"add"}," +12 ")," ",(0,o.kt)("usu-badge",{color:"remove"}," -12 ")),(0,o.kt)("h3",{id:"banners"},"Banners"),(0,o.kt)("p",null,"Use banners at the top of the screen to display critical messaging about loss of data, functionality, or important\nsite-wide information that affects the user's ability to use the product. Banners should appear one at a time, should\nonly disappear once the related issue is resolved, and should not be dismissible. Banners appear in the screen by\npushing the entire content below by animating. See ",(0,o.kt)("a",{parentName:"p",href:"https:/"},(0,o.kt)("strong",{parentName:"a"},"banner component."))),(0,o.kt)("p",null,(0,o.kt)("usu-banner-message",{status:"error"},"Error Message")),(0,o.kt)("h1",null),(0,o.kt)("usu-banner-message",{status:"info"},"Info Message"),(0,o.kt)("h1",null),(0,o.kt)("usu-banner-message",{status:"success"},"Success Message"),(0,o.kt)("h1",null),(0,o.kt)("usu-banner-message",{status:"warning"},"Warning Message"),(0,o.kt)("h1",null),(0,o.kt)("h3",{id:"section-messages"},"Section Messages"),(0,o.kt)("p",null,"Section messages are used to alert users that something has happened in a section of the screen. They can't be dismissed\nand will only disappear once the situation has been resolved or the user has taken action. See ",(0,o.kt)("a",{parentName:"p",href:"https://"},(0,o.kt)("strong",{parentName:"a"},"section message\ncomponent."))),(0,o.kt)("usu-section-message",{status:"info"},(0,o.kt)("span",{slot:"title"},"Info Message"),(0,o.kt)("div",null,"Descriptive Message Text for this Information."),(0,o.kt)("a",{slot:"action",href:"https://www.usu.com/en/",target:"_blank"},"Possible Action")),(0,o.kt)("h1",null),(0,o.kt)("usu-section-message",{status:"warning"},(0,o.kt)("span",{slot:"title"},"Warning Message Title"),(0,o.kt)("div",null,"Descriptive Message Text for this Information."),(0,o.kt)("a",{slot:"action",href:"https://www.usu.com/en/",target:"_blank"},"Possible Action")),(0,o.kt)("h1",null),(0,o.kt)("usu-section-message",{status:"success"},(0,o.kt)("span",{slot:"title"},"Success Message"),(0,o.kt)("div",null,"Descriptive Message Text for this Information."),(0,o.kt)("a",{slot:"action",href:"https://www.usu.com/en/",target:"_blank"},"Possible Action")),(0,o.kt)("h1",null),(0,o.kt)("usu-section-message",{status:"error"},(0,o.kt)("span",{slot:"title"},"Error Message"),(0,o.kt)("div",null,"Descriptive Message Text for this Information."),(0,o.kt)("a",{slot:"action",href:"https://www.usu.com/en/",target:"_blank"},"Possible Action")),(0,o.kt)("h3",{id:"toast-messages"},"Toast Messages"),(0,o.kt)("p",null,"Toast are used for confirmations, alerts, and acknowledgments that require minimal user interaction. These event-driven\nmessages appear by default at the bottom-right of the screen, overlapping the content. Other positions like top-right,\nor bottom-left are allowed depending on where the particular use case action is taking place. A toast should be placed\nwith a 16px padding around it. See ",(0,o.kt)("a",{parentName:"p",href:"https://"},(0,o.kt)("strong",{parentName:"a"},"Toast message component."))),(0,o.kt)("p",null,(0,o.kt)("usu-toast",{status:"info",header:"Information Message Title",message:"Descriptive Message Text for this Information"})),(0,o.kt)("h1",null),(0,o.kt)("usu-toast",{status:"warning",header:"Warning Message Title",message:"Descriptive Message Text for this Warning"}),(0,o.kt)("h1",null),(0,o.kt)("usu-toast",{status:"success",header:"Success Message Title",message:"Descriptive Message Text for this Success"}),(0,o.kt)("h1",null),(0,o.kt)("usu-toast",{status:"error",header:"Error Message Title",message:"Descriptive Message Text for this Error"}),(0,o.kt)("h2",{id:"colors"},"Colors"),(0,o.kt)("p",null,"Message types are assigned appropriate colors and icons to help indicate content and urgency. The available message\ntypes are authentication, confirmation, warning, error, and information. Setting the right color and icon for a message\nensures people understand the nature of the message at a glance, and that they take appropriate action. Get to know more\ninformation about ",(0,o.kt)("a",{parentName:"p",href:"https:/"},(0,o.kt)("strong",{parentName:"a"},"colors."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Section",src:t(8931).Z,width:"624",height:"270"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Confirmation (G300): Provides a positive response to user actions."),(0,o.kt)("li",{parentName:"ol"},"Warning (Y300): Used to help users avoid error situations. Consists of a description of potential errors. It should\nprovide a recommended next step, and an option to be reminded at a later date."),(0,o.kt)("li",{parentName:"ol"},"Error (R300): Shown when something goes wrong, or when the user is denied access. This should also provide\nrecommended next steps, or a path forward."),(0,o.kt)("li",{parentName:"ol"},"Information (P300): Conveys information to help the user understand minor contextual or state changes. These are\ntypically not in response to a user action.")),(0,o.kt)("h2",{id:"content"},"Content"),(0,o.kt)("h3",{id:"success-messages"},"Success messages"),(0,o.kt)("p",null,"Inform the user about the successful completion of an action or a task."),(0,o.kt)("h3",{id:"information-messages"},"Information messages"),(0,o.kt)("p",null,"Inform the user about something that could interest him but does not need an interaction from the his part; the message\nmight suggest a following action."),(0,o.kt)("h3",{id:"warning-messages"},"Warning messages"),(0,o.kt)("p",null,"Inform the user about the consequences of an action or decision he is about to do or to take, and that might need his\nconfirmation. An action might be suggested to the user."),(0,o.kt)("h3",{id:"error-messages"},"Error messages"),(0,o.kt)("p",null,"Inform the user about an error that has occured and he should take notice of, might suggest a following action. An\naction might be suggested to the user."),(0,o.kt)("h2",{id:"icons"},"Icons"),(0,o.kt)("p",null,"The use of icons changes depends on the information they should transport. This visual indicator makes it easier for\npeople to understand the message."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Section",src:t(8235).Z,width:"624",height:"96"})))}m.isMDXComponent=!0},8931:function(e,s,t){"use strict";s.Z=t.p+"assets/images/colors-teaser-1b0a3f2fd79dafe8b6e956d6f9ad9ad3.png"},8235:function(e,s,t){"use strict";s.Z=t.p+"assets/images/icons-teaser-15784603e5e50f824f0f9e25c641b5f0.png"}}]);
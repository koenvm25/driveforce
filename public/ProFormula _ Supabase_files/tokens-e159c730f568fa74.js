(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9989],{55671:function(e,t,n){"use strict";var r=n(90849),s=n(90089),i=(n(27378),n(24246)),a=["children","colSpan","className","style"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t=e.body,n=e.head,r=e.className,s=e.containerClassName,a=e.borderless,c=e.headTrClasses,o=e.bodyClassName,u=e.style,l=["table-container"];s&&l.push(s),a&&l.push("table-container--borderless");var h=["table"];return r&&h.push(r),(0,i.jsx)("div",{className:l.join(" "),children:(0,i.jsxs)("table",{className:h.join(" "),style:u,children:[(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{className:c,children:n})}),(0,i.jsx)("tbody",{className:o,children:t})]})})}u.th=function(e){var t=e.children,n=e.className,r=e.style,s=["p-3 px-4 text-left"];return n&&s.push(n),(0,i.jsx)("th",{className:s.join(" "),style:r,children:t})},u.td=function(e){var t=e.children,n=e.colSpan,r=e.className,c=e.style,u=(0,s.Z)(e,a);return(0,i.jsx)("td",o(o({className:r,colSpan:n,style:c},u),{},{children:t}))},u.tr=function(e){var t=e.children,n=e.className,r=e.onClick,s=e.style,a=e.hoverable,c=[n];return(r||a)&&c.push("tr--link"),(0,i.jsx)("tr",{className:c.join(" "),onClick:r,style:s,children:t})},t.Z=u},66745:function(e,t,n){"use strict";n.d(t,{hV:function(){return f}});var r=n(90089),s=n(55732),i=n(34707),a=n.n(i),c=n(36492),o=n(14919),u=n(20796),l=(n(27378),n(67527)),h=["enabled"];function d(e){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.U2)("".concat(u.T5,"/profile/access-tokens"),{signal:t});case 2:if(!(n=e.sent).error){e.next=5;break}throw n.error;case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(e.enabled,(0,r.Z)(e,h));return(0,c.a)(l.C.list(),(function(e){return d(e.signal)}),t)}},67527:function(e,t,n){"use strict";n.d(t,{C:function(){return r}});var r={list:function(){return["access-tokens"]}}},8271:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(80172),s=n(55732),i=n(34707),a=n.n(i),c=n(27378),o=n(88983),u=n(42791),l=n(66745),h=n(90849),d=n(90089),p=n(85945),f=n(48228),b=n(14919),m=n(20796),v=n(67527),x=["onSuccess"];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){return k.apply(this,arguments)}function k(){return(k=(0,s.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,(0,b.$v)("".concat(m.T5,"/profile/access-tokens/").concat(n));case 3:if(!(r=e.sent).error){e.next=6;break}throw r.error;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(25229),w=n(55671),N=n(63840),S=n(24246),C=(0,g.Pi)((function(){var e=(0,u.oR)().ui,t=(0,l.hV)(),n=t.data,r=t.isLoading,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onSuccess,n=(0,d.Z)(e,x),r=(0,p.NL)();return(0,f.D)((function(e){return O(e)}),y({onSuccess:function(e,n,i){return(0,s.Z)(a().mark((function s(){return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.invalidateQueries(v.C.list());case 2:return s.next=4,null===t||void 0===t?void 0:t(e,n,i);case 4:case"end":return s.stop()}}),s)})))()}},n))}(),h=i.mutateAsync,b=(0,c.useState)(!1),m=b[0],j=b[1],k=(0,c.useState)(void 0),g=k[0],C=k[1];function P(){return(P=(0,s.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h({id:n});case 3:j(!1),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e.setNotification({category:"error",message:"Failed to delete token: ".concat(t.t0.message)});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("div",{className:"max-w-7xl",children:(0,S.jsx)(w.Z,{head:[(0,S.jsx)(w.Z.th,{children:"Token"},"header-token"),(0,S.jsx)(w.Z.th,{children:"Name"},"header-name"),(0,S.jsx)(w.Z.th,{children:"Created"},"header-created"),(0,S.jsx)(w.Z.th,{},"header-action")],body:n&&0==n.length?(0,S.jsx)(w.Z.tr,{children:(0,S.jsx)(w.Z.td,{colSpan:5,className:"p-3 py-12 text-center",children:(0,S.jsx)("p",{className:"text-scale-1000",children:r?"Checking for tokens":"You do not have any tokens created yet"})})}):(0,S.jsx)(S.Fragment,{children:null===n||void 0===n?void 0:n.map((function(e){return(0,S.jsxs)(w.Z.tr,{children:[(0,S.jsx)(w.Z.td,{children:(0,S.jsx)("span",{className:"font-mono",children:e.token_alias})}),(0,S.jsx)(w.Z.td,{children:e.name}),(0,S.jsx)(w.Z.td,{children:(0,S.jsx)("p",{children:new Date(e.created_at).toLocaleString()})}),(0,S.jsx)(w.Z.td,{children:(0,S.jsx)(o.zxk,{as:"span",type:"danger",title:"delete token",onClick:function(){C(e),j(!0)},icon:(0,S.jsx)(o.IT9,{})})})]},e.token_alias)}))})})}),(0,S.jsx)(N.Z,{visible:m,danger:!0,header:"Confirm to delete",buttonLabel:"Delete",onSelectCancel:function(){return j(!1)},onSelectConfirm:function(){g&&function(e){P.apply(this,arguments)}(g.id)},children:(0,S.jsx)(o.u_l.Content,{children:(0,S.jsx)("p",{className:"py-4 text-sm text-scale-1100",children:'This action cannot be undone. Are you sure you want to delete "'.concat(null===g||void 0===g?void 0:g.name,'" token?')})})})]})})),P=C,Z=["onSuccess"];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,h.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e){return E.apply(this,arguments)}function E(){return(E=(0,s.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,e.next=3,(0,b.v_)("".concat(m.T5,"/profile/access-tokens"),{name:n});case 3:if(!(r=e.sent).error){e.next=6;break}throw r.error;case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onSuccess,n=(0,d.Z)(e,Z),r=(0,p.NL)();return(0,f.D)((function(e){return D(e)}),_({onSuccess:function(e,n,i){return(0,s.Z)(a().mark((function s(){return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.invalidateQueries(v.C.list());case 2:return s.next=4,null===t||void 0===t?void 0:t(e,n,i);case 4:case"end":return s.stop()}}),s)})))()}},n))},T=(0,g.Pi)((function(){var e=(0,u.oR)().ui,t=(0,c.useState)(!1),n=t[0],r=t[1],i=(0,c.useState)(void 0),l=i[0],h=i[1],d=M().mutateAsync;function p(){return(p=(0,s.Z)(a().mark((function t(n,s){var i,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=s.setSubmitting)(!0),t.prev=2,t.next=5,d({name:n.tokenName});case 5:c=t.sent,h(c),i(!1),r(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(2),e.setNotification({category:"error",message:"Failed to create token: ".concat(t.t0.message)}),i(!1);case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(o.zxk,{onClick:function(){h(void 0),r(!n)},children:"Generate new token"}),l&&(0,S.jsx)(I,{data:l}),(0,S.jsx)(o.u_l,{closable:!0,hideFooter:!0,size:"small",visible:n,onCancel:function(){return r(!n)},header:(0,S.jsx)("div",{className:"flex items-baseline gap-2",children:(0,S.jsx)("h5",{className:"text-sm text-scale-1200",children:"Generate New Token"})}),children:(0,S.jsx)(o.l09,{validateOnBlur:!0,initialValues:{tokenName:""},onSubmit:function(e,t){return p.apply(this,arguments)},validate:function(e){var t={};return e.tokenName||(t.tokenName="Please enter a name for the token"),t},children:function(e){var t=e.isSubmitting;return(0,S.jsxs)("div",{className:"py-3 space-y-4",children:[(0,S.jsx)(o.u_l.Content,{children:(0,S.jsx)(o.IIB,{id:"tokenName",label:"Name",placeholder:"Type in the token name",className:"w-full"})}),(0,S.jsx)(o.u_l.Separator,{}),(0,S.jsx)(o.u_l.Content,{children:(0,S.jsx)(o.zxk,{htmlType:"submit",loading:t,size:"small",block:!0,danger:!0,children:"Generate Token"})})]})}})})]})})),L=T,I=(0,g.Pi)((function(e){var t=e.data;return(0,S.jsx)(o.bZj,{withIcon:!0,variant:"success",title:"Successfully generated a new token!",children:(0,S.jsxs)("div",{className:"w-full space-y-2",children:[(0,S.jsx)("p",{className:"text-sm",children:"Do copy this access token and store it in a secure place - you will not be able to see it again."}),(0,S.jsx)(o.IIB,{copy:!0,readOnly:!0,size:"small",className:"max-w-xl input-mono",value:t.token,onChange:function(){}})]})})})),V=function(){return(0,S.jsxs)("div",{className:"mt-4 space-y-8 p-4 pt-0",children:[(0,S.jsx)("h2",{className:"text-xl",children:"Access Tokens"}),(0,S.jsx)(L,{}),(0,S.jsx)(P,{})]})};V.getLayout=function(e){return(0,S.jsx)(r.p0,{title:"Supabase",breadcrumbs:[{key:"supabase-account-tokens",label:"Access Tokens"}],children:e})};var z=V},22627:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/tokens",function(){return n(8271)}])},48228:function(e,t,n){"use strict";n.d(t,{D:function(){return d}});var r=n(27378),s=n(464),i=n(89886),a=n(30081),c=n(33989),o=n(32161);class u extends c.l{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){const t=this.options;this.options=this.client.defaultMutationOptions(e),(0,o.VS)(t,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this})}onUnsubscribe(){var e;this.listeners.length||(null==(e=this.currentMutation)||e.removeObserver(this))}onMutationUpdate(e){this.updateResult();const t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:"undefined"!==typeof e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:(0,i.R)(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){a.V.batch((()=>{var t,n,r,s;if(this.mutateOptions)if(e.onSuccess)null==(t=(n=this.mutateOptions).onSuccess)||t.call(n,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(r=(s=this.mutateOptions).onSettled)||r.call(s,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context);else if(e.onError){var i,a,c,o;null==(i=(a=this.mutateOptions).onError)||i.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(c=(o=this.mutateOptions).onSettled)||c.call(o,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}e.listeners&&this.listeners.forEach((e=>{e(this.currentResult)}))}))}}var l=n(85945),h=n(24798);function d(e,t,n){const i=(0,o.lV)(e,t,n),c=(0,l.NL)({context:i.context}),[d]=r.useState((()=>new u(c,i)));r.useEffect((()=>{d.setOptions(i)}),[d,i]);const f=(0,s.$)(r.useCallback((e=>d.subscribe(a.V.batchCalls(e))),[d]),(()=>d.getCurrentResult()),(()=>d.getCurrentResult())),b=r.useCallback(((e,t)=>{d.mutate(e,t).catch(p)}),[d]);if(f.error&&(0,h.L)(d.options.useErrorBoundary,[f.error]))throw f.error;return{...f,mutate:b,mutateAsync:f.mutate}}function p(){}}},function(e){e.O(0,[5813,9731,7571,9774,2888,179],(function(){return t=22627,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=tokens-e159c730f568fa74.js.map
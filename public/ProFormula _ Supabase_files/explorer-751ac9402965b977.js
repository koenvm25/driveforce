(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6526],{51856:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(24246),o=r(27378),i=r(23615),a=r.n(i);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=(0,o.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,i=e.size,a=void 0===i?24:i,u=c(e,["color","size"]);return o.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),o.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),o.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));u.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},u.displayName="BookOpen";var l=r(49204);function f(e){return(0,n.jsx)(l.Z,Object.assign({icon:u},e),void 0)}},93687:function(e,t,r){"use strict";var n=r(88983),o=r(24246);t.Z=function(e){var t=e.subtitle;return(0,o.jsx)("div",{className:["flex flex-col gap-8 transition-all pb-6"].join(" "),children:(0,o.jsxs)("div",{className:"flex items-center gap-3",children:[(0,o.jsx)("div",{className:"flex h-6 w-6 items-center justify-center rounded border border-brand-600 bg-brand-300 text-brand-900 ",children:(0,o.jsx)(n.ZdG,{size:14,strokeWidth:3})}),(0,o.jsx)("h1",{className:"text-2xl text-scale-1200",children:"Logs Explorer"}),t&&(0,o.jsx)("span",{className:"text-2xl text-scale-1100",children:t})]})})}},35835:function(e,t,r){"use strict";var n=r(90849),o=r(36492),i=r(99099),a=r(27378),s=r(20796),c=r(14919);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,i.PJ)(i.up),n=(0,a.useState)({sql:(null===t||void 0===t?void 0:t.sql)||"",project:e,iso_timestamp_start:t.iso_timestamp_start?t.iso_timestamp_start:r.calcFrom(),iso_timestamp_end:t.iso_timestamp_end?t.iso_timestamp_end:r.calcTo()}),u=n[0],f=n[1],p="undefined"!==typeof e&&Boolean(u.sql),d=(0,i.GT)(u),y=(0,o.a)(["projects",e,"logs",d],(function(t){var r=t.signal;return(0,c.U2)("".concat(s.T5,"/projects/").concat(e,"/analytics/endpoints/logs.all?").concat(d),{signal:r})}),{enabled:p,refetchOnWindowFocus:!1}),h=y.data,v=y.error,m=y.isLoading,g=y.isRefetching,b=y.refetch,j=v?v.message:null;!j&&null!==h&&void 0!==h&&h.error&&(j=null===h||void 0===h?void 0:h.error);var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";f((function(t){return l(l({},t),{},{sql:e})}))};return[{params:u,isLoading:p&&m||g,logData:null!==h&&void 0!==h&&h.result?null===h||void 0===h?void 0:h.result:[],error:j},{changeQuery:O,runQuery:function(){return b()},setParams:f}]}},60942:function(e,t,r){"use strict";r.r(t),r.d(t,{LogsExplorerPage:function(){return E}});var n=r(55732),o=r(90849),i=r(11246),a=r(34707),s=r.n(a),c=r(27693),u=r.n(c),l=r(27378),f=r(86677),p=r(25229),d=r(88983),y=r(42791),h=r(35835),v=r(51896),m=r(98574),g=r(80172),b=r(69060),j=r(71714),O=r(73998),_=r(99099),w=r(968),x=r(33244),k=r(93687),P=r(24246);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=function(){var e=(0,y.oR)(),t=e.ui,r=e.content,o=(0,f.useRouter)(),a=(0,y.UO)(),c=a.ref,p=a.q,g=a.ite,S=a.its,E=(0,l.useState)((0,m.k$)()),N=E[0],R=E[1],F=(0,l.useState)(""),q=F[0],T=F[1],L=(0,l.useState)(!1),A=L[0],U=L[1],I=(0,l.useState)([]),D=I[0],Z=I[1],z=(0,v.S2)({projectRef:c}).data,M=null===z||void 0===z?void 0:z.tier,B=(0,h.Z)(c,{iso_timestamp_start:S||void 0,iso_timestamp_end:g||void 0}),V=(0,i.Z)(B,2),$=V[0],W=$.params,Q=$.logData,H=$.error,G=$.isLoading,J=V[1],X=J.changeQuery,K=J.runQuery,Y=J.setParams,ee=(0,w._)(W.iso_timestamp_start),te=ee.showUpgradePrompt,re=ee.setShowUpgradePrompt;(0,l.useEffect)((function(){p&&ne({mode:"custom",searchString:p})}),[]),(0,l.useEffect)((function(){var e=[],t=W.iso_timestamp_start?u()(W.iso_timestamp_start):u()(),r=W.iso_timestamp_end?u()(W.iso_timestamp_end):u()(),n=Math.abs(t.diff(r,"days"));q&&!q.includes("limit")&&n>_.$K&&e.push({text:"When querying large date ranges, include a LIMIT clause."}),Z(e)}),[q,W.iso_timestamp_start,W.iso_timestamp_end]),(0,l.useEffect)((function(){S&&((0,_.dP)(S,null===M||void 0===M?void 0:M.key)&&re(!te))}),[S,M]);var ne=function(e){T(e.searchString),X(e.searchString),R((0,m.k$)()),o.push({pathname:o.pathname,query:C(C({},o.query),{},{q:e.searchString})}),r.addRecentLogSqlSnippet({sql:e.searchString})},oe=function(e){var t="string"===typeof e&&e||q;e&&"string"===typeof e&&T(e),X(t),K(),o.push({pathname:o.pathname,query:C(C({},o.query),{},{q:t})}),r.addRecentLogSqlSnippet({sql:t})};return(0,P.jsxs)("div",{className:"w-full h-full px-5 py-6 mx-auto",children:[(0,P.jsx)(k.Z,{}),(0,P.jsxs)("div",{className:"flex flex-col flex-grow h-full gap-4",children:[(0,P.jsxs)("div",{className:"border rounded",children:[(0,P.jsx)(_.dL,{defaultFrom:W.iso_timestamp_start||"",defaultTo:W.iso_timestamp_end||"",onDateChange:function(e){var t=e.to,r=e.from;(0,_.dP)(r,null===M||void 0===M?void 0:M.key)?re(!te):(Y((function(e){return C(C({},e),{},{iso_timestamp_start:r||"",iso_timestamp_end:t||""})})),o.push({pathname:o.pathname,query:C(C({},o.query),{},{its:r||"",ite:t||""})}))},onSelectSource:function(e){T((function(t){return t+e})),R((0,m.k$)())},onClear:function(){T(""),R((0,m.k$)()),X("")},onRun:oe,hasEditorValue:Boolean(q),templates:_.xN.filter((function(e){return"custom"===e.mode})),onSelectTemplate:ne,onSave:function(){U(!A)},isLoading:G,warnings:D}),(0,P.jsxs)("div",{className:"h-48 min-h-[7rem]",children:[(0,P.jsx)(j.Z,{active:G}),(0,P.jsx)(b.ZP,{id:N,language:"pgsql",defaultValue:q,onInputChange:function(e){return T(e||"")},onInputRun:oe})]})]}),(0,P.jsxs)("div",{className:"relative flex flex-col flex-grow",children:[(0,P.jsx)(O.Z,{active:G,children:(0,P.jsx)("div",{className:"flex flex-grow h-full",children:(0,P.jsx)(_.ol,{params:W,data:Q,error:H,projectRef:c})})}),(0,P.jsx)("div",{className:"flex flex-row justify-end mt-2",children:(0,P.jsx)(x.Z,{show:te,setShowUpgradePrompt:re})})]})]}),(0,P.jsx)(d.u_l,{size:"medium",onCancel:function(){return U(!A)},header:"Save log query",visible:A,hideFooter:!0,children:(0,P.jsx)(d.l09,{initialValues:{name:"",desdcription:""},onSubmit:function(){var e=(0,n.Z)(s().mark((function e(n,o){var i,a,c,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=o.setSubmitting)(!0),a={name:n.name,description:n.description||"",type:"log_sql",content:{content_id:N,sql:q,schema_version:"1",favorite:!1},visibility:"user"},e.prev=3,e.next=6,r.create(a);case 6:if(c=e.sent,c.data,!(u=c.error)){e.next=11;break}throw u;case 11:i(!1),U(!1),t.setNotification({category:"success",message:'Saved "'.concat(n.name,'" log query')}),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(3),console.error(e.t0),i(!1),U(!1),t.setNotification({error:e.t0,category:"error",message:"Failed to save query: ".concat(e.t0.message)});case 22:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t,r){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{className:"py-4",children:(0,P.jsx)(d.u_l.Content,{children:(0,P.jsxs)("div",{className:"space-y-6",children:[(0,P.jsx)(d.IIB,{layout:"horizontal",label:"Name",id:"name"}),(0,P.jsx)("div",{className:"text-area-text-sm",children:(0,P.jsx)(d.IIB.TextArea,{layout:"horizontal",labelOptional:"Optional",label:"Description",id:"description",rows:2})})]})})}),(0,P.jsx)("div",{className:"py-3 border-t bg-scale-300",children:(0,P.jsx)(d.u_l.Content,{children:(0,P.jsxs)("div",{className:"flex items-center justify-end gap-2",children:[(0,P.jsx)(d.zxk,{size:"tiny",type:"default",onClick:function(){return U(!A)},children:"Cancel"}),(0,P.jsx)(d.zxk,{size:"tiny",loading:t,htmlType:"submit",children:"Save"})]})})})]})}})})]})};E.getLayout=function(e){return(0,P.jsx)(g.Uj,{children:e})},t.default=(0,p.Pi)(E)},31704:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[ref]/logs/explorer",function(){return r(60942)}])},15724:function(e,t,r){e.exports=r(9548)},48268:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(27378),a=(n=i)&&n.__esModule?n:{default:n},s=r(97213),c=r(74290);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={},r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return s.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,r=e.headers,n=e.separator,o=e.enclosingCharacter,i=e.uFEFF,a=e.target,s=e.specs,c=e.replace;this.state.page=window.open(this.buildURI(t,i,r,n,o),a,s,c)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(a.default.Component);u.defaultProps=Object.assign(c.defaultProps,{target:"_blank"}),u.propTypes=c.propTypes,t.default=u},93329:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(27378),s=(n=a)&&n.__esModule?n:{default:n},c=r(97213),u=r(74290);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.buildURI=r.buildURI.bind(r),r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var r=this.props,n=r.data,o=r.headers,i=r.separator,a=r.filename,s=r.enclosingCharacter,u=r.uFEFF,l=t&&"function"===typeof n?n():n,f=new Blob([u?"\ufeff":"",(0,c.toCSV)(l,o,i,s)]);return window.navigator.msSaveBlob(f,a),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(r){!1!==r?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.data,n=t.headers,i=t.separator,a=t.filename,c=t.uFEFF,u=t.children,l=(t.onClick,t.asyncOnClick,t.enclosingCharacter),f=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),p="undefined"===typeof window?"":this.buildURI(r,c,n,i,l);return s.default.createElement("a",o({download:a},f,{ref:function(t){return e.link=t},target:"_self",href:p,onClick:this.handleClick()}),u)}}]),t}(s.default.Component);l.defaultProps=u.defaultProps,l.propTypes=u.propTypes,t.default=l},97213:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var o=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},i=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":r(e))&&!(e instanceof Array)}))},a=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},s=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(n(e),n(t)))}),[]))},c=t.jsons2arrays=function(e,t){var r=t=t||s(e),o=t;i(t)&&(r=t.map((function(e){return e.label})),o=t.map((function(e){return e.key})));var a=e.map((function(e){return o.map((function(t){return u(t,e)}))}));return[r].concat(n(a))},u=t.getHeaderValue=function(e,t){var r=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,r,n){var o=e[t];if(void 0!==o&&null!==o)return o;n.splice(1)}),t);return void 0===r?e in t?t[e]:"":r},l=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},f=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return l(e)})).map((function(e){return""+r+e+r})).join(t)})).join("\n")},p=t.arrays2csv=function(e,t,r,o){return f(t?[t].concat(n(e)):e,r,o)},d=t.jsons2csv=function(e,t,r,n){return f(c(e,t),r,n)},y=t.string2csv=function(e,t,r,n){return t?t.join(r)+"\n"+e:e.replace(/"/g,'""')},h=t.toCSV=function(e,t,r,n){if(i(e))return d(e,t,r,n);if(a(e))return p(e,t,r,n);if("string"===typeof e)return y(e,t,r);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,r,n,i){var a=h(e,r,n,i),s=o()?"application/csv":"text/csv",c=new Blob([t?"\ufeff":"",a],{type:s}),u="data:"+s+";charset=utf-8,"+(t?"\ufeff":"")+a,l=window.URL||window.webkitURL;return"undefined"===typeof l.createObjectURL?u:l.createObjectURL(c)}},9548:function(e,t,r){"use strict";t.CSVLink=void 0;var n=i(r(48268)),o=i(r(93329));function i(e){return e&&e.__esModule?e:{default:e}}n.default,t.CSVLink=o.default},74290:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var n,o=r(27378),i=((n=o)&&n.__esModule,r(23615));t.propTypes={data:(0,i.oneOfType)([i.string,i.array,i.func]).isRequired,headers:i.array,target:i.string,separator:i.string,filename:i.string,uFEFF:i.bool,onClick:i.func,asyncOnClick:i.bool,enclosingCharacter:i.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]}},function(e){e.O(0,[5813,9731,2367,4596,7908,7571,9099,1251,9774,2888,179],(function(){return t=31704,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=explorer-751ac9402965b977.js.map
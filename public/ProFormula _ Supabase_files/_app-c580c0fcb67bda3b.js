from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,I=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,N=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,L=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${I} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${N} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,z=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,V=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Z=b("div")`
  position: absolute;
`,U=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,G=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${G} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?n.createElement(q,null,t):t:"blank"===r?null:n.createElement(U,null,n.createElement(F,{...o}),"loading"!==r&&n.createElement(Z,null,"error"===r?n.createElement(L,{...o}):n.createElement(V,{...o})))},H=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,W=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,K=b("div",n.forwardRef)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Y=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=n.memo((({toast:e,position:t,style:r,children:o})=>{let i=null!=e&&e.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,o]=x()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[H(r),W(r)];return{animation:t?`${y(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},a=n.createElement($,{toast:e}),s=n.createElement(Y,{...e.ariaProps},w(e.message,e));return n.createElement(K,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof o?o({icon:a,message:s}):n.createElement(n.Fragment,null,a,s))}));!function(e,t,r,n){u.p=t,v=e,m=r,g=n}(n.createElement);var Q=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,J=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:i,containerStyle:a,containerClassName:s})=>{let{toasts:c,handlers:u}=R(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...a},className:s,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map((r=>{let a=r.position||t,s=((e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:x()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...o}})(a,u.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t})),c=r.height?void 0:(e=>t=>{t&&setTimeout((()=>{let r=t.getBoundingClientRect();e(r)}))})((e=>{u.updateHeight(r.id,e.height)}));return n.createElement("div",{ref:c,className:r.visible?Q:"",key:r.id,style:s},"custom"===r.type?w(r.message,r):i?i(r):n.createElement(X,{toast:r,position:a}))})))},ee=A},15761:function(e,t,r){"use strict";r.d(t,{j:function(){return a}});var n=r(33989),o=r(32161);class i extends n.l{constructor(){super(),this.setup=e=>{if(!o.sk&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var e;this.hasListeners()||(null==(e=this.cleanup)||e.call(this),this.cleanup=void 0)}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e((e=>{"boolean"===typeof e?this.setFocused(e):this.onFocus()}))}setFocused(e){this.focused=e,e&&this.onFocus()}onFocus(){this.listeners.forEach((e=>{e()}))}isFocused(){return"boolean"===typeof this.focused?this.focused:"undefined"===typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}const a=new i},9499:function(e,t,r){"use strict";function n(){return{onFetch:e=>{e.fetchFn=()=>{var t,r,n,a,s,c;const u=null==(t=e.fetchOptions)||null==(r=t.meta)?void 0:r.refetchPage,l=null==(n=e.fetchOptions)||null==(a=n.meta)?void 0:a.fetchMore,f=null==l?void 0:l.pageParam,p="forward"===(null==l?void 0:l.direction),d="backward"===(null==l?void 0:l.direction),h=(null==(s=e.state.data)?void 0:s.pages)||[],v=(null==(c=e.state.data)?void 0:c.pageParams)||[];let m=v,g=!1;const y=e.options.queryFn||(()=>Promise.reject("Missing queryFn")),b=(e,t,r,n)=>(m=n?[t,...m]:[...m,t],n?[r,...e]:[...e,r]),w=(t,r,n,o)=>{if(g)return Promise.reject("Cancelled");if("undefined"===typeof n&&!r&&t.length)return Promise.resolve(t);const i={queryKey:e.queryKey,pageParam:n,meta:e.options.meta};var a;a=i,Object.defineProperty(a,"signal",{enumerable:!0,get:()=>{var t,r;return null!=(t=e.signal)&&t.aborted?g=!0:null==(r=e.signal)||r.addEventListener("abort",(()=>{g=!0})),e.signal}});const s=y(i);return Promise.resolve(s).then((e=>b(t,n,e,o)))};let O;if(h.length)if(p){const t="undefined"!==typeof f,r=t?f:o(e.options,h);O=w(h,t,r)}else if(d){const t="undefined"!==typeof f,r=t?f:i(e.options,h);O=w(h,t,r,!0)}else{m=[];const t="undefined"===typeof e.options.getNextPageParam;O=!u||!h[0]||u(h[0],0,h)?w([],t,v[0]):Promise.resolve(b([],v[0],h[0]));for(let r=1;r<h.length;r++)O=O.then((n=>{if(!u||!h[r]||u(h[r],r,h)){const i=t?v[r]:o(e.options,n);return w(n,t,i)}return Promise.resolve(b(n,v[r],h[r]))}))}else O=w([]);return O.then((e=>({pages:e,pageParams:m})))}}}}function o(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}function i(e,t){return null==e.getPreviousPageParam?void 0:e.getPreviousPageParam(t[0],t)}function a(e,t){if(e.getNextPageParam&&Array.isArray(t)){const r=o(e,t);return"undefined"!==typeof r&&null!==r&&!1!==r}}function s(e,t){if(e.getPreviousPageParam&&Array.isArray(t)){const r=i(e,t);return"undefined"!==typeof r&&null!==r&&!1!==r}}r.d(t,{Qy:function(){return a},ZF:function(){return s},Gm:function(){return n}})},30819:function(e,t,r){"use strict";r.d(t,{_:function(){return n}});const n=console},89886:function(e,t,r){"use strict";r.d(t,{m:function(){return s},R:function(){return c}});var n=r(30819),o=r(30081),i=r(89643),a=r(72379);class s extends i.F{constructor(e){super(),this.options={...e.defaultOptions,...e.options},this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||n._,this.observers=[],this.state=e.state||c(),this.updateCacheTime(this.options.cacheTime),this.scheduleGc()}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){-1===this.observers.indexOf(e)&&(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter((t=>t!==e)),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()}async execute(){const e=()=>{var e;return this.retryer=(0,a.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},t="loading"===this.state.status;try{var r,n,o,i,s,c;if(!t){var u,l,f,p;this.dispatch({type:"loading",variables:this.options.variables}),await(null==(u=(l=this.mutationCache.config).onMutate)?void 0:u.call(l,this.state.variables,this));const e=await(null==(f=(p=this.options).onMutate)?void 0:f.call(p,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}const a=await e();return await(null==(r=(n=this.mutationCache.config).onSuccess)?void 0:r.call(n,a,this.state.variables,this.state.context,this)),await(null==(o=(i=this.options).onSuccess)?void 0:o.call(i,a,this.state.variables,this.state.context)),await(null==(s=(c=this.options).onSettled)?void 0:s.call(c,a,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:a}),a}catch(b){try{var d,h,v,m,g,y;throw await(null==(d=(h=this.mutationCache.config).onError)?void 0:d.call(h,b,this.state.variables,this.state.context,this)),await(null==(v=(m=this.options).onError)?void 0:v.call(m,b,this.state.variables,this.state.context)),await(null==(g=(y=this.options).onSettled)?void 0:g.call(y,void 0,b,this.state.variables,this.state.context)),b}finally{this.dispatch({type:"error",error:b})}}}dispatch(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,a.Kw)(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}})(this.state),o.V.batch((()=>{this.observers.forEach((t=>{t.onMutationUpdate(e)})),this.mutationCache.notify({mutation:this,type:"updated",action:e})}))}}function c(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}},30081:function(e,t,r){"use strict";r.d(t,{V:function(){return o}});var n=r(32161);const o=function(){let e=[],t=0,r=e=>{e()},o=e=>{e()};const i=o=>{t?e.push(o):(0,n.A4)((()=>{r(o)}))},a=()=>{const t=e;e=[],t.length&&(0,n.A4)((()=>{o((()=>{t.forEach((e=>{r(e)}))}))}))};return{batch:e=>{let r;t++;try{r=e()}finally{t--,t||a()}return r},batchCalls:e=>(...t)=>{i((()=>{e(...t)}))},schedule:i,setNotifyFunction:e=>{r=e},setBatchNotifyFunction:e=>{o=e}}}()},96474:function(e,t,r){"use strict";r.d(t,{N:function(){return a}});var n=r(33989),o=r(32161);class i extends n.l{constructor(){super(),this.setup=e=>{if(!o.sk&&window.addEventListener){const t=()=>e();return window.addEventListener("online",t,!1),window.addEventListener("offline",t,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){var e;this.hasListeners()||(null==(e=this.cleanup)||e.call(this),this.cleanup=void 0)}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e((e=>{"boolean"===typeof e?this.setOnline(e):this.onOnline()}))}setOnline(e){this.online=e,e&&this.onOnline()}onOnline(){this.listeners.forEach((e=>{e()}))}isOnline(){return"boolean"===typeof this.online?this.online:"undefined"===typeof navigator||"undefined"===typeof navigator.onLine||navigator.onLine}}const a=new i},52924:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var n=r(32161),o=r(30081),i=r(15761),a=r(33989),s=r(72379);class c extends a.l{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.length&&(this.currentQuery.addObserver(this),u(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return l(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return l(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const r=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,n.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const i=this.hasListeners();i&&f(this.currentQuery,o,this.options,r)&&this.executeFetch(),this.updateResult(t),!i||this.currentQuery===o&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout();const a=this.computeRefetchInterval();!i||this.currentQuery===o&&this.options.enabled===r.enabled&&a===this.currentRefetchInterval||this.updateRefetchInterval(a)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e);return this.createResult(t,e)}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach((r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})})),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then((()=>this.createResult(r,t)))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then((()=>(this.updateResult(),this.currentResult)))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(n.ZT)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),n.sk||this.currentResult.isStale||!(0,n.PN)(this.options.staleTime))return;const e=(0,n.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((()=>{this.currentResult.isStale||this.updateResult()}),e)}computeRefetchInterval(){var e;return"function"===typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!n.sk&&!1!==this.options.enabled&&(0,n.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval((()=>{(this.options.refetchIntervalInBackground||i.j.isFocused())&&this.executeFetch()}),this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const r=this.currentQuery,o=this.options,i=this.currentResult,a=this.currentResultState,c=this.currentResultOptions,l=e!==r,d=l?e.state:this.currentQueryInitialState,h=l?this.currentResult:this.previousQueryResult,{state:v}=e;let m,{dataUpdatedAt:g,error:y,errorUpdatedAt:b,fetchStatus:w,status:O}=v,x=!1,E=!1;if(t._optimisticResults){const n=this.hasListeners(),i=!n&&u(e,t),a=n&&f(e,r,t,o);(i||a)&&(w=(0,s.Kw)(e.options.networkMode)?"fetching":"paused",g||(O="loading")),"isRestoring"===t._optimisticResults&&(w="idle")}if(t.keepPreviousData&&!v.dataUpdatedAt&&null!=h&&h.isSuccess&&"error"!==O)m=h.data,g=h.dataUpdatedAt,O=h.status,x=!0;else if(t.select&&"undefined"!==typeof v.data)if(i&&v.data===(null==a?void 0:a.data)&&t.select===this.selectFn)m=this.selectResult;else try{this.selectFn=t.select,m=t.select(v.data),m=(0,n.oE)(null==i?void 0:i.data,m,t),this.selectResult=m,this.selectError=null}catch(k){0,this.selectError=k}else m=v.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof m&&"loading"===O){let e;if(null!=i&&i.isPlaceholderData&&t.placeholderData===(null==c?void 0:c.placeholderData))e=i.data;else if(e="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof e)try{e=t.select(e),this.selectError=null}catch(k){0,this.selectError=k}"undefined"!==typeof e&&(O="success",m=(0,n.oE)(null==i?void 0:i.data,e,t),E=!0)}this.selectError&&(y=this.selectError,m=this.selectResult,b=Date.now(),O="error");const _="fetching"===w,S="loading"===O,j="error"===O;return{status:O,fetchStatus:w,isLoading:S,isSuccess:"success"===O,isError:j,isInitialLoading:S&&_,data:m,dataUpdatedAt:g,error:y,errorUpdatedAt:b,failureCount:v.fetchFailureCount,failureReason:v.fetchFailureReason,errorUpdateCount:v.errorUpdateCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>d.dataUpdateCount||v.errorUpdateCount>d.errorUpdateCount,isFetching:_,isRefetching:_&&!S,isLoadingError:j&&0===v.dataUpdatedAt,isPaused:"paused"===w,isPlaceholderData:E,isPreviousData:x,isRefetchError:j&&0!==v.dataUpdatedAt,isStale:p(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,n.VS)(r,t))return;this.currentResult=r;const o={cache:!0};!1!==(null==e?void 0:e.listeners)&&(()=>{if(!t)return!0;const{notifyOnChangeProps:e}=this.options;if("all"===e||!e&&!this.trackedProps.size)return!0;const r=new Set(null!=e?e:this.trackedProps);return this.options.useErrorBoundary&&r.add("error"),Object.keys(this.currentResult).some((e=>{const n=e;return this.currentResult[n]!==t[n]&&r.has(n)}))})()&&(o.listeners=!0),this.notify({...o,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,s.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){o.V.batch((()=>{var t,r,n,o;if(e.onSuccess)null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(n=(o=this.options).onSettled)||n.call(o,this.currentResult.data,null);else if(e.onError){var i,a,s,c;null==(i=(a=this.options).onError)||i.call(a,this.currentResult.error),null==(s=(c=this.options).onSettled)||s.call(c,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach((e=>{e(this.currentResult)})),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})}))}}function u(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||e.state.dataUpdatedAt>0&&l(e,t,t.refetchOnMount)}function l(e,t,r){if(!1!==t.enabled){const n="function"===typeof r?r(e):r;return"always"===n||!1!==n&&p(e,t)}return!1}function f(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&(!r.suspense||"error"!==e.state.status)&&p(e,r)}function p(e,t){return e.isStaleByTime(t.staleTime)}},89643:function(e,t,r){"use strict";r.d(t,{F:function(){return o}});var n=r(32161);class o{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,n.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout((()=>{this.optionalRemove()}),this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:n.sk?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}},72379:function(e,t,r){"use strict";r.d(t,{Kw:function(){return s},Mz:function(){return l},DV:function(){return u}});var n=r(15761),o=r(96474),i=r(32161);function a(e){return Math.min(1e3*2**e,3e4)}function s(e){return"online"!==(null!=e?e:"online")||o.N.isOnline()}class c{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function u(e){return e instanceof c}function l(e){let t,r,u,l=!1,f=0,p=!1;const d=new Promise(((e,t)=>{r=e,u=t})),h=()=>!n.j.isFocused()||"always"!==e.networkMode&&!o.N.isOnline(),v=n=>{p||(p=!0,null==e.onSuccess||e.onSuccess(n),null==t||t(),r(n))},m=r=>{p||(p=!0,null==e.onError||e.onError(r),null==t||t(),u(r))},g=()=>new Promise((r=>{t=e=>{if(p||!h())return r(e)},null==e.onPause||e.onPause()})).then((()=>{t=void 0,p||null==e.onContinue||e.onContinue()})),y=()=>{if(p)return;let t;try{t=e.fn()}catch(r){t=Promise.reject(r)}Promise.resolve(t).then(v).catch((t=>{var r,n;if(p)return;const o=null!=(r=e.retry)?r:3,s=null!=(n=e.retryDelay)?n:a,c="function"===typeof s?s(f,t):s,u=!0===o||"number"===typeof o&&f<o||"function"===typeof o&&o(f,t);!l&&u?(f++,null==e.onFail||e.onFail(f,t),(0,i.Gh)(c).then((()=>{if(h())return g()})).then((()=>{l?m(t):y()}))):m(t)}))};return s(e.networkMode)?y():g().then(y),{promise:d,cancel:t=>{p||(m(new c(t)),null==e.abort||e.abort())},continue:()=>{null==t||t()},cancelRetry:()=>{l=!0},continueRetry:()=>{l=!1}}}},33989:function(e,t,r){"use strict";r.d(t,{l:function(){return n}});class n{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.push(e),this.onSubscribe(),()=>{this.listeners=this.listeners.filter((t=>t!==e)),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}},32161:function(e,t,r){"use strict";r.d(t,{SE:function(){return i},G9:function(){return S},yF:function(){return h},Rm:function(){return d},sk:function(){return n},PN:function(){return a},X7:function(){return p},_x:function(){return f},ZT:function(){return o},I6:function(){return l},lV:function(){return u},_v:function(){return c},to:function(){return v},oE:function(){return j},A4:function(){return _},VS:function(){return y},Gh:function(){return E},Kp:function(){return s}});const n="undefined"===typeof window||"Deno"in window;function o(){}function i(e,t){return"function"===typeof e?e(t):e}function a(e){return"number"===typeof e&&e>=0&&e!==1/0}function s(e,t){return Math.max(e+(t||0)-Date.now(),0)}function c(e,t,r){return x(e)?"function"===typeof t?{...r,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function u(e,t,r){return x(e)?"function"===typeof t?{...r,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:"function"===typeof e?{...t,mutationFn:e}:{...e}}function l(e,t,r){return x(e)?[{...t,queryKey:e},r]:[e||{},t]}function f(e,t){const{type:r="all",exact:n,fetchStatus:o,predicate:i,queryKey:a,stale:s}=e;if(x(a))if(n){if(t.queryHash!==d(a,t.options))return!1}else if(!v(t.queryKey,a))return!1;if("all"!==r){const e=t.isActive();if("active"===r&&!e)return!1;if("inactive"===r&&e)return!1}return("boolean"!==typeof s||t.isStale()===s)&&(("undefined"===typeof o||o===t.state.fetchStatus)&&!(i&&!i(t)))}function p(e,t){const{exact:r,fetching:n,predicate:o,mutationKey:i}=e;if(x(i)){if(!t.options.mutationKey)return!1;if(r){if(h(t.options.mutationKey)!==h(i))return!1}else if(!v(t.options.mutationKey,i))return!1}return("boolean"!==typeof n||"loading"===t.state.status===n)&&!(o&&!o(t))}function d(e,t){return((null==t?void 0:t.queryKeyHashFn)||h)(e)}function h(e){return JSON.stringify(e,((e,t)=>w(t)?Object.keys(t).sort().reduce(((e,r)=>(e[r]=t[r],e)),{}):t))}function v(e,t){return m(e,t)}function m(e,t){return e===t||typeof e===typeof t&&(!(!e||!t||"object"!==typeof e||"object"!==typeof t)&&!Object.keys(t).some((r=>!m(e[r],t[r]))))}function g(e,t){if(e===t)return e;const r=b(e)&&b(t);if(r||w(e)&&w(t)){const n=r?e.length:Object.keys(e).length,o=r?t:Object.keys(t),i=o.length,a=r?[]:{};let s=0;for(let c=0;c<i;c++){const n=r?c:o[c];a[n]=g(e[n],t[n]),a[n]===e[n]&&s++}return n===i&&s===n?e:a}return t}function y(e,t){if(e&&!t||t&&!e)return!1;for(const r in e)if(e[r]!==t[r])return!1;return!0}function b(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function w(e){if(!O(e))return!1;const t=e.constructor;if("undefined"===typeof t)return!0;const r=t.prototype;return!!O(r)&&!!r.hasOwnProperty("isPrototypeOf")}function O(e){return"[object Object]"===Object.prototype.toString.call(e)}function x(e){return Array.isArray(e)}function E(e){return new Promise((t=>{setTimeout(t,e)}))}function _(e){E(0).then(e)}function S(){if("function"===typeof AbortController)return new AbortController}function j(e,t,r){return null!=r.isDataEqual&&r.isDataEqual(e,t)?e:"function"===typeof r.structuralSharing?r.structuralSharing(e,t):!1!==r.structuralSharing?g(e,t):t}},85945:function(e,t,r){"use strict";r.d(t,{aH:function(){return c},NL:function(){return s}});var n=r(27378);const o=n.createContext(void 0),i=n.createContext(!1);function a(e,t){return e||(t&&"undefined"!==typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=o),window.ReactQueryClientContext):o)}const s=({context:e}={})=>{const t=n.useContext(a(e,n.useContext(i)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},c=({client:e,children:t,context:r,contextSharing:o=!1})=>{n.useEffect((()=>(e.mount(),()=>{e.unmount()})),[e]);const s=a(r,o);return n.createElement(i.Provider,{value:!r&&o},n.createElement(s.Provider,{value:e},t))}},67187:function(e,t,r){"use strict";r.d(t,{r:function(){return f}});var n=r(27378),o=r(464),i=r(30081);function a(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const s=n.createContext(a());var c=r(85945);const u=n.createContext(!1);u.Provider;var l=r(24798);function f(e,t){const r=(0,c.NL)({context:e.context}),a=n.useContext(u),f=n.useContext(s),p=r.defaultQueryOptions(e);p._optimisticResults=a?"isRestoring":"optimistic",p.onError&&(p.onError=i.V.batchCalls(p.onError)),p.onSuccess&&(p.onSuccess=i.V.batchCalls(p.onSuccess)),p.onSettled&&(p.onSettled=i.V.batchCalls(p.onSettled)),(e=>{e.suspense&&"number"!==typeof e.staleTime&&(e.staleTime=1e3)})(p),((e,t)=>{(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))})(p,f),(e=>{n.useEffect((()=>{e.clearReset()}),[e])})(f);const[d]=n.useState((()=>new t(r,p))),h=d.getOptimisticResult(p);if((0,o.$)(n.useCallback((e=>a?()=>{}:d.subscribe(i.V.batchCalls(e))),[d,a]),(()=>d.getCurrentResult()),(()=>d.getCurrentResult())),n.useEffect((()=>{d.setOptions(p,{listeners:!1})}),[p,d]),((e,t,r)=>(null==e?void 0:e.suspense)&&((e,t)=>e.isLoading&&e.isFetching&&!t)(t,r))(p,h,a))throw((e,t,r)=>t.fetchOptimistic(e).then((({data:t})=>{null==e.onSuccess||e.onSuccess(t),null==e.onSettled||e.onSettled(t,null)})).catch((t=>{r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)})))(p,d,f);if((({result:e,errorResetBoundary:t,useErrorBoundary:r,query:n})=>e.isError&&!t.isReset()&&!e.isFetching&&(0,l.L)(r,[e.error,n]))({result:h,errorResetBoundary:f,useErrorBoundary:p.useErrorBoundary,query:d.getCurrentQuery()}))throw h.error;return p.notifyOnChangeProps?h:d.trackResult(h)}},36492:function(e,t,r){"use strict";r.d(t,{a:function(){return a}});var n=r(32161),o=r(52924),i=r(67187);function a(e,t,r){const a=(0,n._v)(e,t,r);return(0,i.r)(a,o.z)}},464:function(e,t,r){"use strict";r.d(t,{$:function(){return n}});const n=r(70644).useSyncExternalStore},24798:function(e,t,r){"use strict";function n(e,t){return"function"===typeof e?e(...t):!!e}r.d(t,{L:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[9774,179],(function(){return t(74258),t(42043),t(35385),t(5477)}));var r=e.O();_N_E=r}]);
//# sourceMappingURL=_app-c580c0fcb67bda3b.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3327],{42810:function(e,r,s){"use strict";var n=s(79305),i=s(84151),a=s(24246);r.Z=function(e){return(0,n.Z)(e),(0,a.jsx)(i.Z,{title:"",footer:(0,a.jsx)("div",{className:"shimmering-loader rounded py-3 mx-1 w-1/3"}),children:(0,a.jsx)("div",{className:"flex flex-col justify-between space-y-2",children:(0,a.jsx)("div",{className:"shimmering-loader rounded py-3 mx-1 w-2/3"})})})}},62548:function(e,r,s){"use strict";s.d(r,{Z:function(){return j}});var n=s(79894),i=s(88983),a=s(25229),l=s(20796),t=s(42791),c=s(98574),o=s(84151),d=s(24246),x=function(e){var r=e.project,s=e.rewriteHref,n=r.name,a=r.ref,t="".concat(r.cloud_provider," | ").concat(r.region),c=r.status===l.S.GOING_DOWN,x=r.status===l.S.INACTIVE,u=r.status===l.S.RESTORING;return(0,d.jsx)("li",{className:"col-span-1",children:(0,d.jsx)(o.Z,{linkHref:s||"/project/".concat(a),title:(0,d.jsx)("div",{className:"flex w-full flex-row justify-between gap-1",children:(0,d.jsx)("span",{className:"flex-shrink truncate",children:n})}),footer:(0,d.jsxs)("div",{className:"flex items-end justify-between",children:[(0,d.jsx)("span",{className:"text-sm lowercase text-scale-1000",children:t}),u?(0,d.jsx)("div",{className:"grow text-right",children:(0,d.jsx)(i.Cts,{color:"brand",children:(0,d.jsxs)("div",{className:"flex items-center gap-2",children:[(0,d.jsx)(i.pAw,{className:"animate-spin",size:14,strokeWidth:2}),(0,d.jsx)("span",{className:"truncate",children:"Restoring"})]})})}):c?(0,d.jsx)("div",{className:"grow text-right",children:(0,d.jsx)(i.Cts,{color:"scale",children:(0,d.jsxs)("div",{className:"flex items-center gap-2",children:[(0,d.jsx)(i.pAw,{className:"animate-spin",size:14,strokeWidth:2}),(0,d.jsx)("span",{className:"truncate",children:"Pausing"})]})})}):x?(0,d.jsx)("div",{className:"grow text-right",children:(0,d.jsx)(i.Cts,{color:"scale",children:(0,d.jsxs)("div",{className:"flex items-center gap-2",children:[(0,d.jsx)(i._Xu,{size:14,strokeWidth:2}),(0,d.jsx)("span",{className:"truncate",children:"Paused"})]})})}):(0,d.jsx)(d.Fragment,{})]})})})},u=s(42810),h=s(68043),j=(0,a.Pi)((function(e){var r,s=e.rewriteHref,a=(0,t.oR)(),o=a.app,j=a.ui,m=o.organizations,p=o.projects,f=p.isLoading,g=!!l.Qy&&0===(null!==(r=null===j||void 0===j?void 0:j.permissions)&&void 0!==r?r:[]).length;return(0,d.jsx)(d.Fragment,{children:m.list().map((function(e){var r=e.id,a=e.name,l=e.slug,o=p.list((function(e){return e.organization_id==r})),j=0==(null===o||void 0===o?void 0:o.length),m=(0,t.FH)(h.KA.READ,"projects",void 0,r);return(0,d.jsxs)("div",{className:"space-y-3",children:[(0,d.jsx)("h4",{className:"text-lg",children:a}),g||f?(0,d.jsxs)("ul",{className:"mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3",children:[(0,d.jsx)(u.Z,{}),(0,d.jsx)(u.Z,{})]}):(0,d.jsx)("ul",{className:"mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3",children:m?j?(0,d.jsxs)("div",{className:"col-span-4 space-y-4 rounded-lg border-2 border-dashed border-gray-300 p-6 text-center",children:[(0,d.jsxs)("div",{className:"space-y-1",children:[(0,d.jsx)("p",{children:"No projects"}),(0,d.jsx)("p",{className:"text-sm text-scale-1100",children:"Get started by creating a new project."})]}),(0,d.jsx)("div",{children:(0,d.jsx)(n.default,{href:"/new/".concat(l),children:(0,d.jsx)("a",{children:(0,d.jsx)(i.zxk,{icon:(0,d.jsx)(i.SC9,{}),children:"New Project"})})})})]}):null===o||void 0===o?void 0:o.map((function(e){return(0,d.jsx)(x,{project:e,rewriteHref:s?s(e.ref):void 0},(0,c.pZ)(5))})):(0,d.jsx)("div",{className:"col-span-4 space-y-4 rounded-lg border-2 border-dashed border-gray-300 py-8 px-6 text-center",children:(0,d.jsxs)("div",{className:"space-y-1",children:[(0,d.jsx)("p",{children:"You need additional permissions to view projects from this organization"}),(0,d.jsx)("p",{className:"text-sm text-scale-1100",children:"Contact your organization owner or adminstrator for assistance."})]})})})]},(0,c.pZ)(5))}))})}))},84151:function(e,r,s){"use strict";var n=s(44285),i=(s(27378),s(88983)),a=s(79894),l=s(24246);r.Z=function(e){var r=e.title,s=e.description,t=e.children,c=e.footer,o=e.url,d=void 0===o?"":o,x=e.linkHref,u=void 0===x?"":x,h=e.imgUrl,j=e.imgAlt,m=e.onClick,p=e.icon,f=e.containerHeightClassName,g=function(e){var r=e.children;return(0,l.jsx)(a.default,{href:u,children:(0,l.jsx)("a",{children:r})})},v=function(e){var r=e.children;return(0,l.jsx)("a",{href:d,children:r})},N=function(e){var r=e.children;return(0,l.jsx)("div",{children:r})},b=function(e){var r=e.children;return(0,l.jsx)("button",{onClick:m,children:r})},w=d||u||m,y=["group relative text-left","bg-panel-header-light dark:bg-panel-header-dark","border border-panel-border-light dark:border-panel-border-dark","rounded-md py-4 px-6 flex flex-row","transition ease-in-out duration-150",void 0===f?"h-32":f];w&&(y=[].concat((0,n.Z)(y),["cursor-pointer","hover:bg-panel-border-light dark:hover:bg-panel-border-dark","hover:border-panel-border-hover-light","dark:hover:border-panel-border-hover-dark hover:border-gray-300"]));var k=function(e){var r=e.children;return(0,l.jsx)("div",{className:"mr-4 flex flex-col",children:r})},C=(0,l.jsxs)("div",{className:y.join(" "),children:[h&&(0,l.jsx)(k,{children:(0,l.jsx)("img",{className:" transition-all group-hover:scale-110 ",src:"".concat(h),alt:"".concat(j),width:"26"})}),p&&(0,l.jsx)(k,{children:p}),(0,l.jsxs)("div",{className:"flex h-full w-full flex-col space-y-2",children:[(0,l.jsx)("h5",{className:"text-scale-1200",children:r}),(t||s)&&(0,l.jsxs)("div",{className:"flex w-full flex-1 flex-col",children:[(0,l.jsx)("p",{className:"text-sm text-scale-1100",children:s}),(0,l.jsx)("div",{className:"w-full",children:t&&t})]}),c&&(0,l.jsx)("div",{className:"w-full",children:c})]}),w&&(0,l.jsx)("div",{className:" absolute right-4 top-4 text-scale-900 transition-all duration-200 group-hover:right-3 group-hover:text-scale-1200 ",children:(0,l.jsx)(i.VG8,{})})]});return m?(0,l.jsx)(b,{children:C}):u?(0,l.jsx)(g,{children:C}):d?(0,l.jsx)(v,{children:C}):(0,l.jsx)(N,{children:C})}},63849:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return m}});var n=s(62548),i=s(80172),a=(s(27378),s(86677)),l=s(79588),t=s(88983),c=s(25229),o=s(24246),d=(0,c.Pi)((function(e){var r=e.organizations,s=(0,a.useRouter)(),n=Object.values((0,l.ZN)(r.data)).sort((function(e,r){return e.name.localeCompare(r.name)}));return(0,o.jsx)(t.Ltx,{side:"bottom",align:"center",overlay:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.Ltx.Label,{children:"Choose organization"}),n.sort((function(e,r){return e.name.localeCompare(r.name)})).map((function(e){return(0,o.jsx)(t.Ltx.Item,{label:e.name,onClick:function(){return s.push("/new/".concat(e.slug))},children:e.name},e.slug)})),(0,o.jsx)(t.Ltx.Separator,{}),(0,o.jsx)(t.Ltx.Item,{icon:(0,o.jsx)(t.SC9,{size:"tiny"}),onClick:function(){return s.push("/new")},children:"New organization"})]}),children:(0,o.jsx)(t.zxk,{as:"span",children:"New project"})})})),x=s(62771),u=s(42791),h=s(20796),j=function(){var e=(0,u.oR)().app;return(0,o.jsx)(o.Fragment,{children:e.organizations.isLoading?(0,o.jsx)("div",{className:"flex h-full items-center justify-center space-x-2",children:(0,o.jsx)(x.Z,{})}):(0,o.jsxs)("div",{className:"py-4 px-5",children:[h.Qy&&(0,o.jsx)("div",{className:"my-2",children:(0,o.jsx)("div",{className:"flex",children:(0,o.jsx)("div",{className:"",children:(0,o.jsx)(d,{organizations:e.organizations})})})}),(0,o.jsx)("div",{className:"my-8 space-y-8",children:(0,o.jsx)(n.Z,{})})]})})};j.getLayout=function(e){return(0,o.jsx)(i.p0,{title:"Supabase",breadcrumbs:[{key:"supabase-projects",label:"Projects"}],children:e})};var m=(0,c.Pi)(j)},85811:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return s(63849)}])}},function(e){e.O(0,[5813,9731,7571,9774,2888,179],(function(){return r=85811,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
//# sourceMappingURL=projects-9a64278c1a36d950.js.map
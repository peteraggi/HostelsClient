(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89821],{517513:function(e,t,r){"use strict";r.d(t,{aV:function(){return g},ck:function(){return f},t6:function(){return _}});var n=r(4799),s=r(312253),a=r(14517),i=r(56280),l=r.n(i),o=r(371057),d=r(779810),c=r(910534),u=r(775838),m=r(687684),h=r(627521),p=r.n(h);let g=s.memo(e=>{let{children:t}=e;return(0,n.jsx)("ol",{className:p().breadcrumbs,"data-geist-breadcrumb-list":"",children:t})});g.displayName="Breadcrumb.List";let f=s.memo(e=>{let{children:t,fixed:r,style:s,bold:i,disabled:l,ellipsis:o}=e;return(0,n.jsx)("li",{className:(0,a.W)(p().item,{[p().fixed]:r,[p().bold]:i,[p().disabled]:l,"geist-ellipsis":!r&&o}),"data-geist-breadcrumb-item":"",style:s,children:t})});f.displayName="Breadcrumb.Item";let x=(0,s.forwardRef)((e,t)=>{let{link:r=!0,disabled:i=!1}=e,{user:o,team:h,teams:g}=(0,m.Z)(),{name:f,avatar:x}=h||o||{},{slug:_}=h||{},{username:v}=o||{},j=`/${_||v}`,b=f||_||v,w=!g,N=(0,n.jsxs)("span",{className:(0,a.W)(p().user,{[p().disabled]:i}),"data-geist-breadcrumb-user":"",ref:t,title:b,children:[(0,n.jsx)("span",{className:p().avatar,children:w?(0,n.jsx)(d.O,{height:32,rounded:!0,width:32}):(0,n.jsx)(u.Z,{children:(0,n.jsx)(c.qE,{hash:x,size:32,teamId:null==h?void 0:h.id,title:b,username:h?void 0:v})})}),(0,n.jsx)("span",{className:p().name,children:w?(0,n.jsx)(d.O,{width:80}):(0,n.jsx)(u.Z,{className:"geist-ellipsis",children:b})})]});return(0,n.jsx)(s.Fragment,{children:r?(0,n.jsx)(l(),{className:p().userWrapper,href:j,children:N}):(0,n.jsx)("div",{className:p().userWrapper,children:N})})});x.displayName="Breadcrumb.User";let _=s.memo(e=>{let{color:t,className:r}=e;return(0,n.jsx)("li",{"aria-hidden":!0,className:(0,a.W)(p().divider,r),"data-geist-breadcrumb-divider":"",children:(0,n.jsx)(o.i,{color:t||void 0,size:32,weight:"light"})})});_.displayName="Breadcrumb.SlashDivider"},348387:function(e,t,r){"use strict";r.d(t,{m:function(){return g},Y:function(){return p}});var n=r(4799),s=r(312253),a=r(380297),i=r(416620),l=r(726479),o=r(990888),d=r(797996),c=r(906076),u=r(950151),m=r.n(u),h=r(651938);function p(){let{selected:e=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=s.useState(e),[n,a]=s.useState(""),i=s.useRef(null),o=s.useRef(null),d=(0,l.Ak)(),{ref:c,...u}=d,m=function(e,t){let r=Object.values(e.current);if(!r.length)return null;if(""===t)return r;let n=(0,h.Lu)(r,t,{keys:[e=>e.value]});return n}(u.map,n);return{inputValue:n,setInputValue:function(e){"string"==typeof e?a(e):a(e.target.value),r(0)},selectedIndex:t,setSelectedIndex:r,filterList:m,listRef:c,contentRef:i,inputRef:o,...u}}function g(e){let{children:t,inputValue:r,setInputValue:s,selectedIndex:l,setSelectedIndex:o,contentRef:d,inputRef:c,...u}=e,m=(0,a.M)(),h=(0,a.M)();return(0,n.jsx)(i.Ae.Provider,{value:{listId:m,inputId:h,inputValue:r,setInputValue:s,selectedIndex:l,setSelectedIndex:o,inputRef:c,filterList:[],listRef:{current:null},list:{current:[]},map:{current:{}},force:()=>void 0,...u},children:t})}g.Item=function(e){var t;let{children:r,callback:a,hideOnFilter:o,isStatic:d=!1,value:c,...u}=e,[m,h]=(0,s.useState)(""),p=!!u.isDocs;(0,s.useEffect)(()=>{let e=b.current;e&&h((e.textContent??"").trim())},[r]);let{selectedIndex:g,setSelectedIndex:f,filterList:x,list:_,map:v}=(0,i.DX)(),{index:j,ref:b,id:w}=(0,l.Yf)(i.qN,{value:o?null:c||m,callback:a,...u}),N=!!v.current[w],y=null===(t=_.current[g])||void 0===t?void 0:t._internalId,k=y===w,I=Array.isArray(x)&&N?x.findIndex(e=>{let{_internalId:t}=e;return t===w}):void 0,C=()=>{f(j)};return((0,s.useEffect)(()=>{if(k&&b.current){let e=b.current,t=e.parentElement;if((null==t?void 0:t.hasAttribute("data-command-group"))&&t.firstChild===e){let r=e.closest("[data-command-list-wrapper]");t.parentElement&&(null==r?void 0:r.scrollTop)&&r.scrollTop>t.parentElement.offsetTop&&(r.scrollTop=t.parentElement.offsetTop)}e.scrollIntoView({block:"nearest"})}},[k]),p||-1!==I||d)?(0,n.jsx)("li",{...u,"aria-selected":k||void 0,"data-command-item":"","data-order":I,onPointerMove:C,onPointerUp:a,ref:b,role:"option",children:r}):null},g.Group=function(e){let{children:t,heading:r,customHeading:i,className:l}=e,d=(0,a.M)(),c=(0,s.useRef)(null),[u,m]=(0,s.useState)(!0);return(0,o.Z)(()=>{if(!c.current)return;let e=c.current.children.length;m(0!==e)}),(0,n.jsxs)("li",{role:"presentation",style:u?void 0:{display:"none"},children:[i?(0,n.jsx)("div",{id:d,children:i}):(0,n.jsx)("div",{className:l,"data-command-group-heading":"",id:d,children:r}),(0,n.jsx)("ul",{"aria-labelledby":d,"data-command-group":"",ref:c,role:"group",children:t})]})},g.Input=function(e){let{onKeyDown:t,...r}=e,{listId:s,inputId:a,inputValue:l,setInputValue:o,inputRef:u}=(0,i.DX)(),h=function(){let{setSelectedIndex:e,selectedIndex:t,list:r}=(0,i.DX)();function n(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=Math.max(t-n,0);r.current[s]?e(s):e(0)}function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=Math.min(t+n,r.current.length-1);r.current[s]?e(s):e(r.current.length||0)}return a=>{switch(a.key){case"Home":a.preventDefault(),e(0);break;case"End":a.preventDefault(),e(r.current.length||0);break;case"ArrowDown":a.preventDefault(),a.shiftKey?s(5):s();break;case"ArrowUp":a.preventDefault(),a.shiftKey?n(5):n();break;case"Enter":{var i;a.preventDefault();let e=null===(i=r.current[t])||void 0===i?void 0:i.callback;e(a)}}}}(),p=!!r.showClear;return(0,n.jsxs)(c.K,{align:"center",direction:"row",gap:2,children:[(0,n.jsx)("input",{onChange:o,onKeyDown:e=>{h(e),null==t||t(e)},ref:u,value:l,...r,"aria-autocomplete":"list","aria-expanded":!0,"aria-haspopup":"listbox","aria-owns":s,autoComplete:"off",autoFocus:!0,"data-command-input":"",id:a,role:"combobox",spellCheck:!1,type:"text"}),!!p&&(0,n.jsx)("button",{className:""===l?m().hidebutton:m().button,onClick:()=>{var e;o(""),null===(e=u.current)||void 0===e||e.focus()},type:"button",children:(0,n.jsx)("span",{children:(0,n.jsx)(d.a,{size:20})})})]})},g.List=function(e){let{children:t,maxHeight:r=300,emptyMessage:a,...l}=e,d=(0,s.useRef)(null),c=(0,i.DX)(),{listId:u,listRef:h,map:p,list:g,force:f,inputValue:x}=c;(0,o.Z)(()=>{if(!h.current)return;let e=new Map,t=Array.from(h.current.querySelectorAll("[data-descendant], [data-command-separator]"));l.applySort&&t.sort((e,t)=>Number(e.getAttribute("data-order"))-Number(t.getAttribute("data-order"))),t.forEach(t=>{if(t.parentElement){var r;t.parentElement.appendChild(t);let n=t.closest("[data-command-list] > *");!n||n===t||n===h.current||e.has(n)||(null===(r=h.current)||void 0===r||r.appendChild(n),e.set(n,!0))}})},[x]),(0,o.Z)(()=>{if(!h.current||!d.current)return;let e=Math.min(h.current.offsetHeight+1,r);d.current.style.height=`${1===e?0:e}px`});let _=(0,s.useMemo)(()=>({list:g,map:p,force:f}),[g,p,f]);return(0,n.jsx)("div",{className:m().listWrapper,"data-command-list-wrapper":"",ref:d,children:(0,n.jsxs)("ul",{id:u,ref:h,role:"listbox",...l,"data-command-list":"",children:[0===g.current.length&&x.length>0&&(0,n.jsx)("div",{"data-command-empty":"",children:a}),(0,n.jsx)(i.qN.Provider,{value:_,children:t})]})})},g.Separator=function(){let{inputValue:e}=(0,i.DX)(),t=(0,s.useRef)(null);return((0,o.Z)(()=>{let e=t.current;if(!e)return;let r=e.nextElementSibling;r&&r.hasAttribute("data-order")&&e.setAttribute("data-order",r.getAttribute("data-order"))}),e)?null:(0,n.jsx)("li",{"data-command-separator":"",ref:t,role:"separator"})}},416620:function(e,t,r){"use strict";r.d(t,{Ae:function(){return a},DX:function(){return i},qN:function(){return l}});var n=r(312253),s=r(726479);let a=n.createContext({listId:"",inputId:"",inputValue:"",selectedIndex:0,inputRef:{current:null},filterList:null,listRef:{current:null},list:{current:[]},map:{current:{}},setInputValue:()=>void 0,setSelectedIndex:()=>void 0,force:()=>void 0}),i=()=>n.useContext(a),l=(0,s.hS)()},290295:function(e,t,r){"use strict";var n=r(4799),s=r(312253),a=r(56280),i=r.n(a),l=r(366417),o=r.n(l),d=r(14517),c=r(384208),u=r(517513),m=r(794845),h=r(383437),p=r(882966),g=r(417075),f=r(628497),x=r(234048),_=r(166166),v=r(220395),j=r(943866),b=r(491318),w=r(271059),N=r(68602),y=r(386163),k=r(348631),I=r(280238),C=r.n(I),z=r(722779),E=r(903373),$=r(353671);let L=o()((0,p.E)(Promise.resolve().then(r.bind(r,250952)).then(e=>e.MobileMenu)),{loadableGenerated:{webpack:()=>[250952]},loading:()=>null,ssr:!1}),S=(0,s.memo)(e=>{let{publicDeployment:t}=e,r=(0,c.useRouter)(),{data:s}=(0,x.a)(),a=null==s?void 0:s.user,{teamSlug:i}=(0,b.U)()||{},l=t&&!a?"/home":"/dashboard";return!t&&i&&(l=`/${i}`),(0,n.jsxs)(y.Fe,{children:[(0,n.jsx)(A,{href:l,router:r}),(0,n.jsx)($.$,{})]})});function A(e){let{href:t,router:r}=e,{actions:{setOpen:s},state:{buttonId:a,buttonRef:l,menuId:o,open:d,popperAttributes:c,popperStyles:u}}=(0,j.H9)();return(0,n.jsx)(i(),{"aria-controls":o,"aria-expanded":d,className:C().logo,href:t,id:a,onClick:()=>{k.co.track(k.s6.BRAND_HEADER_LOGO_LEFT_CLICKED)},onContextMenu:e=>{k.co.track(k.s6.BRAND_HEADER_LOGO_RIGHT_CLICKED),e.preventDefault(),s(e=>!e)},onMouseEnter:()=>r.prefetch("/design"),ref:l,style:u.reference,...c.reference,children:(0,n.jsx)(w.Z,{"data-testid":(0,v.C)("dashboard","logo"),height:26})})}function O(e){let{breadcrumb:t,hideBreadcrumbOnMobile:r,headerImport:a=!1,className:i,hideDocs:l=!1,fullWidthLayout:o=!1}=e,{data:c}=(0,x.a)(),{teamSlug:p}=(0,f.t7)(),v=(0,g.dD)(),j=(0,_.m)(),b=(0,s.useMemo)(()=>{if(!t||!c||v&&r)return null;let e=Array.isArray(t)?t:[t];return e.map((e,t)=>(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)(u.t6,{},`divider-${t}`),"string"==typeof e?(0,n.jsx)(u.ck,{bold:!0,ellipsis:!0,children:e}):e]},`divider-item-fragment-${t}`))},[t,c,r,v]);return(0,n.jsxs)("nav",{className:(0,d.W)(C().nav,{[C().fullWidthLayout]:o},i),children:[(0,n.jsx)("div",{className:C().scope,children:(0,n.jsxs)(u.aV,{children:[(0,n.jsx)(u.ck,{fixed:!0,children:(0,n.jsx)(S,{publicDeployment:j})}),(null==c?void 0:c.user)||j?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.t6,{}),(0,n.jsx)(u.ck,{children:(0,n.jsx)(h.g,{})})]}):null,b]})}),c&&void 0!==v?(0,n.jsx)("div",{className:C().links,children:(0,n.jsx)(N.NotificationsProvider,{children:v?(0,n.jsx)(L,{breakpoint:600,dashboard:!0,teamSlug:p}):c.user?(0,n.jsx)(z.q,{hasFeedback:!0,headerImport:a,hideDocs:l,user:c.user}):(0,n.jsx)(m.Z,{className:"geist-hide-on-tablet",flex:"0 0 auto",row:!0,vcenter:!0,children:(0,n.jsx)(E.ZA,{})})})}):null]})}S.displayName="DashboardLogo",O.displayName="HeaderDashboard",t.Z=(0,s.memo)(O)},408747:function(e,t,r){"use strict";r.d(t,{L:function(){return p}});var n=r(4799),s=r(349177),a=r(745911),i=r(530472),l=r(263922),o=r(433084),d=r(600724),c=r(838262),u=r(348631),m=r(755595),h=r.n(m);let p="open-scope-switcher";t.Z=function(e){let{role:t,teamName:r,action:m,actionButton:g,dataTestId:f}=e,x=()=>{document.dispatchEvent(new Event(p))};return(0,n.jsx)("div",{className:h().center,"data-testid":f,children:(0,n.jsxs)(d.Fieldset,{className:h().fieldset,hasShadow:!0,children:[(0,n.jsxs)(d.Content,{className:h().container,children:[(0,n.jsxs)("div",{className:(0,s.kn)({gap:"24",align:"stretch"}),children:[(0,n.jsx)(i.x,{size:24,children:"Additional Permissions Required"}),(0,n.jsx)("hr",{className:"geist-hr-reset"}),(0,n.jsxs)(i.x,{as:"p",children:["As a"," ",(0,n.jsx)(i.x,{as:"span",transform:"capitalize",weight:500,children:t.toLowerCase()})," ","on the"," ",(0,n.jsx)(i.x,{as:"span",weight:500,children:r})," ","team, you do not have the required permission to ",m,"."]}),(0,n.jsx)(i.x,{as:"p",children:"To continue, please switch to a different Vercel account, or request additional permissions."}),(0,n.jsx)(l.z,{align:"center",onClick:x,prefix:(0,n.jsx)(a.Q,{size:17,weight:"bold"}),width:"100%",children:"Open Account Switcher"})]}),(0,n.jsx)("hr",{className:"geist-hr-reset"})]}),(0,n.jsxs)(d.Footer,{className:h().footer,children:[(0,n.jsx)(d.Footer.Status,{children:(0,n.jsxs)("span",{className:h().learn,children:["Learn more about"," ",(0,n.jsx)(c.r,{external:!0,href:"/docs/teams-and-accounts/team-members-and-roles",onClick:()=>{u.co.track(u.s6.PERMISSIONS_CLICKED_LEARN_MORE)},tab:!0,type:"highlight",children:"Roles and Permissions"})]})}),(0,n.jsx)(d.Footer.Actions,{className:h().footerActions,children:(0,n.jsx)(o.Z,{className:h().gotolink,href:g.link,size:"small",type:"secondary",children:g.text})})]})]})})}},383437:function(e,t,r){"use strict";r.d(t,{g:function(){return F}});var n=r(4799),s=r(906076),a=r(779810),i=r(910534),l=r(263922),o=r(220395),d=r(166166),c=r(687684),u=r(65003),m=r(455925),h=r(594103),p=r(14517),g=r(56280),f=r.n(g),x=r(312253),_=r(384208),v=r(573049),j=r(112872),b=r(363847),w=r(548775),N=r(530472),y=r(491318),k=r(348387),I=r(408747),C=r(873613),z=r(976417),E=r(348631),$=r(417075),L=r(923475),S=r(628497),A=r(234048),O=r(878812),W=r(824976),M=r(205056),H=r(668007),Z=r(61771),T=r(686111),D=r(436611),R=r(540637),q=r(251688),P=r.n(q);function K(e){let{user:t,team:r,pausedOwnerIds:a,isCurrent:l,close:o,scrollToTop:d=!0}=e,c=(0,_.useRouter)(),u=(0,Z.useRouter)(),m=(0,M.tH)({user:t,team:r}),h=(0,_.usePathname)()||(null==u?void 0:u.pathname)||"",g=(0,_.useSearchParams)()||new URLSearchParams(""),{value:f}=(0,L.XB)();return(0,n.jsx)(k.m.Item,{callback:e=>{if(!m.slug)return;o(),(0,R.Z8)(m.slug);let n=(0,D.W)({pathname:h,searchParams:g,team:r,user:t});if(e.metaKey)window.open(n,"_blank");else{if(u)return void u.push(n,void 0,{scroll:d});c.push(n)}},"data-current":l,value:[m.name,m.slug],children:(0,n.jsxs)(s.K,{align:"center",className:P().itemWrapper,direction:"row",flex:"1",justify:"space-between",children:[(0,n.jsxs)(s.K,{align:"center",className:P().itemWrapper,direction:"row",flex:"1",gap:2,children:[(0,n.jsx)(i.qE,{hash:m.avatar,size:24,teamId:null==r?void 0:r.id,username:r?void 0:null==t?void 0:t.username}),(0,n.jsx)("span",{className:(0,p.W)(P().name,"geist-ellipsis",{[P().showAllBadges]:f}),children:m.name}),(0,n.jsx)(H.U,{fallbackToPlan:!!f,pausedOwnerIds:a,team:r,user:t})]}),l?(0,n.jsx)(T.J,{size:20,style:{marginLeft:8}}):null]})})}function B(e){let{side:t="bottom",avoidCollisions:r=!1,showCreateTeam:c=!0,children:m,setCreateModalOpen:g,scrollToTop:Z=!0,...T}=e,D=(0,_.useRouter)(),R=(0,_.useSearchParams)(),{teamSlug:q}=(0,y.U)()??{},{user:B}=(0,A.a)(),{team:F}=(0,S.t7)(),{organizations:U,organization:G,isLoading:V,cachedNames:X}=(0,W.o)(),{pausedOwnerIds:Y}=(0,u.b)(),J=(0,S.nb)(),{teams:Q}=(0,O.Z)(),[ee,et]=(0,x.useState)(!1),er=()=>et(!1),{value:en}=(0,L.$A)(),es=(0,x.useMemo)(()=>U?U.reduce((e,t)=>(e[t.id]=t,e),{}):{},[U]),ea=(0,x.useMemo)(()=>{let e=Array.from(new Set(J.map(e=>e.orgId))).filter(Boolean);return e.sort((e,t)=>e<t?1:-1)},[J]),ei=(0,x.useMemo)(()=>{if(!en||!V&&!U)return[{name:"Teams",teams:J,key:"teams"}];let e=ea.map(e=>{let t=J.filter(t=>t.orgId===e),r=es[e];return{name:(null==r?void 0:r.name)||X[e]||"Loading...",path:(null==r?void 0:r.membership)?`/organizations/${r.slug}/settings`:void 0,teams:t,showOrganizationIcon:!0,key:e}}),t=J.filter(e=>!e.orgId);return t.length?[...e,{name:"Teams",teams:t,key:"teams"}]:e},[X,en,V,U,es,ea,J]),el=(0,$.dD)(),eo=(0,d.m)(),ed=(0,x.useMemo)(()=>{let e=1;if(G)for(let t of ei){let r=t.teams;if(t.showOrganizationIcon&&(e+=1),t.path===`/organizations/${G.slug}/settings`)return e-1;e+=r.length}for(let t of ei){let r=t.teams;t.showOrganizationIcon&&(e+=1);let n=r.findIndex(e=>e.slug===q);if(-1!==n)return e+n;e+=r.length}return 0},[G,ei,q]);(0,x.useEffect)(()=>{let e=()=>{et(!0)};return document.addEventListener(I.L,e),()=>document.removeEventListener(I.L,e)},[]),(0,x.useEffect)(()=>{(null==R?void 0:R.get(I.L))==="true"&&et(!0)},[R]);let ec=(0,x.useMemo)(()=>Q.filter(e=>{let{meta:{pending:t,dismissed:r}}=e;return!(t||r)}).map(e=>{let{id:t,name:r}=e;return{teamId:t,teamName:r}}),[Q]),eu=(0,k.Y)({selected:ed}),{setSelectedIndex:em,setInputValue:eh,selectedIndex:ep,inputValue:eg}=eu;(0,x.useEffect)(()=>{let e;return ee||(e=setTimeout(()=>{eg&&eh(""),ep!==ed&&em(ed)},150)),()=>{e&&clearTimeout(e)}},[ee,ed]);let ef=(0,n.jsx)("div",{className:(0,p.W)(P().command),"data-testid":(0,o.C)("scope-switcher","dropdown"),children:(0,n.jsxs)(k.m,{"aria-label":"Command menu",...eu,children:[(0,n.jsxs)(s.K,{align:"center",className:P().input,direction:"row",children:[(0,n.jsx)(v.o,{color:"var(--accents-3)",size:20}),(0,n.jsx)(k.m.Input,{placeholder:"Search..."})]}),(0,n.jsxs)(k.m.List,{emptyMessage:(0,n.jsxs)(s.K,{align:"center",gap:4,justify:"center",children:[(0,n.jsxs)(N.x,{align:"center",weight:500,children:['No results for "',eg,'"']}),(0,n.jsx)(l.z,{onClick:()=>{eh(""),em(ed)},type:"secondary",width:"100%",children:"Clear Search"})]}),maxHeight:window.innerHeight-150,children:[(0,n.jsx)(k.m.Group,{heading:"Personal Account",children:(0,n.jsx)(K,{close:er,isCurrent:!F&&!G,pausedOwnerIds:Y,scrollToTop:Z,user:B})}),ei.map(e=>{let t=(0,n.jsx)(k.m.Item,{callback:e.path?()=>{D.push(String(e.path)),er()}:void 0,className:(0,p.W)(P().organizationCustomHeading,!e.path&&P().notInteractive),children:(0,n.jsxs)(s.K,{align:"center",direction:"row",gap:1,children:[(0,n.jsx)(j.c,{size:16}),(0,n.jsx)(N.x,{color:"inherit",lineHeight:12,size:12,children:e.name}),e.path?(0,n.jsx)(b.o,{color:"currentColor",size:12,style:{marginLeft:2},weight:"bold"}):null]})});return(0,n.jsx)(k.m.Group,{close:er,customHeading:e.showOrganizationIcon?t:void 0,heading:e.name,children:e.teams.map(e=>(0,n.jsx)(K,{close:er,isCurrent:!!(F&&e.slug===F.slug),pausedOwnerIds:Y,scrollToTop:Z,team:e},`scope-team-${e.slug}`))},e.key)}),c?(0,n.jsx)(k.m.Item,{callback:()=>{g(),E.co.track(E.s6.SCOPE_SWITCHER_CLICKED_NEW_TEAM),er()},"data-testid":(0,o.C)("scope-switcher","create-team"),hideOnFilter:!0,children:(0,n.jsxs)(s.K,{align:"center",direction:"row",gap:2,children:[(0,n.jsx)(w.F,{color:"var(--geist-success)"}),(0,n.jsx)("span",{children:"Create Team"})]})}):null,ec.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k.m.Separator,{}),(0,n.jsxs)(k.m.Item,{callback:()=>{D.push("/account/teams"),E.co.track(E.s6.SCOPE_SWITCHER_SUGGESTED_TEAMS_CLICKED),er()},className:P().suggestedTeams,hideOnFilter:!0,children:[(0,n.jsxs)(s.K,{align:"center",direction:"row",gap:2,children:[(0,n.jsx)("span",{children:"Suggested Teams"}),(0,n.jsx)(C.Z,{members:ec,size:24})]}),(0,n.jsx)(b.o,{color:"currentcolor",size:20})]})]}):null]})]})}),{name:ex,avatar:e_}=F||B||{},{slug:ev}=F||{},{slug:ej}=G||{},{username:eb}=B||{},ew=ex||ev||eb,eN=ej?`/organizations/${ej}/settings`:`/${ev??"dashboard"}`,ey=(0,x.useMemo)(()=>(0,M.Xy)({externalPublicDeployment:eo,teamSlug:q,team:F,username:eb}),[eo,q,F,eb]),ek=(0,x.useMemo)(()=>{let e=en&&!!(null==F?void 0:F.orgId),t=en&&(null==F?void 0:F.orgId)?null==U?void 0:U.find(e=>e.id===F.orgId):null;if(G)return(0,n.jsxs)(s.K,{align:"center",direction:"row",children:[(0,n.jsx)("div",{className:P().organizationAvatar,children:(0,n.jsx)(j.c,{size:20})}),(0,n.jsx)(N.x,{className:(0,p.W)(P().scopeName,"geist-ellipsis"),weight:500,children:G.name}),!eo&&(0,n.jsx)("div",{className:"geist-hide-on-tablet",children:(0,n.jsx)(M.zQ,{plan:"enterprise"})})]});if(e){let e=(null==t?void 0:t.name)||((null==F?void 0:F.orgId)?X[String(F.orgId)]:void 0);return(0,n.jsxs)(s.K,{align:"center",direction:"row",children:[(0,n.jsx)(i.qE,{className:P().avatar,hash:eo?void 0:e_,size:32,teamId:null==F?void 0:F.id,title:eo?q:ew,username:ey}),(0,n.jsxs)(s.K,{className:(0,p.W)(P().organizationLink,"geist-ellipsis"),children:[(0,n.jsx)(s.K,{className:P().organizationLinkOrgName,direction:"row",gap:0,children:e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.c,{size:16}),(0,n.jsx)(N.x,{className:(0,p.W)(P().scopeName,"geist-ellipsis"),color:"inherit",size:12,children:e})]}):(0,n.jsx)(a.O,{height:14,style:{marginBottom:2},width:80})}),(0,n.jsx)(N.x,{className:(0,p.W)(P().scopeName,"geist-ellipsis"),weight:500,children:eo?q:ew})]})]})}return(0,n.jsxs)(s.K,{align:"center",direction:"row",children:[(0,n.jsx)(i.qE,{className:P().avatar,hash:eo?void 0:e_,size:32,teamId:null==F?void 0:F.id,title:eo?q:ew,username:ey}),(0,n.jsx)(N.x,{className:(0,p.W)(P().scopeName,"geist-ellipsis"),weight:500,children:eo?q:ew}),!eo&&(0,n.jsx)("div",{className:"geist-hide-on-tablet",children:(0,n.jsx)(H.U,{fallbackToPlan:!0,pausedOwnerIds:Y,team:F||void 0,user:B})})]})},[e_,ey,X,eo,en,G,U,Y,ew,F,q,B]);return(0,n.jsxs)(h.fC,{...T,onOpenChange:et,open:ee,children:[(0,n.jsxs)(h.ee,{style:{display:"flex",alignItems:"center",maxWidth:"90%"},children:[(0,n.jsx)(f(),{className:(0,p.W)(P().scopeLink,{[P().disabled]:eo}),href:eN,children:ek}),eo?null:(0,n.jsx)(h.xz,{asChild:!0,children:m})]}),el?(0,n.jsx)(z.Z,{height:"expand",onDismiss:er,show:ee,children:ef}):(0,n.jsx)(h.VY,{align:"start",avoidCollisions:r,className:P().content,onOpenAutoFocus:e=>e.preventDefault(),side:t,sideOffset:6,children:ef})]})}function F(e){let{isTeam:t,isLoading:r}=(0,c.Z)(),{isLoading:h}=(0,u.b)(),p=(0,d.m)(),{CreateTeamModal:g,openCreateTeamModal:f}=(0,m.s)({source:"scope switcher"});return(!(void 0!==t)||r||h)&&!p?(0,n.jsxs)(s.K,{align:"center",className:P().crumb,direction:"row",gap:2,children:[(0,n.jsx)(i.qE,{placeholder:!0,size:32}),(0,n.jsx)(a.O,{height:32,width:140})]}):(0,n.jsxs)(s.K,{align:"center",className:P().crumb,direction:"row",children:[(0,n.jsx)(n.Fragment,{children:g}),(0,n.jsx)(B,{...e,setCreateModalOpen:f,children:(0,n.jsx)(l.z,{"aria-label":"Switch dashboard account","data-testid":(0,o.C)("scope-switcher","toggle"),style:{marginLeft:4,flexShrink:0,padding:"0 8px",color:"var(--geist-foreground)"},type:"secondary",typeName:"button",variant:"ghost",children:(0,n.jsx)(U,{})})})]})}function U(){return(0,n.jsx)("svg",{fill:"none",height:16,stroke:"currentColor",strokeWidth:1.5,viewBox:"0 0 16 24",children:(0,n.jsx)("path",{d:"M13 8.517L8 3 3 8.517M3 15.48l5 5.517 5-5.517"})})}},247372:function(e,t,r){"use strict";r.d(t,{K:function(){return l}});var n=r(4799),s=r(312253),a=r(446846),i=r(216945);let l=e=>{let{size:t=30,showIcon:r=!0,iconSize:s=14,iconBackground:l=!0,...o}=e;return(0,n.jsx)(i.Z,{icon:r?(0,n.jsx)(a.Z,{background:l,border:!0,height:s,width:s}):null,size:t,...o})};l.displayName="ButbucketAvatar",t.Z=(0,s.memo)(l)},764474:function(e,t,r){"use strict";r.d(t,{O:function(){return l}});var n=r(4799),s=r(312253),a=r(413441),i=r(216945);let l=e=>{let{username:t,size:r=30,showIcon:s=!0,iconSize:l=14,iconBackground:o=!0,icon:d=(0,n.jsx)(a.Z,{background:o,height:l,width:l}),...c}=e;t||(t="404");let u=t&&`https://avatars.githubusercontent.com/${t.replace("[bot]","")}?s=${2*r}`;return(0,n.jsx)(i.Z,{icon:s?d:null,size:r,src:u,...c})};l.displayName="GitHubAvatar",t.Z=(0,s.memo)(l)},453751:function(e,t,r){"use strict";r.d(t,{n:function(){return l}});var n=r(4799),s=r(312253),a=r(349604),i=r(216945);let l=e=>{let{url:t,size:r=30,showIcon:s=!0,iconSize:l=14,iconBackground:o=!0,...d}=e;return t&&(d=Object.assign(d,{src:t})),(0,n.jsx)(i.Z,{icon:s?(0,n.jsx)(a.Z,{background:o,height:l,width:l}):null,size:r,...d})};l.displayName="GitLabAvatar",t.Z=(0,s.memo)(l)},873613:function(e,t,r){"use strict";var n=r(4799),s=r(14517),a=r(312253),i=r(530472),l=r(910534),o=r(764474),d=r(453751),c=r(247372),u=r(177588),m=r.n(u);let h=(0,a.memo)(e=>{let{member:t,size:r,showIcon:s,iconBackground:a}=e;return"teamId"in t?(0,n.jsx)(l.qE,{size:r,teamId:t.teamId,title:t.teamName},t.teamId):t.githubUser?(0,n.jsx)("span",{title:t.name,children:(0,n.jsx)(o.O,{iconBackground:a,showIcon:s,size:r,username:t.username})},t.username):t.gitlabUser?(0,n.jsx)("span",{title:t.name,children:(0,n.jsx)(d.n,{iconBackground:a,showIcon:s,size:r,url:t.url})},t.username):t.bitbucketUser?(0,n.jsx)("span",{title:t.name,children:(0,n.jsx)(c.Z,{iconBackground:a,showIcon:s,size:r,url:t.url})},t.username):t.username?(0,n.jsx)(l.qE,{size:r,username:t.username},t.username):t.url?(0,n.jsx)(l.qE,{size:r,url:t.url},t.url):(0,n.jsx)(l.qE,{size:r,uid:t.uid},t.uid)});h.displayName="GroupAvatar";let p=e=>{let{members:t,limit:r=3,extra:a=0,size:l=24,showIcon:o=!1,iconBackground:d=!0}=e;0===r&&(r=t.length),r-=1;let c=t.slice(0,r),u=t.slice(r),p=u.length+a,g=p>9?"9+":`+${p}`,f=`${p} more avatars in this group`;return(0,n.jsxs)("div",{className:m().group,children:[c.map(e=>(0,n.jsx)("span",{className:m().avatar,children:(0,n.jsx)(h,{member:e,size:l,showIcon:o,iconBackground:d})},"teamId"in e?e.teamId:e.uid||e.username||e.url)),u.length||a>0?(0,n.jsxs)("span",{"aria-label":f,className:(0,s.W)(m().note,{[m().avatar||""]:u.length}),title:f,children:[u.length?(0,n.jsx)(h,{member:u[0],size:l,showIcon:o,iconBackground:d}):null,p>1?(0,n.jsx)(i.x,{as:"span",className:(0,s.W)(m().noteText,"dark-theme"),color:"geist-foreground",size:10,weight:600,children:g}):null]}):null]})};p.displayName="AvatarGroup",t.Z=(0,a.memo)(p)},216945:function(e,t,r){"use strict";var n=r(4799),s=r(312253),a=r(910534),i=r(444215),l=r(627350),o=r.n(l);let d=e=>{let{icon:t,left:r,right:s,size:l,bottom:d=-5,iconTitle:c,...u}=e;return void 0===s&&void 0===r&&(r=-3),(0,n.jsxs)("div",{className:o().wrapper,style:{"--size":(0,i.Z)(l)},children:[(0,n.jsx)(a.qE,{size:l,...u}),(0,n.jsx)("div",{"aria-hidden":!0,className:o().icon,style:{left:r,bottom:d,right:s},title:c,children:t})]})};d.displayName="AvatarWithIcon",t.Z=(0,s.memo)(d)},436611:function(e,t,r){"use strict";r.d(t,{W:function(){return a}});var n=r(178006),s=r(754187);let a=e=>{let{pathname:t,searchParams:r,team:n,user:a}=e,i=(null==n?void 0:n.slug)||(null==a?void 0:a.username),m=function(e){let{pathname:t,team:r,user:n,searchParams:s}=e;if(!t)return"/";let a=null==r?void 0:r.slug,i=(null==r?void 0:r.slug)||(null==n?void 0:n.username),m=function(e){let t={};for(let[r,n]of e)t[r]=n;return t}(s),h=m.teamSlug||"[teamSlug]",p=m.project||"[project]",g=t.split("/").filter(Boolean),f=g.filter(e=>!/\[.*\]/.test(e)),x=f[0],_=f[f.length-1],v={pathname:t,page:_,query:m,teamSlug:null==r?void 0:r.slug};if("/dashboard"===t||"/"===t)return`/${i}`;if("help"===x)return a?`/help?teamSlug=${a}`:"/help/";if("new"===x){if("import"===_)return(delete m["create-team-collapsed"],a)?u({pathname:`/new/${a&&a!==(null==n?void 0:n.username)?`${a}/`:""}import`,query:{...m}}):(delete m.teamSlug,u({pathname:"/new/import",query:{...m}}));if("repo"===_)return a?u({pathname:`/new/${a&&a!==(null==n?void 0:n.username)?`${a}/`:""}import/repo`,query:{...m}}):(delete m.teamSlug,u({pathname:"/new/import/repo",query:{...m}}));if("clone"===_)return(i!==m["create-team-collapsed"]&&delete m["create-team-collapsed"],a)?u({pathname:`/new/${i}/clone`,query:{...m}}):(delete m.teamSlug,u({pathname:"/new/clone",query:{...m}}));if("third-party"===_)return u({pathname:`/new/${i}/git/third-party`});else if(g.includes("templates")){let e=[...g],r=t.includes(h);return e.splice(1,r?1:0,i||""),u({pathname:`/${e.join("/")}`})}return u({pathname:`/new/${i}`})}if("dashboard"===x)return t.startsWith(`/dashboard/${h}/integrations`)||t.startsWith("/dashboard/integrations")?"console"===_||"create"===_?a?`/dashboard/${a}/integrations/${_}`:`/dashboard/integrations/${_}`:a?`/dashboard/${a}/integrations`:"/dashboard/integrations":"domains"===_?`/dashboard/${i}/domains`:t.startsWith(`/dashboard/${h}/stores`)||t.startsWith("/dashboard/stores")?a?`/dashboard/${a}/stores`:"/dashboard/stores":t.endsWith("/domains/[domain]")?a?`/dashboard/${a}/domains`:"/dashboard/domains":t.endsWith("/monitoring/[chart]")?a?`/dashboard/${a}/monitoring`:"/dashboard/monitoring":t.includes(`/${h}`)?t.replace(`/${h}`,`/${i}`):t.replace(_,i?`${i}/${_}`:_);if(t.startsWith(`/teams/${h}/support/cases`)||t.startsWith("/support/cases")){let e=t.split("/support/cases")[1]||"";return(e.startsWith("/[case-id]")&&(e=""),r)?`/teams/${r.slug}/support/cases${e}`:`/support/cases${e}`}return t.startsWith(`/${h}/${p}`)?`/${i}`:"domains"===_?a?o(v):l(v):g.includes("account")?a?c(v):d():g.includes("settings")?a?c(v,!0):d():`/${i}`}({pathname:t,searchParams:r,team:n,user:a});return(0,s.fz)(n)?u({pathname:`/login/scope/${i}`,query:{next:m}}):m},i=e=>({...e,teamSlug:void 0}),l=e=>{let{query:t}=e;return u({pathname:"/domains",query:i(t)})},o=e=>{let{query:t,teamSlug:r}=e;return u({pathname:"/domains",query:{...t,teamSlug:r}})},d=()=>"/account",c=(e,t)=>{let{page:r,teamSlug:n}=e,s=t&&"settings"!==r?`/${r}`:"";return`/teams/${n}/settings${s}`};function u(e){return(0,n.format)(e)}},824976:function(e,t,r){"use strict";r.d(t,{o:function(){return u}});var n=r(581945),s=r(61771),a=r(843987),i=r(52954),l=r(876608),o=r(968026),d=r(923475);let c="vercel:orgNameCache";function u(e){var t;let{value:r,isReady:u}=(0,d.$A)(),m=(0,s.useRouter)(),h=(0,n.ZP)(()=>r&&u?a.m5:null,e=>(0,i.I)(e,{throwOnHTTPError:!0}),e),p=null==m?void 0:m.query.orgSlug,g=(null===(t=h.data)||void 0===t?void 0:t.organizations)||null,f=null==g?void 0:g.find(e=>e.slug===p);if(g){let e=g.reduce((e,t)=>({...e,[t.id]:t.name}),{});l.Y.setItem(c,JSON.stringify(e))}let x={};try{let e=l.Y.getItem(c);if(e){let t=JSON.parse(e);x=t}}catch(e){(0,o.captureError)(e)}return Object.assign(h,{organizations:g,organization:f,cachedNames:x,isReady:(!m||m.isReady)&&(!!g||!p)})}},65003:function(e,t,r){"use strict";r.d(t,{b:function(){return i}});var n=r(581945),s=r(52954),a=r(843987);function i(e){var t;let r=(0,n.ZP)(a.C$,async e=>{let t=await (0,s.I)(e,{throwOnHTTPError:!0});return t},e);return{...r,pausedOwnerIds:null===(t=r.data)||void 0===t?void 0:t.pausedOwnerIds}}},878812:function(e,t,r){"use strict";var n=r(581945),s=r(52954),a=r(843987);let i=e=>{var t;let r=(null==e?void 0:e.length)?`${a.O5}?types=${e.join(",")}`:a.O5,i=(0,n.ZP)(r,e=>(0,s.I)(e,{throwOnHTTPError:!0}));return Object.assign(i,{teams:(null===(t=i.data)||void 0===t?void 0:t.teams)??[]})};t.Z=i},363847:function(e,t,r){"use strict";r.d(t,{o:function(){return s}});var n=r(872820);let s=(0,n.H1)('<path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>')},371057:function(e,t,r){"use strict";r.d(t,{i:function(){return s}});var n=r(872820);let s=(0,n.H1)('<path d="M16.88 3.549L7.12 20.451"/>',!1,{color:"var(--accents-2)"})},112872:function(e,t,r){"use strict";r.d(t,{c:function(){return s}});var n=r(872820);let s=(0,n.H1)('<path d="M17.4662 10.8176L20.0981 11.9361C20.7965 12.233 21.25 12.9184 21.25 13.6773V19.8041C21.25 20.3265 20.8265 20.75 20.3041 20.75H17.4662L17.4662 5.14189C17.4662 4.09703 16.6192 3.25 15.5743 3.25H5.64189C4.59703 3.25 3.75 4.09703 3.75 5.14189V20.75M12.7365 20.75V16.9662C12.7365 16.705 12.5247 16.4932 12.2635 16.4932H8.9527C8.69149 16.4932 8.47973 16.705 8.47973 16.9662V20.75M8.47973 7.03378H8.9527M12.2635 7.03378H12.7365M8.47973 9.87162H8.9527M12.2635 9.87162H12.7365M8.47973 12.7095H8.9527M12.2635 12.7095H12.7365"/>')},745911:function(e,t,r){"use strict";r.d(t,{Q:function(){return s}});var n=r(872820);let s=(0,n.H1)('<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>')},627521:function(e){e.exports={breadcrumbs:"breadcrumb_breadcrumbs__Lr0vj",item:"breadcrumb_item__hlafw",fixed:"breadcrumb_fixed__Y5ZDx",bold:"breadcrumb_bold__69sBB",divider:"breadcrumb_divider__qRez1",user:"breadcrumb_user__v4kKV",avatar:"breadcrumb_avatar__wskVW",disabled:"breadcrumb_disabled__qADf6",name:"breadcrumb_name__3qQpU",userWrapper:"breadcrumb_userWrapper__tttAH",submenu:"breadcrumb_submenu__kMKLn"}},950151:function(e){e.exports={listWrapper:"command_listWrapper__vLlY6",button:"command_button__306ky",disabled:"command_disabled__h3dvO",hidebutton:"command_hidebutton__uxss7"}},280238:function(e){e.exports={nav:"dashboard_nav__PRmJv",fullWidthLayout:"dashboard_fullWidthLayout__S44IR",logo:"dashboard_logo__uTK3P",scope:"dashboard_scope__tiGGH",links:"dashboard_links__HU3UX",breadcrumb:"dashboard_breadcrumb__Yu3Gx",disabled:"dashboard_disabled__2uR8S"}},755595:function(e){e.exports={center:"permissions-modal_center__Y1P_g",fadeIn:"permissions-modal_fadeIn__i7V5s",container:"permissions-modal_container__4BbLj",fieldset:"permissions-modal_fieldset__lIJ8k",footer:"permissions-modal_footer__4t8xU",footerActions:"permissions-modal_footerActions__2ofx2",gotolink:"permissions-modal_gotolink__OheRz",learn:"permissions-modal_learn__CovHE"}},251688:function(e){e.exports={command:"scope_command__N4_sZ",hideOutline:"scope_hideOutline__hvvHO",content:"scope_content__PmlcL",open:"scope_open__O6KtU",itemWrapper:"scope_itemWrapper__cX_yJ",crumb:"scope_crumb__mmsJp",name:"scope_name__fFkJ7",showAllBadges:"scope_showAllBadges___MT6h",close:"scope_close__7I1Ps",suggestedTeams:"scope_suggestedTeams__kUfsD",notInteractive:"scope_notInteractive__yAX4l",input:"scope_input__Ls5u0",scopeName:"scope_scopeName__cgBFx",scopeLink:"scope_scopeLink__uMqfE",avatar:"scope_avatar__Jw1SZ",disabled:"scope_disabled__ECBin",organizationCustomHeading:"scope_organizationCustomHeading___m_g1",organizationLink:"scope_organizationLink__Hwk3n",organizationLinkOrgName:"scope_organizationLinkOrgName__UbpP0",organizationAvatar:"scope_organizationAvatar__at5Ek"}},177588:function(e){e.exports={group:"group_group__l4S61",avatar:"group_avatar__mUN_s",note:"group_note__YHZxB",noteText:"group_noteText__Fdz4u"}},627350:function(e){e.exports={wrapper:"icon_wrapper__Z_Q3t",icon:"icon_icon__LG_CC"}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19250],{987869:function(e,n,t){"use strict";var i=t(4799),r=t(869480),o=t.n(r),s=t(560630),a=t.n(s),l=t(94928),c=t.n(l),p=t(366567),d=t.n(p),h=t(351899),g=t.n(h),m=t(480442),u=t(997664);let x=g()(d().start,200);function f(e){var n,t;let r=e.ogDescription||e.description,o=(null===(n=e.router)||void 0===n?void 0:n.asPath)||"/docs";return(0,i.jsxs)(c(),{children:[(0,i.jsx)("title",{children:(t=e.title,o.includes("/cli")?`${t} | CLI Commands | Vercel Docs`:o.includes("/get-started")?`${t} | Get Started | Vercel Docs`:o.includes("/dashboard-features")?`${t} | Dashboard Features | Vercel Docs`:o.includes("/guides")?t:`${t} | Vercel Docs`)}),(0,i.jsx)("meta",{content:"summary_large_image",name:"twitter:card"}),(0,i.jsx)("meta",{content:"@vercel",name:"twitter:site"}),(0,i.jsx)("meta",{content:`${u.Fp} Documentation`,property:"og:site_name"}),(0,i.jsx)("meta",{content:"website",property:"og:type"}),(0,i.jsx)("meta",{content:e.ogTitle||e.title,property:"og:title"}),(0,i.jsx)("meta",{content:"en",property:"og:locale"}),(0,i.jsx)("meta",{content:e.url||`https://vercel.com${o}`,property:"og:url"}),(0,i.jsx)("meta",{content:"width=device-width, initial-scale=1.0",name:"viewport"}),(0,i.jsx)("link",{href:e.url||`https://vercel.com${o}`,rel:"canonical"},"canonical"),e.description?(0,i.jsx)("meta",{content:e.description,name:"description"}):null,r?(0,i.jsx)("meta",{content:r,property:"og:description"}):null,(0,i.jsx)("meta",{content:e.image||`https://vercel-og-service.vercel.sh/?title=${encodeURIComponent(e.ogTitle||e.title)}`,property:"og:image"}),e.image?(0,i.jsx)("meta",{content:e.image,property:"twitter:image"}):null,e.video?[(0,i.jsx)("meta",{content:"video",property:"og:type"},"0"),(0,i.jsx)("meta",{content:e.video,property:"og:video"},"1"),(0,i.jsx)("meta",{content:"video/mp4",property:"og:video:type"},"2")]:null,(0,i.jsx)("link",{href:`${m.X}/57x57.png`,rel:"apple-touch-icon",sizes:"57x57"}),(0,i.jsx)("link",{href:`${m.X}/60x60.png`,rel:"apple-touch-icon",sizes:"60x60"}),(0,i.jsx)("link",{href:`${m.X}/72x72.png`,rel:"apple-touch-icon",sizes:"72x72"}),(0,i.jsx)("link",{href:`${m.X}/76x76.png`,rel:"apple-touch-icon",sizes:"76x76"}),(0,i.jsx)("link",{href:`${m.X}/114x114.png`,rel:"apple-touch-icon",sizes:"114x114"}),(0,i.jsx)("link",{href:`${m.X}/120x120.png`,rel:"apple-touch-icon",sizes:"120x120"}),(0,i.jsx)("link",{href:`${m.X}/144x144.png`,rel:"apple-touch-icon",sizes:"144x144"}),(0,i.jsx)("link",{href:`${m.X}/152x152.png`,rel:"apple-touch-icon",sizes:"152x152"}),(0,i.jsx)("link",{href:`${m.X}/180x180.png`,rel:"apple-touch-icon",sizes:"180x180"}),(0,i.jsx)("link",{href:`${m.X}/32x32.png`,rel:"icon",sizes:"32x32",type:"image/png"}),(0,i.jsx)("link",{href:`${m.X}/96x96.png`,rel:"icon",sizes:"96x96",type:"image/png"}),(0,i.jsx)("link",{href:`${m.X}/16x16.png`,rel:"icon",sizes:"16x16",type:"image/png"}),(0,i.jsx)("link",{href:`${m.X}/site.webmanifest`,rel:"manifest"}),(0,i.jsx)("link",{color:"#000000",href:`${m.X}/safari-pinned-tab.svg`,rel:"mask-icon"}),(0,i.jsx)("link",{href:`${m.X}/favicon.ico`,rel:"shortcut icon"}),(0,i.jsx)("meta",{content:"var(--geist-background)",name:"theme-color"}),e.noIndex?(0,i.jsx)("meta",{content:"noindex",name:"robots"}):(0,i.jsx)("meta",{content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1",name:"robots"}),(0,i.jsx)("script",{dangerouslySetInnerHTML:{__html:JSON.stringify({"@type":"WebPage",url:e.url||`https://vercel.com${o}`,headline:e.ogTitle||e.title||`${u.Fp} Documentation`,image:e.image||"https://assets.vercel.com/image/upload/front/zeit/twitter-card.png",name:e.ogTitle||e.title||`${u.Fp} Documentation`,author:{"@type":"Person",name:u.Fp},publisher:{"@type":"Organization",logo:{"@type":"ImageObject",url:`${m.X}/favicon-96x96.png`},name:u.Fp},"@context":"http://schema.org",...e.description?{description:e.description}:void 0})},type:"application/ld+json"}),e.children]})}a().events.on("routeChangeStart",()=>{a().isFallback||x()}),a().events.on("routeChangeComplete",()=>{x.cancel(),d().done()}),a().events.on("routeChangeError",()=>{x.cancel(),d().done()}),f.propTypes={children:o().oneOfType([o().arrayOf(o().node),o().node]),description:o().string,image:o().string,noIndex:o().bool,ogDescription:o().string,ogTitle:o().string,router:o().object,title:o().string,url:o().string,video:o().string},f.defaultProps={noIndex:!1},n.Z=(0,s.withRouter)(f)},840510:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var i=t(4799),r=t(869480),o=t.n(r),s=t(14517),a=t(312253),l=t(469656),c=t.n(l);function p(e){let{active:n,children:t,innerRef:r,fixed:o,isGuide:l=!1}=e,p=(0,a.useRef)(null);return(0,a.useEffect)(()=>{var e;let n=p.current,t=document.getElementsByClassName("nav-link selected"),i=!!(null===(e=history.state)||void 0===e?void 0:e.options._shouldResolveHref);t.length>0&&t[0].offsetTop+t[0].offsetHeight>n.offsetHeight/2&&n.scrollTo({top:t[0].offsetTop-t[0].offsetHeight,behavior:i?"auto":"smooth"})},[p]),(0,i.jsx)("aside",{className:l?(0,s.W)(c().sidebarGuides,{active:n,fixed:o}):(0,s.W)(c().sidebar,{active:n,fixed:o}),ref:r||p,children:(0,i.jsx)("div",{children:t})})}p.propTypes={active:o().bool,children:o().oneOfType([o().arrayOf(o().node),o().node]),fixed:o().bool,innerRef:o().oneOfType([o().func,o().shape({current:o().instanceOf(o().element)})])}},863873:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var i=t(4799),r=t(349177),o=t(14517),s=t(56280),a=t.n(s),l=t(869480),c=t.n(l),p=t(312253),d=t(42193),h=t(310913),g=t(946298),m=t.n(g);class u extends p.Component{render(){let{component:e,className:n,children:t,...i}=this.props;return p.cloneElement(e,{className:[n,e.props.className||""].join(" "),...i},t)}}function x(e){let n,t;let{offsetTop:s,noAnchor:l,isBeta:c,margin:p=!0,prefix:g="",joinHeading:x=!1,level:f=0}=e,j=e.children,v=j.props.children||"",_=e.id,y=v;return _||("object"!=typeof v||Array.isArray(v)?Array.isArray(v)&&(y=v.map(e=>"object"==typeof e?e.props.name||e.props.children:e).join("")):y=v.props.name||v.props.children,_=function(e){let n=(0,h.i)(e);return`${n.replace(/[?]/g,"").replace(/ /g,"-").toLowerCase()}`}(y)),n=l?"#":g.includes("#")?`${g}/${_}`:`${g}#${_}`,t=""===g?`${_}`:g.includes("#")?`${g.split("#")[1]}/${_}`:`${g}#${_}`,(0,i.jsxs)("div",{className:(0,o.W)(e.description?m().hasDescription:"",m().container),children:[(0,i.jsxs)(u,{className:m().header,component:j,"data-components-heading":!0,children:[(0,i.jsx)("span",{className:(0,o.W)(m().target,s?m().offsetTop:""),id:t}),x&&2===f?(0,i.jsx)("a",{className:m().title,href:n,children:(0,i.jsx)("h2",{children:v})}):null,x&&3===f?(0,i.jsx)("a",{className:m().title,href:n,children:(0,i.jsx)("h3",{children:v})}):null,!x&&p?(0,i.jsx)("a",{className:m().title,href:n,children:v}):!x&&(0,i.jsx)("a",{className:m().titleNoMargin,href:n,children:v}),!x&&(0,i.jsx)("span",{className:m().permalink,children:(0,i.jsx)(d.r,{size:"0.6em"})}),x?(0,i.jsx)("span",{className:m().permalinkJoin,children:(0,i.jsx)(d.r,{size:"0.6em"})}):null,c?(0,i.jsx)("span",{className:m().pill,children:c?(0,i.jsx)(a(),{href:"/docs/concepts/release-phases#beta",children:(0,i.jsx)(r.Ct,{variant:"pink",children:"Beta"})}):null}):null]}),e.description?(0,i.jsx)("span",{className:m().description,children:e.description}):null]})}u.propTypes={children:c().oneOfType([c().arrayOf(c().node),c().node]),component:c().element,className:c().string},x.propTypes={children:c().oneOfType([c().arrayOf(c().node),c().node]),id:c().string,noAnchor:c().bool,offsetTop:c().bool,isBeta:c().bool,isEnt:c().bool,isPro:c().bool,description:c().string,margin:c().bool,prefix:c().string,joinHeading:c().bool,level:c().number};var f=x},310913:function(e,n,t){"use strict";function i(e){return e.replace(/<\/?h[1-3]>/gi,"").replace(/<\/?code>/gi,"").replace(/&#x27;/gi,"'").replace(/&lt;/gi,"<").replace(/&gt;/gi,">").replace(/&#40;/gi,"(").replace(/&#41;/gi,")").replace(/<\/?em>/gi,"").replace(/<\/-em>/gi,"").replace(/<-em>/gi,"").replace(/\(/gi,"").replace(/\)/gi,"").replace(/&amp;/gi,"and")}t.d(n,{i:function(){return i}})},940290:function(e,n,t){"use strict";t.d(n,{T:function(){return s}});var i=t(312253);let r="(prefers-reduced-motion: no-preference)",o=()=>!window.matchMedia(r).matches;function s(){let[e,n]=(0,i.useState)(o);return(0,i.useEffect)(()=>{let e=window.matchMedia(r),t=e=>{n(!e.matches)};return e.addEventListener?e.addEventListener("change",t):e.addListener(t),()=>{e.removeEventListener?e.removeEventListener("change",t):e.removeListener(t)}},[]),e}},726796:function(e,n,t){"use strict";t.d(n,{k:function(){return r}});var i=t(872820);let r=(0,i.H1)('<circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4"/><path d="M12 16V8"/>')},42193:function(e,n,t){"use strict";t.d(n,{r:function(){return r}});var i=t(872820);let r=(0,i.H1)('<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>')},469656:function(e){e.exports={sidebar:"sidebar_sidebar__A8OkQ",sidebarGuides:"sidebar_sidebarGuides__dnFEn",active:"sidebar_active__VlxvU"}},946298:function(e){e.exports={container:"linked-heading_container__yhHVZ",hasDescription:"linked-heading_hasDescription__pQEZg",header:"linked-heading_header__lrzN_",pill:"linked-heading_pill__XWuXM",title:"linked-heading_title__M9yX0",titleNoMargin:"linked-heading_titleNoMargin__gxQxS",description:"linked-heading_description__k7uNz",isBeta:"linked-heading_isBeta__QByTB",target:"linked-heading_target__xumg9",permalink:"linked-heading_permalink__rdnuK",permalinkJoin:"linked-heading_permalinkJoin__D4oHN",offsetTop:"linked-heading_offsetTop__53m3K"}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6569],{458567:function(e,t,n){"use strict";var r=n(4799),a=n(932017),i=n(56280),l=n.n(i),s=n(14517),d=n(818072),o=n.n(d);let c=Object.assign(function(e){let{tab:t,...n}=e,a=n.href?u:"div",i=n.href?void 0:n.onClick?"button":void 0;return(0,r.jsx)(a,{...n,className:(0,s.W)(o().card,n.className,o()[n.variant||"shadow"]),onClick:n.onClick,rel:t?"noopener":void 0,role:i,style:{background:"var(--geist-background)"},target:t?"_blank":void 0,children:n.children})},{Icon:function(e){let{background:t,color:n,className:a,children:i}=e;return(0,r.jsx)("div",{"aria-hidden":!0,className:(0,s.W)(o().icon,a),style:{background:t,color:n},children:i})},Title:function(e){let{asChild:t,...n}=e,i=t?a.g7:"p";return(0,r.jsx)(i,{...n,className:(0,s.W)(o().title,n.className)})},Description:function(e){let{asChild:t,...n}=e,i=t?a.g7:"p";return(0,r.jsx)(i,{...n,className:(0,s.W)(o().description,n.className)})}});function u(e){return(0,r.jsx)(l(),{...e,children:e.children})}t.Z=c},891729:function(e,t,n){"use strict";n.r(t),n.d(t,{Testimonial:function(){return o}});var r=n(4799),a=n(910534),i=n(880009),l=n(611542),s=n(932159),d=n.n(s);function o(e){let{bkColor:t,author:n,children:s}=e,o=n.name[0].props.children[0],c=/(?<name>[^,]+)\s?[,—]\s/,u=o;if("string"==typeof o){var h;let e=c.exec(o);u=(null==e?void 0:null===(h=e.groups)||void 0===h?void 0:h.name)||""}let g=[...n.name[0].props.children],m="";if("string"==typeof g[0]){let e=c.exec(g[0]),t=(0,i.R)(g[0].replace(e?e[0]:"",""));g[0]=t.cleaned,m=t.encoded}return(0,r.jsx)("section",{className:d().quote,"data-vercel-edit-target":!0,style:{backgroundColor:t||"var(--geist-background)"},children:(0,r.jsxs)("blockquote",{className:d().blockquote,children:[(0,r.jsx)("figure",{className:d().figure,children:(0,r.jsxs)("div",{className:d().avatarWrapper,children:[(0,r.jsx)(l.iB,{children:(0,r.jsx)(a.qE,{className:d().avatar,hash:n.imageURL,size:60,src:n.imageURL})}),(0,r.jsx)(l.NZ,{children:(0,r.jsx)(a.qE,{className:d().avatar,hash:n.imageURL,size:68,src:n.imageURL})})]})}),s,(0,r.jsxs)("div",{className:d().authorWrapper,children:[(0,r.jsx)("span",{className:d().authorName,children:u}),(0,r.jsx)("span",{className:d().authorTitle,children:g}),(0,r.jsx)("span",{style:{display:"none"},children:m})]})]})})}},611542:function(e,t,n){"use strict";n.d(t,{NZ:function(){return l},iB:function(){return s}});var r=n(4799),a=n(10388),i=n.n(a);function l(e){let{children:t}=e;return(0,r.jsx)("div",{className:i().desktopOnly,children:t})}function s(e){let{children:t}=e;return(0,r.jsx)("div",{className:i().mobileOnly,children:t})}},129255:function(e,t,n){"use strict";n.r(t),n.d(t,{WarningContext:function(){return s},useWarning:function(){return d}});var r=n(4799),a=n(943220),i=n.n(a),l=n(312253);let s=l.createContext(),d=()=>l.useContext(s),o=e=>{let{children:t}=e;return(0,r.jsxs)("div",{className:"jsx-c36fed1200ba18cb",children:[(0,r.jsx)("b",{className:"jsx-c36fed1200ba18cb",children:"!"}),(0,r.jsx)("p",{className:"jsx-c36fed1200ba18cb",children:t}),(0,r.jsx)(i(),{id:"c36fed1200ba18cb",children:"div.jsx-c36fed1200ba18cb{background:var(--geist-highlight-pink);color:#fff;padding:10px 15px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;font-weight:600;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex\n            align-items: center;cursor:default;width:100%;font-size:14px}p.jsx-c36fed1200ba18cb{margin:0px;line-height:23px}b.jsx-c36fed1200ba18cb{display:block;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;height:20px;width:20px;border:2px solid#fff;margin-right:15px;line-height:16px;text-align:center;margin-top:2px}"})]})};t.default=l.memo(o)},523783:function(e,t,n){"use strict";n.d(t,{R:function(){return u}});var r=n(4799),a=n(14517),i=n(906076),l=n(530472),s=n(433084),d=n(348631),o=n(328203),c=n.n(o);function u(e){return(0,r.jsxs)("div",{className:(0,a.W)(c().container,e.className),"data-vercel-edit-target":!0,style:{margin:`${e.margin??32}px 0`},children:[(0,r.jsx)("div",{className:c().iconContainer,children:(0,r.jsx)(e.icon,{color:"var(--geist-background)",size:26})}),(0,r.jsxs)(i.K,{style:{flexGrow:1},children:[(0,r.jsx)(l.x,{className:c().title,size:16,weight:700,children:e.title}),(0,r.jsx)(l.x,{color:"accents-5",size:14,weight:400,children:e.details})]}),(0,r.jsx)(s.Z,{className:(0,a.W)(c().button,e.className),"data-testid":e["data-testid"],href:e.ctaLink,onClick:()=>{e.clickEventLocation&&e.clickEventValue&&d.co.track(d.s6.CLICK_EVENT,{click_name:`${e.clickEventLocation}-cta`,click_value:e.clickEventValue})},target:e.target??"_blank",children:e.ctaText})]})}},277148:function(e,t,n){"use strict";var r=n(4799),a=n(14517),i=n(384350),l=n.n(i);let s=e=>{let{children:t,withDivider:n}=e;return(0,r.jsx)("blockquote",{className:(0,a.W)(l().blockquote,{[l()["with-divider"]]:n}),children:t})};t.Z=s},406415:function(e,t,n){"use strict";var r=n(4799),a=n(724771),i=n.n(a);let l=e=>(0,r.jsx)("figcaption",{className:i().caption,...e}),s=e=>(0,r.jsx)("code",{className:i().code,...e}),d=Object.assign(l,{Code:s});t.Z=d},408255:function(e,t,n){"use strict";n.d(t,{H1:function(){return d},H2:function(){return o},H3:function(){return c},H4:function(){return u},H5:function(){return h}});var r=n(4799),a=n(312253),i=n(14517),l=n(430426),s=n.n(l);function d(e){let{className:t,children:n,...a}=e;return(0,r.jsx)("h1",{className:(0,i.W)(s().h1,t),...a,children:n})}let o=(0,a.forwardRef)((e,t)=>{let{children:n,className:a,...l}=e;return(0,r.jsx)("h2",{className:(0,i.W)(s().h2,a),...l,ref:t,children:n})});function c(e){let{children:t,className:n,...a}=e;return(0,r.jsx)("h3",{className:(0,i.W)(s().h3,n),...a,children:t})}function u(e){let{children:t,isCommand:n,className:a,...l}=e;return(0,r.jsx)("h4",{className:(0,i.W)(s().h4,a,{[s().command]:n}),...l,children:t})}function h(e){let{children:t,className:n,...a}=e;return(0,r.jsx)("h5",{className:(0,i.W)(s().h5,n),...a,children:t})}o.displayName="H2",d.B=function(e){let{children:t,...n}=e;return(0,r.jsx)("b",{...n,children:t})}},759802:function(e,t,n){"use strict";n.d(t,{dL:function(){return p},h$:function(){return g},mj:function(){return h}});var r=n(4799);n(312253);var a=n(56280),i=n.n(a),l=n(14517),s=n(575092),d=n(129255),o=n(364319),c=n(160518),u=n.n(c);let h=e=>{var t;return(0,o.Z)(e.href)?(0,r.jsx)(g,{...e}):(null===(t=e.href)||void 0===t?void 0:t.startsWith("#"))?(0,r.jsx)(m,{...e}):(0,r.jsx)(p,{...e})},g=e=>{let{href:t,as:n,children:a,onClick:o,download:c=!1,error:h=!1,underlineOnHover:g=!0,prefetch:m=!0,className:p}=e,f=(0,s.B)(),x=(0,d.useWarning)();return(0,r.jsx)(i(),{as:n,className:(0,l.W)(u().internal,p,{[u().error]:h,[u().disabled]:f,[u()["no-underline"]]:!g,[u()["in-warning"]]:x}),download:c,href:t,onClick:o,prefetch:!!m&&void 0,children:a})},m=e=>{let{href:t,onClick:n,children:a,underlineOnHover:i=!0}=e;return(0,r.jsx)("a",{className:(0,l.W)(u().anchor,{[u().underlineOnHover]:i}),href:t,onClick:n,children:a})},p=e=>{let{href:t,onClick:n,children:a,underlineOnHover:i=!0,download:d=!1,className:o}=e,c=(0,s.B)();return(0,r.jsx)("a",{className:(0,l.W)(u().external,o,{[u()["no-underline"]]:!i,[u().disabled]:c}),download:d,href:t,onClick:n,rel:"noopener",target:"_blank",children:a})}},92586:function(e,t,n){"use strict";n.d(t,{LI:function(){return o},OL:function(){return d},UL:function(){return s}});var r=n(4799),a=n(14517),i=n(343159),l=n.n(i);let s=e=>{let{children:t,className:n}=e;return(0,r.jsx)("ul",{className:(0,a.W)(l().ul,n),children:t})},d=e=>{let{children:t,className:n}=e;return(0,r.jsx)("ol",{className:(0,a.W)(l().ol,n),children:t})},o=e=>{let{children:t,className:n}=e;return(0,r.jsx)("li",{className:(0,a.W)(l().li,n),children:t})}},995861:function(e,t,n){"use strict";n.d(t,{P:function(){return s},bg:function(){return o},pu:function(){return u}});var r=n(4799),a=n(14517),i=n(816465),l=n.n(i);let s=e=>{let{className:t="",children:n,large:a,color:i,style:l,...s}=e;return(0,r.jsx)("p",{className:t,...s,style:{color:i,...l},children:n})},d=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:l().pdiv,children:t})},o=e=>(0,r.jsx)("div",{className:l().div,children:(0,r.jsx)(d,{...e})}),c=e=>{let{children:t}=e;return(0,r.jsx)("span",{className:l().bold,children:t})},u=e=>{let{children:t,className:n=""}=e;return(0,r.jsx)("blockquote",{className:(0,a.W)(l().blockquote,n),children:t})};s.B=c},972237:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});var r=n(4799);let a=e=>{let{mobile:t,desktop:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"geist-show-on-desktop",children:(0,r.jsx)(i,{dark:n.dark,light:n.light})}),(0,r.jsx)("div",{className:"geist-hide-on-desktop",children:(0,r.jsx)(i,{dark:t.dark,light:t.light})})]})},i=e=>{let{light:t,dark:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"geist-hide-on-dark",children:t}),(0,r.jsx)("div",{className:"geist-hide-on-light",children:n})]})};t.Z=i},876298:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(4799);n(312253);var a=n(943220),i=n.n(a),l=n(794845);function s(e){let{className:t,classNames:n=[],styles:a,hoverAnimation:s,border:d=!1,shadow:o=!0,padding:c=!0,children:u,...h}=e,{className:g,styles:m}={styles:(0,r.jsx)(i(),{id:"c0b0c9ba5f9da5c8",dynamic:[c?"var(--geist-gap)":"0",o?"var(--shadow-small)":"none",d?"border: 1px solid var(--accents-2);":"",s?"var(--shadow-large)":o?"var(--shadow-small)":"none",s?"1":"auto"],children:`.geist-card.__jsx-style-dynamic-selector{padding:${c?"var(--geist-gap)":"0"};-webkit-border-radius:var(--geist-radius);-moz-border-radius:var(--geist-radius);border-radius:var(--geist-radius);background:var(--geist-background);-webkit-box-shadow:${o?"var(--shadow-small)":"none"};-moz-box-shadow:${o?"var(--shadow-small)":"none"};box-shadow:${o?"var(--shadow-small)":"none"};${d?"border: 1px solid var(--accents-2);":""}
      transition: box-shadow .2s ease;}.__jsx-style-dynamic-selector:hover{-webkit-box-shadow:${s?"var(--shadow-large)":o?"var(--shadow-small)":"none"};-moz-box-shadow:${s?"var(--shadow-large)":o?"var(--shadow-small)":"none"};box-shadow:${s?"var(--shadow-large)":o?"var(--shadow-small)":"none"};z-index:${s?"1":"auto"}}`}),className:i().dynamic([["c0b0c9ba5f9da5c8",[c?"var(--geist-gap)":"0",o?"var(--shadow-small)":"none",d?"border: 1px solid var(--accents-2);":"",s?"var(--shadow-large)":o?"var(--shadow-small)":"none",s?"1":"auto"]]])};return(0,r.jsx)(l.Z,{classNames:["geist-card",g,t,...n],"data-version":"v1",styleSets:(0,r.jsxs)(r.Fragment,{children:[m,a]}),...h,children:u})}function d(e){let{disabled:t,active:n,children:a,...l}=e,{className:d,styles:o}={styles:(0,r.jsx)(i(),{id:"a47cad01214c0ace",dynamic:[n?"var(--geist-foreground)":"var(--accents-2)",t?"not-allowed":"pointer",n?"var(--geist-foreground)":t?"var(--accents-1)":"var(--geist-background)",n?"var(--geist-background)":t?"var(--accents-4)":"none"],children:`.geist-card-picker.__jsx-style-dynamic-selector{width:512pt;max-width:100%;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;border:1px solid ${n?"var(--geist-foreground)":"var(--accents-2)"};cursor:${t?"not-allowed":"pointer"};-webkit-transition:background.2s ease,border.2s ease;-moz-transition:background.2s ease,border.2s ease;-o-transition:background.2s ease,border.2s ease;transition:background.2s ease,border.2s ease;background:${n?"var(--geist-foreground)":t?"var(--accents-1)":"var(--geist-background)"};color:${n?"var(--geist-background)":t?"var(--accents-4)":"none"}}.geist-card-picker.__jsx-style-dynamic-selector:hover{border:1px solid var(--geist-foreground)}`}),className:i().dynamic([["a47cad01214c0ace",[n?"var(--geist-foreground)":"var(--accents-2)",t?"not-allowed":"pointer",n?"var(--geist-foreground)":t?"var(--accents-1)":"var(--geist-background)",n?"var(--geist-background)":t?"var(--accents-4)":"none"]]])};return(0,r.jsx)(s,{classNames:["geist-card-picker",d],styles:o,...l,children:a})}function o(e){let{children:t,wide:n,hasAuthors:a,...l}=e,{className:d,styles:o}={styles:(0,r.jsx)(i(),{id:"917d477652f355aa",dynamic:[n?"0":"var(--geist-gap-double)"],children:`.geist-card-project.geist-card.__jsx-style-dynamic-selector{padding:0;margin-bottom:${n?"0":"var(--geist-gap-double)"};-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:var(--geist-background)}`}),className:i().dynamic([["917d477652f355aa",[n?"0":"var(--geist-gap-double)"]]])};return(0,r.jsx)(s,{classNames:["geist-card-project",d],styles:o,...l,children:t})}function c(e){let{picker:t=!1,project:n=!1,...a}=e;return t?(0,r.jsx)(d,{...a}):n?(0,r.jsx)(o,{...a}):(0,r.jsx)(s,{...a})}},179765:function(e,t,n){"use strict";n.d(t,{W0:function(){return eR},po:function(){return eH},$U:function(){return eA}});var r=n(4799),a=n(312253),i=n(342332),l=n(902677),s=n(503690),d=n(92586),o=n(258998),c=n(838262),u=n(523783),h=n(285513),g=n(512432),m=n.n(g),p=n(799690),f=n(540975),x=n(145741),_=n.n(x),b=n(558544);let v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],{screenshotLgAspectRatio:n,screenshotLg:r,screenshotSm:a,screenshotAlt:i,logoSvg:l,logoAlt:s,logoSvgHeight:d,logoSvgWidth:o,customerUrl:c,customerName:u,featuredLogo:h,featuredScreenshot:g,alexaRanking:m,cardType:p,cardUrl:f,quoteContent:x,quoteAuthorName:b,quoteAuthorTitle:v,statContent:j,statTitle:k}=e;if(!l||!s||!d||!o||!c){console.error("Missing information in mediaSrc/contentful data",JSON.stringify(e));return}let w=`${u}-${_()(c)}`;return{...t?{}:{screenshotLgAspectRatio:n,screenshotLg:r,screenshotSm:a,screenshotAlt:i},logoSvg:l,logoAlt:s,logoSvgHeight:d,logoSvgWidth:o,customerUrl:c,customerName:u,featuredLogo:h,featuredScreenshot:g,alexaRanking:m,cardType:p,cardUrl:f,quoteContent:x,quoteAuthorName:b,quoteAuthorTitle:v,statContent:j,statTitle:k,ObjectId:w}};var j=n(396673),k=n.n(j);function w(e){let{logos:t}=e,n=t.map(e=>{let t=function(e){var t,n,r,a;let i={screenshotLgAspectRatio:e.screenshotLg?((null===(t=e.screenshotLg.fields.file.details)||void 0===t?void 0:null===(n=t.image)||void 0===n?void 0:n.width)||16)/((null===(r=e.screenshotLg.fields.file.details)||void 0===r?void 0:null===(a=r.image)||void 0===a?void 0:a.height)||9):null,screenshotLg:e.screenshotLg?(0,b._)(e.screenshotLg.fields.file.url,"image"):null,screenshotSm:e.screenshotSm?(0,b._)(e.screenshotSm.fields.file.url,"image"):null,screenshotAlt:e.screenshotAlt||null,logoSvg:(0,b._)(e.logoSvg.fields.file.url,"image"),logoAlt:e.logoAlt,logoSvgWidth:e.logoSvgWidth,logoSvgHeight:e.logoSvgHeight,customerUrl:e.customerUrl,customerName:e.customerName,featuredLogo:e.featuredLogo?e.featuredLogo:null,featuredScreenshot:e.featuredScreenshot?e.featuredScreenshot:null,alexaRanking:e.alexaRanking||9999999,cardType:e.cardType||"logo",cardUrl:e.cardUrl||null,quoteContent:e.quoteContent||null,quoteAuthorName:e.quoteAuthorName||null,quoteAuthorTitle:e.quoteAuthorTitle||null,statContent:e.statContent||null,statTitle:e.statTitle||null};return i}(e.fields);return v(t)});return(0,r.jsx)("div",{className:k().cards,children:n.map(e=>(0,r.jsx)("div",{className:k().card,children:(0,r.jsx)("div",{className:k().wrap,children:(0,r.jsx)(f.Z,{alt:e.alt||"",height:.85*e.logoSvgHeight,layout:"fixed",srcDark:e.logoSvg,srcLight:e.logoSvg,width:.85*e.logoSvgWidth})})},e.customerName))})}var N=n(456032),y=n(458567),L=n(459617),E=n.n(L);function C(e){let{cards:t,style:n}=e;return"Edge Functions Example"===n?(0,r.jsx)("div",{className:E()["card-grid"],children:t.map(e=>{let{fields:{title:t,description:n,link:a,icon:i,iconBackground:l}}=e,d=i?s[(0,N.pascalCase)(i)]:i;return(0,r.jsxs)(y.Z,{className:E().card,href:a,tab:!0,title:t,variant:"border",children:[(0,r.jsx)(y.Z.Icon,{background:l,children:d?(0,r.jsx)(d,{}):null}),(0,r.jsx)(y.Z.Title,{children:t}),!!n&&(0,r.jsx)(y.Z.Description,{children:n})]},t)})}):(0,r.jsx)(r.Fragment,{})}function T(e){var t,n,r,a;return(null===(t=e.data.target)||void 0===t?void 0:null===(n=t.sys)||void 0===n?void 0:null===(r=n.contentType)||void 0===r?void 0:null===(a=r.sys)||void 0===a?void 0:a.id)?e.data.target.sys.contentType.sys.id:"Unknown"}var S=n(366417),W=n.n(S),O=n(14517),I=n(42193),q=n(400981),G=n.n(q);class H extends a.Component{render(){let{component:e,className:t,children:n,...r}=this.props;return(0,a.cloneElement)(e,{className:(0,O.W)(t,e.props.className),...r},n)}}let Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(e){var n;"string"==typeof e&&t.push(e),Array.isArray(e)&&e.map(e=>Z(e,t)),"object"==typeof e&&Z(null===(n=e.props)||void 0===n?void 0:n.children,t)}return t.join("").trim()};var A=function(e){let{offsetTop:t}=e,n=e.children,a=n.props.children||"",i=e.id;i||(i=Z(a).toLowerCase().replace(/\s/g,"-").replace(/[?!:]/g,""));let l=t?{marginTop:`${-t}px`,paddingTop:`${t}px`}:void 0;return(0,r.jsxs)(H,{className:G().heading,component:n,children:[(0,r.jsx)("span",{className:G().target,id:i,style:l}),(0,r.jsx)("a",{className:G().link,href:`#${i}`,children:a}),(0,r.jsx)("span",{className:G().permalink,children:(0,r.jsx)(I.r,{size:"0.75em"})})]})},R=n(277148),P=n(651199),B=n(408255),D=n(759802),M=n(995861);let $={p:M.bg,strong:M.P.B,ul:d.UL,li:d.LI,h2:function(e){let{children:t}=e;return(0,r.jsx)(A,{children:(0,r.jsx)(B.H3,{children:t})})},h3:function(e){let{children:t}=e;return(0,r.jsx)(A,{children:(0,r.jsx)(B.H4,{children:t})})},h4:function(e){let{children:t}=e;return(0,r.jsx)(A,{children:(0,r.jsx)(B.H5,{children:t})})},code:P.Z,a:D.mj,blockquote:R.Z};M.bg,M.P.B,d.UL,d.LI,P.Z,P.E,D.mj,R.Z;var z=n(882966),K=n(489853),U=n(659978),F=n(406415),V=n(104635),Y=n(9431),X=n(238790),J=n(881808),Q=n(681021),ee=n(617541),et=n(794845),en=n(876298),er=n(972237);let ea={...$,Code:W()(()=>(0,z.E)(Promise.all([n.e(54085),n.e(36886),n.e(26473),n.e(19474)]).then(n.bind(n,904337)).then(e=>e.CodeBlock)),{loadableGenerated:{webpack:()=>[904337]}}),Image:f.Z,Video:K.Z,Caption:F.Z,CodeSandbox:W()(()=>(0,z.E)(Promise.all([n.e(80027),n.e(11068),n.e(69143),n.e(25036),n.e(88239)]).then(n.bind(n,788239))),{loadableGenerated:{webpack:()=>[788239]}}),Comparison:W()(()=>(0,z.E)(n.e(51633).then(n.bind(n,51633))),{loadableGenerated:{webpack:()=>[51633]}}),Collapse:V.Z,CollapseGroup:Y.Z,FeatureImages:W()(()=>(0,z.E)(n.e(87075).then(n.bind(n,87075))),{loadableGenerated:{webpack:()=>[87075]}}),TerminalInput:W()(()=>(0,z.E)(n.e(22925).then(n.bind(n,622925))).then(e=>e.TerminalInput),{loadableGenerated:{webpack:()=>[622925]}}),TerminalOutput:W()(()=>(0,z.E)(n.e(22925).then(n.bind(n,622925))).then(e=>e.TerminalOutput),{loadableGenerated:{webpack:()=>[622925]}}),Latency:W()(()=>(0,z.E)(n.e(13988).then(n.bind(n,113988))),{loadableGenerated:{webpack:()=>[113988]}}),Benchmark:W()(()=>(0,z.E)(n.e(50343).then(n.bind(n,350343))),{loadableGenerated:{webpack:()=>[350343]}}),Stats:W()(()=>(0,z.E)(n.e(36950).then(n.bind(n,336950))),{loadableGenerated:{webpack:()=>[336950]}}),Button:X.Z,IntegrationsSummaryImage:W()(()=>(0,z.E)(n.e(23738).then(n.bind(n,423738))),{loadableGenerated:{webpack:()=>[423738]}}),GenericLink:D.mj,Fragment:a.Fragment,P:M.P,Table:W()(()=>(0,z.E)(n.e(86306).then(n.bind(n,186306))).then(e=>e.Table),{loadableGenerated:{webpack:()=>[186306]}}),TableCell:W()(()=>(0,z.E)(n.e(86306).then(n.bind(n,186306))).then(e=>e.TableCell),{loadableGenerated:{webpack:()=>[186306]}}),TableHead:W()(()=>(0,z.E)(n.e(86306).then(n.bind(n,186306))).then(e=>e.TableHead),{loadableGenerated:{webpack:()=>[186306]}}),TableRow:W()(()=>(0,z.E)(n.e(86306).then(n.bind(n,186306))).then(e=>e.TableRow),{loadableGenerated:{webpack:()=>[186306]}}),Note:U.Z,Text:o.ZP,Tree:W()(()=>(0,z.E)(n.e(25661).then(n.bind(n,525661))).then(e=>e.Tree),{loadableGenerated:{webpack:()=>[525661]}}),Folder:W()(()=>(0,z.E)(n.e(25661).then(n.bind(n,525661))).then(e=>e.Folder),{loadableGenerated:{webpack:()=>[525661]}}),File:W()(()=>(0,z.E)(n.e(25661).then(n.bind(n,525661))).then(e=>e.File),{loadableGenerated:{webpack:()=>[525661]}}),Module:W()(()=>(0,z.E)(n.e(31747).then(n.bind(n,131747))),{loadableGenerated:{webpack:()=>[131747]}}),HR:p.Z,InlineCode:P.Z,KBD:ee.Z,ReactTweet:W()(()=>(0,z.E)(n.e(32580).then(n.bind(n,432580))),{loadableGenerated:{webpack:()=>[432580]}}),Warning:W()(()=>(0,z.E)(Promise.resolve().then(n.bind(n,129255))),{loadableGenerated:{webpack:()=>[129255]}}),StaticExamples:W()(()=>(0,z.E)(n.e(64298).then(n.bind(n,464298))),{loadableGenerated:{webpack:()=>[464298]}}),VideoControls:W()(()=>(0,z.E)(n.e(65144).then(n.bind(n,265144))),{loadableGenerated:{webpack:()=>[265144]}}),VRS:W()(()=>(0,z.E)(n.e(13948).then(n.bind(n,713948))),{loadableGenerated:{webpack:()=>[713948]}}),Snippet:J.Z,Testimonial:W()(()=>(0,z.E)(Promise.resolve().then(n.bind(n,891729))).then(e=>e.Testimonial),{loadableGenerated:{webpack:()=>[891729]}}),Spacer:Q.L,Container:et.Z,List:W()(()=>(0,z.E)(n.e(51133).then(n.bind(n,651133))),{loadableGenerated:{webpack:()=>[651133]}}),Card:en.Z,Heading:A,ThemeHelper:er.Z,ViewportHelper:er.h,Tweet:W()(()=>(0,z.E)(n.e(56309).then(n.bind(n,256309))),{loadableGenerated:{webpack:()=>[256309]}}),YouTube:W()(()=>(0,z.E)(n.e(19243).then(n.bind(n,419243))),{loadableGenerated:{webpack:()=>[419243]}}),DPSAnimation:W()(()=>(0,z.E)(n.e(59536).then(n.bind(n,259536))),{loadableGenerated:{webpack:()=>[259536]}}),ImportUI:W()(()=>(0,z.E)(Promise.all([n.e(66426),n.e(65826),n.e(43120),n.e(59717),n.e(84973),n.e(95043),n.e(7763),n.e(13843),n.e(31802),n.e(38612),n.e(68181)]).then(n.bind(n,786341))),{loadableGenerated:{webpack:()=>[786341]}}),VercelAnimation:W()(()=>(0,z.E)(n.e(24202).then(n.bind(n,524202))),{loadableGenerated:{webpack:()=>[524202]}}),Link:c.r};function ei(e){let{Tweet:t,Spacer:n,Caption:a}=ea,{id:i,caption:l}=e.data.target.fields,s="none";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"geist-hide-on-mobile",style:{minHeight:460,marginTop:"var(--geist-gap)"},children:(0,r.jsx)(t,{adaptToTheme:!0,id:i,options:{conversation:s}})}),(0,r.jsx)("div",{className:"geist-show-on-mobile",children:(0,r.jsx)(t,{adaptToTheme:!0,id:i,options:{conversation:s}})}),(0,r.jsx)(n,{y:2}),(0,r.jsx)(a,{children:l})]})}function el(e){let{CollapseGroup:t,Collapse:n}=ea,{items:a}=e.data.target.fields;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(t,{children:a.map(e=>(0,r.jsxs)(n,{size:"small",title:e.fields.summary,children:[(0,r.jsx)("div",{style:{height:10}}),eA(e.fields.details)]},e.fields.summary))})]})}function es(e){e.content=e.content[0].content}function ed(e){let{text:t}=e.data.target.fields,n={...t};return es(n),(0,r.jsx)(ea.Caption,{children:eA(n)})}var eo=n(967609);function ec(e){let{content:{content:t},language:n,caption:a,highlightedLines:i,fileName:l}=e.data.target.fields,s=t.reduce((e,t)=>{if("content"in t){let n=t.content.reduce((e,t)=>"value"in t?e+t.value:e,"");return e+(e?"\n\n":"")+n}return e},""),d=i?i.map(e=>parseInt(e)):[];return(0,r.jsxs)("div",{className:m().codeWrapper,"data-vercel-edit-target":!0,children:[(0,r.jsx)(ea.Code,{filename:l,highlightedLinesNumbers:d,language:(n||"").toLowerCase(),textToCopy:s,children:s}),a?(0,r.jsx)(eo.O,{children:a}):null]})}function eu(e){var t;let{CodeSandbox:n}=ea,i=(null===(t=e.data.target.fields.language)||void 0===t?void 0:t[0])??"react",l=e.data.target.fields.caption,s=(0,a.useMemo)(()=>{var t;return(null===(t=e.data.target.fields.assets)||void 0===t?void 0:t.map(e=>(0,b._)(e.fields.file.url,"image")))??[]},[e.data.target.fields.assets]),d=(0,a.useMemo)(()=>Object.fromEntries(e.data.target.fields.files.map(e=>{var t;let n=e.fields.caption,r=!!(null===(t=e.fields.highlightedLines)||void 0===t?void 0:t.length),a=e.fields.content.content.map(e=>{let t=e.content.reduce((e,t)=>e+t.value,"");return t}),i=a.join("\n\n"),l=/\*▲\*[0-9]+\*▲\*/g,d=e=>Number(/[0-9]+/.exec(e)),o=i.match(l);return[n,{code:((e,t)=>{if(!t)return e;let n=t.map(e=>d(e)),r=Object.fromEntries(n.map(e=>[e,s[e]])),a=e.replace(l,e=>r[d(e)]);return a})(i,o),hidden:r}]})),[e.data.target.fields.files,s]);return(0,r.jsxs)("div",{className:m().codesandbox,children:[(0,r.jsx)("figure",{children:(0,r.jsx)(n,{dependencies:e.data.target.fields.dependencies,files:d,showConsoleButton:!0,template:i})}),l?(0,r.jsx)(eo.O,{children:l}):null]})}function eh(e){let t=W()(()=>(0,z.E)(n.e(6007).then(n.t.bind(n,306007,23))),{loadableGenerated:{webpack:()=>[306007]}}),{name:a,code:i}=e.data.target.fields;return(0,r.jsx)("div",{className:m().evaluatedCodeWrapper,children:(0,r.jsx)(t,{allowUnknownElements:!0,bindings:{isRowType:(e,t)=>t>0,isHeadType:(e,t)=>0===t},blacklistedTags:["script","style"],components:ea,componentsOnly:!1,jsx:i,onError:e=>{console.log(e)},renderInpost:!1},a)})}function eg(e){let{GenericLink:t}=ea,{url:n,media:a}=e.data.target.fields;return(0,r.jsx)(t,{href:n,children:(0,h.u)(a.fields)})}function em(e){let{lightMobileVersion:{fields:t},darkMobileVersion:{fields:n},lightDesktopVersion:{fields:a},darkDesktopVersion:{fields:i},dottedBackground:l,imagePercentageWidth:s,fullWidth:d}=e.data.target.fields,o={dottedBackground:l,imagePercentageWidth:s,fullWidth:d};return a.file.details.image&&i.file.details.image&&t.file.details.image&&n.file.details.image?(0,r.jsx)(ea.ViewportHelper,{desktop:{light:(0,h.u)(a,o),dark:(0,h.u)(i,o)},mobile:{light:(0,h.u)(t,o),dark:(0,h.u)(n,o)}}):null}function ep(e){let{lightVersion:{fields:t},darkVersion:{fields:n}}=e.data.target.fields;return(0,r.jsx)(ea.ThemeHelper,{dark:(0,h.u)(n),light:(0,h.u)(t)})}function ef(e){let{Note:t}=ea,n={...e.data.target.fields.content};return es(n),(0,r.jsx)(t,{children:eA(n)})}var ex=n(379780),e_=n(906076),eb=n(910534),ev=n(530472),ej=n(880009);function ek(e){let{children:t,...n}=e,{cleaned:a,encoded:i}=(0,ej.R)(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ev.x,{...n,children:a}),(0,r.jsx)("span",{style:{display:"none"},children:i})]})}var ew=n(586496),eN=n.n(ew);function ey(e){let{children:t}=e;return(0,r.jsx)(ek,{as:"h4",className:eN().name,size:20,weight:700,children:t})}let eL=e=>{let{imageURL:t,author:n,name:a,link:i,children:l,id:s,...d}=e;return(0,r.jsxs)(e_.K,{as:"section",className:eN().quote,...d,direction:"row",gap:6,children:[(0,r.jsx)("div",{children:(0,r.jsx)(eb.qE,{hash:t,size:60,src:t})}),(0,r.jsxs)(e_.K,{gap:4,children:[i?(0,r.jsx)(c.r,{className:eN().link,href:i,tab:!0,variant:"primary",children:(0,r.jsxs)(e_.K,{align:"center",direction:"row",gap:2,children:[(0,r.jsx)(ey,{children:a}),(0,r.jsx)(ex.d,{size:16,weight:"bold"})]})}):(0,r.jsx)(ey,{children:a}),(0,r.jsx)("figure",{className:eN().figure,children:(0,r.jsxs)(e_.K,{gap:4,children:[(0,r.jsx)("blockquote",{className:eN().blockquote,children:l}),(0,r.jsx)("figcaption",{className:eN().author,children:n})]})})]})]})};function eE(e){let{name:t,text:n,quoteauthor:a,avatar:i,link:l}=e.data.target.fields,s=i.fields.file.url;return(0,r.jsx)(eL,{author:eA(a),"data-vercel-edit-target":!0,imageURL:`https:${s}`,link:l,name:t,children:eA(n)})}var eC=n(891729);function eT(e){let{text:t,quoteauthor:n,avatar:a}=e.data.target.fields,i=a.fields.file.url;return(0,r.jsx)(eC.Testimonial,{author:{imageURL:`https:${i}`,name:eA(n)},children:eA(t)})}function eS(e){let{data:t}=e;return(0,r.jsxs)("div",{className:m().twoColumnsContent,children:[(0,r.jsx)("div",{children:eA(t.target.fields.column1)}),(0,r.jsx)("div",{children:eA(t.target.fields.column2)})]})}var eW=n(932350),eO=n.n(eW),eI=n(3048);function eq(e){let{url:t,caption:n}=e.data.target.fields;if(!t||"string"!=typeof t)return null;let a=eO()(t);return a?(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("div",{style:{aspectRatio:"16 / 9"},children:(0,r.jsx)(ea.YouTube,{caption:n||"",params:function(e){let[t,n]=e.split("?");if(!n)return;let r=eI.parse(n),a={...r};return"t"in a&&(a.start=a.t,delete a.t),eI.stringify(a)}(t),videoId:a})}),n?(0,r.jsx)(eo.O,{children:n}):null]}):null}function eG(e){return"uri"in e.data?e.data.uri:""}function eH(e){return Array.isArray(e)?e.map(e=>"string"==typeof e?null:"UL"===function(e){let{type:t}=e;return"string"==typeof t?t:t.name||"Unknown"}(e)?e:e.props.children):null}let eZ={renderNode:{[i.BLOCKS.HR]:function(){return(0,r.jsx)(p.Z,{})},[i.BLOCKS.EMBEDDED_ASSET]:e=>(0,h.u)(e.data.target.fields),[i.BLOCKS.EMBEDDED_ENTRY]:e=>{let t=e.data.target.sys.contentType.sys.id;if("blogInlineCta"===t){let{buttonCopy:t,heading:n,icon:a,subheading:i,url:l,clickEventValue:d}=e.data.target.fields;return void 0!==d?(0,r.jsx)(u.R,{clickEventLocation:"blog",clickEventValue:d,ctaLink:l,ctaText:t,details:i,icon:s[a],title:n}):(0,r.jsx)(u.R,{ctaLink:l,ctaText:t,details:i,icon:s[a],title:n})}return function(e){if("quote"===T(e))return(0,r.jsx)(eT,{...e});if("partnerQuote"===T(e))return(0,r.jsx)(eE,{...e});if("mobileAndModeDependentMedia"===T(e))return(0,r.jsx)(em,{...e});if("modeDependentMedia"===T(e))return(0,r.jsx)(ep,{...e});if("customerLogos"===T(e)){let{logos:t}=e.data.target.fields;return(0,r.jsx)(w,{logos:t})}if("accordion"===T(e))return(0,r.jsx)(el,{...e});if("caption"===T(e))return(0,r.jsx)(ed,{...e});if("note"===T(e))return(0,r.jsx)(ef,{...e});if("code"===T(e))return(0,r.jsx)(ec,{...e});if("youTubeVideo"===T(e))return(0,r.jsx)(eq,{...e});if("linkedMedia"===T(e))return(0,r.jsx)(eg,{...e});if("tweet"===T(e))return(0,r.jsx)(ei,{...e});if("evaluatedCode"===T(e))return(0,r.jsx)(eh,{...e});if("cardGrid"===T(e)){let{cards:t,style:n}=e.data.target.fields;return t&&void 0!==n?(0,r.jsx)(C,{cards:t,style:n}):null}return"codeSandbox"===T(e)?(0,r.jsx)(eu,{...e}):"twoColumnsContent"===T(e)?(0,r.jsx)(eS,{...e}):null}(e)},[i.INLINES.EMBEDDED_ENTRY]:function(e){if("keyboardInput"===T(e)){let{KBD:t}=ea,{metaModifier:n,shiftModifier:a,altModifier:i,controlModifier:l,value:s}=e.data.target.fields;return(0,r.jsx)(t,{alt:i,ctrl:l,meta:n,shift:a,children:s})}return null},[i.BLOCKS.PARAGRAPH]:(e,t)=>(0,r.jsx)("p",{className:m().paragraph,children:t}),[i.INLINES.HYPERLINK]:(e,t)=>(0,r.jsx)(ea.Link,{href:eG(e),variant:"highlight",children:t}),[i.BLOCKS.UL_LIST]:(e,t)=>(0,r.jsx)(ea.ul,{children:t}),[i.BLOCKS.OL_LIST]:(e,t)=>(0,r.jsx)("ol",{children:t}),[i.BLOCKS.LIST_ITEM]:(e,t)=>Array.isArray(t)?(0,r.jsx)(ea.li,{className:m().listItem,children:eH(t)}):null,[i.BLOCKS.HEADING_1]:(e,t)=>(0,r.jsx)(ea.Heading,{lean:!0,children:(0,r.jsx)("h1",{children:t})}),[i.BLOCKS.HEADING_2]:(e,t)=>(0,r.jsx)(ea.Heading,{lean:!0,children:(0,r.jsx)("h2",{className:m().heading2,children:t})}),[i.BLOCKS.HEADING_3]:(e,t)=>(0,r.jsx)(ea.Heading,{lean:!0,children:(0,r.jsx)("h3",{className:m().heading3,children:t})})},renderMark:{[i.MARKS.CODE]:e=>(0,r.jsx)(ea.code,{fontSize:"0.9em",children:e})}};function eA(e,t,n){let a=eZ;if(t){let{Text:e}=ea,t=n?"span":e;a={...a,renderNode:{...a.renderNode,[i.BLOCKS.PARAGRAPH]:(e,n)=>(0,r.jsx)(t,{children:n})}}}let s=(0,l.h)(e,a);return Array.isArray(s)?s:[s]}function eR(e){return(0,l.h)(e,{renderNode:{[i.BLOCKS.PARAGRAPH]:(e,t)=>(0,r.jsx)(o.ZP,{p:!0,style:{color:"var(--geist-foreground)"},children:t}),[i.INLINES.HYPERLINK]:(e,t)=>(0,r.jsx)(c.r,{href:eG(e),variant:"highlight",children:t}),[i.BLOCKS.UL_LIST]:(e,t)=>(0,r.jsx)(d.UL,{children:t}),[i.BLOCKS.OL_LIST]:(e,t)=>(0,r.jsx)(d.OL,{children:t}),[i.BLOCKS.LIST_ITEM]:(e,t)=>Array.isArray(t)?(0,r.jsx)(d.LI,{children:eH(t)}):null,[i.BLOCKS.HEADING_3]:(e,t)=>(0,r.jsx)(o.ZP,{h3:!0,style:{color:"var(--geist-foreground)"},children:t})}})}},967609:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=n(4799),a=n(512432),i=n.n(a);function l(e){let{children:t}=e;return(0,r.jsx)("figcaption",{className:i().caption,children:t})}},285513:function(e,t,n){"use strict";n.d(t,{u:function(){return c}});var r=n(4799),a=n(540975),i=n(489853),l=n(512432),s=n.n(l),d=n(967609),o=n(558544);let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{dottedBackground:!0,imagePercentageWidth:100,fullWidth:!1},{description:n,file:{contentType:l="",fileName:c,url:u,details:h}}=e;if(l.startsWith("image/")){let{image:e}=h;if(!e)return null;let{height:i,width:l}=e,o=t.fullWidth?1280:t.imagePercentageWidth?Math.floor(t.imagePercentageWidth/100*(l/2)):l/2,g=t.imagePercentageWidth?Math.floor(t.imagePercentageWidth/100*(i/2)):i/2;return t.fullWidth?(0,r.jsxs)("figure",{className:s()["image-wrapper"],"data-vercel-edit-target":!0,style:{backgroundImage:"none"},children:[(0,r.jsx)("div",{className:s()["full-width-image-container"],children:(0,r.jsx)("div",{className:s()["full-width-image"],style:{"--width":l,"--height":i},children:(0,r.jsx)("div",{className:s()["full-width-image-inner"],children:(0,r.jsx)(a.Z,{alt:n||c,height:l*((i||1)/(l||1)),srcDark:`https:${u}`,srcLight:`https:${u}`,width:l})})})}),n?(0,r.jsx)(d.O,{children:n}):null]}):(0,r.jsxs)("figure",{className:s()["image-wrapper"],"data-vercel-edit-target":!0,style:{...!t.dottedBackground&&{backgroundImage:"none"}},children:[(0,r.jsx)("div",{className:s().image,style:{...t.imagePercentageWidth&&{maxWidth:`${Math.floor(t.imagePercentageWidth/100*800)}px`}},children:(0,r.jsx)(a.Z,{alt:n||c,height:g,srcDark:`https:${u}`,srcLight:`https:${u}`,width:o})}),n?(0,r.jsx)(d.O,{children:n}):null]})}if(l.startsWith("video/")){let e=null==n?void 0:n.match(/\(([^)]*)\)[^(]*$/),t={width:500,height:500};if(e){let r=e[1].split("/");t.width=parseInt(r[0]),t.height=parseInt(r[1]),n=n.replace(e[0],"").trim()}let a=Math.min(t.width,776),l=t.height/t.width*a;return(0,r.jsxs)("div",{className:s().video,"data-vercel-edit-target":!0,style:{position:"relative"},children:[(0,r.jsx)(i.Z,{borderRadius:!0,height:l,lazy:!0,margin:50,maxWidth:"100%",src:(0,o._)(u,"video"),width:a}),n?(0,r.jsx)(d.O,{children:n}):null]})}return null}},558544:function(e,t,n){"use strict";function r(e,t){let n=`https://assets.vercel.com/${t}/upload/contentful/${t}/`,r=e.substring(23,e.length);return n+r}n.d(t,{_:function(){return r}})},880009:function(e,t,n){"use strict";n.d(t,{R:function(){return a}});var r=n(417946);function a(e){var t;return"string"!=typeof e?{cleaned:e,encoded:""}:{cleaned:e.replace(r.X6,""),encoded:(null===(t=e.match(r.X6))||void 0===t?void 0:t[0])||""}}},168522:function(e,t,n){"use strict";n.d(t,{s:function(){return a}});var r=n(872820);let a=(0,r.H1)('<path d="M15 18l-6-6 6-6"/>')},42193:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});var r=n(872820);let a=(0,r.H1)('<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>')},722792:function(e,t,n){"use strict";n.d(t,{k:function(){return a}});var r=n(872820);let a=(0,r.H1)('<path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>')},818072:function(e){e.exports={card:"card_card__sPxPB",shadow:"card_shadow__wGyZs",border:"card_border__zW_rb",icon:"card_icon__lQg8j",title:"card_title__vFLPg",description:"card_description__zuY22"}},459617:function(e){e.exports={"card-grid":"card-grid_card-grid__bfnOx"}},396673:function(e){e.exports={cards:"customer-logos_cards__YnZvm",card:"customer-logos_card__vg6ex",wrap:"customer-logos_wrap__Dm003"}},586496:function(e){e.exports={quote:"partner-quote_quote__onDuq",name:"partner-quote_name__x0IAI",link:"partner-quote_link__WXt0Y",blockquote:"partner-quote_blockquote__RqOrs",figure:"partner-quote_figure__WoscY",author:"partner-quote_author__0eDSI"}},932159:function(e){e.exports={quote:"testimonial_quote__xdqSu",blockquote:"testimonial_blockquote__PI2M9",figure:"testimonial_figure__PMlom",avatarWrapper:"testimonial_avatarWrapper__bVg8w",avatar:"testimonial_avatar__tx9g_",authorWrapper:"testimonial_authorWrapper__wz3KC",authorName:"testimonial_authorName__dAxzw",authorTitle:"testimonial_authorTitle__Pq_9U"}},10388:function(e){e.exports={desktopOnly:"utils_desktopOnly__qnw1V",mobileOnly:"utils_mobileOnly__k_OU_",lightOnly:"utils_lightOnly__uOg_o",darkOnly:"utils_darkOnly__FCMwG"}},400981:function(e){e.exports={link:"heading_link__TvSbo",target:"heading_target__k1D8b",permalink:"heading_permalink__CS_4k"}},328203:function(e){e.exports={container:"marketing_container__zaOuR",title:"marketing_title__84HSb",iconContainer:"marketing_iconContainer__jbTZU",button:"marketing_button__TUxxx"}},384350:function(e){e.exports={blockquote:"blockquote_blockquote__OqvRx","with-divider":"blockquote_with-divider__6o_ny"}},724771:function(e){e.exports={caption:"caption_caption__5eKXE",code:"caption_code__8vpQp"}},430426:function(e){e.exports={h1:"heading_h1__M475C",h2:"heading_h2___pllG",h3:"heading_h3__mXqPo",h4:"heading_h4____MFa",h5:"heading_h5__UFgsd",span:"heading_span__kTMuL",command:"heading_command__7yxPL"}},160518:function(e){e.exports={internal:"link_internal__6K48J",error:"link_error__nW_2H","no-underline":"link_no-underline__wlT8S",disabled:"link_disabled__avm8H","in-warning":"link_in-warning__l8E1W",external:"link_external__Zkcct",anchor:"link_anchor__FVwJM",underlineOnHover:"link_underlineOnHover__PdhNz"}},343159:function(e){e.exports={ul:"list_ul__6hDBW",ol:"list_ol__R8ead",li:"list_li__E3ptA"}},816465:function(e){e.exports={paragraph:"text_paragraph__cc0Nr",large:"text_large__3bHlQ",div:"text_div__og85n",pdiv:"text_pdiv__S_Dt0",bold:"text_bold__DpNVD",hr:"text_hr__DcAz2",blockquote:"text_blockquote__sdGn5"}},512432:function(e){e.exports={"image-wrapper":"renderers_image-wrapper__p9gEp","no-dotted-bg":"renderers_no-dotted-bg__ZgL6w",image:"renderers_image__foQYX","full-width-image-container":"renderers_full-width-image-container__HSd0s","full-width-image":"renderers_full-width-image__hoJ25","full-width-image-inner":"renderers_full-width-image-inner__qAJi1",paragraph:"renderers_paragraph__4vwlW",listItem:"renderers_listItem____0y8",heading2:"renderers_heading2___p3x_",heading3:"renderers_heading3__2d9Ys",caption:"renderers_caption__PgKIi",captionCaret:"renderers_captionCaret__p7RoW",codeWrapper:"renderers_codeWrapper__P00ez",evaluatedCodeWrapper:"renderers_evaluatedCodeWrapper__sO0EA",codesandbox:"renderers_codesandbox__qZngX",twoColumnsContent:"renderers_twoColumnsContent__hz9xT",video:"renderers_video__sj3cF"}}}]);
"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9910],{31164:function(n,e,o){o.d(e,{Z:function(){return i}});var t=o(85893),l=o(11942);function i(n){var e=n.text,o=n.className,i=n.color,a=n.size,c=n.fallbackSize;return e?(0,t.jsx)("pre",{className:(0,l.AK)("transition-all duration-300",(0,l.e0)(a,c),o),style:{color:i},children:e}):null}},15972:function(n,e,o){o.d(e,{Z:function(){return i}});var t=o(85893),l=o(11942);function i(n){var e=n.text,o=n.className,i=n.color,a=n.size,c=n.fallbackSize,r=n.isSeoHeadline;if(!e)return null;var u=r?"h1":"h2";return(0,t.jsx)(u,{className:(0,l.AK)("break-word transition-all duration-300",(0,l.Ae)(a,c),o),style:{color:i},children:e})}},14910:function(n,e,o){o.d(e,{Z:function(){return i}});var t=o(85893),l=o(11942);function i(n){var e=n.text,o=n.className,i=n.color,a=n.style;if(!e)return null;return(0,t.jsx)("p",{className:(0,l.AK)("w-max max-w-full body-small !font-semibold",o,"badge"===a?"px-3 py-1 rounded-full":""),style:function(){var n={color:i};return"badge"===a&&(n.backgroundColor=(0,l.mR)(i,10)),n}(),children:e})}},60546:function(n,e,o){o.d(e,{OC:function(){return u}});var t=o(85893),l=o(67294),i=o(62246),a=o(4433),c=[{id:"slantLeft",getPath:function(n,e){return"M".concat(n," 0L-0 ").concat(e)}},{id:"slantRight",getPath:function(n,e){return"M0 0L".concat(n," ").concat(e)}},{id:"pointUp",getPath:function(n,e){return"M0 0".concat(e,"L").concat(n/2," 0L").concat(n," ").concat(e,"L").concat(1.5*n," 0V0")}},{id:"pointDown",getPath:function(n,e){return"M0 0L".concat(n/2," ").concat(e,"L").concat(n," 0")}},{id:"curveUp",getPath:function(n,e){return"M0 0 C".concat(n/2," ").concat(e," ").concat(n-n/2," ").concat(e," ").concat(n," 0")}},{id:"curveDown",getPath:function(n,e){return"M0 ".concat(e," C").concat(n/2," 0 ").concat(n-n/2," 0 ").concat(n," ").concat(e)}},{id:"waveLeft",getPath:function(n,e){return"M0 0C0 0 ".concat(.2023*n," ").concat(e," ").concat(.3333*n," ").concat(e,"C").concat(.4681*n," ").concat(e," ").concat(.5318*n," 0 ").concat(.6667*n," 0C").concat(.8015*n," 0 ").concat(n," ").concat(e," ").concat(n," ").concat(e)}},{id:"waveRight",getPath:function(n,e){return"M".concat(n," 0C").concat(n," 0 ").concat(.8*n," ").concat(e," ").concat(.666*n," ").concat(e,"C").concat(.547*n," ").concat(e," ").concat(.483*n," 0 ").concat(.333*n," 0C").concat(.184*n," 0 -0.00012207 ").concat(e," -0.00012207 ").concat(e)}},{id:"jaggedLeft",getPath:function(n,e){return"M0 0L".concat(n/3," ").concat(e,"L").concat(n/1.5," 0L").concat(n," ").concat(e)}},{id:"jaggedRight",getPath:function(n,e){return"M".concat(n," 0L").concat(n/1.5," ").concat(e,"L").concat(n/3," 0L0 ").concat(e)}},{id:"swoopLeft",getPath:function(n,e){return"M0 ".concat(e,"C").concat(n," 0 ").concat(2*n," 0 ").concat(2*n," 0")}},{id:"swoopRight",getPath:function(n,e){return"M".concat(n," ").concat(e,"C").concat(n/2," 0 0 0 0 0")}},{id:"none",getPath:function(n,e){return"M0 ".concat(e,"H").concat(n)}}],r=function(n){var e=n.width,o=n.shape,l=n.strokeWidth,i=n.strokeColor,r=n.strokeType,u=c.find((function(n){return n.id===(null!==o&&void 0!==o?o:"none")})),s=Math.floor(e),d="none"===u.id?Math.floor(l):Math.floor(s/a.c8),v=u.getPath(s,d);return(0,t.jsx)("svg",{className:"absolute bottom-0 left-0 z-50 overflow-visible",fill:"transparent",width:s,height:d,viewBox:"0 0 ".concat(s," ").concat(d),children:(0,t.jsx)("path",{d:v,stroke:i,strokeWidth:l,strokeDasharray:"dashed"===r?"40 20":void 0})})},u=function(n){var e=n.contentRef,o=n.border,a=n.sectionDivider,c=o||{},u=c.type,s=c.width,d=c.color,v=(0,l.useState)(0),m=v[0],f=v[1],g=(0,l.useCallback)((function(){var n;f(null!==(n=e.current.offsetWidth)&&void 0!==n?n:0)}),[e]);return(0,i.Z)(g,o?e:null),o?(0,t.jsx)(r,{width:m,shape:a,strokeType:u,strokeWidth:s,strokeColor:d}):null}},64501:function(n,e,o){o.d(e,{$3:function(){return c}});var t=o(67294),l=o(11942);var i={xsmall:{small:{nColumns:1,gap:0},medium:{nColumns:1,gap:0},large:{nColumns:1,gap:0}},small:{small:{nColumns:2,gap:24},medium:{nColumns:2,gap:24},large:{nColumns:1,gap:0}},large:{small:{nColumns:2,gap:24},medium:{nColumns:2,gap:24},large:{nColumns:1,gap:0}},xlarge:{small:{nColumns:3,gap:80},medium:{nColumns:2,gap:80},large:{nColumns:1,gap:0}}},a={xsmall:{small:{nColumns:1,gap:16},medium:{nColumns:1,gap:40},large:{nColumns:1,gap:40}},small:{small:{nColumns:3,gap:24},medium:{nColumns:2,gap:40},large:{nColumns:1,gap:40}},large:{small:{nColumns:4,gap:24},medium:{nColumns:3,gap:40},large:{nColumns:2,gap:40}},xlarge:{small:{nColumns:4,gap:40},medium:{nColumns:3,gap:40},large:{nColumns:2,gap:80}}};function c(n,e){var o=function(){var n=(0,l.ac)("(min-width: 640px)"),e=(0,l.ac)("(min-width: 1024px)");return(0,l.ac)("(min-width: 1280px)")?"xlarge":e?"large":n?"small":"xsmall"}(),c=(0,t.useState)({}),r=c[0],u=c[1],s=(0,t.useState)({}),d=s[0],v=s[1];return(0,t.useEffect)((function(){var t=function(n){return"menu-list"===n?i:a}(e),l=t[o][null!==n&&void 0!==n?n:"medium"],c=l.nColumns,r=l.gap;u(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{flex:"0 0 calc(".concat(100/n,"% - ").concat((n-1)*e/n,"px")}}(c,r)),v({gap:"".concat(r,"px")})}),[o,n]),{itemsContainerStyles:d,itemsStyles:r}}},29910:function(n,e,o){o.r(e),o.d(e,{default:function(){return A}});var t=o(14251),l=o(52875),i=o(85893),a=o(11942),c=o(29260),r=o.n(c),u=o(52077),s=o(399),d=o(21123),v=o(67294),m={color:"#000000",amount:80},f={below:"",top:"absolute w-full bottom-0 left-0",covering:"absolute w-full h-full top-0 left-0"},g={below:"py-6",top:"p-6",covering:"p-10"};function h(n){var e,o=p(n).position;return function(n,e){return((null===e||void 0===e?void 0:e.listStyleType)||"default")===n}("default",n)&&"below"===o?null:null!==(e=null===n||void 0===n?void 0:n.itemsVerticalAlign)&&void 0!==e?e:"top"===o?"bottom":"covering"===o?"center":"top"}function p(n){var e,o=null===n||void 0===n?void 0:n.showImage,t=null===n||void 0===n?void 0:n.showHeading,l=null===n||void 0===n?void 0:n.showContent,i=null===n||void 0===n?void 0:n.showButton,a=null!==(e=null===n||void 0===n?void 0:n.imageFit)&&void 0!==e?e:"cover",c=(null===n||void 0===n?void 0:n.textSettings)||{},r=!o||"cover"!==a||!i&&!l&&!t;return c.position&&!r||(c.position="below"),c.background&&!r||(c.background=m),c}var x=o(62246),b=o(7004),y=o(4433),w=o(60546),C=o(64501),k=o(41370),j=o(14910),S=o(15972),N=o(31164);function A(n){var e,o=n.id,c=n.block,m=n.website,A=n.previousBlock,H=n.isSeoHeadline,M=n.stickyHeaderOffsetStyle,R=null===c||void 0===c?void 0:c.tagline,K=null===c||void 0===c?void 0:c.headline,L=null===c||void 0===c?void 0:c.content,z=null===c||void 0===c?void 0:c.showImage,P=null===c||void 0===c?void 0:c.showIcon,W=null===c||void 0===c?void 0:c.showHeading,Z=null===c||void 0===c?void 0:c.showContent,E=null===c||void 0===c?void 0:c.showButton,T=null===c||void 0===c?void 0:c.fullContentLink,I=null===c||void 0===c?void 0:c.aspectRatio,B=null!==(e=null===c||void 0===c?void 0:c.imageFit)&&void 0!==e?e:"cover",D=null===c||void 0===c?void 0:c.cornerRadius,_=null===c||void 0===c?void 0:c.align,O=p(c),$=null===c||void 0===c?void 0:c.animation,U=null===m||void 0===m?void 0:m.animation,F=null===c||void 0===c?void 0:c.divider,q=null===c||void 0===c?void 0:c.border,G=(0,C.$3)(null===c||void 0===c?void 0:c.itemsSize),Q=G.itemsStyles,V=G.itemsContainerStyles,J=(0,v.useRef)(null),X=(0,v.useState)("#000000"),Y=X[0],nn=X[1],en=(0,v.useState)("#000000"),on=en[0],tn=en[1],ln=(0,v.useState)("#000000"),an=ln[0],cn=ln[1],rn=(0,v.useState)("below"===(null===O||void 0===O?void 0:O.position)?void 0:"0px"),un=rn[0],sn=rn[1],dn=function(n,e){var o,t,l=n.position,i=n.background,c={},r={};return"covering"===l||"top"===l?(r.backgroundColor=(0,a.mR)(i.color,i.amount),c.color=(0,a.$O)(i.color)):c.color=e,{containerClasses:null!==(o=f[l])&&void 0!==o?o:"",containerStyles:r,contentClasses:null!==(t=g[l])&&void 0!==t?t:"",contentStyles:c}}(O,Y),vn=(0,v.useRef)([]),mn=(0,v.useCallback)((function(){var n,e,o=vn.current.reduce((function(o,t){var l,i;return(null!==(n=null===(l=o.current)||void 0===l?void 0:l.offsetHeight)&&void 0!==n?n:0)>(null!==(e=null===(i=t.current)||void 0===i?void 0:i.offsetHeight)&&void 0!==e?e:0)?o:t}));o.current&&sn(o.current.offsetHeight+"px")}),[vn]);(0,x.Z)(mn,"below"===(null===O||void 0===O?void 0:O.position)?null:vn.current);var fn,gn=(0,s.Z)(c).minHeight,hn=function(){return"left"===_?"ml-0 mr-auto":"right"===_?"ml-auto mr-0":"mx-auto"},pn=function(){return"left"===_?"justify-start":"right"===_?"justify-end":"justify-center"},xn=function(n){return((null===c||void 0===c?void 0:c.listStyleType)||"default")===n},bn=function(){var n=Y;return xn("style1")&&(n=on||Y),xn("style2")&&(n=an||Y),n},yn=function(){var n;return xn("style1")?(0,a.h)(an,Y===a.nJ?20:-10):xn("style2")?(0,a.mR)(on,10):null===dn||void 0===dn||null===(n=dn.containerStyles)||void 0===n?void 0:n.backgroundColor},wn=T?"a":"div";return(0,i.jsxs)("section",{className:"relative",children:[(0,i.jsxs)("div",{ref:J,id:o,className:(0,a.AK)("relative flex flex-none flex-shrink-0 break-word",(0,a.A2)((null===c||void 0===c?void 0:c.verticalAlign)||"center")),style:(0,t.Z)({minHeight:gn},(0,y.$h)(c),M),children:[(0,i.jsx)(d.Z,{block:c,website:m,setTextColor:nn,setAccentColor:tn,setBackgroundColor:cn}),(0,i.jsx)("div",{className:(0,a.AK)("relative z-10 container mx-auto",(0,a.bG)(null===c||void 0===c?void 0:c.spacing)),children:(0,i.jsxs)("div",{children:[(R||K||L)&&(0,i.jsxs)(k.Z,{className:(0,a.AK)("flex flex-col gap-4 mb-6",(0,a.CE)(_),xn("style1")&&"w-full md:max-w-200",xn("style1")&&P&&"mb-20"),settings:$,globalSettings:U,children:[(0,i.jsx)(j.Z,{text:R,color:on,style:null===c||void 0===c?void 0:c.taglineStyle}),(0,i.jsx)(S.Z,{className:(0,a.AK)("block w-full",hn()),text:K,size:null===c||void 0===c?void 0:c.headingTextStyle,color:Y,isSeoHeadline:H}),(0,i.jsx)(N.Z,{className:(0,a.AK)("block w-full",hn()),text:L,size:null===c||void 0===c?void 0:c.bodyTextStyle,color:Y})]}),(null===c||void 0===c?void 0:c.items)&&(0,i.jsx)("div",{className:(0,a.AK)("flex flex-wrap relative",pn()),style:V,children:c.items.map((function(n,e){var s,d,v,f,g,p,x,y,w,C,j;return(0,i.jsx)(wn,{className:(0,a.AK)("group w-full relative",xn("style1")&&"mb-6",xn("default")&&"overflow-hidden",(0,a.yW)(D,null===m||void 0===m?void 0:m.cornerRadius),"0px"===un?"opacity-0":"",T?"focus:outline-blue-600 cursor-pointer":""),onClick:T?function(e){return(0,b.Gc)(e,null===n||void 0===n?void 0:n.button)}:void 0,target:T?(0,b.U9)(null===n||void 0===n?void 0:n.button,m):void 0,href:T?(0,b.f$)(null===n||void 0===n?void 0:n.button,m):void 0,style:Q,children:(0,i.jsx)(k.Z,{settings:$,globalSettings:U,delay:100*(e+1),className:"h-full",children:(0,i.jsx)("div",{className:(0,a.AK)("flex flex-col h-full",xn("style2")&&"block w-full p-8 bg-opacity-90",(0,a.yW)(D,null===m||void 0===m?void 0:m.cornerRadius),h(c)&&(0,a.A2)(h(c),!0)),style:{backgroundColor:yn()},children:(0,i.jsxs)("div",{children:[z&&n.image&&(0,i.jsxs)("div",{className:(0,a.AK)("flex-shrink-0 relative overflow-hidden",(0,a.n3)(I),(0,a.yW)(D,null===m||void 0===m?void 0:m.cornerRadius)),style:{minHeight:un},children:["top"===(null===O||void 0===O?void 0:O.position)&&(0,i.jsx)("span",{className:"relative block",style:{height:un}}),(0,a.QW)(null===n||void 0===n?void 0:n.image)&&(0,i.jsx)(r(),{sizes:"200vw",quality:90,className:T?"transition-all duration-300 group-hover:scale-110":"",src:(0,a.QW)(null===n||void 0===n?void 0:n.image),onContextMenu:function(n){return n.preventDefault()},objectFit:B,objectPosition:"".concat(n.imagePositionX||"center"," ").concat(n.imagePositionY||"center"),layout:"fill",alt:n.imageAltText||n.title||n.image.description||n.image.author,title:n.imageAltText})]}),(0,i.jsxs)("div",{className:(0,a.AK)("flex flex-row items-center",(null===c||void 0===c?void 0:c.showSteps)&&P&&(null===(s=n.icon)||void 0===s||null===(d=s.media)||void 0===d?void 0:d.url)?"justify-between":pn()),children:[(null===c||void 0===c?void 0:c.showSteps)&&(0,i.jsx)("div",{className:(0,a.AK)("flex flex-row items-center",(null===c||void 0===c?void 0:c.showSteps)&&(null===n||void 0===n||null===(v=n.icon)||void 0===v||null===(f=v.media)||void 0===f?void 0:f.url)?"justify-between":pn()),children:xn("style2")&&!!(null===c||void 0===c?void 0:c.showSteps)&&(0,i.jsx)("span",{className:(0,a.AK)("text-h5 font-medium mb-2"),style:{color:(0,a.h)(Y,20)},children:null!==(fn=null===n||void 0===n?void 0:n.tagline)&&void 0!==fn?fn:"Step ".concat(e+1)})}),P&&(null===(g=n.icon)||void 0===g?void 0:g.media)&&(0,i.jsx)("div",{className:(0,a.AK)(xn("style1")&&"absolute z-10 left-1/2 -top-10 w-20 h-20 -translate-x-1/2 flex flex-row justify-center items-center",xn("style2")&&"ml-auto w-12 h-12 flex flex-row justify-center items-center",!xn("default")&&(0,a.yW)(D,null===m||void 0===m?void 0:m.cornerRadius)),style:xn("style1")?{background:"linear-gradient(0deg, ".concat((0,a.h)(an,5),", ").concat((0,a.h)(an,5),"), linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))")}:xn("style2")?{backgroundColor:on}:{},children:(0,i.jsx)("div",{className:(0,a.AK)("flex-shrink-0 relative transition-all duration-300",xn("default")&&(c.iconSize||"w-12 h-12"),xn("default")?hn():"mx-auto",xn("style1")&&"w-12 h-12",xn("style2")&&"w-8 h-8"),children:(0,i.jsx)("div",{className:"absolute w-full h-full",style:{color:bn(),backgroundColor:(null===(p=n.icon)||void 0===p?void 0:p.color)||"currentColor",WebkitMaskImage:'url("'.concat(null===n||void 0===n||null===(x=n.icon)||void 0===x||null===(y=x.media)||void 0===y?void 0:y.url,'")'),maskImage:'url("'.concat(null===n||void 0===n||null===(w=n.icon)||void 0===w||null===(C=w.media)||void 0===C?void 0:C.url,'")'),WebkitMaskPosition:"center",maskPosition:"center",WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat",WebkitMaskSize:"contain",maskSize:"contain"}})})})]}),(0,i.jsx)("div",{className:(0,a.AK)("flex flex-col",dn.containerClasses,xn("style1")&&"p-8",xn("style1")&&(0,a.yW)(D,null===m||void 0===m?void 0:m.cornerRadius),h(c)&&(0,a.A2)(h(c),!0)),style:(0,l.Z)((0,t.Z)({},dn.containerStyles),{minHeight:un}),children:(0,i.jsxs)("div",{ref:function(n){return vn.current[e]={current:n}},className:(0,a.AK)("flex flex-col",(0,a.CE)(_),dn.contentClasses,xn("style1")&&"!pb-0",h(c)&&(0,a.A2)(h(c),!0)),style:dn.contentStyles,children:[W&&(0,i.jsx)("p",{className:(0,a.AK)("heading-medium mb-4",hn(),T?"group-hover:underline":""),style:{color:"currentColor"},children:n.title}),Z&&(0,i.jsx)("div",{className:(0,a.AK)("rich-text-block",hn(),T&&!W?"group-hover:underline":""),style:{color:"currentColor"},dangerouslySetInnerHTML:{__html:n.content}}),E&&(null===n||void 0===n?void 0:n.button)&&(0,i.jsx)(u.Z,{button:(0,l.Z)((0,t.Z)({},n.button),{style:null===(j=c.button)||void 0===j?void 0:j.style}),block:c,website:m,className:"mt-4",fallbackSize:"md"})]})})]})})})},"section-".concat(o,"-item-").concat(e))}))})]})}),(0,i.jsx)(y.iz,{contentRef:J,divider:F,previousDivider:null===A||void 0===A?void 0:A.divider,border:q,previousBorder:null===A||void 0===A?void 0:A.border,dividerUniqueId:"".concat(o,"-").concat(F)})]}),q&&(0,i.jsx)(w.OC,{contentRef:J,border:q,sectionDivider:F})]})}},399:function(n,e,o){o.d(e,{Z:function(){return a}});var t=o(67294),l="website-header";function i(n){var e;return n&&1===n.idx?(null===(e=null===document||void 0===document?void 0:document.getElementById(l))||void 0===e?void 0:e.offsetHeight)||80:0}function a(n){var e,o,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=(0,t.useState)(0),r=c[0],u=c[1],s=(0,t.useState)([0,0]),d=s[0],v=s[1],m=l,f=1===(null===n||void 0===n?void 0:n.idx)&&(null===n||void 0===n?void 0:n.combineWithHeader),g=a.minHeightScreenWhenCombined;return(0,t.useEffect)((function(){var e,o=function(){v([window.innerWidth,window.innerHeight])};try{var t=document.getElementById(m);e=new ResizeObserver((function(){n&&u(i(n))})),t&&e.observe(t)}catch(l){}return window.addEventListener("resize",o),o(),function(){window.removeEventListener("resize",o),e&&e.disconnect()}}),[]),(0,t.useEffect)((function(){n&&u(i(n))}),[n,d]),{minHeight:(null===n||void 0===n||null===(e=n.spacing)||void 0===e?void 0:e.minHeight)?"calc(".concat("min-h-screen"===(null===n||void 0===n||null===(o=n.spacing)||void 0===o?void 0:o.minHeight)||g&&f?"100vh":"0px"," - ").concat((null===n||void 0===n?void 0:n.combineWithHeader)?0:r,"px)"):"0px",headerHeight:r}}}}]);
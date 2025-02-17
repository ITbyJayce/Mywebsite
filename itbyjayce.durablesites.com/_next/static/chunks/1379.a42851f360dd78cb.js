"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1379],{31164:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(85893),i=t(11942);function l(e){var n=e.text,t=e.className,l=e.color,c=e.size,r=e.fallbackSize;return n?(0,o.jsx)("pre",{className:(0,i.AK)("transition-all duration-300",(0,i.e0)(c,r),t),style:{color:l},children:n}):null}},15972:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(85893),i=t(11942);function l(e){var n=e.text,t=e.className,l=e.color,c=e.size,r=e.fallbackSize,a=e.isSeoHeadline;if(!n)return null;var d=a?"h1":"h2";return(0,o.jsx)(d,{className:(0,i.AK)("break-word transition-all duration-300",(0,i.Ae)(c,r),t),style:{color:l},children:n})}},14910:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(85893),i=t(11942);function l(e){var n=e.text,t=e.className,l=e.color,c=e.style;if(!n)return null;return(0,o.jsx)("p",{className:(0,i.AK)("w-max max-w-full body-small !font-semibold",t,"badge"===c?"px-3 py-1 rounded-full":""),style:function(){var e={color:l};return"badge"===c&&(e.backgroundColor=(0,i.mR)(l,10)),e}(),children:n})}},60546:function(e,n,t){t.d(n,{OC:function(){return d}});var o=t(85893),i=t(67294),l=t(62246),c=t(4433),r=[{id:"slantLeft",getPath:function(e,n){return"M".concat(e," 0L-0 ").concat(n)}},{id:"slantRight",getPath:function(e,n){return"M0 0L".concat(e," ").concat(n)}},{id:"pointUp",getPath:function(e,n){return"M0 0".concat(n,"L").concat(e/2," 0L").concat(e," ").concat(n,"L").concat(1.5*e," 0V0")}},{id:"pointDown",getPath:function(e,n){return"M0 0L".concat(e/2," ").concat(n,"L").concat(e," 0")}},{id:"curveUp",getPath:function(e,n){return"M0 0 C".concat(e/2," ").concat(n," ").concat(e-e/2," ").concat(n," ").concat(e," 0")}},{id:"curveDown",getPath:function(e,n){return"M0 ".concat(n," C").concat(e/2," 0 ").concat(e-e/2," 0 ").concat(e," ").concat(n)}},{id:"waveLeft",getPath:function(e,n){return"M0 0C0 0 ".concat(.2023*e," ").concat(n," ").concat(.3333*e," ").concat(n,"C").concat(.4681*e," ").concat(n," ").concat(.5318*e," 0 ").concat(.6667*e," 0C").concat(.8015*e," 0 ").concat(e," ").concat(n," ").concat(e," ").concat(n)}},{id:"waveRight",getPath:function(e,n){return"M".concat(e," 0C").concat(e," 0 ").concat(.8*e," ").concat(n," ").concat(.666*e," ").concat(n,"C").concat(.547*e," ").concat(n," ").concat(.483*e," 0 ").concat(.333*e," 0C").concat(.184*e," 0 -0.00012207 ").concat(n," -0.00012207 ").concat(n)}},{id:"jaggedLeft",getPath:function(e,n){return"M0 0L".concat(e/3," ").concat(n,"L").concat(e/1.5," 0L").concat(e," ").concat(n)}},{id:"jaggedRight",getPath:function(e,n){return"M".concat(e," 0L").concat(e/1.5," ").concat(n,"L").concat(e/3," 0L0 ").concat(n)}},{id:"swoopLeft",getPath:function(e,n){return"M0 ".concat(n,"C").concat(e," 0 ").concat(2*e," 0 ").concat(2*e," 0")}},{id:"swoopRight",getPath:function(e,n){return"M".concat(e," ").concat(n,"C").concat(e/2," 0 0 0 0 0")}},{id:"none",getPath:function(e,n){return"M0 ".concat(n,"H").concat(e)}}],a=function(e){var n=e.width,t=e.shape,i=e.strokeWidth,l=e.strokeColor,a=e.strokeType,d=r.find((function(e){return e.id===(null!==t&&void 0!==t?t:"none")})),s=Math.floor(n),u="none"===d.id?Math.floor(i):Math.floor(s/c.c8),v=d.getPath(s,u);return(0,o.jsx)("svg",{className:"absolute bottom-0 left-0 z-50 overflow-visible",fill:"transparent",width:s,height:u,viewBox:"0 0 ".concat(s," ").concat(u),children:(0,o.jsx)("path",{d:v,stroke:l,strokeWidth:i,strokeDasharray:"dashed"===a?"40 20":void 0})})},d=function(e){var n=e.contentRef,t=e.border,c=e.sectionDivider,r=t||{},d=r.type,s=r.width,u=r.color,v=(0,i.useState)(0),f=v[0],h=v[1],x=(0,i.useCallback)((function(){var e;h(null!==(e=n.current.offsetWidth)&&void 0!==e?e:0)}),[n]);return(0,l.Z)(x,t?n:null),t?(0,o.jsx)(a,{width:f,shape:c,strokeType:d,strokeWidth:s,strokeColor:u}):null}},9746:function(e,n,t){t.d(n,{f:function(){return s}});var o=t(14251),i=t(52875),l=t(85893),c=t(11942),r=t(4433),a=t(67294),d=t(60546),s=(0,a.forwardRef)((function(e,n){var t=e.children,a=e.block,s=e.textColor,u=e.headerHeight,v=e.stickyHeaderOffsetStyle,f=e.id,h=e.noPadding,x=e.minHeight,g=e.border,m=e.divider,p=e.noVerticalAlign,b=1===(null===a||void 0===a?void 0:a.idx)&&(null===a||void 0===a?void 0:a.combineWithHeader);return(0,l.jsxs)("section",{className:"relative",children:[(0,l.jsx)("div",{ref:n,id:f,"data-text-color":s,className:(0,c.AK)("flex relative break-word",h||p?"":(0,c.A2)(null===a||void 0===a?void 0:a.verticalAlign)),style:(0,i.Z)((0,o.Z)({},(null===a||void 0===a?void 0:a.combineWithHeader)?{marginTop:"-".concat(u,"px"),paddingTop:h?"":"".concat(u,"px")}:{},(0,r.$h)(a),v),{minHeight:x}),"data-combine-with-header":b,children:t}),g&&(0,l.jsx)(d.OC,{contentRef:n,border:g,sectionDivider:m})]})}))},51379:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var o=t(85893),i=t(67294),l=t(11942),c=t(29260),r=t.n(c),a=t(399),d=t(52077),s=t(21123),u=t(41370),v=t(4433),f=t(9746),h=t(14910),x=t(15972),g=t(31164);function m(e){var n,t,c,m,p,b,w=e.id,j=e.block,A=e.website,k=e.previousBlock,N=e.isSeoHeadline,y=e.stickyHeaderOffsetStyle,H=(0,i.useState)({top:0,bottom:0}),C=H[0],K=H[1],S=(0,i.useState)("#000000"),L=S[0],P=S[1],M=(0,i.useState)("#000000"),Z=M[0],z=M[1],W=(0,l.ac)("(max-width: 1023px)"),R=(0,a.Z)(j),T=R.minHeight,E=R.headerHeight,O=(0,i.useRef)(null),_=null===j||void 0===j?void 0:j.tagline,B=null===j||void 0===j?void 0:j.headline,D=null===j||void 0===j?void 0:j.content,F=(null===j||void 0===j||null===(n=j.buttons)||void 0===n?void 0:n.items)||(j.button?[j.button]:[]),I=(null===j||void 0===j||null===(t=j.buttons)||void 0===t?void 0:t.items)?null===j||void 0===j||null===(c=j.buttons)||void 0===c?void 0:c.enabled:!!j.button,U=(null===j||void 0===j?void 0:j.placement)||"right",V=(null===j||void 0===j?void 0:j.align)||"center",q=(null===j||void 0===j?void 0:j.verticalAlign)||"middle",Q=null===j||void 0===j?void 0:j.borderless,X=null===j||void 0===j?void 0:j.animation,Y=null===A||void 0===A?void 0:A.animation,$=1===(null===j||void 0===j?void 0:j.idx)&&!!(null===j||void 0===j?void 0:j.combineWithHeader),G=["left","right"].includes(U)&&(null===j||void 0===j||null===(m=j.mobile)||void 0===m?void 0:m.reverseOrder),J=null===j||void 0===j?void 0:j.divider,ee=null===j||void 0===j?void 0:j.border,ne=function(){switch(U){case"left":return"".concat(G?"flex-col":"flex-col-reverse"," lg:flex-row-reverse");case"top":return G?"flex-col":"flex-col-reverse";case"bottom":return G?"flex-col-reverse":"flex-col";default:return"".concat(G?"flex-col-reverse":"flex-col"," lg:flex-row")}},te=function(){switch(V){case"left":return"items-start";case"center":return"items-center text-center mx-auto";case"right":return"items-end text-right ml-auto"}},oe=function(){return["left","right"].includes(U)?(0,l.A2)(q,Q):te()},ie=function(){return["top","bottom"].includes(U)?te():"left"===U?"lg:mr-auto lg:ml-0":"lg:ml-auto lg:mr-0"},le=function(){return["top","bottom"].includes(U)?"w-full":"w-full lg:max-w-1/2"},ce=function(e){var n=!Q&&(0,l.yW)(null===j||void 0===j?void 0:j.cornerRadius,null===A||void 0===A?void 0:A.cornerRadius),t=(0,l.QW)(null===e||void 0===e?void 0:e.media);return t?(0,o.jsx)(r(),{unoptimized:!0,src:t,layout:"fill",objectFit:"cover",alt:e.altText||e.media.description||e.media.author,title:e.altText,objectPosition:"".concat(e.positionX||"center"," ").concat(e.positionY||"center"),className:(0,l.AK)("w-full h-full object-center object-cover ",n)}):null},re=function(){var e=(null===j||void 0===j?void 0:j.pictures)||[],n=null===j||void 0===j?void 0:j.idx;return["top","bottom"].includes(U)||W?(0,o.jsx)("div",{className:(0,l.AK)("flex h-full overflow-x-auto no-scrollbar",!Q&&"gap-4 px-5 md:px-6 lg:px-0 -mx-5 md:-mx-6 lg:mx-0"),children:e.map((function(e,t){return(0,o.jsx)("div",{className:(0,l.AK)("flex-shrink-0 lg:flex-shrink relative lg:!w-full max-h-[50vh] min-h-116 overflow-hidden",Q?"w-[90vw]":"w-[80vw]"),children:ce(e)},"banner-grid-".concat(n,"-picture-").concat(e._id,"-").concat(t))}))}):1===e.length&&(0,o.jsx)("div",{className:(0,l.AK)("relative h-full overflow-hidden",(0,l.n3)("1:1")),children:ce(e[0])})||2===e.length&&(0,o.jsx)("div",{className:(0,l.AK)("grid grid-cols-1 lg:grid-cols-2 h-full",!Q&&"gap-4"),children:e.map((function(e,t){return(0,o.jsx)("div",{className:(0,l.AK)("relative lg:min-h-142 overflow-hidden",(0,l.n3)("2:3")),children:ce(e)},"banner-grid-".concat(n,"-picture-").concat(e._id,"-").concat(t))}))})||3===e.length&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:(0,l.AK)("grid grid-cols-1 lg:grid-cols-2 lg:h-1/2",!Q&&"gap-4 mb-4"),children:e.slice(0,2).map((function(e,t){return(0,o.jsx)("div",{className:(0,l.AK)("relative overflow-hidden",(0,l.n3)("1:1")),children:ce(e)},"banner-grid-".concat(n,"-picture-").concat(e._id,"-").concat(t))}))}),(0,o.jsx)("div",{className:(0,l.AK)("grid grid-cols-1 lg:h-1/2",!Q&&"gap-4"),children:(0,o.jsx)("div",{className:(0,l.AK)("relative overflow-hidden",(0,l.n3)("16:9")),children:ce(e[2])})})]})},ae=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.Z,{text:_,color:Z,style:null===j||void 0===j?void 0:j.taglineStyle}),(0,o.jsx)(x.Z,{text:B,size:null===j||void 0===j?void 0:j.headingTextStyle,color:L,isSeoHeadline:N}),(0,o.jsx)(g.Z,{text:D,size:null===j||void 0===j?void 0:j.bodyTextStyle,color:L}),(null===F||void 0===F?void 0:F.length)>0&&I&&(0,o.jsx)("div",{className:(0,l.AK)("flex md:inline-flex flex-col md:flex-row gap-4 w-full md:w-max",_||B||D?"mt-4":""),children:null===F||void 0===F?void 0:F.map((function(e,n){return(0,o.jsx)(d.Z,{button:e,block:j,website:A,className:"w-full md:w-max"},"banner-".concat(null===j||void 0===j?void 0:j.idx,"-button-").concat(n))}))})]})};return(0,o.jsxs)(f.f,{ref:O,block:j,textColor:L,headerHeight:E,noPadding:Q,id:w,minHeight:T,stickyHeaderOffsetStyle:y,divider:J,border:ee,children:[(0,o.jsx)("div",{className:(0,l.AK)("flex w-full break-word",Q?ne():(0,l.A2)(q)),children:Q?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:(0,l.AK)("flex-1 relative"),style:Q&&("right"===U&&!G||"left"===U&&G)?{paddingTop:(null===C||void 0===C?void 0:C.top)||0,paddingBottom:(null===C||void 0===C?void 0:C.bottom)||0}:{},children:[(0,o.jsx)(s.Z,{block:j,website:A,setTextColor:P,setAccentColor:z}),(0,o.jsx)("div",{className:(0,l.AK)("relative z-10 container mx-auto flex flex-col h-full px-6 lg:px-20",oe(),(0,l.rE)(null===j||void 0===j?void 0:j.spacing)),children:(0,o.jsx)(u.Z,{settings:X,globalSettings:Y,children:(0,o.jsx)("div",{className:(0,l.AK)("flex flex-col gap-4 w-full max-w-3xl",ie()),children:ae()})})})]}),(null===j||void 0===j||null===(p=j.pictures)||void 0===p?void 0:p.length)>0&&(0,o.jsx)("div",{className:(0,l.AK)("relative lg:flex-1 h-full overflow-hidden",le()),children:re()})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{block:j,website:A,setTextColor:P,setAccentColor:z}),(0,o.jsx)("div",{className:(0,l.AK)("relative z-10 container mx-auto px-5 md:px-6",(0,l.rE)(null===j||void 0===j?void 0:j.spacing)),children:(0,o.jsx)(u.Z,{settings:X,globalSettings:Y,children:(0,o.jsxs)("div",{className:(0,l.AK)("flex w-full gap-x-12 lg:gap-x-32 gap-y-8 lg:gap-y-20",ne(),oe()),children:[(0,o.jsx)("div",{className:(0,l.AK)("flex-1 flex flex-col gap-4 w-full lg:max-w-1/2 max-w-2xl",ie()),children:ae()}),(null===j||void 0===j||null===(b=j.pictures)||void 0===b?void 0:b.length)>0&&(0,o.jsx)("div",{className:(0,l.AK)("flex-1 h-full",le()),children:re()})]})})})]})}),(0,o.jsx)(v.iz,{contentRef:O,divider:J,previousDivider:null===k||void 0===k?void 0:k.divider,border:ee,previousBorder:null===k||void 0===k?void 0:k.border,dividerUniqueId:"".concat(w,"-").concat(J),noPadding:Q,onPaddingChange:K,combinedWithHeaderOffset:$?E:0})]})}},399:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(67294),i="website-header";function l(e){var n;return e&&1===e.idx?(null===(n=null===document||void 0===document?void 0:document.getElementById(i))||void 0===n?void 0:n.offsetHeight)||80:0}function c(e){var n,t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,o.useState)(0),a=r[0],d=r[1],s=(0,o.useState)([0,0]),u=s[0],v=s[1],f=i,h=1===(null===e||void 0===e?void 0:e.idx)&&(null===e||void 0===e?void 0:e.combineWithHeader),x=c.minHeightScreenWhenCombined;return(0,o.useEffect)((function(){var n,t=function(){v([window.innerWidth,window.innerHeight])};try{var o=document.getElementById(f);n=new ResizeObserver((function(){e&&d(l(e))})),o&&n.observe(o)}catch(i){}return window.addEventListener("resize",t),t(),function(){window.removeEventListener("resize",t),n&&n.disconnect()}}),[]),(0,o.useEffect)((function(){e&&d(l(e))}),[e,u]),{minHeight:(null===e||void 0===e||null===(n=e.spacing)||void 0===n?void 0:n.minHeight)?"calc(".concat("min-h-screen"===(null===e||void 0===e||null===(t=e.spacing)||void 0===t?void 0:t.minHeight)||x&&h?"100vh":"0px"," - ").concat((null===e||void 0===e?void 0:e.combineWithHeader)?0:a,"px)"):"0px",headerHeight:a}}}}]);
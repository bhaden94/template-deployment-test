(this["webpackJsonptemplate-deployment-test"]=this["webpackJsonptemplate-deployment-test"]||[]).push([[6],{279:function(e,t,r){"use strict";r.d(t,"c",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(3),a=r(4),o=r(0),i=(r(1),r(5)),c=r(196),u=r(195),s=r(6),l=r(266),p=r(88),d=r(9),f=r(21),h=r(17),v={left:"right",right:"left",top:"down",bottom:"up"};function m(e){return-1!==["left","right"].indexOf(e)}function b(e,t){return"rtl"===e.direction&&m(t)?v[t]:t}var g={enter:f.b.enteringScreen,exit:f.b.leavingScreen},O=o.forwardRef((function(e,t){var r=e.anchor,s=void 0===r?"left":r,f=e.BackdropProps,m=e.children,O=e.classes,j=e.className,w=e.elevation,y=void 0===w?16:w,P=e.ModalProps,k=(P=void 0===P?{}:P).BackdropProps,x=Object(a.a)(P,["BackdropProps"]),T=e.onClose,E=e.open,S=void 0!==E&&E,D=e.PaperProps,B=void 0===D?{}:D,A=e.SlideProps,H=e.TransitionComponent,M=void 0===H?l.a:H,R=e.transitionDuration,L=void 0===R?g:R,C=e.variant,Y=void 0===C?"temporary":C,N=Object(a.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),X=Object(h.a)(),W=o.useRef(!1);o.useEffect((function(){W.current=!0}),[]);var z=b(X,s),F=o.createElement(p.a,Object(n.a)({elevation:"temporary"===Y?y:0,square:!0},B,{className:Object(i.a)(O.paper,O["paperAnchor".concat(Object(d.a)(z))],B.className,"temporary"!==Y&&O["paperAnchorDocked".concat(Object(d.a)(z))])}),m);if("permanent"===Y)return o.createElement("div",Object(n.a)({className:Object(i.a)(O.root,O.docked,j),ref:t},N),F);var I=o.createElement(M,Object(n.a)({in:S,direction:v[z],timeout:L,appear:W.current},A),F);return"persistent"===Y?o.createElement("div",Object(n.a)({className:Object(i.a)(O.root,O.docked,j),ref:t},N),I):o.createElement(c.a,Object(n.a)({BackdropProps:Object(n.a)({},f,k,{transitionDuration:L}),BackdropComponent:u.a,className:Object(i.a)(O.root,O.modal,j),open:S,onClose:T,ref:t},N,x),I)}));t.a=Object(s.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(O)},290:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return B}));var n=r(4),a=r(3),o=r(0),i=(r(1),r(13)),c=r(134),u=r(279),s=r(24),l=r(23),p=r(21),d=r(17),f=r(20),h="undefined"!==typeof window?o.useLayoutEffect:o.useEffect;var v=function(e){var t=e.children,r=e.defer,n=void 0!==r&&r,a=e.fallback,i=void 0===a?null:a,c=o.useState(!1),u=c[0],s=c[1];return h((function(){n||s(!0)}),[n]),o.useEffect((function(){n&&s(!0)}),[n]),o.createElement(o.Fragment,null,u?t:i)},m=r(11),b=r(5),g=r(6),O=r(9),j=o.forwardRef((function(e,t){var r=e.anchor,i=e.classes,c=e.className,s=e.width,l=Object(n.a)(e,["anchor","classes","className","width"]);return o.createElement("div",Object(a.a)({className:Object(b.a)(i.root,i["anchor".concat(Object(O.a)(r))],c),ref:t,style:Object(m.a)({},Object(u.c)(r)?"width":"height",s)},l))})),w=Object(g.a)((function(e){return{root:{position:"fixed",top:0,left:0,bottom:0,zIndex:e.zIndex.drawer-1},anchorLeft:{right:"auto"},anchorRight:{left:"auto",right:0},anchorTop:{bottom:"auto",right:0},anchorBottom:{top:"auto",bottom:0,right:0}}}),{name:"PrivateSwipeArea"})(j),y=null;function P(e,t){return"right"===e?document.body.offsetWidth-t[0].pageX:t[0].pageX}function k(e,t){return"bottom"===e?window.innerHeight-t[0].clientY:t[0].clientY}function x(e,t){return e?t.clientWidth:t.clientHeight}function T(e,t,r,n){return Math.min(Math.max(r?t-e:n+t-e,0),n)}var E="undefined"!==typeof navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent),S={enter:p.b.enteringScreen,exit:p.b.leavingScreen},D="undefined"!==typeof window?o.useLayoutEffect:o.useEffect,B=o.forwardRef((function(e,t){var r=Object(d.a)(),p=Object(c.a)({name:"MuiSwipeableDrawer",props:Object(a.a)({},e),theme:r}),h=p.anchor,m=void 0===h?"left":h,b=p.disableBackdropTransition,g=void 0!==b&&b,O=p.disableDiscovery,j=void 0!==O&&O,B=p.disableSwipeToOpen,A=void 0===B?E:B,H=p.hideBackdrop,M=p.hysteresis,R=void 0===M?.52:M,L=p.minFlingVelocity,C=void 0===L?450:L,Y=p.ModalProps,N=(Y=void 0===Y?{}:Y).BackdropProps,X=Object(n.a)(Y,["BackdropProps"]),W=p.onClose,z=p.onOpen,F=p.open,I=p.PaperProps,V=void 0===I?{}:I,J=p.SwipeAreaProps,q=p.swipeAreaWidth,G=void 0===q?20:q,K=p.transitionDuration,Q=void 0===K?S:K,U=p.variant,Z=void 0===U?"temporary":U,$=Object(n.a)(p,["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"]),_=o.useState(!1),ee=_[0],te=_[1],re=o.useRef({isSwiping:null}),ne=o.useRef(),ae=o.useRef(),oe=o.useRef(),ie=o.useRef(!1),ce=o.useRef();D((function(){ce.current=null}),[F]);var ue=o.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.mode,a=void 0===n?null:n,o=t.changeTransition,i=void 0===o||o,c=Object(u.b)(r,m),s=-1!==["right","bottom"].indexOf(c)?1:-1,l=Object(u.c)(m),p=l?"translate(".concat(s*e,"px, 0)"):"translate(0, ".concat(s*e,"px)"),d=oe.current.style;d.webkitTransform=p,d.transform=p;var h="";if(a&&(h=r.transitions.create("all",Object(f.a)({timeout:Q},{mode:a}))),i&&(d.webkitTransition=h,d.transition=h),!g&&!H){var v=ae.current.style;v.opacity=1-e/x(l,oe.current),i&&(v.webkitTransition=h,v.transition=h)}}),[m,g,H,r,Q]),se=Object(l.a)((function(e){if(ie.current)if(y=null,ie.current=!1,te(!1),re.current.isSwiping){re.current.isSwiping=null;var t,n=Object(u.b)(r,m),a=Object(u.c)(m);t=a?P(n,e.changedTouches):k(n,e.changedTouches);var o=a?re.current.startX:re.current.startY,i=x(a,oe.current),c=T(t,o,F,i),s=c/i;Math.abs(re.current.velocity)>C&&(ce.current=1e3*Math.abs((i-c)/re.current.velocity)),F?re.current.velocity>C||s>R?W():ue(0,{mode:"exit"}):re.current.velocity<-C||1-s>R?z():ue(x(a,oe.current),{mode:"enter"})}else re.current.isSwiping=null})),le=Object(l.a)((function(e){if(oe.current&&ie.current&&(null==y||y===re.current)){var t=Object(u.b)(r,m),n=Object(u.c)(m),a=P(t,e.touches),o=k(t,e.touches);if(F&&oe.current.contains(e.target)&&null==y){var i=function(e){var t=e.domTreeShapes,r=e.start,n=e.current,a=e.anchor,o={x:"scrollLeft",y:"scrollTop"},i={x:"scrollWidth",y:"scrollHeight"},c={x:"clientWidth",y:"clientHeight"};return t.some((function(e){var t=n>=r;"top"!==a&&"left"!==a||(t=!t);var u="left"===a||"right"===a?"x":"y",s=e[o[u]],l=s>0,p=s+e[c[u]]<e[i[u]];return t&&p||!t&&l?e:null}))}({domTreeShapes:function(e,t){for(var r=[];e&&e!==t;){var n=window.getComputedStyle(e);"absolute"===n.getPropertyValue("position")||"hidden"===n.getPropertyValue("overflow-x")?r=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&r.push(e),e=e.parentElement}return r}(e.target,oe.current),start:n?re.current.startX:re.current.startY,current:n?a:o,anchor:m});if(i)return void(y=i);y=re.current}if(null==re.current.isSwiping){var c=Math.abs(a-re.current.startX),s=Math.abs(o-re.current.startY);c>s&&e.cancelable&&e.preventDefault();var l=n?c>s&&c>3:s>c&&s>3;if(!0===l||(n?s>3:c>3)){if(re.current.isSwiping=l,!l)return void se(e);re.current.startX=a,re.current.startY=o,j||F||(n?re.current.startX-=G:re.current.startY-=G)}}if(re.current.isSwiping){var p=x(n,oe.current),d=n?re.current.startX:re.current.startY;F&&!re.current.paperHit&&(d=Math.min(d,p));var f=T(n?a:o,d,F,p);if(F)if(re.current.paperHit)0===f&&(re.current.startX=a,re.current.startY=o);else{if(!(n?a<p:o<p))return;re.current.paperHit=!0,re.current.startX=a,re.current.startY=o}null===re.current.lastTranslate&&(re.current.lastTranslate=f,re.current.lastTime=performance.now()+1);var h=(f-re.current.lastTranslate)/(performance.now()-re.current.lastTime)*1e3;re.current.velocity=.4*re.current.velocity+.6*h,re.current.lastTranslate=f,re.current.lastTime=performance.now(),e.cancelable&&e.preventDefault(),ue(f)}}})),pe=Object(l.a)((function(e){if(!e.defaultPrevented&&!e.muiHandled&&(!F||ae.current.contains(e.target)||oe.current.contains(e.target))){var t=Object(u.b)(r,m),n=Object(u.c)(m),a=P(t,e.touches),o=k(t,e.touches);if(!F){if(A||e.target!==ne.current)return;if(n){if(a>G)return}else if(o>G)return}e.muiHandled=!0,y=null,re.current.startX=a,re.current.startY=o,te(!0),!F&&oe.current&&ue(x(n,oe.current)+(j?20:-G),{changeTransition:!1}),re.current.velocity=0,re.current.lastTime=null,re.current.lastTranslate=null,re.current.paperHit=!1,ie.current=!0}}));o.useEffect((function(){if("temporary"===Z){var e=Object(s.a)(oe.current);return e.addEventListener("touchstart",pe),e.addEventListener("touchmove",le,{passive:!1}),e.addEventListener("touchend",se),function(){e.removeEventListener("touchstart",pe),e.removeEventListener("touchmove",le,{passive:!1}),e.removeEventListener("touchend",se)}}}),[Z,pe,le,se]),o.useEffect((function(){return function(){y===re.current&&(y=null)}}),[]),o.useEffect((function(){F||te(!1)}),[F]);var de=o.useCallback((function(e){ae.current=i.findDOMNode(e)}),[]);return o.createElement(o.Fragment,null,o.createElement(u.a,Object(a.a)({open:!("temporary"!==Z||!ee)||F,variant:Z,ModalProps:Object(a.a)({BackdropProps:Object(a.a)({},N,{ref:de})},X),PaperProps:Object(a.a)({},V,{style:Object(a.a)({pointerEvents:"temporary"!==Z||F?"":"none"},V.style),ref:oe}),anchor:m,transitionDuration:ce.current||Q,onClose:W,ref:t},$)),!A&&"temporary"===Z&&o.createElement(v,null,o.createElement(w,Object(a.a)({anchor:m,ref:ne,width:G},J))))}))}}]);
//# sourceMappingURL=6.32a96350.chunk.js.map
"use strict";(self.webpackChunkexpense_mui=self.webpackChunkexpense_mui||[]).push([[894],{5894:function(e,t,o){o.r(t),o.d(t,{default:function(){return p}});var a=o(9439),n=o(2791),r=o(9434),i=o(6501),c=o(6151),l=o(4554),s=o(1889),d=o(5527),u=o(184),p=function(){var e=(0,n.useState)(!0),t=(0,a.Z)(e,2),o=t[0],p=t[1],v=(0,n.useState)(!1),h=(0,a.Z)(v,2),m=h[0],x=h[1],f=(0,r.v9)((function(e){return e.expenseslice.LeaderBoard})),g=(0,r.I0)();return(0,u.jsxs)("div",{children:[o&&(0,u.jsx)(c.Z,{variant:"contained",onClick:function(){return function(){p(!1),x(!m);var e=localStorage.getItem("token");console.log("test"),g((0,i.y)(e))}()},children:"Show LeaderBoard"}),!o&&(0,u.jsx)(c.Z,{variant:"contained",onClick:function(){p(!0),x(!1)},children:"Hide LeaderBoard"}),m&&(0,u.jsx)(l.Z,{children:(0,u.jsx)(s.ZP,{container:!0,spacing:1,sx:{display:"flex",flexDirection:"column",alignItems:{sx:"start",sm:"center",md:"center"}},children:f.map((function(e){return(0,u.jsx)(s.ZP,{item:!0,xs:4,children:(0,u.jsxs)(d.Z,{sx:{p:1,bgcolor:"lightgreen",display:"grid",gridTemplateColumns:{md:"fr 2fr"},gap:2,width:350,color:"black"},children:["Name= ",e.name,"----totalCost =",e.totalcost?e.totalcost:"NO Expense"]})})}))})})]})}},6501:function(e,t,o){o.d(t,{y:function(){return c}});var a=o(4165),n=o(5861),r=o(2672),i=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var o,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n in o=[],t)o.push(t[n]);return e.abrupt("return",o);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(e){return function(){var t=(0,n.Z)((0,a.Z)().mark((function t(o){var n,c,l;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://23.21.23.89:3000/premium/leaderboard",{method:"GET",headers:{"Content-Type":"application/json",Authorization:e}});case 3:return n=t.sent,t.next=6,n.json();case 6:return c=t.sent,console.log("leaderboard data",c),t.next=10,i(c);case 10:l=t.sent,o(r.c.updateLeaderBoard(l)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()}},6151:function(e,t,o){o.d(t,{Z:function(){return k}});var a=o(4942),n=o(3366),r=o(7462),i=o(2791),c=o(8182),l=o(5735),s=o(4419),d=o(2065),u=o(6934),p=o(1402),v=o(335),h=o(4036),m=o(5878),x=o(1217);function f(e){return(0,x.Z)("MuiButton",e)}var g=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=i.createContext({}),S=o(184),Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=function(e){return(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},z=(0,u.ZP)(v.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,h.Z)(o.color))],t["size".concat((0,h.Z)(o.size))],t["".concat(o.variant,"Size").concat((0,h.Z)(o.size))],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((function(e){var t,o,n,i=e.theme,c=e.ownerState,l="light"===i.palette.mode?i.palette.grey[300]:i.palette.grey[800],s="light"===i.palette.mode?i.palette.grey.A100:i.palette.grey[700];return(0,r.Z)({},i.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:i.vars?i.vars.palette.Button.inheritContainedHoverBg:s,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,a.Z)(t,"&.".concat(g.focusVisible),(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,a.Z)(t,"&.".concat(g.disabled),(0,r.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(o=(n=i.palette).getContrastText)?void 0:o.call(n,i.palette.grey[300]),backgroundColor:i.vars?i.vars.palette.Button.inheritContainedBg:l,boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,a.Z)(t,"&.".concat(g.focusVisible),{boxShadow:"none"}),(0,a.Z)(t,"&:active",{boxShadow:"none"}),(0,a.Z)(t,"&.".concat(g.disabled),{boxShadow:"none"}),t)})),w=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.startIcon,t["iconSize".concat((0,h.Z)(o.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},y(t))})),C=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.endIcon,t["iconSize".concat((0,h.Z)(o.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},y(t))})),k=i.forwardRef((function(e,t){var o=i.useContext(b),a=(0,l.Z)(o,e),d=(0,p.Z)({props:a,name:"MuiButton"}),u=d.children,v=d.color,m=void 0===v?"primary":v,x=d.component,g=void 0===x?"button":x,y=d.className,k=d.disabled,I=void 0!==k&&k,R=d.disableElevation,B=void 0!==R&&R,E=d.disableFocusRipple,W=void 0!==E&&E,j=d.endIcon,L=d.focusVisibleClassName,M=d.fullWidth,N=void 0!==M&&M,T=d.size,F=void 0===T?"medium":T,P=d.startIcon,O=d.type,V=d.variant,q=void 0===V?"text":V,A=(0,n.Z)(d,Z),D=(0,r.Z)({},d,{color:m,component:g,disabled:I,disableElevation:B,disableFocusRipple:W,fullWidth:N,size:F,type:O,variant:q}),H=function(e){var t=e.color,o=e.disableElevation,a=e.fullWidth,n=e.size,i=e.variant,c=e.classes,l={root:["root",i,"".concat(i).concat((0,h.Z)(t)),"size".concat((0,h.Z)(n)),"".concat(i,"Size").concat((0,h.Z)(n)),"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,h.Z)(n))],endIcon:["endIcon","iconSize".concat((0,h.Z)(n))]},d=(0,s.Z)(l,f,c);return(0,r.Z)({},c,d)}(D),_=P&&(0,S.jsx)(w,{className:H.startIcon,ownerState:D,children:P}),G=j&&(0,S.jsx)(C,{className:H.endIcon,ownerState:D,children:j});return(0,S.jsxs)(z,(0,r.Z)({ownerState:D,className:(0,c.Z)(o.className,H.root,y),component:g,disabled:I,focusRipple:!W,focusVisibleClassName:(0,c.Z)(H.focusVisible,L),ref:t,type:O},A,{classes:H,children:[_,u,G]}))}))}}]);
//# sourceMappingURL=894.bb48c763.chunk.js.map
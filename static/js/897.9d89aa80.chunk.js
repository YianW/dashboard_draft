"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[897],{2897:function(t,o,e){e.r(o),e.d(o,{default:function(){return z}});var i=e(3735),a=e(2791),n=e(4554),r=e(3366),s=e(7462),l=e(4419),c=e(8182),p=e(6934),m=e(1402),h=e(1217),u=e(5878);function g(t){return(0,h.Z)("MuiImageList",t)}(0,u.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var d=a.createContext({}),f=e(184);const v=["children","className","cols","component","rowHeight","gap","style","variant"],w=(0,p.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,o[e.variant]]}})((t=>{let{ownerState:o}=t;return(0,s.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===o.variant&&{display:"block"})}));var Z=a.forwardRef((function(t,o){const e=(0,m.Z)({props:t,name:"MuiImageList"}),{children:i,className:n,cols:p=2,component:h="ul",rowHeight:u="auto",gap:Z=4,style:I,variant:y="standard"}=e,b=(0,r.Z)(e,v),x=a.useMemo((()=>({rowHeight:u,gap:Z,variant:y})),[u,Z,y]);a.useEffect((()=>{0}),[]);const S="masonry"===y?(0,s.Z)({columnCount:p,columnGap:Z},I):(0,s.Z)({gridTemplateColumns:"repeat(".concat(p,", 1fr)"),gap:Z},I),P=(0,s.Z)({},e,{component:h,gap:Z,rowHeight:u,variant:y}),L=(t=>{const{classes:o,variant:e}=t,i={root:["root",e]};return(0,l.Z)(i,g,o)})(P);return(0,f.jsx)(w,(0,s.Z)({as:h,className:(0,c.Z)(L.root,L[y],n),ref:o,style:S,ownerState:P},b,{children:(0,f.jsx)(d.Provider,{value:x,children:i})}))})),I=(e(8457),e(9103));function y(t){return(0,h.Z)("MuiImageListItem",t)}var b=(0,u.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]);const x=["children","className","cols","component","rows","style"],S=(0,p.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[{["& .".concat(b.img)]:o.img},o.root,o[e.variant]]}})((t=>{let{ownerState:o}=t;return(0,s.Z)({display:"inline-block",position:"relative",lineHeight:0},"standard"===o.variant&&{display:"flex",flexDirection:"column"},"woven"===o.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{["& .".concat(b.img)]:(0,s.Z)({objectFit:"cover",width:"100%",height:"100%"},"standard"===o.variant&&{height:"auto",flexGrow:1})})}));var P=a.forwardRef((function(t,o){const e=(0,m.Z)({props:t,name:"MuiImageListItem"}),{children:i,className:n,cols:p=1,component:h="li",rows:u=1,style:g}=e,v=(0,r.Z)(e,x),{rowHeight:w="auto",gap:Z,variant:b}=a.useContext(d);let P="auto";"woven"===b?P=void 0:"auto"!==w&&(P=w*u+Z*(u-1));const L=(0,s.Z)({},e,{cols:p,component:h,gap:Z,rowHeight:w,rows:u,variant:b}),R=(t=>{const{classes:o,variant:e}=t,i={root:["root",e],img:["img"]};return(0,l.Z)(i,y,o)})(L);return(0,f.jsx)(S,(0,s.Z)({as:h,className:(0,c.Z)(R.root,R[b],n),ref:o,style:(0,s.Z)({height:P,gridColumnEnd:"masonry"!==b?"span ".concat(p):void 0,gridRowEnd:"masonry"!==b?"span ".concat(u):void 0,marginBottom:"masonry"===b?Z:void 0},g),ownerState:L},v,{children:a.Children.map(i,(t=>a.isValidElement(t)?"img"===t.type||(0,I.Z)(t,["Image"])?a.cloneElement(t,{className:(0,c.Z)(R.img,t.props.className)}):t:null))}))})),L=e(4036);function R(t){return(0,h.Z)("MuiImageListItemBar",t)}(0,u.Z)("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);const j=["actionIcon","actionPosition","className","subtitle","title","position"],B=(0,p.ZP)("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,o["position".concat((0,L.Z)(e.position))]]}})((t=>{let{theme:o,ownerState:e}=t;return(0,s.Z)({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:o.typography.fontFamily},"bottom"===e.position&&{bottom:0},"top"===e.position&&{top:0},"below"===e.position&&{position:"relative",background:"transparent",alignItems:"normal"})})),M=(0,p.ZP)("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.titleWrap,o["titleWrap".concat((0,L.Z)(e.position))],e.actionIcon&&o["titleWrapActionPos".concat((0,L.Z)(e.actionPosition))]]}})((t=>{let{theme:o,ownerState:e}=t;return(0,s.Z)({flexGrow:1,padding:"12px 16px",color:(o.vars||o).palette.common.white,overflow:"hidden"},"below"===e.position&&{padding:"6px 0 12px",color:"inherit"},e.actionIcon&&"left"===e.actionPosition&&{paddingLeft:0},e.actionIcon&&"right"===e.actionPosition&&{paddingRight:0})})),C=(0,p.ZP)("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:(t,o)=>o.title})((t=>{let{theme:o}=t;return{fontSize:o.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),N=(0,p.ZP)("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:(t,o)=>o.subtitle})((t=>{let{theme:o}=t;return{fontSize:o.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),W=(0,p.ZP)("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.actionIcon,o["actionIconActionPos".concat((0,L.Z)(e.actionPosition))]]}})((t=>{let{ownerState:o}=t;return(0,s.Z)({},"left"===o.actionPosition&&{order:-1})}));var A=a.forwardRef((function(t,o){const e=(0,m.Z)({props:t,name:"MuiImageListItemBar"}),{actionIcon:i,actionPosition:a="right",className:n,subtitle:p,title:h,position:u="bottom"}=e,g=(0,r.Z)(e,j),d=(0,s.Z)({},e,{position:u,actionPosition:a}),v=(t=>{const{classes:o,position:e,actionIcon:i,actionPosition:a}=t,n={root:["root","position".concat((0,L.Z)(e))],titleWrap:["titleWrap","titleWrap".concat((0,L.Z)(e)),i&&"titleWrapActionPos".concat((0,L.Z)(a))],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon","actionIconActionPos".concat((0,L.Z)(a))]};return(0,l.Z)(n,R,o)})(d);return(0,f.jsxs)(B,(0,s.Z)({ownerState:d,className:(0,c.Z)(v.root,n),ref:o},g,{children:[(0,f.jsxs)(M,{ownerState:d,className:v.titleWrap,children:[(0,f.jsx)(C,{className:v.title,children:h}),p?(0,f.jsx)(N,{className:v.subtitle,children:p}):null]}),i?(0,f.jsx)(W,{ownerState:d,className:v.actionIcon,children:i}):null]}))})),k=e(3400),F=e(5584);function H(){return(0,f.jsx)(n.Z,{sx:{width:1200,height:1e3,overflowY:"scroll",marginLeft:14,marginRight:10},children:(0,f.jsx)(Z,{variant:"masonry",cols:3,gap:24,children:T.map((t=>(0,f.jsxs)(P,{children:[(0,f.jsx)("img",{src:"".concat(t.img,"?w=3548&fit=crop&auto=format"),srcSet:"".concat(t.img,"?w=354&fit=crop&auto=format&dpr=2 2x"),alt:t.title,loading:"lazy"}),(0,f.jsx)(A,{title:t.title,subtitle:t.author,actionIcon:(0,f.jsx)(k.Z,{sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),href:"/free/utils/util-Details",children:(0,f.jsx)(F.Z,{})})})]},t.img)))})})}const T=[{img:"https://images.unsplash.com/photo-1549388604-817d15aa0110",title:"Bed",author:"swabdesign",type:"Art"},{img:"https://images.unsplash.com/photo-1525097487452-6278ff080c31",title:"Books",author:"Pavel Nekoranec",type:"Custom"},{img:"https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",title:"Sink",author:"Charles Deluvio",type:"Finance"},{img:"https://images.unsplash.com/photo-1563298723-dcfebaa392e3",title:"Kitchen",author:"Christian Mackie",type:"Finance"},{img:"https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",title:"Blinds",author:"Darren Richardson",type:"Art"},{img:"https://images.unsplash.com/photo-1574180045827-681f8a1a9622",title:"Chairs",author:"Taylor Simpson",type:"Custom"},{img:"https://images.unsplash.com/photo-1530731141654-5993c3016c77",title:"Laptop",author:"Ben Kolde",type:"Art"},{img:"https://images.unsplash.com/photo-1481277542470-605612bd2d61",title:"Doors",author:"Philipp Berndt",type:"Finance"},{img:"https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",title:"Coffee",author:"Jen P.",type:"Finance"},{img:"https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",title:"Storage",author:"Douglas Sheppard",type:"Finance"},{img:"https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",title:"Candle",author:"Fi Bell",type:"Finance"},{img:"https://images.unsplash.com/photo-1519710164239-da123dc03ef4",title:"Coffee table",author:"Hutomo Abrianto",type:"Art"}];var z=()=>(0,f.jsx)(i.Z,{children:(0,f.jsx)(H,{})})},5584:function(t,o,e){var i=e(4836);o.Z=void 0;var a=i(e(5649)),n=e(184),r=(0,a.default)((0,n.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");o.Z=r}}]);
//# sourceMappingURL=897.9d89aa80.chunk.js.map
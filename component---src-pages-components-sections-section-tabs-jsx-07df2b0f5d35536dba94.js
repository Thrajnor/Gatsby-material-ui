(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1413:function(e,t,a){"use strict";var n=a(242),i=a.n(n),s=(a(5),a(0)),r=a.n(s),o=a(231),l=a.n(o),c=a(1),p=a.n(c),d=a(230),u=a.n(d),h=a(237),b={cardHeader:{borderRadius:"3px",padding:"1rem 15px",marginLeft:"15px",marginRight:"15px",marginTop:"-30px",border:"0",marginBottom:"0"},cardHeaderPlain:{marginLeft:"0px",marginRight:"0px"},warningCardHeader:h.y,successCardHeader:h.t,dangerCardHeader:h.f,infoCardHeader:h.l,primaryCardHeader:h.o};function m(e){var t,a=Object.assign({},e),n=a.classes,s=a.className,o=a.children,c=a.color,p=a.plain,d=i()(a,["classes","className","children","color","plain"]),u=l()(((t={})[n.cardHeader]=!0,t[n[c+"CardHeader"]]=c,t[n.cardHeaderPlain]=p,t[s]=void 0!==s,t));return r.a.createElement("div",Object.assign({className:u},d),o)}m.propTypes={classes:p.a.object.isRequired,className:p.a.string,color:p.a.oneOf(["warning","success","danger","info","primary"]),plain:p.a.bool},t.a=u()(b)(m)},215:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),s=a(0),r=a.n(s),o=a(230),l=a.n(o),c=a(312),p=a.n(c),d=a(299),u=a.n(d),h=a(369),b=a.n(h),m=a(244),g=a(245),f=(a(5),a(231)),x=a.n(f),v=a(1),w=a.n(v),y=a(313),I=a.n(y),E=a(314),C=a.n(E),N=a(309),j=a(336),k=a(1413),H=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={value:0},t.handleChange=function(e,a){t.setState({value:a})},t}return i()(t,e),t.prototype.render=function(){var e,t=this,a=this.props,n=a.classes,i=a.headerColor,s=a.plainTabs,o=a.tabs,l=a.title,c=a.rtlActive,p=x()(((e={})[n.cardTitle]=!0,e[n.cardTitleRTL]=c,e));return r.a.createElement(N.a,{plain:s},r.a.createElement(k.a,{color:i,plain:s},void 0!==l?r.a.createElement("div",{className:p},l):null,r.a.createElement(I.a,{value:this.state.value,onChange:this.handleChange,classes:{root:n.tabsRoot,indicator:n.displayNone}},o.map(function(e,t){var a={};return e.tabIcon&&(a={icon:r.a.createElement(e.tabIcon,null)}),r.a.createElement(C.a,Object.assign({classes:{root:n.tabRootButton,labelContainer:n.tabLabelContainer,label:n.tabLabel,selected:n.tabSelected,wrapper:n.tabWrapper},key:t,label:e.tabName},a))}))),r.a.createElement(j.a,null,o.map(function(e,a){return a===t.state.value?r.a.createElement("div",{key:a},e.tabContent):null})))},t}(r.a.Component);H.propTypes={classes:w.a.object.isRequired,headerColor:w.a.oneOf(["warning","success","danger","info","primary","rose"]),title:w.a.string,tabs:w.a.arrayOf(w.a.shape({tabName:w.a.string.isRequired,tabIcon:w.a.func,tabContent:w.a.node.isRequired})),rtlActive:w.a.bool,plainTabs:w.a.bool};var O=l()({cardTitle:{float:"left",padding:"10px 10px 10px 0px",lineHeight:"24px"},cardTitleRTL:{float:"right",padding:"10px 0px 10px 10px !important"},displayNone:{display:"none !important"},tabsRoot:{minHeight:"unset !important"},tabRootButton:{minHeight:"unset !important",minWidth:"unset !important",width:"unset !important",height:"unset !important",maxWidth:"unset !important",maxHeight:"unset !important",padding:"10px 15px",borderRadius:"3px",lineHeight:"24px",border:"0 !important",color:"#fff !important",marginLeft:"4px","&:last-child":{marginLeft:"0px"}},tabLabelContainer:{padding:"0px"},tabLabel:{fontWeight:"500",fontSize:"12px"},tabSelected:{backgroundColor:"rgba(255, 255, 255, 0.2)",transition:"0.2s background-color 0.1s"},tabWrapper:{display:"inline-block",minHeight:"unset !important",minWidth:"unset !important",width:"unset !important",height:"unset !important",maxWidth:"unset !important",maxHeight:"unset !important","& > svg":{verticalAlign:"middle",margin:"-1px 5px 0 0"}}})(H),R={section:{background:"#EEEEEE",padding:"70px 0"},container:a(237).d,textCenter:{textAlign:"center"}},T=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.classes;return r.a.createElement("div",{className:e.section},r.a.createElement("div",{className:e.container},r.a.createElement("div",{id:"nav-tabs"},r.a.createElement("h3",null,"Navigation Tabs"),r.a.createElement(m.a,null,r.a.createElement(g.a,{xs:12,sm:12,md:6},r.a.createElement("h3",null,r.a.createElement("small",null,"Tabs with Icons on Card")),r.a.createElement(O,{headerColor:"primary",tabs:[{tabName:"Profile",tabIcon:p.a,tabContent:r.a.createElement("p",{className:e.textCenter},"I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")},{tabName:"Messages",tabIcon:u.a,tabContent:r.a.createElement("p",{className:e.textCenter},"I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")},{tabName:"Settings",tabIcon:b.a,tabContent:r.a.createElement("p",{className:e.textCenter},"think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")}]})),r.a.createElement(g.a,{xs:12,sm:12,md:6},r.a.createElement("h3",null,r.a.createElement("small",null,"Tabs on Plain Card")),r.a.createElement(O,{plainTabs:!0,headerColor:"danger",tabs:[{tabName:"Home",tabContent:r.a.createElement("p",{className:e.textCenter},"I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")},{tabName:"Updates",tabContent:r.a.createElement("p",{className:e.textCenter},"I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")},{tabName:"History",tabContent:r.a.createElement("p",{className:e.textCenter},"think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")}]}))))))},t}(r.a.Component);t.default=l()(R)(T)},237:function(e,t,a){"use strict";a.d(t,"i",function(){return n}),a.d(t,"w",function(){return i}),a.d(t,"d",function(){return r}),a.d(t,"c",function(){return s}),a.d(t,"a",function(){return o}),a.d(t,"h",function(){return l}),a.d(t,"p",function(){return c}),a.d(t,"z",function(){return p}),a.d(t,"g",function(){return d}),a.d(t,"u",function(){return u}),a.d(t,"m",function(){return h}),a.d(t,"r",function(){return b}),a.d(t,"j",function(){return m}),a.d(t,"n",function(){return g}),a.d(t,"k",function(){return f}),a.d(t,"s",function(){return x}),a.d(t,"x",function(){return v}),a.d(t,"e",function(){return w}),a.d(t,"q",function(){return y}),a.d(t,"y",function(){return I}),a.d(t,"t",function(){return E}),a.d(t,"f",function(){return C}),a.d(t,"l",function(){return N}),a.d(t,"o",function(){return j}),a.d(t,"v",function(){return k}),a.d(t,"b",function(){return H}),a(5);var n=260,i={transition:"all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"},s={paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"},r=Object.assign({},s,{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),o={boxShadow:"0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},l={fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"},c="#9c27b0",p="#ff9800",d="#f44336",u="#4caf50",h="#00acc1",b="#e91e63",m="#999999",g={boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"},f={boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"},x={boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"},v={boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"},w={boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"},y={boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"},I=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},v),E=Object.assign({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},x),C=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},w),N=Object.assign({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},f),j=Object.assign({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},g),k=(Object.assign({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},y),Object.assign({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},l),{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'}),H=Object.assign({},k,{marginTop:".625rem"})},244:function(e,t,a){"use strict";var n=a(242),i=a.n(n),s=(a(5),a(0)),r=a.n(s),o=a(1),l=a.n(o),c=a(230),p=a.n(c),d=a(246),u=a.n(d);function h(e){var t=Object.assign({},e),a=t.classes,n=t.children,s=t.className,o=i()(t,["classes","children","className"]);return r.a.createElement(u.a,Object.assign({container:!0},o,{className:a.grid+" "+s}),n)}h.defaultProps={className:""},h.propTypes={classes:l.a.object.isRequired,children:l.a.node,className:l.a.string},t.a=p()({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}})(h)},245:function(e,t,a){"use strict";var n=a(242),i=a.n(n),s=(a(5),a(0)),r=a.n(s),o=a(230),l=a.n(o),c=a(246),p=a.n(c);t.a=l()({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}})(function(e){var t=Object.assign({},e),a=t.classes,n=t.children,s=t.className,o=i()(t,["classes","children","className"]);return r.a.createElement(p.a,Object.assign({item:!0},o,{className:a.grid+" "+s}),n)})},299:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),s=(0,n(a(241)).default)(i.default.createElement("g",null,i.default.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"})),"Chat");t.default=s},309:function(e,t,a){"use strict";var n=a(242),i=a.n(n),s=(a(5),a(0)),r=a.n(s),o=a(231),l=a.n(o),c=a(1),p=a.n(c),d=a(230),u=a.n(d);function h(e){var t,a=Object.assign({},e),n=a.classes,s=a.className,o=a.children,c=a.plain,p=a.carousel,d=i()(a,["classes","className","children","plain","carousel"]),u=l()(((t={})[n.card]=!0,t[n.cardPlain]=c,t[n.cardCarousel]=p,t[s]=void 0!==s,t));return r.a.createElement("div",Object.assign({className:u},d),o)}h.propTypes={classes:p.a.object.isRequired,className:p.a.string,plain:p.a.bool,carousel:p.a.bool},t.a=u()({card:{border:"0",marginBottom:"30px",marginTop:"30px",borderRadius:"6px",color:"rgba(0, 0, 0, 0.87)",background:"#fff",width:"100%",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",position:"relative",display:"flex",flexDirection:"column",minWidth:"0",wordWrap:"break-word",fontSize:".875rem",transition:"all 300ms linear"},cardPlain:{background:"transparent",boxShadow:"none"},cardCarousel:{overflow:"hidden"}})(h)},312:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),s=(0,n(a(241)).default)(i.default.createElement("g",null,i.default.createElement("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"})),"Face");t.default=s},336:function(e,t,a){"use strict";var n=a(242),i=a.n(n),s=(a(5),a(0)),r=a.n(s),o=a(231),l=a.n(o),c=a(1),p=a.n(c),d=a(230),u=a.n(d);function h(e){var t,a=Object.assign({},e),n=a.classes,s=a.className,o=a.children,c=i()(a,["classes","className","children"]),p=l()(((t={})[n.cardBody]=!0,t[s]=void 0!==s,t));return r.a.createElement("div",Object.assign({className:p},c),o)}h.propTypes={classes:p.a.object.isRequired,className:p.a.string},t.a=u()({cardBody:{padding:"0.9375rem 1.875rem",flex:"1 1 auto"}})(h)},369:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(0)),s=(0,n(a(241)).default)(i.default.createElement("g",null,i.default.createElement("path",{d:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"})),"Build");t.default=s}}]);
//# sourceMappingURL=component---src-pages-components-sections-section-tabs-jsx-07df2b0f5d35536dba94.js.map
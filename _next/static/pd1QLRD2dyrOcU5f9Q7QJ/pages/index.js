(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"9Jkg":function(e,t,n){e.exports=n("oh+g")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),l=n("sLSF"),a=n("MI3g"),i=n("a7VT"),o=n("Tit0"),c=n("q1tI"),u=n.n(c),s=n("sL5p"),d=n("YFqc"),p=n.n(d),f=n("LvDl"),h=(n("VphZ"),n("Zm+b")),v=h("red").luminance(.35),m=h("blue").luminance(.35),g=h.scale(["white",v]).mode("lch"),y=h.scale(["white",m]).mode("lch"),E=function(e){function t(){return Object(r.default)(this,t),Object(a.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(o.default)(t,e),Object(l.default)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.font_size,n=e.line_height,r=e.grem,l=e.analyze,a=e.data,i=s.a.map(function(e){return{title:e.Title,id:e.og_id,plot:e.Plot,children:[]}}),o=i.map(function(e){return e.id});if(null!==a){for(var c=0;c<a.length;c++){var d=a[c],h=d.url,v=o.indexOf(h);-1===v?console.log("miss"):i[v].children.push(d)}(i=f.sortBy(i,[function(e){return e.children.length}])).reverse()}return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("div",{style:{paddingTop:r,paddingBottom:3*r}},u.a.createElement("div",{style:{maxWidth:840,border:"solid 1px black",borderBottom:"none",margin:"0 auto"}},u.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr ".concat(6*r,"px"),borderBottom:"solid 1px black",fontWeight:700,fontSize:.875*t}},u.a.createElement("div",{style:{lineHeight:n,padding:r/2}},"TOPIC"),u.a.createElement("div",{style:{padding:r/2,textAlign:"center"}},"REVIEWS")),a?u.a.createElement("div",null,i.map(function(e,i){var o=a.filter(function(t){return t.url===e.id}),c=o.reduce(function(e,t){var n=e.slice();return t.logits[1]>t.logits[0]?n[1]+=1:n[0]+=1,n},[0,0]),s=o.reduce(function(e,t){var n=e.slice();return"pos"===t.label?n[1]+=1:"neg"===t.label&&(n[0]+=1),n},[0,0]),d=o.reduce(function(e,t){var n=e.slice();return t.label===t.class?n[1]+=1:n[0]+=1,n},[0,0])[1]/o.length,f=0;c[1]>c[0]&&(f=1);var h=["negative","positive"][f];return u.a.createElement(p.a,{href:"topic?id=".concat(e.id)},u.a.createElement("a",{className:"no-underline gray-hover",style:{display:"grid",gridTemplateColumns:"1fr ".concat(6*r,"px"),borderBottom:"solid 1px black"}},u.a.createElement("div",{style:{padding:r/2}},u.a.createElement("div",{style:{fontWeight:700,textDecoration:"underline"}},e.title),u.a.createElement("div",{style:{fontSize:.875*t,lineHeight:n}},e.plot)),u.a.createElement("div",{style:{padding:r/2,fontSize:.875*t,textAlign:"center",display:"grid",alignItems:"center",position:"relative"}},l?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:"".concat(c[1]/o.length*100,"%"),background:y(1)}}),u.a.createElement("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:"".concat(c[0]/o.length*100,"%"),background:g(1)}})):null,u.a.createElement("div",{style:{position:"relative"}},u.a.createElement("div",null,e.children.length),l?u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,Math.round(c[f]/o.length*1e3)/10,"% ",h),u.a.createElement("div",null,c[1]," | ",c[0]),u.a.createElement("div",null,"actual: ",s[1]," | ",s[0]),u.a.createElement("div",null,"accuracy: ",Math.round(1e3*d)/10,"%")):null))))})):null))))}}]),t}(u.a.Component);t.default=E},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),l=r(n("9Jkg")),a=r(n("/HRN")),i=r(n("WaGi")),o=r(n("ZDA2")),c=r(n("/+P4")),u=r(n("N9n2")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=n("CxY0"),f=s(n("q1tI")),h=(d(n("17x9")),s(n("nOHt"))),v=n("Bu4q");function m(e){return e&&"object"==typeof e?v.formatWithValidation(e):e}var g=function(e){function t(){var e,n,r,l,i;return(0,a.default)(this,t),(e=(0,o.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:m(e),as:m(t)}},r=null,l=null,i=null,function(e,t){if(e===r&&t===l)return i;var a=n(e,t);return r=e,l=t,i=a,a}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,l=n.target;if("A"!==r||!(l&&"_self"!==l||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),i=a.href,o=a.as;if(function(e){var t=p.parse(e,!1,!0),n=p.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=p.resolve(c,i),o=o?p.resolve(c,o):i,t.preventDefault();var u=e.props.scroll;null==u&&(u=o.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](i,o,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,l.default)(this.props.href)!==(0,l.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=p.resolve(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,l=n.as;"string"==typeof t&&(t=f.default.createElement("a",null,t));var a=f.Children.only(t),i={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=l||r),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=h.Router._rewriteUrlForNextExport(i.href)),f.default.cloneElement(a,i)}}]),t}(f.Component);t.default=g},"oh+g":function(e,t,n){var r=n("WEpk"),l=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);
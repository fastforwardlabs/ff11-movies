(window.webpackJsonp=window.webpackJsonp||[]).push([["56a7"],{A1YD:function(e,t,a){"use strict";var n=a("vYYK"),i=a("0iUn"),r=a("sLSF"),l=a("MI3g"),s=a("a7VT"),c=a("Tit0"),o=a("q1tI"),d=a.n(o),u=a("YFqc"),m=a.n(u),g=a("LvDl"),v=a("ACBD"),h=function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(l.default)(this,Object(s.default)(t).call(this,e))).state={show_all_positive:!1,show_all_negative:!1},a}return Object(c.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.reviews,i=t.analyze,r=t.grem,l=a.map(function(e){var t=Math.max(Math.abs(g.min(e.lime_scores)),Math.abs(g.max(e.lime_scores)));var a=e.lime_tokens.map(function(a,n){var i,r=e.lime_scores[n],l=Math.abs(e.lime_scores[n])/t;return{token:a,score:r,class:e.class,scaled_score:l,background:(i=r,i<0?Object(v.h)(Math.abs(i)/t):Object(v.g)(Math.abs(i)/t)),author:e.author,date:e.date,index:e.index}}),n=g.sortBy(a,"score");return"pos"===e.class&&(n=n.reverse()),n[0]}),s=g.sortBy(l.filter(function(e){return"pos"===e.class}),"date"),c=g.sortBy(l.filter(function(e){return"neg"===e.class}),"date");return i?d.a.createElement("div",{style:{padding:r/2}},[["positive",s,this.state.show_all_positive,"show_all_positive"],["negative",c,this.state.show_all_negative,"show_all_negative"]].map(function(t,a){return d.a.createElement("div",{style:{marginBottom:0==a?r:0}},d.a.createElement("div",null,t[1].length," ",t[0]," review highlights"),d.a.createElement("div",{style:{textIndent:r}},t[1].slice(0,t[2]?1/0:4).map(function(e,a){return d.a.createElement("span",{style:{}},d.a.createElement("span",{style:{backgroundImage:"linear-gradient(".concat(e.background,", ").concat(e.background,")"),backgroundSize:"4px 7px",backgroundRepeat:"repeat-x",backgroundPosition:"0 0.85em",paddingBottom:2}},e.token)," ","by ",e.author," ",d.a.createElement(m.a,{href:"/review?id=".concat(e.index)},d.a.createElement("a",null,e.date," days ago"))," ",t[1].length<4&&t[1].length-1===a?"":d.a.createElement("span",null,"·")," ")})," ",t[1].length>4?t[2]?d.a.createElement("button",{style:{textDecoration:"underline"},onClick:function(){return e.setState(Object(n.a)({},t[3],!1))}},"show less"):d.a.createElement("button",{style:{textDecoration:"underline"},onClick:function(){return e.setState(Object(n.a)({},t[3],!0))}},"show all"):null))})):null}}]),t}(d.a.Component);t.a=h},OS8i:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),i=a("sLSF"),r=a("MI3g"),l=a("a7VT"),s=a("Tit0"),c=a("q1tI"),o=a.n(c),d=a("nOHt"),u=(a("YFqc"),a("Zm+b"),a("LvDl"),a("axqb"),a("PBx+")),m=a.n(u),g=a("TbHi"),v=a("ACBD"),h=a("A1YD"),p=a("sDQl"),b=(m()().publicRuntimeConfig.linkPrefix,function(e){function t(e){var a;return Object(n.default)(this,t),(a=Object(r.default)(this,Object(l.default)(t).call(this,e))).state={show_all_positive:!1,show_all_negative:!1},a}return Object(s.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.font_size,e.line_height,e.data_select,e.grem),a=e.router,n=e.analyze,i=e.data,r=e.info,l=e.setAnalyze,s=e.review_sort,c=e.setReviewSort,d=e.show_accuracy,u=e.setAccuracy,m=e.compare,b=e.setCompare,f=e.nbsvm_data,y=e.hl_options,_=e.tour,w=void 0!==_&&_,E=r.map(function(e){return e.og_id}),k=r[E.indexOf(a.query.id)],x=i.filter(function(e){return e.url===a.query.id}),O=f.filter(function(e){return e.url===a.query.id});m=m&&n;return((d=d&&n)||m)&&3*t,d&&m?5*t:d?3*t:m&&4*t,o.a.createElement("div",null,o.a.createElement(g.a,{grem:t,setAnalyze:l,analyze:n,setAlgo:this.props.setAlgo,algnames:this.props.algnames,data_select:this.props.data_select,show_accuracy:d,setAccuracy:u,compare:m,setCompare:b,data:x,nbsvm_data:O,hl_options:y}),o.a.createElement("div",{style:{}},o.a.createElement("div",{style:{maxWidth:700,margin:"0 auto",padding:t/2}},o.a.createElement("div",{style:{marginBottom:0*t}},o.a.createElement("div",null,k.Title),o.a.createElement("div",{style:{textIndent:t}},k.Year," · ",k.Runtime," ·"," ",k.Rated),o.a.createElement("div",{style:{textIndent:t}},k.Plot," ",o.a.createElement("a",{href:"https://www.imdb.com/title/".concat(k.imdbID)},"IMDB →"))))),n?o.a.createElement("div",{id:w?"sentences-block":null,style:{zIndex:998,position:"relative",background:y.highlight_sentences_block?"#eee":"white",transition:"background 0.1s linear"}},m?o.a.createElement(v.a,null):null,o.a.createElement("div",{style:{maxWidth:m?1400+t+2:700,margin:"0 auto",display:m?"grid":"block",gridTemplateColumns:"1fr 1fr"}},m?o.a.createElement("div",{style:{borderRight:"solid 1px black"}},o.a.createElement(h.a,{grem:t,reviews:O,analyze:n})):null,o.a.createElement("div",{style:{borderLeft:m?"solid 1px black":"none"}},o.a.createElement(h.a,{grem:t,reviews:x,analyze:n}))),m?o.a.createElement(v.a,null):null):null,o.a.createElement("div",{id:w?"reviews-block":null,style:{position:"relative",background:y.highlight_reviews_block?"#eee":"white"}},o.a.createElement("div",{style:{maxWidth:700,margin:"0 auto",padding:t/2}},o.a.createElement("div",{style:{display:"flex",paddingRight:t/4,marginLeft:-t/4}},o.a.createElement("div",{style:{paddingLeft:t/4,paddingRight:t/4}},x.length," reviews sorted by most:"),(n?d?[["recent","date"],["positive","positive"],["negative","negative"],["accurate","accurate"],["inaccurate","inaccurate"]]:[["recent","date"],["positive","positive"],["negative","negative"]]:[["recent","date"]]).map(function(e){return s===e[1]?o.a.createElement("div",{style:{paddingLeft:t/4,paddingRight:t/4,background:"#222",color:"white"}},e[0]):o.a.createElement("button",{onClick:function(){c(e[1])},style:{paddingLeft:t/4,paddingRight:t/4,textDecoration:"underline"}},e[0])})))),o.a.createElement("div",{style:{position:"relative",background:y.highlight_reviews_block?"#eee":"white",transition:"background 0.1s linear"}},m?o.a.createElement(v.a,null):null,o.a.createElement("div",{style:{maxWidth:m?1400+t+2:700,margin:"0 auto",display:m?"grid":"block",gridTemplateColumns:"1fr 1fr"}},m?o.a.createElement("div",{style:{borderRight:"solid 1px black"}},o.a.createElement(p.a,{reviews:O,grem:t,analyze:n,show_accuracy:d,review_sort:s,setReviewSort:c})):null,o.a.createElement("div",{style:{borderLeft:m?"solid 1px black":"none"}},o.a.createElement(p.a,{reviews:x,grem:t,analyze:n,show_accuracy:d,review_sort:s,setReviewSort:c})))))}}]),t}(o.a.Component));t.default=Object(d.withRouter)(b)},axqb:function(e,t,a){"use strict"},vYYK:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("hfKm"),i=a.n(n);function r(e,t,a){return t in e?i()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},x57o:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/topic2",function(){var e=a("OS8i");return{page:e.default||e}}])}},[["x57o","5d41","9da1"]]]);
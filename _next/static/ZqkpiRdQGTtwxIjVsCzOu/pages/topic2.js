(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{A1YD:function(e,t,a){"use strict";var n=a("vYYK"),i=a("0iUn"),r=a("sLSF"),l=a("MI3g"),s=a("a7VT"),o=a("Tit0"),c=a("q1tI"),d=a.n(c),u=a("YFqc"),m=a.n(u),g=a("LvDl"),v=a("ACBD"),h=function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(l.default)(this,Object(s.default)(t).call(this,e))).state={show_all_positive:!1,show_all_negative:!1},a}return Object(o.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.reviews,i=t.analyze,r=t.grem,l=a.map(function(e){var t=Math.max(Math.abs(g.min(e.lime_scores)),Math.abs(g.max(e.lime_scores)));var a=e.lime_tokens.map(function(a,n){var i,r=e.lime_scores[n],l=Math.abs(e.lime_scores[n])/t;return{token:a,score:r,class:e.class,scaled_score:l,background:(i=r,i<0?Object(v.h)(Math.abs(i)/t):Object(v.g)(Math.abs(i)/t)),author:e.author,date:e.date,index:e.index}}),n=g.sortBy(a,"score");return"pos"===e.class&&(n=n.reverse()),n[0]}),s=g.sortBy(l.filter(function(e){return"pos"===e.class}),"date"),o=g.sortBy(l.filter(function(e){return"neg"===e.class}),"date");return i?d.a.createElement("div",{style:{padding:r/2}},[["positive",s,this.state.show_all_positive,"show_all_positive"],["negative",o,this.state.show_all_negative,"show_all_negative"]].map(function(t,a){return d.a.createElement("div",{style:{marginBottom:0==a?r:0},key:t[0]},d.a.createElement("div",null,t[1].length," ",t[0]," review highlights"),d.a.createElement("div",{style:{textIndent:r}},t[1].slice(0,t[2]?1/0:4).map(function(e,a){return d.a.createElement("span",{style:{},key:e.token},d.a.createElement("span",{style:{backgroundImage:"linear-gradient(".concat(e.background,", ").concat(e.background,")"),backgroundSize:"4px 7px",backgroundRepeat:"repeat-x",backgroundPosition:"0 0.85em",paddingBottom:2}},e.token)," ","by ",e.author," ",d.a.createElement(m.a,{href:"/review?id=".concat(e.index)},d.a.createElement("a",null,e.date," days ago"))," ",t[1].length<4&&t[1].length-1===a?"":d.a.createElement("span",null,"\xb7")," ")})," ",t[1].length>4?t[2]?d.a.createElement("button",{style:{textDecoration:"underline"},onClick:function(){return e.setState(Object(n.a)({},t[3],!1))}},"show less"):d.a.createElement("button",{style:{textDecoration:"underline"},onClick:function(){return e.setState(Object(n.a)({},t[3],!0))}},"show all"):null))})):null}}]),t}(d.a.Component);t.a=h},OS8i:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),i=a("sLSF"),r=a("MI3g"),l=a("a7VT"),s=a("Tit0"),o=a("q1tI"),c=a.n(o),d=a("nOHt"),u=(a("YFqc"),a("Zm+b"),a("LvDl"),a("axqb"),a("PBx+"),a("TbHi")),m=a("ACBD"),g=a("A1YD"),v=a("sDQl"),h=function(e){function t(e){var a;return Object(n.default)(this,t),(a=Object(r.default)(this,Object(l.default)(t).call(this,e))).state={show_all_positive:!1,show_all_negative:!1},a}return Object(s.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this.props,t=(e.font_size,e.line_height,e.data_select,e.grem),a=e.router,n=e.analyze,i=e.data,r=e.info,l=e.setAnalyze,s=e.review_sort,o=e.setReviewSort,d=e.show_accuracy,h=e.setAccuracy,p=e.compare,b=e.setCompare,f=e.nbsvm_data,y=e.hl_options,_=e.tour,w=void 0!==_&&_,E=r.map(function(e){return e.og_id}),k=r[E.indexOf(a.query.id)],x=i.filter(function(e){return e.url===a.query.id}),O=f.filter(function(e){return e.url===a.query.id});p=p&&n;return((d=d&&n)||p)&&3*t,d&&p?5*t:d?3*t:p&&4*t,c.a.createElement("div",null,c.a.createElement(u.a,{grem:t,setAnalyze:l,analyze:n,setAlgo:this.props.setAlgo,algnames:this.props.algnames,data_select:this.props.data_select,show_accuracy:d,setAccuracy:h,compare:p,setCompare:b,data:x,nbsvm_data:O,hl_options:y}),c.a.createElement("div",{style:{}},c.a.createElement("div",{style:{maxWidth:700,margin:"0 auto",padding:t/2}},c.a.createElement("div",{style:{marginBottom:0*t}},c.a.createElement("div",null,k.Title),c.a.createElement("div",{style:{textIndent:t}},k.Year," \xb7 ",k.Runtime," \xb7"," ",k.Rated),c.a.createElement("div",{style:{textIndent:t}},k.Plot," ",c.a.createElement("a",{href:"https://www.imdb.com/title/".concat(k.imdbID)},"IMDB \u2192"))))),n?c.a.createElement("div",{id:w?"sentences-block":null,style:{zIndex:998,position:"relative",background:y.highlight_sentences_block?"#eee":"white",transition:"background 0.1s linear"}},p?c.a.createElement(m.a,null):null,c.a.createElement("div",{style:{maxWidth:p?1400+t+2:700,margin:"0 auto",display:p?"grid":"block",gridTemplateColumns:"1fr 1fr"}},p?c.a.createElement("div",{style:{borderRight:"solid 1px black"}},c.a.createElement(g.a,{grem:t,reviews:O,analyze:n})):null,c.a.createElement("div",{style:{borderLeft:p?"solid 1px black":"none"}},c.a.createElement(g.a,{grem:t,reviews:x,analyze:n}))),p?c.a.createElement(m.a,null):null):null,c.a.createElement("div",{id:w?"reviews-block":null,style:{position:"relative",background:y.highlight_reviews_block?"#eee":"white"}},c.a.createElement("div",{style:{maxWidth:700,margin:"0 auto",padding:t/2}},c.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",paddingRight:t/4,marginLeft:-t/4}},c.a.createElement("div",{style:{paddingLeft:t/4,paddingRight:t/4}},x.length," reviews sorted by most:"),(n?d?[["recent","date"],["positive","positive"],["negative","negative"],["accurate","accurate"],["inaccurate","inaccurate"]]:[["recent","date"],["positive","positive"],["negative","negative"]]:[["recent","date"]]).map(function(e){return s===e[1]?c.a.createElement("div",{key:e[0],style:{paddingLeft:t/4,paddingRight:t/4,background:"#222",color:"white"}},e[0]):c.a.createElement("button",{key:e[0],onClick:function(){o(e[1])},style:{paddingLeft:t/4,paddingRight:t/4,textDecoration:"underline"}},e[0])})))),c.a.createElement("div",{style:{position:"relative",background:y.highlight_reviews_block?"#eee":"white",transition:"background 0.1s linear"}},p?c.a.createElement(m.a,null):null,c.a.createElement("div",{style:{maxWidth:p?1400+t+2:700,margin:"0 auto",display:p?"grid":"block",gridTemplateColumns:"1fr 1fr"}},p?c.a.createElement("div",{style:{borderRight:"solid 1px black"}},c.a.createElement(v.a,{reviews:O,grem:t,analyze:n,show_accuracy:d,review_sort:s,setReviewSort:o,data_type:"compare"})):null,c.a.createElement("div",{style:{borderLeft:p?"solid 1px black":"none"}},c.a.createElement(v.a,{reviews:x,grem:t,analyze:n,show_accuracy:d,review_sort:s,setReviewSort:o})))))}}]),t}(c.a.Component);t.default=Object(d.withRouter)(h)},axqb:function(e,t,a){"use strict"},vYYK:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("hfKm"),i=a.n(n);function r(e,t,a){return t in e?i()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},x57o:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/topic2",function(){var e=a("OS8i");return{page:e.default||e}}])}},[["x57o",1,0]]]);
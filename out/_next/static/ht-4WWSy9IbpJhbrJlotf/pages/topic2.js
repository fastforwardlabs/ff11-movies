(window.webpackJsonp=window.webpackJsonp||[]).push([["56a7"],{OS8i:function(e,t,a){"use strict";a.r(t);var n=a("vYYK"),l=a("dfwq"),i=a("0iUn"),r=a("sLSF"),s=a("MI3g"),c=a("a7VT"),o=a("Tit0"),u=a("q1tI"),d=a.n(u),m=a("nOHt"),p=a("YFqc"),b=a.n(p),g=(a("Zm+b"),a("LvDl")),v=(a("axqb"),a("PBx+")),f=a.n(v),h=a("TbHi"),y=a("ACBD"),E=a("zYD8"),_=(f()().publicRuntimeConfig.linkPrefix,function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(s.default)(this,Object(c.default)(t).call(this,e))).state={show_all_positive:!1,show_all_negative:!1},a}return Object(o.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.font_size,t.line_height,t.grem),i=t.router,r=t.analyze,s=t.data,c=t.info,o=t.setAnalyze,u=t.review_sort,m=t.setReviewSort,p=t.show_accuracy,v=t.setAccuracy,f=c.map(function(e){return e.og_id}),_=c[f.indexOf(i.query.id)],w=s.filter(function(e){return e.url===i.query.id}),x=w.reduce(function(e,t){var a=e.slice();return t.class_probabilities[1]>t.class_probabilities[0]?a[1]+=1:a[0]+=1,a},[0,0]),k=w.map(function(e){return e.logits[1]>e.logits[0]?{class:e.class,label:e.label,certainty:e.class_probabilities[1]}:{class:e.class,label:e.label,certainty:e.class_probabilities[0]}}),O=g.sortBy(k.filter(function(e){return"pos"===e.class}),"certainty").reverse(),j=g.sortBy(k.filter(function(e){return"neg"===e.class}),"certainty"),B=[].concat(Object(l.default)(O),Object(l.default)(j));console.log(B);var M=w.slice();"date"===u?M=g.sortBy(M,"date"):"positive"===u?M=g.sortBy(M,function(e){var t;return"pos"===e.class&&(t=1-e.class_probabilities[1]-1),"neg"===e.class&&(t=e.class_probabilities[0]-0),t}):"negative"===u?M=g.sortBy(M,function(e){var t;return"pos"===e.class&&(t=e.class_probabilities[1]-0),"neg"===e.class&&(t=1-e.class_probabilities[0]-1),t}):"accurate"===u?M=g.sortBy(M,[function(e){return e.class===e.label?0:1},function(e){var t;return"pos"===e.class&&(t=1-e.class_probabilities[1]),"neg"===e.class&&(t=1-e.class_probabilities[0]),t}]):"inaccurate"===u&&(M=g.sortBy(M,[function(e){return e.class===e.label?1:0},function(e){var t;return"pos"===e.class&&(t=1-e.class_probabilities[1]),"neg"===e.class&&(t=1-e.class_probabilities[0]),t}]));var I=w.map(function(e){var t=Math.max(Math.abs(g.min(e.lime_scores)),Math.abs(g.max(e.lime_scores)));var a=e.lime_tokens.map(function(a,n){var l,i=e.lime_scores[n],r=Math.abs(e.lime_scores[n])/t;return{token:a,score:i,class:e.class,scaled_score:r,background:(l=i,l<0?Object(y.g)(Math.abs(l)/t):Object(y.f)(Math.abs(l)/t)),author:e.author,date:e.date,index:e.index}}),n=g.sortBy(a,"score");return"pos"===e.class&&(n=n.reverse()),n[0]}),R=I.filter(function(e){return"pos"===e.class}),z=I.filter(function(e){return"neg"===e.class}),D=w.reduce(function(e,t){var a=e.slice();return t.label===t.class?a[1]+=1:a[0]+=1,a},[0,0]),T=D[1]/w.length;return d.a.createElement("div",null,d.a.createElement(h.a,{grem:a,setAnalyze:o,analyze:r,combined:B,total:!1,setAlgo:this.props.setAlgo,algnames:this.props.algnames,data_select:this.props.data_select,rightwrong:D,accuracy:T,show_accuracy:p,setAccuracy:v}),d.a.createElement("div",{style:{maxWidth:700,margin:"0 auto",padding:a/2}},d.a.createElement("div",{style:{marginBottom:a}},d.a.createElement("div",null,_.Title),d.a.createElement("div",{style:{textIndent:a}},_.Year," · ",_.Runtime," ·"," ",_.Rated),d.a.createElement("div",{style:{textIndent:a}},_.Plot," ",d.a.createElement("a",{href:"https://www.imdb.com/title/".concat(_.imdbID)},"IMDB →"))),r?d.a.createElement("div",{style:{marginBottom:a}},d.a.createElement("div",{style:{height:a,position:"relative",overflow:"hidden"}},r?B.map(function(e,t){return d.a.createElement("div",{style:{position:"absolute",left:"".concat(1/B.length*t*100,"%"),top:0,bottom:0,width:"".concat(1/B.length*100+.05,"%"),background:"pos"===e.class?Object(y.d)(e.certainty):Object(y.e)(e.certainty)}})}):null,d.a.createElement("span",{style:{position:"relative"}},d.a.createElement("span",null,w.length," review",w.length>1?"s":"",r?d.a.createElement("span",null,"· ",x[1]," positive (",Math.floor(x[1]/B.length*1e3)/10,"%)"):null))),p?d.a.createElement("div",{style:{position:"relative",overflow:"hidden"}},B.map(function(e,t){return d.a.createElement("div",{style:{position:"absolute",left:"".concat(1/B.length*t*100,"%"),bottom:0,height:a,width:"".concat(1/B.length*100+.05,"%"),background:e.label!==e.class?"pos"===e.label?Object(y.d)(1):Object(y.e)(1):"#ddd"}})}),d.a.createElement("div",{style:{position:"relative"}},D[0]>0?d.a.createElement("span",null,Math.floor(1e3*T/10),"% accuracy (",D[0]," wrong)"):d.a.createElement("span",null,Math.floor(1e3*T/10),"% accuracy"))):null):null,r?[["positive",R,this.state.show_all_positive,"show_all_positive"],["negative",z,this.state.show_all_negative,"show_all_negative"]].map(function(t){return d.a.createElement("div",{style:{marginBottom:a}},d.a.createElement("div",null,t[1].length," ",t[0]," review highlights"),d.a.createElement("div",{style:{textIndent:a}},t[1].slice(0,t[2]?1/0:4).map(function(e,a){return d.a.createElement("span",{style:{}},d.a.createElement("span",{style:{backgroundImage:"linear-gradient(".concat(e.background,", ").concat(e.background,")"),backgroundSize:"4px 7px",backgroundRepeat:"repeat-x",backgroundPosition:"0 0.85em",paddingBottom:2}},e.token)," ","by ",e.author," ",d.a.createElement(b.a,{href:"/review?id=".concat(e.index)},d.a.createElement("a",null,e.date," days ago"))," ",t[1].length<4&&t[1].length-1===a?"":d.a.createElement("span",null,"·")," ")})," ",t[1].length>4?t[2]?d.a.createElement("button",{style:{textDecoration:"underline"},onClick:function(){return e.setState(Object(n.a)({},t[3],!1))}},"show less"):d.a.createElement("button",{style:{textDecoration:"underline"},onClick:function(){return e.setState(Object(n.a)({},t[3],!0))}},"show all"):null))}):null,d.a.createElement("div",null,d.a.createElement("div",{style:{display:"flex",paddingBottom:a/2-.5,marginBottom:a/2-.5,marginLeft:-a/2,marginRight:-a/2,position:"sticky",top:0,paddingTop:a/2,paddingLeft:a/2,paddingRight:a/2,marginTop:-a/2,background:"white",zIndex:99}},d.a.createElement("div",{style:{display:"flex",paddingRight:a/4,marginLeft:-a/4}},d.a.createElement("div",{style:{paddingLeft:a/4,paddingRight:a/4}},w.length," reviews sorted by most:"),(r?p?[["recent","date"],["positive","positive"],["negative","negative"],["accurate","accurate"],["inaccurate","inaccurate"]]:[["recent","date"],["positive","positive"],["negative","negative"]]:[["recent","date"]]).map(function(e){return u===e[1]?d.a.createElement("div",{style:{paddingLeft:a/4,paddingRight:a/4,background:"#222",color:"white"}},e[0]):d.a.createElement("button",{onClick:function(){m(e[1])},style:{paddingLeft:a/4,paddingRight:a/4,textDecoration:"underline"}},e[0])}))),d.a.createElement("div",null,M.map(function(e,t){return d.a.createElement(E.a,{r:e,i:t,grem:a,analyze:r,show_accuracy:p})})),d.a.createElement("div",{style:{marginBottom:0}},d.a.createElement(b.a,{href:"/"},d.a.createElement("a",null,"See all movies and shows"))))))}}]),t}(d.a.Component));t.default=Object(m.withRouter)(_)},axqb:function(e,t,a){"use strict"},vYYK:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("hfKm"),l=a.n(n);function i(e,t,a){return t in e?l()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},x57o:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/topic2",function(){var e=a("OS8i");return{page:e.default||e}}])},zYD8:function(e,t,a){"use strict";var n=a("0iUn"),l=a("sLSF"),i=a("MI3g"),r=a("a7VT"),s=a("Tit0"),c=a("q1tI"),o=a.n(c),u=a("YFqc"),d=a.n(u),m=a("LvDl"),p=a("ACBD"),b=function(e){function t(){return Object(n.default)(this,t),Object(i.default)(this,Object(r.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.r,a=(e.i,e.grem),n=e.analyze,l=e.show_accuracy,i=e.is_review;console.log(i);var r,s;t.class;t.class_probabilities[1]>t.class_probabilities[0]?(r=1,s=p.d,p.e):(r=0,s=p.e,p.d);var c=Math.max(Math.abs(m.min(t.lime_scores)),Math.abs(m.max(t.lime_scores)));return o.a.createElement("div",{style:{marginBottom:a}},n?o.a.createElement("div",{style:{marginTop:0*a,marginBottom:0*a}},o.a.createElement("div",{style:{background:s(t.class_probabilities[r])}},o.a.createElement("span",null,"classification: ",p.b[r])," ·"," ",o.a.createElement("span",{style:{}},Math.floor(1e3*t.class_probabilities[r])/10,"% certainty")),l?o.a.createElement("div",{style:{background:t.label===t.class?"#ddd":"pos"===t.label?Object(p.d)(1):Object(p.e)(1)}},"label: ","pos"===t.label?"positive":"negative"," ·"," ",t.label===t.class?"accurate":"inaccurate"," classification"):null):null,o.a.createElement("div",{style:{textIndent:0*a}},"by ",t.author," ·"," ",i?o.a.createElement("span",null,t.date," days ago"):o.a.createElement(d.a,{href:"/review?id=".concat(t.index)},o.a.createElement("a",null,t.date," days ago"))),o.a.createElement("div",{style:{marginBottom:0*a}},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",{style:{textIndent:1*a}},t.lime_tokens.map(function(e,a){var l,i=t.lime_scores[a],r=n?Math.abs(i)/c>.5?(l=i)<0?Object(p.g)(Math.abs(l)/c):Object(p.f)(Math.abs(l)/c):0:"transparent";return o.a.createElement("span",null," ",o.a.createElement("span",{style:{backgroundImage:"linear-gradient(".concat(r,", ").concat(r,")"),backgroundSize:"4px 5px",backgroundRepeat:"repeat-x",backgroundPosition:"0 0.85em",paddingBottom:2}},e)," ")}))))))}}]),t}(o.a.Component);t.a=b}},[["x57o","5d41","9da1"]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["e0d0"],{"991c":function(e,a,t){"use strict";t.r(a);var l=t("0iUn"),n=t("sLSF"),s=t("MI3g"),c=t("a7VT"),r=t("Tit0"),i=t("q1tI"),o=t.n(i),u=t("nOHt"),d=t("zYD8"),m=t("P5t4"),b=t("TbHi"),p=t("LvDl"),g=function(e){function a(){return Object(l.default)(this,a),Object(s.default)(this,Object(c.default)(a).apply(this,arguments))}return Object(r.default)(a,e),Object(n.default)(a,[{key:"render",value:function(){var e=this.props,a=e.data,t=e.grem,l=e.analyze,n=e.class_labels,s=e.show_accuracy,c=e.router,r=e.setAnalyze,i=e.setAccuracy,u=e.info,g=a[c.query.id],y=p.find(u,{og_id:g.url}),f=[{class:g.class,label:g.label,certainty:"pos"===g.class?g.class_probabilities[1]:g.class_probabilities[0]}],v=[g.class===g.label?0:1,g.class===g.label?1:0],h=v[1]/1;return o.a.createElement("div",{style:{maxWidth:700,margin:"0 auto",padding:t/2}},o.a.createElement("div",{style:{marginBottom:t}},"Review for ",y.Title,":"),o.a.createElement("div",{style:{marginBottom:0}},o.a.createElement(d.a,{r:g,i:c.query.id,grem:t,analyze:l,class_labels:n,show_accuracy:s,is_review:!0})),o.a.createElement("div",null,o.a.createElement(m.a,{href:"/topic2?id=".concat(g.url)},o.a.createElement("a",null,"See all reviews for ",y.Title))),o.a.createElement(b.a,{grem:t,setAnalyze:r,analyze:l,combined:f,total:!1,setAlgo:this.props.setAlgo,algnames:this.props.algnames,data_select:this.props.data_select,rightwrong:v,accuracy:h,show_accuracy:s,setAccuracy:i}))}}]),a}(o.a.Component);a.default=Object(u.withRouter)(g)},DskK:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/review",function(){var e=t("991c");return{page:e.default||e}}])},zYD8:function(e,a,t){"use strict";var l=t("0iUn"),n=t("sLSF"),s=t("MI3g"),c=t("a7VT"),r=t("Tit0"),i=t("q1tI"),o=t.n(i),u=t("YFqc"),d=t.n(u),m=t("LvDl"),b=t("ACBD"),p=function(e){function a(){return Object(l.default)(this,a),Object(s.default)(this,Object(c.default)(a).apply(this,arguments))}return Object(r.default)(a,e),Object(n.default)(a,[{key:"render",value:function(){var e=this.props,a=e.r,t=(e.i,e.grem),l=e.analyze,n=e.show_accuracy,s=e.is_review;console.log(s);var c,r;a.class;a.class_probabilities[1]>a.class_probabilities[0]?(c=1,r=b.d,b.e):(c=0,r=b.e,b.d);var i=Math.max(Math.abs(m.min(a.lime_scores)),Math.abs(m.max(a.lime_scores)));return o.a.createElement("div",{style:{marginBottom:t}},l?o.a.createElement("div",{style:{marginTop:0*t,marginBottom:0*t}},o.a.createElement("div",{style:{background:r(a.class_probabilities[c])}},o.a.createElement("span",null,"classification: ",b.b[c])," ·"," ",o.a.createElement("span",{style:{}},Math.floor(1e3*a.class_probabilities[c])/10,"% certainty")),n?o.a.createElement("div",{style:{background:a.label===a.class?"#ddd":"pos"===a.label?Object(b.d)(1):Object(b.e)(1)}},"label: ","pos"===a.label?"positive":"negative"," ·"," ",a.label===a.class?"accurate":"inaccurate"," classification"):null):null,o.a.createElement("div",{style:{textIndent:0*t}},"by ",a.author," ·"," ",s?o.a.createElement("span",null,a.date," days ago"):o.a.createElement(d.a,{href:"/review?id=".concat(a.index)},o.a.createElement("a",null,a.date," days ago"))),o.a.createElement("div",{style:{marginBottom:0*t}},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",{style:{textIndent:1*t}},a.lime_tokens.map(function(e,t){var n,s=a.lime_scores[t],c=l?Math.abs(s)/i>.5?(n=s)<0?Object(b.g)(Math.abs(n)/i):Object(b.f)(Math.abs(n)/i):0:"transparent";return o.a.createElement("span",null," ",o.a.createElement("span",{style:{backgroundImage:"linear-gradient(".concat(c,", ").concat(c,")"),backgroundSize:"4px 5px",backgroundRepeat:"repeat-x",backgroundPosition:"0 0.85em",paddingBottom:2}},e)," ")}))))))}}]),a}(o.a.Component);a.a=p}},[["DskK","5d41","9da1"]]]);
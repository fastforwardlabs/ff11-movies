(window.webpackJsonp=window.webpackJsonp||[]).push([["e0d0"],{"991c":function(e,a,t){"use strict";t.r(a);var l=t("0iUn"),n=t("sLSF"),r=t("MI3g"),i=t("a7VT"),c=t("Tit0"),s=t("q1tI"),d=t.n(s),o=t("nOHt"),u=t("zYD8"),m=t("P5t4"),p=t("TbHi"),y=t("ACBD"),_=t("LvDl"),g=function(e){function a(){return Object(l.default)(this,a),Object(r.default)(this,Object(i.default)(a).apply(this,arguments))}return Object(c.default)(a,e),Object(n.default)(a,[{key:"render",value:function(){var e=this.props,a=e.data,t=e.grem,l=e.analyze,n=e.class_labels,r=e.show_accuracy,i=e.router,c=e.setAnalyze,s=e.setAccuracy,o=e.info,g=e.data_select,f=e.nbsvm_data,v=e.compare,w=e.setCompare,b=[a[i.query.id]],h=[f[i.query.id]],E=_.find(o,{og_id:b[0].url});return r=r&&l,v=v&&l,d.a.createElement("div",null,d.a.createElement(p.a,{grem:t,setAnalyze:c,analyze:l,setAlgo:this.props.setAlgo,algnames:this.props.algnames,data_select:this.props.data_select,show_accuracy:r,setAccuracy:s,compare:v,setCompare:w,data:b,nbsvm_data:h}),d.a.createElement("div",{style:{maxWidth:700,margin:"0 auto",padding:t/2}},d.a.createElement("div",{style:{marginBottom:0}},"Review for ",E.Title,":")),d.a.createElement("div",null,v?d.a.createElement(y.a,null):null,d.a.createElement("div",{style:{maxWidth:v?1400+t+2:700,margin:"0 auto",display:v?"grid":"block",gridTemplateColumns:"1fr 1fr"}},v?d.a.createElement("div",{style:{padding:t/2,borderRight:"solid 1px black"}},d.a.createElement(u.a,{key:g+"_"+h[0].index,r:h[0],i:i.query.id,grem:t,analyze:l,class_labels:n,show_accuracy:r,is_review:!0})):null,d.a.createElement("div",{style:{padding:t/2,borderLeft:v?"solid 1px black":"none"}},d.a.createElement(u.a,{key:g+"_"+b.index,r:b[0],i:i.query.id,grem:t,analyze:l,class_labels:n,show_accuracy:r,is_review:!0}))),v?d.a.createElement(y.a,null):null),d.a.createElement("div",null,d.a.createElement("div",{style:{maxWidth:700,margin:"0 auto",padding:t/2}},d.a.createElement(m.a,{href:"/topic2?id=".concat(b[0].url)},d.a.createElement("a",null,"See all reviews for ",E.Title)))))}}]),a}(d.a.Component);a.default=Object(o.withRouter)(g)},DskK:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/review",function(){var e=t("991c");return{page:e.default||e}}])}},[["DskK","5d41","9da1"]]]);
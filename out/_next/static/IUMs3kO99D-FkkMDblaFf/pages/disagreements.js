(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{p2nX:function(e,t,a){"use strict";a.r(t);var l=a("0iUn"),n=a("sLSF"),s=a("MI3g"),r=a("a7VT"),i=a("Tit0"),o=a("q1tI"),c=a.n(o),d=(a("K6CT"),a("Zm+b"),a("8rWI")),u=a.n(d),m=a("TbHi"),h=a("ACBD"),p=(a("PBx+"),a("sDQl")),w=a("LvDl"),v=function(e){function t(e){var a;return Object(l.default)(this,t),(a=Object(s.default)(this,Object(r.default)(t).call(this,e))).state={show_all:!1},a}return Object(i.default)(t,e),Object(n.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.font_size,t.line_height,t.grem),l=(t.analyze,t.info),n=(t.reviews,t.setAnalyze),s=(t.sort,t.setSort,t.show_accuracy,t.nbsvm_data),r=t.data,i=t.hl_options,o=t.setAccuracy,d=(t.compare,t.review_sort,t.setReviewSort),v=t.setCompare,_=this.state.show_all;for(var g=[],y=[],f=0;f<r.length;f++)r[f].class!==s[f].class&&(g.push(r[f]),y.push(s[f]));return g=w.sortBy(g,"date"),y=w.sortBy(y,"date"),!0,!0,!0,c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement("title",null,"Textflix:\xa0Disagreements")),c.a.createElement(m.a,{grem:a,setAnalyze:n,analyze:!0,setAlgo:this.props.setAlgo,algnames:this.props.algnames,data_select:this.props.data_select,show_accuracy:!0,setAccuracy:o,compare:!0,setCompare:v,data:g,nbsvm_data:y,hl_options:i,analyze_locked:!0}),c.a.createElement("div",{style:{maxWidth:700,padding:a/2,margin:"0 auto"}},c.a.createElement("div",{style:{}},"Reviews where the NBSVM and BERT classification disagree:")),c.a.createElement("div",null,c.a.createElement("div",{style:{position:"relative",background:i.highlight_reviews_block?"#eee":"white",transition:"background 0.1s linear"}},c.a.createElement(h.a,null),c.a.createElement("div",{style:{maxWidth:1400+a+2,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr"}},c.a.createElement("div",{style:{borderRight:"solid 1px black"}},c.a.createElement(p.a,{reviews:_?y:y.slice(0,40),grem:a,analyze:!0,show_accuracy:!0,review_sort:"date",setReviewSort:d,info:l,show_title:!0})),c.a.createElement("div",{style:{borderLeft:"solid 1px black"}},c.a.createElement(p.a,{reviews:_?g:g.slice(0,40),grem:a,analyze:!0,show_accuracy:!0,review_sort:"date",setReviewSort:d,info:l,show_title:!0})))),c.a.createElement(h.a,null)),_?null:c.a.createElement("div",{style:{maxWidth:700,margin:"0 auto",padding:a/2}},c.a.createElement("button",{style:{textDecoration:"underline"},onClick:function(){e.setState({show_all:!0})}},"show all")))}}]),t}(c.a.Component);t.default=v},tLY0:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/disagreements",function(){var e=a("p2nX");return{page:e.default||e}}])}},[["tLY0",1,0]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{p2nX:function(e,t,a){"use strict";a.r(t);var s=a("0iUn"),l=a("sLSF"),n=a("MI3g"),r=a("a7VT"),i=a("Tit0"),o=a("q1tI"),c=a.n(o),d=(a("K6CT"),a("Zm+b"),a("TbHi")),u=a("ACBD"),h=(a("PBx+"),a("sDQl")),m=a("LvDl"),p=function(e){function t(e){var a;return Object(s.default)(this,t),(a=Object(n.default)(this,Object(r.default)(t).call(this,e))).state={show_all:!1},a}return Object(i.default)(t,e),Object(l.default)(t,[{key:"render",value:function(){var e=this,t=this.props,a=(t.font_size,t.line_height,t.grem),s=t.analyze,l=t.info,n=(t.reviews,t.setAnalyze),r=(t.sort,t.setSort,t.show_accuracy),i=t.nbsvm_data,o=t.data,p=t.hl_options,w=t.setAccuracy,v=(t.compare,t.review_sort,t.setReviewSort),_=t.setCompare,g=this.state.show_all;for(var y=[],f=[],b=0;b<o.length;b++)o[b].class!==i[b].class&&(y.push(o[b]),f.push(i[b]));return y=m.sortBy(y,"date"),f=m.sortBy(f,"date"),c.a.createElement("div",null,c.a.createElement(d.a,{grem:a,setAnalyze:n,analyze:s,setAlgo:this.props.setAlgo,algnames:this.props.algnames,data_select:this.props.data_select,show_accuracy:!0,setAccuracy:w,compare:!0,setCompare:_,data:y,nbsvm_data:f,hl_options:p,analyze_locked:!0}),c.a.createElement("div",{style:{maxWidth:700,padding:a/2,margin:"0 auto"}},c.a.createElement("div",{style:{}},"Reviews where the NBSVM and BERT classification disagree:")),c.a.createElement("div",null,c.a.createElement("div",{style:{position:"relative",background:p.highlight_reviews_block?"#eee":"white",transition:"background 0.1s linear"}},c.a.createElement(u.a,null),c.a.createElement("div",{style:{maxWidth:1400+a+2,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr"}},c.a.createElement("div",{style:{borderRight:"solid 1px black"}},c.a.createElement(h.a,{reviews:g?f:f.slice(0,40),grem:a,analyze:s,show_accuracy:r,review_sort:"date",setReviewSort:v,info:l,show_title:!0})),c.a.createElement("div",{style:{borderLeft:"solid 1px black"}},c.a.createElement(h.a,{reviews:g?y:y.slice(0,40),grem:a,analyze:s,show_accuracy:r,review_sort:"date",setReviewSort:v,info:l,show_title:!0})))),c.a.createElement(u.a,null)),g?null:c.a.createElement("div",{style:{maxWidth:700,margin:"0 auto",padding:a/2}},c.a.createElement("button",{style:{textDecoration:"underline"},onClick:function(){e.setState({show_all:!0})}},"show all")))}}]),t}(c.a.Component);t.default=p},tLY0:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/disagreements",function(){var e=a("p2nX");return{page:e.default||e}}])}},[["tLY0",1,0]]]);
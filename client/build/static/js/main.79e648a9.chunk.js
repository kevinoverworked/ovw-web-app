(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),a=n(16),i=n.n(a),o=(n(22),n(3)),r=n(4),l=n(6),j=n(5),d=(n(23),n(17)),b=n.n(d),O=n(0),u=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).card=s.props.dataObject,console.log("this.props.dataObject = "+JSON.stringify(s.props.dataObject)),s}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.dataObject;return console.log("data.media = "+JSON.stringify(e)),Object(O.jsxs)("section",{className:"card",children:[Object(O.jsxs)("div",{className:"content",children:[Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("h1",{children:e.title}),Object(O.jsx)("p",{className:"subtitle",children:e.subTitle})]}),Object(O.jsx)("div",{className:"media",children:Object(O.jsx)("figure",{})}),Object(O.jsx)("div",{className:"copy"})]}),Object(O.jsxs)("div",{className:"footer",children:[Object(O.jsx)("div",{className:"link"}),Object(O.jsx)("div",{className:"icons"})]}),Object(O.jsx)("div",{role:"navigation"}),Object(O.jsx)("div",{className:"deck"})]})}}]),n}(s.Component),p=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={response:{}},s}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/v1/dashboard").then((function(t){e.setState({response:t}),console.log("response.data lin 35 = "+JSON.stringify(t.data))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log("App.js"+JSON.stringify(this.state.response.data)),Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(u,{dataObject:this.state.response.data})})}}]),n}(s.Component),h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root")),h()}},[[43,1,2]]]);
//# sourceMappingURL=main.79e648a9.chunk.js.map
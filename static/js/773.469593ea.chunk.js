"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[773],{429:function(e,t,n){var r=n(87),a=n(184);t.Z=function(e){var t=e.data;return(0,a.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.original_title;return(0,a.jsxs)("li",{children:[(0,a.jsx)(r.rU,{to:"movies/".concat(t),children:n})," "]},t)}))})}},773:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r,a=n(861),u=n(439),c=n(687),i=n.n(c),s=n(791),o=n(168),f=n(82).ZP.form(r||(r=(0,o.Z)(["\nmargin: 30px;\n"]))),p=n(184),l=function(e){var t=e.searchSubmit,n=(0,s.useState)(""),r=(0,u.Z)(n,2),a=r[0],c=r[1];return(0,p.jsxs)(f,{onSubmit:function(e){if(e.preventDefault(),""===a.trim())return alert("Enter a search name, please");t(a),c("")},children:[(0,p.jsx)("input",{onChange:function(e){c(e.target.value)},name:"query",value:a,type:"text",placeholder:"Search film"}),(0,p.jsx)("button",{type:"submit",children:" Search "})]})},h=n(298),v=n(87),d=n(429),m=function(){var e=(0,s.useState)(null),t=(0,u.Z)(e,2),n=t[0],r=t[1],c=(0,s.useState)(!1),o=(0,u.Z)(c,2),f=o[0],m=o[1],x=(0,s.useState)(""),Z=(0,u.Z)(x,2),g=Z[0],b=Z[1],k=(0,v.lr)(),j=(0,u.Z)(k,2),w=j[0],y=j[1],S=w.get("q");return(0,s.useEffect)((function(){if(S){var e=function(){var e=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,(0,h.gH)(S);case 4:if(t=e.sent,console.log(t),0!==t.length){e.next=8;break}return e.abrupt("return",(0,p.jsx)("p",{children:"not found"}));case 8:r(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),b(e.t0);case 14:return e.prev=14,m(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}}),[S]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l,{searchSubmit:function(e){y({q:e})}}),f&&(0,p.jsx)("p",{children:"Loading..."}),n&&(0,p.jsx)(d.Z,{data:n}),g&&(0,p.jsx)("p",{children:" Oops..."})]})}},298:function(e,t,n){n.d(t,{Df:function(){return s},TP:function(){return f},gH:function(){return o}});var r=n(861),a=n(687),u=n.n(a),c=n(243),i="d6e594172c33afd2a5e4738620913491";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=773.469593ea.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[957],{776:function(e,n,r){r.d(n,{CL:function(){return d},Hq:function(){return p},Ly:function(){return o},h_:function(){return l},lw:function(){return h}});var t=r(861),a=r(757),c=r.n(a),i=r(243),s="d1209b93bfca019c1d550689906b1b5c",u="https://api.themoviedb.org/3/",o=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("".concat(u,"trending/movie/day?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("".concat(u,"movie/").concat(n,"?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new AbortController,e.next=3,(0,i.Z)("".concat(u,"search/movie?api_key=").concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"),{signal:r.signal});case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("".concat(u,"movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("".concat(u,"movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},957:function(e,n,r){r.r(n),r.d(n,{default:function(){return v}});var t=r(861),a=r(439),c=r(757),i=r.n(c),s=r(791),u=r(689),o=r(776),l=r(184),p=function(e){var n=e.movie,r=n.original_title,t=n.release_date,a=n.poster_path,c=n.vote_average,i=n.overview,s=n.genres,u=t?"(".concat(t.split("-")[0],")"):"",o=c?"Use Score: ".concat(Number((10*c).toFixed(0)),"%"):"No Ranking",p=a?"https://image.tmdb.org/t/p/w400/".concat(a):"https://dummyimage.com/450x550/a3dae6/020430&text=Movie+and+poster+should+be+here...";return(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:p,alt:r}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h2",{children:[null!==r&&void 0!==r?r:"Unknown",u&&(0,l.jsx)("span",{children:u})]}),(0,l.jsx)("p",{children:o}),i&&(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:i})]}),s&&s.length>0&&(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{children:"Genres"})," ",(0,l.jsx)("p",{children:s.map((function(e){return e.name})).join(", ")})]})]})]})},d=r(87),h=r(966),v=function(){var e,n,r=(0,u.TH)(),c=(0,s.useRef)(null!==(e=null===r||void 0===r||null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),v=(0,u.UO)().movieId,f=(0,s.useState)({}),x=(0,a.Z)(f,2),m=x[0],j=x[1],w=(0,s.useState)(!1),g=(0,a.Z)(w,2),k=g[0],b=g[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,o.h_)(v);case 4:n=e.sent,j(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]),(0,l.jsxs)(l.Fragment,{children:[k&&(0,l.jsx)(h.a,{}),(0,l.jsx)(d.rU,{to:c.current,children:(0,l.jsx)("button",{type:"button",children:"Go Back"})}),(0,l.jsx)(p,{movie:m}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(d.rU,{to:"review",children:"Reviews"})})]})]}),(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(h.a,{}),children:(0,l.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=957.1c00c69a.chunk.js.map
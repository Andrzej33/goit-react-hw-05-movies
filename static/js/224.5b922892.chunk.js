"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[224],{4776:function(n,e,t){t.d(e,{CL:function(){return d},Hq:function(){return p},Ly:function(){return u},h_:function(){return l},lw:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),i=t(1243),s="d1209b93bfca019c1d550689906b1b5c",o="https://api.themoviedb.org/3/",u=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(o,"trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(o,"movie/").concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new AbortController,n.next=3,(0,i.Z)("".concat(o,"search/movie?api_key=").concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"),{signal:t.signal});case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},5176:function(n,e,t){t.d(e,{C1:function(){return u},XJ:function(){return o},jh:function(){return l}});var r,a,c,i=t(168),s=t(6444),o=s.ZP.ul(r||(r=(0,i.Z)(["\ndisplay: flex;\npadding-left: 30px;\nflex-direction: column;\ngap: 10px;\nfont-size: 20px;\n"]))),u=s.ZP.h4(a||(a=(0,i.Z)(["\n    padding-left: 40px;\n    font-size: 22px;\n"]))),l=s.ZP.ul(c||(c=(0,i.Z)(["\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    li{\n        font-size: 20px;\n        color: #128383;\n    }\n"])))},8224:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a=t(5861),c=t(9439),i=t(7757),s=t.n(i),o=t(2791),u=t(7689),l=t(4776),p=t(168),d=t(6444).ZP.div(r||(r=(0,p.Z)(["\nbackground-color: silver;\n    padding: 25px;\n    display: flex;\ngap: 40px;\n"]))),f=t(184),h=function(n){var e=n.movie,t=e.original_title,r=e.release_date,a=e.poster_path,c=e.vote_average,i=e.overview,s=e.genres,o=r?"(".concat(r.split("-")[0],")"):"",u=c?"Use Score: ".concat(Number((10*c).toFixed(0)),"%"):"No Ranking",l=a?"https://image.tmdb.org/t/p/w400/".concat(a):"https://dummyimage.com/450x550/a3dae6/020430&text=Movie+and+poster+should+be+here...";return(0,f.jsxs)(d,{children:[(0,f.jsx)("img",{src:l,alt:t}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{children:[null!==t&&void 0!==t?t:"Unknown",o&&(0,f.jsx)("span",{children:o})]}),(0,f.jsx)("h3",{children:u}),i&&(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:i})]}),s&&s.length>0&&(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Genres"})," ",(0,f.jsx)("p",{children:s.map((function(n){return n.name})).join(", ")})]})]})]})},v=t(1087),x=t(966),m=t(5991),g=t(5176),j=function(){var n,e,t=(0,u.TH)(),r=(0,o.useRef)(null!==(n=null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),i=(0,u.UO)().movieId,p=(0,o.useState)({}),d=(0,c.Z)(p,2),j=d[0],w=d[1],k=(0,o.useState)(!1),b=(0,c.Z)(k,2),Z=b[0],y=b[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y(!0),n.prev=1,n.next=4,(0,l.h_)(i);case 4:e=n.sent,w(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:return n.prev=11,y(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[i]),(0,f.jsxs)(f.Fragment,{children:[Z&&(0,f.jsx)(x.a,{}),(0,f.jsx)(v.rU,{to:r.current,children:(0,f.jsx)("button",{type:"button",children:"Go Back"})}),(0,f.jsx)(h,{movie:j}),(0,f.jsxs)("div",{children:[(0,f.jsx)(g.C1,{children:"Additional information"}),(0,f.jsxs)(g.jh,{children:[(0,f.jsxs)("li",{children:[(0,f.jsx)(m.F,{to:"cast",children:"Cast"})," "]}),(0,f.jsx)("li",{children:(0,f.jsx)(m.F,{to:"review",children:"Reviews"})})]})]}),(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)(x.a,{}),children:(0,f.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=224.5b922892.chunk.js.map
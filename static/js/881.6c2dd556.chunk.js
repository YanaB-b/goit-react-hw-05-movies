"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{43:function(e,t,n){n.d(t,{Hg:function(){return r},TP:function(){return c},V0:function(){return i},tx:function(){return u},zv:function(){return s}});var o="f250076af8e178f34eb0c5b722a66f8c",r=function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o)).then((function(e){if(e.ok)return e.json();throw new Error("Response was not ok.")}))},i=function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("Response was not ok.")}))},c=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o)).then((function(e){if(e.ok)return e.json();throw new Error("Response was not ok.")}))},s=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o)).then((function(e){if(e.ok)return e.json();throw new Error("Response was not ok.")})).then((function(e){return e.cast}))},u=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o)).then((function(e){if(e.ok)return e.json();throw new Error("Response was not ok.")})).then((function(e){return e.results}))}},155:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(689),r=n(87),i="MoviesList_moviesList__P6SP5",c="MoviesList_item__eePYv",s=n(184),u=function(e){var t=e.movies,n=(0,o.TH)();return(0,s.jsx)("ul",{className:i,children:t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(r.rU,{state:{from:n},className:c,to:"/movies/".concat(e.id),children:e.title})},e.id)}))})}},881:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var o=n(439),r=n(791),i=n(43),c={section:"Movies_section__bjPDA",title:"Movies_title__MDLXB"},s=n(155),u=n(184),a=function(){var e=(0,r.useState)(""),t=(0,o.Z)(e,2),n=t[0],a=t[1],h=(0,r.useState)([]),f=(0,o.Z)(h,2),l=f[0],v=f[1],p=(0,r.useState)("idle"),m=(0,o.Z)(p,2),d=m[0],k=m[1];return(0,u.jsxs)("div",{className:c.section,children:[(0,u.jsx)("h2",{className:c.title,children:"Search Movies"}),(0,u.jsx)("input",{className:c.input,type:"text",value:n,onChange:function(e){return a(e.target.value)}}),(0,u.jsx)("button",{className:c.button,onClick:function(e){e.preventDefault(),""!==n.trim()&&(0,i.V0)(n).then((function(e){v(e.results),k("resolved")})).catch((function(e){console.log("Error",e),k("rejected")}))},children:"Search"}),(0,u.jsx)(s.Z,{movies:l}),0===l.length&&"resolved"===d&&(0,u.jsx)("h3",{children:"Nothing was found. Please try another search."})]})}}}]);
//# sourceMappingURL=881.6c2dd556.chunk.js.map
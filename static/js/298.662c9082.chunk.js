"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[298],{43:function(e,t,n){n.d(t,{Hg:function(){return s},TP:function(){return r},V0:function(){return o},tx:function(){return a},zv:function(){return c}});var i="f250076af8e178f34eb0c5b722a66f8c",s=function(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i)).then((function(e){if(e.ok)return e.json();throw new Error("Response was not ok.")}))},o=function(e){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("Response was not ok.")}))},r=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i)).then((function(e){if(e.ok)return e.json();throw new Error("Response was not ok.")}))},c=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i)).then((function(e){if(e.ok)return e.json();throw new Error("Response was not ok.")})).then((function(e){return e.cast}))},a=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i)).then((function(e){if(e.ok)return e.json();throw new Error("Response was not ok.")})).then((function(e){return e.results}))}},995:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var i=n(439),s=n(791),o=n(689),r=n(87),c=n(43),a=n.p+"static/media/defaultimages.04617c3b7e9ded3dfb3d.jpg",l={section:"MovieDetails_section__CCh0q",title:"MovieDetails_title__cUGs9",btnBack:"MovieDetails_btnBack__X1hfE",movieDetails:"MovieDetails_movieDetails__EbgQo",subTitle:"MovieDetails_subTitle__t78ZZ",subSection:"MovieDetails_subSection__KAV5u",text:"MovieDetails_text__RHcc4"},u=n(184),h=function(){var e,t,n=(0,o.UO)().movieId,h=(0,s.useState)({}),d=(0,i.Z)(h,2),f=d[0],m=d[1];(0,s.useEffect)((function(){(0,c.TP)(n).then((function(e){return m(e)})).catch((function(e){return console.log("Error",e)}))}),[n]);var v=(0,o.TH)(),p=(0,s.useRef)(null!==(e=null===(t=v.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies"),_=f.genres,j=f.release_date;return(0,u.jsxs)("div",{className:l.section,children:[(0,u.jsx)(r.Link,{className:l.btnBack,to:p.current,children:"\ud83e\udca8To back"}),(0,u.jsx)("h1",{className:l.title,children:"Movie Details"}),(0,u.jsxs)("div",{className:l.movieDetails,children:[(0,u.jsx)("img",{src:f.poster_path?"https://image.tmdb.org/t/p/w300/".concat(f.poster_path):a,alt:f.original_title,width:300}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("p",{className:l.subTitle,children:["Movie Title: ",(0,u.jsx)("span",{className:l.text,children:f.title})," "]}),(0,u.jsxs)("div",{className:l.subSection,children:[(0,u.jsx)("p",{className:l.subTitle,children:"Release year:"}),j&&(0,u.jsx)("p",{className:l.text,children:j.split("-")[0]})]}),_&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h3",{className:l.subTitle,children:"Genres:"}),(0,u.jsx)("ul",{children:_.map((function(e){return(0,u.jsx)("li",{className:l.text,children:e.name},e.id)}))})]})]})]}),(0,u.jsx)("h3",{className:l.subTitle,children:"Overview:"}),(0,u.jsxs)("p",{className:l.text,children:[" ",f.overview]}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(r.Link,{className:l.item,to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(r.Link,{className:l.item,to:"reviews",children:"Review"})})]}),(0,u.jsx)(s.Suspense,{children:(0,u.jsx)(o.j3,{})})]})}}}]);
//# sourceMappingURL=298.662c9082.chunk.js.map
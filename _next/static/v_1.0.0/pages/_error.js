(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+TSP":function(e,t,n){e.exports=window.fetch||(window.fetch=n("YUY5").default||n("YUY5"))},K0nt:function(e,t,n){e.exports=n("lx8+")},SLxR:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("Y0NT")}])},Y0NT:function(e,t,n){"use strict";n.r(t);var r=n("UrUy"),s=n.n(r),o=n("R3/3"),a=n("LkAs"),i=n("Moms"),u=n("bMj6"),l=n("hZod"),c=n("tEuJ"),d=n("mXGw"),p=n.n(d),f=n("K0nt"),h=n.n(f),m=n("+TSP"),g=n.n(m),x=p.a.createElement,v=function(e){function t(){return Object(a.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.errorCode?x(h.a,{statusCode:this.props.errorCode}):x("div",null,"Next stars: ",this.props.stars)}}],[{key:"getInitialProps",value:function(){var e=Object(o.a)(s.a.mark(function e(){var t,n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g()("https://api.github.com/repos/zeit/next.js");case 2:return t=e.sent,n=t.status>200&&t.status,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",{errorCode:n,stars:r.stargazers_count});case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),t}(p.a.Component);t.default=v},YUY5:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var s=new XMLHttpRequest,o=[],a=[],i={},u=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:u,headers:{keys:function(){return o},entries:function(){return a},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(t.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){o.push(t=t.toLowerCase()),a.push([t,n]),i[t]=i[t]?i[t]+","+n:n}),n(u())},s.onerror=r,s.withCredentials="include"==t.credentials,t.headers)s.setRequestHeader(l,t.headers[l]);s.send(t.body||null)})}},"lx8+":function(e,t,n){"use strict";var r=n("KBEF"),s=n("J/q3"),o=n("3esu"),a=n("8m4E"),i=n("Od8a"),u=n("PL1w");t.__esModule=!0,t.default=void 0;var l=u(n("mXGw")),c=u(n("9fEB")),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"},p=function(e){function t(){return r(this,t),o(this,a(t).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||d[e]||"An unexpected error has occurred";return l.default.createElement("div",{style:f.error},l.default.createElement(c.default,null,l.default.createElement("title",null,e,": ",t)),l.default.createElement("div",null,l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?l.default.createElement("h1",{style:f.h1},e):null,l.default.createElement("div",{style:f.desc},l.default.createElement("h2",{style:f.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),t}(l.default.Component);t.default=p,p.displayName="ErrorPage";var f={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}}},[["SLxR",1,0]]]);
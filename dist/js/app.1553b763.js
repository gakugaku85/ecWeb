(function(e){function t(t){for(var r,o,c=t[0],l=t[1],s=t[2],i=0,h=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(h.length)h.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b5ca19bf","chunk-2d2162a2":"7fe3e0b3","chunk-2d2250bd":"e798377d","chunk-2d229445":"8873a3d9","chunk-639ba4f4":"6fe16b5f","chunk-2d0d365a":"e3783cf2","chunk-2d0e62b2":"2c08ff31","chunk-2d226d06":"72e70db8","chunk-3931f918":"d34c8da1","chunk-85286a80":"58385534","chunk-8baf201c":"c8ea4d87"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-639ba4f4":1,"chunk-3931f918":1,"chunk-8baf201c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d2162a2":"31d6cfe0","chunk-2d2250bd":"31d6cfe0","chunk-2d229445":"31d6cfe0","chunk-639ba4f4":"dfe81440","chunk-2d0d365a":"31d6cfe0","chunk-2d0e62b2":"31d6cfe0","chunk-2d226d06":"31d6cfe0","chunk-3931f918":"ce0b1569","chunk-85286a80":"31d6cfe0","chunk-8baf201c":"f5b12219"}[e]+".css",a=l.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],i=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===r||i===a))return t()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){s=h[c],i=s.getAttribute("data-href");if(i===r||i===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=c(e);var h=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",h.name="ChunkLoadError",h.type=r,h.request=o,n[1](h)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var f=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),n("router-link",{attrs:{to:"/myhome"}},[e._v("Myhome")]),e._v(" | "),n("router-link",{attrs:{to:"/gas"}},[e._v("gas")]),e._v(" | "),n("router-link",{attrs:{to:"/gasTest"}},[e._v("gastest")]),e._v(" | "),n("router-link",{attrs:{to:"/userLogin"}},[e._v("userLogin")])],1),n("router-view")],1)])},a=[],u={name:"App"},c=u,l=(n("034f"),n("2877")),s=Object(l["a"])(c,o,a,!1,null,null,null),i=s.exports,h=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),e._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],b={name:"HelloWorld",props:{msg:String}},m=b,g=(n("935b"),Object(l["a"])(m,p,v,!1,null,"71451e76",null)),_=g.exports,k={name:"Home",components:{HelloWorld:_}},y=k,j=Object(l["a"])(y,f,d,!1,null,null,null),w=j.exports;r["a"].use(h["a"]);var E=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/myhome",name:"Myhome",component:function(){return n.e("chunk-8baf201c").then(n.bind(null,"c3a8"))}},{path:"/kairo1",name:"Kairo1",component:function(){return Promise.all([n.e("chunk-639ba4f4"),n.e("chunk-2d226d06")]).then(n.bind(null,"e9ea"))}},{path:"/kairo2",name:"Kairo2",component:function(){return Promise.all([n.e("chunk-639ba4f4"),n.e("chunk-2d0e62b2")]).then(n.bind(null,"9830"))}},{path:"/ans",name:"Ans",component:function(){return Promise.all([n.e("chunk-639ba4f4"),n.e("chunk-2d0d365a")]).then(n.bind(null,"5d1f"))}},{path:"/gas",name:"Gas",component:function(){return n.e("chunk-2d229445").then(n.bind(null,"dd5d"))}},{path:"/gasTest",component:function(){return n.e("chunk-2d2162a2").then(n.bind(null,"c0fe"))}},{path:"/userLogin",component:function(){return n.e("chunk-85286a80").then(n.bind(null,"1511"))}},{path:"/indivPage",component:function(){return Promise.all([n.e("chunk-639ba4f4"),n.e("chunk-3931f918")]).then(n.bind(null,"928d"))}},{path:"/questionPage",component:function(){return n.e("chunk-2d2250bd").then(n.bind(null,"e370"))}}],P=new h["a"]({mode:"history",base:"/",routes:E}),O=P;r["a"].config.productionTip=!1,new r["a"]({router:O,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,t,n){},"935b":function(e,t,n){"use strict";var r=n("ebdd"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},ebdd:function(e,t,n){}});
//# sourceMappingURL=app.1553b763.js.map
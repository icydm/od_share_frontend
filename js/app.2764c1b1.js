(function(t){function e(e){for(var n,s,o=e[0],u=e[1],c=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var u=a[o];0!==r[u]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"app"}},[n("img",{staticStyle:{width:"200px"},attrs:{alt:"Logo",src:a("b640")}}),n("br"),n("h1",[t._v(" R酱的资源收纳库 ")]),n("span"),n("Row",{attrs:{type:"flex"}},[n("Col",{attrs:{span:"20",offset:"2"}},[n("Divider"),n("transition",[n("router-view")],1),n("Divider")],1)],1),n("Breadcrumb",[n("BreadcrumbItem",{attrs:{to:"/"}},[t._v("Home")]),n("BreadcrumbItem",{attrs:{to:"/status"}},[t._v("Status")])],1)],1)},i=[],s={name:"App"},o=s,u=(a("034f"),a("2877")),c=Object(u["a"])(o,r,i,!1,null,null,null),l=c.exports,d=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"auto"}},[a("Row",[a("Col",{attrs:{span:"16",offset:"4"}},[a("Input",{attrs:{search:"","enter-button":"",placeholder:"Enter something..."},on:{"on-search":t.updateItems},model:{value:t.search_key,callback:function(e){t.search_key=e},expression:"search_key"}})],1)],1),a("Row",{staticStyle:{"margin-top":"30px"}},[a("Col",{attrs:{span:"20",offset:"2"}},[a("Table",{attrs:{stripe:"",columns:t.search_columns,data:t.search_data,loading:t.search_load,"no-data-text":"搜索失败，请更换关键词"}})],1)],1)],1)},h=[],p=(a("b680"),a("bc3a").default),m={name:"Search",data:function(){var t=this;return{search_key:"",search_data:[],search_load:!1,search_columns:[{title:"标题",key:"title",ellipsis:!0,render:function(t,e){return t("router-link",{attrs:{to:{name:"item_details",params:{uuid:e.row.id}}}},e.row.title)}},{title:"大小",key:"size",width:120,align:"right",render:function(e,a){return e("p",{},t.humanFileSize(a.row.size))},className:"text-right"},{title:"添加时间",key:"add_at",width:190,align:"center",render:function(t,e){return t("p",{},new Date(1e3*e.row.add_at).toLocaleString())}}]}},methods:{humanFileSize:function(t){var e=0===t?0:Math.floor(Math.log(t)/Math.log(1024));return 1*(t/Math.pow(1024,e)).toFixed(2)+" "+["B","kB","MB","GB","TB"][e]},updateItems:function(){var t=this;this.search_data=[],this.search_load=!0,this.$Loading.start(),p.get("http://share-api.rhilip.info/search".concat(this.search_key?"/"+this.search_key:"")).then((function(e){t.search_load=!1,t.$Loading.finish(),t.search_data=e.data.data})).catch((function(e){t.search_load=!1,t.$Loading.error(),console.log(e.message)}))}},mounted:function(){this.updateItems()}},g=m,_=Object(u["a"])(g,f,h,!1,null,"45715166",null),v=_.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"auto"}},[t.status?a("div",[a("p",[t._v(" "+t._s(t.status.length)+" 个存储对象， 总计空间 "),a("code",[t._v(t._s(t.humanFileSize(t.getFullSize())))]),t._v(" ( 空闲 "),a("code",[t._v(t._s(t.humanFileSize(t.getFreeSize())))]),t._v(" , 已使用 "),a("code",[t._v(t._s(t.humanFileSize(t.getUsedSize())))]),t._v(" , 回收站 "),a("code",[t._v(t._s(t.humanFileSize(t.getTrashedSize())))]),t._v(" ) ")]),a("Row",{staticStyle:{"margin-top":"10px"},attrs:{type:"flex",gutter:16}},t._l(t.status,(function(e,n){return a("Col",{key:n,staticStyle:{"margin-top":"15px"},attrs:{span:"6"}},[a("p",[a("b",[t._v(t._s(e.id))])]),a("Progress",{attrs:{percent:parseFloat((e.status.used/e.status.total*100).toFixed(2)),"stroke-width":20,status:"active","text-inside":""}})],1)})),1)],1):t._e()])},y=[],S=(a("d81d"),a("13d5"),a("bc3a").default),w={name:"Status",data:function(){return{status:null}},methods:{getFreeSize:function(){return this.status.map((function(t){return t.status.free})).reduce((function(t,e){return t+e}))},getUsedSize:function(){return this.status.map((function(t){return t.status.used})).reduce((function(t,e){return t+e}))},getTrashedSize:function(){return this.status.map((function(t){return t.status.trashed})).reduce((function(t,e){return t+e}))},getFullSize:function(){return this.status.map((function(t){return t.status.total})).reduce((function(t,e){return t+e}))},humanFileSize:function(t){var e=0===t?0:Math.floor(Math.log(t)/Math.log(1024));return 1*(t/Math.pow(1024,e)).toFixed(2)+" "+["B","kB","MB","GB","TB"][e]},getStatus:function(){var t=this;this.$Loading.start(),S.get("http://share-api.rhilip.info/status").then((function(e){if(t.$Loading.finish(),200===e.status){var a=e.data;a.data.sort((function(t,e){return e.status.used-t.status.used})),t.status=a.data}else t.$Loading.error()}))}},mounted:function(){this.status||this.getStatus()}},x=w,k=Object(u["a"])(x,b,y,!1,null,"11e9c286",null),z=k.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"auto"}},[a("Card",[a("div",{staticStyle:{"text-align":"center"}},[t.loading?a("div",[a("Spin",{attrs:{fix:""}},[t._v("加载中...")])],1):t.item?a("div",[a("h3",[t._v(t._s(t.item.title))]),a("div",[t._v(" 档案大小： "),a("span",[t._v(t._s(t.humanFileSize(t.item.size)))])]),a("div",[t._v(" 档案链接： "),a("a",{attrs:{target:"_blank"},on:{click:function(e){return t.openRawLink()}}},[t._v("点击打开")])])]):a("div",[t._v(" 未获取到档案信息，请重新检查 ")])])])],1)},M=[],F=a("bc3a").default,O={name:"Item",data:function(){return{item:null,loading:!0}},created:function(){this.getItemDetails()},watch:{$route:"getItemDetails"},methods:{humanFileSize:function(t){var e=0===t?0:Math.floor(Math.log(t)/Math.log(1024));return 1*(t/Math.pow(1024,e)).toFixed(2)+" "+["B","kB","MB","GB","TB"][e]},openRawLink:function(){window.open(this.item.raw_link,"_blank")},getItemDetails:function(){var t=this;F.get("http://share-api.rhilip.info/items/".concat(this.$route.params.uuid)).then((function(e){t.loading=!1,t.item=e.data.data}))}}},j=O,$=Object(u["a"])(j,B,M,!1,null,"0f1c9cce",null),L=$.exports,I=[{path:"/items/:uuid",name:"item_details",component:L},{path:"/status",component:z},{path:"*",component:v}],T=I,P=a("f825"),E=a.n(P);a("f8ce");n["default"].use(E.a),n["default"].use(d["a"]),n["default"].config.productionTip=!1;var R=new d["a"]({routes:T});R.beforeEach((function(t,e,a){E.a.LoadingBar.start(),a()})),R.afterEach((function(){E.a.LoadingBar.finish()})),new n["default"]({render:function(t){return t(l)},router:R}).$mount("#app")},"85ec":function(t,e,a){},b640:function(t,e,a){t.exports=a.p+"img/logo.28397a15.jpg"}});
//# sourceMappingURL=app.2764c1b1.js.map
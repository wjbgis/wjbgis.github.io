webpackJsonp([1],{"/eND":function(t,e){},0:function(t,e){},"1uuo":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("XDqQ");var s=n("Axha"),a=n.n(s),i=n("7+uW"),r=n("1e2d"),o=n.n(r),c={data:function(){return{date:null,confirmed:null,suspected:null,cured:null,dead:null,confirmedAdd:null,suspectedAdd:null,curedAdd:null,deadAdd:null}},methods:{init:function(){this.$http.get("https://raw.githubusercontent.com/canghailan/Wuhan-2019-nCoV/master/Wuhan-2019-nCoV.json").then(function(t){console.log(t.body),console.log(this.filterByChina(t.body)),console.log(this.filterChinaToday(t.body));var e=this.filterChinaToday(t.body),n=this.filterChinaLastday(t.body);this.date=e.date,this.confirmed=e.confirmed,this.suspected=e.suspected,this.cured=e.cured,this.dead=e.dead,this.confirmedAdd=e.confirmed-n.confirmed,this.suspectedAdd=e.suspected-n.suspected,this.curedAdd=e.cured-n.cured,this.deadAdd=e.dead-n.dead})},filterByChina:function(t){return t.filter(function(t){return"CN"===t.countryCode&&""===t.province})},filterChinaToday:function(t){var e=this.filterByChina(t);return e[e.length-1]},filterChinaLastday:function(t){var e=this.filterByChina(t);return e[e.length-2]},filterByProvince:function(t){return t.filter(function(t){return""!==t.province&&""===t.city})}},mounted:function(){this.init()}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"data"}},[n("div",{staticClass:"title-div"},[n("div",{staticClass:"title-content"},[n("span",{staticClass:"title-name"},[t._v("全国概况")]),t._v(" "),n("span",{staticClass:"end-date"},[t._v("截至"+t._s(t.date))])])]),t._v(" "),n("div",{staticClass:"info-card-div"},[n("div",{staticClass:"item confirmed split"},[n("span",{staticClass:"top-text"},[t._v("\n        较昨日\n        "),n("span",{staticClass:"add color"},[t._v(t._s(t.confirmedAdd))])]),t._v(" "),n("p",{staticClass:"number color"},[t._v(t._s(t.confirmed))]),t._v(" "),n("span",{staticClass:"type"},[t._v("确诊")])]),t._v(" "),n("div",{staticClass:"item wellcure split"},[n("span",{staticClass:"top-text"},[t._v("\n        较昨日\n        "),n("span",{staticClass:"add color"},[t._v(t._s(t.curedAdd))])]),t._v(" "),n("p",{staticClass:"number color"},[t._v(t._s(t.cured))]),t._v(" "),n("span",{staticClass:"type"},[t._v("治愈")])]),t._v(" "),n("div",{staticClass:"item confirmed split"},[n("span",{staticClass:"top-text"},[t._v("\n        较昨日\n        "),n("span",{staticClass:"add color"},[t._v(t._s(t.suspectedAdd))])]),t._v(" "),n("p",{staticClass:"number color"},[t._v(t._s(t.suspected))]),t._v(" "),n("span",{staticClass:"type"},[t._v("疑似")])]),t._v(" "),n("div",{staticClass:"item cure"},[n("span",{staticClass:"top-text"},[t._v("\n        较昨日\n        "),n("span",{staticClass:"add color"},[t._v(t._s(t.deadAdd))])]),t._v(" "),n("p",{staticClass:"number color"},[t._v(t._s(t.dead))]),t._v(" "),n("span",{staticClass:"type"},[t._v("死亡")])])])])},staticRenderFns:[]};var d={components:{EverydayData:n("VU/8")(c,l,!1,function(t){n("PSVa")},null,null).exports},name:"App",data:function(){return{}},methods:{init:function(){o.a.accessToken="pk.eyJ1Ijoiamltd2VpIiwiYSI6ImNqN3ZoczZhZjZiZm0zMm8yeW00b2VkdjkifQ.Q_wogxtnFE11PatzGRkHEA";new o.a.Map({container:this.$refs.mapContainer,style:"mapbox://styles/jimwei/ck4mcmd4l7ufr1cpmh965ht2a",zoom:2,center:[106,36]});this.$http.get("./static/test.json").then(function(t){console.log(t.body),console.log(this.filterByChina(t.body)),console.log(this.filterChinaToday(t.body))})},filterByChina:function(t){return t.filter(function(t){return"CN"===t.countryCode&&""===t.province})},filterChinaToday:function(t){var e=this.filterByChina(t);return e[e.length-1]},filterChinaLastday:function(t){var e=this.filterByChina(t);return e[e.length-2]},filterByProvince:function(t){return t.filter(function(t){return""!==t.province&&""===t.city})}},mounted:function(){this.init()}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("mt-header",{attrs:{fixed:"",title:"nCov-2019 charts"}}),this._v(" "),e("div",{ref:"mapContainer",attrs:{id:"mapdiv"}}),this._v(" "),e("EverydayData")],1)},staticRenderFns:[]};var v=n("VU/8")(d,u,!1,function(t){n("/eND")},null,null).exports,h=n("/ocq"),f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var p=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},f,!1,function(t){n("1uuo")},"data-v-d8ec41bc",null).exports;i.a.use(h.a);var _=new h.a({routes:[{path:"/",name:"HelloWorld",component:p}]}),m=n("8+8L");i.a.use(m.a),i.a.component(a.a.name,a.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:_,components:{App:v},template:"<App/>"})},PSVa:function(t,e){},XDqQ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5c28171a38a219a089e3.js.map
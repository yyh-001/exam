(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-test_jump-test_jump"],{"2fe1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7f7f");var a={data:function(){return{num:getApp().globalData.num+1,totle:getApp().globalData.srantext.length}},onLoad:function(){try{getApp().globalData.data.data}catch(t){console.log(t.message),console.log(t.name),alert("请求数据超时！即将返回首页"),uni.navigateTo({url:"../../index/index"})}},methods:{jump:function(){this.num>0&&this.num<getApp().globalData.srantext.length+1?(getApp().globalData.num=this.num-1,uni.reLaunch({url:"../test"})):uni.showToast({title:"跳转题号范围为（1~"+getApp().globalData.srantext.length+"），请重新输入！",icon:"none"})},moveback:function(){uni.reLaunch({url:"../test"})}}};e.default=a},"72f3":function(t,e,n){"use strict";var a=n("8cea"),i=n.n(a);i.a},"8cea":function(t,e,n){var a=n("b159");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("58ce9e7a",a,!0,{sourceMap:!1,shadowMode:!1})},a31b:function(t,e,n){"use strict";n.r(e);var a=n("fdb7"),i=n("e32e");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("72f3");var o=n("2877"),l=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"6573cace",null);e["default"]=l.exports},b159:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".box[data-v-6573cace]{padding:%?30?%;text-align:left;font-size:%?35?%}.cu-form-group .title[data-v-6573cace]{min-width:calc(4em + 15px)}",""])},e32e:function(t,e,n){"use strict";n.r(e);var a=n("2fe1"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},fdb7:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-bar  bg-gradual-red shadow-blur"},[n("v-uni-view",{staticClass:"action",on:{click:function(e){e=t.$handleEvent(e),t.moveback(e)}}},[n("v-uni-text",{staticClass:"cuIcon-back text-white"})],1),n("v-uni-view",{staticClass:"content text-bold"},[t._v("考试模式")])],1),n("v-uni-view",{staticClass:"box title bg-img text-bold"},[t._v("请输入要跳转的题号"),n("v-uni-view",{staticClass:"box1 text-bold"},[t._v("题号:1~"+t._s(t.totle))])],1),n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"title text-bold"},[t._v("题号:")]),n("v-uni-input",{attrs:{type:"number",value:""},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),n("v-uni-button",{staticClass:"cuIcon-btn shadow light bg-brown",on:{click:function(e){e=t.$handleEvent(e),t.jump(e)}}},[n("v-uni-text",{staticClass:"text-bold"},[t._v("确定")])],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})}}]);
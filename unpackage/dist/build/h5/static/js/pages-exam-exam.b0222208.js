(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-exam-exam"],{"145d":function(a,t,n){t=a.exports=n("2350")(!1),t.push([a.i,".box[data-v-c00ec298]{width:100%;height:%?700?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.box3[data-v-c00ec298]{border-radius:%?25?%;width:90%;padding:%?10?%;margin:%?20?%;font-size:%?40?%;text-align:center}.box2[data-v-c00ec298]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.box1[data-v-c00ec298]{padding:%?10?%}",""])},"18cb":function(a,t,n){"use strict";n.r(t);var e=n("a08a"),o=n.n(e);for(var l in e)"default"!==l&&function(a){n.d(t,a,function(){return e[a]})}(l);t["default"]=o.a},"29c2":function(a,t,n){"use strict";var e=n("4f13"),o=n.n(e);o.a},4811:function(a,t,n){"use strict";var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-uni-view",{staticClass:"contain"},[n("v-uni-view",{staticClass:"cu-bar bg-gradual-pink shadow-blur"},[n("v-uni-view",{staticClass:"action",on:{click:function(t){t=a.$handleEvent(t),a.moveback(t)}}},[n("v-uni-text",{staticClass:"cuIcon-back text-white"})],1),n("v-uni-view",{staticClass:"content text-bold"},[a._v(a._s(a.title.test_name))])],1),n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"box1 text-bold"},[a._v("最后更新于:"+a._s(a.title.update_time))]),n("v-uni-view",{staticClass:"box2"},[a.danxuan?n("v-uni-view",{staticClass:"box1 text-bold"},[a._v("单选题:"+a._s(a.danxuan)+"道")]):a._e(),a.panduan?n("v-uni-view",{staticClass:"box1 text-bold"},[a._v("判断题:"+a._s(a.panduan)+"道")]):a._e(),a.duoxuan?n("v-uni-view",{staticClass:"box1 text-bold"},[a._v("多选题:"+a._s(a.duoxuan)+"道")]):a._e()],1),n("v-uni-view",{staticClass:"box3 light bg-gradual-blue shadow-blur text-bold",on:{click:function(t){t=a.$handleEvent(t),a.open_preview()}}},[a._v("顺序预览")]),n("v-uni-view",{staticClass:"box3 light bg-gradual-green shadow-blur text-bold",on:{click:function(t){t=a.$handleEvent(t),a.open_order()}}},[a._v("顺序练习")]),n("v-uni-view",{staticClass:"box3 light bg-gradual-orange shadow-blur text-bold",on:{click:function(t){t=a.$handleEvent(t),a.open_sran()}}},[a._v("随机练习")]),n("v-uni-view",{staticClass:"box3 light bg-gradual-red shadow-blur text-bold",on:{click:function(t){t=a.$handleEvent(t),a.open_test()}}},[a._v("考试模式")]),n("a",{staticClass:"box1 text-bold",attrs:{href:"http://bbs.yyhnet.cn",target:"_blank"}},[a._v("论坛:bbs.yyhnet.cn")])],1)],1)},o=[];n.d(t,"a",function(){return e}),n.d(t,"b",function(){return o})},"4f13":function(a,t,n){var e=n("145d");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var o=n("4f06").default;o("273a47d7",e,!0,{sourceMap:!1,shadowMode:!1})},"63dc":function(a,t,n){"use strict";n.r(t);var e=n("4811"),o=n("18cb");for(var l in o)"default"!==l&&function(a){n.d(t,a,function(){return o[a]})}(l);n("29c2");var i=n("2877"),u=Object(i["a"])(o["default"],e["a"],e["b"],!1,null,"c00ec298",null);t["default"]=u.exports},a08a:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("55dd"),n("7f7f");var e={onLoad:function(){try{getApp().globalData.data.data}catch(o){console.log(o.message),console.log(o.name),alert("请求数据超时！即将返回首页"),uni.navigateTo({url:"../index/index"})}for(var a=0,t=0,n=0,e=0;e<getApp().globalData.data.data.length;e++)switch(getApp().globalData.data.data[e].题型){case"单选题":a++;break;case"判断题":t++;break;case"多选题":n++;break}getApp().globalData.danxuan_num=a,getApp().globalData.panduan_num=t,getApp().globalData.duoxuan_num=n},onShow:function(){this.danxuan=getApp().globalData.danxuan_num,this.panduan=getApp().globalData.panduan_num,this.duoxuan=getApp().globalData.duoxuan_num},data:function(){return{title:getApp().globalData.data.title,danxuan:getApp().globalData.danxuan_num,panduan:getApp().globalData.panduan_num,duoxuan:getApp().globalData.duoxuan_num}},methods:{moveback:function(){getApp().globalData.num=0,uni.reLaunch({url:"../index/index"})},open_preview:function(){uni.navigateTo({url:"../preview/preview"})},open_order:function(){getApp().globalData.num=0,uni.navigateTo({url:"../order/order"})},open_sran:function(){getApp().globalData.num=0,uni.navigateTo({url:"../sran/sran"})},open_test:function(){getApp().globalData.time=(new Date).getTime(),getApp().globalData.num=0;for(var a=[],t=[],n=[],e=[],o=0;o<getApp().globalData.danxuan_num;o++)a[o]=o;a.sort(function(){return.5-Math.random()});for(var l=0;l<getApp().globalData.data.title.test_radio;l++)n[l]=getApp().globalData.data.data[a[l]];for(var i=getApp().globalData.danxuan_num;i<getApp().globalData.danxuan_num+getApp().globalData.panduan_num;i++)t[i]=i;t.sort(function(){return.5-Math.random()});for(var u=0;u<getApp().globalData.data.title.test_judge;u++)e[u]=getApp().globalData.data.data[t[u]];if(this.duoxuan>0){for(var r=[],d=[],s=getApp().globalData.danxuan_num+getApp().globalData.panduan_num;s<getApp().globalData.danxuan_num+getApp().globalData.panduan_num+getApp().globalData.duoxuan_num;s++)r[s]=s;r.sort(function(){return.5-Math.random()});for(var c=0;c<getApp().globalData.data.title.test_multi;c++)d[c]=getApp().globalData.data.data[r[c]]}n=this.duoxuan>0?n.concat(e,d):n.concat(e),getApp().globalData.srantext=n,getApp().globalData.scorelist=new Array,getApp().globalData.answerlist=new Array,uni.navigateTo({url:"../test/test"})}}};t.default=e}}]);
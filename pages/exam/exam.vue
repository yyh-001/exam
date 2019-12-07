<template>
	<view class="contain">
		<view class="cu-bar bg-gradual-pink shadow-blur">
			<view class="action" @tap="moveback">
				<text class="cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
				{{title.test_name}}
			</view>
		</view>
		<view class="box">
			<view class="box1 text-bold">最后更新于:{{title.update_time}}</view>
			<view class="box2">
				<view class="box1 text-bold" v-if="danxuan">单选题:{{danxuan}}道</view>
				<view class="box1 text-bold" v-if="panduan">判断题:{{panduan}}道</view>
				<view class="box1 text-bold" v-if="duoxuan">多选题:{{duoxuan}}道</view> 
			</view>
			<view class="box3 light bg-gradual-blue shadow-blur text-bold" @tap="open_preview()">顺序预览</view>
			<view class="box3 light bg-gradual-green shadow-blur text-bold" @tap="open_order()">顺序练习</view>
			<view class="box3 light bg-gradual-orange shadow-blur text-bold" @tap="open_sran()">随机练习</view>
			<view class="box3 light bg-gradual-red shadow-blur text-bold" @tap="open_test()">考试模式</view>
			<a class="box1 text-bold" href="http://bbs.yyhnet.cn"target="_blank">论坛:bbs.yyhnet.cn</a>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			try {
			  getApp().globalData.data.data;
			} catch (e) {
			  console.log(e.message);              // "null has no properties"
			  console.log(e.name);                 // "TypeError"
			  alert("请求数据超时！即将返回首页");
			  uni.navigateTo({
			  	url: '../index/index'
			  });
			};
			  var danxuan = 0;
			  var panduan = 0;
			  var duoxuan = 0;
			  for( var i=0 ;i<getApp().globalData.data.data.length;i++){
			  	switch(getApp().globalData.data.data[i].题型){
			  		case "单选题":danxuan++;
			  			break;
			  		case "判断题":panduan++;
			  			break;
			  		case "多选题":duoxuan++;
			  			break;
			  	}
			  };
			  getApp().globalData.danxuan_num = danxuan;
			  getApp().globalData.panduan_num = panduan;
			  getApp().globalData.duoxuan_num = duoxuan;
			
		},
		onShow() {
			this.danxuan=getApp().globalData.danxuan_num;
			this.panduan=getApp().globalData.panduan_num;
			this.duoxuan=getApp().globalData.duoxuan_num;
		},
		data() {
			return {
				title : getApp().globalData.data.title,
				danxuan:getApp().globalData.danxuan_num,
				panduan:getApp().globalData.panduan_num,
				duoxuan:getApp().globalData.duoxuan_num,
			}
		},

		methods: {
			moveback:function(){
				getApp().globalData.num = 0
				uni.reLaunch({
					url: '../index/index'
					
				});
			},
			open_preview:function () {
				uni.navigateTo({
					url: '../preview/preview'
				});
			},
			open_order:function () {
				getApp().globalData.num = 0
				uni.navigateTo({
					url: '../order/order'
				});
			},
			open_sran:function () {
				getApp().globalData.num = 0;			
				uni.navigateTo({
					url: '../sran/sran'
				});
			},
			open_test:function () {
				getApp().globalData.time = new Date().getTime();
				getApp().globalData.num = 0;
				var Arr1 = [];
				var Arr2 = []; 
				var Arrs1 = [];
				var Arrs2 = []; 
				//单选题随机抽取
				for (var i1 = 0; i1 < getApp().globalData.danxuan_num; i1++) {
				  Arr1[i1] = i1;
				};
				Arr1.sort(function () {
				  return 0.5 - Math.random();
				});
				for(var s1 = 0; s1 < getApp().globalData.data.title.test_radio;s1++){
					Arrs1[s1] = getApp().globalData.data.data[Arr1[s1]];
				};
				//判断题随机抽取
				for (var i2 = getApp().globalData.danxuan_num; i2 < getApp().globalData.danxuan_num+ getApp().globalData.panduan_num; i2++) {
				  Arr2[i2] = i2;
				};
				Arr2.sort(function () {
				  return 0.5 - Math.random();
				});
				for(var s2 = 0; s2 < getApp().globalData.data.title.test_judge;s2++){
					Arrs2[s2] = getApp().globalData.data.data[Arr2[s2]];
				};
				//多选题随机抽取
				if(this.duoxuan>0){
					var Arr3 = []; 
					var Arrs3 = []; 
					for (var i3 = getApp().globalData.danxuan_num+ getApp().globalData.panduan_num;i3 < getApp().globalData.danxuan_num+ getApp().globalData.panduan_num+getApp().globalData.duoxuan_num; i3++) {
					  Arr3[i3] = i3;
					}
					
					Arr3.sort(function () {
					  return 0.5 - Math.random();
					});
					for(var s3 = 0; s3 < getApp().globalData.data.title.test_multi;s3++){
						Arrs3[s3] = getApp().globalData.data.data[Arr3[s3]];
					};
				};
				if(this.duoxuan>0){
					Arrs1 = Arrs1.concat(Arrs2,Arrs3);
				}else{
					Arrs1 = Arrs1.concat(Arrs2);
				}
				getApp().globalData.srantext = Arrs1;
				getApp().globalData.scorelist = new Array;
				getApp().globalData.answerlist = new Array;
				uni.navigateTo({
					url: '../test/test'
				});
			}
		},	
	}
</script>
<style>
.box{
width: 100%;
height: 700upx;
display: flex;
flex-direction: column;
align-items:center;
}
.box3{
border-radius: 25upx;
width: 90%;
padding: 10upx;
margin: 20upx;
font-size: 40upx;
text-align: center;
}
.box2{
display: flex;
flex-direction: row;
}
.box1{
	padding: 10upx;
}
</style>

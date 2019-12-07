<template>
	<view>
		<view class="cu-bar bg-gradual-red shadow-blur">
			<view class="action" @tap="moveback">
				<text class="cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
				错题查看({{current}}/{{totle}})
			</view>
			<view class="action">
				<text class="cuIcon-more" @tap="jump"></text>
			</view>
		</view>
		<view class="box">
			<view class="box3 light bg-img shadow text-bold">{{type}}:{{title}}</view>
			<view class="box3 light bg-img shadow text-bold" v-if="option1">A:{{option1}}</view>
			<view class="box3 light bg-img shadow text-bold" v-if="option2">B:{{option2}}</view>
			<view class="box3 light bg-img shadow text-bold" v-if="option3">C:{{option3}}</view>
			<view class="box3 light bg-img shadow text-bold" v-if="option4">D:{{option4}}</view>
			<view class="box3 light bg-img shadow text-bold" v-if="option5">E:{{option5}}</view>
			<view class="box3 light bg-img shadow text-bold">答案：{{answer}}</view>
			<view class="box3 light bg-img shadow text-bold">你的选择：{{erroranswer}}</view>
		</view>
		<view class="box2">
			<view class="bu1 light bg-red shadow" @tap="pre_title">上一题</view>
			<view class="bu2 light bg-red shadow" @tap="next_title">下一题</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totle:getApp().globalData.errorlist.length,
				current:getApp().globalData.num+1,
				title: getApp().globalData.errorlist[getApp().globalData.num].题干,
				type:  getApp().globalData.errorlist[getApp().globalData.num].题型,
				option1: getApp().globalData.errorlist[getApp().globalData.num].选项1,
				option2: getApp().globalData.errorlist[getApp().globalData.num].选项2,
				option3: getApp().globalData.errorlist[getApp().globalData.num].选项3,
				option4: getApp().globalData.errorlist[getApp().globalData.num].选项4,
				option5:getApp().globalData.errorlist[getApp().globalData.num].选项5,
				answer:getApp().globalData.errorlist[getApp().globalData.num].答案,
				erroranswer:getApp().globalData.erroranswer[getApp().globalData.num]
			}
		},
		onLoad(){
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
		},
		methods: {
			jump:function() {
				uni.reLaunch({
					url: '../test_error/test_jump/test_jump'
				});
			},
			moveback:function(){
				getApp().globalData.num = 0;
				uni.reLaunch({
					url: '../test_score/test_score'
				});
			},
			next_title:function(){
				//console.log(getApp().globalData.num++);
				
				if(getApp().globalData.num+1<getApp().globalData.errorlist.length){
					getApp().globalData.num++;
					uni.reLaunch({
						url: '../test_error/test_error'
					});
				}else{
					uni.showToast({
						title: '已经是最后一题了！',
						icon:'none'
					});}
			},
			pre_title:function(){
					/* if(getApp().globalData.data.data[getApp().globalData.num].题型.match("判断")){
							this.show = 'true';
					}else{
							this.show= 'false';
					} */
					//console.log(getApp().globalData.num--);
					if(getApp().globalData.num>0){
						getApp().globalData.num--;
						uni.navigateTo({
							url: '../test_error/test_error'
						});
					}else{
						uni.showToast({
							title: '这是第一题！',
							icon:'none'
						});
					}
			}
		}
	}
</script>

<style>
.bu1{
	width:40%;
	margin: auto;
	height: 100upx;
	text-align: center;
	padding: 30upx;
}
.bu2{
	width:40%;
	margin: auto;
	height: 100upx;
	text-align: center;
	padding: 30upx;
}
.box2{
	display: flex;
	flex-direction: row;
	width: 100%;
	padding: 30upx;
	}
.box{
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
margin-top: 30upx;
}
.box3{
width: 90%;
padding: 10upx;
font-size: 35upx;
}
</style>

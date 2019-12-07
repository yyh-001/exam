<template>
	<view class="contain">
		<view class="cu-bar bg-gradual-red shadow-blur">
			<view class="action" @tap="moveback">
				<text class="cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
				{{title.test_name}}
			</view>
		</view>
		<view class='exam text-shadow'>{{score}}分</view>
		<view class="box text-bold">
			正确率:{{parseInt(score/totalscore*100)}}%
		</view>
		<view class="box text-bold">
			完成时间:{{time}}
		</view>
		<button class="cuIcon-btn shadow light bg-brown" @tap="wrong_test" v-if="isshow">
			<text>查看错题</text>
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				score:0,
				isshow: true,
				title : getApp().globalData.data.title,
				time:getApp().globalData.time1 
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
			this.score = 0 ;
			for(var i=0;i<getApp().globalData.scorelist.length;i++){
				if(getApp().globalData.scorelist[i]){
					this.score = getApp().globalData.scorelist[i]+this.score;
				}
			};
			if(this.score==0){
				this.isshow = '';
			};
			if(this.score==100){
				this.isshow = '';
			};
			this.totalscore = getApp().globalData.data.title.test_radio*getApp().globalData.data.title.radio_score+getApp().globalData.data.title.test_judge*getApp().globalData.data.title.judge_score+ getApp().globalData.data.title.test_multi*getApp().globalData.data.title.multi_score
		},
		methods: {
			moveback:function(){
				getApp().globalData.num = 0
				uni.reLaunch({
					url: '../exam/exam'
				});
			},
			wrong_test(){
				getApp().globalData.errorlist = new Array;
				getApp().globalData.erroranswer = new Array;
				for(var i=0;i<getApp().globalData.answerlist.length;i++){
					if(getApp().globalData.scorelist[i] == 0){
						getApp().globalData.errorlist.push(getApp().globalData.srantext[i]);
						getApp().globalData.erroranswer.push(getApp().globalData.answerlist[i]);
					};
				};
				getApp().globalData.num = 0;
				uni.navigateTo({
					url: '../test_error/test_error'
				});
			},
		}
	}
</script>

<style>
	.contain {
		display: flex;
		height: 100%;
		justify-content: center;
		flex-direction: column;
	}
	.exam{
		height: 70%;
		margin: 100upx auto;
		color: black;
		font-family: "微软雅黑",sans-serif;
		font-size: 100upx;
		font-weight: 900;
	}
	.box{
		width: 100%;
		text-align: center;
	}
</style>

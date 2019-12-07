<template>
	<view>
		<view class="cu-bar  bg-gradual-orange shadow-blur">
			<view class="action" @tap="moveback">
				<text class="cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
				随机练习
			</view>
		</view>
		<view class="box title bg-img text-bold">
			请输入要跳转的题号
			<view class="box1 text-bold">题号:1~{{totle}}</view>
		</view>
		<view class="uni-list-cell uni-list-cell-pd">
			<view class="title text-bold">
				题号:
			</view>
			<input type="number" value=""  v-model="num"/>
		</view>
		<button class="cuIcon-btn shadow light bg-brown" @tap="jump">
			<text class="text-bold">确定</text>
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num : getApp().globalData.num+1,
				totle:getApp().globalData.srantext.length
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
			  	url: '../../index/index'
			  });
			};
		},
		methods: {
			jump:function() {
				if(this.num>0&&this.num<getApp().globalData.srantext.length+1){
					getApp().globalData.num = this.num-1
					uni.reLaunch({
						url: '../sran_exam'
					});
				}else{
					uni.showToast({
						title: '跳转题号范围为（1~'+getApp().globalData.srantext.length+'），请重新输入！',
						icon:'none'
					});
				}
			},
			moveback:function(){
				uni.reLaunch({
					url: '../sran_exam'
				});
			},
		}
	}
</script>

<style>
.box{
	padding: 30upx;
	text-align: left;
	font-size: 35upx;
}
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>

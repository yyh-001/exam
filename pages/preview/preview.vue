<template>
	<view class="contain">
		<view class="cu-bar bg-gradual-blue shadow-blur">
			<view class="action" @tap="moveback">
				<text class="cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
				顺序预览({{current}}/{{totle}})
			</view>
			<view class="action">
				<text class="cuIcon-more" @tap="jump"></text>
			</view>
		</view>
		<view class="box">
			<view class="box3 light text-bold bg-img shadow">{{type}}:{{title}}</view>
			<view class="box3 light text-bold bg-img shadow" v-if="option1">A:{{option1}}</view>
			<view class="box3 light text-bold bg-img shadow" v-if="option2">B:{{option2}}</view>
			<view class="box3 light text-bold bg-img shadow" v-if="option3">C:{{option3}}</view>
			<view class="box3 light text-bold bg-img shadow" v-if="option4">D:{{option4}}</view>
			<view class="box3 light text-bold bg-img shadow" v-if="option5">E:{{option5}}</view>
			<view class="box3 light text-bold bg-img shadow">答案：{{answer}}</view>
		</view>
		<view class="box2">
			<view class="bu1 light bg-blue shadow" @tap="pre_title">上一题</view>
			<view class="bu2 light bg-blue shadow" @tap="next_title">下一题</view>
		</view>

		<!-- <view class="cu-modal drawer-modal justify-end" :class="modalName=='DrawerModalR'?'show':''" @tap="hideModal">
			<view class="cu-dialog basis-lg" @tap.stop="" :style="[{top:CustomBar+'px',height:'calc(100vh - ' + CustomBar + 'px)'}]">
				<view class="cu-list menu text-left">
					<view class="cu-item arrow" v-for="(item,index) in totle" :key="index">
						<view class="content">
							<view>Item {{index +1}}</view>
						</view>
					</view>
				</view>
			</view>
		</view> -->
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				/* CustomBar: this.CustomBar,
				modalName: null, */
				totle:getApp().globalData.data.data.length,
				current:getApp().globalData.num+1,
				title: getApp().globalData.data.data[getApp().globalData.num].题干,
				type:getApp().globalData.data.data[getApp().globalData.num].题型,
				option1: getApp().globalData.data.data[getApp().globalData.num].选项1,
				option2: getApp().globalData.data.data[getApp().globalData.num].选项2,
				option3: getApp().globalData.data.data[getApp().globalData.num].选项3,
				option4: getApp().globalData.data.data[getApp().globalData.num].选项4,
				option5: getApp().globalData.data.data[getApp().globalData.num].选项5,
				answer: getApp().globalData.data.data[getApp().globalData.num].答案,
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
			/* showModal(e) {
				this.modalName = "DrawerModalR"
			},
			hideModal(e) {
				this.modalName = null
			}, */
			jump:function() {
				uni.reLaunch({
					url: '../preview/preview_jump/preview_jump'
				});
			},
			moveback:function(){
				uni.reLaunch({
					url: '../exam/exam'
				});
			},
			next_title:function(){
				//console.log(getApp().globalData.num++);
				
				if(getApp().globalData.num+1<getApp().globalData.data.data.length){
					getApp().globalData.num++;
					uni.reLaunch({
						url: '../preview/preview'
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
						url: '../preview/preview'
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

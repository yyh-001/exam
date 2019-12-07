<template>
	<view class="contain">
		<view class='exam'>Exam</view>
		<view class='padding-xl shadow light bg-grey'>
			<view class="input">
				<input type="text" placeholder="请输入授权码" v-model="text"/>
				<button class="cu-btn shadow light bg-brown round" @tap="getTest">
					<text>确定</text>
				</button>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				text:""
			}
		},
		onLoad() {
		},
		methods: {
			getTest:function(){
				uni.showLoading();
				uni.request({
					url:"http://api.yyhnet.cn/index.php/api/v1.test",
					method:"POST",
					data:{
						'sli':this.text
					},
					success:function(res){
						uni.hideLoading();
						getApp().globalData.data = res.data;
						getApp().globalData.num = 0;
						if(res.data.code == 1){
							uni.navigateTo({
								url: '../exam/exam'
							});
						}else{
							uni.showModal({
								title:"",
								content:getApp().globalData.data.msg,
								showCancel:false
							});
						};
					}
				});
			}

		},
		globalData: {  
		     data:"",
			 num:"",
			 danxuan_num:"",
			 panduan_num:"",
			 duoxuan_num:"",
			 srantext:[],
			 answerlist:[],
			 scorelist:[],
			 errorlist:[],
			 erroranswer:[],
			 time:"",
			 time1:""
		}
	}
</script>

<style>
	.exam{
		height: 70%;
		margin: 100upx auto;
		color: black;
		font-family: "微软雅黑",sans-serif;
		font-size: 100upx;
		font-weight: 900;
		text-shadow: #f03740 -1upx -3upx,#0081FF 3upx 1upx;
	}
	.contain {
		display: flex;
		height: 100%;
		justify-content: center;
		flex-direction: column;
	}
	.input{
		font-size: 20upx;
		height:30upx ;
	}
	.padding-xl{
		padding: 20upx;
		margin:200upx auto;
		border-radius: 25upx;
		width: 70%;
	}
	.cu-btn{
		float: right;
	}

</style>

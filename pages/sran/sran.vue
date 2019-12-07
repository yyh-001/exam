<template>
	<view>
		<view class="cu-bar bg-gradual-orange shadow-blur">
			<view class="action" @tap="moveback">
				<text class="cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
				随机模式
			</view>
		</view>
		<view class="box title bg-img text-bold">
			请输入随机抽取的题数
		</view>
		<view class="uni-list-cell uni-list-cell-pd" v-if="isdanxuan">
			<view class="title text-bold">
				单选题:
			</view>
			<input type="number" value="" v-model="danxuan"/>
			<view class="title text-bold">
				道
			</view>
		</view>
		<view class="uni-list-cell uni-list-cell-pd" v-if="ispanduan">
			<view class="title text-bold">
				判断题:
			</view>
			<input type="number" value="" v-model="panduan"/>
			<view class="title text-bold">
				道
			</view>
		</view>
		<view class="uni-list-cell uni-list-cell-pd"  v-if="isduoxuan">
			<view class="title text-bold">
				多选题:
			</view>
			<input type="number" value="" v-model="duoxuan"/>
			<view class="title text-bold">
				道
			</view>
		</view>
		
		<button class="cuIcon-btn shadow light bg-brown" @tap="getsranTest">
			<text class="text-bold">确定</text>
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				danxuan:"",
				panduan:"",
				duoxuan:"",
				isdanxuan:"",
				ispanduan:"",
				isduoxuan:"",
				current: ""
			}
		},
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
		},
		onShow() {
			this.isdanxuan=getApp().globalData.danxuan_num;
			this.ispanduan=getApp().globalData.panduan_num;
			this.isduoxuan=getApp().globalData.duoxuan_num;
		},
		methods: {
			moveback:function(){
				getApp().globalData.num = 0
				uni.reLaunch({
					url: '../exam/exam'
					
				});
			},
			getsranTest(){
				if (this.danxuan == ''&this.panduan==''&this.duoxuan=='') {
					uni.showModal({
						title: '',
						content:'输入题数不能为零',
						showCancel:false
					});
				}else{
					if (this.danxuan<=this.isdanxuan&this.panduan<=this.ispanduan&this.duoxuan<=this.isduoxuan) {
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
						for(var s1 = 0; s1 < this.danxuan;s1++){
							Arrs1[s1] = getApp().globalData.data.data[Arr1[s1]];
						};
						//判断题随机抽取
						for (var i2 = getApp().globalData.danxuan_num; i2 < getApp().globalData.danxuan_num+ getApp().globalData.panduan_num; i2++) {
						  Arr2[i2] = i2;
						};
						Arr2.sort(function () {
						  return 0.5 - Math.random();
						});
						for(var s2 = 0; s2 < this.panduan;s2++){
							Arrs2[s2] = getApp().globalData.data.data[Arr2[s2]];
						};
						//多选题随机抽取
						if(this.isduoxuan){
							var Arr3 = []; 
							var Arrs3 = []; 
							for (var i3 = getApp().globalData.danxuan_num+ getApp().globalData.panduan_num;i3 < getApp().globalData.danxuan_num+ getApp().globalData.panduan_num+getApp().globalData.duoxuan_num; i3++) {
							  Arr3[i3] = i3;
							}
							
							Arr3.sort(function () {
							  return 0.5 - Math.random();
							});
							for(var s3 = 0; s3 < this.duoxuan;s3++){
								Arrs3[s3] = getApp().globalData.data.data[Arr3[s3]];
							};
						};
						if(this.isduoxuan){
							Arrs1 = Arrs1.concat(Arrs2,Arrs3);
						}else{
							Arrs1 = Arrs1.concat(Arrs2);
						}
						getApp().globalData.srantext = Arrs1;
						uni.navigateTo({
							url: '../sran_exam/sran_exam'
						});
					}else{
						uni.showModal({
							title: '',
							content:'输入单选题数最多:'+this.isdanxuan+'道\n'+
							'输入判断题数最多:'+this.ispanduan+'道\n'+
							'输入多选题数最多:'+this.isduoxuan+'道',
							showCancel:false
							
						})
					}
				 }  
			}
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

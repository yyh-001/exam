<template>
	<view class="contain">
		<view class="cu-bar bg-gradual-orange shadow-blur">
			<view class="action" @tap="moveback">
				<text class="cuIcon-back text-white"></text>
			</view>
			<view class="content text-bold">
				随机练习({{current1}}/{{totle}})
			</view>
			<view class="action">
				<text class="cuIcon-more" @tap="jump"></text>
			</view>
		</view>
		<view class="box">
			<view class="box3 light bg-img text-bold shadow">{{type}}:{{title}}</view>
		</view>
        <view class="block" v-if="isdanxuan">
            <radio-group @change="radioChange">
                <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
                    <view v-if="item.name">{{item.value}}.{{item.name}}</view>
					<view>
					    <radio class="radio" v-if="item.name" :value="item.value" :checked="index === current" />
					</view>
                </label>
            </radio-group>
        </view>
		<view class="block" v-if="ispanduan">
		    <radio-group @change="radioChange">
		        <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in panduan" :key="item.value">
		            <view >{{item.name}}</view>
					<view>
					    <radio class="radio" :value="item.value" :checked="index === current" />
					</view>
		        </label>
		    </radio-group>
		</view>
<checkbox-group class="block" @change="CheckboxChange" v-if="isduoxuan">
		<view class="uni-list-cell uni-list-cell-pd">
			<view class="title">{{option1}}</view>
			<checkbox :class="checkbox[0].checked?'checked':''" :checked="checkbox[0].checked?true:false" value="A"></checkbox>
		</view>
		<view class="uni-list-cell uni-list-cell-pd">
			<view class="title">{{option2}}</view>
			<checkbox :class="checkbox[1].checked?'checked':''" :checked="checkbox[1].checked?true:false" value="B"></checkbox>
		</view>
		<view class="uni-list-cell uni-list-cell-pd">
			<view class="title">{{option3}}</view>
			<checkbox :class="checkbox[2].checked?'checked':''" :checked="checkbox[2].checked?true:false"
			 value="C"></checkbox>
		</view>
		<view class="uni-list-cell uni-list-cell-pd">
			<view class="title">{{option4}}</view>
			<checkbox :class="checkbox[3].checked?'checked':''" :checked="checkbox[3].checked?true:false"
			 value="D"></checkbox>
		</view>
		<view class="uni-list-cell uni-list-cell-pd" v-if="option5">
			<view class="title">{{option5}}</view>
			<checkbox :class="checkbox[4].checked?'checked':''" :checked="checkbox[4].checked?true:false"
			 value="E"></checkbox>
		</view>
</checkbox-group>
		<view class="box2">
			<view class="bu1 light bg-orange shadow" @tap="pre_title">上一题</view>
			<view class="bu1 light bg-orange shadow" @tap="seeanswer" v-if="isduoxuan">看答案</view>
			<view class="bu2 light bg-orange shadow" @tap="next_title">下一题</view>
		</view>
		<view class="box3 text-bold" v-if = "isfalse">选错了,正确答案是:{{answer}}</view>
		<view class="box3 text-bold" v-if = "istrue">正确</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				totle:getApp().globalData.srantext.length,
				current1:getApp().globalData.num+1,
				title: getApp().globalData.srantext[getApp().globalData.num].题干,
				type:getApp().globalData.srantext[getApp().globalData.num].题型,
				answer: getApp().globalData.srantext[getApp().globalData.num].答案,
				option1: getApp().globalData.srantext[getApp().globalData.num].选项1,
				option2: getApp().globalData.srantext[getApp().globalData.num].选项2,
				option3: getApp().globalData.srantext[getApp().globalData.num].选项3,
				option4: getApp().globalData.srantext[getApp().globalData.num].选项4,
				option5: getApp().globalData.srantext[getApp().globalData.num].选项5,
				items: [{
						value: 'A',
						name: getApp().globalData.srantext[getApp().globalData.num].选项1,
					},
					{
						value: 'B',
						name: getApp().globalData.srantext[getApp().globalData.num].选项2,
					},
					{
						value: 'C',
						name: getApp().globalData.srantext[getApp().globalData.num].选项3,
					},
					{
						value: 'D',
						name: getApp().globalData.srantext[getApp().globalData.num].选项4,
					},
					
				],
				panduan: [{
						value: '对',
						name: '对'
					},
					{
						value: '错',
						name:'错'
					},
					
				],
				ispanduan :"",
				isduoxuan:"",
				isdanxuan:"",
				current: "",
				istrue:"",
				isfalse:"",
				user_answer:[],
				checkbox: [{
					value: 'A',
					checked: false
				}, {
					value: 'B',
					checked: false
				}, {
					value: 'C',
					checked: false
				},{
					value: 'D',
					checked: false
				},{
					value: 'E',
					checked: false
				}
				],
				
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
			switch (getApp().globalData.srantext[getApp().globalData.num].题型){
				case "单选题":this.isdanxuan = true;
					break;
				case "判断题":this.ispanduan = true;
					break;
				case "多选题":this.isduoxuan = true;
					break;
			};
		},
		
		methods: {
			jump:function() {
				uni.reLaunch({
					url: '../sran_exam/sran_jump/sran_jump'
				});
			},
			moveback:function(){
				getApp().globalData.num = 0
				uni.reLaunch({
					url: '../exam/exam'
					
				});
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				};
				if (evt.target.value == this.answer) {
					this.truesound();
					this.istrue = true;
					this.isfalse = "";
					if(getApp().globalData.num+1<getApp().globalData.srantext.length){
						getApp().globalData.num++;
						setTimeout(function() {
							uni.reLaunch({
								url: '../sran_exam/sran_exam'
							});
						}, 200);
					}else{
						uni.showToast({
							title: '已经是最后一题了！',
							icon:'none'
						});
					}
				}else{
					this.errorsound();
					this.istrue = "";
					this.isfalse = true;
				};
			},
			CheckboxChange(e) {
				var items = this.checkbox,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					this.user_answer[i] = "";
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							this.user_answer[i] = items[i].value;
							items[i].checked = true;
							break;
						}
					}
				};
			},
			seeanswer(){
				//console.log(getApp().globalData.num++);
					var user_answer = this.user_answer.join("");
					if (user_answer == this.answer){
						this.truesound();
						this.istrue = true;
						this.isfalse = "";
					}else{
						this.errorsound();
						this.istrue = "";
						this.isfalse = true;
					}
				},
			next_title:function(){
				if(getApp().globalData.num+1 < getApp().globalData.srantext.length){
					getApp().globalData.num++;
					uni.reLaunch({
						url: '../sran_exam/sran_exam'
					});
				}else{
					uni.showToast({
						title: '已经是最后一题了！',
						icon:'none'
					});
				}
			},
			pre_title:function(){
				/* if(getApp().globalData.srantext[getApp().globalData.num].题型.match("判断")){
						this.show = 'true';
				}else{
						this.show= 'false';
				} */
				//console.log(getApp().globalData.num--);
				if(getApp().globalData.num>0){
					getApp().globalData.num--;
					uni.navigateTo({
						url: '../sran_exam/sran_exam'
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
.box3{
width: 90%;
margin: 20upx;
padding: 10upx;
font-size: 35upx;
}
</style>

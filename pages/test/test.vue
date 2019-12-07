<template>
	<view class="contain">
		<view class="cu-bar bg-gradual-red shadow-blur">
			<view class="action" @tap="moveback">
				<text class="cuIcon-back text-white"></text>
			</view>
			<view class="action text-bold" @tap="jump">
				考试模式({{current1}}/{{totle}})
			</view>
			<view class="action" @tap = "finish">
				<button class="cu-btn bg-white shadow-blur text-bold round">交卷</button>
			</view>
		</view>
		<view class="box">
			<view class="box3 light bg-img shadow text-bold">{{type}}:{{title}}</view>
		</view>
        <view class="block" v-if="isdanxuan">
            <radio-group @change="radioChange">
                <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
                    <view sv-if="item.name">{{item.value}}.{{item.name}}</view>
					<view>
					    <radio class='radio' v-if="item.name" :value="item.value" :checked="index === current" />
					</view>
                </label>
            </radio-group>
        </view>
		<view class="block" v-if="ispanduan">
		    <radio-group @change="radioChange">
		        <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in panduan" :key="item.value">
		            <view>{{item.name}}</view>
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
			<view class="bu1 light bg-red shadow" @tap="pre_title">上一题</view>
			<view class="bu2 light bg-red shadow" @tap="next_title">下一题</view>
		</view>
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
				num:"",
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
		onUnload(){
			var timestamp=new Date().getTime();
			timestamp = timestamp-getApp().globalData.time;
			var timestamp = this.formatTime(timestamp);
			getApp().globalData.time1 = timestamp;
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
				switch (getApp().globalData.answerlist[getApp().globalData.num]){
					case 'A':this.current = 0;
					break;
					case 'B':this.current = 1;
					break;
					case 'C':this.current = 2;
					break;
					case 'D':this.current = 3;
					break;
				}
					break;
				case "判断题":this.ispanduan = true;
				switch (getApp().globalData.answerlist[getApp().globalData.num]){
					case '对':this.current = 0;
					break;
					case '错':this.current = 1;
					break;
				}
					break;
				case "多选题":this.isduoxuan = true;
				var list = getApp().globalData.answerlist;
				var crr = getApp().globalData.num;
				var list2 = new Array;
				if(list[crr]){
					list2 = list[crr];
					this.user_answer = list2;
					for (var i = 0; i < list2.length; i++) {
						if(list2[i]){
							this.checkbox[i].checked=true;
						}
					};
				};
				break;
			};
			
		},
		
		methods: {
			jump:function() {
				uni.reLaunch({
					url: '../test/test_jump/test_jump'
				});
			},
			moveback:function(){
				getApp().globalData.num = 0
				uni.reLaunch({
					url: '../exam/exam'
				});
			},
			formatTime(timeStamp) {
			    // 将/[0-9]/位的数字编成/0[0-9]/  
			    function getTwo(s) {  
			        if (parseInt(s) < 10) {  
			            return "0" + s;  
			        } else {  
			            return "" + s;  
			        }  
			    }  
			
			    if (timeStamp.length < 13) {  
			        timeStamp += "000";  
			    }  
			    var d = new Date(parseInt(timeStamp));   
			    var hour = getTwo(d.getHours())-8;  
			    var minute = getTwo(d.getMinutes());  
			    var second = getTwo(d.getSeconds());  
			
			    return hour + "时" + minute + "分" + second+"秒";  
			},
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				};
				getApp().globalData.answerlist[getApp().globalData.num]= evt.target.value;
				if (evt.target.value == this.answer) {
					if(this.isdanxuan){
						getApp().globalData.scorelist[getApp().globalData.num]=getApp().globalData.data.title.radio_score;

					}else{
						getApp().globalData.scorelist[getApp().globalData.num]=getApp().globalData.data.title.judge_score;
					}
				}else{
					getApp().globalData.scorelist[getApp().globalData.num]=0;
				};
				if(getApp().globalData.num+1<getApp().globalData.srantext.length){
					getApp().globalData.num++;
					this.buttonsound();
					setTimeout(function() {
						uni.reLaunch({
							url: '../test/test'
						});
					}, 200);
				}else{
					uni.showModal({
						title:"",
						content:"这是最后一题，是否交卷？",
						    success: function (res) {
						        if (res.confirm) {
						           uni.reLaunch({
						           	url: '../test_score/test_score'
						           });
						        } else if (res.cancel) {
						        }
						    }
					});
				}
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
			next_title:function(){
				if(this.isduoxuan){
					var user_answer = this.user_answer.join("");
					getApp().globalData.answerlist[getApp().globalData.num]= this.user_answer;
					if (user_answer == this.answer){
						getApp().globalData.scorelist[getApp().globalData.num]=getApp().globalData.data.title.multi_score;
					}else{
						getApp().globalData.scorelist[getApp().globalData.num]=0;
					};
				};
				if(this.current1<getApp().globalData.srantext.length){
					getApp().globalData.num++;
					uni.reLaunch({
						url: '../test/test'
					});
				}else{
					uni.showModal({
						title:"",
						content:"这是最后一题，是否交卷？",
						    success: function (res) {
						        if (res.confirm) {
						           uni.reLaunch({
						           	url: '../test_score/test_score'
						           });
						        } else if (res.cancel) {
						        }
						    }
					});
				}
			},
			pre_title:function(){
				if(getApp().globalData.num>0){
					getApp().globalData.num--;
					uni.reLaunch({
						url: '../test/test'
					});
				}else{
					uni.showToast({
						title: '这是第一题！',
						icon:'none'
					});
				}
			},
			finish(){
				console.log(getApp().globalData.scorelist);
				console.log(getApp().globalData.answerlist);
				var num = getApp().globalData.srantext.length-getApp().globalData.answerlist.length;
				for(var i=0;i+1<getApp().globalData.answerlist.length;i++){
					if(getApp().globalData.scorelist[i] === ''){
						num++;
					};
				};
				this.num = num;
				if(num == 0){
					uni.reLaunch({
						url: '../test_score/test_score'
					});
				}else{
					uni.showModal({
						title:"",
						content:"你还有"+this.num+"题未答，是否交卷？",
						    success: function (res) {
						        if (res.confirm) {
						           uni.reLaunch({
						           	url: '../test_score/test_score'
						           });
						        } else if (res.cancel) {
						        }
						    }
					});
				}
				
			},
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
font-size: 32upx;
}
</style>

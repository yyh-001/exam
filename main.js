import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

Vue.prototype.truesound = function(){
        var music = null;
        music = uni.createInnerAudioContext(); //创建播放器对象
        music.src= "../../static/music/true.mp3"; //选择播放的音频
        music.play(); //执行播放
}
Vue.prototype.errorsound = function(){
        var music = null;
        music = uni.createInnerAudioContext(); //创建播放器对象
        music.src= "../../static/music/error.mp3"; //选择播放的音频
        music.play(); //执行播放
}
Vue.prototype.buttonsound = function(){
        var music = null;
        music = uni.createInnerAudioContext(); //创建播放器对象
        music.src= "../../static/music/button.mp3"; //选择播放的音频
        music.play(); //执行播放
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

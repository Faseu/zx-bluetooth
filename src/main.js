import Vue from 'vue';
import App from './App';
import './uni.promisify.adaptor';

// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 2000, icon = 'none', mask = false) {
  uni.showToast({
    title,
    duration,
    icon,
    mask //是否显示透明蒙层，防止触摸穿透，默认：false
  });
};

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
  ...App
});
app.$mount();

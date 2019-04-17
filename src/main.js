import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/base.css";
import "vue-fullpage/vue-fullpage.css";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import VueFullPage from "vue-fullpage.js";//满屏滑动插件
import "lib-flexible/flexible.js";//媒体查询插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import {Textra} from 'vue-textra';//文字特效
import VueParticles from 'vue-particles'//背景特效
Vue.use(VueParticles)

Vue.use(Textra);

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.use(VueFullPage);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");

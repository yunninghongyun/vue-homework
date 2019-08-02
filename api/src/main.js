import Vue from 'vue'
import App from './App.vue'
import './assets/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import router from './router'
import store from './store/index'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

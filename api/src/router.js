import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Main from './components/Main.vue'
import Cart from './components/Cart.vue'
import NewCart from './components/NewCart.vue'

//给Vue项目安装路由功能
Vue.use(VueRouter)
//创建路由
const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/newcart',
    component: NewCart
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

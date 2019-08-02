import Vue from 'vue'
import Vuex from 'vuex'
import shopping from './modules/shopping'
import carts from './modules/carts'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    shopping,
    carts
  }
})
export default store

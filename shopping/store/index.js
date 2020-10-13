import Vue from 'vue'
import Vuex from 'vuex'
import banner from './modules/banner'
import category from './modules/category'
import login from './modules/login.js'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
		banner,
		category,
		login,
    }
	
})

export default store

import Vue from 'vue'
import App from './App'
import store from './store'
import config from './common/config'



Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$config = config

App.mpType = 'app'

const app = new Vue({
	store, 
    ...App
})

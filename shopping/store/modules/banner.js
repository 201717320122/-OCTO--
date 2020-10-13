import {
	getBanner,
	getSofa
} from "@/common/api"
const banner = {
	namespaced: true,
	state: {
		items: [],
		sofas:[]
	},
	mutations: {
		SET_BANNER: (state, date) => {
			state.items = date
			console.log(state.items)
		},
		SET_SOFAS: (state, date) => {
			state.sofas = date
			console.log(state.sofas)
		}
	},
	actions: {
		GetBanner({commit}) {
			return new Promise((resolve, reject) => {
				getBanner().then(response => {
					const data = response.data
					commit('SET_BANNER', data)
					console.log(data)
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		},
		GetSofa({commit}) {
			return new Promise((resolve, reject) => {
				getSofa().then(response => {
					const data = response.data.home_recommend_products
					commit('SET_SOFAS', data)
					console.log(data)
					console.log(data[0].title)
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		}
	},
	getters: {
		banners(state){
			return state.items
			console.log(state.items)
		},
		sofa(state){
			return state.sofas
			console.log(state.sofas)
		}

	}

}
export default banner

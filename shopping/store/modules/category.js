import {
	getCategory
} from "@/common/api"

const category = {
	namespaced: true,
	state: {
		items: []
	},
	mutations: {
		SET_CATEGORYS: (state, data) => {
			state.items = data
			console.log(state.items)
		}
	},
	actions: {
		GetCategory({commit}) {
			return new Promise((resolve, reject) => {
				getCategory().then(response => {
					const data = response.data
					console.log(data)
					commit('SET_CATEGORYS', data)
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		}
	},
	getters: {
		categorys(state){
			return state.items
			console.log(state.items)
		}
	}
}
export default category

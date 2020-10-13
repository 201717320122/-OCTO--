import {
getLogin
} from "@/common/api"
const login = {
	namespaced: true,
	state: {
		items: [],
	},
	mutations: {
		SET_LOGIN: (state, data) => {
			state.items = data
			console.log(state.items)
		}
	},
	actions: {
		GetLogin({commit},data) {
			return new Promise((resolve, reject) => {
				getLogin(data).then(response => {
					const data = response.data;
					console.log(data);
					// uni.setStorageSync('Xshop-Token', data.token);
					// console.log(uni.getStorageSync('Xshop-Token'))
					commit('SET_LOGIN', data)
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		}
	},
	getters: {
		logins: (state) => {
			return state.items
			console.log(state.items)
		}
	}

}
export default login

import {getProduct} from "@/common/api"
const getdetails = {
	namespaced: true,
	state:{
		getdetailslsit:[]
	},
	mutations:{
		SET_DETAILS(state,data){
			state.getdetailslsit = data
		}
	},
	actions:{
		GetDetails({commit},id){
			console.log(id)
			return new Promise((resolve, reject) => {
				getProduct(id).then(response => {
					console.log(response)
					const data = response.data
					commit('SET_DETAILS', data)
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		}
	},
	getters:{
		getdetails(state){
			return state.getdetailslsit
		}
	}
}

export default getdetails
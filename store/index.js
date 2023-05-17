export function state(){
	return {
		isLogged: false,
	}
}

export const mutations = {

	SET_ISLOGGED(state, status){
		state.isLogged = status
	}
}

export const actions = {

	setIsLogged({ commit }, status){
		commit('SET_ISLOGGED', status)
	}
}

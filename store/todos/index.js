export function state(){
	return {
		todolist: []
	}
}

export const mutations = {

	SET_TODOS(state, todos){
		state.todolist = todos
	},

	INCREASE_TODO(state, todo){
		state.todolist.push(todo)
	}
}

export const actions = {

	async getTodosAndSet({ commit }){
		const todos = await fetch(`http://localhost:3300/todos`)
		commit('SET_TODOS', todos)
	},

	async addTodo({ commit, dispatch }, todo){

		await fetch(`http://localhost:3300/todos`, {
			method: 'POST',
			body: todo
		})

		dispatch('getTodosAndSet')
	}
}

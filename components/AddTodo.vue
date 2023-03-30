<template>
	<div class="handleTodoComponent" @click.self="$emit('closeModal')">

		<form @submit.prevent="addTodoToList()" class="todoContainer">
			<input v-model="todo.title" type="text" placeholder="O que fazer"/>

			<input v-model="todo.description" type="text" placeholder="Descrição"/>

			<input v-model="todo.user" type="text" placeholder="Usuário"/>

			<button>Adicionar</button>
		</form>
	</div>
</template>

<script>
	export default {

		data(){

			return{

				todo: {
					title: '',
					description: '',
					user: ''
				}
			}
		},

		methods: {

			addTodoToList(){

				const isNotEmpty = Object.values(this.todo).reduce( (acc, value) => {
					return value.length > 1 && acc
				},true)

				if(isNotEmpty){
					this.$emit('addTodoToList', this.todo)
					Object.keys(this.todo).forEach( key => {
						this.todo[key] = ''
					})
					this.$emit('closeModal')
				}else{
					alert('Preencha todos os campos')
				}

			}
		}
	}
</script>


<style scoped lang="scss">


</style>

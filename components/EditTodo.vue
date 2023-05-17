<template>
	<div class="handleTodoComponent" @click.self="$emit('closeEditModal')">

		<form @submit.prevent="editTodoInList()" class="todoContainer">
			<input v-model="todo.title" type="text" placeholder="O que fazer"/>
			
			<input v-model="todo.description" type="text" placeholder="Descrição"/>

			<input v-model="todo.user" type="text" placeholder="Usuário"/>

			<button>Salvar edição</button>
		</form>
	</div>
</template>

<script>
	export default {

		props: {

			todoToEdit: {
				type: Object,
				required: true
			}
		},

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

			editTodoInList(){

				const isNotEmpty = Object.values(this.todo).reduce( (acc, value) => {
					if(typeof(value) === 'string'){
						return value.length > 1 && acc
					}{
						return acc
					}
				},true)

				if(isNotEmpty){
					this.$emit('editTodoInList', this.todo)
					this.$emit('closeEditModal')
				}else{
					alert('Preencha todos os campos')
				}

			}
		},

		beforeMount(){
			// this.todo.title = this.todoToEdit.title
			// this.todo.user = this.todoToEdit.user
			// this.todo.id = this.todoToEdit.id
			// this.todo.description = this.todoToEdit.description

			this.todo = {
				...this.todoToEdit
			}
		}
	}
</script>


<style scoped lang="scss">
</style>

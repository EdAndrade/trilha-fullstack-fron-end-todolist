<template>
	<div class="homePage">
		<Header/>
		<AddTodo v-show="showTodo" v-on:closeModal="handleTodo" v-on:addTodoToList="increaseTodoList" />


		<EditTodo
			v-if="showEditTodo"
			:todoToEdit="todoToEdit"
			v-on:closeEditModal="showEditTodo=false"
			v-on:editTodoInList="editTodo"
		/>
		<section class="todolist">

			<h1 class="indexTodoListTitle">Simple description of todo list</h1>

			<div class="todoContainer" >
				<Todo
					v-for="(todo, index) in todolist" :key="index"
					:todo="todo"
					v-on:openClose="openCloseTodoMenu"
					v-on:deleteTodo="deleteTodo"
					v-on:editTodo="openEditTodo"
					v-on:changeStatus="changeTodoStatus"
				/>
			</div>

		</section>

		<button class="addTodo" @click="handleTodo">
			<i class="fa-regular fa-plus"></i>
		</button>
	</div>
</template>

<script>
	export default {
		name: "HomePage",
		middleware: 'isAuthenticated',

		data(){
			return {
				showTodo: false,
				showEditTodo: false,
				id: 1,
				todolist: [],
				todoToEdit: {}
			}
		},

		methods: {

			handleTodo(){
				this.showTodo = !this.showTodo
			},

			increaseTodoList(todo){
				this.todolist.push({
					openCloseMenu: false,
					status: false,
					id: this.id,
					...todo
				})
				this.id++
			},

			openCloseTodoMenu(id){
				this.todolist.forEach( todo => {
					todo.openCloseMenu = todo.id === id ? !todo.openCloseMenu : false
				})
			},

			deleteTodo(id){
				this.todolist = this.todolist.filter( todo => todo.id !== id);
			},

			openEditTodo(todo){
				this.todoToEdit = todo
				this.showEditTodo = true
			},

			editTodo(todoEdit){
				this.todolist = this.todolist.map( todo => {

					if(todo.id === todoEdit.id){
						return todoEdit
					}else{
						return todo
					}
				})
			},

			changeTodoStatus(id){
				this.todolist.forEach( todo => {
					if(todo.id === id){
						todo.status = !todo.status
					}
				})
			}
		}
	};
</script>

<style scoped lang="scss">

	.homePage{
		position: relative;
		min-height: 100vh;

		.todolist{
			margin: 20px auto;
			padding: 10px 20px;

			.todoContainer{
				margin-top: 30px;
				display: flex;
				flex-flow: row;
				gap: 15px;
				flex-wrap: wrap;
			}
		}

		.addTodo{
			position: fixed;
			width: 50px;
			height: 50px;
			border-radius: 100%;
			border-style: none;
			background-color: red;
			bottom: 30px;
			right: 30px;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;

			i{
				color: #fff;
				font-size: 1.4em;
			}
		}
	}

</style>

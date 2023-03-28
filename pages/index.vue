<template>
	<div class="homePage">
		<Header/>
		<AddTodo v-show="showTodo" v-on:closeModal="handleTodo" v-on:addTodoToList="increaseTodoList" />
		<section class="todolist">

			<p>Simple description of todo list</p>

			<div class="todoContainer" v-for="(todo, index) in todolist" :key="index">
				<Todo :title="todo.title" :description="todo.description" :user="todo.user" />
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

		data(){
			return {
				showTodo: false,

				todolist: []
			}
		},

		methods: {

			handleTodo(){
				this.showTodo = !this.showTodo
			},

			increaseTodoList(todo){
				this.todolist.push({ ...todo })
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
			text-align: center;

			.todoContainer{
				margin-top: 10px;
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

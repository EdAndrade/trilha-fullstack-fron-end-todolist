<template>
	<div class="todoComponent">
		<p class="title">{{ todo.title }}</p>
		<p class="description">{{ todo.description }}</p>

		<div class="teste">
			{{ todo.user }}
		</div>

		<div class="openCloseMenu" @click="$emit('openClose', todo.id)">
			<i class="fa-solid fa-ellipsis"></i>
		</div>

		<div class="menu" v-show="todo.openCloseMenu">
			<p v-show="!todo.status" @click="$emit('editTodo', todo)">Editar</p>
			<p @click="$emit('deleteTodo', todo.id)">Deletar</p>
			<p v-show="!todo.status" @click="$emit('changeStatus', todo.id)">Feito</p>
		</div>

		<div class="status">
			<div class="todo_status done" v-show="todo.status"></div>
			<div class="todo_status not_done" v-show="!todo.status"></div>
		</div>
	</div>
</template>

<script>

	export default {

		props: {

			todo: {
				type: Object,
				required: true
			}
		},

		data(){

			return {
				show: false,
			}
		},

		methods: {

			setTittle(title){
				this.title = title
			},
		}
	}
</script>

<style scoped lang="scss">

	.todoComponent{
		max-width: 300px;
		width: 100%;
		background-color: #f0f0f0;
		padding: 10px;
		border-radius: 8px;
		position: relative;

		.title{
			font-weight: bold;
			margin-bottom: 7px;
			font-size: 1.2em;
		}

		.user{
			font-size: 0.8em;
			color: #555;
			margin-top: 5px;
		}

		.openCloseMenu{
			margin-top: 10px;
			font-size: 1.7em;
		}

		.menu{
			position: absolute;
			background-color: inherit;
			padding: 10px;
			border-radius: 8px;
			text-align: left;
			box-shadow: 0px 0px 20px -8px #222;
			z-index: 30;

			p{
				cursor: pointer;
				text-decoration: underline;
				margin-top: 7px;
			}
		}

		.status{
			position: absolute;
			top: 10px;
			right: 10px;

			.todo_status{
				width: 7px;
				height: 7px;
				border-radius: 100%;
			}

			.done{
				background-color: green;
			}

			.not_done{
				background-color: red;
			}
		}
	}
</style>

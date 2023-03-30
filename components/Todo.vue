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
			<p @click="$emit('editTodo', todo)">Editar</p>
			<p @click="$emit('deleteTodo', todo.id)">Deletar</p>
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
		margin: auto;
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

			p{
				cursor: pointer;
				text-decoration: underline;
				margin-top: 7px;
			}
		}
	}
</style>

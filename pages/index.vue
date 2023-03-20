<template>
	<div class="homePage">
		<Header/>

		<section class="todolist">
			<h1>Todo List</h1>
			<p>Simple description of todo list</p>

			<div class="todoContainer" v-for="(i, index) in [1,3,4,5]" :key="index">
				<Todo />
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: "HomePage",

		data(){
			return {
				color: 'red'
			}
		},

		methods: {

			changeColorName(){
				this.color = 'blue'
			}
		}
	};
</script>

<style scoped lang="scss">

	.homePage{


		.todolist{
			margin: 20px auto;
			text-align: center;

			.todoContainer{
				margin-top: 10px;
			}
		}
	}

</style>

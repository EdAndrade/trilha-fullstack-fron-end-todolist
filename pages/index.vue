<template>
	<div>
		<Header/>

		<section>
			<h1>Todo List</h1>
			<p>Simple description of todo list</p>

			<div v-for="(i, index) in [1,3,4,5]" :key="index">
				<Todo />
				<h1>{{index}}</h1>
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

<style scoped>

</style>

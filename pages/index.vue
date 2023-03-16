<template>
	<div>
		<Header/>
		<h1>Hello {{ color }}</h1>
		<button @click="changeColorName()" >Change color</button>
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

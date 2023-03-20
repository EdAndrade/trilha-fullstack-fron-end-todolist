<template>
	<div class="todoComponent" @mouseenter="setShowToTrue" @mouseleave="setShowToFalse">
		<p class="title">Comer arroz com feijao</p>
		<p class="description">Esse todo e para comer arroz com feijao</p>
		<p class="user">Jose Nicola</p>

		<div class="teste" v-show="show">
			NICOLA JOSE
		</div>
	</div>
</template>

<script>

	export default {

		data(){

			return {
				show: false
			}
		},

		methods: {

			setShowToFalse(){
				this.show = false
			},

			setShowToTrue(){
				this.show = true
			}
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
	}
</style>

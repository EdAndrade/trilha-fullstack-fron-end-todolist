<template>
	<div class="todoComponent"
		@mouseenter="setTittle('Comer Leitao com pao')"
		@mouseleave="setTittle('Comer arroz com feijao')">
		<p class="title">{{title}}</p>
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
				show: false,
				title: 'Comer arroz com feijao'
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

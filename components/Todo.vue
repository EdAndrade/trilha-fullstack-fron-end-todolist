<template>
	<div class="todoComponent">
		<p class="title">{{ title }}</p>
		<p class="description">{{ description }}</p>

		<div class="teste">
			{{ user }}
		</div>
	</div>
</template>

<script>

	export default {

		props: {

			title: {
				type: String,
				required: false,
				default: () => ''
			},

			user: {
				type: String,
				required: false,
				default: () => ''
			},

			description: {
				type: String,
				required: false,
				default: () => ''
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

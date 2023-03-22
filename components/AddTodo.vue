<template>
	<div class="addTodoComponent">

		<form @submit.prevent class="todoContainer">
			<input type="text" placeholer="O que fazer"/>
			<input type="text" placeholder="Descrição"/>
			<input type="text" placeholder="Usuário"/>
			<button>Adicionar</button>
		</form>
	</div>
</template>

<script>
	export default {

	}
</script>


<style scoped lang="scss">

	.addTodoComponent{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		background-color: rgba(#222, 0.7);

		.todoContainer{
			max-width: 300px;
			width: 100%;
			border-radius: 8px;
			background-color: #f0f0f0;
			padding: 20px;
			margin: auto;

			input{
				width: 100%;
				padding: 10px;
				border-radius: 8px;
				outline: none;
				border-style: none;
				margin-bottom: 10px;
				box-shadow: 0px 0px 2px -4px rgba(#333, 0.1);
			}
		}
	}
</style>

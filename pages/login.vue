<template>

	<section id="loginPage">

		<div class="left">
			<img src="~assets/images/pascoa.jpg" alt="image left">
		</div>

		<div class="right">

			<form @submit.prevent="login()" class="loginBox">
				<input v-model="loginData.email" placeholder="exemplo@gmail.com" type="email" required>
				<input v-model="loginData.password" placeholder="password" type="password" required>
				<input type="submit" :value="loading ? 'Entrando...' : 'Entrar'">
			</form>
		</div>
	</section>
</template>

<script>
	import { mapActions, mapState } from 'vuex'

	export default {

		data(){

			return {

				loginData: {
					email: '',
					password: ''
				},

				loading: false
			}
		},

		computed: {

			...mapState({
				isLogged: function(state){
					console.log(state)
					return state.isLogged
				}
			})
		},

		methods: {

			...mapActions({
				setIsLogged: 'setIsLogged'
			}),

			async login(){
				this.loading = true
				const response = await fetch("http://localhost:3300/login");
				const data = await response.json()

				if(data.email === this.loginData.email && this.loginData.password === data.password){
					this.setIsLogged(true)
					alert("Login feito com sucesso")
					this.$router.push('/')
				}else{
					alert("Usuários não existe")
				}
				this.loading = false
			}
		}
	}
</script>

<style lang="scss" scoped>

	#loginPage{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		display: flex;

		.left, .right{
			width: 50%;
			height: 100%;
		}

		.left img{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.right{
			display: flex;
			align-items: center;
			justify-content: center;

			.loginBox{
				background-color: #f0f0f0;
				height: 250px;
				width: 300px;
				border-radius: 8px;
				padding: 20px;
				position: relative;

				input{
					width: 100%;
					padding: 10px;
					border-radius: 8px;
					outline: none;
					margin-bottom: 10px;
				}

				input[type="submit"]{
					width: calc(100% - 40px);
					background-color: red;
					color: #fff;
					position: absolute;
					left: 20px;
					bottom: 20px;
				}
			}
		}
	}

</style>

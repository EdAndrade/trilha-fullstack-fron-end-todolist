<template>
	<section id="main-header">
		<div>
			<p>Logo</p>
		</div>

		<nav>
			<ul class="login-logout">
				<li>
					<button>Login</button>
				</li>
				<li>
					<button>Logout</button>
				</li>
			</ul>

			<section>
				<div class="user">
					<div class="userImage">
						image
					</div>

					<p>name</p>
				</div>
			</section>
		</nav>
	</section>
</template>

<script>
</script>

<style scoped lang="scss">
	#main-header{
		width: 100%;
		background-color: #222;
		color: #fff;
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		nav{
			.login-logout{
				display: flex;
				gap: 5px;

				li{
					list-style: none;

					button{
						padding: 5px 10px;
						border-radius: 8px;
						background-color: red;
						color: #fff;
						border-style: none;
					}
				}
			}
		}
	}
</style>

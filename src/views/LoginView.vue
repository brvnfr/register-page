<template>
	<div class="content">
		<div class="logo-brand">
			<img
				src="@/assets/images/brand/brand-logo.svg"
				alt="brand-logo"
				class="logo-img"
			/>
		</div>
		<div class="login-card">
			<LoginForm @submit="handleSubmit" />
		</div>
		<div class="register-link">
			<p>
				Não possui conta?
				<router-link to="/register">Cadastre-se</router-link>
			</p>
		</div>
	</div>
</template>
<script>
import LoginForm from '@/components/forms/LoginForm.vue'

export default {
	components: {
		LoginForm,
	},
	data() {
		return {
			email: '',
			password: '',
			errors: {},
		}
	},
	computed: {},
	methods: {
		handleSubmit() {
			this.errors = {}

			if (!this.email) {
				this.errors.email = 'E-mail obrigatório.'
			}

			if (!this.password) {
				this.errors.password = 'Senha obrigatória.'
			}
			if (this.confirmPassword !== this.password) {
				this.confirmPasswordError = 'As senhas não correspondem'
				return
			}

			if (Object.keys(this.errors).length === 0) {
				this.login()
			}
		},
		login() {
			// metodo para fazer login usando JWT e acessando a rota do fakeAPI
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.logo-brand {
	margin-bottom: $spacing-medium; /* Adiciona um espaçamento inferior para separar do formulário */
}

.login-card {
	position: relative;
	overflow: hidden;
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-medium;
	width: 400px;

	& h2 {
		text-justify: start;
	}
}

@media (max-width: 712px) {
	.login-card {
		width: 95%;
		padding: $spacing-small;
	}
}

.register-link {
	margin-top: $spacing-medium;
	text-align: center;
	& p {
		margin-bottom: 0;
	}
	& router-link {
		margin-left: 5px;
		color: $brand-vivid-pink;
	}
}
</style>

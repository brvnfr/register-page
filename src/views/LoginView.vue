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
			<form @submit.prevent="handleSubmit">
				<h2>Entre na sua conta</h2>
				<h3>Para acessar sua conta informe seu e-mail e senha</h3>

				<InputText
					label="Email"
					name="email"
					v-model="email"
					:value="email"
					:error="errors.email"
					placeholder="Informe seu e-mail"
				/>

				<InputText
					label="Senha"
					name="password"
					v-model="password"
					:value="password"
					:error="errors.password"
					type="password"
					class="form-margin"
				/>
				<a href="/forgot-password" class="forgot-password">Esqueci a senha</a>
				<CTAButton @click="handleSubmit">Entrar</CTAButton>
			</form>
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
import InputText from '@/components/inputs/InputText.vue'
import CTAButton from '@/components/buttons/CTAButton.vue'

export default {
	components: {
		InputText,
		CTAButton,
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

.header-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh; /* Define a altura da tela inteira */
}

.content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh; /* Define a altura da tela inteira */
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
}

@media (max-width: 712px) {
	.content {
		flex-direction: column-reverse;
	}
	.login-card {
		width: 100%;
		padding: $spacing-small;
	}
}

.form {
	box-sizing: border-box;
	flex-direction: column;
	padding: $spacing-small;
}

.form-margin {
	margin-bottom: calc($spacing-x-small - 5px); /* Reduzir a margem inferior */
}

.forgot-password {
	text-decoration: underline;
	display: flex;
	justify-content: end;
	color: $font-color-secondary;
	font-size: map-get(map-get($font-styles, x-small), size);
	font-weight: map-get(map-get($font-styles, x-small), font-weight);
	margin-top: calc($spacing-x-small - 3px); /* Reduzir a margem superior */
	margin-bottom: $spacing-medium; /* Reduzir a margem inferior */

	&:hover {
		color: $brand-vivid-pink;
	}
}

.register-link {
	margin-top: $spacing-medium;
	text-align: center;
}

.register-link p {
	margin-bottom: 0;
}

.register-link router-link {
	margin-left: 5px;
	color: $brand-vivid-pink;
}
</style>

<template>
	<form @submit.prevent="handleSubmit">
		<h2>Entre na sua conta</h2>
		<h3>Para acessar sua conta informe seu e-mail e senha</h3>

		<div class="input">
			<label for="email">Email</label>
			<input
				id="email"
				name="email"
				v-model="email"
				:class="{ 'input-error': errors.email }"
			/>
			<div v-if="errors.email" class="error-message">
				{{ errors.email }}
			</div>
		</div>
		<div class="input">
			<label for="password">Senha</label>
			<input
				id="password"
				name="password"
				v-model="password"
				:class="{ 'input-error': errors.password }"
				type="password"
				class="form-margin"
			/>
			<div v-if="errors.password" class="error-message">
				{{ errors.password }}
			</div>
			<div class="forgot-password-container">
				<a href="/login/forgot-password" class="forgot-password"
					>Esqueci minha senha</a
				>
			</div>
		</div>

		<CTAButton @click="handleSubmit">Entrar</CTAButton>
	</form>
</template>

<script>
import CTAButton from '@/components/buttons/CTAButton.vue'

export default {
	components: {
		CTAButton,
	},
	data() {
		return {
			email: '',
			password: '',
			errors: {},
		}
	},
	methods: {
		async handleSubmit() {
			this.errors = {}

			if (!this.email) {
				this.errors.email = 'E-mail obrigatório.'
			}

			if (!this.password) {
				this.errors.password = 'Senha obrigatória.'
			}

			if (Object.keys(this.errors).length === 0) {
				await this.login()
			}
		},
		async login() {
			try {
				const response = await this.$axios.post('/auth/login', {
					// a rota  so aceita o dado username, entao adaptei o nome da variavel
					username: this.email, // johnd
					password: this.password, // m38rmF$
				})

				const token = response.data.token
				const decodedToken = this.$jwtDecode(token)

				console.log('Token de autenticação: ', decodedToken)
				localStorage.setItem('token', token)
			} catch (error) {
				console.log('Erro ao fazer login:', error)
			} finally {
				// Redirecionar para a página após o login bem-sucedido
				this.$router.push('/dashboard')
			}
		},
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.form .input {
	margin-bottom: $spacing-medium;
}

label {
	font-weight: bold;
	font-size: map-get(map-get($font-styles, small), size);
	font-weight: map-get(map-get($font-styles, small), font-weight);
}

input {
	box-sizing: border-box;
	width: 100%;
	padding: $spacing-medium;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: $border-radius;
	transition: border-color 0.3s;
}

input[type='checkbox'] {
	width: 16px;
	font-size: 20px;
}

input:focus {
	outline: 1px solid $brand-color-main;
	border-color: $brand-color-main;
}

.input-error {
	border-color: $error-color;
}

.error-message {
	color: $error-color;
	font-size: map-get(map-get($font-styles, x-small), size);
	font-weight: map-get(map-get($font-styles, x-large), font-weight);
	margin-top: $spacing-x-small;
}

.forgot-password-container {
	display: flex;
	justify-content: flex-end;
	margin-top: calc(#{$spacing-x-small} - 3px);
	margin-bottom: $spacing-medium;
}

.forgot-password {
	padding: $spacing-x-small;
	text-decoration: underline;
	color: $brand-vivid-pink;
	font-size: map-get(map-get($font-styles, x-small), size);
	font-weight: map-get(map-get($font-styles, x-small), font-weight);

	&:hover {
		color: $brand-vivid-pink;
	}
}

.form-caption {
	display: flex;
	text-align: end;
	color: $font-color-secondary;
	font-size: map-get(map-get($font-styles, x-small), size);
	font-weight: map-get(map-get($font-styles, x-small), font-weight);
	margin-top: calc(#{$spacing-x-small} - 3px);
	margin-bottom: $spacing-small;
}
</style>

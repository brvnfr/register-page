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
		handleSubmit() {
			this.errors = {}

			if (!this.email) {
				this.errors.email = 'E-mail obrigatório.'
			}

			if (!this.password) {
				this.errors.password = 'Senha obrigatória.'
			}

			if (Object.keys(this.errors).length === 0) {
				this.login()
			}
		},
		login() {
			// Método para fazer login usando JWT e acessando a rota do fakeAPI
		},
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.form .input {
	margin-bottom: $spacing-medium; /* Ajuste o valor da margem conforme necessário */
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
	outline: 1px solid $brand-vivid-pink;
	border-color: $brand-vivid-pink;
}

.input-error {
	border-color: $error-color;
}

.error-message {
	color: $error-color;
	font-size: map-get(map-get($font-styles, x-small), size);
	font-weight: map-get(map-get($font-styles, x-large), font-weight);
	margin-top: $spacing-x-small; /* Reduzir a margem superior */
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
</style>

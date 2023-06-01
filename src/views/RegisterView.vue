<template>
	<div class="container">
		<div class="register-form">
			<form class="form" @submit.prevent="handleSubmit">
				<h2>Dados pessoais</h2>
				<h3>Informe seus dados pessoais para acesso à sua conta</h3>

				<InputText
					label="Nome Completo"
					name="name"
					v-model="name"
					:error="errors.name"
					placeholder="Informe seu nome completo"
				/>

				<InputText
					label="Email"
					name="email"
					v-model="email"
					:error="errors.email"
					placeholder="Informe seu e-mail"
				/>

				<InputText
					label="Senha"
					name="password"
					v-model="password"
					:error="errors.password"
					type="password"
					class="password-field"
				/>
				<p class="password-info">No mínimo 8 caracteres.</p>

				<InputText
					label="Confirme sua senha"
					name="confirmPassword"
					v-model="confirmPassword"
					type="password"
					:error="confirmPasswordError"
				/>

				<p v-if="formError" class="form-error">{{ formError }}</p>

				<CTAButton :button-class="submitButtonClass" @click="handleSubmit"
					>Criar Conta</CTAButton
				>
			</form>
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
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
			confirmPasswordError: '',
			errors: {},
			formError: '',
		}
	},
	computed: {
		submitButtonClass() {
			return {
				'input-error': Object.keys(this.errors).length > 0,
			}
		},
	},
	methods: {
		handleSubmit() {
			this.errors = {}

			if (!this.name) {
				this.errors.name = 'Nome completo obrigatório.'
			}

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
				this.register()
			}
		},
		register() {
			// Implement your registration logic here
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.register-form {
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-medium;
	width: $box-size;
	overflow: hidden;
}

.form {
	display: flex;
	flex-direction: column;
}

.form-error {
	color: $error-color;
	font-size: map-get(map-get($font-styles, small), size);
	font-weight: map-get(map-get($font-styles, large), font-weight);
	margin-top: $spacing-small;
}

h2 {
	font-size: map-get(map-get($font-styles, large), size);
	font-weight: map-get(map-get($font-styles, large), font-weight);
	margin: $spacing-none;
}

h3 {
	font-size: map-get(map-get($font-styles, medium), size);
	font-weight: map-get(map-get($font-styles, medium), font-weight);
	color: $font-color-secondary;
	margin-top: $spacing-none;
	margin-bottom: $spacing-medium;
}

.input-error {
	border-color: $error-color;
}

.error-message {
	color: $error-color;
	margin-top: $spacing-small;
}

.password-field {
	margin-bottom: 5px; /* Ajuste o valor conforme necessário */
}

.password-info {
	color: #666666;
	font-size: 12px;
	margin-top: 5px;
}
</style>

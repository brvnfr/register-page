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
					class="form-margin"
				/>
				<p class="form-caption">No mínimo 8 caracteres.</p>

				<InputText
					label="Confirme sua senha"
					name="confirmPassword"
					v-model="confirmPassword"
					type="password"
					:error="confirmPasswordError"
				/>

				<div class="horizontal-spacer"></div>

				<h2 class="section-title">Dados do seu Site</h2>

				<InputText
					label="Nome do seu Site"
					name="siteName"
					v-model="siteName"
					:value="siteName"
					:error="siteNameError"
					class="form-margin"
				/>
				<p class="form-caption">Exatamente igual ao título do seu site.</p>

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
			siteName: '',
			siteNameError: '',
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

.input-error {
	border-color: $error-color;
}

.error-message {
	color: $error-color;
	margin-top: $spacing-small;
}

.form-margin {
	margin-bottom: calc($spacing-small - 5px);
}

.form-caption {
	color: $font-color-secondary;
	font-size: map-get(map-get($font-styles, x-small), size);
	font-weight: map-get(map-get($font-styles, x-small), font-weight);
	margin-top: calc($spacing-small - 3px);
	margin-bottom: $spacing-large;
}

h2:last-of-type {
	margin-bottom: $spacing-large;
}
</style>

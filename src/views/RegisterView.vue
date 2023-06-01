<template>
	<div class="container">
		<div class="register-form">
			<form class="form" @submit.prevent="handleSubmit">
				<h2>Dados pessoais</h2>
				<h3>Informe seus dados pessoais para acesso à sua conta</h3>

				<InputText
					label="Name"
					name="name"
					v-model="name"
					:error="errors.name"
					placeholder="Enter your name"
				/>

				<InputText
					label="Email"
					name="email"
					v-model="email"
					:error="errors.email"
					placeholder="Enter your email"
				/>

				<InputText
					label="Password"
					name="password"
					v-model="password"
					:error="errors.password"
					placeholder="Enter your password"
					type="password"
				/>

				<CTAButton :button-class="submitButtonClass" @click="handleSubmit"
					>Register</CTAButton
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
			errors: {},
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

			// Perform additional validation if needed

			if (Object.keys(this.errors).length === 0) {
				// Proceed with registration logic
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

h2 {
	font-size: map-get(map-get($font-styles, large), size);
	font-weight: map-get(map-get($font-styles, large), font-weight);
	margin: 0;
}

h3 {
	font-size: map-get(map-get($font-styles, medium), size);
	font-weight: map-get(map-get($font-styles, medium), font-weight);
	color: $font-color-secondary;
	margin-top: 0;
	margin-bottom: $spacing-medium;
}

.input-error {
	border-color: $error-color;
}

.error-message {
	color: $error-color;
	margin-top: $spacing-small;
}
</style>

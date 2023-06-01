<template>
	<form class="form" @submit.prevent="handleSubmit">
		<h1>Login</h1>
		<InputText
			label="Email"
			name="email"
			:value="email"
			@input="updateEmail"
			placeholder="Enter your email"
			:error="errors.email"
		/>

		<InputText
			label="Password"
			name="password"
			:value="password"
			@input="updatePassword"
			placeholder="Enter your password"
			type="password"
			:error="errors.password"
		/>

		<CTAButton :button-class="submitButtonClass" @click="handleSubmit"
			>Login</CTAButton
		>
	</form>
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
	methods: {
		updateEmail(value) {
			this.email = value
			this.errors.email = ''
		},
		updatePassword(value) {
			this.password = value
			this.errors.password = ''
		},
		handleSubmit() {
			this.errors = {}

			if (!this.email) {
				this.errors.email = 'Email is required.'
			}

			if (!this.password) {
				this.errors.password = 'Password is required.'
			}

			// Perform additional validation if needed

			if (Object.keys(this.errors).length === 0) {
				// Proceed with login logic
				this.login()
			}
		},
		login() {
			// Implement your login logic here
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
.form {
	max-width: 400px;
	margin: $spacing-none auto;
	padding: $spacing-large;
}
</style>

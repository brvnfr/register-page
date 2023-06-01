<template>
	<form class="form" @submit.prevent="handleSubmit">
		<h1>Register</h1>
		<InputText
			label="Name"
			name="name"
			:value="name"
			@input="updateName"
			placeholder="Enter your name"
			:error="errors.name"
		/>

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

		<ButtonDefault label="Register" @click="handleSubmit" />
	</form>
</template>

<script>
import InputText from '@/components/inputs/InputText.vue'
import ButtonDefault from '@/components/buttons/ButtonDefault.vue'

export default {
	components: {
		InputText,
		ButtonDefault,
	},
	data() {
		return {
			name: '',
			email: '',
			password: '',
			errors: {},
		}
	},
	methods: {
		updateName(value) {
			this.name = value
			this.errors.name = ''
		},
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

			if (!this.name) {
				this.errors.name = 'Name is required.'
			}

			if (!this.email) {
				this.errors.email = 'Email is required.'
			}

			if (!this.password) {
				this.errors.password = 'Password is required.'
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

<style scoped>
.form {
	max-width: 400px;
	margin: 0 auto;
	padding: 20px;
}
</style>

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
	methods: {},
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
	margin-bottom: $spacing-medium;
}

.login-card {
	position: relative;
	overflow: hidden;
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-large;
	width: $box-size;

	& h2 {
		text-justify: start;
	}
}

@media (max-width: $breakpoint-large) {
	.login-card {
		width: 95%;
		padding: $spacing-small;
	}
}

.register-link {
	margin-top: $spacing-medium;
	text-align: center;
	& p {
		margin-bottom: $spacing-none;
	}
	& router-link {
		margin-left: $spacing-x-small;
		color: $button-color;
	}
}
</style>

<template>
	<div class="login">
		<h1>Login</h1>
		<form>
			<InputText
				label="E-mail"
				name="email"
				v-model="email"
				placeholder="Digite o e-mail"
			></InputText>
			<InputText
				label="Senha"
				name="password"
				v-model="password"
				type="password"
				placeholder="Digite a senha"
			></InputText>
			<Button label="Entrar" type="primary" @click="login"></Button>
		</form>
	</div>
</template>

<script>
import InputText from '@/components/inputs/InputText.vue'
import Button from '@/components/buttons/ButtonDefault.vue'

export default {
	components: {
		InputText,
		Button,
	},
	data() {
		return {
			email: '',
			password: '',
		}
	},
	methods: {
		async login() {
			// método para realizar o login
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.login {
	max-width: 400px;
	margin: 0 auto;
	padding: $spacing-large;

	h1 {
		text-align: center;
		margin-bottom: $spacing-large;
	}

	form {
		display: flex;
		flex-direction: column;

		& > * {
			margin-bottom: $spacing-medium;
		}

		& > :last-child {
			align-self: center;
		}
	}
}
</style>

<template>
	<div class="logo-container">
		<img src="@/assets/images/brand/brand-logo.svg" alt="" />
	</div>
	<h1 class="title">
		Você está muito próximo de mudar a forma de <br />
		<u>hospedar seu site</u>
	</h1>
	<div class="form-box">
		<form>
			<InputText
				label="Nome"
				name="name"
				v-model="name"
				placeholder="Digite o nome"
			></InputText>
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
			<InputText
				label="Confirmar Senha"
				name="confirmPassword"
				v-model="confirmPassword"
				type="password"
				placeholder="Confirme a senha"
			></InputText>
			<Button label="Criar Conta" type="default" @click="register"></Button>
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
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		}
	},
	methods: {
		register() {
			// método para registrar um usuário
			// ...
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.logo-container {
	display: flex;
	justify-content: center;
	margin-bottom: $spacing-large;
}

.title {
	text-align: center;
	margin-bottom: $spacing-large;
	& u {
		color: $brand-vivid-pink;
	}

	max-width: 100%;
	height: auto;
	font-size: 2rem; /* Utilizando rem para uma medida mais flexível */
	font-weight: 600; /* Utilizando rem para uma medida mais flexível */
}

.form-box {
	background-color: #fff;
	width: 100%;
	max-width: 40rem; /* Utilizando rem para uma medida mais flexível */
	margin: 0 auto; /* Centraliza horizontalmente */
	display: flex;
	flex-direction: column;
	justify-content: center; /* Centraliza verticalmente */
	align-items: center; /* Centraliza verticalmente */
	padding: $spacing-large;
	box-sizing: border-box;
}

form {
	display: flex;
	flex-direction: column;
	background: $color-white;

	& > * {
		margin-bottom: $spacing-medium;
	}

	& > :last-child {
		align-self: center;
	}
}
</style>

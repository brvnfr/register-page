<template>
	<div class="logo-container">
		<img src="@/assets/images/brand/brand-logo.svg" alt="" />
	</div>
	<h1 class="title">Cadastro</h1>
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
			<Button label="Cadastrar" type="primary" @click="register"></Button>
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
}

.form-box {
	position: relative;
	background-color: #fff;
	width: 617px;
	min-height: 492px;
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

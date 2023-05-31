<template>
	<div class="login-page">
		<h1>Login</h1>
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
			:type="showPassword ? 'text' : 'password'"
			placeholder="Digite a senha"
		></InputText>
		<Button label="Entrar" type="primary" @click="login"></Button>
		<Button
			label="Cadastrar"
			type="default"
			@click="toggleRegistration"
		></Button>
		<div v-if="showRegistration">
			<h2>Cadastro</h2>
			<InputText
				label="Nome"
				name="name"
				v-model="name"
				placeholder="Digite o nome"
			></InputText>
			<Button label="Cadastrar" type="primary" @click="register"></Button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			name: '',
			showPassword: false,
			showRegistration: false,
		}
	},
	methods: {
		login() {
			// Lógica de autenticação do login
			// Você pode fazer chamadas para o servidor, verificar credenciais, etc.
			// Exemplo simplificado:
			this.$store.dispatch('auth/login', {
				email: this.email,
				password: this.password,
			})
		},
		register() {
			// Lógica de registro do usuário
			// Você pode fazer chamadas para o servidor, enviar os dados do novo usuário, etc.
			// Exemplo simplificado:
			this.$store.dispatch('auth/register', {
				name: this.name,
				email: this.email,
				password: this.password,
			})
		},
		toggleRegistration() {
			this.showRegistration = !this.showRegistration
		},
	},
}
</script>

<style scoped>
.login-page {
	max-width: 400px;
	margin: 0 auto;
	padding: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
}
</style>

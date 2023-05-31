<template>
	<div class="register">
		<h1>Cadastro</h1>
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
import InputText from '@/components/InputText.vue'
import Button from '@/components/Button.vue'

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
			// Lógica para realizar o cadastro
		},
	},
}
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.register {
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

    ${InputText} {
      margin-bottom: $spacing-medium;
    }

    ${Button} {
      align-self: center;
    }
  }
}
</style>

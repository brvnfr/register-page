<template>
	<form class="form">
		<h2>Dados pessoais</h2>
		<h3>Informe seus dados pessoais para acesso à sua conta</h3>

		<div class="input">
			<label for="name">Nome Completo</label>
			<input
				id="name"
				name="name"
				v-model="name"
				:class="{ 'input-error': errors.name }"
				placeholder="Informe seu nome completo"
			/>
			<div v-if="errors.name" class="error-message">{{ errors.name }}</div>
		</div>
		<div class="input">
			<label for="email">Email</label>
			<input
				id="email"
				name="email"
				v-model="email"
				:class="{ 'input-error': errors.email }"
				placeholder="Informe seu e-mail"
			/>
			<div v-if="errors.email" class="error-message">{{ errors.email }}</div>
		</div>
		<div class="input">
			<label for="password">Senha</label>
			<input
				id="password"
				name="password"
				v-model="password"
				:class="{ 'input-error': errors.password }"
				type="password"
				class="form-margin"
			/>
			<div v-if="errors.password" class="error-message">
				{{ errors.password }}
			</div>
			<p class="form-caption">No mínimo 8 caracteres.</p>
		</div>

		<div class="input">
			<label for="confirmPassword">Confirme sua senha</label>
			<input
				id="confirmPassword"
				name="confirmPassword"
				v-model="confirmPassword"
				:class="{ 'input-error': confirmPasswordError }"
				type="password"
			/>
			<div v-if="confirmPasswordError" class="error-message">
				{{ confirmPasswordError }}
			</div>
		</div>

		<hr class="horizontal-spacer" />

		<h2 class="section-title">Dados do seu Site</h2>

		<div class="input">
			<label for="siteName">Nome do site</label>
			<input
				id="siteName"
				label="Nome do seu Site"
				name="siteName"
				v-model="siteName"
				:class="{ 'input-error': errors.siteName }"
			/>
			<p class="form-caption">Exatamente igual ao título do seu site.</p>
		</div>
		<hr class="horizontal-spacer" />

		<div class="checkbox-section">
			<input type="checkbox" id="policyCheckbox" v-model="policyCheckbox" />
			<label for="policyCheckbox">
				Ao concluir com seu cadastro você concorda com nossos
				<a href="/termos-de-uso" target="_blank">Termos de Uso</a> e
				<a href="/politicas-de-privacidade" target="_blank"
					>Politicas de Privacidade</a
				>
			</label>
		</div>

		<CTAButton @click="handleSubmit">Criar Conta</CTAButton>
	</form>
</template>

<script>
import axios from 'axios'
import CTAButton from '@/components/buttons/CTAButton.vue'

export default {
	components: {
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
			policyCheckbox: false,
			errors: {
				name: '',
				email: '',
				password: '',
				siteName: '',
			},
		}
	},
	emits: ['update-selected-plan'],
	props: {
		selectedPlan: {
			type: Object,
		},
	},
	methods: {
		async handleSubmit() {
			this.clearErrors()

			if (!this.validateForm()) {
				return
			}

			try {
				// Realizar a requisição para a rota https://fakestoreapi.com/users
				const response = await axios.post('/users', {
					name: this.name,
					email: this.email,
					password: this.password,
					siteName: this.siteName,
					// selectedPlan: this.selectedPlan, // comentado pois so serve para fins esteticos e a rota nao recebe esse dado.
				})

				// Verificar a resposta da requisição
				if (response.status === 200) {
					alert('Cadastro realizado com sucesso!')
				} else {
					alert(
						'Ocorreu um erro ao realizar o cadastro. Por favor, tente novamente.'
					)
				}
			} catch (error) {
				alert(
					'Ocorreu um erro ao realizar o cadastro. Por favor, tente novamente.'
				)
				console.error(error)
			}
		},

		validateForm() {
			let isValid = true

			// Validando inputs com seus respectivos regex e retornando valor false caso haja algum erro, removendo whitespaces do texto com o metodo .trim()

			if (this.name.trim() === '') {
				this.errors.name = 'Por favor, informe seu nome.'
				isValid = false
			}

			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			if (this.email.trim() === '') {
				this.errors.email = 'Por favor, informe seu e-mail.'
				isValid = false
			} else if (!emailRegex.test(this.email)) {
				this.errors.email = 'Por favor, informe um e-mail válido.'
				isValid = false
			}

			const passwordRegex = /^.{8,}$/
			if (this.password.trim() === '') {
				this.errors.password = 'Por favor, informe sua senha.'
				isValid = false
			} else if (!passwordRegex.test(this.password)) {
				this.errors.password = 'A senha deve conter pelo menos 8 caracteres.'
				isValid = false
			}

			if (this.confirmPassword.trim() === '') {
				this.confirmPasswordError = 'Por favor, confirme sua senha.'
				isValid = false
			} else if (this.confirmPassword !== this.password) {
				this.confirmPasswordError = 'As senhas não coincidem.'
				isValid = false
			}

			if (this.siteName.trim() === '') {
				this.errors.siteName = 'Por favor, informe o nome do seu site.'
				isValid = false
			}

			return isValid
		},

		clearErrors() {
			this.errors.name = ''
			this.errors.email = ''
			this.errors.password = ''
			this.errors.siteName = ''
			this.confirmPasswordError = ''
		},
	},
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.form {
	box-sizing: border-box;
	flex-direction: column;
	padding: $spacing-small;
}

.form-margin {
	margin-bottom: calc($spacing-x-small - 5px);
}

.form-caption {
	color: $font-color-secondary;
	font-size: map-get(map-get($font-styles, x-small), size);
	font-weight: map-get(map-get($font-styles, x-small), font-weight);
	margin-top: calc($spacing-x-small - 3px); /* Reduzir a margem superior */
	margin-bottom: $spacing-small;
}

.form .input {
	margin-bottom: $spacing-medium; /* Ajuste o valor da margem conforme necessário */
}

label {
	font-weight: bold;
	font-size: map-get(map-get($font-styles, small), size);
	font-weight: map-get(map-get($font-styles, small), font-weight);
}

input {
	box-sizing: border-box;
	width: 100%;
	padding: calc($spacing-medium - 4px);
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: $border-radius;
	transition: border-color 0.3s;
}
input[type='checkbox'] {
	width: 16px;
	font-size: 20px;
}
input:focus {
	outline: 1px solid $brand-vivid-pink;
	border-color: $brand-vivid-pink;
}

.input-error {
	border-color: $error-color;
}

.error-message {
	color: $error-color;
	font-size: map-get(map-get($font-styles, x-small), size);
	font-weight: map-get(map-get($font-styles, x-large), font-weight);
	margin-top: $spacing-x-small;
}

h2:last-of-type {
	margin-bottom: $spacing-small;
}

.checkbox-section {
	display: flex;
	align-items: center;
	margin-top: $spacing-x-small;
	margin-bottom: $spacing-small;
	font-size: map-get(map-get($font-styles, small), size);
	font-weight: map-get(map-get($font-styles, small), font-weight);
	color: $font-color-primary;
}

.checkbox-section input[type='checkbox'] {
	margin-right: $spacing-x-small;
	& :checked {
		--checkbox-color: $brand-vivid-pink;
	}
	a {
		color: $brand-vivid-pink;
		& :hover {
			text-decoration: underline;
			color: $brand-vivid-pink;
		}
	}
}
</style>

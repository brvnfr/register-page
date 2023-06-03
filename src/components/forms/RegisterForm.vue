<template>
	<form class="form" @submit.prevent="handleSubmit">
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
	methods: {
		handleSubmit() {
			this.clearErrors()

			if (!this.validateForm()) {
				return
			}

			// Lógica para enviar os dados do formulário ao servidor ou realizar qualquer outra ação necessária
			// ...

			// Exemplo de exibição de uma mensagem de sucesso após o envio do formulário
			alert('Cadastro realizado com sucesso!')
		},
		validateForm() {
			let isValid = true

			if (this.name.trim() === '') {
				this.errors.name = 'Por favor, informe seu nome.'
				isValid = false
			}

			if (this.email.trim() === '') {
				this.errors.email = 'Por favor, informe seu e-mail.'
				isValid = false
			} else if (!this.isValidEmail(this.email)) {
				this.errors.email = 'Por favor, informe um e-mail válido.'
				isValid = false
			}

			if (this.password.trim() === '') {
				this.errors.password = 'Por favor, informe sua senha.'
				isValid = false
			} else if (this.password.length < 8) {
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

			if (!this.policyCheckbox) {
				alert(
					'Por favor, concorde com os Termos de Uso e Políticas de Privacidade.'
				)
				isValid = false
			}

			return isValid
		},
		isValidEmail(email) {
			// Lógica para validar o formato do e-mail, por exemplo, usando uma expressão regular
			// Neste exemplo, vamos usar uma expressão regular simples para verificar se contém um "@" e um "."
			return email.includes('@') && email.includes('.')
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
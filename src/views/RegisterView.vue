<template>
	<div class="header-container">
		<div class="logo-brand">
			<img
				src="@/assets/images/brand/brand-logo.svg"
				alt="brand-logo"
				class="logo-img"
			/>
		</div>
		<h2>
			Você está muito perto de mudar a forma de <br />
			<u>hospedar seu site</u>
		</h2>
	</div>
	<div v-if="!isPlanSelected" class="content">
		<div class="register-column">
			<form class="form" @submit.prevent="handleSubmit">
				<h2>Dados pessoais</h2>
				<h3>Informe seus dados pessoais para acesso à sua conta</h3>

				<InputText
					label="Nome Completo"
					name="name"
					v-model="name"
					:error="errors.name"
					placeholder="Informe seu nome completo"
				/>

				<InputText
					label="Email"
					name="email"
					v-model="email"
					:error="errors.email"
					placeholder="Informe seu e-mail"
				/>

				<InputText
					label="Senha"
					name="password"
					v-model="password"
					:error="errors.password"
					type="password"
					class="form-margin"
				/>
				<p class="form-caption">No mínimo 8 caracteres.</p>

				<InputText
					label="Confirme sua senha"
					name="confirmPassword"
					v-model="confirmPassword"
					type="password"
					:error="confirmPasswordError"
				/>

				<hr class="horizontal-spacer" />

				<h2 class="section-title">Dados do seu Site</h2>

				<InputText
					label="Nome do seu Site"
					name="siteName"
					v-model="siteName"
					:value="siteName"
					:error="siteNameError"
					class="form-margin"
				/>
				<p class="form-caption">Exatamente igual ao título do seu site.</p>

				<p v-if="formError" class="form-error">{{ formError }}</p>

				<hr class="horizontal-spacer" />

				<div class="checkbox-section">
					<input type="checkbox" id="policyCheckbox" v-model="policyCheckbox" />
					<label for="policyCheckbox">
						Ao concluir com seu cadastro você concorda com nossos
						<a href="/termos-de-uso" target="_blank">Termos de Uso</a> e
						<a href="/politicas-de-privacidade" target="_blank"
							>Politicas de Privacidade</a
						>.
					</label>
				</div>

				<CTAButton @click="handleSubmit">Criar Conta</CTAButton>
			</form>
		</div>
		<div class="plan-column">
			<SelectedPlan
				title="Escala"
				price="R$ 447/mês"
				additionalInfo="+1,5% por pedido pago"
			/>
		</div>
	</div>
	<div v-else class="content">
		<!-- TODO div com os planos selecionaveis-->
		<PricePlans />
	</div>
</template>

<script>
import InputText from '@/components/inputs/InputText.vue'
import CTAButton from '@/components/buttons/CTAButton.vue'
import SelectedPlan from '@/components/layouts/SelectedPlan.vue'

export default {
	components: {
		InputText,
		CTAButton,
		SelectedPlan,
	},
	data() {
		return {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
			confirmPasswordError: '',
			siteName: '',
			siteNameError: '',
			errors: {},
			formError: '',
			selectedPlan: [],
			isPlanSelected: true,
		}
	},
	computed: {
		submitButtonClass() {
			return {
				'input-error': Object.keys(this.errors).length > 0,
			}
		},
	},
	methods: {
		handleSubmit() {
			this.errors = {}

			if (!this.name) {
				this.errors.name = 'Nome completo obrigatório.'
			}

			if (!this.email) {
				this.errors.email = 'E-mail obrigatório.'
			}

			if (!this.password) {
				this.errors.password = 'Senha obrigatória.'
			}
			if (this.confirmPassword !== this.password) {
				this.confirmPasswordError = 'As senhas não correspondem'
				return
			}

			if (Object.keys(this.errors).length === 0) {
				this.register()
			}
		},
		register() {
			// Implement your registration logic here
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.header-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.content {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
}

.register-column,
.plan-column {
	margin-right: 20px;
}

.register-column {
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-medium;
	overflow: hidden;
	width: 400px;
	height: $column-height;
	border-radius: $border-radius;
}

.plan-column {
	position: relative;
	overflow: hidden;
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-medium;
	max-height: $column-height;
	width: 250px;
	border-radius: $border-radius;
}
// .plan-column::after {
// 	content: '';
// 	position: absolute;
// 	bottom: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 700px; /* Ajuste a altura do degradê conforme necessário */
// 	background-image: linear-gradient(transparent, rgb(255, 255, 255));
// 	background-clip: content-box;
// 	pointer-events: none;
// }

@media (max-width: $breakpoint-medium) {
	.content {
		flex-direction: column-reverse;
	}
	.register-column {
		width: 100%;
	}
	.plan-column {
		width: 100%;
		padding: $spacing-small;
	}
}

.form {
	display: flex;
	flex-direction: column;
}

.form-error {
	color: $error-color;
	font-size: map-get(map-get($font-styles, small), size);
	font-weight: map-get(map-get($font-styles, large), font-weight);
	margin-top: $spacing-x-small; /* Reduzir a margem superior */
}

.input-error {
	border-color: $error-color;
}

.error-message {
	color: $error-color;
	margin-top: $spacing-x-small; /* Reduzir a margem superior */
}

.form-margin {
	margin-bottom: calc($spacing-x-small - 5px); /* Reduzir a margem inferior */
}

.form-caption {
	color: $font-color-secondary;
	font-size: map-get(map-get($font-styles, x-small), size);
	font-weight: map-get(map-get($font-styles, x-small), font-weight);
	margin-top: calc($spacing-x-small - 3px); /* Reduzir a margem superior */
	margin-bottom: $spacing-small; /* Reduzir a margem inferior */
}

h2:last-of-type {
	margin-bottom: $spacing-small; /* Reduzir a margem inferior */
}
h2:first-of-type {
	margin-bottom: $spacing-large;
	text-align: center;
	& u {
		color: $brand-vivid-pink;
	}
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
}

.checkbox-section a {
	color: $brand-vivid-pink;
}

.checkbox-section a:hover {
	text-decoration: underline;
	color: $brand-vivid-pink;
}
</style>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.register-column {
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-medium;
	width: $box-size;
	overflow: hidden;
}
@media (max-width: 640px) {
	.register-column {
		width: 100%;
		padding: $spacing-small;
	}
}

.form {
	display: flex;
	flex-direction: column;
}

.form-error {
	color: $error-color;
	font-size: map-get(map-get($font-styles, small), size);
	font-weight: map-get(map-get($font-styles, large), font-weight);
	margin-top: $spacing-x-small; /* Reduzir a margem superior */
}

.input-error {
	border-color: $error-color;
}

.error-message {
	color: $error-color;
	margin-top: $spacing-x-small; /* Reduzir a margem superior */
}

.form-margin {
	margin-bottom: calc($spacing-x-small - 5px); /* Reduzir a margem inferior */
}

.form-caption {
	color: $font-color-secondary;
	font-size: map-get(map-get($font-styles, x-small), size);
	font-weight: map-get(map-get($font-styles, x-small), font-weight);
	margin-top: calc($spacing-x-small - 3px); /* Reduzir a margem superior */
	margin-bottom: $spacing-small; /* Reduzir a margem inferior */
}

h2:last-of-type {
	margin-bottom: $spacing-small; /* Reduzir a margem inferior */
}
h2:first-of-type {
	margin-bottom: $spacing-large;
	text-align: center;
	& u {
		color: $brand-vivid-pink;
	}
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
}

.checkbox-section a {
	color: $brand-vivid-pink;
}

.checkbox-section a:hover {
	text-decoration: underline;
	color: $brand-vivid-pink;
}
</style>

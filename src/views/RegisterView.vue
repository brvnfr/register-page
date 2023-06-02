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
	<div class="content">
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
						<a href="/termos-de-uso" target="_blank">termos de Uso</a> e
						<a href="/politicas-de-privacidade" target="_blank"
							>politicas de privacidade</a
						>.
					</label>
				</div>

				<CTAButton :button-class="submitButtonClass" @click="handleSubmit"
					>Criar Conta</CTAButton
				>
			</form>
		</div>
		<div class="plan-column">
			<PricePlan
				title="Escala"
				price="R$ 447/mês"
				additionalInfo="+1,5% por pedido pago"
			>
				<ul>
					<li>Checkout transparente com vários templates</li>
					<li>Construtor de checkout altamente personalizável</li>
					<li>Integração com Shopify e Woocommerce</li>
					<li>Mercado Pago, Appmax, Cielo, Pagar.me e Pagseguro</li>
					<li>Recuperação de carrinho abandonado via Whatsapp, sms e e-mail</li>
					<li>Recuperação de boleto bancário via Whatsapp, sms e e-mail</li>
					<li>Recuperação de Pix via Whatsapp e e-mail</li>
					<li>Monitoramento de até 50 lojas Shopify</li>
					<li>Feed de Produtos de lojas monitoradas</li>
					<li>Envio de mensagens ilimitadas via Whatsapp</li>
					<li>
						Multi-atendimento para Whatsapp (atendentes compartilhando o mesmo
						número)
					</li>
					<li>Ilimitadas contas de equipe</li>
					<li>Dashboard financeiro com lucro em tempo real</li>
					<li>Rastreios ilimitados</li>
					<li>Plugin de rastreamento</li>
					<li>Link para landing page ou página de vendas própria</li>
					<li>Upsell e downsell</li>
					<li>Order bump</li>
					<li>Desconto por faixa de preço</li>
					<li>Prova social</li>
					<li>Cupom de desconto</li>
					<li>Desconto por forma de pagamento</li>
					<li>Kit promocional</li>
					<li>Certificado SSL Grátis</li>
					<li>Prioridade no suporte</li>
				</ul>
				<button class="choose-plan-button">ESCOLHER ESSE PLANO</button>
			</PricePlan>
		</div>
	</div>
</template>

<script>
import InputText from '@/components/inputs/InputText.vue'
import CTAButton from '@/components/buttons/CTAButton.vue'
import PricePlan from '@/components/layouts/PricePlan.vue'

export default {
	components: {
		InputText,
		CTAButton,
		PricePlan,
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
			selectedPlan: [
				{ id: 1, name: 'Plano 1', benefits: 'Benefícios do Plano 1' },
				{ id: 2, name: 'Plano 2', benefits: 'Benefícios do Plano 2' },
				{ id: 3, name: 'Plano 3', benefits: 'Benefícios do Plano 3' },
			],
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
	width: $box-size;
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
.plan-column::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px; /* Ajuste a altura do degradê conforme necessário */
	background-image: linear-gradient(transparent, rgb(255, 252, 252));
	background-clip: content-box;
	pointer-events: none;
}

@media (max-width: $breakpoint-medium) {
	.content {
		flex-direction: column-reverse;
	}
	.register-column,
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

.plan-table {
	width: 100%;
	background-color: $color-white;
	box-shadow: $box-shadow;
	border-radius: $border-radius;

	th,
	td {
		padding: $spacing-small;
		text-align: left;
	}

	th {
		background-color: $color-white;
		color: $color-white;
	}
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

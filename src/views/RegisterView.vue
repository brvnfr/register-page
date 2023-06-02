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
			<form @submit.prevent="handleSubmit">
				<h2>Dados pessoais</h2>
				<h3>Informe seus dados pessoais para acesso à sua conta</h3>

				<InputText
					label="Nome Completo"
					name="name"
					v-model="name"
					:value="name"
					:error="errors.name"
					placeholder="Informe seu nome completo"
				/>

				<InputText
					label="Email"
					name="email"
					v-model="email"
					:value="email"
					:error="errors.email"
					placeholder="Informe seu e-mail"
				/>

				<InputText
					label="Senha"
					name="password"
					v-model="password"
					:value="password"
					:error="errors.password"
					type="password"
					class="form-margin"
				/>
				<p class="form-caption">No mínimo 8 caracteres.</p>

				<InputText
					label="Confirme sua senha"
					name="confirmPassword"
					v-model="confirmPassword"
					:value="confirmPassword"
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
		</div>
		<div class="plan-column">
			<SelectedPlan
				:planOptions="planOptions"
				:selectedPlan="selectedPlan"
				@planSelected="handlePlanSelected"
			/>
		</div>
	</div>
	<div v-else class="content">
		<!-- TODO div com os planos selecionaveis-->
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
			selectedPlan: null,
			planOptions: [
				{
					name: 'Hospedagem 1',
					price: 'Grátis',
					description: 'Você não paga nada para usar',
					features: [
						'Sem taxa de setup',
						'Ideal para quem está começando',
						'Seu site em servidores nos Estados Unidos',
						'Servidores em nossos data center americanos',
						'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0',
						'1 usuário de FTP para upload ou download',
						'1 conta de e-mails profissionais',
						'1 subdomínio gratuito',
						'Suporte 24 horas, 7 dias por semana grátis',
						'Aplicativos disponíveis: Wordpress, Drupal, entre outros',
						'Webmail RoundCube',
						'AntiSpam',
						'Painel de gerenciamento de DNS',
						'Painel de controle web',
						'Configurações de PHP personalizáveis',
						'Certificado SSL Grátis',
						'Transferência ilimitada',
					],
				},
				{
					name: 'Hospedagem 2',
					price: '499',
					description: 'Cobrado mensalmente',
					features: [
						'Sem taxa de setup',
						'Ideal para site com mais de 30k de visitas',
						'Seu site em servidores no Brasil',
						'Servidores em nosso de São Paulo',
						'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0',
						'10 usuários de FTP para upload ou download',
						'30 contas de e-mails profissionais',
						'10 subdomínios gratuitos',
						'Suporte 24 horas, 7 dias por semana grátis',
						'Aplicativos disponíveis: Wordpress, Drupal, entre outros',
						'Migração Gratuita',
						'Migramos todos seus sites para nossos servidores',
						'Webmail RoundCube',
						'AntiSpam',
						'Painel de gerenciamento de DNS',
						'Painel de controle web',
						'Configurações de PHP personalizáveis',
						'Certificado SSL Grátis',
						'Transferência ilimitada',
					],
				},
				{
					name: 'Hospedagem 3',
					price: '999',
					description: 'Cobrado mensalmente',
					features: [
						'Sem taxa de setup',
						'Ideal para site com mais de 60k de visitas',
						'Seu site em servidores no Brasil',
						'Servidores em nosso de São Paulo',
						'ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0',
						'Usuários de FTP ilimitados para upload ou download',
						'Contas de e-mails profissionais ilimitadas',
						'50 subdomínios gratuitos',
						'Suporte 24 horas, 7 dias por semana grátis',
						'Aplicativos disponíveis: Wordpress, Drupal, entre outros',
						'Migração Gratuita',
						'Migramos todos seus sites para nossos servidores',
						'Webmail RoundCube',
						'AntiSpam',
						'Painel de gerenciamento de DNS',
						'Painel de controle web',
						'Configurações de PHP personalizáveis',
						'Certificado SSL Grátis',
						'Transferência ilimitada',
					],
				},
			],
			isPlanSelected: false,
		}
	},
	computed: {},
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

		handlePlanSelected(plan) {
			this.selectedPlan = plan
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
	gap: 20px;
}

.register-column {
	position: relative;
	overflow: hidden;
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-medium;
	width: 400px;

	& h2 {
		text-justify: start;
	}
}

.plan-column {
	position: relative;
	overflow: hidden;
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-medium;
	width: 250px;
	border-radius: $border-radius;
	@media (max-width: $breakpoint-medium) {
		margin-bottom: $spacing-small;
	}
}

@media (max-width: 712px) {
	.content {
		flex-direction: column-reverse;
	}
	.register-column {
		width: 100%;
		padding: $spacing-small;
	}
	.plan-column {
		width: 100%;
		padding: $spacing-small;
	}
}

.form {
	box-sizing: border-box;
	flex-direction: column;
	padding: $spacing-small;
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
	& :checked {
		--checkbox-color: $brand-vivid-pink;
	}
}

.checkbox-section a {
	color: $brand-vivid-pink;
}

.checkbox-section a:hover {
	text-decoration: underline;
	color: $brand-vivid-pink;
}
</style>

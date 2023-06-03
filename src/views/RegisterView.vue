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
			<RegisterForm @submit="handleSubmit" />
		</div>
		<div class="plan-column">
			<div class="selected-plan-tag">Plano Escolhido</div>
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
	<div class="login-link">
		<p>
			Ja possui uma conta?
			<router-link to="/">Login</router-link>
		</p>
	</div>
</template>

<script>
import RegisterForm from '@/components/forms/RegisterForm.vue'

import SelectedPlan from '@/components/layouts/SelectedPlan.vue'

export default {
	components: {
		SelectedPlan,
		RegisterForm,
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
		handleSubmit(formData) {
			// Lógica para tratar os dados do formulário recebidos do componente RegisterForm
			console.log(formData)
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

.selected-plan-tag {
	display: flex;
	justify-content: center;
	position: relative;
	top: -33px;
	left: 50%;
	width: 150px;
	text-transform: uppercase;
	transform: translateX(-50%);
	padding: 5px;
	background-color: $color-black;
	color: $color-white;
	font-size: map-get(map-get($font-styles, medium), size);
	font-weight: map-get(map-get($font-styles, medium), font-weight);
	border-radius: 10px;
	z-index: 100;
	@media (max-width: 712px) {
		top: 10px;
	}
}

.plan-column {
	position: relative;
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-medium;
	width: 250px;
	border-radius: $border-radius;
}

@media (max-width: 712px) {
	.content {
		flex-direction: column-reverse;
	}
	.register-column {
		width: 95%;
		padding: $spacing-small;
	}
	.plan-column {
		width: 95%;
		padding: $spacing-small;
	}
}

h2:first-of-type {
	margin-bottom: $spacing-large;
	text-align: center;
	& u {
		color: $brand-vivid-pink;
	}
}

.login-link {
	margin-top: $spacing-medium;
	text-align: center;
	& p {
		margin-bottom: 0;
	}
	& router-link {
		margin-left: 5px;
		color: $brand-vivid-pink;
	}
}
</style>

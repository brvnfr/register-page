<template>
	<div class="registration-complete">
		<div class="logo-brand">
			<img
				src="@/assets/images/brand/brand-logo.svg"
				alt="brand-logo"
				class="logo-img"
			/>
		</div>
		<div class="card">
			<h2>Bem-vindo(a)!</h2>
			<p>Sua conta foi criada com sucesso.</p>
			<p>
				Agora você pode aproveitar todos os recursos do nosso serviço de
				hospedagem de sites.
			</p>
			<hr class="horizontal-spacer" />
			<router-link to="/">Ir para a página de login</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RegistrationComplete',
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.registration-complete {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.card {
	position: relative;
	overflow: hidden;
	background-color: $color-white;
	box-shadow: $box-shadow;
	padding: $spacing-large;
	width: 400px;

	& h2 {
		text-justify: start;
	}
}

@media (max-width: 712px) {
	.card {
		width: 95%;
		padding: $spacing-small;
	}
}
</style>

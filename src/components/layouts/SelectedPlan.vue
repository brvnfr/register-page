<template>
	<div class="price-plan">
		<h3>Escala</h3>
		<p class="price">R$ 447/mês</p>
		<p class="price-description">+1,5% por pedido pago</p>

		<ul class="features">
			<li>
				<i class="fas fa-check"></i> Checkout transparente com vários templates
			</li>
			<li>
				<i class="fas fa-check"></i> Construtor de checkout altamente
				personalizável
			</li>
			<li><i class="fas fa-check"></i> Integração com Shopify e Woocommerce</li>
			<li>
				<i class="fas fa-check"></i> Mercado Pago, Appmax, Cielo, Pagar.me e
				Pagseguro
			</li>
			<li>
				<i class="fas fa-check"></i> Recuperação de carrinho abandonado via
				Whatsapp, sms e e-mail
			</li>
			<li>
				<i class="fas fa-check"></i> Recuperação de boleto bancário via
				Whatsapp, sms e e-mail
			</li>
			<li>
				<i class="fas fa-check"></i> Recuperação de Pix via Whatsapp e e-mail
			</li>
			<li>
				<i class="fas fa-check"></i> Monitoramento de até 50 lojas Shopify
			</li>
			<li>
				<i class="fas fa-check"></i> Feed de Produtos de lojas monitoradas
			</li>
			<li>
				<i class="fas fa-check"></i> Envio de mensagens ilimitadas via Whatsapp
			</li>
			<li>
				<i class="fas fa-check"></i> Multi-atendimento para Whatsapp (atendentes
				compartilhando o mesmo número)
			</li>
			<li><i class="fas fa-check"></i> Ilimitadas contas de equipe</li>
			<li>
				<i class="fas fa-check"></i> Dashboard financeiro com lucro em tempo
				real
			</li>
			<li><i class="fas fa-check"></i> Rastreios ilimitados</li>
			<li><i class="fas fa-check"></i> Plugin de rastreamento</li>
			<li>
				<i class="fas fa-check"></i> Link para landing page ou página de vendas
				própria
			</li>
			<li><i class="fas fa-check"></i> Upsell e downsell</li>
			<li><i class="fas fa-check"></i> Order bump</li>
			<li><i class="fas fa-check"></i> Desconto por faixa de preço</li>
			<li><i class="fas fa-check"></i> Prova social</li>
			<li><i class="fas fa-check"></i> Cupom de desconto</li>
			<li><i class="fas fa-check"></i> Desconto por forma de pagamento</li>
			<li><i class="fas fa-check"></i> Kit promocional</li>
			<li><i class="fas fa-check"></i> Certificado SSL Grátis</li>
			<li><i class="fas fa-check"></i> Prioridade no suporte</li>
		</ul>

		<button class="choose-plan-button">ESCOLHER ESSE PLANO</button>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';
.price-plan {
	text-align: center;
	background-color: $color-white;
	padding: $spacing-medium;
	border-radius: $border-radius;
	max-width: 400px;
	margin: 0 auto;
}

.price-plan h3 {
	color: $brand-vivid-pink;
	font-weight: bold;
	font-size: 1.5rem;
}

.price {
	font-size: 2rem;
	margin-top: $spacing-small;
}

.price-description {
	color: $font-color-secondary;
	font-size: 1rem;
}

.features {
	list-style: none;
	margin: $spacing-medium 0;
	padding: 0;
	text-align: left;
}

.features li {
	margin-bottom: $spacing-small;
}

.choose-plan-button {
	background-color: $button-color;
	color: $color-white;
	border: none;
	border-radius: $border-radius;
	padding: $spacing-small $spacing-medium;
	font-size: 1rem;
	cursor: pointer;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: $button-hover;
	}
}

.fa-check {
	color: $brand-vivid-pink;
	margin-right: $spacing-small;
}
</style>

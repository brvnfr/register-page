Para exibir um carousel na versão mobile em vez das colunas de planos, você pode
usar uma técnica conhecida como "media queries" para aplicar estilos diferentes
com base no tamanho da tela. Aqui está uma versão atualizada do seu componente,
onde o carousel é mostrado na versão mobile: html Copy code
<template>
	<div>
		<div class="plans-container desktop">
			<div class="price-plans">
				<div
					v-for="(plan, index) in planOptions"
					:key="index"
					class="price-plan"
					:class="{ 'plan-middle': index === 1 }"
					@click="handleChoosePlan(plan)"
				>
					<div v-if="index === 1" class="selected-plan-tag">Mais usado</div>
					<h3>{{ plan.name }}</h3>
					<p class="price">
						{{ isNaN(plan.price) ? plan.price : 'R$ ' + plan.price }}
					</p>
					<p class="price-description">{{ plan.description }}</p>
					<p>{{ plan.setupFee }}</p>
					<hr class="horizontal-spacer" />
					<ul class="features">
						<li
							v-for="(detail, detailIndex) in plan.features"
							:key="detailIndex"
						>
							<i class="fas fa-check"></i>
							{{ detail }}
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="carousel-container mobile">
			<!-- Coloque aqui o código do seu carousel -->
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			planName: '',
		}
	},
	props: {
		planOptions: {
			type: Array,
		},
		selectedPlan: {
			type: Object,
			default: () => {},
		},
	},
	methods: {
		handleChoosePlan(plan) {
			this.$emit('select-plan', plan)
		},
		isSelectedPlan(plan) {
			return plan === this.selectedPlan
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.plans-container {
	width: 55vw;
}

.price-plans {
	display: flex;
	justify-content: space-around;
	align-items: start;
	gap: 10px;
}

.price-plan {
	text-align: center;
	background-color: $color-white;
	padding: $spacing-medium;
	border-radius: $border-radius;
	width: 300px;
	cursor: pointer;
	transition: box-shadow 0.3s ease;

	&.plan-middle {
		width: 300px;
		height: calc(100% + 20px);
	}
}

.price-plan h3 {
	color: $font-color-primary;
	font-weight: bold;
	font-size: 1.5rem;
}

.price {
	font-size: 2rem;
	margin-top: $spacing-small;
	color: $brand-vivid-pink;
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

.fa-check {
	color: $brand-vivid-pink;
	margin-right: $spacing-small;
}

.carousel-container {
	display: none;
}

@media (max-width: 768px) {
	.desktop {
		display: none;
	}

	.carousel-container {
		display: block;
		/* Adicione os estilos do seu carousel aqui */
	}
}
</style>

<template>
	<div class="price-plans desktop">
		<div
			v-for="(plan, index) in planOptions"
			:key="index"
			class="price-plan"
			:class="{ 'plan-middle': index === 1 }"
		>
			<div v-if="index === 1" class="best-plan-tag">Mais usado</div>
			<h3>{{ plan.name }}</h3>
			<p class="price">
				<span v-if="!isNaN(plan.price)" class="currency">R$</span>
				<span class="price-value">{{ plan.price }}</span>
				<span v-if="!isNaN(plan.price)" class="unit">/mês</span>
			</p>
			<hr class="horizontal-spacer" />
			<CTAButton @click="handleChoosePlan(plan)">Escolher Plano</CTAButton>
			<hr class="horizontal-spacer" />
			<span
				class="plan-description"
				v-for="(description, index) in plan.description"
				:key="index"
			>
				<p>
					{{ description }}
				</p>
			</span>
			<hr class="horizontal-spacer" />

			<span>
				<p>
					{{ plan.profile }}
				</p>
			</span>
			<hr class="horizontal-spacer" />
			<ul class="features">
				<li
					v-for="(detail, detailIndex) in plan.features"
					:key="detailIndex"
					:class="{ 'bold-text': [0, 6, 7, 11, 13].includes(detailIndex) }"
				>
					<i
						v-if="![0, 6, 7, 11, 13].includes(detailIndex)"
						class="fas fa-check"
					></i>
					{{ detail }}
				</li>
			</ul>
		</div>
	</div>
	<div class="carousel-container mobile">
		<p class="carousel-caption">Deslize para selecionar o plano:</p>
		<Carousel
			ref="carousel"
			:items-to-show="1"
			:wrap-around="true"
			style="width: 100vw"
		>
			<template #addons>
				<Navigation />
			</template>
			<Slide v-for="(plan, index) in planOptions" :key="index">
				<div class="price-plan-carousel">
					<div v-if="index === 1" class="best-plan-tag">Mais usado</div>
					<h3>{{ plan.name }}</h3>
					<p class="price">
						<span v-if="!isNaN(plan.price)" class="currency">R$</span>
						<span class="price-value">{{ plan.price }}</span>
						<span v-if="!isNaN(plan.price)" class="unit">/mês</span>
					</p>
					<hr class="horizontal-spacer" />
					<CTAButton @click="handleChoosePlan(plan)">Escolher Plano</CTAButton>
					<hr class="horizontal-spacer" />
					<span
						class="plan-description"
						v-for="(description, index) in plan.description"
						:key="index"
					>
						<p>
							{{ description }}
						</p>
					</span>
					<hr class="horizontal-spacer" />

					<span class="plan-profile">
						<p>
							{{ plan.profile }}
						</p>
					</span>
					<hr class="horizontal-spacer" />
					<ul class="features">
						<li
							v-for="(detail, detailIndex) in plan.features"
							:key="detailIndex"
							:class="{ 'bold-text': [0, 6, 7, 11, 13].includes(detailIndex) }"
						>
							<i
								v-if="![0, 6, 7, 11, 13].includes(detailIndex)"
								class="fas fa-check"
							></i>
							{{ detail }}
						</li>
					</ul>
				</div>
			</Slide>
		</Carousel>
	</div>
</template>

<script>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import CTAButton from '@/components/buttons/CTAButton.vue'

import 'vue3-carousel/dist/carousel.css'

export default {
	emits: ['select-plan'], // Declaração do evento emitido pelo componente
	components: {
		CTAButton,
		Carousel,
		Slide,

		Navigation,
	},
	data() {
		return {}
	},
	props: {
		selectedPlan: {
			type: Object,
			default: null,
		},
		planOptions: {
			type: Array,
			required: true,
		},
	},
	methods: {
		handleChoosePlan(plan) {
			this.$emit('select-plan', plan)
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.carousel__viewport {
	perspective: 2000px;
}
.price-plans {
	gap: 10px;
}

.desktop {
	display: flex;
	flex-direction: row;
}

.best-plan-tag {
	display: flex;
	justify-content: center;
	position: relative;
	top: -33px;
	left: 50%;
	width: 150px;
	text-transform: uppercase;
	transform: translateX(-50%);
	padding: 5px;
	background-color: $brand-lime-green;
	color: $color-white;
	font-size: map-get(map-get($font-styles, medium), size);
	font-weight: map-get(map-get($font-styles, medium), font-weight);
	border-radius: 10px;
	z-index: 100;
	@media (max-width: 768px) {
		bottom: -10px;
	}
}

.price-plan {
	text-align: center;
	background-color: $color-white;
	padding: $spacing-medium;
	border-radius: $border-radius;
	width: 300px;
	cursor: pointer;
	transition: box-shadow 0.3s ease;
	margin-top: 29px;
}

.price-plan-carousel {
	text-align: center;
	background-color: $color-white;
	padding: $spacing-medium;
	border-radius: $border-radius;
	width: 80vw;
	cursor: pointer;
	transition: box-shadow 0.3s ease;
	margin-top: 29px;
}

.plan-middle {
	margin-top: 0;
	width: 350px;
	height: 100%;
}

.price-plan h3,
.price-plan-carousel h3 {
	color: $font-color-primary;
	font-weight: bold;
	font-size: 1.5rem;
}

.price-value {
	font-size: 2rem;
	margin-top: $spacing-small;
	color: $brand-vivid-pink;
}

.currency,
.unit {
	font-size: 1.2em;
	color: $brand-vivid-pink;
}

.plan-description {
	color: $font-color-secondary;
	font-size: 1rem;
}

.features {
	list-style: none;
	padding: 0;
	text-align: left;
	font-size: map-get(map-get($font-styles, medium), size);
	font-weight: map-get(map-get($font-styles, medium), font-weight);
}

.features li {
	margin: calc($spacing-medium - 4px) 0;
}

.bold-text {
	font-size: map-get(map-get($font-styles, medium-bold), size);
	font-weight: map-get(map-get($font-styles, medium-bold), font-weight);
	margin-bottom: $spacing-large 0;
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
	.price-plan {
		// width: 80%;
		flex-direction: column;
	}

	.carousel-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
</style>
